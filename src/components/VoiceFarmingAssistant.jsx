import React, { useState, useEffect, useRef } from 'react';
import { t } from '../locales/index.js';
import {
  isSpeechRecognitionSupported,
  startListening,
  stopListening,
  speakText,
  pauseSpeaking,
  resumeSpeaking,
  stopSpeaking,
  replayLastSpoken,
  isSpeaking,
  isPaused
} from '../services/speechService.js';
import { processFarmerQuery } from '../services/voiceAssistantService.js';

// Safe wrapper helpers that never throw even if browser speech API is absent
const safeStopListening = () => {
  try {
    if (typeof stopListening === 'function') {
      stopListening();
    }
  } catch (err) {
    console.warn('[-] Error stopping speech listening:', err);
  }
};

const safeStopSpeaking = () => {
  try {
    if (typeof stopSpeaking === 'function') {
      stopSpeaking();
    }
  } catch (err) {
    console.warn('[-] Error stopping speech synthesis:', err);
  }
};

export function VoiceFarmingAssistant({
  isOpen,
  onClose,
  currentLang,
  context // { soilResult, farmingDetails, reportData, riskAlerts, user }
}) {
  const [assistantState, setAssistantState] = useState('idle'); // idle | listening | processing | speaking
  const [userQuery, setUserQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [ttsState, setTtsState] = useState({ speaking: false, paused: false });

  const hasRecognition = typeof isSpeechRecognitionSupported === 'function' ? isSpeechRecognitionSupported() : false;
  const wasOpenRef = useRef(false);

  // Clean up speech only when modal was open and now closes (never on initial mount)
  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      safeStopListening();
      safeStopSpeaking();
      setAssistantState('idle');
      setTtsState({ speaking: false, paused: false });
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Clean up when unmounting
  useEffect(() => {
    return () => {
      safeStopListening();
      safeStopSpeaking();
    };
  }, []);

  // Periodic TTS status sync only while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const speaking = typeof isSpeaking === 'function' ? isSpeaking() : false;
        const paused = typeof isPaused === 'function' ? isPaused() : false;
        setTtsState({ speaking, paused });

        if (!speaking && assistantState === 'speaking') {
          setAssistantState('idle');
        }
      } catch (e) {
        // ignore
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, assistantState]);

  if (!isOpen) return null;

  const handleQueryExecution = (queryText) => {
    if (!queryText || !queryText.trim()) return;

    setUserQuery(queryText);
    setAssistantState('processing');
    setErrorMessage('');

    setTimeout(() => {
      try {
        const response = processFarmerQuery(queryText, context || {}, currentLang);
        setAiAnswer(response.text);
        setAssistantState('speaking');

        speakText(response.text, currentLang, {
          onStart: () => {
            setTtsState({ speaking: true, paused: false });
            setAssistantState('speaking');
          },
          onEnd: () => {
            setTtsState({ speaking: false, paused: false });
            setAssistantState('idle');
          },
          onError: () => {
            setTtsState({ speaking: false, paused: false });
            setAssistantState('idle');
          }
        });
      } catch (err) {
        console.error('Error executing query:', err);
        setAssistantState('idle');
      }
    }, 250);
  };

  const handleMicClick = () => {
    if (assistantState === 'listening') {
      safeStopListening();
      setAssistantState('idle');
      return;
    }

    // If currently speaking, stop first
    safeStopSpeaking();
    setErrorMessage('');

    if (!hasRecognition) {
      setErrorMessage(t('errSpeechUnsupported', currentLang));
      return;
    }

    try {
      if (typeof startListening === 'function') {
        startListening({
          lang: currentLang,
          onStart: () => {
            setAssistantState('listening');
          },
          onResult: (transcript) => {
            setAssistantState('processing');
            handleQueryExecution(transcript);
          },
          onError: (err) => {
            setAssistantState('idle');
            const errCode = err?.error || err;
            if (errCode === 'not-allowed') {
              setErrorMessage(t('errMicPermission', currentLang));
            } else {
              setErrorMessage(t('errSpeechUnsupported', currentLang));
            }
          },
          onEnd: () => {
            if (assistantState === 'listening') {
              setAssistantState('idle');
            }
          }
        });
      } else {
        setErrorMessage(t('errSpeechUnsupported', currentLang));
      }
    } catch (err) {
      setAssistantState('idle');
      setErrorMessage(t('errSpeechUnsupported', currentLang));
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;
    const q = textInput.trim();
    setTextInput('');
    handleQueryExecution(q);
  };

  const handlePauseResume = () => {
    if (ttsState.paused) {
      if (typeof resumeSpeaking === 'function') resumeSpeaking();
      setTtsState({ speaking: true, paused: false });
      setAssistantState('speaking');
    } else if (ttsState.speaking) {
      if (typeof pauseSpeaking === 'function') pauseSpeaking();
      setTtsState({ speaking: true, paused: true });
    }
  };

  const handleReplay = () => {
    setAssistantState('speaking');
    if (typeof replayLastSpoken === 'function') {
      replayLastSpoken(currentLang, {
        onStart: () => {
          setTtsState({ speaking: true, paused: false });
          setAssistantState('speaking');
        },
        onEnd: () => {
          setTtsState({ speaking: false, paused: false });
          setAssistantState('idle');
        }
      });
    }
  };

  const handleStopAudio = () => {
    safeStopSpeaking();
    setTtsState({ speaking: false, paused: false });
    setAssistantState('idle');
  };

  // Quick Questions
  const quickQuestions = [
    t('quickQ1', currentLang),
    t('quickQ2', currentLang),
    t('quickQ3', currentLang),
    t('quickQ4', currentLang),
    t('quickQ5', currentLang),
    t('quickQ6', currentLang),
    t('quickQ7', currentLang)
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-[#C8E6C9] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F4FBF4] to-[#EAF7EA] border-b border-[#C8E6C9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center text-xl shadow-md">
              🎙️
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#1B5E20]">
                {t('voiceAssistantTitle', currentLang)}
              </h3>
              <p className="text-xs text-[#1B5E20]/70">
                {t('voiceAssistantSubtitle', currentLang)}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Voice Interactive Trigger */}
          <div className="text-center py-2">
            <button
              type="button"
              onClick={handleMicClick}
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer ${
                assistantState === 'listening'
                  ? 'bg-red-600 ring-8 ring-red-200 animate-pulse text-white'
                  : assistantState === 'speaking'
                  ? 'bg-[#4CAF50] ring-8 ring-[#C8E6C9] text-white'
                  : 'bg-[#4CAF50] hover:bg-[#388E3C] text-white'
              }`}
              aria-label="Toggle Microphone"
            >
              <span className="text-4xl">
                {assistantState === 'listening' ? '🔴' : assistantState === 'speaking' ? '🔊' : '🎙️'}
              </span>
            </button>

            <div className="mt-3">
              <span className="text-sm font-bold text-[#1B5E20]">
                {assistantState === 'listening'
                  ? t('listeningState', currentLang)
                  : assistantState === 'processing'
                  ? t('thinkingState', currentLang)
                  : assistantState === 'speaking'
                  ? t('speakingState', currentLang)
                  : t('tapToSpeak', currentLang)}
              </span>
            </div>

            {/* Error Message if Mic denied / unsupported */}
            {errorMessage && (
              <div className="mt-2 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl p-2.5 max-w-md mx-auto">
                ⚠️ {errorMessage}
              </div>
            )}
          </div>

          {/* User Query & AI Answer Box */}
          {(userQuery || aiAnswer) && (
            <div className="space-y-3 bg-[#F4FBF4] rounded-2xl p-4 sm:p-5 border border-[#C8E6C9]">
              {userQuery && (
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-[#388E3C] block mb-0.5">
                    🗣️ {t('youSaid', currentLang)}:
                  </span>
                  <p className="font-semibold text-gray-800 italic bg-white/80 p-2.5 rounded-xl border border-[#C8E6C9]/60">
                    "{userQuery}"
                  </p>
                </div>
              )}

              {aiAnswer && (
                <div className="text-xs sm:text-sm pt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#1B5E20]">
                      🤖 {t('aiResponse', currentLang)}:
                    </span>

                    {/* Audio Player Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handlePauseResume}
                        className="px-2.5 py-1 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        {ttsState.paused ? `▶ ${t('btnPlayVoice', currentLang)}` : `⏸ ${t('btnPauseVoice', currentLang)}`}
                      </button>

                      <button
                        type="button"
                        onClick={handleReplay}
                        className="px-2.5 py-1 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        🔁 {t('btnReplayVoice', currentLang)}
                      </button>

                      <button
                        type="button"
                        onClick={handleStopAudio}
                        className="px-2.5 py-1 bg-white hover:bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        ⏹ {t('btnStopVoice', currentLang)}
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-900 leading-relaxed bg-white p-3.5 rounded-xl border border-[#C8E6C9] font-medium whitespace-pre-line shadow-xs">
                    {aiAnswer}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quick Question Suggestions */}
          <div>
            <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-2">
              💡 {t('quickQuestionsTitle', currentLang)}
            </span>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQueryExecution(q)}
                  className="px-3 py-1.5 rounded-xl bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] text-xs font-bold transition-all border border-[#C8E6C9] cursor-pointer"
                >
                  🌾 {q}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Fallback */}
          <div className="pt-2 border-t border-[#C8E6C9]/60">
            <span className="text-xs font-medium text-gray-500 block mb-1.5">
              ⌨️ {t('typeInsteadPrompt', currentLang)}
            </span>
            <form onSubmit={handleTextSubmit} className="flex gap-2">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={t('typeQuestionPlaceholder', currentLang)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-[#C8E6C9] bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer"
              >
                {t('btnSendQuestion', currentLang)}
              </button>
            </form>
          </div>

          {/* Advisory Disclaimer */}
          <div className="text-[11px] text-gray-500 text-center font-medium opacity-80 pt-1">
            ⚠️ {t('voiceDisclaimer', currentLang)}
          </div>

        </div>
      </div>
    </div>
  );
}

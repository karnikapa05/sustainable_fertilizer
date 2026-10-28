// Cross-Browser Speech-to-Text (STT) and Text-to-Speech (TTS) Service
// Supports English, Tamil, Hindi, Telugu, Malayalam, and Kannada with Indian BCP-47 tags

export const BCP47_LANG_MAP = {
  en: 'en-IN',
  ta: 'ta-IN',
  hi: 'hi-IN',
  te: 'te-IN',
  ml: 'ml-IN',
  kn: 'kn-IN'
};

let activeRecognition = null;
let currentUtterance = null;
let lastSpokenText = '';
let lastSpokenLang = 'en';

/**
 * Check if browser supports speech recognition
 */
export function isSpeechRecognitionSupported() {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/**
 * Check if browser supports speech synthesis
 */
export function isSpeechSynthesisSupported() {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

/**
 * Starts speech recognition with farmer's selected language
 */
export function startSpeechRecognition({
  langCode = 'en',
  onStart,
  onResult,
  onError,
  onEnd
}) {
  if (!isSpeechRecognitionSupported()) {
    if (onError) onError({ error: 'not-supported' });
    return null;
  }

  stopSpeechRecognition();
  stopSpeaking();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = BCP47_LANG_MAP[langCode] || 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.onstart = () => {
    if (onStart) onStart();
  };

  recognition.onresult = (event) => {
    if (event.results && event.results[0] && event.results[0][0]) {
      const transcript = event.results[0][0].transcript.trim();
      if (onResult) onResult(transcript);
    }
  };

  recognition.onerror = (event) => {
    console.warn('[-] Speech recognition error:', event.error);
    if (onError) onError(event);
  };

  recognition.onend = () => {
    activeRecognition = null;
    if (onEnd) onEnd();
  };

  try {
    recognition.start();
    activeRecognition = recognition;
    return recognition;
  } catch (err) {
    console.error('[-] Could not start recognition:', err);
    if (onError) onError({ error: 'start-failed', details: err });
    return null;
  }
}

/**
 * Stops ongoing speech recognition safely
 */
export function stopSpeechRecognition() {
  if (activeRecognition) {
    try {
      activeRecognition.abort();
    } catch (e) {
      // Safe no-op if recognition already stopped or aborted
    }
    activeRecognition = null;
  }
}

/**
 * Start speech listening session (alias for startSpeechRecognition)
 */
export function startListening(options = {}) {
  const langCode = options.lang || options.langCode || 'en';
  return startSpeechRecognition({
    ...options,
    langCode
  });
}

/**
 * Stop speech listening session (alias for stopSpeechRecognition)
 */
export function stopListening() {
  return stopSpeechRecognition();
}

/**
 * Speaks text in the specified language via Web Speech API
 */
export function speakText(text, langCode = 'en', onStart, onEnd, onError) {
  if (!isSpeechSynthesisSupported()) {
    return false;
  }

  window.speechSynthesis.cancel();

  if (!text || !text.trim()) return false;

  lastSpokenText = text;
  lastSpokenLang = langCode;

  const utterance = new SpeechSynthesisUtterance(text);
  currentUtterance = utterance;

  utterance.lang = BCP47_LANG_MAP[langCode] || 'en-IN';
  utterance.rate = 0.95; // Steady, farmer-friendly pace
  utterance.pitch = 1.0;

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = () => {
    currentUtterance = null;
    onEnd();
  };
  utterance.onerror = (e) => {
    console.warn('[-] Speech synthesis error:', e);
    currentUtterance = null;
    if (onError) onError(e);
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
}

/**
 * Pause speaking
 */
export function pauseSpeaking() {
  if (isSpeechSynthesisSupported() && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
}

/**
 * Resume speaking
 */
export function resumeSpeaking() {
  if (isSpeechSynthesisSupported() && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

/**
 * Stop speaking
 */
export function stopSpeaking() {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

/**
 * Replays the last spoken response
 */
export function replayLastSpoken(onStart, onEnd, onError) {
  if (lastSpokenText) {
    return speakText(lastSpokenText, lastSpokenLang, onStart, onEnd, onError);
  }
  return false;
}

/**
 * Is currently speaking
 */
export function isSpeaking() {
  return isSpeechSynthesisSupported() && window.speechSynthesis.speaking && !window.speechSynthesis.paused;
}

/**
 * Is currently paused
 */
export function isPaused() {
  return isSpeechSynthesisSupported() && window.speechSynthesis.paused;
}

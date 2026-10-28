import React from 'react';
import { t } from '../locales/index.js';

export function VoiceButton({ currentLang, onClick, isListening = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 rounded-full text-white font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer select-none ${
        isListening
          ? 'bg-red-600 animate-pulse ring-4 ring-red-300'
          : 'bg-[#4CAF50] hover:bg-[#388E3C] ring-4 ring-[#C8E6C9]/50'
      }`}
      aria-label={t('floatingVoiceBtn', currentLang)}
    >
      <span className="text-xl animate-bounce">
        {isListening ? '🔴' : '🎙️'}
      </span>
      <span className="text-sm sm:text-base tracking-wide font-extrabold drop-shadow-xs">
        {isListening ? t('listeningState', currentLang) : t('floatingVoiceBtn', currentLang)}
      </span>
    </button>
  );
}

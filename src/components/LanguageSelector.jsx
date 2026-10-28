import React, { useState, useRef, useEffect } from 'react';
import { supportedLanguages } from '../locales/index.js';

export function LanguageSelector({ currentLang, onSelectLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguageObj = supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#1B5E20] bg-white hover:bg-[#EAF7EA] border border-[#C8E6C9] rounded-xl shadow-xs transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base">🌐</span>
        <span className="font-semibold text-[#1B5E20]">{currentLanguageObj.nativeName}</span>
        <svg
          className={`w-4 h-4 text-[#388E3C] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 z-50 py-1.5 border border-[#C8E6C9] divide-y divide-[#EAF7EA] animate-in fade-in duration-150">
          <div className="px-3.5 py-1.5 text-xs font-bold text-[#1B5E20] uppercase tracking-wider bg-[#F4FBF4]">
            Select Language
          </div>
          <div className="py-1">
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#4CAF50] text-white font-bold'
                      : 'text-[#1B5E20] hover:bg-[#EAF7EA]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <div>
                      <div className="text-sm font-semibold leading-snug">{lang.nativeName}</div>
                      <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-[#388E3C]'}`}>
                        {lang.name}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="text-white text-sm font-bold">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { t } from '../locales/index.js';

export function Footer({ currentLang, onNavigate }) {
  return (
    <footer className="bg-white border-t border-[#C8E6C9] py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-black text-[#1B5E20]">AgriSense AI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#1B5E20]/80">
            <button onClick={() => onNavigate('home')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navHome', currentLang)}
            </button>
            <button onClick={() => onNavigate('analyze')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navSoilAnalysis', currentLang)}
            </button>
            <button onClick={() => onNavigate('reports')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navReports', currentLang)}
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAF7EA] flex flex-col sm:flex-row items-center justify-between text-xs text-[#1B5E20]/60 gap-2">
          <p>© 2026 AgriSense AI. All rights reserved.</p>
          <p className="italic">“Upload. Analyze. Recommend. Grow Smarter.”</p>
        </div>
      </div>
    </footer>
  );
}

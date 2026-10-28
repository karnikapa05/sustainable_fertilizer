import React from 'react';
import { t, getLocalizedWelcome } from '../locales/index.js';

export function HeroSection({ currentLang, user, onStartAnalysis, onHowItWorks }) {
  return (
    <div className="space-y-20 py-12 lg:py-16">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#C8E6C9] text-[#1B5E20] text-xs font-bold uppercase tracking-wider">
                <span>🌱</span>
                <span>{t('heroBadgeAI', currentLang)}</span>
              </div>
              {user && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E6C9] text-[#1B5E20] text-xs font-black shadow-2xs">
                  <span>{getLocalizedWelcome(user.name, currentLang)}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B5E20] tracking-tight leading-[1.15]">
              {t('heroTitle', currentLang)}
            </h1>

            <p className="text-lg sm:text-xl text-[#1B5E20]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('heroSubtitle', currentLang)}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartAnalysis}
                className="w-full sm:w-auto px-8 py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-base font-bold rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>📷</span>
                <span>{t('btnAnalyzeSoil', currentLang)}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onHowItWorks}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] text-base font-bold rounded-2xl border border-[#C8E6C9] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ℹ️</span>
                <span>{t('btnHowItWorks', currentLang)}</span>
              </button>
            </div>
          </div>

          {/* Right: Single Clean Agricultural Visual (No messy floating cards) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-white p-3 border border-[#C8E6C9] shadow-lg">
              <div className="relative rounded-2xl overflow-hidden bg-[#EAF7EA] aspect-4/3 flex items-center justify-center">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23eaf7ea'/><circle cx='200' cy='180' r='110' fill='%23c8e6c9' opacity='0.7'/><path d='M80 260 C 140 210, 260 210, 320 260 Z' fill='%2381c784'/><path d='M200 130 Q 180 90 150 80 Q 180 110 200 130 Z' fill='%234caf50'/><path d='M200 130 Q 220 90 250 80 Q 220 110 200 130 Z' fill='%23388e3c'/><line x1='200' y1='130' x2='200' y2='240' stroke='%232e7d32' stroke-width='6' stroke-linecap='round'/></svg>"
                  alt="Agricultural field and plant illustration"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle calm scan beam */}
                <div className="absolute inset-x-0 h-1 bg-[#4CAF50] opacity-80 shadow-[0_0_10px_#4CAF50] animate-soft-scan"></div>
                
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-[#C8E6C9] text-center">
                  <span className="text-xs font-bold text-[#1B5E20]">
                    AI Image-to-Recommendation Engine
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Simple Feature Cards Below Hero (Section 7) */}
      <section id="features-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              🤖
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat1Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat1Desc', currentLang)}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              🧪
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat2Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat2Desc', currentLang)}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              💰
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat3Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat3Desc', currentLang)}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

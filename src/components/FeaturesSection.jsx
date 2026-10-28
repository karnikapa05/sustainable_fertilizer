import React from 'react';
import { t } from '../locales/index.js';

export function FeaturesSection({ currentLang, onStartAnalysis }) {
  const features = [
    {
      id: 'ai-soil',
      icon: '🤖',
      titleKey: 'feat1Title',
      descKey: 'feat1Desc',
      badge: 'Computer Vision',
      bgGradient: 'from-emerald-500/10 to-green-500/5'
    },
    {
      id: 'crop-rec',
      icon: '🌾',
      titleKey: 'feat2Title',
      descKey: 'feat2Desc',
      badge: 'High Yield',
      bgGradient: 'from-amber-500/10 to-yellow-500/5'
    },
    {
      id: 'fert-intel',
      icon: '🧪',
      titleKey: 'feat3Title',
      descKey: 'feat3Desc',
      badge: 'Precision Dose',
      bgGradient: 'from-blue-500/10 to-cyan-500/5'
    },
    {
      id: 'cost-pred',
      icon: '💰',
      titleKey: 'feat4Title',
      descKey: 'feat4Desc',
      badge: 'DBT Subsidies',
      bgGradient: 'from-green-500/10 to-emerald-500/5'
    },
    {
      id: 'multilingual',
      icon: '🌐',
      titleKey: 'feat5Title',
      descKey: 'feat5Desc',
      badge: '5 Languages',
      bgGradient: 'from-purple-500/10 to-indigo-500/5'
    },
    {
      id: 'cloud-rep',
      icon: '☁️',
      titleKey: 'feat6Title',
      descKey: 'feat6Desc',
      badge: 'Always Accessible',
      bgGradient: 'from-teal-500/10 to-emerald-500/5'
    }
  ];

  return (
    <section id="features-section" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider border border-emerald-200">
            Platform Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 mt-3 tracking-tight font-serif">
            {t('featTitle', currentLang)}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            {t('featSubtitle', currentLang)}
          </p>
        </div>

        {/* 6 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-emerald-950/5 border border-emerald-100 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-xs">
                    {feat.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100/70 text-emerald-800">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {t(feat.titleKey, currentLang)}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(feat.descKey, currentLang)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl bg-emerald-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              Ready to Optimize Your Harvest & Soil Health?
            </h3>
            <p className="text-emerald-200 text-sm sm:text-base">
              Join thousands of farmers making data-driven choices with AgriSense AI.
            </p>
            <div className="pt-2">
              <button
                onClick={onStartAnalysis}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-base font-black rounded-2xl shadow-lg transform hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>📷</span>
                <span>Analyze Your Soil Free</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

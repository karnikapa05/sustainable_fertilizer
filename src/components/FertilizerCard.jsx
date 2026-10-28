import React from 'react';
import { t, getLocalizedFertilizerName, getLocalizedFrequency } from '../locales/index.js';

export function FertilizerCard({ currentLang, fertilizers, landArea }) {
  if (!fertilizers || fertilizers.length === 0) return null;

  // Primary AI-recommended fertilizer
  const primaryFert = fertilizers[0];
  const localizedFertName = getLocalizedFertilizerName(primaryFert.id, currentLang);
  const localizedFrequency = getLocalizedFrequency(primaryFert.id, primaryFert.frequency, currentLang);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('fertHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('fertSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Primary Spacious Recommendation Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAF7EA] pb-6">
          <div>
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertRecommended', currentLang)}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1B5E20] mt-1">
              {localizedFertName}
            </h3>
          </div>

          <div className="self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9]">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              <span>{t('levelHighly', currentLang)}</span>
            </span>
          </div>
        </div>

        {/* Quantity and Application */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertQuantity', currentLang)}
            </span>
            <span className="text-xl font-black text-[#1B5E20] mt-1 block">
              {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)}
            </span>
            <span className="text-xs text-[#1B5E20]/70 mt-1 block">
              {t('totalForPlot', currentLang)}: {primaryFert.totalQuantityKg} {t('kg', currentLang)}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertApplication', currentLang)}
            </span>
            <p className="text-xs text-[#1B5E20] font-medium leading-relaxed mt-1">
              {localizedFrequency}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

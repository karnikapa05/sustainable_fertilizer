import React, { useState } from 'react';
import { t, getLocalizedCropName, getLocalizedSeason, getLocalizedCropDetails } from '../locales/index.js';

export function CropCard({ currentLang, crops }) {
  const [selectedCropModal, setSelectedCropModal] = useState(null);

  if (!crops || crops.length === 0) return null;

  // Show top recommendations
  const topCrops = crops.slice(0, 4);

  return (
    <div id="crops-section" className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('cropHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('cropSubtitle', currentLang)}
        </p>
      </div>

      {/* Clean Horizontal Cards */}
      <div className="space-y-3">
        {topCrops.map((crop) => {
          const localizedName = getLocalizedCropName(crop.id, crop.name, currentLang);
          const localizedSeason = getLocalizedSeason(crop.season, currentLang);

          return (
            <div
              key={crop.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8E6C9] shadow-xs flex items-center justify-between gap-4 hover:border-[#4CAF50] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#EAF7EA] flex items-center justify-center text-2xl">
                  {crop.icon || '🌾'}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1B5E20]">
                    {localizedName}
                  </h3>
                  <span className="text-xs text-[#1B5E20]/70">
                    {localizedSeason}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl bg-[#EAF7EA] text-[#1B5E20] font-bold text-xs sm:text-sm border border-[#C8E6C9]">
                  {crop.suitability}% {t('suitabilityScore', currentLang)}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCropModal({ ...crop, localizedName, localizedSeason })}
                  className="px-3.5 py-1.5 rounded-xl border border-[#C8E6C9] bg-white hover:bg-[#EAF7EA] text-[#1B5E20] text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t('btnViewDetails', currentLang)}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Modal for Crop Details */}
      {selectedCropModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#C8E6C9] shadow-xl space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedCropModal.icon || '🌾'}</span>
                <div>
                  <h4 className="text-xl font-bold text-[#1B5E20]">
                    {selectedCropModal.localizedName}
                  </h4>
                  <span className="text-xs text-[#4CAF50] font-semibold">
                    {selectedCropModal.suitability}% {t('suitabilityScore', currentLang)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCropModal(null)}
                className="text-gray-400 hover:text-gray-700 p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-[#1B5E20] p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <div>
                <span className="font-bold block text-xs">{t('plantSpacing', currentLang)}:</span>
                <span className="text-xs">{selectedCropModal.plantSpacing || '20 cm × 15 cm'}</span>
              </div>
              <div>
                <span className="font-bold block text-xs">{t('harvestDuration', currentLang)}:</span>
                <span className="text-xs">{selectedCropModal.harvestDuration || '100 - 120 Days'}</span>
              </div>
              <div>
                <span className="font-bold block text-xs">{t('soilSynergy', currentLang)}:</span>
                <span className="text-xs leading-relaxed">
                  {getLocalizedCropDetails(selectedCropModal.id, 'soilSynergy', selectedCropModal.soilSynergy, currentLang)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCropModal(null)}
              className="w-full py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {t('modalClose', currentLang)}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

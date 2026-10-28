import React from 'react';
import { t, getLocalizedSoilName, getLocalizedCondition } from '../locales/index.js';
import { RiskAlertsPanel } from './RiskAlertsPanel.jsx';

export function SoilResultCard({ currentLang, soilResult, soilImage, riskAlerts = [], onSwitchCrop, onTryAgain }) {
  if (!soilResult) return null;

  const confidence = soilResult.confidence_percentage || soilResult.confidence || 92;
  const localizedSoilName = getLocalizedSoilName(soilResult.soil_key || soilResult.id || 'alluvial', currentLang);
  const localizedCondition = getLocalizedCondition(soilResult.condition || 'Good', currentLang);

  const visibleSoilPct = soilResult.visible_soil_percentage || (soilResult.has_plants ? 75 : 98);
  const hasPlants = Boolean(soilResult.has_plants);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('resultHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('resultSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Clean Combined Card: Soil Image on Left, Diagnostics on Right */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Large Soil Image Preview */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-900 border border-[#C8E6C9] aspect-4/3 max-h-64">
            {soilImage ? (
              <img
                src={soilImage}
                alt={localizedSoilName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                🌱
              </div>
            )}

            {/* Plant Detection Tag Overlay */}
            {hasPlants && (
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-xs text-[11px] font-bold text-white flex items-center gap-1.5">
                <span>🌱</span>
                <span className="truncate">{t('plantsDetected', currentLang)} ({t('foliageFiltered', currentLang)})</span>
              </div>
            )}
          </div>

          {/* Diagnostics beside the image */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Detected Soil Type (Pure Localized) */}
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('detectedSoilType', currentLang)}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9]">
                  {visibleSoilPct}% {t('visibleSoilArea', currentLang)}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1B5E20] mt-1">
                {localizedSoilName}
              </h3>
            </div>

            {/* Soil Condition & AI Confidence */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Condition */}
              <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9]">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('soilCondition', currentLang)}
                </span>
                <span className="text-lg font-bold text-[#1B5E20] mt-1 block">
                  ● {localizedCondition}
                </span>
              </div>

              {/* Confidence Meter */}
              <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9]">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('aiConfidence', currentLang)}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-black text-[#1B5E20]">
                    {confidence}%
                  </span>
                  <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4CAF50] rounded-full"
                      style={{ width: `${confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Dynamic Risk Alerts on Analysis Result Page */}
      {riskAlerts && riskAlerts.length > 0 && (
        <div className="mt-8">
          <RiskAlertsPanel
            alerts={riskAlerts}
            currentLang={currentLang}
            onSwitchCrop={onSwitchCrop}
            onTryAgain={onTryAgain}
          />
        </div>
      )}
    </div>
  );
}


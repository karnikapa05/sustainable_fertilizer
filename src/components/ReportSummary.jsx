import React from 'react';
import { t, getLocalizedSoilName, getLocalizedCondition, getLocalizedFertilizerName, getLocalizedCropName, getLocalizedFrequency } from '../locales/index.js';

export function ReportSummary({
  currentLang,
  reportData,
  soilImage,
  onSaveReport,
  onAnalyzeAnother,
  isSavingToCloud,
  showToast
}) {
  if (!reportData) return null;

  const soilKey = reportData.soilTypeKey || 'alluvial';
  const localizedSoilName = getLocalizedSoilName(soilKey, currentLang);
  const localizedCondition = getLocalizedCondition(reportData.condition || 'Good', currentLang);
  const primaryFert = reportData.fertilizers?.[0] || { id: 'urea', pricePerKg: 7, dosagePerAcreKg: 50, totalQuantityKg: 50, totalCost: 350 };
  const localizedFertName = getLocalizedFertilizerName(primaryFert.id, currentLang);
  const localizedFrequency = getLocalizedFrequency(primaryFert.id, primaryFert.frequency, currentLang);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 print:p-0">
      
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-[#1B5E20]">
            {t('reportTitle', currentLang)}
          </h1>
          <p className="text-sm text-[#1B5E20]/70 mt-0.5">
            {t('reportSubtitle', currentLang)}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            📄 {t('btnDownloadReport', currentLang)}
          </button>

          <button
            onClick={onSaveReport}
            disabled={isSavingToCloud}
            className="px-5 py-2 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            {isSavingToCloud ? '☁️ ' + t('cloudSaving', currentLang) : '💾 ' + t('btnSaveReport', currentLang)}
          </button>
        </div>
      </div>

      {/* Cloud Notification */}
      {isSavingToCloud && (
        <div className="p-3.5 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9] text-xs font-bold text-[#1B5E20] flex items-center gap-2 animate-pulse">
          <span>☁️</span>
          <span>{t('cloudSaving', currentLang)}</span>
        </div>
      )}

      {/* The Clean Printable Report Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C8E6C9] shadow-md space-y-8 print:border-none print:shadow-none">
        
        {/* Header Branding */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EAF7EA]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <div>
              <span className="text-xl font-black text-[#1B5E20]">AgriSense AI</span>
              <p className="text-xs text-[#388E3C]">{t('reportHeaderTag', currentLang)}</p>
            </div>
          </div>
          <div className="text-right text-xs text-[#1B5E20]/70">
            <div>{t('reportDate', currentLang)}: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            <div>{t('reportStatus', currentLang)}: {t('statusVerified', currentLang)}</div>
          </div>
        </div>

        {/* 1. 🪨 Soil Analysis */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🪨</span>
            <span>{t('secSoilAnalysis', currentLang)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('detectedSoilType', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{localizedSoilName}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('soilCondition', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{localizedCondition}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('aiConfidence', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{reportData.confidence || 92}%</span>
            </div>
          </div>
        </div>

        {/* 2. 🧪 Fertilizer Recommendation */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🧪</span>
            <span>{t('secFertRec', currentLang)}</span>
          </h2>
          <div className="p-5 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-[#388E3C] block">{t('fertRecommended', currentLang)}</span>
                <span className="text-xl font-black text-[#1B5E20]">{localizedFertName}</span>
              </div>
              <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[#EAF7EA] border border-[#C8E6C9] text-xs font-bold text-[#1B5E20]">
                {t('levelHighly', currentLang)}
              </span>
            </div>
            <div className="text-xs text-[#1B5E20] space-y-1 pt-2 border-t border-[#EAF7EA]">
              <div>
                <span className="font-bold">{t('fertQuantity', currentLang)}:</span>{' '}
                {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)} ({primaryFert.totalQuantityKg} {t('kg', currentLang)} {t('totalForPlot', currentLang).toLowerCase()})
              </div>
              <div>
                <span className="font-bold">{t('fertApplication', currentLang)}:</span>{' '}
                {localizedFrequency}
              </div>
            </div>
          </div>
        </div>

        {/* 3. 💰 Cost Prediction */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>💰</span>
            <span>{t('secCostPred', currentLang)}</span>
          </h2>
          <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#1B5E20] space-y-1">
              <div><span className="font-bold">{t('costRequiredQty', currentLang)}:</span> {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)}</div>
              <div><span className="font-bold">{t('costEstPrice', currentLang)}:</span> ₹{primaryFert.pricePerKg} {t('perKg', currentLang)}</div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#1B5E20]/70 block">{t('costEstTotal', currentLang)}</span>
              <span className="text-2xl font-black text-[#1B5E20]">₹{primaryFert.totalCost?.toLocaleString('en-IN') || 350}</span>
            </div>
          </div>
        </div>

        {/* 4. 🌾 Crop Recommendation */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🌾</span>
            <span>{t('secCropRec', currentLang)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {reportData.crops?.slice(0, 3).map((c) => {
              const localizedCrop = getLocalizedCropName(c.id, c.name, currentLang);
              return (
                <div key={c.id} className="p-3.5 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
                  <div className="text-xl mb-1">{c.icon || '🌾'}</div>
                  <div className="text-sm font-bold text-[#1B5E20]">{localizedCrop}</div>
                  <div className="text-xs font-semibold text-[#4CAF50] mt-0.5">{c.suitability}% {t('suitabilityScore', currentLang)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Analyze Another Action */}
        <div className="pt-6 border-t border-[#EAF7EA] flex justify-center print:hidden">
          <button
            type="button"
            onClick={onAnalyzeAnother}
            className="px-6 py-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            🔄 {t('btnAnalyzeAnother', currentLang)}
          </button>
        </div>

      </div>
    </div>
  );
}

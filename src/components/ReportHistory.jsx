import React from 'react';
import { t, getLocalizedSoilName, getLocalizedFertilizerName, getLocalizedCropName } from '../locales/index.js';

export function ReportHistory({ currentLang, reports, onViewReport, onStartNew }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#1B5E20]">
            {t('historyTitle', currentLang)}
          </h2>
          <p className="text-sm text-[#1B5E20]/70 mt-0.5">
            {t('historySubtitle', currentLang)}
          </p>
        </div>

        <button
          onClick={onStartNew}
          className="px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer self-start sm:self-center"
        >
          📷 {t('btnUploadSoilImage', currentLang)}
        </button>
      </div>

      {/* Reports List */}
      {(!reports || reports.length === 0) ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#C8E6C9] shadow-xs">
          <span className="text-4xl block mb-2">📁</span>
          <h3 className="text-base font-bold text-[#1B5E20]">
            {t('noReportsFound', currentLang)}
          </h3>
          <button
            onClick={onStartNew}
            className="mt-4 px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            {t('btnUploadSoilImage', currentLang)}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((r) => {
            const dateStr = new Date(r.date || Date.now()).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });

            const soilName = getLocalizedSoilName(r.soilTypeKey || 'loamy', currentLang);
            const fertName = getLocalizedFertilizerName(r.fertilizerId || 'urea', currentLang);
            const cropName = getLocalizedCropName(r.cropId || 'rice', r.crop || 'Rice', currentLang);

            return (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-5 border border-[#C8E6C9] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#4CAF50] transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#388E3C] font-semibold">{dateStr}</span>
                    <span className="text-xs text-[#C8E6C9]">•</span>
                    <span className="text-xs text-[#1B5E20]/60 font-mono">{r.id}</span>
                  </div>

                  <div className="text-lg font-bold text-[#1B5E20]">
                    🪨 {soilName}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#1B5E20]/80">
                    <span>🧪 {fertName}</span>
                    <span>•</span>
                    <span>🌾 {cropName}</span>
                    <span>•</span>
                    <span className="font-bold text-[#1B5E20]">₹{r.totalCost?.toLocaleString('en-IN') || 350}</span>
                  </div>
                </div>

                <button
                  onClick={() => onViewReport(r)}
                  className="px-4 py-2 bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] font-bold text-xs rounded-xl border border-[#C8E6C9] transition-colors cursor-pointer self-start sm:self-center"
                >
                  {t('btnViewReport', currentLang)} →
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

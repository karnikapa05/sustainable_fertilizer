import React from 'react';
import { t, getLocalizedCropName, getLocalizedSoilName } from '../locales/index.js';

export function RiskAlertCard({ alert, currentLang, onSwitchCrop, onTryAgain }) {
  if (!alert) return null;

  const severity = alert.severity || 'warning';
  const isHighRisk = severity === 'high_risk';
  const isWarning = severity === 'warning';
  const isInfo = severity === 'info';

  // Severity styles
  const containerClasses = isHighRisk
    ? 'bg-red-50/80 border-red-200 text-red-950'
    : isWarning
    ? 'bg-amber-50/80 border-amber-200 text-amber-950'
    : 'bg-emerald-50/80 border-emerald-200 text-emerald-950';

  const badgeClasses = isHighRisk
    ? 'bg-red-100 text-red-800 border-red-300'
    : isWarning
    ? 'bg-amber-100 text-amber-800 border-amber-300'
    : 'bg-emerald-100 text-emerald-800 border-emerald-300';

  const badgeText = isHighRisk
    ? `🔴 ${t('badgeHighRisk', currentLang)}`
    : isWarning
    ? `🟡 ${t('badgeWarning', currentLang)}`
    : `🟢 ${t('badgeInfo', currentLang)}`;

  const title = alert.titleKey ? t(alert.titleKey, currentLang) : (alert.title || '');
  const message = alert.msgKey ? t(alert.msgKey, currentLang) : (alert.message || '');
  const recommendation = alert.recKey ? t(alert.recKey, currentLang) : (alert.recommendation || '');

  return (
    <div className={`rounded-2xl p-5 sm:p-6 border transition-all ${containerClasses}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">
            {isHighRisk ? '🚨' : isWarning ? '⚠️' : '✅'}
          </span>
          <h4 className="text-lg font-bold">
            {title}
          </h4>
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeClasses}`}>
          {badgeText}
        </span>
      </div>

      <p className="text-sm font-medium leading-relaxed mb-3">
        {message}
      </p>

      {/* Unsuitable Crop Details Table / Grid */}
      {alert.type === 'UNSUITABLE_CROP' && alert.details && (
        <div className="bg-white/80 rounded-xl p-4 border border-amber-200 mb-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-amber-50/50">
              <span className="text-amber-800/80 font-medium block">
                {t('selectedCropLabel', currentLang)}
              </span>
              <span className="font-bold text-amber-950 text-sm">
                {getLocalizedCropName(alert.details.selectedCrop, currentLang)}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/50">
              <span className="text-amber-800/80 font-medium block">
                {t('detectedSoilLabel', currentLang)}
              </span>
              <span className="font-bold text-amber-950 text-sm">
                {getLocalizedSoilName(alert.details.detectedSoil, currentLang)}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/50 col-span-2 sm:col-span-1">
              <span className="text-amber-800/80 font-medium block">
                {t('suitabilityScoreLabel', currentLang)}
              </span>
              <span className="font-black text-red-600 text-sm">
                {alert.details.suitabilityScore}%
              </span>
            </div>
          </div>

          {/* Suggested High-Yield Alternatives */}
          {alert.details.suggestedAlternatives && alert.details.suggestedAlternatives.length > 0 && (
            <div>
              <span className="text-xs font-bold text-amber-900 block mb-2">
                {t('suggestedAlternativesLabel', currentLang)}:
              </span>
              <div className="flex flex-wrap gap-2">
                {alert.details.suggestedAlternatives.map((alt) => (
                  <span
                    key={alt.cropKey}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
                  >
                    <span>🌾 {getLocalizedCropName(alt.cropKey, currentLang)}</span>
                    <span className="text-emerald-600 font-semibold">({alt.score}%)</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {onSwitchCrop && (
            <button
              type="button"
              onClick={onSwitchCrop}
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
            >
              {t('btnSwitchCrop', currentLang)} →
            </button>
          )}
        </div>
      )}

      {/* Action Recommendation Box */}
      {recommendation && (
        <div className="p-3 rounded-xl bg-white/60 border border-current/10 text-xs font-semibold leading-relaxed flex items-start gap-2">
          <span className="mt-0.5">💡</span>
          <span>{recommendation}</span>
        </div>
      )}

      {/* Action Button for Low Confidence / Blur */}
      {(alert.type === 'LOW_CONFIDENCE' || alert.type === 'IMAGE_QUALITY') && onTryAgain && (
        <div className="mt-3">
          <button
            type="button"
            onClick={onTryAgain}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            {t('btnTryAgain', currentLang)}
          </button>
        </div>
      )}

      {/* Mandatory Lab Soil Test Disclaimer */}
      {alert.disclaimer && (
        <div className="mt-3 pt-2 border-t border-current/10 text-[11px] font-medium opacity-80 flex items-center gap-1.5">
          <span>🧪</span>
          <span>{t('alertSoilTestDisclaimer', currentLang)}</span>
        </div>
      )}
    </div>
  );
}

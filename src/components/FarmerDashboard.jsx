import React from 'react';
import { t, getLocalizedWelcome } from '../locales/index.js';
import { RiskAlertCard } from './RiskAlertCard.jsx';

export function FarmerDashboard({
  currentLang,
  user,
  onStartAnalysis,
  activeRiskAlerts = [],
  onSwitchCrop,
  onTryAgain
}) {
  const highRiskCount = activeRiskAlerts.filter(a => a.severity === 'high_risk').length;
  const warningCount = activeRiskAlerts.filter(a => a.severity === 'warning').length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {/* Clean Personalized Welcome Banner */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-[#1B5E20]">
          {getLocalizedWelcome(user?.name, currentLang)}
        </h1>
        <p className="text-base text-[#1B5E20]/80 max-w-lg mx-auto">
          {t('dashboardSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Large Primary Card: "Start Soil Analysis" */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C8E6C9] shadow-sm text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-4xl mx-auto">
          📷
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-black text-[#1B5E20]">
            {t('startAnalysisTitle', currentLang)}
          </h2>
          <p className="text-sm text-[#1B5E20]/70 max-w-md mx-auto">
            {t('cardStartAnalysisDesc', currentLang)}
          </p>
        </div>

        <button
          onClick={onStartAnalysis}
          className="px-8 py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-base font-bold rounded-2xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>{t('btnUploadSoilImage', currentLang)}</span>
        </button>
      </div>

      {/* Dedicated Dashboard Risk Alerts Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl">
              🚨
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1B5E20]">
                {t('cardRiskAlertsTitle', currentLang)}
              </h3>
              <p className="text-xs sm:text-sm text-[#1B5E20]/70">
                {t('cardRiskAlertsDesc', currentLang)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {highRiskCount > 0 ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300">
                🔴 {highRiskCount} {t('badgeHighRisk', currentLang)}
              </span>
            ) : warningCount > 0 ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                🟡 {warningCount} {t('badgeWarning', currentLang)}
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                🟢 {t('badgeInfo', currentLang)}
              </span>
            )}
          </div>
        </div>

        {/* Display Alert Cards or Clean All Clear */}
        {activeRiskAlerts.length > 0 ? (
          <div className="space-y-3 pt-2">
            {activeRiskAlerts.map((alert) => (
              <RiskAlertCard
                key={alert.id}
                alert={alert}
                currentLang={currentLang}
                onSwitchCrop={onSwitchCrop}
                onTryAgain={onTryAgain}
              />
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
            <span className="text-xl">🟢</span>
            <span>
              {t('alertNoRiskTitle', currentLang)} — {t('alertNoRiskRec', currentLang)}
            </span>
          </div>
        )}
      </div>

    </div>
  );
}


import React, { useState } from 'react';
import { t } from '../locales/index.js';
import { RiskAlertCard } from './RiskAlertCard.jsx';

export function RiskAlertsPanel({ alerts = [], currentLang, onSwitchCrop, onTryAgain, isCollapsible = false }) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!alerts || alerts.length === 0) {
    return null;
  }

  const highRiskCount = alerts.filter(a => a.severity === 'high_risk').length;
  const warningCount = alerts.filter(a => a.severity === 'warning').length;
  const isAllClear = alerts.every(a => a.severity === 'info');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm space-y-6">
      {/* Header with Title, Count Badges, and optional Collapse button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚨</span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1B5E20]">
              {t('riskAlertsTitle', currentLang)}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#1B5E20]/70 mt-1">
            {t('riskAlertsSubtitle', currentLang)}
          </p>
        </div>

        {/* Severity Count Badges */}
        <div className="flex items-center gap-2">
          {highRiskCount > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300">
              🔴 {highRiskCount} {t('badgeHighRisk', currentLang)}
            </span>
          )}
          {warningCount > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
              🟡 {warningCount} {t('badgeWarning', currentLang)}
            </span>
          )}
          {isAllClear && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              🟢 {t('badgeInfo', currentLang)}
            </span>
          )}

          {isCollapsible && (
            <button
              type="button"
              onClick={() => setIsExpanded(prev => !prev)}
              className="p-1.5 rounded-lg hover:bg-[#EAF7EA] text-[#1B5E20] text-sm font-bold transition-colors cursor-pointer"
              aria-label="Toggle Risk Alerts"
            >
              {isExpanded ? '▲' : '▼'}
            </button>
          )}
        </div>
      </div>

      {/* Alert Cards Container */}
      {isExpanded && (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <RiskAlertCard
              key={alert.id}
              alert={alert}
              currentLang={currentLang}
              onSwitchCrop={onSwitchCrop}
              onTryAgain={onTryAgain}
            />
          ))}
        </div>
      )}
    </div>
  );
}

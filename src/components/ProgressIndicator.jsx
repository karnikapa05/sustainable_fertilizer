import React, { useEffect, useState } from 'react';
import { t } from '../locales/index.js';

export function ProgressIndicator({ currentLang, onComplete, soilImage }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { key: 'step1', label: t('step1', currentLang) },
    { key: 'step2', label: t('step2', currentLang) },
    { key: 'step3', label: t('step3', currentLang) },
    { key: 'step4', label: t('step4', currentLang) },
    { key: 'step5', label: t('step5', currentLang) },
    { key: 'step6', label: t('step6', currentLang) },
  ];

  useEffect(() => {
    const stepDurations = [400, 450, 600, 500, 450, 400];
    let timeoutId;

    function advance(index) {
      if (index < steps.length) {
        setCurrentStepIndex(index);
        timeoutId = setTimeout(() => {
          advance(index + 1);
        }, stepDurations[index] || 450);
      } else {
        timeoutId = setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    }

    advance(0);
    return () => clearTimeout(timeoutId);
  }, []);

  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / steps.length) * 100));

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C8E6C9] shadow-md text-center space-y-8">
        
        {/* Soil Image Scanning Thumbnail */}
        {soilImage && (
          <div className="relative mx-auto w-48 sm:w-56 aspect-4/3 rounded-2xl overflow-hidden border border-[#C8E6C9] bg-[#EAF7EA]">
            <img
              src={soilImage}
              alt="Analyzing Soil"
              className="w-full h-full object-cover"
            />
            {/* Soft Green Scanning Laser Animation */}
            <div className="absolute inset-x-0 h-1 bg-[#4CAF50] shadow-[0_0_12px_#4CAF50] animate-soft-scan"></div>
          </div>
        )}

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
            {t('processingTitle', currentLang)}
          </h2>
          <p className="text-sm text-[#1B5E20]/70">
            {t('processingSubtitle', currentLang)}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-[#EAF7EA] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4CAF50] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* 6 Clear Steps */}
        <div className="max-w-md mx-auto space-y-2.5 text-left text-sm">
          {steps.map((step, idx) => {
            const isFinished = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={step.key}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  isFinished
                    ? 'bg-[#EAF7EA] border-[#C8E6C9] text-[#1B5E20] font-semibold'
                    : isCurrent
                    ? 'bg-[#F4FBF4] border-[#4CAF50] text-[#1B5E20] font-bold shadow-xs'
                    : 'bg-white border-transparent text-[#1B5E20]/40'
                }`}
              >
                <span>{step.label}</span>
                <span>
                  {isFinished && <span className="text-[#4CAF50] font-bold">✓</span>}
                  {isCurrent && <span className="text-[#388E3C] animate-pulse">⏳</span>}
                  {!isFinished && !isCurrent && <span className="text-gray-300">○</span>}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { t } from '../locales/index.js';

export function CostCard({ currentLang, fertilizers, landArea, onLandAreaChange }) {
  if (!fertilizers || fertilizers.length === 0) return null;

  const primaryFert = fertilizers[0];
  const qtyPerAcre = primaryFert.dosagePerAcreKg || 50;
  const pricePerKg = primaryFert.pricePerKg || 7;
  const costPerAcre = qtyPerAcre * pricePerKg;

  const [currentArea, setCurrentArea] = useState(landArea || 1);

  const handleAreaChange = (newArea) => {
    const parsed = parseFloat(newArea) || 1;
    setCurrentArea(parsed);
    if (onLandAreaChange) {
      onLandAreaChange(parsed);
    }
  };

  const totalCalculatedCost = Math.round(costPerAcre * currentArea);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('costHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('costSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Clean Visual Calculation Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm space-y-6">
        
        {/* Simple Visual Equation */}
        <div className="p-6 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center text-center">
            
            {/* Required Quantity */}
            <div className="p-3 rounded-xl bg-white border border-[#C8E6C9]">
              <span className="text-[11px] font-bold text-[#388E3C] uppercase block">
                {t('costRequiredQty', currentLang)}
              </span>
              <span className="text-xl font-black text-[#1B5E20] mt-1 block">
                {qtyPerAcre} {t('kg', currentLang)}
              </span>
            </div>

            {/* Multiplication Symbol */}
            <div className="text-2xl font-black text-[#388E3C] hidden sm:block">
              ×
            </div>

            {/* Estimated Price */}
            <div className="p-3 rounded-xl bg-white border border-[#C8E6C9]">
              <span className="text-[11px] font-bold text-[#388E3C] uppercase block">
                {t('costEstPrice', currentLang)}
              </span>
              <span className="text-xl font-black text-[#1B5E20] mt-1 block">
                ₹{pricePerKg} {t('perKg', currentLang)}
              </span>
            </div>

            {/* Equals Symbol */}
            <div className="text-2xl font-black text-[#388E3C] hidden sm:block">
              =
            </div>

            {/* Cost Per Acre */}
            <div className="p-3 rounded-xl bg-[#EAF7EA] border border-[#C8E6C9]">
              <span className="text-[11px] font-bold text-[#1B5E20] uppercase block">
                {t('costPerAcre', currentLang)}
              </span>
              <span className="text-xl font-black text-[#1B5E20] mt-1 block">
                ₹{costPerAcre} {t('perAcre', currentLang)}
              </span>
            </div>

          </div>
        </div>

        {/* Land Area Multiplier Input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9]">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#1B5E20]">
              {t('labelLandArea', currentLang)}:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0.25"
                max="500"
                step="0.25"
                value={currentArea}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="w-24 px-3 py-1.5 rounded-xl bg-white border border-[#C8E6C9] font-black text-[#1B5E20] text-center focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <span className="text-sm font-bold text-[#1B5E20]">{t('unitAcres', currentLang)}</span>
            </div>
          </div>

          {/* Final Multiplied Calculation */}
          <div className="text-left sm:text-right">
            <span className="text-xs text-[#1B5E20]/80 block">
              ₹{costPerAcre} × {currentArea} {t('acresEquals', currentLang)}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
              ₹{totalCalculatedCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs font-bold text-[#388E3C] block mt-0.5">
              {t('costEstTotal', currentLang)}
            </span>
          </div>
        </div>

        {/* Disclaimer Note */}
        <p className="text-xs text-[#1B5E20]/70 italic">
          {t('costNote', currentLang)}
        </p>

      </div>
    </div>
  );
}

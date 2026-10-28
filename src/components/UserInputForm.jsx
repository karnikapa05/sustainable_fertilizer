import React, { useState } from 'react';
import { t, getLocalizedCropName, getLocalizedSeason, getLocalizedState, getLocalizedIrrigation } from '../locales/index.js';

export function UserInputForm({ currentLang, initialValues, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    intendedCrop: initialValues?.intendedCrop || 'rice',
    landArea: initialValues?.landArea || '2',
    unit: initialValues?.unit || 'Acres',
    location: initialValues?.location || 'Tamil Nadu',
    season: initialValues?.season || 'kharif',
    irrigation: initialValues?.irrigation || 'canal'
  });

  const cropsList = [
    { id: 'rice', defaultName: 'Rice (Paddy)' },
    { id: 'wheat', defaultName: 'Wheat' },
    { id: 'cotton', defaultName: 'Cotton' },
    { id: 'maize', defaultName: 'Maize (Corn)' },
    { id: 'sugarcane', defaultName: 'Sugarcane' },
    { id: 'groundnut', defaultName: 'Groundnut (Peanut)' },
    { id: 'soybean', defaultName: 'Soybean' },
    { id: 'potato', defaultName: 'Potato' },
    { id: 'tomato', defaultName: 'Tomato & Vegetables' },
    { id: 'ragi', defaultName: 'Finger Millet (Ragi)' },
    { id: 'gram', defaultName: 'Chickpea (Gram)' }
  ];

  const statesList = [
    'Tamil Nadu',
    'Karnataka',
    'Andhra Pradesh',
    'Telangana',
    'Kerala',
    'Maharashtra',
    'Punjab',
    'Haryana',
    'Uttar Pradesh',
    'Madhya Pradesh',
    'Gujarat',
    'Rajasthan'
  ];

  const seasonsList = [
    { id: 'kharif', key: 'kharif' },
    { id: 'rabi', key: 'rabi' },
    { id: 'zaid', key: 'zaid' }
  ];

  const irrigationList = [
    { id: 'drip', key: 'drip' },
    { id: 'sprinkler', key: 'sprinkler' },
    { id: 'canal', key: 'canal' },
    { id: 'borewell', key: 'borewell' },
    { id: 'rainfed', key: 'rainfed' }
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl p-6 border border-[#C8E6C9] shadow-xs">
        
        {/* Toggle Header */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
              <span>🌾</span>
              <span>{t('optionalHeading', currentLang)}</span>
            </h3>
            <p className="text-xs text-[#1B5E20]/70 mt-0.5">
              {t('optionalSubtitle', currentLang)}
            </p>
          </div>

          <span className="p-2 rounded-xl bg-[#EAF7EA] text-[#1B5E20] text-xs font-bold">
            {isOpen ? t('btnHide', currentLang) : t('btnExpand', currentLang)}
          </span>
        </button>

        {/* Expandable Form */}
        {isOpen && (
          <form onSubmit={handleSubmit} className="mt-6 pt-6 border-t border-[#EAF7EA] space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Intended Crop */}
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelIntendedCrop', currentLang)}
                </label>
                <select
                  value={formData.intendedCrop}
                  onChange={(e) => handleChange('intendedCrop', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {cropsList.map((c) => (
                    <option key={c.id} value={c.id}>
                      {getLocalizedCropName(c.id, c.defaultName, currentLang)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Land Area */}
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelLandArea', currentLang)}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0.25"
                    max="500"
                    step="0.25"
                    value={formData.landArea}
                    onChange={(e) => handleChange('landArea', e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-[#1B5E20] font-bold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  />
                  <span className="px-3 py-2 rounded-xl bg-[#EAF7EA] border border-[#C8E6C9] font-bold text-[#1B5E20]">
                    {t('unitAcres', currentLang)}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelLocation', currentLang)}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {statesList.map((s) => (
                    <option key={s} value={s}>
                      {getLocalizedState(s, currentLang)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Season */}
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelSeason', currentLang)}
                </label>
                <select
                  value={formData.season}
                  onChange={(e) => handleChange('season', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {seasonsList.map((s) => (
                    <option key={s.id} value={s.id}>
                      {getLocalizedSeason(s.key, currentLang)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Irrigation */}
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelIrrigation', currentLang)}
                </label>
                <select
                  value={formData.irrigation}
                  onChange={(e) => handleChange('irrigation', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {irrigationList.map((i) => (
                    <option key={i.id} value={i.id}>
                      {getLocalizedIrrigation(i.key, currentLang)}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {t('btnUpdateRecs', currentLang)}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

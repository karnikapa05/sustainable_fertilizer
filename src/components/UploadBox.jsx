import React, { useState, useRef } from 'react';
import { sampleSoilPresets } from '../data/sampleImages.js';
import { t, getLocalizedSoilName } from '../locales/index.js';

export function UploadBox({
  currentLang,
  selectedImage,
  setSelectedImage,
  imageMetadata,
  setImageMetadata,
  selectedPresetKey,
  setSelectedPresetKey,
  onStartAnalysis,
  showToast
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/pjpeg'];
  const maxSizeBytes = 12 * 1024 * 1024; // 12 MB

  const handleFileProcess = (file) => {
    if (!file) return;

    const fileName = file.name || 'soil_image.jpg';
    const ext = fileName.split('.').pop().toLowerCase();
    const mime = (file.type || '').toLowerCase();
    const isSupportedMime = supportedTypes.includes(mime);
    const isSupportedExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext);

    if (!isSupportedMime && !isSupportedExt) {
      if (showToast) showToast(t('errInvalidImage', currentLang), 'error');
      return;
    }

    if (file.size > maxSizeBytes) {
      if (showToast) showToast(t('errOversizedImage', currentLang), 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const rawDataUrl = e.target.result;
      
      // Client-side fast optimization for large camera images
      const img = new Image();
      img.onload = () => {
        const maxDim = 1200;
        let w = img.width;
        let h = img.height;
        
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const optimized = canvas.toDataURL('image/jpeg', 0.90);
          setSelectedImage(optimized);
        } else {
          setSelectedImage(rawDataUrl);
        }

        setImageMetadata({
          name: fileName,
          size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
          type: file.type || 'image/jpeg'
        });
        setSelectedPresetKey(null);
      };
      img.onerror = () => {
        setSelectedImage(rawDataUrl);
        setImageMetadata({
          name: fileName,
          size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
          type: file.type || 'image/jpeg'
        });
        setSelectedPresetKey(null);
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleSelectPreset = (preset) => {
    setSelectedImage(preset.previewUrl);
    setImageMetadata({
      name: preset.filename,
      size: preset.fileSize,
      type: 'image/jpeg'
    });
    setSelectedPresetKey(preset.soilTypeKey);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageMetadata(null);
    setSelectedPresetKey(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Title & Subtitle */}
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-black text-[#1B5E20]">
          {t('uploadTitle', currentLang)}
        </h2>
        <p className="text-base text-[#1B5E20]/80 max-w-xl mx-auto">
          {t('uploadSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Large Spacious Upload Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C8E6C9] shadow-md">
        
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/jpeg,image/png,image/webp,image/jpg"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFileProcess(e.target.files[0]);
            }
          }}
        />

        {!selectedImage ? (
          /* Empty / Initial Drag & Drop State */
          <div className="space-y-6">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className={`border-2 border-dashed rounded-3xl p-10 sm:p-16 text-center cursor-pointer transition-all ${
                isDragOver
                  ? 'border-[#4CAF50] bg-[#EAF7EA]'
                  : 'border-[#C8E6C9] hover:border-[#4CAF50] bg-[#F4FBF4]'
              }`}
            >
              <div className="w-20 h-20 rounded-3xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-4xl mx-auto mb-4">
                📷
              </div>

              <h3 className="text-xl font-bold text-[#1B5E20] mb-1">
                {t('uploadDropText', currentLang)}
              </h3>
              
              <p className="text-base font-bold text-[#4CAF50] mb-4">
                {t('uploadOrBrowse', currentLang)}
              </p>

              {/* Localized Plant Support Notice */}
              <div className="max-w-md mx-auto mb-4 px-4 py-2 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9] text-xs font-semibold text-[#1B5E20] flex items-center justify-center gap-2">
                <span>🌱</span>
                <span>{t('uploadPlantsNotice', currentLang)}</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#C8E6C9] text-xs font-semibold text-[#1B5E20]/70">
                {t('uploadSupportedFormats', currentLang)}
              </div>
            </div>

            {/* Quick Sample Soil Presets */}
            <div className="pt-6 border-t border-[#EAF7EA]">
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#1B5E20]">
                <span>{t('uploadPresetLabel', currentLang)}</span>
                <span className="text-[#4CAF50]">{t('oneClickDatasetTest', currentLang)}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sampleSoilPresets.map((preset) => {
                  const localizedSoilName = getLocalizedSoilName(preset.soilTypeKey, currentLang);
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className="p-3 rounded-2xl border border-[#C8E6C9] bg-[#F4FBF4] hover:bg-[#EAF7EA] hover:border-[#4CAF50] transition-all text-left flex flex-col gap-2 cursor-pointer group"
                    >
                      <div className="w-full h-20 rounded-xl overflow-hidden bg-stone-200 border border-[#C8E6C9]">
                        <img
                          src={preset.previewUrl}
                          alt={localizedSoilName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#1B5E20] truncate">
                        {localizedSoilName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Selected Image Preview State */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Image Preview */}
              <div className="md:col-span-6 relative rounded-2xl overflow-hidden bg-stone-900 border border-[#C8E6C9] aspect-4/3 max-h-72">
                <img
                  src={selectedImage}
                  alt="Soil preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata & Controls */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#1B5E20]/70">{t('fileName', currentLang)}:</span>
                    <span className="font-bold text-[#1B5E20] truncate max-w-[180px]">
                      {imageMetadata?.name || 'soil_image.jpg'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#1B5E20]/70">{t('fileSize', currentLang)}:</span>
                    <span className="font-bold text-[#1B5E20]">
                      {imageMetadata?.size || '1.2 MB'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-semibold text-[#1B5E20]/70">AI Status:</span>
                    <span className="font-bold text-[#4CAF50] flex items-center gap-1">
                      <span>✓</span> {t('statusReadyML', currentLang)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-[#C8E6C9] bg-white hover:bg-[#EAF7EA] text-[#1B5E20] text-xs font-bold transition-colors cursor-pointer"
                  >
                    🔄 {t('btnChangeImage', currentLang)}
                  </button>

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="py-2.5 px-4 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    🗑️ {t('btnRemoveImage', currentLang)}
                  </button>
                </div>

                {/* Switch sample soil presets */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#1B5E20]/70 block mb-1">
                    {t('testWithPreset', currentLang)}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sampleSoilPresets.map((p) => {
                      const locName = getLocalizedSoilName(p.soilTypeKey, currentLang);
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSelectPreset(p)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                            selectedPresetKey === p.soilTypeKey
                              ? 'bg-[#4CAF50] text-white'
                              : 'bg-[#F4FBF4] text-[#1B5E20] border border-[#C8E6C9] hover:bg-[#EAF7EA]'
                          }`}
                        >
                          {locName.split(' ')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* ONE Main Primary Button */}
            <div className="pt-4 border-t border-[#EAF7EA]">
              <button
                type="button"
                onClick={onStartAnalysis}
                className="w-full py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🤖</span>
                <span>{t('btnAnalyzeWithAI', currentLang)}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

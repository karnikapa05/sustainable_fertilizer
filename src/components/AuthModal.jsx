import React, { useState } from 'react';
import { t, supportedLanguages } from '../locales/index.js';

export function AuthModal({ isOpen, onClose, currentLang, onLoginSuccess, showToast }) {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Ramesh Kumar',
    emailPhone: '9876543210',
    password: 'password123',
    confirmPassword: 'password123',
    preferredLang: currentLang
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegisterMode) {
      if (formData.password !== formData.confirmPassword) {
        if (showToast) showToast(t('errPasswordsMismatch', currentLang), "error");
        return;
      }
      if (!formData.name || !formData.emailPhone) {
        if (showToast) showToast(t('errFillAllFields', currentLang), "error");
        return;
      }
    } else {
      if (!formData.emailPhone || !formData.password) {
        if (showToast) showToast(t('errEnterCredentials', currentLang), "error");
        return;
      }
    }

    const loggedInUser = {
      name: isRegisterMode ? formData.name : (formData.emailPhone.includes('@') ? formData.emailPhone.split('@')[0] : 'Farmer Ramesh'),
      emailPhone: formData.emailPhone,
      language: formData.preferredLang || currentLang
    };

    onLoginSuccess(loggedInUser);
    onClose();
  };

  const handleDemoLogin = () => {
    const demoUser = {
      name: 'Farmer Ramesh',
      emailPhone: '9876543210',
      language: currentLang
    };
    onLoginSuccess(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 border border-[#C8E6C9] shadow-2xl relative space-y-6">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 text-sm font-bold cursor-pointer"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-2xl flex items-center justify-center mx-auto mb-2">
            🌱
          </div>
          <h2 className="text-2xl font-bold text-[#1B5E20]">
            {isRegisterMode ? t('registerTitle', currentLang) : t('loginTitle', currentLang)}
          </h2>
        </div>

        {/* Demo Login Button */}
        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full py-2.5 rounded-xl bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] text-xs font-bold transition-colors cursor-pointer border border-[#C8E6C9]"
        >
          ⚡ {t('demoLoginBtn', currentLang)}
        </button>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {isRegisterMode && (
            <div>
              <label className="block font-bold text-[#1B5E20] mb-1">
                {t('labelFullName', currentLang)}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
            </div>
          )}

          <div>
            <label className="block font-bold text-[#1B5E20] mb-1">
              {t('labelEmailPhone', currentLang)}
            </label>
            <input
              type="text"
              value={formData.emailPhone}
              onChange={(e) => setFormData({ ...formData, emailPhone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-[#1B5E20] mb-1">
              {t('labelPassword', currentLang)}
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              required
            />
          </div>

          {isRegisterMode && (
            <div>
              <label className="block font-bold text-[#1B5E20] mb-1">
                {t('labelPreferredLang', currentLang)}
              </label>
              <select
                value={formData.preferredLang}
                onChange={(e) => setFormData({ ...formData, preferredLang: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              >
                {supportedLanguages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.nativeName}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer mt-2"
          >
            {isRegisterMode ? t('btnRegister', currentLang) : t('btnLogin', currentLang)}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center text-xs text-[#1B5E20]/70 pt-2 border-t border-[#EAF7EA]">
          <span>{isRegisterMode ? t('haveAccount', currentLang) : t('noAccount', currentLang)} </span>
          <button
            type="button"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
            className="text-[#4CAF50] font-bold hover:underline ml-1 cursor-pointer"
          >
            {isRegisterMode ? t('btnLogin', currentLang) : t('btnRegister', currentLang)}
          </button>
        </div>

      </div>
    </div>
  );
}

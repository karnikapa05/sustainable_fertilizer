import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector.jsx';
import { t, supportedLanguages, getLocalizedAuthError } from '../locales/index.js';
import { loginUser, registerUser, resetPasswordUser } from '../services/authService.js';

export function LoginPage({ currentLang, setLanguage, onLoginSuccess, showToast }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'forgot_password'
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: 'Karnika',
    email: 'karnika@agrisense.ai',
    password: 'password123',
    confirmPassword: 'password123',
    preferredLang: currentLang
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_NAME', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (!formData.email.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_EMAIL', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (!formData.password.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_PASSWORD', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    const result = loginUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      language: currentLang
    });

    if (!result.success) {
      const err = getLocalizedAuthError(result.errorCode, currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    if (showToast) showToast(t('loginSuccess', currentLang), 'success');
    onLoginSuccess(result.user);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_NAME', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (!formData.email.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_EMAIL', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (!formData.password || formData.password.length < 4) {
      const err = getLocalizedAuthError('ERR_PASSWORD_TOO_SHORT', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      const err = getLocalizedAuthError('ERR_PASSWORDS_MISMATCH', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    const result = registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      language: formData.preferredLang || currentLang
    });

    if (!result.success) {
      const err = getLocalizedAuthError(result.errorCode, currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    if (showToast) showToast(t('loginSuccess', currentLang), 'success');
    onLoginSuccess(result.user);
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.email.trim()) {
      const err = getLocalizedAuthError('ERR_ENTER_EMAIL', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }
    if (!formData.password || formData.password.length < 4) {
      const err = getLocalizedAuthError('ERR_PASSWORD_TOO_SHORT', currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    const result = resetPasswordUser({
      email: formData.email,
      newPassword: formData.password
    });

    if (!result.success) {
      const err = getLocalizedAuthError(result.errorCode, currentLang);
      setErrorMessage(err);
      if (showToast) showToast(err, 'error');
      return;
    }

    if (showToast) showToast(t('resetPasswordSuccess', currentLang), 'success');
    setAuthMode('login');
  };

  const handleDemoLogin = (demoName, demoEmail) => {
    const result = loginUser({
      name: demoName,
      email: demoEmail,
      password: 'password123',
      language: currentLang
    });
    if (result.success) {
      if (showToast) showToast(t('loginSuccess', currentLang), 'success');
      onLoginSuccess(result.user);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FBF4] flex flex-col justify-between selection:bg-[#C8E6C9] selection:text-[#1B5E20]">
      
      {/* Top Bar with Brand & Global Language Selector */}
      <header className="border-b border-[#C8E6C9] bg-white/95 backdrop-blur-md px-4 sm:px-8 py-4 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center text-xl shadow-xs">
            🌱
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1B5E20]">
              AgriSense <span className="text-[#4CAF50]">AI</span>
            </span>
          </div>
        </div>

        {/* Language Selector right on Login page */}
        <div className="flex items-center gap-2">
          <LanguageSelector currentLang={currentLang} onSelectLanguage={setLanguage} />
        </div>
      </header>

      {/* Center Auth Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#C8E6C9] shadow-lg space-y-6">
          
          {/* Header Icon & Title */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-3xl mx-auto border border-[#C8E6C9]">
              {authMode === 'login' ? '👨‍🌾' : authMode === 'register' ? '📝' : '🔑'}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
              {authMode === 'login'
                ? t('loginTitle', currentLang)
                : authMode === 'register'
                ? t('registerTitle', currentLang)
                : t('resetPasswordTitle', currentLang)}
            </h1>

            <p className="text-xs sm:text-sm text-[#1B5E20]/75 leading-relaxed">
              {authMode === 'login'
                ? t('loginSubtitle', currentLang)
                : authMode === 'register'
                ? t('registerSubtitle', currentLang)
                : t('resetPasswordDesc', currentLang)}
            </p>
          </div>

          {/* Quick 1-Click Demo Login */}
          {authMode === 'login' && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('Karnika', 'karnika@agrisense.ai')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] text-xs font-bold transition-all cursor-pointer border border-[#C8E6C9] flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>⚡</span>
                <span>{t('demoLoginBtn', currentLang)} — <strong>Karnika</strong></span>
              </button>
              <div className="flex items-center gap-3 my-2">
                <div className="h-px flex-1 bg-[#EAF7EA]"></div>
                <span className="text-[11px] font-semibold text-[#1B5E20]/50 uppercase tracking-wider">or enter credentials</span>
                <div className="h-px flex-1 bg-[#EAF7EA]"></div>
              </div>
            </div>
          )}

          {/* Inline Error Alert */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <span>⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* MODE 1: LOGIN FORM */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1.5">
                  {t('labelUserName', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={t('placeholderName', currentLang)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1.5">
                  {t('labelEmail', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t('placeholderEmail', currentLang)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-bold text-[#1B5E20]">
                    {t('labelPassword', currentLang)} <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage('');
                      setAuthMode('forgot_password');
                    }}
                    className="text-[#4CAF50] hover:text-[#388E3C] font-semibold hover:underline cursor-pointer"
                  >
                    {t('forgotPassword', currentLang)}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder={t('placeholderPassword', currentLang)}
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#1B5E20]/60 hover:text-[#1B5E20] p-0.5 cursor-pointer text-sm"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '👁️' : '🔒'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer mt-2 flex items-center justify-center gap-2"
              >
                <span>{t('btnLogin', currentLang)}</span>
                <span>→</span>
              </button>
            </form>
          )}

          {/* MODE 2: REGISTER FORM */}
          {authMode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelFullName', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={t('placeholderName', currentLang)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelEmail', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t('placeholderEmail', currentLang)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelPassword', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder={t('placeholderPassword', currentLang)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelConfirmPassword', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder={t('placeholderConfirmPassword', currentLang)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelPreferredLang', currentLang)}
                </label>
                <select
                  value={formData.preferredLang}
                  onChange={(e) => {
                    handleInputChange('preferredLang', e.target.value);
                    setLanguage(e.target.value);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {supportedLanguages.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.flag} {l.nativeName}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer mt-3 flex items-center justify-center gap-2"
              >
                <span>{t('btnRegister', currentLang)}</span>
                <span>→</span>
              </button>
            </form>
          )}

          {/* MODE 3: FORGOT PASSWORD */}
          {authMode === 'forgot_password' && (
            <form onSubmit={handleResetPasswordSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelEmail', currentLang)} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t('placeholderEmail', currentLang)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#1B5E20] mb-1">
                  {t('labelPassword', currentLang)} (New Password) <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4FBF4] border border-[#C8E6C9] text-sm text-[#1B5E20] font-semibold focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer mt-2"
              >
                {t('btnResetPassword', currentLang)}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setErrorMessage('');
                    setAuthMode('login');
                  }}
                  className="text-xs text-[#4CAF50] font-bold hover:underline cursor-pointer"
                >
                  {t('backToLogin', currentLang)}
                </button>
              </div>
            </form>
          )}

          {/* Bottom Switcher: Login <-> Register */}
          {authMode !== 'forgot_password' && (
            <div className="text-center text-xs text-[#1B5E20]/80 pt-3 border-t border-[#EAF7EA]">
              <span>{authMode === 'login' ? t('noAccount', currentLang) : t('haveAccount', currentLang)} </span>
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setAuthMode(authMode === 'login' ? 'register' : 'login');
                }}
                className="text-[#4CAF50] font-bold hover:underline ml-1 cursor-pointer"
              >
                {authMode === 'login' ? t('btnRegister', currentLang) : t('btnLogin', currentLang)}
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Minimal Clean Footer */}
      <footer className="py-4 text-center text-xs text-[#1B5E20]/60 border-t border-[#EAF7EA] bg-white/50">
        © 2026 AgriSense AI • {t('brandTagline', currentLang)}
      </footer>

    </div>
  );
}

import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector.jsx';
import { t } from '../locales/index.js';

export function Navbar({ activePage, setActivePage, currentLang, setLanguage, user, onOpenAuth, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Minimal 3 navigation options as requested
  const navItems = [
    { id: 'home', label: t('navHome', currentLang) },
    { id: 'analyze', label: t('navSoilAnalysis', currentLang) },
    { id: 'reports', label: t('navReports', currentLang) }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#C8E6C9] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#4CAF50] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-2xl" role="img" aria-label="Sprout">🌱</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#1B5E20]">
                AgriSense <span className="text-[#4CAF50]">AI</span>
              </span>
            </div>
          </div>

          {/* Minimal Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#EAF7EA] text-[#1B5E20] font-bold border border-[#C8E6C9]'
                      : 'text-[#1B5E20]/80 hover:text-[#1B5E20] hover:bg-[#F4FBF4]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Auth */}
          <div className="flex items-center gap-3">
            <LanguageSelector currentLang={currentLang} onSelectLanguage={setLanguage} />

            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('reports')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EAF7EA] border border-[#C8E6C9] text-[#1B5E20] text-sm font-semibold hover:bg-[#C8E6C9]/50 transition-colors cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                    {user.name ? user.name.charAt(0).toUpperCase() : '👨‍🌾'}
                  </span>
                  <span className="hidden sm:inline max-w-[120px] truncate font-bold">{user.name || 'Farmer'}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 rounded-xl transition-all text-xs font-bold cursor-pointer border border-red-200 shadow-2xs"
                  title={t('navLogout', currentLang)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden sm:inline">{t('navLogout', currentLang)}</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-sm font-bold text-white bg-[#4CAF50] hover:bg-[#388E3C] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {t('navLogin', currentLang)}
              </button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#1B5E20] hover:bg-[#EAF7EA] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#C8E6C9] bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#EAF7EA] text-[#1B5E20] font-bold border border-[#C8E6C9]'
                    : 'text-[#1B5E20]/80 hover:bg-[#F4FBF4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          {user && (
            <div className="pt-3 border-t border-[#EAF7EA] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : '👨‍🌾'}
                </span>
                <span className="text-sm font-bold text-[#1B5E20]">{user.name}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 cursor-pointer"
              >
                {t('navLogout', currentLang)}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { UploadBox } from './components/UploadBox.jsx';
import { ProgressIndicator } from './components/ProgressIndicator.jsx';
import { SoilResultCard } from './components/SoilResultCard.jsx';
import { FertilizerCard } from './components/FertilizerCard.jsx';
import { CostCard } from './components/CostCard.jsx';
import { CropCard } from './components/CropCard.jsx';
import { UserInputForm } from './components/UserInputForm.jsx';
import { ReportSummary } from './components/ReportSummary.jsx';
import { ReportHistory } from './components/ReportHistory.jsx';
import { FarmerDashboard } from './components/FarmerDashboard.jsx';
import { LoginPage } from './components/LoginPage.jsx';
import { AuthModal } from './components/AuthModal.jsx';
import { ToastNotification } from './components/ToastNotification.jsx';
import { Footer } from './components/Footer.jsx';
import { VoiceButton } from './components/VoiceButton.jsx';
import { VoiceFarmingAssistant } from './components/VoiceFarmingAssistant.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';

import { analyzeSoilImage, fetchModelInfo } from './services/aiEngine.js';
import { generateSmartRecommendations } from './services/recommendationEngine.js';
import { evaluateRiskAlerts } from './services/riskAlertService.js';
import { getSavedReports, saveReportToCloud, deleteSavedReport } from './services/storageService.js';
import { sampleSoilPresets } from './data/sampleImages.js';
import { getCurrentUser, logoutUser } from './services/authService.js';
import { t, getLocalizedErrorMessage } from './locales/index.js';

export function App() {
  const [activePage, setActivePage] = useState('home');

  // Multilingual state (default English)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('agrisense_lang') || 'en';
  });

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('agrisense_lang', langCode);
  };

  // Auth state backed by authService
  const [user, setUser] = useState(() => {
    return getCurrentUser();
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setActivePage('home');
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    showToast(t('logoutSuccess', currentLang), 'info');
  };

  // Toast state
  const [toasts, setToasts] = useState([]);
  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Soil analysis & workflow state
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageMetadata, setImageMetadata] = useState(null);
  const [selectedPresetKey, setSelectedPresetKey] = useState(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [soilResult, setSoilResult] = useState(null);
  const [lowConfidenceError, setLowConfidenceError] = useState(null);
  const [landArea, setLandArea] = useState(1);
  const [farmingDetails, setFarmingDetails] = useState({
    intendedCrop: 'Rice (Paddy)',
    landArea: '1',
    unit: 'Acres',
    location: 'Tamil Nadu',
    season: 'Kharif (Monsoon)',
    irrigation: 'Canal Irrigation'
  });
  const [reportData, setReportData] = useState(null);
  const [isSavingToCloud, setIsSavingToCloud] = useState(false);

  // Risk Alerts & Voice Assistant State
  const [activeRiskAlerts, setActiveRiskAlerts] = useState([]);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);

  // Saved reports history
  const [savedReportsList, setSavedReportsList] = useState([]);

  useEffect(() => {
    setSavedReportsList(getSavedReports());
  }, []);

  // Initiate AI analysis from uploaded image
  const handleStartAnalysis = () => {
    if (!selectedImage) {
      showToast(t('errInvalidImage', currentLang), "error");
      return;
    }
    setActivePage('analyze');
    setIsAnalyzing(true);
    setSoilResult(null);
    setLowConfidenceError(null);
    setReportData(null);
    setActiveRiskAlerts([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // AI Analysis completes
  const handleAnalysisComplete = async () => {
    const analysis = await analyzeSoilImage(selectedImage);
    setIsAnalyzing(false);

    if (!analysis.success) {
      // Low confidence, non-soil, or blur detected
      setLowConfidenceError(analysis);
      setSoilResult(null);
      setReportData(null);
      const alerts = evaluateRiskAlerts(analysis, { ...farmingDetails, landArea }, null);
      setActiveRiskAlerts(alerts);
      return;
    }

    // High confidence real ML prediction
    setLowConfidenceError(null);
    setSoilResult(analysis);

    // AI automatically generates fertilizer recommendations and crop suitability
    const smartRecs = generateSmartRecommendations(analysis, { ...farmingDetails, landArea });
    const fullReport = {
      ...smartRecs,
      soilTypeKey: analysis.id || 'alluvial'
    };
    setReportData(fullReport);

    // Evaluate dynamic agronomic risks
    const alerts = evaluateRiskAlerts(analysis, { ...farmingDetails, landArea }, fullReport);
    setActiveRiskAlerts(alerts);
  };

  // Land area acreage change updates fertilizer cost, quantities, and risk alerts
  const handleLandAreaChange = (newArea) => {
    setLandArea(newArea);
    if (soilResult) {
      const updated = generateSmartRecommendations(soilResult, { ...farmingDetails, landArea: newArea });
      const fullReport = {
        ...updated,
        soilTypeKey: soilResult.id || 'alluvial'
      };
      setReportData(fullReport);
      const alerts = evaluateRiskAlerts(soilResult, { ...farmingDetails, landArea: newArea }, fullReport);
      setActiveRiskAlerts(alerts);
    }
  };

  // Optional farming details updated
  const handleFarmingDetailsUpdate = (newDetails) => {
    setFarmingDetails(newDetails);
    const parsedArea = parseFloat(newDetails.landArea) || landArea;
    setLandArea(parsedArea);
    if (soilResult) {
      const updated = generateSmartRecommendations(soilResult, { ...newDetails, landArea: parsedArea });
      const fullReport = {
        ...updated,
        soilTypeKey: soilResult.id || 'alluvial'
      };
      setReportData(fullReport);
      const alerts = evaluateRiskAlerts(soilResult, { ...newDetails, landArea: parsedArea }, fullReport);
      setActiveRiskAlerts(alerts);
      showToast(t('recsUpdated', currentLang), "info");
    }
  };

  // Switch crop scroll helper
  const handleSwitchCrop = () => {
    const cropElem = document.getElementById('crops-section');
    if (cropElem) {
      cropElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Try again reset helper
  const handleTryAgain = () => {
    setSelectedImage(null);
    setSoilResult(null);
    setLowConfidenceError(null);
    setReportData(null);
    setActiveRiskAlerts([]);
    setActivePage('analyze');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save report to cloud
  const handleSaveReport = async () => {
    if (!reportData) return;
    setIsSavingToCloud(true);

    const reportToSave = {
      ...reportData,
      soilTypeKey: reportData.soilTypeKey || soilResult?.id || 'alluvial',
      fertilizerId: reportData.fertilizers?.[0]?.id || 'urea',
      crop: reportData.crops?.[0]?.name || 'Rice',
      cropId: reportData.crops?.[0]?.id || 'rice',
      language: currentLang
    };

    const saved = await saveReportToCloud(reportToSave);
    setSavedReportsList(getSavedReports());
    setIsSavingToCloud(false);
    showToast(t('cloudSaved', currentLang), 'success');
  };

  // View past report from history
  const handleViewPastReport = (pastReport) => {
    setReportData(pastReport);
    const reconstructedSoil = {
      id: pastReport.soilTypeKey || 'alluvial',
      name: pastReport.soilType,
      condition: pastReport.condition || 'Good',
      confidence: pastReport.confidence || 92
    };
    setSoilResult(reconstructedSoil);
    setLowConfidenceError(null);
    const alerts = evaluateRiskAlerts(reconstructedSoil, farmingDetails, pastReport);
    setActiveRiskAlerts(alerts);
    setActivePage('report-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // PROTECTED ROUTE: If not authenticated, render Login Page ONLY
  if (!user) {
    return (
      <div className="min-h-screen bg-[#F4FBF4]">
        <LoginPage
          currentLang={currentLang}
          setLanguage={handleLanguageChange}
          onLoginSuccess={handleLoginSuccess}
          showToast={showToast}
        />
        <ToastNotification
          toasts={toasts}
          onDismiss={dismissToast}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FBF4] text-[#1B5E20] font-sans selection:bg-[#C8E6C9]">
      
      {/* Minimal Sticky Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        currentLang={currentLang}
        setLanguage={handleLanguageChange}
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        <ErrorBoundary>
        
        {/* VIEW 1: HOME PAGE */}
        {activePage === 'home' && (
          <div className="space-y-12">
            <HeroSection
              currentLang={currentLang}
              user={user}
              onStartAnalysis={() => {
                setActivePage('analyze');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onHowItWorks={() => {
                const elem = document.getElementById('features-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Quick Upload on Home page */}
            <div className="bg-[#EAF7EA] py-12 border-y border-[#C8E6C9]">
              <UploadBox
                currentLang={currentLang}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                imageMetadata={imageMetadata}
                setImageMetadata={setImageMetadata}
                selectedPresetKey={selectedPresetKey}
                setSelectedPresetKey={setSelectedPresetKey}
                onStartAnalysis={handleStartAnalysis}
                showToast={showToast}
              />
            </div>
          </div>
        )}

        {/* VIEW 2: SOIL ANALYSIS & AI RESULT */}
        {activePage === 'analyze' && (
          <div className="py-8 space-y-12">
            {isAnalyzing ? (
              /* Clean Processing Screen */
              <ProgressIndicator
                currentLang={currentLang}
                soilImage={selectedImage}
                onComplete={handleAnalysisComplete}
              />
            ) : lowConfidenceError ? (
              /* Section 21: LOW CONFIDENCE & SERVICE AVAILABILITY UI */
              <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-300 shadow-md text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl mx-auto">
                    {lowConfidenceError.errorType === 'SERVICE_UNAVAILABLE' || lowConfidenceError.errorType === 'NETWORK_ERROR' ? '🌐' : '⚠️'}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
                      {lowConfidenceError.errorType === 'SERVICE_UNAVAILABLE' || lowConfidenceError.errorType === 'NETWORK_ERROR'
                        ? 'Service Unavailable'
                        : t('lowConfidenceTitle', currentLang)}
                    </h2>
                    <p className="text-sm text-amber-900 font-semibold">
                      {lowConfidenceError.errorType === 'SERVICE_UNAVAILABLE' || lowConfidenceError.errorType === 'NETWORK_ERROR'
                        ? 'Soil AI analysis service is currently unavailable. Please try again.'
                        : (lowConfidenceError.errorType
                            ? getLocalizedErrorMessage(lowConfidenceError.errorType, currentLang)
                            : (lowConfidenceError.message || t('lowConfidenceMsg', currentLang)))}
                    </p>
                    {lowConfidenceError.confidence > 0 && (
                      <p className="text-xs text-gray-500">
                        {t('modelConfidenceWas', currentLang)} {lowConfidenceError.confidence}% ({t('minimumRequired', currentLang)}).
                      </p>
                    )}
                  </div>

                  {lowConfidenceError.errorType === 'SERVICE_UNAVAILABLE' || lowConfidenceError.errorType === 'NETWORK_ERROR' ? (
                    <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9] text-left text-xs text-[#1B5E20] space-y-1">
                      <span className="font-bold block text-sm mb-1 text-[#1B5E20]">
                        ℹ️ Network & Service Notice
                      </span>
                      <p className="text-xs text-[#1B5E20]/80">
                        The Soil AI classification service may be starting up or temporarily busy. Your uploaded soil photo is preserved. Click <strong>Retry Analysis</strong> below to re-submit.
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9] text-left text-xs text-[#1B5E20] space-y-2">
                      <span className="font-bold block text-sm mb-1">
                        📸 {t('tipsTitle', currentLang)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4CAF50] font-bold">✓</span>
                        <span>{t('tipLighting', currentLang)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4CAF50] font-bold">✓</span>
                        <span>{t('tipSoilFocus', currentLang)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4CAF50] font-bold">✓</span>
                        <span>{t('tipBackground', currentLang)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#4CAF50] font-bold">✓</span>
                        <span>{t('tipSharp', currentLang)}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedImage) {
                          handleStartAnalysis();
                        } else {
                          handleTryAgain();
                        }
                      }}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>🔄</span>
                      <span>Retry Analysis</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLowConfidenceError(null);
                        setSoilResult(null);
                        setReportData(null);
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] font-bold text-sm rounded-2xl transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>📁</span>
                      <span>{t('btnUploadAnother', currentLang)}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : soilResult ? (
              /* Post-Analysis AI Results */
              <div className="space-y-12 animate-in fade-in duration-300">
                
                {/* 1. Soil Analysis Result */}
                <SoilResultCard
                  currentLang={currentLang}
                  soilResult={soilResult}
                  soilImage={selectedImage}
                  riskAlerts={activeRiskAlerts}
                  onSwitchCrop={handleSwitchCrop}
                  onTryAgain={handleTryAgain}
                />

                {/* 2. Recommended Fertilizer */}
                <FertilizerCard
                  currentLang={currentLang}
                  fertilizers={reportData?.fertilizers}
                  landArea={landArea}
                />

                {/* 3. Estimated Fertilizer Cost */}
                <CostCard
                  currentLang={currentLang}
                  fertilizers={reportData?.fertilizers}
                  landArea={landArea}
                  onLandAreaChange={handleLandAreaChange}
                />

                {/* 4. Suitable Crops */}
                <CropCard
                  currentLang={currentLang}
                  crops={reportData?.crops}
                />

                {/* 5. Optional "Improve Your Recommendation" Form */}
                <UserInputForm
                  currentLang={currentLang}
                  initialValues={farmingDetails}
                  onSubmit={handleFarmingDetailsUpdate}
                />

                {/* View Full Report CTA */}
                <div className="text-center pt-4 pb-8">
                  <button
                    onClick={() => {
                      setActivePage('report-view');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-base font-bold rounded-2xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>📄</span>
                    <span>{t('btnViewFullReport', currentLang)}</span>
                  </button>
                </div>

              </div>
            ) : (
              /* Initial Spacious Upload State */
              <UploadBox
                currentLang={currentLang}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                imageMetadata={imageMetadata}
                setImageMetadata={setImageMetadata}
                selectedPresetKey={selectedPresetKey}
                setSelectedPresetKey={setSelectedPresetKey}
                onStartAnalysis={handleStartAnalysis}
                showToast={showToast}
              />
            )}
          </div>
        )}

        {/* VIEW 3: FULL REPORT SUMMARY */}
        {activePage === 'report-view' && (
          <div className="py-8">
            <ReportSummary
              currentLang={currentLang}
              reportData={reportData}
              soilImage={selectedImage}
              onSaveReport={handleSaveReport}
              onAnalyzeAnother={() => {
                setSoilResult(null);
                setLowConfidenceError(null);
                setReportData(null);
                setActivePage('analyze');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              isSavingToCloud={isSavingToCloud}
              showToast={showToast}
            />
          </div>
        )}

        {/* VIEW 4: MY REPORTS (HISTORY) */}
        {activePage === 'reports' && (
          <div className="py-8">
            <ReportHistory
              currentLang={currentLang}
              reports={savedReportsList}
              onViewReport={handleViewPastReport}
              onStartNew={() => {
                setSoilResult(null);
                setLowConfidenceError(null);
                setReportData(null);
                setActivePage('analyze');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 5: FARMER DASHBOARD */}
        {activePage === 'dashboard' && (
          <FarmerDashboard
            currentLang={currentLang}
            user={user}
            activeRiskAlerts={activeRiskAlerts}
            onStartAnalysis={() => {
              setActivePage('analyze');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSwitchCrop={handleSwitchCrop}
            onTryAgain={handleTryAgain}
          />
        )}
        </ErrorBoundary>
      </main>

      {/* Floating Voice Assistant Trigger */}
      <VoiceButton
        currentLang={currentLang}
        onClick={() => setIsVoiceAssistantOpen(true)}
      />

      {/* Voice Farming Assistant Modal / Panel */}
      <VoiceFarmingAssistant
        isOpen={isVoiceAssistantOpen}
        onClose={() => setIsVoiceAssistantOpen(false)}
        currentLang={currentLang}
        context={{
          soilResult,
          farmingDetails: { ...farmingDetails, landArea },
          reportData,
          riskAlerts: activeRiskAlerts,
          user
        }}
      />

      {/* Clean Light-Green Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Centered Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentLang={currentLang}
        onLoginSuccess={handleLoginSuccess}
        showToast={showToast}
      />

      {/* Toast Notification Container */}
      <ToastNotification
        toasts={toasts}
        onDismiss={dismissToast}
      />

    </div>
  );
}

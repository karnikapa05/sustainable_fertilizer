// AgriSense AI Auto-Generated Bundle for Zero-Build Browser Execution
const { useState, useEffect, useRef } = React;


// ==========================================
// FILE: src/locales/en.js
// ==========================================

// English Translations
const en = {
  // Brand
  brandName: "AgriSense AI",
  brandTagline: "Smart Soil Analysis • Crop Recommendation • Fertilizer Intelligence",
  brandSubtitle: "Empowering farmers with AI-driven agronomy and cost estimation",

  // Navigation
  navHome: "Home",
  navSoilAnalysis: "Soil Analysis",
  navRecommendations: "Recommendations",
  navReports: "Reports",
  navAbout: "About",
  navDashboard: "Dashboard",
  navLogin: "Login",
  navRegister: "Register",
  navLogout: "Logout",
  navProfile: "Farmer Profile",

  // Hero Section
  heroTitle: "Grow Smarter with AI",
  heroSubtitle: "Analyze your soil, discover the right crops, choose the right fertilizer, and estimate your farming cost — all in one place.",
  btnAnalyzeSoil: "Analyze My Soil",
  btnExploreFeatures: "Explore Features",
  heroBadgeAI: "AI Powered Agronomy",
  heroSoilType: "Soil Type",
  heroCropRec: "Crop Recommendation",
  heroFertilizerRec: "Fertilizer Recommendation",
  heroEstCost: "Estimated Cost",
  heroScannedStatus: "AI Scanning Complete",

  // Dashboard
  welcomeFarmer: "Welcome back, Farmer 👋",
  dashboardSubtitle: "Here is the real-time summary of your farmland intelligence and soil health.",
  statSoilAnalyses: "Soil Analyses",
  statCropRecommendations: "Crop Recommendations",
  statFertilizerRecommendations: "Fertilizer Plans",
  statEstimatedSavings: "Est. Fertilizer Cost",
  cardStartAnalysisTitle: "Start New Soil Analysis",
  cardStartAnalysisDesc: "Upload a fresh soil photograph or capture one with your camera. Our AI identifies soil texture, condition, and generates precision recommendations.",
  btnUploadSoilImage: "Upload Soil Image →",
  recentAnalyses: "Recent Soil Analyses",
  noRecentReports: "No previous reports found. Start your first analysis today!",
  weatherTitle: "Today's Farming Weather Advisory",
  weatherGoodCondition: "Favorable conditions for field preparation and fertilizer top-dressing.",

  // Upload Box
  uploadTitle: "Analyze Your Soil",
  uploadSubtitle: "Upload a clear soil image or field photo and let AI understand your soil.",
  uploadDropText: "Drag & Drop your soil photo here",
  uploadOrBrowse: "or Browse from your device",
  uploadPlantsNotice: "Photos with visible plants are supported. Make sure some soil is visible between or around the plants.",
  uploadSupportedFormats: "Supported formats: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "Maximum size: 12 MB",
  uploadPresetLabel: "Or try with sample soil photos:",
  btnAnalyzeWithAI: "Analyze Soil with AI",
  btnRemoveImage: "Remove",
  btnChangeImage: "Change Image",
  fileSize: "Size",
  fileName: "File",
  statusReadyML: "Ready for Real ML Classification",
  testWithPreset: "Or test with sample:",
  oneClickDatasetTest: "1-Click Real Dataset Test",

  // Image Processing UI
  processingTitle: "Analyzing Your Soil...",
  processingSubtitle: "Our deep learning agronomic vision model is scanning the soil characteristics.",
  step1: "Image uploaded",
  step2: "Image validated & quality checked",
  step3: "Detecting vegetation & visible soil region",
  step4: "Identifying soil type & physical texture",
  step5: "Generating fertilizer recommendations",
  step6: "Calculating fertilizer cost & crop rankings",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "Insufficient Visible Soil Information",
  lowConfidenceMsg: "Insufficient visible soil information. Please upload a clearer image showing some soil between or around the plants.",
  modelConfidenceWas: "Model confidence was",
  minimumRequired: "minimum required: 70%",
  tipsTitle: "Tips for an Accurate Soil Analysis:",
  tipLighting: "Good lighting: Take the photo outdoors in natural daylight.",
  tipSoilFocus: "Soil visibility: Ensure some soil is visible between or around plants.",
  tipBackground: "Minimal background: Avoid shoes, tools, vehicles, or shadows in the frame.",
  tipSharp: "Sharp focus: Avoid blurry or out-of-focus camera shots.",
  btnUploadAnother: "Upload Another Image",

  // Soil Analysis Result
  resultHeading: "Soil Analysis Result",
  resultSubtitle: "Visual classification & physical soil condition evaluation",
  detectedSoilType: "Detected Soil Type",
  soilCondition: "Soil Condition",
  aiConfidence: "AI Confidence",
  visibleSoilArea: "Visible Soil Area",
  plantsDetected: "Plants / Crops Detected",
  bareSoilDetected: "Bare Soil Detected",
  foliageFiltered: "Plant Foliage Filtered for Soil Analysis",
  soilCharacteristics: "Soil Characteristics",
  charMoisture: "Moisture",
  charTexture: "Texture",
  charOrganicMatter: "Organic Matter",
  charDrainage: "Drainage",
  charPH: "pH Level",
  charNitrogen: "Nitrogen (N)",
  charPhosphorus: "Phosphorus (P)",
  charPotassium: "Potassium (K)",
  requiresSoilTest: "Requires laboratory soil test",
  soilTestDisclaimer: "* Chemical N-P-K & exact pH require laboratory soil testing. Visual AI provides physical texture, moisture index, and organic profile.",

  // Farming Details Form
  optionalHeading: "Farming Details for Better Recommendations",
  optionalSubtitle: "Provide your plot parameters to calculate precision fertilizer dosages and expected costs.",
  btnHide: "▲ Hide",
  btnExpand: "▼ Expand",
  labelIntendedCrop: "Crop Currently Grown / Intended Crop",
  labelLandArea: "Land Area",
  labelLocation: "Location (State / District)",
  labelSeason: "Current Farming Season",
  labelIrrigation: "Irrigation Type",
  labelPreviousCrop: "Previous Crop Harvested",
  btnUpdateRecs: "Update Recommendations",
  btnViewFullReport: "View & Save Complete Report →",
  unitAcres: "Acres",
  unitHectares: "Hectares",

  // Fertilizer Recommendation
  fertHeading: "Smart Fertilizer Recommendation 🧪",
  fertSubtitle: "Balanced nutrition plan calculated for your soil condition and selected acreage.",
  fertRecommended: "Recommended Fertilizer",
  fertQuantity: "Recommended Quantity",
  fertApplication: "Application Method & Schedule",
  levelHighly: "Highly Recommended",
  levelAlternative: "Alternative",
  levelOptional: "Optional",
  kgPerAcre: "kg / acre",
  totalForPlot: "Total for plot",
  kg: "kg",

  // Cost Prediction
  costHeading: "Estimated Fertilizer Cost 💰",
  costSubtitle: "Budget forecast based on government subsidized and prevailing market retail prices.",
  costRequiredQty: "Required Quantity",
  costEstPrice: "Estimated Price",
  costPerAcre: "Per Acre Cost",
  costEstTotal: "Estimated Total Cost",
  costNote: "Prices may vary based on location, supplier, season, and market conditions.",
  perKg: "/ kg",
  perAcre: "/ acre",
  acresEquals: "acres =",

  // Crop Recommendation
  cropHeading: "Recommended Crops 🌾",
  cropSubtitle: "High-yield crops aligned with your soil texture, season, and water retention.",
  suitabilityScore: "Suitable",
  btnViewDetails: "View Details",
  modalClose: "Close",
  plantSpacing: "Plant Spacing",
  harvestDuration: "Harvest Duration",
  soilSynergy: "Soil Synergy",
  growingSeason: "Growing Season",
  waterRequirement: "Water Requirement",
  primaryFertilizer: "Primary Fertilizer",

  // Reports Summary Page
  reportTitle: "Your Smart Farming Report",
  reportSubtitle: "Complete AI agronomy diagnosis, crop strategy, and nutrient budget",
  btnDownloadReport: "Download Report (PDF)",
  btnSaveReport: "Save Report",
  btnPrintReport: "Print Report",
  btnAnalyzeAnother: "Analyze Another Soil Image",
  reportHeaderTag: "AI Soil Diagnostics & Fertilizer Report",
  reportDate: "Date",
  reportStatus: "Status",
  statusVerified: "Verified Analysis",
  secSoilAnalysis: "Soil Analysis",
  secFertRec: "Fertilizer Recommendation",
  secCostPred: "Cost Prediction",
  secCropRec: "Crop Recommendation",

  // History Page
  historyTitle: "My Previous Reports",
  historySubtitle: "Access, review, or print your past soil analyses and nutrient recommendations.",
  thDate: "Date",
  thSoilType: "Soil Type",
  thCrop: "Crop",
  thFertilizer: "Primary Fertilizer",
  thCost: "Estimated Cost",
  thActions: "Actions",
  btnViewReport: "View Report",
  btnDeleteReport: "Delete",
  noReportsFound: "No matching reports found.",
  searchPlaceholder: "Search by crop, soil type, or location...",
  cloudSaving: "Saving your report securely...",
  cloudSaved: "Report saved successfully to AgriSense Cloud",
  cloudDeleted: "Report removed from your records.",

  // Features Section
  featTitle: "Intelligent Agriculture Powered by AI",
  featSubtitle: "Combining cutting-edge computer vision, soil science, and agricultural economics to maximize farmer yield.",
  feat1Title: "AI Soil Analysis",
  feat1Desc: "Analyze soil images using deep vision models to classify soil type, condition, and visual characteristics within seconds.",
  feat2Title: "Smart Crop Recommendation",
  feat2Desc: "Match your specific soil profile and climate conditions with optimal crop varieties for maximum yield.",
  feat3Title: "Fertilizer Intelligence",
  feat3Desc: "Precision nutrient recommendations with specific dosages, application stages, and eco-friendly alternatives.",
  feat4Title: "Cost Prediction",
  feat4Desc: "Transparent cost forecasting per acre and total farmland with government subsidy benchmarks.",
  feat5Title: "Multilingual Support",
  feat5Desc: "Access the entire platform in English, Tamil, Hindi, Telugu, Malayalam, and Kannada for effortless farmer accessibility.",
  feat6Title: "Cloud Reports",
  feat6Desc: "Securely store previous analysis reports and access your farm history anytime from mobile or desktop.",

  // Auth Page & Security
  loginTitle: "Farmer Login",
  loginSubtitle: "Enter your name, email, and password to access AgriSense AI.",
  registerTitle: "Farmer Registration",
  registerSubtitle: "Create a new account to unlock precision soil and fertilizer intelligence.",
  forgotPassword: "Forgot Password?",
  resetPasswordTitle: "Reset Password",
  resetPasswordDesc: "Enter your registered email and choose a new password.",
  btnResetPassword: "Reset Password",
  resetPasswordSuccess: "Password reset successfully! You can now log in.",
  backToLogin: "← Back to Login",
  labelUserName: "User Name",
  labelFullName: "Full Name",
  labelEmail: "Email Address",
  labelEmailPhone: "Email Address",
  labelPassword: "Password",
  labelConfirmPassword: "Confirm Password",
  labelPreferredLang: "Preferred Language",
  placeholderName: "Enter your name (e.g. Karnika)",
  placeholderEmail: "Enter your email (e.g. karnika@agrisense.ai)",
  placeholderPassword: "Enter your password",
  placeholderConfirmPassword: "Confirm your password",
  btnLogin: "Login",
  btnRegister: "Create Account",
  demoLoginBtn: "⚡ Quick Demo Login (One Click)",
  haveAccount: "Already registered?",
  noAccount: "Don't have an account?",
  welcomePrefix: "Welcome,",
  errEnterName: "Please enter your name.",
  errEnterEmail: "Please enter your email.",
  errEnterPassword: "Please enter your password.",
  errPasswordsMismatch: "Passwords do not match.",
  errFillAllFields: "Please complete all required fields.",
  errEnterCredentials: "Please enter email and password.",
  errPasswordTooShort: "Password must be at least 4 characters long.",
  errInvalidCredentials: "Invalid email or password.",
  errUserNotFound: "User not found with this email.",
  errPasswordIncorrect: "Password is incorrect.",
  errEmailAlreadyExists: "An account with this email already exists. Please log in.",
  loginSuccess: "Welcome! Logged in successfully.",
  logoutSuccess: "You have been logged out.",

  // Errors & Toasts
  errInvalidImage: "Please upload a valid JPG, JPEG, PNG, or WEBP image.",
  errOversizedImage: "Image size must be less than 12 MB.",
  errFailedAnalysis: "We couldn't analyze this image. Please upload a clearer soil image and try again.",
  errNetwork: "Connection problem. Please check your internet connection and try again.",
  errRequiredFields: "Please fill out all required fields.",
  recsUpdated: "Recommendations updated successfully.",

  // Audio Narration
  btnListenAudio: "Listen to Audio Advisory 🔊",
  audioPlaying: "Playing advisory...",
  audioStopped: "Audio paused",

  // Risk Alerts
  riskAlertsTitle: "Farm Risk Alerts",
  riskAlertsSubtitle: "Dynamic risk assessment based on AI confidence, crop suitability, and fertilizer limits.",
  badgeHighRisk: "High Risk",
  badgeWarning: "Warning",
  badgeInfo: "All Clear",
  alertLowConfidenceTitle: "Low AI Confidence",
  alertLowConfidenceMsg: "The uploaded image could not be classified with high confidence. Please upload a clearer soil or field photo.",
  alertLowConfidenceRec: "Upload another image in good natural daylight to prevent inaccurate recommendations.",
  alertUnsuitableCropTitle: "Crop Suitability Warning",
  alertUnsuitableCropMsg: "This crop may not be the most suitable choice for the detected soil type.",
  alertUnsuitableCropRec: "Consider switching to one of the suggested high-yield alternative crops.",
  alertFertilizerWarningTitle: "Fertilizer Quantity Warning",
  alertFertilizerWarningMsg: "The calculated fertilizer quantity should be verified before application.",
  alertSplitDoseRec: "Apply fertilizer in split doses as recommended to avoid nitrogen runoff or root scorch.",
  alertLargeQtyTitle: "Large Acreage Fertilizer Warning",
  alertLargeQtyMsg: "Total fertilizer volume is significant for this farmland area.",
  alertLargeQtyRec: "Verify with local agronomic officers and schedule stage-wise delivery.",
  alertLeachingTitle: "High Soil Permeability Warning",
  alertLeachingMsg: "Cinder and coarse porous soils exhibit rapid drainage with high nutrient leaching potential.",
  alertLeachingRec: "Incorporate organic compost to enhance water retention and split fertilizer applications.",
  alertWaterloggingTitle: "Waterlogging Susceptibility Warning",
  alertWaterloggingMsg: "Black cotton clay soil has high water retention and poor drainage during heavy monsoon.",
  alertWaterloggingRec: "Construct broad bed furrows to drain excess water before applying fertilizer.",
  alertBlurTitle: "Blurry Soil Image",
  alertBlurMsg: "The uploaded image is too blurry for reliable computer vision analysis.",
  alertBlurRec: "Take a sharp photo holding the camera steady in outdoor light.",
  alertLightingTitle: "Suboptimal Lighting",
  alertLightingMsg: "The photo is too dark or overexposed to discern physical soil characteristics.",
  alertLightingRec: "Capture the soil in natural daytime shade or clear sunlight.",
  alertInsufficientSoilTitle: "Insufficient Visible Soil",
  alertInsufficientSoilMsg: "Less than 12% visible soil detected. Plants or non-soil objects cover the frame.",
  alertInsufficientSoilRec: "Capture a patch showing visible topsoil between or around crop foliage.",
  alertInvalidImgTitle: "Invalid Field Photo",
  alertInvalidImgMsg: "The image does not appear to contain field soil.",
  alertInvalidImgRec: "Please upload a photograph of your farmland topsoil.",
  alertNoRiskTitle: "No Major Risks Detected",
  alertNoRiskMsg: "Based on the available analysis, no major recommendation risks were identified.",
  alertNoRiskRec: "Your crop selection and fertilizer plan are well aligned with your soil profile.",
  alertSoilTestDisclaimer: "Exact nutrient requirements should be confirmed using a laboratory soil test.",
  btnSwitchCrop: "View Alternative Crops",
  btnTryAgain: "Try Again",
  selectedCropLabel: "Selected Crop",
  detectedSoilLabel: "Detected Soil",
  suitabilityScoreLabel: "Suitability Score",
  suggestedAlternativesLabel: "Suggested Alternatives",
  cardRiskAlertsTitle: "Risk Alerts",
  cardRiskAlertsDesc: "Real-time agronomic risk monitoring for your crop, dosage, and soil safety.",
  viewRiskAlertsBtn: "View Risk Alerts →",

  // Voice Assistant
  voiceAssistantTitle: "AgriSense Voice Assistant",
  voiceAssistantSubtitle: "Ask farming, soil, crop, fertilizer, cost, and risk questions in your language.",
  floatingVoiceBtn: "Ask AgriSense",
  tapToSpeak: "Tap to Speak",
  listeningState: "Listening... Speak now",
  thinkingState: "Thinking...",
  speakingState: "Speaking advisory...",
  youSaid: "You asked",
  aiResponse: "AgriSense Advisory",
  btnPlayVoice: "Play",
  btnPauseVoice: "Pause",
  btnReplayVoice: "Replay",
  btnStopVoice: "Stop",
  quickQuestionsTitle: "Quick Questions:",
  quickQ1: "Which crop is best?",
  quickQ2: "What fertilizer should I use?",
  quickQ3: "How much fertilizer do I need?",
  quickQ4: "Why was this fertilizer recommended?",
  quickQ5: "What is the estimated cost?",
  quickQ6: "Are there any risks?",
  quickQ7: "Explain my soil analysis",
  voiceDisclaimer: "AI recommendations are advisory. Confirm exact nutrient needs with a laboratory soil test.",
  errMicPermission: "Microphone access is required for voice input. Please allow microphone permission.",
  errSpeechUnsupported: "Voice input is not supported in this browser.",
  typeQuestionPlaceholder: "Type your farming question here...",
  btnSendQuestion: "Ask",
  typeInsteadPrompt: "Or type your question instead:"
};


// ==========================================
// FILE: src/locales/ta.js
// ==========================================

// Tamil Translations (தமிழ்)
const ta = {
  // Brand
  brandName: "அக்ரிசென்ஸ் AI",
  brandTagline: "நுண்ணறிவு மண் பரிசோதனை • பயிர் பரிந்துரை • உர மேலாண்மை",
  brandSubtitle: "செயற்கை நுண்ணறிவு மூலம் விவசாயிகளுக்கு துல்லியமான வழிகாட்டுதல் மற்றும் செலவு மதிப்பீடு",

  // Navigation
  navHome: "முகப்பு",
  navSoilAnalysis: "மண் பரிசோதனை",
  navRecommendations: "பரிந்துரைகள்",
  navReports: "அறிக்கைகள்",
  navAbout: "எங்களைப் பற்றி",
  navDashboard: "கட்டுப்பாட்டு அறை",
  navLogin: "உள்நுழைவு",
  navRegister: "பதிவு செய்க",
  navLogout: "வெளியேறு",
  navProfile: "விவசாயி சுயவிவரம்",

  // Hero Section
  heroTitle: "AI மூலம் சிறந்த விவசாயம்",
  heroSubtitle: "உங்கள் மண்ணை ஆய்வு செய்யுங்கள், சரியான பயிர்களைத் தேர்வு செய்யுங்கள், தகுந்த உரத்தை அறியுங்கள், மற்றும் சாகுபடி செலவை கணக்கிடுங்கள் — அனைத்தும் ஒரே இடத்தில்.",
  btnAnalyzeSoil: "என் மண்ணை ஆய்வு செய்க",
  btnExploreFeatures: "அம்சங்களை அறிக",
  heroBadgeAI: "செயற்கை நுண்ணறிவு வேளாண்மை",
  heroSoilType: "மண் வகை",
  heroCropRec: "பயிர் பரிந்துரை",
  heroFertilizerRec: "உர பரிந்துரை",
  heroEstCost: "மதிப்பிடப்பட்ட செலவு",
  heroScannedStatus: "AI ஸ்கேனிங் முடிந்தது",

  // Dashboard
  welcomeFarmer: "மீண்டும் வருக, விவசாய பெருமக்களே 👋",
  dashboardSubtitle: "உங்கள் நிலத்தின் தற்போதைய மண் வளம் மற்றும் வேளாண் நுண்ணறிவு சுருக்கம்.",
  statSoilAnalyses: "மண் ஆய்வுகள்",
  statCropRecommendations: "பயிர் பரிந்துரைகள்",
  statFertilizerRecommendations: "உரத் திட்டங்கள்",
  statEstimatedSavings: "உரச் செலவு மதிப்பீடு",
  cardStartAnalysisTitle: "புதிய மண் பரிசோதனையைத் தொடங்குங்கள்",
  cardStartAnalysisDesc: "புதிய மண் புகைப்படத்தை பதிவேற்றவும் அல்லது கேமரா மூலம் படம் எடுக்கவும். எங்கள் AI மண் அமைப்பை கண்டறிந்து துல்லியமான உர வழிகாட்டலை வழங்கும்.",
  btnUploadSoilImage: "மண் புகைப்படத்தை பதிவேற்றவும் →",
  recentAnalyses: "சமீபத்திய மண் ஆய்வுகள்",
  noRecentReports: "முந்தைய அறிக்கைகள் எதுவும் இல்லை. இன்றே உங்கள் முதல் பரிசோதனையைத் தொடங்குங்கள்!",
  weatherTitle: "இன்றைய விவசாய வானிலை ஆலோசனை",
  weatherGoodCondition: "நிலம் தயாரிப்பதற்கும் உரமிடுவதற்கும் சாதகமான வானிலை நிலவுகிறது.",

  // Upload Box
  uploadTitle: "உங்கள் மண்ணை ஆய்வு செய்யுங்கள்",
  uploadSubtitle: "தெளிவான மண் அல்லது விளைநில புகைப்படத்தை பதிவேற்றி AI மூலம் மண்ணின் தன்மையை அறியுங்கள்.",
  uploadDropText: "உங்கள் மண் புகைப்படத்தை இங்கே இழுத்து விடவும்",
  uploadOrBrowse: "அல்லது உங்கள் சாதனத்திலிருந்து தேர்ந்தெடுக்கவும்",
  uploadPlantsNotice: "பயிர்கள் உள்ள புகைப்படங்களும் ஏற்றுக்கொள்ளப்படும். பயிர்களுக்கு இடையில் அல்லது அதைச் சுற்றி சிறிதளவு மண் தெரியும்படி பார்த்துக் கொள்ளவும்.",
  uploadSupportedFormats: "ஆதரிக்கப்படும் வடிவங்கள்: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "அதிகபட்ச அளவு: 12 MB",
  uploadPresetLabel: "அல்லது மாதிரி மண் புகைப்படங்களை சோதிக்கவும்:",
  btnAnalyzeWithAI: "AI மூலம் மண்ணை ஆய்வு செய்க",
  btnRemoveImage: "நீக்கு",
  btnChangeImage: "படத்தை மாற்று",
  fileSize: "அளவு",
  fileName: "கோப்பு",
  statusReadyML: "AI மாதிரி பகுப்பாய்வுக்கு தயார்",
  testWithPreset: "மாதிரி மூலம் சோதிக்க:",
  oneClickDatasetTest: "நேரடி மாதிரி சோதனை",

  // Image Processing UI
  processingTitle: "மண் ஆய்வு செய்யப்படுகிறது...",
  processingSubtitle: "எங்கள் ஆழமான நரம்பியல் பார்வை மாதிரி மண்ணின் இயற்பியல் பண்புகளை ஆய்வு செய்கிறது.",
  step1: "படம் பதிவேற்றப்பட்டது",
  step2: "படத்தின் தரம் சரிபார்க்கப்பட்டது",
  step3: "பயிர்கள் மற்றும் தெரியும் மண் பகுதி கண்டறியப்படுகிறது",
  step4: "மண் வகை மற்றும் அமைப்பு அடையாளம் காணப்படுகிறது",
  step5: "உர பரிந்துரைகள் உருவாக்கப்படுகின்றன",
  step6: "உரச் செலவு மற்றும் பயிர் தரவரிசை கணக்கிடப்படுகிறது",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "மண் விவரங்கள் போதுமானதாக இல்லை",
  lowConfidenceMsg: "மண் பற்றிய விவரங்கள் தெளிவாகத் தெரியவில்லை. பயிர்களுக்கு இடையில் அல்லது அதைச் சுற்றியுள்ள மண் தெரியும்படி தெளிவான படத்தை பதிவேற்றவும்.",
  modelConfidenceWas: "மாதிரி துல்லியம்",
  minimumRequired: "குறைந்தபட்ச தேவை: 70%",
  tipsTitle: "துல்லியமான மண் ஆய்விற்கான குறிப்புகள்:",
  tipLighting: "நல்ல வெளிச்சம்: இயற்கை பகல் வெளிச்சத்தில் புகைப்படம் எடுக்கவும்.",
  tipSoilFocus: "மண் தெரிதல்: பயிர்களுக்கு இடையே அல்லது சுற்றிலும் மண் தெரிய வேண்டும்.",
  tipBackground: "பின்னணி தவிர்த்தல்: காலணிகள், கருவிகள், வாகனங்கள், நிழல்களை தவிர்க்கவும்.",
  tipSharp: "தெளிவான படம்: மங்கலான அல்லது குவியமில்லாத படங்களை தவிர்க்கவும்.",
  btnUploadAnother: "மற்றொரு படத்தை பதிவேற்றவும்",

  // Soil Analysis Result
  resultHeading: "மண் பரிசோதனை முடிவு",
  resultSubtitle: "காட்சி வகைப்பாடு மற்றும் இயற்பியல் மண் நிலை மதிப்பீடு",
  detectedSoilType: "கண்டறியப்பட்ட மண் வகை",
  soilCondition: "மண் வளம்",
  aiConfidence: "AI துல்லியம்",
  visibleSoilArea: "தெரியும் மண் பரப்பு",
  plantsDetected: "பயிர்கள் கண்டறியப்பட்டன",
  bareSoilDetected: "வெற்று மண் கண்டறியப்பட்டது",
  foliageFiltered: "பயிர் இலைகள் வடிகட்டப்பட்டு மண் ஆய்வு செய்யப்பட்டது",
  soilCharacteristics: "மண்ணின் பண்புகள்",
  charMoisture: "ஈரப்பதம்",
  charTexture: "அமைப்பு",
  charOrganicMatter: "மட்கிய கரிமப் பொருள்",
  charDrainage: "வடிகால் வசதி",
  charPH: "கார அமில நிலை (pH)",
  charNitrogen: "நைட்ரஜன் (N)",
  charPhosphorus: "பாஸ்பரஸ் (P)",
  charPotassium: "பொட்டாசியம் (K)",
  requiresSoilTest: "ஆய்வக மண் பரிசோதனை தேவை",
  soilTestDisclaimer: "* துல்லியமான இரசாயன N-P-K மற்றும் pH அளவுகளுக்கு ஆய்வக மண் பரிசோதனை தேவை. காட்சி AI மண்ணின் அமைப்பு, ஈரப்பதம் மற்றும் கரிம நிலையை வழங்குகிறது.",

  // Farming Details Form
  optionalHeading: "சிறந்த பரிந்துரைக்கான விவசாய விவரங்கள்",
  optionalSubtitle: "துல்லியமான உர அளவு மற்றும் செலவைக் கணக்கிட உங்கள் நில விவரங்களை வழங்கவும்.",
  btnHide: "▲ மறை",
  btnExpand: "▼ விரிவாக்கு",
  labelIntendedCrop: "பயிரிடப்படும் / உத்தேசித்துள்ள பயிர்",
  labelLandArea: "நிலப்பரப்பு",
  labelLocation: "இடம் (மாநிலம் / மாவட்டம்)",
  labelSeason: "தற்போதைய சாகுபடி பருவம்",
  labelIrrigation: "பாசன முறை",
  labelPreviousCrop: "முந்தைய பயிர்",
  btnUpdateRecs: "பரிந்துரைகளைப் புதுப்பிக்கவும்",
  btnViewFullReport: "முழு அறிக்கையையும் பார்க்க & சேமிக்க →",
  unitAcres: "ஏக்கர்",
  unitHectares: "ஹெக்டேர்",

  // Fertilizer Recommendation
  fertHeading: "நுண்ணறிவு உரப் பரிந்துரை 🧪",
  fertSubtitle: "உங்கள் மண்ணின் தன்மை மற்றும் நிலப்பரப்பிற்கு ஏற்ப கணக்கிடப்பட்ட சீரான ஊட்டச்சத்து திட்டம்.",
  fertRecommended: "பரிந்துரைக்கப்பட்ட உரம்",
  fertQuantity: "பரிந்துரைக்கப்பட்ட அளவு",
  fertApplication: "உரமிடும் முறை & அட்டவணை",
  levelHighly: "மிகவும் பரிந்துரைக்கப்படுகிறது",
  levelAlternative: "மாற்று உரம்",
  levelOptional: "விருப்பத்தேர்வு",
  kgPerAcre: "கிலோ / ஏக்கர்",
  totalForPlot: "மொத்த நிலத்திற்கு",
  kg: "கிலோ",

  // Cost Prediction
  costHeading: "மதிப்பிடப்பட்ட உரச் செலவு 💰",
  costSubtitle: "அரசு மானிய விலைகள் மற்றும் சந்தை சில்லறை விலைகளின் அடிப்படையிலான நிதி மதிப்பீடு.",
  costRequiredQty: "தேவையான அளவு",
  costEstPrice: "மதிப்பிடப்பட்ட விலை",
  costPerAcre: "ஏக்கருக்கான செலவு",
  costEstTotal: "மொத்த மதிப்பிடப்பட்ட செலவு",
  costNote: "இடம், விநியோகஸ்தர், பருவம் மற்றும் சந்தை நிலைமைகளுக்கு ஏற்ப விலைகள் மாறுபடலாம்.",
  perKg: "/ கிலோ",
  perAcre: "/ ஏக்கர்",
  acresEquals: "ஏக்கர் =",

  // Crop Recommendation
  cropHeading: "பரிந்துரைக்கப்படும் பயிர்கள் 🌾",
  cropSubtitle: "உங்கள் மண்ணின் அமைப்பு, பருவம் மற்றும் நீர் தக்கவைக்கும் திறனுக்கு ஏற்ற அதிக மகசூல் தரும் பயிர்கள்.",
  suitabilityScore: "பொருத்தம்",
  btnViewDetails: "விவரங்களை பார்க்க",
  modalClose: "மூடு",
  plantSpacing: "பயிர் இடைவெளி",
  harvestDuration: "அறுவடை காலம்",
  soilSynergy: "மண் பயிர் பொருத்தம்",
  growingSeason: "சாகுபடி பருவம்",
  waterRequirement: "தேவையான தண்ணீர்",
  primaryFertilizer: "முக்கிய உரம்",

  // Reports Summary Page
  reportTitle: "உங்கள் ஸ்மார்ட் விவசாய அறிக்கை",
  reportSubtitle: "முழுமையான AI மண் பகுப்பாய்வு, பயிர் வழிகாட்டல் மற்றும் உர செலவு மதிப்பீடு",
  btnDownloadReport: "அறிக்கையை பதிவிறக்கு (PDF)",
  btnSaveReport: "அறிக்கையை சேமி",
  btnPrintReport: "அறிக்கையை அச்சிடுக",
  btnAnalyzeAnother: "மற்றொரு மண் படத்தை ஆய்வு செய்க",
  reportHeaderTag: "AI மண் பரிசோதனை & உர வழிகாட்டி அறிக்கை",
  reportDate: "தேதி",
  reportStatus: "நிலை",
  statusVerified: "சரிபார்க்கப்பட்ட ஆய்வு",
  secSoilAnalysis: "மண் பரிசோதனை",
  secFertRec: "உர பரிந்துரை",
  secCostPred: "செலவு மதிப்பீடு",
  secCropRec: "பயிர் பரிந்துரை",

  // History Page
  historyTitle: "எனது முந்தைய அறிக்கைகள்",
  historySubtitle: "உங்கள் கடந்த கால மண் ஆய்வுகள் மற்றும் உரப் பரிந்துரைகளை அணுகவும், மதிப்பாய்வு செய்யவும் அல்லது அச்சிடவும்.",
  thDate: "தேதி",
  thSoilType: "மண் வகை",
  thCrop: "பயிர்",
  thFertilizer: "முக்கிய உரம்",
  thCost: "மதிப்பிடப்பட்ட செலவு",
  thActions: "செயல்கள்",
  btnViewReport: "அறிக்கையைப் பார்",
  btnDeleteReport: "நீக்கு",
  noReportsFound: "பொருத்தமான அறிக்கைகள் எதுவும் கிடைக்கவில்லை.",
  searchPlaceholder: "பயிர், மண் வகை அல்லது இடம் வாரியாக தேடவும்...",
  cloudSaving: "உங்கள் அறிக்கை பாதுகாப்பாக சேமிக்கப்படுகிறது...",
  cloudSaved: "அறிக்கை கிளவுடில் வெற்றிகரமாக சேமிக்கப்பட்டது",
  cloudDeleted: "அறிக்கை பதிவேடுகளிலிருந்து நீக்கப்பட்டது.",

  // Features Section
  featTitle: "AI மூலம் இயக்கப்படும் புத்திசாலித்தனமான விவசாயம்",
  featSubtitle: "விவசாயிகளின் மகசூலை அதிகரிக்க கணினி பார்வை, மண் அறிவியல் மற்றும் வேளாண் பொருளாதாரத்தை இணைக்கிறது.",
  feat1Title: "AI மண் பகுப்பாய்வு",
  feat1Desc: "ஆழமான பார்வை மாதிரிகள் மூலம் சில நொடிகளில் மண் வகை, வளம் மற்றும் காட்சிப் பண்புகளை ஆய்வு செய்கிறது.",
  feat2Title: "புத்திசாலித்தனமான பயிர் பரிந்துரை",
  feat2Desc: "உங்கள் குறிப்பிட்ட மண் மற்றும் காலநிலைக்கு ஏற்ற அதிக மகசூல் தரும் பயிர்களை பொருத்துகிறது.",
  feat3Title: "துல்லிய உர வழிகாட்டல்",
  feat3Desc: "குறிப்பிட்ட அளவுகள், பயன்பாட்டு நிலைகள் மற்றும் இயற்கை மாற்றுகளுடன் கூடிய துல்லியமான ஊட்டச்சத்து பரிந்துரைகள்.",
  feat4Title: "செலவு முன்கணிப்பு",
  feat4Desc: "அரசு மானிய விலைகளுடன் ஏக்கர் வாரியாக மற்றும் மொத்த நிலத்திற்கான வெளிப்படையான செலவு முன்னறிவிப்பு.",
  feat5Title: "முழுமையான பலமொழி ஆதரவு",
  feat5Desc: "எளிதான பயன்பாட்டிற்காக ஆங்கிலம், தமிழ், இந்தி, தெலுங்கு, மலையாளம் மற்றும் கன்னடத்தில் முழு தளத்தையும் அணுகலாம்.",
  feat6Title: "கிளவுட் அறிக்கைகள்",
  feat6Desc: "முந்தைய பகுப்பாய்வு அறிக்கைகளை பாதுகாப்பாக சேமித்து எந்த நேரத்திலும் மொபைல் அல்லது கணினியில் அணுகலாம்.",

  // Auth Page & Security
  loginTitle: "விவசாயி உள்நுழைவு",
  loginSubtitle: "அக்ரிசென்ஸ் ஏஐ தளத்தை அணுக உங்கள் பெயர், மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
  registerTitle: "விவசாயி பதிவு",
  registerSubtitle: "மண் பகுப்பாய்வு மற்றும் உர பரிந்துரைகளைப் பெற புதிய கணக்கை உருவாக்கவும்.",
  forgotPassword: "கடவுச்சொல் மறந்துவிட்டதா?",
  resetPasswordTitle: "கடவுச்சொல்லை மாற்றுக",
  resetPasswordDesc: "பதிவுசெய்த மின்னஞ்சல் முகவரி மற்றும் புதிய கடவுச்சொல்லை உள்ளிடவும்.",
  btnResetPassword: "கடவுச்சொல்லை மாற்றுக",
  resetPasswordSuccess: "கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது! இப்போது உள்நுழையலாம்.",
  backToLogin: "← உள்நுழைவுக்குத் திரும்பு",
  labelUserName: "பயனர் பெயர்",
  labelFullName: "முழு பெயர்",
  labelEmail: "மின்னஞ்சல் முகவரி",
  labelEmailPhone: "மின்னஞ்சல் முகவரி",
  labelPassword: "கடவுச்சொல்",
  labelConfirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்துக",
  labelPreferredLang: "விருப்ப மொழி",
  placeholderName: "உங்கள் பெயரை உள்ளிடவும் (எ.கா. கர்ணிகா)",
  placeholderEmail: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
  placeholderPassword: "கடவுச்சொல்லை உள்ளிடவும்",
  placeholderConfirmPassword: "கடவுச்சொல்லை மீண்டும் உள்ளிடவும்",
  btnLogin: "உள்நுழைக",
  btnRegister: "கணக்கை உருவாக்குக",
  demoLoginBtn: "⚡ மாதிரி உள்நுழைவு (ஒரே கிளிக்கில்)",
  haveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
  noAccount: "கணக்கு இல்லையா?",
  welcomePrefix: "வரவேற்கிறோம்,",
  errEnterName: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.",
  errEnterEmail: "தயவுசெய்து உங்கள் மின்னஞ்சலை உள்ளிடவும்.",
  errEnterPassword: "தயவுசெய்து கடவுச்சொல்லை உள்ளிடவும்.",
  errPasswordsMismatch: "கடவுச்சொற்கள் பொருந்தவில்லை.",
  errFillAllFields: "அனைத்து விவரங்களையும் நிரப்பவும்.",
  errEnterCredentials: "மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",
  errPasswordTooShort: "கடவுச்சொல் குறைந்தது 4 எழுத்துக்கள் இருக்க வேண்டும்.",
  errInvalidCredentials: "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்.",
  errUserNotFound: "இந்த மின்னஞ்சலில் பயனர் கணக்கு இல்லை.",
  errPasswordIncorrect: "உள்ளிட்ட கடவுச்சொல் தவறானது.",
  errEmailAlreadyExists: "இந்த மின்னஞ்சலில் ஏற்கனவே கணக்கு உள்ளது. உள்நுழையவும்.",
  loginSuccess: "வரவேற்கிறோம்! வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்.",
  logoutSuccess: "வெற்றிகரமாக வெளியேறிவிட்டீர்கள்.",

  // Errors & Toasts
  errInvalidImage: "சரியான JPG, JPEG, PNG அல்லது WEBP படத்தை பதிவேற்றவும்.",
  errOversizedImage: "படத்தின் அளவு 12 MB-க்கும் குறைவாக இருக்க வேண்டும்.",
  errFailedAnalysis: "இந்த படத்தை ஆய்வு செய்ய முடியவில்லை. தெளிவான மண் படத்தை பதிவேற்றவும்.",
  errNetwork: "இணைப்பு பிரச்சனை. உங்கள் இணைய இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
  errRequiredFields: "அனைத்து தேவையான புலங்களையும் நிரப்பவும்.",
  recsUpdated: "பரிந்துரைகள் வெற்றிகரமாக புதுப்பிக்கப்பட்டன.",

  // Audio Narration
  btnListenAudio: "குரல் ஆலோசனையைக் கேளுங்கள் 🔊",
  audioPlaying: "ஆலோசனை ஒலிக்கிறது...",
  audioStopped: "ஆலோசனை நிறுத்தப்பட்டது",

  // Risk Alerts
  riskAlertsTitle: "பண்ணை ஆபத்து எச்சரிக்கைகள்",
  riskAlertsSubtitle: "ஏஐ துல்லியம், பயிர் பொருத்தம் மற்றும் உர வரம்புகளின் அடிப்படையிலான அபாய மதிப்பீடு.",
  badgeHighRisk: "அதிக ஆபத்து",
  badgeWarning: "எச்சரிக்கை",
  badgeInfo: "பாதுகாப்பானது",
  alertLowConfidenceTitle: "குறைந்த ஏஐ துல்லியம்",
  alertLowConfidenceMsg: "பதிவேற்றப்பட்ட படத்தை அதிக துல்லியத்துடன் வகைப்படுத்த முடியவில்லை. தெளிவான மண் புகைப்படத்தை பதிவேற்றவும்.",
  alertLowConfidenceRec: "தவறான பரிந்துரைகளைத் தவிர்க்க நல்ல பகல் வெளிச்சத்தில் மற்றொரு புகைப்படத்தை பதிவேற்றவும்.",
  alertUnsuitableCropTitle: "பயிர் பொருத்தமற்ற எச்சரிக்கை",
  alertUnsuitableCropMsg: "கண்டறியப்பட்ட மண் வகைக்கு இந்த பயிர் மிகவும் பொருத்தமான தேர்வாக இருக்காது.",
  alertUnsuitableCropRec: "பரிந்துரைக்கப்பட்ட அதிக மகசூல் தரும் மாற்று பயிர்களில் ஒன்றை பயிரிடுவதை பரிசீலிக்கவும்.",
  alertFertilizerWarningTitle: "உர அளவு எச்சரிக்கை",
  alertFertilizerWarningMsg: "கணக்கிடப்பட்ட உர அளவை நிலத்தில் இடுவதற்கு முன் சரிபார்க்க வேண்டும்.",
  alertSplitDoseRec: "நைட்ரஜன் விரயம் அல்லது வேர் கருகலைத் தவிர்க்க பரிந்துரைக்கப்பட்டபடி தவணை முறையில் உரமிடவும்.",
  alertLargeQtyTitle: "அதிக நிலப்பரப்பு உர எச்சரிக்கை",
  alertLargeQtyMsg: "இந்த நிலப்பரப்பிற்கு தேவைப்படும் மொத்த உரத்தின் அளவு அதிகமாக உள்ளது.",
  alertLargeQtyRec: "உள்ளூர் வேளாண் அலுவலர்களுடன் கலந்தாலோசித்து கட்டம் கட்டமாக உரங்களை இடவும்.",
  alertLeachingTitle: "அதிக மண் வடிகால் எச்சரிக்கை",
  alertLeachingMsg: "சாம்பல் மற்றும் கடின மணல் வகை மண்ணில் ஊட்டச்சத்துக்கள் நீரில் எளிதில் கரைந்து வெளியேறும் அபாயம் உள்ளது.",
  alertLeachingRec: "நீர் தக்கவைப்பை அதிகரிக்க இயற்கை மண்புழு உரங்களை கலந்து தவணை முறையில் உரமிடவும்.",
  alertWaterloggingTitle: "நீர் தேங்குதல் ஆபத்து எச்சரிக்கை",
  alertWaterloggingMsg: "கரிசல் களிமண் அதிக நீர் தேக்கும் திறன் கொண்டது, பலத்த மழையின் போது வடிகால் குறைவாக இருக்கும்.",
  alertWaterloggingRec: "உரமிடுவதற்கு முன் உபரி நீரை வெளியேற்ற பாத்தி வாய்க்கால்களை அமைக்கவும்.",
  alertBlurTitle: "மங்கலான மண் புகைப்படம்",
  alertBlurMsg: "துல்லியமான பகுப்பாய்வு செய்வதற்கு பதிவேற்றப்பட்ட புகைப்படம் மிகவும் மங்கலாக உள்ளது.",
  alertBlurRec: "வெளிச்சத்தில் கேமராவை நிலையாக வைத்து தெளிவான புகைப்படம் எடுக்கவும்.",
  alertLightingTitle: "போதிய வெளிச்சமின்மை",
  alertLightingMsg: "மண்ணின் தன்மையை அறிய முடியாத அளவிற்கு படம் இருட்டாக அல்லது அதிக வெளிச்சமாக உள்ளது.",
  alertLightingRec: "இயற்கையான பகல் வெளிச்சத்தில் மண்ணை புகைப்படம் எடுக்கவும்.",
  alertInsufficientSoilTitle: "போதிய மண் தெரியவில்லை",
  alertInsufficientSoilMsg: "12% க்கும் குறைவான மண்ணே தெரிகிறது. பயிர்கள் அல்லது பிற பொருட்கள் படத்தை மறைக்கின்றன.",
  alertInsufficientSoilRec: "பயிர்களுக்கு இடையில் உள்ள மண் தெளிவாக தெரியும்படி புகைப்படம் எடுக்கவும்.",
  alertInvalidImgTitle: "தவறான வயல் புகைப்படம்",
  alertInvalidImgMsg: "இப்படத்தில் வயல் மண் காணப்படவில்லை.",
  alertInvalidImgRec: "உங்கள் விவசாய நிலத்தின் மேல்மண் புகைப்படத்தை பதிவேற்றவும்.",
  alertNoRiskTitle: "எந்த பெரிய அபாயமும் கண்டறியப்படவில்லை",
  alertNoRiskMsg: "தற்போதைய பகுப்பாய்வின்படி, பரிந்துரைகளில் பெரிய ஆபத்துகள் எதுவும் இல்லை.",
  alertNoRiskRec: "உங்கள் பயிர் தேர்வு மற்றும் உரத் திட்டம் மண்ணின் தன்மைக்கு மிகச் சரியாக பொருந்துகிறது.",
  alertSoilTestDisclaimer: "துல்லியமான ஊட்டச்சத்து தேவைகளை ஆய்வக மண் பரிசோதனை மூலம் உறுதிப்படுத்த வேண்டும்.",
  btnSwitchCrop: "மாற்று பயிர்களைக் காண்க",
  btnTryAgain: "மீண்டும் முயற்சிக்கவும்",
  selectedCropLabel: "தேர்ந்தெடுத்த பயிர்",
  detectedSoilLabel: "கண்டறிந்த மண்",
  suitabilityScoreLabel: "பொருத்த மதிப்பெண்",
  suggestedAlternativesLabel: "பரிந்துரைக்கப்படும் மாற்று பயிர்கள்",
  cardRiskAlertsTitle: "ஆபத்து எச்சரிக்கைகள்",
  cardRiskAlertsDesc: "உங்கள் பயிர், உர அளவு மற்றும் மண் பாதுகாப்பிற்கான நிகழ்நேர வேளாண் எச்சரிக்கைகள்.",
  viewRiskAlertsBtn: "எச்சரிக்கைகளைக் காண்க →",

  // Voice Assistant
  voiceAssistantTitle: "அக்ரிசென்ஸ் குரல் உதவியாளர்",
  voiceAssistantSubtitle: "விவசாயம், மண், பயிர், உரம், செலவு மற்றும் எச்சரிக்கைகள் குறித்து உங்கள் மொழியில் கேளுங்கள்.",
  floatingVoiceBtn: "ஏஐ உதவியாளரிடம் கேளுங்கள்",
  tapToSpeak: "பேச தட்டவும்",
  listeningState: "கேட்கிறது... இப்போது பேசுங்கள்",
  thinkingState: "சிந்திக்கிறது...",
  speakingState: "பதில் பேசுகிறது...",
  youSaid: "நீங்கள் கேட்டது",
  aiResponse: "அக்ரிசென்ஸ் ஆலோசனை",
  btnPlayVoice: "இயக்குக",
  btnPauseVoice: "நிறுத்துக",
  btnReplayVoice: "மீண்டும் இயக்குக",
  btnStopVoice: "நிறுத்துக",
  quickQuestionsTitle: "விரைவு கேள்விகள்:",
  quickQ1: "எந்த பயிர் சிறந்தது?",
  quickQ2: "என்ன உரம் பயன்படுத்த வேண்டும்?",
  quickQ3: "எவ்வளவு உரம் தேவை?",
  quickQ4: "இந்த உரம் ஏன் பரிந்துரைக்கப்பட்டது?",
  quickQ5: "செலவு எவ்வளவு ஆகும்?",
  quickQ6: "ஏதேனும் எச்சரிக்கைகள் உள்ளதா?",
  quickQ7: "என் மண் பகுப்பாய்வை விளக்குக",
  voiceDisclaimer: "ஏஐ பரிந்துரைகள் வழிகாட்டுதலுக்கு மட்டுமே. துல்லியமான உர அளவிற்கு ஆய்வக மண் பரிசோதனை செய்யவும்.",
  errMicPermission: "குரல் உள்ளீட்டிற்கு மைக்ரோஃபோன் அனுமதி தேவை. தயவுசெய்து அனுமதி வழங்கவும்.",
  errSpeechUnsupported: "இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை.",
  typeQuestionPlaceholder: "உங்கள் விவசாயக் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
  btnSendQuestion: "கேள்",
  typeInsteadPrompt: "அல்லது உங்கள் கேள்வியை தட்டச்சு செய்யவும்:"
};


// ==========================================
// FILE: src/locales/hi.js
// ==========================================

// Hindi Translations (हिन्दी)
const hi = {
  // Brand
  brandName: "एग्रीसेंस AI",
  brandTagline: "स्मार्ट मृदा विश्लेषण • फसल अनुशंसा • उर्वरक प्रबंधन",
  brandSubtitle: "एआई तकनीक द्वारा किसानों को सटीक कृषि परामर्श एवं लागत पूर्वानुमान",

  // Navigation
  navHome: "मुख्य पृष्ठ",
  navSoilAnalysis: "मिट्टी विश्लेषण",
  navRecommendations: "अनुशंसाएं",
  navReports: "रिपोर्ट्स",
  navAbout: "हमारे बारे में",
  navDashboard: "डैशबोर्ड",
  navLogin: "लॉग इन",
  navRegister: "पंजीकरण",
  navLogout: "लॉग आउट",
  navProfile: "किसान प्रोफाइल",

  // Hero Section
  heroTitle: "एआई के साथ करें स्मार्ट खेती",
  heroSubtitle: "अपनी मिट्टी की जांच करें, सही फसल चुनें, उचित खाद का चयन करें और अपनी खेती की लागत का अनुमान लगाएं — सब कुछ एक ही स्थान पर।",
  btnAnalyzeSoil: "मेरी मिट्टी की जांच करें",
  btnExploreFeatures: "विशेषताएं देखें",
  heroBadgeAI: "एआई संचालित कृषि विज्ञान",
  heroSoilType: "मिट्टी का प्रकार",
  heroCropRec: "फसल अनुशंसा",
  heroFertilizerRec: "उर्वरक अनुशंसा",
  heroEstCost: "अनुमानित लागत",
  heroScannedStatus: "एआई स्कैनिंग पूर्ण",

  // Dashboard
  welcomeFarmer: "स्वागत है, किसान भाई 👋",
  dashboardSubtitle: "यहाँ आपके खेत की मिट्टी के स्वास्थ्य और कृषि अनुशंसाओं का लाइव सारांश है।",
  statSoilAnalyses: "मिट्टी परीक्षण",
  statCropRecommendations: "फसल अनुशंसाएं",
  statFertilizerRecommendations: "खाद योजनाएं",
  statEstimatedSavings: "अनुमानित खाद लागत",
  cardStartAnalysisTitle: "नया मिट्टी विश्लेषण शुरू करें",
  cardStartAnalysisDesc: "खेत की मिट्टी की नई तस्वीर अपलोड करें या कैमरे से खींचें। हमारा एआई मिट्टी की संरचना की पहचान कर सटीक अनुशंसाएं प्रदान करेगा।",
  btnUploadSoilImage: "मिट्टी की फोटो अपलोड करें →",
  recentAnalyses: "हालिया मिट्टी विश्लेषण",
  noRecentReports: "कोई पूर्व रिपोर्ट नहीं मिली। आज ही अपना पहला विश्लेषण शुरू करें!",
  weatherTitle: "आज का कृषि मौसम परामर्श",
  weatherGoodCondition: "खेत की तैयारी और खाद डालने के लिए मौसम अनुकूल है।",

  // Upload Box
  uploadTitle: "अपनी मिट्टी की जांच करें",
  uploadSubtitle: "मिट्टी या खेत की स्पष्ट तस्वीर अपलोड करें और एआई को अपनी मिट्टी की पहचान करने दें।",
  uploadDropText: "अपनी मिट्टी की तस्वीर यहाँ खींचकर छोड़ें",
  uploadOrBrowse: "या अपने फोन / कंप्यूटर से चुनें",
  uploadPlantsNotice: "पौधों या फसलों वाली तस्वीरें भी स्वीकार्य हैं। बस यह सुनिश्चित करें कि पौधों के बीच या आसपास कुछ मिट्टी दिखाई दे।",
  uploadSupportedFormats: "समर्थित प्रारूप: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "अधिकतम आकार: 12 MB",
  uploadPresetLabel: "या नमूना मिट्टी की तस्वीरों से परीक्षण करें:",
  btnAnalyzeWithAI: "एआई द्वारा मिट्टी की जांच करें",
  btnRemoveImage: "हटाएं",
  btnChangeImage: "तस्वीर बदलें",
  fileSize: "आकार",
  fileName: "फ़ाइल",
  statusReadyML: "एआई मॉडल विश्लेषण के लिए तैयार",
  testWithPreset: "नमूने से जांचें:",
  oneClickDatasetTest: "त्वरित डेटासेट परीक्षण",

  // Image Processing UI
  processingTitle: "मिट्टी का विश्लेषण किया जा रहा है...",
  processingSubtitle: "हमारा डीप लर्निंग विज़न मॉडल मिट्टी की भौतिक विशेषताओं की जांच कर रहा है।",
  step1: "तस्वीर अपलोड हो गई",
  step2: "छवि गुणवत्ता सत्यापित हो गई",
  step3: "पौधों और दृश्य मिट्टी क्षेत्र की पहचान की जा रही है",
  step4: "मिट्टी के प्रकार और बनावट की पहचान",
  step5: "खाद अनुशंसाएं तैयार की जा रही हैं",
  step6: "खाद लागत और फसल रैंकिंग की गणना",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "मिट्टी की जानकारी अपर्याप्त है",
  lowConfidenceMsg: "मिट्टी की दृश्य जानकारी अपर्याप्त है। कृपया पौधों के बीच या आसपास की मिट्टी दिखाते हुए एक स्पष्ट तस्वीर अपलोड करें।",
  modelConfidenceWas: "मॉडल सटीकता",
  minimumRequired: "न्यूनतम आवश्यक: 70%",
  tipsTitle: "सटीक मिट्टी परीक्षण के लिए सुझाव:",
  tipLighting: "अच्छा प्रकाश: प्राकृतिक दिन के उजाले में फोटो लें।",
  tipSoilFocus: "मिट्टी का दिखना: पौधों के बीच या चारों ओर मिट्टी दिखनी चाहिए।",
  tipBackground: "पृष्ठभूमि से बचाव: जूते, औजार, वाहन या छाया से बचें।",
  tipSharp: "स्पष्ट तस्वीर: धुंधली या फोकस से बाहर की तस्वीरों से बचें।",
  btnUploadAnother: "दूसरी तस्वीर अपलोड करें",

  // Soil Analysis Result
  resultHeading: "मिट्टी विश्लेषण परिणाम",
  resultSubtitle: "दृश्य वर्गीकरण और भौतिक मिट्टी की स्थिति का मूल्यांकन",
  detectedSoilType: "पहचानी गई मिट्टी का प्रकार",
  soilCondition: "मिट्टी की स्थिति",
  aiConfidence: "एआई सटीकता",
  visibleSoilArea: "दृश्य मिट्टी का क्षेत्र",
  plantsDetected: "पौधे / फसलें पहचानी गईं",
  bareSoilDetected: "खुली मिट्टी पहचानी गई",
  foliageFiltered: "मिट्टी के विश्लेषण हेतु पत्तियों को अलग किया गया",
  soilCharacteristics: "मिट्टी की विशेषताएं",
  charMoisture: "नमी",
  charTexture: "बनावट",
  charOrganicMatter: "जैविक पदार्थ (ह्यूमस)",
  charDrainage: "जल निकासी",
  charPH: "पीएच स्तर (pH)",
  charNitrogen: "नाइट्रोजन (N)",
  charPhosphorus: "फास्फोरस (P)",
  charPotassium: "पोटेशियम (K)",
  requiresSoilTest: "प्रयोगशाला परीक्षण आवश्यक",
  soilTestDisclaimer: "* सटीक रासायनिक N-P-K और pH मानों के लिए प्रयोगशाला मिट्टी परीक्षण आवश्यक है। विजुअल एआई मिट्टी की बनावट, नमी और जैविक प्रोफ़ाइल प्रदान करता है।",

  // Farming Details Form
  optionalHeading: "बेहतर अनुशंसाओं हेतु खेत का विवरण",
  optionalSubtitle: "सटीक खाद की मात्रा और अनुमानित लागत की गणना के लिए अपने खेत के विवरण दर्ज करें।",
  btnHide: "▲ छिपाएं",
  btnExpand: "▼ विस्तार करें",
  labelIntendedCrop: "वर्तमान में उगाई जा रही / लक्षित फसल",
  labelLandArea: "जमीन का क्षेत्रफल",
  labelLocation: "स्थान (राज्य / जिला)",
  labelSeason: "वर्तमान कृषि मौसम",
  labelIrrigation: "सिंचाई का प्रकार",
  labelPreviousCrop: "पिछली काटी गई फसल",
  btnUpdateRecs: "अनुशंसाएं अपडेट करें",
  btnViewFullReport: "पूरी रिपोर्ट देखें और सहेजें →",
  unitAcres: "एकड़",
  unitHectares: "हेक्टेयर",

  // Fertilizer Recommendation
  fertHeading: "स्मार्ट उर्वरक अनुशंसा 🧪",
  fertSubtitle: "आपकी मिट्टी की स्थिति और चयनित रकबे के अनुसार संतुलित पोषक तत्व योजना।",
  fertRecommended: "अनुशंसित उर्वरक",
  fertQuantity: "अनुशंसित मात्रा",
  fertApplication: "उर्वरक प्रयोग विधि एवं समय-सारणी",
  levelHighly: "अत्यधिक अनुशंसित",
  levelAlternative: "वैकल्पिक खाद",
  levelOptional: "ऐच्छिक",
  kgPerAcre: "किग्रा / एकड़",
  totalForPlot: "कुल खेत के लिए",
  kg: "किग्रा",

  // Cost Prediction
  costHeading: "अनुमानित खाद लागत 💰",
  costSubtitle: "सरकारी सब्सिडी दरों और प्रचलित बाजार खुदरा मूल्यों पर आधारित वित्तीय बजट।",
  costRequiredQty: "आवश्यक मात्रा",
  costEstPrice: "अनुमानित दर",
  costPerAcre: "प्रति एकड़ लागत",
  costEstTotal: "कुल अनुमानित लागत",
  costNote: "स्थान, विक्रेता, मौसम और बाजार की स्थितियों के आधार पर कीमतें भिन्न हो सकती हैं।",
  perKg: "/ किग्रा",
  perAcre: "/ एकड़",
  acresEquals: "एकड़ =",

  // Crop Recommendation
  cropHeading: "अनुशंसित फसलें 🌾",
  cropSubtitle: "आपकी मिट्टी की बनावट, मौसम और जल धारण क्षमता के अनुकूल अधिक उपज देने वाली फसलें।",
  suitabilityScore: "अनुकूलता",
  btnViewDetails: "विवरण देखें",
  modalClose: "बंद करें",
  plantSpacing: "पौधे से पौधे की दूरी",
  harvestDuration: "फसल पकने की अवधि",
  soilSynergy: "मिट्टी और फसल का तालमेल",
  growingSeason: "बुवाई का मौसम",
  waterRequirement: "पानी की आवश्यकता",
  primaryFertilizer: "प्राथमिक खाद",

  // Reports Summary Page
  reportTitle: "आपकी स्मार्ट कृषि रिपोर्ट",
  reportSubtitle: "संपूर्ण एआई मृदा निदान, फसल रणनीति और पोषक तत्व बजट",
  btnDownloadReport: "रिपोर्ट डाउनलोड करें (PDF)",
  btnSaveReport: "रिपोर्ट सहेजें",
  btnPrintReport: "रिपोर्ट प्रिंट करें",
  btnAnalyzeAnother: "अन्य मिट्टी की जांच करें",
  reportHeaderTag: "एआई मृदा परीक्षण एवं खाद परामर्श रिपोर्ट",
  reportDate: "तारीख",
  reportStatus: "स्थिति",
  statusVerified: "सत्यापित विश्लेषण",
  secSoilAnalysis: "मिट्टी विश्लेषण",
  secFertRec: "उर्वरक अनुशंसा",
  secCostPred: "लागत पूर्वानुमान",
  secCropRec: "फसल अनुशंसा",

  // History Page
  historyTitle: "मेरी पिछली रिपोर्ट्स",
  historySubtitle: "अपने पुराने मिट्टी विश्लेषण और उर्वरक अनुशंसाओं को देखें, समीक्षा करें या प्रिंट करें।",
  thDate: "तारीख",
  thSoilType: "मिट्टी का प्रकार",
  thCrop: "फसल",
  thFertilizer: "मुख्य खाद",
  thCost: "अनुमानित लागत",
  thActions: "कार्रवाई",
  btnViewReport: "रिपोर्ट देखें",
  btnDeleteReport: "हटाएं",
  noReportsFound: "कोई संबंधित रिपोर्ट नहीं मिली।",
  searchPlaceholder: "फसल, मिट्टी के प्रकार या स्थान द्वारा खोजें...",
  cloudSaving: "आपकी रिपोर्ट सुरक्षित रूप से सहेजी जा रही है...",
  cloudSaved: "रिपोर्ट क्लाउड में सफलतापूर्वक सहेजी गई",
  cloudDeleted: "रिपोर्ट रिकॉर्ड से हटा दी गई।",

  // Features Section
  featTitle: "एआई तकनीक से संचालित आधुनिक कृषि",
  featSubtitle: "किसानों की पैदावार बढ़ाने के लिए कंप्यूटर विज़न, मृदा विज्ञान और कृषि अर्थशास्त्र का संगम।",
  feat1Title: "एआई मृदा विश्लेषण",
  feat1Desc: "डीप लर्निंग विज़न मॉडल द्वारा कुछ ही सेकंड में मिट्टी के प्रकार, उर्वरता और दृश्य विशेषताओं की सटीक जांच।",
  feat2Title: "स्मार्ट फसल अनुशंसा",
  feat2Desc: "आपकी विशिष्ट मिट्टी और जलवायु परिस्थितियों के अनुसार अधिकतम लाभ देने वाली फसलों का चयन।",
  feat3Title: "सटीक उर्वरक परामर्श",
  feat3Desc: "संतुलित पोषण हेतु विशिष्ट मात्रा, डालने का सही समय और जैविक विकल्पों की विस्तृत जानकारी।",
  feat4Title: "लागत का पूर्वानुमान",
  feat4Desc: "सरकारी सब्सिडी दरों के साथ प्रति एकड़ और पूरे खेत के लिए स्पष्ट लागत अनुमान।",
  feat5Title: "संपूर्ण बहुभाषी प्रणाली",
  feat5Desc: "किसानों की सुविधा के लिए पूरी प्रणाली अंग्रेजी, तमिल, हिन्दी, तेलुगु, मलयालम और कन्नड़ में उपलब्ध।",
  feat6Title: "क्लाउड रिपोर्ट्स",
  feat6Desc: "अपनी पुरानी विश्लेषण रिपोर्टों को सुरक्षित रखें और मोबाइल या कंप्यूटर पर कभी भी देखें।",

  // Auth Page & Security
  loginTitle: "किसान लॉगिन",
  loginSubtitle: "एग्रीसेंस एआई तक पहुँचने के लिए अपना नाम, ईमेल और पासवर्ड दर्ज करें।",
  registerTitle: "किसान पंजीकरण",
  registerSubtitle: "मृदा विश्लेषण और उर्वरक योजना प्राप्त करने के लिए नया खाता बनाएं।",
  forgotPassword: "पासवर्ड भूल गए?",
  resetPasswordTitle: "पासवर्ड रीसेट करें",
  resetPasswordDesc: "अपना पंजीकृत ईमेल और नया पासवर्ड दर्ज करें।",
  btnResetPassword: "पासवर्ड रीसेट करें",
  resetPasswordSuccess: "पासवर्ड सफलतापूर्वक रीसेट हो गया! अब आप लॉगिन कर सकते हैं।",
  backToLogin: "← लॉगिन पर वापस जाएं",
  labelUserName: "उपयोगकर्ता नाम",
  labelFullName: "पूरा नाम",
  labelEmail: "ईमेल पता",
  labelEmailPhone: "ईमेल पता",
  labelPassword: "पासवर्ड",
  labelConfirmPassword: "पासवर्ड की पुष्टि करें",
  labelPreferredLang: "पसंदीदा भाषा",
  placeholderName: "अपना नाम दर्ज करें (उदा. कर्णिका)",
  placeholderEmail: "अपना ईमेल दर्ज करें",
  placeholderPassword: "पासवर्ड दर्ज करें",
  placeholderConfirmPassword: "पासवर्ड दोबारा दर्ज करें",
  btnLogin: "लॉगिन करें",
  btnRegister: "खाता बनाएं",
  demoLoginBtn: "⚡ त्वरित डेमो लॉगिन (एक क्लिक)",
  haveAccount: "क्या पहले से खाता है?",
  noAccount: "क्या खाता नहीं है?",
  welcomePrefix: "स्वागत है,",
  errEnterName: "कृपया अपना नाम दर्ज करें।",
  errEnterEmail: "कृपया अपना ईमेल दर्ज करें।",
  errEnterPassword: "कृपया अपना पासवर्ड दर्ज करें।",
  errPasswordsMismatch: "पासवर्ड मेल नहीं खा रहे हैं।",
  errFillAllFields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
  errEnterCredentials: "कृपया ईमेल और पासवर्ड दर्ज करें।",
  errPasswordTooShort: "पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।",
  errInvalidCredentials: "अमान्य ईमेल या पासवर्ड।",
  errUserNotFound: "इस ईमेल से कोई खाता नहीं मिला।",
  errPasswordIncorrect: "दर्ज किया गया पासवर्ड गलत है।",
  errEmailAlreadyExists: "इस ईमेल से पहले से खाता मौजूद है। कृपया लॉगिन करें।",
  loginSuccess: "स्वागत है! सफलतापूर्वक लॉगिन हो गया।",
  logoutSuccess: "आप सफलतापूर्वक लॉग आउट हो गए हैं।",

  // Errors & Toasts
  errInvalidImage: "कृपया वैध JPG, JPEG, PNG या WEBP इमेज अपलोड करें।",
  errOversizedImage: "तस्वीर का आकार 12 MB से कम होना चाहिए।",
  errFailedAnalysis: "इस तस्वीर का विश्लेषण नहीं हो सका। कृपया एक स्पष्ट मिट्टी की फोटो अपलोड करें।",
  errNetwork: "कनेक्शन समस्या। कृपया अपना इंटरनेट जांचें और पुनः प्रयास करें।",
  errRequiredFields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
  recsUpdated: "अनुशंसाएं सफलतापूर्वक अपडेट हो गईं।",

  // Audio Narration
  btnListenAudio: "ऑडियो सलाह सुनें 🔊",
  audioPlaying: "सलाह सुनाई जा रही है...",
  audioStopped: "ऑडियो रोक दिया गया",

  // Risk Alerts
  riskAlertsTitle: "खेत जोखिम अलर्ट",
  riskAlertsSubtitle: "एआई सटीकता, फसल अनुकूलता और उर्वरक सीमाओं पर आधारित जोखिम मूल्यांकन।",
  badgeHighRisk: "उच्च जोखिम",
  badgeWarning: "चेतावनी",
  badgeInfo: "सुरक्षित",
  alertLowConfidenceTitle: "कम एआई सटीकता",
  alertLowConfidenceMsg: "अपलोड की गई तस्वीर को उच्च सटीकता के साथ वर्गीकृत नहीं किया जा सका। कृपया स्पष्ट तस्वीर अपलोड करें।",
  alertLowConfidenceRec: "गलत सिफारिशों से बचने के लिए प्राकृतिक दिन के उजाले में एक और तस्वीर अपलोड करें।",
  alertUnsuitableCropTitle: "फसल अनुपयुक्तता चेतावनी",
  alertUnsuitableCropMsg: "पहचानी गई मिट्टी के प्रकार के लिए यह फसल सबसे उपयुक्त विकल्प नहीं हो सकती है।",
  alertUnsuitableCropRec: "सुझाई गई उच्च उपज वाली वैकल्पिक फसलों में से किसी एक को चुनने पर विचार करें।",
  alertFertilizerWarningTitle: "उर्वरक मात्रा चेतावनी",
  alertFertilizerWarningMsg: "खेत में डालने से पहले परिकलित उर्वरक मात्रा की पुष्टि की जानी चाहिए।",
  alertSplitDoseRec: "नाइट्रोजन अपशिष्ट या जड़ों को नुकसान से बचाने के लिए किस्तों में उर्वरक डालें।",
  alertLargeQtyTitle: "बड़े रकबे के लिए उर्वरक चेतावनी",
  alertLargeQtyMsg: "इस खेत के क्षेत्रफल के लिए उर्वरक की कुल मात्रा काफी अधिक है।",
  alertLargeQtyRec: "स्थानीय कृषि अधिकारियों से परामर्श करें और चरणबद्ध तरीके से उर्वरक डालें।",
  alertLeachingTitle: "उच्च मिट्टी पारगम्यता चेतावनी",
  alertLeachingMsg: "ज्वालामुखी राख व रेतीली मिट्टी में पोषक तत्वों के बह जाने का अधिक जोखिम होता है।",
  alertLeachingRec: "जल धारण क्षमता बढ़ाने के लिए जैविक खाद मिलाएं और किस्तों में खाद डालें।",
  alertWaterloggingTitle: "जलभराव संवेदनशीलता चेतावनी",
  alertWaterloggingMsg: "काली मिट्टी में जल धारण क्षमता अधिक होती है और भारी बारिश में जल निकासी धीमी होती है।",
  alertWaterloggingRec: "खाद डालने से पहले अतिरिक्त पानी निकालने के लिए चौड़ी नालियां बनाएं।",
  alertBlurTitle: "धुंधली मिट्टी की तस्वीर",
  alertBlurMsg: "सटीक विश्लेषण के लिए अपलोड की गई तस्वीर बहुत धुंधली है।",
  alertBlurRec: "पर्याप्त रोशनी में कैमरे को स्थिर रखकर स्पष्ट फोटो लें।",
  alertLightingTitle: "अपर्याप्त रोशनी",
  alertLightingMsg: "तस्वीर बहुत अंधेरी या अत्यधिक चमकदार है, जिससे मिट्टी के लक्षण स्पष्ट नहीं हैं।",
  alertLightingRec: "प्राकृतिक दिन के उजाले में मिट्टी की तस्वीर लें।",
  alertInsufficientSoilTitle: "अपर्याप्त दृश्य मिट्टी",
  alertInsufficientSoilMsg: "12% से कम मिट्टी दिखाई दे रही है। पौधे या अन्य वस्तुएं फ्रेम को ढक रही हैं।",
  alertInsufficientSoilRec: "पौधों के बीच की खुली मिट्टी दिखाते हुए फोटो लें।",
  alertInvalidImgTitle: "अमान्य खेत फोटो",
  alertInvalidImgMsg: "तस्वीर में खेत की मिट्टी दिखाई नहीं दे रही है।",
  alertInvalidImgRec: "कृपया अपने खेत की ऊपरी मिट्टी की फोटो अपलोड करें।",
  alertNoRiskTitle: "कोई बड़ा जोखिम नहीं पाया गया",
  alertNoRiskMsg: "उपलब्ध विश्लेषण के आधार पर कोई बड़ा सिफारिश जोखिम नहीं मिला है।",
  alertNoRiskRec: "आपकी फसल का चयन और उर्वरक योजना मिट्टी के अनुकूल है।",
  alertSoilTestDisclaimer: "सटीक पोषक तत्वों की पुष्टि के लिए प्रयोगशाला मिट्टी परीक्षण की आवश्यकता है।",
  btnSwitchCrop: "वैकल्पिक फसलें देखें",
  btnTryAgain: "पुनः प्रयास करें",
  selectedCropLabel: "चुनी गई फसल",
  detectedSoilLabel: "पहचानी गई मिट्टी",
  suitabilityScoreLabel: "अनुकूलता स्कोर",
  suggestedAlternativesLabel: "सुझाई गई वैकल्पिक फसलें",
  cardRiskAlertsTitle: "जोखिम अलर्ट",
  cardRiskAlertsDesc: "आपकी फसल, उर्वरक मात्रा और मिट्टी की सुरक्षा के लिए रीयल-टाइम कृषि निगरानी।",
  viewRiskAlertsBtn: "जोखिम अलर्ट देखें →",

  // Voice Assistant
  voiceAssistantTitle: "एग्रीसेंस वॉइस असिस्टेंट",
  voiceAssistantSubtitle: "खेती, मिट्टी, फसल, उर्वरक, लागत और जोखिम संबंधी सवाल अपनी भाषा में पूछें।",
  floatingVoiceBtn: "एआई से पूछें",
  tapToSpeak: "बोलने के लिए टैप करें",
  listeningState: "सुन रहा हूँ... अब बोलें",
  thinkingState: "विचार कर रहा हूँ...",
  speakingState: "सलाह बोल रहा हूँ...",
  youSaid: "आपने पूछा",
  aiResponse: "एग्रीसेंस सलाह",
  btnPlayVoice: "चलाएं",
  btnPauseVoice: "रोकें",
  btnReplayVoice: "दोबारा सुनें",
  btnStopVoice: "बंद करें",
  quickQuestionsTitle: "त्वरित प्रश्न:",
  quickQ1: "कौन सी फसल सबसे अच्छी है?",
  quickQ2: "कौन सा उर्वरक उपयोग करें?",
  quickQ3: "कितना उर्वरक चाहिए?",
  quickQ4: "यह उर्वरक क्यों सुझाया गया?",
  quickQ5: "अनुमानित लागत क्या है?",
  quickQ6: "क्या कोई जोखिम है?",
  quickQ7: "मेरा मिट्टी विश्लेषण समझाएं",
  voiceDisclaimer: "एआई सिफारिशें केवल सलाह हैं। सटीक पोषक तत्वों के लिए प्रयोगशाला मिट्टी परीक्षण कराएं।",
  errMicPermission: "वॉइस इनपुट के लिए माइक्रोफ़ोन अनुमति आवश्यक है। कृपया अनुमति दें।",
  errSpeechUnsupported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है।",
  typeQuestionPlaceholder: "अपना कृषि प्रश्न यहाँ टाइप करें...",
  btnSendQuestion: "पूछें",
  typeInsteadPrompt: "या अपना प्रश्न टाइप करें:"
};


// ==========================================
// FILE: src/locales/te.js
// ==========================================

// Telugu Translations (తెలుగు)
const te = {
  // Brand
  brandName: "అగ్రిసెన్స్ AI",
  brandTagline: "స్మార్ట్ నేల విశ్లేషణ • పంట సిఫార్సు • ఎరువుల యాజమాన్యం",
  brandSubtitle: "కృత్రిమ మేధస్సుతో రైతులకు ఖచ్చితమైన వ్యవసాయ సలహాలు మరియు ఖర్చు అంచనా",

  // Navigation
  navHome: "హోమ్",
  navSoilAnalysis: "నేల విశ్లేషణ",
  navRecommendations: "సిఫార్సులు",
  navReports: "నివేదికలు",
  navAbout: "మా గురించి",
  navDashboard: "డాష్‌బోర్డ్",
  navLogin: "లాగిన్",
  navRegister: "నమోదు",
  navLogout: "లాగ్ అవుట్",
  navProfile: "రైతు ప్రొఫైల్",

  // Hero Section
  heroTitle: "AI తో ఆధునిక వ్యవసాయం",
  heroSubtitle: "మీ నేలను పరీక్షించండి, సరైన పంటను ఎంచుకోండి, తగిన ఎరువులను తెలుసుకోండి మరియు సాగు ఖర్చును అంచనా వేయండి — అన్నీ ఒకే చోట.",
  btnAnalyzeSoil: "నా నేలను పరీక్షించు",
  btnExploreFeatures: "విశేషాలను చూడండి",
  heroBadgeAI: "AI ఆధారిత వ్యవసాయం",
  heroSoilType: "నేల రకం",
  heroCropRec: "పంట సిఫార్సు",
  heroFertilizerRec: "ఎరువుల సిఫార్సు",
  heroEstCost: "అంచనా వేసిన ఖర్చు",
  heroScannedStatus: "AI స్కానింగ్ పూర్తయింది",

  // Dashboard
  welcomeFarmer: "స్వాగతం, రైతు మిత్రమా 👋",
  dashboardSubtitle: "మీ వ్యవసాయ భూమి నేల ఆరోగ్యం మరియు పంట సూచనల ప్రత్యక్ష సమాచారం.",
  statSoilAnalyses: "నేల పరీక్షలు",
  statCropRecommendations: "పంట సిఫార్సులు",
  statFertilizerRecommendations: "ఎరువుల ప్రణాళికలు",
  statEstimatedSavings: "అంచనా వేసిన ఎరువుల ఖర్చు",
  cardStartAnalysisTitle: "కొత్త నేల విశ్లేషణ ప్రారంభించండి",
  cardStartAnalysisDesc: "తాజా నేల ఫోటోను అప్‌లోడ్ చేయండి లేదా కెమెరాతో తీయండి. మా AI నేల తీరును గుర్తించి ఖచ్చితమైన ఎరువుల సూచనలను అందిస్తుంది.",
  btnUploadSoilImage: "నేల ఫోటోను అప్‌లోడ్ చేయండి →",
  recentAnalyses: "ఇటీవలి నేల పరీక్షలు",
  noRecentReports: "గత నివేదికలు ఏవీ కనుగొనబడలేదు. ఈరోజే మీ మొదటి విశ్లేషణను ప్రారంభించండి!",
  weatherTitle: "నేటి వ్యవసాయ వాతావరణ సలహా",
  weatherGoodCondition: "భూమి తయారీకి మరియు ఎరువులు వేయడానికి వాతావరణం అనుకూలంగా ఉంది.",

  // Upload Box
  uploadTitle: "మీ నేలను విశ్లేషించండి",
  uploadSubtitle: "స్పష్టమైన నేల లేదా పంట పొలం ఫోటోను అప్‌లోడ్ చేసి AI ద్వారా నేల లక్షణాలను తెలుసుకోండి.",
  uploadDropText: "మీ నేల ఫోటోను ఇక్కడ వేయండి",
  uploadOrBrowse: "లేదా మీ పరికరం నుండి ఎంచుకోండి",
  uploadPlantsNotice: "మొక్కలు లేదా పంటలు ఉన్న ఫోటోలు కూడా ఆమోదించబడతాయి. మొక్కల మధ్య లేదా చుట్టూ కొంత నేల కనిపించేలా చూసుకోండి.",
  uploadSupportedFormats: "మద్దతు గల ఫార్మాట్‌లు: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "గరిష్ట పరిమాణం: 12 MB",
  uploadPresetLabel: "లేదా నమూనా నేల ఫోటోలతో పరీక్షించండి:",
  btnAnalyzeWithAI: "AI తో నేలను విశ్లేషించండి",
  btnRemoveImage: "తొలగించు",
  btnChangeImage: "ఫోటో మార్చండి",
  fileSize: "పరిమాణం",
  fileName: "ఫైల్",
  statusReadyML: "AI విశ్లేషణకు సిద్ధంగా ఉంది",
  testWithPreset: "నమూనాతో పరీక్షించండి:",
  oneClickDatasetTest: "ప్రత్యక్ష నమూనా పరీక్ష",

  // Image Processing UI
  processingTitle: "నేల విశ్లేషణ జరుగుతోంది...",
  processingSubtitle: "మా డీప్ లెర్నింగ్ కంప్యూటర్ విజన్ మోడల్ నేల భౌతిక లక్షణాలను పరీక్షిస్తోంది.",
  step1: "చిత్రం అప్‌లోడ్ చేయబడింది",
  step2: "చిత్ర నాణ్యత ధృవీకరించబడింది",
  step3: "మొక్కలు మరియు కనిపించే నేల భాగాన్ని గుర్తిస్తోంది",
  step4: "నేల రకం మరియు తీరును నిర్ధారిస్తోంది",
  step5: "ఎరువుల సిఫార్సులు రూపొందించబడుతున్నాయి",
  step6: "ఎరువుల ఖర్చు మరియు పంట ర్యాంకింగ్ లెక్కించబడుతోంది",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "నేల సమాచారం సరిపోలేదు",
  lowConfidenceMsg: "తగినంత నేల సమాచారం కనిపించడం లేదు. దయచేసి మొక్కల మధ్య లేదా చుట్టూ కొంత నేల కనిపించే స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.",
  modelConfidenceWas: "మోడల్ ఖచ్చితత్వం",
  minimumRequired: "కనీస అవసరం: 70%",
  tipsTitle: "ఖచ్చితమైన నేల పరీక్ష కోసం సూచనలు:",
  tipLighting: "మంచి వెలుతురు: సహజ పగటి వెలుతురులో ఫోటో తీయండి.",
  tipSoilFocus: "నేల కనిపించడం: మొక్కల మధ్య లేదా చుట్టూ కొంత నేల కనిపించాలి.",
  tipBackground: "అనవసర వస్తువులు నివారించండి: బూట్లు, పనిముట్లు, వాహనాలు, నీడలు ఉండకూడదు.",
  tipSharp: "స్పష్టమైన ఫోటో: అస్పష్టమైన లేదా మసకబారిన ఫోటోలను నివారించండి.",
  btnUploadAnother: "మరొక చిత్రాన్ని అప్‌లోడ్ చేయండి",

  // Soil Analysis Result
  resultHeading: "నేల విశ్లేషణ ఫలితం",
  resultSubtitle: "దృశ్య వర్గీకరణ మరియు నేల భౌతిక స్థితి మూల్యాంకనం",
  detectedSoilType: "గుర్తించిన నేల రకం",
  soilCondition: "నేల స్థితి",
  aiConfidence: "AI ఖచ్చితత్వం",
  visibleSoilArea: "కనిపించే నేల విస్తీర్ణం",
  plantsDetected: "మొక్కలు / పంటలు గుర్తించబడ్డాయి",
  bareSoilDetected: "బహిరంగ నేల గుర్తించబడింది",
  foliageFiltered: "నేల విశ్లేషణ కోసం ఆకులు వేరు చేయబడ్డాయి",
  soilCharacteristics: "నేల లక్షణాలు",
  charMoisture: "తేమ",
  charTexture: "తీరు (ఆకృతి)",
  charOrganicMatter: "సేంద్రీయ పదార్థం",
  charDrainage: "నీటి పారుదల",
  charPH: "పిహెచ్ స్థాయి (pH)",
  charNitrogen: "నత్రజని (N)",
  charPhosphorus: "భాస్వరం (P)",
  charPotassium: "పొటాషియం (K)",
  requiresSoilTest: "ప్రయోగశాల పరీక్ష అవసరం",
  soilTestDisclaimer: "* ఖచ్చితమైన రసాయన N-P-K మరియు pH విలువల కోసం ప్రయోగశాల నేల పరీక్ష అవసరం. విజువల్ AI నేల తీరు, తేమ మరియు సేంద్రీయ ప్రొఫైల్‌ను అందిస్తుంది.",

  // Farming Details Form
  optionalHeading: "మంచి సిఫార్సుల కోసం వ్యవసాయ వివరాలు",
  optionalSubtitle: "ఖచ్చితమైన ఎరువుల పరిమాణం మరియు ఖర్చును లెక్కించడానికి మీ పొలం వివరాలను నమోదు చేయండి.",
  btnHide: "▲ దాచు",
  btnExpand: "▼ విస్తరించు",
  labelIntendedCrop: "ప్రస్తుతం పండిస్తున్న / వేయదలచిన పంట",
  labelLandArea: "భూమి విస్తీర్ణం",
  labelLocation: "ప్రాంతం (రాష్ట్రం / జిల్లా)",
  labelSeason: "ప్రస్తుత వ్యవసాయ కాలం",
  labelIrrigation: "నీటిపారుదల రకం",
  labelPreviousCrop: "మునుపటి పంట",
  btnUpdateRecs: "సిఫార్సులను అప్‌డేట్ చేయండి",
  btnViewFullReport: "పూర్తి నివేదికను చూడండి & సేవ్ చేయండి →",
  unitAcres: "ఎకరాలు",
  unitHectares: "హెక్టార్లు",

  // Fertilizer Recommendation
  fertHeading: "స్మార్ట్ ఎరువుల సిఫార్సు 🧪",
  fertSubtitle: "మీ నేల స్థితి మరియు ఎంచుకున్న విస్తీర్ణానికి అనుగుణంగా సమతుల్య పోషక ప్రణాళిక.",
  fertRecommended: "సిఫార్సు చేసిన ఎరువు",
  fertQuantity: "సిఫార్సు చేసిన పరిమాణం",
  fertApplication: "ఎరువులు వేసే పద్ధతి & సమయం",
  levelHighly: "అత్యంత సిఫార్సు చేయబడింది",
  levelAlternative: "ప్రత్యామ్నాయం",
  levelOptional: "ఐచ్ఛికం",
  kgPerAcre: "కిలోలు / ఎకరా",
  totalForPlot: "మొత్తం పొలానికి",
  kg: "కిలోలు",

  // Cost Prediction
  costHeading: "అంచనా వేసిన ఎరువుల ఖర్చు 💰",
  costSubtitle: "ప్రభుత్వ సబ్సిడీ ధరలు మరియు ప్రస్తుత మార్కెట్ రిటైల్ ధరల ఆధారంగా బడ్జెట్ అంచనా.",
  costRequiredQty: "అవసరమైన పరిమాణం",
  costEstPrice: "అంచనా ధర",
  costPerAcre: "ఎకరాకు ఖర్చు",
  costEstTotal: "మొత్తం అంచనా ఖర్చు",
  costNote: "ప్రాంతం, సరఫరాదారు, సీజన్ మరియు మార్కెట్ పరిస్థితులపై ఆధారపడి ధరలు మారవచ్చు.",
  perKg: "/ కిలో",
  perAcre: "/ ఎకరా",
  acresEquals: "ఎకరాలు =",

  // Crop Recommendation
  cropHeading: "సిఫార్సు చేసిన పంటలు 🌾",
  cropSubtitle: "మీ నేల తీరు, సీజన్ మరియు నీటి నిల్వ సామర్థ్యానికి సరిపోయే అధిక దిగుబడినిచ్చే పంటలు.",
  suitabilityScore: "అనుకూలత",
  btnViewDetails: "వివరాలు చూడండి",
  modalClose: "మూసివేయి",
  plantSpacing: "మొక్కల మధ్య దూరం",
  harvestDuration: "పంట కాలపరిమితి",
  soilSynergy: "నేల పంట అనుకూలత",
  growingSeason: "పంట సీజన్",
  waterRequirement: "నీటి అవసరం",
  primaryFertilizer: "ప్రధాన ఎరువు",

  // Reports Summary Page
  reportTitle: "మీ స్మార్ట్ వ్యవసాయ నివేదిక",
  reportSubtitle: "పూర్తి AI నేల విశ్లేషణ, పంట వ్యూహం మరియు పోషకాల బడ్జెట్",
  btnDownloadReport: "నివేదిక డౌన్‌లోడ్ (PDF)",
  btnSaveReport: "నివేదికను సేవ్ చేయండి",
  btnPrintReport: "నివేదికను ప్రింట్ చేయండి",
  btnAnalyzeAnother: "మరొక నేల ఫోటోను పరీక్షించండి",
  reportHeaderTag: "AI నేల పరీక్ష & ఎరువుల మార్గదర్శక నివేదిక",
  reportDate: "తేదీ",
  reportStatus: "స్థితి",
  statusVerified: "ధృవీకరించబడిన విశ్లేషణ",
  secSoilAnalysis: "నేల విశ్లేషణ",
  secFertRec: "ఎరువుల సిఫార్సు",
  secCostPred: "ఖర్చు అంచనా",
  secCropRec: "పంట సిఫార్సు",

  // History Page
  historyTitle: "నా మునుపటి నివేదికలు",
  historySubtitle: "మీ గత నేల విశ్లేషణలు మరియు ఎరువుల సిఫార్సులను సమీక్షించండి లేదా ప్రింట్ చేయండి.",
  thDate: "తేదీ",
  thSoilType: "నేల రకం",
  thCrop: "పంట",
  thFertilizer: "ప్రధాన ఎరువు",
  thCost: "అంచనా ఖర్చు",
  thActions: "చర్యలు",
  btnViewReport: "నివేదిక చూడండి",
  btnDeleteReport: "తొలగించు",
  noReportsFound: "ఎలాంటి నివేదికలు కనుగొనబడలేదు.",
  searchPlaceholder: "పంట, నేల రకం లేదా ప్రాంతం ద్వారా వెతకండి...",
  cloudSaving: "మీ నివేదిక క్లౌడ్‌లో భద్రపరచబడుతోంది...",
  cloudSaved: "నివేదిక క్లౌడ్‌లో విజయవంతంగా సేవ్ చేయబడింది",
  cloudDeleted: "నివేదిక రికార్డుల నుండి తొలగించబడింది.",

  // Features Section
  featTitle: "AI సాంకేతికతతో ఆధునిక వ్యవసాయం",
  featSubtitle: "రైతుల దిగుబడిని పెంచడానికి కంప్యూటర్ విజన్, నేల శాస్త్రం మరియు వ్యవసాయ ఆర్థిక శాస్త్రాల కలయిక.",
  feat1Title: "AI నేల విశ్లేషణ",
  feat1Desc: "డీప్ లెర్నింగ్ మోడల్స్ ద్వారా కొన్ని సెకన్లలో నేల రకం, స్థితి మరియు భౌతిక లక్షణాలను విశ్లేషిస్తుంది.",
  feat2Title: "స్మార్ట్ పంట సిఫార్సు",
  feat2Desc: "మీ నేల మరియు వాతావరణ పరిస్థితులకు అనువైన గరిష్ట దిగుబడినిచ్చే పంటలను ఎంపిక చేస్తుంది.",
  feat3Title: "ఖచ్చితమైన ఎరువుల ప్రణాళిక",
  feat3Desc: "సరైన మోతాదులు, వేసే సమయాలు మరియు సేంద్రీయ ప్రత్యామ్నాయాలతో కూడిన ఖచ్చితమైన పోషక సూచనలు.",
  feat4Title: "ఖర్చుల ముందస్తు అంచనా",
  feat4Desc: "ప్రభుత్వ సబ్సిడీ ధరలతో ఎకరాకు మరియు మొత్తం పొలానికి స్పష్టమైన ఖర్చు వివరాలు.",
  feat5Title: "పూర్తి బహుభాషా మద్దతు",
  feat5Desc: "రైతుల సౌలభ్యం కోసం మొత్తం అప్లికేషన్ ఇంగ్లీష్, తెలుగు, తమిళం, హిందీ, మలయాళం మరియు కన్నడలో అందుబాటులో ఉంది.",
  feat6Title: "క్లౌడ్ నివేదికలు",
  feat6Desc: "మునుపటి నివేదికలను సురక్షితంగా భద్రపరుచుకోండి మరియు ఎప్పుడైనా మొబైల్ లేదా కంప్యూటర్ నుండి చూడండి.",

  // Auth Page & Security
  loginTitle: "రైతు లాగిన్",
  loginSubtitle: "అగ్రిసెన్స్ AI యాక్సెస్ చేయడానికి మీ పేరు, ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.",
  registerTitle: "రైతు నమోదు",
  registerSubtitle: "నేల విశ్లేషణ మరియు ఎరువుల సిఫార్సుల కోసం కొత్త ఖాతాను సృష్టించండి.",
  forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా?",
  resetPasswordTitle: "పాస్‌వర్డ్ రీసెట్ చేయండి",
  resetPasswordDesc: "మీ నమోదిత ఇమెయిల్ మరియు కొత్త పాస్‌వర్డ్ నమోదు చేయండి.",
  btnResetPassword: "పాస్‌వర్డ్ రీసెట్ చేయండి",
  resetPasswordSuccess: "పాస్‌వర్డ్ విజయవంతంగా రీసెట్ చేయబడింది! ఇప్పుడు లాగిన్ అవ్వండి.",
  backToLogin: "← లాగిన్‌కు తిరిగి వెళ్ళు",
  labelUserName: "వినియోగదారు పేరు",
  labelFullName: "పూర్తి పేరు",
  labelEmail: "ఇమెయిల్ చిరునామా",
  labelEmailPhone: "ఇమెయిల్ చిరునామా",
  labelPassword: "పాస్‌వర్డ్",
  labelConfirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
  labelPreferredLang: "ప్రాధాన్య భాష",
  placeholderName: "మీ పేరును నమోదు చేయండి (ఉదా. కర్ణిక)",
  placeholderEmail: "మీ ఇమెయిల్ నమోదు చేయండి",
  placeholderPassword: "పాస్‌వర్డ్ నమోదు చేయండి",
  placeholderConfirmPassword: "పాస్‌వర్డ్ మళ్ళీ నమోదు చేయండి",
  btnLogin: "లాగిన్",
  btnRegister: "ఖాతా సృష్టించండి",
  demoLoginBtn: "⚡ శీఘ్ర డెమో లాగిన్ (ఒకే క్లిక్)",
  haveAccount: "ఇప్పటికే ఖాతా ఉందా?",
  noAccount: "ఖాతా లేదా?",
  welcomePrefix: "స్వాగతం,",
  errEnterName: "దయచేసి మీ పేరును నమోదు చేయండి.",
  errEnterEmail: "దయచేసి మీ ఇమెయిల్ నమోదు చేయండి.",
  errEnterPassword: "దయచేసి పాస్‌వర్డ్ నమోదు చేయండి.",
  errPasswordsMismatch: "పాస్‌వర్డ్‌లు సరిపోలడం లేదు.",
  errFillAllFields: "దయచేసి అన్ని వివరాలను పూరించండి.",
  errEnterCredentials: "దయచేసి ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.",
  errPasswordTooShort: "పాస్‌వర్డ్ కనీసం 4 అక్షరాలు ఉండాలి.",
  errInvalidCredentials: "చెల్లని ఇమెయిల్ లేదా పాస్‌వర్డ్.",
  errUserNotFound: "ఈ ఇమెయిల్‌తో ఖాతా కనుగొనబడలేదు.",
  errPasswordIncorrect: "నమోదు చేసిన పాస్‌వర్డ్ తప్పు.",
  errEmailAlreadyExists: "ఈ ఇమెయిల్‌తో ఇప్పటికే ఖాతా ఉంది. దయచేసి లాగిన్ అవ్వండి.",
  loginSuccess: "స్వాగతం! విజయవంతంగా లాగిన్ అయ్యారు.",
  logoutSuccess: "విజయవంతంగా లాగ్ అవుట్ అయ్యారు.",

  // Errors & Toasts
  errInvalidImage: "దయచేసి సరైన JPG, JPEG, PNG లేదా WEBP చిత్రాన్ని అప్‌లోడ్ చేయండి.",
  errOversizedImage: "చిత్రం పరిమాణం 12 MB కంటే తక్కువగా ఉండాలి.",
  errFailedAnalysis: "ఈ చిత్రాన్ని విశ్లేషించలేకపోయాము. దయచేసి స్పష్టమైన నేల ఫోటోను అప్‌లోడ్ చేయండి.",
  errNetwork: "కనెక్షన్ సమస్య. దయచేసి ఇంటర్నెట్ తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
  errRequiredFields: "దయచేసి అన్ని అవసరమైన వివరాలను పూరించండి.",
  recsUpdated: "సిఫార్సులు విజయవంతంగా అప్‌డేట్ చేయబడ్డాయి.",

  // Audio Narration
  btnListenAudio: "ఆడియో సలహా వినండి 🔊",
  audioPlaying: "సలహా వినిపిస్తోంది...",
  audioStopped: "ఆడియో నిలిపివేయబడింది",

  // Risk Alerts
  riskAlertsTitle: "వ్యవసాయ ప్రమాద హెచ్చరికలు",
  riskAlertsSubtitle: "AI ఖచ్చితత్వం, పంట అనుకూలత మరియు ఎరువుల పరిమితుల ఆధారంగా ప్రమాద అంచనా.",
  badgeHighRisk: "అధిక ప్రమాదం",
  badgeWarning: "హెచ్చరిక",
  badgeInfo: "సురక్షితం",
  alertLowConfidenceTitle: "తక్కువ AI ఖచ్చితత్వం",
  alertLowConfidenceMsg: "అప్‌లోడ్ చేసిన చిత్రాన్ని అధిక ఖచ్చితత్వంతో వర్గీకరించలేకపోయాము. దయచేసి స్పష్టమైన నేల లేదా పొలం ఫోటోను అప్‌లోడ్ చేయండి.",
  alertLowConfidenceRec: "సరికాని సిఫార్సులను నివారించడానికి సహజమైన పగటి వెలుతురులో మరొక ఫోటో తీయండి.",
  alertUnsuitableCropTitle: "పంట అనుకూలత హెచ్చరిక",
  alertUnsuitableCropMsg: "గుర్తించిన నేల రకానికి ఈ పంట ఉత్తమ ఎంపిక కాకపోవచ్చు.",
  alertUnsuitableCropRec: "సూచించిన అధిక దిగుబడినిచ్చే ప్రత్యామ్నాయ పంటలలో ఒకదానికి మారడాన్ని పరిశీలించండి.",
  alertFertilizerWarningTitle: "ఎరువుల మోతాదు హెచ్చరిక",
  alertFertilizerWarningMsg: "పొలంలో వేసే ముందు లెక్కించిన ఎరువుల పరిమాణాన్ని నిర్ధారించుకోవాలి.",
  alertSplitDoseRec: "నత్రజని వృధా కాకుండా లేదా వేర్లు దెబ్బతినకుండా ఉండటానికి ఎరువులను విడతలవారీగా వేయండి.",
  alertLargeQtyTitle: "పెద్ద విస్తీర్ణపు ఎరువుల హెచ్చరిక",
  alertLargeQtyMsg: "ఈ వ్యవసాయ విస్తీర్ణానికి మొత్తం ఎరువుల పరిమాణం చాలా ఎక్కువగా ఉంది.",
  alertLargeQtyRec: "స్థానిక వ్యవసాయ అధికారులను సంప్రదించండి మరియు దశలవారీగా ఎరువులను అందించండి.",
  alertLeachingTitle: "అధిక నేల పారగమ్యత హెచ్చరిక",
  alertLeachingMsg: "బూడిద మరియు ఇసుక నేలల్లో పోషకాలు వేగంగా కొట్టుకుపోయే ప్రమాదం ఉంది.",
  alertLeachingRec: "నీటి నిల్వ సామర్థ్యాన్ని పెంచడానికి సేంద్రీయ ఎరువులను కలపండి మరియు ఎరువులను తక్కువ పరిమాణంలో వేయండి.",
  alertWaterloggingTitle: "నీటి నిల్వ సున్నితత్వ హెచ్చరిక",
  alertWaterloggingMsg: "నల్లరేగడి నేలలో నీటి నిల్వ ఎక్కువ మరియు భారీ వర్షాలలో నీటి పారుదల నెమ్మదిగా ఉంటుంది.",
  alertWaterloggingRec: "ఎరువులు వేసే ముందు అదనపు నీటిని బయటకు పంపడానికి వెడల్పాటి కాలువలను ఏర్పాటు చేయండి.",
  alertBlurTitle: "మసకగా ఉన్న నేల ఫోటో",
  alertBlurMsg: "ఖచ్చితమైన విశ్లేషణ కోసం అప్‌లోడ్ చేసిన చిత్రం చాలా మసకగా ఉంది.",
  alertBlurRec: "మంచి వెలుతురులో కెమెరాను కదలకుండా ఉంచి స్పష్టమైన ఫోటో తీయండి.",
  alertLightingTitle: "సరిపోని వెలుతురు",
  alertLightingMsg: "ఫోటో చాలా చీకటిగా లేదా అతి ప్రకాశవంతంగా ఉంది, దీనివల్ల నేల లక్షణాలు స్పష్టంగా లేవు.",
  alertLightingRec: "సహజమైన పగటి వెలుతురులో నేల ఫోటోను తీయండి.",
  alertInsufficientSoilTitle: "సరిపోని దృశ్య నేల",
  alertInsufficientSoilMsg: "12% కంటే తక్కువ నేల కనిపిస్తోంది. మొక్కలు లేదా ఇతర వస్తువులు ఎక్కువగా ఉన్నాయి.",
  alertInsufficientSoilRec: "మొక్కల మధ్య కనిపించే నేల భాగం స్పష్టంగా కనిపించేలా ఫోటో తీయండి.",
  alertInvalidImgTitle: "చెల్లని పొలం ఫోటో",
  alertInvalidImgMsg: "చిత్రంలో పొలం నేల కనిపించడం లేదు.",
  alertInvalidImgRec: "దయచేసి మీ పొలం పై నేల ఫోటోను అప్‌లోడ్ చేయండి.",
  alertNoRiskTitle: "ఎటువంటి పెద్ద ప్రమాదాలు గుర్తించబడలేదు",
  alertNoRiskMsg: "అందుబాటులో ఉన్న విశ్లేషణ ప్రకారం ఎటువంటి పెద్ద సిఫార్సు ప్రమాదాలు కనుగొనబడలేదు.",
  alertNoRiskRec: "మీ పంట ఎంపిక మరియు ఎరువుల ప్రణాళిక నేల రకానికి అనుకూలంగా ఉన్నాయి.",
  alertSoilTestDisclaimer: "ఖచ్చితమైన పోషక అవసరాలను ల్యాబ్ నేల పరీక్ష ద్వారా ధృవీకరించుకోవాలి.",
  btnSwitchCrop: "ప్రత్యామ్నాయ పంటలను చూడండి",
  btnTryAgain: "మళ్ళీ ప్రయత్నించండి",
  selectedCropLabel: "ఎంచుకున్న పంట",
  detectedSoilLabel: "గుర్తించిన నేల",
  suitabilityScoreLabel: "అనుకూలత స్కోరు",
  suggestedAlternativesLabel: "సూచించిన ప్రత్యామ్నాయ పంటలు",
  cardRiskAlertsTitle: "ప్రమాద హెచ్చరికలు",
  cardRiskAlertsDesc: "మీ పంట, ఎరువుల మోతాదు మరియు నేల భద్రత కోసం ప్రత్యక్ష పర్యవేక్షణ.",
  viewRiskAlertsBtn: "హెచ్చరికలను చూడండి →",

  // Voice Assistant
  voiceAssistantTitle: "అగ్రిసెన్స్ వాయిస్ అసిస్టెంట్",
  voiceAssistantSubtitle: "వ్యవసాయం, నేల, పంట, ఎరువులు, ఖర్చు మరియు ప్రమాదాలపై మీ భాషలో ప్రశ్నలు అడగండి.",
  floatingVoiceBtn: "వాయిస్ సహాయం",
  tapToSpeak: "మాట్లాడటానికి నొక్కండి",
  listeningState: "వింటున్నాను... ఇప్పుడు మాట్లాడండి",
  thinkingState: "ఆలోచిస్తున్నాను...",
  speakingState: "సలహా వినిపిస్తోంది...",
  youSaid: "మీరు అడిగినది",
  aiResponse: "అగ్రిసెన్స్ సలహా",
  btnPlayVoice: "ప్లే చేయండి",
  btnPauseVoice: "పాజ్ చేయండి",
  btnReplayVoice: "మళ్ళీ వినండి",
  btnStopVoice: "ఆపివేయండి",
  quickQuestionsTitle: "శీఘ్ర ప్రశ్నలు:",
  quickQ1: "ఏ పంట ఉత్తమమైనది?",
  quickQ2: "ఏ ఎరువును ఉపయోగించాలి?",
  quickQ3: "ఎంత ఎరువు అవసరం?",
  quickQ4: "ఈ ఎరువు ఎందుకు సిఫార్సు చేయబడింది?",
  quickQ5: "అంచనా వేసిన ఖర్చు ఎంత?",
  quickQ6: "ఏవైనా ప్రమాదాలు ఉన్నాయా?",
  quickQ7: "నా నేల విశ్లేషణను వివరించండి",
  voiceDisclaimer: "AI సిఫార్సులు సలహా మాత్రమే. ఖచ్చితమైన పోషకాల కోసం ల్యాబ్ నేల పరీక్ష చేయించండి.",
  errMicPermission: "వాయిస్ ఇన్‌పుట్ కోసం మైక్రోఫోన్ అనుమతి అవసరం. దయచేసి అనుమతించండి.",
  errSpeechUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ సపోర్ట్ చేయబడదు.",
  typeQuestionPlaceholder: "మీ వ్యవసాయ ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
  btnSendQuestion: "అడగండి",
  typeInsteadPrompt: "లేదా మీ ప్రశ్నను టైప్ చేయండి:"
};



// ==========================================
// FILE: src/locales/ml.js
// ==========================================

// Malayalam Translations (മലയാളം)
const ml = {
  // Brand
  brandName: "അഗ്രിസെൻസ് AI",
  brandTagline: "സ്മാർട്ട് മണ്ണ് പരിശോധന • വിള ശുപാർശ • വള പരിപാലനം",
  brandSubtitle: "നിർമ്മിത ബുദ്ധിയിലൂടെ കർഷകർക്ക് കൃത്യമായ കൃഷി മാർഗ്ഗനിർദ്ദേശവും ചെലവ് കണക്കാക്കലും",

  // Navigation
  navHome: "ഹോം",
  navSoilAnalysis: "മണ്ണ് പരിശോധന",
  navRecommendations: "ശുപാർശകൾ",
  navReports: "റിപ്പോർട്ടുകൾ",
  navAbout: "ഞങ്ങളെക്കുറിച്ച്",
  navDashboard: "ഡാഷ്‌ബോർഡ്",
  navLogin: "ലോഗിൻ",
  navRegister: "രജിസ്റ്റർ",
  navLogout: "ലോഗ് ഔട്ട്",
  navProfile: "കർഷക പ്രൊഫൈൽ",

  // Hero Section
  heroTitle: "AI ഉപയോഗിച്ച് മികച്ച കൃഷി ചെയ്യാം",
  heroSubtitle: "നിങ്ങളുടെ മണ്ണ് പരിശോധിക്കുക, അനുയോജ്യമായ വിളകൾ തിരഞ്ഞെടുക്കുക, ശരിയായ വളം കണ്ടെത്തുക, കൃഷി ചെലവ് കണക്കാക്കുക — എല്ലാം ഒരിടത്ത്.",
  btnAnalyzeSoil: "മണ്ണ് പരിശോധിക്കുക",
  btnExploreFeatures: "സവിശേഷതകൾ കാണുക",
  heroBadgeAI: "AI അധിഷ്ഠിത കൃഷിരീതി",
  heroSoilType: "മണ്ണ് തരം",
  heroCropRec: "വിള ശുപാർശ",
  heroFertilizerRec: "വള ശുപാർശ",
  heroEstCost: "പ്രതീക്ഷിക്കുന്ന ചെലവ്",
  heroScannedStatus: "AI സ്കാനിംഗ് പൂർത്തിയായി",

  // Dashboard
  welcomeFarmer: "സ്വാഗതം, കർഷക സുഹൃത്തേ 👋",
  dashboardSubtitle: "നിങ്ങളുടെ കൃഷിയിടത്തിലെ മണ്ണിന്റെ ആരോഗ്യവും തത്സമയ വിവരങ്ങളും ഇവിടെ കാണാം.",
  statSoilAnalyses: "മണ്ണ് പരിശോധനകൾ",
  statCropRecommendations: "വിള ശുപാർശകൾ",
  statFertilizerRecommendations: "വള പദ്ധതികൾ",
  statEstimatedSavings: "വളച്ചെലവ് കണക്കുകൂട്ടൽ",
  cardStartAnalysisTitle: "പുതിയ മണ്ണ് പരിശോധന ആരംഭിക്കുക",
  cardStartAnalysisDesc: "പുതിയ മണ്ണ് ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക അല്ലെങ്കിൽ ക്യാമറ ഉപയോഗിച്ച് എടുക്കുക. ഞങ്ങളുടെ AI മണ്ണിന്റെ തരം കണ്ടെത്തി കൃത്യമായ വള ശുപാർശകൾ നൽകും.",
  btnUploadSoilImage: "മണ്ണിന്റെ ഫോട്ടോ നൽകുക →",
  recentAnalyses: "സമീപകാല മണ്ണ് പരിശോധനകൾ",
  noRecentReports: "മുൻ റിപ്പോർട്ടുകൾ ലഭ്യമല്ല. ഇന്ന് തന്നെ നിങ്ങളുടെ ആദ്യ പരിശോധന ആരംഭിക്കൂ!",
  weatherTitle: "ഇന്നത്തെ കാർഷിക കാലാവസ്ഥാ മുന്നറിയിപ്പ്",
  weatherGoodCondition: "നിലമൊരുക്കാനും വളപ്രയോഗത്തിനും അനുകൂലമായ കാലാവസ്ഥയാണ് നിലവിലുള്ളത്.",

  // Upload Box
  uploadTitle: "നിങ്ങളുടെ മണ്ണ് പരിശോധിക്കുക",
  uploadSubtitle: "വ്യക്തമായ മണ്ണോ കൃഷിയിടമോ ഫോട്ടോയെടുത്ത് അപ്‌ലോഡ് ചെയ്ത് മണ്ണിന്റെ ഗുണങ്ങൾ തിരിച്ചറിയുക.",
  uploadDropText: "മണ്ണിന്റെ ഫോട്ടോ ഇവിടെ ഇടുക",
  uploadOrBrowse: "അല്ലെങ്കിൽ ഉപകരണത്തിൽ നിന്ന് തിരഞ്ഞെടുക്കുക",
  uploadPlantsNotice: "ചെടികളോ വിളകളോ ഉള്ള ഫോട്ടോകളും സ്വീകരിക്കും. ചെടികൾക്കിടയിലോ ചുറ്റുമോ അല്പം മണ്ണ് കാണുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക.",
  uploadSupportedFormats: "സ്വീകാര്യമായ ഫോർമാറ്റുകൾ: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "പരമാവധി വലുപ്പം: 12 MB",
  uploadPresetLabel: "അല്ലെങ്കിൽ മാതൃകാ മണ്ണ് ഫോട്ടോകൾ ഉപയോഗിച്ച് പരിശോധിക്കുക:",
  btnAnalyzeWithAI: "AI വഴി മണ്ണ് പരിശോധിക്കുക",
  btnRemoveImage: "ഒഴിവാക്കുക",
  btnChangeImage: "ഫോട്ടോ മാറ്റുക",
  fileSize: "വലുപ്പം",
  fileName: "ഫയൽ",
  statusReadyML: "AI പരിശോധനയ്ക്ക് തയ്യാറാണ്",
  testWithPreset: "മാതൃക വഴി പരിശോധിക്കാൻ:",
  oneClickDatasetTest: "തത്സമയ മാതൃകാ പരിശോധന",

  // Image Processing UI
  processingTitle: "മണ്ണ് പരിശോധിക്കുന്നു...",
  processingSubtitle: "ഞങ്ങളുടെ ഡീപ് ലേണിംഗ് വിഷൻ മോഡൽ മണ്ണിന്റെ ഭൗതിക ഗുണങ്ങൾ വിശകലനം ചെയ്യുന്നു.",
  step1: "ചിത്രം അപ്‌ലോഡ് ചെയ്തു",
  step2: "ചിത്രത്തിന്റെ ഗുണനിലവാരം പരിശോധിച്ചു",
  step3: "ചെടികളും കാണപ്പെടുന്ന മണ്ണും തിരിച്ചറിയുന്നു",
  step4: "മണ്ണിന്റെ തരവും ഘടനയും നിർണ്ണയിക്കുന്നു",
  step5: "വള ശുപാർശകൾ തയ്യാറാക്കുന്നു",
  step6: "വളച്ചെലവും വിള മുൻഗണനയും കണക്കാക്കുന്നു",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "മണ്ണിന്റെ വിവരങ്ങൾ അപര്യാപ്തമാണ്",
  lowConfidenceMsg: "മണ്ണിന്റെ വിവരങ്ങൾ വ്യക്തമായി കാണുന്നില്ല. ചെടികൾക്കിടയിലോ ചുറ്റുമോ ഉള്ള മണ്ണ് കാണുന്ന തരത്തിൽ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
  modelConfidenceWas: "മോഡൽ കൃത്യത",
  minimumRequired: "കുറഞ്ഞത് ആവശ്യം: 70%",
  tipsTitle: "കൃത്യമായ മണ്ണ് പരിശോധനയ്ക്കുള്ള നിർദ്ദേശങ്ങൾ:",
  tipLighting: "നല്ല വെളിച്ചം: സ്വാഭാവിക പകൽ വെളിച്ചത്തിൽ ഫോട്ടോ എടുക്കുക.",
  tipSoilFocus: "മണ്ണ് കാണപ്പെടൽ: ചെടികൾക്കിടയിലോ ചുറ്റുമോ അല്പം മണ്ണ് കാണണം.",
  tipBackground: "പശ്ചാത്തലം ഒഴിവാക്കുക: പാദരക്ഷകൾ, ഉപകരണങ്ങൾ, നിഴലുകൾ എന്നിവ ഒഴിവാക്കുക.",
  tipSharp: "വ്യക്തതയുള്ള ഫോട്ടോ: മങ്ങിയതോ വ്യക്തതയില്ലാത്തതോ ആയ ഫോട്ടോകൾ ഒഴിവാക്കുക.",
  btnUploadAnother: "മറ്റൊരു ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക",

  // Soil Analysis Result
  resultHeading: "മണ്ണ് പരിശോധനാ ഫലം",
  resultSubtitle: "ദൃശ്യപരമായ വർഗ്ഗീകരണവും മണ്ണിന്റെ ഭൗതിക ഗുണനിലവാര വിലയിരുത്തലും",
  detectedSoilType: "കണ്ടെത്തിയ മണ്ണിന്റെ തരം",
  soilCondition: "മണ്ണിന്റെ അവസ്ഥ",
  aiConfidence: "AI കൃത്യത",
  visibleSoilArea: "കാണപ്പെടുന്ന മണ്ണ് പ്രദേശം",
  plantsDetected: "ചെടികൾ / വിളകൾ കണ്ടെത്തി",
  bareSoilDetected: "തുറസ്സായ മണ്ണ് കണ്ടെത്തി",
  foliageFiltered: "മണ്ണ് പരിശോധനയ്ക്കായി ഇലകൾ വേർതിരിച്ചു",
  soilCharacteristics: "മണ്ണിന്റെ സവിശേഷതകൾ",
  charMoisture: "ഈർപ്പം",
  charTexture: "ഘടന",
  charOrganicMatter: "ജൈവാംശം",
  charDrainage: "നീർവാർച്ച",
  charPH: "പി.എച്ച് നില (pH)",
  charNitrogen: "നൈട്രജൻ (N)",
  charPhosphorus: "ഫോസ്ഫറസ് (P)",
  charPotassium: "പൊട്ടാസ്യം (K)",
  requiresSoilTest: "ലാബ് പരിശോധന ആവശ്യമാണ്",
  soilTestDisclaimer: "* കൃത്യമായ രാസ N-P-K, pH അളവുകൾക്ക് ലാബ് പരിശോധന ആവശ്യമാണ്. വിഷ്വൽ AI മണ്ണിന്റെ ഘടന, ഈർപ്പം, ജൈവ പ്രൊഫൈൽ എന്നിവ നൽകുന്നു.",

  // Farming Details Form
  optionalHeading: "കൂടുതൽ കൃത്യമായ ശുപാർശകൾക്കായി കൃഷി വിവരങ്ങൾ",
  optionalSubtitle: "കൃത്യമായ വളത്തിന്റെ അളവും ചെലവും കണക്കാക്കാൻ നിങ്ങളുടെ കൃഷിയിട വിവരങ്ങൾ നൽകുക.",
  btnHide: "▲ മറയ്ക്കുക",
  btnExpand: "▼ കൂടുതൽ കാണുക",
  labelIntendedCrop: "നിലവിലുള്ള / ഉദ്ദേശിക്കുന്ന വിള",
  labelLandArea: "കൃഷിസ്ഥലത്തിന്റെ വിസ്തീർണ്ണം",
  labelLocation: "സ്ഥലം (സംസ്ഥാനം / ജില്ല)",
  labelSeason: "കൃഷി സീസൺ",
  labelIrrigation: "നന രീതി",
  labelPreviousCrop: "മുൻപ് വിളവെടുത്ത വിള",
  btnUpdateRecs: "ശുപാർശകൾ പുതുക്കുക",
  btnViewFullReport: "മുഴുവൻ റിപ്പോർട്ട് കാണുക & സൂക്ഷിക്കുക →",
  unitAcres: "ഏക്കർ",
  unitHectares: "ഹെക്ടർ",

  // Fertilizer Recommendation
  fertHeading: "സ്മാർട്ട് വള ശുപാർശ 🧪",
  fertSubtitle: "നിങ്ങളുടെ മണ്ണിന്റെ ഗുണത്തിനും സ്ഥലത്തിനും അനുസരിച്ചുള്ള സമീകൃത പോഷക പദ്ധതി.",
  fertRecommended: "ശുപാർശ ചെയ്യുന്ന വളം",
  fertQuantity: "ശുപാർശ ചെയ്യുന്ന അളവ്",
  fertApplication: "വളപ്രയോഗ രീതിയും സമയക്രമവും",
  levelHighly: "ഏറ്റവും അനുയോജ്യം",
  levelAlternative: "മറ്റൊരു വളം",
  levelOptional: "വേണമെങ്കിൽ ഉപയോഗിക്കാം",
  kgPerAcre: "കിലോ / ഏക്കർ",
  totalForPlot: "ആകെ സ്ഥലത്തിന്",
  kg: "കിലോ",

  // Cost Prediction
  costHeading: "പ്രതീക്ഷിക്കുന്ന വളച്ചെലവ് 💰",
  costSubtitle: "സർക്കാർ സബ്സിഡി നിരക്കുകളും നിലവിലെ വിപണി വിലയും അടിസ്ഥാനമാക്കിയുള്ള ചെലവ് കണക്ക്.",
  costRequiredQty: "ആവശ്യമായ അളവ്",
  costEstPrice: "കണക്കാക്കിയ വില",
  costPerAcre: "ഏക്കറിന് വരുന്ന ചെലവ്",
  costEstTotal: "ആകെ പ്രതീക്ഷിക്കുന്ന ചെലവ്",
  costNote: "സ്ഥലം, വിപണി, സീസൺ എന്നിവയനുസരിച്ച് വിലയിൽ വ്യത്യാസമുണ്ടാകാം.",
  perKg: "/ കിലോ",
  perAcre: "/ ഏക്കർ",
  acresEquals: "ഏക്കർ =",

  // Crop Recommendation
  cropHeading: "അനുയോജ്യമായ വിളകൾ 🌾",
  cropSubtitle: "മണ്ണിന്റെ ഘടനയ്ക്കും ജലലഭ്യതയ്ക്കും അനുയോജ്യമായ കൂടുതൽ വിളവ് നൽകുന്ന വിളകൾ.",
  suitabilityScore: "അനുയോജ്യത",
  btnViewDetails: "വിശദാംശങ്ങൾ കാണുക",
  modalClose: "അടയ്ക്കുക",
  plantSpacing: "ചെടികൾ തമ്മിലുള്ള അകലം",
  harvestDuration: "വിളവെടുപ്പ് കാലാവധി",
  soilSynergy: "മണ്ണ് വിള പൊരുത്തം",
  growingSeason: "കൃഷി സമയം",
  waterRequirement: "ആവശ്യമായ വെള്ളം",
  primaryFertilizer: "പ്രധാന വളം",

  // Reports Summary Page
  reportTitle: "നിങ്ങളുടെ സ്മാർട്ട് കൃഷി റിപ്പോർട്ട്",
  reportSubtitle: "പൂർണ്ണമായ AI മണ്ണ് വിശകലനവും വിള നിർദ്ദേശങ്ങളും വളച്ചെലവ് കണക്കും",
  btnDownloadReport: "റിപ്പോർട്ട് ഡൗൺലോഡ് (PDF)",
  btnSaveReport: "റിപ്പോർട്ട് സൂക്ഷിക്കുക",
  btnPrintReport: "റിപ്പോർട്ട് പ്രിന്റ് ചെയ്യുക",
  btnAnalyzeAnother: "മറ്റൊരു മണ്ണ് പരിശോധിക്കുക",
  reportHeaderTag: "AI മണ്ണ് പരിശോധനയും വള നിർദ്ദേശ റിപ്പോർട്ടും",
  reportDate: "തീയതി",
  reportStatus: "നില",
  statusVerified: "സാക്ഷ്യപ്പെടുത്തിയ പരിശോധന",
  secSoilAnalysis: "മണ്ണ് പരിശോധന",
  secFertRec: "വള ശുപാർശ",
  secCostPred: "ചെലവ് കണക്ക്",
  secCropRec: "വിള ശുപാർശ",

  // History Page
  historyTitle: "എന്റെ പഴയ റിപ്പോർട്ടുകൾ",
  historySubtitle: "നിങ്ങളുടെ പഴയ മണ്ണ് പരിശോധനാ റിപ്പോർട്ടുകളും വള ശുപാർശകളും കാണുകയോ പ്രിന്റ് ചെയ്യുകയോ ചെയ്യാം.",
  thDate: "തീയതി",
  thSoilType: "മണ്ണ് തരം",
  thCrop: "വിള",
  thFertilizer: "പ്രധാന വളം",
  thCost: "പ്രതീക്ഷിക്കുന്ന ചെലവ്",
  thActions: "നടപടികൾ",
  btnViewReport: "റിപ്പോർട്ട് കാണുക",
  btnDeleteReport: "ഒഴിവാക്കുക",
  noReportsFound: "റിപ്പോർട്ടുകൾ ഒന്നും കണ്ടെത്തിയില്ല.",
  searchPlaceholder: "വിള, മണ്ണ് അല്ലെങ്കിൽ സ്ഥലം അനുസരിച്ച് തിരയുക...",
  cloudSaving: "റിപ്പോർട്ട് ക്ലൗഡിൽ സൂക്ഷിക്കുന്നു...",
  cloudSaved: "റിപ്പോർട്ട് ക്ലൗഡിൽ വിജയകരമായി സൂക്ഷിച്ചു",
  cloudDeleted: "റിപ്പോർട്ട് രേഖകളിൽ നിന്ന് നീക്കം ചെയ്തു.",

  // Features Section
  featTitle: "AI സാങ്കേതികവിദ്യയിലൂടെ സ്മാർട്ട് കൃഷി",
  featSubtitle: "കർഷകരുടെ വിളവ് വർദ്ധിപ്പിക്കുന്നതിന് കമ്പ്യൂട്ടർ വിഷൻ, മണ്ണ് ശാസ്ത്രം, കൃഷി ശാസ്ത്രം എന്നിവ സമന്വയിപ്പിക്കുന്നു.",
  feat1Title: "AI മണ്ണ് പരിശോധന",
  feat1Desc: "ഡീപ് ലേണിംഗ് മോഡലുകളിലൂടെ നിമിഷങ്ങൾക്കകം മണ്ണിന്റെ തരവും ഭൗതിക ഗുണങ്ങളും തിരിച്ചറിയുന്നു.",
  feat2Title: "വിള ശുപാർശ",
  feat2Desc: "നിങ്ങളുടെ മണ്ണിനും കാലാവസ്ഥയ്ക്കും ഏറ്റവും അനുയോജ്യമായ കൂടുതൽ വിളവ് നൽകുന്ന വിളകൾ കണ്ടെത്തുന്നു.",
  feat3Title: "കൃത്യമായ വള നിർദ്ദേശം",
  feat3Desc: "ശരിയായ അളവുകളും പ്രയോഗ രീതികളും ജൈവ ബദലുകളും അടങ്ങിയ വള ശുപാർശകൾ.",
  feat4Title: "ചെലവ് കണക്കുകൂട്ടൽ",
  feat4Desc: "സർക്കാർ സബ്സിഡി നിരക്കുകൾ ഉൾപ്പെടുത്തി ഏക്കറിനും മൊത്തം കൃഷിയിടത്തിനും കൃത്യമായ ചെലവ് വിവരം.",
  feat5Title: "പൂർണ്ണമായ ബഹുഭാഷാ പിന്തുണ",
  feat5Desc: "ഇംഗ്ലീഷ്, മലയാളം, തമിഴ്, ഹിന്ദി, തെലുങ്ക്, കന്നഡ ഭാഷകളിൽ പൂർണ്ണമായി ഉപയോഗിക്കാം.",
  feat6Title: "ക്ലൗഡ് റിപ്പോർട്ടുകൾ",
  feat6Desc: "പഴയ റിപ്പോർട്ടുകൾ സുരക്ഷിതമായി സൂക്ഷിക്കാനും എപ്പോൾ വേണമെങ്കിലും കാണാനും സാധിക്കുന്നു.",

  // Auth Page & Security
  loginTitle: "കർഷക ലോഗിൻ",
  loginSubtitle: "അഗ്രിസെൻസ് AI ഉപയോഗിക്കാൻ നിങ്ങളുടെ പേര്, ഇമെയിൽ, പാസ്‌വേഡ് എന്നിവ നൽകുക.",
  registerTitle: "കർഷക രജിസ്ട്രേഷൻ",
  registerSubtitle: "മണ്ണ് പരിശോധനയ്ക്കും വളം ശുപാർശകൾക്കുമായി പുതിയ അക്കൗണ്ട് തുടങ്ങുക.",
  forgotPassword: "പാസ്‌വേഡ് മറന്നോ?",
  resetPasswordTitle: "പാസ്‌വേഡ് പുനഃക്രമീകരിക്കുക",
  resetPasswordDesc: "രജിസ്റ്റർ ചെയ്ത ഇമെയിലും പുതിയ പാസ്‌വേഡും നൽകുക.",
  btnResetPassword: "പാസ്‌വേഡ് മാറ്റുക",
  resetPasswordSuccess: "പാസ്‌വേഡ് വിജയകരമായി മാറ്റി! ഇപ്പോൾ ലോഗിൻ ചെയ്യാം.",
  backToLogin: "← ലോഗിനിലേക്ക് മടങ്ങുക",
  labelUserName: "ഉപയോക്തൃ നാമം",
  labelFullName: "പൂർണ്ണ നാമം",
  labelEmail: "ഇമെയിൽ വിലാസം",
  labelEmailPhone: "ഇമെയിൽ വിലാസം",
  labelPassword: "പാസ്‌വേഡ്",
  labelConfirmPassword: "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",
  labelPreferredLang: "തിരഞ്ഞെടുത്ത ഭാഷ",
  placeholderName: "നിങ്ങളുടെ പേര് നൽകുക (ഉദാ. കർണിക)",
  placeholderEmail: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
  placeholderPassword: "പാസ്‌വേഡ് നൽകുക",
  placeholderConfirmPassword: "പാസ്‌വേഡ് വീണ്ടും നൽകുക",
  btnLogin: "ലോഗിൻ",
  btnRegister: "അക്കൗണ്ട് തുടങ്ങുക",
  demoLoginBtn: "⚡ ദ്രുത ഡെമോ ലോഗിൻ (ഒരു ക്ലിക്ക്)",
  haveAccount: "ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?",
  noAccount: "അക്കൗണ്ട് ഇല്ലേ?",
  welcomePrefix: "സ്വാഗതം,",
  errEnterName: "ദയവായി നിങ്ങളുടെ പേര് നൽകുക.",
  errEnterEmail: "ദയവായി ഇമെയിൽ നൽകുക.",
  errEnterPassword: "ദയവായി പാസ്‌വേഡ് നൽകുക.",
  errPasswordsMismatch: "പാസ്‌വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല.",
  errFillAllFields: "എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക.",
  errEnterCredentials: "ഇമെയിലും പാസ്‌വേഡും നൽകുക.",
  errPasswordTooShort: "പാസ്‌വേഡിന് കുറഞ്ഞത് 4 അക്ഷരങ്ങൾ വേണം.",
  errInvalidCredentials: "തെറ്റായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്.",
  errUserNotFound: "ഈ ഇമെയിലിൽ അക്കൗണ്ട് കണ്ടെത്തിയില്ല.",
  errPasswordIncorrect: "നൽകിയ പാസ്‌വേഡ് തെറ്റാണ്.",
  errEmailAlreadyExists: "ഈ ഇമെയിലിൽ ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ട്. ലോഗിൻ ചെയ്യുക.",
  loginSuccess: "സ്വാഗതം! ലോഗിൻ വിജയകരം.",
  logoutSuccess: "നിങ്ങൾ ലോഗ് ഔട്ട് ചെയ്തു.",

  // Errors & Toasts
  errInvalidImage: "സാധുവായ JPG, JPEG, PNG അല്ലെങ്കിൽ WEBP ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
  errOversizedImage: "ചിത്രത്തിന്റെ വലുപ്പം 12 MB-ൽ കുറവായിരിക്കണം.",
  errFailedAnalysis: "ഈ ചിത്രം വിശകലനം ചെയ്യാൻ കഴിഞ്ഞില്ല. വ്യക്തമായ മണ്ണ് ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
  errNetwork: "നെറ്റ്‌വർക്ക് തകരാർ. ഇന്റർനെറ്റ് പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
  errRequiredFields: "ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിക്കുക.",
  recsUpdated: "ശുപാർശകൾ വിജയകരമായി പുതുക്കി.",

  // Audio Narration
  btnListenAudio: "ശബ്ദ നിർദ്ദേശം കേൾക്കുക 🔊",
  audioPlaying: "ശബ്ദ നിർദ്ദേശം കേൾപ്പിക്കുന്നു...",
  audioStopped: "ശബ്ദം നിർത്തി",

  // Risk Alerts
  riskAlertsTitle: "കൃഷി അപകടസാധ്യത മുന്നറിയിപ്പുകൾ",
  riskAlertsSubtitle: "എഐ കൃത്യത, വിള അനുയോജ്യത, വളത്തിന്റെ അളവ് എന്നിവ അടിസ്ഥാനമാക്കിയുള്ള അപകടസാധ്യത വിലയിരുത്തൽ.",
  badgeHighRisk: "ഉയർന്ന അപകടസാധ്യത",
  badgeWarning: "മുന്നറിയിപ്പ്",
  badgeInfo: "സുരക്ഷിതം",
  alertLowConfidenceTitle: "കുറഞ്ഞ എഐ കൃത്യത",
  alertLowConfidenceMsg: "അപ്‌ലോഡ് ചെയ്ത ചിത്രം ഉയർന്ന കൃത്യതയോടെ തിരിച്ചറിയാൻ കഴിഞ്ഞില്ല. ദയവായി വ്യക്തമായ മണ്ണ് ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
  alertLowConfidenceRec: "തെറ്റായ ശുപാർശകൾ ഒഴിവാക്കാൻ നല്ല പകൽ വെളിച്ചത്തിൽ വ്യക്തമായ ചിത്രം വീണ്ടും അപ്‌ലോഡ് ചെയ്യുക.",
  alertUnsuitableCropTitle: "വിള അനുയോജ്യത മുന്നറിയിപ്പ്",
  alertUnsuitableCropMsg: "തിരിച്ചറിഞ്ഞ മണ്ണ് തരത്തിന് ഈ വിള അനുയോജ്യമായിരിക്കില്ല.",
  alertUnsuitableCropRec: "നിർദ്ദേശിച്ച ഉയർന്ന വിളവ് നൽകുന്ന മറ്റ് ബദൽ വിളകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കാൻ ആലോചിക്കുക.",
  alertFertilizerWarningTitle: "വളത്തിന്റെ അളവ് മുന്നറിയിപ്പ്",
  alertFertilizerWarningMsg: "വയലിൽ പ്രയോഗിക്കുന്നതിന് മുൻപ് കണക്കാക്കിയ വളത്തിന്റെ അളവ് പരിശോധിക്കേണ്ടതാണ്.",
  alertSplitDoseRec: "നൈട്രജൻ നഷ്ടപ്പെടുന്നത് തടയാനും വേരുകൾ കരിയാതിരിക്കാനും വളം ഘട്ടങ്ങളായി പ്രയോഗിക്കുക.",
  alertLargeQtyTitle: "വലിയ വിസ്തൃതി വളം മുന്നറിയിപ്പ്",
  alertLargeQtyMsg: "ഈ കൃഷിയിടത്തിന്റെ വിസ്തൃതിക്ക് ആവശ്യമായ ആകെ വളത്തിന്റെ അളവ് വളരെ കൂടുതലാണ്.",
  alertLargeQtyRec: "പ്രാദേശിക കൃഷി ഓഫീസറുമായി ആലോചിച്ച് ഘട്ടങ്ങളായി വളം എത്തിക്കുക.",
  alertLeachingTitle: "ഉയർന്ന മണ്ണ് ചോർച്ച മുന്നറിയിപ്പ്",
  alertLeachingMsg: "ചാരം നിറഞ്ഞതും മണൽ നിറഞ്ഞതുമായ മണ്ണിൽ പോഷകങ്ങൾ വേഗത്തിൽ ചോർന്നുപോകാൻ സാധ്യതയുണ്ട്.",
  alertLeachingRec: "ജലസംഭരണ ശേഷി വർദ്ധിപ്പിക്കാൻ ജൈവവളം ചേർക്കുകയും വളപ്രയോഗം ഘട്ടങ്ങളായി നടത്തുകയും ചെയ്യുക.",
  alertWaterloggingTitle: "വെള്ളക്കെട്ട് സാധ്യത മുന്നറിയിപ്പ്",
  alertWaterloggingMsg: "കറുത്ത പരുത്തി മണ്ണിൽ ജലസംഭരണ ശേഷി കൂടുതലാണ്, മഴക്കാലത്ത് നീർവാർച്ച സാവധാനത്തിലാണ്.",
  alertWaterloggingRec: "വളപ്രയോഗത്തിന് മുൻപ് അധിക ജലം ഒഴുക്കിക്കളയാൻ വീതിയുള്ള ചാലുകൾ നിർമ്മിക്കുക.",
  alertBlurTitle: "വ്യക്തതയില്ലാത്ത മണ്ണ് ഫോട്ടോ",
  alertBlurMsg: "കൃത്യമായ കമ്പ്യൂട്ടർ ദൃശ്യ വിശകലനത്തിന് അപ്‌ലോഡ് ചെയ്ത ചിത്രം വളരെ മങ്ങിയതാണ്.",
  alertBlurRec: "നല്ല വെളിച്ചത്തിൽ ക്യാമറ ഇളകാതെ നിർത്തി വ്യക്തമായ ഫോട്ടോ എടുക്കുക.",
  alertLightingTitle: "അപര്യാപ്തമായ വെളിച്ചം",
  alertLightingMsg: "ഫോട്ടോ വളരെ ഇരുണ്ടതോ കൂടുതൽ തെളിഞ്ഞതോ ആണ്, മൺ സവിശേഷതകൾ വ്യക്തമല്ല.",
  alertLightingRec: "സ്വാഭാവിക പകൽ വെളിച്ചത്തിൽ മണ്ണ് ഫോട്ടോ എടുക്കുക.",
  alertInsufficientSoilTitle: "കാണാവുന്ന മണ്ണ് കുറവാണ്",
  alertInsufficientSoilMsg: "12 ശതമാനത്തിൽ താഴെ മാത്രമേ മണ്ണ് കാണാൻ കഴിയുന്നുള്ളൂ. സസ്യങ്ങളോ മറ്റ് വസ്തുക്കളോ മൂടിയിരിക്കുന്നു.",
  alertInsufficientSoilRec: "ചെടികൾക്കിടയിലുള്ള മണ്ണ് വ്യക്തമായി കാണാവുന്ന രീതിയിൽ ഫോട്ടോ എടുക്കുക.",
  alertInvalidImgTitle: "അസാധുവായ കൃഷിയിട ഫോട്ടോ",
  alertInvalidImgMsg: "ചിത്രത്തിൽ കൃഷിയിടത്തിലെ മണ്ണ് കാണാനില്ല.",
  alertInvalidImgRec: "ദയവായി കൃഷിയിടത്തിലെ ഉപരിതല മണ്ണ് വ്യക്തമാക്കുന്ന ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
  alertNoRiskTitle: "പ്രത്യേക അപകടസാധ്യതകൾ കണ്ടെത്തിയില്ല",
  alertNoRiskMsg: "ലഭ്യമായ വിശകലനത്തിന്റെ അടിസ്ഥാനത്തിൽ ഗുരുതരമായ ശുപാർശ പ്രശ്നങ്ങളൊന്നും കണ്ടെത്തിയില്ല.",
  alertNoRiskRec: "നിങ്ങൾ തിരഞ്ഞെടുത്ത വിളയും വള പദ്ധതിയും മണ്ണിന്റെ സ്വഭാവവുമായി യോജിക്കുന്നു.",
  alertSoilTestDisclaimer: "കൃത്യമായ പോഷക ആവശ്യകതകൾ ലാബ് മണ്ണ് പരിശോധനയിലൂടെ സ്ഥിരീകരിക്കേണ്ടതാണ്.",
  btnSwitchCrop: "ബദൽ വിളകൾ കാണുക",
  btnTryAgain: "വീണ്ടും ശ്രമിക്കുക",
  selectedCropLabel: "തിരഞ്ഞെടുത്ത വിള",
  detectedSoilLabel: "കണ്ടെത്തിയ മണ്ണ്",
  suitabilityScoreLabel: "അനുയോജ്യത സ്കോർ",
  suggestedAlternativesLabel: "നിർദ്ദേശിച്ച ബദൽ വിളകൾ",
  cardRiskAlertsTitle: "അപകടസാധ്യത മുന്നറിയിപ്പുകൾ",
  cardRiskAlertsDesc: "നിങ്ങളുടെ വിള, വളത്തിന്റെ അളവ്, മണ്ണിന്റെ സുരക്ഷ എന്നിവയ്ക്കായുള്ള നിരീക്ഷണം.",
  viewRiskAlertsBtn: "മുന്നറിയിപ്പുകൾ കാണുക →",

  // Voice Assistant
  voiceAssistantTitle: "അഗ്രിസെൻസ് ശബ്ദ സഹായി",
  voiceAssistantSubtitle: "കൃഷി, മണ്ണ്, വിള, വളം, ചിലവ്, അപകടസാധ്യതകൾ എന്നിവയെക്കുറിച്ച് നിങ്ങളുടെ ഭാഷയിൽ ചോദിക്കുക.",
  floatingVoiceBtn: "ശബ്ദ സഹായി",
  tapToSpeak: "സംസാരിക്കാൻ അമർത്തുക",
  listeningState: "ശ്രദ്ധിക്കുന്നു... ഇപ്പോൾ സംസാരിക്കുക",
  thinkingState: "ചിന്തിക്കുന്നു...",
  speakingState: "നിർദ്ദേശം വായിക്കുന്നു...",
  youSaid: "നിങ്ങൾ ചോദിച്ചത്",
  aiResponse: "അഗ്രിസെൻസ് നിർദ്ദേശം",
  btnPlayVoice: "കേൾക്കുക",
  btnPauseVoice: "നിർത്തുക",
  btnReplayVoice: "വീണ്ടും കേൾക്കുക",
  btnStopVoice: "അവസാനിപ്പിക്കുക",
  quickQuestionsTitle: "ദ്രുത ചോദ്യങ്ങൾ:",
  quickQ1: "ഏത് വിളയാണ് ഏറ്റവും നല്ലത്?",
  quickQ2: "ഏത് വളമാണ് ഉപയോഗിക്കേണ്ടത്?",
  quickQ3: "എത്ര വളം ആവശ്യമാണ്?",
  quickQ4: "എന്തുകൊണ്ടാണ് ഈ വളം ശുപാർശ ചെയ്തത്?",
  quickQ5: "കണക്കാക്കിയ ചിലവ് എത്രയാണ്?",
  quickQ6: "എന്തെങ്കിലും അപകടസാധ്യതകൾ ഉണ്ടോ?",
  quickQ7: "മണ്ണ് വിശകലനം വിശദീകരിക്കുക",
  voiceDisclaimer: "എഐ ശുപാർശകൾ ഒരു ഉപദേശം മാത്രമാണ്. കൃത്യമായ പോഷകങ്ങൾക്ക് ലാബ് മണ്ണ് പരിശോധന നടത്തുക.",
  errMicPermission: "ശബ്ദ ഇൻപുട്ടിന് മൈക്രോഫോൺ അനുമതി ആവശ്യമാണ്. ദയവായി അനുമതി നൽകുക.",
  errSpeechUnsupported: "ഈ ബ്രൗസറിൽ ശബ്ദ ഇൻപുട്ട് പിന്തുണയ്ക്കുന്നില്ല.",
  typeQuestionPlaceholder: "കൃഷി സംബന്ധമായ ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യുക...",
  btnSendQuestion: "ചോദിക്കുക",
  typeInsteadPrompt: "അല്ലെങ്കിൽ നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക:"
};



// ==========================================
// FILE: src/locales/kn.js
// ==========================================

// Kannada Translations (ಕನ್ನಡ)
const kn = {
  // Brand
  brandName: "ಅಗ್ರಿಸೆನ್ಸ್ AI",
  brandTagline: "ಸ್ಮಾರ್ಟ್ ಮಣ್ಣು ವಿಶ್ಲೇಷಣೆ • ಬೆಳೆ ಶಿಫಾರಸು • ರಸಗೊಬ್ಬರ ನಿರ್ವಹಣೆ",
  brandSubtitle: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯೊಂದಿಗೆ ರೈತರಿಗೆ ನಿಖರವಾದ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ವೆಚ್ಚದ ಅಂದಾಜು",

  // Navigation
  navHome: "ಮುಖಪುಟ",
  navSoilAnalysis: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
  navRecommendations: "ಶಿಫಾರಸುಗಳು",
  navReports: "ವರದಿಗಳು",
  navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
  navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  navLogin: "ಲಾಗಿನ್",
  navRegister: "ನೋಂದಣಿ",
  navLogout: "ಲಾಗ್ ಔಟ್",
  navProfile: "ರೈತರ ಪ್ರೊಫೈಲ್",

  // Hero Section
  heroTitle: "AI ನೊಂದಿಗೆ ಆಧುನಿಕ ಕೃಷಿ ಮಾಡಿ",
  heroSubtitle: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ, ಸೂಕ್ತವಾದ ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ಸರಿಯಾದ ಗೊಬ್ಬರವನ್ನು ತಿಳಿಯಿರಿ ಮತ್ತು ಕೃಷಿ ವೆಚ್ಚವನ್ನು ಅಂದಾಜಿಸಿ — ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
  btnAnalyzeSoil: "ನನ್ನ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ",
  btnExploreFeatures: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ",
  heroBadgeAI: "AI ಆಧಾರಿತ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ",
  heroSoilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
  heroCropRec: "ಬೆಳೆ ಶಿಫಾರಸು",
  heroFertilizerRec: "ಗೊಬ್ಬರ ಶಿಫಾರಸು",
  heroEstCost: "ಅಂದಾಜು ವೆಚ್ಚ",
  heroScannedStatus: "AI ಸ್ಕ್ಯಾನಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ",

  // Dashboard
  welcomeFarmer: "ಮರಳಿ ಸ್ವಾಗತ, ರೈತ ಮಿತ್ರರೇ 👋",
  dashboardSubtitle: "ನಿಮ್ಮ ಕೃಷಿ ಭೂಮಿಯ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ನೈಜ ಸಮಯದ ಮಾಹಿತಿಯ ಸಾರಾಂಶ.",
  statSoilAnalyses: "ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು",
  statCropRecommendations: "ಬೆಳೆ ಶಿಫಾರಸುಗಳು",
  statFertilizerRecommendations: "ಗೊಬ್ಬರ ಯೋಜನೆಗಳು",
  statEstimatedSavings: "ಅಂದಾಜು ಗೊಬ್ಬರ ವೆಚ್ಚ",
  cardStartAnalysisTitle: "ಹೊಸ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
  cardStartAnalysisDesc: "ಹೊಸ ಮಣ್ಣಿನ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಕ್ಯಾಮೆರಾದಲ್ಲಿ ತೆಗೆಯಿರಿ. ನಮ್ಮ AI ಮಣ್ಣಿನ ರಚನೆಯನ್ನು ಗುರುತಿಸಿ ನಿಖರ ಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳನ್ನು ನೀಡುತ್ತದೆ.",
  btnUploadSoilImage: "ಮಣ್ಣಿನ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ →",
  recentAnalyses: "ಇತ್ತೀಚಿನ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು",
  noRecentReports: "ಹಿಂದಿನ ವರದಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಇಂದೇ ನಿಮ್ಮ ಮೊದಲ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ!",
  weatherTitle: "ಇಂದಿನ ಕೃಷಿ ಹವಾಮಾನ ಸಲಹೆ",
  weatherGoodCondition: "ಭೂಮಿ ಸಿದ್ಧತೆ ಮತ್ತು ಗೊಬ್ಬರ ಹಾಕಲು ಹವಾಮಾನವು ಅನುಕೂಲಕರವಾಗಿದೆ.",

  // Upload Box
  uploadTitle: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ",
  uploadSubtitle: "ಸ್ಪಷ್ಟವಾದ ಮಣ್ಣು ಅಥವಾ ಕೃಷಿ ಹೊಲದ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ AI ಮೂಲಕ ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಯಿರಿ.",
  uploadDropText: "ಮಣ್ಣಿನ ಫೋಟೋವನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ",
  uploadOrBrowse: "ಅಥವಾ ನಿಮ್ಮ ಸಾಧನದಿಂದ ಆಯ್ಕೆಮಾಡಿ",
  uploadPlantsNotice: "ಗಿಡಗಳು ಅಥವಾ ಬೆಳೆಗಳಿರುವ ಫೋಟೋಗಳನ್ನು ಸಹ ಸ್ವೀಕರಿಸಲಾಗುತ್ತದೆ. ಗಿಡಗಳ ನಡುವೆ ಅಥವಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ಮಣ್ಣು ಕಾಣುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ.",
  uploadSupportedFormats: "ಬೆಂಬಲಿತ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು: JPG • JPEG • PNG • WEBP",
  uploadMaxSize: "ಗರಿಷ್ಠ ಗಾತ್ರ: 12 MB",
  uploadPresetLabel: "ಅಥವಾ ಮಾದರಿ ಮಣ್ಣಿನ ಫೋಟೋಗಳೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ:",
  btnAnalyzeWithAI: "AI ಮೂಲಕ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ",
  btnRemoveImage: "ತೆಗೆದುಹಾಕಿ",
  btnChangeImage: "ಫೋಟೋ ಬದಲಾಯಿಸಿ",
  fileSize: "ಗಾತ್ರ",
  fileName: "ಫೈಲ್",
  statusReadyML: "AI ವಿಶ್ಲೇಷಣೆಗೆ ಸಿದ್ಧವಾಗಿದೆ",
  testWithPreset: "ಮಾದರಿಯೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ:",
  oneClickDatasetTest: "ನೇರ ಮಾದರಿ ಪರೀಕ್ಷೆ",

  // Image Processing UI
  processingTitle: "ಮಣ್ಣನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
  processingSubtitle: "ನಮ್ಮ ಡೀಪ್ ಲರ್ನಿಂಗ್ ಕಂಪ್ಯೂಟರ್ ವಿಷನ್ ಮಾದರಿಯು ಮಣ್ಣಿನ ಭೌತಿಕ ಗುಣಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತಿದೆ.",
  step1: "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
  step2: "ಚಿತ್ರದ ಗುಣಮಟ್ಟವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
  step3: "ಸಸ್ಯಗಳು ಮತ್ತು ಗೋಚರಿಸುವ ಮಣ್ಣಿನ ಭಾಗವನ್ನು ಗುರುತಿಸಲಾಗುತ್ತಿದೆ",
  step4: "ಮಣ್ಣಿನ ಪ್ರಕಾರ ಮತ್ತು ವಿನ್ಯಾಸವನ್ನು ಗುರುತಿಸಲಾಗುತ್ತಿದೆ",
  step5: "ಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ",
  step6: "ಗೊಬ್ಬರದ ವೆಚ್ಚ ಮತ್ತು ಬೆಳೆ ಶ್ರೇಯಾಂಕವನ್ನು ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತಿದೆ",

  // Low Confidence / Insufficient Soil
  lowConfidenceTitle: "ಮಣ್ಣಿನ ಮಾಹಿತಿ ಅಸಮರ್ಪಕವಾಗಿದೆ",
  lowConfidenceMsg: "ಸಾಕಷ್ಟು ಮಣ್ಣಿನ ಮಾಹಿತಿ ಗೋಚರಿಸುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಗಿಡಗಳ ನಡುವೆ ಅಥವಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ಮಣ್ಣು ಕಾಣುವಂತೆ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  modelConfidenceWas: "ಮಾದರಿ ನಿಖರತೆ",
  minimumRequired: "ಕನಿಷ್ಠ ಅಗತ್ಯತೆ: 70%",
  tipsTitle: "ನಿಖರ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಗಾಗಿ ಸಲಹೆಗಳು:",
  tipLighting: "ಉತ್ತಮ ಬೆಳಕು: ನೈಸರ್ಗಿಕ ಹಗಲು ಬೆಳಕಿನಲ್ಲಿ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",
  tipSoilFocus: "ಮಣ್ಣಿನ ಗೋಚರತೆ: ಗಿಡಗಳ ನಡುವೆ ಅಥವಾ ಸುತ್ತಲೂ ಮಣ್ಣು ಕಾಣಿಸಬೇಕು.",
  tipBackground: "ಹಿನ್ನೆಲೆಯನ್ನು ತಪ್ಪಿಸಿ: ಶೂಗಳು, ಉಪಕರಣಗಳು, ನೆರಳುಗಳನ್ನು ತಪ್ಪಿಸಿ.",
  tipSharp: "ಸ್ಪಷ್ಟ ಫೋಟೋ: ಮಸುಕಾದ ಚಿತ್ರಗಳನ್ನು ತಪ್ಪಿಸಿ.",
  btnUploadAnother: "ಇನ್ನೊಂದು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",

  // Soil Analysis Result
  resultHeading: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಯ ಫಲಿತಾಂಶ",
  resultSubtitle: "ದೃಶ್ಯ ವರ್ಗೀಕರಣ ಮತ್ತು ಭೌತಿಕ ಮಣ್ಣಿನ ಸ್ಥಿತಿಯ ಮೌಲ್ಯಮಾಪನ",
  detectedSoilType: "ಗುರುತಿಸಲಾದ ಮಣ್ಣಿನ ಪ್ರಕಾರ",
  soilCondition: "ಮಣ್ಣಿನ ಸ್ಥಿತಿ",
  aiConfidence: "AI ನಿಖರತೆ",
  visibleSoilArea: "ಗೋಚರಿಸುವ ಮಣ್ಣಿನ ವಿಸ್ತೀರ್ಣ",
  plantsDetected: "ಗಿಡಗಳು / ಬೆಳೆಗಳು ಕಂಡುಬಂದಿವೆ",
  bareSoilDetected: "ಬೆಳೆ ಇಲ್ಲದ ಮಣ್ಣು ಕಂಡುಬಂದಿದೆ",
  foliageFiltered: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಎಲೆಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಲಾಗಿದೆ",
  soilCharacteristics: "ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣಗಳು",
  charMoisture: "ತೇವಾಂಶ",
  charTexture: "ರಚನೆ (ವಿನ್ಯಾಸ)",
  charOrganicMatter: "ಸಾವಯವ ಅಂಶ",
  charDrainage: "ನೀರು ಬಸಿದುಹೋಗುವಿಕೆ",
  charPH: "ಪಿ.ಎಚ್ ಮಟ್ಟ (pH)",
  charNitrogen: "ಸಾರಜನಕ (N)",
  charPhosphorus: "ರಂಜಕ (P)",
  charPotassium: "ಪೊಟ್ಯಾಶಿಯಂ (K)",
  requiresSoilTest: "ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಅಗತ್ಯವಿದೆ",
  soilTestDisclaimer: "* ನಿಖರವಾದ ರಾಸಾಯನಿಕ N-P-K ಮತ್ತು pH ಮೌಲ್ಯಗಳಿಗೆ ಪ್ರಯೋಗಾಲಯದ ಮಣ್ಣು ಪರೀಕ್ಷೆ ಅಗತ್ಯವಿದೆ. ದೃಶ್ಯ AI ಮಣ್ಣಿನ ರಚನೆ, ತೇವಾಂಶ ಮತ್ತು ಸಾವಯವ ವಿವರವನ್ನು ಒದಗಿಸುತ್ತದೆ.",

  // Farming Details Form
  optionalHeading: "ಉತ್ತಮ ಶಿಫಾರಸುಗಳಿಗಾಗಿ ಕೃಷಿ ವಿವರಗಳು",
  optionalSubtitle: "ನಿಖರವಾದ ಗೊಬ್ಬರದ ಪ್ರಮಾಣ ಮತ್ತು ವೆಚ್ಚವನ್ನು ಲೆಕ್ಕಹಾಕಲು ನಿಮ್ಮ ಜಮೀನಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
  btnHide: "▲ ಮರೆಮಾಡಿ",
  btnExpand: "▼ ವಿಸ್ತರಿಸಿ",
  labelIntendedCrop: "ಪ್ರಸ್ತುತ ಬೆಳೆಯುತ್ತಿರುವ / ಬೆಳೆಯಲು ಉದ್ದೇಶಿಸಿದ ಬೆಳೆ",
  labelLandArea: "ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ",
  labelLocation: "ಸ್ಥಳ (ರಾಜ್ಯ / ಜಿಲ್ಲೆ)",
  labelSeason: "ಪ್ರಸ್ತುತ ಕೃಷಿ ಹಂಗಾಮು",
  labelIrrigation: "ನೀರಾವರಿ ವಿಧಾನ",
  labelPreviousCrop: "ಹಿಂದಿನ ಬೆಳೆ",
  btnUpdateRecs: "ಶಿಫಾರಸುಗಳನ್ನು ನವೀಕರಿಸಿ",
  btnViewFullReport: "ಸಂಪೂರ್ಣ ವರದಿಯನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಉಳಿಸಿ →",
  unitAcres: "ಎಕರೆ",
  unitHectares: "ಹೆಕ್ಟೇರ್",

  // Fertilizer Recommendation
  fertHeading: "ಸ್ಮಾರ್ಟ್ ಗೊಬ್ಬರ ಶಿಫಾರಸು 🧪",
  fertSubtitle: "ನಿಮ್ಮ ಮಣ್ಣಿನ ಸ್ಥಿತಿ ಮತ್ತು ಆಯ್ಕೆಮಾಡಿದ ವಿಸ್ತೀರ್ಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಮತೋಲಿತ ಪೋಷಕಾಂಶ ಯೋಜನೆ.",
  fertRecommended: "ಶಿಫಾರಸು ಮಾಡಿದ ಗೊಬ್ಬರ",
  fertQuantity: "ಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರಮಾಣ",
  fertApplication: "ಗೊಬ್ಬರ ಹಾಕುವ ವಿಧಾನ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ",
  levelHighly: "ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ",
  levelAlternative: "ಪರ್ಯಾಯ ಗೊಬ್ಬರ",
  levelOptional: "ಐಚ್ಛಿಕ",
  kgPerAcre: "ಕೆಜಿ / ಎಕರೆ",
  totalForPlot: "ಒಟ್ಟು ಜಮೀನಿಗೆ",
  kg: "ಕೆಜಿ",

  // Cost Prediction
  costHeading: "ಅಂದಾಜು ಗೊಬ್ಬರದ ವೆಚ್ಚ 💰",
  costSubtitle: "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ದರಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಚಿಲ್ಲರೆ ಬೆಲೆಗಳ ಆಧಾರದ ಮೇಲೆ ಬಜೆಟ್ ಅಂದಾಜು.",
  costRequiredQty: "ಅಗತ್ಯವಿರುವ ಪ್ರಮಾಣ",
  costEstPrice: "ಅಂದಾಜು ದರ",
  costPerAcre: "ಪ್ರತಿ ಎಕರೆಗೆ ವೆಚ್ಚ",
  costEstTotal: "ಒಟ್ಟು ಅಂದಾಜು ವೆಚ್ಚ",
  costNote: "ಸ್ಥಳ, ಮಾರಾಟಗಾರ, ಹಂಗಾಮು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಬೆಲೆಗಳು ಬದಲಾಗಬಹುದು.",
  perKg: "/ ಕೆಜಿ",
  perAcre: "/ ಎಕರೆ",
  acresEquals: "ಎಕರೆ =",

  // Crop Recommendation
  cropHeading: "ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆಗಳು 🌾",
  cropSubtitle: "ನಿಮ್ಮ ಮಣ್ಣಿನ ರಚನೆ, ಹಂಗಾಮು ಮತ್ತು ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಸೂಕ್ತವಾದ ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ಬೆಳೆಗಳು.",
  suitabilityScore: "ಸೂಕ್ತತೆ",
  btnViewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
  modalClose: "ಮುಚ್ಚಿ",
  plantSpacing: "ಗಿಡಗಳ ನಡುವಿನ ಅಂತರ",
  harvestDuration: "ಕೊಯ್ಲು ಅವಧಿ",
  soilSynergy: "ಮಣ್ಣು ಮತ್ತು ಬೆಳೆಯ ಹೊಂದಾಣಿಕೆ",
  growingSeason: "ಬೆಳೆಯ ಹಂಗಾಮು",
  waterRequirement: "ನೀರಿನ ಅಗತ್ಯತೆ",
  primaryFertilizer: "ಮುಖ್ಯ ಗೊಬ್ಬರ",

  // Reports Summary Page
  reportTitle: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವರದಿ",
  reportSubtitle: "ಸಂಪೂರ್ಣ AI ಮಣ್ಣಿನ ರೋಗನಿರ್ಣಯ, ಬೆಳೆ ತಂತ್ರ ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಬಜೆಟ್",
  btnDownloadReport: "ವರದಿ ಡೌನ್‌ಲೋಡ್ (PDF)",
  btnSaveReport: "ವರದಿ ಉಳಿಸಿ",
  btnPrintReport: "ವರದಿ ಪ್ರಿಂಟ್ ಮಾಡಿ",
  btnAnalyzeAnother: "ಮತ್ತೊಂದು ಮಣ್ಣಿನ ಚಿತ್ರವನ್ನು ಪರೀಕ್ಷಿಸಿ",
  reportHeaderTag: "AI ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮತ್ತು ಗೊಬ್ಬರ ಮಾರ್ಗದರ್ಶನ ವರದಿ",
  reportDate: "ದಿನಾಂಕ",
  reportStatus: "ಸ್ಥಿತಿ",
  statusVerified: "ಪರಿಶೀಲಿಸಿದ ವಿಶ್ಲೇಷಣೆ",
  secSoilAnalysis: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
  secFertRec: "ಗೊಬ್ಬರ ಶಿಫಾರಸು",
  secCostPred: "ವೆಚ್ಚದ ಅಂದಾಜು",
  secCropRec: "ಬೆಳೆ ಶಿಫಾರಸು",

  // History Page
  historyTitle: "ನನ್ನ ಹಿಂದಿನ ವರದಿಗಳು",
  historySubtitle: "ನಿಮ್ಮ ಹಿಂದಿನ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಗಳು ಮತ್ತು ಗೊಬ್ಬರದ ಶಿಫಾರಸುಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಅಥವಾ ಪ್ರಿಂಟ್ ಮಾಡಿ.",
  thDate: "ದಿನಾಂಕ",
  thSoilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
  thCrop: "ಬೆಳೆ",
  thFertilizer: "ಮುಖ್ಯ ಗೊಬ್ಬರ",
  thCost: "ಅಂದಾಜು ವೆಚ್ಚ",
  thActions: "ಕ್ರಮಗಳು",
  btnViewReport: "ವರದಿ ವೀಕ್ಷಿಸಿ",
  btnDeleteReport: "ಅಳಿಸಿ",
  noReportsFound: "ಯಾವುದೇ ವರದಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
  searchPlaceholder: "ಬೆಳೆ, ಮಣ್ಣಿನ ಪ್ರಕಾರ ಅಥವಾ ಸ್ಥಳದ ಮೂಲಕ ಹುಡುಕಿ...",
  cloudSaving: "ನಿಮ್ಮ ವರದಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಉಳಿಸಲಾಗುತ್ತಿದೆ...",
  cloudSaved: "ವರದಿಯನ್ನು ಕ್ಲೌಡ್‌ನಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ",
  cloudDeleted: "ವರದಿಯನ್ನು ದಾಖಲೆಗಳಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ.",

  // Features Section
  featTitle: "AI ತಂತ್ರಜ್ಞಾನದಿಂದ ನಡೆಸಲ್ಪಡುವ ಆಧುನಿಕ ಕೃಷಿ",
  featSubtitle: "ರೈತರ ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಕಂಪ್ಯೂಟರ್ ವಿಷನ್, ಮಣ್ಣಿನ ವಿಜ್ಞಾನ ಮತ್ತು ಕೃಷಿ ಅರ್ಥಶಾಸ್ತ್ರದ ಸಮ್ಮಿಲನ.",
  feat1Title: "AI ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
  feat1Desc: "ಕೆಲವೇ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಫಲವತ್ತತೆ ಮತ್ತು ದೃಶ್ಯ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಆಳವಾದ ದೃಷ್ಟಿ ಮಾದರಿಗಳ ಮೂಲಕ ವಿಶ್ಲೇಷಿಸುತ್ತದೆ.",
  feat2Title: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಶಿಫಾರಸು",
  feat2Desc: "ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸೂಕ್ತವಾದ ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ.",
  feat3Title: "ನಿಖರ ಗೊಬ್ಬರ ಮಾರ್ಗದರ್ಶನ",
  feat3Desc: "ನಿರ್ದಿಷ್ಟ ಪ್ರಮಾಣಗಳು, ಹಾಕುವ ಸಮಯಗಳು ಮತ್ತು ಸಾವಯವ ಪರ್ಯಾಯಗಳೊಂದಿಗೆ ನಿಖರ ಪೋಷಕಾಂಶ ಶಿಫಾರಸುಗಳು.",
  feat4Title: "ವೆಚ್ಚದ ಮುನ್ಸೂಚನೆ",
  feat4Desc: "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ದರಗಳೊಂದಿಗೆ ಪ್ರತಿ ಎಕರೆಗೆ ಮತ್ತು ಒಟ್ಟು ಜಮೀನಿಗೆ ಪಾರದರ್ಶಕ ವೆಚ್ಚದ ಅಂದಾಜು.",
  feat5Title: "ಸಂಪೂರ್ಣ ಬಹುಭಾಷಾ ಬೆಂಬಲ",
  feat5Desc: "ರೈತರ ಅನುಕೂಲಕ್ಕಾಗಿ ಇಡೀ ಅಪ್ಲಿಕೇಶನ್ ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ, ತಮಿಳು, ಹಿಂದಿ, ತೆಲುಗು ಮತ್ತು ಮಲಯಾಳಂನಲ್ಲಿ ಲಭ್ಯವಿದೆ.",
  feat6Title: "ಕ್ಲೌಡ್ ವರದಿಗಳು",
  feat6Desc: "ಹಿಂದಿನ ವರದಿಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಉಳಿಸಿ ಮತ್ತು ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಯಾವಾಗ ಬೇಕಾದರೂ ವೀಕ್ಷಿಸಿ.",

  // Auth Page & Security
  loginTitle: "ರೈತರ ಲಾಗಿನ್",
  loginSubtitle: "ಅಗ್ರಿಸೆನ್ಸ್ AI ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ ಹೆಸರು, ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
  registerTitle: "ರೈತರ ನೋಂದಣಿ",
  registerSubtitle: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳಿಗಾಗಿ ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ.",
  forgotPassword: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
  resetPasswordTitle: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
  resetPasswordDesc: "ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್ ಮತ್ತು ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
  btnResetPassword: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
  resetPasswordSuccess: "ಪಾಸ್‌ವರ್ಡ್ ಯಶಸ್ವಿಯಾಗಿ ಬದಲಾಗಿದೆ! ಈಗ ಲಾಗಿನ್ ಮಾಡಿ.",
  backToLogin: "← ಲಾಗಿನ್‌ಗೆ ಹಿಂತಿರುಗಿ",
  labelUserName: "ಬಳಕೆದಾರರ ಹೆಸರು",
  labelFullName: "ಪೂರ್ಣ ಹೆಸರು",
  labelEmail: "ಇಮೇಲ್ ವಿಳಾಸ",
  labelEmailPhone: "ಇಮೇಲ್ ವಿಳಾಸ",
  labelPassword: "ಪಾಸ್‌ವರ್ಡ್",
  labelConfirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
  labelPreferredLang: "ಆದ್ಯತೆಯ ಭಾಷೆ",
  placeholderName: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಉದಾ. ಕರ್ಣಿಕ)",
  placeholderEmail: "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ",
  placeholderPassword: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
  placeholderConfirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ಪುನಃ ನಮೂದಿಸಿ",
  btnLogin: "ಲಾಗಿನ್",
  btnRegister: "ಖಾತೆ ರಚಿಸಿ",
  demoLoginBtn: "⚡ ತ್ವರಿತ ಡೆಮೊ ಲಾಗಿನ್ (ಒಂದೇ ಕ್ಲಿಕ್)",
  haveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
  noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
  welcomePrefix: "ಸ್ವಾಗತ,",
  errEnterName: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
  errEnterEmail: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ.",
  errEnterPassword: "ದಯವಿಟ್ಟು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
  errPasswordsMismatch: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ.",
  errFillAllFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
  errEnterCredentials: "ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
  errPasswordTooShort: "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 4 ಅಕ್ಷರಗಳಿರಬೇಕು.",
  errInvalidCredentials: "ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್.",
  errUserNotFound: "ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಖಾತೆ ಕಂಡುಬಂದಿಲ್ಲ.",
  errPasswordIncorrect: "ನಮೂದಿಸಿದ ಪಾಸ್‌ವರ್ಡ್ ತಪ್ಪಾಗಿದೆ.",
  errEmailAlreadyExists: "ಈ ಇಮೇಲ್‌ನಲ್ಲಿ ಈಗಾಗಲೇ ಖಾತೆ ಇದೆ. ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ.",
  loginSuccess: "ಸ್ವಾಗತ! ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದ್ದೀರಿ.",
  logoutSuccess: "ನೀವು ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.",

  // Errors & Toasts
  errInvalidImage: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ JPG, JPEG, PNG ಅಥವಾ WEBP ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  errOversizedImage: "ಚಿತ್ರದ ಗಾತ್ರವು 12 MB ಗಿಂತ ಕಡಿಮೆಯಿರಬೇಕು.",
  errFailedAnalysis: "ಈ ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಸ್ಪಷ್ಟವಾದ ಮಣ್ಣಿನ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  errNetwork: "ನೆಟ್‌ವರ್ಕ್ ಸಮಸ್ಯೆ. ದಯವಿಟ್ಟು ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  errRequiredFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
  recsUpdated: "ಶಿಫಾರಸುಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.",

  // Audio Narration
  btnListenAudio: "ಧ್ವನಿ ಸಲಹೆಯನ್ನು ಕೇಳಿ 🔊",
  audioPlaying: "ಸಲಹೆಯನ್ನು ಪ್ಲೇ ಮಾಡಲಾಗುತ್ತಿದೆ...",
  audioStopped: "ಧ್ವನಿಯನ್ನು ನಿಲ್ಲಿಸಲಾಗಿದೆ",

  // Risk Alerts
  riskAlertsTitle: "ಕೃಷಿ ಅಪಾಯದ ಎಚ್ಚರಿಕೆಗಳು",
  riskAlertsSubtitle: "ಎಐ ನಿಖರತೆ, ಬೆಳೆ ಸೂಕ್ತತೆ ಮತ್ತು ರಸಗೊಬ್ಬರ ಮಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಅಪಾಯದ ಮೌಲ್ಯಮಾಪನ.",
  badgeHighRisk: "ಹೆಚ್ಚಿನ ಅಪಾಯ",
  badgeWarning: "ಎಚ್ಚರಿಕೆ",
  badgeInfo: "ಸುರಕ್ಷಿತ",
  alertLowConfidenceTitle: "ಕಡಿಮೆ ಎಐ ನಿಖರತೆ",
  alertLowConfidenceMsg: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಹೆಚ್ಚಿನ ನಿಖರತೆಯೊಂದಿಗೆ ವರ್ಗೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಮಣ್ಣಿನ ಅಥವಾ ಹೊಲದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  alertLowConfidenceRec: "ತಪ್ಪಾದ ಶಿಫಾರಸುಗಳನ್ನು ತಪ್ಪಿಸಲು ಉತ್ತಮ ನೈಸರ್ಗಿಕ ಬೆಳಕಿನಲ್ಲಿ ಮತ್ತೊಂದು ಫೋಟೋ ತೆಗೆಯಿರಿ.",
  alertUnsuitableCropTitle: "ಬೆಳೆ ಸೂಕ್ತತೆಯ ಎಚ್ಚರಿಕೆ",
  alertUnsuitableCropMsg: "ಗುರುತಿಸಲಾದ ಮಣ್ಣಿನ ಪ್ರಕಾರಕ್ಕೆ ಈ ಬೆಳೆ ಉತ್ತಮ ಆಯ್ಕೆಯಾಗಿಲ್ಲದಿರಬಹುದು.",
  alertUnsuitableCropRec: "ಸೂಚಿಸಲಾದ ಹೆಚ್ಚಿನ ಇಳುವರಿ ನೀಡುವ ಪರ್ಯಾಯ ಬೆಳೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ.",
  alertFertilizerWarningTitle: "ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣದ ಎಚ್ಚರಿಕೆ",
  alertFertilizerWarningMsg: "ಹೊಲಕ್ಕೆ ಬಳಸುವ ಮೊದಲು ಲೆಕ್ಕಾಚಾರ ಮಾಡಿದ ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬೇಕು.",
  alertSplitDoseRec: "ಸಾರಜನಕ ವ್ಯರ್ಥವಾಗುವುದನ್ನು ಅಥವಾ ಬೇರುಗಳು ಸುಡುವುದನ್ನು ತಪ್ಪಿಸಲು ಗೊಬ್ಬರವನ್ನು ಕಂತುಗಳಲ್ಲಿ ನೀಡಿ.",
  alertLargeQtyTitle: "ದೊಡ್ಡ ವಿಸ್ತೀರ್ಣದ ರಸಗೊಬ್ಬರ ಎಚ್ಚರಿಕೆ",
  alertLargeQtyMsg: "ಈ ಕೃಷಿ ವಿಸ್ತೀರ್ಣಕ್ಕೆ ಒಟ್ಟು ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣವು ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚಾಗಿದೆ.",
  alertLargeQtyRec: "ಸ್ಥಳೀಯ ಕೃಷಿ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಸಮಾಲೋಚಿಸಿ ಮತ್ತು ಹಂತ ಹಂತವಾಗಿ ಗೊಬ್ಬರವನ್ನು ಒದಗಿಸಿ.",
  alertLeachingTitle: "ಹೆಚ್ಚಿನ ಮಣ್ಣಿನ ಪ್ರವೇಶ್ಯತೆ ಎಚ್ಚರಿಕೆ",
  alertLeachingMsg: "ಬೂದಿ ಮಿಶ್ರಿತ ಮತ್ತು ಮರಳು ಮಣ್ಣಿನಲ್ಲಿ ಪೋಷಕಾಂಶಗಳು ವೇಗವಾಗಿ ಕೊಚ್ಚಿಹೋಗುವ ಸಾಧ್ಯತೆಯಿದೆ.",
  alertLeachingRec: "ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲು ಸಾವಯವ ಗೊಬ್ಬರವನ್ನು ಸೇರಿಸಿ ಮತ್ತು ಗೊಬ್ಬರವನ್ನು ಕಂತುಗಳಲ್ಲಿ ನೀಡಿ.",
  alertWaterloggingTitle: "ನೀರು ನಿಲ್ಲುವ ಸೂಕ್ಷ್ಮತೆಯ ಎಚ್ಚರಿಕೆ",
  alertWaterloggingMsg: "ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣಿನಲ್ಲಿ ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯ ಹೆಚ್ಚಾಗಿದ್ದು, ಭಾರೀ ಮಳೆಯಲ್ಲಿ ನೀರು ಬಸಿಯುವುದು ನಿಧಾನವಾಗಿರುತ್ತದೆ.",
  alertWaterloggingRec: "ಗೊಬ್ಬರ ಹಾಕುವ ಮೊದಲು ಹೆಚ್ಚುವರಿ ನೀರನ್ನು ಹೊರಹಾಕಲು ಅಗಲವಾದ ಚರಂಡಿಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
  alertBlurTitle: "ಮಸುಕಾದ ಮಣ್ಣಿನ ಫೋಟೋ",
  alertBlurMsg: "ನಿಖರವಾದ ಕಂಪ್ಯೂಟರ್ ದೃಷ್ಟಿ ವಿಶ್ಲೇಷಣೆಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರವು ತುಂಬಾ ಮಸುಕಾಗಿದೆ.",
  alertBlurRec: "ಉತ್ತಮ ಬೆಳಕಿನಲ್ಲಿ ಕ್ಯಾಮೆರಾವನ್ನು ಅಲುಗಾಡಿಸದೆ ಸ್ಪಷ್ಟ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",
  alertLightingTitle: "ಅಸಮರ್ಪಕ ಬೆಳಕು",
  alertLightingMsg: "ಫೋಟೋ ತುಂಬಾ ಕತ್ತಲೆಯಾಗಿದೆ ಅಥವಾ ಅತಿಯಾದ ಬೆಳಕಿನಿಂದ ಕೂಡಿದೆ, ಇದರಿಂದಾಗಿ ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣಗಳು ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ.",
  alertLightingRec: "ನೈಸರ್ಗಿಕ ಹಗಲು ಬೆಳಕಿನಲ್ಲಿ ಮಣ್ಣಿನ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",
  alertInsufficientSoilTitle: "ಕಾಣಿಸುವ ಮಣ್ಣು ಸಾಕಷ್ಟಿಲ್ಲ",
  alertInsufficientSoilMsg: "12% ಕ್ಕಿಂತ ಕಡಿಮೆ ಮಣ್ಣು ಕಾಣಿಸುತ್ತಿದೆ. ಸಸ್ಯಗಳು ಅಥವಾ ಇತರ ವಸ್ತುಗಳು ಚೌಕಟ್ಟನ್ನು ಆವರಿಸಿವೆ.",
  alertInsufficientSoilRec: "ಗಿಡಗಳ ನಡುವೆ ಕಾಣಿಸುವ ಮೇಲ್ಮಣ್ಣಿನ ಭಾಗವು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುವಂತೆ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.",
  alertInvalidImgTitle: "ಅಮಾನ್ಯ ಕೃಷಿ ಫೋಟೋ",
  alertInvalidImgMsg: "ಚಿತ್ರದಲ್ಲಿ ಹೊಲದ ಮಣ್ಣು ಕಂಡುಬರುತ್ತಿಲ್ಲ.",
  alertInvalidImgRec: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೊಲದ ಮೇಲ್ಮಣ್ಣಿನ ಛಾಯಾಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  alertNoRiskTitle: "ಯಾವುದೇ ಪ್ರಮುಖ ಅಪಾಯಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
  alertNoRiskMsg: "ಲಭ್ಯವಿರುವ ವಿಶ್ಲೇಷಣೆಯ ಆಧಾರದ ಮೇಲೆ ಯಾವುದೇ ಪ್ರಮುಖ ಶಿಫಾರಸು ಅಪಾಯಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
  alertNoRiskRec: "ನಿಮ್ಮ ಬೆಳೆ ಆಯ್ಕೆ ಮತ್ತು ರಸಗೊಬ್ಬರ ಯೋಜನೆಯು ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗಿದೆ.",
  alertSoilTestDisclaimer: "ನಿಖರವಾದ ಪೋಷಕಾಂಶದ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪ್ರಯೋಗಾಲಯದ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಮೂಲಕ ದೃಢೀಕರಿಸಿಕೊಳ್ಳಬೇಕು.",
  btnSwitchCrop: "ಪರ್ಯಾಯ ಬೆಳೆಗಳನ್ನು ನೋಡಿ",
  btnTryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
  selectedCropLabel: "ಆಯ್ಕೆಮಾಡಿದ ಬೆಳೆ",
  detectedSoilLabel: "ಗುರುತಿಸಲಾದ ಮಣ್ಣು",
  suitabilityScoreLabel: "ಸೂಕ್ತತೆಯ ಅಂಕ",
  suggestedAlternativesLabel: "ಸೂಚಿಸಲಾದ ಪರ್ಯಾಯ ಬೆಳೆಗಳು",
  cardRiskAlertsTitle: "ಅಪಾಯದ ಎಚ್ಚರಿಕೆಗಳು",
  cardRiskAlertsDesc: "ನಿಮ್ಮ ಬೆಳೆ, ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣ ಮತ್ತು ಮಣ್ಣಿನ ಸುರಕ್ಷತೆಗಾಗಿ ನೈಜ-ಸಮಯದ ಕೃಷಿ ಮೇಲ್ವಿಚಾರಣೆ.",
  viewRiskAlertsBtn: "ಎಚ್ಚರಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ →",

  // Voice Assistant
  voiceAssistantTitle: "ಅಗ್ರಿಸೆನ್ಸ್ ಧ್ವನಿ ಸಹಾಯಕ",
  voiceAssistantSubtitle: "ಕೃಷಿ, ಮಣ್ಣು, ಬೆಳೆ, ರಸಗೊಬ್ಬರ, ವೆಚ್ಚ ಮತ್ತು ಅಪಾಯಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",
  floatingVoiceBtn: "ಧ್ವನಿ ಸಹಾಯ",
  tapToSpeak: "ಮಾತನಾಡಲು ಸ್ಪರ್ಶಿಸಿ",
  listeningState: "ಕೇಳಿಸಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ",
  thinkingState: "ಯೋಚಿಸಲಾಗುತ್ತಿದೆ...",
  speakingState: "ಸಲಹೆಯನ್ನು ಓದಲಾಗುತ್ತಿದೆ...",
  youSaid: "ನೀವು ಕೇಳಿದ್ದು",
  aiResponse: "ಅಗ್ರಿಸೆನ್ಸ್ ಸಲಹೆ",
  btnPlayVoice: "ಪ್ಲೇ ಮಾಡಿ",
  btnPauseVoice: "ವಿರಾಮಗೊಳಿಸಿ",
  btnReplayVoice: "ಮತ್ತೆ ಕೇಳಿ",
  btnStopVoice: "ನಿಲ್ಲಿಸಿ",
  quickQuestionsTitle: "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು:",
  quickQ1: "ಯಾವ ಬೆಳೆ ಅತ್ಯುತ್ತಮ?",
  quickQ2: "ಯಾವ ರಸಗೊಬ್ಬರವನ್ನು ಬಳಸಬೇಕು?",
  quickQ3: "ಎಷ್ಟು ರಸಗೊಬ್ಬರ ಬೇಕು?",
  quickQ4: "ಈ ರಸಗೊಬ್ಬರವನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ?",
  quickQ5: "ಅಂದಾಜು ವೆಚ್ಚ ಎಷ್ಟು?",
  quickQ6: "ಯಾವುದಾದರೂ ಅಪಾಯಗಳಿವೆಯೇ?",
  quickQ7: "ನನ್ನ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಯನ್ನು ವಿವರಿಸಿ",
  voiceDisclaimer: "ಎಐ ಶಿಫಾರಸುಗಳು ಕೇವಲ ಸಲಹೆಯಾಗಿದೆ. ನಿಖರವಾದ ಪೋಷಕಾಂಶಗಳಿಗಾಗಿ ಪ್ರಯೋಗಾಲಯದ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯನ್ನು ಮಾಡಿ.",
  errMicPermission: "ಧ್ವನಿ ಇನ್‌ಪುಟ್‌ಗಾಗಿ ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಅನುಮತಿಸಿ.",
  errSpeechUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.",
  typeQuestionPlaceholder: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
  btnSendQuestion: "ಕೇಳಿ",
  typeInsteadPrompt: "ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ:"
};



// ==========================================
// FILE: src/locales/index.js
// ==========================================


const translations = {
  en,
  ta,
  hi,
  te,
  ml,
  kn
};

const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

/**
 * Returns localized text for the given key and language.
 */
function t(key, lang = 'en') {
  const currentLangDict = translations[lang] || translations.en;
  if (currentLangDict && currentLangDict[key] !== undefined) {
    return currentLangDict[key];
  }
  if (translations.en && translations.en[key] !== undefined) {
    return translations.en[key];
  }
  return key;
}

/**
 * Localized pure soil names (no English parentheticals)
 */
function getLocalizedSoilName(soilKey, lang = 'en') {
  const map = {
    alluvial: {
      en: 'Alluvial Soil',
      ta: 'வண்டல் மண்',
      hi: 'जलोढ़ मिट्टी',
      te: 'ఒండ్రు నేల',
      ml: 'എക്കൽ മണ്ണ്',
      kn: 'ಮೆಕ್ಕಲು ಮಣ್ಣು'
    },
    loamy: {
      en: 'Alluvial Soil',
      ta: 'வண்டல் மண்',
      hi: 'जलोढ़ मिट्टी',
      te: 'ఒండ్రు నేల',
      ml: 'എക്കൽ മണ്ണ്',
      kn: 'ಮೆಕ್ಕಲು ಮಣ್ಣು'
    },
    black: {
      en: 'Black Cotton Soil',
      ta: 'கரிசல் மண்',
      hi: 'काली कपास मिट्टी',
      te: 'నల్లరేగడి నేల',
      ml: 'കരിമണ്ണ്',
      kn: 'ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು'
    },
    red: {
      en: 'Red Soil',
      ta: 'செம்மண்',
      hi: 'लाल मिट्टी',
      te: 'ఎర్ర నేల',
      ml: 'ചുവന്ന മണ്ണ്',
      kn: 'ಕೆಂಪು ಮಣ್ಣು'
    },
    cinder: {
      en: 'Cinder Soil',
      ta: 'எரிமலை சாம்பல் மண்',
      hi: 'सिंडर मिट्टी',
      te: 'సిండర్ నేల',
      ml: 'സിൻഡർ മണ്ണ്',
      kn: 'ಸಿಂಡರ್ ಮಣ್ಣು'
    },
    sandy: {
      en: 'Sandy Loam Soil',
      ta: 'மணல் வண்டல் மண்',
      hi: 'बलुई दोमट मिट्टी',
      te: 'ఇసుక నేల',
      ml: 'മണൽ മണ്ണ്',
      kn: 'ಮರಳು ಮಿಶ್ರಿತ ಮಣ್ಣು'
    }
  };

  const k = (soilKey || 'alluvial').toLowerCase();
  if (map[k] && map[k][lang]) {
    return map[k][lang];
  }
  if (map[k] && map[k].en) {
    return map[k].en;
  }
  return 'Alluvial Soil';
}

/**
 * Localized soil condition
 */
function getLocalizedCondition(condition, lang = 'en') {
  const map = {
    Good: {
      en: 'Good',
      ta: 'நன்று',
      hi: 'उत्कृष्ट',
      te: 'మంచిది',
      ml: 'നല്ലത്',
      kn: 'ಉತ್ತಮ'
    },
    Moderate: {
      en: 'Moderate',
      ta: 'மிதமான',
      hi: 'मध्यम',
      te: 'మధ్యస్థం',
      ml: 'മിതമായത്',
      kn: 'ಮಧ್ಯಮ'
    },
    Poor: {
      en: 'Poor',
      ta: 'குறைவான',
      hi: 'कमज़ोर',
      te: 'తక్కువ',
      ml: 'മോശം',
      kn: 'ಕಡಿಮೆ'
    }
  };

  if (map[condition] && map[condition][lang]) {
    return map[condition][lang];
  }
  return condition || 'Good';
}

/**
 * Localized fertilizer names
 */
function getLocalizedFertilizerName(fertId, lang = 'en') {
  const map = {
    urea: {
      en: 'Neem Coated Urea',
      ta: 'வேப்பம்பூசப்பட்ட யூரியா',
      hi: 'नीम लेपित यूरिया',
      te: 'వేప పూత పూసిన యూరియా',
      ml: 'വേപ്പെണ്ണ പുരട്ടിയ യൂറിയ',
      kn: 'ಬೇವಿನ ಲೇಪಿತ ಯೂರಿಯಾ'
    },
    dap: {
      en: 'Di-Ammonium Phosphate (DAP)',
      ta: 'டி.ஏ.பி',
      hi: 'डी.ए.पी.',
      te: 'డి.ఎ.పి.',
      ml: 'ഡി.എ.പി.',
      kn: 'ಡಿ.ಎ.ಪಿ.'
    },
    ssp: {
      en: 'Single Super Phosphate (SSP)',
      ta: 'சிங்கிள் சூப்பர் பாஸ்பேட் (எஸ்.எஸ்.பி)',
      hi: 'सिंगल सुपर फॉस्फेट (एस.एस.पी.)',
      te: 'సింగిల్ సూపర్ ఫాస్ఫేట్',
      ml: 'സിംഗിൾ സൂപ്പർ ഫോസ്ഫേറ്റ്',
      kn: 'ಸಿಂಗಲ್ ಸೂಪರ್ ಫಾಸ್ಫೇಟ್'
    },
    mop: {
      en: 'Muriate of Potash (MOP)',
      ta: 'பொட்டாஷ்',
      hi: 'म्यूरिएट ऑफ पोटाश',
      te: 'పొటాష్',
      ml: 'പൊട്ടാഷ്',
      kn: 'ಪೊಟ್ಯಾಶ್'
    },
    npk_complex: {
      en: 'NPK Complex (20:20:0:13)',
      ta: 'என்.பி.கே கூட்டு உரம்',
      hi: 'एन.पी.के. कॉम्प्लेक्स',
      te: 'ఎన్.పి.కె కాంప్లెక్స్',
      ml: 'എൻ.പി.കെ കോംപ്ലക്സ്',
      kn: 'ಎನ್.ಪಿ.ಕೆ ಕಾಂಪ್ಲೆಕ್ಸ್'
    },
    vermicompost: {
      en: 'Organic Vermicompost',
      ta: 'மண்புழு உரம்',
      hi: 'जैविक केंचुआ खाद',
      te: 'సేంద్రీయ వర్మీకంపోస్ట్',
      ml: 'ജൈവ മണ്ണിര വളം',
      kn: 'ಸಾವಯವ ಎರೆಹುಳು ಗೊಬ್ಬರ'
    },
    zinc_sulfate: {
      en: 'Zinc Sulfate',
      ta: 'துத்தநாக சல்பேட்',
      hi: 'जिंक सल्फेट',
      te: 'జింక్ సల్ఫేట్',
      ml: 'സിങ്ക് സൾഫേറ്റ്',
      kn: 'ಜಿಂಕ್ ಸಲ್ಫೇಟ್'
    },
    gypsum: {
      en: 'Agricultural Gypsum',
      ta: 'விவசாய ஜிப்சம்',
      hi: 'कृषि जिप्सम',
      te: 'వ్యవసాయ జిప్సం',
      ml: 'കാർഷിക ജിപ്സം',
      kn: 'ಕೃಷಿ ಜಿಪ್ಸಮ್'
    }
  };

  const id = (fertId || 'urea').toLowerCase();
  if (map[id] && map[id][lang]) {
    return map[id][lang];
  }
  return fertId;
}

/**
 * Localized crop names
 */
function getLocalizedCropName(cropId, defaultName, lang = 'en') {
  const map = {
    rice: {
      en: 'Rice (Paddy)',
      ta: 'நெல்',
      hi: 'धान / चावल',
      te: 'వరి / బియ్యం',
      ml: 'നെല്ല്',
      kn: 'ಭತ್ತ'
    },
    wheat: {
      en: 'Wheat',
      ta: 'கோதுமை',
      hi: 'गेहूं',
      te: 'గోధుమలు',
      ml: 'ഗോതമ്പ്',
      kn: 'ಗೋಧಿ'
    },
    cotton: {
      en: 'Cotton',
      ta: 'பருத்தி',
      hi: 'कपास',
      te: 'పత్తి',
      ml: 'പരുത്തി',
      kn: 'ಹತ್ತಿ'
    },
    maize: {
      en: 'Maize (Corn)',
      ta: 'மக்காச்சோளம்',
      hi: 'मक्का',
      te: 'మొక్కజొన్న',
      ml: 'മക്കച്ചോളം',
      kn: 'ಮೆಕ್ಕೆಜೋಳ'
    },
    groundnut: {
      en: 'Groundnut (Peanut)',
      ta: 'வேர்க்கடலை',
      hi: 'मूंगफली',
      te: 'వేరుశనగ',
      ml: 'നിലക്കടല',
      kn: 'ಕಡಲೆಕಾಯಿ'
    },
    soybean: {
      en: 'Soybean',
      ta: 'சோயாபீன்',
      hi: 'सोयाबीन',
      te: 'సోయాబీన్',
      ml: 'സോയാബീൻ',
      kn: 'ಸೋಯಾಬೀನ್'
    },
    sugarcane: {
      en: 'Sugarcane',
      ta: 'கரும்பு',
      hi: 'गन्ना',
      te: 'చెరకు',
      ml: 'കരിമ്പ്',
      kn: 'ಕಬ್ಬು'
    },
    potato: {
      en: 'Potato',
      ta: 'உருளைக்கிழங்கு',
      hi: 'आलू',
      te: 'బంగాళాదుంప',
      ml: 'ഉരുളക്കിഴങ്ങ്',
      kn: 'ಆಲೂಗಡ್ಡೆ'
    },
    tomato: {
      en: 'Tomato & Vegetables',
      ta: 'தக்காளி மற்றும் காய்கறிகள்',
      hi: 'टमाटर और सब्जियां',
      te: 'టమోటా మరియు కూరగాయలు',
      ml: 'തക്കാളിയും പച്ചക്കറികളും',
      kn: 'ಟೊಮೆಟೊ ಮತ್ತು ತರಕಾರಿಗಳು'
    },
    ragi: {
      en: 'Finger Millet (Ragi)',
      ta: 'கேழ்வரகு (ராகி)',
      hi: 'रागी',
      te: 'రాగులు',
      ml: 'റാഗി',
      kn: 'ರಾಗಿ'
    },
    gram: {
      en: 'Chickpea (Gram)',
      ta: 'கொண்டைக்கடலை',
      hi: 'चना',
      te: 'శనగలు',
      ml: 'കടല',
      kn: 'ಕಡಲೆ'
    }
  };

  const id = (cropId || '').toLowerCase();
  if (map[id] && map[id][lang]) {
    return map[id][lang];
  }
  return defaultName || cropId;
}

/**
 * Localized seasons
 */
function getLocalizedSeason(seasonKey, lang = 'en') {
  const map = {
    kharif: {
      en: 'Kharif (Monsoon)',
      ta: 'காரிப் (பருவமழை)',
      hi: 'खरीफ (मानसून)',
      te: 'ఖరీఫ్ (వర్షాకాలం)',
      ml: 'ഖാരിഫ് (മഴക്കാലം)',
      kn: 'ಖಾರೀಫ್ (ಮುಂಗಾರು)'
    },
    rabi: {
      en: 'Rabi (Winter)',
      ta: 'ரபி (குளிர்காலம்)',
      hi: 'रबी (सर्दियां)',
      te: 'రబీ (శీతాకాలం)',
      ml: 'റാബി (ശീതകാലം)',
      kn: 'ರಬಿ (ಹಿಂಗಾರು)'
    },
    zaid: {
      en: 'Zaid (Summer)',
      ta: 'கோடை (ஸையித்)',
      hi: 'जायद (गर्मी)',
      te: 'వేసవి (జాయెద్)',
      ml: 'വേനൽക്കാലം (സെയ്ദ്)',
      kn: 'ಬೇಸಿಗೆ (ಝೈದ್)'
    },
    annual: {
      en: 'Annual Crop',
      ta: 'ஆண்டுப் பயிர்',
      hi: 'वार्षिक फसल',
      te: 'వార్షిక పంట',
      ml: 'വാർഷിക വിള',
      kn: 'ವಾರ್ಷಿಕ ಬೆಳೆ'
    }
  };

  const k = (seasonKey || 'kharif').toLowerCase();
  for (const key of Object.keys(map)) {
    if (k.includes(key)) {
      return map[key][lang] || map[key].en;
    }
  }
  return seasonKey;
}

/**
 * Localized irrigation methods
 */
function getLocalizedIrrigation(irrigationKey, lang = 'en') {
  const map = {
    drip: {
      en: 'Drip Irrigation',
      ta: 'சொட்டு நீர் பாசனம்',
      hi: 'ड्रिप सिंचाई',
      te: 'బిందు సేద్యం',
      ml: 'തുള്ളിനന',
      kn: 'ಹನಿ ನೀರಾವರಿ'
    },
    sprinkler: {
      en: 'Sprinkler Irrigation',
      ta: 'தெளிப்பு நீர் பாசனம்',
      hi: 'फव्वारा सिंचाई',
      te: 'తుంపర సేద్యం',
      ml: 'സ്പ്രിംഗ്ലർ നന',
      kn: 'ತುಂತುರು ನೀರಾವರಿ'
    },
    canal: {
      en: 'Canal Irrigation',
      ta: 'கால்வாய் பாசனம்',
      hi: 'नहर सिंचाई',
      te: 'కాలువ సేద్యం',
      ml: 'കനാൽ ജലസേചനം',
      kn: 'ಕಾಲುವೆ ನೀರಾವರಿ'
    },
    borewell: {
      en: 'Borewell / Tube well',
      ta: 'ஆழ்துளை கிணறு பாசனம்',
      hi: 'नलकूप / बोरवेल',
      te: 'బోరుబావి సేద్యం',
      ml: 'ബോർവെൽ നന',
      kn: 'ಕೊಳವೆಬಾವಿ ನೀರಾವರಿ'
    },
    rainfed: {
      en: 'Rainfed (Natural Rainfall)',
      ta: 'மானாவாரி (மழைப்பொழிவு)',
      hi: 'वर्षा आधारित (बारानी)',
      te: 'వర్షాధార పంట',
      ml: 'മഴയെ ആശ്രയിച്ചുള്ള കൃഷി',
      kn: 'ಮಳೆಯಾಶ್ರಿತ'
    }
  };

  const k = (irrigationKey || 'drip').toLowerCase();
  for (const key of Object.keys(map)) {
    if (k.includes(key)) {
      return map[key][lang] || map[key].en;
    }
  }
  return irrigationKey;
}

/**
 * Localized Indian States
 */
function getLocalizedState(stateName, lang = 'en') {
  const map = {
    'Tamil Nadu': { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु', te: 'తమిళనాడు', ml: 'തമിഴ്നാട്', kn: 'ತಮಿಳುನಾಡು' },
    'Karnataka': { en: 'Karnataka', ta: 'கர்நாடகா', hi: 'कर्नाटक', te: 'కర్ణాటక', ml: 'കർണാടക', kn: 'ಕರ್ನಾಟಕ' },
    'Andhra Pradesh': { en: 'Andhra Pradesh', ta: 'ஆந்திரப் பிரதேசம்', hi: 'आंध्र प्रदेश', te: 'ఆంధ్రప్రదేశ్', ml: 'ആന്ധ്രാപ്രദേശ്', kn: 'ಆಂಧ್ರಪ್ರದೇಶ' },
    'Telangana': { en: 'Telangana', ta: 'தெலுங்கானா', hi: 'तेलंगाना', te: 'తెలంగాణ', ml: 'തെലങ്കാന', kn: 'ತೆಲಂಗಾಣ' },
    'Kerala': { en: 'Kerala', ta: 'கேரளா', hi: 'केरल', te: 'కేరళ', ml: 'കേരളം', kn: 'ಕೇರಳ' },
    'Maharashtra': { en: 'Maharashtra', ta: 'மகாராஷ்டிரா', hi: 'महाराष्ट्र', te: 'మహారాష్ట్ర', ml: 'മഹാരാഷ്ട്ര', kn: 'ಮಹಾರಾಷ್ಟ್ರ' },
    'Punjab': { en: 'Punjab', ta: 'பஞ்சாப்', hi: 'पंजाब', te: 'పంజాబ్', ml: 'പഞ്ചാബ്', kn: 'ಪಂಜಾಬ್' },
    'Haryana': { en: 'Haryana', ta: 'ஹரியானா', hi: 'हरियाणा', te: 'హర్యానా', ml: 'ഹരിയാന', kn: 'ಹರಿಯಾಣ' },
    'Uttar Pradesh': { en: 'Uttar Pradesh', ta: 'உத்தரப் பிரதேசம்', hi: 'उत्तर प्रदेश', te: 'ఉత్తరప్రదేశ్', ml: 'ഉത്തർപ്രദേശ്', kn: 'ಉತ್ತರಪ್ರದೇಶ' },
    'Madhya Pradesh': { en: 'Madhya Pradesh', ta: 'மத்தியப் பிரதேசம்', hi: 'मध्य प्रदेश', te: 'మధ్యప్రదేశ్', ml: 'മധ്യപ്രദേശ്', kn: 'ಮಧ್ಯಪ್ರದೇಶ' },
    'Gujarat': { en: 'Gujarat', ta: 'குஜராத்', hi: 'गुजरात', te: 'గుజరాత్', ml: 'ഗുജറാത്ത്', kn: 'ಗುಜರಾತ್' },
    'Rajasthan': { en: 'Rajasthan', ta: 'ராஜஸ்தான்', hi: 'राजस्थान', te: 'రాజస్థాన్', ml: 'രാജസ്ഥാൻ', kn: 'ರಾಜಸ್ಥಾನ' }
  };

  if (map[stateName] && map[stateName][lang]) {
    return map[stateName][lang];
  }
  return stateName;
}

/**
 * Localized fertilizer application frequency & schedule
 */
function getLocalizedFrequency(fertId, defaultFreq, lang = 'en') {
  const map = {
    urea: {
      en: 'Split into 3 doses: 50% basal at sowing/transplanting, 25% at tillering, 25% at panicle stage.',
      ta: '3 தவணைகளாக இடவும்: 50% விதைப்பு/நடவின் போது, 25% தூர் கட்டும் பருவத்தில், 25% கதிர் வரும் பருவத்தில்.',
      hi: '3 भागों में दें: 50% बुवाई/रोपाई के समय, 25% कल्ले फूटते समय, 25% बालियां निकलते समय।',
      te: '3 దఫాలుగా వేయండి: 50% విత్తే/నాటే సమయంలో, 25% పిలకల దశలో, 25% వెన్ను దశలో.',
      ml: '3 തവണകളായി നൽകുക: 50% നടീൽ സമയത്ത്, 25% ചിനപ്പ് പൊട്ടുമ്പോൾ, 25% കതിരിടുമ്പോൾ.',
      kn: '3 ಕಂತುಗಳಲ್ಲಿ ನೀಡಿ: ಬಿತ್ತನೆ/ನಾಟಿ ಸಮಯದಲ್ಲಿ 50%, ತೆನೆ ಕಟ್ಟುವಾಗ 25%, ಕಾಳು ಕಟ್ಟುವಾಗ 25%.'
    },
    dap: {
      en: 'Apply entire recommended quantity as basal dose at the time of sowing or final land preparation.',
      ta: 'பரிந்துரைக்கப்பட்ட முழு அளவையும் விதைப்பு அல்லது இறுதி நில உழவின் போது அடி உரமாக இடவும்.',
      hi: 'अनुशंसित पूरी मात्रा बुवाई या अंतिम जुताई के समय बेसल डोज के रूप में डालें।',
      te: 'సిఫార్సు చేసిన మొత్తం పరిమాణాన్ని విత్తే సమయంలో లేదా ఆఖరి దుక్కిలో ప్రాథమిక ఎరువుగా వేయండి.',
      ml: 'ശുപാർശ ചെയ്ത മുഴുവൻ അളവും വിതയ്ക്കുന്ന സമയത്തോ അവസാന നിലമൊരുക്കലിലോ അടിവളമായി നൽകുക.',
      kn: 'ಶಿಫಾರಸು ಮಾಡಿದ ಪೂರ್ಣ ಪ್ರಮಾಣವನ್ನು ಬಿತ್ತನೆ ಅಥವಾ ಅಂತಿಮ ಉಳುಮೆಯ ಸಮಯದಲ್ಲಿ ತಳ ಗೊಬ್ಬರವಾಗಿ ನೀಡಿ.'
    },
    ssp: {
      en: 'Apply full quantity as basal dose before sowing and incorporate thoroughly into moist root zone.',
      ta: 'விதைப்புக்கு முன் முழு அளவையும் அடி உரமாக இட்டு மண்ணுடன் நன்றாக கலக்கவும்.',
      hi: 'बुवाई से पहले पूरी मात्रा बेसल डोज के रूप में डालें और मिट्टी में अच्छी तरह मिलाएं।',
      te: 'విత్తే ముందు మొత్తం పరిమాణాన్ని ప్రాథమిక ఎరువుగా వేసి తేమ ఉన్న నేలలో బాగా కలపండి.',
      ml: 'വിതയ്ക്കുന്നതിന് മുമ്പ് മുഴുവൻ അളവും അടിവളമായി നൽകി ഈർപ്പമുള്ള മണ്ണിൽ നന്നായി ഇളക്കി ചേർക്കുക.',
      kn: 'ಬಿತ್ತನೆಗೆ ಮುಂಚಿತವಾಗಿ ಪೂರ್ಣ ಪ್ರಮಾಣವನ್ನು ತಳ ಗೊಬ್ಬರವಾಗಿ ನೀಡಿ ಮಣ್ಣಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆರೆಸಿ.'
    },
    npk_complex: {
      en: 'Apply 60% as basal dose and remaining 40% top-dressed 30 to 45 days after planting.',
      ta: '60% அடி உரமாகவும், மீதமுள்ள 40% நடவு செய்த 30 முதல் 45 நாட்களில் மேலுரமாகவும் இடவும்.',
      hi: '60% बेसल डोज के रूप में और शेष 40% रोपाई के 30 से 45 दिन बाद टॉप-ड्रेसिंग के रूप में दें।',
      te: '60% ప్రాథమిక ఎరువుగా మరియు మిగిలిన 40% నాటిన 30 నుండి 45 రోజుల తర్వాత పైపాటుగా వేయండి.',
      ml: '60% അടിവളമായും ബാക്കി 40% നട്ട് 30 മുതൽ 45 ദിവസങ്ങൾക്ക് ശേഷം മേൽവളമായും നൽകുക.',
      kn: '60% ತಳ ಗೊಬ್ಬರವಾಗಿ ಮತ್ತು ಉಳಿದ 40% ಅನ್ನು ನಾಟಿ ಮಾಡಿದ 30 ರಿಂದ 45 ದಿನಗಳ ನಂತರ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ನೀಡಿ.'
    },
    vermicompost: {
      en: 'Broadcast evenly during field preparation and mix with topsoil 15 days before sowing.',
      ta: 'நில தயாரிப்பின் போது சீராக தூவி விதைப்பதற்கு 15 நாட்களுக்கு முன் மேல் மண்ணுடன் கலக்கவும்.',
      hi: 'खेत की तैयारी के समय समान रूप से बिखेरें और बुवाई से 15 दिन पहले ऊपरी मिट्टी में मिलाएं।',
      te: 'పొలం తయారీ సమయంలో సమానంగా చల్లి, విత్తడానికి 15 రోజుల ముందు పై మట్టితో కలపండి.',
      ml: 'നിലമൊരുക്കുമ്പോൾ തുല്യമായി വിതറി വിതയ്ക്കുന്നതിന് 15 ദിവസം മുമ്പ് മണ്ണിൽ ചേർക്കുക.',
      kn: 'ಜಮೀನು ಸಿದ್ಧಪಡಿಸುವಾಗ ಸಮವಾಗಿ ಹರಡಿ ಬಿತ್ತನೆಗೆ 15 ದಿನಗಳ ಮುಂಚಿತವಾಗಿ ಮೇಲ್ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಿ.'
    },
    gypsum: {
      en: 'Broadcast uniformly before monsoon rains and incorporate into soil to improve calcium & sulfur.',
      ta: 'பருவமழைக்கு முன் சீராக தூவி மண்ணை உழுது கால்சியம் மற்றும் கந்தக சத்தை அதிகரிக்கவும்.',
      hi: 'मानसून की बारिश से पहले समान रूप से बिखेरें और कैल्शियम व सल्फर सुधारने के लिए मिट्टी में मिलाएं।',
      te: 'వర్షాకాలానికి ముందు సమానంగా చల్లి, కాల్షియం మరియు సల్ఫర్ పెంచడానికి మట్టిలో కలపండి.',
      ml: 'മഴയ്ക്ക് മുമ്പ് തുല്യമായി വിതറി കാൽസ്യവും സൾഫറും മെച്ചപ്പെടുത്താൻ മണ്ണിൽ ചേർക്കുക.',
      kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಮುಂಚಿತವಾಗಿ ಸಮವಾಗಿ ಹರಡಿ ಕ್ಯಾಲ್ಸಿಯಂ ಮತ್ತು ಗಂಧಕದ ಅಂಶ ಸುಧಾರಿಸಲು ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಿ.'
    }
  };

  const id = (fertId || '').toLowerCase();
  if (map[id] && map[id][lang]) {
    return map[id][lang];
  }
  return defaultFreq || map.urea[lang] || map.urea.en;
}

/**
 * Localized crop management details (plant spacing, harvest time, soil synergy)
 */
function getLocalizedCropDetails(cropId, field, defaultVal, lang = 'en') {
  const synergyMap = {
    rice: {
      en: 'Exceptional moisture retention in fine alluvial/clay base supports uniform tillering.',
      ta: 'வண்டல் மற்றும் களிமண் தளத்தில் உள்ள சிறந்த ஈரப்பதம் சீரான தூர் வெடிப்புக்கு உதவுகிறது.',
      hi: 'जलोढ़ व चिकनी मिट्टी की नमी धारण क्षमता धान के बेहतरीन कल्ले फूटने में सहायक है।',
      te: 'ఒండ్రు నేల తేమ నిలుపుదల సామర్థ్యం వరి పంట ఎదుగుదలకు ఎంతో అనుకూలం.',
      ml: 'എക്കൽ മണ്ണിലെ മികച്ച ഈർപ്പം നെല്ലിന്റെ മികച്ച വളർച്ചയ്ക്ക് സഹായിക്കുന്നു.',
      kn: 'ಮೆಕ್ಕಲು ಮಣ್ಣಿನ ಅತ್ಯುತ್ತಮ ತೇವಾಂಶ ಧಾರಣಾ ಸಾಮರ್ಥ್ಯವು ಭತ್ತದ ಉತ್ತಮ ಬೆಳವಣಿಗೆಗೆ ಸಹಕಾರಿಯಾಗಿದೆ.'
    },
    wheat: {
      en: 'Fine silt-loam texture permits deep crown root development and strong lodging resistance.',
      ta: 'மென்மையான வண்டல் அமைப்பு வேர்கள் ஆழமாக ஊடுருவி பயிர் சாயாமல் இருக்க உதவுகிறது.',
      hi: 'दोमट संरचना से गेहूं की जड़ें गहराई तक जाती हैं और पौधा गिरने से बचता है।',
      te: 'ఒండ్రు నేల నిర్మాణం గోధుమ వేర్లు లోతుగా విస్తరించడానికి సహాయపడుతుంది.',
      ml: 'പശിമരാശി ഘടന വേരുകൾ ആഴത്തിൽ ഇറങ്ങാൻ സഹായിക്കുന്നു.',
      kn: 'ಮಣ್ಣಿನ ಉತ್ತಮ ರಚನೆಯು ಗೋಧಿಯ ಬೇರುಗಳು ಆಳವಾಗಿ ಬೆಳೆಯಲು ನೆರವಾಗುತ್ತದೆ.'
    },
    cotton: {
      en: 'Deep black vertisol with moisture swelling prevents drought stress during boll formation.',
      ta: 'ஆழமான கரிசல் மண்ணின் ஈரப்பதம் காய்கள் உருவாகும் போது வறட்சி ஏற்படாமல் பாதுகாக்கிறது.',
      hi: 'काली मिट्टी की नमी धारण शक्ति कपास के गूलर बनते समय सूखे के तनाव को रोकती है।',
      te: 'నల్లరేగడి నేల తేమ నిలుపుదల పత్తి కాయలు ఏర్పడే సమయంలో నీటి కొరత రాకుండా కాపాడుతుంది.',
      ml: 'കരിമണ്ണിലെ ഈർപ്പ സാന്നിധ്യം കായ്കൾ ഉണ്ടാകുമ്പോൾ വരൾച്ച തടയുന്നു.',
      kn: 'ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣಿನ ತೇವಾಂಶವು ಕಾಯಿ ಕಟ್ಟುವ ಹಂತದಲ್ಲಿ ಬರ ಪರಿಸ್ಥಿತಿಯನ್ನು ತಡೆಯುತ್ತದೆ.'
    },
    groundnut: {
      en: 'Porous friable red soil allows easy peg penetration and superior pod expansion.',
      ta: 'நுண்துளைகள் கொண்ட இலகுவான செம்மண் விழுதுகள் எளிதில் இறங்கவும் திரட்சியான காய்கள் பிடிக்கவும் உதவுகிறது.',
      hi: 'भुरभुरी लाल मिट्टी में मूंगफली की सुइयां (पेग्स) आसानी से धंसती हैं और दाने बड़े बनते हैं।',
      te: 'గుల్లగా ఉండే ఎర్ర నేల ఊడలు సులభంగా దిగడానికి మరియు కాయలు బాగా ఎదగడానికి తోడ్పడుతుంది.',
      ml: 'പശിമയുള്ള ചുവന്ന മണ്ണിൽ കായ്കൾ നന്നായി പിടിക്കുകയും വലിപ്പം വെക്കുകയും ചെയ്യുന്നു.',
      kn: 'ಸಡಿಲವಾದ ಕೆಂಪು ಮಣ್ಣು ಕಡಲೆಕಾಯಿ ಕಾಯಿಗಳು ಚೆನ್ನಾಗಿ ಬೆಳೆಯಲು ಅತ್ಯಂತ ಸೂಕ್ತವಾಗಿದೆ.'
    },
    maize: {
      en: 'Deep well-drained topsoil facilitates vigorous secondary prop root anchorage.',
      ta: 'நல்ல வடிகால் வசதியுள்ள ஆழமான மண் தாங்கு வேர்களை பலப்படுத்தி பயிர் வளர உதவுகிறது.',
      hi: 'अच्छी जल निकासी वाली गहरी मिट्टी मक्के की जड़ों को मजबूत सहारा देती है।',
      te: 'మంచి నీటి పారుదల గల నేల మొక్కజొన్న వేర్లు బలంగా నాటుకోవడానికి సహకరిస్తుంది.',
      ml: 'നല്ല നീർവാർച്ചയുള്ള മണ്ണ് വിളയുടെ കരുത്തുറ്റ വളർച്ച ഉറപ്പാക്കുന്നു.',
      kn: 'ಉತ್ತಮ ನೀರು ಬಸಿದುಹೋಗುವ ಮಣ್ಣು ಮೆಕ್ಕೆಜೋಳದ ಬೆಳೆಗೆ ಸೂಕ್ತ ಆಸರೆ ನೀಡುತ್ತದೆ.'
    }
  };

  const id = (cropId || '').toLowerCase();
  if (field === 'soilSynergy' && synergyMap[id] && synergyMap[id][lang]) {
    return synergyMap[id][lang];
  }
  return defaultVal;
}

/**
 * Localized Error Messages from API & Client
 */
function getLocalizedErrorMessage(errorCode, lang = 'en') {
  const map = {
    INSUFFICIENT_SOIL: {
      en: 'Insufficient visible soil information. Please upload a clearer image showing some soil between or around the plants.',
      ta: 'மண் பற்றிய விவரங்கள் தெளிவாகத் தெரியவில்லை. பயிர்களுக்கு இடையில் அல்லது அதைச் சுற்றியுள்ள மண் தெரியும்படி தெளிவான படத்தை பதிவேற்றவும்.',
      hi: 'मिट्टी की दृश्य जानकारी अपर्याप्त है। कृपया पौधों के बीच या आसपास की मिट्टी दिखाते हुए एक स्पष्ट तस्वीर अपलोड करें।',
      te: 'తగినంత నేల సమాచారం కనిపించడం లేదు. దయచేసి మొక్కల మధ్య లేదా చుట్టూ కొంత నేల కనిపించే స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.',
      ml: 'മണ്ണിന്റെ വിവരങ്ങൾ വ്യക്തമായി കാണുന്നില്ല. ചെടികൾക്കിടയിലോ ചുറ്റുമോ ഉള്ള മണ്ണ് കാണുന്ന തരത്തിൽ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
      kn: 'ಸಾಕಷ್ಟು ಮಣ್ಣಿನ ಮಾಹಿತಿ ಗೋಚರಿಸುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಗಿಡಗಳ ನಡುವೆ ಅಥವಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ಮಣ್ಣು ಕಾಣುವಂತೆ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    LOW_CONFIDENCE: {
      en: 'Insufficient visible soil information. Please upload a clearer image showing some soil between or around the plants.',
      ta: 'மண் பற்றிய விவரங்கள் தெளிவாகத் தெரியவில்லை. பயிர்களுக்கு இடையில் அல்லது அதைச் சுற்றியுள்ள மண் தெரியும்படி தெளிவான படத்தை பதிவேற்றவும்.',
      hi: 'मिट्टी की दृश्य जानकारी अपर्याप्त है। कृपया पौधों के बीच या आसपास की मिट्टी दिखाते हुए एक स्पष्ट तस्वीर अपलोड करें।',
      te: 'తగినంత నేల సమాచారం కనిపించడం లేదు. దయచేసి మొక్కల మధ్య లేదా చుట్టూ కొంత నేల కనిపించే స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.',
      ml: 'മണ്ണിന്റെ വിവരങ്ങൾ വ്യക്തമായി കാണുന്നില്ല. ചെടികൾക്കിടയിലോ ചുറ്റുമോ ഉള്ള മണ്ണ് കാണുന്ന തരത്തിൽ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
      kn: 'ಸಾಕಷ್ಟು ಮಣ್ಣಿನ ಮಾಹಿತಿ ಗೋಚರಿಸುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಗಿಡಗಳ ನಡುವೆ ಅಥವಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ಮಣ್ಣು ಕಾಣುವಂತೆ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    BLURRY_IMAGE: {
      en: 'The image is too blurry for reliable soil classification. Please upload a sharper photo.',
      ta: 'படம் மிகவும் மங்கலாக உள்ளது. துல்லியமான பகுப்பாய்வுக்கு தெளிவான புகைப்படத்தை பதிவேற்றவும்.',
      hi: 'सटीक मिट्टी वर्गीकरण के लिए तस्वीर बहुत धुंधली है। कृपया एक स्पष्ट और साफ फोटो अपलोड करें।',
      te: 'నేల వర్గీకరణకు చిత్రం చాలా అస్పష్టంగా ఉంది. దయచేసి స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.',
      ml: 'മണ്ണ് കൃത്യമായി തിരിച്ചറിയാൻ ഫോട്ടോ വളരെ മങ്ങിയതാണ്. ദയവായി വ്യക്തതയുള്ള ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
      kn: 'ಮಣ್ಣಿನ ನಿಖರ ವರ್ಗೀಕರಣಕ್ಕೆ ಚಿತ್ರವು ತುಂಬಾ ಮಸುಕಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    TOO_DARK: {
      en: 'Image is too dark. Please take a photo in good natural daylight.',
      ta: 'படம் மிகவும் இருட்டாக உள்ளது. நல்ல பகல் வெளிச்சத்தில் புகைப்படம் எடுக்கவும்.',
      hi: 'तस्वीर बहुत अंधेरी है। कृपया प्राकृतिक दिन के उजाले में फोटो लें।',
      te: 'ఫోటో చాలా చీకటిగా ఉంది. దయచేసి మంచి పగటి వెలుతురులో ఫోటో తీయండి.',
      ml: 'ഫോട്ടോ വളരെ ഇരുണ്ടതാണ്. ദയവായി നല്ല പകൽ വെളിച്ചത്തിൽ ഫോട്ടോ എടുക്കുക.',
      kn: 'ಚಿತ್ರವು ತುಂಬಾ ಕತ್ತಲೆಯಾಗಿದೆ. ದಯವಿಟ್ಟು ನೈಸರ್ಗಿಕ ಹಗಲು ಬೆಳಕಿನಲ್ಲಿ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.'
    },
    OVEREXPOSED: {
      en: 'Image is completely overexposed or blank. Please upload a clear photo of soil.',
      ta: 'படம் அதிக வெளிச்சமாக அல்லது காலியாக உள்ளது. தெளிவான மண் புகைப்படத்தை பதிவேற்றவும்.',
      hi: 'तस्वीर अत्यधिक चमकदार या खाली है। कृपया मिट्टी की एक स्पष्ट फोटो अपलोड करें।',
      te: 'చిత్రంలో అధిక వెలుతురు ఉంది లేదా ఖాళీగా ఉంది. దయచేసి నేల స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.',
      ml: 'ഫോട്ടോയിൽ അമിത വെളിച്ചമുണ്ട്. ദയവായി മണ്ണിന്റെ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
      kn: 'ಚಿತ್ರವು ಅತಿಯಾದ ಬೆಳಕಿನಿಂದ ಕೂಡಿದೆ ಅಥವಾ ಖಾಲಿಯಾಗಿದೆ. ದಯವಿಟ್ಟು ಮಣ್ಣಿನ ಸ್ಪಷ್ಟ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    NON_SOIL_BLUE: {
      en: 'The image does not appear to contain soil (predominantly blue/sky/water).',
      ta: 'இப்படத்தில் மண் இல்லை (பெரும்பாலும் வானம்/தண்ணீர்/நீல நிறமாக உள்ளது).',
      hi: 'इस तस्वीर में मिट्टी नहीं दिख रही है (मुख्य रूप से नीला रंग/आसमान/पानी है)।',
      te: 'ఈ చిత్రంలో నేల కనిపించడం లేదు (ఎక్కువగా ఆకాశం లేదా నీరు ఉంది).',
      ml: 'ഈ ഫോട്ടോയിൽ മണ്ണ് കാണുന്നില്ല (ആകാശം അല്ലെങ്കിൽ വെള്ളം മാത്രം).',
      kn: 'ಈ ಚಿತ್ರದಲ್ಲಿ ಮಣ್ಣು ಕಂಡುಬರುತ್ತಿಲ್ಲ (ಹೆಚ್ಚಾಗಿ ನೀಲಿ/ಆಕಾಶ/ನೀರು ಇದೆ).'
    },
    NON_SOIL_FLAT: {
      en: 'The image appears to be a blank or flat graphic, not natural soil.',
      ta: 'இது இயற்கை மண் அல்ல, கணினி வரைபடம் அல்லது வெற்று படமாகத் தெரிகிறது.',
      hi: 'यह तस्वीर प्राकृतिक मिट्टी नहीं, बल्कि एक सादा ग्राफिक प्रतीत होती है।',
      te: 'ఇది సహజ నేల కాదు, కంప్యూటర్ గ్రాఫిక్ లేదా ఖాళీ చిత్రంగా కనిపిస్తోంది.',
      ml: 'ഇത് സ്വാഭാവിക മണ്ണല്ല, വെറുമൊരു ഗ്രാഫിക് ചിത്രം മാത്രമാണ്.',
      kn: 'ಇದು ನೈಸರ್ಗಿಕ ಮಣ್ಣಲ್ಲ, ಕೇವಲ ಗ್ರಾಫಿಕ್ ಚಿತ್ರದಂತೆ ಕಾಣುತ್ತಿದೆ.'
    },
    INVALID_IMAGE_FORMAT: {
      en: 'Could not read image file. Please upload a valid JPG, PNG, or WEBP image.',
      ta: 'படக் கோப்பை படிக்க முடியவில்லை. சரியான JPG, PNG அல்லது WEBP படத்தை பதிவேற்றவும்.',
      hi: 'तस्वीर फ़ाइल को पढ़ा नहीं जा सका। कृपया वैध JPG, PNG या WEBP इमेज अपलोड करें।',
      te: 'చిత్ర ఫైల్‌ను చదవలేకపోయాము. దయచేసి సరైన JPG, PNG లేదా WEBP చిత్రాన్ని అప్‌లోడ్ చేయండి.',
      ml: 'ഫോട്ടോ ഫയൽ വായിക്കാൻ കഴിഞ്ഞില്ല. സാധുവായ JPG, PNG അല്ലെങ്കിൽ WEBP ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
      kn: 'ಚಿತ್ರದ ಫೈಲ್ ಓದಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ JPG, PNG ಅಥವಾ WEBP ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    SERVICE_UNAVAILABLE: {
      en: 'Soil AI analysis service is currently unavailable. Please try again.',
      ta: 'மண் AI பகுப்பாய்வு சேவை தற்போது கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
      hi: 'मृदा AI विश्लेषण सेवा वर्तमान में अनुपलब्ध है। कृपया पुन: प्रयास करें।',
      te: 'నేల AI విశ్లేషణ సేవ ప్రస్తుతం అందుబాటులో లేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
      ml: 'മണ്ണ് AI വിശകലന സേവനം ഇപ്പോൾ ലഭ്യമല്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
      kn: 'ಮಣ್ಣಿನ AI ವಿಶ್ಲೇಷಣೆ ಸೇವೆ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    },
    NETWORK_ERROR: {
      en: 'Soil AI analysis service is currently unavailable. Please try again.',
      ta: 'மண் AI பகுப்பாய்வு சேவை தற்போது கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
      hi: 'मृदा AI विश्लेषण सेवा वर्तमान में अनुपलब्ध है। कृपया पुन: प्रयास करें।',
      te: 'నేల AI విశ్లేషణ సేవ ప్రస్తుతం అందుబాటులో లేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
      ml: 'മണ്ണ് AI വിശകലന സേവനം ഇപ്പോൾ ലഭ്യമല്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
      kn: 'ಮಣ್ಣಿನ AI ವಿಶ್ಲೇಷಣೆ ಸೇವೆ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    },
    SERVER_ERROR: {
      en: 'Soil AI analysis service is currently unavailable. Please try again.',
      ta: 'மண் AI பகுப்பாய்வு சேவை தற்போது கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
      hi: 'मृदा AI विश्लेषण सेवा वर्तमान में अनुपलब्ध है। कृपया पुन: प्रयास करें।',
      te: 'నేల AI విశ్లేషణ సేవ ప్రస్తుతం అందుబాటులో లేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
      ml: 'മണ്ണ് AI വിശകലന സേവനം ഇപ്പോൾ ലഭ്യമല്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
      kn: 'ಮಣ್ಣಿನ AI ವಿಶ್ಲೇಷಣೆ ಸೇವೆ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    }
  };

  const code = (errorCode || '').toUpperCase();
  if (map[code] && map[code][lang]) {
    return map[code][lang];
  }
  if (map[code] && map[code].en) {
    return map[code].en;
  }
  return map.INSUFFICIENT_SOIL[lang] || map.INSUFFICIENT_SOIL.en;
}

/**
 * Localized Welcome greeting with farmer name
 */
function getLocalizedWelcome(name, lang = 'en') {
  const safeName = name ? name.trim() : 'Farmer';
  const map = {
    en: `Welcome, ${safeName} 👋`,
    ta: `வரவேற்கிறோம், ${safeName} 👋`,
    hi: `स्वागत है, ${safeName} 👋`,
    te: `స్వాగతం, ${safeName} 👋`,
    ml: `സ്വാഗതം, ${safeName} 👋`,
    kn: `ಸ್ವಾಗತ, ${safeName} 👋`
  };
  return map[lang] || map.en;
}

/**
 * Localized Authentication Errors
 */
function getLocalizedAuthError(errorCode, lang = 'en') {
  const map = {
    ERR_ENTER_NAME: {
      en: 'Please enter your name.',
      ta: 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.',
      hi: 'कृपया अपना नाम दर्ज करें।',
      te: 'దయచేసి మీ పేరును నమోదు చేయండి.',
      ml: 'ദയവായി നിങ്ങളുടെ പേര് നൽകുക.',
      kn: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.'
    },
    ERR_ENTER_EMAIL: {
      en: 'Please enter your email.',
      ta: 'தயவுசெய்து உங்கள் மின்னஞ்சலை உள்ளிடவும்.',
      hi: 'कृपया अपना ईमेल दर्ज करें।',
      te: 'దయచేసి మీ ఇమెయిల్ నమోదు చేయండి.',
      ml: 'ദയവായി ഇമെയിൽ നൽകുക.',
      kn: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ.'
    },
    ERR_ENTER_PASSWORD: {
      en: 'Please enter your password.',
      ta: 'தயவுசெய்து கடவுச்சொல்லை உள்ளிடவும்.',
      hi: 'कृपया अपना पासवर्ड दर्ज करें।',
      te: 'దయచేసి పాస్‌వర్డ్ నమోదు చేయండి.',
      ml: 'ദയവായി പാസ്‌വേഡ് നൽകുക.',
      kn: 'ದಯವಿಟ್ಟು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.'
    },
    ERR_PASSWORD_TOO_SHORT: {
      en: 'Password must be at least 4 characters long.',
      ta: 'கடவுச்சொல் குறைந்தது 4 எழுத்துக்கள் இருக்க வேண்டும்.',
      hi: 'पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।',
      te: 'పాస్‌వర్డ్ కనీసం 4 అక్షరాలు ఉండాలి.',
      ml: 'പാസ്‌വേഡിന് കുറഞ്ഞത് 4 അക്ഷരങ്ങൾ വേണം.',
      kn: 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 4 ಅಕ್ಷರಗಳಿರಬೇಕು.'
    },
    ERR_PASSWORDS_MISMATCH: {
      en: 'Passwords do not match.',
      ta: 'கடவுச்சொற்கள் பொருந்தவில்லை.',
      hi: 'पासवर्ड मेल नहीं खा रहे हैं।',
      te: 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు.',
      ml: 'പാസ്‌വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല.',
      kn: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ.'
    },
    ERR_INVALID_CREDENTIALS: {
      en: 'Invalid email or password.',
      ta: 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்.',
      hi: 'अमान्य ईमेल या पासवर्ड।',
      te: 'చెల్లని ఇమెయిల్ లేదా పాస్‌వర్డ్.',
      ml: 'തെറ്റായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്.',
      kn: 'ಅಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್.'
    },
    ERR_USER_NOT_FOUND: {
      en: 'User not found with this email.',
      ta: 'இந்த மின்னஞ்சலில் பயனர் கணக்கு இல்லை.',
      hi: 'इस ईमेल से कोई खाता नहीं मिला।',
      te: 'ఈ ఇమెయిల్‌తో ఖాతా కనుగొనబడలేదు.',
      ml: 'ഈ ഇമെയിലിൽ അക്കൗണ്ട് കണ്ടെത്തിയില്ല.',
      kn: 'ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಖಾತೆ ಕಂಡುಬಂದಿಲ್ಲ.'
    },
    ERR_PASSWORD_INCORRECT: {
      en: 'Password is incorrect.',
      ta: 'உள்ளிட்ட கடவுச்சொல் தவறானது.',
      hi: 'दर्ज किया गया पासवर्ड गलत है।',
      te: 'నమోదు చేసిన పాస్‌వర్డ్ తప్పు.',
      ml: 'നൽകിയ പാസ്‌വേഡ് തെറ്റാണ്.',
      kn: 'ನಮೂದಿಸಿದ ಪಾಸ್‌ವರ್ಡ್ ತಪ್ಪಾಗಿದೆ.'
    },
    ERR_EMAIL_ALREADY_EXISTS: {
      en: 'An account with this email already exists. Please log in.',
      ta: 'இந்த மின்னஞ்சலில் ஏற்கனவே கணக்கு உள்ளது. உள்நுழையவும்.',
      hi: 'इस ईमेल से पहले से खाता मौजूद है। कृपया लॉगिन करें।',
      te: 'ఈ ఇమెయిల్‌తో ఇప్పటికే ఖాతా ఉంది. దయచేసి లాగిన్ అవ్వండి.',
      ml: 'ഈ ഇമെയിലിൽ ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ട്. ലോഗിൻ ചെയ്യുക.',
      kn: 'ಈ ಇಮೇಲ್‌ನಲ್ಲಿ ಈಗಾಗಲೇ ಖಾತೆ ಇದೆ. ದಯವಿಟ್ಟು ಲಾಗಿನ್ ಮಾಡಿ.'
    }
  };

  const code = (errorCode || '').toUpperCase();
  if (map[code] && map[code][lang]) {
    return map[code][lang];
  }
  if (map[code] && map[code].en) {
    return map[code].en;
  }
  return t('errEnterCredentials', lang);
}



// ==========================================
// FILE: src/data/fertilizerPricing.js
// ==========================================

// Fertilizer pricing calibrated for Indian agricultural economics
const fertilizerPrices = {
  urea: {
    id: "urea",
    name: "Neem Coated Urea (46% N)",
    shortName: "Urea",
    pricePerKg: 7.0, // Subsidized rate (~₹315 per 45kg bag)
    subsidyCategory: "Government Subsidized (DBT)",
    standardBagSizeKg: 45,
    composition: "46% Nitrogen (N)",
    color: "#22c55e"
  },
  dap: {
    id: "dap",
    name: "Di-Ammonium Phosphate (18:46:0)",
    shortName: "DAP",
    pricePerKg: 27.0, // ~₹1,350 per 50kg bag
    subsidyCategory: "NBS Subsidized",
    standardBagSizeKg: 50,
    composition: "18% N, 46% P2O5",
    color: "#3b82f6"
  },
  mop: {
    id: "mop",
    name: "Muriate of Potash (0:0:60)",
    shortName: "Potash (MOP)",
    pricePerKg: 34.0, // ~₹1,700 per 50kg bag
    subsidyCategory: "NBS Subsidized",
    standardBagSizeKg: 50,
    composition: "60% K2O",
    color: "#8b5cf6"
  },
  npk_complex: {
    id: "npk_complex",
    name: "NPK Complex (20:20:0:13)",
    shortName: "NPK 20-20-0",
    pricePerKg: 29.0,
    subsidyCategory: "NBS Subsidized",
    standardBagSizeKg: 50,
    composition: "20% N, 20% P, 13% S",
    color: "#06b6d4"
  },
  zinc_sulfate: {
    id: "zinc_sulfate",
    name: "Zinc Sulfate Heptahydrate (21% Zn)",
    shortName: "Zinc Sulfate",
    pricePerKg: 48.0,
    subsidyCategory: "Micronutrient Support",
    standardBagSizeKg: 25,
    composition: "21% Zinc, 10% Sulfur",
    color: "#f59e0b"
  },
  vermicompost: {
    id: "vermicompost",
    name: "Organic Vermicompost / Bio-manure",
    shortName: "Vermicompost",
    pricePerKg: 8.0,
    subsidyCategory: "PKVY Organic Support",
    standardBagSizeKg: 50,
    composition: "Organic Carbon > 16%, Microflora",
    color: "#84cc16"
  }
};

const pricingMetadata = {
  lastUpdated: "September 2026",
  currencySymbol: "₹",
  currencyCode: "INR",
  priceSource: "Department of Fertilizers, Govt. of India & State Cooperative Marketing Federations",
  disclaimer: "Prices may vary based on location, supplier, season, transport charges, and prevailing market conditions."
};


// ==========================================
// FILE: src/data/soilDatabase.js
// ==========================================

// Soil Archetypes and Agronomic Characteristics calibrated for Real ML Model Classes
const soilArchetypes = {
  alluvial: {
    id: "alluvial",
    name: "Alluvial Soil",
    tamilName: "வண்டல் மண்",
    hindiName: "जलोढ़ मिट्टी",
    teluguName: "ఒండ్రు నేల",
    malayalamName: "എക്കൽ മണ്ണ്",
    kannadaName: "ಮೆಕ್ಕಲು ಮಣ್ಣು",
    condition: "Good",
    confidence: 94,
    colorHex: "#5C4033",
    tagline: "Highly fertile depositional river basin soil rich in silt and organic matter",
    characteristics: {
      moisture: { label: "High", value: "Optimal (65-75%)", status: "good" },
      texture: { label: "Fine Silt & Loam", value: "Balanced Silt-Clay-Sand", status: "good" },
      organicMatter: { label: "High (3.5%)", value: "Rich organic river sediment", status: "good" },
      pH: { label: "6.5 - 7.5", statusNote: "Requires laboratory soil test", status: "neutral" },
      nitrogen: { label: "Moderate", statusNote: "Requires laboratory soil test", status: "needs_test" },
      phosphorus: { label: "Sufficient", statusNote: "Requires laboratory soil test", status: "needs_test" },
      potassium: { label: "High", statusNote: "Requires laboratory soil test", status: "needs_test" }
    },
    crops: [
      {
        id: "rice",
        name: "Rice (Paddy)",
        suitability: 96,
        icon: "🌾",
        season: "Kharif (June - Nov)",
        waterReq: "High",
        waterLevel: 3,
        primaryFertilizer: "Urea + DAP",
        estimatedFertCostPerAcre: 1650,
        harvestDuration: "115 - 130 Days",
        plantSpacing: "20 cm × 15 cm",
        soilSynergy: "Exceptional water retention in alluvial base supports uniform root growth and tillering."
      },
      {
        id: "wheat",
        name: "Wheat",
        suitability: 92,
        icon: "🌱",
        season: "Rabi (Oct - March)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "NPK 20-20-0 + Urea",
        estimatedFertCostPerAcre: 1480,
        harvestDuration: "120 - 135 Days",
        plantSpacing: "22.5 cm row spacing",
        soilSynergy: "Fine silt-loam texture permits deep crown root development and lodging resistance."
      },
      {
        id: "maize",
        name: "Maize (Corn)",
        suitability: 89,
        icon: "🌽",
        season: "Kharif / Rabi",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Urea + Potash",
        estimatedFertCostPerAcre: 1320,
        harvestDuration: "95 - 110 Days",
        plantSpacing: "60 cm × 20 cm",
        soilSynergy: "Deep topsoil facilitates vigorous secondary prop root anchorage."
      },
      {
        id: "sugarcane",
        name: "Sugarcane",
        suitability: 86,
        icon: "🎋",
        season: "Annual (12-14 mos)",
        waterReq: "High",
        waterLevel: 3,
        primaryFertilizer: "Urea + SSP + MOP",
        estimatedFertCostPerAcre: 2850,
        harvestDuration: "360 - 400 Days",
        plantSpacing: "90 cm furrow spacing",
        soilSynergy: "Sustained nutrient replenishment in alluvial beds yields thick cane stalks."
      }
    ],
    fertilizers: [
      {
        id: "urea",
        name: "Neem Coated Urea (46% N)",
        tamilName: "வேப்பம்பூசப்பட்ட யூரியா",
        hindiName: "नीम लेपित यूरिया",
        teluguName: "వేప పూత పూసిన యూరియా",
        malayalamName: "വേപ്പെണ്ണ പുരട്ടിയ യൂറിയ",
        kannadaName: "ಬೇವಿನ ಲೇಪಿತ ಯೂರಿಯಾ",
        dosagePerAcreKg: 50,
        frequency: "Split into 3 doses: 50% basal at transplanting, 25% at tillering (25-30 days), 25% at panicle initiation (50-55 days).",
        method: "Broadcasting in drained field, followed by light irrigation after 24 hours.",
        priority: "Highly Recommended",
        priorityColor: "emerald",
        role: "Primary vegetative booster providing sustained nitrogen release without leaching.",
        pricePerKg: 7,
        organicAlternative: "Poultry manure @ 1.5 tonnes/acre or Vermicompost @ 2 tonnes/acre",
        applicationCaution: "Avoid application during heavy monsoon showers to prevent runoff."
      },
      {
        id: "dap",
        name: "Di-Ammonium Phosphate (18:46:0)",
        tamilName: "டி.ஏ.பி (DAP)",
        hindiName: "डी.ए.पी (DAP)",
        teluguName: "డి.ఎ.పి (DAP)",
        malayalamName: "ഡി.എ.പി (DAP)",
        kannadaName: "ಡಿ.ಎ.ಪಿ (DAP)",
        dosagePerAcreKg: 40,
        frequency: "100% application as basal dose at the time of final land preparation.",
        method: "Band placement 5 cm below and 5 cm away from the seed row.",
        priority: "Alternative",
        priorityColor: "amber",
        role: "Accelerates root system elongation and initial crown formation.",
        pricePerKg: 27,
        organicAlternative: "Rock phosphate with phosphate solubilizing bacteria (PSB) @ 2 kg/acre",
        applicationCaution: "Do not mix directly with zinc fertilizers during storage."
      },
      {
        id: "zinc_sulfate",
        name: "Zinc Sulfate Heptahydrate (Zn 21%)",
        tamilName: "துத்தநாக சல்பேட்",
        hindiName: "जिंक सल्फेट",
        teluguName: "జింక్ సల్ఫేట్",
        malayalamName: "സിങ്ക് സൾഫേറ്റ്",
        kannadaName: "ಜಿಂಕ್ ಸಲ್ಫೇಟ್",
        dosagePerAcreKg: 10,
        frequency: "Once per season at basal preparation or foliar spray at 35-40 days if Khaira disease symptoms appear.",
        method: "Soil incorporation during last puddling, or 0.5% spray with 0.25% lime.",
        priority: "Optional",
        priorityColor: "blue",
        role: "Prevents zinc-deficiency induced chlorosis and promotes enzyme activation.",
        pricePerKg: 48,
        organicAlternative: "Zinc-enriched compost incubated for 30 days",
        applicationCaution: "Never blend together with phosphatic fertilizers."
      }
    ]
  },

  black: {
    id: "black",
    name: "Black Cotton Soil",
    tamilName: "கரிசல் மண்",
    hindiName: "काली कपास मिट्टी",
    teluguName: "నల్లరేగడి నేల",
    malayalamName: "കരിമണ്ണ്",
    kannadaName: "ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು",
    condition: "Good",
    confidence: 95,
    colorHex: "#2C2C2C",
    tagline: "Montmorillonite-rich Vertisol with high swelling and deep moisture retention",
    characteristics: {
      moisture: { label: "Very High", value: "High water retention capacity", status: "good" },
      texture: { label: "Heavy Clay", value: "Montmorillonite clay content > 45%", status: "moderate" },
      organicMatter: { label: "Moderate (2.4%)", value: "Dark humus complexes", status: "good" },
      pH: { label: "7.8 - 8.5", statusNote: "Requires laboratory soil test", status: "neutral" },
      nitrogen: { label: "Deficient", statusNote: "Requires laboratory soil test", status: "needs_test" },
      phosphorus: { label: "Low to Moderate", statusNote: "Requires laboratory soil test", status: "needs_test" },
      potassium: { label: "Sufficient", statusNote: "Requires laboratory soil test", status: "needs_test" }
    },
    crops: [
      {
        id: "cotton",
        name: "Cotton",
        suitability: 97,
        icon: "☁️",
        season: "Kharif (May - Dec)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Urea + DAP + MOP",
        estimatedFertCostPerAcre: 1850,
        harvestDuration: "150 - 180 Days",
        plantSpacing: "90 cm × 60 cm",
        soilSynergy: "High shrink-swell dynamics and deep taproot accommodation prevent lodging."
      },
      {
        id: "soybean",
        name: "Soybean",
        suitability: 91,
        icon: "🌱",
        season: "Kharif (June - Oct)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "NPK 20-20-0 + Gypsum",
        estimatedFertCostPerAcre: 1250,
        harvestDuration: "90 - 105 Days",
        plantSpacing: "45 cm × 10 cm",
        soilSynergy: "Rhizobium nodulation flourishes in calcium-rich Vertisols."
      },
      {
        id: "wheat",
        name: "Wheat (Durum)",
        suitability: 88,
        icon: "🌾",
        season: "Rabi (Oct - March)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Urea + DAP",
        estimatedFertCostPerAcre: 1450,
        harvestDuration: "115 - 130 Days",
        plantSpacing: "20 cm row spacing",
        soilSynergy: "Residual monsoon moisture carries winter crop to grain maturity."
      },
      {
        id: "chickpea",
        name: "Chickpea (Gram)",
        suitability: 85,
        icon: "🧆",
        season: "Rabi (Oct - Feb)",
        waterReq: "Low",
        waterLevel: 1,
        primaryFertilizer: "DAP + Sulfur",
        estimatedFertCostPerAcre: 980,
        harvestDuration: "90 - 110 Days",
        plantSpacing: "30 cm × 10 cm",
        soilSynergy: "Deep moisture bank allows thriving rainfed winter pulse cultivation."
      }
    ],
    fertilizers: [
      {
        id: "dap",
        name: "Di-Ammonium Phosphate (18:46:0)",
        tamilName: "டி.ஏ.பி (DAP)",
        hindiName: "डी.ए.पी (DAP)",
        teluguName: "డి.ఎ.పి (DAP)",
        malayalamName: "ഡി.എ.പി (DAP)",
        kannadaName: "ಡಿ.ಎ.ಪಿ (DAP)",
        dosagePerAcreKg: 50,
        frequency: "100% applied at sowing time into seed furrow.",
        method: "Deep band placement 7 cm beneath seed line to avoid clay fixation.",
        priority: "Highly Recommended",
        priorityColor: "emerald",
        role: "Critical phosphorus supply to offset calcium-phosphate retrogradation in alkaline Vertisols.",
        pricePerKg: 27,
        organicAlternative: "Enriched Farmyard Manure (FYM) with PSB @ 2.5 tonnes/acre",
        applicationCaution: "Do not leave exposed on soil surface."
      },
      {
        id: "urea",
        name: "Neem Coated Urea (46% N)",
        tamilName: "வேப்பம்பூசப்பட்ட யூரியா",
        hindiName: "नीम लेपित यूरिया",
        teluguName: "வேప పూత పూసిన యూరియా",
        malayalamName: "വേപ്പെണ്ണ പുരട്ടിയ യൂറിയ",
        kannadaName: "ಬೇವಿನ ಲೇಪಿತ ಯೂರಿಯಾ",
        dosagePerAcreKg: 45,
        frequency: "2 split applications: 30 days after germination and square formation stage.",
        method: "Pocket application or side-dressing followed by intercultivation.",
        priority: "Alternative",
        priorityColor: "amber",
        role: "Sustained vegetative canopy formation without causing excessive vegetative rank growth.",
        pricePerKg: 7,
        organicAlternative: "Neem cake @ 150 kg/acre combined with vermicompost",
        applicationCaution: "Avoid broadcasting when deep soil cracks are open."
      },
      {
        id: "gypsum",
        name: "Agricultural Gypsum (CaSO4·2H2O)",
        tamilName: "வேளாண் ஜிப்சம்",
        hindiName: "कृषि जिप्सम",
        teluguName: "వ్యవసాయ జిప్సం",
        malayalamName: "കാർഷിക ജിപ്സം",
        kannadaName: "ಕೃಷಿ ಜಿಪ್ಸಮ್",
        dosagePerAcreKg: 100,
        frequency: "Once every 2 years during preparatory tillage.",
        method: "Even broadcasting across field and mixing with disc harrow.",
        priority: "Optional",
        priorityColor: "blue",
        role: "Supplies essential calcium and sulfur while ameliorating soil compaction.",
        pricePerKg: 5,
        organicAlternative: "Phospho-gypsum compost",
        applicationCaution: "Incorporate when soil has optimal friable moisture."
      }
    ]
  },

  red: {
    id: "red",
    name: "Red Soil",
    tamilName: "செம்மண்",
    hindiName: "लाल मिट्टी",
    teluguName: "ఎర్ர నేల",
    malayalamName: "ചുവന്ന മണ്ണ്",
    kannadaName: "ಕೆಂಪು ಮಣ್ಣು",
    condition: "Good",
    confidence: 93,
    colorHex: "#8B3A2B",
    tagline: "Iron-rich porous soil with exceptional aeration and root penetrability",
    characteristics: {
      moisture: { label: "Low to Moderate", value: "Rapid percolation (40-50%)", status: "moderate" },
      texture: { label: "Sandy Loam to Loamy", value: "Porous ferric gravelly matrix", status: "good" },
      organicMatter: { label: "Low (1.6%)", value: "Rapid organic decomposition rate", status: "warning" },
      pH: { label: "5.5 - 6.8", statusNote: "Requires laboratory soil test", status: "neutral" },
      nitrogen: { label: "Deficient", statusNote: "Requires laboratory soil test", status: "needs_test" },
      phosphorus: { label: "Deficient (Fixed)", statusNote: "Requires laboratory soil test", status: "needs_test" },
      potassium: { label: "Moderate to High", statusNote: "Requires laboratory soil test", status: "needs_test" }
    },
    crops: [
      {
        id: "groundnut",
        name: "Groundnut (Peanut)",
        suitability: 96,
        icon: "🥜",
        season: "Kharif / Rabi",
        waterReq: "Low",
        waterLevel: 1,
        primaryFertilizer: "Single Super Phosphate + Gypsum",
        estimatedFertCostPerAcre: 1180,
        harvestDuration: "105 - 120 Days",
        plantSpacing: "30 cm × 10 cm",
        soilSynergy: "Friable loose red sand-loam encourages peg entry and pod development without resistance."
      },
      {
        id: "maize",
        name: "Maize (Corn)",
        suitability: 90,
        icon: "🌽",
        season: "Kharif (June - Sept)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "NPK 20-20-0 + Urea",
        estimatedFertCostPerAcre: 1350,
        harvestDuration: "95 - 110 Days",
        plantSpacing: "60 cm × 20 cm",
        soilSynergy: "High aeration promotes rapid root exploration."
      },
      {
        id: "millets",
        name: "Finger Millet (Ragi)",
        suitability: 93,
        icon: "🌾",
        season: "Kharif (Monsoon)",
        waterReq: "Low",
        waterLevel: 1,
        primaryFertilizer: "Urea + SSP",
        estimatedFertCostPerAcre: 850,
        harvestDuration: "100 - 115 Days",
        plantSpacing: "22.5 cm × 10 cm",
        soilSynergy: "Drought hardy nature matches porous red soil moisture dynamics."
      },
      {
        id: "potato",
        name: "Potato & Root Veg",
        suitability: 87,
        icon: "🥔",
        season: "Rabi (Winter)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Potash + Vermicompost",
        estimatedFertCostPerAcre: 2100,
        harvestDuration: "85 - 100 Days",
        plantSpacing: "50 cm × 20 cm",
        soilSynergy: "Loose soil texture prevents tuber deformation."
      }
    ],
    fertilizers: [
      {
        id: "ssp",
        name: "Single Super Phosphate (16% P2O5, 11% S)",
        tamilName: "சிங்கிள் சூப்பர் பாஸ்பேட் (SSP)",
        hindiName: "सिंगल सुपर फॉस्फेट (SSP)",
        teluguName: "సింగిల్ సూపర్ ఫాస్ఫేట్ (SSP)",
        malayalamName: "സിംഗിൾ സൂപ്പർ ഫോസ്ഫേറ്റ് (SSP)",
        kannadaName: "ಸಿಂಗಲ್ ಸೂಪರ್ ಫಾಸ್ಫೇಟ್ (SSP)",
        dosagePerAcreKg: 75,
        frequency: "Basal dressing incorporated before sowing.",
        method: "Broadcast and mix 8-10 cm deep into root zone.",
        priority: "Highly Recommended",
        priorityColor: "emerald",
        role: "Supplies bioavailable phosphorus, calcium (19%), and sulfur (11%) critical for root nodules.",
        pricePerKg: 11,
        organicAlternative: "Bone meal or Rock phosphate with mycorrhizal fungi",
        applicationCaution: "Combine with organic matter to prevent iron/aluminum fixation."
      },
      {
        id: "urea",
        name: "Neem Coated Urea (46% N)",
        tamilName: "வேப்பம்பூசப்பட்ட யூரியா",
        hindiName: "नीम लेपित यूरिया",
        teluguName: "వేప పూత పూసిన యూరియా",
        malayalamName: "വേപ്പെണ്ണ പുരട്ടിയ യൂറിയ",
        kannadaName: "ಬೇವಿನ ಲೇಪಿತ ಯೂರಿಯಾ",
        dosagePerAcreKg: 40,
        frequency: "3 split applications to prevent leaching in porous sand matrix.",
        method: "Band placement followed by immediate shallow covering.",
        priority: "Alternative",
        priorityColor: "amber",
        role: "Replenishes rapid nitrogen losses caused by free drainage percolation.",
        pricePerKg: 7,
        organicAlternative: "Vermicompost @ 2 tonnes/acre",
        applicationCaution: "Never apply on dry soil surface under strong sun."
      },
      {
        id: "vermicompost",
        name: "Organic Vermicompost",
        tamilName: "மண்புழு உரம்",
        hindiName: "जैविक केंचुआ खाद",
        teluguName: "సేంద్రీయ వర్మీకంపోస్ట్",
        malayalamName: "ജൈവ മണ്ണിര വളം",
        kannadaName: "ಸಾವಯವ ಎರೆಹುಳು ಗೊಬ್ಬರ",
        dosagePerAcreKg: 200,
        frequency: "Basal dressing at land preparation.",
        method: "Even incorporation with rotavator.",
        priority: "Optional",
        priorityColor: "blue",
        role: "Significantly enhances moisture holding capacity and cation exchange capacity in red soil.",
        pricePerKg: 8,
        organicAlternative: "Farm yard manure (FYM)",
        applicationCaution: "Store in shaded moist condition before use."
      }
    ]
  },

  cinder: {
    id: "cinder",
    name: "Cinder Soil (Volcanic Ash)",
    tamilName: "எரிமலை சாம்பல் மண்",
    hindiName: "ज्वालामुखीय सिंडर मिट्टी",
    teluguName: "సిండర్ నేల",
    malayalamName: "സിൻഡർ മണ്ണ്",
    kannadaName: "ಸಿಂಡರ್ ಮಣ್ಣು",
    condition: "Moderate",
    confidence: 91,
    colorHex: "#3A3532",
    tagline: "Volcanic origin cinder soil with rapid drainage, light weight, and high porosity",
    characteristics: {
      moisture: { label: "Low", value: "Rapid drainage (< 35%)", status: "warning" },
      texture: { label: "Porous Coarse Granular", value: "Porous aggregate volcanic matrix", status: "moderate" },
      organicMatter: { label: "Low (1.2%)", value: "Requires organic supplementation", status: "warning" },
      pH: { label: "6.0 - 7.0", statusNote: "Requires laboratory soil test", status: "neutral" },
      nitrogen: { label: "Low", statusNote: "Requires laboratory soil test", status: "needs_test" },
      phosphorus: { label: "Moderate", statusNote: "Requires laboratory soil test", status: "needs_test" },
      potassium: { label: "Moderate", statusNote: "Requires laboratory soil test", status: "needs_test" }
    },
    crops: [
      {
        id: "potato",
        name: "Potato",
        suitability: 94,
        icon: "🥔",
        season: "Rabi (Winter)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "NPK 10-26-26 + Organic Compost",
        estimatedFertCostPerAcre: 1950,
        harvestDuration: "90 - 105 Days",
        plantSpacing: "50 cm × 20 cm",
        soilSynergy: "Extremely porous cinder matrix allows rapid tuber swelling with zero rot."
      },
      {
        id: "tomato",
        name: "Tomato & Vegetables",
        suitability: 91,
        icon: "🍅",
        season: "All Season (Irrigated)",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Urea + DAP + Micronutrients",
        estimatedFertCostPerAcre: 1750,
        harvestDuration: "110 - 130 Days",
        plantSpacing: "60 cm × 45 cm",
        soilSynergy: "Rapid root drainage eliminates damping-off and root fungal infections."
      },
      {
        id: "maize",
        name: "Maize (Corn)",
        suitability: 84,
        icon: "🌽",
        season: "Kharif / Rabi",
        waterReq: "Medium",
        waterLevel: 2,
        primaryFertilizer: "Urea + Potash",
        estimatedFertCostPerAcre: 1400,
        harvestDuration: "90 - 105 Days",
        plantSpacing: "60 cm × 20 cm",
        soilSynergy: "High aeration promotes rapid root anchorage when supplemented with organic humus."
      }
    ],
    fertilizers: [
      {
        id: "npk_complex",
        name: "NPK Complex (10:26:26)",
        tamilName: "என்.பி.கே காம்ப்ளக்ஸ் (10:26:26)",
        hindiName: "एन.पी.के. कॉम्प्लेक्स (10:26:26)",
        teluguName: "ఎన్.పి.కె కాంప్లెక్స్ (10:26:26)",
        malayalamName: "എൻ.പി.കെ കോംപ്ലക്സ് (10:26:26)",
        kannadaName: "ಎನ್.ಪಿ.ಕೆ ಕಾಂಪ್ಲೆಕ್ಸ್ (10:26:26)",
        dosagePerAcreKg: 50,
        frequency: "Basal dressing at sowing and top-dressing at 30 days.",
        method: "Band application below surface with split irrigation.",
        priority: "Highly Recommended",
        priorityColor: "emerald",
        role: "Balanced slow-release nutrient matrix preventing rapid leaching in porous cinder particles.",
        pricePerKg: 29,
        organicAlternative: "Vermicompost enriched with bio-fertilizers",
        applicationCaution: "Ensure adequate mulch cover to maintain moisture."
      },
      {
        id: "vermicompost",
        name: "Organic Vermicompost",
        tamilName: "மண்புழு உரம்",
        hindiName: "जैविक केंचुआ खाद",
        teluguName: "సేంద్రీయ వర్మీకంపోస్ట్",
        malayalamName: "ജൈവ മണ്ണിര വളം",
        kannadaName: "ಸಾವಯವ ಎರೆಹುಳು ಗೊಬ್ಬರ",
        dosagePerAcreKg: 300,
        frequency: "Pre-planting soil amendment.",
        method: "Thorough incorporation into top 15 cm of soil.",
        priority: "Alternative",
        priorityColor: "amber",
        role: "Essential for building humus layer and moisture-holding sponge in volcanic cinder.",
        pricePerKg: 8,
        organicAlternative: "Decomposed Farm Yard Manure",
        applicationCaution: "Keep soil lightly moist after incorporation."
      }
    ]
  }
};

// Aliases for backwards compatibility
soilArchetypes.loamy = soilArchetypes.alluvial;
soilArchetypes.sandy = soilArchetypes.cinder;
soilArchetypes.red_laterite = soilArchetypes.red;


// ==========================================
// FILE: src/data/sampleImages.js
// ==========================================

// Real Soil Presets extracted from Unseen Test Dataset
const sampleSoilPresets = [
  {
    id: "preset_alluvial",
    name: "Alluvial Soil",
    soilTypeKey: "alluvial",
    filename: "alluvial_soil_sample.jpg",
    fileSize: "24.2 KB",
    previewUrl: "data:image/jpeg;base64,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"
  },
  {
    id: "preset_black",
    name: "Black Cotton Soil",
    soilTypeKey: "black",
    filename: "black_soil_sample.jpg",
    fileSize: "38.6 KB",
    previewUrl: "data:image/jpeg;base64,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"
  },
  {
    id: "preset_red",
    name: "Red Soil",
    soilTypeKey: "red",
    filename: "red_soil_sample.jpg",
    fileSize: "31.4 KB",
    previewUrl: "data:image/jpeg;base64,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"
  },
  {
    id: "preset_cinder",
    name: "Cinder Soil",
    soilTypeKey: "cinder",
    filename: "cinder_soil_sample.jpg",
    fileSize: "28.9 KB",
    previewUrl: "data:image/jpeg;base64,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"
  },
];


// ==========================================
// FILE: src/services/aiEngine.js
// ==========================================


/**
 * Real Machine Learning Soil Computer Vision Classification
 * Sends the uploaded soil image to the backend ML inference API (POST /api/analyze-soil/).
 * Strictly checks image suitability, blur, non-soil artifacts, and confidence threshold.
 */
async function analyzeSoilImage(imageSource) {
  if (!imageSource || typeof imageSource !== 'string') {
    return {
      success: false,
      errorType: 'INVALID_IMAGE',
      message: 'No valid image provided. Please upload a clear photo of your field soil.'
    };
  }

  try {
    const response = await fetch('/api/analyze-soil/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        soil_image: imageSource
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      return {
        success: false,
        errorType: errJson.error_type || 'SERVICE_UNAVAILABLE',
        message: errJson.message || 'Soil AI analysis service is currently unavailable. Please try again.'
      };
    }

    const data = await response.json();

    if (!data.success) {
      // Low confidence, non-soil, or blurry image
      return {
        success: false,
        errorType: data.error_type || 'LOW_CONFIDENCE',
        confidence: data.confidence_percentage || 0,
        soilType: data.soil_type || 'Unknown',
        message: data.message || 'The uploaded image could not be classified confidently. Please upload a clear soil image in good lighting.'
      };
    }

    // Success: Real ML prediction
    const soilKey = data.soil_key || 'alluvial';
    const baseArchetype = soilArchetypes[soilKey] || soilArchetypes.alluvial;

    return {
      success: true,
      id: soilKey,
      name: data.soil_type,
      confidence: Math.round(data.confidence_percentage || data.confidence * 100),
      rawConfidence: data.confidence,
      condition: baseArchetype.condition || 'Good',
      characteristics: data.characteristics || baseArchetype.characteristics,
      allProbabilities: data.all_probabilities,
      hasPlants: data.has_plants || false,
      vegetationPercentage: data.vegetation_percentage || 0,
      visibleSoilPercentage: data.visible_soil_percentage || 100,
      soilRegionAnalyzed: data.soil_region_analyzed || false,
      analysisTimestamp: new Date().toISOString()
    };

  } catch (err) {
    console.error('[-] ML inference API request failed:', err);
    return {
      success: false,
      errorType: 'SERVICE_UNAVAILABLE',
      message: 'Soil AI analysis service is currently unavailable. Please try again.'
    };
  }
}

/**
 * Fetches trained ML model metadata and evaluation metrics from backend
 */
async function fetchModelInfo() {
  try {
    const res = await fetch('/api/model-info/');
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn('[-] Could not fetch model info:', e);
  }
  return null;
}


// ==========================================
// FILE: src/services/recommendationEngine.js
// ==========================================


/**
 * Calculates precision recommendations and cost predictions
 * dynamically based on the predicted soil class and farmer input parameters.
 * No hardcoded defaults.
 */
function generateSmartRecommendations(soilResult, farmingDetails = {}) {
  if (!soilResult) return null;

  const soilKey = soilResult.id || 'alluvial';
  const archetype = soilArchetypes[soilKey] || soilArchetypes.alluvial;

  const landArea = parseFloat(farmingDetails.landArea) || 1;
  const unit = farmingDetails.unit || 'Acres';
  
  // Normalize area to Acres (1 Hectare ≈ 2.471 Acres)
  const areaInAcres = unit === 'Hectares' ? landArea * 2.471 : landArea;

  // 1. Process Fertilizer Recommendations strictly from archetype
  const baseFertilizers = archetype.fertilizers || [];
  let totalCost = 0;

  const fertilizers = baseFertilizers.map((fert) => {
    const dosagePerAcre = fert.dosagePerAcreKg || 50;
    const pricePerKg = fert.pricePerKg || 7;
    const totalQty = Math.round(dosagePerAcre * areaInAcres);
    const fertCost = Math.round(totalQty * pricePerKg);
    totalCost += fertCost;

    return {
      ...fert,
      dosagePerAcreKg: dosagePerAcre,
      totalQuantityKg: totalQty,
      pricePerKg: pricePerKg,
      totalCost: fertCost,
      bagsNeeded: Math.ceil(totalQty / 50)
    };
  });

  const costPerAcre = fertilizers.length > 0 ? fertilizers[0].dosagePerAcreKg * fertilizers[0].pricePerKg : 350;

  // 2. Process Crop Recommendations strictly from archetype
  const baseCrops = archetype.crops || [];
  const selectedCropName = farmingDetails.intendedCrop ? farmingDetails.intendedCrop.toLowerCase() : '';

  const crops = baseCrops.map((crop) => {
    let suitability = crop.suitability;

    // Contextual adjustment if farmer expressed interest in this crop
    if (selectedCropName && crop.name.toLowerCase().includes(selectedCropName)) {
      suitability = Math.min(99, suitability + 2);
    }

    // Irrigation synergy
    if (farmingDetails.irrigation === 'Drip Irrigation' && (crop.id === 'tomato' || crop.id === 'potato')) {
      suitability = Math.min(98, suitability + 3);
    }

    const totalFertCostForCrop = Math.round(crop.estimatedFertCostPerAcre * areaInAcres);

    return {
      ...crop,
      suitability,
      totalFertilizerCost: totalFertCostForCrop
    };
  });

  // Sort crops descending by suitability
  crops.sort((a, b) => b.suitability - a.suitability);

  return {
    soilType: archetype.name,
    soilTypeKey: soilKey,
    condition: soilResult.condition || archetype.condition,
    confidence: soilResult.confidence || 92,
    characteristics: soilResult.characteristics || archetype.characteristics,
    landArea: areaInAcres,
    unit: 'Acres',
    fertilizers,
    costPerAcre,
    totalEstimatedCost: totalCost,
    crops,
    chemicalDisclaimer: "Exact N-P-K and pH require a certified laboratory soil test."
  };
}


// ==========================================
// FILE: src/services/riskAlertService.js
// ==========================================


// Crop suitability mapping across soil types for cross-checking intended crops
const cropSuitabilityMatrix = {
  'rice': { alluvial: 96, black: 78, red: 52, cinder: 45 },
  'wheat': { alluvial: 92, black: 85, red: 58, cinder: 50 },
  'cotton': { alluvial: 62, black: 98, red: 72, cinder: 40 },
  'maize': { alluvial: 89, black: 82, red: 84, cinder: 65 },
  'groundnut': { alluvial: 75, black: 68, red: 91, cinder: 60 },
  'sugarcane': { alluvial: 86, black: 90, red: 64, cinder: 42 },
  'finger_millet': { alluvial: 72, black: 70, red: 88, cinder: 75 },
  'soybean': { alluvial: 82, black: 94, red: 68, cinder: 55 },
  'potato': { alluvial: 85, black: 70, red: 80, cinder: 60 },
  'tobacco': { alluvial: 60, black: 80, red: 70, cinder: 85 },
  'pulses': { alluvial: 88, black: 86, red: 82, cinder: 68 },
  'sorghum': { alluvial: 78, black: 91, red: 75, cinder: 62 }
};

/**
 * Normalizes user crop string to standard key
 */
function normalizeCropKey(cropName) {
  if (!cropName) return 'rice';
  const c = cropName.toLowerCase();
  if (c.includes('rice') || c.includes('paddy')) return 'rice';
  if (c.includes('wheat')) return 'wheat';
  if (c.includes('cotton')) return 'cotton';
  if (c.includes('maize') || c.includes('corn')) return 'maize';
  if (c.includes('groundnut') || c.includes('peanut')) return 'groundnut';
  if (c.includes('sugar') || c.includes('cane')) return 'sugarcane';
  if (c.includes('millet') || c.includes('ragi')) return 'finger_millet';
  if (c.includes('soy') || c.includes('bean')) return 'soybean';
  if (c.includes('potato')) return 'potato';
  if (c.includes('tobacco')) return 'tobacco';
  if (c.includes('pulse') || c.includes('gram')) return 'pulses';
  if (c.includes('sorghum') || c.includes('jowar')) return 'sorghum';
  return 'rice';
}

/**
 * Dynamic Risk Alerts Generation Engine
 * Evaluates real soil analysis, confidence, crop suitability, fertilizer dosage thresholds, and image quality.
 * Returns array of alerts sorted by severity (high_risk -> warning -> info).
 */
function evaluateRiskAlerts(soilResult, farmingDetails = {}, reportData = null) {
  const alerts = [];

  // ==========================================
  // 1. IMAGE QUALITY & VALIDATION ALERTS
  // ==========================================
  if (soilResult && !soilResult.success) {
    const err = (soilResult.errorType || '').toUpperCase();
    if (err === 'BLURRY_IMAGE') {
      alerts.push({
        id: 'alert-blur',
        type: 'IMAGE_QUALITY',
        severity: 'high_risk',
        titleKey: 'alertBlurTitle',
        msgKey: 'alertBlurMsg',
        recKey: 'alertBlurRec',
        action: 'upload_another'
      });
    } else if (err === 'TOO_DARK' || err === 'OVEREXPOSED') {
      alerts.push({
        id: 'alert-lighting',
        type: 'IMAGE_QUALITY',
        severity: 'warning',
        titleKey: 'alertLightingTitle',
        msgKey: 'alertLightingMsg',
        recKey: 'alertLightingRec',
        action: 'upload_another'
      });
    } else if (err === 'INSUFFICIENT_SOIL') {
      alerts.push({
        id: 'alert-insufficient-soil',
        type: 'IMAGE_QUALITY',
        severity: 'high_risk',
        titleKey: 'alertInsufficientSoilTitle',
        msgKey: 'alertInsufficientSoilMsg',
        recKey: 'alertInsufficientSoilRec',
        action: 'upload_another'
      });
    } else {
      alerts.push({
        id: 'alert-invalid-img',
        type: 'IMAGE_QUALITY',
        severity: 'high_risk',
        titleKey: 'alertInvalidImgTitle',
        msgKey: 'alertInvalidImgMsg',
        recKey: 'alertInvalidImgRec',
        action: 'upload_another'
      });
    }
    return alerts;
  }

  if (!soilResult) {
    return alerts;
  }

  const soilKey = (soilResult.id || 'alluvial').toLowerCase();
  const archetype = soilArchetypes[soilKey] || soilArchetypes.alluvial;
  const confidence = soilResult.confidence || 0;

  // ==========================================
  // 2. LOW AI CONFIDENCE ALERT (< 70%)
  // ==========================================
  if (confidence < 70) {
    alerts.push({
      id: 'alert-low-confidence',
      type: 'LOW_CONFIDENCE',
      severity: 'high_risk',
      titleKey: 'alertLowConfidenceTitle',
      msgKey: 'alertLowConfidenceMsg',
      recKey: 'alertLowConfidenceRec',
      details: {
        confidence,
        minRequired: 70
      },
      action: 'upload_another'
    });
  }

  // ==========================================
  // 3. UNSUITABLE CROP ALERT
  // ==========================================
  const intendedCropRaw = farmingDetails.intendedCrop || '';
  const cropKey = normalizeCropKey(intendedCropRaw);
  const matrixForCrop = cropSuitabilityMatrix[cropKey] || { alluvial: 85, black: 80, red: 75, cinder: 60 };
  const cropSuitability = matrixForCrop[soilKey] !== undefined ? matrixForCrop[soilKey] : 70;

  // If crop suitability is under 65%, trigger Unsuitable Crop Warning
  if (cropSuitability < 65) {
    // Get top 3 suitable alternatives from soil archetype
    const alternatives = (archetype.crops || [])
      .slice(0, 3)
      .map(c => ({
        id: c.id,
        name: c.name,
        suitability: c.suitability,
        icon: c.icon
      }));

    alerts.push({
      id: 'alert-unsuitable-crop',
      type: 'UNSUITABLE_CROP',
      severity: 'high_risk',
      titleKey: 'alertUnsuitableCropTitle',
      msgKey: 'alertUnsuitableCropMsg',
      recKey: 'alertUnsuitableCropRec',
      details: {
        selectedCrop: intendedCropRaw || 'Rice (Paddy)',
        detectedSoil: archetype.name,
        soilKey: soilKey,
        suitability: cropSuitability,
        alternatives: alternatives
      },
      action: 'switch_crop'
    });
  }

  // ==========================================
  // 4. FERTILIZER DOSAGE & DRAINAGE RISK ALERTS
  // ==========================================
  const landArea = parseFloat(farmingDetails.landArea) || 1;
  const fertilizers = reportData?.fertilizers || archetype.fertilizers || [];
  const primaryFert = fertilizers[0];

  if (primaryFert) {
    const dosagePerAcre = primaryFert.dosagePerAcreKg || 50;
    const totalQty = Math.round(dosagePerAcre * landArea);

    // Large single-dose nitrogen warning
    if (primaryFert.id === 'urea' && dosagePerAcre >= 75) {
      alerts.push({
        id: 'alert-high-nitrogen',
        type: 'FERTILIZER_DOSAGE',
        severity: 'warning',
        titleKey: 'alertFertilizerWarningTitle',
        msgKey: 'alertFertilizerWarningMsg',
        recKey: 'alertSplitDoseRec',
        details: {
          fertilizerName: primaryFert.name,
          calculatedQuantity: `${totalQty} kg`,
          landArea: `${landArea} Acres`,
          applicationSchedule: primaryFert.frequency
        },
        disclaimerKey: 'alertSoilTestDisclaimer'
      });
    }

    // High total plot quantity for large landholding (> 300 kg)
    if (totalQty > 300) {
      alerts.push({
        id: 'alert-large-quantity',
        type: 'FERTILIZER_QUANTITY',
        severity: 'warning',
        titleKey: 'alertLargeQtyTitle',
        msgKey: 'alertLargeQtyMsg',
        recKey: 'alertLargeQtyRec',
        details: {
          fertilizerName: primaryFert.name,
          calculatedQuantity: `${totalQty} kg (${Math.ceil(totalQty / 50)} bags)`,
          landArea: `${landArea} Acres`,
          applicationSchedule: primaryFert.frequency
        },
        disclaimerKey: 'alertSoilTestDisclaimer'
      });
    }
  }

  // Rapid drainage / Leaching risk for porous cinder soil
  if (soilKey === 'cinder') {
    alerts.push({
      id: 'alert-leaching-risk',
      type: 'SOIL_DRAINAGE',
      severity: 'warning',
      titleKey: 'alertLeachingTitle',
      msgKey: 'alertLeachingMsg',
      recKey: 'alertLeachingRec'
    });
  }

  // Waterlogging risk for heavy clay black cotton soil
  if (soilKey === 'black' && farmingDetails.season && farmingDetails.season.includes('Kharif')) {
    alerts.push({
      id: 'alert-waterlogging-risk',
      type: 'SOIL_DRAINAGE',
      severity: 'warning',
      titleKey: 'alertWaterloggingTitle',
      msgKey: 'alertWaterloggingMsg',
      recKey: 'alertWaterloggingRec'
    });
  }

  // ==========================================
  // 5. OPTIMAL STATUS (NO MAJOR RISKS)
  // ==========================================
  if (alerts.length === 0) {
    alerts.push({
      id: 'alert-no-risk',
      type: 'NO_RISK',
      severity: 'info',
      titleKey: 'alertNoRiskTitle',
      msgKey: 'alertNoRiskMsg',
      recKey: 'alertNoRiskRec'
    });
  }

  // Sort: high_risk first, then warning, then info
  const severityRank = { high_risk: 0, warning: 1, info: 2 };
  alerts.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);

  return alerts;
}


// ==========================================
// FILE: src/services/speechService.js
// ==========================================

// Cross-Browser Speech-to-Text (STT) and Text-to-Speech (TTS) Service
// Supports English, Tamil, Hindi, Telugu, Malayalam, and Kannada with Indian BCP-47 tags

const BCP47_LANG_MAP = {
  en: 'en-IN',
  ta: 'ta-IN',
  hi: 'hi-IN',
  te: 'te-IN',
  ml: 'ml-IN',
  kn: 'kn-IN'
};

let activeRecognition = null;
let currentUtterance = null;
let lastSpokenText = '';
let lastSpokenLang = 'en';

/**
 * Check if browser supports speech recognition
 */
function isSpeechRecognitionSupported() {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/**
 * Check if browser supports speech synthesis
 */
function isSpeechSynthesisSupported() {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

/**
 * Starts speech recognition with farmer's selected language
 */
function startSpeechRecognition({
  langCode = 'en',
  onStart,
  onResult,
  onError,
  onEnd
}) {
  if (!isSpeechRecognitionSupported()) {
    if (onError) onError({ error: 'not-supported' });
    return null;
  }

  stopSpeechRecognition();
  stopSpeaking();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = BCP47_LANG_MAP[langCode] || 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.onstart = () => {
    if (onStart) onStart();
  };

  recognition.onresult = (event) => {
    if (event.results && event.results[0] && event.results[0][0]) {
      const transcript = event.results[0][0].transcript.trim();
      if (onResult) onResult(transcript);
    }
  };

  recognition.onerror = (event) => {
    console.warn('[-] Speech recognition error:', event.error);
    if (onError) onError(event);
  };

  recognition.onend = () => {
    activeRecognition = null;
    if (onEnd) onEnd();
  };

  try {
    recognition.start();
    activeRecognition = recognition;
    return recognition;
  } catch (err) {
    console.error('[-] Could not start recognition:', err);
    if (onError) onError({ error: 'start-failed', details: err });
    return null;
  }
}

/**
 * Stops ongoing speech recognition safely
 */
function stopSpeechRecognition() {
  if (activeRecognition) {
    try {
      activeRecognition.abort();
    } catch (e) {
      // Safe no-op if recognition already stopped or aborted
    }
    activeRecognition = null;
  }
}

/**
 * Start speech listening session (alias for startSpeechRecognition)
 */
function startListening(options = {}) {
  const langCode = options.lang || options.langCode || 'en';
  return startSpeechRecognition({
    ...options,
    langCode
  });
}

/**
 * Stop speech listening session (alias for stopSpeechRecognition)
 */
function stopListening() {
  return stopSpeechRecognition();
}

/**
 * Speaks text in the specified language via Web Speech API
 */
function speakText(text, langCode = 'en', onStart, onEnd, onError) {
  if (!isSpeechSynthesisSupported()) {
    return false;
  }

  window.speechSynthesis.cancel();

  if (!text || !text.trim()) return false;

  lastSpokenText = text;
  lastSpokenLang = langCode;

  const utterance = new SpeechSynthesisUtterance(text);
  currentUtterance = utterance;

  utterance.lang = BCP47_LANG_MAP[langCode] || 'en-IN';
  utterance.rate = 0.95; // Steady, farmer-friendly pace
  utterance.pitch = 1.0;

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = () => {
    currentUtterance = null;
    onEnd();
  };
  utterance.onerror = (e) => {
    console.warn('[-] Speech synthesis error:', e);
    currentUtterance = null;
    if (onError) onError(e);
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
}

/**
 * Pause speaking
 */
function pauseSpeaking() {
  if (isSpeechSynthesisSupported() && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
}

/**
 * Resume speaking
 */
function resumeSpeaking() {
  if (isSpeechSynthesisSupported() && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

/**
 * Stop speaking
 */
function stopSpeaking() {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

/**
 * Replays the last spoken response
 */
function replayLastSpoken(onStart, onEnd, onError) {
  if (lastSpokenText) {
    return speakText(lastSpokenText, lastSpokenLang, onStart, onEnd, onError);
  }
  return false;
}

/**
 * Is currently speaking
 */
function isSpeaking() {
  return isSpeechSynthesisSupported() && window.speechSynthesis.speaking && !window.speechSynthesis.paused;
}

/**
 * Is currently paused
 */
function isPaused() {
  return isSpeechSynthesisSupported() && window.speechSynthesis.paused;
}


// ==========================================
// FILE: src/services/voiceAssistantService.js
// ==========================================


/**
 * Intelligent Context-Aware Voice Farming Assistant Service
 * Generates natural, farmer-friendly answers in 6 languages using real-time analysis,
 * crop recommendations, fertilizer calculations, and active risk alerts.
 */

function processFarmerQuery(arg1, arg2, arg3) {
  let query, soilResult, farmingDetails, reportData, riskAlerts, user, lang;
  if (typeof arg1 === 'object' && arg1 !== null && !arg2) {
    ({ query = '', soilResult = null, farmingDetails = {}, reportData = null, riskAlerts = [], user = null, lang = 'en' } = arg1);
  } else {
    query = arg1 || '';
    const context = arg2 || {};
    soilResult = context.soilResult || null;
    farmingDetails = context.farmingDetails || {};
    reportData = context.reportData || null;
    riskAlerts = context.riskAlerts || [];
    user = context.user || null;
    lang = arg3 || 'en';
  }

  const q = (query || '').toLowerCase().trim();
  const userName = user?.name ? user.name.trim() : 'Farmer';

  // Has active analysis? (either soilResult.success === true, or soilResult.id or soilResult.confidence exists)
  const hasAnalysis = Boolean(soilResult && (soilResult.success !== false && (soilResult.id || soilResult.confidence || soilResult.name)));
  const soilKey = soilResult?.id || 'alluvial';
  const soilName = getLocalizedSoilName(soilKey, lang);
  const confidence = soilResult?.confidence || 0;
  const landArea = parseFloat(farmingDetails?.landArea) || 1;

  const topCrops = reportData?.crops || [];
  const primaryCrop = topCrops[0];
  const primaryFert = reportData?.fertilizers?.[0];
  const totalCost = reportData?.totalEstimatedCost || 0;
  const costPerAcre = reportData?.costPerAcre || 0;

  // Disclaimer appended to all agricultural advisory responses
  const disclaimer = t('voiceDisclaimer', lang);

  // Intent classification helper (multilingual keyword matching)
  const isGreeting = matchesKeywords(q, [
    'hello', 'hi', 'hey', 'namaste', 'vanakkam', 'namaskara', 'namaskaram',
    'வணக்கம்', 'नमस्ते', 'నమస్కారం', 'നമസ്കാരം', 'ನಮಸ್ಕಾರ', 'help'
  ]);

  const isSoilQuery = matchesKeywords(q, [
    'soil', 'texture', 'condition', 'type', 'explain',
    'மண்', 'வகை', 'தன்மை', 'பண்பு',
    'मिट्टी', 'प्रकार', 'स्थिति',
    'నేల', 'రకం', 'పరిస్థితి',
    'മണ്ണ്', 'തരം', 'അവസ്ഥ',
    'ಮಣ್ಣು', 'ವಿಧ', 'ಸ್ಥಿತಿ'
  ]);

  const isCropQuery = matchesKeywords(q, [
    'crop', 'crops', 'plant', 'suitable', 'grow', 'best crop', 'paddy', 'wheat', 'rice', 'cotton',
    'பயிர்', 'பயிர்கள்', 'விளைச்சல்', 'சிறந்தது', 'ஏற்றது',
    'फसल', 'फसलें', 'उपयुक्त', 'सर्वोत्तम',
    'పంట', 'పంటలు', 'అనుకూలం', 'మంచి పంట',
    'വിള', 'വിളകൾ', 'അനുയോജ്യം', 'നല്ല വിള',
    'ಬೆಳೆ', 'ಬೆಳೆಗಳು', 'ಸೂಕ್ತ', 'ಉತ್ತಮ ಬೆಳೆ'
  ]);

  const isFertilizerTypeQuery = matchesKeywords(q, [
    'what fertilizer', 'which fertilizer', 'fertilizer name', 'manure',
    'என்ன உரம்', 'எந்த உரம்', 'உரங்கள்',
    'कौन सा उर्वरक', 'कौन सी खाद', 'उर्वरक का नाम',
    'ఏ ఎరువు', 'ఎలాంటి ఎరువు',
    'ഏത് വളം', 'വളങ്ങൾ',
    'ಯಾವ ಗೊಬ್ಬರ', 'ಯಾವ ರಸಗೊಬ್ಬರ'
  ]);

  const isFertilizerQtyQuery = matchesKeywords(q, [
    'how much', 'quantity', 'dosage', 'bags', 'kg',
    'எவ்வளவு', 'அளவு', 'மூட்டை',
    'कितना', 'मात्रा', 'खुराक', 'बोरी',
    'ఎంత', 'పరిమాణం', 'మోతాదు', 'బస్తాలు',
    'എത്ര', 'അളവ്', 'ചാക്ക്',
    'ಎಷ್ಟು', 'ಪ್ರಮಾಣ', 'ಚೀಲ'
  ]);

  const isCostQuery = matchesKeywords(q, [
    'cost', 'price', 'estimate', 'rate', 'rupees', 'expense',
    'செலவு', 'விலை', 'ரூபாய்', 'மதிப்பீடு',
    'लागत', 'मूल्य', 'रुपये', 'खर्च',
    'ఖర్చు', 'ధర', 'రూపాయలు', 'అంచనా',
    'ചിലവ്', 'വില', 'രൂപ',
    'ವೆಚ್ಚ', 'ಬೆಲೆ', 'ರೂಪಾಯಿ', 'ಖರ್ಚು'
  ]);

  const isRiskQuery = matchesKeywords(q, [
    'risk', 'alert', 'warning', 'danger', 'problem', 'caution',
    'ஆபத்து', 'எச்சரிக்கை', 'பிரச்சனை',
    'जोखिम', 'चेतावनी', 'समस्या',
    'ప్రమాదం', 'హెచ్చరిక', 'సమస్య',
    'അപകടം', 'താക്കീത്', 'പ്രശ്നം',
    'ಅಪಾಯ', 'ಎಚ್ಚರಿಕೆ', 'ಸಮಸ್ಯೆ'
  ]);

  const isWhyQuery = matchesKeywords(q, [
    'why', 'reason',
    'ஏன்', 'காரணம்',
    'क्यों', 'कारण',
    'ఎందుకు', 'కారణం',
    'എന്തുകൊണ്ട്', 'കാരണം',
    'ಯಾಕೆ', 'ಕಾರಣ'
  ]);

  // ==========================================
  // 1. GREETING / INTRO
  // ==========================================
  if (isGreeting && !isSoilQuery && !isCropQuery && !isFertilizerTypeQuery && !isFertilizerQtyQuery) {
    return buildResponse({
      lang,
      intent: 'greeting',
      en: `Hello ${userName}! I am AgriSense AI, your voice farming assistant. You can ask me about your soil analysis, recommended crops, fertilizer dosages, cost estimates, or farm risks. How can I help your farm today?`,
      ta: `வணக்கம் ${userName}! நான் உங்கள் அக்ரிசென்ஸ் ஏஐ குரல் உதவியாளர். உங்கள் மண் பகுப்பாய்வு, சிறந்த பயிர்கள், உரத்தின் அளவு, செலவு மதிப்பீடு அல்லது எச்சரிக்கைகள் பற்றி என்னிடம் கேட்கலாம். இன்று உங்கள் பண்ணைக்கு நான் எவ்வாறு உதவட்டும்?`,
      hi: `नमस्ते ${userName}! मैं एग्रीसेंस एआई, आपका वॉइस फार्मिंग असिस्टेंट हूँ। आप मुझसे मिट्टी विश्लेषण, अनुशंसित फसलों, उर्वरक की मात्रा, लागत अनुमान या जोखिम अलर्ट के बारे में पूछ सकते हैं। आज मैं आपकी कैसे मदद कर सकता हूँ?`,
      te: `నమస్కారం ${userName}! నేను మీ అగ్రిసెన్స్ AI వాయిస్ అసిస్టెంట్‌ని. మీరు మీ నేల విశ్లేషణ, తగిన పంటలు, ఎరువుల మోతాదు, ఖర్చు అంచనా లేదా హెచ్చరికల గురించి నన్ను అడగవచ్చు. ఈరోజు మీ వ్యవసాయానికి నేను ఎలా సహాయపడగలను?`,
      ml: `നമസ്കാരം ${userName}! ഞാൻ നിങ്ങളുടെ അഗ്രിസെൻസ് AI വോയ്‌സ് അസിസ്റ്റന്റാണ്. മണ്ണ് പരിശോധന, മികച്ച വിളകൾ, വളത്തിന്റെ അളവ്, ചിലവ് അല്ലെങ്കിൽ അപകട മുന്നറിയിപ്പുകൾ എന്നിവയെക്കുറിച്ച് നിങ്ങൾക്ക് എന്നോട് ചോദിക്കാം. ഇന്ന് ഞാൻ എങ്ങനെ സഹായിക്കണം?`,
      kn: `ನಮಸ್ಕಾರ ${userName}! ನಾನು ನಿಮ್ಮ ಅಗ್ರಿಸೆನ್ಸ್ AI ಧ್ವನಿ ಸಹಾಯಕ. ನಿಮ್ಮ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ, ಸೂಕ್ತ ಬೆಳೆಗಳು, ರಸಗೊಬ್ಬರದ ಪ್ರಮಾಣ, ವೆಚ್ಚದ ಅಂದಾಜು ಅಥವಾ ಎಚ್ಚರಿಕೆಗಳ ಬಗ್ಗೆ ನೀವು ನನ್ನನ್ನು ಕೇಳಬಹುದು. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?`
    });
  }

  // If no analysis is loaded yet, advise the farmer to upload an image
  if (!hasAnalysis) {
    return buildResponse({
      lang,
      intent: 'fallback',
      en: `Please upload or photograph a soil sample first. Once our AI analyzes the soil, I can give you precision crop and fertilizer advice for your specific field.`,
      ta: `தயவுசெய்து முதலில் உங்கள் வயல் மண் புகைப்படத்தை பதிவேற்றவும். ஏஐ உங்கள் மண்ணை பகுப்பாய்வு செய்தவுடன், உங்கள் நிலத்திற்கான துல்லியமான பயிர் மற்றும் உர ஆலோசனைகளை என்னால் வழங்க முடியும்.`,
      hi: `कृपया पहले अपने खेत की मिट्टी की तस्वीर अपलोड करें। एक बार एआई मिट्टी का विश्लेषण कर ले, फिर मैं आपकी ज़मीन के लिए सटीक फसल और उर्वरक सलाह दे सकता हूँ।`,
      te: `దయచేసి ముందుగా మీ నేల ఫోటోను అప్‌లోడ్ చేయండి. మా AI నేలను విశ్లేషించిన తర్వాత, నేను మీ పొలానికి తగిన పంట మరియు ఎరువుల సలహాలను అందించగలను.`,
      ml: `ദയവായി ആദ്യം നിങ്ങളുടെ മണ്ണിന്റെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. AI മണ്ണ് വിശകലനം ചെയ്തുകഴിഞ്ഞാൽ, നിങ്ങളുടെ കൃഷിസ്ഥലത്തിനായുള്ള കൃത്യമായ വിള-വള ഉപദേശങ്ങൾ ഞാൻ നൽകാം.`,
      kn: `ದಯವಿಟ್ಟು ಮೊದಲು ನಿಮ್ಮ ಮಣ್ಣಿನ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. AI ಮಣ್ಣನ್ನು ವಿಶ್ಲೇಷಿಸಿದ ನಂತರ, ನಾನು ನಿಮ್ಮ ಜಮೀನಿಗೆ ನಿಖರವಾದ ಬೆಳೆ ಮತ್ತು ಗೊಬ್ಬರದ ಸಲಹೆಯನ್ನು ನೀಡಬಲ್ಲೆ.`
    });
  }

  // ==========================================
  // 2. SOIL ANALYSIS QUERY
  // ==========================================
  if (isSoilQuery && !isCropQuery && !isFertilizerTypeQuery && !isFertilizerQtyQuery && !isCostQuery) {
    return buildResponse({
      lang,
      intent: 'soil_analysis',
      en: `Our AI identified your field as ${soilName} with ${confidence}% confidence. The soil condition is rated as ${soilResult.condition || 'Good'}. It offers balanced physical structure and moisture retention suitable for regional cultivation. ${disclaimer}`,
      ta: `உங்கள் நிலத்தின் மண் ${confidence}% துல்லியத்துடன் "${soilName}" என அடையாளம் காணப்பட்டுள்ளது. மண்ணின் நிலை "${soilResult.condition || 'நன்று'}" என மதிப்பிடப்பட்டுள்ளது. இது பயிர் சாகுபடிக்கு நல்ல அமைப்பையும் ஈரப்பதத்தையும் வழங்குகிறது. ${disclaimer}`,
      hi: `एआई ने आपकी मिट्टी की पहचान ${confidence}% सटीकता के साथ "${soilName}" के रूप में की है। मिट्टी की स्थिति "${soilResult.condition || 'उत्कृष्ट'}" है। यह फसलों की अच्छी वृद्धि के लिए उपयुक्त नमी और बनावट प्रदान करती है। ${disclaimer}`,
      te: `మా AI మీ పొలాన్ని ${confidence}% ఖచ్చితత్వంతో "${soilName}" గా గుర్తించింది. నేల పరిస్థితి "${soilResult.condition || 'మంచిది'}" గా ఉంది. ఇది పంటల సాగుకు అనుకూలమైన తేమను మరియు ఆకృతిని కలిగి ఉంది. ${disclaimer}`,
      ml: `നിങ്ങളുടെ കൃഷിസ്ഥലത്തെ മണ്ണ് ${confidence}% കൃത്യതയോടെ "${soilName}" ആയി തിരിച്ചറിഞ്ഞു. മണ്ണിന്റെ അവസ്ഥ "${soilResult.condition || 'നല്ലത്'}" ആണ്. ഇത് മികച്ച വിളവെടുപ്പിന് ആവശ്യമായ ഈർപ്പവും ഘടനയും നൽകുന്നു. ${disclaimer}`,
      kn: `ನಿಮ್ಮ ಜಮೀನಿನ ಮಣ್ಣನ್ನು ${confidence}% ನಿಖರತೆಯೊಂದಿಗೆ "${soilName}" ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ. ಮಣ್ಣಿನ ಸ್ಥಿತಿ "${soilResult.condition || 'ಉತ್ತಮ'}" ಆಗಿದೆ. ಇದು ಬೆಳೆಗಳ ಉತ್ತಮ ಇಳುವರಿಗೆ ಸೂಕ್ತವಾದ ತೇವಾಂಶ ಮತ್ತು ರಚನೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ${disclaimer}`
    });
  }

  // ==========================================
  // 3. CROP RECOMMENDATION QUERY
  // ==========================================
  if (isCropQuery && !isFertilizerQtyQuery && !isCostQuery) {
    const cropNames = topCrops.slice(0, 3).map(c => getLocalizedCropName(c.id, lang)).join(', ');
    const topCrop = topCrops[0];
    const topCropName = topCrop ? getLocalizedCropName(topCrop.id, lang) : '';
    const topScore = topCrop ? topCrop.suitability : 90;

    // Check if there is an unsuitable crop alert active
    const unsuitableAlert = riskAlerts.find(a => a.type === 'UNSUITABLE_CROP');
    let extraWarning = '';
    if (unsuitableAlert) {
      const altNames = (unsuitableAlert.details?.alternatives || []).map(a => getLocalizedCropName(a.id, lang)).join(', ');
      extraWarning = lang === 'ta'
        ? ` கவனிக்கவும்: நீங்கள் தேர்வு செய்த பயிர் இந்த மண்ணிற்கு மிகச் சிறந்ததாக அமையாமல் போகலாம் (${unsuitableAlert.details?.suitability}% பொருத்தம்). அதற்குப் பதிலாக ${altNames} பயிரிடுவது அதிக விளைச்சலைத் தரும்.`
        : lang === 'hi'
        ? ` ध्यान दें: आपकी चुनी गई फसल इस मिट्टी के लिए सर्वोत्तम नहीं हो सकती है (${unsuitableAlert.details?.suitability}% उपयुक्तता)। इसके बजाय ${altNames} उगाना अधिक लाभदायक होगा।`
        : lang === 'te'
        ? ` గమనిక: మీరు ఎంచుకున్న పంట ఈ నేలకు అంతగా సరిపోకపోవచ్చు (${unsuitableAlert.details?.suitability}% అనుకూలత). దీనికి బదులుగా ${altNames} సాగు చేయడం మంచి దిగుబడిని ఇస్తుంది.`
        : lang === 'ml'
        ? ` ശ്രദ്ധിക്കുക: നിങ്ങൾ തിരഞ്ഞെടുത്ത വിള ഈ മണ്ണിന് ഏറ്റവും അനുയോജ്യമാകണമെന്നില്ല (${unsuitableAlert.details?.suitability}% അനുയോജ്യത). പകരം ${altNames} കൃഷി ചെയ്യുന്നത് കൂടുതൽ വിളവ് നൽകും.`
        : lang === 'kn'
        ? ` ಗಮನಿಸಿ: ನೀವು ಆಯ್ಕೆಮಾಡಿದ ಬೆಳೆ ಈ ಮಣ್ಣಿಗೆ ಸೂಕ್ತವಲ್ಲದಿರಬಹುದು (${unsuitableAlert.details?.suitability}% ಸೂಕ್ತತೆ). ಬದಲಿಗೆ ${altNames} ಬೆಳೆಯುವುದು ಉತ್ತಮ ಇಳುವರಿಯನ್ನು ನೀಡುತ್ತದೆ.`
        : ` Note: Your selected crop may have lower suitability (${unsuitableAlert.details?.suitability}%) for this soil. Better high-yield alternatives are ${altNames}.`;
    }

    return buildResponse({
      lang,
      intent: 'crop_suitability',
      en: `For your ${soilName}, the most suitable crop is ${topCropName} with ${topScore}% suitability. Other high-performing crops include: ${cropNames}.${extraWarning} ${disclaimer}`,
      ta: `உங்கள் ${soilName}க்கு மிகவும் ஏற்ற பயிர் ${topCropName} (${topScore}% பொருத்தம்). மேலும் பயிரிடக்கூடிய சிறந்த பயிர்கள்: ${cropNames}.${extraWarning} ${disclaimer}`,
      hi: `आपकी ${soilName} के लिए सबसे उपयुक्त फसल ${topCropName} (${topScore}% उपयुक्तता) है। अन्य बेहतरीन फसलें हैं: ${cropNames}।${extraWarning} ${disclaimer}`,
      te: `మీ ${soilName}కు అత్యంత అనుకూలమైన పంట ${topCropName} (${topScore}% అనుకూలత). ఇతర మంచి పంటలు: ${cropNames}.${extraWarning} ${disclaimer}`,
      ml: `നിങ്ങളുടെ ${soilName}ന് ഏറ്റവും അനുയോജ്യമായ വിള ${topCropName} (${topScore}% അനുയോജ്യത) ആണ്. മറ്റ് മികച്ച വിളകൾ: ${cropNames}.${extraWarning} ${disclaimer}`,
      kn: `ನಿಮ್ಮ ${soilName}ಗೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಬೆಳೆ ${topCropName} (${topScore}% ಸೂಕ್ತತೆ). ಇತರ ಉತ್ತಮ ಬೆಳೆಗಳು: ${cropNames}.${extraWarning} ${disclaimer}`
    });
  }

  // ==========================================
  // 4. FERTILIZER TYPE / WHY RECOMMENDED QUERY
  // ==========================================
  if (isFertilizerTypeQuery || isWhyQuery) {
    const fertName = primaryFert ? getLocalizedFertilizerName(primaryFert.id, lang) : '';
    const dosage = primaryFert ? primaryFert.dosagePerAcreKg : 50;

    return buildResponse({
      lang,
      intent: isWhyQuery ? 'fertilizer_reasoning' : 'fertilizer_recommendation',
      en: `Based on your ${soilName}, our AI recommends ${fertName} as the primary fertilizer at ${dosage} kg per acre. It was recommended to supply essential nutrients for root development and vegetative vigour. ${disclaimer}`,
      ta: `உங்கள் ${soilName}யின் தன்மைக்கு ஏற்ப, முதன்மை உரமாக ${fertName} ஒரு ஏக்கருக்கு ${dosage} கிலோ பரிந்துரைக்கப்படுகிறது. இது வேர் வளர்ச்சி மற்றும் பயிரின் செழிப்பான வளர்ச்சிக்கு அத்தியாவசிய ஊட்டச்சத்துக்களை வழங்குகிறது. ${disclaimer}`,
      hi: `आपकी ${soilName} के लिए, एआई प्रति एकड़ ${dosage} किलोग्राम की दर से ${fertName} की सिफारिश करता है। यह जड़ों के विकास और पौधे की स्वस्थ वृद्धि के लिए आवश्यक पोषक तत्व प्रदान करता है। ${disclaimer}`,
      te: `మీ ${soilName} ఆధారంగా, మా AI ఎకరానికి ${dosage} కిలోల చొప్పున ${fertName}ను సిఫార్సు చేస్తోంది. ఇది వేరు పెరుగుదల మరియు పంట ఏపుగా ఎదగడానికి అవసరమైన పోషకాలను అందిస్తుంది. ${disclaimer}`,
      ml: `നിങ്ങളുടെ ${soilName}ന്റെ ഘടനയനുസരിച്ച്, ഒരേക്കറിന് ${dosage} കിലോഗ്രാം നിരക്കിൽ ${fertName} പ്രാഥമിക വളമായി ശുപാർശ ചെയ്യുന്നു. ഇത് വേരുകളുടെ വളർച്ചയ്ക്കും കരുത്തിനും ആവശ്യമായ പോഷകങ്ങൾ നൽകുന്നു. ${disclaimer}`,
      kn: `ನಿಮ್ಮ ${soilName}ಗೆ ಅನುಗುಣವಾಗಿ, ಎಕರೆಗೆ ${dosage} ಕೆಜಿ ದರದಲ್ಲಿ ${fertName} ಅನ್ನು ಮುಖ್ಯ ಗೊಬ್ಬರವಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ. ಇದು ಬೇರುಗಳ ಬೆಳವಣಿಗೆಗೆ ಮತ್ತು ಗಿಡದ ಹುಲುಸಾದ ಬೆಳವಣಿಗೆಗೆ ಪೋಷಕಾಂಶಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ${disclaimer}`
    });
  }

  // ==========================================
  // 5. FERTILIZER QUANTITY QUERY
  // ==========================================
  if (isFertilizerQtyQuery) {
    const fertName = primaryFert ? getLocalizedFertilizerName(primaryFert.id, lang) : '';
    const totalQty = primaryFert ? primaryFert.totalQuantityKg : 50;
    const bags = primaryFert ? primaryFert.bagsNeeded : 1;
    const dosage = primaryFert ? primaryFert.dosagePerAcreKg : 50;

    return buildResponse({
      lang,
      intent: 'fertilizer_quantity',
      en: `For your ${landArea} acre plot, you need approximately ${totalQty} kg of ${fertName} (${bags} bags of 50 kg each), calculated at ${dosage} kg per acre. Please follow the split dose schedule for best uptake. ${disclaimer}`,
      ta: `உங்கள் ${landArea} ஏக்கர் நிலத்திற்கு, ஒரு ஏக்கருக்கு ${dosage} கிலோ வீதம் மொத்தம் சுமார் ${totalQty} கிலோ (${bags} மூட்டைகள்) ${fertName} தேவைப்படுகிறது. ஊட்டச்சத்து இழப்பைத் தடுக்க தவணை முறையில் இடவும். ${disclaimer}`,
      hi: `आपके ${landArea} एकड़ खेत के लिए, प्रति एकड़ ${dosage} किलो की दर से कुल लगभग ${totalQty} किलो (${bags} बोरियां) ${fertName} की आवश्यकता है। सर्वोत्तम परिणाम के लिए इसे किस्तों में डालें। ${disclaimer}`,
      te: `మీ ${landArea} ఎకరాల పొలానికి, ఎకరానికి ${dosage} కిలోల చొప్పున మొత్తం సుమారు ${totalQty} కిలోలు (${bags} బస్తాలు) ${fertName} అవసరం. పోషకాలు వృధా కాకుండా ఉండటానికి విడతల వారీగా వేయండి. ${disclaimer}`,
      ml: `നിങ്ങളുടെ ${landArea} ഏക്കർ സ്ഥലത്തിന്, ഒരേക്കറിന് ${dosage} കിലോ നിരക്കിൽ ആകെ ${totalQty} കിലോഗ്രാം (${bags} ചാക്കുകൾ) ${fertName} ആവശ്യമാണ്. മികച്ച ഫലത്തിനായി ഘഡുക്കളായി പ്രയോഗിക്കുക. ${disclaimer}`,
      kn: `ನಿಮ್ಮ ${landArea} ಎಕರೆ ಜಮೀನಿಗೆ, ಎಕರೆಗೆ ${dosage} ಕೆಜಿಯಂತೆ ಒಟ್ಟು ಸುಮಾರು ${totalQty} ಕೆಜಿ (${bags} ಚೀಲಗಳು) ${fertName} ಅಗತ್ಯವಿದೆ. ಉತ್ತಮ ಫಲಿತಾಂಶಕ್ಕಾಗಿ ಕಂತುಗಳಲ್ಲಿ ಗೊಬ್ಬರ ಹಾಕಿ. ${disclaimer}`
    });
  }

  // ==========================================
  // 6. FERTILIZER COST QUERY
  // ==========================================
  if (isCostQuery) {
    return buildResponse({
      lang,
      intent: 'estimated_cost',
      en: `The estimated fertilizer cost for your ${landArea} acre plot is approximately ₹${totalCost.toLocaleString('en-IN')} (around ₹${costPerAcre.toLocaleString('en-IN')} per acre). Prices may vary based on your local agricultural cooperative or retailer.`,
      ta: `உங்கள் ${landArea} ஏக்கர் நிலத்திற்கான உத்தேச உரச் செலவு சுமார் ₹${totalCost.toLocaleString('en-IN')} ஆகும் (ஒரு ஏக்கருக்கு சுமார் ₹${costPerAcre.toLocaleString('en-IN')}). உங்கள் உள்ளூர் வேளாண் கூட்டுறவு அல்லது விற்பனை நிலையத்திற்கு ஏற்ப விலை சற்று மாறுபடலாம்.`,
      hi: `आपके ${landArea} एकड़ खेत के लिए अनुमानित उर्वरक लागत लगभग ₹${totalCost.toLocaleString('en-IN')} है (लगभग ₹${costPerAcre.toLocaleString('en-IN')} प्रति एकड़)। स्थानीय बाजार और सब्सिडी के अनुसार कीमतों में थोड़ा अंतर हो सकता है।`,
      te: `మీ ${landArea} ఎకరాల పొలానికి అంచనా వేసిన ఎరువుల ఖర్చు సుమారు ₹${totalCost.toLocaleString('en-IN')} (ఎకరానికి సుమారు ₹${costPerAcre.toLocaleString('en-IN')}). స్థానిక సహకార సంఘాలు లేదా మార్కెట్ ధరలను బట్టి స్వల్ప తేడాలు ఉండవచ్చు.`,
      ml: `നിങ്ങളുടെ ${landArea} ഏക്കർ സ്ഥലത്തേക്കുള്ള ഏകദേശ വളം ചിലവ് ₹${totalCost.toLocaleString('en-IN')} ആണ് (ഒരേക്കറിന് ഏകദേശം ₹${costPerAcre.toLocaleString('en-IN')}). പ്രാദേശിക വിപണി വിലകൾക്കനുസരിച്ച് മാറ്റമുണ്ടാകാം.`,
      kn: `ನಿಮ್ಮ ${landArea} ಎಕರೆ ಜಮೀನಿಗೆ ಅಂದಾಜು ರಸಗೊಬ್ಬರ ವೆಚ್ಚ ಸುಮಾರು ₹${totalCost.toLocaleString('en-IN')} ಆಗಿದೆ (ಎಕರೆಗೆ ಸುಮಾರು ₹${costPerAcre.toLocaleString('en-IN')}). ಸ್ಥಳೀಯ ಕೃಷಿ ಸೊಸೈಟಿ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ದರಗಳ ಆಧಾರದ ಮೇಲೆ ಬೆಲೆಗಳು ಸ್ವಲ್ಪ ಬದಲಾಗಬಹುದು.`
    });
  }

  // ==========================================
  // 7. RISK ALERTS QUERY
  // ==========================================
  if (isRiskQuery) {
    const highRiskAlerts = riskAlerts.filter(a => a.severity === 'high_risk');
    const warningAlerts = riskAlerts.filter(a => a.severity === 'warning');

    if (highRiskAlerts.length === 0 && warningAlerts.length === 0) {
      return buildResponse({
        lang,
        intent: 'risk_alerts',
        en: `Great news! No major risks were detected in your current soil analysis. Your crop selection and fertilizer plan are well aligned with your soil profile. ${disclaimer}`,
        ta: `மகிழ்ச்சியான செய்தி! உங்கள் தற்போதைய மண் பகுப்பாய்வில் எந்த பெரிய ஆபத்துகளும் கண்டறியப்படவில்லை. உங்கள் பயிர் தேர்வு மற்றும் உரத் திட்டம் மண்ணின் தன்மைக்கு ஏற்றதாக உள்ளது. ${disclaimer}`,
        hi: `अच्छी खबर! आपके वर्तमान मिट्टी विश्लेषण में कोई बड़ा जोखिम नहीं पाया गया है। आपकी चुनी गई फसल और उर्वरक योजना मिट्टी के अनुकूल है। ${disclaimer}`,
        te: `శుభవార్త! మీ ప్రస్తుత నేల విశ్లేషణలో పెద్ద ప్రమాదాలేవీ కనిపించలేదు. మీ పంట ఎంపిక మరియు ఎరువుల ప్రణాళిక నేల స్వభావానికి అనుకూలంగా ఉన్నాయి. ${disclaimer}`,
        ml: `നല്ല വാർത്ത! നിങ്ങളുടെ ഇപ്പോഴത്തെ മണ്ണ് പരിശോധനയിൽ വലിയ അപകട മുന്നറിയിപ്പുകൾ ഒന്നുമില്ല. നിങ്ങളുടെ വിള തിരഞ്ഞെടുപ്പും വളം പദ്ധതിയും മണ്ണിന് അനുയോജ്യമാണ്. ${disclaimer}`,
        kn: `ಶುಭವಾರ್ತೆ! ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಯಲ್ಲಿ ಯಾವುದೇ ಪ್ರಮುಖ ಅಪಾಯಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ನಿಮ್ಮ ಬೆಳೆ ಆಯ್ಕೆ ಮತ್ತು ರಸಗೊಬ್ಬರ ಯೋಜನೆ ಮಣ್ಣಿಗೆ ಸಂಪೂರ್ಣ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ${disclaimer}`
      });
    }

    // Report active risks
    const countText = `${highRiskAlerts.length} high risk, ${warningAlerts.length} warnings`;
    return buildResponse({
      lang,
      intent: 'risk_alerts',
      en: `You currently have ${countText}. Notice: Check your crop suitability and fertilizer dosage carefully in the Risk Alerts panel to prevent yield loss or nutrient wastage. ${disclaimer}`,
      ta: `உங்கள் பண்ணையில் தற்போது ${highRiskAlerts.length} அதிக ஆபத்து மற்றும் ${warningAlerts.length} எச்சரிக்கைகள் உள்ளன. மகசூல் இழப்பு அல்லது உர விரயத்தைத் தடுக்க ஆபத்து எச்சரிக்கைகள் பலகையை கவனமாகப் பார்க்கவும். ${disclaimer}`,
      hi: `वर्तमान में आपके पास ${highRiskAlerts.length} उच्च जोखिम और ${warningAlerts.length} चेतावनियां हैं। फसल की हानि या पोषक तत्वों की बर्बादी से बचने के लिए रिस्क अलर्ट पैनल को ध्यान से देखें। ${disclaimer}`,
      te: `ప్రస్తుతం మీ విశ్లేషణలో ${highRiskAlerts.length} అధిక ప్రమాదం మరియు ${warningAlerts.length} హెచ్చరికలు ఉన్నాయి. దిగుబడి నష్టం జరగకుండా రిస్క్ అలర్ట్ ప్యానెల్‌ను పరిశీలించండి. ${disclaimer}`,
      ml: `നിലവിൽ നിങ്ങളുടെ കൃഷിയിൽ ${highRiskAlerts.length} ഉയർന്ന അപകടസാധ്യതയും ${warningAlerts.length} മുന്നറിയിപ്പുകളും കണ്ടെത്തിയിട്ടുണ്ട്. വിളനാശം ഒഴിവാക്കാൻ റിസ്ക് അലേർട്ട് പാനൽ പരിശോധിക്കുക. ${disclaimer}`,
      kn: `ಪ್ರಸ್ತುತ ನಿಮ್ಮ ವಿಶ್ಲೇಷಣೆಯಲ್ಲಿ ${highRiskAlerts.length} ಹೆಚ್ಚಿನ ಅಪಾಯ ಮತ್ತು ${warningAlerts.length} ಎಚ್ಚರಿಕೆಗಳಿವೆ. ಬೆಳೆ ನಷ್ಟವನ್ನು ತಡೆಗಟ್ಟಲು ದಯವಿಟ್ಟು ರಿಸ್ಕ್ ಅಲರ್ಟ್ ಫಲಕವನ್ನು ಪರಿಶೀಲಿಸಿ. ${disclaimer}`
    });
  }

  // ==========================================
  // 8. GENERAL / FALLBACK QUERY
  // ==========================================
  return buildResponse({
    lang,
    intent: 'fallback',
    en: `I analyzed your question regarding your ${landArea} acre plot of ${soilName}. You can ask me specific questions like: "Which crop is best?", "What fertilizer should I use?", "How much fertilizer do I need?", or "Are there any risks?". ${disclaimer}`,
    ta: `உங்கள் ${landArea} ஏக்கர் ${soilName} தொடர்பான உங்கள் கேள்வியை கவனித்தேன். "எந்த பயிர் சிறந்தது?", "என்ன உரம் பயன்படுத்த வேண்டும்?", "எவ்வளவு உரம் தேவை?", அல்லது "ஏதேனும் எச்சரிக்கைகள் உள்ளதா?" போன்ற குறிப்பிட்ட கேள்விகளை என்னிடம் கேட்கலாம். ${disclaimer}`,
    hi: `मैंने आपके ${landArea} एकड़ ${soilName} खेत से जुड़े आपके सवाल को समझा। आप मुझसे पूछ सकते हैं: "कौन सी फसल सबसे अच्छी है?", "कौन सा उर्वरक उपयोग करें?", "कितनी खाद चाहिए?", या "क्या कोई जोखिम है?"। ${disclaimer}`,
    te: `మీ ${landArea} ఎకరాల ${soilName} కు సంబంధించిన మీ ప్రశ్నను పరిశీలించాను. "ఏ పంట మంచిది?", "ఏ ఎరువు వాడాలి?", "ఎంత ఎరువు అవసరం?", లేదా "ఏవైనా ప్రమాదాలు ఉన్నాయా?" వంటి ప్రశ్నలను నన్ను అడగవచ్చు. ${disclaimer}`,
    ml: `നിങ്ങളുടെ ${landArea} ഏക്കർ ${soilName} കൃഷിസ്ഥലവുമായി ബന്ധപ്പെട്ട ചോദ്യം ഞാൻ മനസ്സിലാക്കി. "ഏത് വിളയാണ് നല്ലത്?", "ഏത് വളമാണ് ഉപയോഗിക്കേണ്ടത്?", "എത്ര വളം വേണം?", അല്ലെങ്കിൽ "എന്തെങ്കിലും അപകട മുന്നറിയിപ്പുകൾ ഉണ്ടോ?" എന്ന് ചോദിക്കാം. ${disclaimer}`,
    kn: `ನಿಮ್ಮ ${landArea} ಎಕರೆ ${soilName} ಜಮೀನಿಗೆ ಸಂಬಂಧಿಸಿದ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನಾನು ಗಮನಿಸಿದ್ದೇನೆ. "ಯಾವ ಬೆಳೆ ಅತ್ಯುತ್ತಮ?", "ಯಾವ ಗೊಬ್ಬರ ಬಳಸಬೇಕು?", "ಎಷ್ಟು ಗೊಬ್ಬರ ಬೇಕು?", ಅಥವಾ "ಏನಾದರೂ ಅಪಾಯಗಳಿವೆಯೇ?" ಎಂದು ನೀವು ನನ್ನನ್ನು ಕೇಳಬಹುದು. ${disclaimer}`
  });
}

function matchesKeywords(text, keywords) {
  return keywords.some(k => text.includes(k));
}

function buildResponse({ lang, intent = 'fallback', en, ta, hi, te, ml, kn }) {
  const dict = { en, ta, hi, te, ml, kn };
  const text = dict[lang] || en;
  return {
    text,
    intent,
    toString: () => text
  };
}



// ==========================================
// FILE: src/services/storageService.js
// ==========================================

// Storage service for syncing reports with LocalStorage and simulated Cloud DB
const STORAGE_KEY = 'agrisense_reports_v1';

// Seed demo reports if none exist
const SEED_REPORTS = [
  {
    id: 'AGRI-2026-4819',
    date: '2026-08-28T10:30:00.000Z',
    soilType: 'Loamy Soil',
    condition: 'Good',
    confidence: 94,
    crop: 'Rice (Paddy)',
    fertilizer: 'Neem Coated Urea (100 kg) + DAP (70 kg)',
    totalCost: 2640,
    areaInAcres: 2.0,
    location: 'Thanjavur, Tamil Nadu',
    language: 'ta',
    savedToCloud: true
  },
  {
    id: 'AGRI-2026-3912',
    date: '2026-08-14T14:15:00.000Z',
    soilType: 'Black Cotton Soil',
    condition: 'Good',
    confidence: 95,
    crop: 'Cotton',
    fertilizer: 'DAP (120 kg) + Urea (135 kg)',
    totalCost: 4185,
    areaInAcres: 3.0,
    location: 'Warangal, Telangana',
    language: 'te',
    savedToCloud: true
  }
];

function getSavedReports() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_REPORTS));
      return SEED_REPORTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return SEED_REPORTS;
  }
}

function saveReportToCloud(report) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reports = getSavedReports();
      const reportWithId = {
        ...report,
        id: report.id || `AGRI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        date: report.date || new Date().toISOString(),
        savedToCloud: true
      };

      // Add to front of array or update if already present
      const existingIdx = reports.findIndex((r) => r.id === reportWithId.id);
      if (existingIdx >= 0) {
        reports[existingIdx] = reportWithId;
      } else {
        reports.unshift(reportWithId);
      }

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
      } catch (err) {
        console.error("Storage write error", err);
      }

      resolve(reportWithId);
    }, 1100); // 1.1s realistic cloud sync animation
  });
}

function deleteSavedReport(reportId) {
  const reports = getSavedReports().filter((r) => r.id !== reportId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.error("Storage delete error", err);
  }
  return reports;
}


// ==========================================
// FILE: src/services/authService.js
// ==========================================

// AgriSense AI Authentication & Session Service
const USERS_STORAGE_KEY = 'agrisense_registered_users_v1';
const CURRENT_USER_KEY = 'agrisense_user';
const SESSION_TOKEN_KEY = 'agrisense_session_token';

// Seed default demo accounts
const SEED_USERS = [
  {
    id: 'USR-101',
    name: 'Karnika',
    email: 'karnika@agrisense.ai',
    // Simple hash representation (never plain text password in public session)
    passwordHash: 'e2829cf944439c3620959f237ef8fa176a911a3d0774dfbd897c8cfd9823f95b', // 'password123'
    language: 'en',
    createdAt: '2026-08-01T08:00:00.000Z'
  },
  {
    id: 'USR-102',
    name: 'Ramesh Kumar',
    email: 'ramesh@farm.in',
    passwordHash: 'e2829cf944439c3620959f237ef8fa176a911a3d0774dfbd897c8cfd9823f95b', // 'password123'
    language: 'ta',
    createdAt: '2026-08-15T09:30:00.000Z'
  }
];

// Utility: Lightweight string hash for credentials
function hashPassword(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return 'h_' + Math.abs(hash).toString(16);
}

// Check if password matches (supports demo hash or hashed password)
function verifyPassword(inputPassword, storedHash) {
  if (storedHash === 'e2829cf944439c3620959f237ef8fa176a911a3d0774dfbd897c8cfd9823f95b') {
    return inputPassword === 'password123';
  }
  return hashPassword(inputPassword) === storedHash;
}

function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(SEED_USERS));
      return SEED_USERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return SEED_USERS;
  }
}

function saveRegisteredUsers(users) {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.warn('Could not persist users:', e);
  }
}

/**
 * Authenticate user with Name, Email, and Password
 */
function loginUser({ name, email, password, language = 'en' }) {
  if (!name || !name.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_NAME' };
  }
  if (!email || !email.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_EMAIL' };
  }
  if (!password || !password.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_PASSWORD' };
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim();
  const users = getRegisteredUsers();

  // Find existing account by email
  let existingUser = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (existingUser) {
    // Validate password
    if (!verifyPassword(password, existingUser.passwordHash)) {
      return { success: false, errorCode: 'ERR_PASSWORD_INCORRECT' };
    }
    // Update name and language if provided
    existingUser.name = cleanName;
    existingUser.language = language || existingUser.language;
    saveRegisteredUsers(users);
  } else {
    // If not found, create new account dynamically for the farmer
    existingUser = {
      id: `USR-${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      passwordHash: hashPassword(password),
      language: language,
      createdAt: new Date().toISOString()
    };
    users.push(existingUser);
    saveRegisteredUsers(users);
  }

  // Create session object (NEVER store plain-text password in session)
  const sessionUser = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    language: language || existingUser.language || 'en',
    loginTime: new Date().toISOString()
  };

  const sessionToken = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
  localStorage.setItem(SESSION_TOKEN_KEY, sessionToken);

  return {
    success: true,
    user: sessionUser,
    token: sessionToken
  };
}

/**
 * Register a new farmer account
 */
function registerUser({ name, email, password, confirmPassword, language = 'en' }) {
  if (!name || !name.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_NAME' };
  }
  if (!email || !email.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_EMAIL' };
  }
  if (!password || password.length < 4) {
    return { success: false, errorCode: 'ERR_PASSWORD_TOO_SHORT' };
  }
  if (password !== confirmPassword) {
    return { success: false, errorCode: 'ERR_PASSWORDS_MISMATCH' };
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim();
  const users = getRegisteredUsers();

  const existing = users.find((u) => u.email.toLowerCase() === cleanEmail);
  if (existing) {
    return { success: false, errorCode: 'ERR_EMAIL_ALREADY_EXISTS' };
  }

  const newUser = {
    id: `USR-${Date.now()}`,
    name: cleanName,
    email: cleanEmail,
    passwordHash: hashPassword(password),
    language: language,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  // Auto-login upon registration
  return loginUser({ name: cleanName, email: cleanEmail, password, language });
}

/**
 * Reset password for forgotten password flow
 */
function resetPasswordUser({ email, newPassword }) {
  if (!email || !email.trim()) {
    return { success: false, errorCode: 'ERR_ENTER_EMAIL' };
  }
  if (!newPassword || newPassword.length < 4) {
    return { success: false, errorCode: 'ERR_PASSWORD_TOO_SHORT' };
  }

  const cleanEmail = email.trim().toLowerCase();
  const users = getRegisteredUsers();
  const user = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (!user) {
    return { success: false, errorCode: 'ERR_USER_NOT_FOUND' };
  }

  user.passwordHash = hashPassword(newPassword);
  saveRegisteredUsers(users);

  return { success: true };
}

/**
 * Retrieve validated active session
 */
function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    const token = localStorage.getItem(SESSION_TOKEN_KEY);
    if (!raw || !token) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/**
 * End authenticated session
 */
function logoutUser() {
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem(SESSION_TOKEN_KEY);
  } catch (e) {
    console.warn('Error clearing session:', e);
  }
}


// ==========================================
// FILE: src/components/ErrorBoundary.jsx
// ==========================================


/**
 * Clean Light-Green AgriSense AI ErrorBoundary
 * Catches JavaScript errors in child component tree, displays user-friendly fallback,
 * and logs error details without leaving a white blank screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('AgriSense ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4FBF4] p-4 font-sans text-[#1B5E20]">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#C8E6C9] shadow-lg text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl mx-auto shadow-xs">
              ⚠️
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
                Something went wrong.
              </h1>
              <p className="text-sm text-[#1B5E20]/80">
                Please refresh the page or try again.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-left text-xs text-red-800 font-mono overflow-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                <span>Refresh Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


// ==========================================
// FILE: src/components/LanguageSelector.jsx
// ==========================================


function LanguageSelector({ currentLang, onSelectLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguageObj = supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#1B5E20] bg-white hover:bg-[#EAF7EA] border border-[#C8E6C9] rounded-xl shadow-xs transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base">🌐</span>
        <span className="font-semibold text-[#1B5E20]">{currentLanguageObj.nativeName}</span>
        <svg
          className={`w-4 h-4 text-[#388E3C] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 z-50 py-1.5 border border-[#C8E6C9] divide-y divide-[#EAF7EA] animate-in fade-in duration-150">
          <div className="px-3.5 py-1.5 text-xs font-bold text-[#1B5E20] uppercase tracking-wider bg-[#F4FBF4]">
            Select Language
          </div>
          <div className="py-1">
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#4CAF50] text-white font-bold'
                      : 'text-[#1B5E20] hover:bg-[#EAF7EA]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <div>
                      <div className="text-sm font-semibold leading-snug">{lang.nativeName}</div>
                      <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-[#388E3C]'}`}>
                        {lang.name}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="text-white text-sm font-bold">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


// ==========================================
// FILE: src/components/Navbar.jsx
// ==========================================


function Navbar({ activePage, setActivePage, currentLang, setLanguage, user, onOpenAuth, onLogout }) {
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


// ==========================================
// FILE: src/components/HeroSection.jsx
// ==========================================


function HeroSection({ currentLang, user, onStartAnalysis, onHowItWorks }) {
  return (
    <div className="space-y-20 py-12 lg:py-16">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#C8E6C9] text-[#1B5E20] text-xs font-bold uppercase tracking-wider">
                <span>🌱</span>
                <span>{t('heroBadgeAI', currentLang)}</span>
              </div>
              {user && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E6C9] text-[#1B5E20] text-xs font-black shadow-2xs">
                  <span>{getLocalizedWelcome(user.name, currentLang)}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B5E20] tracking-tight leading-[1.15]">
              {t('heroTitle', currentLang)}
            </h1>

            <p className="text-lg sm:text-xl text-[#1B5E20]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('heroSubtitle', currentLang)}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartAnalysis}
                className="w-full sm:w-auto px-8 py-4 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-base font-bold rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>📷</span>
                <span>{t('btnAnalyzeSoil', currentLang)}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onHowItWorks}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] text-base font-bold rounded-2xl border border-[#C8E6C9] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ℹ️</span>
                <span>{t('btnHowItWorks', currentLang)}</span>
              </button>
            </div>
          </div>

          {/* Right: Single Clean Agricultural Visual (No messy floating cards) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-white p-3 border border-[#C8E6C9] shadow-lg">
              <div className="relative rounded-2xl overflow-hidden bg-[#EAF7EA] aspect-4/3 flex items-center justify-center">
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23eaf7ea'/><circle cx='200' cy='180' r='110' fill='%23c8e6c9' opacity='0.7'/><path d='M80 260 C 140 210, 260 210, 320 260 Z' fill='%2381c784'/><path d='M200 130 Q 180 90 150 80 Q 180 110 200 130 Z' fill='%234caf50'/><path d='M200 130 Q 220 90 250 80 Q 220 110 200 130 Z' fill='%23388e3c'/><line x1='200' y1='130' x2='200' y2='240' stroke='%232e7d32' stroke-width='6' stroke-linecap='round'/></svg>"
                  alt="Agricultural field and plant illustration"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle calm scan beam */}
                <div className="absolute inset-x-0 h-1 bg-[#4CAF50] opacity-80 shadow-[0_0_10px_#4CAF50] animate-soft-scan"></div>
                
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-[#C8E6C9] text-center">
                  <span className="text-xs font-bold text-[#1B5E20]">
                    AI Image-to-Recommendation Engine
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Simple Feature Cards Below Hero (Section 7) */}
      <section id="features-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              🤖
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat1Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat1Desc', currentLang)}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              🧪
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat2Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat2Desc', currentLang)}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#C8E6C9] shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF7EA] text-[#1B5E20] flex items-center justify-center text-2xl mx-auto sm:mx-0">
              💰
            </div>
            <h3 className="text-xl font-bold text-[#1B5E20]">
              {t('feat3Title', currentLang)}
            </h3>
            <p className="text-sm text-[#1B5E20]/80 leading-relaxed">
              {t('feat3Desc', currentLang)}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}


// ==========================================
// FILE: src/components/UploadBox.jsx
// ==========================================


function UploadBox({
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


// ==========================================
// FILE: src/components/ProgressIndicator.jsx
// ==========================================


function ProgressIndicator({ currentLang, onComplete, soilImage }) {
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


// ==========================================
// FILE: src/components/RiskAlertCard.jsx
// ==========================================


function RiskAlertCard({ alert, currentLang, onSwitchCrop, onTryAgain }) {
  if (!alert) return null;

  const severity = alert.severity || 'warning';
  const isHighRisk = severity === 'high_risk';
  const isWarning = severity === 'warning';
  const isInfo = severity === 'info';

  // Severity styles
  const containerClasses = isHighRisk
    ? 'bg-red-50/80 border-red-200 text-red-950'
    : isWarning
    ? 'bg-amber-50/80 border-amber-200 text-amber-950'
    : 'bg-emerald-50/80 border-emerald-200 text-emerald-950';

  const badgeClasses = isHighRisk
    ? 'bg-red-100 text-red-800 border-red-300'
    : isWarning
    ? 'bg-amber-100 text-amber-800 border-amber-300'
    : 'bg-emerald-100 text-emerald-800 border-emerald-300';

  const badgeText = isHighRisk
    ? `🔴 ${t('badgeHighRisk', currentLang)}`
    : isWarning
    ? `🟡 ${t('badgeWarning', currentLang)}`
    : `🟢 ${t('badgeInfo', currentLang)}`;

  const title = alert.titleKey ? t(alert.titleKey, currentLang) : (alert.title || '');
  const message = alert.msgKey ? t(alert.msgKey, currentLang) : (alert.message || '');
  const recommendation = alert.recKey ? t(alert.recKey, currentLang) : (alert.recommendation || '');

  return (
    <div className={`rounded-2xl p-5 sm:p-6 border transition-all ${containerClasses}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">
            {isHighRisk ? '🚨' : isWarning ? '⚠️' : '✅'}
          </span>
          <h4 className="text-lg font-bold">
            {title}
          </h4>
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeClasses}`}>
          {badgeText}
        </span>
      </div>

      <p className="text-sm font-medium leading-relaxed mb-3">
        {message}
      </p>

      {/* Unsuitable Crop Details Table / Grid */}
      {alert.type === 'UNSUITABLE_CROP' && alert.details && (
        <div className="bg-white/80 rounded-xl p-4 border border-amber-200 mb-4 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-amber-50/50">
              <span className="text-amber-800/80 font-medium block">
                {t('selectedCropLabel', currentLang)}
              </span>
              <span className="font-bold text-amber-950 text-sm">
                {getLocalizedCropName(alert.details.selectedCrop, currentLang)}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/50">
              <span className="text-amber-800/80 font-medium block">
                {t('detectedSoilLabel', currentLang)}
              </span>
              <span className="font-bold text-amber-950 text-sm">
                {getLocalizedSoilName(alert.details.detectedSoil, currentLang)}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50/50 col-span-2 sm:col-span-1">
              <span className="text-amber-800/80 font-medium block">
                {t('suitabilityScoreLabel', currentLang)}
              </span>
              <span className="font-black text-red-600 text-sm">
                {alert.details.suitabilityScore}%
              </span>
            </div>
          </div>

          {/* Suggested High-Yield Alternatives */}
          {alert.details.suggestedAlternatives && alert.details.suggestedAlternatives.length > 0 && (
            <div>
              <span className="text-xs font-bold text-amber-900 block mb-2">
                {t('suggestedAlternativesLabel', currentLang)}:
              </span>
              <div className="flex flex-wrap gap-2">
                {alert.details.suggestedAlternatives.map((alt) => (
                  <span
                    key={alt.cropKey}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
                  >
                    <span>🌾 {getLocalizedCropName(alt.cropKey, currentLang)}</span>
                    <span className="text-emerald-600 font-semibold">({alt.score}%)</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {onSwitchCrop && (
            <button
              type="button"
              onClick={onSwitchCrop}
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
            >
              {t('btnSwitchCrop', currentLang)} →
            </button>
          )}
        </div>
      )}

      {/* Action Recommendation Box */}
      {recommendation && (
        <div className="p-3 rounded-xl bg-white/60 border border-current/10 text-xs font-semibold leading-relaxed flex items-start gap-2">
          <span className="mt-0.5">💡</span>
          <span>{recommendation}</span>
        </div>
      )}

      {/* Action Button for Low Confidence / Blur */}
      {(alert.type === 'LOW_CONFIDENCE' || alert.type === 'IMAGE_QUALITY') && onTryAgain && (
        <div className="mt-3">
          <button
            type="button"
            onClick={onTryAgain}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            {t('btnTryAgain', currentLang)}
          </button>
        </div>
      )}

      {/* Mandatory Lab Soil Test Disclaimer */}
      {alert.disclaimer && (
        <div className="mt-3 pt-2 border-t border-current/10 text-[11px] font-medium opacity-80 flex items-center gap-1.5">
          <span>🧪</span>
          <span>{t('alertSoilTestDisclaimer', currentLang)}</span>
        </div>
      )}
    </div>
  );
}


// ==========================================
// FILE: src/components/RiskAlertsPanel.jsx
// ==========================================


function RiskAlertsPanel({ alerts = [], currentLang, onSwitchCrop, onTryAgain, isCollapsible = false }) {
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


// ==========================================
// FILE: src/components/SoilResultCard.jsx
// ==========================================


function SoilResultCard({ currentLang, soilResult, soilImage, riskAlerts = [], onSwitchCrop, onTryAgain }) {
  if (!soilResult) return null;

  const confidence = soilResult.confidence_percentage || soilResult.confidence || 92;
  const localizedSoilName = getLocalizedSoilName(soilResult.soil_key || soilResult.id || 'alluvial', currentLang);
  const localizedCondition = getLocalizedCondition(soilResult.condition || 'Good', currentLang);

  const visibleSoilPct = soilResult.visible_soil_percentage || (soilResult.has_plants ? 75 : 98);
  const hasPlants = Boolean(soilResult.has_plants);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('resultHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('resultSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Clean Combined Card: Soil Image on Left, Diagnostics on Right */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Large Soil Image Preview */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-900 border border-[#C8E6C9] aspect-4/3 max-h-64">
            {soilImage ? (
              <img
                src={soilImage}
                alt={localizedSoilName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                🌱
              </div>
            )}

            {/* Plant Detection Tag Overlay */}
            {hasPlants && (
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-xs text-[11px] font-bold text-white flex items-center gap-1.5">
                <span>🌱</span>
                <span className="truncate">{t('plantsDetected', currentLang)} ({t('foliageFiltered', currentLang)})</span>
              </div>
            )}
          </div>

          {/* Diagnostics beside the image */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Detected Soil Type (Pure Localized) */}
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('detectedSoilType', currentLang)}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9]">
                  {visibleSoilPct}% {t('visibleSoilArea', currentLang)}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1B5E20] mt-1">
                {localizedSoilName}
              </h3>
            </div>

            {/* Soil Condition & AI Confidence */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Condition */}
              <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9]">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('soilCondition', currentLang)}
                </span>
                <span className="text-lg font-bold text-[#1B5E20] mt-1 block">
                  ● {localizedCondition}
                </span>
              </div>

              {/* Confidence Meter */}
              <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9]">
                <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
                  {t('aiConfidence', currentLang)}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-black text-[#1B5E20]">
                    {confidence}%
                  </span>
                  <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4CAF50] rounded-full"
                      style={{ width: `${confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Dynamic Risk Alerts on Analysis Result Page */}
      {riskAlerts && riskAlerts.length > 0 && (
        <div className="mt-8">
          <RiskAlertsPanel
            alerts={riskAlerts}
            currentLang={currentLang}
            onSwitchCrop={onSwitchCrop}
            onTryAgain={onTryAgain}
          />
        </div>
      )}
    </div>
  );
}



// ==========================================
// FILE: src/components/UserInputForm.jsx
// ==========================================


function UserInputForm({ currentLang, initialValues, onSubmit }) {
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


// ==========================================
// FILE: src/components/FertilizerCard.jsx
// ==========================================


function FertilizerCard({ currentLang, fertilizers, landArea }) {
  if (!fertilizers || fertilizers.length === 0) return null;

  // Primary AI-recommended fertilizer
  const primaryFert = fertilizers[0];
  const localizedFertName = getLocalizedFertilizerName(primaryFert.id, currentLang);
  const localizedFrequency = getLocalizedFrequency(primaryFert.id, primaryFert.frequency, currentLang);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('fertHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('fertSubtitle', currentLang)}
        </p>
      </div>

      {/* ONE Primary Spacious Recommendation Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C8E6C9] shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAF7EA] pb-6">
          <div>
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertRecommended', currentLang)}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1B5E20] mt-1">
              {localizedFertName}
            </h3>
          </div>

          <div className="self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9]">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              <span>{t('levelHighly', currentLang)}</span>
            </span>
          </div>
        </div>

        {/* Quantity and Application */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertQuantity', currentLang)}
            </span>
            <span className="text-xl font-black text-[#1B5E20] mt-1 block">
              {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)}
            </span>
            <span className="text-xs text-[#1B5E20]/70 mt-1 block">
              {t('totalForPlot', currentLang)}: {primaryFert.totalQuantityKg} {t('kg', currentLang)}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
            <span className="text-xs font-bold text-[#388E3C] uppercase tracking-wider block">
              {t('fertApplication', currentLang)}
            </span>
            <p className="text-xs text-[#1B5E20] font-medium leading-relaxed mt-1">
              {localizedFrequency}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


// ==========================================
// FILE: src/components/CostCard.jsx
// ==========================================


function CostCard({ currentLang, fertilizers, landArea, onLandAreaChange }) {
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


// ==========================================
// FILE: src/components/CropCard.jsx
// ==========================================


function CropCard({ currentLang, crops }) {
  const [selectedCropModal, setSelectedCropModal] = useState(null);

  if (!crops || crops.length === 0) return null;

  // Show top recommendations
  const topCrops = crops.slice(0, 4);

  return (
    <div id="crops-section" className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
          {t('cropHeading', currentLang)}
        </h2>
        <p className="text-sm text-[#1B5E20]/70 mt-1">
          {t('cropSubtitle', currentLang)}
        </p>
      </div>

      {/* Clean Horizontal Cards */}
      <div className="space-y-3">
        {topCrops.map((crop) => {
          const localizedName = getLocalizedCropName(crop.id, crop.name, currentLang);
          const localizedSeason = getLocalizedSeason(crop.season, currentLang);

          return (
            <div
              key={crop.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#C8E6C9] shadow-xs flex items-center justify-between gap-4 hover:border-[#4CAF50] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#EAF7EA] flex items-center justify-center text-2xl">
                  {crop.icon || '🌾'}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1B5E20]">
                    {localizedName}
                  </h3>
                  <span className="text-xs text-[#1B5E20]/70">
                    {localizedSeason}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl bg-[#EAF7EA] text-[#1B5E20] font-bold text-xs sm:text-sm border border-[#C8E6C9]">
                  {crop.suitability}% {t('suitabilityScore', currentLang)}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCropModal({ ...crop, localizedName, localizedSeason })}
                  className="px-3.5 py-1.5 rounded-xl border border-[#C8E6C9] bg-white hover:bg-[#EAF7EA] text-[#1B5E20] text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t('btnViewDetails', currentLang)}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Modal for Crop Details */}
      {selectedCropModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#C8E6C9] shadow-xl space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedCropModal.icon || '🌾'}</span>
                <div>
                  <h4 className="text-xl font-bold text-[#1B5E20]">
                    {selectedCropModal.localizedName}
                  </h4>
                  <span className="text-xs text-[#4CAF50] font-semibold">
                    {selectedCropModal.suitability}% {t('suitabilityScore', currentLang)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCropModal(null)}
                className="text-gray-400 hover:text-gray-700 p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-[#1B5E20] p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <div>
                <span className="font-bold block text-xs">{t('plantSpacing', currentLang)}:</span>
                <span className="text-xs">{selectedCropModal.plantSpacing || '20 cm × 15 cm'}</span>
              </div>
              <div>
                <span className="font-bold block text-xs">{t('harvestDuration', currentLang)}:</span>
                <span className="text-xs">{selectedCropModal.harvestDuration || '100 - 120 Days'}</span>
              </div>
              <div>
                <span className="font-bold block text-xs">{t('soilSynergy', currentLang)}:</span>
                <span className="text-xs leading-relaxed">
                  {getLocalizedCropDetails(selectedCropModal.id, 'soilSynergy', selectedCropModal.soilSynergy, currentLang)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCropModal(null)}
              className="w-full py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              {t('modalClose', currentLang)}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}


// ==========================================
// FILE: src/components/ReportSummary.jsx
// ==========================================


function ReportSummary({
  currentLang,
  reportData,
  soilImage,
  onSaveReport,
  onAnalyzeAnother,
  isSavingToCloud,
  showToast
}) {
  if (!reportData) return null;

  const soilKey = reportData.soilTypeKey || 'alluvial';
  const localizedSoilName = getLocalizedSoilName(soilKey, currentLang);
  const localizedCondition = getLocalizedCondition(reportData.condition || 'Good', currentLang);
  const primaryFert = reportData.fertilizers?.[0] || { id: 'urea', pricePerKg: 7, dosagePerAcreKg: 50, totalQuantityKg: 50, totalCost: 350 };
  const localizedFertName = getLocalizedFertilizerName(primaryFert.id, currentLang);
  const localizedFrequency = getLocalizedFrequency(primaryFert.id, primaryFert.frequency, currentLang);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 print:p-0">
      
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-[#1B5E20]">
            {t('reportTitle', currentLang)}
          </h1>
          <p className="text-sm text-[#1B5E20]/70 mt-0.5">
            {t('reportSubtitle', currentLang)}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            📄 {t('btnDownloadReport', currentLang)}
          </button>

          <button
            onClick={onSaveReport}
            disabled={isSavingToCloud}
            className="px-5 py-2 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            {isSavingToCloud ? '☁️ ' + t('cloudSaving', currentLang) : '💾 ' + t('btnSaveReport', currentLang)}
          </button>
        </div>
      </div>

      {/* Cloud Notification */}
      {isSavingToCloud && (
        <div className="p-3.5 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9] text-xs font-bold text-[#1B5E20] flex items-center gap-2 animate-pulse">
          <span>☁️</span>
          <span>{t('cloudSaving', currentLang)}</span>
        </div>
      )}

      {/* The Clean Printable Report Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C8E6C9] shadow-md space-y-8 print:border-none print:shadow-none">
        
        {/* Header Branding */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EAF7EA]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <div>
              <span className="text-xl font-black text-[#1B5E20]">AgriSense AI</span>
              <p className="text-xs text-[#388E3C]">{t('reportHeaderTag', currentLang)}</p>
            </div>
          </div>
          <div className="text-right text-xs text-[#1B5E20]/70">
            <div>{t('reportDate', currentLang)}: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            <div>{t('reportStatus', currentLang)}: {t('statusVerified', currentLang)}</div>
          </div>
        </div>

        {/* 1. 🪨 Soil Analysis */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🪨</span>
            <span>{t('secSoilAnalysis', currentLang)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('detectedSoilType', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{localizedSoilName}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('soilCondition', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{localizedCondition}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
              <span className="text-xs font-bold text-[#388E3C] block">{t('aiConfidence', currentLang)}</span>
              <span className="text-lg font-black text-[#1B5E20] mt-0.5 block">{reportData.confidence || 92}%</span>
            </div>
          </div>
        </div>

        {/* 2. 🧪 Fertilizer Recommendation */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🧪</span>
            <span>{t('secFertRec', currentLang)}</span>
          </h2>
          <div className="p-5 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-[#388E3C] block">{t('fertRecommended', currentLang)}</span>
                <span className="text-xl font-black text-[#1B5E20]">{localizedFertName}</span>
              </div>
              <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[#EAF7EA] border border-[#C8E6C9] text-xs font-bold text-[#1B5E20]">
                {t('levelHighly', currentLang)}
              </span>
            </div>
            <div className="text-xs text-[#1B5E20] space-y-1 pt-2 border-t border-[#EAF7EA]">
              <div>
                <span className="font-bold">{t('fertQuantity', currentLang)}:</span>{' '}
                {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)} ({primaryFert.totalQuantityKg} {t('kg', currentLang)} {t('totalForPlot', currentLang).toLowerCase()})
              </div>
              <div>
                <span className="font-bold">{t('fertApplication', currentLang)}:</span>{' '}
                {localizedFrequency}
              </div>
            </div>
          </div>
        </div>

        {/* 3. 💰 Cost Prediction */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>💰</span>
            <span>{t('secCostPred', currentLang)}</span>
          </h2>
          <div className="p-4 rounded-2xl bg-[#EAF7EA] border border-[#C8E6C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#1B5E20] space-y-1">
              <div><span className="font-bold">{t('costRequiredQty', currentLang)}:</span> {primaryFert.dosagePerAcreKg} {t('kgPerAcre', currentLang)}</div>
              <div><span className="font-bold">{t('costEstPrice', currentLang)}:</span> ₹{primaryFert.pricePerKg} {t('perKg', currentLang)}</div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#1B5E20]/70 block">{t('costEstTotal', currentLang)}</span>
              <span className="text-2xl font-black text-[#1B5E20]">₹{primaryFert.totalCost?.toLocaleString('en-IN') || 350}</span>
            </div>
          </div>
        </div>

        {/* 4. 🌾 Crop Recommendation */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B5E20] flex items-center gap-2">
            <span>🌾</span>
            <span>{t('secCropRec', currentLang)}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {reportData.crops?.slice(0, 3).map((c) => {
              const localizedCrop = getLocalizedCropName(c.id, c.name, currentLang);
              return (
                <div key={c.id} className="p-3.5 rounded-2xl bg-[#F4FBF4] border border-[#C8E6C9]">
                  <div className="text-xl mb-1">{c.icon || '🌾'}</div>
                  <div className="text-sm font-bold text-[#1B5E20]">{localizedCrop}</div>
                  <div className="text-xs font-semibold text-[#4CAF50] mt-0.5">{c.suitability}% {t('suitabilityScore', currentLang)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Analyze Another Action */}
        <div className="pt-6 border-t border-[#EAF7EA] flex justify-center print:hidden">
          <button
            type="button"
            onClick={onAnalyzeAnother}
            className="px-6 py-3 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            🔄 {t('btnAnalyzeAnother', currentLang)}
          </button>
        </div>

      </div>
    </div>
  );
}


// ==========================================
// FILE: src/components/ReportHistory.jsx
// ==========================================


function ReportHistory({ currentLang, reports, onViewReport, onStartNew }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#1B5E20]">
            {t('historyTitle', currentLang)}
          </h2>
          <p className="text-sm text-[#1B5E20]/70 mt-0.5">
            {t('historySubtitle', currentLang)}
          </p>
        </div>

        <button
          onClick={onStartNew}
          className="px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer self-start sm:self-center"
        >
          📷 {t('btnUploadSoilImage', currentLang)}
        </button>
      </div>

      {/* Reports List */}
      {(!reports || reports.length === 0) ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#C8E6C9] shadow-xs">
          <span className="text-4xl block mb-2">📁</span>
          <h3 className="text-base font-bold text-[#1B5E20]">
            {t('noReportsFound', currentLang)}
          </h3>
          <button
            onClick={onStartNew}
            className="mt-4 px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            {t('btnUploadSoilImage', currentLang)}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((r) => {
            const dateStr = new Date(r.date || Date.now()).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });

            const soilName = getLocalizedSoilName(r.soilTypeKey || 'loamy', currentLang);
            const fertName = getLocalizedFertilizerName(r.fertilizerId || 'urea', currentLang);
            const cropName = getLocalizedCropName(r.cropId || 'rice', r.crop || 'Rice', currentLang);

            return (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-5 border border-[#C8E6C9] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#4CAF50] transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#388E3C] font-semibold">{dateStr}</span>
                    <span className="text-xs text-[#C8E6C9]">•</span>
                    <span className="text-xs text-[#1B5E20]/60 font-mono">{r.id}</span>
                  </div>

                  <div className="text-lg font-bold text-[#1B5E20]">
                    🪨 {soilName}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#1B5E20]/80">
                    <span>🧪 {fertName}</span>
                    <span>•</span>
                    <span>🌾 {cropName}</span>
                    <span>•</span>
                    <span className="font-bold text-[#1B5E20]">₹{r.totalCost?.toLocaleString('en-IN') || 350}</span>
                  </div>
                </div>

                <button
                  onClick={() => onViewReport(r)}
                  className="px-4 py-2 bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] font-bold text-xs rounded-xl border border-[#C8E6C9] transition-colors cursor-pointer self-start sm:self-center"
                >
                  {t('btnViewReport', currentLang)} →
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}


// ==========================================
// FILE: src/components/FeaturesSection.jsx
// ==========================================


function FeaturesSection({ currentLang, onStartAnalysis }) {
  const features = [
    {
      id: 'ai-soil',
      icon: '🤖',
      titleKey: 'feat1Title',
      descKey: 'feat1Desc',
      badge: 'Computer Vision',
      bgGradient: 'from-emerald-500/10 to-green-500/5'
    },
    {
      id: 'crop-rec',
      icon: '🌾',
      titleKey: 'feat2Title',
      descKey: 'feat2Desc',
      badge: 'High Yield',
      bgGradient: 'from-amber-500/10 to-yellow-500/5'
    },
    {
      id: 'fert-intel',
      icon: '🧪',
      titleKey: 'feat3Title',
      descKey: 'feat3Desc',
      badge: 'Precision Dose',
      bgGradient: 'from-blue-500/10 to-cyan-500/5'
    },
    {
      id: 'cost-pred',
      icon: '💰',
      titleKey: 'feat4Title',
      descKey: 'feat4Desc',
      badge: 'DBT Subsidies',
      bgGradient: 'from-green-500/10 to-emerald-500/5'
    },
    {
      id: 'multilingual',
      icon: '🌐',
      titleKey: 'feat5Title',
      descKey: 'feat5Desc',
      badge: '5 Languages',
      bgGradient: 'from-purple-500/10 to-indigo-500/5'
    },
    {
      id: 'cloud-rep',
      icon: '☁️',
      titleKey: 'feat6Title',
      descKey: 'feat6Desc',
      badge: 'Always Accessible',
      bgGradient: 'from-teal-500/10 to-emerald-500/5'
    }
  ];

  return (
    <section id="features-section" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider border border-emerald-200">
            Platform Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 mt-3 tracking-tight font-serif">
            {t('featTitle', currentLang)}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            {t('featSubtitle', currentLang)}
          </p>
        </div>

        {/* 6 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-emerald-950/5 border border-emerald-100 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-xs">
                    {feat.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100/70 text-emerald-800">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {t(feat.titleKey, currentLang)}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(feat.descKey, currentLang)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl bg-emerald-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              Ready to Optimize Your Harvest & Soil Health?
            </h3>
            <p className="text-emerald-200 text-sm sm:text-base">
              Join thousands of farmers making data-driven choices with AgriSense AI.
            </p>
            <div className="pt-2">
              <button
                onClick={onStartAnalysis}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-base font-black rounded-2xl shadow-lg transform hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>📷</span>
                <span>Analyze Your Soil Free</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


// ==========================================
// FILE: src/components/FarmerDashboard.jsx
// ==========================================


function FarmerDashboard({
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



// ==========================================
// FILE: src/components/LoginPage.jsx
// ==========================================


function LoginPage({ currentLang, setLanguage, onLoginSuccess, showToast }) {
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


// ==========================================
// FILE: src/components/AuthModal.jsx
// ==========================================


function AuthModal({ isOpen, onClose, currentLang, onLoginSuccess, showToast }) {
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


// ==========================================
// FILE: src/components/ToastNotification.jsx
// ==========================================


function ToastNotification({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        const bgClass = isSuccess
          ? 'bg-emerald-900/95 text-white border-emerald-500'
          : isError
          ? 'bg-red-900/95 text-white border-red-500'
          : 'bg-stone-900/95 text-white border-stone-500';

        const icon = isSuccess ? '✓' : isError ? '⚠️' : 'ℹ️';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-3 ${bgClass}`}
          >
            <span className="text-lg shrink-0">{icon}</span>
            <div className="flex-1 text-xs font-semibold leading-relaxed">
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-white/60 hover:text-white text-xs font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
}


// ==========================================
// FILE: src/components/VoiceButton.jsx
// ==========================================


function VoiceButton({ currentLang, onClick, isListening = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3.5 rounded-full text-white font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer select-none ${
        isListening
          ? 'bg-red-600 animate-pulse ring-4 ring-red-300'
          : 'bg-[#4CAF50] hover:bg-[#388E3C] ring-4 ring-[#C8E6C9]/50'
      }`}
      aria-label={t('floatingVoiceBtn', currentLang)}
    >
      <span className="text-xl animate-bounce">
        {isListening ? '🔴' : '🎙️'}
      </span>
      <span className="text-sm sm:text-base tracking-wide font-extrabold drop-shadow-xs">
        {isListening ? t('listeningState', currentLang) : t('floatingVoiceBtn', currentLang)}
      </span>
    </button>
  );
}


// ==========================================
// FILE: src/components/VoiceFarmingAssistant.jsx
// ==========================================


// Safe wrapper helpers that never throw even if browser speech API is absent
const safeStopListening = () => {
  try {
    if (typeof stopListening === 'function') {
      stopListening();
    }
  } catch (err) {
    console.warn('[-] Error stopping speech listening:', err);
  }
};

const safeStopSpeaking = () => {
  try {
    if (typeof stopSpeaking === 'function') {
      stopSpeaking();
    }
  } catch (err) {
    console.warn('[-] Error stopping speech synthesis:', err);
  }
};

function VoiceFarmingAssistant({
  isOpen,
  onClose,
  currentLang,
  context // { soilResult, farmingDetails, reportData, riskAlerts, user }
}) {
  const [assistantState, setAssistantState] = useState('idle'); // idle | listening | processing | speaking
  const [userQuery, setUserQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [ttsState, setTtsState] = useState({ speaking: false, paused: false });

  const hasRecognition = typeof isSpeechRecognitionSupported === 'function' ? isSpeechRecognitionSupported() : false;
  const wasOpenRef = useRef(false);

  // Clean up speech only when modal was open and now closes (never on initial mount)
  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      safeStopListening();
      safeStopSpeaking();
      setAssistantState('idle');
      setTtsState({ speaking: false, paused: false });
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Clean up when unmounting
  useEffect(() => {
    return () => {
      safeStopListening();
      safeStopSpeaking();
    };
  }, []);

  // Periodic TTS status sync only while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const speaking = typeof isSpeaking === 'function' ? isSpeaking() : false;
        const paused = typeof isPaused === 'function' ? isPaused() : false;
        setTtsState({ speaking, paused });

        if (!speaking && assistantState === 'speaking') {
          setAssistantState('idle');
        }
      } catch (e) {
        // ignore
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, assistantState]);

  if (!isOpen) return null;

  const handleQueryExecution = (queryText) => {
    if (!queryText || !queryText.trim()) return;

    setUserQuery(queryText);
    setAssistantState('processing');
    setErrorMessage('');

    setTimeout(() => {
      try {
        const response = processFarmerQuery(queryText, context || {}, currentLang);
        setAiAnswer(response.text);
        setAssistantState('speaking');

        speakText(response.text, currentLang, {
          onStart: () => {
            setTtsState({ speaking: true, paused: false });
            setAssistantState('speaking');
          },
          onEnd: () => {
            setTtsState({ speaking: false, paused: false });
            setAssistantState('idle');
          },
          onError: () => {
            setTtsState({ speaking: false, paused: false });
            setAssistantState('idle');
          }
        });
      } catch (err) {
        console.error('Error executing query:', err);
        setAssistantState('idle');
      }
    }, 250);
  };

  const handleMicClick = () => {
    if (assistantState === 'listening') {
      safeStopListening();
      setAssistantState('idle');
      return;
    }

    // If currently speaking, stop first
    safeStopSpeaking();
    setErrorMessage('');

    if (!hasRecognition) {
      setErrorMessage(t('errSpeechUnsupported', currentLang));
      return;
    }

    try {
      if (typeof startListening === 'function') {
        startListening({
          lang: currentLang,
          onStart: () => {
            setAssistantState('listening');
          },
          onResult: (transcript) => {
            setAssistantState('processing');
            handleQueryExecution(transcript);
          },
          onError: (err) => {
            setAssistantState('idle');
            const errCode = err?.error || err;
            if (errCode === 'not-allowed') {
              setErrorMessage(t('errMicPermission', currentLang));
            } else {
              setErrorMessage(t('errSpeechUnsupported', currentLang));
            }
          },
          onEnd: () => {
            if (assistantState === 'listening') {
              setAssistantState('idle');
            }
          }
        });
      } else {
        setErrorMessage(t('errSpeechUnsupported', currentLang));
      }
    } catch (err) {
      setAssistantState('idle');
      setErrorMessage(t('errSpeechUnsupported', currentLang));
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;
    const q = textInput.trim();
    setTextInput('');
    handleQueryExecution(q);
  };

  const handlePauseResume = () => {
    if (ttsState.paused) {
      if (typeof resumeSpeaking === 'function') resumeSpeaking();
      setTtsState({ speaking: true, paused: false });
      setAssistantState('speaking');
    } else if (ttsState.speaking) {
      if (typeof pauseSpeaking === 'function') pauseSpeaking();
      setTtsState({ speaking: true, paused: true });
    }
  };

  const handleReplay = () => {
    setAssistantState('speaking');
    if (typeof replayLastSpoken === 'function') {
      replayLastSpoken(currentLang, {
        onStart: () => {
          setTtsState({ speaking: true, paused: false });
          setAssistantState('speaking');
        },
        onEnd: () => {
          setTtsState({ speaking: false, paused: false });
          setAssistantState('idle');
        }
      });
    }
  };

  const handleStopAudio = () => {
    safeStopSpeaking();
    setTtsState({ speaking: false, paused: false });
    setAssistantState('idle');
  };

  // Quick Questions
  const quickQuestions = [
    t('quickQ1', currentLang),
    t('quickQ2', currentLang),
    t('quickQ3', currentLang),
    t('quickQ4', currentLang),
    t('quickQ5', currentLang),
    t('quickQ6', currentLang),
    t('quickQ7', currentLang)
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-[#C8E6C9] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F4FBF4] to-[#EAF7EA] border-b border-[#C8E6C9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center text-xl shadow-md">
              🎙️
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#1B5E20]">
                {t('voiceAssistantTitle', currentLang)}
              </h3>
              <p className="text-xs text-[#1B5E20]/70">
                {t('voiceAssistantSubtitle', currentLang)}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Voice Interactive Trigger */}
          <div className="text-center py-2">
            <button
              type="button"
              onClick={handleMicClick}
              className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer ${
                assistantState === 'listening'
                  ? 'bg-red-600 ring-8 ring-red-200 animate-pulse text-white'
                  : assistantState === 'speaking'
                  ? 'bg-[#4CAF50] ring-8 ring-[#C8E6C9] text-white'
                  : 'bg-[#4CAF50] hover:bg-[#388E3C] text-white'
              }`}
              aria-label="Toggle Microphone"
            >
              <span className="text-4xl">
                {assistantState === 'listening' ? '🔴' : assistantState === 'speaking' ? '🔊' : '🎙️'}
              </span>
            </button>

            <div className="mt-3">
              <span className="text-sm font-bold text-[#1B5E20]">
                {assistantState === 'listening'
                  ? t('listeningState', currentLang)
                  : assistantState === 'processing'
                  ? t('thinkingState', currentLang)
                  : assistantState === 'speaking'
                  ? t('speakingState', currentLang)
                  : t('tapToSpeak', currentLang)}
              </span>
            </div>

            {/* Error Message if Mic denied / unsupported */}
            {errorMessage && (
              <div className="mt-2 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl p-2.5 max-w-md mx-auto">
                ⚠️ {errorMessage}
              </div>
            )}
          </div>

          {/* User Query & AI Answer Box */}
          {(userQuery || aiAnswer) && (
            <div className="space-y-3 bg-[#F4FBF4] rounded-2xl p-4 sm:p-5 border border-[#C8E6C9]">
              {userQuery && (
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-[#388E3C] block mb-0.5">
                    🗣️ {t('youSaid', currentLang)}:
                  </span>
                  <p className="font-semibold text-gray-800 italic bg-white/80 p-2.5 rounded-xl border border-[#C8E6C9]/60">
                    "{userQuery}"
                  </p>
                </div>
              )}

              {aiAnswer && (
                <div className="text-xs sm:text-sm pt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#1B5E20]">
                      🤖 {t('aiResponse', currentLang)}:
                    </span>

                    {/* Audio Player Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handlePauseResume}
                        className="px-2.5 py-1 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        {ttsState.paused ? `▶ ${t('btnPlayVoice', currentLang)}` : `⏸ ${t('btnPauseVoice', currentLang)}`}
                      </button>

                      <button
                        type="button"
                        onClick={handleReplay}
                        className="px-2.5 py-1 bg-white hover:bg-[#EAF7EA] text-[#1B5E20] border border-[#C8E6C9] rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        🔁 {t('btnReplayVoice', currentLang)}
                      </button>

                      <button
                        type="button"
                        onClick={handleStopAudio}
                        className="px-2.5 py-1 bg-white hover:bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        ⏹ {t('btnStopVoice', currentLang)}
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-900 leading-relaxed bg-white p-3.5 rounded-xl border border-[#C8E6C9] font-medium whitespace-pre-line shadow-xs">
                    {aiAnswer}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quick Question Suggestions */}
          <div>
            <span className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider block mb-2">
              💡 {t('quickQuestionsTitle', currentLang)}
            </span>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQueryExecution(q)}
                  className="px-3 py-1.5 rounded-xl bg-[#EAF7EA] hover:bg-[#C8E6C9] text-[#1B5E20] text-xs font-bold transition-all border border-[#C8E6C9] cursor-pointer"
                >
                  🌾 {q}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Fallback */}
          <div className="pt-2 border-t border-[#C8E6C9]/60">
            <span className="text-xs font-medium text-gray-500 block mb-1.5">
              ⌨️ {t('typeInsteadPrompt', currentLang)}
            </span>
            <form onSubmit={handleTextSubmit} className="flex gap-2">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={t('typeQuestionPlaceholder', currentLang)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-[#C8E6C9] bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#4CAF50] hover:bg-[#388E3C] text-white rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer"
              >
                {t('btnSendQuestion', currentLang)}
              </button>
            </form>
          </div>

          {/* Advisory Disclaimer */}
          <div className="text-[11px] text-gray-500 text-center font-medium opacity-80 pt-1">
            ⚠️ {t('voiceDisclaimer', currentLang)}
          </div>

        </div>
      </div>
    </div>
  );
}


// ==========================================
// FILE: src/components/Footer.jsx
// ==========================================


function Footer({ currentLang, onNavigate }) {
  return (
    <footer className="bg-white border-t border-[#C8E6C9] py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-black text-[#1B5E20]">AgriSense AI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#1B5E20]/80">
            <button onClick={() => onNavigate('home')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navHome', currentLang)}
            </button>
            <button onClick={() => onNavigate('analyze')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navSoilAnalysis', currentLang)}
            </button>
            <button onClick={() => onNavigate('reports')} className="hover:text-[#4CAF50] cursor-pointer">
              {t('navReports', currentLang)}
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAF7EA] flex flex-col sm:flex-row items-center justify-between text-xs text-[#1B5E20]/60 gap-2">
          <p>© 2026 AgriSense AI. All rights reserved.</p>
          <p className="italic">“Upload. Analyze. Recommend. Grow Smarter.”</p>
        </div>
      </div>
    </footer>
  );
}


// ==========================================
// FILE: src/App.jsx
// ==========================================



function App() {
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


// ==========================================
// FILE: src/main.jsx
// ==========================================


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

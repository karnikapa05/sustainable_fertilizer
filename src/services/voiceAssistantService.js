import { getLocalizedSoilName, getLocalizedCropName, getLocalizedFertilizerName, t } from '../locales/index.js';

/**
 * Intelligent Context-Aware Voice Farming Assistant Service
 * Generates natural, farmer-friendly answers in 6 languages using real-time analysis,
 * crop recommendations, fertilizer calculations, and active risk alerts.
 */

export function processFarmerQuery(arg1, arg2, arg3) {
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


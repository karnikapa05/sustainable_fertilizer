import { en } from './en.js';
import { ta } from './ta.js';
import { hi } from './hi.js';
import { te } from './te.js';
import { ml } from './ml.js';
import { kn } from './kn.js';

export const translations = {
  en,
  ta,
  hi,
  te,
  ml,
  kn
};

export const supportedLanguages = [
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
export function t(key, lang = 'en') {
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
export function getLocalizedSoilName(soilKey, lang = 'en') {
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
export function getLocalizedCondition(condition, lang = 'en') {
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
export function getLocalizedFertilizerName(fertId, lang = 'en') {
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
export function getLocalizedCropName(cropId, defaultName, lang = 'en') {
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
export function getLocalizedSeason(seasonKey, lang = 'en') {
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
export function getLocalizedIrrigation(irrigationKey, lang = 'en') {
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
export function getLocalizedState(stateName, lang = 'en') {
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
export function getLocalizedFrequency(fertId, defaultFreq, lang = 'en') {
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
export function getLocalizedCropDetails(cropId, field, defaultVal, lang = 'en') {
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
export function getLocalizedErrorMessage(errorCode, lang = 'en') {
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
export function getLocalizedWelcome(name, lang = 'en') {
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
export function getLocalizedAuthError(errorCode, lang = 'en') {
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


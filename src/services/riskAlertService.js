import { soilArchetypes } from '../data/soilDatabase.js';

// Crop suitability mapping across soil types for cross-checking intended crops
export const cropSuitabilityMatrix = {
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
export function normalizeCropKey(cropName) {
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
export function evaluateRiskAlerts(soilResult, farmingDetails = {}, reportData = null) {
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

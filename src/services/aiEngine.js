import { soilArchetypes } from '../data/soilDatabase.js';

/**
 * Real Machine Learning Soil Computer Vision Classification
 * Sends the uploaded soil image to the backend ML inference API (POST /api/analyze-soil/).
 * Strictly checks image suitability, blur, non-soil artifacts, and confidence threshold.
 */
export async function analyzeSoilImage(imageSource) {
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
export async function fetchModelInfo() {
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

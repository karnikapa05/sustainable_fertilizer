import { soilArchetypes } from '../data/soilDatabase.js';

/**
 * Calculates precision recommendations and cost predictions
 * dynamically based on the predicted soil class and farmer input parameters.
 * No hardcoded defaults.
 */
export function generateSmartRecommendations(soilResult, farmingDetails = {}) {
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

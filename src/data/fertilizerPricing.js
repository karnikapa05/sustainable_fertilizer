// Fertilizer pricing calibrated for Indian agricultural economics
export const fertilizerPrices = {
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

export const pricingMetadata = {
  lastUpdated: "September 2026",
  currencySymbol: "₹",
  currencyCode: "INR",
  priceSource: "Department of Fertilizers, Govt. of India & State Cooperative Marketing Federations",
  disclaimer: "Prices may vary based on location, supplier, season, transport charges, and prevailing market conditions."
};

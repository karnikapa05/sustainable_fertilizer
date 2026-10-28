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

export function getSavedReports() {
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

export function saveReportToCloud(report) {
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

export function deleteSavedReport(reportId) {
  const reports = getSavedReports().filter((r) => r.id !== reportId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.error("Storage delete error", err);
  }
  return reports;
}

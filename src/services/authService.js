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
export function hashPassword(str) {
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

export function getRegisteredUsers() {
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

export function saveRegisteredUsers(users) {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.warn('Could not persist users:', e);
  }
}

/**
 * Authenticate user with Name, Email, and Password
 */
export function loginUser({ name, email, password, language = 'en' }) {
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
export function registerUser({ name, email, password, confirmPassword, language = 'en' }) {
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
export function resetPasswordUser({ email, newPassword }) {
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
export function getCurrentUser() {
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
export function logoutUser() {
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem(SESSION_TOKEN_KEY);
  } catch (e) {
    console.warn('Error clearing session:', e);
  }
}

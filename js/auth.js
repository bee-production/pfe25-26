// ============================================
// PFE25-26 Platform - Authentication
// ============================================

// Credentials (For demo - in production, use proper backend auth)
const VALID_CREDENTIALS = {
  username: 'ougo',
  password: 'gobji12'
};

// Session key
const SESSION_KEY = 'pfe_admin_session';

// Check if already logged in
document.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    window.location.href = 'dashboard.html';
  }
  
  setupLoginForm();
});

// Check login status
function isLoggedIn() {
  const session = sessionStorage.getItem(SESSION_KEY);
  return session === 'authenticated';
}

// Setup login form
function setupLoginForm() {
  const form = document.getElementById('login-form');
  const errorDiv = document.getElementById('login-error');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (validateCredentials(username, password)) {
      // Set session
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
      
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Show error
      errorDiv.classList.add('show');
      
      // Shake animation
      setTimeout(() => {
        errorDiv.classList.remove('show');
      }, 3000);
      
      // Clear password field
      document.getElementById('password').value = '';
    }
  });
}

// Validate credentials
function validateCredentials(username, password) {
  return username === VALID_CREDENTIALS.username && 
         password === VALID_CREDENTIALS.password;
}

// Logout function (used by dashboard)
function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = 'admin.html';
}

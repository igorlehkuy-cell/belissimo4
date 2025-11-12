// Authentication Management
(function() {
    'use strict';
    
    // Check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem('bellissimo-logged-in') === 'true';
    }
    
    // Check if user is registered
    function isRegistered() {
        return localStorage.getItem('bellissimo-registered') === 'true';
    }
    
    // Get current user
    function getCurrentUser() {
        const userData = localStorage.getItem('bellissimo-current-user');
        return userData ? JSON.parse(userData) : null;
    }
    
    // Logout
    function logout() {
        localStorage.removeItem('bellissimo-logged-in');
        localStorage.removeItem('bellissimo-current-user');
        window.location.href = 'login.html';
    }
    
    // Require auth for protected pages
    function requireAuth() {
        if (!isLoggedIn()) {
            if (!isRegistered()) {
                window.location.href = 'register.html';
            } else {
                window.location.href = 'login.html';
            }
        }
    }
    
    // Export functions
    window.auth = {
        isLoggedIn: isLoggedIn,
        isRegistered: isRegistered,
        getCurrentUser: getCurrentUser,
        logout: logout,
        requireAuth: requireAuth
    };
})();


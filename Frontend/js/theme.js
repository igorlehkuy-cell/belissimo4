// Theme Management
(function() {
    const themeKey = 'bellissimo-theme';
    
    // Get saved theme or default to light
    function getTheme() {
        return localStorage.getItem(themeKey) || 'light';
    }
    
    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
        
        // Update theme selector if exists
        const themeSelect = document.getElementById('theme');
        if (themeSelect) {
            themeSelect.value = theme === 'dark' ? 'Темна' : 'Світла';
        }
    }
    
    // Initialize theme on page load
    function initTheme() {
        const savedTheme = getTheme();
        setTheme(savedTheme);
    }
    
    // Apply theme change
    function applyTheme(themeValue) {
        const theme = themeValue === 'dark' || themeValue === 'Темна' ? 'dark' : 'light';
        setTheme(theme);
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initTheme();
            setupThemeListener();
        });
    } else {
        initTheme();
        setupThemeListener();
    }
    
    // Setup theme change listener
    function setupThemeListener() {
        const themeSelect = document.getElementById('theme');
        if (themeSelect) {
            // Set initial value
            const currentTheme = getTheme();
            themeSelect.value = currentTheme;
            
            // Listen for changes
            themeSelect.addEventListener('change', function(e) {
                applyTheme(e.target.value);
            });
        }
    }
    
    // Export functions for global use
    window.themeManager = {
        setTheme: setTheme,
        getTheme: getTheme,
        applyTheme: applyTheme
    };
})();


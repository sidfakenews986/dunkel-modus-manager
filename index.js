class DarkModeManager {
    constructor() {
        this.isDarkMode = false;
        this.init();
    }

    init() {
        this.loadSettings();
        this.setupListeners();
    }

    loadSettings() {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode = localStorage.getItem('darkMode') === 'true' || userPrefersDark;
        this.applyTheme();
    }

    setupListeners() {
        const toggleButton = document.getElementById('toggle-dark-mode'); // Updated button ID
        if (toggleButton) { // Check if the toggle button exists
            toggleButton.addEventListener('click', () => this.toggleDarkMode());
        }
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyTheme();
    }

    applyTheme() {
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

export { DarkModeManager };
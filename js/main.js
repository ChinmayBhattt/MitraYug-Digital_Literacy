// Accessibility Features
document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themes = ['light', 'dark', 'high-contrast'];
    let currentThemeIndex = 0;

    // Theme Toggle
    const contrastToggle = document.getElementById('contrastToggle');
    contrastToggle.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        const icon = this.querySelector('i');
        icon.className = newTheme === 'light' ? 'fas fa-sun' : 
                        newTheme === 'dark' ? 'fas fa-moon' : 
                        'fas fa-adjust';
    });

    // Font Size Toggle
    const fontSizeToggle = document.getElementById('fontSizeToggle');
    fontSizeToggle.addEventListener('click', function() {
        document.body.classList.toggle('large-text');
        localStorage.setItem('largeText', document.body.classList.contains('large-text'));
    });

    // Voice Assistance
    const voiceToggle = document.getElementById('voiceToggle');
    let isVoiceEnabled = false;
    let speech = new SpeechSynthesisUtterance();

    voiceToggle.addEventListener('click', function() {
        isVoiceEnabled = !isVoiceEnabled;
        if (isVoiceEnabled) {
            // Enable voice assistance
            document.addEventListener('click', readText);
            voiceToggle.classList.add('active');
        } else {
            // Disable voice assistance
            document.removeEventListener('click', readText);
            voiceToggle.classList.remove('active');
            window.speechSynthesis.cancel();
        }
    });

    // Function to read text when clicked
    function readText(event) {
        if (event.target.tagName === 'P' || event.target.tagName === 'H1' || 
            event.target.tagName === 'H2' || event.target.tagName === 'H3' || 
            event.target.tagName === 'H4' || event.target.tagName === 'A') {
            
            const text = event.target.textContent;
            speech.text = text;
            window.speechSynthesis.speak(speech);
        }
    }

    // Language Toggle
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'hi' : 'en';
            setCurrentLanguage(newLang);
        });
    }

    // Load saved preferences
    function loadPreferences() {
        // Load theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        currentThemeIndex = themes.indexOf(savedTheme);

        // Load font size preference
        const savedLargeText = localStorage.getItem('largeText');
        if (savedLargeText === 'true') {
            document.body.classList.add('large-text');
        }

        // Load language preference
        const savedLang = localStorage.getItem('language') || 'en';
        document.documentElement.lang = savedLang;
        updatePageContent();
    }

    // Initialize preferences
    loadPreferences();

    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Add focus styles for better accessibility
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });

    // Add smooth scrolling for better accessibility
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add ARIA labels to topic cards
    document.querySelectorAll('.topic-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        card.setAttribute('aria-label', `Learn about ${title}`);
    });
}); 
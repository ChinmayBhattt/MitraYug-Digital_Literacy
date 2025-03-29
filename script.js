document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const lightModeBtn = document.getElementById("light-mode");
    const darkModeBtn = document.getElementById("dark-mode");
    const searchInput = document.getElementById("searchInput");
    const topicsList = document.getElementById("topicsList");
    const topics = topicsList ? topicsList.getElementsByClassName("topic") : [];

    // Toggle dropdown menu
    settingsBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Theme handling
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    // Theme button click handlers
    lightModeBtn.addEventListener('click', () => {
        setTheme('light');
        dropdownMenu.classList.remove('show');
    });

    darkModeBtn.addEventListener('click', () => {
        setTheme('dark');
        dropdownMenu.classList.remove('show');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Search Functionality for Topics Page
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = searchInput.value.toLowerCase();

            for (let i = 0; i < topics.length; i++) {
                let topicText = topics[i].textContent.toLowerCase();
                topics[i].style.display = topicText.includes(filter) ? "block" : "none";
            }
        });
    }
});

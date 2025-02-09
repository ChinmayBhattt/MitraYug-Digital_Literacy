document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.getElementById("settings-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const lightModeBtn = document.getElementById("light-mode");
    const darkModeBtn = document.getElementById("dark-mode");
    const searchInput = document.getElementById("searchInput");
    const topicsList = document.getElementById("topicsList");
    const topics = topicsList ? topicsList.getElementsByClassName("topic") : [];

    // Show/hide dropdown menu
    if (settingsBtn) {
        settingsBtn.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show");
        });
    }

    // Apply stored theme on page load
    function applyTheme() {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
    applyTheme(); // Apply theme when page loads

    // Light Mode
    if (lightModeBtn) {
        lightModeBtn.addEventListener("click", function () {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        });
    }

    // Dark Mode
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        });
    }

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

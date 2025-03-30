document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('topicSearch');
    const topicCards = document.querySelectorAll('.topic-card');
    const topicCategories = document.querySelectorAll('.topic-category');

    // Function to filter topics based on search input
    function filterTopics(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        let hasVisibleTopics = false;

        topicCategories.forEach(category => {
            const cards = category.querySelectorAll('.topic-card');
            let categoryHasVisibleCards = false;

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.getAttribute('data-translate') || '';
                
                if (title.includes(searchTerm) || description.toLowerCase().includes(searchTerm)) {
                    card.style.display = 'flex';
                    categoryHasVisibleCards = true;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show/hide category based on visible cards
            category.style.display = categoryHasVisibleCards ? 'block' : 'none';
            hasVisibleTopics = hasVisibleTopics || categoryHasVisibleCards;
        });

        // Show/hide "No results" message
        const noResultsMessage = document.querySelector('.no-results');
        if (!hasVisibleTopics) {
            if (!noResultsMessage) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.setAttribute('data-translate', 'noResults');
                message.textContent = 'No topics found matching your search.';
                document.querySelector('.topics-grid').appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    // Add event listener for search input
    searchInput.addEventListener('input', function(e) {
        filterTopics(e.target.value);
    });

    // Add keyboard navigation for search results
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const visibleCards = document.querySelectorAll('.topic-card[style="display: flex;"]');
            if (visibleCards.length === 1) {
                visibleCards[0].click();
            }
        }
    });

    // Add focus styles for search input
    searchInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });

    // Add loading state for topic cards
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('loading');
        });
    });

    // Initialize search with empty string to show all topics
    filterTopics('');
}); 
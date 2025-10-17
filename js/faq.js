/**
 * FAQ Page JavaScript
 * Handles FAQ accordion and category filtering
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeFAQAccordion();
    initializeFAQCategories();
});

/**
 * Initialize FAQ accordion functionality
 */
function initializeFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Toggle active class
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

/**
 * Initialize FAQ category filtering
 */
function initializeFAQCategories() {
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const categoryContents = document.querySelectorAll('.faq-category-content');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            categoryContents.forEach(content => {
                const contentCategory = content.getAttribute('data-category');
                if (contentCategory === category) {
                    content.style.display = 'block';
                    // Animate in
                    content.style.animation = 'fadeIn 0.3s ease-out';
                } else {
                    content.style.display = 'none';
                }
            });
            
            // Close all accordions when switching categories
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    });
}

/**
 * Search FAQ items (optional feature)
 */
function searchFAQ(searchTerm) {
    const faqItems = document.querySelectorAll('.faq-item');
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3');
        const answer = item.querySelector('.faq-answer p');
        
        if (question && answer) {
            const questionText = question.textContent.toLowerCase();
            const answerText = answer.textContent.toLowerCase();
            
            if (questionText.includes(lowerSearchTerm) || answerText.includes(lowerSearchTerm)) {
                item.style.display = 'block';
                
                // Highlight search term (optional)
                if (searchTerm.length > 0) {
                    item.classList.add('search-match');
                }
            } else {
                item.style.display = 'none';
            }
        }
    });
}

/**
 * Expand all FAQ items
 */
function expandAllFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.add('active');
    });
}

/**
 * Collapse all FAQ items
 */
function collapseAllFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.remove('active');
    });
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchFAQ,
        expandAllFAQ,
        collapseAllFAQ
    };
}
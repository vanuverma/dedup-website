/**
 * Main JavaScript for DeDup Website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDonateButtons();
    initializeModal();
    initializeDownloadButtons();
    initializeSmoothScroll();
});

/**
 * Initialize all donate buttons
 */
function initializeDonateButtons() {
    const donateButtons = [
        document.getElementById('donate-btn'),
        document.getElementById('footer-donate-btn'),
        document.getElementById('support-donate-btn'),
        document.getElementById('contact-donate-btn')
    ];

    donateButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openDonationModal();
            });
        }
    });
}

/**
 * Initialize modal functionality
 */
function initializeModal() {
    const modal = document.getElementById('donation-modal');
    
    if (!modal) return;

    // Close modal when clicking on X
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeDonationModal();
        };
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeDonationModal();
        }
    };

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeDonationModal();
        }
    });
}

/**
 * Initialize download buttons with tracking
 */
function initializeDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // e.preventDefault();
            const platform = this.getAttribute('data-platform');
            handleDownload(platform);
        });
    });
}

/**
 * Handle download action
 */
function handleDownload(platform) {
    // Track download (you can integrate with analytics here)
    console.log(`Download initiated for platform: ${platform}`);
    
    // Show download message
    showDownloadMessage(platform);
    
    // In a real implementation, this would trigger the actual download
    // window.location.href = `/downloads/unique-file-organizer-${platform}.exe`;
}

/**
 * Show download message
 */
function showDownloadMessage(platform) {
    // Create a temporary message element
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    message.innerHTML = `
        <strong>Download Started!</strong><br>
        <small>Platform: ${platform}</small>
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Track page views (integrate with your analytics)
 */
function trackPageView() {
    // Example: Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: window.location.pathname
        });
    }
    
    // Example: Custom analytics
    console.log('Page view:', window.location.pathname);
}

/**
 * Track events (integrate with your analytics)
 */
function trackEvent(category, action, label) {
    // Example: Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Example: Custom analytics
    console.log('Event:', category, action, label);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Track page view on load
trackPageView();
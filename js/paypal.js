/**
 * PayPal Integration for DeDup
 * This file handles PayPal donation button integration
 */

// PayPal configuration
const PAYPAL_CONFIG = {
    // Replace with your actual PayPal client ID
    clientId: 'YOUR_PAYPAL_CLIENT_ID_HERE',
    currency: 'USD',
    // Set to 'production' when going live
    environment: 'sandbox' // Change to 'production' for live
};

/**
 * Initialize PayPal button
 */
function initializePayPalButton() {
    // Check if PayPal SDK is loaded
    if (typeof paypal === 'undefined') {
        console.error('PayPal SDK not loaded. Please include the PayPal SDK script.');
        return;
    }

    // Render PayPal button
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'donate'
        },
        
        createOrder: function(data, actions) {
            // Set up the transaction
            return actions.order.create({
                purchase_units: [{
                    description: 'Donation to DeDup',
                    amount: {
                        currency_code: PAYPAL_CONFIG.currency,
                        value: '5.00', // Default donation amount
                        breakdown: {
                            item_total: {
                                currency_code: PAYPAL_CONFIG.currency,
                                value: '5.00'
                            }
                        }
                    }
                }]
            });
        },
        
        onApprove: function(data, actions) {
            // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
                // Show success message
                showDonationSuccess(details);
            });
        },
        
        onError: function(err) {
            // Show error message
            console.error('PayPal error:', err);
            showDonationError();
        },
        
        onCancel: function(data) {
            // User cancelled the payment
            console.log('Payment cancelled by user');
            closeDonationModal();
        }
    }).render('#paypal-button-container');
}

/**
 * Show donation success message
 */
function showDonationSuccess(details) {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <div style="text-align: center; padding: 2rem 0;">
                <div style="font-size: 4rem; color: #10b981; margin-bottom: 1rem;">✓</div>
                <h2 style="color: #10b981; margin-bottom: 1rem;">Thank You!</h2>
                <p style="margin-bottom: 1rem;">Your donation has been received successfully.</p>
                <p style="color: #64748b; font-size: 0.875rem;">Transaction ID: ${details.id}</p>
                <button onclick="closeDonationModal()" class="btn btn-primary" style="margin-top: 2rem;">Close</button>
            </div>
        `;
        
        // Re-attach close button event
        const closeBtn = modalContent.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = closeDonationModal;
        }
    }
}

/**
 * Show donation error message
 */
function showDonationError() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <div style="text-align: center; padding: 2rem 0;">
                <div style="font-size: 4rem; color: #ef4444; margin-bottom: 1rem;">✗</div>
                <h2 style="color: #ef4444; margin-bottom: 1rem;">Payment Failed</h2>
                <p style="margin-bottom: 1rem;">There was an error processing your donation.</p>
                <p style="color: #64748b; font-size: 0.875rem;">Please try again later.</p>
                <button onclick="closeDonationModal()" class="btn btn-primary" style="margin-top: 2rem;">Close</button>
            </div>
        `;
        
        // Re-attach close button event
        const closeBtn = modalContent.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = closeDonationModal;
        }
    }
}

/**
 * Open donation modal
 */
function openDonationModal() {
    const modal = document.getElementById('donation-modal');
    if (modal) {
        modal.classList.add('show');
        
        // Initialize PayPal button if not already initialized
        const container = document.getElementById('paypal-button-container');
        if (container && container.innerHTML === '') {
            initializePayPalButton();
        }
    }
}

/**
 * Close donation modal
 */
function closeDonationModal() {
    const modal = document.getElementById('donation-modal');
    if (modal) {
        modal.classList.remove('show');
        
        // Reset modal content after a delay
        setTimeout(() => {
            const modalContent = document.querySelector('.modal-content');
            if (modalContent) {
                modalContent.innerHTML = `
                    <span class="close">&times;</span>
                    <h2>Support Development</h2>
                    <p>Your donation helps keep this project free and actively maintained. Thank you for your support!</p>
                    <div id="paypal-button-container"></div>
                `;
                
                // Re-attach close button event
                const closeBtn = modalContent.querySelector('.close');
                if (closeBtn) {
                    closeBtn.onclick = closeDonationModal;
                }
            }
        }, 300);
    }
}

/**
 * Alternative: Direct PayPal donation link
 * Use this if you prefer a simple PayPal.me link or hosted button
 */
function openPayPalDonation() {
    // Replace with your PayPal.me link or hosted button URL
    const paypalUrl = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID';
    window.open(paypalUrl, '_blank');
}

/**
 * Load PayPal SDK dynamically
 */
function loadPayPalSDK() {
    // Check if SDK is already loaded
    if (typeof paypal !== 'undefined') {
        return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CONFIG.clientId}&currency=${PAYPAL_CONFIG.currency}`;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openDonationModal,
        closeDonationModal,
        openPayPalDonation,
        loadPayPalSDK
    };
}
// Main Application Script
import { triggerAlert } from './alert.js';
import { initializeSidebar } from './sidebar.js';
import { initializeDashboard } from './dashboard.js';

// Initialize application components
function initializeApp() {
    initializeSidebar();
    initializeDashboard();
    setupRealTimeAlerts();
}

function setupRealTimeAlerts() {
    setInterval(() => {
        const randomValue = Math.random();
        
        if (randomValue > 0.97) {
            triggerAlert();
            updateActivityList();
        }
    }, 5000);
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

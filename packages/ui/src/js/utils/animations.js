/* eslint-disable import/prefer-default-export */
const isVisible = el => {
    if (typeof el === 'undefined' || el === null) { return false; }
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
};

export function slideDown(el, duration = 1000, display = 'block') {
    // Return if the element is visible
    if (isVisible(el) === true) {
        return;
    }
    // Set default values for parameters
    duration = duration || 1000;
    display = display || 'block';
    // Display the element
    el.style.display = display;
    // Create variables
    let start = null;
    const height = el.offsetHeight;
    const overflow = el.style.overflow;
    // Set height and hide overflow
    el.style.height = '0';
    el.style.overflow = 'hidden';
    // Run animation
    function run(timestamp) {
        // Set start time
        if (!start) start = timestamp;
        // Calculate progress
        const progress = height * ((timestamp - start) / duration);
        // Set element height
        el.style.height = `${Math.min(progress, height)}px`;
        // Check if the animation should end
        if (progress < height) {
            window.requestAnimationFrame(run);
        } else {
            // Reset element
            el.style.height = '';
            el.style.overflow = overflow;
        }
    }
    // Start animation
    window.requestAnimationFrame(run);
}

export function slideUp(el, duration) {
    // Return if the element not is visible
    if (isVisible(el) === false) {
        return;
    }
    // Set default values for parameters
    duration = duration || 1000;
    // Create variables
    let start = null;
    const height = el.offsetHeight;
    const overflow = el.style.overflow;
    // Hide overflow
    el.style.overflow = 'hidden';
    // Run animation
    function run(timestamp) {
        // Set start time
        if (!start) start = timestamp;
        // Calculate progress
        const progress = height - (height * ((timestamp - start) / duration));
        // Set element height
        el.style.height = `${Math.max(progress, 0)}px`;
        // Check if the animation should end
        if (progress > 0) {
            window.requestAnimationFrame(run);
        } else {
            // Reset element
            el.style.display = 'none';
            el.style.height = '';
            el.style.overflow = overflow;
        }
    }
    // Start animation
    window.requestAnimationFrame(run);
}

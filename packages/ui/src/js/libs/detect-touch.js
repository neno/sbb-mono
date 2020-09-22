document.documentElement.classList.add('no-touchdevice');

const setHasTouch = () => {
    document.documentElement.classList.add('touchdevice');
    document.documentElement.classList.remove('no-touchdevice');

    // Remove event listener once fired, otherwise it'll kill scrolling performance
    window.removeEventListener('touchstart', setHasTouch);
};

window.addEventListener('touchstart', setHasTouch, false);

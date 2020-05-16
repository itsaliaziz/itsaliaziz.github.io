function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if (isMobileDevice()) {
    document.querySelector('.slider-c span').style.display = 'block';
}else {
    document.querySelector('.slider-c span').style.display = 'none';
}
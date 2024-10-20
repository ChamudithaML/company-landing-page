// Language Switcher
const languageDropdown = document.getElementById('language-dropdown');

languageDropdown.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === 'en') {
        console.log('Language switched to English');
    } else if (selectedLanguage === 'es') {
        console.log('Language switched to Spanish');
    }
});

// Hamburger Menu
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    console.log("Clicked")
});

// Latest news swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.pagination-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

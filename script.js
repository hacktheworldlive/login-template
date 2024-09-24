document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById('themeButton');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    applyTheme(currentTheme);

    themeButton.addEventListener('click', function() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });
});


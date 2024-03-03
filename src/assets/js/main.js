function switchThemeMode() {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
}


const headerMain = document.getElementById('header-main');
const headerMainMenu = document.getElementById('header-main-menu');

const burgerBtn = document.getElementById('burgerBtn');
const burgerIcon = document.getElementById('burgerIcon');
const crossIcon = document.getElementById('crossIcon');

burgerBtn.addEventListener('click', () => {
    burgerIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
    headerMainMenu.classList.toggle('opened');
    headerMain.classList.toggle('menu_opened');
});

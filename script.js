let show = true;
const menuContent = document.querySelector('.header-first-section');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;
});
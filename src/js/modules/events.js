const $btnOpenMenu = document.querySelector(".header__button-menu");
const $btnCloseMenu = document.querySelector(".aside-menu__button-close");


$btnOpenMenu.addEventListener('click', toggleMenu);
$btnCloseMenu.addEventListener('click', toggleMenu);
window.addEventListener("resize", resizeHandler);

function toggleMenu(event) {
    switch (event.currentTarget) {
        case $btnOpenMenu:
            window.scrollTo({
                left: 0,
                top: 0
            });
            document.querySelector(".aside-menu").classList.remove("slide-out");
            document.querySelector(".fade").classList.remove("hidden");
            document.body.classList.add("fixed");
            break;
        case $btnCloseMenu:
            window.scrollTo({
                left: 0,
                top: 0
            });
            document.querySelector(".aside-menu").classList.add("slide-out");
            document.querySelector(".fade").classList.add("hidden");
            document.body.classList.remove("fixed");
            break;
    }
}
function resizeHandler(event) {
    if (document.documentElement.clientWidth > 900) {
        toggleMenu({
            currentTarget: $btnCloseMenu
        });
    }
}
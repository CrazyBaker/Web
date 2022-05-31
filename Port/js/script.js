const humburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click',() => {
    menu.classList.add('active');
});

closeElem.addEventListener('click',() => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.experience__item-percent');
const lines = document.querySelectorAll('.experience__item-complete');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
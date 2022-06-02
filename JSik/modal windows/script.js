const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeWindowBtn = document.querySelector('.close-modal-window');
const showWindowBtn = document.querySelectorAll('.show-modal-window');

for (let i = 0; i < showWindowBtn.length; i++) {
    showWindowBtn[i].addEventListener('click', showWindow);
    console.log(showWindowBtn[i].textContent);
}

function showWindow () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeWindow() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeWindowBtn.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'Escape') {
        closeWindow();
    }
});
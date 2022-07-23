const xmark = document.getElementById('xmark');
const bars = document.getElementById('bars');
const menu = document.getElementById('menu');

if(bars) {
    bars.addEventListener('click', () => {
        menu.classList.add('active');
    });
}

if(xmark) {
    xmark.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}
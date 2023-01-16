const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('.main');

main.addEventListener('click', () => {
    let options = document.querySelector('.options');

    if (options.style.visibility === "visible") {
        options.setAttribute('style', 'visibility: hidden');

    } else {
        options.setAttribute('style', 'visibility: visible');

    }
})


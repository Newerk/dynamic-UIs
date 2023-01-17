const main = document.querySelector('.main');
let choices = document.querySelectorAll('.choices');
let currentPage = main.textContent;

main.addEventListener('click', () => {
    if (document.querySelector('.choices').style.visibility === 'visible') {
        closeMenu()
    } else {

        choices.forEach(element => {
            element.setAttribute('style', 'visibility: visible; height: 3rem; font-size: 1rem;')
            element.addEventListener('click', swapText);
        });
    }
})

function closeMenu() {
    choices.forEach(element => {
        element.setAttribute('style', 'visibility: hidden; height: 0; font-size: 0;');
    });
}

function swapText(event) {
    let clickedPage = event.target.textContent;
    event.target.textContent = main.textContent;
    main.textContent = clickedPage;
    closeMenu();
}
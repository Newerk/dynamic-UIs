const more = document.getElementById('more');
const content = document.querySelector('.content');
const extra = document.getElementById('extra');
const navBar = document.querySelector('.nav-bar');

more.addEventListener('click', function () {
    if (extra.style.visibility !== 'visible') {
        show()
    } else {
        hide()
    }
})

extra.childNodes.forEach(el => {
    el.addEventListener('click', hide)
})

navBar.childNodes.forEach(el => {
    if (el !== more) {
        el.addEventListener('click', hide)
    }
})

content.addEventListener('click', hide)


function show() {
    extra.setAttribute('style', 'visibility: visible; border: 1px solid black; border-top: none;');
    document.getElementById('account').setAttribute('style', 'visibility: visible');
    document.getElementById('settings').setAttribute('style', 'visibility: visible');
}

function hide() {
    extra.setAttribute('style', 'visibility: hidden');
    document.getElementById('account').setAttribute('style', 'visibility: hidden; font-size: 0; height: 0;');
    document.getElementById('settings').setAttribute('style', 'visibility: hidden; font-size: 0; height: 0;');

}

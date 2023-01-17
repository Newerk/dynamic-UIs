const more = document.getElementById('more');
const content = document.querySelector('.content');
const extra = document.getElementById('extra');


more.addEventListener('click', function () {
if (extra.style.visibility !== 'visible') {
    extra.setAttribute('style', 'visibility: visible');
    document.getElementById('account').setAttribute('style', 'visibility: visible');
    document.getElementById('settings').setAttribute('style', 'visibility: visible');

} else {
    extra.setAttribute('style', 'visibility: hidden');
    document.getElementById('account').setAttribute('style', 'visibility: hidden; font-size: 0; height: 0;');
    document.getElementById('settings').setAttribute('style', 'visibility: hidden; font-size: 0; height: 0;');

}


})
const wrapper = document.querySelector('.wrapper');
const main = document.querySelector('.main');

let currentDropDownText = 'Home';

main.addEventListener('click', () => {
    let options = document.querySelector('.options');
    let choices = document.querySelectorAll('.choices');


    if (options.style.visibility === "visible") {
        options.setAttribute('style', 'visibility: hidden;');
        textController(choices, options);

    } else {
        options.setAttribute('style', 'visibility: visible;');
        textController(choices, options);

    }
})

function textController(element, visibilityValue) {
    element.forEach(el => {
        if (visibilityValue.style.visibility === 'visible') {
            el.setAttribute('style', 'height: 3rem; font-size: 1rem')
        } else {
            el.setAttribute('style', 'height: 0');
        }

        el.addEventListener('click', function (e) {
            const clickedOption = e.currentTarget.textContent;
            el.textContent = currentDropDownText;
            currentDropDownText = main.textContent = clickedOption;


            element.forEach(node => {
                node.setAttribute('style', 'visibility: hidden;');

            })
            visibilityValue.style.visibility = 'hidden';
        });
    })

}
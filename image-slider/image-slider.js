const scrollWrapper = document.querySelectorAll('.scroll-wrapper > *');
const dotsContainer = document.querySelector('.dots-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let start = 10;

const buildDots = ((node) => {
    for (let i = 0; i < node.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        dotsContainer.appendChild(dot)
    }
})(scrollWrapper);

leftBtn.addEventListener('click', goLeft)
rightBtn.addEventListener('click', goRight)



function goLeft() {
    if (start < 0) {
        document.getElementById('img1').style.marginLeft = `${start + 84}vw`;

        start += 84;

    }
}

function goRight() {
    if (start > -326) {
        document.getElementById('img1').style.marginLeft = `${start - 84}vw`;

        start -= 84;
    }
}


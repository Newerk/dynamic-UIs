const scrollWrapper = document.querySelectorAll('.scroll-wrapper > *');
const dotsContainer = document.querySelector('.dots-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const firstImage = document.getElementById('img1');

let start = 10;

const buildDots = ((node) => {
    for (let i = 0; i < node.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.id = `pg${i + 1}`;

        dotsContainer.appendChild(dot)
    }

    dotIndicator()
    // setTimeout(goRight, 5000);

    function start() {

        setTimeout(function() {
            console.log('Hello My Infinite Loop Execution');
    
            goRight()
          // Again
          start();
    
          // Every 3 sec
        }, 5000);
    }
    
    // Begins
    start();
    


})(scrollWrapper);


document.querySelectorAll('.dot').forEach(el => {
    el.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'pg1':
                firstImage.style.marginLeft = `10vw`;
                start = 10;

                break;

            case 'pg2':
                firstImage.style.marginLeft = `-74vw`;
                start = -74;

                break;

            case 'pg3':
                firstImage.style.marginLeft = `-158vw`;
                start = -158;

                break;

            case 'pg4':
                firstImage.style.marginLeft = `-242vw`;
                start = -242;

                break;

            case 'pg5':
                firstImage.style.marginLeft = `-326vw`;
                start = -326;

                break;
        }

        dotIndicator()

    })
})


leftBtn.addEventListener('click', goLeft)
rightBtn.addEventListener('click', goRight)

function grabImage() {

}

function goLeft() {
    if (start === 10) {
        document.getElementById('img1').style.marginLeft = `-326vw`;
        start = -410;
    }

    if (start < 10) {
        document.getElementById('img1').style.marginLeft = `${start + 84}vw`;
        start += 84;
    }
    dotIndicator()

}

function goRight() {
    if (start === -326) {
        document.getElementById('img1').style.marginLeft = `10vw`;
        start = 94;
    }


    if (start > -326) {
        document.getElementById('img1').style.marginLeft = `${start - 84}vw`;
        start -= 84;
    }
    dotIndicator()

}

function dotIndicator() {

    document.querySelector('.dots-container').childNodes.forEach(el => {
        el.setAttribute('style', 'height: 1.5vh; width: 1.5vh;')
    }
    )

    switch (start) {
        case 10:
            document.getElementById('pg1').setAttribute('style', 'height: 3vh; width: 3vh;');

            break;
        case -74:
            document.getElementById('pg2').setAttribute('style', 'height: 3vh; width: 3vh;');


            break;

        case -158:
            document.getElementById('pg3').setAttribute('style', 'height: 3vh; width: 3vh;');


            break;

        case -242:
            document.getElementById('pg4').setAttribute('style', 'height: 3vh; width: 3vh;');


            break;

        case -326:
            document.getElementById('pg5').setAttribute('style', 'height: 3vh; width: 3vh;');


            break;
    }

}


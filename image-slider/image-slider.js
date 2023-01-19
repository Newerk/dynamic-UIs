const scrollWrapper = document.querySelectorAll('.scroll-wrapper > *');
const dotsContainer = document.querySelector('.dots-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let start = 10;

const buildDots = ((node) => {
    for (let i = 0; i < node.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.id = `pg${i + 1}`;

        dotsContainer.appendChild(dot)
    }

    dotIndicator()
})(scrollWrapper);

document.querySelectorAll('.dot').forEach(el => {
    el.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'pg1':
                document.getElementById('img1').style.marginLeft = `10vw`;
                start = 10;

                break;

            case 'pg2':
                document.getElementById('img1').style.marginLeft = `-74vw`;
                start = -74;

                break;

            case 'pg3':
                document.getElementById('img1').style.marginLeft = `-158vw`;
                start = -158;


                break;

            case 'pg4':
                document.getElementById('img1').style.marginLeft = `-242vw`;
                start = -242;


                break;

            case 'pg5':
                document.getElementById('img1').style.marginLeft = `-326vw`;
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
    console.log(start)

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
    console.log(start)

}

function dotIndicator() {

    document.querySelector('.dots-container').childNodes.forEach(el => {
        el.setAttribute('style', 'height: 1vh; width: 1vh;')
    }
    )

    switch (start) {
        case 10:
            document.getElementById('pg1').setAttribute('style', 'height: 2vh; width: 2vh;')

            break;
        case -74:
            document.getElementById('pg2').setAttribute('style', 'height: 2vh; width: 2vh;')

            break;

        case -158:
            document.getElementById('pg3').setAttribute('style', 'height: 2vh; width: 2vh;')

            break;

        case -242:
            document.getElementById('pg4').setAttribute('style', 'height: 2vh; width: 2vh;')

            break;

        case -326:
            document.getElementById('pg5').setAttribute('style', 'height: 2vh; width: 2vh;')

            break;
    }

}
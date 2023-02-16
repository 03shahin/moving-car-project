const $ = document

const surface = $.querySelector('.surface')
const car = $.querySelector('.car')
const carImg = $.querySelector('.car img')

let isLightOn = true


window.addEventListener('keypress', (event) => {

    if (event.code === 'Enter') {
        surface.classList.toggle('movecar1')
        car.classList.toggle('carmove')
    }

    if (event.code === 'Space') {
        if (isLightOn) {
            carImg.setAttribute('src', 'images/Img_05.png')
            isLightOn = false
        } else {
            carImg.setAttribute('src', 'images/Img_06.png')
            isLightOn = true
        }
    }

    console.log(event);

})
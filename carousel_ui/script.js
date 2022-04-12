const imgsEle = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgs = document.querySelectorAll('#imgs img');

let index = 0;

let interval = setInterval(run, 2000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if (index > imgs.length - 1) {
        index = 0;
    } else if(index < 0) {
        index = img.length - 1;
    }

    imgsEle.style.transform = `translateX(${-index * 500}px)`
}

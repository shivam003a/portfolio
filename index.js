
// for the image slider
let slideItem = document.querySelectorAll('.slide-item');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let index = 0;

const displayHide = () => {
    slideItem.forEach(slide => {
        slide.style.display = 'none';
    })
}

displayHide();
slideItem[0].style.display = 'flex';

nextBtn.addEventListener('click', () => {
    if (index == slideItem.length - 1) {
        index = -1;
    }
    displayHide();
    index++;
    slideItem[index].style.display = "flex";
})

setInterval(() => {
    if (index == slideItem.length - 1) {
        index = -1;
    }
    displayHide();
    index++;
    slideItem[index].style.display = "flex";
}, 10000)

prevBtn.addEventListener('click', () => {
    if (index == 0) {
        index = slideItem.length;
    }
    index--;
    displayHide();
    slideItem[index].style.display = "flex";
})

// for moving the boy image
let boy = document.querySelector(".boy");


document.addEventListener('scroll', () => {
    let scroll = scrollY;
    console.log(scroll);
    boy.style.left = `${1.2 * scroll}px`;
})
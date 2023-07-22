let slideItem = document.querySelectorAll('.slide-item');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let index = 0;

const displayHide = ()=>{
    slideItem.forEach(slide=>{
        slide.style.display = 'none';
    })
}

displayHide();
slideItem[0].style.display = 'flex';

nextBtn.addEventListener('click', ()=>{
    if(index == slideItem.length -1){
        index = -1;
    }
    displayHide();
    index++;
    slideItem[index].style.display = "flex";
})

prevBtn.addEventListener('click', ()=>{
    if(index == 0){
        index = slideItem.length; 
    }
    index--;
    displayHide();
    console.log(index);
    slideItem[index].style.display = "flex";
})

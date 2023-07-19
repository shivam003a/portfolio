let boyImage = document.querySelector('.boy');

document.addEventListener('scroll', (e)=>{
    let x = boyImage.getBoundingClientRect().y;
    console.log(boyImage.getBoundingClientRect());

    boyImage.setAttribute("transform" , `translateX(0.2*${x})`);
})
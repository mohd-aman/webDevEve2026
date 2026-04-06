const container = document.querySelector('#colorPalette');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('color-box')){
        const color = e.target.style.backgroundColor;
        container.style.backgroundColor = color;
    }
})
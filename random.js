
//declaring elements
const button = document.querySelector("#color-changer");
const head = document.querySelector("#header");


//displaying logic for background color changer
button.addEventListener('click', ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
    head.innerText = newColor;
    
    
})




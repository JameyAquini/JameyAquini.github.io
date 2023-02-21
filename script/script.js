const nextbtn=document.querySelector(".nextbtn");
const backbtn=document.querySelector(".backbtn");
const about=document.querySelector(".about");
const projects=document.querySelector(".projects");
const circle1=document.querySelector(".circle1");
const circle2=document.querySelector(".circle2");

nextbtn.addEventListener("click",()=>{
    about.classList.add('proactive');
    projects.classList.add('proactive');
    circle1.classList.add('proactive');
    circle2.classList.add('proactive');

})
backbtn.addEventListener("click",()=>{
    about.classList.remove('proactive');
    projects.classList.remove('proactive');
    circle1.classList.remove('proactive');
    circle2.classList.remove('proactive');

})
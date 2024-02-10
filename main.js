const wrappper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const jpg = document.querySelector(".jpg");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");


nobtn.addEventListener("mouseover", () =>{
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.computedStyleMap.left = randomX + "px";
    nobtn.computedStyleMap.top = randomY + "px";
})

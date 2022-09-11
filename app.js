const active = document.querySelector(".active");
const sections = document.querySelectorAll(".sections");
const nav = document.querySelector(".nav");
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
})
sections.forEach( function(link) {
    link.addEventListener("click", ()=>{
        nav.style.transform = translate(10, 0)
        console.log(78787)
    })
});
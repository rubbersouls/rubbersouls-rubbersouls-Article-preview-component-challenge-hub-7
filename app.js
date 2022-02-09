const btnpopup = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const flechepopup = document.querySelector(".popfleche");
const section = document.querySelector("section");
const btn = document.querySelector(".btn");
const image = document.querySelector(".image");

console.log(btnpopup)

 btnpopup.addEventListener("click", () => {
    popup.classList.toggle("active");
    flechepopup.classList.toggle("active");
    btn.classList.toggle("btnon");
    image.classList.toggle("imgon");
});








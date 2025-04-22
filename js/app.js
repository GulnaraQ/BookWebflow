const bars = document.querySelector("#bars");
const mobileNav = document.querySelector("#mobileNav");

bars.addEventListener("click", () => {
   mobileNav.classList.toggle("showMobileNav");
   bars.classList.toggle("fa-xmark");
})
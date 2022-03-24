const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const menuFix = document.querySelector(".menu-fix")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    menuFix.classList.toggle("active")
})
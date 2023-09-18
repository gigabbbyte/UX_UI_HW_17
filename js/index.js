const mobileNav = document.querySelector(".mobileNav");
const navMenu = document.querySelector(".navMenu");

mobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n =>n.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    navMenu.classList.remove("active");
}))
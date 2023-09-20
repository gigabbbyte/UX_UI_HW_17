// mobile nav menu
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

function fade () {
    $(".preloader").fadeOut("slow");
}

setTimeout(fade, 3000)

// cursor possibly
// const cursor = document.querySelector('.cursor');

// const positionElement = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;

//   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

// }

// window.addEventListener('mousemove', positionElement)
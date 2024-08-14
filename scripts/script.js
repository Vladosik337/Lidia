// -----------------Burger-----------------

const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove("no-scroll");
}));

// -----------------Fix-Scroll-<a>-----------------
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = -100;

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
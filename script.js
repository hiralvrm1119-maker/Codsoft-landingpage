```javascript
// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// ==========================
// Navbar Shadow Effect
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
        header.style.background = "#ffffff";
    }

});


// ==========================
// Fade-in Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});


// ==========================
// Product Card Hover Effect
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.4s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🌿 Thank you for contacting Lux Meadows! We'll get back to you soon.");

    form.reset();

});


// ==========================
// Active Navigation Link
// ==========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================
// Welcome Message
// ==========================

window.onload = function () {

    console.log("Welcome to Lux Meadows 🌿");

};
```

/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");

menuButton.innerHTML = "☰";

menuButton.setAttribute("aria-label", "Open navigation menu");

nav.appendChild(menuButton);


// Toggle mobile menu
menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


// Close menu when a navigation link is clicked
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("hidden-section");

    observer.observe(section);

});


/* =========================================
   3. CURRENT YEAR IN FOOTER
========================================= */

const footerYear = document.querySelector(".footer-copyright");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Vishnu K P. All rights reserved.`;

}


/* =========================================
   4. SCROLL TO TOP BUTTON
========================================= */

// Create button
const scrollTopButton = document.createElement("button");

scrollTopButton.innerHTML = "↑";

scrollTopButton.classList.add("scroll-top");

scrollTopButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(scrollTopButton);


// Show/hide button based on scroll position
window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show-scroll-top");

    } else {

        scrollTopButton.classList.remove("show-scroll-top");

    }

});


// Scroll to top
scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   5. ACTIVE NAVIGATION LINK
========================================= */

const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active-link");

        }

    });

});
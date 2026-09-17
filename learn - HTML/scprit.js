// Mobile menu

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// Project details

function showProject(projectName) {

    alert(
        projectName +
        " selected!\n\nProject details can be added here."
    );

}


// Contact form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});


// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();

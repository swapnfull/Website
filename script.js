// script.js
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');

    // Hover effect for "About Us" link
    aboutLink.addEventListener("mouseover", function() {
        aboutLink.style.color = 'red'; // Change color on hover
    });

    aboutLink.addEventListener("mouseout", function() {
        aboutLink.style.color = ''; // Revert to default color on mouseout
    });

    // Hover effect for "Contact Us" link
    contactLink.addEventListener("mouseover", function() {
        contactLink.style.color = 'blue'; // Change color on hover
    });

    contactLink.addEventListener("mouseout", function() {
        contactLink.style.color = ''; // Revert to default color on mouseout
    });
});

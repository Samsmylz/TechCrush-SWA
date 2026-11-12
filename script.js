const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile navigation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close navigation after clicking a link
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Display current year in footer
const footer = document.querySelector("footer p");

footer.innerHTML = `&copy; ${new Date().getFullYear()} CreativeHub. All rights reserved.`;

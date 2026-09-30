document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelectorAll("nav ul a");

    if (!nav || !menuToggle) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("menu-open");

        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("menu-open");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
});
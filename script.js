document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("menu-open");

        const isOpen = nav.classList.contains("menu-open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuToggle.textContent = "☰";
        });
    });

});
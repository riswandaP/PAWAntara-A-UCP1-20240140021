document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("main-menu");

    if (!hamburger || !navMenu) {
        return;
    }

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        hamburger.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const lateralMenu = document.getElementById("lateralMenu");

    menuToggle.addEventListener("click", () => {
        lateralMenu.classList.toggle("active");
    });
});
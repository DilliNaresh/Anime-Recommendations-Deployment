const btn = document.querySelector(".btn-toggle");
const img = document.getElementById("banner");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        img.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
        img.classList.toggle("dark-theme");
    }
});

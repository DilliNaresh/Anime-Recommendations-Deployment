const btn = document.querySelector(".btn-toggle");
const img = document.getElementById("banner");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var theme = null;
if (localStorage.getItem("theme") == null) {
    if (prefersDarkScheme.matches) {
        theme = "dark";
    } else {
        theme = "light";
    }
    localStorage.setItem("theme", theme);
}
theme = localStorage.getItem("theme");

const currentTheme = localStorage.getItem("theme");

if (prefersDarkScheme.matches && currentTheme === "light") {
    document.body.classList.toggle("light-theme");
    img.classList.toggle("light-theme");
    document.getElementById("themeicon").src = "images/light-mode-icon.png";
} else if (!prefersDarkScheme.matches && currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
    img.classList.toggle("dark-theme");
}

console.log(theme);

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        img.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
        img.classList.toggle("dark-theme");
    }
    if (theme === "dark") {
        theme = "light";
        document.getElementById("themeicon").src = "images/light-mode-icon.png";
    } else {
        theme = "dark";
        document.getElementById("themeicon").src = "images/dark-mode-icon.png";
    }
    localStorage.setItem("theme", theme);
    console.log(theme);
});

function nextButtonAlert() {
    alert("This section is still under progress");
}

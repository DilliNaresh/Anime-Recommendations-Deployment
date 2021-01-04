const btn = document.querySelector(".btn-toggle");
const img = document.getElementById("banner");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var theme = null;

if (localStorage.getItem("theme") == null) {
    theme = prefersDarkScheme.matches ? "dark" : "light";
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

function enableCooldown(button, duration) {
    button.disabled = true;

    setTimeout(() => {
        button.disabled = false;
    }, duration);
}

btn.addEventListener("click", function () {
    enableCooldown(btn, 1000);
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        img.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
        img.classList.toggle("dark-theme");
    }
    theme = theme === "dark" ? "light" : "dark";
    document.getElementById("themeicon").src = `images/${theme}-mode-icon.png`;
    localStorage.setItem("theme", theme);
});

function nextButtonAlert() {
    alert("This section is still under progress");
}

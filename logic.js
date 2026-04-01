const toggle = document.getElementById("toggle");
const modeText = document.getElementById("modeText");

// Detect system theme
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load saved theme OR system default
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
    toggle.checked = savedTheme === "dark";
} else {
    document.body.classList.add(systemDark ? "dark" : "light");
    toggle.checked = systemDark;
}

// Update text
function updateText() {
    if (document.body.classList.contains("dark")) {
        modeText.innerText = "Dark Mode 🌙";
    } else {
        modeText.innerText = "Light Mode ☀️";
    }
}
updateText();

// Toggle event
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
    updateText();
});


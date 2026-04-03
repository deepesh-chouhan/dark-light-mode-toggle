const toggle = document.getElementById("toggle");
const modeText = document.getElementById("modeText");


const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;



let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
    toggle.checked = savedTheme === "dark";
} else {
    document.body.classList.add(systemDark ? "dark" : "light");
    toggle.checked = systemDark;
}



function updateText() {
    if (document.body.classList.contains("dark")) {
        modeText.innerText = "Dark Mode 🌙";
    } else {
        modeText.innerText = "Light Mode ☀️";
    }
}
updateText();



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


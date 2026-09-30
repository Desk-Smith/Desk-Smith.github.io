// Toggle dark mode
const toggle = document.querySelector("#theme-button");

toggle.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
    if (toggle.textContent === "◐") {
        toggle.textContent = "◑";
    } else {
        toggle.textContent = "◐";
    }
});

// Set the current year in the footer
document.querySelector("#current-year").textContent = new Date().getFullYear();

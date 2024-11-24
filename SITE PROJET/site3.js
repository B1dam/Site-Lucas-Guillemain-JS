// Gestion du mode sombre
let switchButton = document.getElementById("switchTheme");
let page = document.getElementById("page");

switchButton.addEventListener("click", function () {
    page.classList.toggle("dark-theme");
    // Changer le smiley en fonction du thème actuel
    if (page.classList.contains("dark-theme")) {
        switchButton.textContent = "🌚"; // Smiley soleil pour le mode sombre
    } else {
        switchButton.textContent = "🌞"; // Smiley lune pour le mode clair
    }
});



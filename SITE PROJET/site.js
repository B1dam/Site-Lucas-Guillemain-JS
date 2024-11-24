
let switchButton = document.getElementById("switchTheme");
let page = document.getElementById("page");

switchButton.addEventListener("click", function () {
    page.classList.toggle("dark-theme");
    // change le smiley en fonction du thème 
    if (page.classList.contains("dark-theme")) {
        switchButton.textContent = "🌚"; // smiley soleil pour aller en mode sombre
    } else {
        switchButton.textContent = "🌞"; // smiley lune pour le mode clair
    }
});



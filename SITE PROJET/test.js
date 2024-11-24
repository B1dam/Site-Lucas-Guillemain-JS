// Gestion du mode sombre
let switchButton = document.getElementById("switchTheme");
let page = document.getElementById("page");

switchButton.addEventListener("click", function () {
    page.classList.toggle("dark-theme");
    // Changer le smiley en fonction du thème actuel
    if (page.classList.contains("dark-theme")) {
        switchButton.textContent = "🌞"; // Smiley soleil pour le mode sombre
    } else {
        switchButton.textContent = "🌚"; // Smiley lune pour le mode clair
    }
});


// Validation de l'email
let emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() === "") {
        emailInput.classList.remove("valid", "invalid"); // Pas de couleur si vide
    } else if (validateEmail(emailInput.value)) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
    } else {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validation du formulaire
let form = document.querySelector("form");
let pseudoInput = document.getElementById("pseudo");
let passwordInput = document.getElementById("password");
let password2Input = document.getElementById("password2");
let errorContainer = document.querySelector(".message-error ul");
let successMessage = document.querySelector(".message-success");

// Cacher les messages d'erreur et de succès au départ
errorContainer.innerHTML = "";
document.querySelector(".message-error").classList.add("hidden");
successMessage.classList.add("hidden");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorContainer.innerHTML = "";
    let formValid = true;

    // Cacher le message de succès avant de valider
    successMessage.classList.add("hidden");

    // Validation du pseudo
    if (pseudoInput.value.trim() === "" || pseudoInput.value.length < 4) {
        pseudoInput.classList.add("invalid");
        pseudoInput.classList.remove("valid");
        let err = document.createElement("li");
        err.innerText = "Le pseudo doit contenir au moins 4 caractères.";
        errorContainer.appendChild(err);
        formValid = false;
    } else {
        pseudoInput.classList.add("valid");
        pseudoInput.classList.remove("invalid");
    }

    // Validation du mot de passe
    if (passwordInput.value.trim() === "" || passwordInput.value.length < 6) {
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        let err = document.createElement("li");
        err.innerText = "Le mot de passe doit contenir au moins 6 caractères.";
        errorContainer.appendChild(err);
        formValid = false;
    } else {
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
    }

    // Validation de la confirmation du mot de passe
    if (passwordInput.value !== password2Input.value || password2Input.value.trim() === "") {
        password2Input.classList.add("invalid");
        password2Input.classList.remove("valid");
        let err = document.createElement("li");
        err.innerText = "Les deux mots de passe ne correspondent pas.";
        errorContainer.appendChild(err);
        formValid = false;
    } else {
        password2Input.classList.add("valid");
        password2Input.classList.remove("invalid");
    }

    // Afficher les messages appropriés
    if (!formValid) {
        document.querySelector(".message-error").classList.remove("hidden");
    } else {
        document.querySelector(".message-error").classList.add("hidden");
        successMessage.classList.remove("hidden");
        form.reset(); // Réinitialiser le formulaire
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("valid", "invalid");
        });
    }
});

// Gestion des Tabs
let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".content");

// Masquer tous les contenus au chargement de la page
contents.forEach(content => content.classList.remove("active"));

// Ajouter des événements sur chaque tab
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        let associatedContent = document.querySelector(`.content.${this.classList[1].split('-')[1]}`);
        
        // Désactiver tous les tabs et contenus
        tabs.forEach(t => t.classList.remove("tab-active"));
        contents.forEach(c => c.classList.remove("active"));

        // Activer le tab cliqué et afficher le contenu correspondant
        this.classList.add("tab-active");
        associatedContent.classList.add("active");
    });
});

// Fonction pour gérer l'affichage des tabs en fonction du hash dans l'URL
window.addEventListener("load", function () {
    const urlHash = window.location.hash; // Récupère le hash dans l'URL

    // Si un hash est présent dans l'URL, afficher l'onglet correspondant
    if (urlHash) {
        const tabId = urlHash.substring(1); // Enlever le "#" du hash
        const tab = document.querySelector(`.tab-${tabId}`); // Sélectionner le tab correspondant
        const content = document.querySelector(`.content.${tabId}`); // Sélectionner le contenu correspondant

        // Si le tab et son contenu existent, les afficher
        if (tab && content) {
            // Désactiver tous les tabs et contenus
            document.querySelectorAll('.tab').forEach(t => t.classList.remove("tab-active"));
            document.querySelectorAll('.content').forEach(c => c.classList.remove("active"));

            // Activer le tab et afficher son contenu
            tab.classList.add("tab-active");
            content.classList.add("active");
        }
    } else {
        // Si aucun hash n'est présent, on active l'onglet par défaut (par exemple Infos)
        const defaultTab = document.querySelector(".tab-infos");
        const defaultContent = document.querySelector(".content.infos");

        if (defaultTab && defaultContent) {
            defaultTab.classList.add("tab-active");
            defaultContent.classList.add("active");
        }
    }
});

// Gestion des événements de clic sur les tabs
let tab = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        const tabId = this.classList[1].split('-')[1]; // Extrait l'identifiant de l'onglet (ex: "infos", "formulaire")
        const content = document.querySelector(`.content.${tabId}`); // Sélectionne le contenu associé à l'onglet

        // Masque tous les contenus
        document.querySelectorAll('.content').forEach(c => c.classList.remove("active"));

        // Affiche le contenu du tab sélectionné
        content.classList.add("active");

        // Active le tab sélectionné
        tabs.forEach(t => t.classList.remove("tab-active"));
        this.classList.add("tab-active");

        // Met à jour l'URL avec le hash du tab sélectionné
        window.location.hash = tabId;
    });
});



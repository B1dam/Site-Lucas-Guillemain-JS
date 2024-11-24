let variable1 = 10;
let variable2 = 2;
if (variable2 !== 0) {
    console.log(variable1 - variable2);
} else {
    console.log("Erreur : Division par zéro");
}

let prixProduit = 10;
let argentPersonnage = 50;
let stockBoutique = 7;

let produitsAchetes = 0;


while (argentPersonnage >= prixProduit && stockBoutique > 0) {
    produitsAchetes++;
    argentPersonnage -= prixProduit;
    stockBoutique--;
}


console.log(`Produits achetés : ${produitsAchetes}`);
console.log(`Argent restant : ${argentPersonnage}`);
console.log(stockBoutique === 0 ? "Rupture de stock." : "Stock restant : " + stockBoutique);




class Personnage {
    constructor(nom, vie, attaque, precision) {
      this.nom = nom;
      this.vie = vie;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    verifier_precision() {
      return Math.random() < this.precision;
    }
  
    attaquer(adversaire) {
      if (this.verifier_precision()) {
        adversaire.vie -= this.attaque;
        console.log(this.nom + " attaque " + adversaire.nom + " et inflige " + this.attaque + " points de dégâts.");
      } else {
        console.log(this.nom + " attaque " + adversaire.nom + " mais rate son attaque.");
      }
    }
  }
  
  let gladiator = new Personnage("Gladiator", 100, 25, 0.7); 
  let bourreau = new Personnage("Bourreau", 120, 30, 0.6); 
  
 
  while (gladiator.vie > 0 && bourreau.vie > 0) {
    gladiator.attaquer(bourreau);
    if (bourreau.vie > 0) {
      bourreau.attaquer(gladiator);
    }
  
    console.log("Points de vie de " + gladiator.nom + " : " + gladiator.vie);
    console.log("Points de vie de " + bourreau.nom + " : " + bourreau.vie);
  }
  
  
  if (gladiator.vie <= 0 && bourreau.vie <= 0) {
    console.log("\nLes deux combattants sont morts, le combat est nul !");
  } else if (gladiator.vie <= 0) {
    console.log("\n" + bourreau.nom + " gagne !");
  } else if (bourreau.vie <= 0) {
    console.log("\n" + gladiator.nom + " gagne !");
  }
  

  
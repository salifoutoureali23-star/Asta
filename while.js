let prixGTA6 = 50000;
let epargneparsemaine = 4000;
let totalEpargne = 0;
let semaines = 0;
while (totalEpargne < prixGTA6) {
    totalEpargne += epargneparsemaine;
    semaines++;
console.log(`Après ${semaines} semaines, vous avez économisé ${totalEpargne} FCFA.`)
}
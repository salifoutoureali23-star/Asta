const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte); // number, FCFA
const alimentation = Number(alimentationTexte); // number, FCFA
const loisirs = Number(loisirsTexte); // number, FCFA
// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs; // number, FCFA
const budgetRestant = budget - totalDepenses; // number, FCFA
const budgetRespected = budgetRestant >= 0; // boolean

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom}.`);
console.log(`Nom : ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Transport : ${transportTexte} FCFA`);
console.log(`Alimentation : ${alimentationTexte} FCFA`);
console.log(`Loisirs : ${loisirsTexte} FCFA`);
console.log(`Total des dépenses : ${totalDepenses} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);

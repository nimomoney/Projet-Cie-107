import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.15.0/ethers.min.js"
import { address, abi } from "./contract.js"

if (typeof window.ethereum === 'undefined') {
    alert("Rabby Wallet non trouvé")
    throw new Error("Rabby Wallet non trouvé")
}
const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(address, abi, signer)
window.contract = contract; // Expose le contrat pour le débogage

contract.on("addIron", (quantite, nouveauStock) => {
    document.querySelector('#ferStock').textContent = nouveauStock;
    console.log("L'usine a reçu " + quantite + " kg de fer !");
});

contract.on("addCoal", (quantite, nouveauStock) => {
    document.querySelector('#charbonStock').textContent = nouveauStock;
    console.log("L'usine a reçu " + quantite + " kg de charbon !");
});

contract.on("Melted", (nombreLingots, nouveauStockMelted) => {
    document.querySelector('#lingotStock').textContent = nouveauStockMelted;
    console.log("La fonderie a produit " + nombreLingots + " lingots !");
});

document.querySelector('#ajouterStockIron').addEventListener('click', async () => {
    const quantite = parseInt(document.querySelector('#ferInput').value);
    await contract.ajouterFer(quantite);
    document.querySelector('#ferInput').value = '';
});
document.querySelector('#ajouterStockCoal').addEventListener('click', async () => {
    const quantite = parseInt(document.querySelector('#charbonInput').value);
    await contract.ajouterCharbon(quantite);
    document.querySelector('#charbonInput').value = '';
});
// Handler pour lancer la fonderie (créer des lingots)
document.querySelector('#lancerFonderie').addEventListener('click', async () => {
    const nombre = parseInt(document.querySelector('#nbLingots').value);
    if (!Number.isInteger(nombre) || nombre <= 0) {
        document.querySelector('#message').textContent = 'Entrez un nombre entier positif de lingots.';
        return;
    }
    try {
        const tx = await contract.meltIron(nombre);
        await tx.wait();
        document.querySelector('#nbLingots').value = '';
        document.querySelector('#message').textContent = 'Fonderie lancée : tx envoyée.';
    } catch (err) {
        // Affiche le message d'erreur si disponible
        const reason = err.reason || err.message || JSON.stringify(err);
        document.querySelector('#message').textContent = reason;
        console.error(err);
    }
});


import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.15.0/ethers.min.js"
import { address, abi } from "./contract.js"

if (typeof window.ethereum === 'undefined') {
    alert("Rabby Wallet non trouvé")
    throw new Error("Rabby Wallet non trouvé")
}
const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(address, abi, signer)

contract.on("addIron", (quantite, nouveauStock) => {
    document.querySelector('#ferStock').textContent = nouveauStock;
    console.log("L'usine a reçu " + quantite + " kg de fer !");
});

contract.on("addCoal", (quantite, nouveauStock) => {
    document.querySelector('#charbonStock').textContent = nouveauStock;
    console.log("L'usine a reçu " + quantite + " kg de charbon !");
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
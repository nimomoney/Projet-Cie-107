export const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantite",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nouveauStock",
                "type": "uint256"
            }
        ],
        "name": "addCoal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantite",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nouveauStock",
                "type": "uint256"
            }
        ],
        "name": "addIron",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "quantite",
                "type": "uint256"
            }
        ],
        "name": "ajouterCharbon",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "quantite",
                "type": "uint256"
            }
        ],
        "name": "ajouterFer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
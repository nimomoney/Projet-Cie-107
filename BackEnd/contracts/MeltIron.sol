// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeltIron {
    uint256 public stockIron;
    uint256 public stockCoal;
    uint256 public stockMeltedIron;

    // Roles
    address public supplier;
    address public worker;
    address public admin;

    // Custom error to return missing amounts (gas-efficient and structured)
    error StockInsuffisant(uint256 manqueFer, uint256 manqueCharbon);

    event addIron(uint256 quantite, uint256 nouveauStock);
    event addCoal(uint256 quantite, uint256 nouveauStock);
    event Melted(uint256 nombreLingots, uint256 nouveauStockMelted);

    constructor() {
        stockIron = 0;
        stockCoal = 0;
        stockMeltedIron = 0;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Seul l'admin peut appeler");
        _;
    }

    modifier onlySupplier() {
        require(msg.sender == supplier, "Seul le fournisseur peut appeler");
        _;
    }

    modifier onlyWorker() {
        require(msg.sender == worker, "Seul l'ouvrier peut appeler");
        _;
    }

    function setSupplier(address _supplier) public onlyAdmin {
        supplier = _supplier;
    }

    function setWorker(address _worker) public onlyAdmin {
        worker = _worker;
    }

    function setAdmin(address _admin) public onlyAdmin {
        admin = _admin;
    }

    function ajouterFer(uint256 quantite) public {
        require(quantite > 0, "La quantite doit etre positive");
        stockIron += quantite;
        emit addIron(quantite, stockIron);
    }

    function ajouterCharbon(uint256 quantite) public onlySupplier {
        require(quantite > 0, "La quantite doit etre positive");
        stockCoal += quantite;
        emit addCoal(quantite, stockCoal);
    }

    function meltIron(uint256 nombreLingots) public onlyWorker {
        require(nombreLingots > 0, "Le nombre de lingots doit etre positif");

        uint256 requiredIron = nombreLingots;
        uint256 requiredCoal = nombreLingots * 2;

        if (stockIron < requiredIron || stockCoal < requiredCoal) {
            uint256 manqueFer = 0;
            uint256 manqueCharbon = 0;
            if (stockIron < requiredIron) {
                manqueFer = requiredIron - stockIron;
            }
            if (stockCoal < requiredCoal) {
                manqueCharbon = requiredCoal - stockCoal;
            }
            revert StockInsuffisant(manqueFer, manqueCharbon);
        }

        stockIron -= requiredIron;
        stockCoal -= requiredCoal;
        stockMeltedIron += (nombreLingots * 2);

        emit Melted(nombreLingots, stockMeltedIron);
    }
}

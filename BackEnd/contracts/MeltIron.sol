// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeltIron {
    uint256 stockIron;
    uint256 stockCoal;
    uint256 stockMeltedIron;

    event addIron(uint256 quantite, uint256 nouveauStock);
    event addCoal(uint256 quantite, uint256 nouveauStock);

    constructor() {
        stockIron = 0;
        stockCoal = 0;
        stockMeltedIron = 0;
    }

    function ajouterFer(uint256 quantite) public {
        require(quantite > 0, "La quantite doit etre positive");
        stockIron += quantite;
        emit addIron(quantite, stockIron);
    }

    function ajouterCharbon(uint256 quantite) public {
        require(quantite > 0, "La quantite doit etre positive");
        stockCoal += quantite;
        emit addCoal(quantite, stockCoal);
    }
}

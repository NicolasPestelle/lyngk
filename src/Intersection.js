"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (coord) {

    var privateState = Lyngk.State.VACANT;
    var privateColor;
    var privateNbPions = 0;
    var privateCoord = coord;
    var privatePile = [];

    this.popPile = function () {
        privatePile.pop();
        privateNbPions--;
        if (privateNbPions === 0) {
            privateState = Lyngk.State.VACANT;
        }

    };

    this.getFullPile = function () {
        return privatePile;
    };

    this.setColor = function (couleur) {
        privateColor = couleur;
    }

    this.getPile = function (i) {
        return privatePile[i];
    };

    this.getCoord = function () {
        return privateCoord;
    };

    this.getColorPile = function () {
        return privatePile[privateNbPions - 1];
    };

    this.getSizePile = function () {
        return privateNbPions;
    };

    this.getState = function () {
        return privateState;
    };

    this.getColor = function () {
        return privateColor;
    };

    function OnePieceCOndition() {
        if (privateState === Lyngk.State.ONE_PIECE) {
            privateState = Lyngk.State.STACK;
        }
    }

    function StateCondition() {
        if (privateNbPions === 5) {
            privateState = Lyngk.State.FULL_STACK;
        } else {
            if (privateState === Lyngk.State.VACANT) {
                privateState = Lyngk.State.ONE_PIECE;
            } else {
                OnePieceCOndition();
            }
        }
    }

    this.placePiece = function (couleur) {
        privatePile.push(couleur);
        privateColor = couleur;
        privateNbPions += 1;
        StateCondition();


    };

};
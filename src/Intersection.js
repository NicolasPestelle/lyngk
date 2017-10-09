"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};


Lyngk.Intersection = function (c) {
};

Lyngk.Intersection = function () {
    var private_etat = Lyngk.State.VACANT;
    var private_color;

    this.get_etat = function () {
        return private_etat;
    }

    this.get_color = function () {
        return private_color
    }

    this.placerPion = function (color) {
        var color = color;
        if (color == Lyngk.Color.BLUE ){
            private_color = Lyngk.Color.BLUE;
            private_etat = Lyngk.State.ONE_PIECE;
        }
    }
};
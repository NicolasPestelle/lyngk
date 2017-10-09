"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};


Lyngk.Intersection = function (c) {
};

Lyngk.Intersection = function () {
    var private_etat = Lyngk.State.VACANT;

    this.get_etat = function () {
        return private_etat;
    }
};
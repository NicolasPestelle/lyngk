"use strict";
Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};
Lyngk.Intersection = function (coord) {
    var private_etat = Lyngk.State.VACANT;
    var private_color;
    var private_nbPions = 0;
    var private_pile = [];
    var private_coord = coord;

    this.get_privatePile = function (i) {
        return private_pile[i];
    };

    this.popPile = function () {
        private_pile.pop();
    }

    this.pushPile = function (m) {
        private_pile.push(m);
    }

    this.lastElementPile = function () {
        return private_pile.slice(-1)[0];
    }

    this.get_coord = function () {
        return private_coord;
    };
    this.get_etat = function()
    {
        return private_etat;
    };
    this.get_color = function()
    {
        return private_color;
    };

    this.get_color_pile = function () {
        return private_pile[private_nbPions -1];
    };

    this.get_taille_pile = function(){
        return private_nbPions;
    };
    this.placerPion = function(couleur)
    {
        private_color = couleur;
        private_nbPions++;
        private_pile[private_nbPions -1] = couleur;

        if(private_nbPions == 5)
            private_etat = Lyngk.State.FULL_STACK;
        else if(private_etat === Lyngk.State.VACANT)
            private_etat = Lyngk.State.ONE_PIECE;
        else if(private_etat === Lyngk.State.ONE_PIECE)
            private_etat = Lyngk.State.STACK;
    }
};
"use strict";
Lyngk.CoordValides = [[3,3],[2,5],[1,7],[2,7],[2,8],[3,8],[3,9],[5,8],[7,7]];

Lyngk.coordValides = [[3,3],[2,5],[1,7],[2,7],[2,8],[3,8],[3,9],[5,8],[7,7]];


Lyngk.Coordinates = function (c, l) {

    var private_c;
    var private_l;

    var init = function (c, l) {
        private_c = c;
        private_l = l;
    };

    init(c, l);

    this.valide = function()
    {
        return (Lyngk.coordValides[c.charCodeAt(0) - 'A'.charCodeAt(0)][0] <= l && l <= Lyngk.coordValides[c.charCodeAt(0) - 'A'.charCodeAt(0)][1]);

    };

    this.sommeCoord = function()
    {
        var somme = 0;

        for(var i in Lyngk.CoordValides)
            somme += Lyngk.CoordValides[i][1] - Lyngk.CoordValides[i][0] + 1;

        return somme;
    };

    this.toString = function()
    {
        if(this.valide() === false)
            return "invalid";
        else return ""+ c + l;

    };

    this.clonage = function()
    {

        return new Lyngk.Coordinates(private_c, private_l);
    };

    this.comparaison = function(coord) {

        return private_c === coord.get_c() && private_l === coord.get_l();
    };

    this.get_c = function() {
        return private_c;
    };

    this.get_l = function() {
        return private_l;
    };

    this.hash = function()
    {
        return parseInt("" + (private_c.charCodeAt(0) - 64) + private_l);
    }
};
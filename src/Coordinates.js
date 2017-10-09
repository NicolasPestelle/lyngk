"use strict";

Lyngk.Coordinates = function (c, l) {
    var coordValide = [[3,3],[2,5],[1,7],[2,7],[2,8],[3,8],[3,9],[5,8],[7,7]];

    var private_c = c;
    var private_cl = l;

    this.est_Valide = function () {
        return (coordValide[c.charCodeAt(0) - 'A'.charCodeAt(0)][0] <= l && l <= coordValide[c.charCodeAt(0) - 'A'.charCodeAt(0)][1]);
    };

    this.nbTotalPositionValide = function () {
        var somme = 0;
        for(var i in coordValide){
            somme += coordValide[i][1] - coordValide[i][0]+1;
        }
        return somme;
    }

    this.toString = function () {

        if(this.est_Valide()==false){
            return "invalid";
        }else {
            return "" + c + l;
        }
    }
};

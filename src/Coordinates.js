"use strict";

Lyngk.Coordinates = function (c, l) {
    var coordValide = [[3,3],[2,5],[1,7],[2,7],[2,8],[3,8],[3,9],[5,8],[7,7]];

    var private_c = c;
    var private_cl = l;

    this.est_Valide = function () {
        return (coordValide[c.charCodeAt(0) - 'A'.charCodeAt(0)][0] < l && l < coordValide[c.charCodeAt(0) - 'A'.charCodeAt(0)][1]);
    };

};

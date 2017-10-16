"use strict";
// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Engine = function () {
    var plateau = [];
    var j = 0;
    var tabCoordValid = [];
    var good_coord = function () {
        for(var i in Lyngk.CoordValides)
            if(Lyngk.CoordValides[i][1] === Lyngk.CoordValides[i][0])
                tabCoordValid.push(new Lyngk.Coordinates(String.fromCharCode(i+65),Lyngk.CoordValides[i][1]));
            else if(Lyngk.CoordValides[i][1] !== Lyngk.CoordValides[i][0])
            {
                var tmp = Lyngk.CoordValides[i][0];
                while(tmp <= Lyngk.CoordValides[i][1])
                {
                    tabCoordValid.push(new Lyngk.Coordinates(String.fromCharCode(i+65),tmp));
                    tmp++;
                }
            }
    };
    this.getTaille = function()
    {
        return plateau.length;
    };
    var initPlateau = function () {
        for(var i in tabCoordValid)
            plateau.push(new Lyngk.Intersection(tabCoordValid[i]));
    };
    var remplirPlateau = function()
    {
// for(var i in plateau)
// plateau[i].placerPion(Lyngk.Color.BLACK);
        var cptCouleur = [8,8,8,8,8,3];
        var couleur;
        for(var i in plateau)
        {
            couleur = Math.floor(Math.random() * 6);
            while(cptCouleur[couleur] === 0)
                couleur = Math.floor(Math.random() * 6);
            plateau[i].placerPion(couleur);
            cptCouleur[couleur]--;
        }
    };
    this.getCase = function(i) {
        return plateau[i];
    };

    this.getCaseCoord = function (coord) {


        for(var i in plateau){
            if (plateau[i].get_coord().toString() === coord)
                return plateau[i];
        }

    };
    
    this.deplacerPion = function (coord1,coord2) {
        var src = this.getCaseCoord(coord1);
        var dest = this.getCaseCoord(coord2);

        var tmp = src.lastElementPile();
        src.popPile();
       // this.getCaseCoord(coord2).pushPile(tmp);
    };

    good_coord();
    initPlateau();
    remplirPlateau();
};
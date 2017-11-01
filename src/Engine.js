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
            {

                tabCoordValid.push(new Lyngk.Coordinates(String.fromCharCode(parseInt(i)+65),Lyngk.CoordValides[i][1]));
            }

            else
            {
                var tmp = Lyngk.CoordValides[i][0];

                while(tmp <= Lyngk.CoordValides[i][1])
                {
                    tabCoordValid.push(new Lyngk.Coordinates(String.fromCharCode(parseInt(i)+65),tmp));
                    tmp++;
                }

            }


    }


    this.getTaille = function()
    {
        return plateau.length;
    }

    var initPlateau = function () {
        for(var i in tabCoordValid)
        {
            plateau.push(new Lyngk.Intersection(tabCoordValid[i]));

        }


    }

    var remplirPlateau = function()
    {
        // for(var i in plateau)
        //     plateau[i].placerPion(Lyngk.Color.BLACK);
        var cptCouleur = [8,8,8,8,8,3];
        var couleur;
        for(var i in plateau)
        {
            couleur =  Math.floor(Math.random() * 6);

            while(cptCouleur[couleur] === 0)
                couleur =  Math.floor(Math.random() * 6);

            plateau[i].placerPion(couleur);
            cptCouleur[couleur]--;
        }


    }

    this.get_case_coord = function(c) // Refondre avec le hashcode (hashcode = indice tab) refaire le hashcode
    {
        for(var i in plateau)
        {
            if(plateau[i].get_coord().toString() === c)
                return plateau[i];
        }
    }

    this.deplacer_pion = function(src, dest)
    {
        var source = this.get_case_coord(src); //plateau[i]
        var destination = this.get_case_coord(dest); // plateau[j]
        var tmp =source.get_pile(source.get_taille_pile()-1);
        source.pop_pile();
        destination.placerPion(tmp);


    }

    this.getCase = function(i) {
        return plateau[i];
    }

    good_coord();
    initPlateau();
    remplirPlateau();

};
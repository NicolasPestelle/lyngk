"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {


    var plateau = [];
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


    };


    this.getTaille = function()
    {
        return plateau.length;
    };

    var initPlateau = function () {
        for(var i in tabCoordValid)
        {
            plateau.push(new Lyngk.Intersection(tabCoordValid[i]));

        }


    };

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


    };


    this.get_case_coord = function(c) // Refaire avec le hashcode (hashcode = indice tab) refaire le hashcode ??
    {
        for(var i in plateau)
        {
            if(plateau[i].get_coord().toString() === c)
                return plateau[i];
        }
    };


    this.est_adjacent = function (src, dest) {

        var source = this.get_case_coord(src);

        var destination = this.get_case_coord(dest);

        var colDest = destination.get_coord().get_c().charCodeAt(0);
        var colSrc = source.get_coord().get_c().charCodeAt(0);


        if (colSrc === colDest){
            if( destination.get_coord().get_l()+1 === source.get_coord().get_l() ||  destination.get_coord().get_l()-1 === source.get_coord().get_l()){
                return true;
            }else {
                return false;
            }
        }
        else if (colDest === colSrc+1 ){
            if(  destination.get_coord().get_l() === source.get_coord().get_l()+1 || destination.get_coord().get_l() === source.get_coord().get_l()){
                return true;
            }else {
                return false;
            }
        }else if(colDest === colSrc-1){
            if(destination.get_coord().get_l() === source.get_coord().get_l()-1 || destination.get_coord().get_l() === source.get_coord().get_l() ){
                return true;
            }else {
                return false;
            }
        }
    };

    this.tailleValide = function(src,dest) {

        var source = this.get_case_coord(src);

        var destination = this.get_case_coord(dest);

        if(source.get_taille_pile() < destination.get_taille_pile()){
            return false;
        }


        if(source.get_taille_pile()+destination.get_taille_pile() <= 5){
            return true;
        }else{
            return false;
        }

    };

    this.deplacer_pion = function(src, dest)
    {
        var source = this.get_case_coord(src);

        var destination = this.get_case_coord(dest);

        var tmp = source.get_full_pile();

        if (destination.get_taille_pile() != 0 && this.est_adjacent(src,dest) === true && this.tailleValide(src,dest) === true) {

            for (var i in tmp) {
                destination.placerPion(tmp[i]);
            }

            while (source.get_taille_pile() != 0) {
                source.pop_pile();
            }

        }


    };

    this.getCase = function(i) {
        return plateau[i];
    };

    good_coord();
    initPlateau();
    remplirPlateau();

};
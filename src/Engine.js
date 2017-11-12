"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Joueur = {Joueur1: 1, Joueur2: 2};


Lyngk.Engine = function () {


    var plateau = [];
    var tabCoordValid = [];
    var tour = 1;
    var couleurJ1 = [];
    var couleurJ2 = [];

    function coord(fromCharCode, coordValid) {
        return new Lyngk.Coordinates(fromCharCode, coordValid[1]);
    }

    function goodCoordCondition(i) {
        var fromCharCode = String.fromCharCode(parseInt(i) + 65);
        var coordValid = Lyngk.coordValides[i];
        if (coordValid[1] === coordValid[0]) {

            var coordinates = coord(fromCharCode, coordValid);
            tabCoordValid.push(coordinates);
        } else {
            var tmp = coordValid[0];

            while (tmp <= coordValid[1]) {
                tabCoordValid.push(new Lyngk.Coordinates(fromCharCode, tmp));
                tmp++;
            }

        }
        return tmp;
    }

    var goodCoord = function () {
        var tmp;
        var index;
        for ( index in Lyngk.coordValides) {
            tmp = goodCoordCondition(index);

        }

    };


    this.getSize = function () {
        return plateau.length;
    };

    var initPlateau = function () {
        tabCoordValid.forEach(function (element) {
            plateau.push(new Lyngk.Intersection(element));

        });


    };

    function randColor() {
        return Math.floor(Math.random() * 6);
    }

    var remplirPlateau = function () {
        var cptCouleur = [8, 8, 8, 8, 8, 3];
        var couleur;
        var index;

        for (index in plateau) {
            couleur = randColor();

            while (cptCouleur[couleur] === 0) {
                couleur = randColor();
            }

            plateau[index].placePiece(couleur);
            cptCouleur[couleur]--;
        }


    };


    this.getCaseCoord = function (c) {
        var index;
        for ( index in plateau) {
            if (plateau[index].getCoord().toString() === c) {
                return plateau[index];
            }
        }
    };


    this.tourJoueur = function () {
        if (tour % 2 === 0) {
            return 2;
        } else {
            return 1;
        }
    };

    function adjacentCondition(colSrc, colDest, flag, coordLine, srcLine) {
        if (colSrc === colDest) {
            flag = coordLine + 1 === srcLine || coordLine - 1 === srcLine;
        }
        if (colSrc + 1 === colDest) {
            flag = coordLine === srcLine + 1 || coordLine === srcLine;
        }
        if (colSrc - 1 === colDest) {
            flag = coordLine === srcLine - 1 || coordLine === srcLine;
        }
        return flag;
    }

    this.isAdjacent = function (src, dest) {

        var source = this.getCaseCoord(src);
        var destination = this.getCaseCoord(dest);
        var colDest = destination.getCoord().getColumn().charCodeAt(0);
        var colSrc = source.getCoord().getColumn().charCodeAt(0);
        var srcLine = source.getCoord().getLine();
        var coordLine = destination.getCoord().getLine();
        var flag;

        flag = adjacentCondition(colSrc, colDest, flag, coordLine, srcLine);

        return flag;
    };

    this.validSize = function (src, dest) {

        var source = this.getCaseCoord(src);

        var destination = this.getCaseCoord(dest);

        if (source.getSizePile() < destination.getSizePile()) {
            return false;
        }

        if (source.getSizePile() + destination.getSizePile() <= 5) {
            return true;
        } else {
            return false;
        }

    };

    this.play = function (src, dest) {
        this.movePiece(src, dest);
        tour++;
    };

    function reclaimCondition(joueur, couleur) {
        if (joueur === Lyngk.Joueur.Joueur1) {
            couleurJ1.push(couleur);
        }
        else {
            couleurJ2.push(couleur);
        }
    }

    this.reclaim = function (joueur, couleur) {
        for (var i in couleurJ1) {
            if (couleurJ1[i] === couleur) {
                return false;
            }
        }

        for (var j in couleurJ2) {
            if (couleurJ2[j] === couleur) {
                return false;
            }
        }

        reclaimCondition(joueur, couleur);

    };

    this.getColorReclaim = function (joueur) {
        if (joueur === Lyngk.Joueur.Joueur1) {
            return couleurJ1[0];
        } else {
            return couleurJ2[0];
        }
    };

    this.movePiece = function (src, dest) {
        var source = this.getCaseCoord(src);

        var destination = this.getCaseCoord(dest);

        var tmp = source.getFullPile();

        var dstPileSize = destination.getSizePile() !== 0;
        var adjacent = this.isAdjacent(src, dest) === true;
        var validSize = this.validSize(src, dest) === true;
        if (dstPileSize && adjacent && validSize) {

            tmp.forEach(function (element) {
                destination.placePiece(element);
            });

            while (source.getSizePile() !== 0) {
                source.popPile();
            }

        }


    };

    this.getCase = function (i) {
        return plateau[i];
    };

    goodCoord();
    initPlateau();
    remplirPlateau();


};
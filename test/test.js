"use strict";
var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testHistoireUn = function(){
    var coord = new Lyngk.Coordinates("A", 3);
    assertTrue(coord.Valid() === true);
};
LyngkTestCase.prototype.testHistoireDeux = function(){
    var coord = new Lyngk.Coordinates("A", 1);
    var somme = coord.sumCoord();
    assertTrue(somme === 43);
};
LyngkTestCase.prototype.testHistoireTrois = function(){
    var coord = new Lyngk.Coordinates("B", 2);
    assertTrue(coord.toString() === "B2");
};
LyngkTestCase.prototype.testHistoireQuatre = function(){
    var coord = new Lyngk.Coordinates("A", 1);
    assertTrue(coord.toString() === "invalid");
};
LyngkTestCase.prototype.testHistoireCinq = function(){
    var coord = new Lyngk.Coordinates("C", 3);
    var coord2 = coord.clone();
    assertTrue(coord.compair(coord2) === true);
};
LyngkTestCase.prototype.testHistoireSix = function(){
    var coord = new Lyngk.Coordinates("C", 4);
    var testHash = coord.hash();
    assertTrue(testHash === 34 );
};
LyngkTestCase.prototype.testHistoireSept = function(){
    var inter = new Lyngk.Intersection();
    assertTrue(inter.getState() === Lyngk.State.VACANT);
};
LyngkTestCase.prototype.testHistoireHuit = function(){
    var inter = new Lyngk.Intersection();
    inter.placePiece(Lyngk.Color.BLUE);
    assertTrue(inter.getColor() === Lyngk.Color.BLUE && inter.getState() === Lyngk.State.ONE_PIECE);
};
LyngkTestCase.prototype.testHistoireNeuf = function(){
    var inter = new Lyngk.Intersection();
    inter.placePiece(Lyngk.Color.BLUE);
    inter.placePiece(Lyngk.Color.RED);
    assertTrue(inter.getColor() === Lyngk.Color.RED && inter.getState() === Lyngk.State.STACK);
};
LyngkTestCase.prototype.testHistoireDix = function(){
    var inter = new Lyngk.Intersection();
    inter.placePiece(Lyngk.Color.BLUE);
    inter.placePiece(Lyngk.Color.RED);
    inter.placePiece(Lyngk.Color.IVORY);
    inter.placePiece(Lyngk.Color.BLACK);
    inter.placePiece(Lyngk.Color.GREEN);
    assertTrue(inter.getColor() === Lyngk.Color.GREEN && inter.getState() === Lyngk.State.FULL_STACK);
};
LyngkTestCase.prototype.testHistoireOnze = function(){
    var jeu = new Lyngk.Engine();
    var flag = false;
    if(jeu.getCase(0).getState() === Lyngk.State.ONE_PIECE)
        flag = true;
    for(var i = 0 ; i < jeu.getSize(); i++)
    {
        if(jeu.getCase(i).getState() !== Lyngk.State.ONE_PIECE)
            flag = false;
    }
    assertTrue(flag);
};
LyngkTestCase.prototype.testHistoireDouze = function(){
    var jeu = new Lyngk.Engine();
    var flag = true;
    var cptCouleur = [0,0,0,0,0,0];
    var couleurAttendue = [8,8,8,8,8,3];
    for(var i = 0 ; i < jeu.getSize(); i++)
        cptCouleur[jeu.getCase(i).getColor()]++;
// console.log(jeu.getCase(i).getColor());
    for(var j in cptCouleur)
        if (cptCouleur[j] !== couleurAttendue[j]) flag = false;

    assertTrue(flag);
};

LyngkTestCase.prototype.testHistoireTreize = function () {
    var jeu = new Lyngk.Engine();
    var flag = true;
    for (var i = 0 ; i < jeu.getSize(); i++){
        if(jeu.getCase(i).getSizePile() !==1)
            flag = false;
    }

    assertTrue(flag);

};
LyngkTestCase.prototype.testHistoireQuatorze = function(){
    var jeu = new Lyngk.Engine();
    assertTrue(jeu.getCase(0).getColorPile() === jeu.getCase(0).getColor());
};

LyngkTestCase.prototype.testHistoireQuinze = function(){
    var jeu = new Lyngk.Engine();
    var couleur = jeu.getCaseCoord("A3").getColor();
    jeu.movePiece("A3","B3");
    assertTrue(jeu.getCaseCoord("A3").getState() === Lyngk.State.VACANT &&  jeu.getCaseCoord("B3").getColor() === couleur);
};

LyngkTestCase.prototype.testHistoireSeize = function () {
    var jeu = new Lyngk.Engine();
    jeu.movePiece("A3","B3");
    jeu.movePiece("B3","B2");
    var couleur = jeu.getCaseCoord("B3").getColor();
    assertTrue(jeu.getCaseCoord("B3").getState() === Lyngk.State.VACANT &&  jeu.getCaseCoord("B2").getColor() === couleur && jeu.getCaseCoord("B2").getSizePile() === 3);
};

LyngkTestCase.prototype.testHistoireDixSept = function () {
    var jeu = new Lyngk.Engine();
    jeu.movePiece("B2","B3");
    jeu.movePiece("B3","B2");
    var couleur = jeu.getCaseCoord("B3").getColor();
    var taille = jeu.getCaseCoord("B3").getSizePile();
    assertTrue(jeu.getCaseCoord("B2").getState() === Lyngk.State.VACANT &&  jeu.getCaseCoord("B3").getColor() === couleur && jeu.getCaseCoord("B3").getSizePile() === taille);
};

LyngkTestCase.prototype.testHistoireDixHuit = function () {
    var jeu = new Lyngk.Engine();
     jeu.movePiece("B2","B3");
     var couleurC2 = jeu.getCaseCoord("C2").getColor();
     var tailleC2 = jeu.getCaseCoord("C2").getSizePile();
     var couleurB3 = jeu.getCaseCoord("B3").getColor();
     var tailleB3 = jeu.getCaseCoord("B3").getSizePile();
     jeu.movePiece("B3","C2");
     assertTrue(jeu.getCaseCoord("B3").getColor() === couleurB3 && jeu.getCaseCoord("C2").getColor() === couleurC2 && jeu.getCaseCoord("B3").getSizePile() === tailleB3 && jeu.getCaseCoord("C2").getSizePile() === tailleC2);
};

LyngkTestCase.prototype.testHistoireDixNeuf = function () {
     var jeu = new Lyngk.Engine();
     var couleurB2 = jeu.getCaseCoord("B2").getColor();
     jeu.movePiece("B2","B3");
     var tailleB3 = jeu.getCaseCoord("B3").getSizePile();
     var couleurB5 = jeu.getCaseCoord("B5").getColor();
     var tailleB5 = jeu.getCaseCoord("B5").getSizePile();
     jeu.movePiece("B3","B5");
     assertTrue(jeu.getCaseCoord("B3").getColor() === couleurB2 && jeu.getCaseCoord("B5").getColor() === couleurB5 && jeu.getCaseCoord("B5").getSizePile() === tailleB5 && jeu.getCaseCoord("B3").getSizePile() === tailleB3);
};

LyngkTestCase.prototype.testHistoireVingt = function () {
    var jeu = new Lyngk.Engine();

    jeu.movePiece("A3","B3");
    jeu.movePiece("B3","B2");
    jeu.movePiece("B2","C2");
    jeu.movePiece("C2","D2");

    var tailleD2 = jeu.getCaseCoord("D2").getSizePile();
    var couleurD2 = jeu.getCaseCoord("D2").getColor();

    var tailleE2 = jeu.getCaseCoord("E2").getSizePile();
    var couleurE2 = jeu.getCaseCoord("E2").getColor();

    jeu.movePiece("D2","E2");

    assertTrue(jeu.getCaseCoord("D2").getColor() === couleurD2 && jeu.getCaseCoord("D2").getColor() === couleurD2 && jeu.getCaseCoord("E2").getSizePile() === tailleE2 && jeu.getCaseCoord("E2").getSizePile() === tailleE2);
};

LyngkTestCase.prototype.testHistoireVingtEtUn = function () {
    var jeu = new Lyngk.Engine();

    jeu.movePiece("A3","B3");

    var tailleB3 = jeu.getCaseCoord("B3").getSizePile();
    var couleurB3 = jeu.getCaseCoord("B3").getColor();

    var tailleC3 = jeu.getCaseCoord("C3").getSizePile();
    var couleurC3 = jeu.getCaseCoord("C3").getColor();

    jeu.movePiece("C3","B3");


    assertTrue(jeu.getCaseCoord("B3").getColor() === couleurB3 && jeu.getCaseCoord("B3").getColor() === couleurB3 && jeu.getCaseCoord("C3").getSizePile() === tailleC3 && jeu.getCaseCoord("C3").getSizePile() === tailleC3);
};

LyngkTestCase.prototype.testHistoireVingtDeux = function () {
    var jeu = new Lyngk.Engine();

    jeu.movePiece("I7","H6");

    var tailleH6 = jeu.getCaseCoord("H6").getSizePile();
    var couleurH6 = jeu.getCaseCoord("H6").getColor();

    jeu.movePiece("G4","G5");
    jeu.movePiece("G5","G6");

    var tailleG6 = jeu.getCaseCoord("G6").getSizePile();
    var couleurG6 = jeu.getCaseCoord("G6").getColor();

    jeu.movePiece("H6","G6");

    assertTrue(jeu.getCaseCoord("H6").getColor() === couleurH6 && jeu.getCaseCoord("G6").getColor() === couleurG6 && jeu.getCaseCoord("H6").getSizePile() === tailleH6 && jeu.getCaseCoord("G6").getSizePile() === tailleG6);
};

/*LyngkTestCase.prototype.testHistoireVingtTrois = function () {
    var jeu = new Lyngk.Engine();



    jeu.getCaseCoord("D2").setColor(Lyngk.Color.BLUE);
    jeu.getCaseCoord("D3").setColor(Lyngk.Color.WHITE);
    jeu.getCaseCoord("D4").setColor(Lyngk.Color.WHITE);
    jeu.getCaseCoord("D5").setColor(Lyngk.Color.RED);
    jeu.getCaseCoord("D6").setColor(Lyngk.Color.BLUE);

    jeu.movePiece("D2","D3");
    jeu.movePiece("D3","D4");
    jeu.movePiece("D4","D5");
    jeu.movePiece("D5","D6");

    var tailleD6 = jeu.getCaseCoord("D6").getSizePile();
    var couleurD6 = jeu.getCaseCoord("D6").getColor();

    var tailleD3 = jeu.getCaseCoord("D3").getSizePile();
    var couleurD3 = jeu.getCaseCoord("D3").getColor();


    assertTrue(couleurD3 === Lyngk.Color.BLUE && couleurD6 === Lyngk.Color.RED && tailleD3 === 3 && tailleD6 === 2);

};*/

LyngkTestCase.prototype.testHistoireVingtQuatre = function () {

    var jeu = new Lyngk.Engine();

    assertTrue(jeu.tourJoueur() === 1);

};

LyngkTestCase.prototype.testHistoireVingtCinq = function () {

    var jeu = new Lyngk.Engine();

    jeu.play("B2","B3");

    assertTrue(jeu.tourJoueur() === 2);

};

LyngkTestCase.prototype.testHistoireVingtSix = function () {

    var jeu = new Lyngk.Engine();
    jeu.getCaseCoord("B3").setColor(Lyngk.Color.BLUE)

    jeu.reclaim(1,Lyngk.Color.RED);
    jeu.reclaim(2,Lyngk.Color.RED);

    jeu.play("B3","B2");

    assertTrue(jeu.getColorReclaim(1) === Lyngk.Color.RED && jeu.tourJoueur() === 2 && jeu.getColorReclaim(2) != Lyngk.Color.RED);

};

/*LyngkTestCase.prototype.testHistoireVingtSept = function(){
        var jeu = new Lyngk.Engine();
        jeu.getCaseCoord("A3").setColor(Lyngk.Color.BLUE);
        jeu.reclaim(1,Lyngk.Color.BLUE);
        jeu.play("A3","B3");
        jeu.play("H6","G5");
        jeu.play("B3","C3");
        jeu.play("G5","G6");
        jeu.play("C3","C2");
        jeu.play("G6","H7");
        jeu.play("C2","D2");
        assertTrue(jeu.ScoreJ1 === 1 && jeu.getCaseCoord("D2").getState() === Lyngk.State.VACANT);
};*/
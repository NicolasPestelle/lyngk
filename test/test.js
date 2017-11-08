"use strict";
var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testHistoireUn = function(){
    var coord = new Lyngk.Coordinates("A", 3);
    assertTrue(coord.valide() === true);
};
LyngkTestCase.prototype.testHistoireDeux = function(){
    var coord = new Lyngk.Coordinates("A", 1);
    var somme = coord.sommeCoord();
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
    var coord2 = coord.clonage();
    assertTrue(coord.comparaison(coord2) === true);
};
LyngkTestCase.prototype.testHistoireSix = function(){
    var coord = new Lyngk.Coordinates("C", 4);
    var testHash = coord.hash();
    assertTrue(testHash === 34 );
};
LyngkTestCase.prototype.testHistoireSept = function(){
    var inter = new Lyngk.Intersection();
    assertTrue(inter.get_etat() === Lyngk.State.VACANT);
};
LyngkTestCase.prototype.testHistoireHuit = function(){
    var inter = new Lyngk.Intersection();
    inter.placerPion(Lyngk.Color.BLUE);
    assertTrue(inter.get_color() === Lyngk.Color.BLUE && inter.get_etat() === Lyngk.State.ONE_PIECE);
};
LyngkTestCase.prototype.testHistoireNeuf = function(){
    var inter = new Lyngk.Intersection();
    inter.placerPion(Lyngk.Color.BLUE);
    inter.placerPion(Lyngk.Color.RED);
    assertTrue(inter.get_color() === Lyngk.Color.RED && inter.get_etat() === Lyngk.State.STACK);
};
LyngkTestCase.prototype.testHistoireDix = function(){
    var inter = new Lyngk.Intersection();
    inter.placerPion(Lyngk.Color.BLUE);
    inter.placerPion(Lyngk.Color.RED);
    inter.placerPion(Lyngk.Color.IVORY);
    inter.placerPion(Lyngk.Color.BLACK);
    inter.placerPion(Lyngk.Color.GREEN);
    assertTrue(inter.get_color() === Lyngk.Color.GREEN && inter.get_etat() === Lyngk.State.FULL_STACK);
};
LyngkTestCase.prototype.testHistoireOnze = function(){
    var jeu = new Lyngk.Engine();
    var flag = false;
    if(jeu.getCase(0).get_etat() === Lyngk.State.ONE_PIECE)
        flag = true;
    for(var i = 0 ; i < jeu.getTaille(); i++)
    {
        if(jeu.getCase(i).get_etat() !== Lyngk.State.ONE_PIECE)
            flag = false;
    }
    assertTrue(flag);
};
LyngkTestCase.prototype.testHistoireDouze = function(){
    var jeu = new Lyngk.Engine();
    var flag = true;
    var cptCouleur = [0,0,0,0,0,0];
    var couleurAttendue = [8,8,8,8,8,3];
    for(var i = 0 ; i < jeu.getTaille(); i++)
        cptCouleur[jeu.getCase(i).get_color()]++;
// console.log(jeu.getCase(i).get_color());
    for(var j in cptCouleur)
        if (cptCouleur[j] !== couleurAttendue[j]) flag = false;

    assertTrue(flag);
};

LyngkTestCase.prototype.testHistoireTreize = function () {
    var jeu = new Lyngk.Engine();
    var flag = true;
    for (var i = 0 ; i < jeu.getTaille(); i++){
        if(jeu.getCase(i).get_taille_pile() !==1)
            flag = false;
    }

    assertTrue(flag);

};
LyngkTestCase.prototype.testHistoireQuatorze = function(){
    var jeu = new Lyngk.Engine();
    assertTrue(jeu.getCase(0).get_couleur_pile() === jeu.getCase(0).get_color());
};

LyngkTestCase.prototype.testHistoireQuinze = function(){
    var jeu = new Lyngk.Engine();
    var couleur = jeu.get_case_coord("A3").get_color();
    jeu.deplacer_pion("A3","B3");
    assertTrue(jeu.get_case_coord("A3").get_etat() === Lyngk.State.VACANT &&  jeu.get_case_coord("B3").get_color() === couleur);
};

LyngkTestCase.prototype.testHistoireSeize = function () {
    var jeu = new Lyngk.Engine();
    jeu.deplacer_pion("A3","B3");
    jeu.deplacer_pion("B3","B2");
    var couleur = jeu.get_case_coord("B3").get_color();
    assertTrue(jeu.get_case_coord("B3").get_etat() === Lyngk.State.VACANT &&  jeu.get_case_coord("B2").get_color() === couleur && jeu.get_case_coord("B2").get_taille_pile() === 3);
};

LyngkTestCase.prototype.testHistoireDixSept = function () {
    var jeu = new Lyngk.Engine();
    jeu.deplacer_pion("B2","B3");
    jeu.deplacer_pion("B3","B2");
    var couleur = jeu.get_case_coord("B3").get_color();
    var taille = jeu.get_case_coord("B3").get_taille_pile();
    assertTrue(jeu.get_case_coord("B2").get_etat() === Lyngk.State.VACANT &&  jeu.get_case_coord("B3").get_color() === couleur && jeu.get_case_coord("B3").get_taille_pile() === taille);
};
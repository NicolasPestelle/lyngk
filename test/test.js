"use strict";

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testHistoire1 = function () {
    var x = new Lyngk.Coordinates("A",1);
    assertTrue(x.est_Valide() == false);
};

//ne pas oublier de verif au fur et a mesure que les coord sont valide !
LyngkTestCase.prototype.testHistoire2 = function () {
  var x = new Lyngk.Coordinates("A",1);
  assertTrue(x.nbTotalPositionValide() == 43);
};

LyngkTestCase.prototype.testHistoire3 = function () {
    var x = new Lyngk.Coordinates("A",3);
    assertTrue(x.toString() === "A3");
}

LyngkTestCase.prototype.testHistoire4 = function () {
    var x = new Lyngk.Coordinates("A",1);
    assertTrue(x.toString() === "invalid");
}

LyngkTestCase.prototype.testHistoire5 = function () {
    var x = new Lyngk.Coordinates("A",1);
    var y = x.clone();//clone de x
    assertTrue(x.equals(y));
}

LyngkTestCase.prototype.testEquals = function () {
    var x = new Lyngk.Coordinates("A",1);
    var y = new Lyngk.Coordinates("A",1);//clone de x
    assertTrue(x.equals(y) === true);
}

LyngkTestCase.prototype.testHistoire6 = function () {
    var x = new Lyngk.Coordinates("C",3);
    var tHash = x.hash();
    assertTrue(tHash === 33);
}

LyngkTestCase.prototype.testHistoire7 = function () {
    var x = new Lyngk.Intersection();
    assertTrue(x.get_etat() === Lyngk.State.VACANT);
}

LyngkTestCase.prototype.testHistoire8 = function () {
    var x = new Lyngk.Intersection();
    x.placerPion(Lyngk.Color.BLUE);
    assertTrue(x.get_etat() == Lyngk.State.ONE_PIECE && x.get_color() == Lyngk.Color.BLUE);
}

LyngkTestCase.prototype.testHistoire9 = function () {
    var x = new Lyngk.Intersection();
    x.placerPion(Lyngk.Color.BLUE);
    x.placerPion(Lyngk.Color.RED);
    assertTrue(x.get_etat() === Lyngk.State.STACK && x.get_color() === Lyngk.Color.RED);
}
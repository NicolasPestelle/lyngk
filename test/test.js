"use strict";

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testHistoire1 = function () {
    var x = new Lyngk.Coordinates("A",1);
    assertTrue(x.est_Valide() == false);
};

LyngkTestCase.prototype.testHistoire2 = function () {
  var x = new Lyngk.Coordinates("A",1);
  assertTrue(x.nbTotalPositionValide() == 43);
};

LyngkTestCase.prototype.testHistoire3 = function () {
    var x = new Lyngk.Coordinates("A",3);
    assertTrue(x.toString() === "A3");
}
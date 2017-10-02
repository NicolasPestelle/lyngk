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
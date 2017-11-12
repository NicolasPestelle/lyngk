"use strict";
Lyngk.coordValides = [[3, 3], [2, 5], [1, 7], [2, 7], [2, 8], [3, 8], [3, 9], [5, 8], [7, 7]];


Lyngk.Coordinates = function (c, l) {

    var privateColumn;
    var privateLine;

    var init = function (column, line) {
        privateColumn = column;
        privateLine = line;
    };

    init(c, l);

    this.Valid = function () {
        var coordValid = Lyngk.coordValides[c.charCodeAt(0) - 'A'.charCodeAt(0)];
        var coordValidColumn = coordValid[0];
        var coordValidLine = coordValid[1];
        return (coordValidColumn <= l && l <= coordValidLine);

    };

    this.sumCoord = function () {
        var somme = 0;

        Lyngk.coordValides.forEach(function (element) {
            somme += element[1] - element[0] + 1;
        });

        return somme;
    };

    this.toString = function () {
        if (this.Valid() === false) {
            return "invalid";
        } else {
            return "" + c + l;
        }
    };

    this.clone = function () {

        return new Lyngk.Coordinates(privateColumn, privateLine);
    };

    this.compair = function (coord) {

        var prvtLine = privateLine === coord.getLine();
        var prvtClmn = privateColumn === coord.getColumn();
        return prvtClmn && prvtLine;
    };

    this.getColumn = function () {
        return privateColumn;
    };

    this.getLine = function () {
        return privateLine;
    };

    this.hash = function () {
        return parseInt("" + (privateColumn.charCodeAt(0) - 64) + privateLine);
    };
};
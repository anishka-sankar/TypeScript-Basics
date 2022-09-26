"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Football_1 = require("./Football");
var Hockey_1 = require("./Hockey");
var f = new Football_1.Football();
var h = new Hockey_1.Hockey();
var arr = [];
arr.push(f);
arr.push(h);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var c = arr_1[_i];
    console.log(c.getTraining());
}

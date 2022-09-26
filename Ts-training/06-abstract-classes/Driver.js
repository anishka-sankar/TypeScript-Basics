"use strict";
//importing class
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var c = new Circle_1.Circle(10, 20, 30);
var r = new Rectangle_1.Rectangle(10, 20, 30, 40);
//creating an array of shape
var shapes = [];
shapes.push(c);
shapes.push(r);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var sh = shapes_1[_i];
    console.log(sh.getInfo());
    console.log(sh.calculateArea());
}

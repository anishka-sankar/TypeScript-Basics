"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, l, br) {
        var _this = _super.call(this, x, y) || this;
        _this.l = l;
        _this.br = br;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.l * this.br;
    };
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this.l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "radius", {
        set: function (l) {
            this.l = l;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "breadth", {
        get: function () {
            return this.br;
        },
        set: function (br) {
            this.br = br;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (" L: " + this.l + " B: " + this.br);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;

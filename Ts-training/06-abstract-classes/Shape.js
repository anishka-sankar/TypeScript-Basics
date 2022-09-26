"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Shape.prototype, "a", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "b", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "X:" + this.x + " Y:" + this.y;
    };
    return Shape;
}());
exports.Shape = Shape;

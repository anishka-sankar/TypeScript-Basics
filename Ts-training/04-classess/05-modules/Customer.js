"use strict";
//exporting class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer1 = void 0;
var Customer1 = /** @class */ (function () {
    //shortcut for defining properties and initializing using constructor(to avoid boiler plate code)
    function Customer1(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this.fName;
        },
        set: function (fName) {
            this.fName = fName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this.lName;
        },
        set: function (lName) {
            this.lName = lName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
exports.Customer1 = Customer1;
var c = new Customer1("Rohee", "Romi");
console.log("from customer...  " + c.firstName + " " + c.lastName);

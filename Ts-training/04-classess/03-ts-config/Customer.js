var Customer1 = /** @class */ (function () {
    function Customer1() {
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
var c = new Customer1();
c.firstName = "Rohee";
c.lastName = "Romi";
console.log(c.firstName + " " + c.lastName);

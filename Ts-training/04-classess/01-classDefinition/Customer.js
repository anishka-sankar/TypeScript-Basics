var Customer = /** @class */ (function () {
    //constructor
    function Customer(firstName, lastName) {
        this.firstName = firstName; //this is compulsary to reference current class properties
        this.lastName = lastName;
    }
    return Customer;
}());
var d = new Customer("Rohee", "Romi");
console.log(d.firstName + " " + d.lastName);

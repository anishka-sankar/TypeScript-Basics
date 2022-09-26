class Customer{
    firstName:string;//properties(by default public)
    lastName:string;

    //constructor
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;//this is compulsary to reference current class properties
        this.lastName=lastName;
    }
}

let d=new Customer("Rohee","Romi");
console.log(d.firstName + " " + d.lastName);
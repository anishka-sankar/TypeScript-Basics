//exporting class

export class Customer1{
    
    //shortcut for defining properties and initializing using constructor(to avoid boiler plate code)
    constructor(private fName:string,private lName:string){

    }
    public get firstName():string{ // get<space>propertyName
        return this.fName;
    }

    public set firstName(fName:string){// no return type(void) is specified
        this.fName=fName;
    }

    public get lastName():string{ // get<space>propertyName
        return this.lName;
    }

    public set lastName(lName:string){// no return type(void) is specified
        this.lName=lName;
    }
}

let c=new Customer1("Rohee","Romi");
console.log("from customer...  " + c.firstName+" "+c.lastName);
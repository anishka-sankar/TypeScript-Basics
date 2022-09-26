class Customer1{
   private fName: string;//these property names will not be visible
   private lName: string;

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

let c=new Customer1();
c.firstName="Rohee";
c.lastName="Romi";

console.log(c.firstName+" "+c.lastName);
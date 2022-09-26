import { Shape } from "./Shape";


 export class Rectangle extends Shape{
    calculateArea(): number {
        return this.l * this.br;
    }

    constructor( x:number, y:number, private l:number, private br:number){
        super(x,y);
    }

    get length():number{
        return this.l;
    }

    set radius(l:number){
        this.l=l;
    }

    get breadth():number{
        return this.br;
    }

    set breadth(br:number){
        this.br=br;
    }

    getInfo():string{
        return super.getInfo() + ` L: ${this.l} B: ${this.br}`;
    }
}
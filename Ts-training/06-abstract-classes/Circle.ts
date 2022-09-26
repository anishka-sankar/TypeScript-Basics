import { Shape } from "./Shape";


export class Circle extends Shape{

    calculateArea(): number {
        return Math.PI*Math.pow(this.r,2);
    }

    constructor( x:number, y:number, private r:number){
        super(x,y);
    }

    get radius():number{
        return this.r;
    }

    set radius(r:number){
        this.r=r;
    }

    getInfo():string{
        return super.getInfo() + ` R: ${this.r}`;
    }
}
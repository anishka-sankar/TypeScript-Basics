export class Shape{
    constructor(private x:number,private y:number){

    }

    get a():number{
        return this.x;
    }

    set a(x:number){
        this.x=x;
    }

    get b():number{
        return this.y;
    }

    set b(y:number){
        this.y=y;
    }

    getInfo():string{
        return `X:${this.x} Y:${this.y}`
    }



}
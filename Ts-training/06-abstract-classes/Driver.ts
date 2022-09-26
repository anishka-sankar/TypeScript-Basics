//importing class

import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let c=new Circle(10,20,30);

let r=new Rectangle(10,20,30,40);

//creating an array of shape

let shapes: Shape[]=[];
shapes.push(c);
shapes.push(r);

for(let sh of shapes){
    console.log(sh.getInfo());
    console.log(sh.calculateArea());
}

import { Coach } from "./Coach";
import { Football } from "./Football";
import { Hockey } from "./Hockey";

let f=new Football();
let h=new Hockey();

let arr:Coach[]=[];
arr.push(f);
arr.push(h);

for(let c of arr){
    console.log(c.getTraining());
}

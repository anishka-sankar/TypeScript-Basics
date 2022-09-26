//Array declaration
let arr:number[] =[10,3,20,5,35,92];

//growable array
let fruits:string[] =["apple","banana","pineapple"];
fruits.push("gauva");

//basic for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//simplified for loop
for(let a of fruits){
    console.log(a);
}
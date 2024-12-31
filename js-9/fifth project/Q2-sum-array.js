console.log("Q2 sum of all array with for loop or for each looop : ");

console.log("Using for loop :");


let num = [1,2,3,4,5,6,7,8,9,10];
let sum = 0 ;

for (let index = 0; index < num.length; index++) {   
    sum += num[index];
}
console.log("Sum of array is : ",sum);

console.log("Using for each loop :");

let sumfor=0;

num.forEach( (value) =>  sumfor += value)
console.log("Sum of array is : ",sumfor);


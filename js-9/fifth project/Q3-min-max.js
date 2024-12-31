

console.log("Q3 find minimum or maximum value :");

let val = [1230,6435,5465,51,4891,8158];
let max = val[0] , min = val[0] ;

console.log(val);


for (let index = 0; index < val.length; index++) {
    if(val[index] > max){
        max = val[index];
    }
    if(val[index] < min){
        min = val[index];
    }
}

console.log("Maximum value is : ",max);
console.log("minimum value is : ",min);





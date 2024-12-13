
console.log("Q1 Enter Electricity Unit and calculate amount to pay .");


let  amt, extra , total;

let unit= +prompt("Enter Unite ...");


if(unit >= 50){
    amt = unit* 1;
    console.log("Bill is : ", amt);
    
}else if(unit >= 100){
    amt = ( unit*2) + (unit -50 * 1);
    console.log("Bill is : ", amt);
}else if(unit >= 200){
    amt = (unit * 3) + ( unit -100 * 2) + (unit -50 * 1) ;
    extra = amt * 0.20;
    total = amt + extra;
    console.log("Bill is : ", total);
}else if(unit >= 200){
    amt = (unit * 4) (unit -100 * 3) + ( unit -100 * 2) + (unit -50 * 1) ;
    extra = amt * 0.20;
    total = amt + extra;
    console.log("Bill is : ", total);
}else {
    console.log("Invalid Enter : ");   
}


/*
 unit =  250
 Bill is : 250 
*/




console.log("Q3 make intrest calculetor :");


let pamt = +prompt("Enter Prncipal amount >>>>>> ");
let time = +prompt("Enter Time amount >>>>>> ");
let fainal;

if (pamt> 3 || pamt <= 5){
    fainal = (pamt*3*time)/100; 
    console.log("Intrest is amount is : ", fainal);
}else if(pamt > 5 || pamt <= 8) {
    fainal = (pamt*5*time)/100; 
    console.log("Intrest is amount is : ", fainal);
}else if(pamt > 8 || pamt <= 12) {
    fainal = (pamt*12*time)/100; 
    console.log("Intrest is amount is : ", fainal);
}else if (pamt >= 12) {
    fainal = (pamt*15*time)/100;  
    console.log("Intrest is amount is : ", fainal);
}else{
    console.log("Please take a time ======/. ");
}


/*
  pamt = 15000
  time = 5 years 
  Intrest is amount is : 2250
*/







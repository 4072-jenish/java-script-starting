

console.log("Q4 calculate The income tax per income or persatages . ");

let income , tax;

if(income <= 2500){
    tax = income
}else if(income<=5000){
    tax = income*0.1;
}else if(income<=10000){
    tax = income*0.2;
}else if(income>15000){
    tax = income*0.3;
}else{
    console.log("kuchhe to kama berozgar : ");
    
}

if(tax > 0){
    console.log("Tax is : ", tax);
    
}





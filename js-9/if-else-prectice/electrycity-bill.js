
console.log("Q1 generate an electrycity bill by bill rate .");


let unit=115 , bill , extra , total;

if(unit >= 100){
    bill = unit* 0.6 + 50;
}else if(unit >= 200){
    bill = ( unit*0.8) + (unit -100 * 0.6) + 50;
}else if(unit >= 300){
    bill = (unit * 0.9) + ( unit -200 * 0.8) + (unit -100 * 0.6) + 50 ;
    extra = bill * 0.15;
    total = bill + extra;
}else {
    console.log("Invalid Enter : ");   
}

if(total > 0){
    console.log("Your Total bill is :", total);
}






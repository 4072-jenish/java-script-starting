

console.log("Q3 Calculate the salary to add hra and da  .");


let bsalary=15000, hra , da , fsalary;


if(bsalary >= 5000){
  hra = bsalary*0.008;
  da = bsalary*0.2;
}else if(bsalary <= 10000){
    hra = bsalary*0.012;
    da = bsalary*0.3;
}else if(bsalary <= 15000){
    hra = bsalary*0.015;
    da = bsalary*0.4;
}else if(bsalary > 15000){
    hra = bsalary*0.02;
    da = bsalary*0.5;
}else{
    console.log("Give more salary to your employee .");
    
}
fsalary = bsalary + hra + da ;

if(fsalary > 5000){
    console.log("Fainal Salary is : ", fsalary);
    
}



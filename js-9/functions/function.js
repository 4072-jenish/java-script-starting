

function addition(){
    let a= +prompt ("Enter the number :");
    let b= +prompt("Enter the number :");
    let total;
    total = a + b ;
    console.log("Addition is : ",total);
}

function substraction(){
    let a= +prompt ("Enter the number :");
    let b= +prompt("Enter the number :");
    let total;
    total = a - b ;
    console.log("Substraction is : ", total);
}

function multiplication(){
    let a= +prompt ("Enter the number :");
    let b= +prompt("Enter the number :");
    let total;
    total = a * b ;
    console.log("Multiplication is : ",total);
    
}

function division(){
    let a= +prompt ("Enter the number :");
    let b= +prompt("Enter the number :");
    let total;
    total = a / b ;
    console.log("Division is  : ",total);
}


console.log("Press 1 for addition .......");
console.log("Press 2 for substraction .......");
console.log("Press 3 for multiplication .......");
console.log("Press 4 for division .......");
console.log("Press 0 for exite progrgam .......");

let choise = +prompt("Enter your choise ");
switch (choise) {
    case 1:
        addition();
        break;
    case 2:
        substraction();
        break;
    case 3:
        multiplication();
        break;
    case 4:
        division();
        break;
    case 0:
        console.log("thank you ....");
        break;

    default:
        break;
}

    
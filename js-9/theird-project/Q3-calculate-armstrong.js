

console.log("Q3 find the Armstrong number for a given number:");

let sum = 0;
let num = +prompt('Enter a three-digit Number: ');
console.log(num);

let originalNum = num;
while (num > 0) {
    let rem = num % 10;
    sum = sum + (rem ** 3);
    num = Math.floor(num / 10); 
}

if (sum === originalNum) {
    console.log("The number is an Armstrong number");
} else {
    console.log("The number is not an Armstrong number.");
}




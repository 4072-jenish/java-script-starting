
console.log("Q4 Calculate the palindrome number:");

{let sum = 0;
let num = +prompt('Enter a three-digit number: ');
console.log(num);

let originalNum = num;
while (num > 0) {
let rem = num % 10;
sum = rem + (sum * 10);
num = Math.floor(num / 10);
}

if (sum === originalNum) {
console.log("The number is a palindrome number.");
} else {
console.log("The number is not a palindrome number.");
}}

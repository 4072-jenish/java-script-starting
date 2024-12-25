

console.log("Q1 make greeting message using with argument no retuern value program ..");


function  greeting(x) {
     console.log("Hello Good morning ^_^");
}

greeting(5);

/*
out put 
Q1 make greeting message using with argument no retuern value program ..
Hello Good morning ^_^
*/

console.log("*************************************************************************************************************");


console.log("Q2 find circale area ..");


function circale(r) {
     let area ;
     const pi = 3.14;
     area = pi*r*r;
     console.log("The area of circale is  : ", area);  
}

circale(25);

/*
out put 
Q2 find circale area ..
The area of circale is  :  1962.5
*/

console.log("*************************************************************************************************************");

console.log("Q3 find the area of traiangale : ");


function triangale (l , h) {
     let area ;
     area = (l*h)/2;
     console.log("area of triangale is : ",area );
}

triangale(5,8);
/*
out put 
Q3 find the area of traiangale : 
area of triangale is :  20
*/

console.log("*************************************************************************************************************");

console.log("Q4 find the area of rectangale  : ");

function rectangale(l , h) {
     let area ;
     area = l*h ;
     console.log("The area of rectangale is : ",area);
}

rectangale(5,6);
/*
out put 
Q4 find the area of rectangale  : 
The area of rectangale is :  30
*/

console.log("*************************************************************************************************************");

{
console.log("Q5 solwe the equetion : ((b*b)*(4*a*c))/(2*a)");

function ans1(a,b,c) {
     let ans ;
     ans = ((b*b)*(4*a*c))/(2*a);

     return ans ;
}

let ans = ans1(5,6,9);

console.log(ans);
}
/*
out put 
Q5 solwe the equetion : ((b*b)*(4*a*c))/(2*a)
648
*/


console.log("*************************************************************************************************************");

{
console.log("Q6 solwe the equetion : (a*a)+(2*a*b)+(b*b)");

function ans2(a,b) {
     let ans ;
     ans = (a*a)+(2*a*b)+(b*b);

     return ans ;
}

let ans = ans2(5,6);

console.log(ans);
}
/*
out put 
6 solwe the equetion : (a*a)+(2*a*b)+(b*b)
121
*/

console.log("*************************************************************************************************************");

{
console.log("Q7 ferenhit to celcius : ");

function ferenhit(f) {
     let ferenhit ;
     ferenhit = (f-32)/1.8;
     return ferenhit;
}

let ans = ferenhit(52);

console.log(ans);
}
/*
Q7 ferenhit to celcius : 
11.11111111111111
*/

console.log("*************************************************************************************************************");

{
console.log("Q8 celcius to ferenhit : ");

function celcius(c) {
     let celcius ;
     celcius = (c*1.8)+32;
     return celcius;
}

let ans = celcius(52);

console.log(ans);
}
/*
Q8 celcius to ferenhit : 
125.60000000000001
*/

console.log("*************************************************************************************************************");

{
console.log("Q9 find even or odd  : ");

function evenodd(num) {
     let evenodd;
     if(num%2==0){
          console.log("Number is even :");
     }else{
          console.log("Number is odd : ");
     }
}

evenodd(15);
}
/*
Q9 find even or odd  : 
Number is odd 
*/

console.log("*************************************************************************************************************");

{
console.log("Q10 swap the number : ");

function swap(a , b) {
     console.log("Before swaping number is a  or b", a , b);
      a=a+b;
      b=a-b;
      a=a-b;
      console.log("after swaping number is a  or b", a ,b);
}

swap(15,10);
}
/*
Q10 swap the number : 
Before swaping number is a  or b 15 10
after swaping number is a  or b 10 15
*/




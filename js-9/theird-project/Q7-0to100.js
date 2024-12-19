console.log("Q7 Display 0 to 100 number and sum that all number :  ");

{
    let n = 1, sum=0;

do{
if (n %3 == 0 ) {
    if (n%5==0) {
        console.log("FizzBuzz");    
    } else {
        console.log("Fizz"); 
    }
}else if (n%5==0) {
console.log("Buzz");      
}else{
    console.log(n);
}
n++;   
}while (n <= 100);

}



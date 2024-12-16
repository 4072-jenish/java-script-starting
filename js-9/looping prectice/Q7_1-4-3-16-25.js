
console.log("Q7 print 1-4-3-16-25 :");

{
    let  n = + prompt("Enter n ....");

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i); // Even terms are just the number
        } else {
            console.log(i * i); // Odd terms are squares
        }
      }
    
}

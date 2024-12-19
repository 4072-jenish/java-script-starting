
console.log("Q11 print the pattern : ");


{
    let i , j, val=1;
    
    for (let i = 1; i <= 5 ; i++) {
        let data = "";
       for (let j = 1; j <= i; j++) {
           data += val + " ";
           val++;
        }
        console.log(data);
    }
}
console.log("Question no. 05");

let posetive = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
let data = posetive.filter((value, index) => {
    return 0 < value;
})
console.log(data);
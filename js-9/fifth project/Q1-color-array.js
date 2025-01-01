

console.log("Q1 print the array in diffrent way :");

let mycolor = ["Red", "Green", "White", "Black" ];

let output1 = mycolor.join(",");
console.log("output-1:", output1);

let output2 = mycolor.join("+");
console.log("output-2:", output2);

let output3 = mycolor.slice(0, -1).join(",");
console.log("output-3:", output3);

let output4 = mycolor[0];
console.log("output-4:", output4);

let output5 = mycolor.slice(1, 3).join(",");
console.log("output-5:", output5);

let orange = [mycolor, "Orange"];
let output6 = orange.join(",");
console.log("output-6:", output6);

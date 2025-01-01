// Question no. 1
console.log("Question no. 01")
let mycolor = ["Red", "Green", "White", "Black" ]

let output1 = mycolor.join(",");
console.log("output-1:", output1);
// 1. Output: Red,Green,White,Black

let output2 = mycolor.join("+");
console.log("output-2:", output2);
// 2. Output: Red+Green+White+Black

let output3 = mycolor.slice(0, -1).join(",");
console.log("output-3:", output3);
// 3. Output: Red,Green,White

let output4 = mycolor[0];
console.log("output-4:", output4);
// 4. Output: Red

let output5 = mycolor.slice(1, 3).join(",");
console.log("output-5:", output5);
// 5. Output: Green,White

let orange = [mycolor, "Orange"];
let output6 = orange.join(",");
console.log("output-6:", output6);
// 6. Output: Red,Green,White,Black,Orange



// Question no. 02
console.log("Question no. 02")

console.log("Using for loop")
let a = [3, 4, 5, 6, 7, 8, 9]

let sum = 0
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i]
}
// Output - 42

console.log("All element sum is:", sum)

let sum1 = 0
console.log("using forEach loop")
a.forEach((num) => {
    sum1 += num
})
console.log("All element sum is :", sum1)
// Output - 42



//  Question no .03
console.log("Question no. 03")
let value = [1, 45, 2, 46, 23, 98, 23, 2]

let max = value[0], min = value[0]
console.log(value)

for (let i = 0; i < value.length; i++) {
    if (value[i] > max) {
        max = value[i];
    }

    if (value[i] < min) {
        min = value[i];
    }
}
console.log("Maximum value is :", max)
console.log("minimum value is :", min)
// Output max - 98
// Output min - 1


// Question no .04
console.log("Question no. 04")
let b = ['A', 'B', 'a', 'b'];
let datavalue = b.map(char => char.charCodeAt());

console.log(datavalue);
// Output - [65, 66, 97, 98]


// Question no .05
console.log("Question no. 05")
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]
data = numbers.filter((value, index) => {
    return 0 < value;
})
console.log(data);
// Output - [1, 5, 12, 19, 20]


// Question no .06
console.log("Question no. 06")
let arr = [2, 5, 6, 3, 8, 9,]

let square = arr.map(num => num * num);
console.log(square)
// Output - [4, 25, 36, 9, 64, 81]


//  Question no. 07
console.log("Question no. 07")
let number = [23, 20, 17, 12, 5, 1, 5, 12, 19, 20];

number.sort((a, b) => a - b);
console.log(number);
// Output - [1, 5, 5, 12, 12, 17, 20, 20, 23]
number.reverse((a, b) => a - b);
console.log(number);
// Output - [23, 20, 20, 17, 12, 12, 5, 5, 1]

let mycolor1 = ["Red", "Green", "White", "Black"]
console.log(mycolor1.sort())
// Output - ["Black", "Green", "Red", "white"]
console.log(mycolor1.reverse())
// Output - ["White", "Red", "Green", "Black"]


// Question no. 08
console.log("Question no. 08")
let words = ['python', 'javascript', 'go', 'java', 'PHP', 'Ruby'];

let fillterword = words.filter(words => words.length <= 8);
console.log(fillterword)
// Output - ["Python", "go", "java", "PHP", "Ruby"]


//  Question no. 09 
console.log("Question no. 09")

let x = "airplane"
console.log(x.slice(2, 3))
// Output - r

let y = "oxoxoxox"
console.log(y.replace(/x/g, "X"))
// Output - oXoXoXoX

let z = "A New Java Book"
console.log(z.toLowerCase())
// Output - "a new java book"
console.log(z.toUpperCase())
// Output - "A NEW JAVA BOOK"


// Question no. 10
console.log("Question no. 10")
let array = [12, 34, 56, 78, 90]
console.log(array.reverse())
// Output = [90, 78, 56, 34, 12]


// Question no. 11
console.log("Question no. 11")
let found = [12, 23, 43, 24, 76, 45, 34]
console.log(found.includes(12));
console.log(found.includes(14));
//  Output = ture
//  Output = false


// Question no. 12
console.log("Question no. 12")
let name = "Yogesh"
console.log(name.length)
// Output = 6


// Question no. 13
console.log("Quetion no. 13")
let input = "I often take a wlak with my dog in evening. His dog follows him everywhere. I don't feed my dog in the morning"
console.log(input.replace(/dog/g, "cat"))
// output = "I often take a wlak with my cat in evening. His cat follows him everywhere. I don't feed my cat in the morning"


// Question no. 14
console.log("Question no. 14")

let str = "Hire the top 1% Freelance developers"
let newstr = str.split(" ")

let filterstr = newstr.filter(newstr => newstr.length <=4)
 console.log(filterstr)
//  Output = ["Hire", "the", "top", "1%"]


//  Question no .15
console.log("Question no. 15")
let numarr = ['5', 32, 'Danial']
console.log(numarr.join(","))
// Output = 5,32,Danial
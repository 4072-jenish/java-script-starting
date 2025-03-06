

console.log(" Q1 WAP for array data sorting desending order using selection sort.");


arr = [90,40, 20, 10, 50, 60, 70, 80, 30, 100];
console.log("Before sorting: ", arr);

function desendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[i] < arr[j]) {
                let c;
                c = arr[i];
                arr[i] = arr[j];
                arr[j] = c;
            }
        }
        
    }
}

desendingOrder(arr);
console.log("After sorting: ", arr);


/*
    Before sorting:  (10) [90, 40, 20, 10, 50, 60, 70, 80, 30, 100]
    After sorting:  (10) [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
*/

console.log("Q2 WAP for array data sorting ascending order using Merge sort.");


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}


console.log("Before sorting: ", arr);
let arrsort = mergeSort(arr);
console.log("After sorting: ", arrsort);

/*
Before sorting:  (10) [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
After sorting:  (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
*/


console.log("Q3 WAP for 2-D array print and also print it's square array.");

let arr2d = [[1,2,3],[4,5,6],[7,8,9]];

for (let i = 0; i < arr2d.length; i++) {
    let str = "";
    for (let j = 0; j < arr2d.length; j++) {
        str += arr2d[i][j] + " ";
    }
    console.log(str);
}

for (let i = 0; i < arr2d.length; i++) {
    let str = "";
    for (let j = 0; j < arr2d.length; j++) {
        str += arr2d[i][j]*arr2d[i][j] + " ";
    }
    console.log(str);
}


/*
berfore squer 1 2 3
              4 5 6
              7 8 9 
After Squer 1 4 9 
           16 25 36 
           49 64 81 
 */



console.log("Q4 WAP for array operations (like push and pop, slice) without its method.");


let a = [1,2,3,4,5];

console.log(a);


function PusH(a,p) {
    a[a.length]=p;
    return a;
}

PusH(a,12);
console.log("After Push ",a);

function delet(a) {
    a.length = a.length - 1;
}

delet(a);
console.log( "After Pop", a);

function slice(a,b,c) {
    let str ="";
    for (let i = 0; i < a.length; i++) {
        if (i >= b && i <= c) {
           str+= a[i] + " ";
        }
    }
    console.log("After slice :",str);
    
}
console.log("index = 1 to 3");

slice(a ,1 ,3);


/*
(5) [1, 2, 3, 4, 5]
 After Push  (6) [1, 2, 3, 4, 5, 12]
 After Pop (5) [1, 2, 3, 4, 5]
 index = 1 to 3
 After slice : 2 3 4 
*/
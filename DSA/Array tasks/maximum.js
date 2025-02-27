console.log("Q1 find maximum number in array :");


let arr = [ 1, 2, 10, 4, 50, 6, 7, 90, 9, 10];

function maximum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let result = maximum(arr);
console.log("maximum number is:",result);


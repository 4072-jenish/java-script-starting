let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1 , 5 , 8 , 9];


console.log("Q1 Write a program to implement binary search to find the index of a target element in a sorted array.");


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        }else if (arr[mid] > target) {
            right = mid - 1;
        }
    }

    return -1;
}
console.log( " Your answer is : " , binarySearch(arr, 5)); 


/*
 Your answer is :  4
*/




console.log("Q2 write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.");


function findOccurrences(arr, target) {
    let first = lowerBound(arr, target);
    let last = upperBound(arr, target);

    if (first === -1 || last === -1) {
        return 0;
    }

    return last - first + 1;
}

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
     }
return left;
}
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
console.log( "Your element is repeated for " , findOccurrences(arr, 8), "times");

/*
    Your element is repeated for  2 times
*/


console.log("Q3 Write a program to find the pivot index where the rotation occurs in a rotated sorted array.");

function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
console.log( "The pivot index is :" , findPivot(arr)); 

/*
   The pivot index is : 0
*/

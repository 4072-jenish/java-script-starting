/*
Q.1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)



Q.2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.



Q.3 WAP to implements Stack using JavaScript without any functions?



Q.4 WAP to implement binary Search using JavaScript with DSA?



Q.5 WAP to implement Merge sort using JavaScript without any function?
*/



console.log("Q1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function");


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addElement(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode(value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current !== null && current.data !== value) {
            previous = current;
            current = current.next;
        }

        if (current === null) {
            console.log("Node not found");
            return;
        }

        previous.next = current.next;
    }

    display() {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        result += "null";
        console.log("Linked List:", result);
    }
}

let list = new LinkedList();

list.addElement(10);
list.addElement(20);
list.addElement(30);
list.addElement(40);
list.display();

list.deleteNode(20);
list.display(); 

list.deleteNode(10);
list.display(); 

/*
Q1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function
    Linked List: 10 -> 20 -> 30 -> 40 -> null
    Linked List: 10 -> 30 -> 40 -> null
    Linked List: 30 -> 40 -> null
*/



console.log("Q2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.");

let arr = [9, 8, 5, 7, 3, 4, 2, 1, 6];
console.log("Unsorted Array:", arr);

for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min]){
            min = j;
        }
    }
    if(min != i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }   
}
console.log("Sorted Array:",arr); 
/*
Q2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.
    Unsorted Array: (9) [9, 8, 5, 7, 3, 4, 2, 1, 6]
    Sorted Array: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/



console.log("Q3 WAP to implement Stack using JavaScript DSA without any pre-defined function.");

class Stack {
    constructor() {
        this.stack = [];
    }

    PUSH(data) {
      this.stack.push(data);
    }

    Pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }

    iEmpty() {
        return this.stack.length == 0;
    }

    display() {
        let str = "";
        for (let i = 0; i <= this.stack.length-1; i++) {
            str += this.stack[i];
        }
        console.log(str);
        
    }
}

let stack = new Stack();

stack.PUSH(1);
stack.PUSH(2);
stack.PUSH(3);
stack.PUSH(4);
stack.PUSH(5);
stack.display();
stack.Pop();
stack.display();
console.log( "peek element is :",stack.peek());
console.log( "is stack empty?",stack.iEmpty());

/*
Q3 WAP to implement Stack using JavaScript DSA without any pre-defined function.
     12345
     1234
     peek element is : 4
     is stack empty? false
     
 */


console.log("Q4 WAP to implement binary Search using JavaScript with DSA?");

let ary = [1,2,50,80,40,3,4,8,60,97,84,63,51];

let target = 60;
let low = 0;
let high = ary.length-1;

console.log("Array is :", ary);
console.log("Target is :", target);


while(low <= high){

    let mid = Math.floor((low + high) / 2);

    if (ary[mid] === target){
        console.log("element found at index",mid);
        break;
    } else if (ary[mid] < target){
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

/*
Q4 WAP to implement binary Search using JavaScript with DSA?
     Array is : (13) [1, 2, 50, 80, 40, 3, 4, 8, 60, 97, 84, 63, 51]
     Target is : 60
     element found at index 8
*/



console.log("Q5 WAP to implement Merge sort using JavaScript without any function?");

function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);


    mergeSort(arr, start, mid);

    mergeSort(arr, mid + 1, end);


    merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = 0;
    let temp = [];

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp[k] = arr[i];
            i++;
        } else {
            temp[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i <= mid) {
        temp[k] = arr[i];
        i++;
        k++;
    }

    while (j <= end) {
        temp[k] = arr[j];
        j++;
        k++;
    }


    for (let t = 0; t < k; t++) {
        arr[start + t] = temp[t];
    }
}


let ar = [5, 2, 9, 1, 3, 6];
console.log("Original Array:");
console.log(ar);

mergeSort(ar, 0, arr.length - 1);

console.log("Sorted Array:");
console.log(ar); 

/*
Q5 WAP to implement Merge sort using JavaScript without any function?
        Original Array:
        (6) [5, 2, 9, 1, 3, 6]
        Sorted Array:
        (9) [undefined, undefined, undefined, 1, 2, 3, 5, 6, 9]
*/


console.log("Q1 Write a program for Circular Queue.");

class circularQueue {
    constructor(size){
        this.size = size;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(size);
    }

    Push(ele){
        if(this.front == -1 && this.rear == -1){
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = ele;
        }else{
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = ele;
        }
    }

    Pop(){
        if(this.front == -1 && this.rear == -1){
            console.log("Queue is empty");
        }else if(this.front == this.rear){
            let ele = this.queue[this.front];
            this.front = -1;
            this.rear = -1;
            return ele;
        }else{
            let ele = this.queue[this.front];
            this.front = (this.front + 1) % this.size;
            return ele;
        }
    }
    display(){
        console.log(this.queue);
        
    }
}


let q = new circularQueue(5);
q.Push(1);
q.Push(2);
q.Push(3);
q.Push(4);
q.Push(5);
q.display();

q.Pop();
q.display();







console.log("Q2 write a program Queue using two stacks.");

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    Push(ele){
        this.stack1.push(ele);
    }

    Pop(){
        if(this.stack1.length == 0){
            console.log("Queue is empty");
        }else{
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
            console.log("Pop element is: ", this.stack2.pop());
            
            while(this.stack2.length > 0){
                this.stack1.push(this.stack2.pop());
            }
        }
    }
    display(){
        console.log(this.stack1);
        
    }
}

let q1 = new Queue();

q1.Push(1);
q1.Push(2);
q1.Push(3);
q1.Push(4);
q1.Push(5);

q1.display();

q1.Pop();
q1.Pop();
q1.Pop();
q1.display();




console.log("Question No. 03 write a program check first string swap can make strings equal")
let areAlmostEqual = function(s1, s2) {
    if (s1 === s2){
        return true;
    } 
   let result = [];

   for (let i = 0; i < s1.length; i++) {
       if (s1[i] !== s2[i]){
           result.push(i);
       } 
        
       if (result.length > 2){
           return false;
       } 
   }
   return result.length === 2 
};

let s1 = "bank";
let s2 = "kanb";

console.log(areAlmostEqual(s1, s2))

// output =  true



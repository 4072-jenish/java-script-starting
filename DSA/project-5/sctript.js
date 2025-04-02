

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



console.log("Q3 write a program check first string swap can make strings equal.");

function checkstring(string1 , string2){
    if(string1.length != string2.length){
        return false;
    }
    
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if(string1[i] == string2[j]){
                return true;
            }else{
                return false;
            }
        
        }

    }

}

console.log(checkstring("jenish" , "hsinej"));


console.log("Q4 WAP for Circular Link list. (append, remove functionality)");

class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class circularList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newnode= new node(data);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.head; 

        } else {
            this.tail.next = newnode;
            this.tail = newnode;
            this.tail.next = this.head;
        }
    }

    remove(data) {
        if (!this.head) return;
        
        let current = this.head;
        let prev = this.tail;
        
        do {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }

    display() {
        if (!this.head) return console.log("List is empty");
        let current = this.head;
        let result = [];
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" -> "));
    }
}


const CList = new circularList();

CList.append(111);
CList.append(222);
CList.append(333);
CList.append(444);
CList.append(555);
CList.append(666);
CList.display(); 
console.log("For remove element 222:");

CList.remove(222);
CList.display(); 

console.log("For add element 777:");
CList.append(777);
CList.display();


/*
Q4 WAP for Circular Link list. (append, remove functionality)
  111 -> 222 -> 333 -> 444 -> 555 -> 666
  For remove element 222:
  111 -> 333 -> 444 -> 555 -> 666
  For add element 777:
  111 -> 333 -> 444 -> 555 -> 666 -> 777
*/



console.log("Q3. WAP for Removing Node Element at any Position in given Link list.");

class LinkedList {
    constructor() {
        this.head = null;
    }

    apend(data) {
        let another = new Node(data);
        if (!this.head) {
            this.head = another;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = another;
    }

    display() {
        let current = this.head;
        let result = [];

        while (current != null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
   removeAt(position) {
        if (!this.head){
            
         return null;
        
        }
        let current = this.head;
        if (position === 0) {
            this.head = this.head.next;
            return current.data;
        }
    
        let prev = null;
        let index = 0;
        while (current && index < position) {
            prev = current;
            current = current.next;
            index++;
        }
    
        if (!current){
            return null;
        } 
    
        prev.next = current.next;
        return current.data;
    }
}



let lists = new LinkedList();
lists.apend(11);
lists.apend(22);
lists.apend(33);
lists.apend(44);
lists.apend(55);

lists.display();

lists.removeAt(4)
lists.display()

/*
Q3. WAP for Removing Node Element at any Position in given Link list.
 11 -> 22 -> 33 -> 44 -> 55
 given position is : 4
 11 -> 22 -> 33 -> 44
*/
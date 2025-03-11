

console.log("Q1 : wap to revers a linked list .");

class Node {
     constructor(data){
        this.data  = data;
        this.next = null;
     }
}

class Linkedlist{
     
    apend(data){
       let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let currnt = this.head;
        while (currnt.next) {
            currnt = currnt.next;
        }
        currnt.next = newNode;
    }

    display(){
        let currnt = this.head;
        let arr =[];

        while(currnt != null){
            arr += currnt.data + " ";
            currnt = currnt.next;
        }
        console.log(arr);
    }

    reverslist(){
        let current = this.head;
        let prev = null;
        let temp ;
         
        while(current != null){
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev ;
    }


}


let list = new Linkedlist()
list.apend(11);
list.apend(22);
list.apend(33);
list.apend(44);
list.apend(55);

list.display();

list.reverslist();
list.display();


/*
Q1 : wap to revers a linked list .
      11 22 33 44 55 
      55 44 33 22 11 
*/
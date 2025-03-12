

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




    splice(index,deletecount, ...data){
        console.log("Q2");
        if(index < 0 || index > this.length){
            return;
        }
        if(data.length == 0 && deletecount >= 0){
            this.delete(index);
            return;
        }
        if(index == 0){
            this.head = this.head.next;
            return;
        }
        let currnt = this.head;
        let count = 0;
        while(currnt != null){
            if(count == index - 1){
                let temp = currnt.next;
                for(let i = 0; i < data.length; i++){
                    let newNode = new Node(data[i]);
                    newNode.next = temp;
                    currnt.next = newNode;
                    temp = newNode;
                }
                break;
            }
            currnt = currnt.next;
            count++;
        }
        


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

list.splice(4,1, 99, 88, 77);
list.display();

/*
Q1 : wap to revers a linked list .
      11 22 33 44 55 
      55 44 33 22 11 
*/
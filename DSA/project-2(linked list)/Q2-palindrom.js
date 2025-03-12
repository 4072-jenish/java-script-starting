

console.log("Q2 check the Likedlist is palindrom or not .");


class NodE {
    constructor(data){
       this.data  = data;
       this.next = null;
    }
}

class palindrom{

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
    
     palindrome() {
        let current = this.head;
        let add = [];
        while (current) {
            add.push(current.data);
            current = current.next;
        }
        let start = 0;
        let end = add.length - 1;
        while (start < end) {
            if (add[start] !== add[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }               

}

let Newlist = new Linkedlist();
let Plist = new palindrom();

Plist.apend(1);
Plist.apend(2);
Plist.apend(3);
Plist.apend(2);
Plist.apend(1);

Plist.display();
console.log(Plist.palindrome());

/*Q2 check the Likedlist is palindrom or not .
  1 2 3 2 1 
  true
*/
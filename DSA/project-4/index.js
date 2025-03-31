

console.log("Q1 WAP to opretion on stack : (Insert, Delete, isEmpty, TopElement, Length)");

class stack{
   constructor (){
     this.arr = [11,12,13,14,15];
   }

   Push(val){
       this.arr.push(val);
       
   }

   Pop(){
       this.arr.pop();
   }
   isEmpty(){
       if(this.arr == 0){
            console.log("Stack is Empty :");
       }else{
        console.log("Stack has elements:");
       }
   }

   topElement(){
       return this.arr[this.arr.length - 1];
   }

   length(){
      return this.arr.length;
   }

   Display(){
      let str = '';
      for (let index = 0; index < this.arr.length; index++) {
        str = this.arr;
    }
    console.log(str);
      
   }

}

let result =  new stack;

result.Display();

console.log("Pushhing element : 6");
result.Push(6);
result.Display();
    
console.log("Deleting element : 6");
result.Pop();
result.Display();

console.log("Checking Element");
result.isEmpty();


console.log( "Our top Element is => " ,result.topElement());

console.log("Length of Stack is => ",result.length());


/*
    Q1 WAP to opretion on stack : (Insert, Delete, isEmpty, TopElement, Length)
    (5) [11, 12, 13, 14, 15]
    Pushhing element : 6
    (6) [11, 12, 13, 14, 15, 6]
    Deleting element : 6
    (5) [11, 12, 13, 14, 15]
    Checking Element
    Stack has elements:
    Our top Element is =>  15
    Length of Stack is =>  5
*/


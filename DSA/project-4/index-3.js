
console.log("Q3  Write a program for a reverse string using Stack.")

class Reversestack {

    constructor () {
        this.arr= []
    }

    reverseString(str) {

        for (let i = 0; i < str.length; i++) {
            this.arr.push(str[i]);
        }
    
        let result = '';
        while (this.arr.length > 0) {
            result += this.arr.pop();
        }
    
        return result;
    }
    
}

let str = 'Jenish Hariyani';
let reverse =  new Reversestack();
console.log(reverse.reverseString(str)); 

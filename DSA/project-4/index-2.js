console.log("Q2  Write a program for Next Greater Element using Stack")
class stackGreater {
    constructor(){
        this.stack = [];
    }

    greaterElem(arr) {
        let result = new Array(arr.length).fill(-1);
        
        for (let i = 0; i < arr.length; i++) {
            while (this.stack.length > 0 && arr[this.stack[this.stack.length - 1]] < arr[i]) {
                result[this.stack.pop()] = arr[i];
            }
            this.stack.push(i);
        }
        
        return result;
    }
    
}

let arr = [12, 13, 1, 10, 34, 1, 24, 12];
let greater = new stackGreater();
console.log(greater.greaterElem(arr));

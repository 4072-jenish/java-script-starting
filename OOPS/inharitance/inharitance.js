

class grandFather{
    jamin1(){
        console.log("5 vigha ....");
    }
}
class father extends grandFather{
    jamin2(){
        this.jamin1();
        console.log("3 vigha ....");  
    }
}
class me extends father{
      
    jamin3(){
        this.jamin2();
        console.log("10 vigho ....");  
    }
}


let finalproperties = new me();

finalproperties.jamin3();

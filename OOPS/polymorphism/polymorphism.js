
console.log("Example of polymorphism ........");


class programer{
    clang(){
        console.log("Basic code....");
        
    }
}
class frontend extends programer{
    clang(){
        console.log("pro web designer .....");
    }
}
class backend extends frontend{
    clang(){
        console.log("pro web devloper.....");
    }
}


let dev = new backend();

dev.clang();


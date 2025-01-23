

console.log("Q1 print the detailes of student or faculty .....(using class and object:)");


class collage {
    student(sname , email , cantnum){
        console.log("Student Name : ",sname);
        console.log("Sudent Email : ",email);
        console.log("Student Contact number : ",cantnum);
    }
    faculty(fname , femail , fcantnum){
        console.log("Faculty Name : ",fname);
        console.log("Faculty Email : ",femail);
        console.log("Faculty Contact number : ",fcantnum);
    }
}


let sname = prompt("Enter student name .......");
let email = prompt("Enter student Email Id  .......");
let cantnum = prompt("Enter student Contact number .......");
let fname = prompt("Enter Faculty name .......");
let femail = prompt("Enter Faculty Email Id  .......");
let fcantnum = prompt("Enter faculty Contact number .......");

let object = new collage();

object.student(sname,email,cantnum);
object.faculty(fname,femail,fcantnum);

console.log("---------------------------------------------------------------------------------------------------");


console.log("Q2 Get a detailes of employee and print them : ");

class person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
class employee extends person{
    employeeinfo(){
        console.log("employee name : ",this.name);
        console.log("employee age : ",this.age);
        
    }
}


let empl = new employee("yogesh" , 25);

empl.employeeinfo();


console.log("Q3 print message byg constructor :");


class employee{
    constructor(){
        console.log("constructor called :-) ......"); 
    }
} 

let constr = new employee();



console.log("Q4 make a class it can find area of rectangale or circale :");


class shape{
    rect(w ,h){
        console.log("Area of rectangle is  : ", w*h);
    }
    circale(r){
        console.log("Area of circale is : ", 3.14*r*r); 
    }
}

let area = new shape();

area.circale(7);
area.rect(12 , 11);





class First {
    constructor(name, profesion) {
        this.name = name;
        this.profesion = profesion;
    }

    form() {
        return`${this.name} is professional in ${this.profesion}`;
    }
}

let name = prompt("Enter name of professional ......");
let profesion = prompt("Enter name of profession ......");

let person = new First(name, profesion);
console.log(person.form());
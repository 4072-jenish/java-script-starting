

let obj ={
    name: "jenish",
    age : 19,
    hobbies : ["Music", "Sleeping", "History", "riding"],
    gender : "male" ,
}

for (let i in obj) {
    if (i == "hobbies") {
         for (let j of obj.hobbies) {
            console.log(i,"=>", j);  
        }
    }else{
        console.log(`${i}=> ${obj[i]}`);
    }
}

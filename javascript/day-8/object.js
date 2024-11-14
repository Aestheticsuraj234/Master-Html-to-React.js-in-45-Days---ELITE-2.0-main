// let myObj = {
//     name:"Suraj",
//     age:20,
//     isGraduated:false,
// }

// // Accessing object Properties

// console.log(myObj.name); //1
// console.log(myObj["age"]) //2



// // Adding and Modifying Properties

// myObj.grade = "A+";
// myObj.age = 24;


// console.log(myObj)

// // deleting properties

// delete myObj.isGraduated;

// console.log(myObj)

// Object Methods

// functions that are stores as properties within an object

// const car = {
//     brand:"Tesla",
//     model:"Model 3",
//     start:function(){
//         console.log(this.brand , this.model , "is Starting....")
//     }

// }



// // this keyword
// // refers to the object from which the method was called

// car.start()


// Javascript objects methods

// *1.Object.keys()


// const keys = Object.keys(user);

// console.log(keys);


// *2  Object.values()



// const values = Object.values(user)
// console.log(values)


// *3. Object.entires()
let user = {
    name:"Alice",
    age:25,
    country:"USA"
}

let entires = Object.entries(user)

console.log(entires)


// *4 Object.assign()

let target = {a:1}
let source1 = {b:2}
let source2 = {c:3}

Object.assign(target , source1 , source2)

console.log(target)


// *5 Object.freeze()

let obj = {name:"Suraj"}

Object.freeze(obj)

obj.name = "Akash"
obj.age  = 20
console.log(obj)

// *Object.seal()

(function(){
    console.log("IIFC");
})();
//primitive 

// 7 - types of DataTypes 1. String, 2. Number, 3. Boolean, 4. Null, 5. Undefine, 6. Symbol, 7. BigInt 

const score = 100;
const runs = 100.3;

const isloggedin = false;
const tempout = null;
let useremail;

const id = Symbol('123')
const anoterId = Symbol('1234')
console.log(id === anoterId);

//const bigNumber = 123456789;

// Reference (Non-Primitive)
// 1. Array 2. Objects 3. Function 
const heros = ["SRK", "KING", "OTHER"];
let myObj = {
    name : "umair",
    age: 22,
}
const myFun = function(){
    console.log("Hello World");
}
// console.log(typeof bigNumber); undefined
// console.log(typeof tempout); object
// console.log(typeof runs); number
// console.log(typeof heros); object
// console.log(typeof anoterId); symbol

// Uncomment the following lines to see the types logged to the console
// console.log(typeof bigNumber); // 'bigint' if uncommented
// console.log(typeof tempOut); // 'object'
// console.log(typeof runs); // 'number'
// console.log(typeof heroes); // 'object'
// console.log(typeof anotherId); // 'symbol'

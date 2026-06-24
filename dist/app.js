//********** */ 1. Primitive Data Types
// string, number, boolean
// Hints: Type define na kore dile nije theke dhore nibe.
// Hints: Tai amra normally type define kore dei.
let name = "James Bond";
let age = 23;
let isActive = true;
//********** */ 2. Array
let numbers = [2, 3, 5, 7, 9]; // valid
// let numbers = [2, 3, 4, 5, "apple"]; // invalid
// numbers.push("cat"); // invalid operation
numbers.push(10);
console.log(numbers);
//********** */ 3. Object with Optional and Readonly
let user = {
    name: "Yasin",
    age: 18,
    isWorking: true,
    // havePassport: false // optional property
    batch: "11",
};
// user.batch="12"; // will show compile-time error
user.isWorking = false;
console.log("user object : ", user);
// ********** */ 4. Function
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("Sum of two numbers: ", addNumbers(5, 7));
// ********** */ 5. Type vs Interface
// using type
let student = {
    name: "Mahir",
    class: 9,
    roll: 12,
};
console.log('printing student : ', student);
// using interface
let ashib = {
    name: "Ashib Ahmed",
    age: 34,
    department: "Neurology",
    college: "DMC",
};
console.log("Printing Doctor: ", ashib);
let admin1 = {
    name: "Martinez",
    age: 36,
    isActive: true,
    authorization: true,
};
console.log('Printing admin :', admin1);
// generics
function greet(value, value2) {
    // return {value, value2};
    return value;
}
function greet2(value, value2) {
    return { value, value2 };
}
console.log("Greet Function : ", greet(5, "yasin"));
console.log("Greet Function 2 : ", greet2(6, "arafat"));
export {};
//# sourceMappingURL=app.js.map
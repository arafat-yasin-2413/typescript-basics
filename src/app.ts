// **************** ZOD START ****************
import { z } from 'zod';

const userFormData = {
  name: "Rajib Islam",
  age: 28,
  email: "rajib33@gmail.com",
  phone: "+8801711223344",
  address: {
    street: "7 BT Road",
    area: "Ashulia",
    city: "Savar",
    zipCode: "1340",
    district: "Dhaka",
    country: "Bangladesh"
  },
  isActive: true,
  status: "active", // options: 'active', 'inactive', 'pending'
  password: "SuperSecurePassword123!",
  confirmPassword: "SuperSecurePassword123!",
  website: "https://google.com",
  salary: 75000,
  skills: ["JavaScript", "TypeScript", "React", "Node.js"],
  joinedDate: "2026-01-15"
};

// Validation Level 1 : Bassic Type Checking
const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.email(),
    phone: z.string(),
    address: z.object({
        street: z.string(),
        area: z.string(),
        city: z.string(),
        zipCode: z.string(),
        district: z.string(),
        country: z.string(),
    }),
    isActive: z.boolean(),
    status: z.enum(['active', 'inactive', 'pending']),
    password: z.string(),
    confirmPassword: z.string(), 
    website: z.url(),
    salary: z.number(),
    skills: z.array(z.string()),
    joinedDate: z.string()
});


const result = userSchema.safeParse(userFormData);

console.log('Printing result : ',result);

if(result.success) {
    console.log('******* Zod Validation Successfull. ******');
}
else{
    console.log('!!!!!!! Zod Validation Failed! !!!!!!!!');
}







// **************** ZOD END ****************







// **************** TYPESCRIPT BASICS START ****************

import type { Vehicle } from "./types/type.js";


type Student = {
    name: string;
    class: number;
    roll: number;
    address?: string;
}

interface Doctor  {
    name: string;
    age: number;
    department: string;
    readonly college: string;
}


//********** */ 1. Primitive Data Types
// string, number, boolean


// Hints: Type define na kore dile nije theke dhore nibe.
// Hints: Tai amra normally type define kore dei.
let name: string = "James Bond";
let age: number = 23;
let isActive: boolean = true;

//********** */ 2. Array
let numbers: number[] = [2, 3, 5, 7, 9]; // valid
// let numbers = [2, 3, 4, 5, "apple"]; // invalid
// numbers.push("cat"); // invalid operation

numbers.push(10);
// console.log(numbers);

//********** */ 3. Object with Optional and Readonly
let user: { name: string; age: number; isWorking: boolean, havePassport?: boolean, readonly batch: string } = {
    name: "Yasin",
    age: 18,
    isWorking: true,
    // havePassport: false // optional property
    batch: "11",
};

// user.batch="12"; // will show compile-time error
user.isWorking = false;


// console.log("user object : ", user);


// ********** */ 4. Function
function addNumbers (num1:number, num2:number):number {
    return num1 + num2;
}

// console.log("Sum of two numbers: ",addNumbers(5,7));


// ********** */ 5. Type vs Interface
// using type
let student:Student= {
    name: "Mahir",
    class: 9,
    roll: 12,
    
}
// console.log('printing student : ', student);


// using interface
let ashib : Doctor = {
    name: "Ashib Ahmed",
    age: 34,
    department: "Neurology",
    college: "DMC",
}

// console.log("Printing Doctor: ", ashib);


// using extends
interface User {
    name: string;
    age: number; 
    isActive: boolean;
}

interface Admin extends User  {
    authorization: boolean;
}

let admin1 = {
    name: "Martinez",
    age: 36,
    isActive: true,
    authorization: true,
}

// console.log('Printing admin :', admin1);

// let myVehicle : Vehicle = {
//     name: "Toyota blue",
//     model: "2022",
//     wheels: 4,
// }


// generics
function greet<T,S>(value:T, value2:S): T {
    // return {value, value2};
    return value;
}
function greet2<T,S>(value:T, value2:S): {value: T, value2: S} {
    return {value, value2};
}


// console.log("Greet Function : ", greet(5, "yasin"));
// console.log("Greet Function 2 : ", greet2(6, "arafat"));

// **************** TYPESCRIPT BASICS END ****************

// **************** ZOD START ****************
import { z } from "zod";

const userFormData = {
    name: "Rajib Islam",
    age: 28,
    email: "rajib33@gmail.com",
    phone: "+8801711223344",
    address: {
        street: "7 BT Road",
        area: "Ashulia",
        city: "Savar",
        district: "Dhaka",
        country: "Bangladesh",
    },
    isActive: true,
    status: "", // options: 'active', 'inactive', 'pending'
    password: "SuperSecurePassword123!",
    confirmPassword: "SuperSecurePassword123!",
    website: "https://google.com",
    salary: 75000,
    skills: ["JavaScript", "TypeScript", "React", "Node.js"],
    joinedDate: "2026-01-15",
};

// Validation Level 1 : Bassic Type Checking
// Validation Level 2 : Adding Rules wiht  Custom Error Message

const userSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name cannot exceed 50 characters"),
    age: z
        .number()
        .min(18, "User must be at least 18 years old.")
        .max(70, "Invalid Age. Age must be less than or equal to 70 years."),
    email: z.email().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address."),
    phone: z.string().regex(/^(?:\+88|88)?01[3-9]\d{8}$/, "Invalid BD Phone Number format"),
    address: z.object({
        street: z.string().min(1, "Street is required").max(60, "Street cannot exceed 60 characters."),
        area: z.string().min(1, "Area is required").max(30, "Area cannot exceed 30 characters."),
        city: z.string().min(1, "City is required").max(30, "City cannot exceed 30 characters."),
        district: z.string().min(1, "District is required").max(30, "District cannot exceed 30 characters."),
        country: z.string().min(1, "Country is required").max(40, "Country cannot exceed 40 characters."),
    }),
    isActive: z.boolean(),
    status: z.enum(["active", "inactive", "pending", ""]).default("inactive"),
    password: z.string().min(8, "Password must be at least 8 characters long" )
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter" )
    .regex(/[a-z]/, "Password must contain at least one lowercase letter" )
    .regex(/[0-9]/, "Password must contain at least one number" )
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),

    confirmPassword: z.string("Confirm Password is Required."),
    website: z.url("Please enter a valid website url."),
    salary: z.number().positive(),
    skills: z.array(z.string().min(1, "Skill cannot be empty.").min(1, "Please select or type at least one skill.")),
    joinedDate: z.string().date("Invalid date format. Expected YYYY-MM-DD"),
});

const result = userSchema.safeParse(userFormData);

console.log("Printing result : ", result);

if (result.success) {
    console.log("******* Zod Validation Successfull. ******");
} else {
    console.log("!!!!!!! Zod Validation Failed! !!!!!!!!");
}

// **************** ZOD END ****************

// **************** TYPESCRIPT BASICS START ****************

import type { Vehicle } from "./types/type.js";

type Student = {
    name: string;
    class: number;
    roll: number;
    address?: string;
};

interface Doctor {
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
let user: {
    name: string;
    age: number;
    isWorking: boolean;
    havePassport?: boolean;
    readonly batch: string;
} = {
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
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// console.log("Sum of two numbers: ",addNumbers(5,7));

// ********** */ 5. Type vs Interface
// using type
let student: Student = {
    name: "Mahir",
    class: 9,
    roll: 12,
};
// console.log('printing student : ', student);

// using interface
let ashib: Doctor = {
    name: "Ashib Ahmed",
    age: 34,
    department: "Neurology",
    college: "DMC",
};

// console.log("Printing Doctor: ", ashib);

// using extends
interface User {
    name: string;
    age: number;
    isActive: boolean;
}

interface Admin extends User {
    authorization: boolean;
}

let admin1 = {
    name: "Martinez",
    age: 36,
    isActive: true,
    authorization: true,
};

// console.log('Printing admin :', admin1);

// let myVehicle : Vehicle = {
//     name: "Toyota blue",
//     model: "2022",
//     wheels: 4,
// }

// generics
function greet<T, S>(value: T, value2: S): T {
    // return {value, value2};
    return value;
}
function greet2<T, S>(value: T, value2: S): { value: T; value2: S } {
    return { value, value2 };
}

// console.log("Greet Function : ", greet(5, "yasin"));
// console.log("Greet Function 2 : ", greet2(6, "arafat"));

// **************** TYPESCRIPT BASICS END ****************

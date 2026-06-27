# Zod


### ১. Zod কী এবং কেন আমরা এটি ব্যবহার করি?
**উত্তর:** Zod হলো একটি TypeScript-first স্কিমা ডিক্লারেশন এবং ভ্যালিডেশন লাইব্রেরি। 
* **কেন ব্যবহার করি:** TypeScript মূলত কম্পাইল-টাইমে (compile-time) টাইপ চেক করে, কিন্তু রান-টাইমে (runtime) ডেটা সঠিক কিনা তা নিশ্চিত করতে পারে না (যেমন: API থেকে ভুল ডেটা আসলে অ্যাপ ক্র্যাশ করতে পারে)। Zod রান-টাইমে ডেটা ভ্যালিডেশন করে এবং একই সাথে সেই স্কিমা থেকে স্বয়ংক্রিয়ভাবে TypeScript টাইপ তৈরি করতে পারে।

### ২. `z.infer` কী এবং এর কাজ কী?
**উত্তর:** `z.infer` ব্যবহার করে Zod-এর কোনো স্কিমা থেকে সরাসরি TypeScript টাইপ বা ইন্টারফেস এক্সট্রাক্ট (extract) বা বের করে নেওয়া যায়। এর ফলে আপনাকে আলাদা করে ম্যানুয়ালি টাইপ লিখতে হয় না। 

```typescript
import { z } from 'zod';

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
});

// UserSchema থেকে TypeScript টাইপ তৈরি করা
type User = z.infer<typeof UserSchema>;
```

### ৩. Zod-এ parse() এবং safeParse() এর মধ্যে পার্থক্য কী?
**উত্তর:** এই দুটির মূল পার্থক্য হলো এরর হ্যান্ডেল করার পদ্ধতিতে:

- `parse()`: ইনপুট ডেটা স্কিমার সাথে না মিললে এটি সরাসরি একটি ZodError throw করে। তাই এটি ব্যবহার করলে try-catch ব্লক ব্যবহার করতে হয়।

- `safeParse()`: এটি কোনো এরর throw করে না। এটি একটি অবজেক্ট রিটার্ন করে যার মধ্যে success (true/false) ফ্ল্যাগ থাকে। যদি সফল হয় তবে data পাওয়া যায়, আর ব্যর্থ হলে error পাওয়া যায়।


### ৪. কোনো ফিল্ডকে Optional (ঐচ্ছিক) বা Nullable করার উপায় কী?
**উত্তর:** Zod-এ optional() এবং nullable() এর মধ্যে সূক্ষ্ম পার্থক্য আছে:

- `.optional()`: ফিল্ডটি একদম নাও থাকতে পারে (undefined)। যেমন: `z.string().optional()` মানে টাইপটি হবে `string | undefined`।

- `.nullable()`: ফিল্ডটি অবশ্যই থাকতে হবে, তবে তার ভ্যালু `null` হতে পারে। যেমন: `z.string().nullable()` মানে টাইপটি হবে `string | null`。

### ৫. Zod কীভাবে Formik বা React Hook Form এর মতো লাইব্রেরির সাথে কাজ করে?
**উত্তর:** ফ্রন্টএন্ডে ফর্ম ভ্যালিডেশনের জন্য Zod চমৎকার কাজ করে। `React Hook Form` এর মতো লাইব্রেরির সাথে Zod যুক্ত করার জন্য `@hookform/resolvers` ব্যবহার করা হয়। এর ফলে ফর্মের ইনপুট সাবমিট হওয়ার সাথে সাথে Zod স্কিমা ব্যাকগ্রাউন্ডে পুরো ফর্মের ডেটা ভ্যালিডেশন করে এরর মেসেজগুলো UI-তে পাস করে দেয়।

----

### Todo App 

✨ **GitHub Repo:** [View in GitHub](https://github.com/arafat-yasin-2413/todo-app)

✨ **Live Demo:** [View Live Site](https://todo-app-lac-two-21.vercel.app/)


<br>
<br>
<br>
<br>
<br>





# TypeScript Basics


## What is TypeScript?
TypeScript is an open-source programming language developed by Microsoft. It is a strict syntactical **superset of JavaScript**, meaning that any valid JavaScript code is also valid TypeScript code. 

Since browsers and Node.js cannot run `TypeScript` directly, it must be compiled (transpiled) into standard `JavaScript` before execution.

---

## Why is it Needed?

1. **Type Safety:** In JavaScript, variables can change types dynamically, which often leads to unexpected runtime bugs. TypeScript introduces static typing, allowing you to define exactly what data type a variable should hold.
2. **Compile-time Error Checking:** TypeScript catches errors while you are writing the code (in your editor) or during the compilation phase, preventing bugs from reaching production.
3. **Rich Intellisense:** With explicit types, code editors provide highly accurate auto-completion, suggestions, and instant documentation.
4. **Scalability:** It makes large codebases much easier to maintain, refactor, and understand when multiple developers are working on the same project.

---

## TypeScript Interview Q&A 

### Q1: TypeScript এবং JavaScript-এর মধ্যে মূল পার্থক্য কী?
**উত্তর:** JavaScript হলো একটি Dynamic Typed ল্যাঙ্গুয়েজ (রানটাইমে টাইপ চেক হয়), আর TypeScript হলো Static Typed ল্যাঙ্গুয়েজ (কোড লেখার বা কম্পাইল করার সময়ই টাইপ চেক হয়)। এছাড়া টাইপস্ক্রিপ্টে `Interface`, `Generics` এবং `enum` এর মতো আধুনিক ফিচার রয়েছে যা স্ট্যান্ডার্ড জাভাস্ক্রিপ্টে সরাসরি নেই।

### Q2: TypeScript-এ `any` এবং `unknown` টাইপের মধ্যে পার্থক্য কী?
**উত্তর:** 
* **`any`:** এটি টাইপ চেকিং পুরোপুরি বন্ধ করে দেয়। `any` টাইপের ভ্যারিয়েবলে যা ইচ্ছা তা করা যায় এবং কোনো এরর দেখায় না। এটি ব্যবহার করা নিরাপদ নয়।
* **`unknown`:** এটিও যেকোনো ভ্যারিয়েবল গ্রহণ করে, তবে এটি অনেক বেশি নিরাপদ। `unknown` টাইপের ভ্যারিয়েবলের ওপর কোনো অপারেশন (যেমন: মেথড কল করা) করার আগে অবশ্যই তার টাইপ চেক (Type Checking/Narrowing) করে নিতে হয়।

### Q3: `interface` এবং `type` (Type Alias)-এর মধ্যে পার্থক্য কী? কোনটি কখন ব্যবহার করা উচিত?
**উত্তর:** দুটিই অবজেক্টের শেপ বা টাইপ ডিফাইন করতে ব্যবহৃত হয়। তবে প্রধান পার্থক্য হলো:
* `interface`-কে পরবর্তীতে নতুন প্রপার্টি দিয়ে এক্সটেন্ড (`extend`) বা রি-ওপেন (Declaration Merging) করা যায়। অবজেক্ট এবং ক্লাসের জন্য এটি বেশি উপযুক্ত।
* `type` দিয়ে ইউনিয়ন বা ইন্টারসেকশন টাইপ তৈরি করা যায়, যা `interface` দিয়ে সম্ভব নয়। এটি এক্সটেন্ড করা যায় না।

### Q4: TypeScript-এ Union এবং Intersection টাইপ বলতে কী বোঝায়?
**উত্তর:**
* **Union Type (`|`):** একটি ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটি হতে পারলে ইউনিয়ন টাইপ ব্যবহার করা হয়। যেমন: `let id: string | number;`
* **Intersection Type (`&`):** একাধিক টাইপকে একসাথে যুক্ত করে একটি নতুন টাইপ তৈরি করতে এটি ব্যবহৃত হয়। নতুন টাইপটিতে যুক্ত করা সব টাইপের প্রপার্টি থাকতে হবে।

### Q5: Tuple কী? সাধারণ Array-এর সাথে এর পার্থক্য কী?
**উত্তর:** Tuple হলো এমন একটি বিশেষ অ্যারে (Array) যার উপাদান সংখ্যা নির্দিষ্ট এবং প্রতিটি উপাদানের টাইপ কোন পজিশনে কী থাকবে তা আগে থেকেই ফিক্সড করা থাকে। 
* সাধারণ অ্যারে: `let list: number[] = [1, 2, 3];`
* টাপল: `let user: [number, string] = [1, "Yasin"];` (এখানে প্রথমটি সংখ্যা এবং দ্বিতীয়টি স্ট্রিং হতেই হবে)।

### Q6: TypeScript-এ `readonly` মডিফায়ার কীভাবে কাজ করে?
**উত্তর:** কোনো ক্লাসের প্রপার্টি বা ইন্টারফেসের প্রপার্টির আগে `readonly` লিখে দিলে সেটির ভ্যালু শুধুমাত্র অবজেক্ট তৈরি বা ইনিশিয়ালাইজ করার সময়ই সেট করা যায়। পরবর্তীতে সেই ভ্যালু আর পরিবর্তন (Modify) করা যায় না।

### Q7: Type Assertion কী? এটি কখন ব্যবহার করা হয়?
**উত্তর:** যখন ডেভেলপার TypeScript কম্পাইলারের চেয়েও ভালো জানেন যে একটি ভ্যারিয়েবলের নির্দিষ্ট টাইপ কী হবে, তখন কম্পাইলারকে জোরপূর্বক সেই টাইপটি বিশ্বাস করানোর পদ্ধতিকে Type Assertion বলে। এটি `as` কিওয়ার্ড দিয়ে লেখা হয়। যেমন: `let myCanvas = document.getElementById("canvas") as HTMLCanvasElement;`

### Q8: Enums (Enumerations) কী এবং এটি কেন ব্যবহার করা হয়?
**উত্তর:** Enums হলো Named Constants এর সমষ্টি। যখন আমাদের প্রজেক্টে কিছু নির্দিষ্ট ফিক্সড ভ্যালু (যেমন: সপ্তাহের দিন, অর্ডারের স্ট্যাটাস - PENDING, SHIPPED, DELIVERED) নিয়ে কাজ করতে হয়, তখন কোড Readability বাড়ানোর জন্য Enum ব্যবহার করা হয়।

### Q9: TypeScript-এ Generics কী এবং এর সুবিধা কী?
**উত্তর:** Generics হলো এমন একটি ফিচার যার মাধ্যমে পুনরব্যবহারযোগ্য (Reusable) কম্পোনেন্ট বা ফাংশন তৈরি করা যায়, যা নির্দিষ্ট কোনো একটি ডাটা টাইপের ওপর নির্ভরশীল না হয়ে ডায়নামিকালি যেকোনো টাইপের সাথে কাজ করতে পারে, কিন্তু টাইপ সেফটিও বজায় রাখে। এটি সাধারণত `<T>` সিনট্যাক্স দিয়ে প্রকাশ করা হয়।

### Q10: `void` এবং `never` টাইপের মধ্যে পার্থক্য কী?
**উত্তর:**
* **`void`:** যখন কোনো ফাংশন কোনো কিছু রিটার্ন করে না (বা শুধু কাজ শেষ করে বের হয়ে যায়), তখন তার রিটার্ন টাইপ হয় `void`।
* **`never`:** যে ফাংশনটি কখনোই তার স্বাভাবিক শেষ মাথায় পৌঁছায় না (যেমন: ফাংশনের ভেতর থেকে সবসময় এরর থ্রো করে অথবা ইনফিনিট লুপ চলে), তার রিটার্ন টাইপ হয় `never`।

### Q11: Type Assertion কী? 


## Project Setup Guideline

#### 1. Create a folder. Open it. And run : 
```bash
pnpm init
```
`it will add the package.json file`

---

#### 2. Add typescript in dev depandency: 
```bash
pnpm add -D typescript tsx
```

---

#### 3. TypeScript configuration: 
```bash
npx tsc --init
```

--- 
#### 4. To convert to js:
```bash
npx tsc
```
---

#### 5. To Run this project in your Local Machine: 
`clone` it. Open the folder in your code editor and run : 
**install dependcies ** 
```bash 
pnpm install
```
**run**
```bash
pnpm dev
```
---
---

## 🤝 Contributing & Support

This repository is created for learning and mastering **TypeScript basics**. If you find this helpful, feel free to **Fork** this project, contribute by submitting a **Pull Request**, or give it a ⭐️ to show your support!

Happy Coding! 🚀
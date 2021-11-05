// spread operation with arrays

let arr1 = [2, 3];
let arr2 = [1, ...arr1, 4];

console.log(arr2); // [1, 2, 3, 4]

// coping an Array

let arr1 = [2, 3];
let arr2 = [...arr1];

console.log(arr2); // [2, 3]

// concatenation;
let arr1 = [2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];

console.log(arr3); // [2, 3, 4, 5]

// destructuring array
let [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// spread operation with function  call

function add(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3, 4, 5];

console.log(add(...numbers)); // 6

//  Rest Parameter,
function numbers(...args) {
  console.log(args); // [1, 2, 3]
}

numbers(1, 2, 3);

// <-------------****------------****-----****----------------------------------->

// spread operation with objects
let person = { name: "Rahul", age: 27 };
let personDetails = { ...person, city: "Hyderabad" };

console.log(personDetails); // Object {name: "Rahul", age: 27, city: "Hyderabad"}

// creating a copy of an object

let person = { name: "Rahul", age: 27 };
let personDetails = { ...person };

console.log(personDetails); // Object {name: "Rahul", age: 27}

// concatenation of an object
let person = { name: "Rahul", age: 27 };
let address = { city: "Hyderabad", pincode: 500001 };
let personDetails = { ...person, ...address };

console.log(personDetails); // Object {name: "Rahul", age: 27, city: "Hyderabad", pincode: 500001}

// Object destructuring
let { firstName, ...rest } = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 27,
};

console.log(firstName); // Rahul
console.log(rest); // Object {lastName: "Attuluri", age: 27}

//  Default Parameters
function numbers(a = 2, b = 5) {
  console.log(a); // 3
  console.log(b); // 5
}

numbers(3);

//Template Literals (Template Strings)

let firstName = "Rahul";

console.log(`Hello ${firstName}!`); // Hello Rahul!

// <-------------****------------****-----****----------------------------------->
// Ternary Operator, Conditional Statements,Defining Functions

// Ternary Operator
let speed = 70;
let message = speed >= 100 ? "Too Fast" : "OK";

console.log(message); // OK

// Conditional Statements
let day = 1;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday"); // Monday
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
    break;
}

// Defining Functions

// Arrow Functions

let sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(4, 3));

// Simple Expressions

let sum = (a, b) => a + b;

console.log(sum(4, 3)); // 7

// One parameter
let greet = (name) => `Hi ${name}!`;

console.log(greet("Rahul")); // Hi Rahul!

//  No parameters

let sayHi = () => "Hello!";

console.log(sayHi()); // Hello!

// Returning Objects

let createUser = (name) => {
  return {
    firstName: name,
  };
};

console.log(createUser("Rahul")); // Object {firstName: "Rahul"}

// <-------------****------------****-----****----------------------------------->

// Factory and Constructor Functions

// 1. Factory Function
// A Factory function is any function that returns a new object for every function call.

// The Function name should follow the camelCase naming convention.

function createCar(color, brand) {
  return {
    color: color,
    brand: brand,
    start: function () {
      console.log("started");
    },
  };
}

let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");

console.log(car1); // Object { color: "blue", brand: "Audi", start: ƒ() }
console.log(car2); // Object { color: "red", brand: "Tata", start: ƒ() }
console.log(car3); // Object { color: "green", brand: "BMW", start: ƒ() }

// 1.1 Shorthand Notations

function createCar(color, brand) {
  return {
    color,
    brand,
    start() {
      console.log("started");
    },
  };
}

let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");

console.log(car1); // Object { color: "blue", brand: "Audi", start: ƒ() }
console.log(car2); // Object { color: "red", brand: "Tata", start: ƒ() }
console.log(car3); // Object { color: "green", brand: "BMW", start: ƒ() }

// 2. Constructor Function
// A regular function that returns a new object on calling with the new operator. The created new object is called an Instance.

// The Function name should follow the PascalCase naming convention.

2.1 The new Operator
When a function is called with the new operator, it does the following steps:

Creates an empty object and assigns it to this
Return this


function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}

let car1 = new Car("blue", "Audi");
console.log(car1);  // Car { }


// Here,

// car1 is instance
// car1.start() is instance method
// car1.color, car1.brand are instance properties



 Function Properties

3.3.1 The name Property
This property returns the name of the function.
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(Car.name);  // Car

3.3.2 The length Property
This property returns the number of parameters passed to the function.
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(Car.length);  // 2


3.3.3 The typeof function
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
console.log(typeof(Car));  // function

// 4. The Constructor Property
// Every object in JavaScript has a constructor property.

// The constructor property refers to the constructor function that is used to create the object.
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started");
  };
}
let car1 = new Car("blue", "Audi");
console.log(car1.constructor);  // f Car(color, brand) {}

// 5.1.1 new Date()
You can create a date object without passing any arguments to the new Date() constructor function.
let now = new Date();

console.log(now);  // Tue Feb 02 2021 19:10:29 GMT+0530 (India Standard Time) { }
console.log(typeof(now));  // object
Here, new Date() creates a new date object with the current date and local time.



// 5.1.2 new Date(milliseconds)
// The Date object contains a number that represents milliseconds since 1 January 1970 UTC.

// The new Date(milliseconds) creates a new date object by adding the milliseconds to zero time.

let time1 = new Date(0);
console.log(time1);  // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) { }

// 100000000000 milliseconds from 1 Jan 1970 UTC
let time2 = new Date(100000000000);
console.log(time2);  // Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time) { }




5.1.3 new Date(date string)
The new Date(date string) creates a new date object from a date string.

Syntax: new Date(datestring);

let date = new Date("2021-01-28");

console.log(date);  // Thu Jan 28 2021 05:30:00 GMT+0530 (India Standard Time) { }

You can also pass only the year and month or only the year. For example,

let date = new Date("2020-08");
console.log(date);  // Sat Aug 01 2020 05:30:00 GMT+0530 (India Standard Time) { }

let date1 = new Date("2020");
console.log(date1);  // Wed Jan 01 2020 05:30:00 GMT+0530 (India Standard Time) { }



Short date format

// short date format "MM/DD/YYYY"
let date = new Date("03/25/2015");
console.log(date);  // Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time) { }


Long date format

// long date format "MMM DD YYYY"
let date1 = new Date("Jul 1 2021");
console.log(date1);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }

Month and Day can be in any order

let date2 = new Date("1 Jul 2021");
console.log(date2);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }




// The month can be full or abbreviated. Also, month names are case insensitive.

let date3 = new Date("July 1 2021");
console.log(date3);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }

// commas are ignored
let date4 = new Date("JULY, 1, 2021");
console.log(date4);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }



5.1.4 new Date(year, month, day, hours, minutes, seconds, milliseconds)
It creates a new date object by passing a specific date and time.

For example,
let time1 = new Date(2021, 1, 20, 4, 12, 11, 0);
console.log(time1);  // Sat Feb 20 2021 04:12:11 GMT+0530 (India Standard Time) { }


The passed argument has a specific order.

If four numbers are passed, it represents the year, month, day and hours.

let time1 = new Date(2021, 1, 20, 4);
console.log(time1);  // Sat Feb 20 2021 04:00:00 GMT+0530 (India Standard Time) { }


Similarly, if two arguments are passed, it represents year and month.
let time1 = new Date(2020, 1);
console.log(time1);  // Sat Feb 20 2021 04:00:00 GMT+0530 (India Standard Time) { }



 AutoCorrection in Date Object

 let date = new Date(2008, 0, 33);
// Jan does not have 33 days
console.log(date);  // Sat Feb 02 2008 00:00:00 GMT+0530 (India Standard Time) { }
33 days are auto corrected to 31 (jan) + 2 days in feb.




Method	Description
now()	Returns the numeric value corresponding to the current time (the number of milliseconds passed since January 1, 1970, 00:00:00 UTC)
getFullYear()	Gets the year according to local time
getMonth()	Gets the month, from 0 to 11 according to local time
getDate()	Gets the day of the month (1–31) according to local time
getDay()	Gets the day of the week (0-6) according to local time
getHours()	Gets the hour from 0 to 23 according to local time
getMinutes	Gets the minute from 0 to 59 according to local time
getUTCDate()	Gets the day of the month (1–31) according to universal time
setFullYear()	Sets the full year according to local time
setMonth()	Sets the month according to local time
setDate()	Sets the day of the month according to local time
setUTCDate()	Sets the day of the month according to universal time

let date1 = new Date(1947, 7, 15, 1, 3, 15, 0);

console.log(date1.getFullYear());  // 1947
console.log(date1.getMonth());  // 7

Setting Date Values
let date1 = new Date(1947, 7, 15);
date1.setYear(2021);
date1.setDate(1);

console.log(date1);  // Sun Aug 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
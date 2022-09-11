


/////////////////////2.Data Types//////////////////////////////
//In javaScript every value is an object which looks like e.g 
let me = {
    name : "John",
} // or a primitive value e.g 
let name = "John"
//Note: a value is only primitive if it's not an object 

//Primitive Data Type are basic values in javaScript that does not include an object

/////////////////////2.1 Primitive Data Types//////////////////////////////
//Examples of Primitive Data Types: 1. String 2. Number 3. Boolean 4. Null 5. Undefined 6. Symbol 7. Big Int
//1. Number: used to store decimals and  integers e.g//
let age = 23;

//2.String: used to store text e.g//
let firstName = "John"; // the quotes are necessary to store a string either double or single quotes

//3. Boolean: used to store true or false e.g// 
let isMarried = false; // false is the value

//4. Null: means empty value e.g//
let lastName = null; // null is the value

//5. Undefined: value taken by a variable that's not defined yet e.g//
let job; // undefined is the value of the variable

//6. Symbol: used to store unique values that can't be changed it was introduced in (ES2015) e.g//
let symbol = Symbol(); // symbol is the value

//7. Big Int: used to store very large numbers it was introduced in (ES2020) e.g// 
let bigInt = BigInt(123456789); // bigInt is the value


//we could manually check the kind of data type we input with the help of a special operator called
//"typeof" this is an operator just like the plus or minus operator that we can use to show the type of a value

// e.g
let firstNames = false 
console.log(typeof'javaScriptFun') //looking at the console it tells you that this is a "string"
console.log(typeof firstNames) // this will tell you that it's a "boolean"
//using this can help you identify the datatype you are making use of.//


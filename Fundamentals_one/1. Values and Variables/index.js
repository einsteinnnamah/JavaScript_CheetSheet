/////////////////////1. Values and Variable Types//////////////////////////////

//Value is basically is the smallest unit of information in javaScript e.g//
console.log("Hello World"); // "hello world" is the value
console.log(1); // 1 is the value

//Variable is basically a container for storing a value, 
// we can store any  value either string, number, etc in a variable and reference in anywhere in our code e.g//
let Firstname = "John"; // so here we basically assign the value "John" to the variable name
//for us to access the value of the variable we need to use the variable name e.g//
console.log(Firstname); // we can then access the value of the variable name
//Checking your console we indeed get John printed out//

//Nb:We can also use a variable name more than once e.g//
//Rules for naming variables: 
//1. Variable names can only contain letters, numbers, and underscores
//2. Variable names are case sensitive (upper and lower case letters are different) e.g let firstName = "John" and let firstName = "john" are two different variables
//3. Variable names should not be JS keywords
//4. Variable names should not start with a number
//5. Variable names should not be reserved keywords
//6. Variable names should not be too long or short
//7. Variable names must be descriptive e.g "let = myFirstJob = 'Programmer' not let job1 = 'Programmer'"

////Ways you can declared a variable//////
//variable can be declared is various ways which included: "let", "var" and "const"
//"let" and "const" were introduced in ES6 so they are modern javaScript while "var"  is the old way of declaring variables

///"let": this is used on variables that can change later in the future
let kingName = "Bode" 
console.log(kingName)

//this code would print Bode in the console but let's change this in the next line.
//to do this you don't need to declare the let keyword again
kingName = "Kola"
console.log(kingName) //as you see the output of the code has been changed.
//we were able to edit this variable because we used the "let" keyword

///"const":this is used on variables that are not meant to change at any point in the future
//e.g 
const kingAge = 1924; //if we try to add a change this we will run into an error
console.log(kingAge)

//uncomment it below to see the error that occurs when we try to change it
// kingAge = 20;
// console.log(kingAge) 
//that is what the const keyword does it create a variable that we can't reassign
//Note: we can't declare an empty const


///"var": this is an old way of defining variables prior to ES6, it works the same way as "let"
var queenName = "kemi"
console.log(queenName)

queenName = "shola"
console.log(queenName) // as you can see it works similar to "let"
// you should basically try not to use var 
//What is an operator//
//An operator allow us to transform values or combine multiple values//
// we have different category e.g mathematical, comparison, logical, assignment operators, etc.//

//Lets start with mathematical or arithmetic operators//
const ageNigeria = 2022 - 1960;
const ageKemi = 2022 - 1999;
console.log(ageKemi, ageNigeria)
//that's how we use minus to calculate a person's age.//
//note we can log different value in a single console.log "just use comma to differeciate it "
console.log(ageKemi / 2, ageNigeria * 2)
//
console.log(2**3)
//Note:2 ** 3 means 2 to the power of 3 = 2*2*2 = 8

//plus operator: this can also be use to join strings i.e concatenate strings.
const firstName = "jonas"
const lastName = "Samson"

console.log(firstName + " " + lastName)
//Note: the " " is a string to add space in between the firstName and lastName string


////Assignment Operators///////
//equal sign
let x = 10 + 5; //notice we have the plus and equal operators which sums 15
//Note 10 + 5 is done first then the equal sign comes next.
console.log(x)
x += 10; // x = x + 10 //we are basically reassigning the value this should give use 25, because x is originally 15
console.log(x)
x *= 4 // x = x * 4 // which should be 100
console.log(x)
x ++; // x = X + 1 // which should be 101
console.log(x)
x --; // opposit of plus plus // which should give us 100 back
console.log(x)


//Comparison Operators used to product boolean values e.g true, false//
console.log(ageKemi > ageNigeria) //if kemi's age is greater than nigeria's age it will be true, if not show false
//answer false


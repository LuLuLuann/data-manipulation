// PART 1 - MATH PROBLEMS

// TASK: We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
const n1 = 9;
const n2 = 1;
const n3 = 21;
const n4 = 19;


//All add up to 50
const isSum50 = (n1+ n2 + n3 + n4) == 50
console.log(isSum50); //true

//At least two of these numbers must be odd.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2; // 4
console.log(isTwoOdd) // true

//No number can be larger than 25
const isOver25 = (n1 > 25) || (n2 > 25) || (n3 > 25) || (n4 > 25); 
console.log(isOver25); // false

// Each is unique
// ATTEMPT 1 
const isUnique = (n1 != n2 || n3 || n4) &&  (n2 != n1 || n3 || n4) && (n3  != n1 || n2 || n4) && (n4 != n1 || n2 || n3); 
//ATTEMPT 2 - alternate way of writing it
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique); //true

// Check if all numbers are divisible by 5. Cache the result in a variable.

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
// Alternative way of writing above is:
// const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
// can also use a triple equal sign ( === ) instead of a double ( == )
console.log(isDivisibleBy5); 

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = n1>n4; // 9>19
console.log(firstLargerThanLast); //false

// Accomplish the following arithmetic chain:
// 1. Subtract the first number from the second number.
const secondMinusFirst = n2 - n1; // 1-9
console.log(secondMinusFirst); // -8

// 2. Multiply the result by the third number.
const multiplyByThree = secondMinusFirst * n3; // -8 * 21
console.log(multiplyByThree); // -168

// 3. Find the remainder of dividing the result by the fourth number.
const divideByFourth = multiplyByThree % n4; // -168 divided by 19, what is the remainder? 
console.log(divideByFourth); // -16

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
//ANSWER: not currently using the NOT OPERATOR

//Before continuing, go back through your code and add console log statements for each check. Use string concatenation or template literals to format the outputs in a reasonable way.
//For example, instead of: console.log(isValid)
// We could write: console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) or something similar.

const isValid = (isSum50 == true) && (isTwoOdd == true) && (isOver25 == false) && (isUnique ==true)
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)
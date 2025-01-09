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

// PART 2 - PRACTICAL MATH

// PROBLEM: You are planning a cross-country road trip! 
// The distance of the trip, in total, is 1,500 miles.

const totalDistance = 1500;

// Your car’s fuel efficiency is as follows: 
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.

const mph55 = 55;
const mph60 = 60; 
const mph75 = 75;

let mpg55 = 30;
let mpg60 = 28;
let mpg75 = 23;

// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
let fuelBudget = 175;
let fuelCost = 3;

// TASK: Set up a program to answer the following questions:
// 1. How many gallons of fuel will you need for the entire trip?
// A: 1500 (total DISTANCE in miles) / [(DISTANCE in miles per gallon) * (SPEED in miles per hour)]
let gallonsNeeded55 = Math.ceil(totalDistance / mpg55);
// ALTERNATIVE - rounding two decimal points if you want to be specific
// let GallonsNeeded55 = (totalDistance / mpg55).toFixed(2);
console.log(`The amount of fuel needed if you drive at 55mph is ${gallonsNeeded55} gallons.`);

let gallonsNeeded60 = Math.ceil(totalDistance / mpg60);
// ALTERNATIVE - rounding two decimal points if you want to be specific
// let GallonsNeeded60 = (totalDistance / mpg60).toFixed(2);
console.log(`The amount of fuel needed if you drive at 60mph is ${gallonsNeeded60} gallons.`);

let gallonsNeeded75 = Math.ceil(totalDistance / mpg75); 
// ALTERNATIVE - rounding two decimal points if you want to be specific
// let GallonsNeeded75 = (totalDistance / mpg75).toFixed(2);
console.log(`The amount of fuel needed if you drive at 75mph is ${gallonsNeeded75} gallons.`);

// 2. Will your budget be enough to cover the fuel expense?
// A: $175 (total fuel budget) / $3 per gallon = total gallons you can get for your budget

let affordableGallons = (fuelBudget / fuelCost).toFixed(2); 
// ALTERNATIVE - rounding down to closest whole number to be safe
// let affordableGallons = Math.floor(fuelBudget / fuelCost);
console.log(`The amount of fuel you can afford with $175 is ${affordableGallons} gallons.`);

// is budget gallon total <= total gallons needed at X mph
let canAfford55 = affordableGallons >= GallonsNeeded55;
console.log(`If you drive at 55mph, you have enough money for fuel: ${canAfford55}.`);

let canAfford60 = affordableGallons >= GallonsNeeded60;
console.log(`If you drive at 60mph, you have enough money for fuel: ${canAfford60}.`);

let canAfford75 = affordableGallons >= GallonsNeeded75;
console.log(`If you drive at 75mph, you have enough money for fuel: ${canAfford75}.`);

// 3. How long will the trip take, in hours?
// A: (total distance for trip) / (mph) = (time)
// Math.round() will round to 27 and the time is more than that, so I used ().toFixed(2)
let timeFor55 = (totalDistance / mph55).toFixed(2);
console.log(`When driving at 55mph, the trip will take ${timeFor55} hours.`);

let timeFor60 = totalDistance / mph60;
console.log(`When driving at 60mph, the trip will take ${timeFor60} hours.`);

let timeFor75 = totalDistance / mph75;
// ALTERNATIVELY - a way to plug in different numbers if you want to be able to reuse values
console.log(`When driving at 75mph, the trip will take ${timeFor75} hours.`);

// 4. Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

//ATTEMPT 1:
//Doesn't work = error at console log line = NaN (not a number)
// const numbers = [timeFor55, timeFor60, timeFor75];
// const min =Math.min(numbers);
// console.log(min); 

//ATTEMPT 2:
//Doesn't work = error ({} are expected to be ","
// const numbers = [${timeFor55}, ${timeFor60}, ${timeFor75}];
// const min =Math.min(numbers);
// console.log(min); 

//ATTEMPT 3:
//Doesn't work - error at console log line - NaN
// const numbers = [`${timeFor55}, ${timeFor60}, ${timeFor75}`];
// const min =Math.min(numbers);
// console.log(min); 

//ATTEMPT 4:
let quickestTrip = Math.min(timeFor55, timeFor60, timeFor75);
console.log(`The quickest trip is ${quickestTrip} hours which would save you the most time.`);

let cheapestTrip = Math.min(gallonsNeeded55, gallonsNeeded60, gallonsNeeded75);
console.log(`The cheapest trip is $${cheapestTrip} which would save you the most money.`)




// 5. Log the results of your calculations using STRING CONCATENATION ( + ) or TEMPLATE LITERALS ( ` ).

//TEMPLATE LITERALS = a special type of string delimited with backticks ( ` ).
// Ex: 
// const a = 5;
// const b = 10;
// console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
// Therefore, 'a' plus 'b' is equal to ${a + b}.`);
// // 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// // Therefore, 'a' plus 'b' is equal to 15.
//***Do note, however, that this means if you want to use dollar signs as part of the actual string within a template literal, they need to be escaped (\$).***
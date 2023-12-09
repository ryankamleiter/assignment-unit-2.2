// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A variable called "name" is created and set to equal "Dane"
// Then a conditional is made that looks for "name" to equal "Mary" so that if the "name" variable is "Mary" she will be greeted -  
// in the console as 'Hi, Mary!'
// In this case, "name" = "Dane" therefore the "else" portion of the conditional will console.log 'How do you do?' 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We start by creating an empty variable "secret" and another variable "code" set to equal 123.
// The first conditional says if "code" is 123 (it is), "secret" will be assigned the string "super" and the code is multipied by 2.
// The second conditional says if code is greater than 250, the variable 'secret' will change to "duper". At that point in the script "code " = 246, so this conditional will not change anything.
// console.log(secret) should output super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 3 variable are created. 'isStudent' is assigned the boolean true. "age" and "zip" are assigned numbers.
// Compound conditionals are created check these variables and console.log a personalized message. Line 84 checks if the variables isStudent is true AND zip is greater than 80000
// If not, line 86 checks if isStudent is false OR if age is less than 30. Line 88 checks if isStudent is true. If none of the "if" or "else if" statements are correct, the "else" will console.log 'How about the weather?'
// In this case the first correct statement is line 88 and the only console.log that will run is console.log('Welcome to Prime!')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne = 'blue';
let colorOne = 'red';
// FIX colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX type let before "colorOne"
  colorOne = 'purple';
  // FIX add "let colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX time is described as a variable but is typed out as a constant. 'let' should be used instead of 'const'
const time = 4;

// FIX description states that the conditional is checking temp AND time. || is OR. && should replace ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX minAge is described as a variable, but is made into a constant. Replace 'const' with 'let'
const minAge = 21;

// FIX conditional is backwards. if minAge is less than or equal to age console.log('no entry') will run. I would fix this by changing <= to >=
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


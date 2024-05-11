
///////////////// For Loop ////////////////////

// A for loop typically consists of three parts: initialization, condition, and iteration.

// for (initialization; condition; iteration) {
//     // code to be repeated
// }

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let x = 10; x >= 0; x--) {
    console.log(x);
}

for (let y = 0; y <= 100; y += 10) {
    console.log(y);
}


////////////////// While Loop ///////////////////

// A while loop simply checks a condition and repeats the block of code as long as the condition is true.

// The condition is evaluated before the loop body is executed. If the condition is initially false, the loop body will not execute at all.

// while (condition is true) {
//     //do something
// }

let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

let k = 10;
while (k <= 100) {
    console.log(k);
    k += 10;
}

let s = 4;
while (s >= -4) {
    console.log(s);
    s -= 1;
}


////////////////// Do While Loop /////////////////

// do-while loop: The condition is evaluated after the loop body has executed at least once. This guarantees that the loop body will execute at least once, regardless of the condition.

// do {
//     // code to be repeated
// } while (condition);

let count1 = 1;
do {
    console.log(count1);
    count1++;

} while (count1 < 5);


let i = 5; // this code runs once
do {
    i++;
} while (i < 5);


let e = 14;
do {
    console.log(e);
    e += 1;
} while (e <= 140);


////////////////// Functions Basic /////////////////

// JavaScript, a function is a block of reusable code that performs a specific task. You can think of it like a recipe: you define the steps (the code inside the function), give it a name, and then you can "call" that function (use its name) whenever you need to perform those steps.

function showMessage() {
    console.log('in a function') // Defining the function
}

showMessage() // Calling the function


function greet(name) {
    console.log("Hello " + name + "," + ` How is your day going?`);
}

greet(`Kevin`)
greet(`Emery`)
greet(`Sage`)


function age(x) {
    console.log('You are ' + x + ' years old');
}

age(34);




//////////////// Function Expressions ///////////////
// function expressions are created as needed and can be stored in variables.


let myFunction = function loggingFunction() { // loggingFunction helps in debugging
    console.log('Here is your message');
}

myFunction();


/////////////  Passing Information to Functions /////////
//example 1
function showMessage(message) {
    console.log(message);
}

showMessage('First Message');
showMessage('Second Message');
// example 2
function showMessages(message, anotherMessage) {
    console.log(message, anotherMessage);

}

showMessages('First Message', 'Second Message');

//example 3
let myFunction1 = function loggingFunction(message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction1('Hello', 'Kevin');

////////////// Function Return Values ///////////////////
//example1
function getSecretCode(value) {

    let code = value * 42;
    return code;

}

console.log(getSecretCode(2));

// example2
function getSecretCode1(value) {

    let code = value * 42;
    return code;

}

let secretCode = getSecretCode1(2);
showMessage(secretCode);

//////////////// Function Scope /////////////////////////
// example 1
let key = 42;  // key is global so it will work inside the code

function getSecretCode2(value) {

    let code = value * key;  // code is inside the fuction scope so it only exists inside the function
    return code;

}

let secretCode2 = getSecretCode2(2);
showMessage(secretCode2);


// 1. ** Basic Functions **: Think of these like ready - made recipes.You have a set of instructions(function) that you can use whenever you need them.You just call the function by its name and it does its thing.

//     Example: You have a function called "addition" that adds two numbers.Whenever you want to add two numbers, you just call "addition" and give it the numbers you want to add.

// 2. ** Function Expressions **: These are like cooking on the fly.Instead of having a ready - made recipe, you're creating one as you go. You define your function right where you need it, usually assigning it to a variable.

// Example: You might need to multiply two numbers, but instead of having a pre - made "multiply" function, you create one on the spot and store it in a variable like "multiplyFunction".

// In short, basic functions are pre - defined and ready to use, while function expressions are created as needed and can be stored in variables.


///////////////////// Calculator /////////////////////
function addition(x, y) {
    console.log(x += y);
}
function subtraction(x, y) {
    console.log(x -= y);
}
function multiply(x, y) {
    console.log(x *= y);
}
function divide(x, y) {
    console.log(x /= y);
}

addition(10, 10);
subtraction(10, 10);
multiply(10, 10);
divide(10, 10);









// Problem 1
// We are going to create a function called addTwoNumbers
// It will take two parameters.
// Add the two parameters together and return the sum.

function addTwoNumbers(a, b) {
    // add the two parameters together into sum.
    let sum = a + b;
    console.log("Made it");
    // the return statement is important cause that is what we get back
    // when the function executes
    return sum;
}

console.log(addTwoNumbers(1, 1))


// Problem 2
// Our function name is going to be perimeter.
// We will have two parameters. A width and a height.
// Find the perimeter and return that value.
// Perimeter is width + width + height + height

function perimeter(width, height) {
    let answer = (width + width + height + height);
    return answer;
}

console.log(perimeter(10, 10));

// Problem 3
// The function name will be area.
// We will take two parameters. Width and height.
// Find the area and return that value.
// Area is width * height

function area(width, height) {
    let answer = (width * height);
    return answer;
}

console.log(area(5, 5));


// Problem 4
// The function name will be helloMessage.
// It will take one parameter which will be a persons name.
// Have it output "Hello (persons name)"

function helloMessage(name) {
    return ('Hello ' + name);
}

console.log(helloMessage("Kevin"));

// Problem 5
// The function name will be favColor.
// It will take one parameter which will be a color.
// If the color is blue or red or green return "That is a great color!".
// If the color is yellow return "Just like the sun!".
// If it is any other color return "Great choice!".

function favColor(color) {
    if (color === 'blue' || color === 'red' || color === 'green') {
        return "That is a great color!";
    } else if (color === 'yellow') {
        return ('Just like the sun!');
    } else {
        return 'Great choice!'
    };

}

console.log(favColor('yellow'));


// Problem 1
// Create a function called circleArea.
// This function will take one parameter which will be a radius.
// Return the area of the circle based on the radius.
// area is 3.14 * r^2

function circleArea(radius) {
    let area = 3.14 * (radius ** 2);
    return area;
}
console.log(circleArea(10));



// Problem 2
// Create a function called circleCircumference.
// This function will take one parameter which will be a radius.
// Return the circumference of the circle based on the radius.
// circumference is 2 * 3.14 * radius

function circleCircumference(radius) {
    let circumference = 2 * 3.14 * radius;
    return circumference;
}

console.log(circleCircumference(10));


// Problem 3
// Create a function called average.
// This function will take three parameters which will be numbers.
// Find the average of these numbers and return the value.

function average(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}

console.log(average(2, 2, 2));



// Problem 4
// Create a function called combineTwoStrings.
// This function will take two parameters.
// return both of the strings concatenated(combined)

function combineTwoStrings(str1, str2) {
    let text = str1 + " " + str2 + "!";
    return text;
}

console.log(combineTwoStrings("Happy", "Birthday"));

// Problem 5
// Create a function called cubed.
// This function will take one parameter.
// Return the cubed computer that is given from the parameter.

function cubed(x) {
    let total = x ** 3;
    return total;
}

console.log(cubed(2));

// Problem 6
// Create a function called squared.
// This function will take one parameter.
// Return the squared computer that is given from the parameter.

function squared(x) {
    total = x ** 2;
    return total;
}

console.log(squared(2));

// Problem 7
// Create a function called sphereArea.
// This function will take one parameter which will be the radius.
// Find the surface area given the radius 4 * 3.14 * r^2
// Use your squared function to find the squared radius.

function sphereArea(radius) {
    total = 4 * 3.14 * radius ** 2;
    return total;
}

console.log(sphereArea(2));


// Rock, Paper, Scissors
// Just like the heading says you are going to make a rock paper scissors game!

// Steps:

// Create a function called rockPaperScissors()
// This function will take one parameter which will be a string.
// The string will be either 'rock', 'paper', or 'scissors'.
// Have the computer pick a random computer between 1 - 3 or 0 - 2.(Unsure of how to do this ? Check out this link https://www.w3schools.com/js/js_random.asp)
// Based on that random computer have the computers pick be either rock, paper, or scissors.
// Determine who wins:
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
// If the computer wins return the string 'You lose! I chose (computers choice goes here)'.
// If the user wins return the string 'You win! I chose (computers choice goes here)'.
// If the user and the computer choose the same thing return the string 'Its a tie! I chose (computers choice goes here)'
// If the user enters anything other than rock paper or scissors return the string 'I do not understand. Try entering rock, paper, or scissors'.
// No tests on this one.It will be your job to thoroughly test your program.I will then review it.

// if computer 0 rock beats 2
// if computer 1 paper beats 0
// if computer 2 scissors beats 1



function rockPaperScissors(userInput) {
    let computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
        computer = 'rock';
    } else if (computer === 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    if (userInput === 'rock') {
        if (computer === 'scissors') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'paper') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else if (userInput === 'paper') {
        if (computer === 'rock') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'scissors') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else if (userInput === 'scissors') {
        if (computer === 'paper') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'rock') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else {
        return 'I do not understand. Try entering rock, paper, or scissors.';
    }
}

console.log(rockPaperScissors('rock'));


function rockPaperScissors(userInput) {
    let computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
        computer = 'rock';
    } else if (computer === 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

    if (userInput === 'rock') {
        if (computer === 'scissors') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'paper') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else if (userInput === 'paper') {
        if (computer === 'rock') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'scissors') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else if (userInput === 'scissors') {
        if (computer === 'paper') {
            return 'You win! I chose ' + computer;
        } else if (computer === 'rock') {
            return 'You lose! I chose ' + computer;
        } else {
            return 'It\'s a tie! I chose ' + computer;
        }
    } else {
        return 'You need to pick rock, paper, or scissors!!'
    }
}

console.log(rockPaperScissors('rock'));






















// ////////////////////// Objects //////////////////////

// let person = {
//     name: 'Kevin',
//     age: 34,
//     parTime: false
// };

// person.age = 35; // You can change it
// person['age'] = 36; // Another way to change it

// console.log(person.name);
// console.log(person.age);
// console.log(person.partTime);

// // ------------------------

// let mySymbol = Symbol();

// let person1 = {
//     name: 'Kevin',
//     age: 34,
//     partTime: false,
//     [mySymbol]: 'secretInformation'
// };

// console.log(person1.mySymbol);

// // ------------------------

// let person2 = {
//     name: 'Kevin',
//     age: 34,
//     partTime: false,
//     showInfo: function () {
//         console.log('String of text');
//         console.log(this.name); // this get missed alot
//     }
// };

// person2.showInfo();

// ////////// Passing Objects to Functions //////////////

// let message = 'Hello';

// function changeMessage(message) {
//     message == 'Hi!';
// }

// changeMessage(message);
// console.log(message);

// //----------------------------

// let person3 = {
//     name: 'Johnn',
//     age: 32,
//     parTime: false
// };

// function incrementAge(person) {
//     person3.age++;
// }

// incrementAge(person3);

// console.log(person3.age);

// //////////// Standard Built-in Objects //////////////

// let now = new Date();
// console.log(now.toDateString());

// //----------------------------

// console.log(Math.random());

// /////////// Detecting Button Clicks /////////////////

// // const button = document.getElementById('see-review');

// // button.addEventListener('click', function () {
// //     console.log('click');
// // });
// //------------------------------

// const button = document.getElementById('see-review');

// button.addEventListener('click', function () {

//     const review = document.getElementBtId('review');

//     if (review.classList.contains('')) {
//         review.classList.remove("d-none");
//         button.textContent = 'CLOSE REVIEW';
//     }
//     else {
//         review.classList.add("d-none");
//         button.textContent = 'SEE REVIEW';
//     }

// });








// // Problem 1
// // We want to create an object about a person.
// // Give this person a name of 'John'
// // Give this person an age of 23
// // Give this person a height of '5 feet 11 inches'

// let person = {
//     name: 'John',
//     age: 23,
//     height: '5 feet 11 inches'
// };



// // Problem 2
// // Lets create a themePark object
// // Our theme park has 8 rollerCoasters
// // 11 kidFriendlyRides
// // 3 shows
// // 40 churroStands

// let themePark = {
//     rollerCoasters: 8,
//     kidFriendlyRides: 11,
//     shows: 3,
//     churroStands: 40
// };


// // Problem 3
// // Lets create a fastFood object
// // This object will tell us what foods are in stock
// // burgers is true
// // fries is true
// // iceCreamMachineBroken is true
// // We just ran out of orangeSoda so make it false.

// let fastFood = {
//     burgers: true,
//     fires: true,
//     iceCreamMachineBroken: true,
//     orangeSoda: false
// };



// // Problem 4
// // Lets create a mathHelp object
// // Give it a function called squared that will take one parameter
// // and have it return the squared number from the parameter.
// // Give it a function called toCelsius.
// // This function takes one parameter which will be a number in fahrenheit
// // to convert to celsius. Return this number.
// // Give it a function called distanceBetweenTwoPoints
// // This function will take 4 parameters in this order:
// // x1,y1,x2,y2
// // Find the distance between the two points given and return the value.
// // Don't know the equation to find the distance? Go to the link
// // under problem 4 help.

// let mathHelp = {
//     squared: function (x) {
//         return x ** 2;
//     },
//     toCelsius: function (f) {
//         return (f - + 32) * 5 / 9;
//     },
//     distanceBetweenTwoPoints: function (x1, y1, x2, y2) {
//         return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     }
// };








// Problem 1
// Below we have a currency object.
// Create a string in myCurrency using this object that says:
// 'I have (insert euro here)200 which is (insert yen here)23,718.09 and (insert usd here)218.84'

let currency = {
    usd: '$',
    euro: '€',
    yen: '¥'
};

let myCurrency = `I have ${currency.euro}200 which is ${currency.yen}23,718.09 and ${currency.usd}218.84`;


// Problem 2
// We have a very successful company with the incomes of three months below.
// Our total income value is not right.
// Add all the months incomes together into the total variable
// Then reassign the totalIncome value in the companyIncome object with 
// the total variable.
// Note: Do not copy any paste the numbers. Access each number individually through
// the object.

let companyIncome = {
    january: 987423,
    february: 932482,
    march: 3249834,
    totalIncome: 4357346
};

let total = companyIncome.january + companyIncome.february + companyIncome.march;
companyIncome.totalIncome = total;


// Problem 3
// Here we have a college object with some info about each graduating class
// in the next couple of years.
// Practice accessing an object within an object.
// Add the students in each class together into the students variable.

let college = {
    students: 23432,
    classOf21: {
        students: 8134,
        averageTuition: 28563
    },
    classOf22: {
        students: 10238,
        averageTuition: 22759
    },
    graduationRatePercent: 70
};

let students = college.classOf21.students = college.classOf22.students;


// Problem 4
// Here we have a mathEquations object
// in our 'first' variable use the pow4 function for the number 7
// in our 'second' variable use the addThree function for 3213,3543 and 12365

let mathEquations = {
    addTwo: function (a, b) {
        return a + b;
    },
    addThree: function (a, b, c) {
        return a + b + c;
    },
    pow4: function (num) {
        return num * num * num * num;
    }
};

let first = mathEquations.pow4(7);
let second = mathEquations.addThree(3213, 3543, 12365);

// Problem 5
// Use our positiveExponent function and assign the value to the answer variable
// Use the values 5 as the base and 3 as the power.

let mathInfo = {
    exponent: 'a quantity representing the power to which a given number or expression is to be raised, usually expressed as a raised symbol beside the number or expression',
    logarithm: 'a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.',
    equation: {
        positiveExponent: function (base, power) {
            let total = base;
            for (let i = 1; i < power; i++) {
                total *= base;
            }
            return total;
        }
    }
};

let answer = mathInfo.equation.positiveExponent(5, 2);

// Problem 6
// When the button is clicked show the hidden content(Make it display: block;). If the button is clicked again hide the hidden content(Make it display: none;). Every time the button is clicked have the counter go up by one.

//Passed

document.getElementById('button').addEventListener('click', function () {
    let hiddenContent = document.getElementById('hiddenContent');
    let counter = document.getElementById('counter');
    let currentCount = parseInt(counter.textContent);

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        counter.textContent = currentCount + 1;
    } else {
        hiddenContent.style.display = 'none';
        counter.textContent = currentCount + 1;
    }
});






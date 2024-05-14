
// Arrays

// basic arrays

// let value = [1, 2, 3];
// console.log(value);
// console.log(value.length);


// let values = Array.of(1, 2, 3, 4, 5);
// console.log(values[3]);

// const values1 = ['a', 'b', 'c'];
// values1[0] = 'aaa';
// console.log(values1[0]);
// console.log(values1[1]);
// console.log(values1[2]);
// console.log(values1[3]); // undefined outside of range
// console.log(Array.isArray(values1));


// /////////////////////////////// Manipulating Arrays //////////////////////////////////////

// push() === adds items to the end of an array
// const values2 = ['a', 'b', 'c'];
// values2.push('d', 'e', 'f'); // can take more the one element
// console.log(values2);

// pop() === takes the last element off an array. in this example it stores it in the last variable
// const values3 = ['a', 'b', 'c'];
// const last = values3.pop();
// console.log(values3, last);

// shift() === move the entire array. shifts the entire array to the left one element and take the first element off the array.
// const values4 = ['a', 'b', 'c'];
// const first = values4.shift();
// console.log(first);
// console.log(values4, first);

// unshift() === opposite of shift
// const values5 = ['b', 'c'];
// values5.unshift('hello', 'world');
// console.log(values5);

// slice() === method is used primarily to extract a section of an array and return a new array containing the extracted elements
// create a new array like a copy. but the original still remains
// const values6 = ['a', 'b', 'c'];
// const newValues6 = values6.slice(1, 2); // 1st argument is where we start are slice. 2nd argument is the end of slice.
// console.log(newValues6); //  b

// const values9 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const newValues9 = values9.slice(3, 6); // count the spaces
// console.log(newValues9); // d e f

// splice() for deleting ===  method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// const values7 = ['a', 'b', 'c']; // it splice a and c together and b gets deleted
// values7.splice(1, 1);
// console.log(values7); // a c

// splice() for deleting
// const values10 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// values10.splice(1, 5); // 1st argument(1) starts the splice after a. 2nd argument(5) will delete b c d e f
// console.log(values10); // a g

// splice() for inserting
// const values8 = ['a', 'b', 'c'];
// values8.splice(1, 0, 'foo'); // 1st argument(1) tells where to start. 2nd argument(0) number of items we want to delete.
// console.log(values8); // a foo b c

// splice() for inserting
// const values11 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// values11.splice(1, 4, 'hello'); // 1st argument(1) starts the splice after a. 2nd argument(4) will delete b c d e. 3rd inserts hello in between a f.
// console.log(values11); // a hello f g


// /////////////////// Array Searching and Looping /////////////////////

// indexOf()
// const values12 = ['a', 'b', 'c'];
// console.log(values12.indexOf('c')); // 2
// console.log(values12.indexOf('d')); // -1

// indexOf() filter
// const values13 = ['a', 'e', 'b', 'c', 'd'];
// const set = values13.filter(function (item) {
//     return item > 'b';
// });
// console.log(set); // e c d there greater in the alphabet then b

// find()
// const values14 = ['a', 'bbb', 'ccccc'];
// const found = values14.find(function (item) {
//     return item.length > 1;
// })
// console.log(found); // bbb stops once its true

// forEach()
// const values15 = ['a', 'b', 'c'];
// values15.forEach(function (item) {
//     console.log(item);
// })
// a
// b
// c



///////////////////////////////////// Homework 1 //////////////////////////////////////

// // Problem 1
// // Create an array in the myFirstArray variable
// // At the 0 index put the number 4 there.
// // At the 1st index put the number 8 there.
// // In the addUp variable access each number in the array and add them together.


// let myFirstArray = [4, 8];
// let addUp = myFirstArray[0] + myFirstArray[1];
// console.log(addUp);


// // Problem 2
// // Now push the value in addUp to the end of myFirstArray array.
// // (it will be at the 2nd index)
// myFirstArray.push(addUp);
// console.log(myFirstArray);

// // Problem 3
// // We no longer want what is in the 0 index of the array.
// // Use the built in array function to take out the value in the 0th index.
// myFirstArray.shift();
// console.log(myFirstArray);


// // Problem 4
// // Add the two items in the array together into the addAgain variable

// let addAgain = myFirstArray[0] + myFirstArray[1];
// console.log(addAgain);

// // Problem 5
// // Create a new array with 10 different items in it.
// // To find the length of how many items are in an array
// // you can type the array variable name with .length at the end.
// // myArray.length will return 2.
// // Put the length of the array in the arrLength variable.

// let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arrLength = newArray.length;
// console.log(newArray);

////////////////////////////////////// Homework 2 ////////////////////////////////

// // MAKE SURE you use the array functions to complete these problems.

// // Problem 1
// // Below we have an array. Take the last item off of the array.

// let array1 = [1, 2, 3, 4, 5, 6];
// function removeLastItem() {
//     array1.pop();
// }


// // Problem 2
// // Below we have an array. Take the first item off of the array.

// let array2 = ["This", "Hello", "World"];
// function removeFirstItem() {
//     array2.shift();
// }


// // Problem 3
// // Below we have an array. Remove "stuff" and "ready" from the array.

// let array3 = ["well", "stuff", "money", "ready", "hello"];
// function removeItems() {
//     array3.splice(1, 1); // Removes "stuff"
//     array3.splice(2, 1); // *Now removes "ready" since it has shifted one position after the first removal
// }

// removeItems();
// console.log(array3);

// // Problem 4
// // Below we have an array. Add "well" to the beginning of the array.

// let array4 = ["hello", "people"];

// function addItem() {
//     array4.unshift('well');
// }

// addItem();
// console.log(array4);

// // Problem 5
// // Below we have an array. Add "power" in between "great" and "comes".

// let array5 = ["with", "great", "comes", "great", "responsibility"];
// function addMoreItem() {
//     array5.splice(2, 0, 'power');
// }

// addMoreItem();
// console.log(array5);

// // Problem 6
// // Below we have an array. Add 7 to the end of the array.

// let array6 = [1, 2, 3, 4, 5, 6];
// function addLast() {
//     array6.push(7);
// }

// addLast();
// console.log(array6);


////////////////////////////////////// Homework 3 ////////////////////////////////


// // Problem 1
// // Use the filter function on the array below.
// // We only want an array that has numbers that are greater than 5 and less than 11
// // Assign the result array to myArray

// let myArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];

// function filterMyArray() {
//     myArray = myArray.filter(num => num > 5 && num < 11);
// }




// // Problem 2
// // Use the forEach function on the array below
// // We want to take each item in the array and multiply it by 5;

// let multiplyArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];

// function multiplyNumbers() {
//     multiplyArray.forEach((num, index) => {
//         multiplyArray[index] = num * 5;
//     });
// }



////////////////////////////////////// Homework 4 ////////////////////////////////


// Problem 1
// Below we have an array of objects.
// Loop through the array of objects and add up all the prices if the
// item is in stock.
// Must use forEach on shoppingCart
// Have the totalPrice function return the total price
// DO NOT modify the original shoppingCart array. The tests will not pass If
// you do so.

//example: shoppingCart.forEach(item => { /* code */ });

//example: shoppingCart.forEach(function(item) { /* code */ });


let shoppingCart = [
    {
        itemName: "TV",
        inStock: true,
        price: 799.99,
    },
    {
        itemName: "Controller",
        inStock: true,
        price: 49.99,
    },
    {
        itemName: "Phone case",
        inStock: false,
        price: 19.99,
    },
    {
        itemName: "Pencils",
        inStock: true,
        price: 5.99,
    }
];

function totalPrice() {
    let total = 0;                    //Initialize total price to zero
    shoppingCart.forEach(item => {   // Using forEach to iterate over shoppingCart
        if (item.inStock) {         // Check if the item is in stock
            total += item.price;   // Add the price to the total if the item is in stock
        }
    });
    return total;
}

console.log(totalPrice());


// Problem 2
// We have an array of items in a store.
// The manager needs to know which items are in stock.
// Use forEach to loop through our array of objects.
// Create a new array with ONLY the name of each item
// that is in stock. Hint: You are going to need to 
// create a new array and PUSH each item name to the 
// end of the array.
// Do not modify the original shopItems array.
// The tests will not pass if you do so.

const shopItems = [
    {
        itemName: "TV",
        inStock: true,
        price: 799.99,
    },
    {
        itemName: "Controller",
        inStock: true,
        price: 49.99,
    },
    {
        itemName: "Phone case",
        inStock: false,
        price: 19.99,
    },
    {
        itemName: "Pencils",
        inStock: true,
        price: 5.99,
    },
    {
        itemName: "Game Console",
        inStock: true,
        price: 250.00,
    },
    {
        itemName: "Laptop",
        inStock: false,
        price: 1000.00,
    },
    {
        itemName: "Movie",
        inStock: true,
        price: 20.00,
    },
];

function inStockItems() {
    const inStockItemsArray = [];
    shopItems.forEach(item => {
        if (item.inStock) {
            inStockItemsArray.push(item.itemName);
        }
    });

    return inStockItemsArray;
}




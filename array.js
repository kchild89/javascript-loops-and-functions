
// Arrays 

// basic arrays

let value = [1, 2, 3];
console.log(value);
console.log(value.length);


let values = Array.of(1, 2, 3, 4, 5);
console.log(values[3]);

const values1 = ['a', 'b', 'c'];
values1[0] = 'aaa';
console.log(values1[0]);
console.log(values1[1]);
console.log(values1[2]);
console.log(values1[3]); // undefined outside of range
console.log(Array.isArray(values1));


///////////////////////////////// Manipulating Arrays //////////////////////////////////////

// push() === adds items to the end of an array
const values2 = ['a', 'b', 'c'];
values2.push('d', 'e', 'f'); // can take more the one element
console.log(values2);

// pop() === takes the last element off an array. in this example it stores it in the last variable
const values3 = ['a', 'b', 'c'];
const last = values3.pop();
console.log(values3, last);

// shift() === move the entire array. shifts the entire array to the left one element and take the first element off the array.
const values4 = ['a', 'b', 'c'];
const first = values4.shift();
console.log(first);
console.log(values4, first);

// unshift() === opposite of shift
const values5 = ['b', 'c'];
values5.unshift('hello', 'world');
console.log(values5);

// slice() === method is used primarily to extract a section of an array and return a new array containing the extracted elements
//create a new array like a copy. but the original still remains
const values6 = ['a', 'b', 'c'];
const newValues6 = values6.slice(1, 2); // 1st argument is where we start are slice. 2nd argument is the end of slice.
console.log(newValues6); //  b

const values9 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const newValues9 = values9.slice(3, 6); // count the spaces 
console.log(newValues9); // d e f 

// splice() for deleting ===  method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const values7 = ['a', 'b', 'c']; // it splice a and c together and b gets deleted
values7.splice(1, 1);
console.log(values7); // a c

// splice() for deleting
const values10 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
values10.splice(1, 5); // 1st argument(1) starts the splice after a. 2nd argument(5) will delete b c d e f
console.log(values10); // a g

// splice() for inserting 
const values8 = ['a', 'b', 'c'];
values8.splice(1, 0, 'foo'); // 1st argument(1) tells where to start. 2nd argument(0) number of items we want to delete.
console.log(values8); // a foo b c

// splice() for inserting
const values11 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
values11.splice(1, 4, 'hello'); // 1st argument(1) starts the splice after a. 2nd argument(4) will delete b c d e. 3rd inserts hello in between a f.
console.log(values11); // a hello f g


///////////////////// Array Searching and Looping /////////////////////

// indexOf()
const values12 = ['a', 'b', 'c'];
console.log(values12.indexOf('c')); // 2
console.log(values12.indexOf('d')); // -1

// indexOf() filter
const values13 = ['a', 'e', 'b', 'c', 'd'];
const set = values13.filter(function (item) {
    return item > 'b';
});
console.log(set); // e c d there greater in the alphabet then b

// find()
const values14 = ['a', 'bbb', 'ccccc'];
const found = values14.find(function (item) {
    return item.length > 1;
})
console.log(found); // bbb stops once its true

// forEach()
const values15 = ['a', 'b', 'c'];
values15.forEach(function (item) {
    console.log(item);
})
// a
// b
// c


//////////////////////////// Arrays in the DOM ///////////////////////////






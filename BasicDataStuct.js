// this section shows how to manipulate and also how to access and copy the database
// we can use the multidimensional array and also use the length property

// access the content using the bracket notation

// add using unshift() and push() 
// remove using shift() and pop()

// Remove items using splice()

// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2);
// // remove 2 elements beginning with the 3rd element
// // array now equals ['today', 'was', 'great']




// // ADD ITEMS USING THE SPLICE METHOD
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// // the second entry of 12 is removed, and we add 13 and 14 at the same index
// console.log(numbers);
// // returns [ 10, 11, 12, 13, 14, 15 ]





// // COPY ARRAY ELEMENTS USING THE SLICE METHOD
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// // todaysWeather equals ['snow', 'sleet'];
// // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']






    // // copy an array with spread operator
    // let thisArray = [true, true, undefined, false, null];
    // let thatArray = [...thisArray];
    // // thatArray equals [true, true, undefined, false, null]
    // // thisArray remains unchanged, and is identical to thatArray







// // combine arrays with spread operator
// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']




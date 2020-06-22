// difference between var and let key word

// one of the biggest problem with declaring variables with var keyword is that you can overwrite declarations without any error
// when the code becomes larger you might run into a problem because this behaviour doesn't throw an error 
// searching and fixing bugs becomes more difficult

// so by using the 'let' a variable with same name can only be declared once
// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
// "use strict";
// x = 3.17;









// scope of var and let keyword
// when you declare let keyword inside a block, statement or expression its scope is limited to that block, statement or expression
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 3


// 'use strict';
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 2
// console.log(i);
// // returns "i is not defined"


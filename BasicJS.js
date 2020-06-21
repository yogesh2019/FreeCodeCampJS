// letters and underscores but not contain spaces and start with a number

// assigment operator

// initialize a variable to an initial value in the same line as it is declared.

// // // Only change code below this line
// var a = 5;
// var b = 10 ;
// var c = "I am a";
// // Only change code above this line

// a = a + 1;
// b = b + 5;
// c = c + " String!";

/* JS USES + SYMBOL AS AN ADDITION OPERATOR */

/** js uses - symbol as subtraction operator */

/** js uses * symbol as multiplication operator */

/** js uses / symbol as the division operator */

/** add one to a variable using the ++ operator */

/** we can store decimal values in variables too */

/** decimals are multiplied in the same way  as the whole numbers */

/** var 4.4 / 2 = 2.2 */

/** JS uses % as the modulo operator */

/** += this one do mathematical and assignment in one step */

/* "THIS ONE"  is calles the string literal */


/* escaping with a backslashL*/


/** escaping sequences in STRINGS
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
 */

/** concatenating string with a plus operator or we can use the plus equal operator */

/** CONSTRUCTING STRING WITH VARIABLES */

/** Appending the strings using the += equals operator */


/** .length will give us the length of the string */

/** can use the bracket notation to find first character of the given string */

/** we cannot change the contents of a string we can only assign it to a new string   */

/** to find nth to last we can use the stringName[stringName.length - 3]  will give us the 3rd from the last*/

/**  THE JS ARRAYS CAN CONTAIN BOTH STRING AND NUMBERS */

/** ONE ARRAY CAN BE NESTED IN ANOTHER */

/** WE CAN USE THE INDICES TO ACCESS THE DATA */


/** WE CAN MODIFY THE ARRAY WITH INDICES */

/** WE CAN ALSO DO PUSH POP SHIFT AND UNSHIFT */

// var arr = [1,3,4,5];

// arr.pop();

// arr.push([3,7])
// console.log(arr);

// we can also push multiple elements in an array but they will be pushed as one


// Reusable functions with javS


// function sayHello(){
//     console.log("Hello World!!");
// }

// sayHello();

//each time this is called all the code between these curly braces will be executed


// WE CAN CALL A FUNCTION WITH THE ARGUMENT

// function testFun(para,para1)
// {
//     console.log(para,para1);
// }
// testFun(1,3);



// SCOPE REFERS TO THE VISIBILITY OF THE VARIABLES 

// VARIABLES DEFINED OUTSIDE OF THE GLOBAL BLOCK REFERS TO THE GLOBAL SCOPE

// var myGlobal = 5;
// function fun1(){
//     var oopsGlobal = 5;
// }

// console.log(typeof(myGlobal)+" "+typeof(oopsGlobal));

// if you access a variable that is not defined it will give a reference error


// console.log(hello);

// LOCAL vs GLOBAL SCOPE



// var someVar = "Hat";
// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }
// console.log(myFun());

// UNderstanding the value of undefined function returned from a function

// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// console.log(addSum(3)); // sum will be modified but returned value is undefined


/** we can assign the value returned from a function to a variable */

// STAND IN LINE //

// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item);

//   return arr.shift();
//   // Only change code above this line
  

// }

// // Setup
// var testArr = [1,2,3,4,5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// BOOLEANS ARE NEVER WRITTEN IN QUOTES

// console.log(1 == '1');
// console.log(1==='1');

//comparison with greater than operator
//console.log(1 > '1');

// comparison with greator than or equal to operator

// console.log(7>='3');


// COMPARISON WITH LOGICAL AND & OR OPERATOR
// function Test(num){
//   if (num > 5 && num < 10) {
//     return "Yes";
//   }
//   return "No";
  
// }
// console.log(Test(7));

// ELSE STATEMENT

// function test(num){
//   if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }
  
// }

// console.log(test(3));


// // ELSE IF STATEMENT

// function test(num){
//   if (num > 15) {
//     return "Bigger than 15";
//   } else if (num < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 15";
//   }
  
// }

// console.log(test(5));

// order of the else if statement is important


// // chaining if else statement 

// tiny
//  small 
//  medium 
//  large 
//  huge


// // SWITCH

// function alpha(lowercaseLetter)
// {
//   switch(lowercaseLetter)
//    {
//     case "a":
//       console.log("A");
//       break;
//     case "b":
//       console.log("B");
//       break;
//     default:
//       console.log('other than a or b')
//    }
  
// }
// alpha('c');




// // multiple identical options in switch statement
// // if the break is omitted from a switch statement's case the following statement's are executed until a break is encoutered
// function conv(number)
// {
//   switch(number) {
//     case 1:
//     case 2:
//     case 3:
//       console.log("1,2 or 3");
//     case 4:
//       console.log("4 alone");
//   }
  
// }



// REPLACING IF CHAINS WITH SWITCH





// RETURNING BOOLEAN STATEMENTS FROM FUNCTIONS




// // RETURN EARLY PATTERN FOR FUNCTIONS

// function myFun() {
//   console.log("Hello");
//   return "World";  // YOU CAN USE THE IF CONDITION WHEREVER NEEDED
//   console.log("byebye")
// }
// myFun();

// // counting cards

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (card>=2 && card<=6)
//    count++;
//   else if(card>=7 && card<=9)
//    count = count;
//   else if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A")
//    count--;

// if(count <=0)
//   return count+" Hold";
// else
//   return count+ " Bet";
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');



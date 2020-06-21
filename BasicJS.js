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




// OBJECTS ARE SIMILAR TO ARRAYS EXCEPT 

// YOU ACCESS THE DATA THROUGH WHAT ARE CALLED AS PROPERTIES

// OBJECTS ARE USEFUL FOR STORING DATA IN A STRUCTURED WAY AND CAN REPRESENT REAL WORLD OBJECTS LIKE CAT

var cat = {
  "name" : "whiskers",
  "legs" : 4,
  "tails" : 1,
  "enemies" : ["water","dogs"]
};

// if you have non-string properties js will automatically typecast them as strings







// // ACCESSING THROUGH THE DOT NOTATION

// // Setup
// var testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// // Only change code below this line

// var hatValue = testObj.hat;      
// var shirtValue = testObj.shirt;    






// // ACCESSING THROUGH THE BRACKET NOTATION

// var myObj = {
//    'Space Name' : "kirk",
//    'More Space' : "spock",
//    'NoSpace' : "Uss Enterprise"
// };

// console.log(myObj["Space Name"]);












// // ACCESSING THE OBJECT PROPERTIES WITH VARIABLES

// var dogs  = {
// Fido : "Mutt",
// Hunter : "Doberman",
// Snopie : "Beagle"
// };

// var myDog = "Hunter";

// var myBreed = dogs[myDog];

// console.log(myBreed);










// // another way to use this concept is when the property's name is collected dynamically during the program execution

// var someObj = {
//   propName : "John"
// };


// function propPrefix(str)
// {
//   var s = "prop";
//   return s + str;
// }

// console.log(someObj[propPrefix("Name")]);










// // updating the object properties

// var OurDog = {
//   "name" : "Camper",
//   "legs" : 4,
//   "tails": 1,
//   "friends":["everything"]
// }

// OurDog.name = "Happy Camper";

// OurDog["friends"][0] = "merry Camper";
// console.log(OurDog.name);
// console.log(OurDog["friends"]);









// // ADDING NEW PROPERTIES TO THE JS OBJECTS
// // you can add new properties to the existing js objects the same way you modify them

// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// ourDog.bark = "bow-wow";
// // or 
// ourDog["color"] = "brown";
// console.log(ourDog.bark + " " + ourDog["color"]);















// // DELETING THE ELEMENTS OF OBJECTS

// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;

// console.log(ourDog);







// // look up object 

// // Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
//   var result = {
//    "alpha": "Adams",
//    "bravo":"Boston",
//     "charlie":"Chicago",
//     "delta":"Denver",
//     "echo":"Easy",
//     "foxtrot":"Frank"
//   }
//   result = result[val];
//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");






// Testing Objects for Properties

// var myObj = {
//   top : "hat",
//   bottom : "pants"
// }

// console.log(myObj.hasOwnProperty("top"));












// // Manipulating complex object 

// // the  A JAVASCRIPT OBJECT IS A ONE WAY TO OBJECT TO STORE FLEXIBLE DATA

// // they allow for arbitrary combinations of strings, numbers, booleans, arrays, function and objects

// var ourMusic = [
//   {
//     "artist": "Daft Punk",
//     "title" : "Home Work",
//     "release_year":1997,
//     "formats": ["CD","Cassets","LP"],
//     "gold": true
//   }

// ];









// // Accessing the nested Objects

// var ourStorage = {
//    "Desk": {
//      "drawer" : "Stapler"
//    },
//    "cabinet":{
//      "top Drawer":{
//        "folder 1": "a file",
//        "folder2": "a secret file"
//      },
//      "bottom Drawer":"soda"
//    }
// }

// console.log(ourStorage.cabinet["top Drawer"].folder2);









// // accessing the nested arrays

// var ourPets = [
//   {
//     "animaltype": "Cat",
//     "names" : [
//       "meowzer",
//       "fluffy",
//       "kit_cat"
//     ]
//   },
//   {
//     "animaltype": "Dog",
//     "names" : [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].names[0]);














// // Record Collection

// // Setup
// var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [ ]
//   },
//   5439: {
//     album: "ABBA Gold"
//   }
// };

// // Only change code below this line
// function updateRecords(id, prop, value) {
  
//   if(value!="")
//   {
//     if(collection[id].hasOwnProperty(prop))
//      {
//        if(prop == "tracks")
//        collection[id][prop].push(value);
//        else 
//        collection[id][prop]  = value;
//      }
//     else
//     {
//       if(prop == "tracks")
//       {
//          collection[id][prop] = [value];
//       }
//       else
//         collection[id][prop]  = value;
//     }
//   }
//   else
//    delete collection[id][prop];

//   return collection;
// }

// updateRecords(5439, "artist", "ABBA");







// // iterate with javaScript while loops

// var ourArray = [];

// var i = 0;

// while(i<5){
//   ourArray.push(i);
//   i++;
// }
// console.log(ourArray);







// // iterate with javaScript for loops

// // this one runs for a specific number of times

// var ourArray = [];

// for(var i = 0 ; i < 5 ; i++)
// {
//   ourArray.push(i);
// }
// console.log(ourArray);










// // iterating with odd numbers for a 'for' loop
// var ourArray = [];

// for(var i = 0 ; i < 10; i+=2)
// {
//   ourArray.push(i);
// }
// console.log(ourArray);










// // count backwards with a for loop

// var ourArray = [];
// for(var i = 10 ; i > 0  ; i-=2)
// {
//   ourArray.push(i);
// }

// console.log(ourArray);








// // nesting for loops

// var arr = [
//   [1,2],[3,4],[5,6]
// ];

// for( var i = 0  ; i < arr.length ; i++)
// {
//   for(var j = 0 ; j < arr[i].length ; j ++)
//   {
//     console.log(arr[i][j])
//   }
// }





// // using the do-while loop

// var ourArray = [];
// var i = 0;
// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// console.log(ourArray);









// // replace loops with recursion


// function multiply(arr,n){
//   if(n<=0)
//   return 1;
//   else 
//   {
//     return multiply(arr,n-1)*arr[n-1];
//   }
// }










// // generating random fractions with javaScript

// console.log(Math.random()); // this will return a number between 0 and 1 even zero but never 1








// // generating random whole number with jS

// console.log(Math.floor(Math.random() * 20));











// // generating random whole numbers between a range

// function rangeNum(min,max)
// {
//   return Math.floor(Math.random()*(max-min+1))+min;
// }

// console.log(rangeNum(1,2));






// THE PARSEINT FUNCTION PARSES A STRING AND RETURNS AN INTEGER










// // USING THE PARSEINT AND THE RADIX


// var a = parseInt("11", 2);

// //The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.




// // USE OF THE CONDITIONAL OPERATOR

// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater";
// }

// console.log(findGreater(2,3));






// //USE OF MULTIPLE TERNARY OPERATOR

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" 
//     : (a > b) ? "a is greater" 
//     : "b is greater";
// }
// console.log(findGreaterOrEqual(3,3));






// // use recursion to create a countDown
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(20));
// difference between var and let key word

// one of the biggest problem with declaring variables with var keyword is that you can overwrite declarations without any error
// when the code becomes larger you might run into a problem because this behaviour doesn't throw an error 
// searching and fixing bugs becomes more difficult

// so by using the 'let' a variable with same name can only be declared once
// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
"use strict";
x = 3.17;
"use strict";
(function (){
//*********************OCTOBER 14**************
//Write a function that returns the number 7.

function returnSeven(){
    return 7;
}
console.log(returnSeven())
//Write an if statement with a condition set to the boolean false.

if(false){
    console.log("It's false.");
}

//Does the condition run?
//It does not run because the condition is not true.

})();

//*******************OCTOBER 14*******************

//The following code will set the variable hadBreakfast to a random boolean value.
// Copy and paste the following code into warmups JS file:

var hadBreakfast = Boolean(Math.round(Math.random()));

//Write a ternary expression to set a variable of hadBreakfastMessage to a string
// expressing whether or not you have had breakfast. You will use the variable hadBreakfast as your condition.

var hadBreakfastMessage = (hadBreakfast) ? "I had breakfast today, it was delicious!" : "I didn't have breakfast and I am starving";

console.log(hadBreakfastMessage);

//******************OCTOBER 15********************

//Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"

/* Tests:
typeCheck('')
typeCheck(isNaN());
typeCheck(!false * 3);
typeCheck(4 + ‘4’);
 */

function typeCheck(typeInput){
    if(typeof typeInput === "string") {
        return 'haha, it\'s a string of a string';
    } else{
        return typeof typeInput;
    }

}

console.log("input is an empty string: ", typeCheck(''))
console.log("input isNan():", typeCheck(isNaN()))
console.log("input is !false * 3", typeCheck(!false * 3))
console.log("input is 4+4", typeCheck( 4 + '4'))
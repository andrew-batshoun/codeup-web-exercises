"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
(function() {

    function analyzeColor(colorName) {
        if (colorName === "red") {
            return "Red is the same color as apples";
        } else if (colorName === "green") {
            return "Green is an awesome color";
        } else {
            return "I don't know much about that color";
        }
    }

    console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(randomColor + " " + analyzeColor(randomColor));
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    switch (randomColor) {
        case "red":
            console.log("Red is the color of apples.");
            break;
        case "orange":
            console.log("Orange has the same color as the fruit.");
            break;
        case "yellow":
            console.log("Yellow is a really bright color.");
            break;
        case "green":
            console.log("Green reminds me of money.");
            break;
        case "blue":
            console.log("Cool! Blue is my favorite color.");
            break;
        case "indigo":
            console.log("Isn't indigo the same as blue?");
            break;
        default:
            console.log("Oh! Violet is a fantastic color.");
    }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var askColor = prompt("Input a color.");
    alert(analyzeColor(askColor));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, totalBill) {
        if (luckyNumber === 0) {
            return totalBill;
        } else if (luckyNumber === 1) {
            return totalBill - (totalBill * .10);
        } else if (luckyNumber === 2) {
            return totalBill - (totalBill * .25);
        } else if (luckyNumber === 3) {
            return totalBill - (totalBill * .35);
        } else if (luckyNumber === 4) {
            return totalBill - (totalBill * .50);
        } else if (luckyNumber === 5) {
            return totalBill - (totalBill * 1);
        }
    }


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var totalBill = parseFloat(prompt("What is your total?"));

    alert("Your lucky number is " + luckyNumber);
    alert("Your total bill was " + totalBill + " With the discount it is " + calculateTotal(luckyNumber, totalBill));


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
// var userNumber = (confirm("Would you like to pick a number?"));
// if(userNumber === true){
//     var userInput = (parseFloat(prompt("What number would you like to choose?")));
//     alert((userInput % 2 == 0) ? "This number is even." : "This number is odd");
//     alert("Your number plus 100 is " + (userInput + 100));
//     alert((Math.sign(userInput) > 0) ? "This is a positive number" : "This is a negative number");
//     }else {
//     alert("I guess you don't want to know about numbers.");
// }

})();
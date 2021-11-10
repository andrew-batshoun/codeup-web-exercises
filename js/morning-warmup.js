"use strict";
(function () {
//*********************OCTOBER 14**************
//Write a function that returns the number 7.

    function returnSeven() {
        return 7;
    }

    console.log(returnSeven())
//Write an if statement with a condition set to the boolean false.

    if (false) {
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

function typeCheck(typeInput) {
    if (typeof typeInput === "string") {
        return 'haha, it\'s a string of a string';
    } else {
        return typeof typeInput;
    }

}

console.log("input is an empty string: ", typeCheck(''))
console.log("input isNan():", typeCheck(isNaN()))
console.log("input is !false * 3", typeCheck(!false * 3))
console.log("input is 4+4", typeCheck(4 + '4'))

//*********************OCTOBER 18****************
// When writing code to test our tests in TDD it’s important to put yourself in the mindset of a (junior/senior) web developer. This will help you in ensuring that our tests are fully comprehensive.
//     When writing code with tests provided to me, it’s important for me to write code:
//     A. With minimal effectiveness so as to green all the tests.
//     B. With full functionality so as to ensure my function works as intended
// C. Both

// You want to have the mindset of a junior developer. It is important to write code with minimal effectiveness so as to green all the tests and with full functionality so  as to ensure the function works as intended.

//****************OCTOBER 19************


//Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + "Buzz");

    }
}

// Used an else statement that returned console.log(i)


//**************** OCTOBER 20****************

//Create a function named secondToLast that accepts an array as an argument and will return the second to last element of the array.
var randomArrary = ["one", "two", "three", "four"]

function secondToLast(arr) {
    return arr[arr.length - 2];
}

console.log(secondToLast(randomArrary))

//****************OCTOBER 21****************

// Write a function named ‘moveToEnd’ that takes in an array, and returns the array with the original first index moved to the last index of the array.
//
//     Example:
// moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd([‘roll’, ‘rock’, ‘and’]  // returns [‘rock’, ‘and’, ‘roll’];

function moveToEnd(arr) {
    var removeFront = arr.shift()
    arr.push(removeFront)
    return arr;
}

console.log(moveToEnd([1, 2, 3, 4]));

//*******************OCTOBER 25********************


//Visit https://www.pokemon.com/us/pokedex/ and select one of your favorite pokemon (it can
// be whatever you choose) and create an object variable to represent the chosen pokemon.
// The more information you have, the better! We will be using this for lecture today.

var mewTwo = {
    weight: 269,
    height: {
        feet: 6,
        inches: 7,
    },
    gender: "unknown",
    type: "psychic",
    weakness: ["ghost", "dark", "bug"],
    category: "genetic",
    abilities: "pressure",
};

//*****************OCTOBER 26****************
//Create a function that accepts an array as an argument,
// and that returns an array of objects that have a nationality property of “Canadian”.
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];

function returnCanada(arr) {
    var newArray = []
    arr.forEach(function (wrestler) {
        if (wrestler.nationality === "Canadian") {
            newArray.push(wrestler);
        }
    });
    return newArray;
}

console.log(returnCanada(wrestlers))

//**************OCTOBER 27****************
var circle = {
    radius: 36
}
console.log(Math.round(Math.PI * (circle.radius ** 2)));

// Find the area of the circle, and round it to the nearest whole number using the Math object.

//*************************NOVEMBER 2***********************
// Create a function that takes in an array of objects, and returns the object with the highest quantity property.
//
var groceries = [
    {
        name: "carrots",
        quantity: 5
    }, {
        name: "yams",
        quantity: 50
    }, {
        name: "oranges",
        quantity: 9
    }, {
        name: "onions",
        quantity: 2
    }, {
        name: "cucumbers",
        quantity: 6
    }, {
        name: "potatoes",
        quantity: 8
    }
];
//
// Ex. getHighestQuantityObject(groceries)//returns {name: “yams”, quantity: 50};
function getHighestQuantityObject(arr) {
    var obj = {
        name: "something",
        quantity: 0
    }
    arr.forEach(function(el) {
        if (el.quantity > obj.quantity) {
            obj = el;
        }
    });
    return obj;
}

console.log(getHighestQuantityObject(groceries));

//Write a function named ‘sortByName’ that takes in an array of objects, and returns an array of objects in alphabetical order based on the name property.
var products = [
    {
        name: 'Playstation 5',
        price: 599.99
    }, {
        name: 'Logitech Wireless Mouse',
        price: 23.99
    }, {
        name: 'Macbook Pro',
        price: 1099.99
    }, {
        name: 'GoPro HERO10',
        price: 399.99
    }, {
        name: '12" & 6" Metal Ruler Set',
        price: 5.99
    }]

function sortByName(arr) {
    return arr.sort(function (a, b) {
        var aLower = a.name.toLowerCase();
        var bLower = b.name.toLowerCase();

        if (aLower < bLower) {
            return -1;
        } else if (aLower > bLower) {
            return 1;
        } else {
            return 0;
        }

    });


}

console.log(sortByName(products));

//*************************NOVEMBER 9 *****************
// Write a function in JavaScript that takes in an array of objects and returns the object with the lowest height property. Consider the following array to test your code.

var bBallPlayers = [
    {
        name: "Hakeem Olajuwon",
        height: 213
    }, {
        name: "Muggsy Bogues",
        height: 160
    }, {
        name: "Chris Paul",
        height: 183
    }, {
        name: "Bol Bol",
        height: 218
    }, {
        name: "Moochie Norris",
        height: 185
    }, {
        name: "Manu Ginobili",
        height: 198
    }
];

function lowestHeight(arr){
    var box = {height: Number.MAX_VALUE}
    arr.forEach(function (a){
        if (a.height < box.height){
            box = a;
        }
    });
    return box;
}

console.log(lowestHeight(bBallPlayers));

//**************NOVEMBER 10*****************
// Name your character object, and complete the attack method. The attack method
// should use the myCharacter weapon object to deal damage to the enemy objects
// hit points. When the attack method has been executed, the hit points of the
// enemy object should reflect the damage done in the console.

    var myCharacter = {
    name: 'Bob',
    hitPoints: 100,
    class: 'Warrior',
    abilities: {
        attack: function(obj) {
            console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + " damage!")
            obj.hitPoints -= myCharacter.weapon.damage;
            console.log(obj.name + " has " + obj.hitPoints + "  hit points left!")
        },
    },
    magicPoints: 0,
    weapon: {
        name: 'Silver Sabre',
        damage: 16,
        type: 'sword'
    }
}

var enemy = {
    name: 'Savage Orc',
    hitPoints: 100,
    class: 'Warrior',
    magicPoints: 0,
}

myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);


// My solution, Jays solution is above
// console.log(myCharacter.name + " sees " + enemy.name + " and attacks");
//
//
//
// console.log(" attack successful,"+ enemy.name + " takes " + myCharacter.weapon.damage + " damage. Enemy now has " + (enemy.hitPoints - myCharacter.weapon.damage));
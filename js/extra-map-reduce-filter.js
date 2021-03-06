// Map, Filter, and Reduce
// Use the code below to complete the following problems

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];
// Use map, filter, and reduce to:
//
// Create an array of the first letters of each fruit
let firstLetter = fruits.map( firstCharacter => {
 return firstCharacter[0];
})
console.log(firstLetter);
// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)
let userObject = customers.map( object => {
    let newObj ={
        names: object.name,
        age: object.age
    }
    return newObj;
})
console.log(userObject)

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects
let civilServants = customers.filter( users => users.occupation === "Teacher" || users.occupation === "Police Officer")
console.log(civilServants);
// Determine the average age of all the customers
let totalAge = customers.reduce((previous, current) => {
    return previous + current.age
}, 0)
let averageAge = totalAge / customers.length
console.log(averageAge);
// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...

// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }
function makeSuperPet(array){
    let petNames = array.reduce( (previousName, currentName) => {
        return previousName.concat(currentName.name)
    },[]);
    let petAge = array.reduce( (previousAge, currentAge) => {
        return previousAge + currentAge.age
    }, 0);
    let petBreed = array.reduce( (previousBreed, currentBreed) => {
        for(let breed of currentBreed.breed ){
            if(!previousBreed.includes(breed)){
                previousBreed.push(breed)
            }
            return previousBreed
        }
    }, []);
        let newObj = {
            name: `${petNames}`,
            age: petAge,
            breed: `${petBreed}`
        };
        return newObj;
}
console.log(makeSuperPet(pets))

// Create a function that takes in an array of pets and returns an array of the length of first names for pugs only. Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
let pugsFirstName = (array) => {
    let pugs = array.filter(arr => arr.breed === 'Pug');
    let pugsName = pugs.map (arr => arr.name.length);

    return pugsName


};
console.log(pugsFirstName(pets))
// Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array of female family member names
let getFemaleFamilyMembers = (arr) => {
    let females = arr.filter( array => {
        if(array.gender === "female"){
            return array.name
        }

    })
    let namesOnly = females.map(name => name.name)
    return namesOnly;
}

console.log(getFemaleFamilyMembers(family));
// Create a function makeLongPetString() that when given the variable of pets, returns a string of all property values with dashes separating each property value
function makeLongPetString(array) {
    let allTogether = array.map(arr => arr.name + "-" + arr.age + "-" + arr.breed)

    return allTogether.join('-')
}

console.log(makeLongPetString(pets))
// Create a function that when given an array of first names, returns an array of the same names with a last name of Smith
function addSmith(array){
    return array.map(firstName => firstName + " Smith");
}
console.log(addSmith(['Sally', 'Fred', 'Steve']))

// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve Smith']

// Create a function that when given an array of numbers, return the sum of the even numbers

function returnEven(array) {
    return array.filter(even =>  !(even % 2)).reduce((a, b) => a + b);

}

console.log(returnEven([1, 2, 3, 4, 5, 6, 7, 8]))

// Create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10



// Create a function that when given an array of names, return a string of all the first letters of each name
//
// Create a function that when given an array of values, returns an array of only the truthy values
//
// Create a function that when given an object, returns the property values as an array of elements
//
// Create a function that when given an object, returns the property values as an array of elements
//
// Create a function that when given three arguments: a min num, a max num, an array of nums will return the array of nums that are only between the min and max values, inclusive
//
// Create a function that when given an array of strings, returns an array of objects with properties for the given string value and the length of the string and the string without vowels (not including y)
//
// Given the following:

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];
// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user
// Use .reduce to get a unique list of the languages the codeup instructors know
// From https://glitch.com/edit/#!/map-filter-reduce-practice

    /**
     * HINT: solve the map/filter/reduce problem with a foreach first
     */

// Reduce Problem #1
// given an array of names, use .reduce to produce a single string that contains everyone's name
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// Reduce Problem #2: Sum up all of the numbers in the following array using .reduce
let numbers = [1, 2, 3, 99, 1, -3, 1000, 0, 33, -67];

// Reduce Problem #3:
// Given the above array of numbers, write the .reduce necessary to determine the highest number of the array.

// Reduce problem #4:
// Given the above array of numbers, write the .reduce necessary to determine the lowest number of the array.

// Reduce problem #5:
// Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use .reduce to determine the average of all the numbers

// Reduce problem #6, given the array of numbers from above, determine the average of all numbers



// Mapping problem #3
// Using .map to make a Projection
// Applying a function to a value and creating a new value is called a projection.
// each video object should  make a new object containing only the id and the title.
// Your output should be a variable called idAndTitleColleciton and look like
/* [
*  {"id": 70111470, "title": "Die Hard"},
*  {"id": 654356453, "title": "Bad Boys},
*  {"id": 65432445, "title": "The Chamber},
*  etc...
* ];
*/

var newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];



// Challenge:
// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array;
// Recommend using .filter or .reduce inside of your allIndexesOf function to find the index.
// HINT: If you know your output will be an array, use an empty array as your intitial value
// Given:
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];


// Challenge:
// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to

// Given:
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
// const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
// const customers = [
//     {
//         name: "Fred",
//         age: 58,
//         occupation: "Police Officer",
//         noOfPurchases: 4
//     },
//     {
//         name: "Samantha",
//         age: 54,
//         occupation: "Teacher",
//         noOfPurchases: 18
//     },
//     {
//         name: "Charles",
//         age: 38,
//         occupation: "Librarian",
//         noOfPurchases: 9
//     }
// ];

// PROBLEM 1 - create an array of the first letters of each fruit
// HINT: use .map()
// PROBLEM 2 - create array of user objects based on the customers array of
// objects (each user object should just have name and age properties)
// HINT: use .map()
// PROBLEM 3 - create an array of civil servant customers (teachers and police
// officers) containing the same properties as the objects on the
// customers objects
// HINT: use .filter()
// PROBLEM 4 - determine the average age of customers
// HINT: use .reduce()

/* ---------------------------------------------------------------------- */

// Given the following array...
// const names = ["John", "Max", "Ronald"];

// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names
// - Create a single object with properties

/* ---------------------------------------------------------------------- */

// Given the following array...
// const family = [
//     {
//         name: "Karen",
//         gender: "female",
//         age: 29,
//     },
//     {
//         name: "Summer",
//         gender: "female",
//         age: 10,
//     },
//     {
//         name: "Bob",
//         gender: "male",
//         age: 32,
//     },
// ];

// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages
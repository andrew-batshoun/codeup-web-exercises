(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {}
    person.firstName = "Andrawes";
    person.lastName = "Batshoun";
console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function (){
    return "Hello from " + person.firstName + " " + person.lastName;
}
console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function (shopper){
        var priceTotal = shopper.amount;
        var newPrice = shopper.amount - (shopper.amount * .12);
        if (shopper.amount > 200) {
            console.log("Congratulations, " + shopper.name + "! You get a 12 percent discount. Your previous total was: " + priceTotal.toFixed(2) + " but now you pay: " + newPrice.toFixed(2));
         } else{
            console.log("Hey " + shopper.name + ", Your total is: " + priceTotal.toFixed(2));
        }
    })
//Jay's walk through
    /*
    function displayShopperAmount(arr) {
    arr.foreach(function(shopper) {
        if(shopper.amount > 200) {
            console.log(shopper.name + ": spent " + shopper.amount + ". Which applies for a discount. Discounted amount: " + (shopper.amount * .12) + ". The discounted price is: " + shopper.amount - (shopper.amount * .12));
            } else {
            console.log(shopper.name + ": spent " + shopper.amount + ". Which does not apply for discount")
        }
    })
}

displayShopperAmount(shoppers)
     */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {
        title: "The ScrewTape Letters",
        author:{
            firstName: "C.S",
            lastName: "Lewis",
            }
        },
        {
        title: "The Fold",
        author:{
            firstName:"Peter",
            lastName:"Clines",
            }
        },
        {
        title:"The Hitchhikers Guide",
        author:{
            firstName:"Douglas",
            lastName:"Adams",
            }
        },
        {
        title: "The 48 Laws of Power",
        author:{
            firstName:"Robert",
            lastName:"Greene",
            }
        },
        {
        title:"The Broker",
        author:{
            firstName:"John",
            lastName:"Grisham",
            }
}]
console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
;

// books.forEach(function(book){
//     console.log("Book # " + (books.indexOf(book) + 1));
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);
//     console.log("---")
// })

/*Jay's answer
for(var j = 0, j < books.length; j++) {
    console.log("Book # " + (j + 1) + '\nTitle: ' + books[j].title + "\n"Author: " + book.author.firstName + ' ' + book.author.lastName);
}
 */
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// function createBook(title, authorFirst, authorLast) {
//         var books = new Object({
//             title: title,
//             author: {
//                 firstName: authorFirst,
//                 lastName: authorLast,
//             }
//             })
//
//         return books;
//     }
//
// console.log(createBook("james and the peach", "james", "peach"))


/*Jay's answer:
 var library = [];
 function createBook(title, author){
    //expected input: 'firstName lastName'
    var namesArray = author.split(" ");
        var book = {
            title: title,
            author: {
                firstName: namesArray[0],
                lastName: namesArray[1]

            }
        }
        return library.push(book);
    }

createBook(title, author);

 */



    function showBookInfo(bookObject){
bookObject.forEach(function(book){
    console.log("Book # " + (bookObject.indexOf(book)+ 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);
    console.log("---")
    })

}

showBookInfo(books);

/* Jay's Answer
function showBookInfo(array){
for(var j = 0, j < array.length; j++) {
    console.log("Book # " + (j + 1) + '\nTitle: ' + array[j].title + "\n"Author: " + array.author.firstName + ' ' + array.author.lastName);
}

}
showBookInfo(books)
 */

})();

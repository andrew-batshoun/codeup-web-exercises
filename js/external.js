//Add a console.log message in inline_js.html that says "Hello from inline JavaScript".
console.log("Hello from external JavaScript");

//Use the alert function to show a message that says 'Welcome to my Website!'
alert('Welcome to my Website');

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
var favoriteColor = prompt("What is your favorite color?");
    alert("Great " + favoriteColor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleM = prompt("How many days are you renting Little Mermaid?");
//3 ;
var brotherB = prompt("How many days are you renting Brother Bear?");
//5;
var hercules = prompt("How many days are you renting Hercules?");
//1;
var rentalRate = 3;


var totalPrice = (littleM * rentalRate) + (brotherB * rentalRate) + (hercules*rentalRate);

alert("Your total price is $" +totalPrice+ " !");

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


var googleHourRate= prompt ("How much do you charge to Google?");
//400
var amazonHourRate = prompt ("How much do you charge to Amazon?");
//380
var facebookHourRate = prompt ("How much do you charge to Facebook?");
//350

googleTime = prompt ("How many hours did you work for Google?");
//6
amazonTime = prompt ("How many hours did you work for Amazon?");
// 4
facebookTime = prompt ("How many hours did you work for facebook?");
//10

var paycheck = (googleHourRate * googleTime) + (amazonHourRate * amazonTime) + (facebookHourRate * facebookTime);

alert("Your total paycheck is $" + paycheck+ " !");

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classFilled = confirm("Is the class full?") ;
var classSchedule = confirm("Does it affect your schedule?");
var canEnroll = (!classFilled && !classSchedule );

if(canEnroll){
    alert("Great! Welcome to class!");
} else{
    alert("Too Bad! Try again next time.");
}

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var offerExpired = confirm("Is the product expired?")
if (offerExpired == true) {
        alert("Sorry, you can't recieve the product offer.");
    } else {
    var premiumMember = confirm("Are you premium member?");
    var buyMoreThan2 = confirm("Are you buying more than two Items?");
    var isMember = (premiumMember == true)
    var productOffer = (isMember || buyMoreThan2);

    if(productOffer){
        alert("Here is your offer!");
    } else{
        alert("Sorry you need more items.");
    }
}

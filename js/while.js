"use strict";
(function (){

var i = 1
while (i < 65536){
    i = i * 2;
        console.log(i);
}



// Do while exercise

var allCones = Math.floor(Math.random() * 50)+ 50;
var someCones = Math.floor(Math.random() * 5)+ 1;
do {
    if (someCones === 5){
        alert("Yay! I sold all my cones!");
    }else if (someCones < 3){
        alert("Sorry, I can't sell that many I only have " + someCones + " cones.");
    }else{
        alert("I have sold " + someCones +" cones.");
    }
} while (someCones > allCones){

}
})();

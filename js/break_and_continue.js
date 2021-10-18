"use strict";
(function (){


while (true){
    var promptNum = parseFloat(prompt("Choose a number between 1 and 50."))
    // alert("That is not valid");
    if(!isNaN(promptNum)){
        break;
    }
    alert("That answer is invalid");
}

for(var i = 1; i <= 50; i++){

    if (i % 2===0){
        continue;
    }
    if (promptNum === i){
        console.log("Yikes! Skipping number: " + i );
    }else {
        console.log("Here is an odd number: " + i);
    }
    }

})();

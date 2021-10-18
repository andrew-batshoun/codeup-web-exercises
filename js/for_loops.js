"use strict";
(function () {
    function showMultiplicationTable(a) {
        for (var i = 1; i <= 10; i++) {
            console.log(a + "*" + i + "=" + (a * i));
        }
    }

    showMultiplicationTable(7);


    for (var i = 1; i <= 10; i++) {
        var ranNum = Math.floor(Math.random() * (200 - 20) + 20);
        if (ranNum % 2 === 0) {
            console.log(ranNum + " is even");
        } else {
            console.log(ranNum + " is odd");
        }
    }


    var pyramid = "";
    for (var i = 1; i <= 9; i++) {

        for (var j = 1; j <= i; j++) {
            pyramid += i;
        }
        pyramid += "\n";
    }
    console.log(pyramid)

    for (var i = 100; i >= 5; i -= 5) {
        console.log(i)
    }

})();
// When a user hits the "g" key, the background of the page should turn purple.
//     Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
//     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
var wholePage = document.querySelector('html');
var counter = document.querySelector('#counter');
wholePage.addEventListener("keypress", function (e) {
    if (e.key === 'g') {
        wholePage.style['background-color'] = 'purple';
    }
});

var count = 0
wholePage.addEventListener('keyup', function (e) {
    if (e.code === "Enter") {
        count++
    }
    counter.innerHTML = "You have pressed enter: " + count + ' times';
});

var pattern = ['1', '2', '3'];
current = 0
wholePage.addEventListener("keypress", function (e) {

    if(!pattern.includes(e.key) || e.key !== pattern[current]){
        current = 0;
        return;
    }
    current++;
    if (pattern.length === current){
        alert("You get a 50% discount!");
    }



});
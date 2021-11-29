"use strict";

$(document).ready(function () {
    //variables of elements in html
    var playerScore = 0;
    var computerScore = 0;
    var rockBtn = $('#rock');
    var paperBtn = $('#paper');
    var scissorsBtn = $('#scissors');
    var playersChoices = [rockBtn, paperBtn, scissorsBtn];

    //loops through playersChoice array and starts event
    playersChoices.forEach(function (option) {
        option.click(function () {
            var playerPick = this.textContent;
            //the computers choices in array
            var computerChoices = ['ROCK', 'PAPER', 'SCISSORS'];
            //the choices randomized
            var computerPick = computerChoices[Math.floor(Math.random() * 3)];
            //calls function that compares two picks
            compare(playerPick, computerPick);
            //calls function to update scores
            updateScore();

        });
    });

    //compares the computer random pick vs the users choices
    function compare(playerPick, computerPick) {
        if (playerPick === computerPick) {
            alert('Draw!');

        } else if ((playerPick === "ROCK") && (computerPick === "SCISSORS")) {
            alert("Player won!");
             playerScore++;
        } else if ((playerPick === "PAPER") && (computerPick === "ROCK")) {
            alert("Player won!");
            playerScore++;
        } else if ((playerPick === "SCISSORS") && (computerPick === "PAPER")) {
            alert("Player won!");
            playerScore++;
        } else if ((playerPick === "PAPER") && (computerPick === "SCISSORS")) {
            alert("Computer won!");
             computerScore++;
        } else if ((playerPick === "SCISSORS") && (computerPick === "ROCK")) {
            alert("Computer won!");
            computerScore++;
        } else if ((playerPick === "ROCK") && (computerPick === "PAPER")) {
            alert("Computer won!");
            computerScore++;
        }
    }
        // updates score on html
    function updateScore() {
        $("#p-count").html(playerScore);
        $("#c-count").html(computerScore);
    }

});

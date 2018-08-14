"use strict";
let userHealthLives = 40;
let grantHealthLives = 10;
let wins = 0;
startGame();

function startGame() {
    let play = prompt("Do you want to play?");
    if (play === "yes") {
        let userName = prompt("What is your name?")
        startCombat(userName);
    }
}


function getDamage() {
    return Math.floor((Math.random() * 5) + 1);
}

function startCombat(userName) {
    while (userHealthLives > 0 && wins < 3) {
        let attack = prompt("Do you want to attack");
        if (attack === "yes") {
            userHealthLives -= getDamage();
            console.log(userName + " has " + userHealthLives + " health left.");
            grantHealthLives -= getDamage();
            console.log("Grant the Mighty Chicken has " + grantHealthLives + " health left.");
            if (wins < 3 && grantHealthLives <= 0) {
                wins++;
                grantHealthLives = 10;
            }
            if (wins === 3) {
                console.log(`${userName} wins!`);
            }
        }
        if (attack !== "yes") {
            console.log("goodbye");
            break;
        }
    }
}
function rollDice() {
    
    
    var diceOne = [1, 2, 3, 4, 5, 6];
    var diceTwo = [1, 2, 3, 4, 5, 6];
    var diceOneRoll = diceOne[Math.floor(Math.random()*diceOne.length)];
    var diceTwoRoll = diceTwo[Math.floor(Math.random()*diceTwo.length)];

    if (diceOneRoll > diceTwoRoll) {
        document.querySelector(".player1WinLose").innerHTML = "Winner";
        document.querySelector(".player2WinLose").innerHTML = " Loser";
    } else if (diceTwoRoll > diceOneRoll) {
        document.querySelector(".player2WinLose").innerHTML = "Winner";
        document.querySelector(".player1WinLose").innerHTML = " Loser";
    } else if (diceOneRoll === diceTwoRoll) {
        document.querySelector(".player1WinLose").innerHTML = "It's a draw!";
        document.querySelector(".player2WinLose").innerHTML = "It's a draw!";
    }

        if (diceOneRoll === 1) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice1.png");
        } else if (diceOneRoll === 2) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice2.png");
        } else if (diceOneRoll === 3) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice3.png");
        } else if (diceOneRoll === 4) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice4.png");
        } else if (diceOneRoll === 5) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice5.png");
        } else if (diceOneRoll === 6) {
            document.querySelectorAll("img")[0].setAttribute("src", "./assets/images/dice6.png");
        }
        if (diceTwoRoll === 1) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice1.png");
        } else if (diceTwoRoll === 2) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice2.png");
        } else if (diceTwoRoll === 3) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice3.png");
        } else if (diceTwoRoll === 4) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice4.png");
        } else if (diceTwoRoll === 5) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice5.png");
        } else if (diceTwoRoll === 6) {
            document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice6.png");
        }

    


    /* I also want my dice gif to display at the addEventListener("click") 
    beginning centered in the container <div>, then the img src is replaced, 
    and <h2> winner/loser text becomes unhidden for each player depending on 
    outcome*/ 
    
    


}

document.querySelector("button").addEventListener("click", rollDice);
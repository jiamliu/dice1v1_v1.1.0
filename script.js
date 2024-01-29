let player1Wins = 0;
let player2Wins = 0;
//declare two constants which represents two players and initialize its value to zero

document.getElementById('rollButton').onclick = function() {
    let diceResults1 = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
    let diceResults2 = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
    updateDiceImages(diceResults1, 1);
    updateDiceImages(diceResults2, 2);
    checkRoundWinner(diceResults1, diceResults2);
    updateTotalPoints(diceResults1, diceResults2);
};
//roll dice button: which include several functionalities such as two player rolling together, image update after rolling, check total point
//result to declare winner, and count total win time.

function getRandomDiceRoll() {
    return 1 + Math.floor(Math.random() * 6);
}

//functionality 1: generate number of point for each roll

function updateDiceImages(diceResults, playerNumber) {
    for (let i = 0; i < diceResults.length; i++) {
        document.getElementById(`dice${playerNumber}-${i+1}`).src = `dice${diceResults[i]}.png`;
    }
}

//functionality 2: update images after roll

function checkRoundWinner(diceResults1, diceResults2) {
    let sum1 = diceResults1.reduce((a, b) => a + b, 0);
    let sum2 = diceResults2.reduce((a, b) => a + b, 0);

    if (sum1 > sum2) {
        player1Wins++;
        updateWinCount('player1-score', player1Wins);
        showMessage("Player 1 wins the round!");
    } else if (sum2 > sum1) {
        player2Wins++;
        updateWinCount('player2-score', player2Wins);
        showMessage("Player 2 wins the round!");
    } else {
        showMessage("It's a tie!");
    }
}

//functionality 3: check winner for each round. 
//logic: sum 1 represents left player, sum 2 represents right player, if sum 1 has higher value than sum 2, then player 1 wins, so do player 2.
//if the game results a tie, then it will display tie game.

function updateWinCount(playerId, wins) {
    document.getElementById(playerId).querySelector('span').textContent = wins;
}
//functionality 4: this help check 

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function updateTotalPoints(diceResults1, diceResults2) {
    let sum1 = diceResults1.reduce((a, b) => a + b, 0);
    let sum2 = diceResults2.reduce((a, b) => a + b, 0);
    document.getElementById('totalPoints').textContent = `Total Points: ${sum1} - ${sum2}`;
}

document.getElementById('resetButton').onclick = function() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinCount('player1-score', player1Wins);
    updateWinCount('player2-score', player2Wins);
    showMessage("");
    document.getElementById('totalPoints').textContent = "Total Points: 0 - 0";
};

// Dark Mode Toggle
document.getElementById('darkModeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

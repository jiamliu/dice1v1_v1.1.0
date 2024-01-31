let player1Wins = 0;
let player2Wins = 0;


document.getElementById('rollButton').onclick = function() {
    let diceResults1 = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
    let diceResults2 = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
    updateDiceImages(diceResults1, 1);
    updateDiceImages(diceResults2, 2);
    checkRoundWinner(diceResults1, diceResults2);
    updateTotalPoints(diceResults1, diceResults2);
};

function getRandomDiceRoll() {
    return 1 + Math.floor(Math.random() * 6);
}

function updateDiceImages(diceResults, playerNumber) {
    const diceRollAnimation = 'dice-roll.gif'; 
    for (let i = 0; i < diceResults.length; i++) {
        document.getElementById(`dice${playerNumber}-${i+1}`).src = diceRollAnimation;
    }

    setTimeout(() => {
        for (let i = 0; i < diceResults.length; i++) {
            document.getElementById(`dice${playerNumber}-${i+1}`).src = `dice${diceResults[i]}.png`;
        }
    }, 2500); 
}

function checkRoundWinner(diceResults1, diceResults2) {
    let sum1 = diceResults1.reduce((a, b) => a + b, 0);
    let sum2 = diceResults2.reduce((a, b) => a + b, 0);

    setTimeout(() => {
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
    }, 2500); 
}


function updateWinCount(playerId, wins) {
    document.getElementById(playerId).querySelector('span').textContent = wins;
}

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


document.getElementById('darkModeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

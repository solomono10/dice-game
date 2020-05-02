(function setDefaultDiceScores() {
    $(".dice-one").addClass(`fa-dice-six`);
    $(".dice-two").addClass(`fa-dice-six`);
})();

$("button").click(displayDiceScores);

function getPlayerScores () {

    const scoreArray = [];

    for (let i = 0; i < 2; i++) {
        scoreArray.push(Math.floor(Math.random() * 6));
    }

    return scoreArray;
}

function displayDiceScores () {

    let winnerMessage = "";
    const [diceOne, diceTwo] = getPlayerScores();
    const numArray = ["one", "two", "three", "four", "five", "six"];

    $(".dice-one").addClass(`fa-dice-${numArray[diceOne]}`);
    $(".dice-two").addClass(`fa-dice-${numArray[diceTwo]}`);

    if (diceTwo === diceOne) {
        winnerMessage = "Draw";
    } else {
        winnerMessage = (diceTwo > diceOne) ? "Player 2 wins" : "Player 1 wins";
    }

    return $(".winner-text").innerHTML = winnerMessage;
}

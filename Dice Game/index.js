document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const refreshButton = document.getElementById('refreshButton');

    // Function to get a random number between 1 and 6
    function getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to update the dice images for both players
    function rollDice() {
        // Generate random numbers for both dice
        const player1Number = getRandomNumber();
        const player2Number = getRandomNumber();

        // Update dice images based on the random numbers
        document.querySelector('.img1').src = 'imagesdice${player1Number}.png';
        document.querySelector('.img2').src = 'imagesdice${player2Number}.png';

        // Determine the winner and display the result
        if (player1Number > player2Number) {
            document.querySelector('h1').textContent = ' PLAYER 1 Wins! 🏆';
        } else if (player1Number < player2Number) {
            document.querySelector('h1').textContent = 'PLAYER 2 Wins! 🏆';
        } else {
            document.querySelector('h1').textContent = 'Draw!';
        }
    }

    // Function to refresh the game (roll dice and update the result)
    function refreshGame() {
        rollDice();
    }

    // Attach event listeners to the buttons
    rollButton.addEventListener('click', rollDice);
    refreshButton.addEventListener('click', refreshGame);

    // Initialize the game by rolling the dice once
    rollDice();
});

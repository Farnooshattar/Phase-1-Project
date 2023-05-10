# Phase-1-Project
# Phase-1-Project
This is a JavaScript code that runs a simple picture guessing game. The game displays a picture on the screen, and the user has to guess what it is by typing their guess into an input field. Once the user submits their guess, the code checks if it matches the name of the displayed picture. If the guess is correct, the user wins the game; otherwise, they can try again.

Setup
The game uses the Fetch API to retrieve picture data from a local server running on http://localhost:3000/toys/. Therefore, before running the game, you should ensure that you have set up the server correctly and that it is running.

How to Play
To play the game, open the index.html file in a browser. Once the page loads, click the "Start Game" button to begin. The game will display a picture, and you will have a limited amount of time to guess its name. To make a guess, type your answer into the input field and click the "Submit" button.

If your guess is correct, the game will display a "correct!" message, and you can click the "Play Again!" button to start a new game. If your guess is incorrect, the game will display a "wrong! try again..." message, and you can try guessing again until time runs out.

Code Description
The code uses event listeners to handle user input and interactions. The startGame() function is called when the "Start Game" button is clicked, and it sets up the game by fetching a picture and setting a countdown timer.

The fetchAndDisplay() function retrieves a random picture from the server and displays it on the screen. The reveal() function is called when the user hovers over the picture, and it increases the number of reveals and plays a sound effect.

The final event listener is called when the user submits their guess, and it checks if the guess matches the name of the displayed picture. If the guess is correct, it displays a message and a "Play Again!" button. If the guess is incorrect, it displays a message and allows the user to guess again.

The code uses various DOM manipulation techniques to update the game's interface dynamically, such as changing the picture's background image and disabling input fields when the game ends.
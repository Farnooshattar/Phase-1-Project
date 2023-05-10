document.addEventListener("DOMContentLoaded", () => {
   //gets the elements from the html file
   const pic = document.getElementById("picture");
   const startBtn = document.querySelector("#start_btn");
   const revealBoard = document.querySelector(".reveals");
   const countdownElement = document.getElementById("countdown");
   //get the audio file for the mouseover events
   const g3 = new Audio("g3-04.wav");
   //intialize the variables
   let reveals = 0;
   let timeUp = false;
   let timeLeft = 0;
   let countdownInterval;

    //adds an eventlistener to the satrt button
    startBtn.addEventListener("click", startGame);
    //calls the startGame function and fetches the data from JSON Database
    function startGame() {
        fetchAndDisplay();
        //adds eventlisteners to the tiles on the grid
        //reveals the portion of the image that is under user's mouse or hover
        const squares = document.querySelectorAll(".squares");
        squares.forEach((square) => square.addEventListener("mouseover", reveal));
        //intitializes reveals to zero each time the game starts
        reveals = 0;
        //updates the reveals by mouseovers
        revealBoard.textContent = `reveals: ${reveals}`;
        //gets the elements that user interacts with on the screen
        const myText = document.getElementById("inputText");
        myText.disabled = false;
        const final = document.getElementById("final");
        final.disabled = false;
        const gameLength = document.getElementById("game_length").value;
        timeLeft = parseInt(gameLength.slice(0, 2));
        //sets a timer using setInterval function for a countdown of time
        timeUp = false;
        countdownElement.innerHTML = timeLeft + " seconds left";
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.innerHTML = timeLeft + " seconds left";
        if (timeLeft === 0) {
         clearInterval(countdownInterval);
         countdownElement.innerHTML = "Time's up!";
         myText.disabled = true;
         final.disabled = true;
         timeUp = true;
       }
     }, 1000);
    }
    function fetchAndDisplay() {
        const id = Math.floor(Math.random() * 8)+1;
        fetch(`http://localhost:3000/toys/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            document.getElementById("picture").style.backgroundImage =
              "url('" + data.image + "')";
            pic.name = data.name;
          });
      }
}) 
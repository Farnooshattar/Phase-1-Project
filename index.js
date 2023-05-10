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
        //setInterval returns a value that based on that we can clear 
        //the timer afetr 1000 milli seconds back to zero
        countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.innerHTML = timeLeft + " seconds left";
        if (timeLeft === 0) {
         clearInterval(countdownInterval);
         countdownElement.innerHTML = "Time's up!";
         //when the time is up all the buttons should be disabled untill the user plays again
         myText.disabled = true;
         final.disabled = true;
         timeUp = true;
       }
     }, 1000);
    }
    function fetchAndDisplay() {
        //every time that fetch is called a random picture is picked from the database
       const id = Math.floor(Math.random() * 8)+1;
       fetch(`http://localhost:3000/toys/${id}`)
         .then((resp) => resp.json())
         .then((data) => {
           document.getElementById("picture").style.backgroundImage =
             "url('" + data.image + "')";
           pic.name = data.name;
         });
     }
     //Defines the reveal function and plays a sound by mouseover
     function reveal(e) {
       if (!e.isTrusted) return;
       reveals++;
       revealBoard.textContent = `reveals: ${reveals}`;
       g3.currentTime = 0;
       g3.play();
     }
     //Gets the button element to check users input
   const final = document.getElementById("final");
   //adds an eventlistener to the button to check the users input
   final.addEventListener("click", () => {
    const input = document.getElementById("inputText").value;
    //document.getElementById("displayText").innerHTML = "You typed: " + input;
    const output = document.querySelector("#output");
    //checks the user input witha a simple if/else
    if (input === pic.name) {
      output.textContent = "correct!";
    } else {
      output.textContent = "wrong! try again...";
    }
    const myDiv = document.getElementById("myDiv");
    myDiv.innerHTML = '<button id="myButton">Play Again!</button>';
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click",() => {
     const input = document.getElementById("inputText")
     input.value = " "; // clear the contents of the myDiv element
     startGame(); // fetch and display a new picture
     
   });
  });
    })
   
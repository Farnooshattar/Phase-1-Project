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
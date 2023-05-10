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
    function startGame() {
        fetchAndDisplay();
    }
}) 
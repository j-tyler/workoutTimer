/* Grabbing pieces of the DOM */
var box1El = document.getElementById("box1");
var box2El = document.getElementById("box2");
var box3El = document.getElementById("box3");
var barPiece = document.querySelectorAll(".abar div");
//var startEl = document.getElementById("startButton");
var clickerButton = document.getElementById("clicker");
var clickerButton2 = document.getElementById("clicker2");
var goEl = document.getElementById("goText");
var restEl = document.getElementById("restText");
var timerSpan = document.getElementById("timer");
var restTimer;

/* Start script with Elements off */
clickerButton2.style.display = "none";
goEl.style.display = "none";
restEl.style.display = "none";

/* Program Start */
var iteration = 0;
var timerCount = 5;

var startClick = function() {
    barPiece[iteration].style.backgroundColor = "rgba(230, 80, 25, 0.6)";
    /* Turn on/off Elements */
    clickerButton.style.display = "none";
    clickerButton2.style.display = "initial";
    goEl.style.display = "initial";
    barShadow();
};

/* End rest/Begin new set */
var doneClick = function() {
    if (iteration < 8){
        barPiece[iteration].style.backgroundColor = "rgb(43, 89, 136)";
        setTimeout(endRest, 61000); //total rest
        restTimer = setInterval(timerDown, 1000); //rest counter

    } else { /* We have finished */
        barPiece[iteration].style.backgroundColor = "rgb(43, 89, 136)";
        clickerButton2.style.display = "none";
        goEl.style.display = "none";
        /* CONGRATS MESSAGE */
        restEl.innerHTML = "You're Finished!<br>I hope you enjoyed<br>your workout :\)";
        box3El.style.boxShadow = "none";
    }

    /* Turn on/off Elements */
    clickerButton2.style.display = "none";
    goEl.style.display = "none";
    restEl.style.display = "initial";
};

var endRest = function() {
    /* Double Checking that the Timer Resets */
    //clearInterval(restTimer);
    //timerCount = 60;
    /* Turn on/off Elements */
    clickerButton2.style.display = "initial";
    goEl.style.display = "initial";
    restEl.style.display = "none";
    iteration ++;
    barPiece[iteration].style.backgroundColor = "rgba(230, 80, 25, 0.6)";
    barShadow();
};
/* Creating the drop shadow highlight*/
var barShadow = function() {
    if (iteration<3){
        box1El.style.boxShadow = "0px 0px 10px rgba(230, 80, 25, 1) inset, 0px 0px 10px rgba(0, 0, 0, 1) inset"
    } else if (iteration < 6) {
        box2El.style.boxShadow = "0px 0px 10px rgba(230, 80, 25, 1) inset, 0px 0px 10px rgba(0, 0, 0, 1) inset"
        box1El.style.boxShadow = "none";
    } else if (iteration < 8) {
        box3El.style.boxShadow = "0px 0px 10px rgba(230, 80, 25, 1) inset, 0px 0px 10px rgba(0, 0, 0, 1) inset"
        box2El.style.boxShadow = "none";
    }
}

/* Rest Timer */
var timerCount = 60;

var timerDown = function() {
    if (timerCount == 0){
        timerCount = 60;
        timerSpan.textContent = timerCount;
        clearInterval(restTimer);
    } else {
        timerSpan.textContent = timerCount - 1;
        timerCount --;
    }
}

clickerButton.addEventListener("click", startClick);
clickerButton2.addEventListener("click", doneClick);

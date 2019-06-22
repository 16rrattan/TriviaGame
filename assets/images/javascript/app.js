var questions = [
    ["What does the car have?", "cop suspencion", "a cigarret lighter", "leather seats", "racing tires"],
    ["Who was NOT a musician in the best movie of all time? ", "Tony Bennett", "Ray Charles", "James Brown", "Aretha Franklin"],
    ["How many cars were destoyed in the flim in total?", "104", "73", "52", "134"],

];
var clockRunning = false;
var intervalId;
var countdown = 5;
var correct = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;
var i = 0;
emptyQ = null;
emptyB1 = null;
emptyB2 = null;
emptyB3 = null;
emptyB4 = null;

function Resetclock() {
    countdown = 10;
    $('#displayclock').text(countdown)
}

function Startclock() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function count() {
    if (countdown > 0) {
        countdown--;
        $('#displayclock').text(countdown)
    } else {
        checkans();
        clearInterval(intervalId);
        clockRunning = false;
    }
}

function displayQ() {

    randomB();
    console.log(i);
    emptyQ = document.createElement("div")
    emptyQ.textContent = questions[i][0];
    document.getElementById("question").appendChild(emptyQ)

    emptyB1 = document.createElement("button")
    emptyB1.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    emptyB1.setAttribute('onclick', 'checkans(this.value)');
    emptyB1.textContent = questions[i][B1];
    emptyB1.value = questions[i][B1];
    document.getElementById("buttons").appendChild(emptyB1);

    emptyB2 = document.createElement("button")
    emptyB2.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    emptyB2.setAttribute('onclick', 'checkans(this.value)');
    emptyB2.textContent = questions[i][B2];
    emptyB2.value = questions[i][B2];
    document.getElementById("buttons").appendChild(emptyB2);

    emptyB3 = document.createElement("button")
    emptyB3.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    emptyB3.setAttribute('onclick', 'checkans(this.value)');
    emptyB3.textContent = questions[i][B3];
    emptyB3.value = questions[i][B3];
    document.getElementById("buttons").appendChild(emptyB3);

    emptyB4 = document.createElement("button")
    emptyB4.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    emptyB4.setAttribute('onclick', 'checkans(this.value)');
    emptyB4.textContent = questions[i][B4];
    emptyB4.value = questions[i][B4];
    document.getElementById("buttons").appendChild(emptyB4);

}

function randomB() {
    B1 = Math.floor(Math.random() * 4) + 1;
    do {
        B2 = Math.floor(Math.random() * 4) + 1;
    }
    while (B2 == B1);
    do {
        B3 = Math.floor(Math.random() * 4) + 1;
    }
    while (B3 == B1 || B3 == B2);

    do {
        B4 = Math.floor(Math.random() * 4) + 1;
    }
    while (B4 == B1 || B4 == B2 || B4 == B3);

};

function checkans(value) {
    console.log(value);
    console.log(questions[i][1]);
    if (value === questions[i][1]) {
        document.getElementById("buttons").removeChild(emptyB1);
        document.getElementById("buttons").removeChild(emptyB2);
        document.getElementById("buttons").removeChild(emptyB3);
        document.getElementById("buttons").removeChild(emptyB4);
        console.log("winner");
        i++
        displayQ();
    } else {
        console.log("loser");
        document.getElementById("question").removeChild(emptyQ);
        document.getElementById("buttons").removeChild(emptyB1);
        document.getElementById("buttons").removeChild(emptyB2);
        document.getElementById("buttons").removeChild(emptyB3);
        document.getElementById("buttons").removeChild(emptyB4);
        $('#image-holder').html("<img src='assets/images/loser.gif' width='200px'/>");
    }
}


displayQ();
Startclock();
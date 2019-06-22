var questions = [
    ["What does the car have?", "Cop suspension", "A cigarret lighter", "Leather seats", "Racing tires"],
    ["Who was NOT a musician in the best movie of all time? ", "Tony Bennett", "Ray Charles", "James Brown", "Aretha Franklin"],
    ["How many cars were destoyed in the flim in total?", "104", "73", "52", "134"],
    ["Which son of a famous actor/actress participated as a stunt driver?", "John Wayne", "Dan Aykroyd", "Carrie Fisher", "Julie Andrews"],
    ["What small cammio role did Pee-wee Herman play in the movie?", "a waiter", "a cop", "a natzi", "a churchmember"],
    ["'We have half a pack of cigarettes, a full tank of gass, its dark out, and we're wearing sunglasses'  What do we do?", "Hit it!", "Peddle to the metal!", "Get out of here!", "Take off our sunglasses because it is dangerous to drive at night with them on!"],
    ["Permission to film in downtown Chicago only came after John Belushi and Dan Aykroyd offered to donate money to charity. How much did they offer", "$50,000", "$20,000", "$15,000", "$30,000"],
    ["Carrie Fisher used many weapons in the film. Which one did she NOT use?", "Remington 700 Shotgun", "M16", "M9-7 Flamethrower", "Prop Quad Rocket Launcher"],
    ["What is the only moment you see one of the Blues Brothers without sunglasses?", "When one is pleading with his ex", "When thier apartment collapses", "When they are put in jail", "When they are singing Rawhide in a bar"],
    ["Roughly how many extras were used in the final chase scene with the cops?", "500", "200", "300", "400"],
];
var clockRunning = false;
var intervalId;
var countdown = 10;
var correct = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;
var Q1 = 0;
var Q2 = 0;
var Q3 = 0;
var Q4 = 0;
var Q5 = 0;
var Q6 = 0;
var Q7 = 0;
var Q8 = 0;
var Q9 = 0;
var Q10 = 0;
var x = 0;
var y = 1;
var i = 0;
emptyQ = null;
emptyB1 = null;
emptyB2 = null;
emptyB3 = null;
emptyB4 = null;

function Resetclock() {
    countdown = 30;
    $('#displayclock').text(countdown)
    Startclock();
}

function Startclock() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function Stopclock() {
    console.log("stopped the clock");
    clearInterval(intervalId);
    clockRunning = false;
}

function count() {
    if (countdown > 0) {
        countdown--;
        $('#displayclock').text(countdown)
    } else {
        Stopclock();
        checkans();
    }
}

function clearcontent2Items() {
    document.getElementById("question").removeChild(emptyQ);
    $('#image-holder').empty();
}

function clearcontenttotal() {
    document.getElementById("question").removeChild(emptyQ);
    document.getElementById("buttons").removeChild(emptyB1);
    document.getElementById("buttons").removeChild(emptyB2);
    document.getElementById("buttons").removeChild(emptyB3);
    document.getElementById("buttons").removeChild(emptyB4);
    $('#image-holder').empty();
}

function starttrivia() {

    emptyQ = document.createElement("div")
    emptyQ.textContent = "Press the button to start the Trivia Game!";
    document.getElementById("question").appendChild(emptyQ)
    emptyB1 = document.createElement("button");
    emptyB1.setAttribute('class', 'btn btn-primary btn-lg btn-block');
    emptyB1.setAttribute('onclick', 'startbutton()');
    emptyB1.textContent = "CLICK ME!!";
    document.getElementById("buttons").appendChild(emptyB1);
    console.log("start trivia works");
}

function startbutton() {
    document.getElementById("question").removeChild(emptyQ);
    document.getElementById("buttons").removeChild(emptyB1);
    randomQ();
    displayQ();
}

function displayQ() {

    Resetclock();
    if (i !== questions.length) {
        randomB();
        arrayQassign();
        console.log("num of questions done " + i);
        console.log("the question to be displayed " + x);
        emptyQ = document.createElement("div")
        emptyQ.textContent = questions[x][0];
        document.getElementById("question").appendChild(emptyQ)

        console.log(questions[x][0]);

        emptyB1 = document.createElement("button")
        emptyB1.setAttribute('class', 'btn btn-primary btn-lg btn-block');
        emptyB1.setAttribute('onclick', 'checkans(this.value)');
        emptyB1.textContent = questions[x][B1];
        emptyB1.value = questions[x][B1];
        document.getElementById("buttons").appendChild(emptyB1);

        emptyB2 = document.createElement("button")
        emptyB2.setAttribute('class', 'btn btn-primary btn-lg btn-block');
        emptyB2.setAttribute('onclick', 'checkans(this.value)');
        emptyB2.textContent = questions[x][B2];
        emptyB2.value = questions[x][B2];
        document.getElementById("buttons").appendChild(emptyB2);

        emptyB3 = document.createElement("button")
        emptyB3.setAttribute('class', 'btn btn-primary btn-lg btn-block');
        emptyB3.setAttribute('onclick', 'checkans(this.value)');
        emptyB3.textContent = questions[x][B3];
        emptyB3.value = questions[x][B3];
        document.getElementById("buttons").appendChild(emptyB3);

        emptyB4 = document.createElement("button")
        emptyB4.setAttribute('class', 'btn btn-primary btn-lg btn-block');
        emptyB4.setAttribute('onclick', 'checkans(this.value)');
        emptyB4.textContent = questions[x][B4];
        emptyB4.value = questions[x][B4];
        document.getElementById("buttons").appendChild(emptyB4);
    } else {

        $('#displayclock').empty();
        console.log("you won");
        Stopclock();
        emptyQ = document.createElement("div")
        emptyQ.textContent = "You got " + correct + " answers correct";
        document.getElementById("question").appendChild(emptyQ)
    }
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

function randomQ() {
    Q1 = Math.floor(Math.random() * 10);
    do {
        Q2 = Math.floor(Math.random() * 4);
    }
    while (Q2 == Q1);
    do {
        Q3 = Math.floor(Math.random() * 10);
    }
    while (Q3 == Q1 || Q3 == Q2);

    do {
        Q4 = Math.floor(Math.random() * 10);
    }
    while (Q4 == Q1 || Q4 == Q2 || Q4 == Q3);

    do {
        Q5 = Math.floor(Math.random() * 10);
    }
    while (Q5 == Q1 || Q5 == Q2 || Q5 == Q3 || Q5 == Q4);

    do {
        Q6 = Math.floor(Math.random() * 10);
    }
    while (Q6 == Q1 || Q6 == Q2 || Q6 == Q3 || Q6 == Q4 || Q6 == Q5);

    do {
        Q7 = Math.floor(Math.random() * 10);
    }
    while (Q7 == Q1 || Q7 == Q2 || Q7 == Q3 || Q7 == Q4 || Q7 == Q5 || Q7 == Q6);

    do {
        Q8 = Math.floor(Math.random() * 10);
    }
    while (Q8 == Q1 || Q8 == Q2 || Q8 == Q3 || Q8 == Q4 || Q8 == Q5 || Q8 == Q6 || Q8 == Q7);

    do {
        Q9 = Math.floor(Math.random() * 10);
    }
    while (Q9 == Q1 || Q9 == Q2 || Q9 == Q3 || Q9 == Q4 || Q9 == Q5 || Q9 == Q6 || Q9 == Q7 || Q9 == Q8);
    do {
        Q10 = Math.floor(Math.random() * 10);
    }
    while (Q10 == Q1 || Q10 == Q2 || Q10 == Q3 || Q10 == Q4 || Q10 == Q5 || Q10 == Q6 || Q10 == Q7 || Q10 == Q8 || Q10 == Q9);
}

function arrayQassign() {
    if (i == 0) {
        x = Q1;
    }
    if (i == 1) {
        x = Q2;
    }
    if (i == 2) {
        x = Q3;
    }
    if (i == 3) {
        x = Q4;
    }
    if (i == 4) {
        x = Q5;
    }
    if (i == 5) {
        x = Q6;
    }
    if (i == 6) {
        x = Q7;
    }
    if (i == 7) {
        x = Q8;
    }
    if (i == 8) {
        x = Q9;
    }
    if (i == 9) {
        x = Q10;
    }

}

function display2nd() {
    clearcontent2Items();
    displayQ();
}

function randomgif() {
    y = Math.floor(Math.random() * 8) + 1;
}

function checkans(value) {
    console.log(value);
    console.log(questions[x][1]);
    if (value === questions[x][1]) {
        console.log("winner");
        correct++;
        i++;
        console.log("i added in checkans right " + i);
        Stopclock();
        $('#displayclock').empty();
        clearcontenttotal();
        emptyQ = document.createElement("div");
        emptyQ.textContent = "You got it right!";
        document.getElementById("question").appendChild(emptyQ);
        randomgif();
        $('#image-holder').html("<img src='assets/images/winner" + y + ".gif' height='auto' width='auto'/>");
        setTimeout(display2nd, 4000);
    } else {
        console.log("wrong");
        i++;
        console.log("i added in checkans wrong");
        Stopclock();
        $('#displayclock').empty();
        clearcontenttotal();
        emptyQ = document.createElement("div");
        emptyQ.innerHTML += "You got it wrong! <br />";
        emptyQ.innerHTML += "The correct answer was: " + questions[x][1];
        document.getElementById("question").appendChild(emptyQ);
        randomgif();
        $('#image-holder').html("<img src='assets/images/loser" + y + ".gif' height='auto' width='auto'/>");
        setTimeout(display2nd, 4000);
    }
}


starttrivia();
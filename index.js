//create a function for a dice change everytime the button is clicked
let randomNumber1;
let randomNumber2;

function diceRoll1() {
randomNumber1 = Math.floor((Math.random() * 6) +1);
let img1 = document.getElementById('dice1');


if(randomNumber1 == 1){
    img1.setAttribute('src','images/dice1.png');
} else if(randomNumber1 == 2){
    img1.setAttribute('src','images/dice2.png');
} else if(randomNumber1 == 3){
    img1.setAttribute('src','images/dice3.png');
} else if (randomNumber1 == 4){
    img1.setAttribute('src','images/dice4.png');
} else if (randomNumber1 == 5){
    img1.setAttribute('src','images/dice5.png');
} else {
    img1.setAttribute('src','images/dice6.png');
} ; 

};

function diceRoll2() {
    randomNumber2 = Math.floor((Math.random() * 6) +1);
    let img2 = document.getElementById('dice2');
   

    if(randomNumber2 == 1){
        img2.setAttribute('src','images/dice1.png');
    } else if(randomNumber2 == 2){
        img2.setAttribute('src','images/dice2.png');
    } else if(randomNumber2 == 3){
        img2.setAttribute('src','images/dice3.png');
    } else if (randomNumber2 == 4){
        img2.setAttribute('src','images/dice4.png');
    } else if (randomNumber2 == 5){
        img2.setAttribute('src','images/dice5.png');
    } else {
        img2.setAttribute('src','images/dice6.png');
    } ; 
}

//create a function for a banner to display the winner of the dice roll

function winnerNote() {
    let message = document.getElementById('winnerBanner');

    if(randomNumber1 > randomNumber2) {
        message.innerHTML = "Player One is the winner!!"
    } else if(randomNumber1 < randomNumber2) {
        message.innerHTML = "Player Two is the winner!!"
    } else {
        message.innerHTML = "It's a tie. Try Again!"
    };
};

let button = document.getElementById('roll');
button.addEventListener('click', diceRoll1);
button.addEventListener('click', diceRoll2);
button.addEventListener('click', winnerNote);
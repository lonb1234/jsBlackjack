// roll random number (1+"-" roll random number1 + ".png")  if double reroll

// variables


var money = 250
var bet = 0
var randomNumberA = 0
var randomNumberB = 0
var dealer = 0
var player = 0
var randomNumberC = 0
var randomNumberD = 0
pScore=0
cardcounter=0

function rollcard() {
  // // randomnumberc to 0
  // randomNumberC=randomNumberC*0

  randomNumberA = Math.floor((Math.random() * 4) + 1)
  randomNumberB = Math.floor((Math.random() * 13) + 1)
  // randomnumber to 10 for +10 cards
  if (randomNumberB > 10) {
    randomNumberC = randomNumberB - (randomNumberB - 10)
  } else {
    randomNumberC = randomNumberB
  }


  // document.querySelector(".scoreP").innerHTML=randomNumberD
}


// startup of page, random cards assigned to both player and dealer, skipping the first card of the dealer and the player because it will be the first drawn card later.
for (i = 1; i < 12; i++) {
  if (i != 6) {
    randomNumber1 = Math.floor((Math.random() * 4) + 1)
    document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
  }
}

// adding scores , function bc often needing it.

function addScoreP(){
  if (randomNumberB > 10) {
    randomNumberD = randomNumberB - (randomNumberB - 10)
  } else {
    randomNumberD = randomNumberB
  }
  Pscore=Pscore+randomNumberD

  document.querySelector(".scoreP ").innerHTML = Pscore
}







// new game button , fully functional, random backcover on unturned cards, picks a random card for the first card of the dealer and the first 2 of the player.

 function newgamez() {

   cardcounter=0
   cardcounter++
   randomNumberC = 0
   money = 250
   bet = 0
   Pscore=0
   document.querySelector(".total").innerHTML = "Total money: $250"
   document.querySelector(".current").innerHTML = "Current bet: $0"

   // set loop
   for (i = 0; i < 12; i++) {
     if (i != 0 && i != 6 && i != 7) {
       randomNumber1 = Math.floor((Math.random() * 4) + 1)
       document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
     } else if (i < 1) {
       rollcard()
       document.querySelector(".scoreD").innerHTML = randomNumberC
       if (randomNumberB > 9) {
         document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/" + randomNumberA + "-" + randomNumberB + ".png");
       } else {
         document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/" + randomNumberA + "-0" + randomNumberB + ".png");
       }
     } else {
       rollcard()
       addScoreP()
       if (randomNumberB > 9) {
         document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/" + randomNumberA + "-" + randomNumberB + ".png");
       } else {
         document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/" + randomNumberA + "-0" + randomNumberB + ".png");
       }
     }
   }}

   function NewGame(){
  // confirm start game
  var r = confirm("Are you certain you want to start a new game?");
  if (r == true) {
newgamez()
    // reset randon numberc

  }
}



//bet functionality, targets all the buttons. checks for no more than $500 a bet and check for enough remaining money.

function bets() {

  if (money > parseInt(event.target.innerHTML) - 1 && bet + parseInt(event.target.innerHTML) < 501) {
    money = money - parseInt(event.target.innerHTML)

    bet = bet + parseInt(event.target.innerHTML)


    document.querySelector(".total").innerHTML = "Total money: $" + money
    document.querySelector(".current").innerHTML = "Current bet: $" + bet
  } else if (money < parseInt(event.target.innerHTML)) {
    alert("You don't have enough money.")
  } else {
    alert("You can't bet higher than $500.")
  }

};


function drawhit(){
  if (randomNumberB > 9) {
    document.querySelector(".cardp"+(cardcounter+1)).setAttribute("src", "images/PNG/" + randomNumberA + "-" + randomNumberB + ".png");
  addScoreP()


  } else {
    document.querySelector(".cardp"+(cardcounter+1)).setAttribute("src", "images/PNG/" + randomNumberA + "-0" + randomNumberB + ".png");
addScoreP()
}}


// Hit
function hit(){
    rollcard()
  if (cardcounter==1){
cardcounter ++

drawhit()
if(Pscore>21)
{alert("You lose!")
newgamez()}}
else if (cardcounter==2){
cardcounter ++
drawhit()
if(Pscore>21)
{alert("You lose!")
newgamez()}}
else if (cardcounter==3){
cardcounter ++
drawhit()
if(Pscore>21)
{alert("You lose!")
newgamez()}}
else if (cardcounter==4){
cardcounter ++
drawhit()
if(Pscore>21)
{alert("You lose!")
newgamez()}}}




//stand - draw cards loop till 21+ if 21+ win, compare player score w dealer score if below

// Split


// insurance

// variables
var money = 250
var bet = 0
var randomNumberA = 0
var randomNumberB = 0
var randomNumberC = 0
var randomNumberD = 0
pScore = 0
DScore = 0
cardcounter = 0
cardcounterD = 0
var randomD = 0
var insured = 0
cardhit = 0


// function rolls for cards, number 1-4 for color and 1-13 for card
function rollcard() {
  randomNumberA = Math.floor((Math.random() * 4) + 1)
  randomNumberB = Math.floor((Math.random() * 13) + 1)
  if (randomNumberB > 10) {
    randomNumberC = randomNumberB - (randomNumberB - 10)
  } else {
    randomNumberC = randomNumberB
  }
}


// startup of page, random cards assigned to both player and dealer, skipping the first card of the dealer and the player because it will be the first drawn card later.
for (i = 1; i < 12; i++) {
  if (i != 6) {
    randomNumber1 = Math.floor((Math.random() * 4) + 1)
    document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
  }
}


// adding scores  for player
function addScoreP() {
  if (randomNumberB > 10) {
    randomNumberD = randomNumberB - (randomNumberB - 10)
  } else {
    randomNumberD = randomNumberB
  }
  Pscore = Pscore + randomNumberD
  document.querySelector(".scoreP ").innerHTML = Pscore
}


// adding scores for dealer
function addScoreD() {
  if (randomNumberB > 10) {
    randomD = randomNumberB - (randomNumberB - 10)
  } else {
    randomD = randomNumberB
  }
  DScore = DScore + randomD
  document.querySelector(".scoreD ").innerHTML = DScore
}


// new game function, assigns random cards and counts the score
function game() {
  for (i = 0; i < 12; i++) {
    if (i != 0 && i != 6 && i != 7) {
      randomNumber1 = Math.floor((Math.random() * 4) + 1)
      document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
    } else if (i < 1) {
      rollcard()
      addScoreD()
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
  }
}
// new game without cards drawn
function game2() {
  for (i = 0; i < 12; i++) {

      randomNumber1 = Math.floor((Math.random() * 4) + 1)
      document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");

    }
  }

//resets variables and runs game function
// function newgamez() {
//   cardcounterD = 1
//   cardcounterD++
//   cardcounter = 0
//   cardcounter++
//   randomNumberC = 0
//   bet = 0
//   Pscore = 0
//   DScore = 0
//   insured = 0
//   cardhit = 0
//   game()
// }

// test function
function newgamez() {
  cardcounterD = 1
  cardcounterD++
  cardcounter = 0
  cardcounter++
  randomNumberC = 0
  bet = 0
  betz=0
  Pscore = 0
  DScore = 0
  insured = 0
  cardhit = 0
  game2()
}


function newgamez2() {
  cardcounterD = 1
  cardcounterD++
  cardcounter = 0
  cardcounter++
  randomNumberC = 0
  Pscore = 0
  DScore = 0
  insured = 0
  cardhit = 0
  game()
}

//confirmation of new game, removes money and runs newgamez script
function NewGame() {
  var r = confirm("Are you certain you want to start a new game?");
  if (r == true) {
    document.querySelector(".total").innerHTML = "Total money: $250"
    document.querySelector(".current").innerHTML = "Current bet: $0"
    money = 250
    newgamez()
  }
}


//bet functionality, targets all the buttons. checks for no more than $500 a bet and check for enough remaining money.
function bets() {
if (betz<1){
  betz+1
  newgamez2()

  if (cardhit < 1) {
    if (money > parseInt(event.target.innerHTML) - 1 && bet + parseInt(event.target.innerHTML) < 501) {
      money = money - parseInt(event.target.innerHTML)
      bet = bet + parseInt(event.target.innerHTML)
      document.querySelector(".total").innerHTML = "Total money: $" + money
      document.querySelector(".current").innerHTML = "Current bet: $" + bet
    } else if (money < parseInt(event.target.innerHTML)) {
      alert("You don't have enough money.")
    } else {
      alert("You can't bet higher than $500.")
    }}
  }
  else   if (cardhit < 1) {
      if (money > parseInt(event.target.innerHTML) - 1 && bet + parseInt(event.target.innerHTML) < 501) {
        money = money - parseInt(event.target.innerHTML)
        bet = bet + parseInt(event.target.innerHTML)
        document.querySelector(".total").innerHTML = "Total money: $" + money
        document.querySelector(".current").innerHTML = "Current bet: $" + bet
      } else if (money < parseInt(event.target.innerHTML)) {
        alert("You don't have enough money.")
      } else {
        alert("You can't bet higher than $500.")
      }}
    }
;


// draws cards and counts the score throuhg addscorep, once over 21 player lost, uses cardhit1 to make sure you cant place bets after draws.
// once 6 cards are drawn it automatically triggers the stand function
function hit() {
  cardhit = 1
  rollcard()
  if (cardcounter <= 4 && cardcounter > 0) {
    cardcounter++
    if (randomNumberB > 9) {
      document.querySelector(".cardp" + (cardcounter + 1)).setAttribute("src", "images/PNG/" + randomNumberA + "-" + randomNumberB + ".png");
      addScoreP()
    } else {
      document.querySelector(".cardp" + (cardcounter + 1)).setAttribute("src", "images/PNG/" + randomNumberA + "-0" + randomNumberB + ".png");
      addScoreP()
    }
    if (Pscore > 21) {
      alert("You lost.")
      setTimeout(function() {
        newgamez();
      }, 700)
      money = money
      bet = 0
      document.querySelector(".total").innerHTML = "Total money: $" + money
      document.querySelector(".current").innerHTML = "Current bet: $" + bet;
    }
  }
}
if (cardcounter == 5) {
  stand()
}


// function to draw cards for stand function
function standdraw() {
  for (cardcounterD; DScore < 17 && cardcounterD < 7; cardcounterD++) {
    rollcard()
    addScoreD()
    if (randomNumberB > 9) {
      document.querySelector(".card" + (cardcounterD)).setAttribute("src", "images/PNG/" + randomNumberA + "-" + randomNumberB + ".png");
    } else {
      document.querySelector(".card" + (cardcounterD)).setAttribute("src", "images/PNG/" + randomNumberA + "-0" + randomNumberB + ".png");
    }
  }
}

// the stand function, it uses standdraw to draw cards, then checks the specified variables to see the outcome, after it starts a new round after 0.7 seconds
// and adding or removing the bet money
function stand() {
  if (cardcounterD > 0) {
    standdraw()
    if (DScore > Pscore && DScore <= 21) {
      if (DScore = 21 && insured > 0) {
        alert("You lost.")
        setTimeout(function() {
          newgamez();
        }, 700)
        money = money + (bet * 0.75)
        bet = 0
        document.querySelector(".total").innerHTML = "Total money: $" + money
        document.querySelector(".current").innerHTML = "Current bet: $" + bet
      } else {
        document.querySelector(".winner").innerHTML = "Dealer Wins"
        alert("You lost.")
        setTimeout(function() {
          newgamez();
        }, 700)
        money = money
        bet = 0
        document.querySelector(".total").innerHTML = "Total money: $" + money
        document.querySelector(".current").innerHTML = "Current bet: $" + bet
      }
    } else if (Pscore > DScore && Pscore <= 21) {
      document.querySelector(".winner").innerHTML = "Player Wins"
      alert("You win.")
      setTimeout(function() {
        newgamez();
      }, 700)
      money = money + (bet * 2)
      bet = 0
      document.querySelector(".total").innerHTML = "Total money: $" + money
      document.querySelector(".current").innerHTML = "Current bet: $" + bet
    } else if (DScore > 21) {
      document.querySelector(".winner").innerHTML = "Player Wins"
      alert("You win.")
      setTimeout(function() {
        newgamez();
      }, 700)
      money = money + (bet * 2)
      bet = 0
      document.querySelector(".total").innerHTML = "Total money: $" + money
      document.querySelector(".current").innerHTML = "Current bet: $" + bet
    } else if (Pscore = DScore) {
      document.querySelector(".winner").innerHTML = "Draw"
      alert("Draw.")
      setTimeout(function() {
        newgamez();
      }, 700);
    }
    money = money + bet
    bet = 0
    document.querySelector(".total").innerHTML = "Total money: $" + money
    document.querySelector(".current").innerHTML = "Current bet: $" + bet
  }
}


// Split


// buys an insurance for 50% of the bet and checks if there's enough money. only usable once an A is drawn. not fully functional yet. insurance also triggers once
// 21 is reached without a blackjack.
function insurance2() {
  if (DScore = 1 && insured < 1) {
    if (money > (bet * 0.5)) {
      money = money - (bet * 0.5)
      bet = bet + (bet * 0.5)
      insured = 1
      document.querySelector(".total").innerHTML = "Total money: $" + money
    } else if (money < (bet * 0.5)) {
      alert("You don't have enough money.")
    }
  }
}

// roll random number (1+"-" roll random number1 + ".png")  if double reroll

// variables
var money = 250
var bet = 0


// startup of page, random cards assigned to both player and dealer, skipping the first card of the dealer and the player because it will be the first drawn card later.
for (i = 1; i < 12; i++) {
  if (i != 6) {
    randomNumber1 = Math.floor((Math.random() * 4) + 1)
    document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
  }
}





// new game button + cards later first cards to be turned over

document.querySelector(".newgame").addEventListener("click", function() {
  for (i = 1; i < 12; i++) {
    if (i != 6) {
      randomNumber1 = Math.floor((Math.random() * 4) + 1)
      document.querySelectorAll(".card")[i].setAttribute("src", "images/PNG/s" + randomNumber1 + ".png");
    }
    money = '250'
    bet = '0'
    document.querySelector(".total").innerHTML = "Total money: $250"
    document.querySelector(".current").innerHTML = "Current bet: $0"
  }

})

//bet functionality, targets all the buttons. checks for no more than $500 a bet and check for enough remaining money. 

function bets() {

  if (money > parseInt( event.target.innerHTML)-1 && bet+parseInt( event.target.innerHTML) < 501) {
    money = money - parseInt( event.target.innerHTML)

      bet = bet + parseInt(event.target.innerHTML)


    document.querySelector(".total").innerHTML = "Total money: $" + money
    document.querySelector(".current").innerHTML = "Current bet: $" + bet
  } else if (money < parseInt( event.target.innerHTML)) {
    alert("You don't have enough money.")
  } else {
    alert("You can't bet higher than $500.")
  }

};

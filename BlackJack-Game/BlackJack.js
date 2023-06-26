
var cards = []
var sum = 0; 
var hasBlackjack = false;
var isAlive = false;
let msg = "";
var sumEl = document.getElementById("sum");
var cardsEl = document.getElementById("cards");

let player = {
  Name : "per",
  Chips : "200",
}
 
let playerEL = document.getElementById("player");
playerEL.textContent = player.Name + ": $ " +  player.Chips;

function getRandomCard(){
  let randomNumber = Math.floor((Math.random())*13) + 1;

  if(randomNumber === 1){
    return 11;
  }else if(randomNumber >= 11){
    return 10;
  }else{
    return randomNumber;
  }
}

function startGame(){
  isAlive = true;
var firstCard = getRandomCard();
var secondCard = getRandomCard();
cards = [firstCard,secondCard] 
sum = firstCard + secondCard; 
 renderGame()
}

function renderGame(){
 if (sum <= 20){
 msg = "Do you want to draw a new card?";
}else if (sum === 21){
 msg = "You've got BlackJack!";
 hasBlackjack = true;
}else {
 msg = "You're out of the game";
 isAlive = false;
}
var msgEl = document.getElementById("msg");
msgEl.textContent = msg;
sumEl.textContent = "Sum : "+ sum;
 cardsEl.textContent = "Cards : ";
 for(let i = 0; i < cards.length; i++){
   cardsEl.textContent += cards[i] + " ";
 }
}
 
function newCard(){
  if(isAlive === true && hasBlackjack === false){
      var card = getRandomCard();
      sum += card;
      cards.push(card)
      console.log(cards);
      renderGame();
  }
}

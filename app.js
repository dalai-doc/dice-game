var activePlayer, scores, roundScore, gameOver;
var diceDom = document.querySelector(".dice");
newGame();
// shoog shideh event litener

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gameOver === false) {
    //1-6 hurtel sanamsargui toog gargaj irne
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig gargaj irne
    diceDom.style.display = "block";
    //buusan sanamsargui toond taarsan zurgiig gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan toon 1 ees yalgaaatai bol idvehitei toglogchiin toog nemegduulne
    if (diceNumber !== 1) {
      // 1 ees yalgaatai too buulaa
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //1 buusan tul toglogchiin eeljiig solino
      switchToNextPlayer();
    }
  }
});
// hold tovchnii eventlistener

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gameOver === false) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      gameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
      switchToNextPlayer();
    }
  }
});

//......toglogchiin eeljiig solih function........
function switchToNextPlayer() {
  roundScore = 0;
  diceDom.style.display = "none";
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //..................................
}
function newGame() {
  gameOver = false;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "PLAYER1";
  document.getElementById("name-1").textContent = "PLAYER2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
//.....................................

//shine togloom ehluuleh towchnii evenlistner

document.querySelector(".btn-new").addEventListener("click", newGame);

var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
/*
function unlucy() {
  roundScore = 0;
  diceDom.style.display = "none";
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
*/
// soog shideh event litener
document.querySelector(".btn-roll").addEventListener("click", function() {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    document.querySelector(".btn-hold").addEventListener("click", function() {
      document.getElementById("score-" + activePlayer).textContent = roundScore;
    });
  } else {
    //1 buusan tul toglogchiin eeljiig solino

    roundScore = 0;
    diceDom.style.display = "none";
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});

var isGameOver;
var activePlayer;
var onoo;
var roundOnoo;
var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  isGameOver = false;
  // toglogchiin eeljiig hadgalah,
  activePlayer = 0;

  //onoog hadgalah
  onoo = [0, 0];

  // player eeljind chugluulj biagaa onoog hadgalah
  roundOnoo = 0;

  // ehelel beltgel
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
}
// Shoog shideh evenlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    // 1 ees 6 dotroh neg too gargaj awna
    var shooNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    // buusan sanamsargui shoonii zurgiig gargaj irne
    diceDom.src = "dice-" + shooNumber + ".png";
    //  buusan toon negees ylgaatai bol idewtei toglogchiin onoog nemegduulne toglogchiin eeljiin toog nemnen
    if (shooNumber !== 1) {
      //1 ees oor too buuwal nemej ogno
      roundOnoo = roundOnoo + shooNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundOnoo;
    } else {
      // 1 buuwal
      switchToNextPlayer();
      // neg buusa ndaara negiig baihgui bolgono
    }
  } else {
    alert("New game towchiig darj ehelnuu");
  }
});
// hold chowch
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver !== true) {
    onoo[activePlayer] = onoo[activePlayer] + roundOnoo;
    // delegtsiin onoog oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      onoo[activePlayer];
    // ug toglogch hojson eheh
    if (onoo[activePlayer] >= 100) {
      isGameOver = true;

      // winner gesen textiig gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("New game towchiig darj ehelnuu");
  }
});
function switchToNextPlayer() {
  // eeljiin onoog 0 bolgono
  // toglogchiin elljiig solni
  roundOnoo = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  diceDom.style.display = "none";

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
document.querySelector(".btn-new").addEventListener("click", initGame);

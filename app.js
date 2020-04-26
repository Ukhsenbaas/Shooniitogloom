// toglogchiin eeljiig hadgalah,
var activePlayer = 2;

//onoog hadgalah
var onoo = [0, 0];

// player eeljind chugluulj biagaa onoog hadgalah
var roundOnoo = 0;

//shoonii ali talaaraa buusang hadgalah
var shooNumber = Math.floor(Math.random() * 6) + 1;

// ehelel beltgel

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var shooNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + shooNumber + ".png";
});

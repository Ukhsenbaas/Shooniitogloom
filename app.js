// toglogchiin eeljiig hadgalah,
var activePlayer = 2;

//onoog hadgalah
var onoo = [0, 0];

// player eeljind chugluulj biagaa onoog hadgalah
var roundOnoo = 0;

//shoonii ali talaaraa buusang hadgalah
var shoo = Math.floor(Math.random() * 6) + 1;
// <div class="player-score" id="score-0">43</div>
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Shoo: " + shoo);

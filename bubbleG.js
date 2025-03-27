var timer = 60;
var score = 0;
var Getrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getHit() {
  Getrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = Getrn;
}

function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 90; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timer);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (val) {
  var clickednum = Number(val.target.textContent);
  if (clickednum === Getrn) {
    increaseScore();
    makeBubble();
    getHit();
  }
});

runTimer();

getHit();

makeBubble();

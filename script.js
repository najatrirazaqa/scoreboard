// Logic
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const winPointOption = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameOver = false;

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (winPoint === p1Score) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (winPoint === p2Score) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

winPointOption.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});

// Feature View Sourcecode
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeypress = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    return false;
  }
};

document.onmousedown = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    return false;
  }
};

document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    return false;
  }
};

jQuery(document).ready(function ($) {
  $(document).keydown(function (event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      alert("Swiper, jangan mencuri!");
      return false;
    }
  });
});

jQuery(document).ready(function ($) {
  $(document).keydown(function (event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "i")) {
      alert("Swiper, jangan mencuri!");
      return false;
    }
  });
});

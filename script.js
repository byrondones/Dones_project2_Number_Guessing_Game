const difficulties = {
  easy: { num: Math.floor(Math.random() * 5), guessCount: 20 }, //random number between 0 and 4, and 20
  moderate: { num: Math.floor(Math.random() * 50), guessCount: 10 }, //random number between 0 and 49, and 10 guesses
  hard: { num: Math.floor(Math.random() * 100), guessCount: 5 }, //random number between 0 and 99, and 5 guesses

  //pwede mo palitan yung makatotohanan wahahahaha
};

//stores difficulty level
let currentDifficulty = null;
//stores guesses remaining
let guessCount = 0;

//dom elements
const music = document.querySelector("#bg-music");
const musicOnBtn = document.querySelector("#musicOn");
const musicOffBtn = document.querySelector("#musicOff");
const inputNum = document.querySelector("#inputNum");
const guessBtn = document.querySelector("#guessBtn");
const cardArea = document.querySelector("#cardArea");
const guessesText = document.querySelector("#guesses");

//set difficulty
function setDifficulty(difficulty) {
  currentDifficulty = difficulties[difficulty]; //pick difficulty
  inputNum.disabled = false; //enable input field
  guessBtn.disabled = false; //activate guess button
  cardArea.innerHTML = ""; //clear input field
  guessCount = currentDifficulty.guessCount; //update the guessCount to reflect the allowed number of tries for difficulty
  guessesText.textContent = `Tries Remaining: ${guessCount}`;
}

function checkGuess() {
  const input = inputNum.value.trim();

  if (input === "") {
    //if input is empty
    const emptyModal = new bootstrap.Modal(
      document.getElementById("emptyModal")
    );
    emptyModal.show();
    return;
  }

  const inputValue = parseInt(input);

  if (isNaN(inputValue)) {
    //if not a number
    const letterModal = new bootstrap.Modal(
      document.getElementById("letterModal")
    );
    letterModal.show();
    inputNum.value = "";
    return;
  }

  if (inputValue < 0 || inputValue > 100) {
    // out of range
    const chooseModal = new bootstrap.Modal(
      document.getElementById("chooseModal")
    );
    chooseModal.show();
    inputNum.value = "";
    return;
  }
  guessCount--;

  if (inputValue === currentDifficulty.num) {
    //if correct
    cardArea.innerHTML = `<div><p class="text-center fw-bold mt-4" style="font-size: 3rem;">🎉 You Won!</p><p class="text-center fw-bold" style="font-size: 10rem;">${inputValue}</p></div>`;
    const winnerModal = new bootstrap.Modal(
      document.getElementById("winnerModal")
    );
    winnerModal.show();
  } else if (inputValue > currentDifficulty.num) {
    cardArea.innerHTML = `<div><p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔻Lower!</p><p class="text-center fw-bold" style="font-size: 10rem;">${inputValue}</p></div>`;
  } else if (inputValue < currentDifficulty.num) {
    cardArea.innerHTML = `<div><p class="text-center fw-bold mt-4" style="font-size: 3rem;">🔺Higher!</p><p class="text-center fw-bold" style="font-size: 10rem;">${inputValue}</p></div>`;
  }

  inputNum.value = "";
  guessesText.textContent = `Tries Remaining: ${guessCount}`;

  if (guessCount === 0) {
    //run out of guesses
    const loseModal = new bootstrap.Modal(document.getElementById("loseModal"));
    loseModal.show();
  }
}

//reset game
function resetGame() {
  window.location.href = "index.html";
}

//event listeners
music.play();
musicOnBtn.addEventListener("click", () => music.play());
musicOffBtn.addEventListener("click", () => music.pause());
document
  .querySelector("#easyBtn")
  .addEventListener("click", () => setDifficulty("easy"));
document
  .querySelector("#moderateBtn")
  .addEventListener("click", () => setDifficulty("moderate"));
document
  .querySelector("#hardBtn")
  .addEventListener("click", () => setDifficulty("hard"));
guessBtn.addEventListener("click", checkGuess);
document.querySelector("#loseRestartBtn").addEventListener("click", resetGame);
document.querySelector("#restartBtn").addEventListener("click", resetGame);

const countCounter = document.getElementById("counter");

const countIncrease = document.getElementById("increment");
const countDecrease = document.getElementById("decrement");
const countReset = document.getElementById("reset");

let count = 0;

function updateCount() {
  countCounter.textContent = count;
  if (count >= 0 && count < 1) {
    document.body.classList = "purple-bg";
  } else if (count >= 1 && count <= 5) {
    document.body.classList = "green-bg";
  } else if (count >= 6 && count <= 10) {
    document.body.classList = "yellow-bg";
  } else if (count >= 11 && count <= 15) {
    document.body.classList = "orange-bg";
  } else if (count >= 16 && count <= 20) {
    document.body.classList = "red-body";
  } else if (count >= 21 && count <= 100) {
    document.body.classList = "none-bg";
  }
}

function incrementCount() {
  count++;
  updateCount();
}

function decrementCount() {
  if (count > 0) {
    count--;
    updateCount();
  }
}
function resetCount() {
  count = 0;
  updateCount();
}

countIncrease.addEventListener("click", incrementCount);
countDecrease.addEventListener("click", decrementCount);
countReset.addEventListener("click", resetCount);
updateCount();

//the page color will chnage to green if the num is b/w 1 to 5,  yellow for 6 to 10 , orange 11 to 15 and red for 16 to 20

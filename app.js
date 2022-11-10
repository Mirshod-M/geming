const table = document.querySelector(".table");
const arr = [];
const endModal = document.querySelector(".end__modal");
const startModal = document.querySelector(".start__modal");
const restartBtn = document.querySelector(".restart__btn");
const startBtn = document.querySelector(".start__btn");
const timeText = document.querySelector(".time__text");
const scoreRedText = document.querySelectorAll(".score__text-red");
const scoreGreenText = document.querySelectorAll(".score__text-green");
while (arr.length !== 10) {
  let random = Math.floor(Math.random() * 100);
  if (!arr.includes(random)) {
    arr.push(random);
  }
}

console.log(arr);

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const allItems = document.querySelectorAll("td");
console.log(arr);
for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function () {
    if (arr.includes(i)) {
      allItems[i].classList.add("green");
    } else {
      allItems[i].classList.add("red");
    }
    let greenCount = document.querySelectorAll(".green").length;
    let redCount = document.querySelectorAll(".red").length;
    scoreGreenText.forEach(item => item.textContent = greenCount)
    scoreRedText.forEach(item => item.textContent = redCount)
    if (greenCount === 10) {
      endModal.querySelector(".modal__title").textContent = "You won";
      endModal.classList.add("modal__open");
    }
  });
}
function timeStart() {
  let time = 45;

  setInterval(function () {
    if (time > 0) {
      time = time - 1;
      timeText.textContent = `00:${time < 10 ? `0${time}` : time}`;
    }
  }, 1000);

  setInterval(function () {
    endModal.classList.add("modal__open");
  }, 1000 * 45);
}

restartBtn.addEventListener("click", function () {
  window.location.reload()
})

startBtn.addEventListener("click", function () {
  timeStart()
  startModal.classList.remove('modal__open')
})
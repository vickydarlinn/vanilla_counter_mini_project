const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const changeBy = document.querySelector(".changeBy");
const outputEl = document.querySelector(".output");
const resetBtn = document.querySelector(".reset");

let result = 0;
let changeByValue = Number(changeBy.value);

function updateResult() {
  outputEl.textContent = result;
}

plusBtn.addEventListener("click", function () {
  result += changeByValue;
  updateResult();
});

minusBtn.addEventListener("click", function () {
  result -= changeByValue;
  updateResult();
});

resetBtn.addEventListener("click", function () {
  outputEl.textContent = "0";
  changeBy.value = "1";
  result = 0;
  changeByValue = 1;
});

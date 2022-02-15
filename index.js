const chose = document.querySelector(".chose");
const cutline = document.querySelector(".cutnumber");
const playForm = document.querySelector("form");
const resultNumber = document.querySelector("#result_1");
const gameResult = document.querySelector("#result_2");

function playgame(event) {
  const choseNumber = chose.value;
  const cutlineNumber = cutline.value;
  event.preventDefault();
  if (cutline.value === "") {
    alert("please write number");
    cutline.focus();
  } else if (cutline.value < 0) {
    alert("양수로 적어주세요");
    cutline.focus();
  } else if (chose.value === "") {
    alert("please write number");
    chose.focus();
  } else if (
    parseInt(chose.value) < 0 ||
    parseInt(chose.value) > parseInt(cutline.value)
  ) {
    alert("0부터 위 지정한 숫자까지 적을수 있습니다.");
    chose.focus();
  } else {
    const randomValue = Math.floor(Math.random() * cutlineNumber);
    resultNumber.innerText = `You chose:${choseNumber}, the machine chose:${randomValue}.`;
    resultNumber.classList.remove("hidden");
    if (randomValue === parseInt(choseNumber)) {
      gameResult.innerText = "You win!";
    } else {
      gameResult.innerText = "You lose!";
    }
    gameResult.classList.remove("hidden");
  }
}

playForm.addEventListener("submit", playgame);

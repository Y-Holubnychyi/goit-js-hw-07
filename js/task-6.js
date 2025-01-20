function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", onCreateBoxes);
destroyButton.addEventListener("click", onDestroyBoxes);

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    size += 10;
  }

  boxes.innerHTML = '';
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = ''; 
}

function onCreateBoxes() {
  const amount = parseInt(input.value.trim(), 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    input.value = ''; 
    return;
  }

  createBoxes(amount);
  input.value = ''; 
}

function onDestroyBoxes() {
  destroyBoxes();
}

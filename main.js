import { createMarkUp } from "./markUp.js";
createMarkUp();
const mainField = document.querySelector(".gameField");
const elementField = document.querySelector(".elementField");
// const NumberOfFields = mainField.offsetWidth * ;
const allElemArr = [...mainField.children]; // Массив всех игровых ячеек
const NumberOfLine = Math.floor(
  mainField.offsetWidth / allElemArr[0].offsetWidth // Находим количество игровых ячеек в ряду
);

mainField.addEventListener("click", selectedFields);

//Основная функция
function selectedFields(e) {
  if (e.target.textContent === "") return;
  if (e.target.classList.contains("gameField")) return;
  e.target.classList.add("alreadyPicked");
  isCloseElementEqual(allElemArr.indexOf(e.target), e.target.id, e.target);
  e.target.textContent = "";
}

//Функция для проверки соседних  игровых ячеек
function isCloseElementEqual(elementIndex, elementTextContent, element) {
  console.dir(element);

  let nextElem = calcElem(elementIndex + 1);
  if (element.offsetTop !== nextElem.offsetTop) nextElem = `<p></p>`;
  let prevElem = calcElem(elementIndex - 1);
  if (element.offsetTop !== prevElem.offsetTop) prevElem = `<p></p>`;
  const aboveElem = calcElem(elementIndex + NumberOfLine);
  const botElem = calcElem(elementIndex - NumberOfLine);

  changeCloseELem(nextElem, elementTextContent);
  changeCloseELem(prevElem, elementTextContent);
  changeCloseELem(aboveElem, elementTextContent);
  changeCloseELem(botElem, elementTextContent);
}

//Функция обозначения конкретного соседней игровой ячейки
function calcElem(elemIndex) {
  return allElemArr[elemIndex] ? allElemArr[elemIndex] : "";
}

//Функция для проверки конкретного соседней игровой ячейки
function changeCloseELem(element, elementTextContent) {
  if (
    element.id === elementTextContent &&
    !element.classList.contains("alreadyPicked")
  ) {
    element.classList.add("alreadyPicked");
    isCloseElementEqual(allElemArr.indexOf(element), element.id, element);

    element.textContent = "";
  }
}

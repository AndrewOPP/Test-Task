import { gameMarkUp } from "./markUp.js";

class Game {
  constructor() {
    this.gameField = document.querySelector(".gameField");
    this.allFieldArr = [...this.gameField.children]; // Массив всех игровых ячеек
    this.NumberOfLine = Math.floor(
      this.gameField.offsetWidth / this.allFieldArr[0].offsetWidth // Находим количество игровых ячеек в ряду
    );
    this.gameField.addEventListener(
      "click",
      this.fieldsWhichIsSelected.bind(this)
    );
  }
  // Основной метод
  fieldsWhichIsSelected(e) {
    const element = e.target.closest("div");
    if (!element || element.classList.contains("gameField")) return;

    element.classList.add("alreadyDelete");
    this.isCloseElementEqual(
      this.allFieldArr.indexOf(element),
      element.id,
      element
    );
    element.textContent = "";
  }

  // Метод для обозначения конкретной соседней игровой ячейки
  findClosestElems(elemIndex) {
    return this.allFieldArr[elemIndex];
  }

  //Метод для проверки конкретной соседней игровой ячейки
  changeClosestElems(element, elementTextContent) {
    if (
      element &&
      element.id === elementTextContent &&
      !element.classList.contains("alreadyDelete")
    ) {
      element.classList.add("alreadyDelete");
      this.isCloseElementEqual(
        this.allFieldArr.indexOf(element),
        element.id,
        element
      );
      element.textContent = "";
    }
  }

  // Метод для проверки соседних игровых ячеек
  isCloseElementEqual(elementIndex, textContent, element) {
    const aboveElem = this.findClosestElems(elementIndex + this.NumberOfLine);
    const botElem = this.findClosestElems(elementIndex - this.NumberOfLine);
    let nextElem = this.findClosestElems(elementIndex + 1);
    if (nextElem && element.offsetTop !== nextElem.offsetTop) nextElem = null;
    let prevElem = this.findClosestElems(elementIndex - 1);
    if (prevElem && element.offsetTop !== prevElem.offsetTop) prevElem = null;

    const closeElemArr = [aboveElem, botElem, nextElem, prevElem];
    closeElemArr.forEach((element) => {
      this.changeClosestElems(element, textContent);
    });
  }
}

const game = new Game();

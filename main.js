import { gameMarkUp } from "./markUp.js";

class Game {
  constructor() {
    this.gameField = document.querySelector(".gameField");
    this.allFieldArr = [...this.gameField.children];
    this.NumberOfLine = Math.floor(
      this.gameField.offsetWidth / this.allFieldArr[0].offsetWidth
    );
    this.gameField.addEventListener(
      "click",
      this.fieldsWhichIsSelected.bind(this)
    );
  }

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

  findClosestElems(elemIndex) {
    return this.allFieldArr[elemIndex];
  }

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

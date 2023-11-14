class GameFieldMarkup {
  constructor() {
    this.gameField = document.querySelector(".gameField");
  }

  createMarkup() {
    let mainMarkup = [];
    const createMark = () => {
      this.randomEl();
      for (let index = 1; index <= 42; index++) {
        const { id, svgIcon } = this.randomEl();
        mainMarkup.push(`
          <div  class="elementField" id=${id}>
              <svg class="svgIcons" height="60px" width="60px">
                  <use href="./sprite.svg#${svgIcon}"></use>
              </svg>
          </div>`);
      }
      mainMarkup = mainMarkup.join("");
    };
    createMark();

    this.gameField.insertAdjacentHTML("beforeend", mainMarkup);
  }

  randomEl() {
    let svgIcon;
    let id;

    const randomField = Math.floor(Math.random() * 4);

    switch (randomField) {
      case 1:
        svgIcon = "icon-heart";
        id = 1;
        break;
      case 2:
        svgIcon = "icon-diamond";
        id = 2;
        break;
      case 3:
        svgIcon = "icon-club";
        id = 3;
        break;

      default:
        svgIcon = "icon-spade";
        id = 0;
        break;
    }

    return {
      svgIcon: svgIcon,
      id: id,
    };
  }
}

export const gameMarkUp = new GameFieldMarkup();
gameMarkUp.createMarkup();

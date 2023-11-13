export function createMarkUp() {
  const mainField = document.querySelector(".gameField");
  let markup = [];

  const createMark = () => {
    randomEl();
    for (let index = 1; index <= 30; index++) {
      const { id, svg } = randomEl();
      markup.push(`
        <div id=${id} class="elementField">
            <svg class="kik" width="60px" height="60px">
                <use href="./sprite.svg#${svg}"></use>
            </svg>
        </div>`);
    }
    markup = markup.join("");
  };
  createMark();

  mainField.insertAdjacentHTML("beforeend", markup);
}

function randomEl() {
  let id;
  let svg;

  const randomNum = Math.floor(Math.random() * 4);

  switch (randomNum) {
    case 1:
      svg = "icon-heart";
      id = 1;
      break;
    case 2:
      svg = "icon-diamond";
      id = 2;
      break;
    case 3:
      svg = "icon-club";
      id = 3;
      break;

    default:
      svg = "icon-spade";
      id = 0;
      break;
  }
  return {
    svg: svg,
    id: id,
  };
}

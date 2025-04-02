import { calculateSize, changeExampleParagraph } from "./script.js";
import { renderPopularSizes } from "./popular-sizes.js";
const formulaList = [
  { string: "Standart Compact(1.2)", number: 1200 },
  { string: "Standard Medium(1.4)", number: 1400 },
  { string: "Standard Spacious(1.6)", number: 1600 },
  { string: "Golden Ratio(1.618)", number: 1618 },
];

let formulaListHTML = "";

formulaList.forEach((string) => {
  formulaListHTML += `<li class="js-list-item list-item data-it" data-multiplier=${
    string.number / 1000
  }>${string.string}</li>`;
});
document.querySelector(".js-formula-list").innerHTML = formulaListHTML;

const optionContainer = document.querySelector(".js-input-container");
const optionSelect = document.querySelectorAll(".js-list-item");
const optionList = document.querySelector(".js-formula-list");
const iconRotate = document.querySelector(".js-icon-dropdown");

optionContainer.addEventListener("click", () =>
  optionList.classList.toggle("active")
);

optionContainer.addEventListener("click", () =>
  iconRotate.classList.toggle("icon-dropdown-rotated")
);

export let fontMultiplier = "";

function defaultOption() {
  fontMultiplier = 1.4;
  const popMultiLabel = document.querySelector(".js-pop-multi-number");
  popMultiLabel.innerText = `${fontMultiplier}x`;
  calculateSize();
  changeExampleParagraph();
  return fontMultiplier;
}
defaultOption();

optionSelect.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = document.querySelector(".js-input-selected");
    const popMultiLabel = document.querySelector(".js-pop-multi-number");
    fontMultiplier = option.dataset.multiplier;
    popMultiLabel.innerText = `${fontMultiplier}x`;
    selectedOption.innerText = option.innerHTML;
    iconRotate.classList.remove("icon-dropdown-rotated");
    optionList.classList.remove("active");
    calculateSize();
    changeExampleParagraph();
    renderPopularSizes();
    return fontMultiplier;
  });
});

import { fontMultiplier } from "./font-formula-dropdown.js";

function defaultValues() {
  const fontSizeInput = document.querySelector(".js-input-font-size");

  let fontSizeValue = 24;
  let fontSizeChange = Number(
    document.querySelector(".js-result-size").innerHTML
  );
  fontSizeChange = Math.round(fontSizeValue * 1.4);
  fontSizeInput.value = fontSizeValue;
  document.querySelector(".js-result-size").innerHTML = fontSizeChange;
}

defaultValues();

export function calculateSize() {
  const fontSizeInput = document.querySelector(".js-input-font-size");
  let fontSizeValue = fontSizeInput.value;
  let fontSizeChange = Number(
    document.querySelector(".js-result-size").innerHTML
  );
  fontSizeChange = Math.round(fontSizeValue * fontMultiplier);
  document.querySelector(".js-result-size").innerHTML = fontSizeChange;
}

export function changeExampleParagraph() {
  const fontSizeInput = document.querySelector(".js-input-font-size");
  let fontSizeValue = Number(fontSizeInput.value);
  let lineHeight = Number(document.querySelector(".js-result-size").innerHTML);
  let exampleParagraph = document.querySelector(".js-example-paragraph");

  exampleParagraph.style.fontSize = `${fontSizeValue}px`;
  exampleParagraph.style.lineHeight = `${lineHeight}px`;
}

let fontSizeInput = document.querySelector(".js-input-font-size");

fontSizeInput.addEventListener("keyup", calculateSize);
fontSizeInput.addEventListener("keyup", changeExampleParagraph);

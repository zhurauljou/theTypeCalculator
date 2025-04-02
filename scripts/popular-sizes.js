import { fontMultiplier } from "./font-formula-dropdown.js";
const popularSizes = [
  {
    fontSize: 16,
  },
  {
    fontSize: 24,
  },
  {
    fontSize: 36,
  },
];

export function renderPopularSizes() {
  let popularSizeHTML = "";
  popularSizes.forEach((size) => {
    popularSizeHTML += `            
      <li class="sizeCard">
          <div>
              <p class="pSecondary">Font size:</p>
              <h3>${size.fontSize}px</h3>
          </div>
          <div>
              <p class="pSecondary">Line height:</p>
              <h3>${Math.round(size.fontSize * fontMultiplier)}px</h3>
          </div>
      </li>`;
  });

  document.querySelector(".js-size-list").innerHTML = popularSizeHTML;
}

renderPopularSizes();

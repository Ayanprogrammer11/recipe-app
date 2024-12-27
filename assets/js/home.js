/**
 * @license MIT
 * @author Ayan <ayanliaqat48@gmail.com>
 * @copyright Ayan 2024
 */

"use strict";
/***
 * Home Page Search
 */

const /** {NodeElement} */ $searchField = document.querySelector(
    "[data-search-field]"
  );
const /** {NodeElement} */ $searchBtn =
    document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function () {
  if ($searchField.value)
    window.location = `/recipes.html?q=${$searchField.value}`;
});

/**
 * Search when press "Enter" key
 */

$searchField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") $searchBtn.click();
});

/**
 * Tab Panel Navigation
 */

const /** {NodeList} */ $tabBtns = document.querySelectorAll("[data-tab-btn]");

const /** {NodeList} */ $tabPanels =
    document.querySelectorAll("[data-tab-panel]");

let /** {NodeElement} */ [$lastActiveTabPanel] = $tabPanels;
let /** {NodeElement} */ [$lastActiveTabBtn] = $tabBtns;

addEventOnElements($tabBtns, "click", function () {
  $lastActiveTabPanel.setAttribute("hidden", "");
  $lastActiveTabBtn.setAttribute("aria-selected", false);
  $lastActiveTabBtn.setAttribute("tabindex", -1);

  const /** {NodeElement} */ $currentTabPanel = document.querySelector(
      `#${this.getAttribute("aria-controls")}`
    );

  $currentTabPanel.removeAttribute("hidden");
  this.setAttribute("aria-selected", true);
  this.setAttribute("tabindex", 0);

  $lastActiveTabPanel = $currentTabPanel;
  $lastActiveTabBtn = this;
});

/**
 * Navigate Tab with Arrow Keys
 */

addEventOnElements($tabBtns, "keydown", function (e) {
  const /** {NodeElement} */ $nextBtn = this.nextElementSibling;
  const /** {NodeElement} */ $previousBtn = this.previousElementSibling;

  if (e.key === "ArrowRight" && $nextBtn) {
    this.setAttribute("tabindex", -1);
    $nextBtn.setAttribute("tabindex", 0);
    $nextBtn.focus();
  } else if (e.key === "ArrowLeft" && $previousBtn) {
    this.setAttribute("tabindex", -1);
    $previousBtn.setAttribute("tabindex", 0);
    $previousBtn.focus();
  } else if (e.key === "Tab") {
    this.setAttribute("tabindex", -1);
    $lastActiveTabBtn.setAttribute("tabindex", 0);
  }
});

/**
 * @license MIT
 * @author Ayan <ayanliaqat48@gmail.com>
 * @copyright Ayan 2024
 */

"use strict";

const /** {NodeElement} */ $HTML = document.documentElement;
const /** {Boolean} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

let /** {Boolean} */ isPressed = false;

function changeTheme() {
  isPressed = !isPressed;
  this.setAttribute("aria-pressed", isPressed);
  $HTML.setAttribute(
    "data-theme",
    $HTML.dataset.theme === "light" ? "dark" : "light"
  );
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

window.addEventListener("load", function () {
  const /** {NodeElement} */ $themeBtn =
      document.querySelector("[data-theme-btn]");

  $themeBtn.addEventListener("click", changeTheme);
});

/**
 * @license MIT
 * @author Ayan <ayanliaqat48@gmail.com>
 * @copyright Ayan 2024
 */

"use strict";

/**
 * Add Event on multiple Elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event Type String
 * @param {Function} callback Callback function
 */

window.addEventOnElements = function ($elements, eventType, callback) {
  for (const $element of $elements) {
    $element.addEventListener(eventType, callback);
  }
};

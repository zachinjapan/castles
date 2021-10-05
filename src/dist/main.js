/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
  /******/
  var __webpack_modules__ = ({

    /***/
    "./src/js/index.js":
      /*!*************************!*\
        !*** ./src/js/index.js ***!
        \*************************/
      /***/
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _startup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startup.js */ \"./src/js/startup.js\");\n/* harmony import */ var _startup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_startup_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://castles/./src/js/index.js?");

        /***/
      }),

    /***/
    "./src/js/startup.js":
      /*!***************************!*\
        !*** ./src/js/startup.js ***!
        \***************************/
      /***/
      (() => {

        eval("$(document).ready(function () {\n    // Initialize Tooltip\n    $('[data-toggle=\"tooltip\"]').tooltip();\n\n    // Add smooth scrolling to all links in navbar + footer link\n    $(\".navbar a, footer a[href='#myPage']\").on('click', function (event) {\n\n        // Make sure this.hash has a value before overriding default behavior\n        if (this.hash !== \"\") {\n\n            // Prevent default anchor click behavior\n            event.preventDefault();\n\n            // Store hash\n            var hash = this.hash;\n\n            // Using jQuery's animate() method to add smooth page scroll\n            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area\n            $('html, body').animate({\n                scrollTop: $(hash).offset().top\n            }, 900, function () {\n\n                // Add hash (#) to URL when done scrolling (default click behavior)\n                window.location.hash = hash;\n            });\n        } // End if\n    });\n})\n\n//# sourceURL=webpack://castles/./src/js/startup.js?");

        /***/
      })

    /******/
  });
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = (module) => {
      /******/
      var getter = module && module.__esModule ?
        /******/
        () => (module['default']) :
        /******/
        () => (module);
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = (exports) => {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = __webpack_require__("./src/js/index.js");
  /******/
  /******/
})();
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/valid */ \"./modules/valid.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 february 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  // const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  // const closeBtn = menu.querySelector(\".close-btn\");\r\n  // const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  console.log(menu);\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n  const toggleMenu = (e) => {\r\n    if (menu.classList.contains(\"active-menu\")) {\r\n      if (!e.target.closest(\"menu\")) {\r\n        handleMenu();\r\n      } else if (e.target.closest(\"menu\") && e.target.closest(\"ul>li>a\")) {\r\n        handleMenu();\r\n      } else if (e.target.classList.contains(\"close-btn\")) {\r\n        e.preventDefault();\r\n        handleMenu();\r\n      }\r\n    } else if (e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    }\r\n  };\r\n  document.body.addEventListener(\"click\", toggleMenu);\r\n\r\n  // menuItems.forEach((menuItem) =>\r\n  //   menuItem.addEventListener(\"click\", handleMenu)\r\n  // );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const modale = document.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  let idInterval;\r\n  let count = 0;\r\n  const modaleAnimate = () => {\r\n    count++;\r\n    idInterval = requestAnimationFrame(modaleAnimate);\r\n    modale.style.left = count * 2 + \"%\";\r\n\r\n    if (parseFloat(modale.style.left) > 36) {\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n  };\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      let width = document.documentElement.clientWidth;\r\n      modal.style.display = \"block\";\r\n      if (width > 768) {\r\n        modaleAnimate();\r\n      } else {\r\n        modale.style.left = \"20%\";\r\n      }\r\n    });\r\n  });\r\n\r\n  //  e.preventDefault();\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      //e.preventDefault();\r\n      modal.style.display = \"none\";\r\n      count = 0;\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    //let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  let setIn = 0;\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    const addZero = (number) => {\r\n      return String(number).length === 1 ? `0${number}` : number;\r\n    };\r\n\r\n    timerHours.textContent = addZero(getTime.hours);\r\n    timerMinutes.textContent = addZero(getTime.minutes);\r\n    timerSeconds.textContent = addZero(getTime.seconds);\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(setIn);\r\n      timerSeconds.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerHours.textContent = \"00\";\r\n    }\r\n  };\r\n  updateClock();\r\n  setIn = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/valid.js":
/*!**************************!*\
  !*** ./modules/valid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n  const text = document.querySelectorAll(\".calc-block input[type=text]\");\r\n\r\n  text.forEach((elem) => {\r\n    elem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  });\r\n\r\n  const formName = document.querySelectorAll(\".form-name\");\r\n  const tel = document.querySelectorAll(\"input[type=tel]\");\r\n  const email = document.querySelectorAll(\"input[type=email]\");\r\n  const placeholder = document.getElementById(\"form2-message\");\r\n  const topName = document.getElementById(\"form2-name\");\r\n\r\n  const validText = function (param) {\r\n    param.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/, \"\");\r\n    });\r\n  };\r\n\r\n  const edit = function (param) {\r\n    param.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value.replace(/[-]+/g, \"-\");\r\n      e.target.value = e.target.value.replace(/[ ]+/g, \" \");\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я, ,-]/g, \"\");\r\n      e.target.value = e.target.value.replace(/^[ ,-]+/, \"\");\r\n      e.target.value = e.target.value.replace(/[ ,-]+$/, \"\");\r\n      e.target.value = e.target.value.replace(/^[а-я]/, (n) => n.toUpperCase());\r\n    });\r\n  };\r\n\r\n  edit(placeholder);\r\n\r\n  formName.forEach((elem) => {\r\n    validText(elem);\r\n    edit(elem);\r\n  });\r\n  validText(placeholder);\r\n  validText(topName);\r\n  edit(topName);\r\n  email.forEach((elem) => {\r\n    elem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(\r\n        /[^a-zA-Z,\\d,@,-,_,.,!,~,*,']/,\r\n        \"\"\r\n      );\r\n    });\r\n  });\r\n\r\n  tel.forEach((elem) => {\r\n    elem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d,(,),-]/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\r\n\n\n//# sourceURL=webpack:///./modules/valid.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
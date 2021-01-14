/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app/index.js":
/*!*****************************!*\
  !*** ./src/js/app/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/Radio */ "./src/js/services/Radio.js");
/* harmony import */ var _components_Topnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Topnav */ "./src/js/components/Topnav.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal */ "./src/js/components/Modal.js");



const App = {
  main: function () {
    document.addEventListener('click', e => {
      if (!e.target.dataset.event) return;
      let dataset = Object.assign({}, e.target.dataset);
      _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].publish(dataset.event, {
        e: e,
        dataset: dataset
      });
    });
    _components_Topnav__WEBPACK_IMPORTED_MODULE_1__["default"].main();
    _components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"].main();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/js/components/Modal.js":
/*!************************************!*\
  !*** ./src/js/components/Modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/Radio */ "./src/js/services/Radio.js");

const Modal = {
  main: function () {
    const modalsById = {};
    const modals = document.querySelectorAll('.modal');

    if (!modals) {
      console.warn('There is no modals. Exit.');
      return;
    }

    modals.forEach(modal => {
      let id = modal.getAttribute('id');

      if (!id) {
        console.warn('Modal ID is required');
        return;
      }

      modalsById[id] = modal;
    });
    _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('modal:open', context => {
      if (modalsById[context.dataset.target]) {
        modalsById[context.dataset.target].classList.add('is--active');
      }
    });
    _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('modal:close', context => {
      if (modalsById[context.dataset.target]) {
        modalsById[context.dataset.target].classList.remove('is--active');
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/js/components/Topnav.js":
/*!*************************************!*\
  !*** ./src/js/components/Topnav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/Radio */ "./src/js/services/Radio.js");

const Topnav = {
  main: function () {
    const topnav = document.querySelector('.topnav');
    const content = document.querySelector('.topnav__content');

    if (!content) {
      console.warn('There is no topnav content');
      return;
    }

    _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('topnav:toggle', () => content.classList.toggle('is--active'));
    _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('topnav:close', () => content.classList.remove('is--active'));
    _services_Radio__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('topnav:open', () => content.classList.add('is--active')); // close when click outside of topnav in mobile

    topnav.addEventListener('click', e => {
      if (e.target === content && e.target.classList.contains('is--active')) {
        content.classList.remove('is--active');
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Topnav);

/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app */ "./src/js/app/index.js");

_app__WEBPACK_IMPORTED_MODULE_0__["default"].main();

/***/ }),

/***/ "./src/js/services/Radio.js":
/*!**********************************!*\
  !*** ./src/js/services/Radio.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/types */ "./src/js/utils/types.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  topics: {},
  tokenID: 0,
  subscribe: function (topic, callback) {
    if (!_utils_types__WEBPACK_IMPORTED_MODULE_0__["default"].is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if (!_utils_types__WEBPACK_IMPORTED_MODULE_0__["default"].is(callback).function()) {
      console.warn('callback should be a function');
      return;
    }

    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    const token = this.tokenID++;
    this.topics[topic].push({
      token: token,
      callback: callback
    });
    return token;
  },
  publish: function (topic, context = {}) {
    if (!_utils_types__WEBPACK_IMPORTED_MODULE_0__["default"].is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if (!this.topics[topic]) {
      console.warn(`there is no subscriber to the topic ${topic}`);
      return;
    }

    this.topics[topic].forEach(callback => {
      callback.callback(context);
    });
  },
  unsubscribe: function (topic, token) {
    if (!_utils_types__WEBPACK_IMPORTED_MODULE_0__["default"].is(topic).string()) {
      console.warn('topic must be a string');
      return;
    }

    if (!_utils_types__WEBPACK_IMPORTED_MODULE_0__["default"].is(token).number()) {
      console.warn('token must be a number');
      return;
    }

    if (!this.topics[topic]) {
      console.warn(`topic ${topic} does not exists`);
      return;
    }

    this.topics[topic].forEach(callback => {
      if (callback.token === token) {
        this.topics[topic].splice(this.tokenID - 1, 1);
      }
    });
  },
  restore: function () {
    this.topics = {};
    this.tokenID = 0;
  }
});

/***/ }),

/***/ "./src/js/utils/types.js":
/*!*******************************!*\
  !*** ./src/js/utils/types.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  _type: null,
  is: function (el) {
    this._type = el.constructor.name.toString();
    return this;
  },
  string: function () {
    return this._type === 'String';
  },
  number: function () {
    return this._type === 'Number';
  },
  array: function () {
    return this._type === 'Array';
  },
  object: function () {
    return this._type === 'Object';
  },
  function: function () {
    return this._type === 'Function';
  }
});

/***/ })

/******/ });
//# sourceMappingURL=core.bundle.js.map
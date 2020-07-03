(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 5vw;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-container {\n  position: absolute;\n  background-color: red;\n  height: 200px;\n  width: 960px;\n  right: 0px;\n  -webkit-clip-path: polygon(960px 0px,960px 132px,900px 133px,788px 60px,786px 0px);\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Screens_DetailPage_DetailPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Screens/DetailPage/DetailPage */ "./src/Screens/DetailPage/DetailPage.js");
/* harmony import */ var _Screens_Pokedex_Pokedex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Screens/Pokedex/Pokedex */ "./src/Screens/Pokedex/Pokedex.js");

var _jsxFileName = "/Users/adamrogersdev/Documents/Projects/reactmon/src/App.js";

function _templateObject3() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  background-color: red;\n  height: 200px;\n  width: 200px;\n  left: 0px;\n  bottom: 0px;\n  -webkit-clip-path: polygon(0px 200px,200px 200px,200px 150px,50px 0px,0px 0px);\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  background-color: red;\n  height: 200px;\n  width: 200px;\n  right: 0px;\n  -webkit-clip-path: polygon(0px 50px,150px 200px,200px 200px,200px 0px,0px 0px);\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  background-color: #282B34;\n  flex: 1;\n  display: flex;\n  min-height: 100vh;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
const TopRight = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
const BottomLeft = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());

class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopRight, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomLeft, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      exact: true,
      component: _Screens_Pokedex_Pokedex__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/pokemon/:pokeID",
      component: _Screens_DetailPage_DetailPage__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/CommonComponents/Pokecard.js":
/*!******************************************!*\
  !*** ./src/CommonComponents/Pokecard.js ***!
  \******************************************/
/*! exports provided: Pokecard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokecard", function() { return Pokecard; });
/* harmony import */ var _Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/adamrogersdev/Documents/Projects/reactmon/src/CommonComponents/Pokecard.js";

function _templateObject6() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 400;\n  border-style: solid;\n  border-width: 0.5px;\n  border-radius: 5px;\n  width: auto;\n  display: inline;\n  margin: auto;\n  padding: 5px;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 50%;\n  width: auto;\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 700;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 25vh;\n  width: auto;\n  background-color: #f7f7f7;\n  border-radius: 5px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const Pokename = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject2());
const Pokeid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3());
const Pokeimage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject4());
const Poketype = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject5());
const PokeTypes = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());

const Pokecard = ({
  pokemon
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pokename, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, String(pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pokeid, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "#", pokemon.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pokeimage, {
  src: pokemon.sprites.front_default,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PokeTypes, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, pokemon.types.map(type => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poketype, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, type.type.name);
})));



/***/ }),

/***/ "./src/CommonComponents/index.js":
/*!***************************************!*\
  !*** ./src/CommonComponents/index.js ***!
  \***************************************/
/*! exports provided: Pokecard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pokecard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pokecard */ "./src/CommonComponents/Pokecard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pokecard", function() { return _Pokecard__WEBPACK_IMPORTED_MODULE_0__["Pokecard"]; });



/***/ }),

/***/ "./src/Screens/DetailPage/DetailPage.js":
/*!**********************************************!*\
  !*** ./src/Screens/DetailPage/DetailPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/Screens/DetailPage/styles.js");
var _jsxFileName = "/Users/adamrogersdev/Documents/Projects/reactmon/src/Screens/DetailPage/DetailPage.js";




class DetailPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      selectedPokemon: {}
    };
  }

  async componentWillMount() {
    const pokeID = this.props.match.params.pokeID;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://pokeapi.co/api/v2/pokemon/".concat(pokeID, "/"));
    await this.setState({
      selectedPokemon: response.data,
      loaded: true
    });
  }

  render() {
    const _this$state = this.state,
          selectedPokemon = _this$state.selectedPokemon,
          loaded = _this$state.loaded;
    console.log(selectedPokemon.sprites); // const { sprites: { front_default }} = this.state.selectedPokemon;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["DetailCard"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["PokeImg"], {
      src: selectedPokemon.sprites.front_default,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailPage);

/***/ }),

/***/ "./src/Screens/DetailPage/styles.js":
/*!******************************************!*\
  !*** ./src/Screens/DetailPage/styles.js ***!
  \******************************************/
/*! exports provided: Wrapper, Container, PokeImg, DetailCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeImg", function() { return PokeImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCard", function() { return DetailCard; });
/* harmony import */ var _Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 10px;\n  flex-direction: row;\n  height: 70vh;\n  width: 70vw;\n  margin: auto;\n  margin-top: 1vh;\n  overflow: scroll;\n  padding: 20px;\n  border-radius: 20px;\n  background-color: #FFFFFF;\n  \n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 15vw;\n  width: 15vw;\n  border-style: solid;\n  border-width: 1px;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center; \n  flex: 1;\n  display: flex;\n  min-height: 100vh;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: auto;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
const PokeImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
const DetailCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./src/Screens/Pokedex/Pokedex.js":
/*!****************************************!*\
  !*** ./src/Screens/Pokedex/Pokedex.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommonComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CommonComponents */ "./src/CommonComponents/index.js");
/* harmony import */ var _pokeball_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pokeball.png */ "./src/pokeball.png");
/* harmony import */ var _pokeball_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pokeball_png__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/adamrogersdev/Documents/Projects/reactmon/src/Screens/Pokedex/Pokedex.js";

function _templateObject5() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 1;\n    display: flex;\n    min-height: 100vh;\n  "]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border-radius: 5px;\n    width: 20vw;\n  "]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    animation: App-logo-spin infinite 2s linear;\n    width: 5vw;\n    margin-left: -2.5vw;\n    pointer-events: none;\n    position: absolute;\n    top: 45vh;\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    grid-template-rows: auto;\n    grid-row-gap: 10px;\n    grid-column-gap: 10px;\n    flex-direction: row;\n    height: 70vh;\n    width: 70vw;\n    margin: auto;\n    margin-top: 1vh;\n    border-width: 5px;\n    border-style: solid;\n    overflow: scroll;\n    padding: 20px;\n    border-radius: 20px;\n    border-color: #8EEBEC;\n  "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_adamrogersdev_Documents_Projects_reactmon_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: auto;\n  "]);

  _templateObject = function () {
    return data;
  };

  return data;
}







const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
const PokedexContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject3());
const Pokesearch = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input(_templateObject4());
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());

class Pokedex extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    this.updateSearch = evt => {
      this.setState({
        search: evt.target.value
      });
    };

    this.updateCategory = evt => {
      this.setState({
        category: evt.target.value
      });
    };

    this.loadPokemon = async () => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      await response.data.results.map(item => {
        this.loadIndvPokemon(item.url);
      });
      this.setState({
        loading: false
      });
    };

    this.loadIndvPokemon = url => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(response => {
        this.setState({
          pokemon: [...this.state.pokemon, response.data]
        });
      });
    };

    this.componentDidMount = () => {
      this.loadPokemon();
    };

    this.state = {
      loading: true,
      pokemon: [],
      search: '',
      category: 'name'
    };
  }

  render() {
    const _this$state = this.state,
          search = _this$state.search,
          pokemon = _this$state.pokemon,
          loading = _this$state.loading,
          category = _this$state.category;
    console.log(this.state.pokemon[0]);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, pokemon.length !== 151 && loading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LogoImage, {
      src: _pokeball_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Pokesearch, {
      onChange: this.updateSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PokedexContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, search ? lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(pokemon, function (item) {
      return String(item[category]).includes(search);
    }).map(item => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CommonComponents__WEBPACK_IMPORTED_MODULE_5__["Pokecard"], {
      pokemon: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })) : lodash__WEBPACK_IMPORTED_MODULE_2___default.a.sortBy(pokemon, function (item) {
      return item.id;
    }).map(item => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CommonComponents__WEBPACK_IMPORTED_MODULE_5__["Pokecard"], {
      pokemon: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pokedex);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/adamrogersdev/Documents/Projects/reactmon/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pokeball.png":
/*!**************************!*\
  !*** ./src/pokeball.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pokeball.b9ea9d22.png";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/adamrogersdev/Documents/Projects/reactmon/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/adamrogersdev/Documents/Projects/reactmon/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map
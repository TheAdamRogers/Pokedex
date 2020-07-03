webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.720e3fc8b1525a0ce7d9.hot-update.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ours/details/[villageName]",{

/***/ "./components/Ours/Our/Detailslist.js":
/*!********************************************!*\
  !*** ./components/Ours/Our/Detailslist.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Our_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Our.module.css */ \"./components/Ours/Our/Our.module.css\");\n/* harmony import */ var _Our_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Our_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reservation */ \"./components/Ours/Our/Reservation.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detailslist = function(props) {\n    _s();\n    // console.log(\"똑똑\", props);\n    var searchParam = new URLSearchParams(location.search);\n    console.log(searchParam);\n    // useRouter\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detail = function() {\n        router.push(\"/ours/details\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Our_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexboxright),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Our_module_css__WEBPACK_IMPORTED_MODULE_4___default().info),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"\\uCCB4\\uD5D8\\uC9C0 \",\n                        props.address\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslist.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslist.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Our_module_css__WEBPACK_IMPORTED_MODULE_4___default().rsv_btn),\n                onClick: _Reservation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: \"\\uC608\\uC57D\\uD558\\uAE30\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslist.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslist.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detailslist, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Detailslist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailslist);\nvar _c;\n$RefreshReg$(_c, \"Detailslist\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDQTtBQUNGO0FBQ0U7O0FBRXZDLElBQU1LLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzlCO0lBQ0ksSUFBRUMsV0FBVyxHQUFHLElBQUlDLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7SUFDeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQztJQUV6QixZQUFZO0lBQ1osSUFBTU0sTUFBTSxHQUFHWCxzREFBUyxFQUFFO0lBQzFCLElBQU1ZLE1BQU0sR0FBRyxXQUFNO1FBQ3BCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDN0I7SUFFQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVkLHFFQUFtQjs7MEJBQy9CLDhEQUFDYSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVkLDZEQUFXOzBCQUN6Qiw0RUFBQ2lCLElBQUU7O3dCQUFDLHFCQUFJO3dCQUFPZCxLQUFLLENBQUNlLE9BQU87Ozs7Ozt5QkFBTTs7Ozs7cUJBQ3hCOzBCQUNaLDhEQUFDQyxRQUFNO2dCQUFDTCxTQUFTLEVBQUVkLGdFQUFjO2dCQUFFcUIsT0FBTyxFQUFHcEIsb0RBQVc7MEJBQUUsMEJBQUk7Ozs7O3FCQUFTOzs7Ozs7YUFDakUsQ0FDWDtDQUNGO0dBbkJLQyxXQUFXOztRQU1ESCxrREFBUzs7O0FBTm5CRyxLQUFBQSxXQUFXO0FBcUJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0LmpzPzU4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vT3VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBSZXNlcnZhdGlvbiBmcm9tICcuL1Jlc2VydmF0aW9uJ1xyXG5cclxuY29uc3QgRGV0YWlsc2xpc3QgPSAocHJvcHMpID0+IHtcclxuIC8vIGNvbnNvbGUubG9nKFwi65iR65iRXCIsIHByb3BzKTtcclxuIGNvbnN0IHNlYXJjaFBhcmFtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gY29uc29sZS5sb2coc2VhcmNoUGFyYW0pO1xyXG4gXHJcbiAvLyB1c2VSb3V0ZXJcclxuIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gY29uc3QgZGV0YWlsID0gKCkgPT4ge1xyXG4gIHJvdXRlci5wdXNoKCcvb3Vycy9kZXRhaWxzJylcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Ym94cmlnaHR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICA8aDM+7LK07ZeY7KeAIHtwcm9wcy5hZGRyZXNzfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yc3ZfYnRufSBvbkNsaWNrID17UmVzZXJ2YXRpb259PuyYiOyVve2VmOq4sDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc2xpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIlJlc2VydmF0aW9uIiwiRGV0YWlsc2xpc3QiLCJwcm9wcyIsInNlYXJjaFBhcmFtIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiZGV0YWlsIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImZsZXhib3hyaWdodCIsImluZm8iLCJoMyIsImFkZHJlc3MiLCJidXR0b24iLCJyc3ZfYnRuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Ours/Our/Detailslist.js\n");

/***/ })

});
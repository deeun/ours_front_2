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

/***/ "./components/Ours/Our/Detailslists.js":
/*!*********************************************!*\
  !*** ./components/Ours/Our/Detailslists.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Ours/Our/Detailslists.module.css */ \"./components/Ours/Our/Detailslists.module.css\");\n/* harmony import */ var _Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Our_Reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Our/Reservation */ \"./components/Ours/Our/Reservation.js\");\n/* harmony import */ var _Kakaomap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Kakaomap */ \"./components/Ours/Our/Kakaomap.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar place = {};\nvar Detailslists = function(props) {\n    _s();\n    var detailslists = props.detailslists.map(function(detailslist) {\n        if (props.realName === detailslist.villageName) {\n            place = detailslist;\n        }\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var Reservation = function() {\n        console.log(\"Reservation\");\n        router.push(\"/ours/reservation\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5___default().area1),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"\\uCCB4\\uD5D8\\uBA85\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: place.villageName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this),\n                        place.address,\n                        place.managerPhone,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, _this),\n                        place.experienceName,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                            lineNumber: 27,\n                            columnNumber: 35\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_Ours_Our_Detailslists_module_css__WEBPACK_IMPORTED_MODULE_5___default().rsv_btn),\n                            onClick: reservation,\n                            children: \"\\uC608\\uC57D\\uD558\\uAE30\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Kakaomap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    latitude: place.latitude,\n                    longitude: place.longitude\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Detailslists, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detailslists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailslists);\nvar _c;\n$RefreshReg$(_c, \"Detailslists\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUNSO0FBQ21CO0FBQ2Y7QUFDVjs7QUFFbEMsSUFBSU8sS0FBSyxHQUFHLEVBQUU7QUFDZCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUM1QixJQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLFdBQVcsRUFBSTtRQUN2RCxJQUFJSCxLQUFLLENBQUNJLFFBQVEsS0FBS0QsV0FBVyxDQUFDRSxXQUFXLEVBQUM7WUFDM0NQLEtBQUssR0FBR0ssV0FBVyxDQUFDO1NBQ3ZCO0tBQ0osQ0FBQztJQUNGLElBQU1HLE1BQU0sR0FBR2Qsc0RBQVMsRUFBRTtJQUMxQixJQUFNSSxXQUFXLEdBQUcsV0FBTTtRQUN4QlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0JGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDO0lBQ0QscUJBQ0k7a0JBQ0EsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFaEIsK0VBQVc7OzhCQUN2Qiw4REFBQ2UsS0FBRztvQkFBQ0MsU0FBUyxFQUFFaEIsZ0ZBQVk7O3NDQUM1Qiw4REFBQ21CLElBQUU7c0NBQUMsb0JBQUc7Ozs7O2lDQUFXO3NDQUNaLDhEQUFMQyxJQUFFO3NDQUFFakIsS0FBSyxDQUFDTyxXQUFXOzs7OztpQ0FBTTt3QkFDM0JQLEtBQUssQ0FBQ2tCLE9BQU87d0JBQ2JsQixLQUFLLENBQUNtQixZQUFZO3NDQUFDLDhEQUFDQyxJQUFFOzs7O2lDQUFFO3dCQUN4QnBCLEtBQUssQ0FBQ3FCLGNBQWM7c0NBQUMsOERBQUNELElBQUU7Ozs7aUNBQUU7c0NBQzNCLDhEQUFDRSxRQUFNOzRCQUFDVCxTQUFTLEVBQUVoQixrRkFBYzs0QkFBRTJCLE9BQU8sRUFBR0MsV0FBVztzQ0FBRSwwQkFBSTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDakU7OEJBQ04sOERBQUMxQixpREFBUTtvQkFBQzJCLFFBQVEsRUFBRTFCLEtBQUssQ0FBQzBCLFFBQVE7b0JBQUVDLFNBQVMsRUFBRTNCLEtBQUssQ0FBQzJCLFNBQVM7Ozs7O3lCQUFHOzs7Ozs7aUJBQy9EO3FCQUNILENBQ0Q7Q0FDTDtHQTFCQzFCLFlBQVk7O1FBTUNQLGtEQUFTOzs7QUFOdEJPLEtBQUFBLFlBQVk7QUEyQmxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdXJzL091ci9EZXRhaWxzbGlzdHMuanM/MmFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL091cnMvT3VyL0RldGFpbHNsaXN0cy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgUmVzZXJ2YXRpb24gZnJvbSAnLi4vT3VyL1Jlc2VydmF0aW9uJ1xyXG5pbXBvcnQgS2FrYW9tYXAgZnJvbSAnLi9LYWthb21hcCc7XHJcblxyXG5sZXQgcGxhY2UgPSB7fTtcclxuY29uc3QgRGV0YWlsc2xpc3RzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkZXRhaWxzbGlzdHMgPSBwcm9wcy5kZXRhaWxzbGlzdHMubWFwKGRldGFpbHNsaXN0ID0+IHtcclxuICAgICAgICBpZiAocHJvcHMucmVhbE5hbWUgPT09IGRldGFpbHNsaXN0LnZpbGxhZ2VOYW1lKXtcclxuICAgICAgICAgICAgcGxhY2UgPSBkZXRhaWxzbGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgUmVzZXJ2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNlcnZhdGlvbicpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL291cnMvcmVzZXJ2YXRpb24nKSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcmVhMX0+XHJcbiAgICAgICAgICAgIDxoMz7ssrTtl5jrqoU8L2gzPlxyXG4gICAgICAgICAgICA8aDI+e3BsYWNlLnZpbGxhZ2VOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIHtwbGFjZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICB7cGxhY2UubWFuYWdlclBob25lfTxici8+XHJcbiAgICAgICAgICAgIHtwbGFjZS5leHBlcmllbmNlTmFtZX08YnIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJzdl9idG59IG9uQ2xpY2sgPXtyZXNlcnZhdGlvbn0+7JiI7JW97ZWY6riwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8S2FrYW9tYXAgbGF0aXR1ZGU9e3BsYWNlLmxhdGl0dWRlfSBsb25naXR1ZGU9e3BsYWNlLmxvbmdpdHVkZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzbGlzdHM7XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlJlc2VydmF0aW9uIiwiS2FrYW9tYXAiLCJwbGFjZSIsIkRldGFpbHNsaXN0cyIsInByb3BzIiwiZGV0YWlsc2xpc3RzIiwibWFwIiwiZGV0YWlsc2xpc3QiLCJyZWFsTmFtZSIsInZpbGxhZ2VOYW1lIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiYXJlYTEiLCJoMyIsImgyIiwiYWRkcmVzcyIsIm1hbmFnZXJQaG9uZSIsImJyIiwiZXhwZXJpZW5jZU5hbWUiLCJidXR0b24iLCJyc3ZfYnRuIiwib25DbGljayIsInJlc2VydmF0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Ours/Our/Detailslists.js\n");

/***/ })

});
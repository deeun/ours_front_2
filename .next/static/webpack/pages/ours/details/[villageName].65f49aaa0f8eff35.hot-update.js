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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Detailslist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detailslist */ \"./components/Ours/Our/Detailslist.js\");\nvar _this = undefined;\n\n\n\nvar Detailslists = function(props) {\n    var _this1 = _this;\n    console.log(props.realName);\n    var detailslists = props.detailslists.forEach(function(detailslist) {\n        if (props.realName === detailslist.villageName) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Detailslist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                detail: props,\n                programListId: detailslist.programListId,\n                villageName: detailslist.villageName,\n                stateName: detailslist.stateName,\n                cityName: detailslist.cityName,\n                experience: detailslist.experience,\n                experienceName: detailslist.experienceName,\n                address: detailslist.address,\n                manager: detailslist.manager,\n                managerPhone: detailslist.managerPhone,\n                latitude: detailslist.latitude,\n                longitude: detailslist.longitude\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this1);\n        }\n    });\n    var detailslists2 = props.detailslists.map(function(detailslist) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Detailslist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            detail: props,\n            programListId: detailslist.programListId,\n            villageName: detailslist.villageName,\n            stateName: detailslist.stateName,\n            cityName: detailslist.cityName,\n            experience: detailslist.experience,\n            experienceName: detailslist.experienceName,\n            address: detailslist.address,\n            manager: detailslist.manager,\n            managerPhone: detailslist.managerPhone,\n            latitude: detailslist.latitude,\n            longitude: detailslist.longitude\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: detailslists\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n        lineNumber: 38,\n        columnNumber: 13\n    }, _this);\n};\n_c = Detailslists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailslists);\nvar _c;\n$RefreshReg$(_c, \"Detailslists\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDRDtBQUV2QyxJQUFNRyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDNUIsSUFBTUMsWUFBWSxHQUFHSixLQUFLLENBQUNJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxTQUFBQSxXQUFXLEVBQUk7UUFDM0QsSUFBSU4sS0FBSyxDQUFDRyxRQUFRLEtBQUtHLFdBQVcsQ0FBQ0MsV0FBVyxFQUFDOzBCQUMvQyw4REFBQ1Qsb0RBQVc7Z0JBQUNVLE1BQU0sRUFBRVIsS0FBSztnQkFDdEJTLGFBQWEsRUFBSUgsV0FBVyxDQUFDRyxhQUFhO2dCQUMxQ0YsV0FBVyxFQUFJRCxXQUFXLENBQUNDLFdBQVc7Z0JBQ3RDRyxTQUFTLEVBQUVKLFdBQVcsQ0FBQ0ksU0FBUztnQkFDaENDLFFBQVEsRUFBRUwsV0FBVyxDQUFDSyxRQUFRO2dCQUM5QkMsVUFBVSxFQUFFTixXQUFXLENBQUNNLFVBQVU7Z0JBQ2xDQyxjQUFjLEVBQUVQLFdBQVcsQ0FBQ08sY0FBYztnQkFDMUNDLE9BQU8sRUFBRVIsV0FBVyxDQUFDUSxPQUFPO2dCQUM1QkMsT0FBTyxFQUFFVCxXQUFXLENBQUNTLE9BQU87Z0JBQzVCQyxZQUFZLEVBQUVWLFdBQVcsQ0FBQ1UsWUFBWTtnQkFDdENDLFFBQVEsRUFBRVgsV0FBVyxDQUFDVyxRQUFRO2dCQUM5QkMsU0FBUyxFQUFFWixXQUFXLENBQUNZLFNBQVM7Ozs7O3NCQUNsQztTQUFDO0tBQ04sQ0FBQztJQUNGLElBQU1DLGFBQWEsR0FBR25CLEtBQUssQ0FBQ0ksWUFBWSxDQUFDZ0IsR0FBRyxDQUFFZCxTQUFBQSxXQUFXOzZCQUNyRCw4REFBQ1Isb0RBQVc7WUFBQ1UsTUFBTSxFQUFFUixLQUFLO1lBQ3RCUyxhQUFhLEVBQUlILFdBQVcsQ0FBQ0csYUFBYTtZQUMxQ0YsV0FBVyxFQUFJRCxXQUFXLENBQUNDLFdBQVc7WUFDdENHLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUFTO1lBQ2hDQyxRQUFRLEVBQUVMLFdBQVcsQ0FBQ0ssUUFBUTtZQUM5QkMsVUFBVSxFQUFFTixXQUFXLENBQUNNLFVBQVU7WUFDbENDLGNBQWMsRUFBRVAsV0FBVyxDQUFDTyxjQUFjO1lBQzFDQyxPQUFPLEVBQUVSLFdBQVcsQ0FBQ1EsT0FBTztZQUM1QkMsT0FBTyxFQUFFVCxXQUFXLENBQUNTLE9BQU87WUFDNUJDLFlBQVksRUFBRVYsV0FBVyxDQUFDVSxZQUFZO1lBQ3RDQyxRQUFRLEVBQUVYLFdBQVcsQ0FBQ1csUUFBUTtZQUM5QkMsU0FBUyxFQUFFWixXQUFXLENBQUNZLFNBQVM7Ozs7O2tCQUNsQztLQUNMLENBQUM7SUFDRixxQkFDSSw4REFBQ0csS0FBRztrQkFDQ2pCLFlBQVk7Ozs7O2FBQ1gsQ0FDUjtDQUNMO0FBdENDTCxLQUFBQSxZQUFZO0FBdUNsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3Vycy9PdXIvRGV0YWlsc2xpc3RzLmpzPzJhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGV0YWlsc2xpc3QgZnJvbSAnLi9EZXRhaWxzbGlzdCdcclxuXHJcbmNvbnN0IERldGFpbHNsaXN0cyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnJlYWxOYW1lKTtcclxuICAgICAgICBjb25zdCBkZXRhaWxzbGlzdHMgPSBwcm9wcy5kZXRhaWxzbGlzdHMuZm9yRWFjaChkZXRhaWxzbGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWFsTmFtZSA9PT0gZGV0YWlsc2xpc3QudmlsbGFnZU5hbWUpe1xyXG4gICAgICAgICAgICA8RGV0YWlsc2xpc3QgZGV0YWlsPXtwcm9wc31cclxuICAgICAgICAgICAgICAgIHByb2dyYW1MaXN0SWQgPSB7ZGV0YWlsc2xpc3QucHJvZ3JhbUxpc3RJZH1cclxuICAgICAgICAgICAgICAgIHZpbGxhZ2VOYW1lID0ge2RldGFpbHNsaXN0LnZpbGxhZ2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgc3RhdGVOYW1lPXtkZXRhaWxzbGlzdC5zdGF0ZU5hbWV9IFxyXG4gICAgICAgICAgICAgICAgY2l0eU5hbWU9e2RldGFpbHNsaXN0LmNpdHlOYW1lfVxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZT17ZGV0YWlsc2xpc3QuZXhwZXJpZW5jZX1cclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VOYW1lPXtkZXRhaWxzbGlzdC5leHBlcmllbmNlTmFtZX1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e2RldGFpbHNsaXN0LmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyPXtkZXRhaWxzbGlzdC5tYW5hZ2VyfVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlclBob25lPXtkZXRhaWxzbGlzdC5tYW5hZ2VyUGhvbmV9XHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZT17ZGV0YWlsc2xpc3QubGF0aXR1ZGV9XHJcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU9e2RldGFpbHNsaXN0LmxvbmdpdHVkZX1cclxuICAgICAgICAgICAgLz59XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsc2xpc3RzMiA9IHByb3BzLmRldGFpbHNsaXN0cy5tYXAgKGRldGFpbHNsaXN0ID0+IChcclxuICAgICAgICAgICAgPERldGFpbHNsaXN0IGRldGFpbD17cHJvcHN9XHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtTGlzdElkID0ge2RldGFpbHNsaXN0LnByb2dyYW1MaXN0SWR9XHJcbiAgICAgICAgICAgICAgICB2aWxsYWdlTmFtZSA9IHtkZXRhaWxzbGlzdC52aWxsYWdlTmFtZX1cclxuICAgICAgICAgICAgICAgIHN0YXRlTmFtZT17ZGV0YWlsc2xpc3Quc3RhdGVOYW1lfSBcclxuICAgICAgICAgICAgICAgIGNpdHlOYW1lPXtkZXRhaWxzbGlzdC5jaXR5TmFtZX1cclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U9e2RldGFpbHNsaXN0LmV4cGVyaWVuY2V9XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlTmFtZT17ZGV0YWlsc2xpc3QuZXhwZXJpZW5jZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzPXtkZXRhaWxzbGlzdC5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlcj17ZGV0YWlsc2xpc3QubWFuYWdlcn1cclxuICAgICAgICAgICAgICAgIG1hbmFnZXJQaG9uZT17ZGV0YWlsc2xpc3QubWFuYWdlclBob25lfVxyXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU9e2RldGFpbHNsaXN0LmxhdGl0dWRlfVxyXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtkZXRhaWxzbGlzdC5sb25naXR1ZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzbGlzdHN9IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNsaXN0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRGV0YWlsc2xpc3QiLCJEZXRhaWxzbGlzdHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZWFsTmFtZSIsImRldGFpbHNsaXN0cyIsImZvckVhY2giLCJkZXRhaWxzbGlzdCIsInZpbGxhZ2VOYW1lIiwiZGV0YWlsIiwicHJvZ3JhbUxpc3RJZCIsInN0YXRlTmFtZSIsImNpdHlOYW1lIiwiZXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiYWRkcmVzcyIsIm1hbmFnZXIiLCJtYW5hZ2VyUGhvbmUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRldGFpbHNsaXN0czIiLCJtYXAiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Ours/Our/Detailslists.js\n");

/***/ })

});
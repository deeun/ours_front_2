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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Detailslist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detailslist */ \"./components/Ours/Our/Detailslist.js\");\nvar _this = undefined;\n\n\n\nvar Detailslists = function(props) {\n    var _this1 = _this;\n    var detailslistss = props.detailslists.forEach(function(detailslist) {\n        if (props.realName === detailslist.villageName) {\n            console.log(\"ddd\", props.realName);\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Detailslist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                detail: props,\n                programListId: detailslist.programListId,\n                villageName: detailslist.villageName,\n                stateName: detailslist.stateName,\n                cityName: detailslist.cityName,\n                experience: detailslist.experience,\n                experienceName: detailslist.experienceName,\n                address: detailslist.address,\n                manager: detailslist.manager,\n                managerPhone: detailslist.managerPhone,\n                latitude: detailslist.latitude,\n                longitude: detailslist.longitude\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this1);\n        }\n    });\n    // const detailslists2 = props.detailslists.map (detailslist => (\n    //     <Detailslist detail={props}\n    //         programListId = {detailslist.programListId}\n    //         villageName = {detailslist.villageName}\n    //         stateName={detailslist.stateName} \n    //         cityName={detailslist.cityName}\n    //         experience={detailslist.experience}\n    //         experienceName={detailslist.experienceName}\n    //         address={detailslist.address}\n    //         manager={detailslist.manager}\n    //         managerPhone={detailslist.managerPhone}\n    //         latitude={detailslist.latitude}\n    //         longitude={detailslist.longitude}\n    //     />\n    // ));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: detailslistss\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\Detailslists.js\",\n        lineNumber: 39,\n        columnNumber: 13\n    }, _this);\n};\n_c = Detailslists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailslists);\nvar _c;\n$RefreshReg$(_c, \"Detailslists\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0RldGFpbHNsaXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDRDtBQUV2QyxJQUFNRyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUV4QixJQUFNQyxhQUFhLEdBQUdELEtBQUssQ0FBQ0UsWUFBWSxDQUFDQyxPQUFPLENBQUNDLFNBQUFBLFdBQVcsRUFBSTtRQUM1RCxJQUFJSixLQUFLLENBQUNLLFFBQVEsS0FBS0QsV0FBVyxDQUFDRSxXQUFXLEVBQUM7WUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBQ1IsS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQzswQkFDdEMsOERBQUNQLG9EQUFXO2dCQUFDVyxNQUFNLEVBQUVULEtBQUs7Z0JBQ3RCVSxhQUFhLEVBQUlOLFdBQVcsQ0FBQ00sYUFBYTtnQkFDMUNKLFdBQVcsRUFBSUYsV0FBVyxDQUFDRSxXQUFXO2dCQUN0Q0ssU0FBUyxFQUFFUCxXQUFXLENBQUNPLFNBQVM7Z0JBQ2hDQyxRQUFRLEVBQUVSLFdBQVcsQ0FBQ1EsUUFBUTtnQkFDOUJDLFVBQVUsRUFBRVQsV0FBVyxDQUFDUyxVQUFVO2dCQUNsQ0MsY0FBYyxFQUFFVixXQUFXLENBQUNVLGNBQWM7Z0JBQzFDQyxPQUFPLEVBQUVYLFdBQVcsQ0FBQ1csT0FBTztnQkFDNUJDLE9BQU8sRUFBRVosV0FBVyxDQUFDWSxPQUFPO2dCQUM1QkMsWUFBWSxFQUFFYixXQUFXLENBQUNhLFlBQVk7Z0JBQ3RDQyxRQUFRLEVBQUVkLFdBQVcsQ0FBQ2MsUUFBUTtnQkFDOUJDLFNBQVMsRUFBRWYsV0FBVyxDQUFDZSxTQUFTOzs7OztzQkFDbEM7U0FBQztLQUNOLENBQUM7SUFDRixpRUFBaUU7SUFDakUsa0NBQWtDO0lBQ2xDLHNEQUFzRDtJQUN0RCxrREFBa0Q7SUFDbEQsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMsc0RBQXNEO0lBQ3RELHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsa0RBQWtEO0lBQ2xELDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFDNUMsU0FBUztJQUNULE1BQU07SUFDTixxQkFDSSw4REFBQ0MsS0FBRztrQkFDQ25CLGFBQWE7Ozs7O2FBQ1osQ0FDUjtDQUNMO0FBdkNDRixLQUFBQSxZQUFZO0FBd0NsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3Vycy9PdXIvRGV0YWlsc2xpc3RzLmpzPzJhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGV0YWlsc2xpc3QgZnJvbSAnLi9EZXRhaWxzbGlzdCdcclxuXHJcbmNvbnN0IERldGFpbHNsaXN0cyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRldGFpbHNsaXN0c3MgPSBwcm9wcy5kZXRhaWxzbGlzdHMuZm9yRWFjaChkZXRhaWxzbGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWFsTmFtZSA9PT0gZGV0YWlsc2xpc3QudmlsbGFnZU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZGRcIixwcm9wcy5yZWFsTmFtZSk7XHJcbiAgICAgICAgICAgIDxEZXRhaWxzbGlzdCBkZXRhaWw9e3Byb3BzfVxyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbUxpc3RJZCA9IHtkZXRhaWxzbGlzdC5wcm9ncmFtTGlzdElkfVxyXG4gICAgICAgICAgICAgICAgdmlsbGFnZU5hbWUgPSB7ZGV0YWlsc2xpc3QudmlsbGFnZU5hbWV9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZU5hbWU9e2RldGFpbHNsaXN0LnN0YXRlTmFtZX0gXHJcbiAgICAgICAgICAgICAgICBjaXR5TmFtZT17ZGV0YWlsc2xpc3QuY2l0eU5hbWV9XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlPXtkZXRhaWxzbGlzdC5leHBlcmllbmNlfVxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZU5hbWU9e2RldGFpbHNsaXN0LmV4cGVyaWVuY2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcz17ZGV0YWlsc2xpc3QuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG1hbmFnZXI9e2RldGFpbHNsaXN0Lm1hbmFnZXJ9XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyUGhvbmU9e2RldGFpbHNsaXN0Lm1hbmFnZXJQaG9uZX1cclxuICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtkZXRhaWxzbGlzdC5sYXRpdHVkZX1cclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17ZGV0YWlsc2xpc3QubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAvPn1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zdCBkZXRhaWxzbGlzdHMyID0gcHJvcHMuZGV0YWlsc2xpc3RzLm1hcCAoZGV0YWlsc2xpc3QgPT4gKFxyXG4gICAgICAgIC8vICAgICA8RGV0YWlsc2xpc3QgZGV0YWlsPXtwcm9wc31cclxuICAgICAgICAvLyAgICAgICAgIHByb2dyYW1MaXN0SWQgPSB7ZGV0YWlsc2xpc3QucHJvZ3JhbUxpc3RJZH1cclxuICAgICAgICAvLyAgICAgICAgIHZpbGxhZ2VOYW1lID0ge2RldGFpbHNsaXN0LnZpbGxhZ2VOYW1lfVxyXG4gICAgICAgIC8vICAgICAgICAgc3RhdGVOYW1lPXtkZXRhaWxzbGlzdC5zdGF0ZU5hbWV9IFxyXG4gICAgICAgIC8vICAgICAgICAgY2l0eU5hbWU9e2RldGFpbHNsaXN0LmNpdHlOYW1lfVxyXG4gICAgICAgIC8vICAgICAgICAgZXhwZXJpZW5jZT17ZGV0YWlsc2xpc3QuZXhwZXJpZW5jZX1cclxuICAgICAgICAvLyAgICAgICAgIGV4cGVyaWVuY2VOYW1lPXtkZXRhaWxzbGlzdC5leHBlcmllbmNlTmFtZX1cclxuICAgICAgICAvLyAgICAgICAgIGFkZHJlc3M9e2RldGFpbHNsaXN0LmFkZHJlc3N9XHJcbiAgICAgICAgLy8gICAgICAgICBtYW5hZ2VyPXtkZXRhaWxzbGlzdC5tYW5hZ2VyfVxyXG4gICAgICAgIC8vICAgICAgICAgbWFuYWdlclBob25lPXtkZXRhaWxzbGlzdC5tYW5hZ2VyUGhvbmV9XHJcbiAgICAgICAgLy8gICAgICAgICBsYXRpdHVkZT17ZGV0YWlsc2xpc3QubGF0aXR1ZGV9XHJcbiAgICAgICAgLy8gICAgICAgICBsb25naXR1ZGU9e2RldGFpbHNsaXN0LmxvbmdpdHVkZX1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyApKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHNsaXN0c3N9IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNsaXN0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRGV0YWlsc2xpc3QiLCJEZXRhaWxzbGlzdHMiLCJwcm9wcyIsImRldGFpbHNsaXN0c3MiLCJkZXRhaWxzbGlzdHMiLCJmb3JFYWNoIiwiZGV0YWlsc2xpc3QiLCJyZWFsTmFtZSIsInZpbGxhZ2VOYW1lIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInByb2dyYW1MaXN0SWQiLCJzdGF0ZU5hbWUiLCJjaXR5TmFtZSIsImV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImFkZHJlc3MiLCJtYW5hZ2VyIiwibWFuYWdlclBob25lIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Ours/Our/Detailslists.js\n");

/***/ })

});
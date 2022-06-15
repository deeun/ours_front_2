"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ours/searchResult",{

/***/ "./components/Ours/Our/App.js":
/*!************************************!*\
  !*** ./components/Ours/Our/App.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Information */ \"./components/Ours/Our/Information.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar App = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(App, Component1);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.call(this);\n        _defineProperty(_assertThisInitialized(_this), \"searchSpace\", function(event) {\n            var keyword = event.target.value;\n            _this.setState({\n                search: keyword\n            });\n        });\n        _this.state = {\n            search: null\n        };\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var items = _Information__WEBPACK_IMPORTED_MODULE_2__[\"default\"].filter(function(data) {\n                    if (_this.state.search == null) return data;\n                    else if (data.name.toLowerCase().includes(_this.state.search.toLowerCase()) || data.country.toLowerCase().includes(_this.state.search.toLowerCase())) {\n                        return data;\n                    }\n                }).map(function(data) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                style: {\n                                    position: \"relative\",\n                                    left: \"10vh\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: styleInfo,\n                                        children: data.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: styleInfo,\n                                        children: data.age\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: styleInfo,\n                                        children: data.country\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, _this);\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter item to be searched\",\n                            style: elementStyle,\n                            onChange: function(e) {\n                                return _this.searchSpace(e);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                            lineNumber: 42,\n                            columnNumber: 7\n                        }, this),\n                        items\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\App.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFFeEMsT0FBUyxpQkE2Q1I7Ozs7YUE3Q0tHLEdBQUc7OztpQ0FIVCxDQU1ZO1FBT1ZDLCtDQUFBQSxhQUFXLEVBQUMsU0FBQ0MsS0FBSyxFQUFHO1lBQ25CLElBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7WUFDaEMsTUFBS0MsUUFBUSxDQUFDO2dCQUFDQyxNQUFNLEVBQUNKLE9BQU87YUFBQyxDQUFDO1NBQ2hDO1FBUkMsTUFBS0ssS0FBSyxHQUFDO1lBQ1RELE1BQU0sRUFBQyxJQUFJO1NBQ1osQ0FBQzs7Ozs7WUFRSkUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUU7O2dCQUNOLElBQU1DLEtBQUssR0FBR1gsMkRBQWtCLENBQUMsU0FBQ2EsSUFBSSxFQUFHO29CQUN2QyxJQUFHLE1BQUtKLEtBQUssQ0FBQ0QsTUFBTSxJQUFJLElBQUksRUFDeEIsT0FBT0ssSUFBSTt5QkFDVixJQUFHQSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQyxNQUFLUCxLQUFLLENBQUNELE1BQU0sQ0FBQ08sV0FBVyxFQUFFLENBQUMsSUFBSUYsSUFBSSxDQUFDSSxPQUFPLENBQUNGLFdBQVcsRUFBRSxDQUFDQyxRQUFRLENBQUMsTUFBS1AsS0FBSyxDQUFDRCxNQUFNLENBQUNPLFdBQVcsRUFBRSxDQUFDLEVBQUM7d0JBQzlJLE9BQU9GLElBQUk7cUJBQ2Q7aUJBQ0YsQ0FBQyxDQUFDSyxHQUFHLENBQUNMLFNBQUFBLElBQUksRUFBRTtvQkFDWCxxQkFDQSw4REFBQ00sS0FBRztrQ0FDRiw0RUFBQ0MsSUFBRTtzQ0FDRCw0RUFBQ0MsSUFBRTtnQ0FBQ0MsS0FBSyxFQUFFO29DQUFDQyxRQUFRLEVBQUMsVUFBVTtvQ0FBQ0MsSUFBSSxFQUFDLE1BQU07aUNBQUM7O2tEQUMxQyw4REFBQ0MsTUFBSTt3Q0FBQ0gsS0FBSyxFQUFFSSxTQUFTO2tEQUFHYixJQUFJLENBQUNDLElBQUk7Ozs7OzZDQUFRO2tEQUMxQyw4REFBQ1csTUFBSTt3Q0FBQ0gsS0FBSyxFQUFFSSxTQUFTO2tEQUFHYixJQUFJLENBQUNjLEdBQUc7Ozs7OzZDQUFRO2tEQUN6Qyw4REFBQ0YsTUFBSTt3Q0FBQ0gsS0FBSyxFQUFFSSxTQUFTO2tEQUFHYixJQUFJLENBQUNJLE9BQU87Ozs7OzZDQUFROzs7Ozs7cUNBQzFDOzs7OztpQ0FDRjs7Ozs7NkJBQ0QsQ0FDTDtpQkFDRixDQUFDO2dCQUVGLHFCQUNFLDhEQUFDRSxLQUFHOztzQ0FDSiw4REFBQ1MsT0FBSzs0QkFBQ0MsSUFBSSxFQUFDLE1BQU07NEJBQUNDLFdBQVcsRUFBQywyQkFBMkI7NEJBQUNSLEtBQUssRUFBRVMsWUFBWTs0QkFBRUMsUUFBUSxFQUFFLFNBQUNDLENBQUM7dUNBQUcsTUFBSy9CLFdBQVcsQ0FBQytCLENBQUMsQ0FBQzs2QkFBQTs7Ozs7Z0NBQUk7d0JBQ3JIdEIsS0FBSzs7Ozs7O3dCQUNBLENBQ1A7YUFDRjs7OztDQUNGLENBM0NpQlosNENBQVMsQ0EyQzFCO0FBRUQsK0RBQWVFLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL091cnMvT3VyL0FwcC5qcz9jOWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tICcuL0luZm9ybWF0aW9uJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBzZWFyY2g6bnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFNwYWNlPShldmVudCk9PntcclxuICAgIGxldCBrZXl3b3JkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmtleXdvcmR9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBpdGVtcyA9IEluZm9ybWF0aW9uLmZpbHRlcigoZGF0YSk9PntcclxuICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggPT0gbnVsbClcclxuICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgIGVsc2UgaWYoZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkgfHwgZGF0YS5jb3VudHJ5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgfVxyXG4gICAgfSkubWFwKGRhdGE9PntcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsbGVmdDonMTB2aCd9fT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlSW5mb30+e2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZUluZm99PntkYXRhLmFnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZUluZm99PntkYXRhLmNvdW50cnl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGl0ZW0gdG8gYmUgc2VhcmNoZWRcIiBzdHlsZT17ZWxlbWVudFN0eWxlfSBvbkNoYW5nZT17KGUpPT50aGlzLnNlYXJjaFNwYWNlKGUpfSAvPlxyXG4gICAgICB7aXRlbXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkluZm9ybWF0aW9uIiwiQXBwIiwic2VhcmNoU3BhY2UiLCJldmVudCIsImtleXdvcmQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoIiwic3RhdGUiLCJyZW5kZXIiLCJpdGVtcyIsImZpbHRlciIsImRhdGEiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvdW50cnkiLCJtYXAiLCJkaXYiLCJ1bCIsImxpIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJzcGFuIiwic3R5bGVJbmZvIiwiYWdlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlbGVtZW50U3R5bGUiLCJvbkNoYW5nZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Ours/Our/App.js\n");

/***/ }),

/***/ "./components/Ours/Our/Information.js":
/*!********************************************!*\
  !*** ./components/Ours/Our/Information.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Information = [\n    {\n        \"name\": \"Samule\",\n        \"age\": 21,\n        \"country\": \"USA\"\n    },\n    {\n        \"name\": \"Sam\",\n        \"age\": 21,\n        \"country\": \"USA\"\n    },\n    {\n        \"name\": \"Mark\",\n        \"age\": 21,\n        \"country\": \"Africa\"\n    },\n    {\n        \"name\": \"Markus\",\n        \"age\": 21,\n        \"country\": \"Africa\"\n    },\n    {\n        \"name\": \"Aayush\",\n        \"age\": 21,\n        \"country\": \"India\"\n    },\n    {\n        \"name\": \"Sean\",\n        \"age\": 21,\n        \"country\": \"Ireland\"\n    },\n    {\n        \"name\": \"Eduardo\",\n        \"age\": 21,\n        \"country\": \"France\"\n    },\n    {\n        \"name\": \"Dustin\",\n        \"age\": 21,\n        \"country\": \"Spain\"\n    },\n    {\n        \"name\": \"Alexendra\",\n        \"age\": 21,\n        \"country\": \"USA\"\n    },\n    {\n        \"name\": \"Lee\",\n        \"age\": 21,\n        \"country\": \"China\"\n    },\n    {\n        \"name\": \"Jim\",\n        \"age\": 21,\n        \"country\": \"Korea\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Information);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL0luZm9ybWF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFzQztBQUV0QyxJQUFNRSxXQUFXLEdBQUc7SUFDbEI7UUFDRSxNQUFNLEVBQUMsUUFBUTtRQUNmLEtBQUssRUFBQyxFQUFFO1FBQ1IsU0FBUyxFQUFDLEtBQUs7S0FDaEI7SUFDRDtRQUNFLE1BQU0sRUFBQyxLQUFLO1FBQ1osS0FBSyxFQUFDLEVBQUU7UUFDUixTQUFTLEVBQUMsS0FBSztLQUNoQjtJQUNEO1FBQ0UsTUFBTSxFQUFDLE1BQU07UUFDYixLQUFLLEVBQUMsRUFBRTtRQUNSLFNBQVMsRUFBQyxRQUFRO0tBQ25CO0lBQ0Q7UUFDRSxNQUFNLEVBQUMsUUFBUTtRQUNmLEtBQUssRUFBQyxFQUFFO1FBQ1IsU0FBUyxFQUFDLFFBQVE7S0FDbkI7SUFDRDtRQUNFLE1BQU0sRUFBQyxRQUFRO1FBQ2YsS0FBSyxFQUFDLEVBQUU7UUFDUixTQUFTLEVBQUMsT0FBTztLQUNsQjtJQUNEO1FBQ0UsTUFBTSxFQUFDLE1BQU07UUFDYixLQUFLLEVBQUMsRUFBRTtRQUNSLFNBQVMsRUFBQyxTQUFTO0tBQ3BCO0lBQ0Q7UUFDRSxNQUFNLEVBQUMsU0FBUztRQUNoQixLQUFLLEVBQUMsRUFBRTtRQUNSLFNBQVMsRUFBQyxRQUFRO0tBQ25CO0lBQ0Q7UUFDRSxNQUFNLEVBQUMsUUFBUTtRQUNmLEtBQUssRUFBQyxFQUFFO1FBQ1IsU0FBUyxFQUFDLE9BQU87S0FDbEI7SUFDRDtRQUNFLE1BQU0sRUFBQyxXQUFXO1FBQ2xCLEtBQUssRUFBQyxFQUFFO1FBQ1IsU0FBUyxFQUFDLEtBQUs7S0FDaEI7SUFDRDtRQUNFLE1BQU0sRUFBQyxLQUFLO1FBQ1osS0FBSyxFQUFDLEVBQUU7UUFDUixTQUFTLEVBQUMsT0FBTztLQUNsQjtJQUNEO1FBQ0UsTUFBTSxFQUFDLEtBQUs7UUFDWixLQUFLLEVBQUMsRUFBRTtRQUNSLFNBQVMsRUFBQyxPQUFPO0tBQ2xCO0NBQ0Y7QUFFRCwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3Vycy9PdXIvSW5mb3JtYXRpb24uanM/YTllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3Qse0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IFtcclxuICB7XHJcbiAgICBcIm5hbWVcIjpcIlNhbXVsZVwiLFxyXG4gICAgXCJhZ2VcIjoyMSxcclxuICAgIFwiY291bnRyeVwiOlwiVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOlwiU2FtXCIsXHJcbiAgICBcImFnZVwiOjIxLFxyXG4gICAgXCJjb3VudHJ5XCI6XCJVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6XCJNYXJrXCIsXHJcbiAgICBcImFnZVwiOjIxLFxyXG4gICAgXCJjb3VudHJ5XCI6XCJBZnJpY2FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6XCJNYXJrdXNcIixcclxuICAgIFwiYWdlXCI6MjEsXHJcbiAgICBcImNvdW50cnlcIjpcIkFmcmljYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjpcIkFheXVzaFwiLFxyXG4gICAgXCJhZ2VcIjoyMSxcclxuICAgIFwiY291bnRyeVwiOlwiSW5kaWFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6XCJTZWFuXCIsXHJcbiAgICBcImFnZVwiOjIxLFxyXG4gICAgXCJjb3VudHJ5XCI6XCJJcmVsYW5kXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOlwiRWR1YXJkb1wiLFxyXG4gICAgXCJhZ2VcIjoyMSxcclxuICAgIFwiY291bnRyeVwiOlwiRnJhbmNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOlwiRHVzdGluXCIsXHJcbiAgICBcImFnZVwiOjIxLFxyXG4gICAgXCJjb3VudHJ5XCI6XCJTcGFpblwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjpcIkFsZXhlbmRyYVwiLFxyXG4gICAgXCJhZ2VcIjoyMSxcclxuICAgIFwiY291bnRyeVwiOlwiVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOlwiTGVlXCIsXHJcbiAgICBcImFnZVwiOjIxLFxyXG4gICAgXCJjb3VudHJ5XCI6XCJDaGluYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjpcIkppbVwiLFxyXG4gICAgXCJhZ2VcIjoyMSxcclxuICAgIFwiY291bnRyeVwiOlwiS29yZWFcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9ybWF0aW9uOyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIkluZm9ybWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Ours/Our/Information.js\n");

/***/ }),

/***/ "./components/Ours/Our/SearchResult.js":
/*!*********************************************!*\
  !*** ./components/Ours/Our/SearchResult.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Our_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Our/App */ \"./components/Ours/Our/App.js\");\nvar _this = undefined;\n\n\n\n\n// 농수산물 구매하기\nvar SearchResult = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: _Our_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            children: \"\\uD648\\uC73C\\uB85C\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Playdata\\\\Downloads\\\\next.config\\\\ours_front_2\\\\components\\\\Ours\\\\Our\\\\SearchResult.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = SearchResult;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResult);\nvar _c;\n$RefreshReg$(_c, \"SearchResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL091cnMvT3VyL1NlYXJjaFJlc3VsdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QjtBQUNjO0FBQ1g7QUFFNUI7QUFFZ0IsSUFBVkcsWUFBWSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUU5QixxQkFDRTtrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxPQUFPLEVBQUVKLGdEQUFHO3NCQUFFLG9CQUFHOzs7OztpQkFBUztxQkFDL0IsQ0FDSjtDQUNGO0FBUEtDLEtBQUFBLFlBQVk7QUFTbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdXJzL091ci9TZWFyY2hSZXN1bHQuanM/MDc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL091ci9BcHAnXHJcblxyXG4vLyDrho3siJjsgrDrrLwg6rWs66ek7ZWY6riwXHJcblxyXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e0FwcH0+7ZmI7Jy866GcPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkFwcCIsIlNlYXJjaFJlc3VsdCIsInByb3BzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Ours/Our/SearchResult.js\n");

/***/ })

});
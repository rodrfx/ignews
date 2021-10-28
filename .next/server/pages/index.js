/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rod/Projetos/ignews/src/components/SubscribeButton/index.tsx\";\n\n\n\n\n\nfunction SubscribeButton({\n  priceId\n}) {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.useSession)();\n\n  async function handleSubscribe() {\n    if (!session) {\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.signIn)(\"github\");\n      return;\n    }\n\n    try {\n      const response = await _services_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/subscribe\");\n      const {\n        sessionId\n      } = response.data;\n      const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_2__.getStripeJs)();\n      await stripe.redirectToCheckout({\n        sessionId\n      });\n    } catch (err) {\n      alert(err.message);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFNTyxTQUFTSyxlQUFULENBQXlCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBekIsRUFBNEQ7QUFDakUsUUFBTSxDQUFDQyxPQUFELElBQVlOLDREQUFVLEVBQTVCOztBQUVBLGlCQUFlTyxlQUFmLEdBQWlDO0FBQy9CLFFBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pQLE1BQUFBLHdEQUFNLENBQUMsUUFBRCxDQUFOO0FBQ0E7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsWUFBTVMsUUFBUSxHQUFHLE1BQU1QLG1EQUFBLENBQVMsWUFBVCxDQUF2QjtBQUVBLFlBQU07QUFBRVMsUUFBQUE7QUFBRixVQUFnQkYsUUFBUSxDQUFDRyxJQUEvQjtBQUNBLFlBQU1DLE1BQU0sR0FBRyxNQUFNVixnRUFBVyxFQUFoQztBQUVBLFlBQU1VLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEI7QUFBRUgsUUFBQUE7QUFBRixPQUExQixDQUFOO0FBQ0QsS0FQRCxDQU9FLE9BQU9JLEdBQVAsRUFBWTtBQUNaQyxNQUFBQSxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFMO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFYiw0RUFGYjtBQUdFLFdBQU8sRUFBRUksZUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4P2VmMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZS1qc1wiO1xuXG5pbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcbiAgcHJpY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2lnbkluKFwiZ2l0aHViXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3N1YnNjcmliZVwiKTtcblxuICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpO1xuXG4gICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3Muc3Vic2NyaWJlQnV0dG9ufVxuICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxuICAgID5cbiAgICAgIFN1YnNjcmliZSBub3dcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInNlc3Npb24iLCJoYW5kbGVTdWJzY3JpYmUiLCJyZXNwb25zZSIsInBvc3QiLCJzZXNzaW9uSWQiLCJkYXRhIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwic3Vic2NyaWJlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rod/Projetos/ignews/src/pages/index.tsx\";\n\n\n\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: \"\\uD83D\\uDC4F Hey, welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          children: [\"News about the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 28\n          }, this), \" world.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: [\"Get acess to all the publications \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 47\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__.SubscribeButton, {\n          priceId: product.priceId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve(\"price_1JgwdCJZMYCAL9KVpTqFnAAi\");\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\"\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 //24h\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7OztBQVNlLFNBQVNJLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVGLDJFQUFqQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBRUEsK0RBQXBCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFEQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0U7QUFBQSx3RUFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcEMsZUFFRTtBQUFBLCtCQUFXRSxPQUFPLENBQUNHLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFTRSw4REFBQyx3RUFBRDtBQUFpQixpQkFBTyxFQUFFSCxPQUFPLENBQUNJO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhRTtBQUFLLFdBQUcsRUFBQyxvQkFBVDtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUF1QkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsS0FBSyxHQUFHLE1BQU1ULG9FQUFBLENBQXVCLGdDQUF2QixDQUFwQjtBQUVBLFFBQU1HLE9BQU8sR0FBRztBQUNkSSxJQUFBQSxPQUFPLEVBQUVFLEtBQUssQ0FBQ0csRUFERDtBQUVkTixJQUFBQSxNQUFNLEVBQUUsSUFBSU8sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3JDQyxNQUFBQSxLQUFLLEVBQUUsVUFEOEI7QUFFckNDLE1BQUFBLFFBQVEsRUFBRTtBQUYyQixLQUEvQixFQUdMQyxNQUhLLENBR0VSLEtBQUssQ0FBQ1MsV0FBTixHQUFvQixHQUh0QjtBQUZNLEdBQWhCO0FBUUEsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTGhCLE1BQUFBO0FBREssS0FERjtBQUlMaUIsSUFBQUEsVUFBVSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBSmpCLENBSXFCOztBQUpyQixHQUFQO0FBTUQsQ0FqQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbmltcG9ydCBzIGZyb20gXCIuL2hvbWUubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0IH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MuaGVyb30+XG4gICAgICAgICAgPHNwYW4+8J+RjyBIZXksIHdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgTmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kaW5nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKFwicHJpY2VfMUpnd2RDSlpNWUNBTDlLVnBUcUZuQUFpXCIpO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLzI0aFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU3Vic2NyaWJlQnV0dG9uIiwic3RyaXBlIiwicyIsIkhvbWUiLCJwcm9kdWN0IiwiY29udGVudENvbnRhaW5lciIsImhlcm8iLCJhbW91bnQiLCJwcmljZUlkIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"/api\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsR0FBRyxHQUFHRCxtREFBQSxDQUFhO0FBQzlCRyxFQUFBQSxPQUFPLEVBQUU7QUFEcUIsQ0FBYixDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2FwaS50cz8wZTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxufSk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n  const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51JgwaIJZMYCAL9KVi1chHJlm3ZmbrvcAabAb5WhI6Y6mxD8Ygh3XVyNqYFCCT29JXgz1YhU4wXaPsKXOzdUS3WGa00xfBAZc06\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sZUFBZUMsV0FBZixHQUE2QjtBQUNsQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUYsNkRBQVUsQ0FBQ0csNkdBQUQsQ0FBakM7QUFFQSxTQUFPRCxRQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzP2Q4YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaXBlSnMoKSB7XG4gIGNvbnN0IHN0cmlwZUpzID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSk7XG5cbiAgcmV0dXJuIHN0cmlwZUpzO1xufVxuIl0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: \"2020-08-27\",\n  appInfo: {\n    name: \"Ignews\",\n    version: \"0.1.0\"\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFKLENBQVdFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUF2QixFQUF1QztBQUMzREMsRUFBQUEsVUFBVSxFQUFFLFlBRCtDO0FBRTNEQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsSUFBSSxFQUFFLFFBREM7QUFFUEMsSUFBQUEsT0FBTyxFQUFFO0FBRkY7QUFGa0QsQ0FBdkMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/ZDk2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksIHtcbiAgYXBpVmVyc2lvbjogXCIyMDIwLTA4LTI3XCIsXG4gIGFwcEluZm86IHtcbiAgICBuYW1lOiBcIklnbmV3c1wiLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSIsInZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz81YmVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzF1UUFzXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NTM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX18yMUVXbFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fXzNaYTVJXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
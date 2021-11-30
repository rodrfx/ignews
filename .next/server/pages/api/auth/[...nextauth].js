"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: \"read:user\"\n  })],\n  callbacks: {\n    async session(session) {\n      try {\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_user_ref\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_status\"), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsaUVBQWVFLGdEQUFRLENBQUM7QUFDdkJHLEVBQUFBLFNBQVMsRUFBRSxDQUNWRixpRUFBQSxDQUFpQjtBQUNoQkksSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRE47QUFFaEJDLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZWO0FBR2hCQyxJQUFBQSxLQUFLLEVBQUU7QUFIUyxHQUFqQixDQURVLENBRFk7QUFRdkJDLEVBQUFBLFNBQVMsRUFBRTtBQUNWLFVBQU1DLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QjtBQUN0QixVQUFJO0FBQ0gsY0FBTUMsc0JBQXNCLEdBQUcsTUFBTVosd0RBQUEsQ0FDcENILDhDQUFBLENBQ0NBLHVEQUFBLENBQWUsQ0FDZEEsZ0RBQUEsQ0FDQ0EsZ0RBQUEsQ0FBUSwwQkFBUixDQURELEVBRUNBLGlEQUFBLENBQ0MsS0FERCxFQUVDQSw4Q0FBQSxDQUNDQSxnREFBQSxDQUNDQSxnREFBQSxDQUFRLGVBQVIsQ0FERCxFQUVDQSxtREFBQSxDQUFXYyxPQUFPLENBQUNRLElBQVIsQ0FBYUMsS0FBeEIsQ0FGRCxDQURELENBRkQsQ0FGRCxDQURjLEVBYWR2QixnREFBQSxDQUFRQSxnREFBQSxDQUFRLHdCQUFSLENBQVIsRUFBMkMsUUFBM0MsQ0FiYyxDQUFmLENBREQsQ0FEb0MsQ0FBckM7QUFtQkEsK0NBQ0ljLE9BREo7QUFFQ1UsVUFBQUEsa0JBQWtCLEVBQUVUO0FBRnJCO0FBSUEsT0F4QkQsQ0F3QkUsTUFBTTtBQUNQLCtDQUNJRCxPQURKO0FBRUNVLFVBQUFBLGtCQUFrQixFQUFFO0FBRnJCO0FBSUE7QUFDRCxLQWhDUzs7QUFpQ1YsVUFBTUMsTUFBTixDQUFhSCxJQUFiLEVBQW1CSSxPQUFuQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDcEMsWUFBTTtBQUFFSixRQUFBQTtBQUFGLFVBQVlELElBQWxCOztBQUVBLFVBQUk7QUFDSCxjQUFNbkIsd0RBQUEsQ0FDTEgsNkNBQUEsQ0FDQ0EsOENBQUEsQ0FDQ0EsaURBQUEsQ0FDQ0EsZ0RBQUEsQ0FBUUEsZ0RBQUEsQ0FBUSxlQUFSLENBQVIsRUFBa0NBLG1EQUFBLENBQVdzQixJQUFJLENBQUNDLEtBQWhCLENBQWxDLENBREQsQ0FERCxDQURELEVBTUN2QixpREFBQSxDQUFTQSxxREFBQSxDQUFhLE9BQWIsQ0FBVCxFQUFnQztBQUFFaUMsVUFBQUEsSUFBSSxFQUFFO0FBQUVWLFlBQUFBO0FBQUY7QUFBUixTQUFoQyxDQU5ELEVBT0N2Qiw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV3NCLElBQUksQ0FBQ0MsS0FBaEIsQ0FBbEMsQ0FBTixDQVBELENBREssQ0FBTjtBQVdBLGVBQU8sSUFBUDtBQUNBLE9BYkQsQ0FhRSxNQUFNO0FBQ1AsZUFBTyxLQUFQO0FBQ0E7QUFDRDs7QUFwRFM7QUFSWSxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NzJjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIjtcblxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuXHRwcm92aWRlcnM6IFtcblx0XHRQcm92aWRlcnMuR2l0SHViKHtcblx0XHRcdGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdHNjb3BlOiBcInJlYWQ6dXNlclwiLFxuXHRcdH0pLFxuXHRdLFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBzZXNzaW9uKHNlc3Npb24pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcblx0XHRcdFx0XHRxLkdldChcblx0XHRcdFx0XHRcdHEuSW50ZXJzZWN0aW9uKFtcblx0XHRcdFx0XHRcdFx0cS5NYXRjaChcblx0XHRcdFx0XHRcdFx0XHRxLkluZGV4KFwic3Vic2NyaXB0aW9uX2J5X3VzZXJfcmVmXCIpLFxuXHRcdFx0XHRcdFx0XHRcdHEuU2VsZWN0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJyZWZcIixcblx0XHRcdFx0XHRcdFx0XHRcdHEuR2V0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxLk1hdGNoKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRxLk1hdGNoKHEuSW5kZXgoXCJzdWJzY3JpcHRpb25fYnlfc3RhdHVzXCIpLCBcImFjdGl2ZVwiKSxcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnNlc3Npb24sXG5cdFx0XHRcdFx0YWN0aXZlU3Vic2NyaXB0aW9uOiB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uLFxuXHRcdFx0XHR9O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc2Vzc2lvbixcblx0XHRcdFx0XHRhY3RpdmVTdWJzY3JpcHRpb246IG51bGwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuXHRcdFx0Y29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgZmF1bmEucXVlcnkoXG5cdFx0XHRcdFx0cS5JZihcblx0XHRcdFx0XHRcdHEuTm90KFxuXHRcdFx0XHRcdFx0XHRxLkV4aXN0cyhcblx0XHRcdFx0XHRcdFx0XHRxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0cS5DcmVhdGUocS5Db2xsZWN0aW9uKFwidXNlcnNcIiksIHsgZGF0YTogeyBlbWFpbCB9IH0pLFxuXHRcdFx0XHRcdFx0cS5HZXQocS5NYXRjaChxLkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSwgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKSkpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyQWN0aXZlU3Vic2NyaXB0aW9uIiwiR2V0IiwiSW50ZXJzZWN0aW9uIiwiTWF0Y2giLCJJbmRleCIsIlNlbGVjdCIsIkNhc2Vmb2xkIiwidXNlciIsImVtYWlsIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztBQUM5QkUsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWSxcbn0pO1xuIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
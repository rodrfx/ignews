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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rod/Projetos/ignews/src/pages/posts/[slug].tsx\";\n\n\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"article\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const {\n    slug\n  } = params;\n\n  if (!session.activeSubscription) {\n    return {\n      redirect: {\n        destination: \"/\",\n        permanent: false\n      }\n    };\n  }\n\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)(req);\n  const response = await prismic.getByUID(\"publication\", String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n      day: \"2-digit\",\n      month: \"long\",\n      year: \"numeric\"\n    })\n  };\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQVdlLFNBQVNLLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBbUM7QUFDakQsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQUEsbUJBQVFBLElBQUksQ0FBQ0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQztBQUFNLGVBQVMsRUFBRUgsb0VBQWpCO0FBQUEsNkJBQ0M7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDQztBQUFBLG9CQUFLRSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUEsb0JBQU9ELElBQUksQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBR0M7QUFDQyxtQkFBUyxFQUFFTCxzRUFEWjtBQUVDLGlDQUF1QixFQUFFO0FBQUVPLFlBQUFBLE1BQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFmO0FBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUEsa0JBREQ7QUFrQkE7QUFFTSxNQUFNQyxrQkFBc0MsR0FBRyxPQUFPO0FBQzVEQyxFQUFBQSxHQUQ0RDtBQUU1REMsRUFBQUE7QUFGNEQsQ0FBUCxLQUdoRDtBQUNMLFFBQU1DLE9BQU8sR0FBRyxNQUFNaEIsNERBQVUsQ0FBQztBQUFFYyxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUVHLElBQUFBO0FBQUYsTUFBV0YsTUFBakI7O0FBRUEsTUFBSSxDQUFDQyxPQUFPLENBQUNFLGtCQUFiLEVBQWlDO0FBQ2hDLFdBQU87QUFDTkMsTUFBQUEsUUFBUSxFQUFFO0FBQ1RDLFFBQUFBLFdBQVcsRUFBRSxHQURKO0FBRVRDLFFBQUFBLFNBQVMsRUFBRTtBQUZGO0FBREosS0FBUDtBQU1BOztBQUVELFFBQU1DLE9BQU8sR0FBR25CLG1FQUFnQixDQUFDVyxHQUFELENBQWhDO0FBRUEsUUFBTVMsUUFBUSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsUUFBUixDQUFpQixhQUFqQixFQUFnQ0MsTUFBTSxDQUFDUixJQUFELENBQXRDLEVBQThDLEVBQTlDLENBQXZCO0FBRUEsUUFBTVgsSUFBSSxHQUFHO0FBQ1pXLElBQUFBLElBRFk7QUFFWlYsSUFBQUEsS0FBSyxFQUFFTCx3REFBQSxDQUFnQnFCLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjcEIsS0FBOUIsQ0FGSztBQUdaSyxJQUFBQSxPQUFPLEVBQUVWLHdEQUFBLENBQWdCcUIsUUFBUSxDQUFDSSxJQUFULENBQWNmLE9BQTlCLENBSEc7QUFJWkgsSUFBQUEsU0FBUyxFQUFFLElBQUlvQixJQUFKLENBQVNOLFFBQVEsQ0FBQ08scUJBQWxCLEVBQXlDQyxrQkFBekMsQ0FDVixPQURVLEVBRVY7QUFDQ0MsTUFBQUEsR0FBRyxFQUFFLFNBRE47QUFFQ0MsTUFBQUEsS0FBSyxFQUFFLE1BRlI7QUFHQ0MsTUFBQUEsSUFBSSxFQUFFO0FBSFAsS0FGVTtBQUpDLEdBQWI7QUFjQSxTQUFPO0FBQ05DLElBQUFBLEtBQUssRUFBRTtBQUNON0IsTUFBQUE7QUFETTtBQURELEdBQVA7QUFLQSxDQXZDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9bc2x1Z10udHN4P2QwNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJpc21pY1wiO1xuXG5pbXBvcnQgcyBmcm9tIFwiLi9wb3N0Lm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBQb3N0cHJvcHMge1xuXHRwb3N0OiB7XG5cdFx0c2x1Zzogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHRcdHVwZGF0ZWRBdDogc3RyaW5nO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQb3N0cHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cblx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPXtzLnBvc3R9PlxuXHRcdFx0XHRcdDxoMT57cG9zdC50aXRsZX08L2gxPlxuXHRcdFx0XHRcdDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzLnBvc3RDb250ZW50fVxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX1cblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHtcblx0cmVxLFxuXHRwYXJhbXMsXG59KSA9PiB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuXHRjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcblxuXHRpZiAoIXNlc3Npb24uYWN0aXZlU3Vic2NyaXB0aW9uKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9cIixcblx0XHRcdFx0cGVybWFuZW50OiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSk7XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKFwicHVibGljYXRpb25cIiwgU3RyaW5nKHNsdWcpLCB7fSk7XG5cblx0Y29uc3QgcG9zdCA9IHtcblx0XHRzbHVnLFxuXHRcdHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS50aXRsZSksXG5cdFx0Y29udGVudDogUmljaFRleHQuYXNIdG1sKHJlc3BvbnNlLmRhdGEuY29udGVudCksXG5cdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZShyZXNwb25zZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcblx0XHRcdFwicHQtQlJcIixcblx0XHRcdHtcblx0XHRcdFx0ZGF5OiBcIjItZGlnaXRcIixcblx0XHRcdFx0bW9udGg6IFwibG9uZ1wiLFxuXHRcdFx0XHR5ZWFyOiBcIm51bWVyaWNcIixcblx0XHRcdH1cblx0XHQpLFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3QsXG5cdFx0fSxcblx0fTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIkhlYWQiLCJSaWNoVGV4dCIsImdldFByaXNtaWNDbGllbnQiLCJzIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImNvbnRhaW5lciIsInVwZGF0ZWRBdCIsInBvc3RDb250ZW50IiwiX19odG1sIiwiY29udGVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInBhcmFtcyIsInNlc3Npb24iLCJzbHVnIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByaXNtaWMiLCJyZXNwb25zZSIsImdldEJ5VUlEIiwiU3RyaW5nIiwiYXNUZXh0IiwiZGF0YSIsImFzSHRtbCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLFNBQVNDLGdCQUFULENBQTBCQyxHQUExQixFQUF5QztBQUMvQyxRQUFNQyxPQUFPLEdBQUdILCtEQUFBLENBQWVLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBM0IsRUFBNkM7QUFDNURMLElBQUFBLEdBRDREO0FBRTVETSxJQUFBQSxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZtQyxHQUE3QyxDQUFoQjtBQUtBLFNBQU9OLE9BQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9wcmlzbWljLnRzPzhjNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlzbWljQ2xpZW50KHJlcT86IHVua25vd24pIHtcblx0Y29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsIHtcblx0XHRyZXEsXG5cdFx0YWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOLFxuXHR9KTtcblxuXHRyZXR1cm4gcHJpc21pYztcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlcSIsInByaXNtaWMiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUFJJU01JQ19FTkRQT0lOVCIsImFjY2Vzc1Rva2VuIiwiUFJJU01JQ19BQ0NFU1NfVE9LRU4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz8zMjQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBvc3RfY29udGFpbmVyX18ybTVtZFwiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzNxdUwyXCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X19CN3FOOVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/client");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();
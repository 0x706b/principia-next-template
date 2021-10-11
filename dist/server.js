/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@principia/base/IO":
/*!*************************************!*\
  !*** external "@principia/base/IO" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@principia/base/IO");

/***/ }),

/***/ "@principia/base/IO/Console":
/*!*********************************************!*\
  !*** external "@principia/base/IO/Console" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@principia/base/IO/Console");

/***/ }),

/***/ "@principia/express":
/*!*************************************!*\
  !*** external "@principia/express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@principia/express");

/***/ }),

/***/ "@principia/node/Runtime":
/*!******************************************!*\
  !*** external "@principia/node/Runtime" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@principia/node/Runtime");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _principia_base_IO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @principia/base/IO */ "@principia/base/IO");
/* harmony import */ var _principia_base_IO__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_principia_base_IO__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _principia_base_IO_Console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @principia/base/IO/Console */ "@principia/base/IO/Console");
/* harmony import */ var _principia_base_IO_Console__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_principia_base_IO_Console__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _principia_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @principia/express */ "@principia/express");
/* harmony import */ var _principia_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_principia_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _principia_node_Runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @principia/node/Runtime */ "@principia/node/Runtime");
/* harmony import */ var _principia_node_Runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_principia_node_Runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);






const dev = "development" !== 'production';
const nextApp = next__WEBPACK_IMPORTED_MODULE_4___default()({ dev });
const nextHandler = nextApp.getRequestHandler();
const nextMiddleware = _principia_express__WEBPACK_IMPORTED_MODULE_2__.all('*', (req, res) => _principia_base_IO__WEBPACK_IMPORTED_MODULE_0__.succeedLazy(() => {
    const parsedUrl = url__WEBPACK_IMPORTED_MODULE_5__.parse(req.url, true);
    nextHandler(req, res, parsedUrl);
}));
const Express = _principia_express__WEBPACK_IMPORTED_MODULE_2__.LiveExpressApp["<+<"](_principia_express__WEBPACK_IMPORTED_MODULE_2__.LiveExpressAppConfig('localhost', 8080, _principia_express__WEBPACK_IMPORTED_MODULE_2__.defaultExitHandler));
const program = _principia_base_IO__WEBPACK_IMPORTED_MODULE_0__.gen(function* (_) {
    yield* _(_principia_base_IO__WEBPACK_IMPORTED_MODULE_0__.fromPromiseHalt(() => nextApp.prepare()));
    yield* _(nextMiddleware);
    const { server } = yield* _(_principia_express__WEBPACK_IMPORTED_MODULE_2__.ExpressApp);
    yield* _(_principia_base_IO_Console__WEBPACK_IMPORTED_MODULE_1__.Console.put('🚀 Express started on', server.address()));
    yield* _(_principia_base_IO__WEBPACK_IMPORTED_MODULE_0__.never);
});
(0,_principia_node_Runtime__WEBPACK_IMPORTED_MODULE_3__.runMain)(_principia_base_IO__WEBPACK_IMPORTED_MODULE_0__.giveLayer_(program, Express));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNNO0FBQ1o7QUFDUztBQUMxQjtBQUNHO0FBQzNCLFlBQVksYUFBb0I7QUFDaEMsZ0JBQWdCLDJDQUFJLEdBQUcsS0FBSztBQUM1QjtBQUNBLHVCQUF1QixtREFBTSxvQkFBb0IsMkRBQW9CO0FBQ3JFLHNCQUFzQixzQ0FBUztBQUMvQjtBQUNBLENBQUM7QUFDRCxnQkFBZ0IscUVBQXdCLENBQUMsb0VBQXVCLG9CQUFvQixrRUFBcUI7QUFDekcsZ0JBQWdCLG1EQUFZO0FBQzVCLGFBQWEsK0RBQXdCO0FBQ3JDO0FBQ0EsWUFBWSxTQUFTLFdBQVcsMERBQWE7QUFDN0MsYUFBYSxtRUFBVztBQUN4QixhQUFhLHFEQUFjO0FBQzNCLENBQUM7QUFDRCxnRUFBTyxDQUFDLDBEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ByaW5jaXBpYS1uZXh0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaW5jaXBpYS9iYXNlL0lPXCIiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAcHJpbmNpcGlhL2Jhc2UvSU8vQ29uc29sZVwiIiwid2VicGFjazovL3ByaW5jaXBpYS1uZXh0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaW5jaXBpYS9leHByZXNzXCIiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAcHJpbmNpcGlhL25vZGUvUnVudGltZVwiIiwid2VicGFjazovL3ByaW5jaXBpYS1uZXh0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwibmV4dFwiIiwid2VicGFjazovL3ByaW5jaXBpYS1uZXh0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwidXJsXCIiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByaW5jaXBpYS1uZXh0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJpbmNpcGlhLW5leHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmluY2lwaWEtbmV4dC10ZW1wbGF0ZS8uL3NlcnZlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpbmNpcGlhL2Jhc2UvSU9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaW5jaXBpYS9iYXNlL0lPL0NvbnNvbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaW5jaXBpYS9leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmluY2lwaWEvbm9kZS9SdW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBtb2R1bGVfMSBmcm9tIFwiQHByaW5jaXBpYS9iYXNlL0lPXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQHByaW5jaXBpYS9iYXNlL0lPL0NvbnNvbGUnO1xuaW1wb3J0ICogYXMgRXggZnJvbSAnQHByaW5jaXBpYS9leHByZXNzJztcbmltcG9ydCB7IHJ1bk1haW4gfSBmcm9tICdAcHJpbmNpcGlhL25vZGUvUnVudGltZSc7XG5pbXBvcnQgbmV4dCBmcm9tICduZXh0JztcbmltcG9ydCAqIGFzIHVybCBmcm9tICd1cmwnO1xuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcbmNvbnN0IG5leHRBcHAgPSBuZXh0KHsgZGV2IH0pO1xuY29uc3QgbmV4dEhhbmRsZXIgPSBuZXh0QXBwLmdldFJlcXVlc3RIYW5kbGVyKCk7XG5jb25zdCBuZXh0TWlkZGxld2FyZSA9IEV4LmFsbCgnKicsIChyZXEsIHJlcykgPT4gbW9kdWxlXzEuc3VjY2VlZExhenkoKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFVybCA9IHVybC5wYXJzZShyZXEudXJsLCB0cnVlKTtcbiAgICBuZXh0SGFuZGxlcihyZXEsIHJlcywgcGFyc2VkVXJsKTtcbn0pKTtcbmNvbnN0IEV4cHJlc3MgPSBFeC5MaXZlRXhwcmVzc0FwcFsnPCs8J10oRXguTGl2ZUV4cHJlc3NBcHBDb25maWcoJ2xvY2FsaG9zdCcsIDgwODAsIEV4LmRlZmF1bHRFeGl0SGFuZGxlcikpO1xuY29uc3QgcHJvZ3JhbSA9IG1vZHVsZV8xLmdlbihmdW5jdGlvbiogKF8pIHtcbiAgICB5aWVsZCogXyhtb2R1bGVfMS5mcm9tUHJvbWlzZUhhbHQoKCkgPT4gbmV4dEFwcC5wcmVwYXJlKCkpKTtcbiAgICB5aWVsZCogXyhuZXh0TWlkZGxld2FyZSk7XG4gICAgY29uc3QgeyBzZXJ2ZXIgfSA9IHlpZWxkKiBfKEV4LkV4cHJlc3NBcHApO1xuICAgIHlpZWxkKiBfKENvbnNvbGUucHV0KCfwn5qAIEV4cHJlc3Mgc3RhcnRlZCBvbicsIHNlcnZlci5hZGRyZXNzKCkpKTtcbiAgICB5aWVsZCogXyhtb2R1bGVfMS5uZXZlcik7XG59KTtcbnJ1bk1haW4obW9kdWxlXzEuZ2l2ZUxheWVyXyhwcm9ncmFtLCBFeHByZXNzKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
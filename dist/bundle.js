/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/1-task-objectType/task.ts":
/*!***************************************!*\
  !*** ./src/1-task-objectType/task.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.objectType = void 0;
exports.objectType = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: '+79100000000',
        email: 'office@gmail.com',
        address: {
            city: 'San-Francisco'
        }
    }
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var task_1 = __webpack_require__(/*! ./1-task-objectType/task */ "./src/1-task-objectType/task.ts");
console.log(task_1.objectType);
console.log(task_1.objectType);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYSxrQkFBVSxHQVVqQjtJQUNGLFFBQVEsRUFBRSxFQUFFO0lBQ1osUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsY0FBYztRQUNyQixLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRyxlQUFlO1NBQ3ZCO0tBQ0Y7Q0FDRjs7Ozs7OztVQ3BCSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsb0dBQXNEO0FBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQVUsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjLzEtdGFzay1vYmplY3RUeXBlL3Rhc2sudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9iamVjdFR5cGU6IHtcclxuICAgIG9mZmljZUlkOiBudW1iZXIsXHJcbiAgICBpc09wZW5lZDogYm9vbGVhbixcclxuICAgIGNvbnRhY3RzOiB7XHJcbiAgICAgIHBob25lOiBzdHJpbmcsXHJcbiAgICAgIGVtYWlsOiBzdHJpbmcsXHJcbiAgICAgIGFkZHJlc3M6IHtcclxuICAgICAgICBjaXR5IDogc3RyaW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ID0ge1xyXG4gICAgb2ZmaWNlSWQ6IDQ1LFxyXG4gICAgaXNPcGVuZWQ6IGZhbHNlLFxyXG4gICAgY29udGFjdHM6IHtcclxuICAgICAgcGhvbmU6ICcrNzkxMDAwMDAwMDAnLFxyXG4gICAgICBlbWFpbDogJ29mZmljZUBnbWFpbC5jb20nLFxyXG4gICAgICBhZGRyZXNzOiB7XHJcbiAgICAgICAgY2l0eSA6ICdTYW4tRnJhbmNpc2NvJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vMS10YXNrLW9iamVjdFR5cGUvdGFza1wiO1xyXG5cclxuY29uc29sZS5sb2cob2JqZWN0VHlwZSk7XHJcbmNvbnNvbGUubG9nKG9iamVjdFR5cGUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
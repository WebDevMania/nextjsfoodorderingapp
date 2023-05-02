"use strict";
(() => {
var exports = {};
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Meal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(765);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5690);


async function handler(req, res) {
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connect */ .Z.connect();
    switch(req.method){
        case "GET":
            {
                const meals = await _models_Meal__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({}).limit(15);
                console.log(meals);
                return res.status(200).json(meals);
            }
        case "POST":
            {
                const meal = await _models_Meal__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
                    ...req.body
                });
                return res.status(201).json(meal);
            }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [738], () => (__webpack_exec__(7513)));
module.exports = __webpack_exports__;

})();
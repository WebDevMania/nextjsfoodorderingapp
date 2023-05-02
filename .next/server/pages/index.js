(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9176:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "catalog_container__qlRZU",
	"wrapper": "catalog_wrapper__ORQ_d",
	"titles": "catalog_titles__T_qlH",
	"categories": "catalog_categories__SLpZf",
	"category": "catalog_category__IEd_4",
	"active": "catalog_active__ngeWJ",
	"noMeal": "catalog_noMeal__zD82X",
	"meals": "catalog_meals__ppAzN",
	"meal": "catalog_meal__aKyek",
	"imgContainer": "catalog_imgContainer__J5rhi",
	"mealData": "catalog_mealData__4X37c"
};


/***/ }),

/***/ 1163:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "hero_container__eilUF",
	"wrapper": "hero_wrapper__d5q_a",
	"left": "hero_left__NrgnC",
	"buttons": "hero_buttons__lr5iH",
	"orderNow": "hero_orderNow__sl4cv",
	"seeMore": "hero_seeMore__siPqI",
	"disclaimer": "hero_disclaimer__fi30G",
	"right": "hero_right__lX63c"
};


/***/ }),

/***/ 6148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _catalog_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var _catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Catalog = ({ meals  })=>{
    console.log(meals);
    const [activeCategory, setActiveCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("all");
    const [filteredMeals, setFilteredMeals] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const filterMeals = ()=>{
            setFilteredMeals(()=>{
                if (activeCategory) {
                    if (activeCategory === "all") {
                        return meals;
                    }
                    return [
                        ...meals
                    ].filter((meal)=>meal.category === activeCategory);
                }
            });
        };
        activeCategory && filterMeals();
    }, [
        activeCategory
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().titles),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Pick something delicious"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Food and Categories"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().categories),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("all"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "all" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "All"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("pizza"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "pizza" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Pizza"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("burger"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "burger" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Burger"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("gyros"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "gyros" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Gyros"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("spaghetti"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "spaghetti" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Spaghetti"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("bread"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "bread" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Bread"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setActiveCategory("vegetarian"),
                            className: `${(_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().category)} ${activeCategory === "vegetarian" ? (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                            children: "Vegetarian"
                        })
                    ]
                }),
                filteredMeals?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().meals),
                    children: filteredMeals?.map((meal)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/meal/${meal?._id}`,
                            className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().meal),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: meal?.image,
                                        width: "250",
                                        height: "250"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().mealData),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            children: meal?.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                "$",
                                                meal?.price
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, meal?._id))
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: (_catalog_module_css__WEBPACK_IMPORTED_MODULE_4___default().noMeal),
                    children: [
                        "There are no ",
                        activeCategory,
                        " meals in stock"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);


/***/ }),

/***/ 4332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_Hero)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/hero/hero.module.css
var hero_module = __webpack_require__(1163);
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/womaneating.jpg
/* harmony default export */ const womaneating = ({"src":"/_next/static/media/womaneating.8fc3638b.jpg","height":5086,"width":3390,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIAr/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgMFEgAEBhEh/9oACAEBAAE/AHDHG14XKF8KRIkUi5s51//EABcRAQADAAAAAAAAAAAAAAAAAAEAIYH/2gAIAQIBAT8ACtZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQCx/9oACAEDAQE/AFwv/9k=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./components/hero/Hero.jsx





const Hero = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (hero_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (hero_module_default()).wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (hero_module_default()).left,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                            children: [
                                "What better than a meal with ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                "your loved ones"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                            children: [
                                "We can help you with the experience by providing you",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                " with amazing food. Burgers, Pizza, Spaghetti, ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                "You Can Get Everything Here"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (hero_module_default()).buttons,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: (hero_module_default()).orderNow,
                                    children: "Order Now"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: (hero_module_default()).seeMore,
                                    children: "See More"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (hero_module_default()).disclaimer,
                            children: "We close earlier on Monday"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (hero_module_default()).right,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: womaneating,
                        alt: ""
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const hero_Hero = (Hero);


/***/ }),

/***/ 5901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9016);
/* harmony import */ var _components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6148);
/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4332);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__]);
axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Home({ meals  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalog_Catalog__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        meals: meals
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("http://localhost:3000/api/meal");
    console.log(data);
    return {
        props: {
            meals: data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,671], () => (__webpack_exec__(5901)));
module.exports = __webpack_exports__;

})();
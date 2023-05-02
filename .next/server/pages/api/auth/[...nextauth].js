"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].js



const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        credentials_default()({
            type: "credentials",
            credentials: {},
            async authorize (credentials, req) {
                const { username , password  } = credentials;
                if (username !== "admin" || password !== "123123") {
                    throw new Error("invalid data");
                } else {
                    const accessToken = external_jsonwebtoken_default().sign({
                        username
                    }, process.env.NEXT_AUTH_SECRET, {
                        expiresIn: "5d"
                    });
                    return {
                        username,
                        accessToken
                    };
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token , user  }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.username = user.username;
            }
            return token;
        },
        async session ({ session , token  }) {
            if (token) {
                session.user.username = token.username;
                session.user.accessToken = token.accessToken;
            }
            return session;
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2407));
module.exports = __webpack_exports__;

})();
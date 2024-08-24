/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js ***!
  \****************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js ***!
  \****************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js");


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
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@https+++registry.npmmirror.com+@docusaurus+plugin-pwa+-+plugin-pwa-3.5_ufucn6c22jw6zuvperqdwtewvi/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \***************************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"d1b50c2e910c847f7ce8678381c067bc","url":"404.html"},{"revision":"c69df53a2ce07dccae667e36602819eb","url":"advance/bot/framework/index.html"},{"revision":"1ea6a024db741daa9f66598b533fe1b3","url":"advance/bot/general/index.html"},{"revision":"7ec12ff19efbf2cc9599d93fdfdd5dfe","url":"advance/bot/index.html"},{"revision":"244f749b08f7352dd519e806f6f752dd","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"2ef8dbcb2387c2ca43dd5046b737c957","url":"advance/index.html"},{"revision":"2b80dfc68c958902d859513ef6936678","url":"advance/Linux/backup/index.html"},{"revision":"6ad58eea94e88c077a7cf8e8187f1627","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"22c1497c5509ba56bf5f66f9a26482fa","url":"advance/Linux/frp/index.html"},{"revision":"f5f844a7a824af5ad2e07963dbaddef0","url":"advance/Linux/keep-running/index.html"},{"revision":"6ed87bc0224c049635761a1e5240f59b","url":"advance/Linux/start/index.html"},{"revision":"fa51732db8abf7d068ab5043625b552d","url":"advance/open-website/index.html"},{"revision":"25bd9a5f552d3279a2d63f30d26af97f","url":"assets/css/styles.e4e4ba86.css"},{"revision":"fd945c64cdf27b227f28d156f320071b","url":"assets/js/005c270b.381bc8ca.js"},{"revision":"76c9a5ca65762bb21c238b5522035764","url":"assets/js/013c8c14.22edb683.js"},{"revision":"fdb34b77ce62b6806a04721118984201","url":"assets/js/026f291b.44583d7c.js"},{"revision":"22e40b58ea7a4b35843e3e51747e26b4","url":"assets/js/0272dc73.e2fa3a4b.js"},{"revision":"a9865ca6c58c5b845387630608b257b3","url":"assets/js/035cfa77.8b3d0cee.js"},{"revision":"1ce653e4fb8e45ee5dcf1c424fcaf066","url":"assets/js/03b205ee.43fede1b.js"},{"revision":"20457c22c8213336977bcd8e3128c5d5","url":"assets/js/043fa146.cea2d1a1.js"},{"revision":"d72a5bd6b2ea1ce34d4a1c968a5b8729","url":"assets/js/044f41a1.204bb0c9.js"},{"revision":"72cee05f21e6cd1d7a92ef98a0952220","url":"assets/js/0492d44d.f8b8fc43.js"},{"revision":"ae492c4b8c8f7a1e20e38004cff23a8c","url":"assets/js/04f5c692.b130d41a.js"},{"revision":"e7ad62b19fb8ef7319f06fed26b9bc54","url":"assets/js/052366f7.c5c38da4.js"},{"revision":"6f07b5cb15436f026dce1e859c2f96b4","url":"assets/js/05278f71.ab14278d.js"},{"revision":"22cd5ca8fa265c490485a318cf22c305","url":"assets/js/053e2f33.69965da0.js"},{"revision":"3cb90a938db47219c85a2184f9e252bc","url":"assets/js/06b0ed59.30fa3773.js"},{"revision":"7c40043d0703dca794dbd284f2bd9b07","url":"assets/js/083acdf9.72ea7d6f.js"},{"revision":"cddb0cf386783f141e5cb4538bc1e0c1","url":"assets/js/083ebe2e.eb57dd3e.js"},{"revision":"6f51d3b47e734cd06c08a70a4fcceac9","url":"assets/js/08e7f72a.fce37009.js"},{"revision":"04e7cde39a824adb49f698d8eae942fe","url":"assets/js/09156d2e.c5e0999c.js"},{"revision":"90d6ee0f18e9d26a0690020df2d1a4bb","url":"assets/js/094a7dd6.648a5931.js"},{"revision":"3d09c67597cc71372cb2392a0158132b","url":"assets/js/09714880.f829b50f.js"},{"revision":"18a32a2cdd1656511035b9436f89accb","url":"assets/js/0a17cf6d.95847b5f.js"},{"revision":"854b1f098ce6ef00b50b882ae0a2d9e8","url":"assets/js/0ac0b3b7.1499af4c.js"},{"revision":"c45c4f622436bbd0885680654d253e6c","url":"assets/js/0bcb5d9e.43525cd4.js"},{"revision":"c9e51d54f3cae22c321fbb2558dd618a","url":"assets/js/0c7f12b6.c4166bcb.js"},{"revision":"2a24cd727a6de89c5311e95cf9c71bbc","url":"assets/js/0e384e19.12117163.js"},{"revision":"ae219a612ce4e26eac6ba825110e9b1b","url":"assets/js/0ec7bf36.2b1c4570.js"},{"revision":"5620ee9a222891df51db514e9bc20fb7","url":"assets/js/0efa0f03.fbdf0656.js"},{"revision":"6ee1c8c3378269a497a11900b99b2b82","url":"assets/js/0fc807d9.7c0a1585.js"},{"revision":"f228ce42490a265717dcc441951dfd5c","url":"assets/js/11f90be3.6617c54f.js"},{"revision":"56b965b25e6e77a302ce108dfaf0fda9","url":"assets/js/1210f0b1.0e0d3956.js"},{"revision":"8f374f17f6d021a0812e1c893fa1c8d7","url":"assets/js/144520df.14040fd0.js"},{"revision":"17ca70d3092f7a28ebd3944341c9fe9d","url":"assets/js/14eb3368.1b3a40dc.js"},{"revision":"272dce730295ce43416aaeba7ecd03d4","url":"assets/js/1537.c5a762c0.js"},{"revision":"e8d6276ef84fdf825ba8d1bdaa55cedb","url":"assets/js/15daf372.29e2a125.js"},{"revision":"660491677e0566d75a3524f2ea02b78d","url":"assets/js/15e4e3ed.2b029100.js"},{"revision":"2deb9bbce1817df4b12e4fc15d5172b6","url":"assets/js/1760.e90d3aca.js"},{"revision":"88670c57d3d175894d3f201d377c6490","url":"assets/js/17896441.8433a9a7.js"},{"revision":"cca73fbb82330d426f918b0541d7126f","url":"assets/js/180bc163.a8c99fe0.js"},{"revision":"0e07be30b3a259e0d60e95b26c5f0cb8","url":"assets/js/1856fe2a.3b39f75d.js"},{"revision":"bec286ea2eef8d5e5da21a8a0817abb8","url":"assets/js/185d6330.8b9773d6.js"},{"revision":"e688f8cc238225bd274152789a088639","url":"assets/js/188.d81dc71f.js"},{"revision":"b65f3e4a5ff9021d8347d95dd4310cd7","url":"assets/js/18b67442.aced2c3f.js"},{"revision":"052e762ee03bd408fa3ca2387467aeac","url":"assets/js/18bca995.cb362f8a.js"},{"revision":"58c55df0151f5dd0b32f811035054da1","url":"assets/js/192.bd2ea5ef.js"},{"revision":"7046d553da34dbd9df0682356ea7a7b4","url":"assets/js/193a055b.79551cfa.js"},{"revision":"8b7face1098c12c3ada20967db68c54d","url":"assets/js/198ea2e3.9ff46b77.js"},{"revision":"8c4ca6a97822e5578f4ffd3f50a6ced6","url":"assets/js/19cf8050.c27b5296.js"},{"revision":"31fdaf098ca6c5023f6120b36c9cff5e","url":"assets/js/1a4e3797.e7dafb65.js"},{"revision":"dd584ffb59859256fdfebdf9acaee485","url":"assets/js/1c42be93.dad6c474.js"},{"revision":"e0132a8109678d8f686bdd6ce20bc553","url":"assets/js/1c6846f9.adb87860.js"},{"revision":"f9c887c281a54b545822ba0667150742","url":"assets/js/1cf75b4f.a46b98bf.js"},{"revision":"9bfceb94867e2d56d31bf6fb188c40ad","url":"assets/js/1d1b9adf.d8f8bb6d.js"},{"revision":"e320ddec967d4288ed010f3803babce1","url":"assets/js/1d42ad15.65957f0f.js"},{"revision":"65595979d1f7f9f445658a08be51d91c","url":"assets/js/1dfd2628.555eaa38.js"},{"revision":"e1b0766c41d0c408f26ee7352383dff9","url":"assets/js/1e0a547c.d5b22be8.js"},{"revision":"c792aa7e695a3a62adad390ded2bab29","url":"assets/js/1e47cbc1.06db38fa.js"},{"revision":"ccc679b5073932765850063715aa22a8","url":"assets/js/1edb7625.d8b6032e.js"},{"revision":"ab1911aa71c042011c33fe716afd0e53","url":"assets/js/1ee6f0d4.92b659dc.js"},{"revision":"4a41c7c5dcddf30981f32a46b31be479","url":"assets/js/1efacac9.c7b87f23.js"},{"revision":"41a8f12361917a6c4bd95279041bec0c","url":"assets/js/1f81f646.995b1122.js"},{"revision":"a1b5f476c92366c80f36653b668d2f0d","url":"assets/js/20215aa7.845e3ac4.js"},{"revision":"2469ec8eb7303ceb7c131164ad1e2b05","url":"assets/js/20547864.779fb1a4.js"},{"revision":"8391008473bfe609288ba532fd86e9f7","url":"assets/js/20d69604.bc1b1e24.js"},{"revision":"1ff2e9367e85664c71d8591f0ce73054","url":"assets/js/21c534b6.dc90ea0a.js"},{"revision":"79e5998763c839557c731bdecac27b33","url":"assets/js/225.7a67a60a.js"},{"revision":"ef47a031ad07552bf834d5348fbf9bf6","url":"assets/js/2423.fd094983.js"},{"revision":"3348d5e3267dfebabe33b17728c23cf3","url":"assets/js/244418a2.4bb3dea7.js"},{"revision":"cef944c7272f208c85ef02994d626f4f","url":"assets/js/24a68a77.738ed7d7.js"},{"revision":"a7cc9b18d6aa137ef7e050b93c0912dd","url":"assets/js/24d8f7d7.e3653fcc.js"},{"revision":"23e947d2a4e9a033ba1cefa486ae9378","url":"assets/js/254a43c9.9c1a8f41.js"},{"revision":"6c8e4594b69897f213ed55a82eb4db75","url":"assets/js/264.30bc98d3.js"},{"revision":"323f2d2ce178baedb6b82b3a5f1b9205","url":"assets/js/2867c0df.441d0e2c.js"},{"revision":"c238cf3d2388582e773030b2271a7eca","url":"assets/js/289.827ef2c5.js"},{"revision":"c07d88ed185cb1d73031abe6c58d8dcb","url":"assets/js/2a71d676.71aab854.js"},{"revision":"5c920d1e176fc41e3b52ea15800718a8","url":"assets/js/2b4e0304.386373da.js"},{"revision":"09a797132e836312fa895bd37685c078","url":"assets/js/2b9de2c0.eb3656ee.js"},{"revision":"1c6cdb1bcc56c41107f6adbc0b74e69a","url":"assets/js/2d386ab7.a351fc47.js"},{"revision":"9bbaddccac1c656849ccdf209cd6d18c","url":"assets/js/2e938706.9f90830e.js"},{"revision":"393d4d349183c9f13476f4215c417f2e","url":"assets/js/2f39a0af.6f5d6409.js"},{"revision":"bdd46b207b19fab0d01d502f97861927","url":"assets/js/2f8ede37.9076d97f.js"},{"revision":"7a09eead6c0d9b93c64e93d3aace5b55","url":"assets/js/304.ac7707c7.js"},{"revision":"ad503a55d57117b7a08dd7a9251b68a7","url":"assets/js/312f6c84.fafcf24f.js"},{"revision":"30b4e065d3f379f8ec10ba08deb3f6bb","url":"assets/js/316.df55a7a9.js"},{"revision":"7cd5438b49e07725ab0c8ac07ef5ff15","url":"assets/js/31735ebe.e04e0e10.js"},{"revision":"1fa86a9b0ac0245931845748bb49a5a9","url":"assets/js/33261842.3f985574.js"},{"revision":"3b525de5afef1913f1c1b88be7b5dd5a","url":"assets/js/3373.191ecb58.js"},{"revision":"42817132ebfbe124885636e53fb38fe1","url":"assets/js/343bb2fa.5bc825be.js"},{"revision":"c81f82d4975bcc7b39d5226e1db98efb","url":"assets/js/3488027e.53b8d3b6.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"dd4e138fea3d02c7863062ebd824b425","url":"assets/js/359195cb.4a0612fb.js"},{"revision":"912a0b200335c004219b6dc3e35e11fc","url":"assets/js/35d30f29.45958cd9.js"},{"revision":"56887339331e71194208c9687ce5534e","url":"assets/js/3636.ab3720db.js"},{"revision":"97b884ccffa9dfc2ed436cb838cf181c","url":"assets/js/36c75202.963e8f22.js"},{"revision":"3597c7c709bdb52977547d4fab890c78","url":"assets/js/373.e4bcc5f6.js"},{"revision":"951252aeb8ae0040594c08ce16cd8fbd","url":"assets/js/3747.b5340f88.js"},{"revision":"29b53e58890c755cf2379c04acf32230","url":"assets/js/3749f972.c9a11286.js"},{"revision":"c056ee20a564c59b443c176c00ca5bb5","url":"assets/js/3868.49019453.js"},{"revision":"fb8a79789b7010ae768c3db1e0f8acff","url":"assets/js/38b0474b.1e74f339.js"},{"revision":"1ecffcdf7f12c7ac3101f6b2285d9acf","url":"assets/js/38b71911.0293aa37.js"},{"revision":"209576a5c90c746e4fe1377c04721f78","url":"assets/js/399101db.0f69edd2.js"},{"revision":"385a0bd43c3d9c7b53bbc36f998d6e97","url":"assets/js/3a42456f.c26e6adc.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"cf92042e27c1ae0ee33855a721fca2bf","url":"assets/js/3b8970d0.1cfef7bf.js"},{"revision":"21c00685c69f0c3f05ba609acb49ed60","url":"assets/js/3bb1ea30.f1cb8b46.js"},{"revision":"a7e8e57fac81978295939db2e3f8a64c","url":"assets/js/3bd1ba02.39f31ecb.js"},{"revision":"a200d0bdc4f86219af06222dfead88cc","url":"assets/js/3c5393f3.b4262cab.js"},{"revision":"3faf9b8d9646460118c4ac0701cad42e","url":"assets/js/3cd38fda.7bae7d63.js"},{"revision":"cf7a3f6d3e09f16ae8a2fb2a76cf7218","url":"assets/js/3cd65ff0.639be6fc.js"},{"revision":"8a209e54b83441b76d62cb96f99c16ed","url":"assets/js/3d7f94ff.f38adac3.js"},{"revision":"576afc155248113d35bd068887a5dcf6","url":"assets/js/3dd749a7.b2994ef7.js"},{"revision":"b0910c1c2c53d72342940b4b5caf368a","url":"assets/js/3ef38818.17f49cb3.js"},{"revision":"6afd2b62ee35ca1324cddf2913e1524b","url":"assets/js/3fbeb9b5.5a54a081.js"},{"revision":"688cb9b8627601c023eaf909fc29d82e","url":"assets/js/411.c2ae933f.js"},{"revision":"82138df27b6bb75a7e904d6f039b68a3","url":"assets/js/41c0ace0.214cdef4.js"},{"revision":"bc291358ac6bee42a1fab164adb42ff7","url":"assets/js/423.fe93ccac.js"},{"revision":"037eb9326634c26d2082413727de76ca","url":"assets/js/425e3dd1.998caf4d.js"},{"revision":"efc28cffff7ded5c603507790e9138cd","url":"assets/js/4305.699fbca3.js"},{"revision":"889e4f7657022a3dd3f8238b22f076e8","url":"assets/js/4307.f556133c.js"},{"revision":"41c969b1b0d324dc58ffc0df8d96ad64","url":"assets/js/431266e7.3da0d154.js"},{"revision":"97e6bd96809f15ded59decd4c438d2f5","url":"assets/js/445c22af.3cfd1aea.js"},{"revision":"0e1fcbf52acf359bf9701d9208b9b9e5","url":"assets/js/44975943.f975012a.js"},{"revision":"8313d17e5ee183d7d76a22ca7b4e0651","url":"assets/js/45cd711d.ac664186.js"},{"revision":"40a5cb4ab60accfac0df7aa637c493fa","url":"assets/js/4695.cb4978da.js"},{"revision":"615c1f39d1cb34001d5c6793f303f7af","url":"assets/js/46bf3d5b.a7d24569.js"},{"revision":"441087e93a70cbbb19b30ec7d86f195b","url":"assets/js/47.73c909c1.js"},{"revision":"d89bde5e004dfa2be5f8ead5cceaa1f0","url":"assets/js/4838deb2.a02502ca.js"},{"revision":"6d0582498eb60f9b76c4d01597a634e6","url":"assets/js/4900.4a85eb3e.js"},{"revision":"df4bff450c5f8fe128710d0310ad0d75","url":"assets/js/49aec60f.7b709eac.js"},{"revision":"378bfffe54aa5d44031f4e6f233f98ae","url":"assets/js/4beb5b8c.2fe66fd0.js"},{"revision":"f523eeda7fe779faa010d9a4cd76ae40","url":"assets/js/4c7ea6db.b73204fd.js"},{"revision":"5237817708dacb34d697d6e1c2179f01","url":"assets/js/4cdf84ef.5ef1f6aa.js"},{"revision":"644862ce69abfa9d4c34f4c7a87db263","url":"assets/js/4d27c60c.9a643759.js"},{"revision":"06c164d0b326b9a13022a12c3adb369f","url":"assets/js/4f644c0b.dd99621f.js"},{"revision":"c1562e72c93a59bf6dda0150f0210fec","url":"assets/js/4f8bb2fd.9ce403e4.js"},{"revision":"4f7a3972ee83066c02fce4e0393ece5b","url":"assets/js/5008.ff0573b4.js"},{"revision":"a97d0da557019f936f18282046fc5023","url":"assets/js/5047.21185203.js"},{"revision":"32c08332dd27e1d6fb6a3dc82c620688","url":"assets/js/50b793dd.c9b52d5a.js"},{"revision":"a32f81919f1d177ffa3b7b91b13559e9","url":"assets/js/5117.01105d5d.js"},{"revision":"41673b3cde968514e3e15205272970fc","url":"assets/js/51ebfdb4.c48afe78.js"},{"revision":"89876489183b7efb3334e53f5158de42","url":"assets/js/522fd580.536fe0ff.js"},{"revision":"c92214c40860ff74c7ba2538936a4bd1","url":"assets/js/5289.e3079c7b.js"},{"revision":"fd2e356c655ef2b1d8eaf77313096cef","url":"assets/js/537.1cbfea41.js"},{"revision":"d16e960dddfcb889eae69fd885b9979a","url":"assets/js/541d5637.996d6082.js"},{"revision":"73987ee756598cd6d2a3c353ac5ee14d","url":"assets/js/54a35160.8b3bfc6c.js"},{"revision":"36c30b6eb2a74c3f01b48d68c4d0fa7d","url":"assets/js/5571.39f6adb1.js"},{"revision":"74f84509ca5b5d294c09c37847aa398a","url":"assets/js/55aaead0.a24f1361.js"},{"revision":"d436f45843aec58cfc8245d580ed01cf","url":"assets/js/5606.231f2c50.js"},{"revision":"c515070e68acf979a87bf0214e3d9771","url":"assets/js/563b5c65.ba0c1f9e.js"},{"revision":"1e3d3d4105f29da84df92c58e39a4f73","url":"assets/js/57ecc2b7.5365697a.js"},{"revision":"251439a155eab1e6a98628aadeaf1f94","url":"assets/js/5834.82c62804.js"},{"revision":"46b78b6a6919aa97f652c3ca53692fe7","url":"assets/js/584.ac6b39cc.js"},{"revision":"8ece22da84929411e0395eade38dd4f5","url":"assets/js/588dd44d.3d4eb8a6.js"},{"revision":"f1b214e1e0f2feec086897237b18e93d","url":"assets/js/58fa4e48.c706100a.js"},{"revision":"3ecb6270745cebc93b12959aa7941566","url":"assets/js/594bb6c0.29f24afe.js"},{"revision":"9e13c457e720c9ecbda2b731161a8daa","url":"assets/js/5a5e1dd9.abe89e9e.js"},{"revision":"4e1f95d2f30faa865429b6a32b82d5e5","url":"assets/js/5b3491ef.562a6783.js"},{"revision":"2789ffe8fa7a2dbd168f31d12b9cc70f","url":"assets/js/5cdb4525.6df0fa6a.js"},{"revision":"50fd3232607ee9ceb97335f4fd6e57fb","url":"assets/js/5e6d1f8b.e5351fc3.js"},{"revision":"f9ae90e26740999e8971989e8ba4236b","url":"assets/js/5e95c892.f99d74de.js"},{"revision":"0f6ad4e543d83be4f99021eae303c493","url":"assets/js/5e9c3b6a.3c19520a.js"},{"revision":"53144b718745b9bf37a21ce07ec314bf","url":"assets/js/602bb363.38a4a142.js"},{"revision":"68dd8e5fb6ba512b760906a7b63247fd","url":"assets/js/61aaacfc.418b0396.js"},{"revision":"93bf132f3e970dc29f500652dba951cd","url":"assets/js/6228.62ee8f75.js"},{"revision":"5b24c9cce868af1a0ae59ba4ebf62435","url":"assets/js/626.a9e6927c.js"},{"revision":"79b41ec7703bc12dc2d09a3a233ac19f","url":"assets/js/6304.d9ae89f9.js"},{"revision":"e1b33af707afdaab4bd8aa22d5356aaa","url":"assets/js/6316.c9bb9321.js"},{"revision":"24b96a68136425450ea3d766c79f552a","url":"assets/js/635cb825.4e8271b3.js"},{"revision":"1f6ab7b93e9c82fc52c3e8fa528c7b48","url":"assets/js/638.744ee2f0.js"},{"revision":"cc9b64249c63ea4442c6b75d8237cdd9","url":"assets/js/6415f59a.caf3ccaf.js"},{"revision":"a25913466f4fd5c8a8a3545143bf9cf6","url":"assets/js/64614d1a.ae7fe1ba.js"},{"revision":"ef05fbfd5f340a5522c13a39577b43c0","url":"assets/js/6475d366.2f547c09.js"},{"revision":"f3df008e9bb8775222d56088674d4325","url":"assets/js/6557cf1a.3c943cd4.js"},{"revision":"da343d9d435f65b4f4772b91a9f0e8d2","url":"assets/js/6577a0df.d9fd88d9.js"},{"revision":"cee3f2c0826d84aa7e6506fef856cd88","url":"assets/js/65bc360d.c52fd25a.js"},{"revision":"5e619047ba1d0d1ed58bdfbb9ac1e917","url":"assets/js/6638.b0b04cfa.js"},{"revision":"a7a6d5010f36151371fb264efa5d5251","url":"assets/js/6762.1f5e3817.js"},{"revision":"920cb27b3f3ea0b312b2104a83a1892e","url":"assets/js/6775.cba7a5b4.js"},{"revision":"716980711af563c158acc3e3a31441fd","url":"assets/js/681b7af4.4783e26b.js"},{"revision":"79e3ec02e352bda5f614d4b4880d9f49","url":"assets/js/69df999c.087f467a.js"},{"revision":"df31873cc5e9ea12286a8e9b64be4c95","url":"assets/js/6ad9afaa.f5a749eb.js"},{"revision":"25ec728f02ac3fa3d46d11988a6bc630","url":"assets/js/6b902128.51a068fa.js"},{"revision":"afe1f1dd7792b5e755ac7a334fca9e03","url":"assets/js/6cd9d647.a7c44518.js"},{"revision":"35ed60167ae8d87c10e7668502bf6ceb","url":"assets/js/6d6bd066.f61074cf.js"},{"revision":"d7ca2e97076058a03a102b8fc81be0cf","url":"assets/js/6e3d6b93.222b7013.js"},{"revision":"832ff963fd86ae505a7fbf7873507361","url":"assets/js/6e889b7a.724dc0ab.js"},{"revision":"f294d2a274507ce282d8a66086c2923c","url":"assets/js/6f2b2af5.90d18b24.js"},{"revision":"fe8ee9b95debced0689fe489afb8deac","url":"assets/js/6fedb7a3.9cb495a3.js"},{"revision":"617226573c5cfb1b7685c946a0f656f6","url":"assets/js/70321d34.748ca28d.js"},{"revision":"df3307288575627d1439d1c002e076f2","url":"assets/js/7188.9be0b533.js"},{"revision":"f46670eff76bd7dbc9b4f87dc1c2360d","url":"assets/js/7192.8fd9f9bb.js"},{"revision":"4d7dc4f601285840fdb5b99c86b6277d","url":"assets/js/71bd92ad.7fd4ee97.js"},{"revision":"53ead263070a7840e248c84330c062db","url":"assets/js/71c41cca.2484615f.js"},{"revision":"e32d3d0e488305c28ecdf6ceb3635b9d","url":"assets/js/72b3e7dc.847cd758.js"},{"revision":"246127af4b8bffc2adee621a55c06c27","url":"assets/js/72fea898.078a402f.js"},{"revision":"194fcfa19acd0feb8bea9afcfdb53682","url":"assets/js/73c38494.208df93e.js"},{"revision":"41da775dc6cbebe51da4cdb7e0075521","url":"assets/js/73f32b8b.4a7e51b0.js"},{"revision":"bb22db09ca9f40698657eee0bb8906d5","url":"assets/js/7411.d34a42cb.js"},{"revision":"f75602253625051f47af6a2818bce4d8","url":"assets/js/747.bc1878ba.js"},{"revision":"f0c1e81b728085db02663cbdc0ee817d","url":"assets/js/7515.fb042b69.js"},{"revision":"750df72d0b395341770026afdf605fea","url":"assets/js/754296bb.2f6727c2.js"},{"revision":"f68a75df0507ae96f6dc7b4e7c604d02","url":"assets/js/7584.855762aa.js"},{"revision":"8ded373bd1db433c76d7b7b89dabd368","url":"assets/js/7585.21c79de9.js"},{"revision":"a846d1d50e09b97422103e18774c8eb1","url":"assets/js/760.98e67eab.js"},{"revision":"54a94da4bf8e9f11c9519afb3e2aa539","url":"assets/js/762.220e4ca4.js"},{"revision":"a4abfeaf696bbe4fd882c66561015d51","url":"assets/js/775.a4b47dfe.js"},{"revision":"d39b3a58099aa0bb51cf266b0989aba3","url":"assets/js/790b642d.cce702eb.js"},{"revision":"288f52f99cc213c9a17fb83022d8f781","url":"assets/js/7970.170ddeb0.js"},{"revision":"9644a9d7d74ddfb70b512ac37c069a4e","url":"assets/js/7998.a2e4d5f3.js"},{"revision":"0e3fc01f69a37f7ed1158a99ab7f3193","url":"assets/js/79ee951b.f7b05c73.js"},{"revision":"e796a819f11532a48c3e67573baaad5f","url":"assets/js/7c328fb0.8fd7a642.js"},{"revision":"35c56f1c9ff0b2f1314e2113f81ed8c5","url":"assets/js/7e75dadf.03dc6f8d.js"},{"revision":"c82cd1fcd982aca2db366d6b0cfd6bf4","url":"assets/js/805.bb1da7b6.js"},{"revision":"1e0eb055641fcd887d36b0045830c273","url":"assets/js/80f373f2.615ede01.js"},{"revision":"04787bf8b18dece3c270ee882b7eda6e","url":"assets/js/817191e9.388a7ed9.js"},{"revision":"b4ef0310065d7dcfe649f198e819bbe1","url":"assets/js/81e8afad.dada4d28.js"},{"revision":"a6c70e1d189cc6f8d2c911a1eb3c798a","url":"assets/js/8225.e7b15e8f.js"},{"revision":"a0dd3503d1c4c0a593850a7ef3d39c9b","url":"assets/js/824c452b.2a892706.js"},{"revision":"96d1f0d47b77942c47ef015e18289686","url":"assets/js/82c03827.1951274e.js"},{"revision":"91e60d781347639d26eaa557fc9ae09d","url":"assets/js/83236138.e7b91c80.js"},{"revision":"05b8f70168b34927ed358a570677bad8","url":"assets/js/83fa3eff.1abd6ca2.js"},{"revision":"8dc46a8d8abfa9448ef3e677c6a04a80","url":"assets/js/853.6812ef3e.js"},{"revision":"792f7eb3bb4b6bb73bd67d970cce0ee2","url":"assets/js/854b257e.095dc5fc.js"},{"revision":"9c5f9018809df73e716202e743af9c53","url":"assets/js/85ccb835.80eb1e18.js"},{"revision":"2a6928bab866296419c2762494e25422","url":"assets/js/86170a86.a72adc0a.js"},{"revision":"3a4d168c9ef456cdcfdbf4f909669fb3","url":"assets/js/868.4d467bc6.js"},{"revision":"af5a2da55694d5eddd047f0e66c47de9","url":"assets/js/86d633e5.2c591101.js"},{"revision":"2f0b502c3eaea6c1e2a4bc145a1bee9e","url":"assets/js/87531641.080a2580.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"7c0c19dc7c67ecf6e6a943c64f57592a","url":"assets/js/87d5db97.46af8700.js"},{"revision":"2159f9f34828189596afdf00ac028b6d","url":"assets/js/8805.3225cd25.js"},{"revision":"0d91a85e12f1369fef71035de778f2a3","url":"assets/js/883b3acd.e1b5cc3a.js"},{"revision":"bca398eac431d53bffac077e1f1311ed","url":"assets/js/8853.7a84ba1d.js"},{"revision":"c21995a97e010afa10ef50bdf4aab00e","url":"assets/js/888a5ebe.2586a9c1.js"},{"revision":"77e33ce3805bc5a39fcae133c50468bd","url":"assets/js/893c6fee.69211576.js"},{"revision":"24857a63b7dea7ad62461e80bd8a0015","url":"assets/js/8a578643.a4482c50.js"},{"revision":"7380aa778c29701393376cf16099bca1","url":"assets/js/8b23f58f.1b8ce837.js"},{"revision":"c0edb505495955c5e8169846ea45286a","url":"assets/js/8bdaa531.d1f0bf5f.js"},{"revision":"9b5896e8f4d594c7d37b71d2d7c466d1","url":"assets/js/8ca7e4b3.053c4193.js"},{"revision":"c8dd94551c3e0c024d0e8948103b82a5","url":"assets/js/8e0be0d1.52c99a2d.js"},{"revision":"4277a70a2b171dc8dd6c6dbecdb656f3","url":"assets/js/8e6a4e74.884c0100.js"},{"revision":"44bf6cf36f0f469ba17f50b2bbef2a3b","url":"assets/js/9039.0c411ce9.js"},{"revision":"33915c8b53ee60ea2a057f2d90d7fcee","url":"assets/js/9197ae7a.d01d5793.js"},{"revision":"b39d9e3be9dc691d1414bdc92a90a9cb","url":"assets/js/9229f78d.bdd26c58.js"},{"revision":"0fd76ce1b6458d564fabff84b14a0428","url":"assets/js/932.6ad772e7.js"},{"revision":"026e1cec003a50e9841f371b36e031a7","url":"assets/js/932.9d69cd03.js"},{"revision":"adc7b238c108a19c9cae032af3b7577f","url":"assets/js/93456434.61cd407f.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"fcb2a0ea230d9fe3a3421520c45ca2be","url":"assets/js/95bcd1dc.24d74d3e.js"},{"revision":"169979b22b0e76eb89103f59e6340c25","url":"assets/js/95d63b84.12f35ea3.js"},{"revision":"1cd6346f6a8f8c4c43cbcbaf4a7695bd","url":"assets/js/9861953a.c2c22240.js"},{"revision":"407f0c5391579f736974d7b687b2d4cb","url":"assets/js/9951fe7d.17ce6c96.js"},{"revision":"8b1edb066a88340ffa8d20a206a97f32","url":"assets/js/998.e1b259e9.js"},{"revision":"94670c98f43e7d23f5ef848e6b6672da","url":"assets/js/9ac34ba0.4d083892.js"},{"revision":"18e1dc6d27822c3df3f67cafff8dcd24","url":"assets/js/9b8d311d.bfad0b13.js"},{"revision":"d36ad11bb5da8d3fc71d7f7dc99681a4","url":"assets/js/9c2278b2.3d90ab59.js"},{"revision":"ddd5ea9f3579a8d9ddca775c21441773","url":"assets/js/9cd2fc0a.f3a3e8ab.js"},{"revision":"a7699cf0f29e63166fb067cea6dfab57","url":"assets/js/9d4488d1.f49745e9.js"},{"revision":"b7320ad8f77ecf4efbf2d00473918a0f","url":"assets/js/9fdc340b.a154209d.js"},{"revision":"3e590418054c8c89387951c01fa29583","url":"assets/js/a1e55d50.aecaeb5a.js"},{"revision":"bf7a4cfe3d2125936f25339c5e4d3cf8","url":"assets/js/a21e984c.c50adc80.js"},{"revision":"0f200d433eab06c8d9a2e6b31d929590","url":"assets/js/a2ca8fe8.f9893b25.js"},{"revision":"ac0f806f440964a8109653b2a4f92d65","url":"assets/js/a2d5f767.9077f4fb.js"},{"revision":"8902b5cb6040d44ec05a91447df00873","url":"assets/js/a2fb89b8.711dbf8a.js"},{"revision":"39b63ab4e498a22d42b0ea97e4bb142c","url":"assets/js/a305e2ac.d36b2504.js"},{"revision":"3a135c6462ce3724227dfb6e23ff89dc","url":"assets/js/a4c78573.02236f67.js"},{"revision":"29ab53a5ddf43a66a6e96501ff9a17f7","url":"assets/js/a4e7ef95.01b0fe10.js"},{"revision":"bc2c57bc24667624a06c733ff11aa25a","url":"assets/js/a62eaa10.c80caa50.js"},{"revision":"f5ad0e20307e91447df088bb79d1d9d7","url":"assets/js/a6eaa2fe.020f2c27.js"},{"revision":"17f6a8cb5523dd0f26abf01e48813e25","url":"assets/js/a7062d46.cdcbda8c.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"b809fc5354f6e5533691296f9428f889","url":"assets/js/a757a55c.832b8ead.js"},{"revision":"ffc0f80608d301085b3f0a46c1b48702","url":"assets/js/a78b3ba0.9aedaba1.js"},{"revision":"4a0a2054df71b457cfc7d961b87bdb94","url":"assets/js/a7bd4aaa.91a2aee1.js"},{"revision":"4e1d2bed484418931f2da0fc21e9a7bd","url":"assets/js/a7ddcfcb.b04feef2.js"},{"revision":"b2a42fbf0063ec89211652f378970581","url":"assets/js/a8bdbcd5.c317c3cc.js"},{"revision":"5134c3ab2fe5842b5e39033649ee1a6b","url":"assets/js/a94703ab.b05c2422.js"},{"revision":"06584fbbfb58301cf0454e1359d91adb","url":"assets/js/a9c868b9.83cc9175.js"},{"revision":"1d204cbcf73508e09f869e9cc6b210b5","url":"assets/js/a9f9a930.57b4bc98.js"},{"revision":"65912e937963a85c15efdad2ee133a68","url":"assets/js/aa276556.80981356.js"},{"revision":"78f17b2d54301da9332d44479ae886dc","url":"assets/js/aa7b0feb.8f8335fd.js"},{"revision":"549a20e1dc298aa69ad0ca85cb7fd10b","url":"assets/js/aa81450f.0c911599.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"99f6ae337b365580f91a39e8fd02fc8f","url":"assets/js/ac61b989.cc6c4e87.js"},{"revision":"dd3f1eff89d41062b222de2923ddd43d","url":"assets/js/add4bb7a.9a265596.js"},{"revision":"a9819906d0c1d4c83ac0cdc2ceceb6bb","url":"assets/js/aeb124bd.6f4518fe.js"},{"revision":"607ee8bd17398dcbf6a685baad17a35c","url":"assets/js/af70a4d6.6264ce70.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"3858051c56ccc9972af06264a35c2862","url":"assets/js/b158dc01.5d5922b2.js"},{"revision":"477fbc77098671efdd35a6cdb519acb1","url":"assets/js/b21946ae.e82d7f78.js"},{"revision":"2c780c8c1afaf74ea0800b18ce827bb6","url":"assets/js/b222cacf.1943e017.js"},{"revision":"b5986344c68814ba04508682d734a6a3","url":"assets/js/b24d385c.e6970ae3.js"},{"revision":"27e0e7ec83c95b6384999028cd1962ef","url":"assets/js/b496f3e3.2c142a12.js"},{"revision":"46cc84a109c598df353a0aebcfbd0e02","url":"assets/js/b5210edf.9fcaaf9e.js"},{"revision":"fca97a4d4967058f6265d9e6ea6ad870","url":"assets/js/b5eeabfa.3a2b3a0f.js"},{"revision":"131c5fcd5039b745fe813dd8a58112b9","url":"assets/js/b60da6d7.06348a77.js"},{"revision":"5f830494ebbdfe28d4a970d8d2397c7d","url":"assets/js/b60de388.ef60d050.js"},{"revision":"fe36cd4855b96c31040321c35e1f24ee","url":"assets/js/b6386ec9.ac86cd0d.js"},{"revision":"26a200d60dd0146bc4bfe0735b533b45","url":"assets/js/b6438b6d.4f618454.js"},{"revision":"feea125ef4c60c5315c0a246e08ca6cb","url":"assets/js/b78eb33d.8c6e28c8.js"},{"revision":"fe3bc433c6d09be6c2c4e3b437307d81","url":"assets/js/b7bb49c4.e13ff809.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"63270890077abe5e9a134bddca5cd8a7","url":"assets/js/bcc35f8a.66678afd.js"},{"revision":"b284dcf1d1d859ae865b73553d3c3e8c","url":"assets/js/bd760347.b50350c8.js"},{"revision":"88915d62a719a7eb1e7172f44a849fbd","url":"assets/js/becf8c88.51e4f86e.js"},{"revision":"fb17d878429a0161c159d54e55155b00","url":"assets/js/bf3ddb91.985dea92.js"},{"revision":"d6bdaa4ed91868a3abcf6c8ebd740a5a","url":"assets/js/c0dca479.c4ea9972.js"},{"revision":"8726309bdbca5eb372ce231648581588","url":"assets/js/c10e86aa.dccafd42.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"c694f29276e67f5f90eecb881deda62b","url":"assets/js/c156da02.fcd5b2ce.js"},{"revision":"f0b88bbf24ba82f784781e3780e86097","url":"assets/js/c4dcc6dd.a399d73d.js"},{"revision":"df5e3ac7ad78db517593301029a4b808","url":"assets/js/c4f5d8e4.ff5b7cbf.js"},{"revision":"44747c2c5f35a8b761cc4318bb19b52c","url":"assets/js/c5f4348b.ff6a9bc0.js"},{"revision":"bd6b347a4d667f2b737063e7df2b646f","url":"assets/js/c72cf9c7.243b14ae.js"},{"revision":"afcc1ab1f52dc69ec3a62cfd1dbcf8be","url":"assets/js/c737e1a5.eddde848.js"},{"revision":"32426a98ed7a5eb2ab35c553f7fd540e","url":"assets/js/c78ecae9.9a85ae8c.js"},{"revision":"cf28d8c32714ce4f1421ad261a256b9c","url":"assets/js/c8018499.1d679f87.js"},{"revision":"d593a5535e8d2fa1aa54edf6897f6c79","url":"assets/js/c84a9914.6998c117.js"},{"revision":"202f82e2cfabdb2ab078322251bdd739","url":"assets/js/c8a93e67.7eee1402.js"},{"revision":"4c9791274f1e5482d489c2a86129bbd6","url":"assets/js/c9947f43.f4e822a6.js"},{"revision":"2add721112eb24b2f2e3e6e29c9f3dba","url":"assets/js/c9a1eaa2.d111daef.js"},{"revision":"aba77e28fb08e4999c8a8ccfb454f4c4","url":"assets/js/c9ae34fa.220f12a5.js"},{"revision":"7a1357a9b1d6a63e61a56a61867022b9","url":"assets/js/ca8a1b2c.cc477749.js"},{"revision":"b4ebc210f0ee678e94f55ad9ee44b53e","url":"assets/js/cc2fcaab.7f3158ad.js"},{"revision":"12b5f79c6e20fa1db511b5262095cb8a","url":"assets/js/ccdb3c45.0068f654.js"},{"revision":"419c3f6f7562310578644d99a76af23e","url":"assets/js/cdc590f8.f7b5f37f.js"},{"revision":"df28e50107869163c5e5f5eaaefc85af","url":"assets/js/ce7e7ba1.ce6d22b9.js"},{"revision":"6e70ba985f8f0b3b09111e9ca7af8486","url":"assets/js/cedf0e63.ac727b16.js"},{"revision":"c222c48a755e24d6903c97327f80f518","url":"assets/js/cfc0d51c.2891544e.js"},{"revision":"550c9f5901d3be86732673b19ca4217a","url":"assets/js/d00b9fd9.bd3ffe12.js"},{"revision":"13200441b08bd9eba58fbcddc197ed28","url":"assets/js/d07a3d34.b89cfcdb.js"},{"revision":"cac8ce4124687592f35f24a644764420","url":"assets/js/d0ab59b0.e31b7153.js"},{"revision":"103edb36ed44163f6e84d307e4a8f4cc","url":"assets/js/d26b0f2c.968a8df1.js"},{"revision":"d2269e15c5092d0b519ccf1157109db5","url":"assets/js/d2a9048d.fb60e829.js"},{"revision":"d578f2ab7faa4771076a0eb26d7dfda4","url":"assets/js/d2ba5076.dbb3887b.js"},{"revision":"a4960914da4e445a55d090e9e9bbc374","url":"assets/js/d3585a2b.6113686f.js"},{"revision":"7b715ca8017703fe3cd051ef2f3c962e","url":"assets/js/d45ccebc.cc673862.js"},{"revision":"a90afc477e9fdc2f79e2f61d27c80184","url":"assets/js/d494a195.d9cb2bca.js"},{"revision":"70ab5ab9f4355341f471951f82b0fbf6","url":"assets/js/d63ab801.ffba1988.js"},{"revision":"4705e8c6d6ae1592d730c4853ba06a06","url":"assets/js/d89bf822.8e3e62eb.js"},{"revision":"194e4c6073759b503c5ed86f98740158","url":"assets/js/d9cff955.d3d08d64.js"},{"revision":"3dffb20d368be6754888d0dacd1e7976","url":"assets/js/d9fe55b2.fb53cfef.js"},{"revision":"bfd956945d3865315272c4f67e3709c8","url":"assets/js/da4fe776.ab95ef3e.js"},{"revision":"d389da52a2fefdb5e2d0de019367ea85","url":"assets/js/db6afc29.72530e51.js"},{"revision":"e9f8171e46e299dd1ded97220567dea8","url":"assets/js/dc030738.6c47e91c.js"},{"revision":"3ce35010cd43b63273191f8201e96e73","url":"assets/js/dc109391.d7656057.js"},{"revision":"31e1e0e96d08d1c2eb4ee0315ab0210a","url":"assets/js/dd1fbe6a.457fbaf6.js"},{"revision":"bde0e89b46964ac667e127701e1a590b","url":"assets/js/df2a4a59.23488c8b.js"},{"revision":"20b1cedce85f4fdbf17f3aa8e4023755","url":"assets/js/dffb9609.532d8e31.js"},{"revision":"d7c1c29b5912bec9186238b5491431e2","url":"assets/js/e10e131a.a043cfd3.js"},{"revision":"601e5de472b937f5b4bf9c1cd1b43b6a","url":"assets/js/e17e6af5.3c80d783.js"},{"revision":"20199b57aa70dce4d73da0aa25110844","url":"assets/js/e1a53158.ddba17d9.js"},{"revision":"b0ca0b951d0eb135efc7074aa302df8d","url":"assets/js/e39d40ed.e98a2e2d.js"},{"revision":"a12393cfdf890ce5b376ba53b72bae86","url":"assets/js/e3b728f4.a79e92e5.js"},{"revision":"a575a121ec508c91617b503cef12cb02","url":"assets/js/e3cb94e1.4f13271a.js"},{"revision":"723c53844652bfd57d9f082fe1f58ff3","url":"assets/js/e47fd75f.467cec37.js"},{"revision":"c7fa5fa1119585cb92bcfa6022264018","url":"assets/js/e48b3322.7516fb08.js"},{"revision":"fbe81b2349bea91472821ca61040841d","url":"assets/js/e4e92f42.ba0490e6.js"},{"revision":"5719726e906366b59137e5c3cdbee2ed","url":"assets/js/e5f7cd7b.c9f364c6.js"},{"revision":"b4ceaf6598218af5900c59b2f5b38d54","url":"assets/js/e6501e5b.c0d306c9.js"},{"revision":"ad76cb946c65250aeb3d11a2a57cd998","url":"assets/js/e682932b.88fcb41e.js"},{"revision":"2c7c1419e98aaa9cd612e7a1f2c92ccb","url":"assets/js/e6b53073.25745203.js"},{"revision":"e6bd7ee5f99bcd13cce46a9e268ea9d3","url":"assets/js/e76d69e4.f741b235.js"},{"revision":"761e3fdbc1c8d2db1f9a20f112e361e1","url":"assets/js/e8d5b74b.0546dc8c.js"},{"revision":"f94267963c4bde9ed075ed58d6365b45","url":"assets/js/e8dd6634.85f4a063.js"},{"revision":"66cba54a58405d1ea435e83c6198c17c","url":"assets/js/eade58ca.d1a4c347.js"},{"revision":"244831ee315b8b3491d6e962a31dde4d","url":"assets/js/ed38b210.b33e9e1e.js"},{"revision":"0f8b09015890418c5ae8745653f8c000","url":"assets/js/eda49e41.4dc40cfc.js"},{"revision":"d2f71c607490f09f175646d2a51d4538","url":"assets/js/ee84ef31.65090a31.js"},{"revision":"0b442cca6c6ceeadaeeaa960dddf3d34","url":"assets/js/ef72e420.28e85c4e.js"},{"revision":"7c5aa32184683f1af85940deed0d53bb","url":"assets/js/f36074be.91585524.js"},{"revision":"a643fc30af99037078e0e5079ae3a17a","url":"assets/js/f3937ce2.b7bc1ebc.js"},{"revision":"29ac6c843185d41df79fc3a1707d6b41","url":"assets/js/f44068e7.a1783a80.js"},{"revision":"869515a8f950ba06cb5f83903da4e07f","url":"assets/js/f4e5f89b.11d78066.js"},{"revision":"47d0fe2070646a0328726180c2acc7ba","url":"assets/js/f58ceb15.ca84f8d6.js"},{"revision":"e0682e002f2a3ff2f6346141412c6649","url":"assets/js/f6420a7d.9aeace9f.js"},{"revision":"d3bccea55ef647289a74c0d1347a013f","url":"assets/js/f7e672b1.642742b5.js"},{"revision":"79e3066bfc0441f468d20b77ea76d00e","url":"assets/js/f83b6261.2cd0061e.js"},{"revision":"b84635d3e104c3877f5f2558dbfcfed9","url":"assets/js/fa9e7027.a722edd2.js"},{"revision":"b6ed1122cd16d02593891bd89a68d53c","url":"assets/js/fb274994.98a4d333.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"0287591f3090ca0b403357258bb5b64e","url":"assets/js/fbcb1a27.b7531f6e.js"},{"revision":"388d3ac87c6dfca77db0e44f716e80da","url":"assets/js/fc419e9c.39a9e6f0.js"},{"revision":"7eefca8cc8fc58cb63d11078737bac2b","url":"assets/js/fcaab584.a5f15e54.js"},{"revision":"df4af6d195810e660ee7208607f498fe","url":"assets/js/fe5e75f3.e029997b.js"},{"revision":"d02ae07e523df81db3b1f81e215247d5","url":"assets/js/main.dbc073c2.js"},{"revision":"cdcd8c54297a0547cfd98cfebd2b85fe","url":"assets/js/runtime~main.eb093b23.js"},{"revision":"f9c5f1de25ae8a2101d37d9787f8e81e","url":"basic/index.html"},{"revision":"86428e6e5552443a7fd68bc87c5348ad","url":"Bedrock/bds-core/index.html"},{"revision":"a2824f56cc64da0e6ad29bb507b2a99b","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"aef031a9ab019f0ad496fad8e3107e6e","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"a50742f760d307b256e9fbc1ccfbfca4","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"73c6455dbbabe046960960233efaa649","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"1fb3ef3a26e5485712a3ec20cd6571de","url":"Bedrock/bds-core/process/index.html"},{"revision":"4b4089fa6faef1243086a29c7708798e","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"4ed099f845b95034cdb483773a19b777","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"3ac2030a1e1722cc6b9b4744b3f3c81c","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"b2b0fbeedebcd616d16345a528207af8","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"506cba56deafa28ef9fdb9593311c18a","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"08213b88fcf6ac6dbf8a2301b7fc2ac9","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"62e9f4d4606fc17f43067d739a22a427","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"6fc59dd8a287e2a40ac149ac5bd2b943","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"52d6683beac382b10ff2d5352e317e55","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"0eb2b40dc2ba520ad37623efd917288d","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"877e8ecd3043a4b063a1cffecef91856","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"5d105d3b03f00bb695617af42b80b4db","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"4e89e389b4ca859cb9b31fb9ea6e077f","url":"Bedrock/bds-core/start/index.html"},{"revision":"883bedbec79abad396df62b765504e68","url":"Bedrock/intro/index.html"},{"revision":"7013808214b12056065deb76be130f29","url":"Bedrock/nukkit-core/index.html"},{"revision":"61bfa373980ed3225c8113d00402a612","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"9eb5527944775cf2946e6f3701381e54","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"4bd01fbc180878fa19999e17adf429cb","url":"Bedrock/pnx-core/index.html"},{"revision":"e2854e065a1413ea8b872bb4098833d2","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"617796a8c3e2792238dea3ad7f762126","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"caf9e26fa0ce0da58c05d547c749c8d0","url":"Bedrock/super-basic/index.html"},{"revision":"63ca663edd1100415ea18ebe92629000","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"d955ef6683592fc7a48ddd0e7b2a2fe8","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"369e0cffb8c3081ef81e4f1dc11b6492","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"77965c78f161274e557a1cc774102501","url":"Bedrock/super-basic/version/index.html"},{"revision":"c3f57c4d6a8b09a2961ec1a302b0bb0c","url":"contribution/index.html"},{"revision":"ae9c23dee6d7727752cc3fd40d86b07b","url":"contribution/todos/index.html"},{"revision":"67fa64eaeb9d83f47e57402dc5cccb5c","url":"contribution/writing-specification/blank/index.html"},{"revision":"0e7f5251451c13e6d28c4d1947ae1ccf","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"c303aeef3e552cb0e05e01b51aab9489","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"df38c56a1c8d93d8307b6b4fa52dbe94","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"99233026496bcfe07a99f4dd2ff8cbd4","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"1d6f9709014e7c2aa21f5ab75e641e2d","url":"contribution/writing-specification/reference/index.html"},{"revision":"ff44a6310cf2be01ddc1fe7ca1ce96f3","url":"contribution/writing-specification/text/index.html"},{"revision":"2b25ff9a26dd84905992fd091798c75c","url":"contribution/writing-specification/title/index.html"},{"revision":"1f0a31875f2791e409be2cecdc62e23e","url":"contribution/writing/index.html"},{"revision":"10bc3f5b9a6c7f378b440a028c03f105","url":"database/backup/index.html"},{"revision":"4f2782a291bcf9e95e8f318fe13f30f3","url":"database/configure/index.html"},{"revision":"77a860d8312e90dea570e591292e0919","url":"database/index.html"},{"revision":"9745158d525b4d202dc8e366436206fa","url":"database/install/index.html"},{"revision":"221bafe86c93ed7250911d334a360d96","url":"database/manage/index.html"},{"revision":"01078a84259848456b5de754db82dfe5","url":"database/uninstall/index.html"},{"revision":"d059521116f28b41e49e63eb0e444c44","url":"deploy/index.html"},{"revision":"6fb7bfb66b9e49ecd4890491d573a9bb","url":"index.html"},{"revision":"9ba91fc2098cfcde41fbea9c9b746218","url":"intro/index.html"},{"revision":"a0534b87ddc201bb04eb03e2e6466199","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"a41c2bc1ea6c867c4b15e5cc68cafd14","url":"Java/advance/bot/index.html"},{"revision":"7bb359e907ab6084d92b74a00b826805","url":"Java/advance/chinese-username/index.html"},{"revision":"8a8949c4091b083e7d9e2798cf706af3","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"70db10ea50ed3ae7c6449133a394b8a7","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"7d3e812ebfa96617592483f04b93faee","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"7155c5814007333ab96ff7e2506391ab","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"e08dd0a30ef8748cad73f40e3a2634bd","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"9587eb4776e5d56b146ed8863a15f19b","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"67ee7613caf3be07e32086754616e79f","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"f725bab5a79a4fafff09de9c8a51d522","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"4c946f9573a0ee74f5c51740022cf11b","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"77487e6ba26e0d9ec1e2ca954a571f87","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"2d8f98b138236de298916d2a74511340","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"e8ac0eac4f30377bedd0ee94da3dea00","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"13e710b6ad0855c181865ca95376fcfe","url":"Java/advance/database/index.html"},{"revision":"b5a42560fe56f194b73433c6cfecfc60","url":"Java/advance/folia/index.html"},{"revision":"3a7600fad07e07a447bb490832ede99b","url":"Java/advance/format-code/index.html"},{"revision":"84ea3426a688ecff3447a0770d90635c","url":"Java/advance/index.html"},{"revision":"be90ba7a2fb4d1d561e878882546c820","url":"Java/advance/kether/basic/index.html"},{"revision":"04020ea6e2b06e1da1e7b566e05d5f6a","url":"Java/advance/kether/idk/index.html"},{"revision":"b9ada5ce5936636a10926944abb659d0","url":"Java/advance/kether/if/index.html"},{"revision":"33cbf817c63c1558880a837419465089","url":"Java/Advance/kether/index.html"},{"revision":"694e804d33ecc00866dfb1ab0b6b909d","url":"Java/advance/kether/math/index.html"},{"revision":"bef054026f995e34c84eeef3f3bd450d","url":"Java/advance/kether/preparation/index.html"},{"revision":"d535bd1a228c593aacf0a81fdcf0befa","url":"Java/advance/kether/variable/index.html"},{"revision":"5a8218a8afe9fa2a4f10b95518ab970a","url":"Java/advance/Linux/index.html"},{"revision":"a386fe94b03ed114c77cf78086c4088e","url":"Java/advance/loginchoices/index.html"},{"revision":"d2e032a65c8fe6f98259fe8bb872af8a","url":"Java/advance/MiniMessage/index.html"},{"revision":"68e8f336d12324f93835a3d8f726bb44","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"5c4ede37b78fade5ac80bc2adb20ef08","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"0a3ba4465b5a846ac8154760ea61b9fc","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"0cca9ade1948fa7def31c9c94886adf1","url":"Java/advance/YAML/extention/index.html"},{"revision":"9c1baa77b85de018840174329faff0ae","url":"Java/advance/YAML/foundation/index.html"},{"revision":"8fce25901b4d5304b5e12fa93631486d","url":"Java/anticheat/index.html"},{"revision":"a4d012061803e3be75bc71b328521523","url":"Java/AntiGrief/index.html"},{"revision":"7389277f966f8310e87082b8fffe4817","url":"Java/basic/index.html"},{"revision":"8c60f707dc17e9ee7e25c8974caf086b","url":"Java/build/index.html"},{"revision":"e4f947a60f03e5b2f364531b5278b270","url":"Java/bungeecord/index.html"},{"revision":"12442f2236b425943ab5e39f90ef4481","url":"Java/category/geyser/index.html"},{"revision":"8f9be9860140dec3fe8d76e66f357a4c","url":"Java/category/placeholderapi/index.html"},{"revision":"e0da6abfdccc29af8f4c16c9d6a55349","url":"Java/category/入门/index.html"},{"revision":"35c3a7e3122ffc117b55627c556148b7","url":"Java/category/进阶/index.html"},{"revision":"5233fa22d7ba67dcdb4e62af854788a6","url":"Java/chat/index.html"},{"revision":"9912cf8bb89c6623964371ac95638b66","url":"Java/command/index.html"},{"revision":"b2f30fefea50f014ce79504b49d03f41","url":"Java/cross-server/index.html"},{"revision":"a5d286ea3e9e2d47e8382ef3744fa13b","url":"Java/cross-server/plugin/index.html"},{"revision":"765fa9be75d5990bca834a2ec11b01b1","url":"Java/Essentials/index.html"},{"revision":"0c608e8d3ad4594f3853c6be09787a06","url":"Java/Front-Plugin/index.html"},{"revision":"1459d055d40d00fec7e6739224fb5787","url":"Java/game/index.html"},{"revision":"a081a8433f47a467f582a8d82f0a672a","url":"Java/Geyser/Upgrade/index.html"},{"revision":"025b78a8e107a5b34965a91574495577","url":"Java/intro/index.html"},{"revision":"176059f98916ecc3db13c438363004e5","url":"Java/maintenance/Java/index.html"},{"revision":"d6f983c3b2b3f39005640cc9b0aa9bc7","url":"Java/ManageTool/index.html"},{"revision":"1f7514abf34eae34262f79833dc139ae","url":"Java/optimize/index.html"},{"revision":"ab285a3340744a6e0dd9480ce8005ff8","url":"Java/optimize/jvm/common/index.html"},{"revision":"1033afc92206f0c7b10f4d17bde5b8a4","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"ce1c9ad381ca5b841701bcc592b25d8a","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"4d7c7f14c24eaf0f4a2f4cee670b5e7f","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"e16d260ba6eabc4a33ca512a17facd92","url":"Java/optimize/jvm/index.html"},{"revision":"33243b56398892f5754ffd725191092c","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"5711e1d21d0e5b2cdb1e234256695248","url":"Java/optimize/jvm/zing/index.html"},{"revision":"63203a5f68c9e5b07cd2a46c37a8b3a9","url":"Java/OtherPlugin/index.html"},{"revision":"ebbadd7eca4d50d4762762b2787a123b","url":"Java/permission/index.html"},{"revision":"b678384649dca5793c25fa0e57026030","url":"Java/plugin/index.html"},{"revision":"821f0f286d109f4713a219392d1ff44e","url":"Java/PluginMagagement/index.html"},{"revision":"881522f11c35a732e9690064cd52c82e","url":"Java/plugins/other/Skript/index.html"},{"revision":"5f51c552b3dca4272c78514c68250a39","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"770d816b2ae59ac86cdf6fb6956b891e","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"5fd31567805035d1f7475b5844561029","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"705da280e2f4a9efd8ebf64e871f106b","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"978baa5d26e2516459ad8837ec4785d4","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"3208fb9e634dea731a25d1649e93cfd7","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"f4c81074f4f7a694244612b30adfa4e2","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"4f72b933916402309782422311ce48ef","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"532e706fa45c5abde03b42124f9e6c7c","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"3d003a46a8691aac921724b7755fe0f6","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"b7920c971973d431e1e723475a6321c2","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"69534dca603727168eeefe43e871d31f","url":"Java/preparation/index.html"},{"revision":"df9b5d0f65276248bc70134d33cde007","url":"Java/preparation/text-editor/index.html"},{"revision":"9e9f9e500cad3495d75f711220827c75","url":"Java/preparation/websites/index.html"},{"revision":"ad4880ab62602df0dcd751b975f97c73","url":"Java/process/index.html"},{"revision":"8c87e101e2990d0da4a7148360fabf79","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"07e2f11507840024683a8bb4c48e6568","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"3ed1adb55bdb3a17c117a280f92b5846","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"a7dde013ebb2d1b9be187c0fcbf95569","url":"Java/process/maintenance/backup/index.html"},{"revision":"8247bc546956e72e859db4cbd7f5e320","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"c76dc29b5fe82a567b87a1cab6d702b5","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"fe7f0ab7378daf4f9f333c2c8d1ca8ed","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"8e317a50471d835b754a47919584d1cd","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"ad4d3cac9c2491b6325fbe1167877c37","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"3686ed5c348425ea2c07e0171a0bd19a","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"5f2d3a3f9dcc0e1ba9b6a49ee3d8685a","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"5a6233413390fde371032285e79fd0ca","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"5d1513e2dc5cf6e4fa64330e60ba8c88","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"caf8807080972ec1cfada743516aea58","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"64079969f0a01e4130e5f1eed8fa5f6f","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"9dfd1f87941e8959bf1468789b9bbc71","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"0340c5d504393cb5a6eadf0888301ad4","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"781e43dd8c6aeb18b9e8415d36855bca","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"45cb9d88cbfd091d6c9cfa13866e6df6","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"b69ec5ecc7cfbffadc8b554712d24660","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"8e7113636efc4e3992160ba6e0e67b5a","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"e8d35f9a6a6a64ff19a0ce5378f57229","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"02e85c464598d69637a35d786538fb65","url":"Java/process/mobile-player/index.html"},{"revision":"c3696a803cc5735c022909f72bd4677d","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"1d8965389f0d81f6f5b03587bf9f0cae","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"742515fc241f07fe875a9aa03d0f3c1c","url":"Java/process/plugin/config/index.html"},{"revision":"fc2b54402b0d68744eb2106c6ec6b84c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"9e840f978502bf70037dd05994a3c39d","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"8080ff12f032505c0d54335459a406e6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"843b53807032c9c689bc8d2eb13cf7bb","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"11a18739b6a0a87e45e90c627f720866","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"3cb99dd84751108e81b96b25fa35bd84","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"94eea9047083741bb2a7452685535916","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"219d8a35a2402c3202e6aef419fd2fa6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"42cd48cbc18a73b67c41a637109c50fa","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"b98a38390ecd20419b3585eec3cbd559","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"29d49b0cae65299962c0c4b26a6f78ac","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"a57f77a5c24f9e67e7070b9741a32675","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"9e21b12e254f4d3d0f7ca8d0c5a045a0","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"786e62189f538fb0aac6de92ad0f245b","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"e6e58cf29373043866a548dbffa4f3ac","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"d19177e5a4e7835c91eb1736f9d8d79c","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"b4e0e0cc45313842e415bf163fd606af","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"792f53cdd6f2d0eb89ce14955a29ab51","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"ea9ce85bdcd4b369bb2f09473872dcba","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"f75bb2a7431b01cb422a0839eaa09e20","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"d61e31ac9caae2f02ae420a105829ac0","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"38fb54d66e7aac690f13112fca200263","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"d14eced0bf154b9ccf353ec3dbb515d9","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"fc7e86692368fac7f756b5fcdfacb939","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"3f3575f018c2403a9744eeccfe812a6b","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"0f7cb3f2f8df87b12a3898a59346084f","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"ac5875494926a6b10dc24373ad2235c5","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"c1064d98ff8f242f72c2524e4db8a6f7","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"fd6af647d346ebd09eb41896ba0cbf29","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"363d5a0b57457c3743da8af77f14a139","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"563281dd92685c8047c6e556b2615338","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"652e0f0730cad315c80cf0487274eee9","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"041d51e6f4ba0e0dca2f95bdf6d34c85","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"a3efa16a15416fcdfadf28f95f39866c","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"e34de2f40e5accef22c1bb9814e44e07","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"8ce022911958f0f7ae9247ec8a0118ed","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"82875b8dc4455f95bb8a8903b22c6ac2","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"cb2d94f10fafa41e9bac6c86d19211e1","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"b0f3c9b494bfa91023664016c8ca56c7","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"36d346a0e68bf19a0b276729d077ae80","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"ef83e4012a0bc85e9f8344120029a9e8","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"bb20152361767a7b0350c9945baabc2a","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"33ace9abedf13c018b91a734d7ba3ce2","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"85cc838bfa31c2e6bcdc5e932d95e28e","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"d948f602c494f21d73079795dfe51a30","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"b333eb3a6779b2e61ad575c0abd130e3","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"67aeb059a4bcd40e3916d7389af17e4f","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"e3d3dafe4aed670ebf5e7b6552805dd9","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"e27d0343f3dc8fb0bc72f12d5af2f071","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"3cde2b2549cf3036b7e09c9c7e3b4e22","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"1545c36d0529610c3fa04ae8db5b45fc","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"709cb9e2857fe006d34c28479ce3bea5","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"a6776ad08671129d3d6c2a05c48f20d8","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"cc755b7cc71ca4d74ed9d7b0746c782d","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"bb1faff9697de2015f6e55b21b32e991","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"29dc4625df1a9156db12b54868cc9a02","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"3778951a29b2b0e442548ef90d374d07","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"d0d56c75dfb6ffafefcdb9f666a89675","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"22e16e08998519e92ff75e7229c7c1e9","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"e29ba69dc2e4af17451c5bca85445cad","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"bbea02814df17b05854e5c307998b06d","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"40e624fe16c4fe5a6d6c7307148d1e26","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"cf5798214291ccb41db16b7c90a64801","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"df5787195ac79dd5481ef515d7cc6e1d","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"ad49454e11bca205ffd0a486fe20b9af","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"b02596b7494039bfb5b19200df0ac940","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"03e10cd78870f47414e39f1ea5d263d9","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"c944a644aa48a0e11318456a2071ce88","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"67e43a3ae921f4bfebcf8a8314d2edb8","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"42b77811917bda1f08ef8b764d3361f1","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"6aa1863a195443c8691ef6b5898bc785","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"0e2ab572859c6e4ff166b9937a22f785","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"6705447fe869f53c804d270ef075cd68","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"9ce855a5dccdbdb5c495c157590026b4","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"3281e07496129ef66c908918aa2d9f51","url":"Java/ResourcePackManagement/index.html"},{"revision":"dfa2047c2edee35f1f45a8ab0fcbdb34","url":"Java/services/index.html"},{"revision":"184a57b0b74dfc8b33289bcd19475ea5","url":"Java/Slimefun/index.html"},{"revision":"7e982ace1782c74ed212ae670b2192af","url":"Java/start/ask-for-help/index.html"},{"revision":"84cf54150a96099ec0632085988d5497","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"4eb8fa74bcb6064ab4edaae035470776","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"5fe35f805335c8873ef344a5bbc51abb","url":"Java/start/basic/server-management-command/index.html"},{"revision":"aaa585519780c43f1e70663247e60928","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"52e81e4e7dd0c1bf2fefef0bb4d1ce42","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"6ac36a7721f0c3aeff98140ecef64187","url":"Java/start/basic/what-is-log/index.html"},{"revision":"b1c8ac7653d32264a494dc6f07ff01a2","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"87de7088389019e20379b6a94e558250","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"e4f2f7d485e9d28559142e3333d5c6fe","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"c06242d854caea3019dde17f8a137a1a","url":"Java/start/basic/what-is-server/index.html"},{"revision":"e07959c57ea22cbe98b1fdb2a3d9ec0e","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"0d94efc98c7a1d29d72b9766033467df","url":"Java/start/basic/what-is-world/index.html"},{"revision":"c0e0a5da4fda481a4fe4008083e80094","url":"Java/start/config-server/index.html"},{"revision":"53346b47c650de08156469731eec5b1b","url":"Java/start/connect-to-server/index.html"},{"revision":"716514f7a2ede0450fe0bc152e747d34","url":"Java/start/deploy/index.html"},{"revision":"2814d68a294f1f748cc655fc5a29fb1a","url":"Java/start/index.html"},{"revision":"0a37077adf1f90f89058b8c1cc7ce7bf","url":"Java/start/install-server/index.html"},{"revision":"ba51dc2abee01ca556648b471aa9d87b","url":"Java/start/launch-server/index.html"},{"revision":"15c9cb610e8fc9b0c69e837604c2fa09","url":"Java/start/server-core-choose/index.html"},{"revision":"4fc8ac9f6b6e4d2ae6dd7664bfa3842f","url":"Java/Sundry/YAML/index.html"},{"revision":"4b3b362f289bc90a6891dff36c1b352a","url":"Java/velocity/index.html"},{"revision":"a2e956cedacf20741eb73001a63c68cb","url":"love/index.html"},{"revision":"c41ce4eeaa4732b26913c310e3733d05","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"bdbf855ac84ba32f788340ffeffadab5","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"cc5cc79d9dab8c1365832f3d876d9ed4","url":"preparation/dumb-script-using/index.html"},{"revision":"e7717fcad52f56991f1ba920f8657c3f","url":"preparation/index.html"},{"revision":"3f94e8fa7e2c5fac2f27b989899427ef","url":"preparation/text-editor/index.html"},{"revision":"362d32f3e3fd9b18d72459e7074c9b68","url":"process/create-art-assets/index.html"},{"revision":"8b2c1fa2cef4c231f18bf966f6ffc56b","url":"process/dashboard/index.html"},{"revision":"1f6b29218d919f169adec30873b69852","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"30bedb7bd694245d9b956e746ab3a29c","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"1814875791ba0996466eaa5a430334a3","url":"process/deploy/intranet-penetration/index.html"},{"revision":"41055a90ec01ed0eba2495108fb3cfe7","url":"process/deploy/optional-mode/index.html"},{"revision":"8739b4753d22ee3ef1321c123efb8933","url":"process/deploy/purchase-server/index.html"},{"revision":"5a836b3736e64b1762aa539fe8247b91","url":"process/index.html"},{"revision":"f0740a2c68af0316469ebc6eaa2e731e","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"fb747b3839a0cc8878fbd4ac670eda6a","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"6ce953a17f7dd6a11f4c85fa62f41488","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"5ceb3aa2b38a69b6723edd2d99b4b8aa","url":"reading-guide/index.html"},{"revision":"bf790ca8ce5e1c7c08b07ae9c9c4d9f8","url":"search/index.html"},{"revision":"be446810dfa17f4ed297d8798919ba91","url":"services/index.html"},{"revision":"9f219ccbe12eed51ae70d357eddb0803","url":"start/ask-for-help/index.html"},{"revision":"381d9194ed9581fbedccbb0961b1ece3","url":"start/basic/what-is-caton/index.html"},{"revision":"56f9d678006c181259b197c39e1ce33d","url":"start/basic/what-is-log/index.html"},{"revision":"eedeee7923fd21c104cb7d0c4c2929a2","url":"start/basic/what-is-messy-code/index.html"},{"revision":"00f8c197fc42fd7d60023278aead3743","url":"start/basic/what-is-permission/index.html"},{"revision":"5c90ae9431aa17df79368c76766d0699","url":"start/basic/what-is-plugin/index.html"},{"revision":"0c05875f87ceaf2829bae678031bc541","url":"start/basic/what-is-server/index.html"},{"revision":"60e31ae7c6771cff3b134ae86e57fdd3","url":"start/basic/what-is-startup-script/index.html"},{"revision":"8294860ca9cd812d9644e2c3f1223586","url":"start/index.html"},{"revision":"778107d9b514dddf041351948098ec1c","url":"Sundry/Advance/Linux/index.html"},{"revision":"09547d261fd552d534fa9831ab0d393f","url":"Sundry/Advance/management/index.html"},{"revision":"e7d8dd9b075531480816e51b62e9c6f9","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"ee7f6c31c9f76b40e5e952c1d91c9f70","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"3450b57c01766773cce50f1b1ab5e20e","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"d332330c7f191618ed44e50ffea7afcd","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"71b1d9739821884b6ae58415051ce3ae","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"bb57ad2ea3df3b0fa290f820af5a59ef","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"8a4063a1a98612332087be9a27f267c3","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"30af5b7fea115b63c5f3237377dedefe","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"d344fb239294f164599e26beeaeca2ca","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=sw.js.map
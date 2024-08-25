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
    const precacheManifest = [{"revision":"f2a942adc7d0da342578f7ba17669fa8","url":"404.html"},{"revision":"4ad8dd347447b966847f2c90ec59a4a4","url":"advance/bot/framework/index.html"},{"revision":"6a01207974082f7ef526bb6d537e5496","url":"advance/bot/general/index.html"},{"revision":"c104c7d1212f347cc5c47d9c5aef2184","url":"advance/bot/index.html"},{"revision":"43b21618079deac9c672002803588e89","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"43e88759620dc66c4699e2dab06edf95","url":"advance/index.html"},{"revision":"4b852a44c55757bb570348f38f5e25ab","url":"advance/Linux/backup/index.html"},{"revision":"e84c7f4f6e41ad2d9083381a865526af","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"e5c979712ad70073b982a875c0c69d92","url":"advance/Linux/frp/index.html"},{"revision":"604a3eb0d4d0af2fc8ecb88079b5086d","url":"advance/Linux/keep-running/index.html"},{"revision":"1b588b7419e893b643867f56cdaf2e52","url":"advance/Linux/start/index.html"},{"revision":"1df58f0c4bde376b5d4e5a01e7f6fbc3","url":"advance/open-website/index.html"},{"revision":"25bd9a5f552d3279a2d63f30d26af97f","url":"assets/css/styles.e4e4ba86.css"},{"revision":"327d2da8eb0ce9b3870f34e8c94a422e","url":"assets/js/005c270b.187c03b0.js"},{"revision":"716346b0a1972db8e08d8d8a2de61228","url":"assets/js/013c8c14.dce07deb.js"},{"revision":"1529abd992b7b59c5d4fb7108b86720a","url":"assets/js/026f291b.06aee808.js"},{"revision":"5b94d5d999b45a80f29185d38ec67a19","url":"assets/js/0272dc73.5ae2f977.js"},{"revision":"d35961ee64749cf8a1cfa85ad7699114","url":"assets/js/035cfa77.ee202ba4.js"},{"revision":"90ac52a375de3a908601b642376189e3","url":"assets/js/03b205ee.ae794416.js"},{"revision":"00340148c368315bef78fb9e86d744ef","url":"assets/js/043fa146.91a07af7.js"},{"revision":"ff4b54c3be1fd911029323ddc7621393","url":"assets/js/044f41a1.cc4e2374.js"},{"revision":"2a76db3cee6e18059e23b66bb169b51a","url":"assets/js/0492d44d.7ffa6a4f.js"},{"revision":"9af5539d1fc78d8576c4d50d0f0f7ea2","url":"assets/js/04f5c692.eab5ab13.js"},{"revision":"036bd6f730f32c5168d7c8cd8e10f470","url":"assets/js/052366f7.f5936095.js"},{"revision":"1f98d08c1a2fc72f50a3430487a5a44d","url":"assets/js/05278f71.a32ca552.js"},{"revision":"71280548091007c354274b4ac3ca79c5","url":"assets/js/053e2f33.cdf70038.js"},{"revision":"dd9047e22a71cfb0503899084970c344","url":"assets/js/06b0ed59.29302b09.js"},{"revision":"440a1473cb68f8acf0ee13ac5554058c","url":"assets/js/083acdf9.f9eee36b.js"},{"revision":"3d0aa7c41d989258fcc0ab18258bc1ca","url":"assets/js/083ebe2e.0aa272f8.js"},{"revision":"016ccfe1ce64abe0bdd12bdab4d6ffbd","url":"assets/js/08e7f72a.4a5ca680.js"},{"revision":"c63bf82d195f2c95bd39b1ed5c3d36ae","url":"assets/js/09156d2e.b998aba3.js"},{"revision":"bcf520a194881471d1449be8b9fba7f7","url":"assets/js/094a7dd6.6d135900.js"},{"revision":"fdeae4cb141a0d91f0667e72abe567cc","url":"assets/js/09714880.700136e2.js"},{"revision":"fb1f99b76cac3a79f594593956565083","url":"assets/js/0a17cf6d.8d7d2c48.js"},{"revision":"ed094a5abb10f7bbe403e2b84605ec30","url":"assets/js/0ac0b3b7.8fd34f37.js"},{"revision":"195af28993951c3352a8f9c99861fb77","url":"assets/js/0bcb5d9e.bf58f0f2.js"},{"revision":"992c70bbc24dd5388cdf731c79ffe6f6","url":"assets/js/0c7f12b6.ebff8f0f.js"},{"revision":"1a7a1057207b3c109909511a85f0a6ff","url":"assets/js/0e384e19.f364bc8c.js"},{"revision":"bdbd483d024c36b3dd856a00b59c081e","url":"assets/js/0ec7bf36.5529c877.js"},{"revision":"5f4508e2ac67ffbc612364f9d3da269a","url":"assets/js/0efa0f03.c6629f6c.js"},{"revision":"3c9388458619088286187be9182730a7","url":"assets/js/0fc807d9.3009799a.js"},{"revision":"42bab824711fc06545290f959d882946","url":"assets/js/11f90be3.9420cef4.js"},{"revision":"440fcd889f140e0e75bb96af736b1d6f","url":"assets/js/1210f0b1.ea028ec3.js"},{"revision":"3ae231f53bd0ba40b966add93f2ce4f0","url":"assets/js/144520df.b3f2601d.js"},{"revision":"17ca70d3092f7a28ebd3944341c9fe9d","url":"assets/js/14eb3368.1b3a40dc.js"},{"revision":"272dce730295ce43416aaeba7ecd03d4","url":"assets/js/1537.c5a762c0.js"},{"revision":"3ef75f38ec55942418cff708bd59538c","url":"assets/js/15daf372.fea120bd.js"},{"revision":"c6a5be47f0311a512067b3cf5e3f66d8","url":"assets/js/15e4e3ed.637a5554.js"},{"revision":"2deb9bbce1817df4b12e4fc15d5172b6","url":"assets/js/1760.e90d3aca.js"},{"revision":"88670c57d3d175894d3f201d377c6490","url":"assets/js/17896441.8433a9a7.js"},{"revision":"6daafb2335831d21c4cc93aac75ffe1e","url":"assets/js/180bc163.c0992d6e.js"},{"revision":"40deba8c63b3cdaeb49b2d8e20e6d833","url":"assets/js/1856fe2a.728930d3.js"},{"revision":"b099722f5df9aa680892f0cc9732287d","url":"assets/js/185d6330.9692e3a3.js"},{"revision":"e688f8cc238225bd274152789a088639","url":"assets/js/188.d81dc71f.js"},{"revision":"ca5c57460cb29501177ad525bbeebdb3","url":"assets/js/18b67442.1a0e8865.js"},{"revision":"3bc1f2fa11b3facb9f96ea348f40ce6a","url":"assets/js/18bca995.901d662f.js"},{"revision":"58c55df0151f5dd0b32f811035054da1","url":"assets/js/192.bd2ea5ef.js"},{"revision":"62a050b2ab289360de53f7310d5830c9","url":"assets/js/193a055b.f9b8076f.js"},{"revision":"65b05421d2a25f3e5824158fab02f06a","url":"assets/js/198ea2e3.5f9676c2.js"},{"revision":"008186f7410c5c5ff2ed1707cf4b1901","url":"assets/js/19cf8050.5f99ae64.js"},{"revision":"31fdaf098ca6c5023f6120b36c9cff5e","url":"assets/js/1a4e3797.e7dafb65.js"},{"revision":"4a6a748ecedf2e5a1de40d63084f3d41","url":"assets/js/1c42be93.6aedee7a.js"},{"revision":"d4aff71d3930cce400813032a8a1a391","url":"assets/js/1c6846f9.caaa97a3.js"},{"revision":"137d867ef14f11d3316662667561e80d","url":"assets/js/1cf75b4f.5846c154.js"},{"revision":"0d0c6fe7f207e5fafe94dd8a6c1a39f8","url":"assets/js/1d1b9adf.8dcf19ff.js"},{"revision":"d6e934f3559963a07d44297ccb630474","url":"assets/js/1d42ad15.bee19176.js"},{"revision":"2fe3b0809bedab21431c337c7d8cb2f4","url":"assets/js/1dfd2628.ec84c582.js"},{"revision":"3e067e6d4b1e40b2910c678ed9a1e866","url":"assets/js/1e0a547c.1a106f11.js"},{"revision":"eb127d90ddaeb5c881dfc18f2c1d5d16","url":"assets/js/1e47cbc1.65f37060.js"},{"revision":"55e896ec78a3593d9a6929df0898ecf5","url":"assets/js/1edb7625.b460f36a.js"},{"revision":"39585ac3ab78146dc739fff1f548d2ce","url":"assets/js/1ee6f0d4.67d5651b.js"},{"revision":"db6947480ad52f0857577a9452554ed1","url":"assets/js/1efacac9.a21b9599.js"},{"revision":"16cb110bda65b74580197bc10f87bcb0","url":"assets/js/1f81f646.e6951ffb.js"},{"revision":"3fa38a357b5bd856b68c732ffd9bc877","url":"assets/js/20215aa7.b5dd852f.js"},{"revision":"1443906be7b30ba630226643b8b6b6ac","url":"assets/js/20547864.79136be0.js"},{"revision":"ab4a439c2b512b4a26b9e8db21caeda5","url":"assets/js/20d69604.24f4fbf9.js"},{"revision":"100da4a307e77abd3fc97e39854c230f","url":"assets/js/21c534b6.1e2f27c9.js"},{"revision":"79e5998763c839557c731bdecac27b33","url":"assets/js/225.7a67a60a.js"},{"revision":"ef47a031ad07552bf834d5348fbf9bf6","url":"assets/js/2423.fd094983.js"},{"revision":"f19ae1a54b68536feab62ae09c1b093f","url":"assets/js/244418a2.cf811c66.js"},{"revision":"4b781b0c299412cb995f2d76869afd6f","url":"assets/js/24a68a77.7ffdd84a.js"},{"revision":"d15cf0929f70db68c91d8cf099d388fe","url":"assets/js/24d8f7d7.5624d522.js"},{"revision":"c5dc2888f0b14d3d7ccdf5646682d043","url":"assets/js/254a43c9.e8a5bff7.js"},{"revision":"6c8e4594b69897f213ed55a82eb4db75","url":"assets/js/264.30bc98d3.js"},{"revision":"d0c6f6bebc7bae86638548374ff5465e","url":"assets/js/2867c0df.acf7137a.js"},{"revision":"c238cf3d2388582e773030b2271a7eca","url":"assets/js/289.827ef2c5.js"},{"revision":"f52b8867caffe5d544b4ff752d0a0103","url":"assets/js/2a71d676.c9bd39f6.js"},{"revision":"43e45a3f08e785b3ef2f58c782593067","url":"assets/js/2b4e0304.19b7d8d9.js"},{"revision":"6f65f0d66e8048ce6914a09830d12266","url":"assets/js/2b9de2c0.ded41646.js"},{"revision":"140ac9ef810763d081b28bd23bd938a1","url":"assets/js/2d386ab7.61f77277.js"},{"revision":"71bdea6a722567e3c87bd84784bdb535","url":"assets/js/2e938706.45e7271a.js"},{"revision":"1eb792fe5d65ff5354da2557f028d935","url":"assets/js/2f39a0af.6ac20103.js"},{"revision":"cef292294619c55f9d284d86000b3e3a","url":"assets/js/2f8ede37.38b5765f.js"},{"revision":"7a09eead6c0d9b93c64e93d3aace5b55","url":"assets/js/304.ac7707c7.js"},{"revision":"b853fbdcb3cefa68db95539cd1cd2693","url":"assets/js/312f6c84.4027d7d7.js"},{"revision":"30b4e065d3f379f8ec10ba08deb3f6bb","url":"assets/js/316.df55a7a9.js"},{"revision":"cdd6bdf83b84ca3aa0faa4f41cf8e4c4","url":"assets/js/31735ebe.b07314c1.js"},{"revision":"e89a9f46f13d7b3b23289f791ed6ceaa","url":"assets/js/33261842.35c6c11d.js"},{"revision":"3b525de5afef1913f1c1b88be7b5dd5a","url":"assets/js/3373.191ecb58.js"},{"revision":"dfca55f9e17c92b7a4de23a6f1c340a1","url":"assets/js/343bb2fa.d823a05a.js"},{"revision":"8090d1666bdad7c472fa94d05bb3900d","url":"assets/js/3488027e.7986dd9c.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"a0efcf75ef6b2b3b160c81fcf03bb4b4","url":"assets/js/359195cb.c2b17de6.js"},{"revision":"2ada0f81b61072fc2349c16528dc14a6","url":"assets/js/35d30f29.6bd4652d.js"},{"revision":"56887339331e71194208c9687ce5534e","url":"assets/js/3636.ab3720db.js"},{"revision":"c2145bbd2f3e7bdda733b86eb16e269d","url":"assets/js/36c75202.5e8b96db.js"},{"revision":"3597c7c709bdb52977547d4fab890c78","url":"assets/js/373.e4bcc5f6.js"},{"revision":"951252aeb8ae0040594c08ce16cd8fbd","url":"assets/js/3747.b5340f88.js"},{"revision":"d055474eb39d8c60746a18c52edaa7ca","url":"assets/js/3749f972.b0f7c1b8.js"},{"revision":"c056ee20a564c59b443c176c00ca5bb5","url":"assets/js/3868.49019453.js"},{"revision":"5c75254955556658fcc0e41837c7e269","url":"assets/js/38b0474b.1bad45b5.js"},{"revision":"c76d280257b65e7a9ae0062ce7d5ef98","url":"assets/js/38b71911.2c21f4b5.js"},{"revision":"5ca2ab0c855ea3e59b2b2eaa883c6c5b","url":"assets/js/399101db.c2574404.js"},{"revision":"0bc43a6282b70c2644b114106efdf03a","url":"assets/js/3a42456f.fc0dda1b.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"70345fcf02186afee8b57e9c6eff84b4","url":"assets/js/3b8970d0.1cb83fcb.js"},{"revision":"195f3d12fd452f83740e0b6614332bb8","url":"assets/js/3bb1ea30.3efdae53.js"},{"revision":"7af38eb8d7491b1220bf55e6533cc9c2","url":"assets/js/3bd1ba02.355420c9.js"},{"revision":"5847912b5abd562767cef8511d98681d","url":"assets/js/3c5393f3.2cfdee65.js"},{"revision":"0cf950c07af8fec5b815dd613ab940ab","url":"assets/js/3cd38fda.d67141d5.js"},{"revision":"5c5ae3d621f7a380312e03608cc000d4","url":"assets/js/3cd65ff0.f0bb9a15.js"},{"revision":"9a29a31b5cecdfdb721b61c62ab0e8fc","url":"assets/js/3d7f94ff.ef55ad0d.js"},{"revision":"cef36a9b5df32a2580f799cfed0d85a8","url":"assets/js/3dd749a7.078f034c.js"},{"revision":"b5d0fdcf526994a4e085f7d8a223eddc","url":"assets/js/3ef38818.ee1ce20c.js"},{"revision":"d27db1647972c0f972499c033fc9250d","url":"assets/js/3fbeb9b5.5d792a2e.js"},{"revision":"688cb9b8627601c023eaf909fc29d82e","url":"assets/js/411.c2ae933f.js"},{"revision":"c48b7d5e0ec3f14efa60416fe59f9fd0","url":"assets/js/41c0ace0.2932879b.js"},{"revision":"bc291358ac6bee42a1fab164adb42ff7","url":"assets/js/423.fe93ccac.js"},{"revision":"7e5244f5072581c50dc588512e70587d","url":"assets/js/425e3dd1.63099143.js"},{"revision":"efc28cffff7ded5c603507790e9138cd","url":"assets/js/4305.699fbca3.js"},{"revision":"889e4f7657022a3dd3f8238b22f076e8","url":"assets/js/4307.f556133c.js"},{"revision":"c195cfc019757466053f052592add4cc","url":"assets/js/431266e7.c3ddd421.js"},{"revision":"a8839fe14d5b4ffb8704da056ae36b4d","url":"assets/js/445c22af.35559b36.js"},{"revision":"6bfa1528fbf31ea7f5d8de1fda84f5a2","url":"assets/js/44975943.5d878181.js"},{"revision":"47aa9068e6c6c35aa7c7df4ca3b53d66","url":"assets/js/45cd711d.a7653dd7.js"},{"revision":"40a5cb4ab60accfac0df7aa637c493fa","url":"assets/js/4695.cb4978da.js"},{"revision":"1c748adff43bdb44638f575a75f58dc0","url":"assets/js/46bf3d5b.5947a343.js"},{"revision":"441087e93a70cbbb19b30ec7d86f195b","url":"assets/js/47.73c909c1.js"},{"revision":"a835254b23591e380ca8f6c900da55b7","url":"assets/js/4838deb2.af85be96.js"},{"revision":"6d0582498eb60f9b76c4d01597a634e6","url":"assets/js/4900.4a85eb3e.js"},{"revision":"e570942051af1878eaf3f9da86553097","url":"assets/js/49aec60f.9eb42a1a.js"},{"revision":"a91ed90c13f71ddd038294f882fd7dff","url":"assets/js/4beb5b8c.0d689ec5.js"},{"revision":"741c9cbd0340b2ea9af30716617265ec","url":"assets/js/4c7ea6db.b50670e9.js"},{"revision":"26c45b7a24e3b25d38af7fd089473e9d","url":"assets/js/4cdf84ef.91c8a5fc.js"},{"revision":"e13399251e4c3c88534981c961983f77","url":"assets/js/4d27c60c.9d6b7eff.js"},{"revision":"64fbc05c9be8eadc8409b6fd87e7664d","url":"assets/js/4f644c0b.ffa883b3.js"},{"revision":"c596f2353963d1ab066999a995392a3e","url":"assets/js/4f8bb2fd.cee095dd.js"},{"revision":"4f7a3972ee83066c02fce4e0393ece5b","url":"assets/js/5008.ff0573b4.js"},{"revision":"a97d0da557019f936f18282046fc5023","url":"assets/js/5047.21185203.js"},{"revision":"2917854354db37f53e29c3ee7d02cb29","url":"assets/js/50b793dd.a9ff9fb0.js"},{"revision":"a32f81919f1d177ffa3b7b91b13559e9","url":"assets/js/5117.01105d5d.js"},{"revision":"ba83afac7a91a2c1ed00dec5c7e50842","url":"assets/js/51ebfdb4.e354874b.js"},{"revision":"f954c87ffbf49eaeb4d8ca0ef97260c5","url":"assets/js/522fd580.4aff47ca.js"},{"revision":"c92214c40860ff74c7ba2538936a4bd1","url":"assets/js/5289.e3079c7b.js"},{"revision":"fd2e356c655ef2b1d8eaf77313096cef","url":"assets/js/537.1cbfea41.js"},{"revision":"b0f17bb4405cea3045e635d7db0f274e","url":"assets/js/541d5637.cafd0a0e.js"},{"revision":"27794083114159e44a710d26cee6cb03","url":"assets/js/54a35160.3d307a37.js"},{"revision":"36c30b6eb2a74c3f01b48d68c4d0fa7d","url":"assets/js/5571.39f6adb1.js"},{"revision":"582023f53264b48d23cc84af9f1415e3","url":"assets/js/55aaead0.f910a93d.js"},{"revision":"d436f45843aec58cfc8245d580ed01cf","url":"assets/js/5606.231f2c50.js"},{"revision":"09b0d7f647de679d4fdeec234511dff5","url":"assets/js/563b5c65.111c8d2c.js"},{"revision":"018bd0904731bf90fa31cbd471b03997","url":"assets/js/57ecc2b7.5c70f794.js"},{"revision":"251439a155eab1e6a98628aadeaf1f94","url":"assets/js/5834.82c62804.js"},{"revision":"46b78b6a6919aa97f652c3ca53692fe7","url":"assets/js/584.ac6b39cc.js"},{"revision":"50ae976e65676c9fda43d70bb154fc31","url":"assets/js/588dd44d.14e9ca50.js"},{"revision":"c9309749ea549aca58ddd8b5ae55361b","url":"assets/js/58fa4e48.5fb7eac9.js"},{"revision":"fd87e8c3cc62ccd3eb2a1281e671334f","url":"assets/js/594bb6c0.97a75ecd.js"},{"revision":"b80f45ed67cd7408569eb0c3323aa9a2","url":"assets/js/5a5e1dd9.28c766ef.js"},{"revision":"b9a20e669d69b5136edad8aa3b50aa76","url":"assets/js/5b3491ef.5ffd42d7.js"},{"revision":"68b3e83cbff5a3485a9e3c27610c8210","url":"assets/js/5cdb4525.f4ce5841.js"},{"revision":"3f5dc1d9a72a87cb9e8a0248b7548005","url":"assets/js/5e6d1f8b.ce0337c2.js"},{"revision":"f9ae90e26740999e8971989e8ba4236b","url":"assets/js/5e95c892.f99d74de.js"},{"revision":"aff947122d749f37b42abe3d1f5e49f2","url":"assets/js/5e9c3b6a.a9f46972.js"},{"revision":"b9a15bb4f8dfcce4482746fd8ff7284a","url":"assets/js/602bb363.93a505ec.js"},{"revision":"efa4e116c23440bb47c0d9865b2ce1a2","url":"assets/js/61aaacfc.2bb11f31.js"},{"revision":"93bf132f3e970dc29f500652dba951cd","url":"assets/js/6228.62ee8f75.js"},{"revision":"5b24c9cce868af1a0ae59ba4ebf62435","url":"assets/js/626.a9e6927c.js"},{"revision":"79b41ec7703bc12dc2d09a3a233ac19f","url":"assets/js/6304.d9ae89f9.js"},{"revision":"e1b33af707afdaab4bd8aa22d5356aaa","url":"assets/js/6316.c9bb9321.js"},{"revision":"7c0f31d569c0d78e2092f355e0e8a741","url":"assets/js/635cb825.ef2f8971.js"},{"revision":"1f6ab7b93e9c82fc52c3e8fa528c7b48","url":"assets/js/638.744ee2f0.js"},{"revision":"f27c75fb15bc64d59450dc2e16e239a9","url":"assets/js/6415f59a.1ce1b1f5.js"},{"revision":"293f47e8ec09363bbf8439bb80566d06","url":"assets/js/64614d1a.e43f96a2.js"},{"revision":"3a19c78736bb11ff9d9399abdb4a4dc6","url":"assets/js/6475d366.b7bd13b2.js"},{"revision":"5f51d8f8e785c446a6c908bbfd6d8ce6","url":"assets/js/6557cf1a.3c8d360f.js"},{"revision":"4f7407ba647209dc246e4b15ccb2b820","url":"assets/js/6577a0df.49d77222.js"},{"revision":"0fb785245d82139c48aeb69ee0f7a3c1","url":"assets/js/65bc360d.68565de5.js"},{"revision":"5e619047ba1d0d1ed58bdfbb9ac1e917","url":"assets/js/6638.b0b04cfa.js"},{"revision":"a7a6d5010f36151371fb264efa5d5251","url":"assets/js/6762.1f5e3817.js"},{"revision":"920cb27b3f3ea0b312b2104a83a1892e","url":"assets/js/6775.cba7a5b4.js"},{"revision":"fe4dda7a0b50e3a873b7149a6563b09b","url":"assets/js/681b7af4.9cb6f72b.js"},{"revision":"e46fe954f5bcf53278d849e3de5bf14d","url":"assets/js/69df999c.c3aca995.js"},{"revision":"ab90f3a72896c9c914433021fcb2dfda","url":"assets/js/6ad9afaa.f8e381d7.js"},{"revision":"647969e5a149b7ee6f49fcc45a6780e1","url":"assets/js/6b5d6c58.c469b6d4.js"},{"revision":"4e401b373bdaccd52d3a58c78e421d66","url":"assets/js/6b902128.bc6b71a1.js"},{"revision":"7f09965ed383bb9f448364c93d027516","url":"assets/js/6cd9d647.cac7f143.js"},{"revision":"0a1a02317f78cf0c12a1028e555f4de5","url":"assets/js/6d6bd066.21413c0e.js"},{"revision":"5f47ab2d01b572f3b5129366ccaed601","url":"assets/js/6e3d6b93.2ef9c67f.js"},{"revision":"efb312e297439e1ffc241c08814f7a4d","url":"assets/js/6e889b7a.197b7d7c.js"},{"revision":"b2fd14dbadc79f82bdd2b6281e595019","url":"assets/js/6f2b2af5.016e0826.js"},{"revision":"22401f7b2ba8787187e8869d433fffed","url":"assets/js/6fedb7a3.eaec2e46.js"},{"revision":"82839b97096d764a3a546f6ce1448719","url":"assets/js/70321d34.6d709216.js"},{"revision":"df3307288575627d1439d1c002e076f2","url":"assets/js/7188.9be0b533.js"},{"revision":"f46670eff76bd7dbc9b4f87dc1c2360d","url":"assets/js/7192.8fd9f9bb.js"},{"revision":"86b21a48f1ca780d5cbcc3a214e6d0d0","url":"assets/js/71bd92ad.b6bbbaaa.js"},{"revision":"3d717f95be73131c23dfcc07615ae404","url":"assets/js/71c41cca.c3c29d68.js"},{"revision":"bc35e37971fb8de0367f4fc565ac3da0","url":"assets/js/72b3e7dc.09803402.js"},{"revision":"c9a6d784cced68e711ac7bcd829ddb0f","url":"assets/js/72fea898.a1211679.js"},{"revision":"08c5e93f7718f583c9cc35a072280c65","url":"assets/js/73c38494.67e7154a.js"},{"revision":"fce886a1281de872317de80ea4e08789","url":"assets/js/73f32b8b.4257b3d9.js"},{"revision":"bb22db09ca9f40698657eee0bb8906d5","url":"assets/js/7411.d34a42cb.js"},{"revision":"f75602253625051f47af6a2818bce4d8","url":"assets/js/747.bc1878ba.js"},{"revision":"f0c1e81b728085db02663cbdc0ee817d","url":"assets/js/7515.fb042b69.js"},{"revision":"d2d2b7f14bca51e483c4e93f5cbcb671","url":"assets/js/754296bb.8e9e5db6.js"},{"revision":"f68a75df0507ae96f6dc7b4e7c604d02","url":"assets/js/7584.855762aa.js"},{"revision":"8ded373bd1db433c76d7b7b89dabd368","url":"assets/js/7585.21c79de9.js"},{"revision":"a846d1d50e09b97422103e18774c8eb1","url":"assets/js/760.98e67eab.js"},{"revision":"54a94da4bf8e9f11c9519afb3e2aa539","url":"assets/js/762.220e4ca4.js"},{"revision":"a4abfeaf696bbe4fd882c66561015d51","url":"assets/js/775.a4b47dfe.js"},{"revision":"4050d55b8e41c30ca6d056b1cdc6f556","url":"assets/js/790b642d.cd8b8c3b.js"},{"revision":"288f52f99cc213c9a17fb83022d8f781","url":"assets/js/7970.170ddeb0.js"},{"revision":"9644a9d7d74ddfb70b512ac37c069a4e","url":"assets/js/7998.a2e4d5f3.js"},{"revision":"be844455ef42da0ab89999afe2d78897","url":"assets/js/79ee951b.38fb54d7.js"},{"revision":"c92c3e427401d1954738c08353c54df5","url":"assets/js/7c328fb0.07b0bbc7.js"},{"revision":"5703439f3c58e512e09edd68ec80dd28","url":"assets/js/7e75dadf.0d77f4c9.js"},{"revision":"c82cd1fcd982aca2db366d6b0cfd6bf4","url":"assets/js/805.bb1da7b6.js"},{"revision":"220c189f260a379c8b3f898f7d379dba","url":"assets/js/80f373f2.3aa43ad5.js"},{"revision":"1006defd5a959743337efaa70be1eb44","url":"assets/js/817191e9.0b8e7761.js"},{"revision":"7ad719d72c33def1913e3f64b504f628","url":"assets/js/81e8afad.85661446.js"},{"revision":"a6c70e1d189cc6f8d2c911a1eb3c798a","url":"assets/js/8225.e7b15e8f.js"},{"revision":"edf1a6be826168b1894fd627aa2bf69a","url":"assets/js/824c452b.adf4c82f.js"},{"revision":"bd8d988c241e1fa11f1b7607788e76fd","url":"assets/js/82c03827.ba05723c.js"},{"revision":"6ea620dec7a6f1abe310b7bc627e2e45","url":"assets/js/83236138.eecc7617.js"},{"revision":"54be1ca84a5245ba1b547440219cfcaa","url":"assets/js/83fa3eff.1b267e7d.js"},{"revision":"8dc46a8d8abfa9448ef3e677c6a04a80","url":"assets/js/853.6812ef3e.js"},{"revision":"615e17226b2fafbd25834380c27a76d2","url":"assets/js/854b257e.dae858f0.js"},{"revision":"280c52ba9d1afc81833fbede7616920c","url":"assets/js/85ccb835.b84ab8c6.js"},{"revision":"53e4d4ffbd669bf8033a4e52e5b84875","url":"assets/js/86170a86.10773c61.js"},{"revision":"3a4d168c9ef456cdcfdbf4f909669fb3","url":"assets/js/868.4d467bc6.js"},{"revision":"af5a2da55694d5eddd047f0e66c47de9","url":"assets/js/86d633e5.2c591101.js"},{"revision":"8d032e8c9dfb520f0d297d6419c32dfe","url":"assets/js/87531641.51d7dcb6.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"eac1d477639c1f3baf820901e1108c8f","url":"assets/js/87d5db97.cc2a52df.js"},{"revision":"2159f9f34828189596afdf00ac028b6d","url":"assets/js/8805.3225cd25.js"},{"revision":"1d42c78b8f54faf5c8e2b3ac873aea83","url":"assets/js/883b3acd.b2274e0b.js"},{"revision":"bca398eac431d53bffac077e1f1311ed","url":"assets/js/8853.7a84ba1d.js"},{"revision":"3016f3d6c49ee7932286915af8703388","url":"assets/js/888a5ebe.4e0b7714.js"},{"revision":"b91a4989bc6f5662db38d9231bbef578","url":"assets/js/893c6fee.41318f0e.js"},{"revision":"4938e240b36c85dac3b4b1fd4734c9af","url":"assets/js/8a578643.0fba9f34.js"},{"revision":"47d9eafadfd341a7ff7b7fbdc5492334","url":"assets/js/8b23f58f.6004cef7.js"},{"revision":"39f96d8ac9a6f8432d87a1f0996335a2","url":"assets/js/8bdaa531.15c56b41.js"},{"revision":"8bd27b82eef0cef33f4896c983d4acf4","url":"assets/js/8ca7e4b3.b5a053fe.js"},{"revision":"85e4cdcd59f2e52e3f5efccb21ac8803","url":"assets/js/8e0be0d1.2a04c356.js"},{"revision":"581df26292754331557781b3846cf07a","url":"assets/js/8e6a4e74.ba519f27.js"},{"revision":"44bf6cf36f0f469ba17f50b2bbef2a3b","url":"assets/js/9039.0c411ce9.js"},{"revision":"ead2cfc207496090df2d3f1d819f5c06","url":"assets/js/9197ae7a.dd4de76f.js"},{"revision":"b195509cc1185a94d17f91e5e41730dc","url":"assets/js/9229f78d.77961832.js"},{"revision":"0fd76ce1b6458d564fabff84b14a0428","url":"assets/js/932.6ad772e7.js"},{"revision":"026e1cec003a50e9841f371b36e031a7","url":"assets/js/932.9d69cd03.js"},{"revision":"b3c6010ece2fee0a091a585ff84aed40","url":"assets/js/93456434.b6898f07.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"dd68bb43cea57bb13352aaa94ef08e83","url":"assets/js/95bcd1dc.e9585658.js"},{"revision":"8c7736485cdc68b1c5ffd595cd96c9a3","url":"assets/js/95d63b84.03f1a1f9.js"},{"revision":"b669c2f4fffe4c62e2766a0615a50eea","url":"assets/js/9861953a.ab2bee77.js"},{"revision":"b8a996029650af1fdbfffd9ca7df5b64","url":"assets/js/9951fe7d.b0032934.js"},{"revision":"8b1edb066a88340ffa8d20a206a97f32","url":"assets/js/998.e1b259e9.js"},{"revision":"7c890e351ffb56ca87b3f45768b18bee","url":"assets/js/9ac34ba0.84a946f4.js"},{"revision":"c78b144b9417d4faac68c669c12a618b","url":"assets/js/9b8d311d.2ef5fc97.js"},{"revision":"4bf59e9c40532d49fb7ec3f9960d5e6e","url":"assets/js/9c2278b2.ed87576e.js"},{"revision":"631815b6b2268bccd8e411622bdc35b5","url":"assets/js/9cd2fc0a.7394e94e.js"},{"revision":"151aa34f370d19cb5e1c1aaea007cfa3","url":"assets/js/9d4488d1.1deffc6e.js"},{"revision":"167e6fcb68e31cda6fe9bebce6f9ac29","url":"assets/js/9fdc340b.15cbf81d.js"},{"revision":"0df6b9e2e44e153d71a6d0f0483ea3f9","url":"assets/js/a1e55d50.4e9ba7fc.js"},{"revision":"92b73e65a066dd922543f14e66df616f","url":"assets/js/a21e984c.2a113346.js"},{"revision":"2f1f2698b657529efa65daddecf96f47","url":"assets/js/a2ca8fe8.03c99436.js"},{"revision":"8693980109b063aa8b632386fea9b6ce","url":"assets/js/a2d5f767.87bc8dc6.js"},{"revision":"90526a51b6984a99c7b92d8b113e2efe","url":"assets/js/a2fb89b8.6828b840.js"},{"revision":"27c19249f314ac5e97bc55e99dc9ef7b","url":"assets/js/a305e2ac.0daef17f.js"},{"revision":"08a46ec4b4bc1ec145ba559af2f77ee4","url":"assets/js/a4c78573.c9f3f670.js"},{"revision":"b7f45525e37072925fc8b85fbc1eb8f1","url":"assets/js/a4e7ef95.021118f4.js"},{"revision":"3072e1885b53d480e969dc5f8e7d810e","url":"assets/js/a62eaa10.851cec5b.js"},{"revision":"fe6dbe1b87ea646029afcbc3e974ad5f","url":"assets/js/a6eaa2fe.cbf6aa2c.js"},{"revision":"b0770c4338c6922a2709143cad792ade","url":"assets/js/a7062d46.dff21f32.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"3a5e23f7bd5ecae72ee1d04f2af2f0d5","url":"assets/js/a757a55c.226ef77f.js"},{"revision":"6a8c4a97643b46ad8697b62ac878216f","url":"assets/js/a78b3ba0.59b70e60.js"},{"revision":"4a0a2054df71b457cfc7d961b87bdb94","url":"assets/js/a7bd4aaa.91a2aee1.js"},{"revision":"3f4a0f6466c97ccf67b165f736943a8e","url":"assets/js/a7ddcfcb.cde7f972.js"},{"revision":"857d5bab7357cda50498026d1c634252","url":"assets/js/a8bdbcd5.4a071eab.js"},{"revision":"5134c3ab2fe5842b5e39033649ee1a6b","url":"assets/js/a94703ab.b05c2422.js"},{"revision":"b61734d1d308ab435090eb9d93087511","url":"assets/js/a9c868b9.f0547bf0.js"},{"revision":"c1dc47ec4937304b5ac236f89ff98541","url":"assets/js/a9f9a930.9bcc93ae.js"},{"revision":"affe1312c7a3e3bcbe22ca91c93d7e2e","url":"assets/js/aa276556.cd8ebc7c.js"},{"revision":"94a15f4cb5a4b3d62779b89f93472e60","url":"assets/js/aa7b0feb.9a695e64.js"},{"revision":"86dd83445972f56200111940cf26315c","url":"assets/js/aa81450f.8df14742.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"90f112ba5bfee565f3681b6a4cfa4a07","url":"assets/js/ac61b989.58105b45.js"},{"revision":"83c2a8de7722edfbc61a5ea950bd51fe","url":"assets/js/add4bb7a.e9d42c1d.js"},{"revision":"d15d9aff8d023edd833534a56e77e47d","url":"assets/js/aeb124bd.41e6e218.js"},{"revision":"325b0007fa112a94370438623f8ff6dc","url":"assets/js/af70a4d6.97377f9f.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"fd5c8eb83df6bf5bb2513881abf431aa","url":"assets/js/b158dc01.058dade6.js"},{"revision":"4d7454903b6f53bcd5bb3c5faf86692f","url":"assets/js/b21946ae.95247207.js"},{"revision":"1e9343f91f31520cfc877e1b6ceb77a6","url":"assets/js/b222cacf.114fb7f2.js"},{"revision":"38297602c0ac1d20761d01f50e27e856","url":"assets/js/b24d385c.a7c66a20.js"},{"revision":"97e008c098d24043c6a267bebe02a457","url":"assets/js/b496f3e3.ed5a664e.js"},{"revision":"ba57ee6cb13320bf7c107fd2ba6a5fb1","url":"assets/js/b5210edf.b1d38a63.js"},{"revision":"f8723f008a8bf71f4c50cdf9b410c181","url":"assets/js/b5eeabfa.e5d262e4.js"},{"revision":"1d4a31fa87a652a97be6046b0d6c25b5","url":"assets/js/b60da6d7.8cdcfc60.js"},{"revision":"41d37841aeccb18ee385287d9b350bf1","url":"assets/js/b60de388.1affd15e.js"},{"revision":"f4892cc0be3fe0da11d67c2757782cf7","url":"assets/js/b6386ec9.3c86660d.js"},{"revision":"fff03ab2768e8e1e1b0f89f0c68e8b6f","url":"assets/js/b6438b6d.c864bfbc.js"},{"revision":"4e40c96b1aff89d6487188f581d7a5a6","url":"assets/js/b78eb33d.f6d59e6e.js"},{"revision":"42845a5720d24a761307dc107f04bfad","url":"assets/js/b7bb49c4.9ae68208.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"338a9aa1d7f97a7ebed1d35d1b693f63","url":"assets/js/bcc35f8a.2c0fa0c9.js"},{"revision":"010d49329b03416b72529e71dcfec04b","url":"assets/js/bd760347.b448e409.js"},{"revision":"5b7b7a0f54a7c285c387f1b95e2a9286","url":"assets/js/becf8c88.d99ead15.js"},{"revision":"3bd7a9a8ca3a27b2394431e27e1c8609","url":"assets/js/bf3ddb91.c88b5f75.js"},{"revision":"4a454c8199140830ecc996da69c969b0","url":"assets/js/c0dca479.5d272c61.js"},{"revision":"b63d40f28f788ccad4e2c475ea4eccda","url":"assets/js/c10e86aa.9c42a312.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"6696b8c3742e60d397fb06519625d979","url":"assets/js/c156da02.3b0b5e63.js"},{"revision":"3f45b02be8c4e0a1473c14c7de595b76","url":"assets/js/c4dcc6dd.3d889bc8.js"},{"revision":"df5e3ac7ad78db517593301029a4b808","url":"assets/js/c4f5d8e4.ff5b7cbf.js"},{"revision":"0f1fe42c384ff6ea31ba241ebb909f49","url":"assets/js/c5f4348b.cafbf80f.js"},{"revision":"241914cc6580cfffbd4dcca3ba9f5dfc","url":"assets/js/c72cf9c7.4e87923a.js"},{"revision":"d2ca3640611af3351b8eaac97d42e368","url":"assets/js/c737e1a5.ed3ce912.js"},{"revision":"1e74d62aed5b60bd06150ca5aa293af7","url":"assets/js/c78ecae9.0a40ea84.js"},{"revision":"8806583089c9de76c5f8426e5de4c5df","url":"assets/js/c8018499.e93c5f72.js"},{"revision":"678791b08ca773b4a731d814e32494df","url":"assets/js/c84a9914.2c790b31.js"},{"revision":"bb1d4d449c90166ef75c31a0135fc707","url":"assets/js/c8a93e67.0100da23.js"},{"revision":"2288f4c37114751538e1facbff1eb6e9","url":"assets/js/c9947f43.cb22271a.js"},{"revision":"f1ce04eaee55b7bac3eabce093e2512b","url":"assets/js/c9a1eaa2.2de0d328.js"},{"revision":"fb651add06e448a031a9ce00b1a68ea8","url":"assets/js/c9ae34fa.b449b19d.js"},{"revision":"9fd467683fc6498007eb0e41031814a4","url":"assets/js/ca8a1b2c.498fad17.js"},{"revision":"98a7a9561941f394017f3ad587f7460b","url":"assets/js/cc2fcaab.69f89949.js"},{"revision":"495ca179fccddd41851b7e8ab06b5ebe","url":"assets/js/ccdb3c45.e0bc18d3.js"},{"revision":"98ca23ba3f02613eb37ab8d40602d6aa","url":"assets/js/cdc590f8.4b3de734.js"},{"revision":"d5f540916c092d536871e09da0167bc4","url":"assets/js/ce7e7ba1.847628ae.js"},{"revision":"3fa936556aa8fcc66987929edea79ba1","url":"assets/js/cedf0e63.35a63b75.js"},{"revision":"3d07bc9431bd8035d9c6177a5948c232","url":"assets/js/cfc0d51c.545de285.js"},{"revision":"698d87d3acfff6afdc19561888dc25b9","url":"assets/js/d00b9fd9.7a3b4505.js"},{"revision":"99e6dbf0fd1849b77291e62027a3ca98","url":"assets/js/d07a3d34.df42fdb8.js"},{"revision":"fc46ad7e04fc6652932a42c3ea102916","url":"assets/js/d0ab59b0.946f23b6.js"},{"revision":"fbc2db41b0161e7a46334dd2037a2579","url":"assets/js/d26b0f2c.e6210b29.js"},{"revision":"e40d54b9583e8b5a22a929ca0ddb634a","url":"assets/js/d2a9048d.0c3c47be.js"},{"revision":"46e8c8bcb422a7804d5cfa80a4ac4eb9","url":"assets/js/d2ba5076.dd43913b.js"},{"revision":"fa68a2bdc8e4c1b56c1ec4063e22f17a","url":"assets/js/d3585a2b.b349eeee.js"},{"revision":"ac0827dc8e7d859a3e76dfbb644191c0","url":"assets/js/d45ccebc.82fb6e4d.js"},{"revision":"a84d0fdc5c8376e151a9f34491b49add","url":"assets/js/d494a195.ac398196.js"},{"revision":"dae640d5af5fd78bb1ce8ec319a55b8b","url":"assets/js/d63ab801.0b500197.js"},{"revision":"5c348d720af7b4e5c691e355bd501f94","url":"assets/js/d89bf822.92b5bc8e.js"},{"revision":"13957c62f7cc6a0ba2bfc45a6c7e6e80","url":"assets/js/d9cff955.c28fe2fb.js"},{"revision":"64eef1083ae4cc40186742e51b981b78","url":"assets/js/d9fe55b2.a61c874d.js"},{"revision":"ccb545638d0efdb4390a3fddf22cdd0c","url":"assets/js/da4fe776.6ef59881.js"},{"revision":"c03e09ff87688169341eba41e445c8a8","url":"assets/js/db6afc29.51aa5fa2.js"},{"revision":"dd6dc618db1b494aeea81a48f22ddfbc","url":"assets/js/dc030738.9480f84a.js"},{"revision":"65c5fe5b22b68e20faea85d1cf174af9","url":"assets/js/dc109391.82bc77b8.js"},{"revision":"aa0adf5b4ce6913893026b3632205061","url":"assets/js/dd1fbe6a.bc001adf.js"},{"revision":"b31cb2148fcd1032ebfa238aafc97f0a","url":"assets/js/df2a4a59.45ac15e7.js"},{"revision":"a483655f42259ff48dc230b611cc027c","url":"assets/js/dffb9609.36ea2181.js"},{"revision":"01fa76670e278ee2a2ed84e50e9b46cd","url":"assets/js/e10e131a.fbb565b3.js"},{"revision":"64cfa0366cc075ca0d8a4a300b1ea10a","url":"assets/js/e17e6af5.bbca85ed.js"},{"revision":"33b295934b3aa0ba363aab23d6be7804","url":"assets/js/e1a53158.73749923.js"},{"revision":"7d3f6c26e8f9a1da082529be804ef52f","url":"assets/js/e39d40ed.b5b85507.js"},{"revision":"ce6b7b2ed1e3a04a8a1d7d9543b756c8","url":"assets/js/e3b728f4.64b8da31.js"},{"revision":"005ae6c4595491a6e5ee0d742f2bc3f7","url":"assets/js/e3cb94e1.11762600.js"},{"revision":"81ff4fcbfa0c508f0693c81e3ef34c36","url":"assets/js/e47fd75f.12e16088.js"},{"revision":"cd962d7df40e174bdfee89031ffb3daa","url":"assets/js/e48b3322.771d9a0f.js"},{"revision":"76361b7407acc75c89f89f7a8aa91915","url":"assets/js/e4e92f42.efde3145.js"},{"revision":"871c8a40e3dd4a1bd6b1243ef241fb10","url":"assets/js/e5f7cd7b.5100c14a.js"},{"revision":"66e97bb3f000f3dfdc19b120bd9c0012","url":"assets/js/e6501e5b.d4292c69.js"},{"revision":"24986e3786319bb1e2a71c84b1ed5207","url":"assets/js/e682932b.c85fcdeb.js"},{"revision":"f126f289ebe7e9fd727be56a5ce4c91e","url":"assets/js/e6b53073.0d625368.js"},{"revision":"d800ff4fba895717c6d20c597edd17f2","url":"assets/js/e76d69e4.7b86c840.js"},{"revision":"90c27c862c5ceba43df4f30dac08843c","url":"assets/js/e8d5b74b.f016bc5d.js"},{"revision":"650b6b67f54cd93a0f6796f166143585","url":"assets/js/e8dd6634.d8924578.js"},{"revision":"a2ad20d8da82776c603ea9c363b5f41d","url":"assets/js/eade58ca.a96a1ba4.js"},{"revision":"812a36338100c5d4672b893b7750432e","url":"assets/js/ed38b210.a97ad911.js"},{"revision":"45abccef96974bd6118a3ae3ee33b69c","url":"assets/js/eda49e41.c96d727d.js"},{"revision":"8a901f38667c2d273f0016b7c0a7316a","url":"assets/js/ee84ef31.e9c6c526.js"},{"revision":"cb2e673f619fd6a4a8dce9304db681ac","url":"assets/js/ef72e420.b0d1e24e.js"},{"revision":"9da22cd4b05274c0d120ed299c9ad2a1","url":"assets/js/f36074be.3b5850dd.js"},{"revision":"8c1a4418e22efccb6771b3d5885c236b","url":"assets/js/f3937ce2.54a2626e.js"},{"revision":"e17d896177dce40a0401555896cf16ca","url":"assets/js/f44068e7.c2b82e30.js"},{"revision":"b27cd2fa081362072764a178b815072c","url":"assets/js/f4e5f89b.43cfdf1b.js"},{"revision":"957c87eed30920c99c425cc5c4fd0827","url":"assets/js/f58ceb15.e829d094.js"},{"revision":"6a50f147e002d2b468e6dff3c093eb8c","url":"assets/js/f6420a7d.97885911.js"},{"revision":"2b4c04f4015ba5120d6fbd2dd77fcf40","url":"assets/js/f7e672b1.34b974c8.js"},{"revision":"bcd964d567eae5949b629df9708713a6","url":"assets/js/f83b6261.a66d64a4.js"},{"revision":"fddb5aeab33b72603dada186340c7bcc","url":"assets/js/fa9e7027.bd633c24.js"},{"revision":"fd4565447d7e427fe76184d4d51a3ba9","url":"assets/js/fb274994.61c0a59f.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"8333f27b41cc40c4dd232d4e912cd69d","url":"assets/js/fbcb1a27.6627c254.js"},{"revision":"929f7ab087ea7d22f8ea6b001065fd6d","url":"assets/js/fc419e9c.a93aeaa5.js"},{"revision":"62ed1d375be92f8476a54dd93b0e40ac","url":"assets/js/fcaab584.73357f21.js"},{"revision":"6ac24e2057f2ceca08f7b53e3be26e79","url":"assets/js/fe5e75f3.d70c2635.js"},{"revision":"b12f7a18c8ca59a2dd57cfe12993ba42","url":"assets/js/main.70ac4106.js"},{"revision":"80d9e390dde58d940c0a1cd08039c93b","url":"assets/js/runtime~main.2c365f51.js"},{"revision":"e2d6bf0079ff92856449a9c2372352a1","url":"basic/index.html"},{"revision":"f217021d00869ffe272990bc16028e7c","url":"Bedrock/bds-core/index.html"},{"revision":"f5d4cf5e4407ae59e018c4752c4a731a","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"6f96e36e9ef0e52aa4a5ad160133e529","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"10d9c50754dc3c5d66c21a36e13852c0","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"d457ad0b2994e4fa77d778116cc772e0","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"eebcdbcfc6c578c04dbd5cc0e1516761","url":"Bedrock/bds-core/process/index.html"},{"revision":"cc6cd7f0e4ff0566c35f336b71eaf39f","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"aecef3fb7b320ce16e3770b85b2f5600","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"d46e5c250183b8cc0c2b4e2cf0b74353","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"b4aead3766725eaea935284b9856e75d","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"61ffc1938a27447e0d3b004029ea79fa","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"e89b7c820185bbeacdcf06246825897a","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"9b19235d6f026d1d0c639dfc90885e8d","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"a818a541d58f9fd7d1961b134c9655e6","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"30c05440d2b6d92934d4691231ec78a9","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"4874bb28d4c77d85269bf239723ef458","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"32b7d78e00969d0627587de6a2561bdb","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"264c07ee36bfa3ba5b6729e060cbd40c","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"e832d70cea6ff61d8e3e478df201c4a6","url":"Bedrock/bds-core/start/index.html"},{"revision":"dd10d0b95f89eb5888be5ff9af7672d4","url":"Bedrock/intro/index.html"},{"revision":"bb300ed8a5df0411bd8be29282088c08","url":"Bedrock/nukkit-core/index.html"},{"revision":"d820e16c424de6f66622338a7acd410f","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"18bce43bede85136f5a95eeb2339bb8a","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"6f648ae2374b186dd7451444b03cc74a","url":"Bedrock/pnx-core/index.html"},{"revision":"8c37777e9e4c382ccda9cfccb29aec04","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"8abf758eecb7c0c455aec328f5ece9f9","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"96f73ba34b3294d35f9b3a5b5e8f4b8b","url":"Bedrock/super-basic/index.html"},{"revision":"bab5e8a25d4f79c01707eceadfaa968b","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"c09763758f8aff5fe1255fb6d234922d","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"cecb5084b24de0cba7ca2fa9d8ee3011","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"9774b930a8f554abe502b61b2f5a8df2","url":"Bedrock/super-basic/version/index.html"},{"revision":"ff79cfcdeea9c71b98828b8360a58a0a","url":"contribution/index.html"},{"revision":"a538ab437663a2b69136a8a29cf72082","url":"contribution/todos/index.html"},{"revision":"904631e4019879fb06e55aefc5f836db","url":"contribution/writing-specification/blank/index.html"},{"revision":"176f1baf37ab5fecc3e0fa321da850d8","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"6e9e30ded245446daf9b0964959a8fc0","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"fef7224df098b6abf10c663d97c430e2","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"00a51a1457afc4f3270861752c0b07db","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"36b81d687dfcb3e8a69cb6f8d0f516d9","url":"contribution/writing-specification/reference/index.html"},{"revision":"0c410b0abb39a27286c057f134e4f670","url":"contribution/writing-specification/text/index.html"},{"revision":"f568627d65bd018abed1e8dcf3ac2439","url":"contribution/writing-specification/title/index.html"},{"revision":"3df6f74f160657ee5fd502f70a752072","url":"contribution/writing/index.html"},{"revision":"80e361ce8225917c52412d945d519623","url":"database/backup/index.html"},{"revision":"148743c3e72bb848411a755c6e901b9f","url":"database/configure/index.html"},{"revision":"c069754698d04519ef71a363aa95c678","url":"database/index.html"},{"revision":"7c83562124dfb567f5c8da76451f6eec","url":"database/install/index.html"},{"revision":"30535054f913f99ade0cec858152f17c","url":"database/manage/index.html"},{"revision":"79540eb987668e9dfac3eb68031fba98","url":"database/uninstall/index.html"},{"revision":"e3b5eaede50443f87a40b451d5c5b657","url":"deploy/index.html"},{"revision":"c170a9e1d3734e27a9efad99b18855b9","url":"index.html"},{"revision":"3a2f5cb9dadce2bbffdfbea4c173b1c0","url":"intro/index.html"},{"revision":"2ebfc81f7dad5162e54fe989669d61f5","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"216c0949fb2d12085d27218c3d2efc8f","url":"Java/advance/bot/index.html"},{"revision":"a0aa9169a31dcb2ca3464024819b03e7","url":"Java/advance/chinese-username/index.html"},{"revision":"ee6db6cab6d1df68d44beeb3daa2eec2","url":"Java/advance/command.yml/index.html"},{"revision":"a65b3d3c9dee4c2e9931195f2fcf3043","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"4ec95aac14551aedf1f2c1f907cd31fd","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"6f7ec2e8bba120cd6cf6ede4a9060886","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"3ca18577238b22e37d26e1201bdc39ee","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"4f54554d89374bf49601149cf6013dc3","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"65993d5c02f67a79f01ae15950f66ef0","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"18c8055ed1840f7c559f68c4f4b2f22e","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"2e1c9421282bdc5deaa8374e54a40f87","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"98260739ee5fd3732d97a5a9e079822c","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"1e45028a14561f02e338b09c71e49dfa","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"ac1ef2cbdbaaf89764a6de769292922d","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"9677263d835b56c8d412541b95a5ec42","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"fcc51b3e4c8efea308419bf21c6d86ee","url":"Java/advance/database/index.html"},{"revision":"fc2d023aaac0e285c6db5dbb8a765b66","url":"Java/advance/folia/index.html"},{"revision":"62ac7644123b7a7e6bc66b144f112cf5","url":"Java/advance/format-code/index.html"},{"revision":"a41c9b04b7ada8ca8a96eda46f9c92bd","url":"Java/advance/index.html"},{"revision":"9b3025403f11ca32083b607ed5c165d7","url":"Java/advance/kether/basic/index.html"},{"revision":"e2cdcd032bf2b8666ec988928faa29fe","url":"Java/advance/kether/idk/index.html"},{"revision":"16d0cdc03fa914a2d6bb6f73e23bee72","url":"Java/advance/kether/if/index.html"},{"revision":"f48c185afadbfe15044724b677f32814","url":"Java/Advance/kether/index.html"},{"revision":"1c484d5557fe5fd00e8736f6630f8313","url":"Java/advance/kether/math/index.html"},{"revision":"57995c3079d99e603a979ab2330e1c6b","url":"Java/advance/kether/preparation/index.html"},{"revision":"56a5819fc52eb2419dccae86aee2f0f0","url":"Java/advance/kether/variable/index.html"},{"revision":"cc2d9bc8d0cef9b6c2e7ded428b50aa5","url":"Java/advance/Linux/index.html"},{"revision":"4b0c631d62cc94098d11d26ad0075c32","url":"Java/advance/loginchoices/index.html"},{"revision":"f96ff62ebf21a8c0911a13d287b1984d","url":"Java/advance/MiniMessage/index.html"},{"revision":"700e96b537d7d4bed8c2f3e08f835fbc","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"a1f299d59a746cac5424670ca49d8ed7","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"6ed6b32afad211b618a20b4d99f36be9","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"0c60b2058173d457b05354acdbdd80ba","url":"Java/advance/YAML/extention/index.html"},{"revision":"fc1c50fcc8e32a7d9efcf2df6ff60b76","url":"Java/advance/YAML/foundation/index.html"},{"revision":"0540cd417d4a16c1c08b18c3f5fee44e","url":"Java/anticheat/index.html"},{"revision":"a214da021b00b17a0bb7c596bfaded61","url":"Java/AntiGrief/index.html"},{"revision":"3abd534a0beaa3a7990e5d22fd617db3","url":"Java/basic/index.html"},{"revision":"17894c634b7d06e84a9ac2d708f484fb","url":"Java/build/index.html"},{"revision":"cbee999d1ae7e6cf937fa725634b2c9d","url":"Java/bungeecord/index.html"},{"revision":"1422ea59ca2c63293234801ea2daba7c","url":"Java/category/geyser/index.html"},{"revision":"cf6a104c9a135c7e8d7249661ec679bc","url":"Java/category/placeholderapi/index.html"},{"revision":"5d234950b394c47b0d94ce5f19371674","url":"Java/category/入门/index.html"},{"revision":"09501bbec8e71a276473a1ffdd890819","url":"Java/category/进阶/index.html"},{"revision":"0a3812f2162c41006c9c4abc648673d5","url":"Java/chat/index.html"},{"revision":"75ac2f02faffd8091458ffa829eb795c","url":"Java/command/index.html"},{"revision":"2ed7dc32cfa179599923cd6ba8927021","url":"Java/cross-server/index.html"},{"revision":"466c0471f5d1f3c2727691388a766365","url":"Java/cross-server/plugin/index.html"},{"revision":"981b61b346539b0be59e20d1523c02c4","url":"Java/Essentials/index.html"},{"revision":"734dbc3105568e46e9d1144144299df9","url":"Java/Front-Plugin/index.html"},{"revision":"7d07d80558693128950f33c87afd553e","url":"Java/game/index.html"},{"revision":"e64a4147f72c7dd49d8a99dd5c781291","url":"Java/Geyser/Upgrade/index.html"},{"revision":"f8351fe886f52b18e4bd377d4a6d2876","url":"Java/intro/index.html"},{"revision":"5b0c426b063d12ec2a56dd839fc8881b","url":"Java/maintenance/Java/index.html"},{"revision":"9b0c5a3181f032f4c0e9e8decccacd0d","url":"Java/ManageTool/index.html"},{"revision":"89e3027aa44ae7fc89ec812d9e3a6f90","url":"Java/optimize/index.html"},{"revision":"8848e30a4efd8d6d96dfb00afa5adc89","url":"Java/optimize/jvm/common/index.html"},{"revision":"fcd51b16b5c45515fb8dd2e9ae1022d7","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"1eeeaffa67f7835205173373a9db6a49","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"7f1f725913ec4b052ffe1d8959984c02","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"e676d71054d809f8e42dd84cab31d3c1","url":"Java/optimize/jvm/index.html"},{"revision":"7d73c1e73d291e107ec1aeb00fcfcefe","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"e421187443b3b928adf3401e679c2738","url":"Java/optimize/jvm/zing/index.html"},{"revision":"79e0adf6df709e58fee76269c2c52f19","url":"Java/OtherPlugin/index.html"},{"revision":"fd3709b9b9ae6f71130c4d9059090978","url":"Java/permission/index.html"},{"revision":"0ac7c21942aef4be6ad71985e8247395","url":"Java/plugin/index.html"},{"revision":"95202b1079ee0990f3954a7547864617","url":"Java/PluginMagagement/index.html"},{"revision":"d9a22db85c186789dfbf82b6ac19d946","url":"Java/plugins/other/Skript/index.html"},{"revision":"8dfeb0c5d984cb3e3b08bff813d4c00d","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"7b65177236fe2fc524745cb2ad6874e9","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"34ba071874c6487d334fe4a81f8a9534","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"b608b4bec959df99ed8478425cde9be0","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"b428a35c81391742fb834b6780878e5b","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"86b6e12f8c1a0982f2353a9952e10195","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"f75dbc5e4e702304041bd558594fddce","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"df7e5b3be0540cc5be73f72631a77fab","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"b69b565e368884fcd9df9125cfaa79ff","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"05867be7095bdcab277351d8507b8be2","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"e7024026f35875c3e5c56c3f583325de","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"7e561950a799cf474a7e3c7afb6b8d7d","url":"Java/preparation/index.html"},{"revision":"1c1408c791debb491f7ef5be6b4b4aef","url":"Java/preparation/text-editor/index.html"},{"revision":"9e0c617e4f7814b7965149c185b5437f","url":"Java/preparation/websites/index.html"},{"revision":"d0874ef7a9149928fbd8db4378b07ebb","url":"Java/process/index.html"},{"revision":"af90a51193d1ada94bf388b504e72f62","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"705560ef372db78b5eb4eaf5dcd8576d","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"75e3780b6c86d8bd6bfb5c180fe05fcb","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"d3bedcd14715cf162ab731e54d09b6da","url":"Java/process/maintenance/backup/index.html"},{"revision":"a3aaeb3046ec790dcd03949963a78e7c","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"cf5dd75513a9e7b1de5f2db503fd4642","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"60e5be9c64830304285316cbcb765c76","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"32e4b91e228f1f9cb050c86d0f3c1eb4","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"1b8af22d04565e8edf1c0452b6dd961d","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"ff0203c65eedb204670ac31a8d2f9e65","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"96266fe45e20c9282664add9ca66edbf","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"f57e03641472add456b0645e72fef6b9","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"46107469ec75ded7f9b3024b73dbde7e","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"2acb49ee7fc806779bf9af5e5b09d2e1","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"897c7c4cbbf27a16618bcaebbe7e8941","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"da7d24f684df9f934cb0895a6c9e5e71","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"b442913874bcdf04dcc6d283c72144b4","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"fae7add000bdc8608f91a920991cbecf","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"bf4958f6a0c5389c4fd5f783adb3078e","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"3c7b11e06e8a7f0904921553a354f6fd","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"8dc79d81fd6edf13795c3161748c412a","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"234f022017208f07f1a8b74598d6389c","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"f47cc0c53ae5a4088e97ad52db041b61","url":"Java/process/mobile-player/index.html"},{"revision":"ac41b58a816d651dfa99ee60db7f9a44","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"21d4b8af68a5211a45f10ccb278e4301","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"71af07febced5ac2ea8a1d65db419714","url":"Java/process/plugin/config/index.html"},{"revision":"ac4a59c07271b0655bc86c862196b5d5","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"29ff9db4b95bd8970864bb9a611ad502","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"5cd327ff29f6e2c22dad01a1015558a5","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"c7b2ffbd4b50410bace7000c455a53cc","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"fd2ad371e22aa747bebab505f06d3cc9","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"5c3367e2ea115bbc28d84f2bb0dbb8ec","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"c1847a3bf922b93c05921f46cb7f72b1","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"bfc8021087c4adce6b224fcf68dc518d","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"ee9626dc0f7e67746c08063200797db6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"64a2117916469af7f8996fca5d4f0dba","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"c91cf8d7fd2b721aa2586320d79ff613","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"b05bd7ef81f8ca3275ee3ea2108ae126","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"2901cf996c54d20a292a25a483e47257","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"cf3ce895b2b437fbff74f504d3be7de5","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"a630fc2516283734af8fefe00e9c4872","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"b21bc10b59f49ee094e764eb1c711248","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"3afea48deb9da0584efcafbd5ca67812","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"4544307fb0ecb6e2d139c389cdc73f4b","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"6bdc3acf2793a4a610a0f19d834e26e1","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"a98c505ef5e56a4f2cd72680c18289a8","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"931d8dce0582edbf24b10ad0cd9ecf6c","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"44c735b915ed249719619bde42312bdb","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"8b9663ef6f5840c37da98c5900c470b1","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"df841aac5d90b38bc8248130aa835c9a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"1d1fc321e665341494fd88a90f43b70e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"fc01fc29ee1c4c9d9a4f83f533f180bd","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"07e4634be25aca152c7ea08e86fa087d","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"0d321b36574823c40ab3d0dbbc7c61b2","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"7f45de6dc66cff10189de6afd711aa28","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"af5053d9e666e88352a051058618d6b4","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"d84e6c826acd832a9c46168f2dae18df","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"b50778bc897e2301dbbfad3b106e7b37","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"54fd936c72bf3f7f104a84bc6cbd61a6","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"194d98d416fc24a981ce7d9a23e0c772","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"462e3fcfd09b5f946af3a0270c9f1d33","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"46c057c92a688b5d6fdaa833e2a9087b","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"abe1ba367272f8312b71d10ededa10f9","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"707da4e201e04b5f543d8bb62e990fda","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"808c426299fe8ac28301be2a36f421e8","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"b0cf16722b6a21d5764f9ef4ae574fc5","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"3a45a532836398c5752495aa957c0da1","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"463344509e5fbd900d84fea10bfa1132","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"65892c5c83a988b1fce766421e5379b0","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"e40b646225940a63689514a216db3768","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"02eabb43253ae86b7bace1ee00e7e3fd","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"581820b1ba5d078fc39d4c50cef3dae2","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"67ffc25660501c8bbb69cce0a5f91d64","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"c6954cada6b6cd7476874257de476918","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"65119bbc2a442178181f4d0a6e1bf93b","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"736c759c1eeb25c41f373605f8151afe","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"9197a92f2111f4aee89981e1e96063e0","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"750c671de5f0ae93050c8a8d89df6acd","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"f1e234e87e9f89e244930ca175a5148d","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"1abdfbb9c6c5d7d94f233c75e6112ee1","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"eb1fa1d0d469df431d53f03be18d56d7","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"b24fd6beba4dcfde55aac80515e8c4b9","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"5178021f67899deb452bd11d067e9181","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"0a665d9628af8c21510291f0d6e565ca","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"fccd09ab0291945c93db8dcf4f5fb5c4","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"9911f0fa75b3e18f7c5dc7c6f20e222c","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"dfb426f0c7648028c6d1216ec6af2c17","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"89a119e9e8f738e2e0dee077bfa63e1c","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"40114b6180121f5547a95c853d4a2e98","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"a8f1cdc729ba20bb1f2bd98e81635e83","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"9b15615cdbae29fc56824ab3e2ac1514","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"16392043fdc204d7f8542c2b5270c7a7","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"bbee23be71aa97dae5c1764262683a7d","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"8958d19e4180b284a85d41a40cebdedc","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"3e68952f62bf625c774b404678e02311","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"fd59194eb98a430a5602e48759f8247b","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"9dc85417e74c52fd5958a0c49052c97b","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"1b527a88c05f026b815ed83c3bc3bc69","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"ec4e5cba3d48d3fa21c800e437384451","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"5719176bdc66ba6065f04eb853aaaaef","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"45572c74d6f5957931efdee112967781","url":"Java/ResourcePackManagement/index.html"},{"revision":"4edc9593981c8fe8179f266e6243158d","url":"Java/services/index.html"},{"revision":"be68d3e97d36a4280b17ed0b56f16cad","url":"Java/Slimefun/index.html"},{"revision":"ab3013ea030dc36c11ca7f28baef4639","url":"Java/start/ask-for-help/index.html"},{"revision":"eb94da22b21e238ebd0d0816424fdd1e","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"9599ac8ce0ad84eb16336e5a594cf375","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"61d7b58583b8b96bf9e46231086bb8bf","url":"Java/start/basic/server-management-command/index.html"},{"revision":"a664de1131686ef950d67b588b27bdb1","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"a0efc532c87eff903f71658d474f8e26","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"1b5ef5077e417d3460307e8facd9a335","url":"Java/start/basic/what-is-log/index.html"},{"revision":"fbd1a0a3c3a80980d1e78d4f6ed28750","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"967bb2cd08bcdd54e078940fc93caa23","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"6188db88bcf479d53b6ef9d3cb9c4696","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"438b38917b2f92c88e2338ce0d98151c","url":"Java/start/basic/what-is-server/index.html"},{"revision":"896bdcf9ab8b4d151be4ab43712325e3","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"2ff7b0fd818ff3516dfbcdbdfa479cd3","url":"Java/start/basic/what-is-world/index.html"},{"revision":"451884584ce56af46c587f9d0e5ff136","url":"Java/start/config-server/index.html"},{"revision":"a930728e6706452d75ab0f8d0aa3ad48","url":"Java/start/connect-to-server/index.html"},{"revision":"f1dc6c0f9e31314286b8a18582d33fb9","url":"Java/start/deploy/index.html"},{"revision":"402ab5eaa562d4bcd3a3aacf9bf6b2b6","url":"Java/start/index.html"},{"revision":"8ef8de1c158c09a36629d35d7892204c","url":"Java/start/install-server/index.html"},{"revision":"10e6861bbdb952eca8e9f1b157a23b65","url":"Java/start/launch-server/index.html"},{"revision":"7fbd7bc06f94193640acfeaad2f959f8","url":"Java/start/server-core-choose/index.html"},{"revision":"32dfdc70c5510c1963a505d97fa3249a","url":"Java/Sundry/YAML/index.html"},{"revision":"93c1bc3fff547948203b77a23cd6df04","url":"Java/velocity/index.html"},{"revision":"4b33ab2642ec953d9a5335df0aabc002","url":"love/index.html"},{"revision":"6dc2437c13ce304a39520c3dde8345f7","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"ca15151bddc87b3a6b9228111f66c6f8","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"3fc1d640bfad69dab07f35968e38b49c","url":"preparation/dumb-script-using/index.html"},{"revision":"d0ae77dd006f59894559f3f42e1471dd","url":"preparation/index.html"},{"revision":"366e616cc8a893cff011f31103a1a8e3","url":"preparation/text-editor/index.html"},{"revision":"cd226e6fb3b4619a2f32ea08c704543a","url":"process/create-art-assets/index.html"},{"revision":"2c1d5c3e885213f0b0e29b2becd9f65b","url":"process/dashboard/index.html"},{"revision":"0b1a4d58974ebe1e06b21e875f495cf9","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"5be64b88ae34ffa5152040dfbdcb228e","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"04267ac6e1ba943f95dfabe8f9302ee3","url":"process/deploy/intranet-penetration/index.html"},{"revision":"7badaaccedb0e2fa177bb1727ca60fda","url":"process/deploy/optional-mode/index.html"},{"revision":"4fd1d06afb5e2bd13c66b1b63906c232","url":"process/deploy/purchase-server/index.html"},{"revision":"74dc488858490dc4d50b72d8dfbb03b8","url":"process/index.html"},{"revision":"9b9ae816b414b0e424f1653256daab7c","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"ec5d7c250789418a04dd2aee526bc1c5","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"c7a938ed0b05f45dc5e1e420f323e142","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"cb8e46e0a045586a38991cd3f1bdc05e","url":"reading-guide/index.html"},{"revision":"e8a912e4d7286508eec9af5b05dfe809","url":"search/index.html"},{"revision":"7cac74913cf441527467bd8bd8675d8e","url":"services/index.html"},{"revision":"437e9528c45fc71d32d26459d5afabc6","url":"start/ask-for-help/index.html"},{"revision":"b4dcc6cef15e2c6c780b835f4147a89b","url":"start/basic/what-is-caton/index.html"},{"revision":"6a31bc151e71a4cbde7e316c226bf783","url":"start/basic/what-is-log/index.html"},{"revision":"d0d9af08b4437624bcd71af7d8e22d90","url":"start/basic/what-is-messy-code/index.html"},{"revision":"9f9ac07ad93a06c3cced73b0007dba5d","url":"start/basic/what-is-permission/index.html"},{"revision":"e6233589935c734774c6e42816da9d37","url":"start/basic/what-is-plugin/index.html"},{"revision":"ba6ad8c315e16f31fb23353c348f50d8","url":"start/basic/what-is-server/index.html"},{"revision":"190cd7795b6b552e0f871e951f671f71","url":"start/basic/what-is-startup-script/index.html"},{"revision":"ba0f37120a84b2665a9506744fb4060f","url":"start/index.html"},{"revision":"8a8a1118c73f9ccc4bd73af45d517027","url":"Sundry/Advance/Linux/index.html"},{"revision":"d9437bba24ce9bf3afa468c97aad49c4","url":"Sundry/Advance/management/index.html"},{"revision":"8faa3bfe8e4f8b8601b3ebff2a378ca9","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"03cf2296cb139cb068d2f9f7632dedf1","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"d6f91ac066f41d5dd24fd44ac0d2fbd9","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"b09abd8d2d3ef120ab71669379ff77cf","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"c64629f6ccde88519db8d89d9a73b917","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"8a198e699bb4d04385bdcc28b8b61e6b","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"a2cd7261d6a2d8926902798c8760c250","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"028b1c2448ea07b6599dc42358827add","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"a78c395c7f140c0530d8ff6d7f489bfa","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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
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
    const precacheManifest = [{"revision":"95836496cdfd3e42e04f786f7f8659e6","url":"404.html"},{"revision":"67977eaea4d17c5b44a0c45e7c35aae6","url":"advance/bot/framework/index.html"},{"revision":"f1c19ebac7394459d080c52580caeaf2","url":"advance/bot/general/index.html"},{"revision":"815c5e59b9927d81c0283a81bacdd3a1","url":"advance/bot/index.html"},{"revision":"f653a8aded599bd569db6cdae6db90ed","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"a5a6c1784e5e5b3289fa5c617d606e19","url":"advance/index.html"},{"revision":"c85e83728e989d0505c15a0bd6ef2859","url":"advance/Linux/backup/index.html"},{"revision":"44f1fac53f30b3eac14ed4161b2b70b4","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"1a9a3567eb60a33c01b43bd3e7662610","url":"advance/Linux/frp/index.html"},{"revision":"282ee9c17316f6c6c6ab19853fd40f4b","url":"advance/Linux/keep-running/index.html"},{"revision":"a2d4a62ba7d7479c0a9f7d4d71f609ad","url":"advance/Linux/start/index.html"},{"revision":"f7efc639b38291973811ace4c521226c","url":"advance/open-website/index.html"},{"revision":"25bd9a5f552d3279a2d63f30d26af97f","url":"assets/css/styles.e4e4ba86.css"},{"revision":"73ae690bb165e40797e57c6aaa3c564b","url":"assets/js/005c270b.39aeb36f.js"},{"revision":"dea30785c204055876d074fcc4e90fdb","url":"assets/js/013c8c14.35167e13.js"},{"revision":"ffd65d48634a952607a528269919e8ad","url":"assets/js/026f291b.a392794e.js"},{"revision":"9e69dbdacc7442a4e229b64bbf6aa6c0","url":"assets/js/0272dc73.b915b56f.js"},{"revision":"cf269a4149de494ddb85b3fb1fd196b0","url":"assets/js/035cfa77.db7fdd09.js"},{"revision":"8cd23680db54b0e2242b48292bba008d","url":"assets/js/03b205ee.a3a4e37b.js"},{"revision":"d27aed62e87c31ca65ce2bc17907d39d","url":"assets/js/043fa146.bc4c7438.js"},{"revision":"7af83209a72f595e3586b8316f0f431f","url":"assets/js/044f41a1.a8060316.js"},{"revision":"8f11ee3aaed47597e1127b3b90479cea","url":"assets/js/0492d44d.d64bb470.js"},{"revision":"f202acf92158e9af8eb1f26bd0425ccb","url":"assets/js/04f5c692.48be0aa9.js"},{"revision":"9c702a7a146ef144d213e297c25a2ad0","url":"assets/js/052366f7.4775b5f6.js"},{"revision":"72fa30d4527de59b1777f669e3f434b0","url":"assets/js/05278f71.84c21b09.js"},{"revision":"bece5d9d6f63fc33141f356dd520385f","url":"assets/js/053e2f33.90461115.js"},{"revision":"f3b93e36f9466eec8ddda279bc0037fc","url":"assets/js/06b0ed59.cfd5a290.js"},{"revision":"94a26e75be2a2b5ed851ab8c1f594651","url":"assets/js/083acdf9.9c84d972.js"},{"revision":"6169e7dd6e00922915c694ffe5c86874","url":"assets/js/083ebe2e.93c0cfc6.js"},{"revision":"32cf136cf69c03fdd3b303548984b677","url":"assets/js/08e7f72a.8321cd4c.js"},{"revision":"2e8eda02b691fe987e1316169b860310","url":"assets/js/09156d2e.2f444f0e.js"},{"revision":"9477023aa737af4ad820982cff4d84b8","url":"assets/js/094a7dd6.673cfe0f.js"},{"revision":"4bbb3141777e2704a30b6aa256221f92","url":"assets/js/09714880.3e214529.js"},{"revision":"9e3f1666a6e1e86d4a8bcebfbbbbed8e","url":"assets/js/0a17cf6d.7fc4896c.js"},{"revision":"b43765b6ee3602439fac0608453808e6","url":"assets/js/0ac0b3b7.57e24ac3.js"},{"revision":"ea03a0fe39ffac0bd3cfb12f1403e893","url":"assets/js/0bcb5d9e.202f90ad.js"},{"revision":"e891f7ae876441dd5f3ce82d01547a5c","url":"assets/js/0c7f12b6.780b6703.js"},{"revision":"d6ac351faf5b84d519341b0bd9f2ccf8","url":"assets/js/0e384e19.eb24d519.js"},{"revision":"5ee25699919208e7b89f0aa4682ebf70","url":"assets/js/0ec7bf36.ca542a16.js"},{"revision":"2dcd4dfe99894066f6f231bc2719091c","url":"assets/js/0efa0f03.16d1f4b3.js"},{"revision":"7e50f098aa7674d7cf718ade74d5c27a","url":"assets/js/0fc807d9.c485dc7a.js"},{"revision":"f4b413b4654533df65b9c46db1f775ac","url":"assets/js/11f90be3.107c05e1.js"},{"revision":"6c879d73b753c2778adedc4bb33f41b6","url":"assets/js/1210f0b1.688a158f.js"},{"revision":"8165a77fda46a465656bf45a17429133","url":"assets/js/144520df.84666069.js"},{"revision":"17ca70d3092f7a28ebd3944341c9fe9d","url":"assets/js/14eb3368.1b3a40dc.js"},{"revision":"272dce730295ce43416aaeba7ecd03d4","url":"assets/js/1537.c5a762c0.js"},{"revision":"2710f5b29ff72c1ebfc77c048c037d7a","url":"assets/js/15daf372.a79b729c.js"},{"revision":"53c396bf73407eca9738a631740d62c7","url":"assets/js/15e4e3ed.7c365230.js"},{"revision":"2deb9bbce1817df4b12e4fc15d5172b6","url":"assets/js/1760.e90d3aca.js"},{"revision":"88670c57d3d175894d3f201d377c6490","url":"assets/js/17896441.8433a9a7.js"},{"revision":"11958c175de014a3d076ee85e87c61e0","url":"assets/js/180bc163.0bf2ba1c.js"},{"revision":"956f1a5e76113e6a7f84cbf4aefb45c5","url":"assets/js/1856fe2a.ece0c603.js"},{"revision":"bd200dc31d1d16c6e69e29df46ca0939","url":"assets/js/185d6330.e0db0125.js"},{"revision":"e688f8cc238225bd274152789a088639","url":"assets/js/188.d81dc71f.js"},{"revision":"ae6ccecb4656dd6f040f502b527bef0f","url":"assets/js/18b67442.fb49a8dc.js"},{"revision":"b06d55749dc0e7125a8f067c453e55a9","url":"assets/js/18bca995.dfdaabf7.js"},{"revision":"58c55df0151f5dd0b32f811035054da1","url":"assets/js/192.bd2ea5ef.js"},{"revision":"1b38dff8b60984dbe2ec3c9c4ccc602d","url":"assets/js/193a055b.872a98af.js"},{"revision":"d7cb239dcc5c25e1f7bffbdc736987de","url":"assets/js/198ea2e3.0701eacf.js"},{"revision":"ca19339a807f0336693fd760b0f62524","url":"assets/js/19cf8050.0ea49aa5.js"},{"revision":"31fdaf098ca6c5023f6120b36c9cff5e","url":"assets/js/1a4e3797.e7dafb65.js"},{"revision":"14b8ce3ba76ea29f2f73dbaf512899f7","url":"assets/js/1c42be93.2abfa683.js"},{"revision":"074bece71014941ae9d74b8be39f84d1","url":"assets/js/1c6846f9.fba8fd49.js"},{"revision":"31a83d82dd702031d3c0ccd1f91f7ec7","url":"assets/js/1cf75b4f.78994c28.js"},{"revision":"57a1f64203b5f22e76e4ec8423be5e13","url":"assets/js/1d1b9adf.5eed7bd2.js"},{"revision":"1dee2235d686f6f9e2728061edb36375","url":"assets/js/1d42ad15.07039895.js"},{"revision":"6497ba37238babe8388ff1fd60e53f42","url":"assets/js/1dfd2628.6d888e53.js"},{"revision":"8457d1ef244f762e575fe838980344e8","url":"assets/js/1e0a547c.1821481b.js"},{"revision":"e03b3ef7deb66b70aa458b152a01d9ae","url":"assets/js/1e47cbc1.47d723dc.js"},{"revision":"f129aec76e7e5dac8655f2cee6777cb6","url":"assets/js/1edb7625.5ff839dd.js"},{"revision":"45ce1bb95f8b2d0eff2f313beb92a44b","url":"assets/js/1ee6f0d4.a78a7e7a.js"},{"revision":"e1603bc00bc55f6a2aaacccfbb644bc7","url":"assets/js/1efacac9.2f9f9779.js"},{"revision":"f66e8da8bdb2c736d47b705dc86ba1bc","url":"assets/js/1f81f646.d155e600.js"},{"revision":"feb70cef079ffc798c38c740e5ec60e8","url":"assets/js/20215aa7.8f9f22b7.js"},{"revision":"2469ec8eb7303ceb7c131164ad1e2b05","url":"assets/js/20547864.779fb1a4.js"},{"revision":"90cb392221ed37a3c4089017fa49e30a","url":"assets/js/20d69604.97c24e2f.js"},{"revision":"c56de8356ae68134219155e574552ff8","url":"assets/js/21c534b6.86d4483f.js"},{"revision":"79e5998763c839557c731bdecac27b33","url":"assets/js/225.7a67a60a.js"},{"revision":"ef47a031ad07552bf834d5348fbf9bf6","url":"assets/js/2423.fd094983.js"},{"revision":"b509e5774e9e51a8fd837593e8f6e583","url":"assets/js/244418a2.65d54adf.js"},{"revision":"7a21d46b2906db442623644e0078f8cf","url":"assets/js/24a68a77.08dca67f.js"},{"revision":"c8caa334643798d39a66763f4ab77011","url":"assets/js/24d8f7d7.774de195.js"},{"revision":"ed0f485c29331663d77fc70eee4d3af9","url":"assets/js/254a43c9.a9facdd4.js"},{"revision":"6c8e4594b69897f213ed55a82eb4db75","url":"assets/js/264.30bc98d3.js"},{"revision":"468036765f708511d4525329b3e901bd","url":"assets/js/2867c0df.09bef4ca.js"},{"revision":"c238cf3d2388582e773030b2271a7eca","url":"assets/js/289.827ef2c5.js"},{"revision":"fc7a08819d98194447755e7045905d8e","url":"assets/js/2a71d676.3ac9cc28.js"},{"revision":"cc25f90ed0eff42f9b626f78c0bd7a86","url":"assets/js/2b4e0304.838bb5df.js"},{"revision":"6f725f11bf8a62e1cb89bc3e27030c71","url":"assets/js/2b9de2c0.58bcb7ae.js"},{"revision":"cc0f3304c8392943814182573b2c6bee","url":"assets/js/2d386ab7.a950aa1e.js"},{"revision":"e34cf678c6a274157cc432b189e045a9","url":"assets/js/2e938706.f58bf9a3.js"},{"revision":"1b70cea5a11c99c2b9d321ff1e860b2f","url":"assets/js/2f39a0af.cc68399e.js"},{"revision":"9b703bb22b0aeb4b65f06a79c829b1a2","url":"assets/js/2f8ede37.7655dde9.js"},{"revision":"7a09eead6c0d9b93c64e93d3aace5b55","url":"assets/js/304.ac7707c7.js"},{"revision":"9cd5f05d5013b293a95f002856d95781","url":"assets/js/312f6c84.9625bd10.js"},{"revision":"30b4e065d3f379f8ec10ba08deb3f6bb","url":"assets/js/316.df55a7a9.js"},{"revision":"268b31d6620f203e83067d34dcd5a189","url":"assets/js/31735ebe.5d61c56c.js"},{"revision":"d708ca60e2a650623b1dbf15bc1c04c9","url":"assets/js/33261842.02e5353a.js"},{"revision":"3b525de5afef1913f1c1b88be7b5dd5a","url":"assets/js/3373.191ecb58.js"},{"revision":"3832e6d0d75c1e49ed888a978c680570","url":"assets/js/343bb2fa.34f9dcee.js"},{"revision":"763de0b9936b2047a778eca7a3eda6ee","url":"assets/js/3488027e.749b77e1.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"fdf6cbd826675ff0e38b4a11a5ec4094","url":"assets/js/359195cb.a4a5a421.js"},{"revision":"2d087e0c7b41a48e26504a1bc581aa76","url":"assets/js/35d30f29.af3c711f.js"},{"revision":"56887339331e71194208c9687ce5534e","url":"assets/js/3636.ab3720db.js"},{"revision":"32c7e9815f9d09fafa6d528400e73d92","url":"assets/js/36c75202.eb37b8a2.js"},{"revision":"3597c7c709bdb52977547d4fab890c78","url":"assets/js/373.e4bcc5f6.js"},{"revision":"951252aeb8ae0040594c08ce16cd8fbd","url":"assets/js/3747.b5340f88.js"},{"revision":"929b84d391b785d7eac1bb3d093532fa","url":"assets/js/3749f972.52e32f7a.js"},{"revision":"c056ee20a564c59b443c176c00ca5bb5","url":"assets/js/3868.49019453.js"},{"revision":"6999359f83a98b850a38b4024161c870","url":"assets/js/38b0474b.b77aa8fd.js"},{"revision":"64ee6e266a96f81f917cc7f7cabbe2db","url":"assets/js/38b71911.3bea9e18.js"},{"revision":"49129ea85e25d2904e9574553593f50d","url":"assets/js/399101db.10bfb676.js"},{"revision":"47ed3fae052f95acdf70cd7cffad2985","url":"assets/js/3a42456f.9221d48d.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"c5af2e97d976f377e4c3e57c2467f7f3","url":"assets/js/3b8970d0.ac58e9f6.js"},{"revision":"5ab7426fd6dacaedcae3ac59d1980339","url":"assets/js/3bb1ea30.3a74fd54.js"},{"revision":"39806ae649048c91b15f2c7e2b7012dc","url":"assets/js/3bd1ba02.e8c79c46.js"},{"revision":"491a5d4eab91d78a5eca9c5eb96f5a6b","url":"assets/js/3c5393f3.203a26df.js"},{"revision":"c0979a344aacaeecdf380b1037a225c6","url":"assets/js/3cd38fda.541f195a.js"},{"revision":"21ca576859f490d6951e0d9faa9d1628","url":"assets/js/3cd65ff0.ae1c632b.js"},{"revision":"816ee59bb0005c0f49674128e0c615b4","url":"assets/js/3d7f94ff.db5c0721.js"},{"revision":"7e2ed788eb711a59143184d2d5d5aa00","url":"assets/js/3dd749a7.e9f378a5.js"},{"revision":"4b24ccd8008dc356b1f188937253d306","url":"assets/js/3ef38818.765b7cab.js"},{"revision":"738d0e4f2621b0ecea0c57282d6e20a2","url":"assets/js/3fbeb9b5.2a7e2612.js"},{"revision":"688cb9b8627601c023eaf909fc29d82e","url":"assets/js/411.c2ae933f.js"},{"revision":"c979f92a3db7f8beae1b4a0e8156df6c","url":"assets/js/41c0ace0.83f121a3.js"},{"revision":"bc291358ac6bee42a1fab164adb42ff7","url":"assets/js/423.fe93ccac.js"},{"revision":"809ccc8176fb6528212f2c0c68d082a9","url":"assets/js/425e3dd1.c080889e.js"},{"revision":"efc28cffff7ded5c603507790e9138cd","url":"assets/js/4305.699fbca3.js"},{"revision":"889e4f7657022a3dd3f8238b22f076e8","url":"assets/js/4307.f556133c.js"},{"revision":"7f03c1be23afa4b3a0cc039d9b1d2cfe","url":"assets/js/431266e7.552f27b5.js"},{"revision":"a1c1048912fe0aaf3daae4fcbd5de2ad","url":"assets/js/445c22af.a0a8ead1.js"},{"revision":"54f041e26b8782d7d7609f21cbe786ee","url":"assets/js/44975943.37fd0681.js"},{"revision":"ed6085e94ce57906e09131c92e64a9f3","url":"assets/js/45cd711d.c8c9c32c.js"},{"revision":"40a5cb4ab60accfac0df7aa637c493fa","url":"assets/js/4695.cb4978da.js"},{"revision":"d7e9464b2f706462fa2c1b9c860ca316","url":"assets/js/46bf3d5b.32afde4a.js"},{"revision":"441087e93a70cbbb19b30ec7d86f195b","url":"assets/js/47.73c909c1.js"},{"revision":"6ec1abace14657745cc9828daa5a29d2","url":"assets/js/4838deb2.713b6b6f.js"},{"revision":"6d0582498eb60f9b76c4d01597a634e6","url":"assets/js/4900.4a85eb3e.js"},{"revision":"1640ed8b94417722c8884edff7d25685","url":"assets/js/49aec60f.ed4df56c.js"},{"revision":"a40c48f7046f2bec5e6374af30b49a47","url":"assets/js/4beb5b8c.e30c28d9.js"},{"revision":"34bee620b659a53e80617f526beba098","url":"assets/js/4c7ea6db.aa6236b1.js"},{"revision":"0e2e1886d540b754e9ed17caf34fb84a","url":"assets/js/4cdf84ef.56c8947f.js"},{"revision":"a4fce19226c597004ee44e97a3972b17","url":"assets/js/4d27c60c.d8c1a34c.js"},{"revision":"095501010e9e8109e8c7b7489cce7a82","url":"assets/js/4f644c0b.26b27676.js"},{"revision":"fc51e854890a7e34594fc977444eb584","url":"assets/js/4f8bb2fd.3f69f561.js"},{"revision":"4f7a3972ee83066c02fce4e0393ece5b","url":"assets/js/5008.ff0573b4.js"},{"revision":"a97d0da557019f936f18282046fc5023","url":"assets/js/5047.21185203.js"},{"revision":"35b16ed6f8e4f583c3fe0bf1079d62a8","url":"assets/js/50b793dd.a0dd0a12.js"},{"revision":"a32f81919f1d177ffa3b7b91b13559e9","url":"assets/js/5117.01105d5d.js"},{"revision":"62a53e83353c07768e3abacc0da7d724","url":"assets/js/51ebfdb4.274d2515.js"},{"revision":"4181dfb9c0a884d9cdb700afd056a838","url":"assets/js/522fd580.50e0f676.js"},{"revision":"c92214c40860ff74c7ba2538936a4bd1","url":"assets/js/5289.e3079c7b.js"},{"revision":"fd2e356c655ef2b1d8eaf77313096cef","url":"assets/js/537.1cbfea41.js"},{"revision":"418fbf89179260d65031da3524e46f27","url":"assets/js/541d5637.b21fba0e.js"},{"revision":"56bd28628f14065d2913f6e310db1b3b","url":"assets/js/54a35160.424bc9b4.js"},{"revision":"36c30b6eb2a74c3f01b48d68c4d0fa7d","url":"assets/js/5571.39f6adb1.js"},{"revision":"885e84723cce87efdd21a82aafb5f5d0","url":"assets/js/55aaead0.519ab47a.js"},{"revision":"d436f45843aec58cfc8245d580ed01cf","url":"assets/js/5606.231f2c50.js"},{"revision":"c7d1350cfdfda9e82139c208eb894a9c","url":"assets/js/563b5c65.e260e479.js"},{"revision":"9d4d56c65288b7cd99b53a77000f8ef6","url":"assets/js/57ecc2b7.9d8b4ed6.js"},{"revision":"251439a155eab1e6a98628aadeaf1f94","url":"assets/js/5834.82c62804.js"},{"revision":"46b78b6a6919aa97f652c3ca53692fe7","url":"assets/js/584.ac6b39cc.js"},{"revision":"6a052a3cd26ec7bfe0ee9b561d5b9c4d","url":"assets/js/588dd44d.907181a0.js"},{"revision":"8522d4492ed4350c214a843ae5207a62","url":"assets/js/58fa4e48.1cf7b564.js"},{"revision":"2e62cc797bf2e0d70445fb367e9a2be5","url":"assets/js/594bb6c0.aebdb558.js"},{"revision":"dbd9c2c3cba8557147cfff82e084013c","url":"assets/js/5a5e1dd9.b408cc94.js"},{"revision":"0da90a6d818ca2c5108bfcf020bdc31d","url":"assets/js/5b3491ef.dd621770.js"},{"revision":"2046a9054883036f1f08e952652996b1","url":"assets/js/5cdb4525.bcdd98c2.js"},{"revision":"4c99dfa6e46c5fd0e5839f50fba8bcc1","url":"assets/js/5e6d1f8b.3e14420b.js"},{"revision":"f9ae90e26740999e8971989e8ba4236b","url":"assets/js/5e95c892.f99d74de.js"},{"revision":"077c863450c0475c3dec04d071e14987","url":"assets/js/5e9c3b6a.bcd57f41.js"},{"revision":"d1be82ad14f0874ddf01b80bba6b6cdf","url":"assets/js/602bb363.77c8feed.js"},{"revision":"5440976f10d6891c5b6af72628c8f45b","url":"assets/js/61aaacfc.c8ce1033.js"},{"revision":"93bf132f3e970dc29f500652dba951cd","url":"assets/js/6228.62ee8f75.js"},{"revision":"5b24c9cce868af1a0ae59ba4ebf62435","url":"assets/js/626.a9e6927c.js"},{"revision":"79b41ec7703bc12dc2d09a3a233ac19f","url":"assets/js/6304.d9ae89f9.js"},{"revision":"e1b33af707afdaab4bd8aa22d5356aaa","url":"assets/js/6316.c9bb9321.js"},{"revision":"c9d02c6dac2e7775cd6db59913b61f17","url":"assets/js/635cb825.256b0b4d.js"},{"revision":"1f6ab7b93e9c82fc52c3e8fa528c7b48","url":"assets/js/638.744ee2f0.js"},{"revision":"bb7c303a816f3e2ce58fb0b3ab185b61","url":"assets/js/6415f59a.ea2bfef6.js"},{"revision":"2f390bf3a724dcfcfda1e75e56fe4b56","url":"assets/js/64614d1a.2d3f9fbf.js"},{"revision":"79e3802e412a4b8c19b83e2e8e689250","url":"assets/js/6475d366.8ac4a57c.js"},{"revision":"b2aa816ba6301118f61d0f14de5668a4","url":"assets/js/6557cf1a.5b27e859.js"},{"revision":"e1ab66955652d225415eb38ccc1ec3a3","url":"assets/js/6577a0df.6e6cede2.js"},{"revision":"d67b4aba64768435767a312a1fbe16f0","url":"assets/js/65bc360d.fd176413.js"},{"revision":"5e619047ba1d0d1ed58bdfbb9ac1e917","url":"assets/js/6638.b0b04cfa.js"},{"revision":"a7a6d5010f36151371fb264efa5d5251","url":"assets/js/6762.1f5e3817.js"},{"revision":"920cb27b3f3ea0b312b2104a83a1892e","url":"assets/js/6775.cba7a5b4.js"},{"revision":"598416c79eac6182223a3d71929b8677","url":"assets/js/681b7af4.ddd88fc8.js"},{"revision":"ceac9876972b9436c53f33c405feec93","url":"assets/js/69df999c.8c949622.js"},{"revision":"f5b65bc9c4839910ed9e0eea5ec1dbfe","url":"assets/js/6ad9afaa.248d2c27.js"},{"revision":"c7f59cc59af9be58cce75dd3c497a221","url":"assets/js/6b902128.b895ea1c.js"},{"revision":"1d2d2f9dc14d2b168678b294b80ba643","url":"assets/js/6cd9d647.e2b7e6d6.js"},{"revision":"453b1e1882538302a053c1bc9f1b45ca","url":"assets/js/6d6bd066.b2a46009.js"},{"revision":"8cb9126b210e22f7ad39f195e69797c5","url":"assets/js/6e3d6b93.8e95b8af.js"},{"revision":"6ef5b50be03f4ba43d8006cb70635ff6","url":"assets/js/6e889b7a.eb1a769f.js"},{"revision":"c6454264924d1f474802dc35727a109c","url":"assets/js/6f2b2af5.57bb402f.js"},{"revision":"bb9144863b9662d4aa75f4b466e40372","url":"assets/js/6fedb7a3.8cc6cd76.js"},{"revision":"1356b1c765ec289b02189fe11df769df","url":"assets/js/70321d34.eea24f4e.js"},{"revision":"df3307288575627d1439d1c002e076f2","url":"assets/js/7188.9be0b533.js"},{"revision":"f46670eff76bd7dbc9b4f87dc1c2360d","url":"assets/js/7192.8fd9f9bb.js"},{"revision":"79e32dc29397c4b79f25532695e6a209","url":"assets/js/71bd92ad.2b65c44e.js"},{"revision":"6ddfaa0b4be7b35311169a9d62272a97","url":"assets/js/71c41cca.0d35257d.js"},{"revision":"24cdd1a1cb670c71548c795cd35f9969","url":"assets/js/72b3e7dc.f061aa92.js"},{"revision":"6e41e0ca7206a057eba8bfbd2836f1df","url":"assets/js/72fea898.b54a7fc1.js"},{"revision":"eb41d97fe21ea21195e426834e5ae9b7","url":"assets/js/73c38494.bb01ae5e.js"},{"revision":"30fa0ba5cb2df6b682a2320fb62a752d","url":"assets/js/73f32b8b.6e780383.js"},{"revision":"bb22db09ca9f40698657eee0bb8906d5","url":"assets/js/7411.d34a42cb.js"},{"revision":"f75602253625051f47af6a2818bce4d8","url":"assets/js/747.bc1878ba.js"},{"revision":"f0c1e81b728085db02663cbdc0ee817d","url":"assets/js/7515.fb042b69.js"},{"revision":"2b13496ce49524b6ca7ab9558605f5d7","url":"assets/js/754296bb.42d29868.js"},{"revision":"f68a75df0507ae96f6dc7b4e7c604d02","url":"assets/js/7584.855762aa.js"},{"revision":"8ded373bd1db433c76d7b7b89dabd368","url":"assets/js/7585.21c79de9.js"},{"revision":"a846d1d50e09b97422103e18774c8eb1","url":"assets/js/760.98e67eab.js"},{"revision":"54a94da4bf8e9f11c9519afb3e2aa539","url":"assets/js/762.220e4ca4.js"},{"revision":"a4abfeaf696bbe4fd882c66561015d51","url":"assets/js/775.a4b47dfe.js"},{"revision":"2e8039c4cfbcc729fa8064e163547fe1","url":"assets/js/790b642d.8beed492.js"},{"revision":"288f52f99cc213c9a17fb83022d8f781","url":"assets/js/7970.170ddeb0.js"},{"revision":"9644a9d7d74ddfb70b512ac37c069a4e","url":"assets/js/7998.a2e4d5f3.js"},{"revision":"b740e736f5999fdb4b10bce7fbc1d243","url":"assets/js/79ee951b.4e726eef.js"},{"revision":"8af886035d882ff0155415ee21126169","url":"assets/js/7c328fb0.ac7b27eb.js"},{"revision":"50007bed9f9dc2e8a84099345d1f6cab","url":"assets/js/7e75dadf.afbaf5c2.js"},{"revision":"c82cd1fcd982aca2db366d6b0cfd6bf4","url":"assets/js/805.bb1da7b6.js"},{"revision":"7ce69e506fbdb6101ad55634cdbc928c","url":"assets/js/80f373f2.d6fb959d.js"},{"revision":"5bf67383c2495102c633c186df974fdf","url":"assets/js/817191e9.3b28dd0c.js"},{"revision":"5963ea10f298ffacd568db65b644add7","url":"assets/js/81e8afad.bb15eec8.js"},{"revision":"a6c70e1d189cc6f8d2c911a1eb3c798a","url":"assets/js/8225.e7b15e8f.js"},{"revision":"1b94e4370ad2b76ab2900d3df1791c87","url":"assets/js/824c452b.39753d97.js"},{"revision":"9ffd97dc13261cbfdab98aadd1beba32","url":"assets/js/82c03827.26f454e2.js"},{"revision":"ff9fbf8434c605dd56ae1a9e15a5de90","url":"assets/js/83236138.a4b17bae.js"},{"revision":"d1c9875674a23f664b76766b497ca3fa","url":"assets/js/83fa3eff.a6381b71.js"},{"revision":"8dc46a8d8abfa9448ef3e677c6a04a80","url":"assets/js/853.6812ef3e.js"},{"revision":"851b427de98eed5df7c3d0b203951e6c","url":"assets/js/854b257e.f5239dfd.js"},{"revision":"7d4cd07c372724b70130473ec7a16113","url":"assets/js/85ccb835.fc487c85.js"},{"revision":"6fa4290ec6285013d57aa2d71191512b","url":"assets/js/86170a86.a98775bf.js"},{"revision":"3a4d168c9ef456cdcfdbf4f909669fb3","url":"assets/js/868.4d467bc6.js"},{"revision":"af5a2da55694d5eddd047f0e66c47de9","url":"assets/js/86d633e5.2c591101.js"},{"revision":"af9dcdb7c5c0781a25e73b7508e035b5","url":"assets/js/87531641.53e5fe4e.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"066524aa0a82a85e1b52c0f594404b55","url":"assets/js/87d5db97.0888f0b7.js"},{"revision":"2159f9f34828189596afdf00ac028b6d","url":"assets/js/8805.3225cd25.js"},{"revision":"222d6252c032b341c78a74051bd7393a","url":"assets/js/883b3acd.70396816.js"},{"revision":"bca398eac431d53bffac077e1f1311ed","url":"assets/js/8853.7a84ba1d.js"},{"revision":"d851126952410d518d63cafe0f350f9b","url":"assets/js/888a5ebe.30d1d82d.js"},{"revision":"c6be85d8ebe9b63e8ac9b8a7bcfb188b","url":"assets/js/893c6fee.16a2f573.js"},{"revision":"26788334e472affff2d047e2a70a9862","url":"assets/js/8a578643.fff53dca.js"},{"revision":"e21f4b7399e2b08295ad07f8468a1504","url":"assets/js/8b23f58f.9d96f7ce.js"},{"revision":"2ad48d7075dc3119dbbcc8d4af1bccc8","url":"assets/js/8bdaa531.25051153.js"},{"revision":"e1429f7223d6f4b5216ef3fc3d3ce44a","url":"assets/js/8ca7e4b3.961ab541.js"},{"revision":"89d203478f658be1f0190ac24504d9ba","url":"assets/js/8e0be0d1.0dfebd5b.js"},{"revision":"1b3e521060182e9e0f1d926f64572eb3","url":"assets/js/8e6a4e74.ec545311.js"},{"revision":"44bf6cf36f0f469ba17f50b2bbef2a3b","url":"assets/js/9039.0c411ce9.js"},{"revision":"05bf779f93851402c31aa2b60c861e7b","url":"assets/js/9197ae7a.b4f1cd56.js"},{"revision":"4b6b4f3e7ff8dcf61f390e3f787aebf2","url":"assets/js/9229f78d.93f29962.js"},{"revision":"0fd76ce1b6458d564fabff84b14a0428","url":"assets/js/932.6ad772e7.js"},{"revision":"026e1cec003a50e9841f371b36e031a7","url":"assets/js/932.9d69cd03.js"},{"revision":"415c59d8b8098a58f5823e5d30eee909","url":"assets/js/93456434.86d4a7ae.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"57266ee37fd523fdb7b942040d1df619","url":"assets/js/95bcd1dc.ba1a758d.js"},{"revision":"97fd187ce04081dd45b75dfcee817df1","url":"assets/js/95d63b84.089cc032.js"},{"revision":"905a1adf8fe8476a2aff57b66ede78c8","url":"assets/js/9861953a.ab72c94d.js"},{"revision":"07f5b4fdd97e447d13c53e98a3c93269","url":"assets/js/9951fe7d.0d66b55a.js"},{"revision":"8b1edb066a88340ffa8d20a206a97f32","url":"assets/js/998.e1b259e9.js"},{"revision":"d2fddadb6b8bc49e6f46653701ac5a08","url":"assets/js/9ac34ba0.a5bd2e36.js"},{"revision":"68a6571075f12967d3ead5680520de5c","url":"assets/js/9b8d311d.2e443b8a.js"},{"revision":"4f0e68eccc42c264f851d342197e838d","url":"assets/js/9c2278b2.bf43360d.js"},{"revision":"6e17715f7ae8997a80221aea5938aee9","url":"assets/js/9cd2fc0a.e3a4a671.js"},{"revision":"19cd3b557ceab35c1839a4fccf31d0b6","url":"assets/js/9d4488d1.2218a960.js"},{"revision":"1af26e5bca91c20c1585a62f41ec8391","url":"assets/js/9fdc340b.4f7bdeee.js"},{"revision":"6b48a3c57b745b389e4c104d2fafa3e6","url":"assets/js/a1e55d50.0f877d6a.js"},{"revision":"f67c5e3e0644557f0912dc944e4a0804","url":"assets/js/a21e984c.0a07f00f.js"},{"revision":"922df76b3d3792c7b32b20ec939f12b5","url":"assets/js/a2ca8fe8.d31634db.js"},{"revision":"d9fcff575528317837517eb174dcdc56","url":"assets/js/a2d5f767.b53694c9.js"},{"revision":"a1496154d5c56af1db8434a82d89b90d","url":"assets/js/a2fb89b8.6eec045c.js"},{"revision":"092a230cbc8059b52a11486432d8e9be","url":"assets/js/a305e2ac.fd144626.js"},{"revision":"59b51b479eb96f6788e9cec9270b2262","url":"assets/js/a4c78573.ac1db5de.js"},{"revision":"ceec5feeef345c0030ec4c35c8cd50ca","url":"assets/js/a4e7ef95.76568ab9.js"},{"revision":"f4a31571fdac9aa1d121fa0e8addf9e4","url":"assets/js/a62eaa10.5992ee08.js"},{"revision":"569a64c781b0b4f84244db4ae449b6ac","url":"assets/js/a6eaa2fe.e39a1942.js"},{"revision":"83187d67a9b2abc1da52e0f6610e3c53","url":"assets/js/a7062d46.f6d9fd8c.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"27077299d732fc61338f267486c74a87","url":"assets/js/a757a55c.12d08891.js"},{"revision":"99ea9d92744097516231303225bd9a04","url":"assets/js/a78b3ba0.feecb3ee.js"},{"revision":"4a0a2054df71b457cfc7d961b87bdb94","url":"assets/js/a7bd4aaa.91a2aee1.js"},{"revision":"2e227459436a6c51233c9aed92d165e0","url":"assets/js/a7ddcfcb.46bde4f0.js"},{"revision":"6180f0d48e2e8fce9e326a9e9b2a96c9","url":"assets/js/a8bdbcd5.6e998455.js"},{"revision":"5134c3ab2fe5842b5e39033649ee1a6b","url":"assets/js/a94703ab.b05c2422.js"},{"revision":"273581a4f503622125ebe2fc9641dec5","url":"assets/js/a9c868b9.744b96b5.js"},{"revision":"023b3e961fbe51f8ad9e379d120feeff","url":"assets/js/a9f9a930.8e826516.js"},{"revision":"2195f166250a7b0401b9f0133a2a5144","url":"assets/js/aa276556.24057c6a.js"},{"revision":"4876ca09eaf82ebddd4f4753b70fab84","url":"assets/js/aa7b0feb.a2132f44.js"},{"revision":"75d25301506a93a570191f40d62861e9","url":"assets/js/aa81450f.09b1d7a8.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"fb4c6d5e67128b704ce3e42a750994cb","url":"assets/js/ac61b989.f0404906.js"},{"revision":"63cfc63f241b51f8d710caced7968350","url":"assets/js/add4bb7a.10221ffd.js"},{"revision":"1a7607a0328ab64b065fd1e715f46aac","url":"assets/js/aeb124bd.f58ae152.js"},{"revision":"e4ed82341cd135443bc6b01e1242ac2e","url":"assets/js/af70a4d6.a8ba4299.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"3acfa44110701261afcae87f415548a3","url":"assets/js/b158dc01.8e982e29.js"},{"revision":"92ba50898e45dfdb2d81074e85cb132f","url":"assets/js/b21946ae.bbeda5b4.js"},{"revision":"5a7e1f4dc2212273f2401abe8cf7bedf","url":"assets/js/b222cacf.57c9a508.js"},{"revision":"e2fd05ce3ac69513f74f426f2f93b801","url":"assets/js/b24d385c.e3386c6b.js"},{"revision":"cb6a0703de7124e013d85f17ea208667","url":"assets/js/b496f3e3.261ca05e.js"},{"revision":"1442d00fb0fd8bbc256ff28411457c8f","url":"assets/js/b5210edf.72d7d6e0.js"},{"revision":"a0d6c238649ae60d5d71f6738d28bfee","url":"assets/js/b5eeabfa.f9e8bda2.js"},{"revision":"5216fcc080aa4ee9f8251dd92879579e","url":"assets/js/b60da6d7.3eb38b57.js"},{"revision":"558839a86c47276c67efa33faf9229eb","url":"assets/js/b60de388.1d08c011.js"},{"revision":"7f44d9c4a7f9134781191b3ae77636d1","url":"assets/js/b6386ec9.b45d0c45.js"},{"revision":"ee36682fad5e118a20b7e56031041589","url":"assets/js/b6438b6d.fa8be96e.js"},{"revision":"56e7e1946ef2c3b00c96a2902665c623","url":"assets/js/b78eb33d.a0727546.js"},{"revision":"c4c6df207ebb2b0db7ff26dd3605cfd3","url":"assets/js/b7bb49c4.279b9458.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"966bf7c6eb1baaf0e2e681a87bd7f9dd","url":"assets/js/bcc35f8a.5a22fd83.js"},{"revision":"e83c4261b0ae21d814d872aaab24ffb1","url":"assets/js/bd760347.c763c447.js"},{"revision":"012d0b96fa23e116bb0ecca1d2e309d5","url":"assets/js/becf8c88.0b6bc9f3.js"},{"revision":"6132958ccf48b7072521c26eae9f57c2","url":"assets/js/bf3ddb91.e42b72fd.js"},{"revision":"ee7c9bff0f3e2489b1116bcd285cb9dc","url":"assets/js/c0dca479.8b276add.js"},{"revision":"a42c6f2e6ba8e59d5018356214be014d","url":"assets/js/c10e86aa.d78185d8.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"272ca4ee271b3b179bfae47ddbe84050","url":"assets/js/c156da02.da5e7f1f.js"},{"revision":"d0e724b9d24d33dbe285d835c8beb8e4","url":"assets/js/c4dcc6dd.180f545c.js"},{"revision":"df5e3ac7ad78db517593301029a4b808","url":"assets/js/c4f5d8e4.ff5b7cbf.js"},{"revision":"6c0a069d654b67ffc26a2bedac920635","url":"assets/js/c5f4348b.5f98475b.js"},{"revision":"da6edeb8b9af334146e6c3c777b31c60","url":"assets/js/c72cf9c7.1a17757a.js"},{"revision":"601a94155c0ec04ecc8404fae2e7f380","url":"assets/js/c737e1a5.d0c88ae1.js"},{"revision":"842435091c0cec7c0f1a419785b78d35","url":"assets/js/c78ecae9.7d114c33.js"},{"revision":"da95cbd3e601e8b1ad62a89315c6bf68","url":"assets/js/c8018499.361fc69e.js"},{"revision":"23cd398d1062312ca263241a64142137","url":"assets/js/c84a9914.eeb880ba.js"},{"revision":"1ae035fa63e39009930b1794549cb4da","url":"assets/js/c8a93e67.0a7a3f2c.js"},{"revision":"a49e97ce59dbfc7a7a094abd461b192f","url":"assets/js/c9947f43.f60a517e.js"},{"revision":"a6ce6368be2ff99ab605a8b91f13f6d5","url":"assets/js/c9a1eaa2.6db8f767.js"},{"revision":"38cc506a5c78a1045a310bfba813bb5d","url":"assets/js/c9ae34fa.aef74ebf.js"},{"revision":"fedbf1326dacb0b30e9306db66a8cfb6","url":"assets/js/ca8a1b2c.5dbc9881.js"},{"revision":"bbc79c1c1ac34a2c5ac749d6e09b0fe1","url":"assets/js/cc2fcaab.8dff2247.js"},{"revision":"4bf4d5e2351366a38a5c774ed614ae17","url":"assets/js/ccdb3c45.e4c5c1e0.js"},{"revision":"723ee3bcc651c3b38076f40ccf5955ab","url":"assets/js/cdc590f8.2ea557d1.js"},{"revision":"bb3b70526c02034fbaa91bafe6ffffaf","url":"assets/js/ce7e7ba1.cae6c229.js"},{"revision":"f89ad963ece433805bdda27706499355","url":"assets/js/cedf0e63.139da83d.js"},{"revision":"074926f28af920ffc033565e388774b9","url":"assets/js/cfc0d51c.10ba6b51.js"},{"revision":"1187f9bc4e2feeab82b17e0393698bcf","url":"assets/js/d00b9fd9.a90d4092.js"},{"revision":"f8d1dfd57d8ed49cc6eed2576d525157","url":"assets/js/d07a3d34.7e335d20.js"},{"revision":"360322781b9a465f53b0ce7cdccbfb55","url":"assets/js/d0ab59b0.18b5aef3.js"},{"revision":"9589e2949d8b8816411924f60859e3d4","url":"assets/js/d26b0f2c.e76d93b0.js"},{"revision":"f36e504701d128dd5d8333ebe41d14ea","url":"assets/js/d2a9048d.c249723c.js"},{"revision":"4aeee0816d9c2b8da7ec6a82bc054861","url":"assets/js/d2ba5076.d13ed583.js"},{"revision":"5ada50ab69b0bbc0873ec799d33b0923","url":"assets/js/d3585a2b.70c31510.js"},{"revision":"b0efcf21d8d78d075f6505d42ca95f06","url":"assets/js/d45ccebc.303d2bff.js"},{"revision":"69b31fc4736e705884fb24a63c4e79fe","url":"assets/js/d494a195.10df0262.js"},{"revision":"5bc77754996717e7603ba15f08898936","url":"assets/js/d63ab801.16f8f268.js"},{"revision":"5f85d9d60e0ee4cbac7396cdcd5e2afa","url":"assets/js/d89bf822.73320099.js"},{"revision":"b262dc1c01cddbcf8735a13e0fd8a06d","url":"assets/js/d9cff955.0200b5c0.js"},{"revision":"e82bcf094a4751ee8f3432ba2f9be52a","url":"assets/js/d9fe55b2.846672f7.js"},{"revision":"aad357b52dcdb65942d42b4485e3e0c0","url":"assets/js/da4fe776.1e9f0e33.js"},{"revision":"896af31d5145879f53632d9fe8e39223","url":"assets/js/db6afc29.c89c2863.js"},{"revision":"c25341bd12e3410ae022e82f6c2aeb1e","url":"assets/js/dc030738.e671046f.js"},{"revision":"66b54d4c909f1d6b0a903ef842cf2eb1","url":"assets/js/dc109391.deddbf97.js"},{"revision":"6d9b3c8c7801b53c136dc7b3b87f18dd","url":"assets/js/dd1fbe6a.8699dcbc.js"},{"revision":"b6815052d5f0e7d8c36d823d6f2f885f","url":"assets/js/df2a4a59.44355f5a.js"},{"revision":"e9c83bb3d68f7ae41b5f3b6a45a88421","url":"assets/js/dffb9609.ce57fd20.js"},{"revision":"fc2210db526adc611d45fe76d1bf2a6e","url":"assets/js/e10e131a.ce8d3b9d.js"},{"revision":"b7093f516512f1adf35b829cb76da3c1","url":"assets/js/e17e6af5.ffbd9770.js"},{"revision":"5e0ee8aa07bc8de73cee4040508b189c","url":"assets/js/e1a53158.395abb8b.js"},{"revision":"c7cdf01eb2ba5f3380b3995f1695d1bc","url":"assets/js/e39d40ed.a38aae91.js"},{"revision":"4a2cec780f522b9120dc0909d9a4880d","url":"assets/js/e3b728f4.48e24135.js"},{"revision":"8e26518426479f02def45094da88dca3","url":"assets/js/e3cb94e1.2523b956.js"},{"revision":"f8328ef1c13bcb195a168c7377c5f552","url":"assets/js/e47fd75f.4319c697.js"},{"revision":"aea0dae58edb891d91ca4004c1ae3ae1","url":"assets/js/e48b3322.b9409904.js"},{"revision":"168ce29419069b6b726aef4e05f66037","url":"assets/js/e4e92f42.954072a7.js"},{"revision":"9e5988e84a70fd7917ca3ec8b4a28a32","url":"assets/js/e5f7cd7b.9a4e0530.js"},{"revision":"78bb0a9da729b4134f4f580568cb72f0","url":"assets/js/e6501e5b.d19f2ed0.js"},{"revision":"100c4bec87829e43d9fba0ba1957d627","url":"assets/js/e682932b.0ad59f6e.js"},{"revision":"9c638b098ec69555915bb463b31fef7d","url":"assets/js/e6b53073.354feae4.js"},{"revision":"b2234d45486054eca0d94e51b62326ef","url":"assets/js/e76d69e4.40775ccc.js"},{"revision":"8a6490ad27780f6a3e44c9a301f5d067","url":"assets/js/e8d5b74b.42f9c653.js"},{"revision":"2ff73b26e92e527debfe898886e49a39","url":"assets/js/e8dd6634.8ca94a44.js"},{"revision":"63af53a3819981db0300a5601d555e7f","url":"assets/js/eade58ca.80d5fa56.js"},{"revision":"ba7f8d80a6a1ae9ea14df2903bf3f62c","url":"assets/js/ed38b210.9dc3a785.js"},{"revision":"1e206a9c437f2b57f6719752685260b5","url":"assets/js/eda49e41.bb2e9382.js"},{"revision":"c0e4f18bdfcca9b8bffc372e64a6e7f6","url":"assets/js/ee84ef31.1892edc9.js"},{"revision":"d4e4ddf2ddca03c8174432934b2a30d3","url":"assets/js/ef72e420.be7ccad2.js"},{"revision":"7c5eb386c214ef0dc79866100ff756b4","url":"assets/js/f36074be.52820246.js"},{"revision":"cc5c358c97de3edf5caaf8913edb107e","url":"assets/js/f3937ce2.61c8eeb2.js"},{"revision":"3226af7af20fa546f646f17f34aa3e4b","url":"assets/js/f44068e7.0a1a6724.js"},{"revision":"9d168af0f31ad684cc323dae0dc30e6f","url":"assets/js/f4e5f89b.266558fa.js"},{"revision":"840b5033dd79a745b0c145bb6b29f8ea","url":"assets/js/f58ceb15.2c115926.js"},{"revision":"4d860d4e2c3363d112141f80bdace8e4","url":"assets/js/f6420a7d.047f561d.js"},{"revision":"8225e2febf131eca15eafc34e6446119","url":"assets/js/f7e672b1.c2d7c460.js"},{"revision":"19f5469d30c13f592a07662c91a82709","url":"assets/js/f83b6261.38db57c1.js"},{"revision":"93bdd2f3468ed728ced1623a3c9e37d1","url":"assets/js/fa9e7027.9ef93899.js"},{"revision":"371493940c5e29c43850dbcd2217cef8","url":"assets/js/fb274994.3681a4ba.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"b22bf2c1cd3644c92ae2e7d376ce2488","url":"assets/js/fbcb1a27.a34e224d.js"},{"revision":"2f1f1cbdb384ffaf936e70e111273429","url":"assets/js/fc419e9c.2b1c5781.js"},{"revision":"3484c566eaa1047acf33014220dafd59","url":"assets/js/fcaab584.da2a4988.js"},{"revision":"3839664e564f2f05b789806769157406","url":"assets/js/fe5e75f3.b4c91b92.js"},{"revision":"3c07b0c86af8ac2b61f4d25e4dd4a355","url":"assets/js/main.89e5ac5d.js"},{"revision":"5380bcecfcac52b1a66e8171df918287","url":"assets/js/runtime~main.f342de24.js"},{"revision":"f01a316e64eb3ea5723fb6be86e5a94b","url":"basic/index.html"},{"revision":"d9b9acf14d3b56e193fde8550d785736","url":"Bedrock/bds-core/index.html"},{"revision":"025af3a773e211cb41a8e30991be79f1","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"e2da7351e4759f2d3c1e5aeb119618ea","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"b3d28add20e9b7f494eb24c12a79849e","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"d4bec3ab2c4b57efb2d937b1d68c3159","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"e2bb20843fc04ba233c69336a320a638","url":"Bedrock/bds-core/process/index.html"},{"revision":"056a494c6c9021fd86447b59898adc22","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"e7fbbf68de3f33658848e2cfe4da5887","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"c0cb33d3088fde857e36f757855a57ef","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"3c19efb1dc5aad9647602aa11f025d46","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"a590a3b8118ec0b637e84a5cf392b6aa","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"26331a5ab77187df8b7b14585adebc51","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"91b45f421181b62c7af0fca55f68b07b","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"8aa5c53427880540b418b70707b8e4f6","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"57efa371933a8234f62f2a6b81ff6bfc","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"e4859f7c16f77fcd29d313d6332492bb","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"4cbe4d50d48362ad13858f4fc54b7a91","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"e2bcf3e694060f2c8bff2616ebe68a0a","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"c0ca6445ee0f7e5d8212a2478b2c604d","url":"Bedrock/bds-core/start/index.html"},{"revision":"82dc342bcb43b9610f01b853ae3e6937","url":"Bedrock/intro/index.html"},{"revision":"e92939db9aa607c1fae9de522bdc7475","url":"Bedrock/nukkit-core/index.html"},{"revision":"4b26819918ca141eee8aa603aa14cc23","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"e805fc2adc07bf679833d058ac458296","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"2f8166138d39b306d5b8d3599b6e74a2","url":"Bedrock/pnx-core/index.html"},{"revision":"23fd3604fc6ac822dc729baaa448d807","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"063ce14e1f5d8de4ddbb0ac4a7ca0965","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"b5bc932b159040f1cd67c700bac1e96a","url":"Bedrock/super-basic/index.html"},{"revision":"e9f91239f988d2ada1ccc1b64d64473a","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"cbb3a3d4904525116ceb82398f5c2c13","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"eec33467ba101bc2be3d3b1099a89dc6","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"6e8cff38ad87a7aeaab4ffcba888d40b","url":"Bedrock/super-basic/version/index.html"},{"revision":"501c5d673ca4533cc90d09ec14cbecf1","url":"contribution/index.html"},{"revision":"7bff0191ab14a127dbdd6dad293e15ff","url":"contribution/todos/index.html"},{"revision":"b68a5e5a3b9d972f7d1185b3ce40fa8e","url":"contribution/writing-specification/blank/index.html"},{"revision":"0007a0f608212b6052d35fb372784065","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"076142de6c3d53af0dbf45c3f77399fb","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"78876fa0d47510b79ac2e21f2ece781b","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"d7b28aef3acf8e5f92df0e70fe60b36e","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"f9dde5c99498bde95c50ab98759051c0","url":"contribution/writing-specification/reference/index.html"},{"revision":"04e18ebcfaf6751b49f979f96540840e","url":"contribution/writing-specification/text/index.html"},{"revision":"bda0d05b422fc3bef4bc5b2553db4a92","url":"contribution/writing-specification/title/index.html"},{"revision":"77779b73ead22e0c500c96cd8920aa56","url":"contribution/writing/index.html"},{"revision":"eb01a019a7d4577fc94d4d8818c59a7a","url":"database/backup/index.html"},{"revision":"1aea93421343e4a7ca77cc56cc7d1d78","url":"database/configure/index.html"},{"revision":"4fff75cda72c1716fdfee3675e841a45","url":"database/index.html"},{"revision":"27cb44f7f3a9ae00ef28518f126657f1","url":"database/install/index.html"},{"revision":"9ec424866a5fefc2a25a799b2fc87640","url":"database/manage/index.html"},{"revision":"9ae7fc6f8a9b48a755ccc64c3a2feb9a","url":"database/uninstall/index.html"},{"revision":"cae5145c1f59f8a7119c62bf9dfd200c","url":"deploy/index.html"},{"revision":"384922366c4e2e7556424838a1c7b435","url":"index.html"},{"revision":"2d4a4001955104bf85b95bd4e6487821","url":"intro/index.html"},{"revision":"09f76e2c0c5f08a9b43be8633a75c282","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"8e894e1a26666d4b44a585ce5dcd76a5","url":"Java/advance/bot/index.html"},{"revision":"a822d9c35189c0520ae2580f1bbd9e42","url":"Java/advance/chinese-username/index.html"},{"revision":"40d8882841917cad77cd1dd5cca24753","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"134a9b23847c2a6555017675ba30ef15","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"9f76f314cefb4dd6dac198fbea594cfd","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"55f4cc448d69ed2ecc4a233ef6b49f2f","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"4c33f8649e0e603bc18d74ef4eee3772","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"f3935fb99d5d71384aee262b085e04ea","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"637cd6657b58c5517e169e32109a8a29","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"889e11519a633cb9b0bfc8e39fdc9818","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"3ce80e0197c3024cb0241671d8429849","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"8ffffa3a5e79ab30f7b614a0592ffaf7","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"6763cdbb76da77c033e766037b5510ce","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"67690da29dae0e0516dd4bb797ff2fe8","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"e80bcd66abcd06561755420d00b21a34","url":"Java/advance/database/index.html"},{"revision":"5b634005df3956840e3ac29c53a317d3","url":"Java/advance/folia/index.html"},{"revision":"4560f9670592d3b096e2ee3ae1324a70","url":"Java/advance/format-code/index.html"},{"revision":"6ceb41932414a45fd6d24e4c3eb31ec1","url":"Java/advance/index.html"},{"revision":"05b9a42255f8377f535e0cd4b9a27f21","url":"Java/advance/kether/basic/index.html"},{"revision":"2d6cd3a852ee5087f5e667fdde5907f5","url":"Java/advance/kether/idk/index.html"},{"revision":"e03671cdb0e1ca387a7b6baf5dcf4563","url":"Java/advance/kether/if/index.html"},{"revision":"83e2fc6f9c777986aa07dabeae477a6d","url":"Java/Advance/kether/index.html"},{"revision":"bc08abf2b22c822019d71b3142122797","url":"Java/advance/kether/math/index.html"},{"revision":"1c6b3aa7f7491faf4bb67ebbc91b1f09","url":"Java/advance/kether/preparation/index.html"},{"revision":"7d75edb22424b72755853f3b9e1c65fb","url":"Java/advance/kether/variable/index.html"},{"revision":"ab65088c10ee1ba084bc3cbf9c018b94","url":"Java/advance/Linux/index.html"},{"revision":"d4803f119929e5f30b7803322a8fdd6f","url":"Java/advance/loginchoices/index.html"},{"revision":"c283a354d63aeedc064fa29f47ec7050","url":"Java/advance/MiniMessage/index.html"},{"revision":"38d72aea1ff30fc8ffbca790214e8e93","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"992e9e331c92c10f769904feaada11e0","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"6beb6467003a965cc6fb2694e0f916a7","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"7f5048ced511df37d15e62c9285c600d","url":"Java/advance/YAML/extention/index.html"},{"revision":"68112fa8746f2f3af344c8afc056d793","url":"Java/advance/YAML/foundation/index.html"},{"revision":"0464625acdc974d11f459b2d5f9b07d0","url":"Java/anticheat/index.html"},{"revision":"741767e3fe3ec7720c2f6f2846187be8","url":"Java/AntiGrief/index.html"},{"revision":"4c9af15ab8a84982faf1b95b74179b94","url":"Java/basic/index.html"},{"revision":"51c4517eb6c577ff61e5e90c14963abc","url":"Java/build/index.html"},{"revision":"e4eebd0863c4a43d6ea1aba8c1f23d82","url":"Java/bungeecord/index.html"},{"revision":"6fdf2460d18d0304971160e00cbc0445","url":"Java/category/geyser/index.html"},{"revision":"35aeb244299fe8efe6bfe28c506ed88f","url":"Java/category/placeholderapi/index.html"},{"revision":"92269e1b30688a0ced2276f3337ecce7","url":"Java/category/入门/index.html"},{"revision":"2df61fb84e9943c392f4fa4cf83bc703","url":"Java/category/进阶/index.html"},{"revision":"fdc767f693430433b0d3f59c8c887c27","url":"Java/chat/index.html"},{"revision":"1ffbbbb20a247b2c63457e35f0230eb7","url":"Java/command/index.html"},{"revision":"62c650323f6b0c03f097f2dd50ccca3a","url":"Java/cross-server/index.html"},{"revision":"a30137ca5e8699a3f8ffa4d495ce566b","url":"Java/cross-server/plugin/index.html"},{"revision":"6c508d51f87df5ff187312ff961e9e79","url":"Java/Essentials/index.html"},{"revision":"5509b5a0fed387b4e3b13f8b471bcb54","url":"Java/Front-Plugin/index.html"},{"revision":"aa2b7f87137c9376e45938c4d8374441","url":"Java/game/index.html"},{"revision":"174df916cdf09ce39c42516aa69cf2ef","url":"Java/Geyser/Upgrade/index.html"},{"revision":"923c41d392c530b3e250544c4b2a166c","url":"Java/intro/index.html"},{"revision":"b9de94c54330b22b6387b2770b2a3c2f","url":"Java/maintenance/Java/index.html"},{"revision":"aa6f98f3e48f8eb4f3af64ebc625afe8","url":"Java/ManageTool/index.html"},{"revision":"98e050b9c49e4667c8d5d3bcbdbf2401","url":"Java/optimize/index.html"},{"revision":"f19c448afdd0d25f3e3ecd6c95390598","url":"Java/optimize/jvm/common/index.html"},{"revision":"dfd23a9fa6ac47dc4cab30b43f105d93","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"eb4befe675187a84c561cf2b680e4562","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"052650e8cea26a99902bebefb13ce4e9","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"5bc1808e6a2740b9b46e89030d6ea1c8","url":"Java/optimize/jvm/index.html"},{"revision":"5fb889b012504d3d2fca7555de1735a4","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"7119fa95338c9f8475d0f6a0910a783c","url":"Java/optimize/jvm/zing/index.html"},{"revision":"dee4f78c0d4af05f65d4039fb4e7d94d","url":"Java/OtherPlugin/index.html"},{"revision":"62f2ad49c4d88f80c26156182ff4cf59","url":"Java/permission/index.html"},{"revision":"101467a77893dd350776dcfd64d99421","url":"Java/plugin/index.html"},{"revision":"db77e58a8bdf66cdec38765ceb7eaa90","url":"Java/PluginMagagement/index.html"},{"revision":"4189ec64c1f0b83a0e80e93fba9e1ecb","url":"Java/plugins/other/Skript/index.html"},{"revision":"89eded21ff6c19432ae9cd14d50ec285","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"5758a5ea1aebdf56e3516b3131c19a5b","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"a289565c24446a351e354675a48885b3","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"247c1f42f802429501c93d4b087e2bd7","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"7af23706afa0726db927822db9f575df","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"7caaa63fc0e53916a7d11f90b57bc4b6","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"6d67084987cb4b25e5a4ade8760681e3","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"4afe94a3326496ae098b0baee5c6ad0a","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"7e6616a772293cf0899eb6be0cc5960c","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"804619fb2fc010432161920d2e73a9c0","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"bdb4be10717f30e7816ae61bf7ad77b7","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"1c0eb06d2395cb0ede58f36fa336ab7f","url":"Java/preparation/index.html"},{"revision":"b253bc09ad1af59f7cc841e08fa8c952","url":"Java/preparation/text-editor/index.html"},{"revision":"559263d677bc18b9735bae59eafb712a","url":"Java/preparation/websites/index.html"},{"revision":"47346cf7dae1f0815189567ff8dd4ac5","url":"Java/process/index.html"},{"revision":"76a0c921201dad43b32bd0048b21fca4","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"c6ae16aef8c239dd73cfc023846c6429","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"9479644de544ad8bf7db9bf4e450c99c","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"c302f1396b20dd1dce3cb35df68f302e","url":"Java/process/maintenance/backup/index.html"},{"revision":"45d2fd415a56017380d0a18ac29cf452","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"c62f6c398173beac6a019963d208b565","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"01a5c23bac7cda38f9adbca4bec9fb48","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"1c216516a0bc3592e6c48e94a0ec55ab","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"a62b8c1fcc35ea5b8f177701fa210e97","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"43d324364961ec03e7efee8cd7080542","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"948a3104dbec4716bcbff4f01ca67d4d","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"2cf6e6380eb8faeb76c91f0954bc6ac6","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"8d9a2e182ec1d42fd6be9ff36d38c86c","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"adf9834a6212be40d4f6a8bb39acef36","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"c4176ba370ae0c6f9098af06c3736f08","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"2c831bcda0eb6cd67e973e20ef372c02","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"98f77e09592babd128baab471536d795","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"ee513bbe2985840448a79c6513d29204","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"6404c9b4bca75807354d5e53ed4797bd","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"44c5dcf53433a0c392ba3b846629c038","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"e2ccd3ec5ed89e456fd593d7e035ff7e","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"53655699e70e9a5a3eeeb5fc9c4e00f9","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"6272863318f00f2508b39ba002f44c40","url":"Java/process/mobile-player/index.html"},{"revision":"862185597945df0687a6ee188e434d23","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"b1dbf9e1a66d4bedab2abbe78be91f90","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"71ea487b12076e7ee94e51092eb12491","url":"Java/process/plugin/config/index.html"},{"revision":"b90117e8bd7e77d5c1b5df7f6823a32c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"c6fe6ec41be8e78656dcf650e471e49f","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"d468951b72e5194ac379ea15bba3149c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"2fcd848588ededeb2260f0c0276df197","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"3f4716600a8ebb87a43304575b0fe941","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"25841f2523d70333835401b6bdb21e3a","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"5c148d4d1c5b5c4c76df022b1c397ac0","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"9b0efac5818c06970a0825afce47cbad","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"d08db865eac366022423d7697e8bfba2","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"1aae385db81a77d123f307015e5ee6cf","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"f58021875ae26461b3c122fdf794cae1","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"96ed2da072f9d291be8fd127ac2757f6","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"6e872b9f67259e5344c691faf3072d03","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"74d6a90dd34959f4e98e445efc9bc507","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"35c49105020ca03f0bf994802f504c85","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"8b28ad1cfa8847c319c2a3ce8e016562","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"bef38ecb8465488cbcefc7dca7837918","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"e52471db34f8b67cc13e06599b19ed32","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"a00027c9c98de8fcd50effc5abc165b6","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"d5ab82065d2ed79be17176966aa92b45","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"8042b528b40e04f9a98473cb617bf78d","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"dc63d3e5f960d108c2cf85768590abdc","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"f62d55233e70a5575d71deb471c4a52a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"a0f2cfdeb364ad8137dee15a58f76701","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"300680f4e4b57c1e5e57e57c415a9270","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"3177da2e3a5305f4e571877699665176","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"5c73ca1a7b6114f26c016745aa9b2b62","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"76ed45d709bd453ae05abb8819f396de","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"0e9e369eb9197b2a25320f43d9edc70c","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"58d2ce738de0659792ef9adaf260d645","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"4d36d398eca716a0d4fac4f7288c0627","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"a8de0611c62657b9adbac5f139b07682","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"7e7a6331705e5fb31298332a67844516","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"13e8f3234ddd6fde6f6cd756b5c4e033","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"e4543063794cbeef9c3de973b2bbcac9","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"39a14967a5bcc25e2c121942cf271255","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"35d521810974093d72a1921eb4485934","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"2a1e24b4607c70de096813a324d7a122","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"80bbf5b2f7dfe7077f363a85bf342227","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"40a021ba24b26f735de8a46f5cb020e4","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"37981bf719eacf4554771739b4b0f32e","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"c17c81ce074abd8dcba471463881bbcb","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"7e9d388ef940c7d85995ed51f1d57b01","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"d1d1866d032f46322b075f503f54e3fa","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"59abda723750727aa9d583d2acc97e3f","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"a6843927889eef70b4882d5e4588e6cd","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"336d26474b0a2f66ce002a23dc9758ae","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"3054ec243a3823d58f5253926d18d575","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"b97165435bf4fb5b3cfaae252619315f","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"b607a106ef17962a92d7f13624c941ec","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"b63a11d4ba9a3781cb39ee83f3b34ae8","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"1b800c522edca90013da5f2f6a6e3ab3","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"045ed77a4102237ef6eec05a382cdfab","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"a9f7de4b799fd4f6411b358ba6970db3","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"b04abe6a3f70643dcd63943650bdd2aa","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"16990429b88293344691dce49b80cb4f","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"17ca5f6d7e0e0f11738711ab8bfde372","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"1fe67b2b837f20b68ad76b79833be7d3","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"b1c02085aac2c82acd53d44fddb09c7f","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"4c8b287fe0a142f5db4a77bb05175f85","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"d5286fd55ef87f94827fefd7e24f3bb4","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"3d9f928e7a748fd8f8e666c9b4f19d9f","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"a98305422691a811529955041147a691","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"124fbf2990017d287e4d7d4383270efc","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"d19d7302f3097206ece8431cd33432bb","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"7b423db3e7e80c1134f93780d58d3924","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"cfe5f3156342ec8725480ef61a558ca8","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"2eb1db6a2bd754eb00035995d8a863cf","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"dc4fd4b538eb274f2c7193c90bbe7efb","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"34cb223e3e7ad615bf2312ae3c171541","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"da86aa934299b53ea6139272a7b7f7b3","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"903260e23f9024aceceac3495794497f","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"4864cb6b0c15a9b22878f7849399fff3","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"2a3cc44d061f09ac518370c3a7d959a1","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"e569e18def7ca41902850160ead7dfb5","url":"Java/ResourcePackManagement/index.html"},{"revision":"12944d7c3a2af90624aa9f0256757004","url":"Java/services/index.html"},{"revision":"6db1fdfbadb6cbab61efba25542a26da","url":"Java/Slimefun/index.html"},{"revision":"11a5cb6772c11b740e538a0ab6baf161","url":"Java/start/ask-for-help/index.html"},{"revision":"d2c5ff7d18ecf8452026e14e1dc720c7","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"841ba2d47dd3fb09e0dae2a4546c3e40","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"32d4138c0f6fe296fcb8fbc6fada4591","url":"Java/start/basic/server-management-command/index.html"},{"revision":"5281ff26d302e65a7dea926b7a34040f","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"9c6994bc238701882f0847ac54e32d81","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"517697c28202c392f6f2644c42bc9061","url":"Java/start/basic/what-is-log/index.html"},{"revision":"e4db5043f520f71988192a5cfff81cb5","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"5bc9bfa507e012796844ca2b3f0a05a0","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"0101225ef2fea99ed2dd7403acd0a286","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"d389b878afd98178d9135544d937f808","url":"Java/start/basic/what-is-server/index.html"},{"revision":"cf5e6b69a5e75a3962994be693ffd42a","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"69e5ada8dbf69c41a10b9a7750de9571","url":"Java/start/basic/what-is-world/index.html"},{"revision":"0439fad1ab609e2f03583e2ad5955f28","url":"Java/start/config-server/index.html"},{"revision":"94c2985f54eb97eb5e246270e7d6420a","url":"Java/start/connect-to-server/index.html"},{"revision":"6b025922edfcd29467ac0467de2f65e9","url":"Java/start/deploy/index.html"},{"revision":"985c5aa9620003089c99ebf336ad69c3","url":"Java/start/index.html"},{"revision":"a1a6e9bdeb7248bb73fefb495cdd8de3","url":"Java/start/install-server/index.html"},{"revision":"35e3daa1bc6c7db5245f5a8983226c82","url":"Java/start/launch-server/index.html"},{"revision":"e59cfa057c0ea1369b903e71d4254914","url":"Java/start/server-core-choose/index.html"},{"revision":"ed109065440c4b8fa1400bb6c1da9bad","url":"Java/Sundry/YAML/index.html"},{"revision":"a07f9f34039e717ef111c7b9f7be69e5","url":"Java/velocity/index.html"},{"revision":"f59c5518a9b97ecadb450b720dee6d62","url":"love/index.html"},{"revision":"fffc9ff306529e7785434670f6b99231","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"388ea023ad316a9825499102bce0b50a","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"07d3c2d2c7c92651e9da077e8bb0a561","url":"preparation/dumb-script-using/index.html"},{"revision":"4023882e19cbf62f38aa46ee7cbd86d9","url":"preparation/index.html"},{"revision":"0cce1d187900f19a8ae6a5796415abc9","url":"preparation/text-editor/index.html"},{"revision":"08bf2ee482b52757018733b9cdb1dfd0","url":"process/create-art-assets/index.html"},{"revision":"2e6b6c2d8b2f209e8848228557d5fa57","url":"process/dashboard/index.html"},{"revision":"bcd29e9433f99202e2439d3a45533d3a","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"523d399929a9d1c8de18e0870a00884f","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"82e34a5a399e631f2fb6e9a21c4e9f75","url":"process/deploy/intranet-penetration/index.html"},{"revision":"828bf556a223477784305f0c0ed7313b","url":"process/deploy/optional-mode/index.html"},{"revision":"e0015db4e68c9d06e51b0b7b75778d06","url":"process/deploy/purchase-server/index.html"},{"revision":"6a19185de852b8dea9da05a64cc134f1","url":"process/index.html"},{"revision":"d41d5fc0c1d24fa3befeb2a5ebe1b0d5","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"e2a13f3fe5b963bd6b229db5ce53bca6","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"5626a0023531b20e7cd5a2d307553b43","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"a246f0f1a071ac8d95f529fd140fcb38","url":"reading-guide/index.html"},{"revision":"a309c384e2e8b888a168b35013a2a2ad","url":"search/index.html"},{"revision":"989a714e43d9a54570112475d2583aa5","url":"services/index.html"},{"revision":"9fbe666c167eeae22c27fbaf6431aee2","url":"start/ask-for-help/index.html"},{"revision":"fec966db99add4ead0b3fa76b9f44a08","url":"start/basic/what-is-caton/index.html"},{"revision":"ebc76bf90ee4c780a11a126fd40687ef","url":"start/basic/what-is-log/index.html"},{"revision":"efbd07a47cf1f91ea5cb5d37749bf466","url":"start/basic/what-is-messy-code/index.html"},{"revision":"97707dbf6f69189e576cdf465a8412b3","url":"start/basic/what-is-permission/index.html"},{"revision":"0c6f64705980a154cea240e34b19576e","url":"start/basic/what-is-plugin/index.html"},{"revision":"4d0e16f4d3dbb506778f236b8a4d53b2","url":"start/basic/what-is-server/index.html"},{"revision":"d6c26595d20deb4eeb4065c55b9a4e98","url":"start/basic/what-is-startup-script/index.html"},{"revision":"b7b3ff6503ded1492d9bd84c9fc424fa","url":"start/index.html"},{"revision":"f0259fd452516fabcfbe0e36f017d4f5","url":"Sundry/Advance/Linux/index.html"},{"revision":"3432c8367e4fcb031acaf4848c58ea82","url":"Sundry/Advance/management/index.html"},{"revision":"a69a294cd533f150eac70db269320ff2","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"c8bdecbf3ace562b7828f9456ef54ed3","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"bd8b32cf261876a5785cd507abfc0336","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"e999beab37e84981e802a544b24a89b1","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"d197b8e4e410881af058231c56f9229d","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"a4677b8a66d6068d0be24d6c0f94bc15","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"71fd0cca4950152a7d8398642b5152e5","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"857f9ae52331227e83becd9f3a5e342e","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"bf9ccd82c7e1d99d765a30121ae29593","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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
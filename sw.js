/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/Deferred.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/timeout.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/waitUntil.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/copyResponse.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messages.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheController.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheRoute.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_types.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addPlugins.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addRoute.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_types.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/matchPrecache.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precache.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precacheAndRoute.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/RegExpRoute.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Route.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Router.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/registerRoute.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/constants.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.1.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/Strategy.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/StrategyHandler.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.1.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.1.0/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.mjs ***!
  \***********************************************************************************************/
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.js");


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
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.5.1_@docusaurus+plugin-content-docs@3.5.1_react-dom@18.3.1_react@18._ccyxft6ap3gs6fwcrpgujeod2u/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \***************************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@7.1.0/node_modules/workbox-precaching/index.mjs");
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
    const precacheManifest = [{"revision":"aaa0f00bdf5c1fa2b05ce88cd7ecd0ec","url":"404.html"},{"revision":"391c753c45e3966b474b100d076d3f9e","url":"advance/bot/framework/index.html"},{"revision":"21bd916c47a6735adacc46ea05dab0ab","url":"advance/bot/general/index.html"},{"revision":"65157e9a2de6add73f307e51f253bcc2","url":"advance/bot/index.html"},{"revision":"5ca4a88f67118f5910a9c8d47901c71b","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"a1f483f7355f955ecfd6f0bd9d034c8d","url":"advance/index.html"},{"revision":"0ee66382e2edce96e7b125e3a96335c4","url":"advance/Linux/backup/index.html"},{"revision":"e9863da4cb95239b15d016831e7419e3","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"e6d51a1400563c2ecff600007c5d6ed4","url":"advance/Linux/frp/index.html"},{"revision":"db3e5db0ec20408a597e992b3184186d","url":"advance/Linux/keep-running/index.html"},{"revision":"18bea9db7cedc81c88bde175e98761b4","url":"advance/Linux/start/index.html"},{"revision":"d42ac44f28d886d0f7329474515cc17a","url":"advance/open-website/index.html"},{"revision":"0d2ca494593d680b7048baf110c28ce1","url":"assets/css/styles.415b1d92.css"},{"revision":"5e4a2ee757b3cff24de68172140e66bd","url":"assets/js/005c270b.999b8800.js"},{"revision":"82499a920f4b9a5942cb0b3897eb8459","url":"assets/js/013c8c14.85de0e0b.js"},{"revision":"80a001c50eb0a4f85bc512c35dfb7638","url":"assets/js/026f291b.2899f2e0.js"},{"revision":"25a09841b5f07233fa6d281fb6b31a87","url":"assets/js/0272dc73.6e9e8879.js"},{"revision":"e95c67b33544f445b9afec7a6a5fa1c9","url":"assets/js/035cfa77.820f9e34.js"},{"revision":"d60c88da728ca2cf1fc2c119cc3dda1c","url":"assets/js/03b205ee.689e79e4.js"},{"revision":"fd07044ca67e928a4e6f61270604e051","url":"assets/js/043fa146.39210d0e.js"},{"revision":"ff57b5e046289aab5ddefd618be7a1b3","url":"assets/js/044f41a1.731924e3.js"},{"revision":"d081d1d180d3960047997c4a7ca8efc0","url":"assets/js/0492d44d.63827a33.js"},{"revision":"a371c9eeadceb923d0a0a7a7e3bcb6f7","url":"assets/js/04f5c692.c5878971.js"},{"revision":"4548b764af22915b716a4dd3cccb313f","url":"assets/js/052366f7.9c40313a.js"},{"revision":"05865c2d8d00a411349c0517caa13452","url":"assets/js/05278f71.4e97b885.js"},{"revision":"df2cb4c8d7b65c67d00f2d51efedf210","url":"assets/js/053e2f33.cee29414.js"},{"revision":"e6cf698f096825888a804f971916d33c","url":"assets/js/06b0ed59.3fb8cf74.js"},{"revision":"9cbad18811f6495a953e014f307bdd3f","url":"assets/js/083acdf9.c73fec6e.js"},{"revision":"683e24c897c08952c1c5e3f3fb7d39fd","url":"assets/js/083ebe2e.4506d10a.js"},{"revision":"519823ec061bcd1952b27b8595e9eff5","url":"assets/js/08e7f72a.52438045.js"},{"revision":"da2d6a04132130a3154d009ed50e5a7c","url":"assets/js/09156d2e.9e0420fa.js"},{"revision":"e9b0e880f2e5a72e87b680258fd4df67","url":"assets/js/094a7dd6.c89d18c8.js"},{"revision":"5b373eabf6a3e03e96557456fd5af248","url":"assets/js/09714880.33e2271c.js"},{"revision":"174a9df27e987a3c9fa1b4e7f95fe35a","url":"assets/js/0a17cf6d.f8663516.js"},{"revision":"78e613a91333d502056b36a3677382a4","url":"assets/js/0ac0b3b7.68f5fcc0.js"},{"revision":"c7baa77428aa0081fbc0d8030285fed2","url":"assets/js/0bcb5d9e.30ef57f3.js"},{"revision":"25c3dc77bc6e53122d9b9f5f5f06ecb2","url":"assets/js/0c7f12b6.f4f109b7.js"},{"revision":"9f4329dbb5ebfa4dfc76c456e44fd70d","url":"assets/js/0e384e19.8870d590.js"},{"revision":"04e92933daf7303d8e21cdd057e6c909","url":"assets/js/0ec7bf36.330f8b9a.js"},{"revision":"0b9b5c913726d2e554ad342e7314253e","url":"assets/js/0efa0f03.e403b3fa.js"},{"revision":"b5400e579cb34b36bf6bef1bd7121dac","url":"assets/js/0fc807d9.f94a360b.js"},{"revision":"352260df0915ac78db7e0cd57e51cbe5","url":"assets/js/100.bd80bd11.js"},{"revision":"800f99fc694ab69c17d2e780c416fbdc","url":"assets/js/109.5c4c28a9.js"},{"revision":"2083a560c18c1edc32068e6d85cb0add","url":"assets/js/1151.e5387bc0.js"},{"revision":"90962499f812274de5ed9629affc4e65","url":"assets/js/11f90be3.7242b586.js"},{"revision":"58fbe1074fac1d3484a94bf796b48e99","url":"assets/js/1210f0b1.7e778667.js"},{"revision":"fda2dd5afcac6ce169b334b66e86fb4e","url":"assets/js/144520df.783d67ac.js"},{"revision":"8467373c16c5c83a9529afd86a4bec90","url":"assets/js/14eb3368.68d60c60.js"},{"revision":"be4960fbfde6ec8afdc28eaf93b8c750","url":"assets/js/15daf372.76a0d02c.js"},{"revision":"e961b73259f7f995b8a5647c33dedf2a","url":"assets/js/15e4e3ed.6ca37f43.js"},{"revision":"186da31874b4333f9532af9b03379fe0","url":"assets/js/17896441.4505b3ab.js"},{"revision":"6c62e123fdd151f85a3a48ef725f903a","url":"assets/js/180bc163.003bd4c1.js"},{"revision":"ef0ca0edfc5e85ac6615569547ca00fb","url":"assets/js/1856fe2a.a439f5cf.js"},{"revision":"7561db8c5a7cc3a01dfd0ecc20f1c3cc","url":"assets/js/185d6330.2a4410a7.js"},{"revision":"2cc8313d1a8beb4195114f7fbf0ab019","url":"assets/js/18b67442.1504d44b.js"},{"revision":"dd1d1a5fe0de5008dbac57a51a2becb7","url":"assets/js/18bca995.bd8ce5e9.js"},{"revision":"4a042b6c0c524b0737ecc245ad65b4d1","url":"assets/js/193a055b.57ca08d6.js"},{"revision":"5717c89a9886c0d430a772e5227e206c","url":"assets/js/198ea2e3.cef8c204.js"},{"revision":"de880709e89361607d0e95cce50018e6","url":"assets/js/19cf8050.1cc62a5c.js"},{"revision":"cb1545eadf6a1a167dfe354fa02554c6","url":"assets/js/1a4e3797.3a34a5cc.js"},{"revision":"55d725093eb31b2b45d2782e4fe92bdb","url":"assets/js/1c42be93.f333cc38.js"},{"revision":"fa3d7e1cc235476903dd12b907c781f7","url":"assets/js/1c6846f9.9fa1d45a.js"},{"revision":"5e21e435fb36bed2ef3cacb163939fc5","url":"assets/js/1cf75b4f.5435d906.js"},{"revision":"ee480aba1c890bf863898a7945544251","url":"assets/js/1d1b9adf.d8254918.js"},{"revision":"6c97b6c68083436b3781ea80bb1b1447","url":"assets/js/1d42ad15.e7543588.js"},{"revision":"05b829d1458332eec9ec5eaba7a1b9c0","url":"assets/js/1dfd2628.8423c35e.js"},{"revision":"9661067e501ff1cb9002784e18ab1aa3","url":"assets/js/1e0a547c.69ba4654.js"},{"revision":"9171ab950c2cd7dd3c319b15b97da8e3","url":"assets/js/1e47cbc1.b50db881.js"},{"revision":"b7c596a6f3e9775cc6048859de8ab1db","url":"assets/js/1edb7625.daada77f.js"},{"revision":"ee871e34e646a76096c9ed31f6818001","url":"assets/js/1ee6f0d4.e4b48239.js"},{"revision":"e03314e599eb611bb2e86960f73fc0d4","url":"assets/js/1efacac9.78b8dbd0.js"},{"revision":"b7dbd618f5ea8662c6d58be89461e0c9","url":"assets/js/1f81f646.40838488.js"},{"revision":"46915419599e0a8a30f494b99c9f9a5b","url":"assets/js/20215aa7.6ed36aec.js"},{"revision":"5bf3cba2921b217e35a32cf91f6b1e28","url":"assets/js/20547864.fc1e661c.js"},{"revision":"ab2ca0c4724607cf07fb0b4b6e28b0cd","url":"assets/js/20d69604.00fd7b83.js"},{"revision":"6d5d095adc368a60a220187279a8565f","url":"assets/js/21c534b6.f7cc43ce.js"},{"revision":"e220778e50dbddad30b6290fc22da30e","url":"assets/js/244418a2.d2eff9a5.js"},{"revision":"e45773f1e866caa8ef4a771bf5885c37","url":"assets/js/24a68a77.58db195d.js"},{"revision":"25ca7e827856bb55e707c2228a45d209","url":"assets/js/24d8f7d7.657f0c41.js"},{"revision":"5b4cb38f5a55f874b5cc5fa101747c07","url":"assets/js/254a43c9.f5e3712f.js"},{"revision":"5cf9353cca04de5def0eba8540f881cd","url":"assets/js/257.8e2671b5.js"},{"revision":"f79bcca040971842750948bbe43c8b4a","url":"assets/js/257.bbb3bd30.js"},{"revision":"ae4fb99a4eea26cdc7f2a1b486d9fb1b","url":"assets/js/2867c0df.c82700bd.js"},{"revision":"061c6840b1c16142e13df84a38390a8e","url":"assets/js/2869.a01bdeba.js"},{"revision":"0b94fd637427dbd45f7cff1b85b5fcc9","url":"assets/js/2a71d676.dd118661.js"},{"revision":"c93f606bf9a25161490f3c6bfe5a56be","url":"assets/js/2b4e0304.d9a235c6.js"},{"revision":"b746e2e79ed59051ff48189ac58c2ccc","url":"assets/js/2b9de2c0.d37ec7e8.js"},{"revision":"7611d8f5429c815b1ba7d11cff25f0ed","url":"assets/js/2d386ab7.a77ee26b.js"},{"revision":"fffb590c958b6030dd9bd3bd90d5c4c7","url":"assets/js/2e938706.be264a52.js"},{"revision":"2d11354fec762c02ccb57e4b5d7a19df","url":"assets/js/2f39a0af.6cc7236b.js"},{"revision":"ded0ae21ebe5e760108dc28c94d2e336","url":"assets/js/2f8ede37.30f05923.js"},{"revision":"d8d277dace3fd0832954b9b895465aeb","url":"assets/js/3032.d214e775.js"},{"revision":"6d2eeac6c6b46a1207afa42933367644","url":"assets/js/3100.3ed1f355.js"},{"revision":"4af5dc47c17d74315f4fb3e529f08cb4","url":"assets/js/312f6c84.4769681f.js"},{"revision":"fa93d75e3f750ed9f0de425e8f9d8d04","url":"assets/js/31735ebe.bee73cc6.js"},{"revision":"40d4ec969a3c8eb398239aa99c797047","url":"assets/js/33261842.eff5d190.js"},{"revision":"67cee51a8adc4e1cf4389d1529ee3484","url":"assets/js/3383.66f13c60.js"},{"revision":"5826ba80bd89755aad387d2e64c0d80c","url":"assets/js/341.8bff3b0a.js"},{"revision":"b30e09ea821e1737580644159bba09fb","url":"assets/js/343bb2fa.f57d1848.js"},{"revision":"289583e147510be47774d8dd89c9f5ae","url":"assets/js/3488027e.c13b7e81.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"c51856cb8a8519af195c1aa59e000d7a","url":"assets/js/3562.979c77e5.js"},{"revision":"4bd081ed51f4687b1a364a9b3bbc35f9","url":"assets/js/359195cb.7dfb10cf.js"},{"revision":"d8a59115c6670792d7c12619f5e6ae50","url":"assets/js/35d30f29.c42737e2.js"},{"revision":"09beac31f1c2479ab98a509c79e1deed","url":"assets/js/3650.51be23b0.js"},{"revision":"d14aebdbe566dfbe1bc715955b2cd4aa","url":"assets/js/36c75202.1814c539.js"},{"revision":"ba9c473f1b848cfa3048681d2c0dfba5","url":"assets/js/3749f972.53666f41.js"},{"revision":"326961bf67351e12693845e203930f1d","url":"assets/js/386.ce3fb0f4.js"},{"revision":"76d515ef9595e287b3a30bdf6c2bee20","url":"assets/js/386.d0f4816e.js"},{"revision":"a3f465a2825465e5f67d32dab7ddee7e","url":"assets/js/3866.7a202763.js"},{"revision":"db340fff20f590339093c0fd8bb78838","url":"assets/js/38b0474b.3c9e1069.js"},{"revision":"23a4e0688e1ffb4b28ae500d824607d3","url":"assets/js/38b71911.e0b14c09.js"},{"revision":"7f108df8a26a039a27277ef0a978342a","url":"assets/js/399101db.42647c3f.js"},{"revision":"d1265eb7591c0f8aaa166bc239fe52d7","url":"assets/js/3a42456f.84d9517b.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"7c70370a3b6e8b9f0175ae6ba0b19032","url":"assets/js/3b8970d0.19442276.js"},{"revision":"447adf9cd3f6ce6eec9d85d779b3d72a","url":"assets/js/3bb1ea30.57eb209e.js"},{"revision":"f6a50edbadae131065c081f9157098e1","url":"assets/js/3bd1ba02.b1c1a27a.js"},{"revision":"69798ba086f397ee4c87a70c4fc678e7","url":"assets/js/3c5393f3.255bf792.js"},{"revision":"dc6d03473c656c7e6d0c64665a8d3566","url":"assets/js/3cd38fda.d01e6e5c.js"},{"revision":"5b59c2e95d565bba88e4994e19998480","url":"assets/js/3cd65ff0.d78384bf.js"},{"revision":"134ec80988f4b18cc3bedc0b54b9ec95","url":"assets/js/3d7f94ff.bb34c6f8.js"},{"revision":"ef82d3821d73025d47cf308f91f2877f","url":"assets/js/3dd749a7.64de6b23.js"},{"revision":"dcc03568fad745a6e408c5b2606e8618","url":"assets/js/3ef38818.08ca826f.js"},{"revision":"c3bba19e86c9485ca8636776f976027a","url":"assets/js/3fbeb9b5.ceec12c6.js"},{"revision":"1cafda2c0fad92860672cbb878db6465","url":"assets/js/4149.7750a4d0.js"},{"revision":"8e4b0a51f876ecd1e5c5acd552ceba40","url":"assets/js/41c0ace0.3a489a73.js"},{"revision":"2296c6def34ef79b21ce82af850f528c","url":"assets/js/425e3dd1.0ba17198.js"},{"revision":"a3b8610ca3acbdd707eeb437cfee3a49","url":"assets/js/431266e7.b9735894.js"},{"revision":"a67a542efe8ffffa73811ee7a672c2a8","url":"assets/js/436.3d8ce4bf.js"},{"revision":"762a87687ea1300bf50695ed503036df","url":"assets/js/445c22af.b691efba.js"},{"revision":"d5270dd497c51be83a23cb2f706ed063","url":"assets/js/44975943.ba604c16.js"},{"revision":"fdaec7b03fe4eb7059908819bd2804a6","url":"assets/js/45cd711d.f5095a30.js"},{"revision":"95a68ef1d4815176a963fbf103f373fb","url":"assets/js/46bf3d5b.b1538b2b.js"},{"revision":"65bfc5fb6a75ff74cc171497181ee144","url":"assets/js/4807.3d820e44.js"},{"revision":"2ea97b46d283ff26f85d03466c378604","url":"assets/js/4838deb2.bd70db7b.js"},{"revision":"cb18a83c5a0041ac4cc5b5cbe1256cdd","url":"assets/js/484.ab086cd8.js"},{"revision":"e3ac1258baae329dc2206a5156f157d7","url":"assets/js/484.c33cc561.js"},{"revision":"dffdc20f555c25069dec575d78eaca07","url":"assets/js/488.6618bcb9.js"},{"revision":"3282bd2fe715aa4b5da6325b1d1dbf8d","url":"assets/js/488.bbe044de.js"},{"revision":"7e9a8f8753c984c8ca7b43519871ec8e","url":"assets/js/4891.2ec785ff.js"},{"revision":"48f402635f6f415674cedf18ac8ae7f7","url":"assets/js/491.18e6285d.js"},{"revision":"225bc66766c58024dd3a42e6d1f8540f","url":"assets/js/4975.a6a808d3.js"},{"revision":"ede627610c34335ee11202f117e0977d","url":"assets/js/49aec60f.381c0746.js"},{"revision":"421ee6e4ffbb0be78e28976753270c29","url":"assets/js/4beb5b8c.2b70dd1f.js"},{"revision":"cba5fc88b4b82ff6e105eb1b6c9b04a8","url":"assets/js/4c7ea6db.8309fc6c.js"},{"revision":"5d771d7c29d336e7ad6ead3a8865138b","url":"assets/js/4cdf84ef.9961905e.js"},{"revision":"8c11130a38ca9c098f2b5c360fbfd3ef","url":"assets/js/4d27c60c.97524caf.js"},{"revision":"21d44f484c3718fcd5dd381ac354054e","url":"assets/js/4f644c0b.c42d30b9.js"},{"revision":"c1957ef8bb5eb8ee1405d4044a1d7e10","url":"assets/js/4f8bb2fd.20202582.js"},{"revision":"a3485813f4a32a7ad33a5cc1657facdb","url":"assets/js/5093.b5809dbf.js"},{"revision":"a3efecc940361603644566d4f85cae48","url":"assets/js/50b793dd.5959df8e.js"},{"revision":"2e3385096937f395245de999c0576f52","url":"assets/js/510.05d3bba4.js"},{"revision":"1e1209521bae6a812c9ffffa22736b47","url":"assets/js/51ebfdb4.9af8bdc4.js"},{"revision":"982d0c32140516d8cbfc741ea2c7c6bc","url":"assets/js/522fd580.b93aa30d.js"},{"revision":"c71b8bbb2eaab2853f0ecd9028dee551","url":"assets/js/526.5656aabe.js"},{"revision":"f46aae3316a67ca68d8ecfb9623f3e60","url":"assets/js/526.5ce43af5.js"},{"revision":"9040430deae5b242023030e1b940624f","url":"assets/js/54.17bdab46.js"},{"revision":"60414ca749643d495a590870d231eefe","url":"assets/js/541d5637.2b6ea051.js"},{"revision":"3711815ecd0087d93a45b651ff106fa1","url":"assets/js/54a35160.3622da7c.js"},{"revision":"5a66edb9dcbaf1fb9ae1f47b5055c09f","url":"assets/js/555.2dd4bdd1.js"},{"revision":"2276011b42dfa94858d11c417dcc841f","url":"assets/js/55aaead0.781dd826.js"},{"revision":"21c88af1692527fbfd72b47fe213d71c","url":"assets/js/562.9f8752e1.js"},{"revision":"bf23fc5b4c77b5ca3015b4fae95ae144","url":"assets/js/563b5c65.16479e02.js"},{"revision":"d777479e930b233e002a49579ffcb6c4","url":"assets/js/5722.0845d268.js"},{"revision":"8296a1bd76c929e5d76cabe65c128965","url":"assets/js/57ecc2b7.2ca3e19b.js"},{"revision":"f766b12f720649024e9a1e940fa22ae9","url":"assets/js/588dd44d.cbf6918b.js"},{"revision":"3b23af1dea3c05a135b5c681d137e4e4","url":"assets/js/58fa4e48.9f981c33.js"},{"revision":"464532efd666c4d2ee0400c49b90d051","url":"assets/js/594bb6c0.8f4fbb73.js"},{"revision":"d2568df0a4de566809b40575620ad414","url":"assets/js/5a5e1dd9.ef06027f.js"},{"revision":"e72e95f45256ef84eee15f80bb3fc1b0","url":"assets/js/5b3491ef.fb522c38.js"},{"revision":"6147d0dddfc3a0311aaa52b43d2e662c","url":"assets/js/5cdb4525.e2c0d4c8.js"},{"revision":"fe2ab4d643c325366101f5a52fab8c69","url":"assets/js/5e6d1f8b.98be5d04.js"},{"revision":"c0893ce296a899405215a6ac5d264a8b","url":"assets/js/5e95c892.32ef5c10.js"},{"revision":"bd5e5079b6707536520af69298fea736","url":"assets/js/5e9c3b6a.54ff8480.js"},{"revision":"199e916b6a716459c56f64323b8cbb6d","url":"assets/js/602bb363.113024f1.js"},{"revision":"fa99bd519a5e71b5bf48c3c57710052d","url":"assets/js/605.50fa61a5.js"},{"revision":"94fc1f7d52af9f56528ba1bb0686b41b","url":"assets/js/605.b224031b.js"},{"revision":"0eda94ea3e52759c1cae434fc2a2a903","url":"assets/js/6127.6c5fd4b6.js"},{"revision":"2e7485cfb870d4fe1686e01a26b9a7ec","url":"assets/js/61aaacfc.72b2bdac.js"},{"revision":"f1d55c306f24ca8c9fd20969a1fdc8be","url":"assets/js/635cb825.157fdd18.js"},{"revision":"ee3d76a85b5625b961455dffdfca55c8","url":"assets/js/6415f59a.20a3303c.js"},{"revision":"903d620bf964f604842dc6ecbc627d43","url":"assets/js/64614d1a.39bd66c4.js"},{"revision":"7543bf55e44cd04c435b2f676ed1aa61","url":"assets/js/6475d366.2287c7e2.js"},{"revision":"c1d51ce82623918e3171018d2896c418","url":"assets/js/650.ceaf666e.js"},{"revision":"42c1377c934d67e9dacd9f89bfd5cc11","url":"assets/js/6557cf1a.f6280a09.js"},{"revision":"a5e1c5c566ec7fceeb628240cdb22fcc","url":"assets/js/6577a0df.9a5f1252.js"},{"revision":"22ce5701ccce9b56f34b0b61fe812c0f","url":"assets/js/65bc360d.35fa82d5.js"},{"revision":"8526ace29e61199b6f4f59c6ead9304a","url":"assets/js/667.ea47ece4.js"},{"revision":"2afb6f26844ab8ba7208a6429674353a","url":"assets/js/681b7af4.28b01784.js"},{"revision":"bc2d9bc947ebcab520b6d7ec02d05edc","url":"assets/js/6852.0669f758.js"},{"revision":"819d7abef39fdde2d75df821f51c355d","url":"assets/js/69df999c.af37b47e.js"},{"revision":"6ebd9d6a80644b656ccdb8380902a17a","url":"assets/js/6ad9afaa.fb0489ae.js"},{"revision":"9d3622e336030d4dad89105df6fd0cae","url":"assets/js/6b902128.b1b271ba.js"},{"revision":"4a5f225509871f8052676e59ef5bf0fd","url":"assets/js/6cd9d647.a3754c76.js"},{"revision":"0ab2d447fa87cbba78f5e9562f820b93","url":"assets/js/6d6bd066.e16df91e.js"},{"revision":"66e4fdb33c34eca8d00fc57323bdd78e","url":"assets/js/6e3d6b93.4f64f7d1.js"},{"revision":"a62673971cb19496dd73de99227dcd1c","url":"assets/js/6e889b7a.9c2da09a.js"},{"revision":"6a604bb2740d25e6456b8d244ca7d93e","url":"assets/js/6f2b2af5.7fb30845.js"},{"revision":"5a9c56b70a34037308b1f98a9e54e0fc","url":"assets/js/6fedb7a3.70f1653d.js"},{"revision":"ea828e48ecf22f4388be8d06d64b6572","url":"assets/js/7010.a13d238e.js"},{"revision":"23e26becd46820b9bf3d9a1541a8b2e4","url":"assets/js/70321d34.d039fdae.js"},{"revision":"10314483ba37180860ebbf8e44a2caff","url":"assets/js/71bd92ad.98914a5e.js"},{"revision":"d003e69d81377ff52ee3115a12c4d19e","url":"assets/js/71c41cca.2f18b3fd.js"},{"revision":"78ddca2058e35328ef7f6fc71b7415e2","url":"assets/js/721.ddcd054f.js"},{"revision":"a1b2278b8442eb2a57944049e9eafcfc","url":"assets/js/72b3e7dc.823b0a81.js"},{"revision":"c7c98efc57034225617c51e4e1bf48a7","url":"assets/js/72fea898.ed082d9f.js"},{"revision":"bd9ca4b4d1ad3e575ea76073f244f192","url":"assets/js/73c38494.7ba26a70.js"},{"revision":"6ae6914bcdce8eba44e5ad34fa8a3793","url":"assets/js/73f32b8b.19de2732.js"},{"revision":"67a4ef1f49237b6a060c1e722be8f0e3","url":"assets/js/7516.0c6cf153.js"},{"revision":"2df28910317fb71134479084ca2aa661","url":"assets/js/754296bb.935d2478.js"},{"revision":"18afcc59f33c7c72645c0432f2088264","url":"assets/js/7555.1ab5af25.js"},{"revision":"92f53de4a845b401d865ade05c236758","url":"assets/js/790b642d.0888ad33.js"},{"revision":"131c65c22579f61d2153ed8b06ba8f78","url":"assets/js/7930.3d5ad3d3.js"},{"revision":"d87cf0a4b657086a61d990aa9c3af0ab","url":"assets/js/79ee951b.1f0a69eb.js"},{"revision":"e82b070577a0c737c6f23add8f5eb623","url":"assets/js/7c328fb0.d3cd6171.js"},{"revision":"bb8bdd127ef1f64cea1d0b115e050a7f","url":"assets/js/7e75dadf.088a6afe.js"},{"revision":"4125a9e95410085aeade9642fa4bb085","url":"assets/js/8054.a6c49720.js"},{"revision":"7e6d921692c7c5dc2673f92b69a40a85","url":"assets/js/80f373f2.1d17cf02.js"},{"revision":"fd879ea5fac7f4d8d642eaa577d82c2c","url":"assets/js/817191e9.eaf1bb3f.js"},{"revision":"c8d186f9824b384223f3653ee7730412","url":"assets/js/81e8afad.59d76384.js"},{"revision":"def92115b48e1d0c828f3fc579bd1f63","url":"assets/js/824c452b.e4972acf.js"},{"revision":"0e18e732b5b54efeda02ae006db5458e","url":"assets/js/82c03827.da0a7842.js"},{"revision":"9aa93a4666ac5d54c88f9884afb1beda","url":"assets/js/83236138.60bd3b88.js"},{"revision":"2efea710f22d25cb6b1a8c56dcf0df06","url":"assets/js/83fa3eff.728429e1.js"},{"revision":"d6e3c97cffa353bd1191ab07444f73d6","url":"assets/js/8510.cc249aa2.js"},{"revision":"53a4c66ddf7d4faf31dcab6980d1a4d4","url":"assets/js/854b257e.9bb020d3.js"},{"revision":"900014a0bcaf1af9cf71050a08730911","url":"assets/js/85ccb835.d24bae4b.js"},{"revision":"3798add72ac17a652843e4f4b6a87ab8","url":"assets/js/86170a86.41e28973.js"},{"revision":"2e3bcf509348720abcca459d3cd555d3","url":"assets/js/866.6c7f15af.js"},{"revision":"547a0777868f85ba20c95dce42ebda7b","url":"assets/js/8667.ea796379.js"},{"revision":"8973a8c8a18e0ffeeb593f4dc821039c","url":"assets/js/869.e97b53e9.js"},{"revision":"b560621e539eb817a8744b1b844d3916","url":"assets/js/86d633e5.0ef0282a.js"},{"revision":"688e9c18204829e3a1366b6f8244b8b0","url":"assets/js/87531641.6d3bf011.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"31b520202b26963f6802e9961c4827e6","url":"assets/js/87d5db97.fdb97a92.js"},{"revision":"1349b86d7c88f0a9eebefffe4beb6d64","url":"assets/js/883b3acd.71d23431.js"},{"revision":"59e68b71109086a40d1927cc9d3ae7ff","url":"assets/js/888a5ebe.766075da.js"},{"revision":"3f0860a07f406aa1d0c1c4abbb1fc806","url":"assets/js/891.b72e8b8e.js"},{"revision":"37fd9fe5aba3b4437a718e61960f5d86","url":"assets/js/893c6fee.ede9bd52.js"},{"revision":"7f1f030f9ddf994b1fad9d53c71da019","url":"assets/js/8a578643.19fe5869.js"},{"revision":"7ade8fef4af53082464c867e4ccc79ee","url":"assets/js/8b23f58f.00966c35.js"},{"revision":"ee96d71d360bb7f95787e3849db6066f","url":"assets/js/8bdaa531.a461bb83.js"},{"revision":"a4db78ede586ffad24e9cf90ea18bf92","url":"assets/js/8ca7e4b3.115c93aa.js"},{"revision":"a0764ee22f411acd086d20a8983106ca","url":"assets/js/8e0be0d1.9bbef347.js"},{"revision":"1ba4700f2b044201db2dd42946dfbec9","url":"assets/js/8e6a4e74.93e40940.js"},{"revision":"8acf133e68d2827ed55687d926eee492","url":"assets/js/9109.6312a546.js"},{"revision":"f76e25fb57e796c277bcec4bab2ba7ff","url":"assets/js/9197.90f370dd.js"},{"revision":"e63325fad0b3ec95a42571aae80dbc3a","url":"assets/js/9197ae7a.351c4a8f.js"},{"revision":"b302bd9abcf6540f50e0d701dc00e37b","url":"assets/js/9229f78d.ca65175a.js"},{"revision":"ebd9af1b4a449f7531fb4a5e0e5f6c82","url":"assets/js/93.53cb7f36.js"},{"revision":"f99b2c010cef5ac2f2484ac0ba90861b","url":"assets/js/93456434.f582a2d6.js"},{"revision":"d4647b6c718d93c2adb31dfdc5615eff","url":"assets/js/935.cdc0afbc.js"},{"revision":"130c17459e62746ec73ab4a495c20f5b","url":"assets/js/9491.f6b25e49.js"},{"revision":"192f860598ad233ee196362f8d00659f","url":"assets/js/956.a3e362e9.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"18828a017e1ea08b0e36bee7f6f308d9","url":"assets/js/95bcd1dc.d42ce9d4.js"},{"revision":"848d2b3b2e01fa0f15917ea3a599cf56","url":"assets/js/95d63b84.89aeab0f.js"},{"revision":"0d357d779a97f4dbd1065cbcf6ea573d","url":"assets/js/9721.f6640325.js"},{"revision":"f6eadc2e003f21d0a4ff4dbc1f924c7f","url":"assets/js/975.d5ffe068.js"},{"revision":"9153d871f643044e4ceca3fb46638734","url":"assets/js/9794.b8dc4e94.js"},{"revision":"f240f2bce6595a48a84b3bbc42f5a6ad","url":"assets/js/9845.c152c721.js"},{"revision":"1aec6f25a405929cfd19128aa0ee67c2","url":"assets/js/9861953a.5999cfe8.js"},{"revision":"233a37f35847c84cf85a40d6854adbd0","url":"assets/js/9951fe7d.65a279a7.js"},{"revision":"ff03ce41797859998e639756100efdba","url":"assets/js/9982.f9c3ac30.js"},{"revision":"132d110ffd2c9a0bf39761ecb0cca519","url":"assets/js/9ac34ba0.1debc001.js"},{"revision":"41d6b788ca96127b97661208f8fbdf2e","url":"assets/js/9b8d311d.68b89ee3.js"},{"revision":"5aedd8a5ebe11bde738ddb3f625b0405","url":"assets/js/9c2278b2.f865254d.js"},{"revision":"772a66d6c244fb2624ddf924e128af47","url":"assets/js/9cd2fc0a.36e4be9a.js"},{"revision":"578806710251682085d66f05b4af99bc","url":"assets/js/9d4488d1.c40d1011.js"},{"revision":"cd2366eea921e03ed949c7f54c0ce6a2","url":"assets/js/9fdc340b.b414ca84.js"},{"revision":"7cdc431bb50969f497545f5542ba72e9","url":"assets/js/a1e55d50.8996119e.js"},{"revision":"cb8368a76d11e44e194a53b4a2747217","url":"assets/js/a21e984c.c7d91e60.js"},{"revision":"1aa6c4d5f5b63d962b6e0267e0d732c2","url":"assets/js/a2ca8fe8.1f3e51cb.js"},{"revision":"dd7649f49ae14a8aebe8136e94aa3b9e","url":"assets/js/a2d5f767.eef498ff.js"},{"revision":"57dba9841e9898fd019a01bb6c5412f7","url":"assets/js/a2fb89b8.b3ea030a.js"},{"revision":"3c7d2649aed10847afebd8671315b4d2","url":"assets/js/a305e2ac.abd8b6a2.js"},{"revision":"8764f73c036200ada901896c07a95aca","url":"assets/js/a4c78573.be6d4447.js"},{"revision":"6a9144de38bbaaafe07271706d1da4c1","url":"assets/js/a4e7ef95.9bddd85d.js"},{"revision":"d189808d4c09f660a4c775a4eaaf1c58","url":"assets/js/a62eaa10.91448e46.js"},{"revision":"87f7f11add632c7eb938afc95b8a2ce9","url":"assets/js/a6eaa2fe.ffc9ce4b.js"},{"revision":"53a2df3223193fd3384f4c2a4a7da4c8","url":"assets/js/a7062d46.2d0e8814.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"9bb123156744adecd1c0e70ae8c6f2a4","url":"assets/js/a757a55c.0088a2af.js"},{"revision":"37237d50346728320542206288df55ce","url":"assets/js/a78b3ba0.2dad9eea.js"},{"revision":"de1c8ba526eb2f318f783defd6eafd4b","url":"assets/js/a7bd4aaa.1f43fdd9.js"},{"revision":"5309eac1bbf4f8db3c87c60475cb8af5","url":"assets/js/a7ddcfcb.accb89e2.js"},{"revision":"c19c90f4d189725ea9648081d38df7f0","url":"assets/js/a8bdbcd5.e7704b7b.js"},{"revision":"ee0eca4ab7f5d68c24aef5cb64cec094","url":"assets/js/a94703ab.3bd924de.js"},{"revision":"568f235bdabc2de724ad46e647b1d3d4","url":"assets/js/a9c868b9.21a938d0.js"},{"revision":"db87eaa2249e355f66674835fb032d6a","url":"assets/js/a9f9a930.497a6030.js"},{"revision":"4dad9e68a8a98db59b96cb9da22c33be","url":"assets/js/aa276556.cfc2d884.js"},{"revision":"57c5b02133b8a91a7b7cb6a75b71a598","url":"assets/js/aa7b0feb.e3eb07c3.js"},{"revision":"772f37bb9b7cb0ddca9d9bf8e0c585e4","url":"assets/js/aa81450f.9d2c728d.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"39e55f88546b7c52498efa1cb4653e1a","url":"assets/js/ac61b989.d1f2b578.js"},{"revision":"43a09a508a6fb15216332bfeb9554d96","url":"assets/js/add4bb7a.6068f9cb.js"},{"revision":"80b5051cbb55c970c8d971927424fb25","url":"assets/js/aeb124bd.0f80982c.js"},{"revision":"a285acf442eef5be7977244bddc4fcfb","url":"assets/js/af70a4d6.c2b9531c.js"},{"revision":"6d4709825c4995c1e198f9e2edeef19e","url":"assets/js/b1153a34.2d4111d3.js"},{"revision":"9517162539058821de3fbf9e9e3af13c","url":"assets/js/b158dc01.c53a2abd.js"},{"revision":"51a10f7f138fd4345a03a19129dc762a","url":"assets/js/b21946ae.86aee1bd.js"},{"revision":"27df5e0782ca79d7e41e3f2e5d2ce979","url":"assets/js/b222cacf.37f25d1b.js"},{"revision":"4993afec1f88a9913a1fda96a201b6e6","url":"assets/js/b24d385c.d378ccd0.js"},{"revision":"e97257d5c244305c5d13b70555404707","url":"assets/js/b496f3e3.b1536dd3.js"},{"revision":"e9d833edd3f8da5f0e810d2b7a5bdd4d","url":"assets/js/b5210edf.8b981d73.js"},{"revision":"c1bc7db76ed335639cb82b5bf4f6208d","url":"assets/js/b5eeabfa.f0e37e9b.js"},{"revision":"93db0648c0945b9e370592d0e51950dd","url":"assets/js/b60da6d7.5bfd394a.js"},{"revision":"d2ab9442f2d69e455c1a4c2d0ee0ef87","url":"assets/js/b60de388.1bbd0a2e.js"},{"revision":"1ea146506c07f79daf87f8e140417231","url":"assets/js/b6386ec9.de4d5fcf.js"},{"revision":"fce57e1b8e36522a5a61a8c84f9f408c","url":"assets/js/b6438b6d.24315a93.js"},{"revision":"5421230b44131370a10f4d976699753b","url":"assets/js/b78eb33d.dcb42fc2.js"},{"revision":"facfa3acf8995a6a10571323eb07c0c6","url":"assets/js/b7bb49c4.bec28b01.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"4c7bea68bffc88d0365ba0d263fbcc37","url":"assets/js/bcc35f8a.6d45ca50.js"},{"revision":"57073e0b280d71a231f2abf01a131805","url":"assets/js/bd760347.e1e50b09.js"},{"revision":"62b24c802cb130e1318a48ea249c9a80","url":"assets/js/becf8c88.64f50795.js"},{"revision":"91ebd51f5879e392579f730b511f6724","url":"assets/js/bf3ddb91.3940441f.js"},{"revision":"3930bb7838be75fb38bae663381ac708","url":"assets/js/c0dca479.211c07ab.js"},{"revision":"eb3c88e25d78fa36f142519b2d8ba6d1","url":"assets/js/c10e86aa.8db5cc6f.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"1ccc02e811f32e1702094648655c4745","url":"assets/js/c4dcc6dd.2de65798.js"},{"revision":"5993b2d87d2e8011c7971537335e39a9","url":"assets/js/c4f5d8e4.44659380.js"},{"revision":"92c47e8be738eb4e3055e31b64a44c66","url":"assets/js/c5f4348b.75468ff4.js"},{"revision":"e3bc68c58a3e64df0328d04921de976e","url":"assets/js/c72cf9c7.914c73c9.js"},{"revision":"cf8defa642a2af6e450af261a0c25748","url":"assets/js/c737e1a5.5494ec97.js"},{"revision":"34e8b6aa5e44cab76b6e08a708fcb8d7","url":"assets/js/c78ecae9.4dff87e8.js"},{"revision":"b00e88761ec6da4c55a8703e42df7e8a","url":"assets/js/c8018499.b41a3e0d.js"},{"revision":"c3154161263e17f4e2ccc18be48d90ac","url":"assets/js/c84a9914.f4f756c9.js"},{"revision":"8b6c1d702e154a2ebcf02176ae029a2e","url":"assets/js/c8a93e67.c949fda6.js"},{"revision":"50dc4ba3beb84b3cb638a14375fdeae7","url":"assets/js/c9947f43.c5bd7b64.js"},{"revision":"b835d21406ccede6e7cf86da72022b18","url":"assets/js/c9a1eaa2.d829073f.js"},{"revision":"c6a94e74f857be8cd89ad8979fa059fa","url":"assets/js/c9ae34fa.3473a394.js"},{"revision":"9c7452c17968e1b3cc2ef0336e07fc65","url":"assets/js/ca8a1b2c.e308bf4a.js"},{"revision":"eb251426f24d6e9d1a3c361c4d74f2ec","url":"assets/js/cc2fcaab.fd8059db.js"},{"revision":"a7c0645da04c50db832fad94c0499243","url":"assets/js/ccdb3c45.7dbc56e7.js"},{"revision":"fda1da0501a56dab7066ee9153bf96da","url":"assets/js/cdc590f8.40083f79.js"},{"revision":"99e978d2a1e992dd87d75f4ea3305544","url":"assets/js/ce7e7ba1.db3bca0b.js"},{"revision":"47f06a004563afffa17dec86a67211ae","url":"assets/js/cedf0e63.f741d577.js"},{"revision":"b178a1d954628d86b522ca4c15fcc76a","url":"assets/js/cfc0d51c.7c45c8bd.js"},{"revision":"8419035cb7839bd4cec7d14f9252355f","url":"assets/js/d00b9fd9.8a508a38.js"},{"revision":"4996d916d33e27527b69f882ca1a8400","url":"assets/js/d07a3d34.dd083177.js"},{"revision":"7001e105dde0fe5b18f09916ef2393cc","url":"assets/js/d0ab59b0.1dbfdda3.js"},{"revision":"658e85fe2b114f6d5ce81eeab355ca0a","url":"assets/js/d26b0f2c.2b0ee04a.js"},{"revision":"03a3dd1f56386b5382676cc609ef7275","url":"assets/js/d2a9048d.4aa5aa89.js"},{"revision":"71aa621db4311f630ea5a99aa837a32a","url":"assets/js/d2ba5076.c1a49db0.js"},{"revision":"c7a0df82f1edfcac46986ff1bc10e4e2","url":"assets/js/d3585a2b.acb9c746.js"},{"revision":"8d370c4829fb55fbcc938d9b97839990","url":"assets/js/d45ccebc.9d334b37.js"},{"revision":"74fb81f9477dc19f7403b2503612f7e1","url":"assets/js/d494a195.c62ce445.js"},{"revision":"e24a77252f5ca9511c40ff53cdba0f3a","url":"assets/js/d63ab801.631b420a.js"},{"revision":"233a2d13c9606d7245c9cc9aa52cc56c","url":"assets/js/d89bf822.96e7f42e.js"},{"revision":"6d7d84b436a22937e9217c0544aacc71","url":"assets/js/d9cff955.86c2b157.js"},{"revision":"d31beb6bcc864b76253b0f4f234cdae0","url":"assets/js/d9fe55b2.45f52265.js"},{"revision":"28ed9bc87add0642bbf2ed676fe6b51f","url":"assets/js/da4fe776.5078617d.js"},{"revision":"a121d39f52d2b139c125355249273750","url":"assets/js/db6afc29.7b44973d.js"},{"revision":"66378a690ffb7b7c78013974382488db","url":"assets/js/dc030738.5f3db893.js"},{"revision":"52e744669dede7e1190020440daca29c","url":"assets/js/dc109391.05e6689a.js"},{"revision":"4441e94054f5c406c55596219cfe8a66","url":"assets/js/dd1fbe6a.358708c4.js"},{"revision":"f2a1f6900a48ffb8be3a058d68f0076d","url":"assets/js/df2a4a59.786d437e.js"},{"revision":"b40902b4f2a87cd4efe514fdb4cbde11","url":"assets/js/dffb9609.237f36d0.js"},{"revision":"0448203b2801ba0b784181058658cbaa","url":"assets/js/e10e131a.e056c622.js"},{"revision":"927b1892b93ac320a642098aa3e619b1","url":"assets/js/e17e6af5.168467af.js"},{"revision":"476d85106a2ab63664467e45d6e07119","url":"assets/js/e1a53158.91a82a41.js"},{"revision":"18b0438eda255d36cea9f5a7f25e5951","url":"assets/js/e39d40ed.f40267df.js"},{"revision":"f0e09b66b3b5b6c212fe03ab0aba5048","url":"assets/js/e3b728f4.252ce7c1.js"},{"revision":"6dec6b21bd0fd2a76ab03f50ff7814c7","url":"assets/js/e3cb94e1.b9ad883c.js"},{"revision":"954438fba09434a2c7f397fb109259f5","url":"assets/js/e47fd75f.6cb8e5ad.js"},{"revision":"80de5776717c4fa947a64b150282fe4d","url":"assets/js/e48b3322.81dc5b71.js"},{"revision":"47b8f57b579db68dc82e84953babd618","url":"assets/js/e4e92f42.1c04e241.js"},{"revision":"7fddbb1f872e0f47e224a0aa4d24c663","url":"assets/js/e5f7cd7b.5dcc16ca.js"},{"revision":"6676afee5561f612058b7aefeef57d91","url":"assets/js/e6501e5b.caa382fa.js"},{"revision":"15ee9dfc531fcf9d21c8ae5ff5cf6a1b","url":"assets/js/e682932b.d7b8994c.js"},{"revision":"e1d2f76157cbe5e43cfa440de0c749c8","url":"assets/js/e6b53073.0b45d009.js"},{"revision":"8799c9aeec3605adea7da00a5b0f132c","url":"assets/js/e76d69e4.da2000db.js"},{"revision":"60940c4920a2988ee01319414c2c2114","url":"assets/js/e8d5b74b.d4a7f3df.js"},{"revision":"a4e4edef14a7133ad76c95d9b4ef1cc8","url":"assets/js/e8dd6634.066a5558.js"},{"revision":"c09f391a5c8baed8784846f06bb497aa","url":"assets/js/eade58ca.fc881fe9.js"},{"revision":"134ef02e7408303bfea292b97d3d95a5","url":"assets/js/ed38b210.4cda8085.js"},{"revision":"6c577fdf322167d811c8b42135881096","url":"assets/js/eda49e41.145be105.js"},{"revision":"4f09b6a4e316610d5a54b2d6c96930ad","url":"assets/js/ee84ef31.919dcafa.js"},{"revision":"2976e4f693ee80d672fa3967f83d4298","url":"assets/js/ef72e420.7c311f2b.js"},{"revision":"533c2b082213b09df534a827e1093db9","url":"assets/js/f36074be.85426406.js"},{"revision":"2d9ef3c24cdca7e975fd404c96d5526b","url":"assets/js/f3937ce2.c07b1f2b.js"},{"revision":"32d69d6f230f8a59ef4d451dbf4825b4","url":"assets/js/f44068e7.f30f614b.js"},{"revision":"4741f526ce83c43175c302dbbc8722ef","url":"assets/js/f4e5f89b.2f0297d3.js"},{"revision":"c4a0445328acd3b61804c782a5ee8bba","url":"assets/js/f58ceb15.62ac593a.js"},{"revision":"9e99ae444e92ebf3407be4829f1a5743","url":"assets/js/f6420a7d.134c87d1.js"},{"revision":"eb46c8e521928f27e821c3fa1c51bf99","url":"assets/js/f7e672b1.aa245d28.js"},{"revision":"2dcd0afa169e48896b647ffc7e074d7b","url":"assets/js/f83b6261.09c36db9.js"},{"revision":"92bea63ee6d60483e3e005350d00d3c1","url":"assets/js/fa9e7027.cc570c60.js"},{"revision":"cf75efae092be06e0fd669969157ec55","url":"assets/js/fb274994.eef25a09.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"e17af7bcc83fa4f6d15ad3321e799c32","url":"assets/js/fbcb1a27.600aca90.js"},{"revision":"ac80eac8e35eb2a263e8ff6cfbf2178b","url":"assets/js/fc419e9c.b86d3dfc.js"},{"revision":"2e3548070435fa46c1b25f186b7e2714","url":"assets/js/fcaab584.c31d3637.js"},{"revision":"71df2b12e78ae1578109c06cab62d50d","url":"assets/js/fe5e75f3.19532b9e.js"},{"revision":"e6577a417252e3cd7ae7dcd9f8805022","url":"assets/js/main.7eb71986.js"},{"revision":"be65488e6f3cd79ee09d298aa4c7a1b5","url":"assets/js/runtime~main.5f6b3b8b.js"},{"revision":"c60b9e2e5340413900c74d6c2534eb13","url":"basic/index.html"},{"revision":"3d39998566868f817b7a07cc2766f639","url":"Bedrock/bds-core/index.html"},{"revision":"2d52bdd04d92d6aefffdbed0d5ba72f9","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"f25c2281aa566c5f90b1b13d27e9380d","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"a1410e645a0c63e3b4ac5fd14db693c6","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"0a61f1ea20af32320883cbd06389bfd1","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"53395000e24c11e5f8db619db829f290","url":"Bedrock/bds-core/process/index.html"},{"revision":"cc3d81c6a1bfff962d8d4b2cbfe4a26f","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"2c32d55eb3eaf93a029e296dda1034c3","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"6e58c169fcf430b5fc9fc62e32845281","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"6051f3fbfb300e5460eff4b9eeb235e8","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"436ba789ab0bbe987b36093e66e2ce29","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"f741edf1e8a9b1024bcd74dccc80506a","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"e30279e57ac1116d7d4ab865cfd2939e","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"8d024e00591e1a77e55b31e4efd8552d","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"3e32e9cdcdc5da7c8326afa41460a9f6","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"b46b0777acb5f811b61f7a55fd8320bb","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"39862ac749bd1d5d1386c2792ace95a9","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"693f4e2ec60685cc8bc7142198e4dbb8","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"27c1b2bfdf52a077b0a80413b5445812","url":"Bedrock/bds-core/start/index.html"},{"revision":"71aabdc9737dc91c7e53dbff53758499","url":"Bedrock/intro/index.html"},{"revision":"459bcbda97583d08a41b2d94930553ca","url":"Bedrock/nukkit-core/index.html"},{"revision":"4e611c454d8a91be12a28fb77b4bb7fc","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"699e499e183f7f5dcf87f0a8481fc652","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"391fede3f0f8496fc185c919b906213d","url":"Bedrock/pnx-core/index.html"},{"revision":"37b4f059bdb4bfceb4a8aa914e801fb2","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"4f4bc2f666ca7e1de8c71d6d4c9332a2","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"138f5b6084cba372201ca0be4cb30161","url":"Bedrock/super-basic/index.html"},{"revision":"1b06060cfab4a16aba773d4b9597bd8c","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"d838d9ad7486291262880ecc3a13a5e5","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"ac37fbbc70ebd3e83679c08946bd4722","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"de69f890cb01534b9629c4df5210f2ba","url":"Bedrock/super-basic/version/index.html"},{"revision":"a6aff993dcba1888000715dc147098bf","url":"contribution/index.html"},{"revision":"868c6ac2faaabfe23e313aeeb8558bc4","url":"contribution/todos/index.html"},{"revision":"f1b7b265074e6a4d0493bff2e8260d1a","url":"contribution/writing-specification/blank/index.html"},{"revision":"b9a3e659dd2835ed25f6a1fc73dcb1b7","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"65df178a0f0b30e2fdc68fe98cf339e2","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"7fa791d777d323fcf6a8e3a1ec4ccbf5","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"03004acf6a827f0b456e157264107a07","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"0bbb14a28621c4e7e4a3da4bf6398548","url":"contribution/writing-specification/reference/index.html"},{"revision":"1b5677f9f157a3dcb3b1c5ab2919785e","url":"contribution/writing-specification/text/index.html"},{"revision":"0866458c3cbbe25dddec6c231ce9c389","url":"contribution/writing-specification/title/index.html"},{"revision":"9d0808becd30963bf93d877f89b8cb55","url":"contribution/writing/index.html"},{"revision":"72a9ab3f69542f0779f6995e0b892196","url":"database/backup/index.html"},{"revision":"2388278bf66e83a98af9603d18033944","url":"database/configure/index.html"},{"revision":"b1cbadd1fdae0f63919b9c3d79bb492c","url":"database/index.html"},{"revision":"5c0f34b9a2e41722977fd61a08ec5406","url":"database/install/index.html"},{"revision":"47900a91915405d4f7c5196579400fcd","url":"database/manage/index.html"},{"revision":"fc41da8d36f5bd8b527cb9a506cce76b","url":"database/uninstall/index.html"},{"revision":"4af6b5746e27407e4e7a8e32136f81d1","url":"deploy/index.html"},{"revision":"a498df9441b7c172b062bd18200dae6d","url":"index.html"},{"revision":"f88549931292205271769f0db355985c","url":"intro/index.html"},{"revision":"61d627d1aba7c234cd16b9a9e6273a60","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"50839d88991e0082ce80f1d5f4bd1def","url":"Java/advance/bot/index.html"},{"revision":"6b529ffda1d5719bead7e85303f5fc4b","url":"Java/advance/chinese-username/index.html"},{"revision":"74cbf1eb7c6942a68626f44e4ddd1ad3","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"a623cd05784709901154ae533c4887e8","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"f13a8b537eb68105bf32168d9082a9ed","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"6a7e7cba83e7b487828b2a9e705c0bcd","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"8c514a94512a160307c86051d362d80a","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"740e3530400e742ab39acca4410233ad","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"38d9506780ce2faf8b670d9b9ca2372a","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"fe7ab6e463c184f9405f0ac5b5117540","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"cb28f78ba49e0d268bc73a113a164dfe","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"05c6a6db08031bee6dd5c4b05ce01215","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"25aa700362c546bbf67abcbfe39ee47b","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"e86e32aeb82cec04a3225268244b8366","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"bf1687a7f87f2948d5e8f2e14977148f","url":"Java/advance/database/index.html"},{"revision":"c5bd650e01aa9d4be0aaabae6142aa5c","url":"Java/advance/folia/index.html"},{"revision":"a4d6aebb5e40cc87a8655ef8d19aefd4","url":"Java/advance/format-code/index.html"},{"revision":"56ef7b5232ff7bc07b329f16033e0575","url":"Java/advance/index.html"},{"revision":"f3791e27b7256d91a77b0539905d1593","url":"Java/advance/kether/basic/index.html"},{"revision":"46cdc169a1b85d258bcee5ce5d49a604","url":"Java/advance/kether/idk/index.html"},{"revision":"da2f1d0da935502798110ee9f8df674e","url":"Java/advance/kether/if/index.html"},{"revision":"67badd45413adc00cec45d470c1b94e7","url":"Java/Advance/kether/index.html"},{"revision":"ba1b436dd77c38e79aca8144fcee19f4","url":"Java/advance/kether/math/index.html"},{"revision":"2c5795d3c6deeb35568f7a635c7d15ea","url":"Java/advance/kether/preparation/index.html"},{"revision":"2c7cec3450eaaeec38a5fb0b24333841","url":"Java/advance/kether/variable/index.html"},{"revision":"47d482f809a31d2592e499de8d64947c","url":"Java/advance/Linux/index.html"},{"revision":"22d1055364314ce68296ae970d15742d","url":"Java/advance/loginchoices/index.html"},{"revision":"50d1f17570d848dc8aea072e092cbcc4","url":"Java/advance/MiniMessage/index.html"},{"revision":"ecb4d224aa9d5ed692bd8b8089872139","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"2d5e182a089c45f379d1f762b0ef45aa","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"cc4e72bbcca88906fb78bcaa43df6e7c","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"c2667f13ad8441a7b6328a87f1c635ed","url":"Java/advance/YAML/extention/index.html"},{"revision":"bfd0a114b206753364825aa8ad74d6a7","url":"Java/advance/YAML/foundation/index.html"},{"revision":"2dc1e215ea8c1ca038f1d1ef8a3a20ce","url":"Java/anticheat/index.html"},{"revision":"7269bd26601c0b1b478a8a0d1af78d8b","url":"Java/AntiGrief/index.html"},{"revision":"f62eb054aa5a6220e2504f14fb55e59f","url":"Java/basic/index.html"},{"revision":"9115926cff22a8dcc964fab37d7b135b","url":"Java/build/index.html"},{"revision":"b0e5b560987f84ee35c0c9a169021b50","url":"Java/bungeecord/index.html"},{"revision":"ffa26bb6ef0b48af43004f44cfa88d23","url":"Java/category/geyser/index.html"},{"revision":"441e956d87432f95bdbe63e6e5ce1038","url":"Java/category/placeholderapi/index.html"},{"revision":"50b13b0d08167eeee75e3cb5a4106801","url":"Java/category/入门/index.html"},{"revision":"ce8f19fb8c5fe40d941ff883adb645ad","url":"Java/category/进阶/index.html"},{"revision":"8ce01702c81a346130a41a9639febdab","url":"Java/chat/index.html"},{"revision":"d5d812a950fb1ca38899a3a7b9d1fcc2","url":"Java/command/index.html"},{"revision":"021927519f50828870fdf1fc9b05a6df","url":"Java/cross-server/index.html"},{"revision":"3be7eba895a4cfb5c90c3c1f381a5726","url":"Java/cross-server/plugin/index.html"},{"revision":"783e7cb7b196f75c961a3ac58c29df0d","url":"Java/Essentials/index.html"},{"revision":"5650aed1089543ddc199738fe1c4664d","url":"Java/Front-Plugin/index.html"},{"revision":"f8132bcb6b3fe69820f1590301e65e49","url":"Java/game/index.html"},{"revision":"72a89b929b6233af48e25c657ad849fa","url":"Java/Geyser/Upgrade/index.html"},{"revision":"75a248b2b31f4de8d7d92ce5afad54e6","url":"Java/intro/index.html"},{"revision":"7992dbbb454a02a88c8885c8e78a6dbd","url":"Java/maintenance/Java/index.html"},{"revision":"6bcbd757cdb9bcd5da41b140f8fdab4e","url":"Java/ManageTool/index.html"},{"revision":"fe4f7606466014ca9e7ff05ee7c1601d","url":"Java/optimize/index.html"},{"revision":"3c911bd3f0ba5d9b1593485324485768","url":"Java/optimize/jvm/common/index.html"},{"revision":"50fa055c32556b6f3abb4235621ca86f","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"6bd4e07b875b4b0074be8fb4ff77da98","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"0b5fdbb655d58d1bbfd0d3cb4d78f578","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"2aac84f3c9318995879df6194bdcd5ae","url":"Java/optimize/jvm/index.html"},{"revision":"ddb6227445b6dc8272ee8fb93a1b4da7","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"0c7fc1e2a9bd347710ed4d95dfd9845f","url":"Java/optimize/jvm/zing/index.html"},{"revision":"3bb4439d6a16860ee9692ed282c09f1b","url":"Java/OtherPlugin/index.html"},{"revision":"30f526d287dc55bbd8aab5e1940b82e6","url":"Java/permission/index.html"},{"revision":"33d95b2f6e16aa830d3e84fb2c60161d","url":"Java/plugin/index.html"},{"revision":"a0504400d1cd511f498b51bbd6608660","url":"Java/PluginMagagement/index.html"},{"revision":"1f715f5d8f9ba0def9620805f18fb68c","url":"Java/plugins/other/Skript/index.html"},{"revision":"0d32590dad702f0b3c09a02b0ad7e5e5","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"f1e5c5e1098e7a48ac2a8e12116805ae","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"93dc72c1d896dcbe7a0efd7cac664afa","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"6ee820c72e9a04b151c8e1f72d9cb492","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"8256f5f0affd17430f6c7b748b7c6757","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"f6f87112c4549030b7d912cc5e310237","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"b271f4766b46c578ac3abbc2c04ee6df","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"6cd59a2717b67a0f3df20638fcc8aeb0","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"183c30da919767b49e274548581a6e39","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"371d3577c3c51760ac8ad13a6be59bac","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"4f534a8e3a412b7a8265fbc2c6521042","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"518341c17faf4872608b8a6766a611e5","url":"Java/preparation/index.html"},{"revision":"3dfd5add3e7406e8aebf312a2100c8b8","url":"Java/preparation/text-editor/index.html"},{"revision":"ec8ded5d8a23170a6e7fef58d66bc945","url":"Java/preparation/websites/index.html"},{"revision":"8add0760c9287c80ba1a7c8315688b3b","url":"Java/process/index.html"},{"revision":"cf414972357766d259dc7df1ee47e8f4","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"20a6b92a3fe0b0ff36ae009a53a256ff","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"85eb839293ad8b1b72f7399b719770aa","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"ccff08fd0280e529274e6216d603ec02","url":"Java/process/maintenance/backup/index.html"},{"revision":"b0bbb313a96749e33173f3f4b7e73eee","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"eacab9f070100e7db10bc7f790ff29fe","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"687af22445cbbb2bc09e9e9ff095462c","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"ac833fe4e3dc56371283aa6d788fd03a","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"6a96c9ba22a2ff443d53579cd6a46048","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"697e9c327833916625d696d3ed074d14","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"19c874cca743babb7a7b62d8b69a5281","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"b496fa8c7749d26d3662c3772a1239fb","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"081cdf1af4c039234c01bb451b84f99e","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"f04df1c6540d9aacf2320e29c049f1a2","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"146a5f2aa66bb27bdfdd241fe0ce9268","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"6252d57d0b0d2084874a0c54c5ce3ace","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"dde2007cf44ee9898a0e4a7a424a5ad9","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"0c949e30af5528ab836b9393d97c1db9","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"c47111d14282b4d19849383b7a9f37da","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"3e2fab39feb0591aacf13c518c89164e","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"7d1b7766e1f44cb45426ee8dc4dbd6aa","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"638c50af0d33fe26cdae9d04d102c46c","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"2480e7d04a62e70a06fa6a61a9f7693a","url":"Java/process/mobile-player/index.html"},{"revision":"f76f3aae69cc888360e3b68a25b731e1","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"127a81d9898c3a0511f02076a9ea76d1","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"83c9cfa7bd05a76b329e324683f3cede","url":"Java/process/plugin/config/index.html"},{"revision":"32520d655c14890018ed8d211ce86f79","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"5a865f0deae069c48ba96334b43757b2","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"faca9eda128658006ac31feb33d992f4","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"f86c3090fbba3e43f2fbc5cb6e6c4117","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"1ee7c4e81656eb2466c4068f88c16198","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"f96b281fb8e2b5aa1ecd6e28503f2a3e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"7d310410db249e9033ef0a07d5562a53","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"8228df36229214d632653b989ddd1bd3","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"163adf89e6a5b4c555bce265d86c66c5","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"2c2e98940ef95370a08a8b93ec48308d","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"078bd931f7b59866fba2917771251b14","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"393cb57c5a277e4092f967bf27a3a12d","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"9adb6f4c3183e3b021de72f826b622fb","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"196cf6fa48419af1f62d54c6806a7e31","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"1dbe991d6d843ca1a3e0ac9930a06fa3","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"64ceb2844a03d137d481fb6f4c99aea2","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"08389c27732d142bc1b714eaad5d7faa","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"4695dda80b6379002245ef21ee6309ac","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"6b9965c44fa79625fa28263212afe078","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"40994483d52df0a73d8d336a431759cb","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"af5237b8762d660776a3c5e3696c444b","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"2e4633a914b5dabf35620a2bb9afce69","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"8691d2ebd1832073767cd3943a9186e0","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"cf2d4997810c9935cc83a3507af8312f","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"bc671674065a59eaecb6ad39d2b7be69","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"e0fc2cc28f526813ac56bc8e59d65a39","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"8a00b9ff63de8c2d2026424363f1dfea","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"89335e7059cf2787c99a016477fd0715","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"17e1d843c4157920d0f8fd43f806f802","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"b8f2735d62d69105ca9be6dcb3fd2af8","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"218d1ea74ee4309fe7003def08ec3edb","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"d30ed1c912ddda4686dbc3014f39fff1","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"a91fd072c77cccab6483204252b20f6c","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"b2b65be0c8e613d729a0baf8a3ddc2ae","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"c5c41c77d2a0e32b265888e6509732ed","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"09a2dc1b20a61a15e22bf25aa96a0e5c","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"a9032ac7bee20ac487b4923847324234","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"43afd81dd304cac4dbba04a1daff90e0","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"4e2d851a3ae130126282ea652f1cfaa8","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"dca15113013410cb3fa731c96c1ccde0","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"db31843e3b57f743aebc128c57d3fb70","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"0bbeb58ae00b504082f4ff6393f657f6","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"2b60741050b8d4925fec4e96f30df5a4","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"f77a54695712521582d067902081744e","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"1fb338d859b4011db7d1d7d231923cd0","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"96bcd473f8cb765b2d0bfc9c1473fc68","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"fecc2cc4629c72efe78d8e18be549994","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"fef3fd539248e8c7cd688b662356262b","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"3243b27a7c141f2d15cf1375944c6056","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"dc8b42ed19d12fdcd335e7c65c1dcd5e","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"5d37a71fed74a74f25bf2383a3706c25","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"1a0c7efa848c6e8ccc2cf3e0a46a0534","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"72e2df8f6efed2a733c5b0cde525bda6","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"5a8cd42645eb33cc5485917e0bb465e2","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"f74afc0ec39dc70af9ebe3d5dc4370f9","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"f5d4e5cf588f21af7341e5dc0fbf370e","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"80f4abbf153669e95aa72163b04c24dd","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"85930b0cabf1a69add420c28001f0142","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"a6848f0cf804991696dda4a423805a3d","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"6422ebd93a9ec45daffa306b74fba34a","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"0486a23db219551bfc6763e0fc6d3c48","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"79d9679bd0244e01cf7546adea1e4041","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"5a4f1192bbb5197237d9de011ec9c8d0","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"eaf175b576634c5b23a4758551313fb7","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"69443089b7936324979408460d99e771","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"d3dbd75e4f413350728aa563dc556c3f","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"6a8da7c443decbf1c4eb8e0e604d023b","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"51e0cc06a2d0bc1579697019143d6269","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"5c8b58040e390e63374832e89abd1c5d","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"ec5316510846a5431ed6da797d8c9e3e","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"01bb8a6339ef89bcf71c5d39ccc8bed4","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"d1182983c658bcf9d588776a3c44dc10","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"6c65c864ee28612159e8151132300e22","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"baa2e918ce2e2af8e68f57058482800e","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"6bf4c9f71a7b2ff16b4aba2e029e7290","url":"Java/ResourcePackManagement/index.html"},{"revision":"eeb27589191855a88b8aea52bb881c72","url":"Java/services/index.html"},{"revision":"594dc878dbf91937616276c0d9ce1472","url":"Java/Slimefun/index.html"},{"revision":"8fa492b40ee4f28cdc5916ba1fdedc04","url":"Java/start/ask-for-help/index.html"},{"revision":"a948a4e7905e98f7c3ac4615c00ee337","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"131830300b3680b79a6720351fb8a4d9","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"da6e304122870087a69ab50d2a307c70","url":"Java/start/basic/server-management-command/index.html"},{"revision":"cf96023ad1730360b730e4797aab72ce","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"818b2481f813bd60ae6659d1d9f4086c","url":"Java/start/basic/what-is-log/index.html"},{"revision":"c2cb1630ff591f973b64248529e324df","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"7eea607c9b07da3b1591d1280b9796cc","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"6dc33793052d57980489345a3fd86379","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"29b6652e6b3a847d3d9d1c412b721548","url":"Java/start/basic/what-is-server/index.html"},{"revision":"033bce777c08d73fbb659dfb9d9f697c","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"f67daaf6bc6775eae6d7cb45c12baa5b","url":"Java/start/basic/what-is-world/index.html"},{"revision":"33d5b7d1e9daf66de1434288009f4f38","url":"Java/start/config-server/index.html"},{"revision":"a8aad49ce364abbf88c76991177cd316","url":"Java/start/connect-to-server/index.html"},{"revision":"6040757f04fdb6dae31e43371e6aad4d","url":"Java/start/deploy/index.html"},{"revision":"7d4a07f5dd788084894d75036625726b","url":"Java/start/index.html"},{"revision":"d45492ff3289287e4ef26dd3eb43e5ce","url":"Java/start/install-server/index.html"},{"revision":"c6495e8f2a974757bb346f53c0dcdc4d","url":"Java/start/launch-server/index.html"},{"revision":"65578f32e479ee50f4e56e7ec963d676","url":"Java/start/server-core-choose/index.html"},{"revision":"5020d724e48c4e973f00f1a6142db120","url":"Java/Sundry/YAML/index.html"},{"revision":"f7418497f15d6eabae5f23735f4220ae","url":"Java/velocity/index.html"},{"revision":"efc127cd4c93dcd7bff0e399f4916192","url":"love/index.html"},{"revision":"908c6a9c074724175686374d1ca5b186","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"4950b350d8b41934ab01063f8aa9a13c","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"c4a8b193d701296cdd0314373c38ab04","url":"preparation/dumb-script-using/index.html"},{"revision":"ff9b05f2e66b8cd7f74abc96b44e896b","url":"preparation/index.html"},{"revision":"13cfeaae89d91831d56a70905d52aff8","url":"preparation/text-editor/index.html"},{"revision":"fcfce2d022df4231096ef58d86184773","url":"process/create-art-assets/index.html"},{"revision":"860135bca6e4c412aec825d5eeced54d","url":"process/dashboard/index.html"},{"revision":"a871365e11bd976deae11fd57234d05f","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"906d335c86a533b8db1d809f46b8dda7","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"2b759dde05d2525b4aade71e37e3be11","url":"process/deploy/intranet-penetration/index.html"},{"revision":"ec6c4a3ab6a2b9b3ef5648701e4b1dbb","url":"process/deploy/optional-mode/index.html"},{"revision":"8c75988baa54f28ac5652608493962fa","url":"process/deploy/purchase-server/index.html"},{"revision":"8110f3a418d9b9f02e2ad15572e512ab","url":"process/index.html"},{"revision":"9d63c6b4d11cf6a1188af23c06e4ee47","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"b3ddd034effe7cb2e2fe9e835d54d943","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"037fe9066a1cf6e5bd592ff019e5d2dc","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"4644194f5de9bfea79fd7f77bf96d705","url":"reading-guide/index.html"},{"revision":"c0c16db6343d2877d40881005c69ee45","url":"search/index.html"},{"revision":"b780fd057d442951c77753710e3b77bb","url":"services/index.html"},{"revision":"9f5d6e5379bde423022b563633ae3de6","url":"start/ask-for-help/index.html"},{"revision":"068f15e7f2c3f87a4b6aa8d9d134a1a9","url":"start/basic/what-is-caton/index.html"},{"revision":"355372ab6d14c26903d555a6e686dc99","url":"start/basic/what-is-log/index.html"},{"revision":"9b5c3a713526e0bb867d0bbb0bcf2942","url":"start/basic/what-is-messy-code/index.html"},{"revision":"d405f6ea527dab749bacb955d363d258","url":"start/basic/what-is-permission/index.html"},{"revision":"360cdfc457c7f6d20ba410f04caddf33","url":"start/basic/what-is-plugin/index.html"},{"revision":"c040ea6c45139ce2afaac5bb3c01e586","url":"start/basic/what-is-server/index.html"},{"revision":"3320da42c9149073267775e19ff3c8c1","url":"start/basic/what-is-startup-script/index.html"},{"revision":"8cea0fee7eee5b26fd81ad3eef018619","url":"start/index.html"},{"revision":"2aa52d04c53c3ecd5d598b10c65cc025","url":"Sundry/Advance/Linux/index.html"},{"revision":"10b4a94fa2a51b36f2dd0dd7f6835542","url":"Sundry/Advance/management/index.html"},{"revision":"ff4c20ac5f177c000081408317ce8e1d","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"eeb7c61f1ac31c1a1394d9f53b3323be","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"eb4139f8bd93ac4e0cd983ddff9d2f25","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"4ff0de840d5e96e202642d64ac3e0a80","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"d4bb2a8dd5179b4c4c09051c7b91a9fb","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"c207b70a935094d8cba1285e4d21a0af","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"193b180701c442f781962dc2bce5a009","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"16c67a88bc3ab7f6a728897e9bcd7dce","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"e7946ad55217bbe952ae56322ac444d2","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map
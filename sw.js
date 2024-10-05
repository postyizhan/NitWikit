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
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.5.2_@docusaurus+plugin-content-docs@3.5.2_@mdx-js+react@3.0.1_@types_vo5565qbixjk6etkv5ka2s5rwa/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
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
    const precacheManifest = [{"revision":"616116afef6b83cada8165ba273dc282","url":"404.html"},{"revision":"182504a9ca2f29f2794852ed53d1309a","url":"advance/bot/framework/index.html"},{"revision":"911b1cca7dc56f25818e678801638570","url":"advance/bot/general/index.html"},{"revision":"297efc61ee3c6d9a541402682a5a016e","url":"advance/bot/index.html"},{"revision":"4c429077f55e15c42a5ae12e9687c4b8","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"f735b889ae445194808bf4f8cd48fce9","url":"advance/index.html"},{"revision":"9cb306f6b6474cdccf9a2242aee5a33b","url":"advance/Linux/backup/index.html"},{"revision":"86d8289ce6006311c57d839a70d4db7f","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"c8bdaebb0aac15d32d27c73372be10e8","url":"advance/Linux/frp/index.html"},{"revision":"e82d16cd2d0491ccc57e1cccb24e6e22","url":"advance/Linux/keep-running/index.html"},{"revision":"6c320a6e1f2e6cf8da077890ca57d0fa","url":"advance/Linux/start/index.html"},{"revision":"415fd0d091ab317ebaed1d2e95eb9029","url":"advance/open-website/index.html"},{"revision":"8a3a400fface22e8fd99681a701f4e3c","url":"assets/css/styles.9cc1d9ce.css"},{"revision":"0791ea09d0cf0eda77e87b0447320c93","url":"assets/js/005c270b.46ea6ade.js"},{"revision":"6a2291471c88fb3c0622d946ae1f9949","url":"assets/js/013c8c14.8b875412.js"},{"revision":"0081733a3971be825a64858b46501956","url":"assets/js/026f291b.da70f542.js"},{"revision":"9e31b422294098d54276e697939cbfd3","url":"assets/js/0272dc73.534a87fd.js"},{"revision":"d2c466bb7be614b0d1a0d60c0deb2a2d","url":"assets/js/035cfa77.a61236a9.js"},{"revision":"33bd81d7eb69a019c29b5ccc9bcc696e","url":"assets/js/03b205ee.c9c64531.js"},{"revision":"202e5d86a44b3e95c20defc9c3efca85","url":"assets/js/043fa146.913d8ecf.js"},{"revision":"5bcc5f2c5417dc715da58574043822d7","url":"assets/js/044f41a1.7eab6522.js"},{"revision":"032057d05ea03ce60076972363b9b05e","url":"assets/js/0492d44d.9f76ee9a.js"},{"revision":"07868566bdcacd3da96fbe03ab89ac1e","url":"assets/js/04f5c692.5a967442.js"},{"revision":"7a36306d07bf961836bd9724c3f9eff8","url":"assets/js/052366f7.64e423bd.js"},{"revision":"dcbad69a58910464dca67e75001789f5","url":"assets/js/053e2f33.83ba763f.js"},{"revision":"6b05e82cf0b9efd65f451983cd11559c","url":"assets/js/06b0ed59.d03200c0.js"},{"revision":"8433da72c47bddee38dec0b4de2bb306","url":"assets/js/083acdf9.120fa557.js"},{"revision":"15fe22fcbaeb1e034fe248aae9f7a28f","url":"assets/js/083ebe2e.01b2ad1e.js"},{"revision":"4d33c77654d167d9066801ec245f7ec4","url":"assets/js/08e7f72a.2a02b0de.js"},{"revision":"7e20caaf0704db8048f6720c5f5022a6","url":"assets/js/09156d2e.30c2ce3b.js"},{"revision":"0c7d866652558bac20f6ed76337e8d26","url":"assets/js/094a7dd6.de6258fe.js"},{"revision":"bd59aeaa6ac8d42c37c123127f763a6c","url":"assets/js/09714880.074587ac.js"},{"revision":"f17967540f2ff7c4a760aa99c0bbd805","url":"assets/js/0a17cf6d.098f9410.js"},{"revision":"da95127fcbebf9638fe61ed63a72ade1","url":"assets/js/0ac0b3b7.b2e97b9c.js"},{"revision":"e54972b980a5e966f52a0831f1591d8d","url":"assets/js/0bcb5d9e.d717efd7.js"},{"revision":"7240ad14bbd42d9bb127164ed4b690f4","url":"assets/js/0c7f12b6.05a27c99.js"},{"revision":"0fb64edb150cd89b06cc96e23c500052","url":"assets/js/0e384e19.c50c5617.js"},{"revision":"d4252e9b3d9a9774d9e3e324270a993c","url":"assets/js/0e9ef1fa.dea216bb.js"},{"revision":"8a61d3f7ee7d995451f8ddb70aa8b1ab","url":"assets/js/0ec7bf36.10499dee.js"},{"revision":"c79488bdd17696d896d4e8659a2eaa5a","url":"assets/js/0efa0f03.8d37b403.js"},{"revision":"b5a5c46a109bc01f060d0848e4182f66","url":"assets/js/0fc807d9.e83cada5.js"},{"revision":"ddc1a58ab9b6f7b49a397db4115a2c36","url":"assets/js/1033.6b315b1a.js"},{"revision":"27b0f5f372c606c380fbe1665db301b5","url":"assets/js/107.a6c3c77e.js"},{"revision":"5932650c3e00d88e991d64f518c02705","url":"assets/js/11f90be3.0b02fa5d.js"},{"revision":"ffeef0e0322d1853fa4d1d2424a4c22e","url":"assets/js/1208.f9c9e6c3.js"},{"revision":"30e9103710e6ef53e44577403ea35a70","url":"assets/js/1210f0b1.7261f556.js"},{"revision":"f7d9105087400307e47e82a3fe856431","url":"assets/js/144520df.74e5170b.js"},{"revision":"334a8b541189c44548a3146221ec3aee","url":"assets/js/1468.ce144260.js"},{"revision":"4203d49e635c70bd018d26beffcf5f6d","url":"assets/js/14eb3368.24568aa0.js"},{"revision":"2242763ba64a124485383fc31c7390ac","url":"assets/js/153.9f86ec5c.js"},{"revision":"6d336143c13362934aee69c291c65a1b","url":"assets/js/15daf372.e980d473.js"},{"revision":"608ef74040198fcc4d7887de0566eeb3","url":"assets/js/15e4e3ed.c00bed2a.js"},{"revision":"bb2f0c110b5ccc83920cfa2ab25d0cca","url":"assets/js/175f0af4.6aa1ba8a.js"},{"revision":"c0685efb70fd670fbbc75d19cfa60ded","url":"assets/js/17896441.7a506caa.js"},{"revision":"ced72a1b9b81dfe395ef02eaed9488b0","url":"assets/js/1802.36196930.js"},{"revision":"c621a470ff9648c47104e0fa016facb8","url":"assets/js/180bc163.7e98a474.js"},{"revision":"506d88c4c968e09e29a12bca89ad24b3","url":"assets/js/1856fe2a.572527ed.js"},{"revision":"ce0cd2938caac29d2c68511ceb24df43","url":"assets/js/185d6330.c75cd381.js"},{"revision":"63b87f6dd4f6110739364814472e3588","url":"assets/js/18b67442.a90ee2c3.js"},{"revision":"ca5880ee6d81ef84d2c5156b3460d2f9","url":"assets/js/18bca995.13d53653.js"},{"revision":"038a76a4931a126dbad4412fcc30e206","url":"assets/js/193a055b.cc5322b3.js"},{"revision":"0119082a761e281092f7f733f5dc81cf","url":"assets/js/198ea2e3.10a5139c.js"},{"revision":"c925856298b9425bf9e6ec099c887cca","url":"assets/js/19cf8050.b44faf36.js"},{"revision":"3f5aef71a2a24c47a6e0c404aea95391","url":"assets/js/1a4e3797.947e7bc4.js"},{"revision":"c4ac57cb69a010451895084bdc2a2a5b","url":"assets/js/1c42be93.887e95b1.js"},{"revision":"edb49584dc5fa3c169115dfc5e3c6af5","url":"assets/js/1c6846f9.d148d372.js"},{"revision":"ec2fd9d63699ecdb83a6ee90410be4ec","url":"assets/js/1cf75b4f.3956ddb0.js"},{"revision":"1cc0042b8eaedbb96e3d3e54d5d9fe3d","url":"assets/js/1d1b9adf.c4447fb9.js"},{"revision":"fdb485c807e9d2f6924e4b082882ad55","url":"assets/js/1d42ad15.909b2dea.js"},{"revision":"d494088af07173e3257716e30b16f44c","url":"assets/js/1dfd2628.90ccec48.js"},{"revision":"e8a251982afdafaf4f6cbdcb3f44a2d8","url":"assets/js/1e0a547c.eb560ba5.js"},{"revision":"a5e2caa609e512a494658c159ca225db","url":"assets/js/1e47cbc1.d0bbe852.js"},{"revision":"bb4f3f49db907756949416207cf44f0a","url":"assets/js/1edb7625.3354dc48.js"},{"revision":"614e3c25cca6ced87eef12ae9840d21d","url":"assets/js/1ee6f0d4.663320bc.js"},{"revision":"852744c670f6d59b7047b7410a05d139","url":"assets/js/1efacac9.5ba9d34a.js"},{"revision":"e4b6ca4bb9f1a6eb74d04e2aa2df603a","url":"assets/js/1f81f646.3b7b7413.js"},{"revision":"4a2f3183aab7f4e0fb985c7f6840640d","url":"assets/js/20215aa7.4ce7bf21.js"},{"revision":"4c599486db5167456d0b9be3bcca2cef","url":"assets/js/20547864.3e26b5a3.js"},{"revision":"179f87aac7f86d88533ccc4ffa796654","url":"assets/js/20d69604.0fa91170.js"},{"revision":"65a9d1615a4790ba9a2f25d4b76b49a2","url":"assets/js/211.f5a060f3.js"},{"revision":"3e1adf49e9533009bbb30eafaf69f239","url":"assets/js/21c534b6.61c02b7d.js"},{"revision":"6cffa99097f57be4b2cd3eb82fcfae52","url":"assets/js/2367.40eb4010.js"},{"revision":"4e378eeaaad4e81a75056620399d64d7","url":"assets/js/244418a2.c2a1cae1.js"},{"revision":"0cc295c444ab325acb0397693ad07f3a","url":"assets/js/24a68a77.3713b948.js"},{"revision":"9d741f9a9f8462588fc0a2569d8c9ed9","url":"assets/js/24d8f7d7.5488d529.js"},{"revision":"2661beec71f95e95865baf68ab193523","url":"assets/js/254a43c9.851756f4.js"},{"revision":"7f0f2b604d9b478ae71fd404466ccc64","url":"assets/js/2602.60b57424.js"},{"revision":"cd0712da00dde6261cfcca35cf3e76ca","url":"assets/js/2867c0df.8431a9d4.js"},{"revision":"cc8551360fcee571a8bf25e005b680d6","url":"assets/js/28b71cf3.eafab1ce.js"},{"revision":"5f21544407c501ba38424e908e7ad944","url":"assets/js/2a71d676.efefc85f.js"},{"revision":"9b93d988938f393be7130f56496e8aae","url":"assets/js/2b4e0304.dae74b57.js"},{"revision":"303ecfa3059124f52c7d6850a9f8ad7d","url":"assets/js/2b9de2c0.3ff758e0.js"},{"revision":"a4ed1a859a2145a954aee20d0da56365","url":"assets/js/2ca153e3.3370eb7d.js"},{"revision":"0afc2b46f0add47609c3417db4c252ba","url":"assets/js/2d386ab7.960b5fd5.js"},{"revision":"96e285549b7e2cc43b9e90f529666843","url":"assets/js/2e938706.c722e466.js"},{"revision":"5ddbd7196a04b67a09f3798a89debd16","url":"assets/js/2f39a0af.ea411c8f.js"},{"revision":"25eb03da5d856156f059f0bcad2b4d8c","url":"assets/js/2f8ede37.fbc2fda4.js"},{"revision":"6c9a65e595320ef361630d8206174d73","url":"assets/js/3032.db95cfd0.js"},{"revision":"ee72afcc78a0ab2dccae7c59f4cdfdc4","url":"assets/js/312f6c84.610cbdb6.js"},{"revision":"0c728adcdd704847c6ede5ec8e3fccdf","url":"assets/js/31735ebe.b134a333.js"},{"revision":"86671fe0fc1a3ca2098e559064cb6506","url":"assets/js/33.50380824.js"},{"revision":"255e4e55a6b7600c56662b5bc574a2d7","url":"assets/js/33261842.c7d747e2.js"},{"revision":"60dd76305a96aa17f1d490c59e89e25a","url":"assets/js/3343.f4d09556.js"},{"revision":"1505c4d0d59d5dd5ebf71a08537f1231","url":"assets/js/3349.37b4f8c0.js"},{"revision":"8b9cad049215aa62e2585a55eb7c5257","url":"assets/js/343.4c24da12.js"},{"revision":"45f42eddb95b47bb24f96c4013e5ba1b","url":"assets/js/343bb2fa.ab9d554a.js"},{"revision":"a8bda2704c4d7e5d1eb6746fced8b52b","url":"assets/js/3488027e.d85a563f.js"},{"revision":"b6fe687a5b72373b6fcc6d7fec2d1cc9","url":"assets/js/349.fc90cb7b.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"6f9a769ca46c75e1de7165bd77f45d8a","url":"assets/js/3532.05905ad7.js"},{"revision":"e85b6d1d91d94c90c836649286184ca5","url":"assets/js/359195cb.be31287f.js"},{"revision":"1d72391146d6d0bfcc0cecfd8cd65f40","url":"assets/js/35d30f29.6c0e84bf.js"},{"revision":"f4f457ba1d3f7a5153e7bbad13f1054d","url":"assets/js/36c75202.e137df9c.js"},{"revision":"57723519d5655b220abe7aa44e40f795","url":"assets/js/3749f972.031b5aa9.js"},{"revision":"c127563441d02d72bc4ec7935c5c98dc","url":"assets/js/3851.17909159.js"},{"revision":"fe14ae05a38569392d51cf42e41dc3d4","url":"assets/js/38b0474b.c6434f75.js"},{"revision":"7aab736459c9c301d11dc778b1851ade","url":"assets/js/38b71911.8bd7014d.js"},{"revision":"4802344da1aa346e8d05043e6352fc5b","url":"assets/js/399101db.f06da4b2.js"},{"revision":"b9f7f50cc00666393c810f811c36ca9d","url":"assets/js/3a42456f.dbbc07d2.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"71e2e88022f4667517154212d67b65af","url":"assets/js/3b8970d0.b78d80c3.js"},{"revision":"e56f8962cfb95a0ce6ec913a33d85c32","url":"assets/js/3bb1ea30.9e6752a0.js"},{"revision":"7bceb1d87c07fc46914399858add1ff6","url":"assets/js/3bd1ba02.5fa893fa.js"},{"revision":"1da23ad3c2bb70fb33e34456661b2222","url":"assets/js/3c5393f3.a35f297a.js"},{"revision":"b8aa3e99709f0572c8462808fd016e73","url":"assets/js/3cd38fda.70913145.js"},{"revision":"df004c9695b98a4061b58ec25a58f4d5","url":"assets/js/3cd65ff0.9ecb7c8a.js"},{"revision":"bf0c6d68bcd0d58353f06f2b34929614","url":"assets/js/3d7f94ff.59c97e7c.js"},{"revision":"5700779dc9601dd07ced6d8b13ccec31","url":"assets/js/3dd749a7.5c09eb28.js"},{"revision":"21d796e0ee503949497f0f2755d8510a","url":"assets/js/3ef38818.fc81afe4.js"},{"revision":"02fb8bb7a4a63e530caffb8947c3e4fc","url":"assets/js/3fbeb9b5.ac683c4b.js"},{"revision":"63c0a31ad62847b1dafbf43972ed86dc","url":"assets/js/4009.1b1c897a.js"},{"revision":"76875fa28bbf94de7db41d71bbf6b2db","url":"assets/js/4153.36f77c09.js"},{"revision":"d323d000a72f126c3a51b09b0f1873ff","url":"assets/js/416.5f86779c.js"},{"revision":"a1744649e0df7e247fe177199028ec98","url":"assets/js/41c0ace0.64bc1e6b.js"},{"revision":"207187860ed6d64c58862242621d9dc1","url":"assets/js/425e3dd1.54aad18e.js"},{"revision":"44fff923e07ff5a3f986ce7e0677ec07","url":"assets/js/431266e7.7dde9cd7.js"},{"revision":"84f34b0c59c39b02d9887408f35b1863","url":"assets/js/445c22af.e0b28ff0.js"},{"revision":"4c52e72ee94ce4a74ddefa89bb50a82f","url":"assets/js/44975943.bc99abfe.js"},{"revision":"d0f830f5188fc6d3511b1085bded70e0","url":"assets/js/45cd711d.c89d5a78.js"},{"revision":"bde899d4725b766b29c7358e5ca0c9f9","url":"assets/js/468.ad2fab68.js"},{"revision":"5a21ff75647b5168aae9359af3690787","url":"assets/js/46bf3d5b.de27e1f1.js"},{"revision":"62f53706a6a3ba7d59a9ac1b005b00a9","url":"assets/js/4787.d808ec9c.js"},{"revision":"de804bed642fecca763e806278c70c26","url":"assets/js/4835.4dd63d11.js"},{"revision":"4cd06f72225da68113b9bbad781a45c5","url":"assets/js/4838deb2.c8031abc.js"},{"revision":"581c7c656e3f085327c6f9c2ebb925ed","url":"assets/js/487.311e2fb2.js"},{"revision":"cdc65989218e60d9710f5fd73a177be1","url":"assets/js/4982.5540f976.js"},{"revision":"5275edeabb6c7208b91983059d3590ae","url":"assets/js/49aec60f.c78d50df.js"},{"revision":"a3cc19adff70304343bb8810c1fc8373","url":"assets/js/4beb5b8c.6da5b628.js"},{"revision":"dd3eeb881c0e2c2975d5faac3947de3d","url":"assets/js/4c59ca14.98f0b019.js"},{"revision":"fc842fcbeae4858c713efa8bf80efbf1","url":"assets/js/4c7ea6db.528baa2f.js"},{"revision":"1cf58d613224a3ea79959e05a11772d3","url":"assets/js/4cdf84ef.e2b1d42d.js"},{"revision":"34290af485188337cfc6548d88453415","url":"assets/js/4d27c60c.f47e7cc8.js"},{"revision":"181eaa7dfaf3dc24916269bf15c47af9","url":"assets/js/4f644c0b.696792ab.js"},{"revision":"fe0c5b9ebe3655dd97978bb7a0a02fa2","url":"assets/js/4f8bb2fd.65c4bcd4.js"},{"revision":"1e1f76071fc588fb023a4f19dd003355","url":"assets/js/503.d405cf69.js"},{"revision":"0fcabb94cb561319aa1eb73829f7563c","url":"assets/js/50b793dd.645e0ea6.js"},{"revision":"d041881bff700f829717bcea3a9f02c1","url":"assets/js/51ebfdb4.53d4319e.js"},{"revision":"aee168824e483f510780f1ecf12327a7","url":"assets/js/522fd580.9dfaa097.js"},{"revision":"023cbe83908e5a6cc1a5f467254ee35c","url":"assets/js/532.c53d7372.js"},{"revision":"05c18bc40862a8f901e541a1ed35fbb7","url":"assets/js/5348.a13ffdea.js"},{"revision":"069f846f8954be1b2e73037000698017","url":"assets/js/541d5637.d94086bf.js"},{"revision":"fbf3940f2d261fb9c2db2d35dc666656","url":"assets/js/54a35160.0ac6b854.js"},{"revision":"310e17e63a2d2b0d2a04cfabe51833bf","url":"assets/js/55aaead0.823a3bb2.js"},{"revision":"09a8629b9bf78ec6e92f613e39762d67","url":"assets/js/563b5c65.6ed50fcd.js"},{"revision":"4d39c42ecf187d7ab528a013408e9922","url":"assets/js/572.693ad62b.js"},{"revision":"5806a55f189d1c64077ede4fdf752113","url":"assets/js/572.d1b4cbd4.js"},{"revision":"68e619457e6c61331e469db3e056b925","url":"assets/js/575a905c.ad2c5afe.js"},{"revision":"c2c0349aab0ab3202ca3e4968661f0df","url":"assets/js/57ecc2b7.c95f9526.js"},{"revision":"224c3cf713ea703ed6f463c3dd2f1a74","url":"assets/js/581.5829d7a2.js"},{"revision":"8b2ffbf347f7d0b6ea8f74a7178f95c1","url":"assets/js/581.c589c1f1.js"},{"revision":"30319070f097bc36d6e240f951a3c04e","url":"assets/js/588dd44d.68f58e9f.js"},{"revision":"2f471f5b8a6d73906fce9ffc798c824e","url":"assets/js/58fa4e48.3df74da5.js"},{"revision":"6ee61d55158a8cf7c823b589c0b8e544","url":"assets/js/594bb6c0.30365865.js"},{"revision":"c1e81ba4164b66fe0ed61e9ce6254f34","url":"assets/js/5967.299d1f21.js"},{"revision":"b0a957508361fb7c969700e6d46a7079","url":"assets/js/5a5e1dd9.5e2577ef.js"},{"revision":"ee55b199b35f50d9113882da05aea215","url":"assets/js/5b3491ef.0e25c709.js"},{"revision":"ac0ee5b928323ae1b11950cfb8f1ac6b","url":"assets/js/5cdb4525.a08dadff.js"},{"revision":"eade2cba4501795900cf0cf496b179df","url":"assets/js/5e6d1f8b.e9efd312.js"},{"revision":"4729b8b9c3dd538965f087afdf0b01af","url":"assets/js/5e95c892.14728f97.js"},{"revision":"02a21854d7087e0743167584de31868e","url":"assets/js/5e9c3b6a.dd8f0133.js"},{"revision":"b8da59c6bc3c957e7c7976a27defd3d3","url":"assets/js/5fa838e0.664cdb46.js"},{"revision":"a712cae5d8f3a56ed3f0e59f91813e98","url":"assets/js/602.7b589c75.js"},{"revision":"bc926c8bd513aa904c98521124c3bbe9","url":"assets/js/602bb363.04e3d70d.js"},{"revision":"83353213f05355f3a343fea03b695e26","url":"assets/js/6107.185e6ba1.js"},{"revision":"280c935261e33a23b09c1b3d62b37eca","url":"assets/js/61aaacfc.0857001f.js"},{"revision":"fc1f345a3230101692c3a34cae415f43","url":"assets/js/635cb825.d0dfcaa9.js"},{"revision":"680cbce087cbfda9812854154ed3aa2f","url":"assets/js/6415f59a.05d150ad.js"},{"revision":"1b597a4a7bbaef3707bd315dea021ae3","url":"assets/js/6455.2efdc191.js"},{"revision":"3bce4e7bbc36e7fc656fb40b6a750bcb","url":"assets/js/64614d1a.f3635364.js"},{"revision":"3ebbea923c4c1851c07f578551a832f0","url":"assets/js/6475d366.511e412b.js"},{"revision":"b7a2991b9b951c55f3901e34b89a2d0b","url":"assets/js/653.587fcc2b.js"},{"revision":"e8b750c329dbd385b46a2cf70925c871","url":"assets/js/6557cf1a.1ddc7951.js"},{"revision":"fe98d72d3275be17cf3058c84642f2d1","url":"assets/js/6577a0df.053188fd.js"},{"revision":"48425570e7903becff55dae462511d45","url":"assets/js/65bc360d.e801bc09.js"},{"revision":"ea8360fdbc26b56ccff66ed7afb826e6","url":"assets/js/6759.cf377ce9.js"},{"revision":"cc10fc67d41ada078020ed5a8d704a29","url":"assets/js/6776.7489e68c.js"},{"revision":"3cf8c4df58445fd75029587dd43cd7ba","url":"assets/js/6816.145ac2db.js"},{"revision":"d95c942374242435d36eeff723d1c747","url":"assets/js/681b7af4.07c8c3b9.js"},{"revision":"6a1c8f52237f1305fe3bae51d4a0e45c","url":"assets/js/69df999c.04a73d5c.js"},{"revision":"23939b4d8bbe091a4d89c2b80c564276","url":"assets/js/6ad9afaa.36cc48f3.js"},{"revision":"30e3c13bfaa973287bd8fa3d9f81a5f9","url":"assets/js/6b5d6c58.b9c22597.js"},{"revision":"dd8b604f3c9402e1fe981634c4b5960d","url":"assets/js/6b902128.e8b94c4c.js"},{"revision":"2b99017e8c66714948b46a4ac6524a6f","url":"assets/js/6cd9d647.a6186b8f.js"},{"revision":"b4493da13e90963fe260861116eb8d1f","url":"assets/js/6d6bd066.23265060.js"},{"revision":"c054784cc2a2e809ac8ad39f1c7f72a9","url":"assets/js/6e3d6b93.0120d7c2.js"},{"revision":"3d1bc977a1b8d40df9326fb9f088fb24","url":"assets/js/6e889b7a.fe071e77.js"},{"revision":"c241a7c5b780197e24e35d4fb26d7518","url":"assets/js/6f2b2af5.ce202ece.js"},{"revision":"221dcdd5a745c48038c9d005ba5bf06e","url":"assets/js/6fedb7a3.0986510e.js"},{"revision":"2037db3161a63bdea067ea5bc6bca2d0","url":"assets/js/70321d34.c7525a7b.js"},{"revision":"c53e5d766974fc846310c0a8ea5c2442","url":"assets/js/71bd92ad.7549b351.js"},{"revision":"30feed6588ad002e65cb84f351692f03","url":"assets/js/71c41cca.e9adc480.js"},{"revision":"06f349cbc76d2dfbb94fd41a816df192","url":"assets/js/7211.85218d0c.js"},{"revision":"1f8f4c392532f675fefeb1d8c00cab66","url":"assets/js/72b3e7dc.e1da9ac1.js"},{"revision":"1c22e2d47936ee1849363906296f3e8d","url":"assets/js/72fea898.219a3b9c.js"},{"revision":"7de7628a70f04febc436b3e16f7162ab","url":"assets/js/7343.b0a599f6.js"},{"revision":"d50504ef4a66858633c6485aba5c061d","url":"assets/js/73c38494.aceeda78.js"},{"revision":"d1421b961b158a9b3b60fda68f83b282","url":"assets/js/73f32b8b.0c13774e.js"},{"revision":"ce3db2b2ed17242ee4b98e5a2ae176e7","url":"assets/js/751.15d84e5e.js"},{"revision":"9b21363f6c4cf3e4317c1e3d8d6a295a","url":"assets/js/754296bb.45ab4d9c.js"},{"revision":"726596604769345fba1763027d82513a","url":"assets/js/759.4c5d96d9.js"},{"revision":"025fdec161dd0e51104ab602199fb38f","url":"assets/js/776.6fe4b451.js"},{"revision":"53544cc04ff8f114168c39cde756e32d","url":"assets/js/787.88074f03.js"},{"revision":"d6e74df9d97897f34b7754d2c9879508","url":"assets/js/790b642d.8f99deb5.js"},{"revision":"b44ed8fd46079124a79681518736a7f9","url":"assets/js/79ee951b.4029c915.js"},{"revision":"c863ecc4c99bd16c1378c07c5e8f185c","url":"assets/js/7b35ddea.f871a3ac.js"},{"revision":"f0ccbee30da0e1dd3624f7f49b0438a1","url":"assets/js/7c0411e8.11c00d69.js"},{"revision":"27d23913a25a4701d5d27ddd3c81324d","url":"assets/js/7c328fb0.f37138c9.js"},{"revision":"505605dae7328328c658181235e9d6f6","url":"assets/js/7e75dadf.a67a3c2f.js"},{"revision":"059b0b4df5a6ced1edd80ca57d4d8970","url":"assets/js/806.29dc2a38.js"},{"revision":"f12c8f71b6718624faefc5e6a914de05","url":"assets/js/80f373f2.2e462502.js"},{"revision":"dce180f5303fcc1a9fd52c174b731adf","url":"assets/js/817191e9.7b4552d0.js"},{"revision":"73c0bed5c9aff6d7013945f2bbae75a2","url":"assets/js/81e8afad.1c93023f.js"},{"revision":"a1931074ae3497dd64c889f2000eae61","url":"assets/js/824c452b.a10d56de.js"},{"revision":"25a0c99e8fed30088d4bade32aaacde6","url":"assets/js/82c03827.ebbc6142.js"},{"revision":"4f1f8de23ba0a6b3ac841278c71d25ae","url":"assets/js/83236138.f6f78da5.js"},{"revision":"76e79a7f4675bdb1f5d6e0af7a5ae943","url":"assets/js/835.7d786e06.js"},{"revision":"541e5cecda3e42c159e93e2c5360b5b9","url":"assets/js/83fa3eff.22c165a2.js"},{"revision":"3927a8a6b3479af8a62bc8a617b0e9c3","url":"assets/js/8503.3a2e8de8.js"},{"revision":"a5a7929cacd52aa727ed4413c570b2bd","url":"assets/js/851.a5255c3c.js"},{"revision":"9462b88dcb539296973b87dab9c5e231","url":"assets/js/854b257e.35e28eb2.js"},{"revision":"f268eb08610db326457bc8020cad096c","url":"assets/js/85ccb835.9445b6ae.js"},{"revision":"40f73fc72d213dc21c3a8a1be49be1a5","url":"assets/js/86170a86.ec3c3645.js"},{"revision":"733f9023347de644e50293b8e60da0b8","url":"assets/js/86d633e5.13154276.js"},{"revision":"86d6ea6091fa900794bcc6946ba979fc","url":"assets/js/8751.7d3854e5.js"},{"revision":"53db73ff9c2174c58d440c1142390a15","url":"assets/js/87531641.e843249d.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"85f62fd7c7bb70f394356b611098eb24","url":"assets/js/87d5db97.29b9ad68.js"},{"revision":"aa0cff9f54dd036685856e0d7d03cb8e","url":"assets/js/883b3acd.eb1a1e04.js"},{"revision":"68c6bf343831a84dd8eb6a7e1c29afaf","url":"assets/js/885.6ff5d28e.js"},{"revision":"3cdb7c56292284c7087f546dd7b82409","url":"assets/js/888a5ebe.e16c8859.js"},{"revision":"3f2da66722daa5a5311178f256c37ce3","url":"assets/js/893c6fee.8fbd45b0.js"},{"revision":"ea7769ee49c74aaa1ea0a9c8a52f805c","url":"assets/js/8a578643.14e8029b.js"},{"revision":"d42696ee25f17de8e0b4c6c06069fbeb","url":"assets/js/8b23f58f.b27c539f.js"},{"revision":"a1aab8711b5a41d355f043dd39b91b1f","url":"assets/js/8bdaa531.c0fc4ab6.js"},{"revision":"ca2d79a265a5fc272c0d29353e4cb497","url":"assets/js/8ca7e4b3.d8fc514f.js"},{"revision":"278f0d3824eb55232ea74d802a5c2f30","url":"assets/js/8e0be0d1.35408301.js"},{"revision":"0d7a32a0c74c88a0d72752d7c716a7ea","url":"assets/js/8e6a4e74.464971a4.js"},{"revision":"9d3be4bdef12c5035e2eb39fce63d0da","url":"assets/js/913.92a1c08d.js"},{"revision":"2fed4d03dbd449dd425f7c220f4d88c3","url":"assets/js/9197ae7a.597755c4.js"},{"revision":"2834aefa4b4bc61c39aee88c5b15b42d","url":"assets/js/91e8ffa7.b5504d7e.js"},{"revision":"c75f1506c9352a7c022e90ecaa1e68ff","url":"assets/js/9200.b6389f07.js"},{"revision":"2713056b2b795bf435b819b8e0feb6d5","url":"assets/js/9229f78d.0fccd120.js"},{"revision":"8b3944ccb09510928f558219da298611","url":"assets/js/93456434.d744134f.js"},{"revision":"99654b4b729295773106a2baa9bd6161","url":"assets/js/935.7b4b719c.js"},{"revision":"7b4408bad052198b0d8dd6d887070164","url":"assets/js/9416.e48c7a51.js"},{"revision":"6ebf43099017f627a22e2502cca9338c","url":"assets/js/959b8896.7ebb6a33.js"},{"revision":"08f4773d8df0166cc5c3f9cc663f63c9","url":"assets/js/95bcd1dc.4410df28.js"},{"revision":"491498ce5a2eadfbe55f76ef676a7097","url":"assets/js/95d63b84.f3e0cb00.js"},{"revision":"caabd8818f39e85314c83c0502de4a3c","url":"assets/js/9653.3a8e4bbe.js"},{"revision":"290a52309dd1daf1ffe8eb8cbde7ebfe","url":"assets/js/967.000a8c52.js"},{"revision":"b786726a8df6ada927a218002fedf606","url":"assets/js/9861953a.8b273a23.js"},{"revision":"80a79b0a83d74b9f30f5cface0cb43ba","url":"assets/js/9913.09e6e44e.js"},{"revision":"ad86ceedbc50445f32ff0c53d9d26be2","url":"assets/js/993.baadf253.js"},{"revision":"4875e2eec5df3f2b58dd4f1e4216acfe","url":"assets/js/9951fe7d.8e97a449.js"},{"revision":"d3014a8f65fb57270a6c8ade80fc5909","url":"assets/js/9982.ab6feacc.js"},{"revision":"77162cc394ab84c7927b0419a5bcb07f","url":"assets/js/9ac34ba0.bb5d0114.js"},{"revision":"c1a8259baa72142aa012a26860df1f79","url":"assets/js/9b59e572.ec981ece.js"},{"revision":"60adc766e73e2c1e7359e1aa70455037","url":"assets/js/9b8d311d.d6a8a9be.js"},{"revision":"1e6fad95f5bf3b842511a959fb12fa26","url":"assets/js/9c2278b2.28915aa0.js"},{"revision":"ae5991163043d467bbb19e4b60f4a6df","url":"assets/js/9cd2fc0a.d455078e.js"},{"revision":"bdfc5e535fa1bd6b8d365262fc3043ae","url":"assets/js/9d4488d1.e21d6014.js"},{"revision":"7b2a1122921d5af35017cb705662bfdf","url":"assets/js/9fdc340b.4d4b3b22.js"},{"revision":"7eff68784cd77990aec53966f863c4bc","url":"assets/js/a1e55d50.761e123d.js"},{"revision":"5e515f74a525986de21629671601b61c","url":"assets/js/a21e984c.0fb2e1da.js"},{"revision":"7b6d2aa267be3411d1cd8039c4a8e48f","url":"assets/js/a2ca8fe8.fd255ba4.js"},{"revision":"fb537317756312878344e43b4c6ddf7a","url":"assets/js/a2d5f767.997986a9.js"},{"revision":"ad56fa253e2eed415602f79e2880952f","url":"assets/js/a2fb89b8.2f10e354.js"},{"revision":"10961f33f6fe10b75c4decdc8e95aa2f","url":"assets/js/a305e2ac.b765ba4e.js"},{"revision":"b5a363120cd41f22751e8668572438f0","url":"assets/js/a4c78573.fc152d53.js"},{"revision":"2a8dd7620cc6e96ce094b73f711ca11e","url":"assets/js/a4e7ef95.1a3f36f2.js"},{"revision":"c8f0d28e70ead113badd01d1ec1e5878","url":"assets/js/a62eaa10.5a0230ac.js"},{"revision":"e66f71b8c60739f280534fcfc7ae6b6f","url":"assets/js/a6eaa2fe.ffa7e9e4.js"},{"revision":"212f331e2b2dbbc2254dbe160ccf8b79","url":"assets/js/a7062d46.adf4d455.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"6e0b2e89b41cba83a41f73e7fc024810","url":"assets/js/a757a55c.2bf21d82.js"},{"revision":"bc7214f76960321e113f888a47f459f5","url":"assets/js/a78b3ba0.b333c2ed.js"},{"revision":"3056154030543d6a2e38dbcdaffe6f96","url":"assets/js/a7bd4aaa.0295443d.js"},{"revision":"44f7d324f06019ee84af721080f30072","url":"assets/js/a7ddcfcb.5c7aae83.js"},{"revision":"ffbd64654618cfacd28dc0fc2f92da8a","url":"assets/js/a8bdbcd5.dfbbd878.js"},{"revision":"c59285b7f05234e5dcafe6b15f64e375","url":"assets/js/a94703ab.c99581f3.js"},{"revision":"68ceed073eff3f8cdda21e9b0ae1432d","url":"assets/js/a9c868b9.012b34d6.js"},{"revision":"537684c3929af300fba8b989cd518925","url":"assets/js/a9f9a930.373b8d39.js"},{"revision":"2f0028705bce8c2f1d1bc8d0269d5258","url":"assets/js/aa276556.4eeab3f8.js"},{"revision":"6400d20204700c627cd7ed18a6c2288c","url":"assets/js/aa7b0feb.e37a985c.js"},{"revision":"8330f3a52be02eb859a9cb027584b2bb","url":"assets/js/aa81450f.328c9942.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"4baf0bda83199996197a4de41bd17def","url":"assets/js/ac61b989.25d07243.js"},{"revision":"d1f74acf1567b7414fba12048510b1b2","url":"assets/js/add4bb7a.0fd2596a.js"},{"revision":"819266249d70217a1343000f6d33282e","url":"assets/js/aeb124bd.7bf9471a.js"},{"revision":"c0fda3720aff2f92458dd2b360e884e1","url":"assets/js/af70a4d6.09c4ac7f.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"507a3f5a85a56a4754df65e464b028d6","url":"assets/js/b158dc01.8860f2cc.js"},{"revision":"a65fdb38f3508c8722ff1106f7c82348","url":"assets/js/b21946ae.3bab17ad.js"},{"revision":"90f3987f399eefc759048411dbcc1a3f","url":"assets/js/b222cacf.a9be13dc.js"},{"revision":"5d19e18028acbc674baad39fb188173f","url":"assets/js/b24d385c.2a6f7da2.js"},{"revision":"3f55207d2a6e46cc31dfed38f13dde8a","url":"assets/js/b496f3e3.212faad3.js"},{"revision":"b23cdf86ba4d97844a51f594d69be79f","url":"assets/js/b5210edf.7b8556db.js"},{"revision":"17b3c450c7e8d1263de7f64cfd60eeea","url":"assets/js/b5eeabfa.0c9d18db.js"},{"revision":"4ea8c8660dd5876ad7c085d53686d99c","url":"assets/js/b60da6d7.92d7ef42.js"},{"revision":"1d7407e298dbe31f2079f57e63e9fe15","url":"assets/js/b60de388.5de857dc.js"},{"revision":"53d5d7d5ddae481c722297db937a083b","url":"assets/js/b6386ec9.edf18a8d.js"},{"revision":"92e65d5466547b91d39feed354e638ad","url":"assets/js/b6438b6d.25bb2bf8.js"},{"revision":"052284ec3d61d58448f26f3632afab31","url":"assets/js/b78eb33d.efebad1c.js"},{"revision":"941fff635549a8886a4ab77f882656b5","url":"assets/js/b7bb49c4.ff5ebaf9.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"b7432bae326645b4c6ad0df88609153c","url":"assets/js/bbd444ff.325e902c.js"},{"revision":"24c47733e8a6ffdd73c963c9aaf7ea40","url":"assets/js/bcc35f8a.87d12463.js"},{"revision":"5851be300bf6dc5385a7a0210ebec4fd","url":"assets/js/bd760347.4b5646c5.js"},{"revision":"c374f792657f5e3c647389f4b8a55068","url":"assets/js/becf8c88.a6ff168d.js"},{"revision":"a37d004c19c6adafb34c3784193fc01a","url":"assets/js/bf3ddb91.bd5edfd7.js"},{"revision":"07c7e7a23ca137446adeadfcfa322986","url":"assets/js/c0dca479.56b4f6bb.js"},{"revision":"cda4b6112ab1b538b27265e81cfb7506","url":"assets/js/c10e86aa.4357cf97.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"dd967cf315f1aa21d42ba295369f23f1","url":"assets/js/c156da02.53c814b0.js"},{"revision":"091dbafd9a8e0c7dbc8f0386f4c12650","url":"assets/js/c4dcc6dd.2b2284f4.js"},{"revision":"7f4dee9d6193a4a4ac9463077c3e944d","url":"assets/js/c4f5d8e4.95b13787.js"},{"revision":"5b24f4cb736cb95d33f08eba1f320d3e","url":"assets/js/c5f4348b.054dd1cc.js"},{"revision":"e9406439e09ff883e040439dc6a211ab","url":"assets/js/c72cf9c7.a46848ce.js"},{"revision":"c5a44d02a8ca5318aa43dd3e2cd14b21","url":"assets/js/c737e1a5.f53e9036.js"},{"revision":"72c8edf3c54c5a8c57df6dd2c7dc5e94","url":"assets/js/c78ecae9.1ce1b679.js"},{"revision":"26d64f7546516a9c0af2fa575f13347a","url":"assets/js/c8018499.3b2c0520.js"},{"revision":"162de434eb40ada4cc13264e7f1c4db2","url":"assets/js/c84a9914.a71ad99f.js"},{"revision":"e479d3d09167154536ce4e00e943a37b","url":"assets/js/c8a93e67.e76a34aa.js"},{"revision":"886fe8f15a15a25949b49e5454fb2fa6","url":"assets/js/c9947f43.7dbbb8b0.js"},{"revision":"76c16e077add8d09d03bbda1e68e6dd5","url":"assets/js/c9a1eaa2.4ef0b6e8.js"},{"revision":"a7cd9111f61ebe4e2ab2120d025ef39c","url":"assets/js/c9ae34fa.7c0a4572.js"},{"revision":"4d7cc06787746abe9974dfe3d8db9f01","url":"assets/js/ca378953.8c784a50.js"},{"revision":"e78353dda6cd9476f963b1459ba80334","url":"assets/js/ca8a1b2c.ecce66f9.js"},{"revision":"d4ba947dc4d9bf1cf831d5819b459942","url":"assets/js/cc2fcaab.4660027f.js"},{"revision":"53733a7726bff917d020466124ff1a8c","url":"assets/js/ccdb3c45.cd5aec82.js"},{"revision":"452034f4efcb8224532e3ec7a6f45f1e","url":"assets/js/cdc590f8.f237356c.js"},{"revision":"0647ace82d7c443e0664f57be9e57bcb","url":"assets/js/ce7e7ba1.df320205.js"},{"revision":"ef99d8e43d7bd1ae872c6b4d757a1c6e","url":"assets/js/cedf0e63.1a33016d.js"},{"revision":"6455ef4693100110227f781dc5a23d80","url":"assets/js/cfc0d51c.22f98e6d.js"},{"revision":"e8fb79d4fd987672777de9549f326c85","url":"assets/js/d00b9fd9.df0e4aa1.js"},{"revision":"5f7b8860abe7f814290cd4e4ec53c35d","url":"assets/js/d07a3d34.a973f00c.js"},{"revision":"da9e7ebf785326b5974ea0a4adeda042","url":"assets/js/d0ab59b0.e6a37069.js"},{"revision":"f24435c8e90755fc4d782fb976107d04","url":"assets/js/d152d6b2.c4166b66.js"},{"revision":"e437a8d34218abb3148a3ee6539dedf8","url":"assets/js/d26b0f2c.e9fbe6b8.js"},{"revision":"d4597a1de3b325b7fd0dd68a7182fa07","url":"assets/js/d2a9048d.788eefcb.js"},{"revision":"f4ac11bcf1e17a407eeffc34589150f3","url":"assets/js/d2ba5076.2e975487.js"},{"revision":"5f313a5e2e4ec79b4050e2d3c0556f85","url":"assets/js/d3585a2b.15674685.js"},{"revision":"dea3bd155d74ad46dcf2b477fe1fdb7b","url":"assets/js/d45ccebc.2ddca811.js"},{"revision":"8809b8ef935849e48dcbb9d898946f29","url":"assets/js/d494a195.56464613.js"},{"revision":"344c9cc00355652cabbfc3f655ee2bae","url":"assets/js/d63ab801.5b698ad5.js"},{"revision":"a06dadabece8ca0de675ae1899c821b4","url":"assets/js/d89bf822.694639f0.js"},{"revision":"f352fd2af8d355dbe403f31328228ddd","url":"assets/js/d9cff955.7843836d.js"},{"revision":"c895406248693c0e20b94fcfd84dd877","url":"assets/js/d9fe55b2.240a2eba.js"},{"revision":"e8fa3d50e2a07132f49752d758f91b4d","url":"assets/js/da4fe776.862605e0.js"},{"revision":"186a07ab6aeebd8461d4598ba133b462","url":"assets/js/db6afc29.168047d7.js"},{"revision":"6aa6f8b2aa3e835aef605e684a7ffa3c","url":"assets/js/dc030738.23912ae0.js"},{"revision":"37a3691139b2d199a135dcda3049fca2","url":"assets/js/dc109391.4a63a46e.js"},{"revision":"dd31dd560ed9c6ffb5b2a76474c9d97f","url":"assets/js/dd1fbe6a.8891f568.js"},{"revision":"3cba3a7e0c1cdb5982b72e314b8bc550","url":"assets/js/df2a4a59.b11cbb92.js"},{"revision":"0a179f00bef26c3dd97ff6b6727a7d28","url":"assets/js/dffb9609.af6cc596.js"},{"revision":"a02709f7bf1904877495fbd265f5ab74","url":"assets/js/e10e131a.1d40fcf6.js"},{"revision":"fa5597210f14488008bb3f9ee23016f9","url":"assets/js/e17e6af5.fa09d0a7.js"},{"revision":"0861c5226405464fad95d2a298c4f49f","url":"assets/js/e1a53158.2083126c.js"},{"revision":"e406fb7d716a918c3f05b354b566b086","url":"assets/js/e39d40ed.e761c893.js"},{"revision":"37a006d3482bab07742cbce592d311d3","url":"assets/js/e3b728f4.f2b292d0.js"},{"revision":"ebf22d32f57614e66f29895709b261a0","url":"assets/js/e3cb94e1.2f833098.js"},{"revision":"d57f9f6a3a0e66e9c4ae4fd094e792a5","url":"assets/js/e47fd75f.9667472f.js"},{"revision":"f059c2a1a9dec65be070bb6b4f1b60cf","url":"assets/js/e48b3322.0f1514a3.js"},{"revision":"c2274ffcf72e7908eb27d9236e78bf54","url":"assets/js/e4e92f42.a891c027.js"},{"revision":"89c7fdae66b61529ada19bffb0db71bf","url":"assets/js/e5f7cd7b.1f6b5961.js"},{"revision":"6dc6bf472f8e9776b0925da37a38a49f","url":"assets/js/e6501e5b.349dc219.js"},{"revision":"e4c1e5790be2a3e73ee76594a2cf028c","url":"assets/js/e682932b.ee5306f7.js"},{"revision":"f7f2570f57f00c1382176abb81305082","url":"assets/js/e69f0a50.f82ed16f.js"},{"revision":"ccd8b648816838c295683c157fa468ba","url":"assets/js/e6b53073.2b1420da.js"},{"revision":"f9a6cf3386e461a14bbbe3f021159f6d","url":"assets/js/e76d69e4.5257ace7.js"},{"revision":"386bce6476997085f1ce9b3059f89b04","url":"assets/js/e87d3b80.ed84b2ea.js"},{"revision":"4c631ae41d381dbce8e27b18e4314f0d","url":"assets/js/e8d5b74b.40d88011.js"},{"revision":"35d5cb8cad035826f49152d0f71e1c74","url":"assets/js/e8dd6634.687ed4d0.js"},{"revision":"5701b99735a62c0672e02d36c98bc881","url":"assets/js/eade58ca.607bc6fd.js"},{"revision":"1d0ac1c36940486852d67b0499b7dc4a","url":"assets/js/ed38b210.44027b2a.js"},{"revision":"156ad3f881133fe9d0d0bf1c76b0032b","url":"assets/js/eda49e41.53abb01f.js"},{"revision":"9e54343913661b1f92ca24f668839677","url":"assets/js/ee84ef31.4bfc3889.js"},{"revision":"2dcd0882ecb25f57f33ad42657934ddf","url":"assets/js/ef72e420.50aec282.js"},{"revision":"70df57121dc9719280338aafe88c3e32","url":"assets/js/f287ed2c.afb6b96d.js"},{"revision":"a8b5fe66ed7ed44f647c94fcf67c8fbb","url":"assets/js/f36074be.aa801f57.js"},{"revision":"a4195baaa0e29990a69e7d1637e4ca43","url":"assets/js/f3937ce2.0a6f1900.js"},{"revision":"8d54715ef82b97f1fe290ec8b0208999","url":"assets/js/f44068e7.7845c3b9.js"},{"revision":"79350a458a9af750cfab171d2812540c","url":"assets/js/f4e5f89b.ad54eb69.js"},{"revision":"06e25882cb4590627420921eedbab9cf","url":"assets/js/f58ceb15.4ed4206b.js"},{"revision":"1fbf50607622ba94addb959a24d60da7","url":"assets/js/f6420a7d.386e626b.js"},{"revision":"d11ac3d8c21c5b4a21110a0e2a2e0e19","url":"assets/js/f7e672b1.4d88c83c.js"},{"revision":"abc520171c9cf1cd29188c3257a2f308","url":"assets/js/f83b6261.0fe294bc.js"},{"revision":"d2cddf0c9ae289fca7b9262708e22f5e","url":"assets/js/f9dd20e8.fda9769b.js"},{"revision":"748f1fd32153d7ca38f530bdf22ff6ee","url":"assets/js/fa9e7027.ae2537be.js"},{"revision":"de5d909b58f43457c6e71eca7718ae62","url":"assets/js/fb274994.81851154.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"9c67cd2aa0b1d609c1dc6793815f80db","url":"assets/js/fbcb1a27.24d2513f.js"},{"revision":"e438ca97c131f0d69fd689bfcd091be6","url":"assets/js/fc419e9c.0d8a150e.js"},{"revision":"9906fb26d87117e456bb65fe50c5ff60","url":"assets/js/fcaab584.90dd39eb.js"},{"revision":"1b1e8a9233fcee85821a572a351cd742","url":"assets/js/fe5e75f3.ea59e554.js"},{"revision":"45c42bc55d19a55a7f278583bda380bf","url":"assets/js/main.5e15dc83.js"},{"revision":"1a8b36af90c106b1ab6592f34c62c98d","url":"assets/js/runtime~main.7d621ed6.js"},{"revision":"cd93c46f4190e2c4deecb1003ba5b4c5","url":"basic/index.html"},{"revision":"84331120a897be672aa2b3f831c54a0c","url":"Bedrock/bds-core/index.html"},{"revision":"bd8df30317c1fd4a2d503164792600b8","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"a1ea7539f9edd96b52f04212aa1e73e3","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"ed4e7f3f01d76071c46b11ad0c3709c4","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"dca24cc27e051fd893e3a0f8340f5930","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"69c80997f5934aebc41557b4f6a37c64","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"0ff68fbad1a4e2546c77dcfc3886db8b","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"1f50c7b716d24a649caa92c73c458327","url":"Bedrock/bds-core/process/index.html"},{"revision":"52ea518decc8c54725ae06d985a50611","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"4743bf8c5f8d22675554b1af36cce9d5","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"1ee3eb5fd7f8914e3daee0a49255639b","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"fcbae4d577819cad2f00600ef4b96c29","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"f44f15c68c230fc8f02b6490ecb9a513","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"9369185c009e69bda767a893dfd329b8","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"82bd29802361689212f29aaa8578b1ac","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"2396baa0671dbb133c860f7d279e2100","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"73f5bec43cc562b2a468105d9f698394","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"eec4939add0e91f46865c55af7515ae4","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"ee2e0dc7605dc8f9d807ad73eedbd7a4","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"2998c711052288f1a75805444ddb9fbe","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"b341c4fc4444eab527b1a8182a2088bd","url":"Bedrock/bds-core/start/index.html"},{"revision":"3ce6ed2c3269b80b981c55782718f890","url":"Bedrock/intro/index.html"},{"revision":"bcd6f195c1ae6fd907d8cd49923b2d10","url":"Bedrock/nukkit-core/index.html"},{"revision":"30e91d420b2e56958b80c8357eba8690","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"ef6cfed32c9c5e537a4299aeaab0ef64","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"cd19ed54d052b416c069aa372acfe95d","url":"Bedrock/pnx-core/index.html"},{"revision":"3d0d950eeb3c6e0ad4e4079eb78a0712","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"c95aec1c5b764785fce0f3fd31b1986c","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"3cd867cb913fa8cfc0cc49439e0ccfb5","url":"Bedrock/super-basic/index.html"},{"revision":"0787a77ccf5b03d442e440832b50502f","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"54661a564c5a3e6f3735849ccb5318bb","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"ad3e5437f6ee3b80ad78f439630221dc","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"7c1b75305b1dc0372f647736766efbb3","url":"Bedrock/super-basic/version/index.html"},{"revision":"4b208b11cc7264ef3161120f947f278c","url":"contribution/index.html"},{"revision":"711e529ee9f754bd1e9899d55cb310fb","url":"contribution/todos/index.html"},{"revision":"517dbe0733a60eaf404ef1960c71adc4","url":"contribution/writing-specification/blank/index.html"},{"revision":"8c38c92f9680f5ead66c4c83a03bb49b","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"139b5e2428178e8e0f41eeb0f1b4e7f9","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"fdb011bd42e8d1f90f06b9b068a9062b","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"09248f63815d687f6658e83409ddbf60","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"1b18abba0a0896112afcceddee038387","url":"contribution/writing-specification/reference/index.html"},{"revision":"c92c8a3b8240ac45a19e7a7917602745","url":"contribution/writing-specification/text/index.html"},{"revision":"bfac012bb540c73c6675cad3fcb104a4","url":"contribution/writing-specification/title/index.html"},{"revision":"c86c15e250c962dc85e395c3a2b5573d","url":"contribution/writing/index.html"},{"revision":"01885dbb6f4045715a8075d1a05dabb0","url":"database/backup/index.html"},{"revision":"14b3bdbe345cee91551169489bef4159","url":"database/configure/index.html"},{"revision":"703d71b176f693949cc891e43e960e25","url":"database/index.html"},{"revision":"e6a7c72e02698a9025ddba9d810d6980","url":"database/install/index.html"},{"revision":"dd58f9da5b204e2df300f061ee1857ed","url":"database/manage/index.html"},{"revision":"52436e48cb8db5a9f60273586ffcf01a","url":"database/uninstall/index.html"},{"revision":"64bf4d6c519ed403ae07dd78afe937cf","url":"deploy/index.html"},{"revision":"56ec5a248f7f311395a1ce12dc35b077","url":"index.html"},{"revision":"a1d4ab05483ad4079e617626cfcb8d44","url":"intro/index.html"},{"revision":"9c92461d1590bbaac31ce16b0782153d","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"703a690d276356f405a4a08ac7d3c065","url":"Java/advance/bot/index.html"},{"revision":"16234744169c66f366031d887110d86e","url":"Java/advance/chinese-username/index.html"},{"revision":"82d98ba60564091b319b995a0d55bf21","url":"Java/advance/command.yml/index.html"},{"revision":"067f0239d49b82033a4f07bf66527909","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"ae50cee961fd2313665d15314c416b80","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"423c3f98eb370563006485c03f227c17","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"861a314adde81f2426ccef9531835802","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"f3a745014a201a22479901315dcfb929","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"54a28db24d8859f56cfd9fc8429bd829","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"dd327781983853ca5efd3d8d83cc5fe2","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"00ee697230a8eb6d18b402565709508d","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"4d4a4f2a371254f4906510216d9cd3e8","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"a7b813b91b8d0fa68b75fb4fd281c8f5","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"c81c89d94d605348b6a6c66fdf73f602","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"1d9f081f81e1e3632ba8b1b4c0fe1036","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"45d02d789f6b46dbcdbbc1b74b567d6b","url":"Java/advance/database/index.html"},{"revision":"0eb56cd53564fa91b1dde78c7132adb6","url":"Java/advance/folia/index.html"},{"revision":"a577d6716436563bb4167bf7345f1364","url":"Java/advance/format-code/index.html"},{"revision":"23e30111145df7d6e8eed0203ab8690e","url":"Java/advance/index.html"},{"revision":"51929ff5b27027b4417938cbeaff97b9","url":"Java/advance/kether/basic/index.html"},{"revision":"f0e34e2fb82853abfef1ee02cc9a8397","url":"Java/advance/kether/idk/index.html"},{"revision":"0ac8461ec7a4077ea6da721607b64d65","url":"Java/advance/kether/if/index.html"},{"revision":"70ca7f1c99bc99bbdd697d2d398ca35e","url":"Java/Advance/kether/index.html"},{"revision":"1c59c9b2b8cda323680d9957523a8341","url":"Java/advance/kether/math/index.html"},{"revision":"6a56fc897d8ff25cfb889a023ffb93cf","url":"Java/advance/kether/preparation/index.html"},{"revision":"953e0654cad195b7ea8e353b4da900a2","url":"Java/advance/kether/variable/index.html"},{"revision":"58e81f53a0bf26c69d54d77fd3fb13ed","url":"Java/advance/Linux/index.html"},{"revision":"04524cbc01e717502945ab1772872aeb","url":"Java/advance/loginchoices/index.html"},{"revision":"9af8ec143af21bf2b6a66106289cf5d9","url":"Java/advance/MiniMessage/index.html"},{"revision":"cdb8c920a0bc9ee7694cba1eb53c6fc8","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"2a4265b38a562c52bb57f5304361d077","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"2cdfdf6bde79648ce9f80a5e4e918573","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"e65f6e37f919f3266ac5db3b4857958a","url":"Java/advance/YAML/extention/index.html"},{"revision":"36f04a58bc5bd13b7f8dec2d2b66a801","url":"Java/advance/YAML/foundation/index.html"},{"revision":"896d9ae0b94b8132ab2ee098b00df7d3","url":"Java/anticheat/index.html"},{"revision":"579cc10131aae0c64b15d08ab70644fe","url":"Java/AntiGrief/index.html"},{"revision":"b51e06e86027b810e1738faaeda08dfc","url":"Java/basic/index.html"},{"revision":"3f96668b85e00a2f6cd43ee7aa10e5c3","url":"Java/build/index.html"},{"revision":"5d1f0e4ce4eee04987ce1ecc54d2771c","url":"Java/bungeecord/index.html"},{"revision":"89a760dc692af5f0494318652be36ed9","url":"Java/category/geyser/index.html"},{"revision":"b9e840188fc12aef590c8727e593ad50","url":"Java/category/placeholderapi/index.html"},{"revision":"491d4ede3561b11245996ab31cc79867","url":"Java/category/入门/index.html"},{"revision":"412a48f04d3875193e75f3b4fe83c524","url":"Java/category/进阶/index.html"},{"revision":"8a26066ebfeca2410a0407f1a8790419","url":"Java/chat/index.html"},{"revision":"79466faf5f64b8dcf03834be76fec8c9","url":"Java/command/index.html"},{"revision":"383bbfce1a2dfd9988fec374f1bdff94","url":"Java/cross-server/index.html"},{"revision":"070f3822e7e386974d8e3da3e16aa0d6","url":"Java/cross-server/plugin/index.html"},{"revision":"2900d3fd80ee245f2e7f529af45acf29","url":"Java/Essentials/index.html"},{"revision":"b601cab51182388b3a5c95365097b2e4","url":"Java/Front-Plugin/index.html"},{"revision":"34cee3fc35393f00fd779f56ea6ed22f","url":"Java/game/index.html"},{"revision":"95bb3875dd2742ebd41eae87f0945210","url":"Java/Geyser/Upgrade/index.html"},{"revision":"8b58590dcfe545cc3c6413a2b085d3b2","url":"Java/intro/index.html"},{"revision":"c968a2bb0fa6cd4a33a2f917deadf8eb","url":"Java/items/index.html"},{"revision":"1c7fb6c118ac292a6dc9229eac31e9d3","url":"Java/maintenance/Java/index.html"},{"revision":"f950cfc5c508cba630e1c6b4465f8418","url":"Java/ManageTool/index.html"},{"revision":"3557025a4615e32e2c4fbbd3b0db6c2a","url":"Java/optimize/index.html"},{"revision":"2cbd1031c9556adc9cdb6b59ff0b19bb","url":"Java/optimize/jvm/common/index.html"},{"revision":"0a5950b9892a2b9379783637588b0fb6","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"8a50377188bc46ebdd988ee1171cd04f","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"e42ec49223cbe721a3985f55d99f36fb","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"ac0d867cb9d1bd78dd160afc8d04fc3e","url":"Java/optimize/jvm/index.html"},{"revision":"890b3eb853feac767d5cb1ca03fd643e","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"dbff9c94cd7781e2827d30e7ddbfa642","url":"Java/optimize/jvm/zing/index.html"},{"revision":"6d6c55637dbd71c14f47ec8830cd517c","url":"Java/OtherPlugin/index.html"},{"revision":"32f6e1b340191a820e5de7a442dd080c","url":"Java/permission/index.html"},{"revision":"add86014d343a9e9bb2ea49f2cd8f962","url":"Java/plugin/index.html"},{"revision":"bbcafa75a878eac1df15c75e48722a49","url":"Java/PluginMagagement/index.html"},{"revision":"59bcc3da5c4325879a858e047b811881","url":"Java/plugins/other/Skript/index.html"},{"revision":"66287552c53e47a9d4d5d9d338fc6635","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"664ba5edba3636d28e1d189fc5c889bf","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"2307ba0da684218a0ca5a80c150d3365","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"ff05aa64223128f8499303b834093f02","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"4bc46f5d7c0755da721ca30d8f0a4160","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"d188e8721e27d9b87262593dc31d5526","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"310a6e3a13c79fc36ccfa440f02f1bc4","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"9f329228d2186110584321fbd01cc1b1","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"03a29b9623b9a439f5e0868565fbe35c","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"7e2c746709181916203188820760b561","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"5a2c1cc61abd3e7c378a82ffa54a50c9","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"fd9b16aa618bd63c932385978d036a6c","url":"Java/preparation/index.html"},{"revision":"c169ff46ac1aa5e7b5e4db6805142374","url":"Java/preparation/text-editor/index.html"},{"revision":"11ace046536aaa8936f956f581e9638e","url":"Java/preparation/websites/index.html"},{"revision":"f14171e8e7f40b281c0db83e7058de6b","url":"Java/process/index.html"},{"revision":"8b662f404604181bb6cfcea03fd72ef5","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"72a6b5d59c04799cc417b639f59143cb","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"e18681549aeabf0cc3e997d42b2ccc5d","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"b9321d3e89d7e5fe78ff01b3e6c5b1cc","url":"Java/process/maintenance/backup/index.html"},{"revision":"18ffe919065b040b6180a38a6904c519","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"73493c54afe526f705693f7bcf64fd06","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"c66e1c3aeea93ddaf9d5e78e30bdd691","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"ac69c51f7dc5bf2980ab0e577e6aae81","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"801b5f5b1cf7a9ab83b09f142e8b4112","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"29478333542f6e9c53d158de33eb11f3","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"56b2033a595672df3d930c2a10637107","url":"Java/process/maintenance/remote-manage/index.html"},{"revision":"52399d90ed4d208265399c067810c758","url":"Java/process/maintenance/update/index.html"},{"revision":"4bc1f38e18b59c1146583698a9f4d2bd","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"85a6f449123f12e3b5018f206d42353e","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"b7bfae1c085517840e43da8a3e2e4293","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"f6746e7d759a4cbcbaac7672c27c40c6","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"b98509181ad95fa3d6ecd5f61a4d5c52","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"95dafe5f1ff5e52a3eae0c0b00bffa70","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"7d7c5db62710ad97a7a1a310acbe7e55","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"476c9c01352b293756facd06cf8f5e41","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"fcfa149ba4549cbb8fc0a463109573c6","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"f67cfa8f3044942d8e7f7bd750190f5f","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"b6b6c8562d7c67ea2cd66a2a48fd0f03","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"760d22ec6633da5d04e2d2d103cc7a54","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"462c7a1a345bc7af604507dec8386c65","url":"Java/process/mobile-player/index.html"},{"revision":"58a9c80e97f3e8f5765c34e2098defe4","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"60600138b01ce23786a31f62da6d7f52","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"f956431e5b0cce56865f9501675f62c7","url":"Java/process/plugin/config/index.html"},{"revision":"46707752ad148887f42f4de08b254d25","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"9c65f9ed38f8b5fb334821c6c055bac3","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"eaba7fbc62fa3082652801b382274afa","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"b5d1e05b04ed2b43f77cb9270e356cb6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"5c9337bd05ef1f1d265c7d33cf08ff0e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"19b84f8db091f387c7cdff737f1a4911","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"4456e9886bbe8ee68b6f8d1fb834ab32","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"bbf3536ff1c204fb753c521dfc69c074","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"afdb2f47f59444b5c54cd06cf4148ab8","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"a82498b78e030dcca0ddcfcaf6b1cc57","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"b3fea2c3c6559130a9ae65f4fca1ba5a","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"b9555835f4e641c2d844fd8246d97a12","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"33d555e4b4f4fab1a045e6460b878d54","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"efd1aab926a4de5e86f641c51bd3c00d","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"7c9e7ab920cdd8596d2cf5ce157e7f42","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"932e8aa1e27cc192174a2677b49a0d03","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"6ade2734c37e5b369c45fa401cf34b2b","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"a3da6e7a6418f350685c000f91b69c74","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"2c3d59c11ed4b948526e1a84b6cb4e88","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"13946ae46dd56e16652f2b16fba24108","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"f2ca81a2f8f3243eacf5803831611d57","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"3d07db69a83d77aeac2b2888811c426c","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"3e0fb9c5f05f03aa96bbc2d412ee73d1","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"820486940e69c0da4c355026de6aa3f0","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"62c95a1acc6430b4ab3fd183e53de44e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"bace744d3522877eaf803ced9e2940bf","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"c392fa27c4289e9cddb7d40fcbcf19a0","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"3cb47718094bbbd5975b5b93ba35688a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"f9e83800bd768db044e2ed35df96dae0","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"cc9c406d402a9d59264e27a6a17c3cdc","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"a99556999d5234961d80e06fc93fbb59","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"cb47635adcc6f5db7cc56b33044ded1a","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"1e0f3aeb8f221deca4545a71cca57c87","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"106be22fa37c7b20cb8bd207ea782425","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"4b9d95142899f393e60a956d76bcf52a","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"9f2debf74f7c2661835dfd2d00cd9c47","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"42dfa332d884e1e54f463c1c8b74bd4b","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"677c49811c5e9eb88671268e82e70f15","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"bfb3e7a8c6ae588bca0140b2100ded47","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"d4a02dfdc08073df62ea0132082c9345","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"65722093ab162428d2c38d541d4ffe3b","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"5d9de4df845425253897b4b39742c20d","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"54bca5d2afc4466127432284ff19abdb","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"acb1d1d2026924ccd2757edce7efa460","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"0c278147a36e92d245b05871582a8b78","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"3f542179214aa1bb3d74e2a38dd29fd8","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"6c136facbb11e4110770e5323a96a0bf","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"d53eda6476c83b39d34ce6d0ca12dcf0","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"91697a21e5c48870d541db842dca6f62","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"b8cdd02fcbb4467b1e4510359935931c","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"141c3b77a6570c6a9ea7267d75b372dd","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"805316a5c32cbebb6d808754c6ffde8b","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"14808b58d468580ea77a9e015eb3bd29","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"26308ed4c3ad948d3ab639998a03cb0d","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"e5c287274078b77382675188637a227b","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"8be76c96e333355566ea51d2b121b58d","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"a568c7383dd3734587401115d4b2ad96","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"95a5a0ad0da2d07a408446f964ed71f4","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"207e47eb504b57ef7bd37314022cd2d2","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"dc1c727e57b7a52789fe780e86f93366","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"d04ff7764e02f5015d4a5485ee0cb284","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"a057fce70b6b055b2fac54e57cf08e70","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"bb3db55eba2ee8e862bd033106c45f63","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"c62bbf558b720fd07e5f22bd435f3e20","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"67ace96633aa26b12ee3f2fe6fd0c336","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"d33d4616797864f36967d56d6d64e527","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"26ff5ef76272e86873901f43c458afb0","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"ae5a79755caa3d090a2ed1198113802e","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"f51fe71b9c5ccf135302ee184f57ad1d","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"fa1403a186701faa18f7ce2d60db405a","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"7f6841c80eb5747e35a13a14cd017720","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"4150a1ba0da09d73c741ce4f190d7826","url":"Java/process/plugin/plugin-backdoor/index.html"},{"revision":"262b763c388645741f262409cb1930b3","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"3a1660a068286641d9c441882a885e02","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"5a12c5d07da88b04d2d16f3b9e26f106","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"e3cc52e1711381bd6dd80b55a456bc1a","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"cbe691b38bf73c55c1d8f326a0dc0598","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"b70fe092d2ef49553299d0bbeace72cf","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"ba7aca6f9b16a89b4ad004aae0ddea50","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"777cf926fd43b6bb1aa1613aafe8b11c","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"a01eb749bf89430c43891a55ebf80355","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"5645902919bb000fd53a70fe05bd995c","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"020796ba1c6614acaf39ba3a580555e0","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"919cab18cca2336e83b1ce4d695c77fb","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"0363e8263d0bd659a3bfc87783b6090d","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"83152a7a610268c1f5809c4ec3f5ea35","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"37dd1fa8f44a1d6fe93c6023166e6cbb","url":"Java/ResourcePackManagement/index.html"},{"revision":"c45883ba00261ec4bc03e537dd385adb","url":"Java/services/index.html"},{"revision":"3fcc7c94485457bbea7fa0c17e3a8115","url":"Java/Slimefun/index.html"},{"revision":"9e8a43003d863c58b52d89af9f4be9f0","url":"Java/start/ask-for-help/index.html"},{"revision":"8239d3156cfcbfc1684c5860b1c3a248","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"db59a9cddef3355f34b7dda2195858fc","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"8f183e782e9c9efc2afd9af5cf69072a","url":"Java/start/basic/server-management-command/index.html"},{"revision":"3ba58879fd757fdc1a4eea607cea38d9","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"e3b6bce25252bcbd03eb98f1b339579b","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"084b977f1880c751c62eee0bc78e9c73","url":"Java/start/basic/what-is-log/index.html"},{"revision":"b98d806ff1fd32a540df65163656f87f","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"5c4bd2d9e482ac6984d31ddf4f239a3d","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"a6777d244e68d5150bc89b4194a1d5b4","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"c97bf030cf169301fa2937d949359dc4","url":"Java/start/basic/what-is-server/index.html"},{"revision":"44920719b1f9b058412eca4cf3d2b926","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"6679d123b7a2ff84e14931d9eb756951","url":"Java/start/basic/what-is-world/index.html"},{"revision":"93551e222e4f3638a70a181746e5b4b4","url":"Java/start/config-server/index.html"},{"revision":"ff4ed4da1c8eb14560acab0379bdadcd","url":"Java/start/connect-to-server/index.html"},{"revision":"dd5eb309a2cf0f150bf62784f29c70c6","url":"Java/start/deploy/index.html"},{"revision":"2178681ce556775ea6e50adb8392e9e4","url":"Java/start/index.html"},{"revision":"ac1334f8fe0486aec8098c5b33bd21f6","url":"Java/start/install-server/index.html"},{"revision":"c2f7055579f48ef80643a938486eb3c3","url":"Java/start/launch-server/index.html"},{"revision":"193f95bbdf03ae5b7477890758ec5c4e","url":"Java/start/server-core-choose/index.html"},{"revision":"22d1acecbbd538bb2fd2b6f61b7c7aeb","url":"Java/Sundry/YAML/index.html"},{"revision":"03ee4bd97806dc7fc2168ab697e1f15f","url":"Java/velocity/index.html"},{"revision":"251805b21459e4701a2b2076f975751f","url":"love/index.html"},{"revision":"6de37e06ad5037ee5a0d842abf1cfdc3","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"0b5c1bb2c5cd7020ac89b95e6f17c3de","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"1a69fbd00007e424423315c0aeda9870","url":"preparation/dumb-script-using/index.html"},{"revision":"fa346756025541cab46b5a1eec1aacd9","url":"preparation/index.html"},{"revision":"a9ca7ee4caa0906624c2e62c9c44517a","url":"preparation/text-editor/index.html"},{"revision":"764e58bc474f647017bc1e2210a1ccd1","url":"process/create-art-assets/index.html"},{"revision":"f16e3dc75a4ff328bc4edfc24135614b","url":"process/dashboard/index.html"},{"revision":"1f24118c22e08f581f789bc795f03b7e","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"75566a74c6d7b406753dca8c82e81baa","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"68454710f5292af49326b361f83003ca","url":"process/deploy/intranet-penetration/index.html"},{"revision":"4ca733786eef27095f0010d667658442","url":"process/deploy/optional-mode/index.html"},{"revision":"63a501c2c72396c4c95bb6743ea4f125","url":"process/deploy/purchase-server/index.html"},{"revision":"a78f26274b97fb1e12f12d9d594999ff","url":"process/index.html"},{"revision":"53ffdf383b771aa37af496d71eda9e56","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"1aca7a67b2782eb9e5f7f2cfb3f27644","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"55859a3023464d47de1bc2855194c11b","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"fe322e951663850cd700571d274fd879","url":"reading-guide/index.html"},{"revision":"aac8ebf6f6d708588c2a45ca438d7e9d","url":"search/index.html"},{"revision":"f003d29019af8a513a6516d042dc0ca3","url":"services/index.html"},{"revision":"e2b421716355dc41558faa6ce99ccabf","url":"start/ask-for-help/index.html"},{"revision":"ddc22c88063a38a5d11fd32529f52ed1","url":"start/basic/what-is-caton/index.html"},{"revision":"170fab995e1e515a77384c1c964e7e8f","url":"start/basic/what-is-log/index.html"},{"revision":"91565f08a9a1b69aff57e2e76374e27b","url":"start/basic/what-is-messy-code/index.html"},{"revision":"12eed34efb471ed74ea9421582c52425","url":"start/basic/what-is-permission/index.html"},{"revision":"36706baa0f69ec3fdb11512b6e23a9ca","url":"start/basic/what-is-plugin/index.html"},{"revision":"28244309961f3105ecc7c0fb89f51d25","url":"start/basic/what-is-server/index.html"},{"revision":"f8bb780fe7c9a193641e7f0addca2a5e","url":"start/basic/what-is-startup-script/index.html"},{"revision":"e0cd63684656afba1b0a804d76385875","url":"start/index.html"},{"revision":"b315b3e10c5cd98252556926db4d9792","url":"Sundry/Advance/Linux/index.html"},{"revision":"c7673a59084a466dbde6def94a7b3d08","url":"Sundry/Advance/management/index.html"},{"revision":"efcaea53c8903e39cf5fa8d91d783eb3","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"21e52f2afb87f2719b0c8f1d4431fd09","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"b5ac655b1e4b1b3f2d38dceb2978fa8c","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"5b5a9275323e0e452d00f7dbe3a195ec","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"1e2c5a1ad735759b695f796f1c8c4265","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"96136a5bf5e17078438257c710623973","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"f7fa9214f786a9c6fdf41b1332403826","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"74c96957415af09126833cd01f030fcf","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"876d4173193a6c9981cd53dad33851a1","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"7dc2ecac84833d29a963c1023406d1b6","url":"assets/images/114514-b786c37f2b8c79db754bc07d9ce96d57.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"8aadfbe620037ce5d94a9f21369493a3","url":"assets/images/add-b7f116ab1b144bda20fad5a5742eb941.png"},{"revision":"ce0e251919cfd69b926781859d9817a0","url":"assets/images/add-web-14deac17b28a3a4fb61a6b6cc0459c3f.png"},{"revision":"c94925f0c96b56dcbd9817a623344382","url":"assets/images/Android-1-8f8472da4d1e5681f2daf7c03c75576f.png"},{"revision":"ad83006864e7faa13880a478577088c2","url":"assets/images/Android-2-eebcda9f214317ba6c659e44a28318b8.png"},{"revision":"882c64ec7d065ae17e3196e872609a00","url":"assets/images/Android-3-e413bb632cef55b9a34688ae84d297bb.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"e19629d24989f942a24f588db2e55ed3","url":"assets/images/api-42f36e478fd0b1788169f9dfbd833b14.png"},{"revision":"66950ba2cc69f5b5301b1b3d9f208e79","url":"assets/images/baotadianj-b468b95e8a549671b91e2aa88be7f512.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8e7449c3ea690e56438ee240e967c9d2","url":"assets/images/close-yellow-cloud-1d8f6e382f6b6e9b14a19ddf6c492073.png"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"151cb5e59333e6459a37e40ef69163dc","url":"assets/images/dian-new-c2eb5a60c87398c9a48045e3d684787d.png"},{"revision":"111ff40026180afdae67949c02cb89bd","url":"assets/images/dianji-f870a9a0ba5d54071ec7b75006959695.png"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"5fcc54392eb2ea321bf41c517a6dc3d2","url":"assets/images/getinfo_1-6f053129bd4c9fd530213901d259a428.png"},{"revision":"bd3dddc988750eb0f80d27866dd92e6e","url":"assets/images/getinfo_2-4dc06f209b461e0fddf7043dcd7dfc51.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"979781b377cee0c6414c0950f91f5f6e","url":"assets/images/index-8851bd29b7b75fcb2c29adaebd54a73a.png"},{"revision":"a0399b38208c32fe8d7122426f7a3c1c","url":"assets/images/install-260de030f64981d0b55a029b2d83f29d.png"},{"revision":"0b675da4495f6c5542002bf24dbec822","url":"assets/images/jieyazip-9898fd42fc57167a84dba8452bc6dbfe.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"123c46b97f93b60efb90c605c5266f2f","url":"assets/images/mm-87335277c86da35a61761ac82f6d1ddf.png"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"907c620f94caf47cb412a72ffcdc45d7","url":"assets/images/mysql-0df5bb67f5a5d4997e29e61535a218de.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"d51e7c48786fe1817f5a1c39df1a8816","url":"assets/images/origin-957659ad641bcc6eb65672538954de82.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"eef647337a056beb660aed803e44a195","url":"assets/images/removeindex-10bd6775a7cdbbbc43f7ab144a2df378.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"f28ac98282f5c14a9e975a762643d7a0","url":"assets/images/shangcwenjian-fd659bbe6566d321100f63e76e1d4066.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"ca42dec32abf9bc391d6b73133a0a75c","url":"assets/images/talentsaclogo-ce8f52167829962b2237b4db0664727a.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"214a76c8b1721879cfce8b438b8cce98","url":"assets/images/tianjiahuiy-d52d53cb9fd34c257dff095cc135fff3.png"},{"revision":"20578fd0039ccf4071bac55ac42ed72d","url":"assets/images/tianjiazdy-270ead8e21b1c7d9cf9546b711f00a59.png"},{"revision":"7f5e08e3505602fa0a17abb51475a023","url":"assets/images/tianxym-b901e093821021f287d1b489c70f09bd.png"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"a8674ee403db77075ea57402770c5ea4","url":"assets/images/unzip-597c7053f529d0367469f644cb6c2da6.png"},{"revision":"dc33af109da9696c57b284bfdc13cd6c","url":"assets/images/upload-414f95c36b600f8ae1741689b43db495.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"bfa2b942e315c8a17d0c0fea24db2f2a","url":"assets/images/wenjianguanli-8557834b8e0d875c36d8e532a1849860.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"c1f65e15432020bb16507ab90544b866","url":"assets/images/Windows-1-4d840bcfa684a54959ca154d167e1598.jpeg"},{"revision":"1303cbebe0c8de7f5c2f6e63686e6599","url":"assets/images/Windows-2-c7349de31f897eec41d5e281162b5c9e.jpeg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"8188a3b5a29a0ed3c1032e8d8efdf370","url":"assets/images/xingjianxiangm-48bca89b28a8e2ddb9d847520ccfd291.png"},{"revision":"37b41dd92ee5b54fd64a0bc77e5ae032","url":"assets/images/xn-login-a783c41521254c4bc76338f1b564d3b3.png"},{"revision":"248625cb4ac05f5a8b9995df0c2f2747","url":"assets/images/ymguanli-5168768fa33b72717ed102e2fadf15ba.png"},{"revision":"cf0f1633d64444841b495464521c9ebe","url":"assets/images/zidingy-c6faed9ba860a43ca2a1a715920ac4f4.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"26d8d72062c7ed23218e72b2c7b8226d","url":"assets/images/没事不要免费帮人-cf9c7774f933331cbc13dc5aab68c882.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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
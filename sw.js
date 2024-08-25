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
    const precacheManifest = [{"revision":"86d692082bf6c4d63bf3d3b434fcd639","url":"404.html"},{"revision":"992ee9da31a5a66af03c24e0e9a280e2","url":"advance/bot/framework/index.html"},{"revision":"b6d91a32368c80089d7bb164170728f6","url":"advance/bot/general/index.html"},{"revision":"bacb687bf8431ca4dd29e4bd50cb7317","url":"advance/bot/index.html"},{"revision":"738e1defbc835ded771ed215ce22475f","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"7df912c98f0dd9db847ba4e4bd2c92a3","url":"advance/index.html"},{"revision":"8c0456eee0f7e66df72a3a8070350349","url":"advance/Linux/backup/index.html"},{"revision":"cbbf5e3d9763ebc4a0502cac90235aca","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"68572b4738f8ab9bcca68d7157bcbb48","url":"advance/Linux/frp/index.html"},{"revision":"a0fc14296ba4697b575c6cb889a66ed7","url":"advance/Linux/keep-running/index.html"},{"revision":"2dd38497e8e15efa79c97e42a91a047a","url":"advance/Linux/start/index.html"},{"revision":"5577a23010db7ef4281c77c5d07deb07","url":"advance/open-website/index.html"},{"revision":"25bd9a5f552d3279a2d63f30d26af97f","url":"assets/css/styles.e4e4ba86.css"},{"revision":"b0f8750004a7ca286c36908580e157b9","url":"assets/js/005c270b.2f98a4cc.js"},{"revision":"09effbd4cf4eb508ccaa5778568893e4","url":"assets/js/013c8c14.6c04ff4b.js"},{"revision":"e541e1572858e9d5fcabd30168f29dcf","url":"assets/js/026f291b.3bebd8bf.js"},{"revision":"56884ba16ffac26914aa969eeb5b5806","url":"assets/js/0272dc73.1d213691.js"},{"revision":"105549fb4e55747353b8276f57b06996","url":"assets/js/035cfa77.a1efdf23.js"},{"revision":"72609fea3a9bcd0c28917fc196b754e8","url":"assets/js/03b205ee.d5b34179.js"},{"revision":"33d70bc0de31f4204bb1b7b013a22653","url":"assets/js/043fa146.0a076f26.js"},{"revision":"6ca2e09308ff5137f4f997e92c7ac14e","url":"assets/js/044f41a1.a8423209.js"},{"revision":"8f35818c2f57e57e425ac784d5a95d51","url":"assets/js/0492d44d.a3d1705a.js"},{"revision":"d1a5b70cb86886f6832b2bdeb8811727","url":"assets/js/04f5c692.8a2c0c91.js"},{"revision":"582dc4025181284aef8d1d8db806ab53","url":"assets/js/052366f7.90855690.js"},{"revision":"f7e4c9f0034ef24011a1c788203de7f5","url":"assets/js/05278f71.7cb38c26.js"},{"revision":"54fa14c9d02f9e686b91a4f33783c516","url":"assets/js/053e2f33.14770fd9.js"},{"revision":"99fbf3e91bfbe4cc43b3411a6fb81a92","url":"assets/js/06b0ed59.bd5151fd.js"},{"revision":"eaf053e7c1e795b61c7c569120eece22","url":"assets/js/083acdf9.4b9ea43e.js"},{"revision":"48facb52e8b79e373ac648bd5350349f","url":"assets/js/083ebe2e.3d41aa54.js"},{"revision":"4071fcb73f305be1231334c29b051a84","url":"assets/js/08e7f72a.991ce5f0.js"},{"revision":"25b8f4420e62a83242c7a506f1d980ad","url":"assets/js/09156d2e.1b8cf0d3.js"},{"revision":"00478eaa1c728d587b801071b5767c0b","url":"assets/js/094a7dd6.b573ffd8.js"},{"revision":"93d77b67afda6c51bfdd06dc02a34c4a","url":"assets/js/09714880.654f355f.js"},{"revision":"8aa5133f89be8ddd9193ceb0beb3c13b","url":"assets/js/0a17cf6d.d6716b56.js"},{"revision":"82b1d82b3e415d1f118a72a5d6b0d81f","url":"assets/js/0ac0b3b7.806c0944.js"},{"revision":"9230e823bd7a6e200c65f268f7b74e97","url":"assets/js/0bcb5d9e.4a49e1c5.js"},{"revision":"ed417aeaa55b56ef1f0e40e53ad9a9d9","url":"assets/js/0c7f12b6.03e79355.js"},{"revision":"83053a0d688df7b711a7382bf780fd0d","url":"assets/js/0e384e19.ce08c4ca.js"},{"revision":"a75e41f7eadd5efbf5766fb0319d88a1","url":"assets/js/0ec7bf36.89ebeac0.js"},{"revision":"fe4dddf36944cffadfec392026d9d86e","url":"assets/js/0efa0f03.48b67f33.js"},{"revision":"89a727e1566a0cbbfeaa3dfca4b58e4a","url":"assets/js/0fc807d9.dcd52238.js"},{"revision":"19b8fcb14cacd50f8924041bce2d4ded","url":"assets/js/11f90be3.7422a44d.js"},{"revision":"ed29fb1ab30df2a752822ba0b8f3b508","url":"assets/js/1210f0b1.2a53232e.js"},{"revision":"975a49045285777caad9abecf870cae7","url":"assets/js/144520df.17313bff.js"},{"revision":"17ca70d3092f7a28ebd3944341c9fe9d","url":"assets/js/14eb3368.1b3a40dc.js"},{"revision":"272dce730295ce43416aaeba7ecd03d4","url":"assets/js/1537.c5a762c0.js"},{"revision":"5e387a93157f1c0d49ed1a4f789a4d55","url":"assets/js/15daf372.b2db0d98.js"},{"revision":"da776797d30b24ea54ed4f51715c0ca2","url":"assets/js/15e4e3ed.19eb5f43.js"},{"revision":"2deb9bbce1817df4b12e4fc15d5172b6","url":"assets/js/1760.e90d3aca.js"},{"revision":"88670c57d3d175894d3f201d377c6490","url":"assets/js/17896441.8433a9a7.js"},{"revision":"9a0a127802107fac9006c2356d779d90","url":"assets/js/180bc163.e6ca9506.js"},{"revision":"cdeb0e56f5f78c446c5025070b919d11","url":"assets/js/1856fe2a.be5443f4.js"},{"revision":"a896939d2f151cdc4e79c531b1031abb","url":"assets/js/185d6330.6cdcf823.js"},{"revision":"e688f8cc238225bd274152789a088639","url":"assets/js/188.d81dc71f.js"},{"revision":"8d308ade2f02ea5696e1610d6c85ddcf","url":"assets/js/18b67442.a0d987e2.js"},{"revision":"ac01cf9aca1c6339f3ab4fa0371cd0e6","url":"assets/js/18bca995.ad0c30bf.js"},{"revision":"58c55df0151f5dd0b32f811035054da1","url":"assets/js/192.bd2ea5ef.js"},{"revision":"56e27096fa4ebc020fbb96c077b0a9d3","url":"assets/js/193a055b.5ca3dcc6.js"},{"revision":"9ad6555eaeae5d0f00664dc0479d42a1","url":"assets/js/198ea2e3.344709ec.js"},{"revision":"8ccdb4fcf2393203ba6e47e7cb8f96ee","url":"assets/js/19cf8050.dd4767c5.js"},{"revision":"31fdaf098ca6c5023f6120b36c9cff5e","url":"assets/js/1a4e3797.e7dafb65.js"},{"revision":"5145f46cbf2bbb6ae7140632c505d321","url":"assets/js/1c42be93.20ba441d.js"},{"revision":"7d73c8f2716122863a2b7a584d666c1c","url":"assets/js/1c6846f9.aea8c1f1.js"},{"revision":"86db9c8b28b3810d7dce84b6fe608a60","url":"assets/js/1cf75b4f.6e737c82.js"},{"revision":"bd0f42ec90642f51f42460283d171da6","url":"assets/js/1d1b9adf.fca705fc.js"},{"revision":"281517c5c95d8cf70d634724c2c9206c","url":"assets/js/1d42ad15.e5763477.js"},{"revision":"d1b105d63f2ba6c34c66f52c831353a7","url":"assets/js/1dfd2628.f67ddc5f.js"},{"revision":"1a15a473796055a781341698c8673af9","url":"assets/js/1e0a547c.e996d31e.js"},{"revision":"77fa23ddcacddacf36313419c806ed2b","url":"assets/js/1e47cbc1.40002ff9.js"},{"revision":"f0f16c061bfcd197c16edb5c279ac1c2","url":"assets/js/1edb7625.543dd101.js"},{"revision":"d8ae9694d725853395f9d03c1eae893c","url":"assets/js/1ee6f0d4.ec6a6921.js"},{"revision":"f4dba0c07bccbaa6f919f2370d4dde10","url":"assets/js/1efacac9.34260533.js"},{"revision":"c36f1aeaea05abeaf63b29dcaa423953","url":"assets/js/1f81f646.3907e49d.js"},{"revision":"0ba3474b9e683192aa52403595ded730","url":"assets/js/20215aa7.e468e2dc.js"},{"revision":"2469ec8eb7303ceb7c131164ad1e2b05","url":"assets/js/20547864.779fb1a4.js"},{"revision":"f9efc6af13c8236b5fd79683a92bd4b2","url":"assets/js/20d69604.4aa99347.js"},{"revision":"f2d4f805cac301aea047ebc3e941b9fc","url":"assets/js/21c534b6.84195500.js"},{"revision":"79e5998763c839557c731bdecac27b33","url":"assets/js/225.7a67a60a.js"},{"revision":"ef47a031ad07552bf834d5348fbf9bf6","url":"assets/js/2423.fd094983.js"},{"revision":"503a3f9b3fbc03a417c32566cf0754d8","url":"assets/js/244418a2.0e9d5e09.js"},{"revision":"2c8428b7a8592d00180c8adc80951a0a","url":"assets/js/24a68a77.600b910e.js"},{"revision":"23099b773800a2a2aac9f4c813986946","url":"assets/js/24d8f7d7.6ed7278f.js"},{"revision":"08d777e271e85e2ac6a50b0350250689","url":"assets/js/254a43c9.b91ee5d4.js"},{"revision":"6c8e4594b69897f213ed55a82eb4db75","url":"assets/js/264.30bc98d3.js"},{"revision":"e8eb074cc1d6ed4327f86a34ea2cd674","url":"assets/js/2867c0df.16a0fe73.js"},{"revision":"c238cf3d2388582e773030b2271a7eca","url":"assets/js/289.827ef2c5.js"},{"revision":"7914c10b0b9feb5c82f53c8974bf11cd","url":"assets/js/2a71d676.7f68e8b1.js"},{"revision":"bc3f7c6e9e64144dcc4f0ec30751c059","url":"assets/js/2b4e0304.a76dc8c2.js"},{"revision":"1fb881439f2f4a68318ec7be69b680ac","url":"assets/js/2b9de2c0.88da237a.js"},{"revision":"73b82965fd255ff65d775600fbe7989c","url":"assets/js/2d386ab7.d8025735.js"},{"revision":"c4adb2c9bc30bfef93d9afa0fcff62b0","url":"assets/js/2e938706.285c1ffb.js"},{"revision":"b19967bda4c09f652d294d9407a766ab","url":"assets/js/2f39a0af.8269c3c9.js"},{"revision":"81426632e770fa53e36a97da5420b926","url":"assets/js/2f8ede37.1cf68b87.js"},{"revision":"7a09eead6c0d9b93c64e93d3aace5b55","url":"assets/js/304.ac7707c7.js"},{"revision":"0abbbc56b338e9d8df15f93c82670242","url":"assets/js/312f6c84.160cc676.js"},{"revision":"30b4e065d3f379f8ec10ba08deb3f6bb","url":"assets/js/316.df55a7a9.js"},{"revision":"94ffa1f290be3779579c0e71401deb85","url":"assets/js/31735ebe.958dcda6.js"},{"revision":"3f43b147ec0513fa6fb34b66f49df090","url":"assets/js/33261842.8ad48b68.js"},{"revision":"3b525de5afef1913f1c1b88be7b5dd5a","url":"assets/js/3373.191ecb58.js"},{"revision":"78fc9b366a1d2e25155dff77f14a8220","url":"assets/js/343bb2fa.a9da725c.js"},{"revision":"1fa088de51832604725092e89eacc789","url":"assets/js/3488027e.c6240f9c.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"6bdb77556ae0b7de4bb812ff049383af","url":"assets/js/359195cb.0a8adda1.js"},{"revision":"eef77534be2164b794de84b7ba1ead9e","url":"assets/js/35d30f29.72039b86.js"},{"revision":"56887339331e71194208c9687ce5534e","url":"assets/js/3636.ab3720db.js"},{"revision":"c38349a44f11eb8443129feac44799dc","url":"assets/js/36c75202.0fa59520.js"},{"revision":"3597c7c709bdb52977547d4fab890c78","url":"assets/js/373.e4bcc5f6.js"},{"revision":"951252aeb8ae0040594c08ce16cd8fbd","url":"assets/js/3747.b5340f88.js"},{"revision":"5284d1c7ea6aca5ffe8c247229f9633c","url":"assets/js/3749f972.76f07b8d.js"},{"revision":"c056ee20a564c59b443c176c00ca5bb5","url":"assets/js/3868.49019453.js"},{"revision":"bff5a69fe1543b5bd9b775db36379be5","url":"assets/js/38b0474b.624712cc.js"},{"revision":"4d8c22f979260dbd1bd28912f673704f","url":"assets/js/38b71911.3c53b9d5.js"},{"revision":"62b87aea5fe8366da0d25fee309edb79","url":"assets/js/399101db.7387d475.js"},{"revision":"3734928f26fa568f223c634741a8dc78","url":"assets/js/3a42456f.98a4275a.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"7009905da65b9e301c285e77fa7d1336","url":"assets/js/3b8970d0.c7dd6566.js"},{"revision":"a71d393ae6767d613d24888d2e96065d","url":"assets/js/3bb1ea30.4c4868b9.js"},{"revision":"ca21f871ad5dece95535652813c97dfc","url":"assets/js/3bd1ba02.fd2ce8f9.js"},{"revision":"81fdcbebe10b597e4ccf784e5856b035","url":"assets/js/3c5393f3.aaee5f9c.js"},{"revision":"a86dc6999e0f530625770dd94e2ad203","url":"assets/js/3cd38fda.5608f261.js"},{"revision":"9b0a9667ba1c69f090230583f0532dfc","url":"assets/js/3cd65ff0.7e349223.js"},{"revision":"1cefb8c02a27fb13cbc1ba777152b91d","url":"assets/js/3d7f94ff.c5513301.js"},{"revision":"7090e798448a90af1acf1d976fb5051a","url":"assets/js/3dd749a7.bb440a18.js"},{"revision":"afd56dec1185a7c45fc0f5b505f9161c","url":"assets/js/3ef38818.4ef5345f.js"},{"revision":"a5a8279fe4a59d0628f95d868d685243","url":"assets/js/3fbeb9b5.86eaacdc.js"},{"revision":"688cb9b8627601c023eaf909fc29d82e","url":"assets/js/411.c2ae933f.js"},{"revision":"7fe32dee7c9ae7e2749879b95dc37af6","url":"assets/js/41c0ace0.2d474e15.js"},{"revision":"bc291358ac6bee42a1fab164adb42ff7","url":"assets/js/423.fe93ccac.js"},{"revision":"c9ab57ab83da3f3a44efe641e484bbe6","url":"assets/js/425e3dd1.174cb474.js"},{"revision":"efc28cffff7ded5c603507790e9138cd","url":"assets/js/4305.699fbca3.js"},{"revision":"889e4f7657022a3dd3f8238b22f076e8","url":"assets/js/4307.f556133c.js"},{"revision":"f30c3dde3da9284a691a6631296a6702","url":"assets/js/431266e7.e2b035fb.js"},{"revision":"f936a60a850614de436e46863e56f6ad","url":"assets/js/445c22af.2debe2a7.js"},{"revision":"a84c5b0e37ccc21a61ee0de877598c76","url":"assets/js/44975943.cc24bfeb.js"},{"revision":"fdec4ce8f849224cd35d5cfc9273cffd","url":"assets/js/45cd711d.71f48582.js"},{"revision":"40a5cb4ab60accfac0df7aa637c493fa","url":"assets/js/4695.cb4978da.js"},{"revision":"2f58b0b7056e5e788c20b277f763f348","url":"assets/js/46bf3d5b.2ac6eae8.js"},{"revision":"441087e93a70cbbb19b30ec7d86f195b","url":"assets/js/47.73c909c1.js"},{"revision":"6948c5b387cf893aaa6afa6cebbdfe8e","url":"assets/js/4838deb2.43f9c839.js"},{"revision":"6d0582498eb60f9b76c4d01597a634e6","url":"assets/js/4900.4a85eb3e.js"},{"revision":"ad40cffd06a17e1cf5019233d34dc7da","url":"assets/js/49aec60f.64ff5b8e.js"},{"revision":"a47d815e1c3aa2c33b968337181dd06d","url":"assets/js/4beb5b8c.283ed43b.js"},{"revision":"f06c6208eab2959bef833003c754858e","url":"assets/js/4c7ea6db.405855c9.js"},{"revision":"8861d90d433c98ba5e3ea9763efd38d4","url":"assets/js/4cdf84ef.3ec29aab.js"},{"revision":"2fd8e8827fd4b88256a87a99f3f7dc3f","url":"assets/js/4d27c60c.bd055f6e.js"},{"revision":"e2a6205d1bb64fa567fd96431c0d90a9","url":"assets/js/4f644c0b.e870b01e.js"},{"revision":"8d06858547fcdc3f190888cbfa397085","url":"assets/js/4f8bb2fd.41d44e8f.js"},{"revision":"4f7a3972ee83066c02fce4e0393ece5b","url":"assets/js/5008.ff0573b4.js"},{"revision":"a97d0da557019f936f18282046fc5023","url":"assets/js/5047.21185203.js"},{"revision":"3be5af1c29af1c08c165e097d36e3b75","url":"assets/js/50b793dd.bd150d82.js"},{"revision":"a32f81919f1d177ffa3b7b91b13559e9","url":"assets/js/5117.01105d5d.js"},{"revision":"20dad691614a4e140cc6a947f7da75dc","url":"assets/js/51ebfdb4.7f51811c.js"},{"revision":"7811091bc7865447822154b471abc673","url":"assets/js/522fd580.12ce75ed.js"},{"revision":"c92214c40860ff74c7ba2538936a4bd1","url":"assets/js/5289.e3079c7b.js"},{"revision":"fd2e356c655ef2b1d8eaf77313096cef","url":"assets/js/537.1cbfea41.js"},{"revision":"5ddec8115378af2ff7da0c1d4d5e04cf","url":"assets/js/541d5637.1fa07f33.js"},{"revision":"98adcaac1e82ad3cf38ac679f8d7c791","url":"assets/js/54a35160.e99680c0.js"},{"revision":"36c30b6eb2a74c3f01b48d68c4d0fa7d","url":"assets/js/5571.39f6adb1.js"},{"revision":"7603f366303a8e0d0bcd4aa9da9cf182","url":"assets/js/55aaead0.dba44e33.js"},{"revision":"d436f45843aec58cfc8245d580ed01cf","url":"assets/js/5606.231f2c50.js"},{"revision":"1763b1f5deb6447c6a82cf6c60fe9edc","url":"assets/js/563b5c65.04bce3e6.js"},{"revision":"11194d36ce7bd3a7c279a1a2b3c97dad","url":"assets/js/57ecc2b7.fa4248f0.js"},{"revision":"251439a155eab1e6a98628aadeaf1f94","url":"assets/js/5834.82c62804.js"},{"revision":"46b78b6a6919aa97f652c3ca53692fe7","url":"assets/js/584.ac6b39cc.js"},{"revision":"cc19d04b0a5f05dcbe66c6ad0d7c5352","url":"assets/js/588dd44d.b047c68f.js"},{"revision":"1697cea0e4ab47e8fdb548238e9e4b53","url":"assets/js/58fa4e48.42785549.js"},{"revision":"d0cde28ec9b7a8edb169cde1d17b2632","url":"assets/js/594bb6c0.65a264f2.js"},{"revision":"7f26d4c255a449363b8cc7fde29dc332","url":"assets/js/5a5e1dd9.f3b1c191.js"},{"revision":"d311af20713e4875faf717990236ca51","url":"assets/js/5b3491ef.7dfc426e.js"},{"revision":"fc423a2f446ce0d1b25dcc27695d5278","url":"assets/js/5cdb4525.c69cade6.js"},{"revision":"c965d6fcca4cd769dece0fc5965c2f93","url":"assets/js/5e6d1f8b.743213b6.js"},{"revision":"f9ae90e26740999e8971989e8ba4236b","url":"assets/js/5e95c892.f99d74de.js"},{"revision":"d4f9644cf1c418e301d540fe46bc86f1","url":"assets/js/5e9c3b6a.fd702d90.js"},{"revision":"2890ba76763eb512a564ff7560421954","url":"assets/js/602bb363.1717e61e.js"},{"revision":"2675c72fa49fffbf80b770246c7e9f43","url":"assets/js/61aaacfc.e503a533.js"},{"revision":"93bf132f3e970dc29f500652dba951cd","url":"assets/js/6228.62ee8f75.js"},{"revision":"5b24c9cce868af1a0ae59ba4ebf62435","url":"assets/js/626.a9e6927c.js"},{"revision":"79b41ec7703bc12dc2d09a3a233ac19f","url":"assets/js/6304.d9ae89f9.js"},{"revision":"e1b33af707afdaab4bd8aa22d5356aaa","url":"assets/js/6316.c9bb9321.js"},{"revision":"27bf7b6358b2da266154c90428d4c7ba","url":"assets/js/635cb825.b5ffa677.js"},{"revision":"1f6ab7b93e9c82fc52c3e8fa528c7b48","url":"assets/js/638.744ee2f0.js"},{"revision":"d00043e94a2c0ce4ce2bd9e80fafda6b","url":"assets/js/6415f59a.94a79f1f.js"},{"revision":"4483de24152967390b8a2fcf2c7b002d","url":"assets/js/64614d1a.f079f5ae.js"},{"revision":"c5e1b3f3befa6427bc022a6ea7322623","url":"assets/js/6475d366.a09e4ed9.js"},{"revision":"11e6ea8df0e339e0a3ea951decaea766","url":"assets/js/6557cf1a.3ca6587d.js"},{"revision":"3bf1c15ac83ea50cd3943334dbd49857","url":"assets/js/6577a0df.9c53f3ab.js"},{"revision":"670bca08ffb61ebb5be5e24775679f24","url":"assets/js/65bc360d.9c96d723.js"},{"revision":"5e619047ba1d0d1ed58bdfbb9ac1e917","url":"assets/js/6638.b0b04cfa.js"},{"revision":"a7a6d5010f36151371fb264efa5d5251","url":"assets/js/6762.1f5e3817.js"},{"revision":"920cb27b3f3ea0b312b2104a83a1892e","url":"assets/js/6775.cba7a5b4.js"},{"revision":"7c928dd6ba5b5ff63a50baab5ee9af0d","url":"assets/js/681b7af4.b4cb2c80.js"},{"revision":"76251afac5e93ae257c7651a98171b23","url":"assets/js/69df999c.54ebe03c.js"},{"revision":"9d76d86c3b49b89229fe25cd47fff8e3","url":"assets/js/6ad9afaa.88842076.js"},{"revision":"7f35c93b4fd2013383122d93d73f706b","url":"assets/js/6b902128.ce3ffbb9.js"},{"revision":"6ecc649eef270f3a5c8689f723c94fcf","url":"assets/js/6cd9d647.53b968aa.js"},{"revision":"4107a49238c8743af8d1d34d98df1764","url":"assets/js/6d6bd066.51c97a23.js"},{"revision":"c40366bc39fe26806667f62553763135","url":"assets/js/6e3d6b93.5f4848c7.js"},{"revision":"40004c26908de1bec95e266f291c0f23","url":"assets/js/6e889b7a.8077b88b.js"},{"revision":"655ae6381767c27f78c85103de15048d","url":"assets/js/6f2b2af5.10bfdc96.js"},{"revision":"328ead64cb95f40a3079afad34ced627","url":"assets/js/6fedb7a3.4d9141a4.js"},{"revision":"c94e2c585abc891d25cd6e0ec90ce6ac","url":"assets/js/70321d34.2e73f3a5.js"},{"revision":"df3307288575627d1439d1c002e076f2","url":"assets/js/7188.9be0b533.js"},{"revision":"f46670eff76bd7dbc9b4f87dc1c2360d","url":"assets/js/7192.8fd9f9bb.js"},{"revision":"28dd652c7f4bba55d6a7560f99ed5985","url":"assets/js/71bd92ad.4b4dced5.js"},{"revision":"c4569f95b07b16bfe560af02c46b42ec","url":"assets/js/71c41cca.ca1a7a2b.js"},{"revision":"07560c3524db2762f327df7e56844a41","url":"assets/js/72b3e7dc.96f6e943.js"},{"revision":"f5d472b1b290a25b257a743bb8f95212","url":"assets/js/72fea898.ea27e807.js"},{"revision":"e434f3096d82aa07dad6d10f85d19e8d","url":"assets/js/73c38494.292ddbe5.js"},{"revision":"c4b049713bcfb7fbf8b2d675a9d37f4f","url":"assets/js/73f32b8b.bb040e4c.js"},{"revision":"bb22db09ca9f40698657eee0bb8906d5","url":"assets/js/7411.d34a42cb.js"},{"revision":"f75602253625051f47af6a2818bce4d8","url":"assets/js/747.bc1878ba.js"},{"revision":"f0c1e81b728085db02663cbdc0ee817d","url":"assets/js/7515.fb042b69.js"},{"revision":"1130acac222f038bc5256723442dbedf","url":"assets/js/754296bb.8ef5ba5a.js"},{"revision":"f68a75df0507ae96f6dc7b4e7c604d02","url":"assets/js/7584.855762aa.js"},{"revision":"8ded373bd1db433c76d7b7b89dabd368","url":"assets/js/7585.21c79de9.js"},{"revision":"a846d1d50e09b97422103e18774c8eb1","url":"assets/js/760.98e67eab.js"},{"revision":"54a94da4bf8e9f11c9519afb3e2aa539","url":"assets/js/762.220e4ca4.js"},{"revision":"a4abfeaf696bbe4fd882c66561015d51","url":"assets/js/775.a4b47dfe.js"},{"revision":"3b80615c4377bbaf41d5ea1e77a9de0f","url":"assets/js/790b642d.692bed6f.js"},{"revision":"288f52f99cc213c9a17fb83022d8f781","url":"assets/js/7970.170ddeb0.js"},{"revision":"9644a9d7d74ddfb70b512ac37c069a4e","url":"assets/js/7998.a2e4d5f3.js"},{"revision":"e59e83092a934ee75cc9b50274b5a59d","url":"assets/js/79ee951b.924db9d7.js"},{"revision":"31efe7bf418de259a2b7f78a2c5b8494","url":"assets/js/7c328fb0.647e736e.js"},{"revision":"cff1d46107e96ea0ff39aeaa648f04d0","url":"assets/js/7e75dadf.df744248.js"},{"revision":"c82cd1fcd982aca2db366d6b0cfd6bf4","url":"assets/js/805.bb1da7b6.js"},{"revision":"5c75f573fc263838be292d2f6ee386a4","url":"assets/js/80f373f2.00a4e494.js"},{"revision":"a2fbd1a2dec11330f142ff5457e3d499","url":"assets/js/817191e9.14faa1da.js"},{"revision":"77a4cbfb8fdacbcf8fcb4f035b72b065","url":"assets/js/81e8afad.a78d633b.js"},{"revision":"a6c70e1d189cc6f8d2c911a1eb3c798a","url":"assets/js/8225.e7b15e8f.js"},{"revision":"49e49742836ecb712a7e48564106ad0d","url":"assets/js/824c452b.64d694dc.js"},{"revision":"c7702dc4348f7b938e0009867509fe0f","url":"assets/js/82c03827.421b25db.js"},{"revision":"3686221fe72c5045e5a70eca01508913","url":"assets/js/83236138.0a6e1b16.js"},{"revision":"53b05ac42e8c7d38967eacbff7be7cca","url":"assets/js/83fa3eff.aea2ff1c.js"},{"revision":"8dc46a8d8abfa9448ef3e677c6a04a80","url":"assets/js/853.6812ef3e.js"},{"revision":"de02920774a74b37d58bfb4b98093f6b","url":"assets/js/854b257e.bb7e0db6.js"},{"revision":"39d47c1323d5b76fe1d85d51919caf82","url":"assets/js/85ccb835.89bd089f.js"},{"revision":"51d1ddebc2bc4fd472422d8adf5cf5da","url":"assets/js/86170a86.dc77d590.js"},{"revision":"3a4d168c9ef456cdcfdbf4f909669fb3","url":"assets/js/868.4d467bc6.js"},{"revision":"af5a2da55694d5eddd047f0e66c47de9","url":"assets/js/86d633e5.2c591101.js"},{"revision":"f0e10ceb45ca45ea2bd62d774eb13892","url":"assets/js/87531641.4de8ac02.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"dfc53bd0721b13f4e1ed253cfee8ce66","url":"assets/js/87d5db97.60f753f4.js"},{"revision":"2159f9f34828189596afdf00ac028b6d","url":"assets/js/8805.3225cd25.js"},{"revision":"e810ea4e35e60c5b390e5bec0ffcb463","url":"assets/js/883b3acd.1b04fda1.js"},{"revision":"bca398eac431d53bffac077e1f1311ed","url":"assets/js/8853.7a84ba1d.js"},{"revision":"5a722dfd280efde5b43885b3315a3564","url":"assets/js/888a5ebe.120b674f.js"},{"revision":"fa523453c94430c5af1460ce83328831","url":"assets/js/893c6fee.487871a1.js"},{"revision":"051920e8ab7cdb3f73d841454d7dee73","url":"assets/js/8a578643.575227e2.js"},{"revision":"98e17472a5da6f71ee35b298fde3dcf7","url":"assets/js/8b23f58f.1df74345.js"},{"revision":"d3b15d69bf14cb5ec3a6ba8aaaa61949","url":"assets/js/8bdaa531.ba09d417.js"},{"revision":"901501cf2390843b713b43ff7c5be1c5","url":"assets/js/8ca7e4b3.9d2b5d68.js"},{"revision":"69cc265d125f57227942b6cad7c3f325","url":"assets/js/8e0be0d1.947fa111.js"},{"revision":"283fb261e96ae648df576124c6345ea3","url":"assets/js/8e6a4e74.4732e8a1.js"},{"revision":"44bf6cf36f0f469ba17f50b2bbef2a3b","url":"assets/js/9039.0c411ce9.js"},{"revision":"7b41b9278896473f05e4d71ba09b4ab1","url":"assets/js/9197ae7a.675df499.js"},{"revision":"01602386a411272e11a46059fd1946fd","url":"assets/js/9229f78d.eaeb2e00.js"},{"revision":"0fd76ce1b6458d564fabff84b14a0428","url":"assets/js/932.6ad772e7.js"},{"revision":"026e1cec003a50e9841f371b36e031a7","url":"assets/js/932.9d69cd03.js"},{"revision":"105978ac8d06ef1f2ba2bc5004b5d0dd","url":"assets/js/93456434.04ade814.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"fa28f9745b2cf99b28610597148a6775","url":"assets/js/95bcd1dc.1fb374b3.js"},{"revision":"eb784aa4b6beeb9f0c8cee5f2f3566f1","url":"assets/js/95d63b84.58a083a7.js"},{"revision":"73150531470a3f42170b373d24327ddf","url":"assets/js/9861953a.91362279.js"},{"revision":"38b320cd870298e45ebf71abcb1d07b9","url":"assets/js/9951fe7d.fbf35688.js"},{"revision":"8b1edb066a88340ffa8d20a206a97f32","url":"assets/js/998.e1b259e9.js"},{"revision":"f500e2da12f4c0de0f558c62ffe4752e","url":"assets/js/9ac34ba0.9e789ee2.js"},{"revision":"1a1c2fc607b13278a32637db40ce99cc","url":"assets/js/9b8d311d.da3261f3.js"},{"revision":"018546b4ce2ae7ae2209751df893c4d5","url":"assets/js/9c2278b2.d7766d86.js"},{"revision":"1955a8d0a80b1c1e378f958fe67d8ce0","url":"assets/js/9cd2fc0a.c623155b.js"},{"revision":"5e9b0e1dee2d5de726e64f8d89711011","url":"assets/js/9d4488d1.08f45d87.js"},{"revision":"64b83b9c0441867409ee95684fcbef76","url":"assets/js/9fdc340b.9ee43fdf.js"},{"revision":"014ca4114980de3ed4b777cdf6ff42a8","url":"assets/js/a1e55d50.65bb1669.js"},{"revision":"486bae55a531e32328dbb0ca6606387c","url":"assets/js/a21e984c.4200c911.js"},{"revision":"b472ffce376385795b98904b8e3bf66d","url":"assets/js/a2ca8fe8.af9d706c.js"},{"revision":"ba8632f7c4113d177f595c0fd728a32d","url":"assets/js/a2d5f767.0a397933.js"},{"revision":"a98932bd2a22b01081ca4a59740216ab","url":"assets/js/a2fb89b8.2e2e2ed8.js"},{"revision":"565e032d12bd1114a74d9f1135aed43f","url":"assets/js/a305e2ac.da82767f.js"},{"revision":"1887f5da772518db7e05fe3d77861c62","url":"assets/js/a4c78573.e00e8a3e.js"},{"revision":"cabe4fe30fe2b52627cca1378be1c613","url":"assets/js/a4e7ef95.ba1233f2.js"},{"revision":"fa5865df061c1fa7703ede7947bafb4a","url":"assets/js/a62eaa10.f0892643.js"},{"revision":"bc7ae24a80d27b069846480fc970c79b","url":"assets/js/a6eaa2fe.5125c243.js"},{"revision":"5b15a40f5834fc8fcdb9f8e67dff4f89","url":"assets/js/a7062d46.11cccf56.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"13adba3fff1f3ebe66665f13765c2823","url":"assets/js/a757a55c.7a6de308.js"},{"revision":"3b2c86fa202bbda34d5b9ec98dbd8311","url":"assets/js/a78b3ba0.10032d62.js"},{"revision":"4a0a2054df71b457cfc7d961b87bdb94","url":"assets/js/a7bd4aaa.91a2aee1.js"},{"revision":"7f5cdff76698562400a8fdc45716a7ac","url":"assets/js/a7ddcfcb.9fbb46fd.js"},{"revision":"6e09ef6ba840949c9401e0d455e82def","url":"assets/js/a8bdbcd5.027c6362.js"},{"revision":"5134c3ab2fe5842b5e39033649ee1a6b","url":"assets/js/a94703ab.b05c2422.js"},{"revision":"7fe6613373db2c5eef4121e15f0a41c0","url":"assets/js/a9c868b9.0c89db30.js"},{"revision":"f6805070a151a01a45ad3f10ce5e98be","url":"assets/js/a9f9a930.ef7a4b28.js"},{"revision":"928a1669493891a14e734d4105e1a813","url":"assets/js/aa276556.4fa4f6a9.js"},{"revision":"50be30e7014ad94cd856bbca31c88a46","url":"assets/js/aa7b0feb.88877de4.js"},{"revision":"6c47a32f42dba8f94fd416b6b5bfde17","url":"assets/js/aa81450f.14534752.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"e069459a7899611c799346c2ad4b2e55","url":"assets/js/ac61b989.68e5d078.js"},{"revision":"6bfa852c808ab36f9c4a30b205da5029","url":"assets/js/add4bb7a.41d7ae74.js"},{"revision":"d5ab4e4785ab27f3257666d52b946192","url":"assets/js/aeb124bd.6ba71619.js"},{"revision":"1fb16b632c2c40f59663a7522cbf41b7","url":"assets/js/af70a4d6.71c8095b.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"bc7c69141c30b847470ea6d981aeb26b","url":"assets/js/b158dc01.11231b0e.js"},{"revision":"c3c5e98e024c4d0149dd095194d873bd","url":"assets/js/b21946ae.906169b1.js"},{"revision":"b2575ec18ad12ca403994fd760af2b49","url":"assets/js/b222cacf.992b616d.js"},{"revision":"595a1b52174cdaae6f353d4f8c0cbdf7","url":"assets/js/b24d385c.8d1e71ba.js"},{"revision":"643dc145b3182a2d74f30e8820b32822","url":"assets/js/b496f3e3.f2b91fa7.js"},{"revision":"fd70d6560d88e0973ae17d323492ffcb","url":"assets/js/b5210edf.7454b651.js"},{"revision":"af37347481394150e3860d814c4979b2","url":"assets/js/b5eeabfa.826d84ca.js"},{"revision":"30674fc855b634456810a7b12fc58286","url":"assets/js/b60da6d7.4342bde1.js"},{"revision":"f93e1f6e17fc506533f2acf57868d1cd","url":"assets/js/b60de388.4d7ef1c1.js"},{"revision":"80a617ec970228751d8df2c93e5f57e4","url":"assets/js/b6386ec9.b8db4f6f.js"},{"revision":"3934cfe6a4fc446285dc251aa4c064aa","url":"assets/js/b6438b6d.9d6a36df.js"},{"revision":"2cee1612025977b57c7615d49e5cb82f","url":"assets/js/b78eb33d.715d6c88.js"},{"revision":"82008662deeb2f4a4317c98ad874a4fc","url":"assets/js/b7bb49c4.a8fffc16.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"2f2a05cb8c4fa506e774658470fb8972","url":"assets/js/bcc35f8a.6f2d505e.js"},{"revision":"e5e3ce2b2f36402d9b56c63b020c28bb","url":"assets/js/bd760347.7ddaa3b3.js"},{"revision":"ef3955e91a64374d3ea7a2e3b7982885","url":"assets/js/becf8c88.3ea03405.js"},{"revision":"c034716abc18455871192c793724fb38","url":"assets/js/bf3ddb91.6b1ca330.js"},{"revision":"270eb9baff8ccb5d23649b9ad0c901ac","url":"assets/js/c0dca479.bd5899cb.js"},{"revision":"0e51de442057abc997e2d40089017c31","url":"assets/js/c10e86aa.f64d785a.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"1d30089399d5f1ea073aeffbb0c30eac","url":"assets/js/c156da02.b6183206.js"},{"revision":"53e79fb2fa24aa32295de5fbafc9eca7","url":"assets/js/c4dcc6dd.84955904.js"},{"revision":"df5e3ac7ad78db517593301029a4b808","url":"assets/js/c4f5d8e4.ff5b7cbf.js"},{"revision":"fa3b453590a61ceab0184604a5735f94","url":"assets/js/c5f4348b.16e2ceb5.js"},{"revision":"9513c484d3ea89080fb9093f90a13e5c","url":"assets/js/c72cf9c7.00d210f4.js"},{"revision":"e4beb447548092995be9dd6b729a17a8","url":"assets/js/c737e1a5.07485a74.js"},{"revision":"041791a06f261337ea1e479b82743918","url":"assets/js/c78ecae9.f9160235.js"},{"revision":"86d886fd6d6c209def11cb09b29f359a","url":"assets/js/c8018499.254d385e.js"},{"revision":"5b3f72cce0cb62cadcc39c063501914c","url":"assets/js/c84a9914.f2087039.js"},{"revision":"8963c44d9a68775520c593b82d95d360","url":"assets/js/c8a93e67.c8a20e0e.js"},{"revision":"5c1b89b01987a2b8b5129ed711e4845c","url":"assets/js/c9947f43.0c373f5b.js"},{"revision":"a4dfbf1ddfdc4f36aa59af2715407810","url":"assets/js/c9a1eaa2.766bbbbd.js"},{"revision":"7138e81d19b0ea50ec0e1fe8a5a9d572","url":"assets/js/c9ae34fa.19ac20da.js"},{"revision":"1ca6d5afa6953582dfb67e55225b6ef5","url":"assets/js/ca8a1b2c.b7e3c197.js"},{"revision":"c43e823b3a5f4c08dd4a560b45475dcb","url":"assets/js/cc2fcaab.0ad9bc02.js"},{"revision":"550ccce26500800cb54751514a154faa","url":"assets/js/ccdb3c45.6916a200.js"},{"revision":"9ba8a2a92eb9b3533d10ff354e4e67b5","url":"assets/js/cdc590f8.686aed53.js"},{"revision":"dec4cf297a9d97fb8b71c5328806eea5","url":"assets/js/ce7e7ba1.7f14f01b.js"},{"revision":"934f4d249d9a5e8c91bfb20104746673","url":"assets/js/cedf0e63.054c23b6.js"},{"revision":"3b6a028df10e2fb499c3ea28ef633596","url":"assets/js/cfc0d51c.dfbe60e2.js"},{"revision":"9ef64c0b67808b420356f406bc31f7d2","url":"assets/js/d00b9fd9.6e2cd1bc.js"},{"revision":"f6896deeb13ef3a3c010a22a941dbea6","url":"assets/js/d07a3d34.0c35c6d7.js"},{"revision":"554fe9baf1b10919f27aa655bc789914","url":"assets/js/d0ab59b0.40577423.js"},{"revision":"a94665eff6ee14ca40d63d97ed8461da","url":"assets/js/d26b0f2c.236adaa1.js"},{"revision":"5ccdfbdaba4dac3ef869f64fe7f5dc8f","url":"assets/js/d2a9048d.c6f2068a.js"},{"revision":"29f9ab0e7ac2f0a6a360d9ec0e9e185f","url":"assets/js/d2ba5076.76be7e9b.js"},{"revision":"e73da38a67b96da908fc901e7708e1e0","url":"assets/js/d3585a2b.0e330995.js"},{"revision":"7039b35b1b9dec567f1d7abb442b8698","url":"assets/js/d45ccebc.46056452.js"},{"revision":"9ed6f7e37eaa68e90eaa97dd47f22cae","url":"assets/js/d494a195.f0323910.js"},{"revision":"5eadba1426dd828e9589beed8a0094b8","url":"assets/js/d63ab801.c7181ced.js"},{"revision":"46c14a6e56a88fc5b9980cb05eab3929","url":"assets/js/d89bf822.a18ec584.js"},{"revision":"e8f635c25ee41a19809e1f9af1e4d890","url":"assets/js/d9cff955.39ebfdf3.js"},{"revision":"94662a58b9773f8d619b2f795c7a92d5","url":"assets/js/d9fe55b2.48bac2ae.js"},{"revision":"8c0128e9ebf776579bbbf96940772ab5","url":"assets/js/da4fe776.cff68894.js"},{"revision":"8b16577b43bdee5f6934740583aa52d6","url":"assets/js/db6afc29.5a93e560.js"},{"revision":"31471a1cd3cc5d66dfbdf1c1f1dafc04","url":"assets/js/dc030738.a59fe9cf.js"},{"revision":"d7aae3b1758754b17647830cc4168c0a","url":"assets/js/dc109391.59fe3ea2.js"},{"revision":"b213f082b0fd028437bc53f7712a5dd1","url":"assets/js/dd1fbe6a.a58c97a1.js"},{"revision":"327994a5888d1d766fa12c8096a14c3a","url":"assets/js/df2a4a59.d7d8e743.js"},{"revision":"febb14f90599aa8f697d1293cb498a9b","url":"assets/js/dffb9609.e266d8cd.js"},{"revision":"099f187ab2ab42ef04dbfa314d04d725","url":"assets/js/e10e131a.9cf5632e.js"},{"revision":"755997184dc15e804d45b84c36e9ae6a","url":"assets/js/e17e6af5.4df65292.js"},{"revision":"a7e697c91a0db6cc019e52c184231e7f","url":"assets/js/e1a53158.064ca3b0.js"},{"revision":"8283a1b2bb463e82c997d5abc8b61581","url":"assets/js/e39d40ed.b6ee9bd6.js"},{"revision":"d7832c257807dee7a95fda083109ae89","url":"assets/js/e3b728f4.17e26003.js"},{"revision":"9fd7cbfb24dc347a8f7d3a75cccf67b0","url":"assets/js/e3cb94e1.43433d96.js"},{"revision":"068b84514e430fb74f1b5a041ecd9c2e","url":"assets/js/e47fd75f.5893526f.js"},{"revision":"1628e3d6b3b8e347df57dec1b0fd0e4a","url":"assets/js/e48b3322.bb4442ea.js"},{"revision":"576b23897ee16ce8d9cf7d2974077186","url":"assets/js/e4e92f42.cc203cd8.js"},{"revision":"264adfa85fc761628cad052fe0894b00","url":"assets/js/e5f7cd7b.c4f9eabd.js"},{"revision":"57829fc8d8893837dd7af692918a5df8","url":"assets/js/e6501e5b.4911818a.js"},{"revision":"67461e96b805ac35cd74f3f53d04de1b","url":"assets/js/e682932b.82b92610.js"},{"revision":"486c2aae0bc0fc8ee2b2dc512a075519","url":"assets/js/e6b53073.62a6f83c.js"},{"revision":"c5e0b9e1fdc05dce1f2f44b86bc577a1","url":"assets/js/e76d69e4.f1da8c76.js"},{"revision":"3ff4b3ad11745daa1b85814fceaabfde","url":"assets/js/e8d5b74b.2a760e44.js"},{"revision":"de57efd76dab554ca2325bd4d71f99c4","url":"assets/js/e8dd6634.e741a40f.js"},{"revision":"cea3b0093acd1b625a999e47088501ac","url":"assets/js/eade58ca.8f722135.js"},{"revision":"7c942fbda8f1230c8cdcdbeec05dc733","url":"assets/js/ed38b210.a6d90cb2.js"},{"revision":"f2aa820289461506efed279f77d9a58d","url":"assets/js/eda49e41.ec86eca6.js"},{"revision":"5f7f72aadcd8afebbb4278346a5ef353","url":"assets/js/ee84ef31.e9c8d185.js"},{"revision":"cd0a392cd4b2033c58f8a28a29dc7b42","url":"assets/js/ef72e420.63f29a23.js"},{"revision":"256c43309ee81f9d062cf376a6475ef7","url":"assets/js/f36074be.82e2950b.js"},{"revision":"a88a215c32b4189202f92182c410cc50","url":"assets/js/f3937ce2.110754ea.js"},{"revision":"6044537e7b9d104fd12feced9e30e905","url":"assets/js/f44068e7.2ef373ab.js"},{"revision":"8d4c156c369759788bf7fd30526d659f","url":"assets/js/f4e5f89b.c4b1cf4d.js"},{"revision":"d33c65e3bce00b22d01758095f3174fd","url":"assets/js/f58ceb15.7b0e8d2f.js"},{"revision":"b41178c0e8b9059500037d8b9e82ff62","url":"assets/js/f6420a7d.4edeed21.js"},{"revision":"134b0bacc2d0df049411aa6cc21a92cd","url":"assets/js/f7e672b1.a607ba2c.js"},{"revision":"7f9324367ae7cf7ce94a9fb00fccb72a","url":"assets/js/f83b6261.ccfa7d72.js"},{"revision":"18642da82d8d94f4d620bdd016d46f46","url":"assets/js/fa9e7027.add742d5.js"},{"revision":"78b0af1b0a23cc70828741106406c4df","url":"assets/js/fb274994.cca542c9.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"a43b2f225b83633bc34ea430b39c4074","url":"assets/js/fbcb1a27.0ebfbfa6.js"},{"revision":"e5af3dcd54b074612b2b630006a9d8ab","url":"assets/js/fc419e9c.3fb41aae.js"},{"revision":"b928377720a30197d1fe131b215b3743","url":"assets/js/fcaab584.09259101.js"},{"revision":"763f551da76e43b8472ef066951b94d6","url":"assets/js/fe5e75f3.55af3c9c.js"},{"revision":"cdcca8c615299d20ae10cfeb050608cb","url":"assets/js/main.13e9a994.js"},{"revision":"a2a5cc0e6e8443ecf3dcce7b8f1e66db","url":"assets/js/runtime~main.d598680d.js"},{"revision":"166950751e506562587a675e5d67138b","url":"basic/index.html"},{"revision":"7931889ec3a3b865a1490f5241600fd0","url":"Bedrock/bds-core/index.html"},{"revision":"49cac8c070dbffd3cf8f227df77049ab","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"9c161b59ecee4ae8558472ffa40e9afb","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"0e89c594dcc1d6afe8ae5fe1d5e29c45","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"1144863050bac3478f77f5fc36265eb5","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"ed87eeb92d621f5a9be8a91755466913","url":"Bedrock/bds-core/process/index.html"},{"revision":"42485c602dade1790ee20ef243ee0973","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"9546e90e70400184fc47b1154e88c480","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"0d6db23858b027b80ceba13c0544016a","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"77e34f746f990a8282a3404e6f54322e","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"46ef2b9f36630f86e86be31c7cceeb45","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"d57c4cf608d9de4fdf568d9294a5ca80","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"d16ca7607aa19fbf235224e404b20684","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"bf11184b43c679458d920e935a9082ed","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"2023fffd1f0e94aa2bd55192d0fee66a","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"d87f584977d6a56c43509d0dd4fa76ce","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"c2ed0d2a34347200df9841b2214dbf21","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"a2318f18cd95ae66ed2cc95624309765","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"6a2ab42927c4ce33ef9fc8963b02d35c","url":"Bedrock/bds-core/start/index.html"},{"revision":"ee0ed713d6d22723ebff438d70225d67","url":"Bedrock/intro/index.html"},{"revision":"d2b445a72fdd55ece16a322b4f215f02","url":"Bedrock/nukkit-core/index.html"},{"revision":"14399c153bcc57572fb0c03229b8ad98","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"cb26c6344f7481ce3c07aa88771aacbf","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"110b7c847a23e7c8bb424210a19af63e","url":"Bedrock/pnx-core/index.html"},{"revision":"98d98006f343fc1088dd8bebf6cdb8d1","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"025aee7dfc62fa81ad1750770189b6c9","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"313a3e915a5f5b40abbae53789f08788","url":"Bedrock/super-basic/index.html"},{"revision":"7f014627335869c4738fac148f969d05","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"df9727c991d4ee2fe7fde068f7f697f5","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"5e99b4562d146fcc81dc61a1886e377e","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"0e9a2d0863584b9eba83fac550ba8c0b","url":"Bedrock/super-basic/version/index.html"},{"revision":"a0ccd5f808aee14e9195deca59eecc17","url":"contribution/index.html"},{"revision":"ba136c8b49d9473b8898cc9fc600d89c","url":"contribution/todos/index.html"},{"revision":"5ad6f3b6b3fc7d1ede469a4088f968b5","url":"contribution/writing-specification/blank/index.html"},{"revision":"10f3c969e2a259b92e63a4a3f980c372","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"df589c52a4ff40e44ee0b36c270b1888","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"d75e3a40795a593470fa70ba8ec4a144","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"55e7eb7adec5542866d984df295a1c59","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"acc0cd89abbd4dfeabeab2edf449152d","url":"contribution/writing-specification/reference/index.html"},{"revision":"364778ee946969844019397c3c635c55","url":"contribution/writing-specification/text/index.html"},{"revision":"22b23e74e277050e8b36858849fa1919","url":"contribution/writing-specification/title/index.html"},{"revision":"c8356802c35a11ced5e013042b763840","url":"contribution/writing/index.html"},{"revision":"4e23397faa32433cadd749dceb5ae191","url":"database/backup/index.html"},{"revision":"f3b3d7c469d3176a095e8f5589f430a5","url":"database/configure/index.html"},{"revision":"dc6e5baeb05918d8f95842498a7190bd","url":"database/index.html"},{"revision":"7357b01311d60a5e5d822b5e5735f09a","url":"database/install/index.html"},{"revision":"060275af8f203b2206079a15d05ee298","url":"database/manage/index.html"},{"revision":"6e681d923a30d8df3442e612ff115c88","url":"database/uninstall/index.html"},{"revision":"236e7bf96b51d0f61177c7fde1db7a08","url":"deploy/index.html"},{"revision":"a6f585a1eb8633b04873d02a4dcc356f","url":"index.html"},{"revision":"1f9c08da2b53eae4726b763e708d5cf9","url":"intro/index.html"},{"revision":"55bb072c7335467a489521d8f7826b52","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"2b2e6122bc5304177ac2da335290ed43","url":"Java/advance/bot/index.html"},{"revision":"cf17c4fc9ca68a3a4aa532936be1b3b8","url":"Java/advance/chinese-username/index.html"},{"revision":"275b57444b6150338f6303937b52346b","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"64bb0220032cea088ed0c7f9be22285d","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"22b06539d533103885f341601777eb82","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"d20bd5ea06bb9926590b2ca40b433505","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"351f73757b993ead747fb4943adc5797","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"90529394bd2650d72d21da92ad548bda","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"cea7346ded36035e0474fd9dcb627e03","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"cce206da242d45e0dd17515cca1ec096","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"6020df97da5d40ea62d84392cce01d16","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"bda8717a44b33cfe48aab3025a70536b","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"0af45d7c755c30a9525049dbd73871b5","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"db64303ee4064910315094eba48d1ad6","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"f62a9f35ecbaf6fb71686cb2b51c052b","url":"Java/advance/database/index.html"},{"revision":"a7f405aa9ac1a11a2746b08782c3db60","url":"Java/advance/folia/index.html"},{"revision":"f8966593f717c88af1fac6ea755bfe74","url":"Java/advance/format-code/index.html"},{"revision":"ee1e14a5391a47188e5397f75c773d49","url":"Java/advance/index.html"},{"revision":"dde69e3fe8545298ec94579f83982c6b","url":"Java/advance/kether/basic/index.html"},{"revision":"2ecea71c9ae343c5e79dd3be241ca4b5","url":"Java/advance/kether/idk/index.html"},{"revision":"55589cf758575fff4bfca9392be5df4f","url":"Java/advance/kether/if/index.html"},{"revision":"f310e808dcd73665e0317ca77d9c75ac","url":"Java/Advance/kether/index.html"},{"revision":"b01eae65048922bcd2fa800c3c669427","url":"Java/advance/kether/math/index.html"},{"revision":"04de8c406eeb28110a4e4ec2ad09ca09","url":"Java/advance/kether/preparation/index.html"},{"revision":"3813b4a176c55ef6e8b46b0c49753b7e","url":"Java/advance/kether/variable/index.html"},{"revision":"014d75e2520f3d9cadfe09662ab9e934","url":"Java/advance/Linux/index.html"},{"revision":"159e5d680a2ac6a0afbb33d3e346e8c1","url":"Java/advance/loginchoices/index.html"},{"revision":"511decf43367873e3efe563c62289227","url":"Java/advance/MiniMessage/index.html"},{"revision":"527425161ef05a5b7d8495d460dde3f2","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"5dd2b5848042ff66ada81a93f98e6799","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"1e0dab1b4bdea69f0934fb0ca9ed16d9","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"f9bb077e5a823b3c3ff6ac266e708e4a","url":"Java/advance/YAML/extention/index.html"},{"revision":"955532475fb1bf41e3085916cacc7275","url":"Java/advance/YAML/foundation/index.html"},{"revision":"56e1d9cbdf552e67d187b97947da60f2","url":"Java/anticheat/index.html"},{"revision":"7c4329b7237697d2b44df966ad8d6332","url":"Java/AntiGrief/index.html"},{"revision":"2e4c76b0d69a2df316015991582ba2af","url":"Java/basic/index.html"},{"revision":"63b2bf3f55b46b9365245c5ef450d0cb","url":"Java/build/index.html"},{"revision":"850380c17481c3c426fe22d40062d06f","url":"Java/bungeecord/index.html"},{"revision":"1c13096583a578c9773a57dfa41715fc","url":"Java/category/geyser/index.html"},{"revision":"33823058cc36d7774385cec4270b734a","url":"Java/category/placeholderapi/index.html"},{"revision":"494f95bd71f3e9a76e952e8a4a06daa8","url":"Java/category/入门/index.html"},{"revision":"cf15a0de7cc9f3065338be7bc61b435a","url":"Java/category/进阶/index.html"},{"revision":"0698ea7eecdbab533490f25221657c21","url":"Java/chat/index.html"},{"revision":"b47b3d0f89fddc293da2839f28e27133","url":"Java/command/index.html"},{"revision":"79be632498704817ae4afa8496b347a7","url":"Java/cross-server/index.html"},{"revision":"5a300b1e40cbac55f771829e06e5effa","url":"Java/cross-server/plugin/index.html"},{"revision":"1d439db4f6e33e70f4eeed358ac124d2","url":"Java/Essentials/index.html"},{"revision":"bb9bd7ce700055ea8698d4ef16f97038","url":"Java/Front-Plugin/index.html"},{"revision":"8b63b089f5272c15fe7ad05a48c91815","url":"Java/game/index.html"},{"revision":"0921c60bad1d70b9346a13309565d181","url":"Java/Geyser/Upgrade/index.html"},{"revision":"458e1c91f30b3313495f662227a3095a","url":"Java/intro/index.html"},{"revision":"e0ff99966e3c368075ea283261bae40f","url":"Java/maintenance/Java/index.html"},{"revision":"6139c9675c184eae26c83e8ea42179bc","url":"Java/ManageTool/index.html"},{"revision":"981dc569ed69c0c238ba0c51f6bdf910","url":"Java/optimize/index.html"},{"revision":"85a7a0a070f83f968dfa459f0252109f","url":"Java/optimize/jvm/common/index.html"},{"revision":"efae528fb9ba81f5d422ae00e3af258a","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"4b0edbbc3e21dcf7d5d178f4d5a2d91e","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"73d0830152276dff1c8d0bdde74257df","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"e5f3ffeb207782cb58041395d9bb98b6","url":"Java/optimize/jvm/index.html"},{"revision":"4797818a6d998b41b0ac289d1c4e32ec","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"3f4580f5e9e53fa87bdb320d3696c140","url":"Java/optimize/jvm/zing/index.html"},{"revision":"4f813453650f72f30e3166c0dba9cd03","url":"Java/OtherPlugin/index.html"},{"revision":"b1184e47c135b96b39b509712987f064","url":"Java/permission/index.html"},{"revision":"bd2feea3a498bee979662170ace9d8a7","url":"Java/plugin/index.html"},{"revision":"7489338dfa34c0be6e5ebc6797123e4e","url":"Java/PluginMagagement/index.html"},{"revision":"9f79cf74998c815203fe877835dbdbe8","url":"Java/plugins/other/Skript/index.html"},{"revision":"0022c5c2554b9b97425e8c01ec914667","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"90692767f92b6ceb9dc08dea30564d84","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"0f164b70316d0c48a07eef55122ff7cc","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"5964a1c1d195f6ff7162e1e9f538d62c","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"7287b1d8a22138f3efdbd27e768f0a8e","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"40effc6b3a1cfbfe3acf6051cedb1f09","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"dc4c546c7bf3fe5ca95fa3f0ac05e2b9","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"6cc59702b1271cf228344a2dde4413ac","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"de3a8aa9c4e3588f6542f4939d87beef","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"276854788359b0803d54e22971802788","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"ac3fec742b313650bb6d9c5e2a68263b","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"bb58b5810643a26894dd5874e2ad70c7","url":"Java/preparation/index.html"},{"revision":"edc49fc68728bb9252fb485a1d5e5606","url":"Java/preparation/text-editor/index.html"},{"revision":"9ab6530e19ff6e19ab1b269e4e0b883e","url":"Java/preparation/websites/index.html"},{"revision":"df97df65d1c7778d397b35c13a669e8d","url":"Java/process/index.html"},{"revision":"5abcda078e0d319c4fb3e0e6fb86aad8","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"2137baa9ab0468454522195c7ef5e4cd","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"e7992ae54085f70affe09847c2a5a566","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"7fe98d91aebe2ec1c81ee36f74a1b0d2","url":"Java/process/maintenance/backup/index.html"},{"revision":"82aa677b9f4b3eea9b0ffc793aba555b","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"291e6c11f0f3864dde21ec55a3da8d83","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"2a2061d82d31fc5c11dc9f42a387aa9e","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"be62b16d4b3961063b073c02d6eb0eec","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"2f4d0cb35f10469f16f021953ff46a49","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"760bff98715ae84f6189c5fb59004eba","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"465bfb381ed7b9a36e7fa22e171337c7","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"49e2b2e1cf16e32fe50e92b061560d61","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"89192139936dacbccda87383dadeab26","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"87aafc3c72ee71b2adc120d4ecc6fa01","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"46766f6b76429685a4724571db6ae5a6","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"1f84d0015e02a4b404155d57479bf903","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"aed81aa4f4f7ad506403afb50c69fbe2","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"72eb67130a76f3d370140bc5b4ed9001","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"3be665f633c7e3e320dbca911ffd50f1","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"3afa7ef21864803a43f98d8f20ac52f4","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"cef8f4bc7ee11f3918c4753f065d993b","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"7772c1082a7f2cd0cee69fce0a89e75a","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"6f6df01f2cc5a9862c1e6e24116baf73","url":"Java/process/mobile-player/index.html"},{"revision":"753f3effeac7acb2c6b752591cdcc3d1","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"8e54dc8b654544f02614a44161ea0c42","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"b247a7172014fb9cdc25df371762d835","url":"Java/process/plugin/config/index.html"},{"revision":"be737fc767f6ed4adcf082b50c06340e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"85af423c68341af768de9c2797879e5c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"eb64d5d170ba7263d7842239aac15455","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"946559debc93f2b0ea08af2801e6277a","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"f799213f5241f7b1712bc54c693233b2","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"9ed5c65d0ca7831c9529c61fd5ac8398","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"df3f4348ca6b37dd5f4f2026852fa5fa","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"d6543a2c12d465e379ec4d18e094b092","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"2c28a721f13fca6dfce3850ffda5c3a3","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"cffa89b6e0626ece1fd6b489d4f4f5f8","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"d3543489d9f35c8fc43f5da9ca7fc63f","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"891ed252cb2a79177b5b9c36c410f261","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"1f3cef46c5dc5e4e5c69d3975aac2554","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"835fb9a517a07491f718f7e7289eff6a","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"f8db72fe60bc9dc61ecf70b8b7d341d7","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"61b50b81aa3b86a197716dbad410538e","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"d1d6f16444f3d0058acb61cb7462f8c6","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"66d8a72fe655eda22c33fb1e733e775f","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"650d8fa1c665bc45c15191128ec38433","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"364ea10551acc250d91614a4b9d85208","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"939aa3d364dbf8c881aed455a049e2fd","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"6e61a49734829ab00b4a6e0ad85af0fa","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"838c7b6137ab16b6ca0b6fa07f41c759","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"9d38c8387c1c65f45b3e936e58e683e8","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"0b06fc1c0e1c1d1c11b4f29b0a4c6c65","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"6155d571051db278d7f4589e81beeddd","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"d19e5cfe22ba9d4525b85b499df7eff2","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"8eef9dd9900e8e89e51360a7a57822e0","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"71d5ef0c16e138fecc03b0cb0db44dfd","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"656f5c91f1e1f9043ffd010209c9b75e","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"498eb67a5605eced2d095561ef871837","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"368ea951354e58b132f1c420ef1d73a9","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"1e87f448bdc36d64d68e04a1a5f75430","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"c178c5b516413be56f0732ba362e8bd0","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"f0e253f5d74e893114624eaa8c0a8e63","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"9bfb45c15f6ea4909d2611248973db10","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"a3aa859318fb2f9803a3ef85bbbfbb04","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"5769077919caca7e6d7dcd12e290b66c","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"bd07b442457603a36669635a1937ec59","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"844872d5d1888ece729ac12736161394","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"c389783dcd052d45a4a45e558178e22f","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"414d66610ff069ca80949ebcc8b40c63","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"06bbfbd9c7da59d3a81d1b761506b202","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"9a9ce6e1806e789690becbb5df4858c9","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"5dd330859bb640e4b8367df20e9e0a81","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"8cb92a2178d35c1b636d9f5448312832","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"7b4000851d79918e9a885c8e0d7d79ef","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"b5ad93c2d6c6d71a5efa74a7c0c83480","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"70408fcc90de495894412c3207961cec","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"5edac66d5b511a77e74aeb37ea15c67f","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"4877d88f171cdab6591e969c91a8d844","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"3f1008e2232551906021459d882c766e","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"8de2e560f07bf3e5a7e949c412f90694","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"5887052e3cc1a091b0242bcd61429bb5","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"3b2c0421287d2521d1117ed6da5adc1f","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"56adfb6f9728bf0120952eb50f3a40cc","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"b1936cbc95b74ae2bce28279bfed98dd","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"01daa01da7101a72441a9cfab49ca262","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"63a589b8e2499ed23e71f372431e0a55","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"9f7c6d29cf8f86742bce2927b07b15fc","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"056ee5b4532df912b36cbe4e4cd9ea3b","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"6b494f24686f29a8052a8fee7f048d56","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"621afc25ffbcf9cb924c1e53187c492b","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"a379336b25ab40db3602fca4c3e05ca0","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"91a8e07abb76a9ab9b9044e84e8bb201","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"1f1e245271913b9f46a2e612876ba8df","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"aca2a5d23b132a0880c691739fdfac7f","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"fabc0ceb73f8f0ea4e6cf1bc3c677c09","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"acc1af74e71c6d69e6d9c9afa344339e","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"f22cb660e480d40aca1717090b0a7a34","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"616fec687f1c164e178a5e78a8ae772c","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"738758a5392ade725b7999b2299998b9","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"0b7350a684d50ec6bfc25c8ed92db80e","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"5a4c34dc4bfaef17b842f6121970f047","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"b3dc311324706c8c3ece7886eefd6026","url":"Java/ResourcePackManagement/index.html"},{"revision":"8ab0b2a3581d61914d2e615bf4ba2213","url":"Java/services/index.html"},{"revision":"8c5f0aad63b71054054011f4d3b4dae4","url":"Java/Slimefun/index.html"},{"revision":"9499ed8487df912427d1ab9b5419c731","url":"Java/start/ask-for-help/index.html"},{"revision":"8e75631bcfdc49b36f5a3f9342523b17","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"ef6dbef302f8121add9e0eefa4048348","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"67bfb11f159fc6ab1c869390ec665dec","url":"Java/start/basic/server-management-command/index.html"},{"revision":"9502088b36c718b0cf560c4f137f99bf","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"199dd24356dc2a65e3ba4120dc80aaac","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"62a8cbc2e50492d9e7c79dfa081cd414","url":"Java/start/basic/what-is-log/index.html"},{"revision":"6397aaf9fc0167a56c0eaac59bdcd84b","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"2529bfaa32e88c5aea9749fb87d53573","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"2ee4a001687bc59331b7520b8d732026","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"c2a2e0cd4dc54fbb750bb9ea0078206c","url":"Java/start/basic/what-is-server/index.html"},{"revision":"1bfdebbe57bcbc5274f76833366cb211","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"a8d475355204c20a1d377d73c6462fc6","url":"Java/start/basic/what-is-world/index.html"},{"revision":"e31b9e83dbcbe291d3eea8f57213331c","url":"Java/start/config-server/index.html"},{"revision":"2fc2d587a9aa1d76111cae3206a60f00","url":"Java/start/connect-to-server/index.html"},{"revision":"ce17656ae7e74611cc34e8a04e0c374b","url":"Java/start/deploy/index.html"},{"revision":"421a43dce60cf63c70f814a4e6eb9ff9","url":"Java/start/index.html"},{"revision":"81bc12afcf538f8065a8d4178fd17cb7","url":"Java/start/install-server/index.html"},{"revision":"3058c827827faf24f76bb809b025bfb8","url":"Java/start/launch-server/index.html"},{"revision":"30cc69f8eabb4d81c0fe9258daf2df84","url":"Java/start/server-core-choose/index.html"},{"revision":"25cf2ff316e3a39241627d6ccd4265ac","url":"Java/Sundry/YAML/index.html"},{"revision":"83351dc899b103fce8ee38587eb70ac8","url":"Java/velocity/index.html"},{"revision":"fa6e0b6f63dfb9da87a5ecf1f4df5ee7","url":"love/index.html"},{"revision":"5730dc7688ad5223dd77387975f864a9","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"f5eaecbb359f2e31e8938841285817d9","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"3c0d33d6698bc93ee5405abe06dd43b3","url":"preparation/dumb-script-using/index.html"},{"revision":"9b064e4c7cac1a3b07db0cd545d26628","url":"preparation/index.html"},{"revision":"ffe8be01e7577252636fffe0232f789d","url":"preparation/text-editor/index.html"},{"revision":"f58e8a45664076a1d07d1b66265858fb","url":"process/create-art-assets/index.html"},{"revision":"fffa2e5110b8443739a9e5a2717c8ef1","url":"process/dashboard/index.html"},{"revision":"47ceff33593d518a1e5f73bd47f10160","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"0c4636cf8199728ff6cffb1c665d3610","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"58941a53c2b3b186f5282cb55c6b7f9e","url":"process/deploy/intranet-penetration/index.html"},{"revision":"0a561138c80346da72d8c01b1a97f5f5","url":"process/deploy/optional-mode/index.html"},{"revision":"b1cb28c268f3da411a89cbfb684a65ba","url":"process/deploy/purchase-server/index.html"},{"revision":"ae4bf8a060aaaca8a9d6ae26b25a434d","url":"process/index.html"},{"revision":"0e2b27342f4867f61ea0a026e56fea33","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"0d65d5e2a72245051e36460ce75512c7","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"e5e7079ee1fdd336cd5c0f2aa0159196","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"65a27377641da3faa115b6d6b4f7b415","url":"reading-guide/index.html"},{"revision":"8df8c5dc3a257dde90bd7e90266c4bc0","url":"search/index.html"},{"revision":"22bf6cfa7508565dfc51a5a981c7efc7","url":"services/index.html"},{"revision":"952deebc8cb493ec9a71f93440e742a0","url":"start/ask-for-help/index.html"},{"revision":"429512f1c9c19aafbcedc8981c10ef35","url":"start/basic/what-is-caton/index.html"},{"revision":"3daeb9e38ff141a716603a55fc49fd59","url":"start/basic/what-is-log/index.html"},{"revision":"9e1465424843dc0c2967640d7627ecf8","url":"start/basic/what-is-messy-code/index.html"},{"revision":"dde017c0df19448a857edde5d66ad82a","url":"start/basic/what-is-permission/index.html"},{"revision":"865fffb23edd82bf2806585712223c2f","url":"start/basic/what-is-plugin/index.html"},{"revision":"a9b8e9c98206769bcef783a4376e76df","url":"start/basic/what-is-server/index.html"},{"revision":"7bea817e1709683735d82b7edfb62966","url":"start/basic/what-is-startup-script/index.html"},{"revision":"9dc620a83dfdc85b37888e1fef56bc57","url":"start/index.html"},{"revision":"3db75cb62864fa5d5a6ca4b7ef4d7cfc","url":"Sundry/Advance/Linux/index.html"},{"revision":"fb9cbc551954b1b9887ee34c57625fa5","url":"Sundry/Advance/management/index.html"},{"revision":"907ed592fcbc8ef578238c1b6eae82dd","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"de3282a4c597e13101a6d0a5d8a3dd41","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"af059dc9fea2ad05e3bd331e16c1a2b3","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"2f88052ee0b6be9e4d063a6951216bd4","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"4eda62ce1316d33f915cc0b22f2e7c82","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"328f50549ba1eabfd43beaa01ac960ca","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"2b034ebadbb5609c3f284b30a72cb4eb","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"097f4567249eb797a49b841debd126fb","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"9f8ed5f464001edc467db143bc2ec70d","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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
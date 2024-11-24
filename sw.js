(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deferred: function() { return Deferred; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkboxError: function() { return WorkboxError; }
});
/* ESM import */var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return finalAssertExports; }
});
/* ESM import */var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheMatchIgnoreParams: function() { return cacheMatchIgnoreParams; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheNames: function() { return cacheNames; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  canConstructResponseFromBodyStream: function() { return canConstructResponseFromBodyStream; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  executeQuotaErrorCallbacks: function() { return executeQuotaErrorCallbacks; }
});
/* ESM import */var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFriendlyURL: function() { return getFriendlyURL; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logger: function() { return logger; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  timeout: function() { return timeout; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  waitUntil: function() { return waitUntil; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:core:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copyResponse: function() { return copyResponse; }
});
/* ESM import */var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* ESM import */var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
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



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messageGenerator: function() { return messageGenerator; }
});
/* ESM import */var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messages: function() { return messages; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  quotaErrorCallbacks: function() { return quotaErrorCallbacks; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return PrecacheController; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js");
/* ESM import */var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* ESM import */var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* ESM import */var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* ESM import */var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* ESM import */var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* ESM import */var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheFallbackPlugin: function() { return PrecacheFallbackPlugin; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheRoute: function() { return PrecacheRoute; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheStrategy: function() { return PrecacheStrategy; }
});
/* ESM import */var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js");
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:precaching:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addPlugins: function() { return addPlugins; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addRoute: function() { return addRoute; }
});
/* ESM import */var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js");
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cleanupOutdatedCaches: function() { return cleanupOutdatedCaches; }
});
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHandlerBoundToURL: function() { return createHandlerBoundToURL; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCacheKeyForURL: function() { return getCacheKeyForURL; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController; },
  PrecacheFallbackPlugin: function() { return /* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin; },
  PrecacheRoute: function() { return /* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute; },
  PrecacheStrategy: function() { return /* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy; },
  addPlugins: function() { return /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
  addRoute: function() { return /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute; },
  cleanupOutdatedCaches: function() { return /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches; },
  createHandlerBoundToURL: function() { return /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL; },
  getCacheKeyForURL: function() { return /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL; },
  matchPrecache: function() { return /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache; },
  precache: function() { return /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache; },
  precacheAndRoute: function() { return /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute; }
});
/* ESM import */var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js");
/* ESM import */var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* ESM import */var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* ESM import */var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* ESM import */var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* ESM import */var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js");
/* ESM import */var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* ESM import */var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* ESM import */var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* ESM import */var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* ESM import */var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* ESM import */var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js");
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




}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  matchPrecache: function() { return matchPrecache; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precache: function() { return precache; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precacheAndRoute: function() { return precacheAndRoute; }
});
/* ESM import */var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* ESM import */var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheCacheKeyPlugin: function() { return PrecacheCacheKeyPlugin; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheInstallReportPlugin: function() { return PrecacheInstallReportPlugin; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCacheKey: function() { return createCacheKey; }
});
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deleteOutdatedCaches: function() { return deleteOutdatedCaches; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateURLVariations: function() { return generateURLVariations; }
});
/* ESM import */var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreatePrecacheController: function() { return getOrCreatePrecacheController; }
});
/* ESM import */var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printCleanupDetails: function() { return printCleanupDetails; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printInstallDetails: function() { return printInstallDetails; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  removeIgnoredSearchParams: function() { return removeIgnoredSearchParams; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RegExpRoute: function() { return RegExpRoute; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
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



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Route: function() { return Route; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* ESM import */var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
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



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Router: function() { return Router; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
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



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:routing:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerRoute: function() { return registerRoute; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js");
/* ESM import */var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
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



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultMethod: function() { return defaultMethod; },
  validMethods: function() { return validMethods; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
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


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreateDefaultRouter: function() { return getOrCreateDefaultRouter; }
});
/* ESM import */var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeHandler: function() { return normalizeHandler; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
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


}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Strategy: function() { return Strategy; }
});
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
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


}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StrategyHandler: function() { return StrategyHandler; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* ESM import */var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js");
/* ESM import */var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
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
     * - cacheKeyWillBeUsed()
     * - cachedResponseWillBeUsed()
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
     * - cacheKeyWillBeUsed()
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



}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:strategies:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController; },
  PrecacheFallbackPlugin: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin; },
  PrecacheRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute; },
  PrecacheStrategy: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy; },
  addPlugins: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
  addRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute; },
  cleanupOutdatedCaches: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches; },
  createHandlerBoundToURL: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL; },
  getCacheKeyForURL: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL; },
  matchPrecache: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache; },
  precache: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache; },
  precacheAndRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute; }
});
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js");


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.1.3";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.3";

})();
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs");
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
// https://x.com/sebastienlorber/status/1280155204575518720
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
    const precacheManifest = [{"revision":"b71c3515fbb85e8c35f9fa7d05df9a0c","url":"404.html"},{"revision":"7c7838f8ffcb2ae78e945df400f69040","url":"advance/bot/framework/index.html"},{"revision":"454a5049c3e08838a261af181ffa16de","url":"advance/bot/general/index.html"},{"revision":"85895ce920fd1287ecc36241f0894174","url":"advance/bot/index.html"},{"revision":"ff7a10eea3968c035b722b15a9345246","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"628c3a9d4fac5f0b0d6a87c373278266","url":"advance/index.html"},{"revision":"b24aa5969a864db194323708a41ad67f","url":"advance/Linux/backup/index.html"},{"revision":"58cdbcb295b955b1cee226d7f9dc2a13","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"c1d703224faf94cd784a7b09b8ce0e7e","url":"advance/Linux/frp/index.html"},{"revision":"9c7b773f8d39c616b78abaaf30c1da1b","url":"advance/Linux/keep-running/index.html"},{"revision":"ff8e6f188579fac50e9b1e4d25ce2588","url":"advance/Linux/start/index.html"},{"revision":"9403fe486321c22bbef526c47f8b6b81","url":"advance/open-website/index.html"},{"revision":"330ea83a54f425999335c5803476ca97","url":"assets/css/styles.27cd6a48.css"},{"revision":"48d454521b463b091875f9ffa07355a0","url":"assets/js/005c270b.87c88c25.js"},{"revision":"9976b3b528c06570672d15954323c735","url":"assets/js/013c8c14.3e818910.js"},{"revision":"b3e51f77a6870177869c56e708098fab","url":"assets/js/026f291b.754c0731.js"},{"revision":"4033a582afa395b5debe14b718f87a92","url":"assets/js/0272dc73.5b558ae1.js"},{"revision":"8f55f683b32d8ce0b4d7191076f8ff43","url":"assets/js/035cfa77.f25028da.js"},{"revision":"3d435625f9a7fa2a2be7b14ab546bded","url":"assets/js/03b205ee.dc6cb392.js"},{"revision":"3b34d3b192735bfcbf13174f7cac4bed","url":"assets/js/03f997a1.d44330b5.js"},{"revision":"03b32e34ae853d7a76492d63f6214d4b","url":"assets/js/043fa146.fb0d0324.js"},{"revision":"16dafb121a44c7c58c12f5ad29a4302f","url":"assets/js/044f41a1.09b5e90e.js"},{"revision":"6bef093cd57fac11ea142d97b1f3096f","url":"assets/js/04f5c692.ddc1b378.js"},{"revision":"1d94866b0c26e59b96e5323d749602df","url":"assets/js/052366f7.a5eb3e26.js"},{"revision":"7ce16bbdb97a46b1b15e693dbfec43fa","url":"assets/js/053e2f33.e0165583.js"},{"revision":"a62c6f14369e307e75bebde539b8a777","url":"assets/js/058608ed.6ccd73c7.js"},{"revision":"69aae7ce99ab4c2ce6a93c266b1967ce","url":"assets/js/06b0ed59.4f0f051a.js"},{"revision":"8d55d6756494499dfc70c9e49bed9d13","url":"assets/js/083acdf9.b9e7ed35.js"},{"revision":"ab0bbd1782e254832e7f9d8dc59c5bc0","url":"assets/js/083ebe2e.5b1927db.js"},{"revision":"80d212f4ef4e94d39374e8bb534da2b5","url":"assets/js/08e7f72a.1218aa3f.js"},{"revision":"63a9e9c27eadaa86c4c930b68a914a4a","url":"assets/js/09156d2e.9dc09f2b.js"},{"revision":"c291cd59ae926d1e5e31c1fd34fdee97","url":"assets/js/094a7dd6.5a386ac6.js"},{"revision":"1d0dc48fe58d34b9c243cbaea5b63bf2","url":"assets/js/09714880.a0c8edd7.js"},{"revision":"ca089e26e7f0a45eb99cf21ee47b8fb4","url":"assets/js/0a17cf6d.4e92ab32.js"},{"revision":"fd26cb0768b18692383799d05c69698b","url":"assets/js/0a1f9916.d3ee92b8.js"},{"revision":"4311a003575c67af87d8cb19280bfdb2","url":"assets/js/0ac0b3b7.d9f51a9e.js"},{"revision":"9cf52199465be94cc93f5a895751212f","url":"assets/js/0bc00c24.8e1417f5.js"},{"revision":"4be02825cafd14b47d14c95f5aead816","url":"assets/js/0bcb5d9e.96ba7d92.js"},{"revision":"7e2731d1a3cd54213eb6f9abc916c105","url":"assets/js/0c20e5c5.d5b934cd.js"},{"revision":"fd35305dabadabace7accea495db0765","url":"assets/js/0c7f12b6.2ecc2061.js"},{"revision":"c4f49d4d9758e6f178bd05f0c73ac129","url":"assets/js/0e384e19.1d8e2875.js"},{"revision":"c32ceda5612b5416124c1326376afea2","url":"assets/js/0e9ef1fa.57201515.js"},{"revision":"0913d9286b8e6c18464bcc07d4b107e7","url":"assets/js/0ec7bf36.ea33889d.js"},{"revision":"ae62ff19d3ce5dcdcbad918b6b861701","url":"assets/js/0efa0f03.1e4076c4.js"},{"revision":"268261df1c8cecc91f9619676a2d9ea2","url":"assets/js/0fc807d9.19ed72ba.js"},{"revision":"dfb83b3c2a721fcbfd3bb41d107f275c","url":"assets/js/11f90be3.1d072b79.js"},{"revision":"364baa5973396896dce9ed574db9c545","url":"assets/js/1210f0b1.2c652bc5.js"},{"revision":"76f5c0acfb313c8fa12d9f75f7eb2ab0","url":"assets/js/1222.b8c0ad30.js"},{"revision":"cdb8aa250f5be94b4882fb5492f68b2f","url":"assets/js/144520df.72aadd4a.js"},{"revision":"40fa841a4c79ec1777bc76518d93bd7f","url":"assets/js/149.2218b71d.js"},{"revision":"ad4712d73a2c331010e1f759fe55314e","url":"assets/js/14eb3368.ef45ac04.js"},{"revision":"1410e591b8c584708a5e37b686a1f1d4","url":"assets/js/1503.ef37dadf.js"},{"revision":"b2f2c67c053b09da4095a01d85fba307","url":"assets/js/1594.adbedf23.js"},{"revision":"d2f455164abdb4651ffedb5b58b0de7f","url":"assets/js/15daf372.e7c07aff.js"},{"revision":"5fb536e2b8f526aa95f9d2bd391f41a9","url":"assets/js/15db17c1.d7051d59.js"},{"revision":"7c560635a259acb40b3a699334054a67","url":"assets/js/15e4e3ed.e96f5740.js"},{"revision":"7f2fd8e0a79ee91e79616415de310489","url":"assets/js/1603.07fc4d36.js"},{"revision":"e30ea29a4d360e02fc3dba76e3ab90b7","url":"assets/js/16731d58.ee18fc30.js"},{"revision":"1b8e8e3b8f9f671c10eaa6bfb2e41deb","url":"assets/js/1706.5601d20c.js"},{"revision":"ebad505eeeca30a6115109db9cd1cdfa","url":"assets/js/175f0af4.dd013ea3.js"},{"revision":"88d13ffd38456f99908dd055a8c5ae3c","url":"assets/js/17896441.9c642e34.js"},{"revision":"1466652e65534d3e35f04a775e4dbe67","url":"assets/js/180bc163.0059e5ec.js"},{"revision":"dec7cd45f62829398a45ad8a1d023016","url":"assets/js/1856fe2a.a88cfd0c.js"},{"revision":"19e67e5feaa1bf13eb2dd041367128e1","url":"assets/js/185d6330.a652f77b.js"},{"revision":"a3956d9215661073a8b967d805735c18","url":"assets/js/1896e6f5.d865473d.js"},{"revision":"a1fc99d586692b39a9070ee42575aa0c","url":"assets/js/18b67442.306f5b4e.js"},{"revision":"988fd00c9ef07590dca5567019b1959a","url":"assets/js/18bca995.534ebb52.js"},{"revision":"9c1e78d4cda80ba0e004b0636ec67af9","url":"assets/js/19045c37.47530f7a.js"},{"revision":"8eaf138daee5252d0e2a8f8c5f3992d0","url":"assets/js/193a055b.5e0bae5f.js"},{"revision":"60c6604019e688f0fd7f2b07ca9eefae","url":"assets/js/1962.dcaa69e6.js"},{"revision":"e1f5181fa44dceed52c14daa8d6e7c70","url":"assets/js/198ea2e3.597f5164.js"},{"revision":"02216a95d455a716f1f4ca2042586d0a","url":"assets/js/19cf8050.eee36cd0.js"},{"revision":"0c7a510cdcd2dc196c1c4491cbe807e5","url":"assets/js/1a4e3797.ae33eca4.js"},{"revision":"ee03a0f7c1bd1c20e75ae2e497767ce7","url":"assets/js/1c42be93.1ecbe4a7.js"},{"revision":"a81df2a3a53b2d4108f81b23a3c82040","url":"assets/js/1c6846f9.b919c8da.js"},{"revision":"8909cf7a1ed217e93f138fa53cdb2230","url":"assets/js/1cf75b4f.82773d3b.js"},{"revision":"b1a661c0ab9f5c78ad2fcde26b66a9af","url":"assets/js/1d1b9adf.23392e00.js"},{"revision":"72073a8ac474b990e6233a0e7768206d","url":"assets/js/1d42ad15.9f69e1fd.js"},{"revision":"84dcffd6f1db5d96a1324a9b9c93b951","url":"assets/js/1dfd2628.facd4b69.js"},{"revision":"0b3164b75d2790c23c319a7f4d3f2fd6","url":"assets/js/1e47cbc1.1f8c68d2.js"},{"revision":"0de173c51cc75ed0dfa36bba06a1683a","url":"assets/js/1edb7625.3a46e8a7.js"},{"revision":"4ef6410e531f746f1d725d0cd8483eb5","url":"assets/js/1ee6f0d4.4bc7b51c.js"},{"revision":"a0ec44e88c5b2e6b53a9478f352f797d","url":"assets/js/1efacac9.913af847.js"},{"revision":"cb26ec60f7a8affa3e07b1eeabeae6b1","url":"assets/js/20215aa7.91361b6a.js"},{"revision":"739eb67af06ff9f0ffccf7ededb7fbac","url":"assets/js/203.a53e449f.js"},{"revision":"9747a9bc4cf080b51bef1251be7faddf","url":"assets/js/2067.72f75d9f.js"},{"revision":"b5546b507f6c5e5053e62c49169e02be","url":"assets/js/2070.f48ba274.js"},{"revision":"650c7d168e053b014061dd29a5805e48","url":"assets/js/20d69604.b18d46f0.js"},{"revision":"10e023ec99f2a632126602412f2a21ab","url":"assets/js/21484c29.23a93b2f.js"},{"revision":"8921cdc71773bf90d441cf80a92b2ca6","url":"assets/js/21c534b6.0dfe77da.js"},{"revision":"441a246ee13c8d563e1d77454f27256b","url":"assets/js/22dd74f7.4fc2b7f0.js"},{"revision":"b5c7ff5e74131fb0e8dcd12207b90422","url":"assets/js/244418a2.59f4d509.js"},{"revision":"00718d0e3fe0775082287aceb176931d","url":"assets/js/24a68a77.fc4e01d0.js"},{"revision":"600a685b223229cd9379aef42efbe4bc","url":"assets/js/24d8f7d7.935c17c9.js"},{"revision":"225372943ec50a5357ea3deb2297b5f0","url":"assets/js/254a43c9.0f2e878c.js"},{"revision":"7e48cdb9e82cd4de918ecffbbcc13bbf","url":"assets/js/2860.be3c5efb.js"},{"revision":"91d63de1478e3352dfbd656fdcf51ccd","url":"assets/js/2867c0df.f8c07797.js"},{"revision":"22297c745968b4c4804e64cfc31962bd","url":"assets/js/28b71cf3.1b748ff7.js"},{"revision":"a3dc39eeb4e13a5674b3b5f3d471183f","url":"assets/js/2a71d676.951bd735.js"},{"revision":"a85bcc808b8742307fb79c6068b5d17a","url":"assets/js/2b4e0304.eda89848.js"},{"revision":"9caca9a0f058bcd9630ecf9fe09e50ca","url":"assets/js/2b9de2c0.fa71832c.js"},{"revision":"f3cf82737554521b24d6c747e815a790","url":"assets/js/2ca153e3.c542d88b.js"},{"revision":"440bda49824ef0ea6cb56f888680aca2","url":"assets/js/2d386ab7.8939cea9.js"},{"revision":"8a47b1bf3f6803902a47e0014110fbd5","url":"assets/js/2d5e3179.c17d54d8.js"},{"revision":"5e4a1c79bad852695ca010880d58c101","url":"assets/js/2e79c762.535e7060.js"},{"revision":"5743b9fe3692d5fa33dbae55779ea567","url":"assets/js/2e938706.ecc76c55.js"},{"revision":"0648bc26a5d9c3fe9b48bb98c430c206","url":"assets/js/2f39a0af.7bedb731.js"},{"revision":"dc5eb9dbfbcb411e25baeb7937585739","url":"assets/js/2f8ede37.89c622fe.js"},{"revision":"1aac477aa09db9a49e7ec6ce8c66c623","url":"assets/js/3087.b8d2f4d9.js"},{"revision":"8108f915e650bddb1a1fe94a84151c5c","url":"assets/js/312f6c84.a3e2ac5f.js"},{"revision":"0f4717a0d6dad0dd0aa06a8a3bf724c3","url":"assets/js/31735ebe.0d8ae775.js"},{"revision":"32a3705076243db6c6ea9990041ee3dd","url":"assets/js/32cf0cce.bb68b098.js"},{"revision":"e87b7ce87509a59e6ae3fb33e0ef0df8","url":"assets/js/33261842.893a34bf.js"},{"revision":"4951049a2f31e9a88571f6beaf211b31","url":"assets/js/3345.ca73de8a.js"},{"revision":"c3e28595daa838c0d03796e473b50033","url":"assets/js/3425fb39.5b4fd5ea.js"},{"revision":"cfb4da2efb92bea96344d974f00ed2d9","url":"assets/js/343bb2fa.6257ddef.js"},{"revision":"70b298d7d3d60980f94efa691f7bb588","url":"assets/js/3488027e.0939f5d8.js"},{"revision":"1ec9d6decf38cfc537c9829211b76528","url":"assets/js/349d9c34.d81c9e98.js"},{"revision":"abfd4a4d2d327e624dd74da81cc4c0c2","url":"assets/js/359195cb.26c2a785.js"},{"revision":"6f2f431506cc233535c46523148a7469","url":"assets/js/35d30f29.e436a9ed.js"},{"revision":"4d75dd6a5a346f6bf7b90478a883a912","url":"assets/js/36c75202.36c4f5f6.js"},{"revision":"5cd751a1d9eb91ab8c1f1115b53c8797","url":"assets/js/3749f972.41c09fed.js"},{"revision":"ef37e8ef172ec46d0a19f945afacdfac","url":"assets/js/38b0474b.c4427a73.js"},{"revision":"8f37c603a1ee92d8318ea7179bca943c","url":"assets/js/38b71911.988f6233.js"},{"revision":"aef5c1a5a4f72498e6334023251fea96","url":"assets/js/399101db.8d24441c.js"},{"revision":"927293e0028c9be00c531387d5a259ad","url":"assets/js/3b8970d0.a7f62c06.js"},{"revision":"e1a4853eec2d3a3c3c9e7b3f8ab82838","url":"assets/js/3bb1ea30.abd8522b.js"},{"revision":"3758712eb859906e66ce6da3e8ebc03e","url":"assets/js/3bd1ba02.c737f046.js"},{"revision":"496dcdffced3330f00cba4fc2b28f7c2","url":"assets/js/3c5393f3.64a909a2.js"},{"revision":"7fae6b55f71769fdfac222b1ebc63a8d","url":"assets/js/3cd38fda.fd109670.js"},{"revision":"42edcb76653be5a96d64b597d8453d89","url":"assets/js/3cd65ff0.3676ace9.js"},{"revision":"638c21f4040e985d9ce2d038b2806a10","url":"assets/js/3d7f94ff.363d3bdd.js"},{"revision":"65f40198e08e95aaadddd1dbe3120355","url":"assets/js/3dd749a7.892e59a9.js"},{"revision":"567e5434289bd84acd6cada3961c544f","url":"assets/js/3f11f8ee.0b2ee1ae.js"},{"revision":"f18209c602ec9055409ed72fdba6e833","url":"assets/js/3fbeb9b5.4e911dfa.js"},{"revision":"8db66c90aebf2228864b55bb47055a61","url":"assets/js/40c17158.61adf370.js"},{"revision":"939e7229a7f8c96db22aba2a31796251","url":"assets/js/4103.7a2d5265.js"},{"revision":"6157718d7d8a7296e22a6c2fdcc45567","url":"assets/js/416679ec.1cdf783f.js"},{"revision":"69a3332e6390018834eda05cd6108272","url":"assets/js/41c0ace0.2265af8b.js"},{"revision":"5c4f970829ca0bdf70924b389a9b5c06","url":"assets/js/425e3dd1.822107a4.js"},{"revision":"52d662c3e0218e0b42e6334b5f4ad5c3","url":"assets/js/43117a18.1b62fb5d.js"},{"revision":"fcda970ecb69c94754d89d7c5efcedfd","url":"assets/js/431266e7.fe79c56c.js"},{"revision":"6e4f4bf9fa966f4735eab63b5fcac10e","url":"assets/js/445c22af.bc139515.js"},{"revision":"03be26f161a9b75fafa626a74440a4f2","url":"assets/js/44975943.bd745781.js"},{"revision":"24cfad755ff0b0f7bea6f57c873aa9cc","url":"assets/js/4502.f6ec5579.js"},{"revision":"b12f7343042c4754573c4559845ee9f8","url":"assets/js/459.e98f749d.js"},{"revision":"fef3f4f5055c3185dfc6df0c528ce1d4","url":"assets/js/45cd711d.c1e3b230.js"},{"revision":"3a85b3e8f17d6d128ac7d944479c5b78","url":"assets/js/46bf3d5b.55a78ff0.js"},{"revision":"7a4c811c4beea1f1e0b878dda13d9a95","url":"assets/js/47198c5c.a6d4c75d.js"},{"revision":"aaf6aa9a0159a37f686d956ef1003de1","url":"assets/js/4791.76737e53.js"},{"revision":"1c1e4f9e15faeb30fa5152de66962d35","url":"assets/js/4838deb2.25c7f400.js"},{"revision":"75cdc3a425f75cd9f9c657379c9a4ad5","url":"assets/js/4985.3e3e16d1.js"},{"revision":"1c9d1121d0cd9a996addbfdb59554deb","url":"assets/js/49aec60f.e04b1dd3.js"},{"revision":"700c101ecc8582a91beed3b8b9c46915","url":"assets/js/4beb5b8c.72eebc5a.js"},{"revision":"4fc7e873c0d705d6b3c43e9ee9aa3330","url":"assets/js/4c59ca14.d877868b.js"},{"revision":"505cc53742d17ea8867230fe447baf12","url":"assets/js/4c7ea6db.9f60f643.js"},{"revision":"e5032e756b98bdd94d87b20e6ea26ce6","url":"assets/js/4cdf84ef.853266fd.js"},{"revision":"222040747580803f15a16ce293386bef","url":"assets/js/4d27c60c.adcea260.js"},{"revision":"871f9879cf17ad13fd89b103c8da4945","url":"assets/js/4f644c0b.0181066f.js"},{"revision":"f7be68c4fea049b973ae509eda9065cb","url":"assets/js/4f8bb2fd.3390a6f7.js"},{"revision":"3928e11700107a947bab7dc34729e891","url":"assets/js/5014.24370095.js"},{"revision":"b096c1c488bb9f52047846d9f6d4bb93","url":"assets/js/50b793dd.7224e40c.js"},{"revision":"0a9cf30a7db959a60a52bd686abe3ea5","url":"assets/js/5125.868d288c.js"},{"revision":"7df90be579e605581b2c4700b65e3752","url":"assets/js/5126.f94c0644.js"},{"revision":"fca2bf503cd594563ef31b1fdccf83e2","url":"assets/js/5133.10f92c33.js"},{"revision":"ae5e0c1791bcd4a948486e72ed6f187f","url":"assets/js/51ebfdb4.74c3658f.js"},{"revision":"053ee4284e5f3abf0481f0ff916e75ce","url":"assets/js/522fd580.3b3589a2.js"},{"revision":"3efee2d1325259d959dac0a48d171e3d","url":"assets/js/5238.1dba83ab.js"},{"revision":"345689fe6d35857b0c9d39a9f9e9b6d6","url":"assets/js/5376.9f9c87ee.js"},{"revision":"f6f32b619639d717e78744d8f1f128e5","url":"assets/js/541d5637.783667ad.js"},{"revision":"d7d2d091c7ebced3a4083098b945552e","url":"assets/js/5425.1f2d7aee.js"},{"revision":"72be4850b4327233368aaa9b8ffdf0eb","url":"assets/js/5499.24905a81.js"},{"revision":"d99327f455941368660082e9c12dc72d","url":"assets/js/54a35160.78131a68.js"},{"revision":"5742c436b5b302a8607b780de49a316b","url":"assets/js/5558.3b75a036.js"},{"revision":"73a3ba4ee20bb37caf920989431c4a57","url":"assets/js/5583.02488ed7.js"},{"revision":"5eb50bbef73162ecceb345047d1aef88","url":"assets/js/55aaead0.03849898.js"},{"revision":"60db147a552dc7f1cbb2db61e08f11d8","url":"assets/js/563b5c65.a4ec0877.js"},{"revision":"68c71ab39ae190e8aaef66c0e888908f","url":"assets/js/5722.2f5583f7.js"},{"revision":"2c60a904594a10ac9b88c9aa7ccfcb97","url":"assets/js/57e325a6.fa941831.js"},{"revision":"afb9336b8cfe4523937d47b96c22dc73","url":"assets/js/57ecc2b7.4ca94d36.js"},{"revision":"8b851ba6ee8eb12320cd13e7b25e6b41","url":"assets/js/58284325.ed657779.js"},{"revision":"45025925c6bc83e127af921cadfa11f7","url":"assets/js/588dd44d.a0362238.js"},{"revision":"9e2c39015fbc77f79b0c915a61190307","url":"assets/js/58fa4e48.96d0f196.js"},{"revision":"806a7b0ac502dcce69129f2f9b1f9309","url":"assets/js/594bb6c0.b994b805.js"},{"revision":"2087d0778f31501b33269abad43edf8d","url":"assets/js/5a5e1dd9.aab0bb8b.js"},{"revision":"b10b8f29f99b9961f149d8b270707a79","url":"assets/js/5b10224b.4c68bade.js"},{"revision":"7a146c7a0160b797cd19615279a2da26","url":"assets/js/5cdb4525.c9d6e89c.js"},{"revision":"553d9f989d1ca91f4258717075763c6e","url":"assets/js/5e6d1f8b.c390f575.js"},{"revision":"9a92987a0c6807452fe32f19d1c224f7","url":"assets/js/5e95c892.6d0cc556.js"},{"revision":"c3b4b841155e989ef37d6740886bf6c9","url":"assets/js/5e9c3b6a.9eb62438.js"},{"revision":"23830dd1c2cf202bcaf9bc7909c90eec","url":"assets/js/5fa838e0.8366ff7d.js"},{"revision":"9803370cf3bcd2064d022f15c86763f8","url":"assets/js/602bb363.861acbd5.js"},{"revision":"b89a4cee8669a0f591dd18b1837d68b7","url":"assets/js/60c781d5.dba00f1d.js"},{"revision":"b432dcd69a818d01177ac73f5867547b","url":"assets/js/6147fca6.353306ff.js"},{"revision":"853565331c52119a8167b672c6c395e8","url":"assets/js/6199.b03f4008.js"},{"revision":"dbc7f0d08974454ae203dafa11387c85","url":"assets/js/622bc3c3.2136838b.js"},{"revision":"e01ced09461b432cebe7d11377748b6c","url":"assets/js/635cb825.81ad499c.js"},{"revision":"1991fdf2a5faa220c4bc8059fa3586c5","url":"assets/js/63bdb67b.59655cc9.js"},{"revision":"5b32cdc5e86a251893e46513d0316160","url":"assets/js/6415f59a.dd981e5f.js"},{"revision":"248e6134c9859eac4e20c84ad414116f","url":"assets/js/64614d1a.030a54bf.js"},{"revision":"d4eee7b313b029cdaa61e72e4bb5193f","url":"assets/js/64b40b63.e755343b.js"},{"revision":"7fd8dacf14eab6053bd35083189c166f","url":"assets/js/6557cf1a.58f1e827.js"},{"revision":"125f2d11c38764392f3d0d7c21c5a617","url":"assets/js/6577a0df.40d6ab1c.js"},{"revision":"670fac986b0259d6f769fc83b8f8c6a8","url":"assets/js/65bc360d.82c238ed.js"},{"revision":"a44aef869d99741b70d00040a59f9c71","url":"assets/js/6679.7ee7da78.js"},{"revision":"b568e2e95e6cf0caf56dfa9d9c6a2d3f","url":"assets/js/681b7af4.68a79149.js"},{"revision":"cb7dad5866d3d5c87774fbeb76f0c9d3","url":"assets/js/6841.815723e4.js"},{"revision":"63419d6f68064801389fddad8a0c00e6","url":"assets/js/6915.77d0f5d3.js"},{"revision":"05dbda6f36803395541cf564efc07626","url":"assets/js/6951.cdc22862.js"},{"revision":"96874a51e5ab0b5752c4c13fd447efc8","url":"assets/js/69df999c.30ca6d2c.js"},{"revision":"e836b4e65818f66ab2e9f139d8c63819","url":"assets/js/6ad9afaa.b6acfc10.js"},{"revision":"d58aa609643f097cc451bfd36638dad6","url":"assets/js/6b5d6c58.1d6159c2.js"},{"revision":"f8585e3493033f35c1d9912241724ebb","url":"assets/js/6b902128.f00ffdfe.js"},{"revision":"18ead61a449415c8b73a5e2535a78db0","url":"assets/js/6bcd55bf.9a01f41e.js"},{"revision":"540f81c04231f06d1bdb6a6db4016160","url":"assets/js/6cd9d647.1340405f.js"},{"revision":"af4a9dc9d5882a941d6c71fd81eaf490","url":"assets/js/6d5efd36.12cb0023.js"},{"revision":"9da6565d9da0d7456b30dcf8ffe3385a","url":"assets/js/6d630ffc.6ee3a953.js"},{"revision":"89762c57dfa5ae04b4e31f2bb6400d57","url":"assets/js/6d6bd066.0cc2a6a5.js"},{"revision":"582b449aeb4f1ae96a457386f8ef6f40","url":"assets/js/6e3d6b93.dbc02bc3.js"},{"revision":"ffc17f1db18e6a5a729ba6423a0fa7e1","url":"assets/js/6e889b7a.2c57936b.js"},{"revision":"b99aefe6dd9dec1ca7f2a489885ec870","url":"assets/js/6f2b2af5.9c076e3b.js"},{"revision":"f361a8818fc44a3214fa56e0accbce28","url":"assets/js/6fa58fdb.ead714d5.js"},{"revision":"02024fc9f7dee88a3986af1f9902aef7","url":"assets/js/6fedb7a3.223a7c02.js"},{"revision":"35151f0d8f78bb2845c105199869a17d","url":"assets/js/70321d34.40fd9d72.js"},{"revision":"540cc8fac1611fffe5684573aaacbd4f","url":"assets/js/71bd92ad.4c7a166e.js"},{"revision":"73e6a970aa86d0269fa52478d44a6bc6","url":"assets/js/71c41cca.9671a825.js"},{"revision":"c8737a1840792654b285992d2f42375c","url":"assets/js/72b3e7dc.73b802d1.js"},{"revision":"8b6bd220db2aea5c464f82e46f4e1597","url":"assets/js/72fea898.3da453b7.js"},{"revision":"7cc780502e5431befc81938ed69c3516","url":"assets/js/73c38494.d97d0a0e.js"},{"revision":"0adf8ea4c1aa029305e2452ed6bd54fb","url":"assets/js/73f32b8b.760ed824.js"},{"revision":"24589a2a670d469233040254d889a07c","url":"assets/js/7523.cc4f00ce.js"},{"revision":"2173012ce8dbb4c7387e16338829ec82","url":"assets/js/754296bb.60af4b2d.js"},{"revision":"9547c70d59a556236cfe95d6c7aea1bc","url":"assets/js/7888.aacee43e.js"},{"revision":"de707a5feb12b65f5383f0a863f170c9","url":"assets/js/790b642d.f3f9e103.js"},{"revision":"6582b244db99edd424b561e121c01c05","url":"assets/js/79899b57.3dfaccbd.js"},{"revision":"5a6d174cb2c52d8240bce573d8b92489","url":"assets/js/79ee951b.0b6e538d.js"},{"revision":"70228432a3984c7787d3c34fdc84cb1d","url":"assets/js/7b35ddea.5c6740ce.js"},{"revision":"68394ba7f7aa0183ba6e22f8d5c61238","url":"assets/js/7c0411e8.0b5072f6.js"},{"revision":"be951bfb84e60b3011a155931383ffd8","url":"assets/js/7c328fb0.7228d2b2.js"},{"revision":"305f1ce2d820c03e730bdcaef3791128","url":"assets/js/7e75dadf.97d70d48.js"},{"revision":"ea8b6c12b164d4ef9839e0f4c85b50d9","url":"assets/js/7e7a4c7b.a7fedff2.js"},{"revision":"593aac4581b98378bc375d255d9f772a","url":"assets/js/80f373f2.1c4647fd.js"},{"revision":"2eee5614c0d633a4e08fdb983f55fb36","url":"assets/js/8170.6bd5a1e2.js"},{"revision":"19f2784839e3df31e7c3d47a3687df1a","url":"assets/js/817191e9.46eac4a3.js"},{"revision":"7ba82f8750ac33504e8af0dc941c4461","url":"assets/js/8199.9b3e8154.js"},{"revision":"6b87966243acd46ad9de0183989bbe79","url":"assets/js/824c452b.80b32488.js"},{"revision":"7f0dfe0ae975c8443ddc233f7452dfdc","url":"assets/js/82c03827.59daebd6.js"},{"revision":"6c1ef619e20dd6bb3a628da6299691de","url":"assets/js/83236138.4eaea077.js"},{"revision":"c1fb4cdda88335859bd2adbb4da10de7","url":"assets/js/83fa3eff.2c93abd1.js"},{"revision":"7e6233d4c1818769ec26220ef0f7e6b2","url":"assets/js/8485.0a733545.js"},{"revision":"62b2f0802fe346cc5310f8cea948b07d","url":"assets/js/854b257e.91c80811.js"},{"revision":"f124605af87f6229a2a8914cb0e6c425","url":"assets/js/85ccb835.26b9eb9a.js"},{"revision":"a4e261e46e88935e76e84a367f923090","url":"assets/js/86170a86.3eadd3f7.js"},{"revision":"dfd247851c9952f3b0f43832554d3449","url":"assets/js/8648.d9a3b348.js"},{"revision":"877400a6718749b9f771263c46b00a3e","url":"assets/js/87531641.d273221f.js"},{"revision":"13fbdba57783f52e91c99ad170afadcd","url":"assets/js/87d5db97.14ea2670.js"},{"revision":"f5a19f2b5de4d8b4e795a4e9473e9b03","url":"assets/js/883b3acd.59edd7ef.js"},{"revision":"5808e60701c4c90486f54209bfe065ee","url":"assets/js/888a5ebe.6c5ef194.js"},{"revision":"d596e7fcc7ddfa4f8d03a05acd45cd7d","url":"assets/js/893c6fee.7f8003b0.js"},{"revision":"7896162754ce4771bfd121e8d22a94d6","url":"assets/js/8952.ea61bc83.js"},{"revision":"25146f16eaaa6a9c96c23241a3fcbca5","url":"assets/js/8a578643.ce427379.js"},{"revision":"3d0d3ffcbe1e4c2b0c9f60ba4f3b5bbe","url":"assets/js/8b23f58f.2e2dfbd0.js"},{"revision":"b5e534b76db04f14cbf12560cb8ad98f","url":"assets/js/8bdaa531.c609cb31.js"},{"revision":"fcb000993062e14a8205f818693ff057","url":"assets/js/8ca7e4b3.cd54652e.js"},{"revision":"d6a4274ab71a30131b09290d55417cc7","url":"assets/js/8e0be0d1.a88a1191.js"},{"revision":"8fa12a4151b14d899113272f03193711","url":"assets/js/8e6a4e74.d7ea17ec.js"},{"revision":"f231ab24cc505c4e02a448baa1ba0f4a","url":"assets/js/9197ae7a.a01396f4.js"},{"revision":"d0fb9baa8391ebc0c0ffe4f921cdbf3a","url":"assets/js/91e8ffa7.856c6f3e.js"},{"revision":"7898fc9e3016caa72d804e05da5394c8","url":"assets/js/9220.52e81bf4.js"},{"revision":"e92b4072372ac302f847db44dbafeda7","url":"assets/js/9229f78d.8c612d64.js"},{"revision":"75f6674eb0700e7642187dce83714c95","url":"assets/js/9260.7f21e839.js"},{"revision":"c0dc5bbc3fa97d22014010014ca9e5b8","url":"assets/js/93456434.ac4394ec.js"},{"revision":"c5825ea1701204f60f1d18903cd3b46f","url":"assets/js/9413.409b143c.js"},{"revision":"5fff38226ac2655fd09e79cf5eaf95df","url":"assets/js/9492.cb828b64.js"},{"revision":"8fde7c3677f6df19c99f987c51690011","url":"assets/js/95bcd1dc.1e1a2435.js"},{"revision":"64f91fe8e1f741c7d058a4d398f082d1","url":"assets/js/95d63b84.1e0880fe.js"},{"revision":"5826a7731e95c20262cc5c3ed3d606bc","url":"assets/js/96f5d401.7adcaf0c.js"},{"revision":"f30294c26ad8f954cb9d9a3ba9f0c7c0","url":"assets/js/9789.bf4e36c4.js"},{"revision":"b604845fcdbab2a7bb7a7039b46733c8","url":"assets/js/9857b334.200b264d.js"},{"revision":"3f481cb8b2d09165a2ccc945cdc994b5","url":"assets/js/9861953a.05b4d995.js"},{"revision":"9fac0f06f8007d7728052d6c6e6e3eba","url":"assets/js/99f50fdc.4d845ba5.js"},{"revision":"618b594f2def81eacf097b7a9e02869a","url":"assets/js/9ac34ba0.0f46f32a.js"},{"revision":"e8d686a6054fc3b3f0eabf555067d916","url":"assets/js/9ad56985.ac375d84.js"},{"revision":"02d866e2e2f023b3fe142a72eafbf0b2","url":"assets/js/9b59e572.8670733b.js"},{"revision":"00e5746068977a9befed73be9d78a65d","url":"assets/js/9b8d311d.30786ecc.js"},{"revision":"3d13982ccfc0e8f0fe081c53d6147bc2","url":"assets/js/9c2278b2.d17a3b4f.js"},{"revision":"c7947d57dcf6a4e110e9b6228fb0b19f","url":"assets/js/9cd2fc0a.90f648c5.js"},{"revision":"7b08ab571ae709be4adca815fa7eee06","url":"assets/js/9d4488d1.7cf1d6a8.js"},{"revision":"f34ee196814f654cbd446f7e2992e35f","url":"assets/js/9fdc340b.430bdd4c.js"},{"revision":"8cb663fe91acff26af7726273f0c0b61","url":"assets/js/9ffd9d1d.983e3344.js"},{"revision":"a9d7eaeeb7aa30c735edefb87c44156e","url":"assets/js/a1a3054c.51bb5418.js"},{"revision":"2972b54c3ab318948e8197e8a8e6cbb6","url":"assets/js/a21e984c.819d3c40.js"},{"revision":"7341818cb1f490ea09c5b3305d7128ed","url":"assets/js/a2ca8fe8.5d7e502d.js"},{"revision":"648cfc44bbacd065bcf678fc191b7c67","url":"assets/js/a2d5f767.10c0f258.js"},{"revision":"2b003bd078a281a4aca3fd27d0ee498c","url":"assets/js/a2fb89b8.690053c1.js"},{"revision":"e75de64509c7fc050c557b34cd0a8201","url":"assets/js/a305e2ac.a6baa76f.js"},{"revision":"7e576617b8a0e7ff1ba6dbc0a21ff094","url":"assets/js/a4c78573.47ac67c4.js"},{"revision":"6f4660aa79c90a06b77deb49d854b7ac","url":"assets/js/a4e7ef95.f324c990.js"},{"revision":"4ec702d2c2d3e81a7088e757a3c748e4","url":"assets/js/a562d1c2.a93325d4.js"},{"revision":"a5e79d7bb9d8d6b1ee1e33ff5a270ad4","url":"assets/js/a62eaa10.6e5cd70f.js"},{"revision":"8f6377df7f49667d064f553735837201","url":"assets/js/a6eaa2fe.ef44eeb8.js"},{"revision":"ae228b6ac03bb7834d82cb7ad475a127","url":"assets/js/a7456010.9be04e4d.js"},{"revision":"a5dbf467bcc47ca6df615484ab81d88c","url":"assets/js/a74a7dec.f5867d6d.js"},{"revision":"e419e3832dbc4153cf483656aca0add8","url":"assets/js/a757a55c.f0fb9cc5.js"},{"revision":"fce5d76338120e8a030fca28c0c3ea5f","url":"assets/js/a78b3ba0.b1dfbac4.js"},{"revision":"1e7d87496079e3b241aa1798b493d56f","url":"assets/js/a7bd4aaa.78156573.js"},{"revision":"3fe24e47f645c36c42467cdf122ed9a6","url":"assets/js/a8bdbcd5.dd6cfad8.js"},{"revision":"67d077a8d0ad7b79a6b82cbe82ab97f0","url":"assets/js/a94703ab.5d9deb9a.js"},{"revision":"593ef83aad96cf1a8b66f11e6d20f899","url":"assets/js/a9c868b9.81e7aa76.js"},{"revision":"06bcd6d6d0b5bdf4884d096e5befb318","url":"assets/js/aa276556.a6d5594f.js"},{"revision":"c470ef51551086175501ac219b3440ba","url":"assets/js/aa81450f.e862ae7d.js"},{"revision":"9b0b59c402d93629a4f69dfb23dfbc88","url":"assets/js/aba21aa0.7e561951.js"},{"revision":"66148f895d70c59acfe843138ab72957","url":"assets/js/ac61b989.aa5a3267.js"},{"revision":"152f6bc5450528fbcf09f4f53fddc296","url":"assets/js/aca8e61d.88e3501d.js"},{"revision":"12a9d033ac825c801da067d083912145","url":"assets/js/add4bb7a.ce6e0402.js"},{"revision":"b71c4915290f66a2d81983bb663514ac","url":"assets/js/aeb124bd.86b3fc0b.js"},{"revision":"2d79c44f5b300c72b8a9ff05e9ee0518","url":"assets/js/af70a4d6.309af2ea.js"},{"revision":"65e9bbf9ebd271b1f22fe1ed3a66157d","url":"assets/js/b158dc01.e97206e5.js"},{"revision":"646c887ab6f94541677fc896cd87451c","url":"assets/js/b21946ae.6315ceab.js"},{"revision":"8828db5c662c4848cb2fe44e4f0793a0","url":"assets/js/b24d385c.141f7a41.js"},{"revision":"fce52ca14a054a886ae3efc6c3ddd8bc","url":"assets/js/b496f3e3.e49245ea.js"},{"revision":"148718adf0a7366ce6d55256c9ab6c1f","url":"assets/js/b5210edf.01512945.js"},{"revision":"1fd9a1613e15ae473418adf56a0fe8fe","url":"assets/js/b60da6d7.5280029d.js"},{"revision":"acf203a8900a5b5db8d80b64d57a346c","url":"assets/js/b60de388.71455c37.js"},{"revision":"0b7749705bda544d73faf3a645cca406","url":"assets/js/b6386ec9.3241cf15.js"},{"revision":"4f4b78c47f0d1954409dc5bf0755eb3d","url":"assets/js/b6438b6d.2550648c.js"},{"revision":"7b663c7e123f44bc98ec1cb27b2d0684","url":"assets/js/b7bb49c4.0714bfa8.js"},{"revision":"53194e34aae55943314ec77befc1db95","url":"assets/js/bbd444ff.21c4e120.js"},{"revision":"845659d7246ed8241df43a4a07668522","url":"assets/js/bcc35f8a.58338b41.js"},{"revision":"a9635bf813f759d198a81e2eae69ce71","url":"assets/js/bd760347.c8c18add.js"},{"revision":"8dab3579e911b719d6269bb1eea497da","url":"assets/js/becf8c88.69814872.js"},{"revision":"2244974813e9682fa8f9dc282ceaabf1","url":"assets/js/bf3ddb91.fab47cb0.js"},{"revision":"2161e106c0ceef7a8e2fb8f83c80780b","url":"assets/js/bfb1f9b7.8de2f8f7.js"},{"revision":"62c86249037e047b470adce72e9b45a8","url":"assets/js/c0b93d5b.dfc5f709.js"},{"revision":"739bc4e741280174934a66909b77812f","url":"assets/js/c0dca479.87ee149c.js"},{"revision":"e9d9ac55346d985026a4f6234958d433","url":"assets/js/c10e86aa.6419895d.js"},{"revision":"5a8572bdeb55b7261b40ba2a07e9ba94","url":"assets/js/c141421f.81ac4343.js"},{"revision":"7c24f973398df4c16e27973d17956c8f","url":"assets/js/c156da02.8e94158a.js"},{"revision":"3f8b62005cc35adc6ec35afd9b20ed7e","url":"assets/js/c15a368e.ce528940.js"},{"revision":"73bacb6d50ce63a8c7a0ca988d40fd50","url":"assets/js/c3e6ab10.3aa23235.js"},{"revision":"da6ae54a83329db65f53392db6cd58a9","url":"assets/js/c4dcc6dd.7844ceef.js"},{"revision":"c30fd24fe13522c2313b2d050caac935","url":"assets/js/c4e9b37f.3942c5ff.js"},{"revision":"6ea480f25cd043762c6f906c1567555a","url":"assets/js/c4f5d8e4.402b05d3.js"},{"revision":"74363468dab18b94300968775659b331","url":"assets/js/c5f4348b.c9fd5287.js"},{"revision":"c8ed2199463280464bac840eefe5b91c","url":"assets/js/c72cf9c7.0e46d81c.js"},{"revision":"d197591bd5c30f75825a8c57144fffd3","url":"assets/js/c737e1a5.d3b63cfb.js"},{"revision":"1877a8b72fde88ecb242b3a5f30f8931","url":"assets/js/c78ecae9.23edccd8.js"},{"revision":"4ad7f5203f02a20ba4782e24de11a746","url":"assets/js/c8018499.98c8a9c3.js"},{"revision":"6e9e484e60c22056bb8064feee65d74e","url":"assets/js/c84a9914.056c8609.js"},{"revision":"d8b2b3c9d468ec33c1ba23bad3eef2e7","url":"assets/js/c8a93e67.7709beae.js"},{"revision":"78f3638f33283cb634d6a8ebfaa368ca","url":"assets/js/c9947f43.e9600481.js"},{"revision":"cd96bd269eecb70863504b253a6fea31","url":"assets/js/c9a1eaa2.620b7210.js"},{"revision":"f7a9fa306fcdccfd132b2962f85b9d31","url":"assets/js/c9ae34fa.86919c79.js"},{"revision":"9c1f4b1a365e3d5aad7fc1fb044cb48a","url":"assets/js/ca8a1b2c.267ee4fb.js"},{"revision":"16b01e582778c10cca096ed838d11adc","url":"assets/js/cc2fcaab.8f718250.js"},{"revision":"2ccef43c93080d2d6a404fefba2769ea","url":"assets/js/ccdb3c45.63988362.js"},{"revision":"dc89e5983edf0e088b61ec08e4d20d61","url":"assets/js/ccfc7d3c.8b9c8cf2.js"},{"revision":"be4809b2bd6a9d47b288fe8a721d5e94","url":"assets/js/ce7e7ba1.6ea13756.js"},{"revision":"1f3e7a82d619f4edd86988d005601de6","url":"assets/js/cedf0e63.8c3ac5e9.js"},{"revision":"6bcd62b8eb04533b2bade25ec2dee942","url":"assets/js/cfc0d51c.44b05ef2.js"},{"revision":"c3086686d1ee0cdeee484c17ba35dcf0","url":"assets/js/d00b9fd9.2819e6d5.js"},{"revision":"e5de3883cc3a468bb540db97135ba7dc","url":"assets/js/d0ab59b0.d1e76d80.js"},{"revision":"384f0a23eba559698c1c9607def04315","url":"assets/js/d152d6b2.5f1b709b.js"},{"revision":"a8bc5724d95d240b4820519257ef93ab","url":"assets/js/d1bc6129.7cd48c4a.js"},{"revision":"3e6372ea38007dca8496eed98a5b2ca3","url":"assets/js/d26b0f2c.38b8442d.js"},{"revision":"a57f7dde721384ed4c184553375ad241","url":"assets/js/d2ba5076.d1ef7867.js"},{"revision":"b89e14dace617b5d8138b927575542f9","url":"assets/js/d2bda2e9.9758b618.js"},{"revision":"ee4645ae1eab421dcda338e3da76eabf","url":"assets/js/d3585a2b.fcdc8cb7.js"},{"revision":"b02260b4a8578d938abbf5c2f7918a10","url":"assets/js/d45ccebc.dde7f329.js"},{"revision":"4b56d47d3644b830507fc3531901f7e2","url":"assets/js/d47de5fd.c4ecb42f.js"},{"revision":"59a58845e14a630b0d03543c77694313","url":"assets/js/d494a195.e0417717.js"},{"revision":"5a7d96e9f8b763209ad0948ec46ec970","url":"assets/js/d63ab801.a5ba26e1.js"},{"revision":"fb86071cceecf26dd7569e6febce740f","url":"assets/js/d89bf822.bf72b449.js"},{"revision":"e7d1fa61451678d30997ef382e3b9e0d","url":"assets/js/d9cff955.204916c0.js"},{"revision":"3d9b1b5e2c2a20f4e2f0c25f31321043","url":"assets/js/d9fe55b2.301bb27f.js"},{"revision":"27b60f4bb423e44b86ce0dca7e6e678e","url":"assets/js/da4fe776.5e3e35e9.js"},{"revision":"a3cc327e4cafde14b2a17232e999c22e","url":"assets/js/dae64152.ace75937.js"},{"revision":"a76b07111731beff5bd87a0327a1d8f9","url":"assets/js/db6afc29.5d5c0721.js"},{"revision":"ca91ecf907347a44b724c40d001e12a3","url":"assets/js/dc030738.98e6081f.js"},{"revision":"5b65f80fa1bee872a9c27de0033dc7ab","url":"assets/js/dc109391.b7b27d2c.js"},{"revision":"65413dfd8fe11eeb12f75ef56ee06b3a","url":"assets/js/dd1fbe6a.4edfbaf5.js"},{"revision":"9eca711f98162983493dee7c0a5c7e3a","url":"assets/js/dd3d6085.274d427c.js"},{"revision":"b6f404411fe861f0df10d0b0867d6bd3","url":"assets/js/df2a4a59.e256aca9.js"},{"revision":"59458376c0129f75e7fe7bd1fbd197b3","url":"assets/js/dffb9609.dc020e57.js"},{"revision":"ae7123a68f0a3b8265480f20a1fb9336","url":"assets/js/e17e6af5.f45392dc.js"},{"revision":"467798e031a885a87fcc9456c7ce52a7","url":"assets/js/e1a53158.a9ab4008.js"},{"revision":"396ae33a80a0e0cbcb4193a40d03131d","url":"assets/js/e39d40ed.3c2cb91a.js"},{"revision":"6a7a0522079bdcde7863b9192e3d22d5","url":"assets/js/e3b728f4.f61cd1a4.js"},{"revision":"dff5dbfc9bb0bec1aee5327ab8189786","url":"assets/js/e3cb94e1.4c096b2f.js"},{"revision":"a44e845c375ec844d131f7d48cd8de8c","url":"assets/js/e47fd75f.7849396c.js"},{"revision":"4bc3e15abcaa3117626f8982e221724c","url":"assets/js/e4e92f42.b7fd69a3.js"},{"revision":"13c992a29ce5bf8714e43d42802e2b25","url":"assets/js/e5f7cd7b.2bbdff37.js"},{"revision":"5c6bf5deed3c18f6e6eda6f2e5fb28d0","url":"assets/js/e6501e5b.146f619c.js"},{"revision":"73b19aa669800c6b9ce258ed3569d222","url":"assets/js/e682932b.0cd9692f.js"},{"revision":"3546d7cd729e7afbb5c5f2863c35bd38","url":"assets/js/e69f0a50.b10d433e.js"},{"revision":"109e6e9942bf98140f86c60e5d3fb591","url":"assets/js/e6b53073.a34337d2.js"},{"revision":"606d2ed3302a8a8c0359ea4a08f9853a","url":"assets/js/e76d69e4.48b38cd5.js"},{"revision":"3e99dc7684224e08a0cb8a29813c83a8","url":"assets/js/e87d3b80.517a1aca.js"},{"revision":"3992b784e8f2330ec34dcba29b1f135d","url":"assets/js/e8d5b74b.a6678c40.js"},{"revision":"732549dc05e0dddc9375c663d053fa51","url":"assets/js/e8dd6634.39f89e6d.js"},{"revision":"fccc1088049954c8f62e953f0c4fcd90","url":"assets/js/ea46410f.75587257.js"},{"revision":"0de9a036f333cb07f3016b1f1a29c1b1","url":"assets/js/eade58ca.e11e88c9.js"},{"revision":"ea02a775219ce0a518d648b08530b0cf","url":"assets/js/ece243f0.522e8341.js"},{"revision":"fe8e514f90f1eb2597106a86eb6c9553","url":"assets/js/ed38b210.cd72fece.js"},{"revision":"28092d1759f0d68c0d5f09fd0386d917","url":"assets/js/eda49e41.7e046f7d.js"},{"revision":"955c22118e7316270b2021292203ade0","url":"assets/js/eda784af.bd8abc2c.js"},{"revision":"ea0a1ee5334be3f24b51798cdce10833","url":"assets/js/ee84ef31.13f8771a.js"},{"revision":"c282eb425444179cfd22316e657bdca4","url":"assets/js/ef72e420.cd6c5497.js"},{"revision":"3f34eadecd8b6f33df1415637f208273","url":"assets/js/efa09b84.3abf1f4f.js"},{"revision":"e33f6bbb3c0953dd71cee41bd5754912","url":"assets/js/f1f0b9c9.f827f5ed.js"},{"revision":"2ab200456bd22f6a8d710c88b5f2dc02","url":"assets/js/f287ed2c.a89e77c1.js"},{"revision":"5536786a1945a4db97189d2d496679db","url":"assets/js/f36074be.584c26d8.js"},{"revision":"1f5dc88e63ea738db50bf2379e090eb9","url":"assets/js/f3937ce2.bc2f6499.js"},{"revision":"dd068a7d942c8786e0f32d9ec8498fc4","url":"assets/js/f44068e7.cdfde285.js"},{"revision":"00feb3a42681ec3b0176300c747c9359","url":"assets/js/f4e5f89b.4bd4cc0b.js"},{"revision":"5b7f5957dde2dafc6762b394bced9603","url":"assets/js/f58ceb15.3a948c9e.js"},{"revision":"3535ea348a449a11e9460348ec335261","url":"assets/js/f6420a7d.afd05d96.js"},{"revision":"cd5c9dace92cc2d16f57fa8c00232eb0","url":"assets/js/f7e672b1.55b6f988.js"},{"revision":"e76f22d4eb0f6b46adda2a4bc64d0afc","url":"assets/js/f83b6261.bc372b7a.js"},{"revision":"9c3576c8b015444c1fb39e15946672f5","url":"assets/js/f9dd20e8.b937160f.js"},{"revision":"7a0af80355adfc068c1ac6035f4c465b","url":"assets/js/fa9e7027.29d8a7a0.js"},{"revision":"ee3ef6aa3f2ff4a0e5b8ffa2d3c121eb","url":"assets/js/fb274994.ae202020.js"},{"revision":"22dcfc319f83f172c34c0e7a1f79daab","url":"assets/js/fb57057e.7527f038.js"},{"revision":"fb71207e9b713994f39607cf765392a7","url":"assets/js/fbcb1a27.4d20890b.js"},{"revision":"cdbf15768b4f55e05425829546ef12e9","url":"assets/js/fc419e9c.30b53db6.js"},{"revision":"7b62bba3376dfdf9557e7297dd09d9dc","url":"assets/js/fcaab584.359b1b2f.js"},{"revision":"0d29cc9fe9fc4911c9696ccb29a734b0","url":"assets/js/fe5e75f3.8c6e4e63.js"},{"revision":"20a3e8c18b29bd946a500defa8c79996","url":"assets/js/main.5c61a713.js"},{"revision":"3e0337fdd591471eb78dd036a9d691cc","url":"assets/js/runtime~main.6cdc3a7a.js"},{"revision":"24ea50f271c7c333ae0dbd58f7948442","url":"autoload.js"},{"revision":"c055ded39a2b668364851afd144d8c1b","url":"baidu_verify_codeva-Diwo6ExDb5.html"},{"revision":"5efa695f79f5d5cfe99198b6acd6d104","url":"basic/index.html"},{"revision":"b70bcdd6a88847e7a2c564fcea79e3ae","url":"Bedrock/bds-core/index.html"},{"revision":"8d6fe160d7324932c20685475b9cbc97","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"5673b164880d48a8cff4caf6f3eb9d95","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"70d73df97e985264027d3ef08c8d5bb4","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"3e2c843b9afd4120a69fdab19bc5188b","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"8651ab512a88d7521c2ccfd566e78bd9","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"66ddbcabdd4a4920226cad7793c96579","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"db0fd2bf5de43aabe2c75b3be0f71779","url":"Bedrock/bds-core/process/index.html"},{"revision":"349e438d06fcfaa0ba3cb68e9b273dcb","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"5bbc129e9ac7bd42cdaa6d7047a158b4","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"f7c3c18d045ed17669a289bef88d86d7","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"b56613327ac5cb3fbc28b9009286342f","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"db861b793ae4166aa88d4b8d443703e9","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"488f24940a7f66669f6fa4fc74e6c3d4","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"054bd174a79433f9551f0b87c0fc3473","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"76b12e7c4900e0d1a1c0632d245f9a8a","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"afec6fc664118aab26a074194617050a","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"4cacf95a508fca2c9743b39986288d6e","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"60368abcbe39741950e9d1cb9ea04f13","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"87dad60e315867c1b9dbe9424c43b97c","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"8647d38228c35054c4371308441d2b4b","url":"Bedrock/bds-core/start/index.html"},{"revision":"24c3eb03b0c0416e701b0fe36b6e1dde","url":"Bedrock/intro/index.html"},{"revision":"b5f093e5fd6a1ef7900a19843bee8ea7","url":"Bedrock/nukkit-core/index.html"},{"revision":"0462923889a607e2b848ec286842e1f9","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"51ae45c2c85210017a484e1b1dd5bfa7","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"7bf505fe9aacb6362ccdbdf24ecc0fc7","url":"Bedrock/pnx-core/index.html"},{"revision":"b3a37daac26e796546af96c2678b8e14","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"72002fa5158e6c83385668b53d441bbf","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"dccbbec18c21dd8fb4b704319df36c8c","url":"Bedrock/super-basic/index.html"},{"revision":"a4bc0883bc59226a4733a0f7a6424b09","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"8fb391cfa6bf344f4aa1eaa279f050ba","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"e05b431fad729554ea31886ddb7a6edd","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"a274be3353764f7968d1e835a19fff99","url":"Bedrock/super-basic/version/index.html"},{"revision":"1e60b7cd9b275ed70bfadd1438b12fd4","url":"contribution/index.html"},{"revision":"4cfe447b7182c4e588ea124322be3629","url":"contribution/todos/index.html"},{"revision":"8ec81354bdf2f19afd991ef2ee541481","url":"contribution/writing-specification/blank/index.html"},{"revision":"8214130a5c38320b0fd2051a73b1cf97","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"112fc8322d455d2c9b58aacc1f76a9c1","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"8a276c4d2eda2ebf13a9233290940c47","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"39a89baee4e72a9a8d453a3269db1e34","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"6dd60556e62cef0e89ac2ad46312dbd3","url":"contribution/writing-specification/reference/index.html"},{"revision":"c7bbe72c79d829fdc1574c4a57b070d7","url":"contribution/writing-specification/text/index.html"},{"revision":"83aacec0b2f1c40ad9c181e6845d0921","url":"contribution/writing-specification/title/index.html"},{"revision":"9be3c785c5597619f82d22929b3c26d2","url":"contribution/writing/index.html"},{"revision":"9342f2e9d0ef9bfc0ef65c05d7dd3bf9","url":"database/backup/index.html"},{"revision":"4363543bd3d28871a0227e41d9c7a4c2","url":"database/configure/index.html"},{"revision":"5db546706f5f1b4830fb7daf3305f6ab","url":"database/index.html"},{"revision":"1c498117a0e0373fdeea36cb1a6bd374","url":"database/install/index.html"},{"revision":"752acb300201611ec1cb9d85eb5a2755","url":"database/manage/index.html"},{"revision":"6178b4b4c693f9c99b4390c6c9a01198","url":"database/uninstall/index.html"},{"revision":"fb7e6143e0b94c5644b6128f30bd8365","url":"deploy/index.html"},{"revision":"c60f02a4c63d1f4a7368ab997c8e5ea8","url":"index.html"},{"revision":"48246747ae72dd7ce88f26700b73b969","url":"intro/index.html"},{"revision":"4210c0cf450da952b6cef76a94495d01","url":"Java/Advance/all-server-code/index.html"},{"revision":"70c15eb85a798ba582d575c4f55c6b2d","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"df49045cd031fca61515b76df065fae7","url":"Java/advance/bot/index.html"},{"revision":"209d59fdcf413044eaa4848bc96b6b88","url":"Java/advance/chinese-username/index.html"},{"revision":"4a4b894f6f49f2d78f9d451954dbb093","url":"Java/advance/command.yml/index.html"},{"revision":"8c2b50a4cce753999b2f4a29e068d336","url":"Java/advance/database/index.html"},{"revision":"28393ba3b14d48a4291056797be47a0e","url":"Java/advance/folia/another/index.html"},{"revision":"de48790a3962bccd7b432c8e71b229c1","url":"Java/Advance/folia/index.html"},{"revision":"9e586a82927596f9627c921ccfa97895","url":"Java/advance/folia/luminol/index.html"},{"revision":"2e385935870f8df817a77d25da485e1a","url":"Java/advance/folia/multipaper/index.html"},{"revision":"0ef80f23c439c34f5c918957f50d0e5e","url":"Java/advance/format-code/index.html"},{"revision":"f0190442322f5251047b2aaa609b9a77","url":"Java/advance/index.html"},{"revision":"b19942f939239cbc640d454e1a448167","url":"Java/advance/kether/basic/index.html"},{"revision":"c4a3133cb1c83b6e7499de44d9323a01","url":"Java/advance/kether/idk/index.html"},{"revision":"8164fcdeab2a13656368deb0f6ddbbed","url":"Java/advance/kether/if/index.html"},{"revision":"683f12541bbd532a55ff883e2d54ffc7","url":"Java/Advance/kether/index.html"},{"revision":"f9ae28bed29db80397032abd4b7ccd23","url":"Java/advance/kether/math/index.html"},{"revision":"07fb4810e89ce23c99917c69ea89a56c","url":"Java/advance/kether/preparation/index.html"},{"revision":"f65f2b009856239b4eeca83ff55362d6","url":"Java/advance/kether/variable/index.html"},{"revision":"977be95cd7c8fec7b0b5169147979892","url":"Java/advance/Linux/index.html"},{"revision":"ee48c38935581c4e9cb85a442a24b593","url":"Java/advance/loginchoices/index.html"},{"revision":"5c2c8c5b67fd61e0d5f735c195097306","url":"Java/advance/MiniMessage/index.html"},{"revision":"394e32aa38c6e65d1ef6b7392dbd0dd9","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"204441a27ee5b33c10a8a1bb21ade21b","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"258238f377688916b83234ae827b8f19","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"8a60803a9fcc822d095afaf943ae2c05","url":"Java/advance/YAML/extention/index.html"},{"revision":"309e983edc7d44790317a154307feed2","url":"Java/advance/YAML/foundation/index.html"},{"revision":"57d3b4c50be033a72d794b03c81d56df","url":"Java/anticheat/index.html"},{"revision":"ea822e1f0ba8a4e38594db4cc6f86d3f","url":"Java/AntiGrief/index.html"},{"revision":"c66c222f5029f167683d646c73aabc07","url":"Java/basic/index.html"},{"revision":"28c354ac71b1aec5e0f556aff23136b9","url":"Java/build/index.html"},{"revision":"fab7b9c524cc0b797dc9ce55038f27a0","url":"Java/bungeecord/index.html"},{"revision":"88a6e81e46bd04fea219abd0f91070db","url":"Java/category/placeholderapi/index.html"},{"revision":"e98515f6ee9dd0f280a3593b7e59a3a4","url":"Java/chat/index.html"},{"revision":"86923017c31a3009f51b8deb6bddf538","url":"Java/command/index.html"},{"revision":"c766278e7e4c6d2f111bc64f33d6be8c","url":"Java/cross-server/index.html"},{"revision":"f3f29965bf3b68e01f633a7ce7cd9310","url":"Java/cross-server/plugin/index.html"},{"revision":"eb5268c5e6bdda1449a10f356983cc9a","url":"Java/Essentials/index.html"},{"revision":"846e1c4d1f7312796d92c79b8e55ee65","url":"Java/Front-Plugin/index.html"},{"revision":"4bc78f501170b0036e0f7826f103f7ce","url":"Java/game/index.html"},{"revision":"0807abcbb9fe58f19d722024e2e02aba","url":"Java/Geyser/index.html"},{"revision":"f204227568d4a12cfb07f22bc597f32e","url":"Java/geyser/introduction/index.html"},{"revision":"2624cfc798800ddaee3ff10fa6add040","url":"Java/geyser/upgrade/index.html"},{"revision":"8236ab0ac4dd7641f09f9b2c9b8535ab","url":"Java/Geyser/Upgrade/index.html"},{"revision":"81d3fd8043f19f794a53b4d84f743d69","url":"Java/intro/index.html"},{"revision":"baf24fcac61bb1872eff0658f76ee564","url":"Java/items/index.html"},{"revision":"519ee2ddf7702621083fb97edf020732","url":"Java/maintenance/Java/index.html"},{"revision":"ec64dc3c80109e43dfb43cce59f05daa","url":"Java/ManageTool/index.html"},{"revision":"cd2e0affe1516314d8ee812ee10a7676","url":"Java/more/index.html"},{"revision":"88b88ee9561ae597c4904319539a5af4","url":"Java/optimize/index.html"},{"revision":"4678fff8aea1ec2d5c9e2cfbb235c2ea","url":"Java/optimize/jvm/common/index.html"},{"revision":"03569173a112db64d30a9995d6428a4f","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"379f53fb95a7247de05d46e952623467","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"f89f5a75b80378e06bb08fee0375ac28","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"3234b3901231afb38636f833a27e1508","url":"Java/optimize/jvm/index.html"},{"revision":"e3fcc019834945ce419e60640c1295c1","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"6a92dccb946a0673d706d9a5d03d7cd4","url":"Java/optimize/jvm/zing/index.html"},{"revision":"3df1950fe6a7220c0242e7b20f543bf6","url":"Java/OtherPlugin/index.html"},{"revision":"9b43331cbb69cc991d82c7f2c231fdec","url":"Java/permission/index.html"},{"revision":"a6cf82bf394124c9e62cb4db1c7ea8ea","url":"Java/plugin/index.html"},{"revision":"1386f2bd8448405a39c205411d5dce42","url":"Java/PluginMagagement/index.html"},{"revision":"c3976aac9e13c099ffc5b10f78283a5d","url":"Java/plugins/other/Skript/index.html"},{"revision":"0ddd3ca72bf4a1770e3223ca09fa7bff","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"ee038a11e7e5f5b6f83d631854531a0e","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"9ab72ce6a54433703ca5bc516c849331","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"e2b587566c61fc4af954987cf3ee01c6","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"08ed1acabe07d487a354f2d8c523ad2a","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"accb7f301ab673bacbfb8b43129abf54","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"603ddb1f9ded4a307f7528760b334af9","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"262e1c6add0ce491565dc0e3b2106fbc","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"b2a925ab601e42f39eb21c77439e7950","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"33a1d7305f6402ac85e4fed76162e882","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"f51de733701f6e3a8a4cfc4a57862504","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"a9277de6879cd32228100642290c53c2","url":"Java/preparation/index.html"},{"revision":"b33b982a7f7c866eba5487ad25f4232a","url":"Java/preparation/text-editor/index.html"},{"revision":"3b1b3390e0f6f92940e7919d3cd821fa","url":"Java/preparation/websites/index.html"},{"revision":"019cf1aadc4fd4f1d7a3caa3560e4aff","url":"Java/process/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"331ab57b697a60d55339c3cc04f8853c","url":"Java/process/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"56c78c9cf733fe2ed374f46557346f8f","url":"Java/process/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"8f4fca2dda29b0b2a69df8332b2322d4","url":"Java/process/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"7c12d866fa87dab7d8f62b034805ddbf","url":"Java/process/cross-server/hide-the-real-IP/index.html"},{"revision":"0aa045bdf498c67e611ece6d230ce794","url":"Java/process/cross-server/join-server/index.html"},{"revision":"b0b3afae482128c97b3d6f34bb85e966","url":"Java/process/cross-server/plugin/BC&WF/index.html"},{"revision":"adaf8bd09b358a49067d6bea703342da","url":"Java/process/cross-server/plugin/velocity/index.html"},{"revision":"83fb2cc12f8424685fab98420c04fd85","url":"Java/process/cross-server/precautions/index.html"},{"revision":"51aa6fa708a5dc692dbaf42b619c12ec","url":"Java/process/cross-server/server-core-choose/index.html"},{"revision":"5eedaf777bc64f2c71105d73c7325177","url":"Java/process/index.html"},{"revision":"c87619424c7018a9896fa861a355f14a","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"33b273569435db83decf7f45acfc060d","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"0f3b0f8f5d3e29f6411efe50832f012f","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"6cafdbf0ffc18ace4b9ac929b9f2355b","url":"Java/process/maintenance/backup/index.html"},{"revision":"1d8dc91e0ab4d3fbbb3358a40d477f96","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"85b969f0f3f181b3dc9a96f9f7047f36","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"6a28578630026caf239d00f882f76e3d","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"bf6cbcd7e9d334196935e88183edce47","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"0a95143d74cc6daa5ce90d7ec17d9603","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"fd0054cccfea1c66fdf517ad745bc6f2","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"6d2839e253c983573e8508c36122eea0","url":"Java/process/maintenance/update/index.html"},{"revision":"cf375623a7b9ca6a3f2ee5dfe912dd7c","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"b15eacff921bb38b83e6a9c85e8d0c54","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"586e67b7a4e7c43ab105226fc2004411","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"c41cc3dc239c3882ebf6133d0209a552","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"860502b23a1e9e87295c5322aaa3ede9","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"09bf1a19b24037424a12402737fdc654","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"ac574a8ee2d0b3a918932d004bc3d3b4","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"886571a6be331cf26c0472ef808e888b","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"2b48b7e0f96220bf6c36fcfb5eda2d39","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"4545410e3e31dae9a828cab625eb0266","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"42b466ab40c0cea9f2db40c741b6bace","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"99fd7ee37c5b3f5ceab8ecfff595e977","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"9ac75daad3f8e9036a47b49a0069095f","url":"Java/process/mobile-player/index.html"},{"revision":"8763f748d50c5eed2ccca27822bcf673","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"dbf93b6aeb8f563da15b30234177787d","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"f6a9275e8c7f910c43406504ffe85e25","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"ce35bed5f3a443076e7b76cafb5f8816","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"5b2a450f9b5a0cfe52c841ae86fa9f17","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"95b5346aa355ffb566d00b48c7174936","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"7f43b7233f069f1fbbb760c8283a6c3c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"12afcaaa7fce181aad850946b3c2f7fd","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"2f0a7f870ad21e4770c9bedb1bc60850","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"330d0ba6f680140043022ec97682052f","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"6e3ca55304b941a485363333f216e4ad","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"47b0b41be346279078b50154d3e75bfd","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"58895d245719ac6294de65290f3baf9d","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"285334ef000e3efca423ca9859e96396","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"7c9aba6170d3c253da1333bf447d6a69","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"8e2094843884465ccba794f2da72f275","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"fcf66a5d648af969ffccfc866b05af0a","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"6c6f6a1f67b5a5216644c63bc72238b9","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"d050ca32f003dadbec2d86c1ccd53c45","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"818d4039585b8e0625da011397baa6d9","url":"Java/process/plugin/game/title/DeluxeTags/index.html"},{"revision":"827d61d1cb8b1518a3f8b030be314a9f","url":"Java/process/plugin/game/title/MiniPlayerTitle/index.html"},{"revision":"fb77d53cc9cef4f5ee0d995a0f3d9ed5","url":"Java/process/plugin/game/title/MythicPrefixes/index.html"},{"revision":"b805ce4eb51b31ef01bd714452cd163f","url":"Java/process/plugin/game/title/PlayerTitle/index.html"},{"revision":"29a1d418d025659bf5dee948573c6c43","url":"Java/process/plugin/game/title/UserPrefix/index.html"},{"revision":"c31ca52b3178e7151e4aabddbcad8ebe","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"c11b7a14c0743464a38b231181ece654","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"152d1f3e433738cb1f0959a76c049959","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"9d80c6033267b1696bea61c0e564a60a","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"77b1a7af390e6b84e1ab793d37cae039","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"8a95a6fe3e0ea832e66cda19f780a86e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"7aecc537d1f06ddbbfd7b3ead99440c1","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"d47bdeee32cc12de24fb089d74ea7f5d","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"321e6fd6a8c1350eea812b688dd9c04c","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"e8b5a6e1857f5d24796cfbbcb5d91ca0","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"cd92beb2b862a282c4a2a087d3d07f9e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"fc0bd81a90ce600f92d4d67c550a233f","url":"Java/process/plugin/ManageTool/BasicPlugins/SunLight/index.html"},{"revision":"08bf511ad044c6a5ce9d95962be77d02","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"7aa0670d1bc4ca8af128f3c4f04e3f91","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"55781e91df4f73c3bfeca5d80b837433","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"97247caad09d1398581e2e154ccba17f","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"df146d4d96fda40df06ac507f4743a27","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"4d3d31b7b5ae40d8c826a2ec9362cbef","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"0208793269519338e81026e2e20cf8db","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"4ab60ebaa9fb676513a0e86b964f6590","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"f11df32038454e859ad8606c2f2f766b","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"e956bd09668e0783f00e24d616b2ac20","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"aa8fa72749ee50070b3ed5702cd1f869","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"0802176d56ebdc0876742fa9d673634f","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"bda1f3396eca39bf475fb459c42f92b8","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"23415014f6a3e6541b3dac827c67c579","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"0d973263fc05bad3dfefc0cfe27815d6","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"7718ef9bbb64116cd71cda4729f9be49","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"78714b9af5a4631081f7cb75cc3a8461","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"ec24d981b7d83d88017077c31faa0a7d","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"d42f2e27ca2a3d21e4dbb9e82213532f","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"7d210ba5533da4b0ba157c23947c1f00","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"def81f4a46b50d45cb94a53461ee6c45","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"bae15db892cd8c2b5574cbb0d7ea0161","url":"Java/process/plugin/ManageTool/task/BeautyQuests/index.html"},{"revision":"d1b53bd2027df4878c6f0bccd928326d","url":"Java/process/plugin/ManageTool/task/BetonQuest/index.html"},{"revision":"33bac364d8d9c17aa4999bb7d3e59340","url":"Java/process/plugin/ManageTool/task/Chemdah/index.html"},{"revision":"80f1a2c8177a7f36aff4297173710b77","url":"Java/process/plugin/ManageTool/task/MangoQuest/index.html"},{"revision":"5a3c2ee6b933117ccfbfd2be91e47284","url":"Java/process/plugin/ManageTool/task/PlayerTask/index.html"},{"revision":"ff0b510b92e89107a6b19337a01f36df","url":"Java/process/plugin/ManageTool/task/QuestCreator/index.html"},{"revision":"bc381b556f847fb2b462943a0acf4856","url":"Java/process/plugin/ManageTool/task/Quests/index.html"},{"revision":"0b8b041fa922c823a7729da6d5b89c50","url":"Java/process/plugin/more/faq/index.html"},{"revision":"9cb31513bd55e43d45211015ccc3ddf6","url":"Java/process/plugin/more/plugin-abbreviation/index.html"},{"revision":"80fef2fc4583113577d9027d635fc8a1","url":"Java/process/plugin/more/plugin-backdoor/index.html"},{"revision":"7de15952e094438cabceb17caa454f2c","url":"Java/process/plugin/more/plugin-build/index.html"},{"revision":"7c8a4859b8f45733b2f01b16638b9b7f","url":"Java/process/plugin/more/plugin-config/index.html"},{"revision":"904e73c499b9ba733e391584f2543baf","url":"Java/process/plugin/more/plugin-download/index.html"},{"revision":"eb63df0b379c9c45fcfc704be94ccb79","url":"Java/process/plugin/more/plugin-signature-file/index.html"},{"revision":"e02a7578fc9d81d4a25396010753c200","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"918a3c147bcc93b0cb040c6205a17d97","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"d30377ca604144171a238255d6a1a603","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"d6c6a45851f28b0ea74dcf96819d2f04","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"e297b9ecafd201109113ca5bc5e575cd","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"d29318363b55c749aeca80f161081b9c","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"98a3929536b368f475fd9062037f2c33","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"8f6c8d650ec4e2a7009c20b4f66240b4","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"3e1aa02c2594f5dfac59d04096aab8d9","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"83f229a1213cda2af3c04635ece37d73","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"13b8dbbdf17d4712bd9d4b6935ad986b","url":"Java/process/plugin/other/money/index.html"},{"revision":"1ccb7d6ed2e1d9a15e3242d1d0005fc6","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"5c463d57011b751654e2aafcb1f9d695","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"bdc02c31cad623e0d1adea956487893c","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"eec4501f6ede30978dc8df9c64299c39","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"e588ea42c14be1115b584093b2c99d1a","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"7b185f89e3787398f1bb7f892625513a","url":"Java/process/plugin/other/QuickShop/index.html"},{"revision":"4e267014892e40d8cc345feb76734745","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"a6ac04a9e30b299ccfa8266ee63aeb53","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"7000c9c4ae6d9dd9e18bbfa1d11fb7eb","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"4ee5b30e0edd4b745d7b5653165aad79","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"2800e695cf215815b9fe67bb585e6bd2","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"f252e37995148503342de8ec41bc0080","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"25d9d026c32bb84a871bb9643ef07594","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"e41b4f1617562d4901b4e49b917b8990","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"af6814a1773adfdd8a4e601a23ec4596","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"11fa684e13dfb02a9dcffe46119a800a","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"f6bb29211aba22744af6ac3a9d74db4d","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"0b5e4efcf8f8db4524287e45c0543f3b","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"faf5731948cfffbb3d4771e6c1994980","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"cb71556009618009a8345eff404159a8","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"aa9fa292fae61556bf500c3ede3ed326","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHub/index.html"},{"revision":"045146a69401999a52135acba3e3b30d","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHubReloaded/index.html"},{"revision":"00f02597e11ee5473dbc8bca4807f0df","url":"Java/process/plugin/WorldManagement/lobby/index.html"},{"revision":"65cda56fcf9ca3c8fdc9e4bcabb0b6af","url":"Java/process/plugin/WorldManagement/lobby/SuperLobbyDeluxe/index.html"},{"revision":"09ac14ce4fac0542a335e4300d54a24a","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"06194a516c30ef5b72ebcd0311590730","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"ef5488546c4f055edabc5725784249c0","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"b5441105619a36baf0944a4301931cf4","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"69636701c8d475fa1a63cdb5d7a25460","url":"Java/ResourcePackManagement/index.html"},{"revision":"2c0071ddb1892d8250682c8848026e7a","url":"Java/services/index.html"},{"revision":"98c011e55454d02d1b8e7df93b6ef66f","url":"Java/Slimefun/index.html"},{"revision":"610a3c98c9b7f37d5885ea01dff1fe75","url":"Java/start/ask-for-help/index.html"},{"revision":"a4dc3b33d9210c69ca6b13058b8a5615","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"3fff8d72e261c3a3059220a5a4138849","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"8654d73c72b3ab409bd19a8d8cb67456","url":"Java/start/basic/server-management-command/index.html"},{"revision":"6a430d1ed586b19884e2959a27f4ce50","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"3ccef9fce0006cf103de0256d143e128","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"3ea31a089384b4a779d3cd60473ea563","url":"Java/start/basic/what-is-log/index.html"},{"revision":"765e2faae8a29e933ec00bf73c8f969d","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"eaf344e5023e2ae134bcfb67e7b4a90a","url":"Java/start/basic/what-is-namespace/index.html"},{"revision":"a95b86b85fc84a981a0eee738c593585","url":"Java/start/basic/what-is-nbt/index.html"},{"revision":"07fe6dbdaae8378d856d83ad1ddf0e32","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"f4562a65ed225b0efec56b7bff24f03c","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"037cfb611c1568529e348527a02c6b23","url":"Java/start/basic/what-is-server/index.html"},{"revision":"dac1856516137d3f810e5bd0437e3a14","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"dcc92df5fc6c3cc463a2659e89cd4322","url":"Java/start/basic/what-is-world/index.html"},{"revision":"06f82019948a290719433b844573aad5","url":"Java/start/config-server/index.html"},{"revision":"e48e26155d2987b0500bcf32f543eb3d","url":"Java/start/connect-to-server/index.html"},{"revision":"15b7d0983e7f1a21b530648203aab2af","url":"Java/start/deploy/index.html"},{"revision":"1b03cd71af7cce8503c676402db722b7","url":"Java/start/index.html"},{"revision":"4a17791d8f2caf011e8908eb95756990","url":"Java/start/install-server/index.html"},{"revision":"5199dcd708c7b18af9dafa3bcc674359","url":"Java/start/launch-server/index.html"},{"revision":"4d2c024e801b7966aafb89e8119d11f3","url":"Java/start/server-core-choose/index.html"},{"revision":"e4fb6cadbd377c68a2250500f73b52ee","url":"Java/Sundry/YAML/index.html"},{"revision":"e2b5ef4e24bf8ae6a3a2fb30d62c76d3","url":"Java/task/index.html"},{"revision":"1d82dea23982eeee9d50b00e46c2f339","url":"Java/title/index.html"},{"revision":"12f51ef2347f0ef5a50e986fa01df457","url":"Java/velocity/index.html"},{"revision":"3ba4e55db3bd5ab058b7bae23b09d6e8","url":"love/index.html"},{"revision":"9d9c0ebf648e69f0946f3e7e1b2d9aa6","url":"maintenance/index.html"},{"revision":"d1df9f38c990474087f32a044ff80ee3","url":"manifest.json"},{"revision":"c50734958711c333a52c811647758c62","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"5033054423553bf818e760f3ddc5e9e2","url":"preparation/dumb-script-using/index.html"},{"revision":"5f2421b4805046ce8cb0561bbc6e86cc","url":"preparation/index.html"},{"revision":"51b6ff5063044088e1ac79e3dd51959b","url":"preparation/text-editor/index.html"},{"revision":"542f6f49d561be6f6634f2fdbf627200","url":"process/create-art-assets/index.html"},{"revision":"aae5e299b5406efb6feb16dff651ec30","url":"process/dashboard/index.html"},{"revision":"8dfe8ac718bf5ec5bae8035274bb6ac0","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"49401e569de73e0e1a873139b9b7abb8","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"fd0213724cc6e7ffffc6ff4b7ecfb6ec","url":"process/deploy/intranet-penetration/index.html"},{"revision":"357c2ab0a5ef35de18ecd4983b074913","url":"process/deploy/optional-mode/index.html"},{"revision":"855691e78360c0fbbfeebfe1fe4f2088","url":"process/deploy/purchase-server/index.html"},{"revision":"baa0b3a3bec67052513b1242801abb45","url":"process/index.html"},{"revision":"3df1a4193cf3e9a5024584b3c348bb42","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"160e81a498036dfd3279dc4792f32f83","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"5c3ec773c31bf60c712cdf792e5b7d75","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"6b411bbde1a9198a2d39745eb497e45e","url":"reading-guide/index.html"},{"revision":"31e1d620383194ed2a1f632315fc6796","url":"search/index.html"},{"revision":"a645b9cda39f3cb6fc7cb59a2e2ceda6","url":"services/index.html"},{"revision":"be7331fb35bb3ee7daa87f94409c3492","url":"start/ask-for-help/index.html"},{"revision":"04b19070763b6b0f89c92f9c931052ee","url":"start/basic/what-is-caton/index.html"},{"revision":"3d93a3326c50658d9a6c01165aaba624","url":"start/basic/what-is-log/index.html"},{"revision":"9b6590c2e7fae0650dcba45f1487af8e","url":"start/basic/what-is-messy-code/index.html"},{"revision":"93322af0efcb484db7b262331199a3a3","url":"start/basic/what-is-permission/index.html"},{"revision":"2d7eeee7313567296972021aa9db89c8","url":"start/basic/what-is-plugin/index.html"},{"revision":"a1051cc430894bef1f5243b417d3e6da","url":"start/basic/what-is-server/index.html"},{"revision":"78e7d992d3b9dbe996deebf0c947d05b","url":"start/basic/what-is-startup-script/index.html"},{"revision":"a902ef11f66af2851cba13771f758a21","url":"start/index.html"},{"revision":"a9e43e943c2977b5ac32cc83cd8e03ea","url":"Sundry/Advance/Linux/index.html"},{"revision":"338175f2db9768abff3f80e8d370b1e3","url":"Sundry/Advance/management/index.html"},{"revision":"a80f1a15b082acf14e4ad122efa12913","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"3ffa6abe802a15252d1abfdb54b333a8","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"4cd8bc4c478ef7db5a8dcd232156ae67","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"d54e3e814d8daf5c47eba190fe455852","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"d52f8ab498cba29760f187a594fe98f9","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"6fc020fcdcc5748816393362c281de8b","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"e58faa9a03b8dcd72fe4764eccc59199","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"0268b9816105d597eb60fc57299e28d0","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"7c3da89d1edfdc1264c7a08455cb25f4","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"7dc2ecac84833d29a963c1023406d1b6","url":"assets/images/114514-b786c37f2b8c79db754bc07d9ce96d57.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"420e1ff595e558d29a8d903cba853a2b","url":"assets/images/add-5607169559fb1cc4ab637c9a4c98a73e.png"},{"revision":"2e42ceb5683b01f352fa424c030a0956","url":"assets/images/add-new-13e5e367f19f6c2a42efbdb6abfb8209.png"},{"revision":"ce0e251919cfd69b926781859d9817a0","url":"assets/images/add-web-14deac17b28a3a4fb61a6b6cc0459c3f.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"e19629d24989f942a24f588db2e55ed3","url":"assets/images/api-42f36e478fd0b1788169f9dfbd833b14.png"},{"revision":"66950ba2cc69f5b5301b1b3d9f208e79","url":"assets/images/baotadianj-b468b95e8a549671b91e2aa88be7f512.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"51a2188dd27d72a7e435ba6ae1764e15","url":"assets/images/choose-second-5e1f6388085c22db7c5b809b8994726b.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8e7449c3ea690e56438ee240e967c9d2","url":"assets/images/close-yellow-cloud-1d8f6e382f6b6e9b14a19ddf6c492073.png"},{"revision":"1e2dc663ad603633513c3693a47f02f0","url":"assets/images/cname-baeabe594cff426811ea4fce0941bda9.png"},{"revision":"a3e700f0836fa4812d2d18450a9c8857","url":"assets/images/command-2-4c1a7d45fd949c47ae5a350f1aeccbef.png"},{"revision":"218321aef5363cddaf2a79152cc4223a","url":"assets/images/command-4-3e5e99a8912a8f70e9476bd3499b0a2f.png"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"151cb5e59333e6459a37e40ef69163dc","url":"assets/images/dian-new-c2eb5a60c87398c9a48045e3d684787d.png"},{"revision":"111ff40026180afdae67949c02cb89bd","url":"assets/images/dianji-f870a9a0ba5d54071ec7b75006959695.png"},{"revision":"421ea5f7f5db92d13274e944976dbca9","url":"assets/images/dom-42d96850f45abf9fffa53d8ffa4aff10.png"},{"revision":"cbb4c843ee1125648ecc507db6ac8282","url":"assets/images/Dominion-08-c76251a1fcc7d1ed3a39eb001c13a75e.png"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"5fcc54392eb2ea321bf41c517a6dc3d2","url":"assets/images/getinfo_1-6f053129bd4c9fd530213901d259a428.png"},{"revision":"bd3dddc988750eb0f80d27866dd92e6e","url":"assets/images/getinfo_2-4dc06f209b461e0fddf7043dcd7dfc51.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"979781b377cee0c6414c0950f91f5f6e","url":"assets/images/index-8851bd29b7b75fcb2c29adaebd54a73a.png"},{"revision":"a0399b38208c32fe8d7122426f7a3c1c","url":"assets/images/install-260de030f64981d0b55a029b2d83f29d.png"},{"revision":"0b675da4495f6c5542002bf24dbec822","url":"assets/images/jieyazip-9898fd42fc57167a84dba8452bc6dbfe.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"123c46b97f93b60efb90c605c5266f2f","url":"assets/images/mm-87335277c86da35a61761ac82f6d1ddf.png"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"907c620f94caf47cb412a72ffcdc45d7","url":"assets/images/mysql-0df5bb67f5a5d4997e29e61535a218de.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"d51e7c48786fe1817f5a1c39df1a8816","url":"assets/images/origin-957659ad641bcc6eb65672538954de82.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"699ade4b741cb5abc954bf18ff20524c","url":"assets/images/QuickShop-8f2a631927373cfa601f764106ef0749.jpg"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"eef647337a056beb660aed803e44a195","url":"assets/images/removeindex-10bd6775a7cdbbbc43f7ab144a2df378.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"f28ac98282f5c14a9e975a762643d7a0","url":"assets/images/shangcwenjian-fd659bbe6566d321100f63e76e1d4066.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"ca42dec32abf9bc391d6b73133a0a75c","url":"assets/images/talentsaclogo-ce8f52167829962b2237b4db0664727a.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"214a76c8b1721879cfce8b438b8cce98","url":"assets/images/tianjiahuiy-d52d53cb9fd34c257dff095cc135fff3.png"},{"revision":"20578fd0039ccf4071bac55ac42ed72d","url":"assets/images/tianjiazdy-270ead8e21b1c7d9cf9546b711f00a59.png"},{"revision":"7f5e08e3505602fa0a17abb51475a023","url":"assets/images/tianxym-b901e093821021f287d1b489c70f09bd.png"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"a8674ee403db77075ea57402770c5ea4","url":"assets/images/unzip-597c7053f529d0367469f644cb6c2da6.png"},{"revision":"dc33af109da9696c57b284bfdc13cd6c","url":"assets/images/upload-414f95c36b600f8ae1741689b43db495.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"771bf70f23041b2e89d6a89ebdad8d6b","url":"assets/images/vercel-login-d2c3bb7cd3f3e7c06c7c2745e68b85f0.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"bfa2b942e315c8a17d0c0fea24db2f2a","url":"assets/images/wenjianguanli-8557834b8e0d875c36d8e532a1849860.png"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"8188a3b5a29a0ed3c1032e8d8efdf370","url":"assets/images/xingjianxiangm-48bca89b28a8e2ddb9d847520ccfd291.png"},{"revision":"37b41dd92ee5b54fd64a0bc77e5ae032","url":"assets/images/xn-login-a783c41521254c4bc76338f1b564d3b3.png"},{"revision":"248625cb4ac05f5a8b9995df0c2f2747","url":"assets/images/ymguanli-5168768fa33b72717ed102e2fadf15ba.png"},{"revision":"cf0f1633d64444841b495464521c9ebe","url":"assets/images/zidingy-c6faed9ba860a43ca2a1a715920ac4f4.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"768411425e3a52c55725016d75269e8d","url":"assets/images/妙妙比喻-db2018eb2d58beeb8af46476dcbae0bb.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"26d8d72062c7ed23218e72b2c7b8226d","url":"assets/images/没事不要免费帮人-cf9c7774f933331cbc13dc5aab68c882.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"0c75f94da34931c093e2255fb8fa570a","url":"img/back-top.svg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
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

})()
;
//# sourceMappingURL=sw.js.map
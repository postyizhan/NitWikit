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
	return "1.1.4";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.4";

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
    const precacheManifest = [{"revision":"f084402b45b407db13d54b75b4daa1a3","url":"404.html"},{"revision":"9f489f00ba0542150dd01f554d587961","url":"advance/bot/framework/index.html"},{"revision":"8408bb4523c32cb57aafcf5e9fdf26a4","url":"advance/bot/general/index.html"},{"revision":"a28980b749a5b86cf2450bf882464675","url":"advance/bot/index.html"},{"revision":"041a21982d123e21ced6c3940246fa39","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"78687d71195dcec82b32e68c4f9bc50b","url":"advance/index.html"},{"revision":"9931349195559bee7d6c5c573de59991","url":"advance/Linux/backup/index.html"},{"revision":"b45dc59a8d709a6080ef8a30fe973e3d","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"733753d5ae0e35253b5c043ad3b89189","url":"advance/Linux/frp/index.html"},{"revision":"ab024cf5f2c5cbe26852dee53b0ae91e","url":"advance/Linux/keep-running/index.html"},{"revision":"764b1b614cd20d684fa407a7c35b35ab","url":"advance/Linux/start/index.html"},{"revision":"50beb93a6f2b816891bfbb89ae80bc29","url":"advance/open-website/index.html"},{"revision":"ad672fdafd4e934be4215e329c673d3c","url":"assets/css/styles.54272f66.css"},{"revision":"3beff0aa142270528916b063b0c67bbc","url":"assets/js/005c270b.66673d2b.js"},{"revision":"9976b3b528c06570672d15954323c735","url":"assets/js/013c8c14.3e818910.js"},{"revision":"b3e51f77a6870177869c56e708098fab","url":"assets/js/026f291b.754c0731.js"},{"revision":"4033a582afa395b5debe14b718f87a92","url":"assets/js/0272dc73.5b558ae1.js"},{"revision":"8f55f683b32d8ce0b4d7191076f8ff43","url":"assets/js/035cfa77.f25028da.js"},{"revision":"3d435625f9a7fa2a2be7b14ab546bded","url":"assets/js/03b205ee.dc6cb392.js"},{"revision":"3b34d3b192735bfcbf13174f7cac4bed","url":"assets/js/03f997a1.d44330b5.js"},{"revision":"48e4b76be7db409e055846a27e63617a","url":"assets/js/043fa146.9eddac5f.js"},{"revision":"932e1b6986e7af652ccbee05b35b2145","url":"assets/js/044f41a1.0b18c687.js"},{"revision":"6bef093cd57fac11ea142d97b1f3096f","url":"assets/js/04f5c692.ddc1b378.js"},{"revision":"1d94866b0c26e59b96e5323d749602df","url":"assets/js/052366f7.a5eb3e26.js"},{"revision":"7ce16bbdb97a46b1b15e693dbfec43fa","url":"assets/js/053e2f33.e0165583.js"},{"revision":"a62c6f14369e307e75bebde539b8a777","url":"assets/js/058608ed.6ccd73c7.js"},{"revision":"ca275cce01ea9582c6c898f10ec0021d","url":"assets/js/06b0ed59.bc7c9f95.js"},{"revision":"6c8e040494709b5cc48a166ab98a052a","url":"assets/js/072384a4.158e0534.js"},{"revision":"330a02744d06728b2541fcb0d1d25bb4","url":"assets/js/083acdf9.0b05777e.js"},{"revision":"ab0bbd1782e254832e7f9d8dc59c5bc0","url":"assets/js/083ebe2e.5b1927db.js"},{"revision":"80d212f4ef4e94d39374e8bb534da2b5","url":"assets/js/08e7f72a.1218aa3f.js"},{"revision":"924a2b19d0e79106a0e7d97049ca888f","url":"assets/js/09156d2e.bb0198c6.js"},{"revision":"53bb6a1ef6df989c769d24ad74172487","url":"assets/js/094a7dd6.3127a251.js"},{"revision":"193330c25c10507aec5b2ebbfa93dc41","url":"assets/js/09714880.92e4bc2d.js"},{"revision":"ca089e26e7f0a45eb99cf21ee47b8fb4","url":"assets/js/0a17cf6d.4e92ab32.js"},{"revision":"805977a75bbb26780f8e2681de67ff0f","url":"assets/js/0a1f9916.37652aef.js"},{"revision":"4311a003575c67af87d8cb19280bfdb2","url":"assets/js/0ac0b3b7.d9f51a9e.js"},{"revision":"9cf52199465be94cc93f5a895751212f","url":"assets/js/0bc00c24.8e1417f5.js"},{"revision":"4be02825cafd14b47d14c95f5aead816","url":"assets/js/0bcb5d9e.96ba7d92.js"},{"revision":"7e2731d1a3cd54213eb6f9abc916c105","url":"assets/js/0c20e5c5.d5b934cd.js"},{"revision":"dabaf3a4189a508c2f4b1157b7174121","url":"assets/js/0c7f12b6.d392b137.js"},{"revision":"c4f49d4d9758e6f178bd05f0c73ac129","url":"assets/js/0e384e19.1d8e2875.js"},{"revision":"c32ceda5612b5416124c1326376afea2","url":"assets/js/0e9ef1fa.57201515.js"},{"revision":"0913d9286b8e6c18464bcc07d4b107e7","url":"assets/js/0ec7bf36.ea33889d.js"},{"revision":"ae62ff19d3ce5dcdcbad918b6b861701","url":"assets/js/0efa0f03.1e4076c4.js"},{"revision":"268261df1c8cecc91f9619676a2d9ea2","url":"assets/js/0fc807d9.19ed72ba.js"},{"revision":"81d2b227a4bb0e212d68c201e2e1c0e5","url":"assets/js/1127.91b1aa4c.js"},{"revision":"76c35bcb71d2b74e77082642e1a72e96","url":"assets/js/11f90be3.8cb47993.js"},{"revision":"364baa5973396896dce9ed574db9c545","url":"assets/js/1210f0b1.2c652bc5.js"},{"revision":"a10e2b709e08cb04928d4ae17147d0e6","url":"assets/js/13dd9964.e94ef37d.js"},{"revision":"123a6c8ff2b73af8be0004b62b592181","url":"assets/js/144520df.91706106.js"},{"revision":"40fa841a4c79ec1777bc76518d93bd7f","url":"assets/js/149.2218b71d.js"},{"revision":"d97910d032e10672589c203639400320","url":"assets/js/14eb3368.dc9b64b4.js"},{"revision":"46d7d4afdeb4b089f34742f0ef3a9e97","url":"assets/js/15daf372.b32932d1.js"},{"revision":"5fb536e2b8f526aa95f9d2bd391f41a9","url":"assets/js/15db17c1.d7051d59.js"},{"revision":"7c560635a259acb40b3a699334054a67","url":"assets/js/15e4e3ed.e96f5740.js"},{"revision":"7f2fd8e0a79ee91e79616415de310489","url":"assets/js/1603.07fc4d36.js"},{"revision":"88f6674876db37b3bb93e0819714818d","url":"assets/js/16731d58.d2a1993d.js"},{"revision":"ebad505eeeca30a6115109db9cd1cdfa","url":"assets/js/175f0af4.dd013ea3.js"},{"revision":"c3953a48841676d85ccc00e607356f00","url":"assets/js/17896441.5f05125a.js"},{"revision":"2c0c98f262fcca77dc3d5fd08b1b3c5a","url":"assets/js/180bc163.b0972604.js"},{"revision":"62b673706ce7c4a1fcfc4ec55c439a46","url":"assets/js/1856fe2a.7b147de6.js"},{"revision":"79afde7b65cd6faea667b7d915f69e35","url":"assets/js/185d6330.c97ece7d.js"},{"revision":"a3956d9215661073a8b967d805735c18","url":"assets/js/1896e6f5.d865473d.js"},{"revision":"a1fc99d586692b39a9070ee42575aa0c","url":"assets/js/18b67442.306f5b4e.js"},{"revision":"988fd00c9ef07590dca5567019b1959a","url":"assets/js/18bca995.534ebb52.js"},{"revision":"9c1e78d4cda80ba0e004b0636ec67af9","url":"assets/js/19045c37.47530f7a.js"},{"revision":"a3599b4c7937dfece991095fc60c73ab","url":"assets/js/193a055b.a3db1f33.js"},{"revision":"e1f5181fa44dceed52c14daa8d6e7c70","url":"assets/js/198ea2e3.597f5164.js"},{"revision":"02216a95d455a716f1f4ca2042586d0a","url":"assets/js/19cf8050.eee36cd0.js"},{"revision":"19ac6fbb03877d0069b2a9651934977a","url":"assets/js/1a4e3797.93dda008.js"},{"revision":"ee03a0f7c1bd1c20e75ae2e497767ce7","url":"assets/js/1c42be93.1ecbe4a7.js"},{"revision":"a81df2a3a53b2d4108f81b23a3c82040","url":"assets/js/1c6846f9.b919c8da.js"},{"revision":"8909cf7a1ed217e93f138fa53cdb2230","url":"assets/js/1cf75b4f.82773d3b.js"},{"revision":"94e146e6283b489a104088c23102164d","url":"assets/js/1d1b9adf.3b48b0d1.js"},{"revision":"72073a8ac474b990e6233a0e7768206d","url":"assets/js/1d42ad15.9f69e1fd.js"},{"revision":"84dcffd6f1db5d96a1324a9b9c93b951","url":"assets/js/1dfd2628.facd4b69.js"},{"revision":"0b3164b75d2790c23c319a7f4d3f2fd6","url":"assets/js/1e47cbc1.1f8c68d2.js"},{"revision":"0de173c51cc75ed0dfa36bba06a1683a","url":"assets/js/1edb7625.3a46e8a7.js"},{"revision":"4ef6410e531f746f1d725d0cd8483eb5","url":"assets/js/1ee6f0d4.4bc7b51c.js"},{"revision":"a0ec44e88c5b2e6b53a9478f352f797d","url":"assets/js/1efacac9.913af847.js"},{"revision":"9edfba5f9989daf83b442927fcc6fa53","url":"assets/js/2001.9dc8abf2.js"},{"revision":"408649e3fb98098acf427c81748c41ab","url":"assets/js/20215aa7.e54cf2ab.js"},{"revision":"9747a9bc4cf080b51bef1251be7faddf","url":"assets/js/2067.72f75d9f.js"},{"revision":"a823bbea3530f0f4a7e9861dde690b8a","url":"assets/js/2070.2dabe3e7.js"},{"revision":"0aed0852f573e26a4c2b4dd8ebe6b1c6","url":"assets/js/2096.49fcd123.js"},{"revision":"650c7d168e053b014061dd29a5805e48","url":"assets/js/20d69604.b18d46f0.js"},{"revision":"10e023ec99f2a632126602412f2a21ab","url":"assets/js/21484c29.23a93b2f.js"},{"revision":"8921cdc71773bf90d441cf80a92b2ca6","url":"assets/js/21c534b6.0dfe77da.js"},{"revision":"441a246ee13c8d563e1d77454f27256b","url":"assets/js/22dd74f7.4fc2b7f0.js"},{"revision":"5d18fb2893d74bd764d1740d8020c62e","url":"assets/js/2351.25cb082d.js"},{"revision":"4f00a21a9ef4e52c869c64603d2f45b0","url":"assets/js/2367.aa2d2eba.js"},{"revision":"c9403bacc456bb3766b721bcef2f7e20","url":"assets/js/244418a2.d9360bbe.js"},{"revision":"00718d0e3fe0775082287aceb176931d","url":"assets/js/24a68a77.fc4e01d0.js"},{"revision":"600a685b223229cd9379aef42efbe4bc","url":"assets/js/24d8f7d7.935c17c9.js"},{"revision":"7ca191be6882cb6a752cf3ed666f8ccb","url":"assets/js/254a43c9.76222078.js"},{"revision":"ae3a258674dc4abcef878f7f18c5d074","url":"assets/js/2867c0df.6e5eba4f.js"},{"revision":"22297c745968b4c4804e64cfc31962bd","url":"assets/js/28b71cf3.1b748ff7.js"},{"revision":"a3dc39eeb4e13a5674b3b5f3d471183f","url":"assets/js/2a71d676.951bd735.js"},{"revision":"4b06a25cd7a5cfb7e48998fa4b911968","url":"assets/js/2b4e0304.46448d50.js"},{"revision":"9caca9a0f058bcd9630ecf9fe09e50ca","url":"assets/js/2b9de2c0.fa71832c.js"},{"revision":"f3cf82737554521b24d6c747e815a790","url":"assets/js/2ca153e3.c542d88b.js"},{"revision":"e9534a81a52a5b870cc62c9e45484de9","url":"assets/js/2d386ab7.a69a461b.js"},{"revision":"8a47b1bf3f6803902a47e0014110fbd5","url":"assets/js/2d5e3179.c17d54d8.js"},{"revision":"5e4a1c79bad852695ca010880d58c101","url":"assets/js/2e79c762.535e7060.js"},{"revision":"5743b9fe3692d5fa33dbae55779ea567","url":"assets/js/2e938706.ecc76c55.js"},{"revision":"97c7d4f9ff0dc8458196b557213134d1","url":"assets/js/2f39a0af.4eea36dc.js"},{"revision":"dc5eb9dbfbcb411e25baeb7937585739","url":"assets/js/2f8ede37.89c622fe.js"},{"revision":"774b44055a4025b7346cd413b19ef14d","url":"assets/js/3095.81d0b4ba.js"},{"revision":"8108f915e650bddb1a1fe94a84151c5c","url":"assets/js/312f6c84.a3e2ac5f.js"},{"revision":"a6965dc8a85eb9b295a795ed29aae4ae","url":"assets/js/31735ebe.1c35f90a.js"},{"revision":"32938be1031cc0ad71c4c05fe7839124","url":"assets/js/32cf0cce.6eee3741.js"},{"revision":"98e88d7b0bfdb53ca52fe9a66a9d2d79","url":"assets/js/33261842.00a905ad.js"},{"revision":"c3e28595daa838c0d03796e473b50033","url":"assets/js/3425fb39.5b4fd5ea.js"},{"revision":"cfb4da2efb92bea96344d974f00ed2d9","url":"assets/js/343bb2fa.6257ddef.js"},{"revision":"cb49dc2d6a8b06b2c659f7c9af214489","url":"assets/js/3448.546c43cf.js"},{"revision":"d3d71aa5c75c13c596300abd9329c16f","url":"assets/js/3488027e.f2c649a7.js"},{"revision":"1ec9d6decf38cfc537c9829211b76528","url":"assets/js/349d9c34.d81c9e98.js"},{"revision":"ec3c7baf044d53b34ca2331574b5d905","url":"assets/js/35d30f29.8aa455c5.js"},{"revision":"4d75dd6a5a346f6bf7b90478a883a912","url":"assets/js/36c75202.36c4f5f6.js"},{"revision":"5cd751a1d9eb91ab8c1f1115b53c8797","url":"assets/js/3749f972.41c09fed.js"},{"revision":"0563c267dacc0d404f6b87efe72bc7c8","url":"assets/js/3817.f5f103b1.js"},{"revision":"ef37e8ef172ec46d0a19f945afacdfac","url":"assets/js/38b0474b.c4427a73.js"},{"revision":"8f37c603a1ee92d8318ea7179bca943c","url":"assets/js/38b71911.988f6233.js"},{"revision":"0ba2b94d7a1c3c37fb3e5c40cb132a65","url":"assets/js/3966.aa8b2229.js"},{"revision":"2e299a7d6efd5d98b21412ca9dbd1f52","url":"assets/js/399101db.51635ca4.js"},{"revision":"927293e0028c9be00c531387d5a259ad","url":"assets/js/3b8970d0.a7f62c06.js"},{"revision":"1595435c20a43d009d25e7666de96950","url":"assets/js/3bb1ea30.381d5220.js"},{"revision":"1fafbf6529bbcf227bf87d1a8082dc8e","url":"assets/js/3bd1ba02.e9fa4a0a.js"},{"revision":"496dcdffced3330f00cba4fc2b28f7c2","url":"assets/js/3c5393f3.64a909a2.js"},{"revision":"7fae6b55f71769fdfac222b1ebc63a8d","url":"assets/js/3cd38fda.fd109670.js"},{"revision":"42edcb76653be5a96d64b597d8453d89","url":"assets/js/3cd65ff0.3676ace9.js"},{"revision":"638c21f4040e985d9ce2d038b2806a10","url":"assets/js/3d7f94ff.363d3bdd.js"},{"revision":"5d3f002731eab649569529911f7f96e4","url":"assets/js/3dd749a7.86a07851.js"},{"revision":"f18209c602ec9055409ed72fdba6e833","url":"assets/js/3fbeb9b5.4e911dfa.js"},{"revision":"c7dac7f16bf5abec41f906ffb82132cb","url":"assets/js/4067.06f26c93.js"},{"revision":"8db66c90aebf2228864b55bb47055a61","url":"assets/js/40c17158.61adf370.js"},{"revision":"6157718d7d8a7296e22a6c2fdcc45567","url":"assets/js/416679ec.1cdf783f.js"},{"revision":"69a3332e6390018834eda05cd6108272","url":"assets/js/41c0ace0.2265af8b.js"},{"revision":"5c4f970829ca0bdf70924b389a9b5c06","url":"assets/js/425e3dd1.822107a4.js"},{"revision":"52d662c3e0218e0b42e6334b5f4ad5c3","url":"assets/js/43117a18.1b62fb5d.js"},{"revision":"fcda970ecb69c94754d89d7c5efcedfd","url":"assets/js/431266e7.fe79c56c.js"},{"revision":"6e4f4bf9fa966f4735eab63b5fcac10e","url":"assets/js/445c22af.bc139515.js"},{"revision":"03be26f161a9b75fafa626a74440a4f2","url":"assets/js/44975943.bd745781.js"},{"revision":"a47245bf12e16769629f088041691d14","url":"assets/js/4502.a1477249.js"},{"revision":"2890d52884e17870d2fb749036499ac1","url":"assets/js/459.5e62a9b0.js"},{"revision":"99362cc663b0ad645ae4b86546402785","url":"assets/js/45cd711d.293862e3.js"},{"revision":"94e144bb575445efbb34e2455364d4c6","url":"assets/js/4604.64713444.js"},{"revision":"3a85b3e8f17d6d128ac7d944479c5b78","url":"assets/js/46bf3d5b.55a78ff0.js"},{"revision":"7a4c811c4beea1f1e0b878dda13d9a95","url":"assets/js/47198c5c.a6d4c75d.js"},{"revision":"8e2a6e8e4af10e69561f272be8b9d6fc","url":"assets/js/4806.b515c0a3.js"},{"revision":"c1ca53af8c85e80212a6f714214f0805","url":"assets/js/4838deb2.33f93f1a.js"},{"revision":"215a873c07b79a73ac960bc6e2062820","url":"assets/js/4876.71c61a4a.js"},{"revision":"75cdc3a425f75cd9f9c657379c9a4ad5","url":"assets/js/4985.3e3e16d1.js"},{"revision":"665d2525bdace40623447dca95b89ab0","url":"assets/js/49aec60f.f2c2fe0d.js"},{"revision":"94af47d13a6f4c654d49c02b006dd206","url":"assets/js/4beb5b8c.300fe1fa.js"},{"revision":"4fc7e873c0d705d6b3c43e9ee9aa3330","url":"assets/js/4c59ca14.d877868b.js"},{"revision":"67dcc252595f54e88e1a821dbc5b74ae","url":"assets/js/4c7ea6db.372e212d.js"},{"revision":"e5032e756b98bdd94d87b20e6ea26ce6","url":"assets/js/4cdf84ef.853266fd.js"},{"revision":"9844e38579db60ce7dc421cffb8f2f48","url":"assets/js/4d27c60c.e085ccfe.js"},{"revision":"871f9879cf17ad13fd89b103c8da4945","url":"assets/js/4f644c0b.0181066f.js"},{"revision":"f7be68c4fea049b973ae509eda9065cb","url":"assets/js/4f8bb2fd.3390a6f7.js"},{"revision":"2d8e5b4a9a4b4387bba5abb84b625feb","url":"assets/js/50b793dd.b5f35402.js"},{"revision":"fca2bf503cd594563ef31b1fdccf83e2","url":"assets/js/5133.10f92c33.js"},{"revision":"ae5e0c1791bcd4a948486e72ed6f187f","url":"assets/js/51ebfdb4.74c3658f.js"},{"revision":"053ee4284e5f3abf0481f0ff916e75ce","url":"assets/js/522fd580.3b3589a2.js"},{"revision":"3efee2d1325259d959dac0a48d171e3d","url":"assets/js/5238.1dba83ab.js"},{"revision":"b37b21631c57a06ab198a14f2cb326a4","url":"assets/js/5410.3f21a21e.js"},{"revision":"d4eb04292bffb6ccd98231d70088f72b","url":"assets/js/5416.ab24c54f.js"},{"revision":"f6f32b619639d717e78744d8f1f128e5","url":"assets/js/541d5637.783667ad.js"},{"revision":"60159376abbf9330ba12873eb26a6542","url":"assets/js/54a35160.7d4b4787.js"},{"revision":"983c739dd8ffd298199a34aa118e58d2","url":"assets/js/5550.1aa663e2.js"},{"revision":"bb4af79b01059905830d1378cdb3f380","url":"assets/js/5598.fd3ebbbe.js"},{"revision":"38c6f4d46448433452835c9dea3aa9d0","url":"assets/js/55aaead0.776ecd1f.js"},{"revision":"60db147a552dc7f1cbb2db61e08f11d8","url":"assets/js/563b5c65.a4ec0877.js"},{"revision":"68c71ab39ae190e8aaef66c0e888908f","url":"assets/js/5722.2f5583f7.js"},{"revision":"afb9336b8cfe4523937d47b96c22dc73","url":"assets/js/57ecc2b7.4ca94d36.js"},{"revision":"8b851ba6ee8eb12320cd13e7b25e6b41","url":"assets/js/58284325.ed657779.js"},{"revision":"45025925c6bc83e127af921cadfa11f7","url":"assets/js/588dd44d.a0362238.js"},{"revision":"3768588008d0d2346aac96aa942194f5","url":"assets/js/5893.b273a3a3.js"},{"revision":"9e2c39015fbc77f79b0c915a61190307","url":"assets/js/58fa4e48.96d0f196.js"},{"revision":"806a7b0ac502dcce69129f2f9b1f9309","url":"assets/js/594bb6c0.b994b805.js"},{"revision":"2087d0778f31501b33269abad43edf8d","url":"assets/js/5a5e1dd9.aab0bb8b.js"},{"revision":"b10b8f29f99b9961f149d8b270707a79","url":"assets/js/5b10224b.4c68bade.js"},{"revision":"7a146c7a0160b797cd19615279a2da26","url":"assets/js/5cdb4525.c9d6e89c.js"},{"revision":"553d9f989d1ca91f4258717075763c6e","url":"assets/js/5e6d1f8b.c390f575.js"},{"revision":"67008313e8c59a1916cd2770745cb7d4","url":"assets/js/5e95c892.18a36010.js"},{"revision":"719197a0992b8dbbec97f167ffae009c","url":"assets/js/5e9c3b6a.85940f23.js"},{"revision":"23830dd1c2cf202bcaf9bc7909c90eec","url":"assets/js/5fa838e0.8366ff7d.js"},{"revision":"83647d1528e6230204f97bee70c5e6c0","url":"assets/js/602bb363.7cd2b274.js"},{"revision":"b89a4cee8669a0f591dd18b1837d68b7","url":"assets/js/60c781d5.dba00f1d.js"},{"revision":"b432dcd69a818d01177ac73f5867547b","url":"assets/js/6147fca6.353306ff.js"},{"revision":"853565331c52119a8167b672c6c395e8","url":"assets/js/6199.b03f4008.js"},{"revision":"35edfba89860ae74b9c969160de2ccaa","url":"assets/js/6203.acd61e9b.js"},{"revision":"dbc7f0d08974454ae203dafa11387c85","url":"assets/js/622bc3c3.2136838b.js"},{"revision":"e01ced09461b432cebe7d11377748b6c","url":"assets/js/635cb825.81ad499c.js"},{"revision":"1991fdf2a5faa220c4bc8059fa3586c5","url":"assets/js/63bdb67b.59655cc9.js"},{"revision":"b9c0e851cfdb32990ff77d4390cfa7b7","url":"assets/js/6415f59a.91e9e437.js"},{"revision":"cc823199eb0bc9092246a828680d9635","url":"assets/js/6444.703c278a.js"},{"revision":"248e6134c9859eac4e20c84ad414116f","url":"assets/js/64614d1a.030a54bf.js"},{"revision":"902e3ebd52277c6cefe8ac71bc0f151c","url":"assets/js/6557cf1a.b558479f.js"},{"revision":"125f2d11c38764392f3d0d7c21c5a617","url":"assets/js/6577a0df.40d6ab1c.js"},{"revision":"6d236f11d2edbd8be8f9a309aa13f635","url":"assets/js/65bc360d.3e52671f.js"},{"revision":"a44aef869d99741b70d00040a59f9c71","url":"assets/js/6679.7ee7da78.js"},{"revision":"1436857562430c5b3fd3ce59638e4ea2","url":"assets/js/681b7af4.68be2592.js"},{"revision":"aca99d861564a8f79aa56c1cfb84a43e","url":"assets/js/6886.5ad77c41.js"},{"revision":"05dbda6f36803395541cf564efc07626","url":"assets/js/6951.cdc22862.js"},{"revision":"19565a902274072c67841821757afc39","url":"assets/js/6991.c08f63eb.js"},{"revision":"96874a51e5ab0b5752c4c13fd447efc8","url":"assets/js/69df999c.30ca6d2c.js"},{"revision":"e836b4e65818f66ab2e9f139d8c63819","url":"assets/js/6ad9afaa.b6acfc10.js"},{"revision":"057dfb7ed4fb38b03e458ca6ab0ad18b","url":"assets/js/6b5d6c58.3ae27f93.js"},{"revision":"d9bd8e6b39ce8f8cd8d0b4ea65d1eb75","url":"assets/js/6b902128.3810a70a.js"},{"revision":"5a439a12ba7b97d0e535f23396b7f0f5","url":"assets/js/6bcd55bf.261c5e39.js"},{"revision":"8df358fa763eb7d297d5ac640f517158","url":"assets/js/6cd9d647.65ada17b.js"},{"revision":"af4a9dc9d5882a941d6c71fd81eaf490","url":"assets/js/6d5efd36.12cb0023.js"},{"revision":"ecbb9c9447dfd4e25263ae60fd6cf0f0","url":"assets/js/6d630ffc.d0c8b19e.js"},{"revision":"6dbe61e1d8317f60ff7ac757da3000ec","url":"assets/js/6d6bd066.c4fc8f70.js"},{"revision":"582b449aeb4f1ae96a457386f8ef6f40","url":"assets/js/6e3d6b93.dbc02bc3.js"},{"revision":"ffc17f1db18e6a5a729ba6423a0fa7e1","url":"assets/js/6e889b7a.2c57936b.js"},{"revision":"9bf4824ce0aad8d26eabf038bad07c1b","url":"assets/js/6f2b2af5.3f43ae5a.js"},{"revision":"f361a8818fc44a3214fa56e0accbce28","url":"assets/js/6fa58fdb.ead714d5.js"},{"revision":"02024fc9f7dee88a3986af1f9902aef7","url":"assets/js/6fedb7a3.223a7c02.js"},{"revision":"5c4f13336f121d84ec1febef2646e816","url":"assets/js/70321d34.1045a40a.js"},{"revision":"25e249e7b822cbc7ed905838e7b80484","url":"assets/js/7051e035.42385646.js"},{"revision":"24462dad4a97ee49ba89ef1d0642dec2","url":"assets/js/71bd92ad.cab5b130.js"},{"revision":"d0a209fa81700bc5b685cf34b077cbaa","url":"assets/js/71c41cca.9cdb8523.js"},{"revision":"6132432f0577f9ef19c271196f50c6a3","url":"assets/js/72b3e7dc.8bd0c4b0.js"},{"revision":"1c830d148a4acb923f40643490f4910b","url":"assets/js/72fea898.267e7f1f.js"},{"revision":"56f2620bc324efdcd75eb69f2d28b172","url":"assets/js/7300.34e6497c.js"},{"revision":"ab920ca93782fb3f619480117bf8c7a4","url":"assets/js/73c38494.be3a9780.js"},{"revision":"0adf8ea4c1aa029305e2452ed6bd54fb","url":"assets/js/73f32b8b.760ed824.js"},{"revision":"2173012ce8dbb4c7387e16338829ec82","url":"assets/js/754296bb.60af4b2d.js"},{"revision":"77a38e3ba07043607aab7cacc8f36039","url":"assets/js/7621.e5f7c7ac.js"},{"revision":"85fcb8f50f7264d7f9f824f201d1589d","url":"assets/js/76a305fc.1fd1dc80.js"},{"revision":"57c498f5175040f9d7a1be07cf65874e","url":"assets/js/790b642d.7097b843.js"},{"revision":"b43f5be2b146754f6daceaadb3f09a76","url":"assets/js/79899b57.57bd0a13.js"},{"revision":"14114abeef570a47568e39eb0414b018","url":"assets/js/79ee951b.c877a56e.js"},{"revision":"70228432a3984c7787d3c34fdc84cb1d","url":"assets/js/7b35ddea.5c6740ce.js"},{"revision":"68394ba7f7aa0183ba6e22f8d5c61238","url":"assets/js/7c0411e8.0b5072f6.js"},{"revision":"937cdf3130fe1bb4a8599318055307b6","url":"assets/js/7c328fb0.d92b68bf.js"},{"revision":"305f1ce2d820c03e730bdcaef3791128","url":"assets/js/7e75dadf.97d70d48.js"},{"revision":"53fef08b278880cc8d56f0dd72ac6902","url":"assets/js/7e7a4c7b.16305972.js"},{"revision":"a00b804b376008da074bbfe34d2de8bb","url":"assets/js/80f373f2.940698d4.js"},{"revision":"87fe1e45fb9f14000c5de345af9f00a0","url":"assets/js/817191e9.cfded388.js"},{"revision":"6b87966243acd46ad9de0183989bbe79","url":"assets/js/824c452b.80b32488.js"},{"revision":"60cbfe0005944cccc63f97ece7088060","url":"assets/js/82c03827.03cd4ce3.js"},{"revision":"e495c49a617a2e10c1bd488b0bdbe2cd","url":"assets/js/83236138.589471a1.js"},{"revision":"df7b41fb3ca28fac41ef36b7dc95a65e","url":"assets/js/8336.193c3398.js"},{"revision":"ec6017d51a8583d46b5094aeedbe873d","url":"assets/js/83fa3eff.efe3e165.js"},{"revision":"03201c12a3da937ee7bd810d79ad19bc","url":"assets/js/8470.ed37ee88.js"},{"revision":"62b2f0802fe346cc5310f8cea948b07d","url":"assets/js/854b257e.91c80811.js"},{"revision":"f124605af87f6229a2a8914cb0e6c425","url":"assets/js/85ccb835.26b9eb9a.js"},{"revision":"4ebdb9d37380071128f63a2b013c9a76","url":"assets/js/86170a86.e02a4507.js"},{"revision":"dfd247851c9952f3b0f43832554d3449","url":"assets/js/8648.d9a3b348.js"},{"revision":"877400a6718749b9f771263c46b00a3e","url":"assets/js/87531641.d273221f.js"},{"revision":"60c6b63b17c3b8fac38f79f8e92fa76a","url":"assets/js/8798.4070d3ed.js"},{"revision":"13fbdba57783f52e91c99ad170afadcd","url":"assets/js/87d5db97.14ea2670.js"},{"revision":"d9d5eb8c890ab103fc07212745a34231","url":"assets/js/883b3acd.3838d322.js"},{"revision":"5808e60701c4c90486f54209bfe065ee","url":"assets/js/888a5ebe.6c5ef194.js"},{"revision":"2c23cfab885427922c535956002613b4","url":"assets/js/8921.8e17b509.js"},{"revision":"944d74540f20dae16796e82c339cded6","url":"assets/js/893c6fee.dc1e413c.js"},{"revision":"25146f16eaaa6a9c96c23241a3fcbca5","url":"assets/js/8a578643.ce427379.js"},{"revision":"8a9a5bdc1c96fbc93b526523a4b4751c","url":"assets/js/8b23f58f.1bdcc214.js"},{"revision":"b5e534b76db04f14cbf12560cb8ad98f","url":"assets/js/8bdaa531.c609cb31.js"},{"revision":"fcb000993062e14a8205f818693ff057","url":"assets/js/8ca7e4b3.cd54652e.js"},{"revision":"fb8325a470744e38789938eb68071de9","url":"assets/js/8e0be0d1.6e675ac2.js"},{"revision":"093c844f939a4d6a2c58591e09d624ab","url":"assets/js/8e6a4e74.f972a2c8.js"},{"revision":"f08a7fee5f3b3e9c4188ae967ab34cb7","url":"assets/js/9076.554bf876.js"},{"revision":"f231ab24cc505c4e02a448baa1ba0f4a","url":"assets/js/9197ae7a.a01396f4.js"},{"revision":"d0fb9baa8391ebc0c0ffe4f921cdbf3a","url":"assets/js/91e8ffa7.856c6f3e.js"},{"revision":"ac4571203c165ef430a19eb2769c7f84","url":"assets/js/9229f78d.a161128a.js"},{"revision":"c0dc5bbc3fa97d22014010014ca9e5b8","url":"assets/js/93456434.ac4394ec.js"},{"revision":"0b66056d4fce9d906fbb55db2eae8c56","url":"assets/js/93486759.f64ceefd.js"},{"revision":"f7f1110d9196a23c40c842848dfab07e","url":"assets/js/9366.bb5993a9.js"},{"revision":"29098290260b7d3e77816706da59175e","url":"assets/js/95bcd1dc.76717d5e.js"},{"revision":"64f91fe8e1f741c7d058a4d398f082d1","url":"assets/js/95d63b84.1e0880fe.js"},{"revision":"f332741e1bf0f19d06666c91b57de5e3","url":"assets/js/96f5d401.02389213.js"},{"revision":"dbb57ecc0b92e949d560ee11974fabd7","url":"assets/js/9857b334.83533442.js"},{"revision":"7191a54a60c309a6325a9d7fb6d41223","url":"assets/js/9861953a.f5690dfb.js"},{"revision":"4755d6975537f3333be99b141e5eb2bf","url":"assets/js/9941.9d085007.js"},{"revision":"65b5658489d1fe07ef562c811378ded1","url":"assets/js/9992.dce71c90.js"},{"revision":"fbb0339fd6709b6a54f6d95f3e790c2c","url":"assets/js/99f50fdc.48c5237b.js"},{"revision":"618b594f2def81eacf097b7a9e02869a","url":"assets/js/9ac34ba0.0f46f32a.js"},{"revision":"e8d686a6054fc3b3f0eabf555067d916","url":"assets/js/9ad56985.ac375d84.js"},{"revision":"02d866e2e2f023b3fe142a72eafbf0b2","url":"assets/js/9b59e572.8670733b.js"},{"revision":"9b68aa7b98354b65af167594eaaddea6","url":"assets/js/9b8d311d.252d92ad.js"},{"revision":"a4df12c781e3cc466e4c5f48ae0accb1","url":"assets/js/9c2278b2.aaf771b7.js"},{"revision":"98033d01b789e226559db1f89849f287","url":"assets/js/9cd2fc0a.50bb0224.js"},{"revision":"909951ce08c9bef8c2e44b497c20cb79","url":"assets/js/9d4488d1.85b98bef.js"},{"revision":"f34ee196814f654cbd446f7e2992e35f","url":"assets/js/9fdc340b.430bdd4c.js"},{"revision":"8cb663fe91acff26af7726273f0c0b61","url":"assets/js/9ffd9d1d.983e3344.js"},{"revision":"c99faa028bdae6115c6fcc61ec2c02a8","url":"assets/js/a0eefd42.fc794d6f.js"},{"revision":"33bfb3a288b6c273e2dd61e6473436fd","url":"assets/js/a1a3054c.c00c5917.js"},{"revision":"2972b54c3ab318948e8197e8a8e6cbb6","url":"assets/js/a21e984c.819d3c40.js"},{"revision":"7341818cb1f490ea09c5b3305d7128ed","url":"assets/js/a2ca8fe8.5d7e502d.js"},{"revision":"648cfc44bbacd065bcf678fc191b7c67","url":"assets/js/a2d5f767.10c0f258.js"},{"revision":"7d5ac28fc4f3d9b0e2221c89b742d0db","url":"assets/js/a2fb89b8.8a92519f.js"},{"revision":"d68e4103e81315bc09cb9a5843ea27ec","url":"assets/js/a305e2ac.013ea547.js"},{"revision":"7e576617b8a0e7ff1ba6dbc0a21ff094","url":"assets/js/a4c78573.47ac67c4.js"},{"revision":"0771408fee931f2891847f53db28316f","url":"assets/js/a4e7ef95.c7fb8751.js"},{"revision":"02ca78dca408ed15326301e56ed269da","url":"assets/js/a562d1c2.6d26fc04.js"},{"revision":"a5e79d7bb9d8d6b1ee1e33ff5a270ad4","url":"assets/js/a62eaa10.6e5cd70f.js"},{"revision":"8f6377df7f49667d064f553735837201","url":"assets/js/a6eaa2fe.ef44eeb8.js"},{"revision":"ae228b6ac03bb7834d82cb7ad475a127","url":"assets/js/a7456010.9be04e4d.js"},{"revision":"a5dbf467bcc47ca6df615484ab81d88c","url":"assets/js/a74a7dec.f5867d6d.js"},{"revision":"e419e3832dbc4153cf483656aca0add8","url":"assets/js/a757a55c.f0fb9cc5.js"},{"revision":"fce5d76338120e8a030fca28c0c3ea5f","url":"assets/js/a78b3ba0.b1dfbac4.js"},{"revision":"1302ab269744e7531b368c8d0c6f0524","url":"assets/js/a7bd4aaa.0538e638.js"},{"revision":"3fe24e47f645c36c42467cdf122ed9a6","url":"assets/js/a8bdbcd5.dd6cfad8.js"},{"revision":"91ac4b3416a57a85800e7f6db27343a7","url":"assets/js/a94703ab.ce583b39.js"},{"revision":"593ef83aad96cf1a8b66f11e6d20f899","url":"assets/js/a9c868b9.81e7aa76.js"},{"revision":"06bcd6d6d0b5bdf4884d096e5befb318","url":"assets/js/aa276556.a6d5594f.js"},{"revision":"c470ef51551086175501ac219b3440ba","url":"assets/js/aa81450f.e862ae7d.js"},{"revision":"9b0b59c402d93629a4f69dfb23dfbc88","url":"assets/js/aba21aa0.7e561951.js"},{"revision":"66148f895d70c59acfe843138ab72957","url":"assets/js/ac61b989.aa5a3267.js"},{"revision":"152f6bc5450528fbcf09f4f53fddc296","url":"assets/js/aca8e61d.88e3501d.js"},{"revision":"12a9d033ac825c801da067d083912145","url":"assets/js/add4bb7a.ce6e0402.js"},{"revision":"b71c4915290f66a2d81983bb663514ac","url":"assets/js/aeb124bd.86b3fc0b.js"},{"revision":"2d79c44f5b300c72b8a9ff05e9ee0518","url":"assets/js/af70a4d6.309af2ea.js"},{"revision":"65e9bbf9ebd271b1f22fe1ed3a66157d","url":"assets/js/b158dc01.e97206e5.js"},{"revision":"646c887ab6f94541677fc896cd87451c","url":"assets/js/b21946ae.6315ceab.js"},{"revision":"b50ada55bbdd705b296a1cecbf026cb4","url":"assets/js/b24d385c.a701756e.js"},{"revision":"fce52ca14a054a886ae3efc6c3ddd8bc","url":"assets/js/b496f3e3.e49245ea.js"},{"revision":"93b1790f7baa36930ea2621c71821fe8","url":"assets/js/b5210edf.e956910b.js"},{"revision":"2ba950ef6b792f168485bd51a6dc7e1d","url":"assets/js/b60da6d7.569a9447.js"},{"revision":"cab7ac1e4bc7a36dbe7b81073a9fcc97","url":"assets/js/b60de388.3e88cbc2.js"},{"revision":"0b7749705bda544d73faf3a645cca406","url":"assets/js/b6386ec9.3241cf15.js"},{"revision":"f949f8ba8440e7c9284f004999e2944a","url":"assets/js/b6438b6d.599d2076.js"},{"revision":"7b663c7e123f44bc98ec1cb27b2d0684","url":"assets/js/b7bb49c4.0714bfa8.js"},{"revision":"32e1a5992fccf901f749c640b0ffea5d","url":"assets/js/bba094ac.1d4be3a8.js"},{"revision":"59143fde3ab4fe2e1cfade0f93068606","url":"assets/js/bbd444ff.4b80aa1d.js"},{"revision":"845659d7246ed8241df43a4a07668522","url":"assets/js/bcc35f8a.58338b41.js"},{"revision":"2938b539510df2fdfa904bcba4709d0d","url":"assets/js/bd760347.78eb7290.js"},{"revision":"b926a185f12af8aca45aad2929437ba2","url":"assets/js/becf8c88.7eb4e16d.js"},{"revision":"2244974813e9682fa8f9dc282ceaabf1","url":"assets/js/bf3ddb91.fab47cb0.js"},{"revision":"2161e106c0ceef7a8e2fb8f83c80780b","url":"assets/js/bfb1f9b7.8de2f8f7.js"},{"revision":"62c86249037e047b470adce72e9b45a8","url":"assets/js/c0b93d5b.dfc5f709.js"},{"revision":"739bc4e741280174934a66909b77812f","url":"assets/js/c0dca479.87ee149c.js"},{"revision":"e9d9ac55346d985026a4f6234958d433","url":"assets/js/c10e86aa.6419895d.js"},{"revision":"5a8572bdeb55b7261b40ba2a07e9ba94","url":"assets/js/c141421f.81ac4343.js"},{"revision":"7c24f973398df4c16e27973d17956c8f","url":"assets/js/c156da02.8e94158a.js"},{"revision":"3f8b62005cc35adc6ec35afd9b20ed7e","url":"assets/js/c15a368e.ce528940.js"},{"revision":"62a8e1cfce6aedccb828cb686cec4115","url":"assets/js/c3e6ab10.da0628f1.js"},{"revision":"3dffe50e8e71d1087ac7fffa6319105a","url":"assets/js/c4dcc6dd.bee619c1.js"},{"revision":"c30fd24fe13522c2313b2d050caac935","url":"assets/js/c4e9b37f.3942c5ff.js"},{"revision":"23197e480b2fc72a41d13a73c2c8da97","url":"assets/js/c4f5d8e4.c74b2ace.js"},{"revision":"74363468dab18b94300968775659b331","url":"assets/js/c5f4348b.c9fd5287.js"},{"revision":"c8ed2199463280464bac840eefe5b91c","url":"assets/js/c72cf9c7.0e46d81c.js"},{"revision":"d197591bd5c30f75825a8c57144fffd3","url":"assets/js/c737e1a5.d3b63cfb.js"},{"revision":"1877a8b72fde88ecb242b3a5f30f8931","url":"assets/js/c78ecae9.23edccd8.js"},{"revision":"4ad7f5203f02a20ba4782e24de11a746","url":"assets/js/c8018499.98c8a9c3.js"},{"revision":"6e9e484e60c22056bb8064feee65d74e","url":"assets/js/c84a9914.056c8609.js"},{"revision":"0d9265af510c24df5f1144f7a57407a0","url":"assets/js/c8a93e67.e132cfac.js"},{"revision":"ac32f764ac79281169e0e949a35d4748","url":"assets/js/c9a1eaa2.cf219590.js"},{"revision":"d5a9aaed659790d6e1514b93b78e52b6","url":"assets/js/c9ae34fa.0dcb3ea8.js"},{"revision":"9c1f4b1a365e3d5aad7fc1fb044cb48a","url":"assets/js/ca8a1b2c.267ee4fb.js"},{"revision":"16b01e582778c10cca096ed838d11adc","url":"assets/js/cc2fcaab.8f718250.js"},{"revision":"2ccef43c93080d2d6a404fefba2769ea","url":"assets/js/ccdb3c45.63988362.js"},{"revision":"7537c7d0dd2d13a42c1a3a8a6dd9ece7","url":"assets/js/ccfc7d3c.bd12ec1c.js"},{"revision":"d3a543af8999d9da33bceeb51e74659a","url":"assets/js/ce7e7ba1.0157aae2.js"},{"revision":"1f3e7a82d619f4edd86988d005601de6","url":"assets/js/cedf0e63.8c3ac5e9.js"},{"revision":"eaa703a947957e0aa62aaef42e43d983","url":"assets/js/cfc0d51c.751a7709.js"},{"revision":"c3086686d1ee0cdeee484c17ba35dcf0","url":"assets/js/d00b9fd9.2819e6d5.js"},{"revision":"fd263d80fb5d10cc410b61869305ec94","url":"assets/js/d0ab59b0.58d3ae46.js"},{"revision":"1d649a907e9b8624db0b4e3bc61c0b18","url":"assets/js/d152d6b2.458be6b6.js"},{"revision":"ffd98e04711beedbd156e7ed64cdbeeb","url":"assets/js/d23efac3.3fe63c94.js"},{"revision":"3e6372ea38007dca8496eed98a5b2ca3","url":"assets/js/d26b0f2c.38b8442d.js"},{"revision":"a57f7dde721384ed4c184553375ad241","url":"assets/js/d2ba5076.d1ef7867.js"},{"revision":"b89e14dace617b5d8138b927575542f9","url":"assets/js/d2bda2e9.9758b618.js"},{"revision":"1b95504181b068fd33ac284bd0bcedee","url":"assets/js/d3585a2b.a96a16c9.js"},{"revision":"b02260b4a8578d938abbf5c2f7918a10","url":"assets/js/d45ccebc.dde7f329.js"},{"revision":"f10852e40342ef65d7c601df8d90c455","url":"assets/js/d47de5fd.85b6702d.js"},{"revision":"59a58845e14a630b0d03543c77694313","url":"assets/js/d494a195.e0417717.js"},{"revision":"51a19a86381aae3054516d8211d1aecf","url":"assets/js/d4e195dd.78d4c5f0.js"},{"revision":"41be37a7c96c8c0e276c1e2cc4d8ade8","url":"assets/js/d63ab801.90365a57.js"},{"revision":"fb86071cceecf26dd7569e6febce740f","url":"assets/js/d89bf822.bf72b449.js"},{"revision":"e7d1fa61451678d30997ef382e3b9e0d","url":"assets/js/d9cff955.204916c0.js"},{"revision":"3d9b1b5e2c2a20f4e2f0c25f31321043","url":"assets/js/d9fe55b2.301bb27f.js"},{"revision":"27b60f4bb423e44b86ce0dca7e6e678e","url":"assets/js/da4fe776.5e3e35e9.js"},{"revision":"a3cc327e4cafde14b2a17232e999c22e","url":"assets/js/dae64152.ace75937.js"},{"revision":"a76b07111731beff5bd87a0327a1d8f9","url":"assets/js/db6afc29.5d5c0721.js"},{"revision":"046d14ed02e898923ec637da6544f71e","url":"assets/js/dc030738.fa573c59.js"},{"revision":"db3e4aada3cf47eb2af3035681a012dd","url":"assets/js/dc109391.3faf0145.js"},{"revision":"be562b389f00364ec3b9e2a825792c9d","url":"assets/js/dd1fbe6a.69ede0ed.js"},{"revision":"7e58d59a053dc684ded4b60d896c67c6","url":"assets/js/dd3d6085.56fdbe46.js"},{"revision":"b6f404411fe861f0df10d0b0867d6bd3","url":"assets/js/df2a4a59.e256aca9.js"},{"revision":"77d5984a67b1f6ec7dc6c7c5caef621c","url":"assets/js/dffb9609.a851b352.js"},{"revision":"8400e6aaac2711f64296e820bd7195dc","url":"assets/js/e17e6af5.5e91d187.js"},{"revision":"467798e031a885a87fcc9456c7ce52a7","url":"assets/js/e1a53158.a9ab4008.js"},{"revision":"6a7a0522079bdcde7863b9192e3d22d5","url":"assets/js/e3b728f4.f61cd1a4.js"},{"revision":"ff21f5acc1b5fa0b3dc590f0e6d096f5","url":"assets/js/e3cb94e1.6c2347e9.js"},{"revision":"a44e845c375ec844d131f7d48cd8de8c","url":"assets/js/e47fd75f.7849396c.js"},{"revision":"6cf73cb67de390887aee82b549dac024","url":"assets/js/e4c96358.69c74e8e.js"},{"revision":"4bc3e15abcaa3117626f8982e221724c","url":"assets/js/e4e92f42.b7fd69a3.js"},{"revision":"c555ee5ca65744e1987d9eed0c51bf10","url":"assets/js/e5f7cd7b.1e2f8399.js"},{"revision":"5c6bf5deed3c18f6e6eda6f2e5fb28d0","url":"assets/js/e6501e5b.146f619c.js"},{"revision":"b7a163145e50e034d4d465d181fb9607","url":"assets/js/e682932b.5c92a2c7.js"},{"revision":"3546d7cd729e7afbb5c5f2863c35bd38","url":"assets/js/e69f0a50.b10d433e.js"},{"revision":"b0c4d8bcc9164c4b3e6bba00f15b3fc1","url":"assets/js/e6b53073.40d99b94.js"},{"revision":"606d2ed3302a8a8c0359ea4a08f9853a","url":"assets/js/e76d69e4.48b38cd5.js"},{"revision":"86ce58b31264bb83fe1d903b28082367","url":"assets/js/e7f145e9.65841172.js"},{"revision":"3e99dc7684224e08a0cb8a29813c83a8","url":"assets/js/e87d3b80.517a1aca.js"},{"revision":"3992b784e8f2330ec34dcba29b1f135d","url":"assets/js/e8d5b74b.a6678c40.js"},{"revision":"0a20387f46b43bcbf672645e1e6f27a3","url":"assets/js/e8dd6634.84f68942.js"},{"revision":"fccc1088049954c8f62e953f0c4fcd90","url":"assets/js/ea46410f.75587257.js"},{"revision":"f23977056c3a48eae8b10f1db7e62c97","url":"assets/js/eade58ca.b4a5590c.js"},{"revision":"76a46192e6e5bc9dbbe8cd3d0d63a674","url":"assets/js/ece243f0.7dbff19a.js"},{"revision":"fe8e514f90f1eb2597106a86eb6c9553","url":"assets/js/ed38b210.cd72fece.js"},{"revision":"28092d1759f0d68c0d5f09fd0386d917","url":"assets/js/eda49e41.7e046f7d.js"},{"revision":"955c22118e7316270b2021292203ade0","url":"assets/js/eda784af.bd8abc2c.js"},{"revision":"6b831df7a8f88b1bea0d3970d6153a54","url":"assets/js/ee84ef31.bde1847e.js"},{"revision":"c282eb425444179cfd22316e657bdca4","url":"assets/js/ef72e420.cd6c5497.js"},{"revision":"3f34eadecd8b6f33df1415637f208273","url":"assets/js/efa09b84.3abf1f4f.js"},{"revision":"e33f6bbb3c0953dd71cee41bd5754912","url":"assets/js/f1f0b9c9.f827f5ed.js"},{"revision":"2ab200456bd22f6a8d710c88b5f2dc02","url":"assets/js/f287ed2c.a89e77c1.js"},{"revision":"5536786a1945a4db97189d2d496679db","url":"assets/js/f36074be.584c26d8.js"},{"revision":"7ede921d9b4c60b428d3192756fd8fc6","url":"assets/js/f3937ce2.8db01ca3.js"},{"revision":"e4158f0e9054290bc79efdb7c3a084e5","url":"assets/js/f44068e7.99b6505e.js"},{"revision":"1d5ee116c80a1419633391fc0eea5ece","url":"assets/js/f4e5f89b.f0e17293.js"},{"revision":"5b7f5957dde2dafc6762b394bced9603","url":"assets/js/f58ceb15.3a948c9e.js"},{"revision":"3535ea348a449a11e9460348ec335261","url":"assets/js/f6420a7d.afd05d96.js"},{"revision":"e375c3dba4f5b5c0eb94ea4aa00dfa7e","url":"assets/js/f7e672b1.6a732a30.js"},{"revision":"b3cd6feb4850cbae090b3695f2a3599f","url":"assets/js/f83b6261.a778ac53.js"},{"revision":"2f141acc34fd22e0b95670abca0ac54d","url":"assets/js/f9dd20e8.25d4e4d7.js"},{"revision":"ee3ef6aa3f2ff4a0e5b8ffa2d3c121eb","url":"assets/js/fb274994.ae202020.js"},{"revision":"22dcfc319f83f172c34c0e7a1f79daab","url":"assets/js/fb57057e.7527f038.js"},{"revision":"fb71207e9b713994f39607cf765392a7","url":"assets/js/fbcb1a27.4d20890b.js"},{"revision":"cdbf15768b4f55e05425829546ef12e9","url":"assets/js/fc419e9c.30b53db6.js"},{"revision":"7b62bba3376dfdf9557e7297dd09d9dc","url":"assets/js/fcaab584.359b1b2f.js"},{"revision":"bd0fd7551cf17fd89aeec71141d6060f","url":"assets/js/fe5e75f3.c7f26ab2.js"},{"revision":"b6f3dfd5e5751d0006644f7e6ffa0be2","url":"assets/js/main.1832ef63.js"},{"revision":"f667c03c7981c97f6bcce2d05110e789","url":"assets/js/runtime~main.4da76309.js"},{"revision":"24ea50f271c7c333ae0dbd58f7948442","url":"autoload.js"},{"revision":"c055ded39a2b668364851afd144d8c1b","url":"baidu_verify_codeva-Diwo6ExDb5.html"},{"revision":"c44a35c2478101b1ca274f9c0d10d3ed","url":"basic/index.html"},{"revision":"04dadd480f99b8d51d24a9a64967fb84","url":"Bedrock/bds-core/index.html"},{"revision":"1ceb05700933cf6e1dfff58853eca2b4","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"984c5174b06656e934245db3f80150ea","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"e27bd54444b57b9b39e16020799e13dc","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"bb42bdf546a4005ce6679ad91620b11c","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"b8d1e44934ed8bf95488cb25a3e0c7e1","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"b54f70af57320fc3919b1735dd94ccb0","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"e07a2aced94af3b3ed6c99f1a1a5abad","url":"Bedrock/bds-core/process/index.html"},{"revision":"e11a237432c1a18265e380e74847a18e","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"9d2b965aad4d9717993af4af2648efc3","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"ae1b9ac01609b95eb77dca254a02c468","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"213d88046e36b11861ca1661448e74ff","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"bde641a3dde80fb9d17e415728f411b0","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"cc2c7f967f8d392e94b1c9fb8b6d11bb","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"d48b5c6ebab56570304755895a939b03","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"0083b51f1eee043eb9d4c377e50c394b","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"317d83f5688f05206ce8592d5dc5cfcb","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"aa52ee1a7d009da0390ac060efb917dd","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"955ea0d9e1f7925b00f53dbeb7a63604","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"7efd02e7ce0ffef8460e9f76754a0306","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"87688977c4564bab662947085d51674b","url":"Bedrock/bds-core/start/index.html"},{"revision":"c24a2516c17aa7bce1d8b053a404f4e8","url":"Bedrock/intro/index.html"},{"revision":"a077c1df9a5532c5f466b54e337b7a38","url":"Bedrock/nukkit-core/index.html"},{"revision":"7ed23641007f59cdbda0320ebcef920b","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"7b988de290b6256a41d942ada09f13ae","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"ee135eb51a31b832c6224583c0ccb7a6","url":"Bedrock/pnx-core/index.html"},{"revision":"beca97327788f0553feb578f916d7ccf","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"c588694eed3d81325f6ef6ae12fd0897","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"3414c2aa5a75f8ba55630d1b56ec570b","url":"Bedrock/super-basic/index.html"},{"revision":"a842d731af778d58681c787f2d0253ed","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"df3cf8d388ed9613879806e5b45b3135","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"40e7e63572d343fb6073ab4d15347515","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"65804e8bf1ccae44d62a9b7d671fc25f","url":"Bedrock/super-basic/version/index.html"},{"revision":"e61144f2b5cb91fc5845363cc778ab0c","url":"contribution/index.html"},{"revision":"6339932eb36822d4779cbf04aa30a8c8","url":"contribution/todos/index.html"},{"revision":"29df11199a5fceabdc066e242d5b4e27","url":"contribution/writing-specification/blank/index.html"},{"revision":"c05e4f0490bfb8e9e3f95c635e52d0d0","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"c5578e0a350507d8d5557917f6478c02","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"46a22a72a03e375a7517c2b6c6c5e702","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"14e7f3d7f4e5d5b20a11e76b8eb00b20","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"4a891e627c60b347ba79bf0bf710eae7","url":"contribution/writing-specification/reference/index.html"},{"revision":"caff6c6d8e6095c7a1b35121d6ac1664","url":"contribution/writing-specification/text/index.html"},{"revision":"9a0a54aad063202c0f818b6436e58726","url":"contribution/writing-specification/title/index.html"},{"revision":"5631c6ea3c8be8cdc2230fff4b75575a","url":"contribution/writing/index.html"},{"revision":"8957355acdf7f3f45989d852cfc00c2e","url":"database/backup/index.html"},{"revision":"eb065b57f0021b89fa912a3d90bc6720","url":"database/configure/index.html"},{"revision":"e32733bdf2a4a9f633e8ebad04f536b0","url":"database/index.html"},{"revision":"ebe11bcb22104e480a3e985eda193235","url":"database/install/index.html"},{"revision":"7f994ab099c34630dee40c4526de2c42","url":"database/manage/index.html"},{"revision":"397714107134f1a3fa95fb1939c2e2d8","url":"database/uninstall/index.html"},{"revision":"5326123f90705a510744bde5de8e3f5a","url":"deploy/index.html"},{"revision":"87b264d3e0ebdce16003427505b222de","url":"index.html"},{"revision":"6951b6adb705da5b79ee59ac052dbce5","url":"intro/index.html"},{"revision":"f3384c45fb5a93f333f305a5ba4f1cf9","url":"Java/Advance/all-server-code/index.html"},{"revision":"741cb625ca67c8805753ebc2566ade7a","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"43a19b63bd5ef45dbc082440a3ac7ef4","url":"Java/advance/bot/index.html"},{"revision":"788923cb38ab10759c330898bda46274","url":"Java/advance/chinese-username/index.html"},{"revision":"404168082547751aa519650bd9094d08","url":"Java/advance/command.yml/index.html"},{"revision":"0917e7f6640b122c43f44e3157dc6ad9","url":"Java/advance/database/index.html"},{"revision":"78c115cae8a37cafe70b547d5c3b8ac5","url":"Java/advance/index.html"},{"revision":"58870e78d5e7dfdafa9e740a1a15e12a","url":"Java/advance/kether/basic/index.html"},{"revision":"52df884751eda7a2788b455012d891e2","url":"Java/advance/kether/idk/index.html"},{"revision":"795b7170a9811668718e7963705a9903","url":"Java/advance/kether/if/index.html"},{"revision":"a91a48b1a816f361c6c0e59cf357aaa5","url":"Java/Advance/kether/index.html"},{"revision":"cf787fe2be0443acf0cf9a856f4ad461","url":"Java/advance/kether/math/index.html"},{"revision":"c35fb29e44d8252c58b27a107e0f6607","url":"Java/advance/kether/preparation/index.html"},{"revision":"7bdc34c5a08a7227563763c72d88acf0","url":"Java/advance/kether/variable/index.html"},{"revision":"f27df4db8d1193afa7361d39b9920354","url":"Java/advance/Linux/index.html"},{"revision":"ecf9a01d166ba95c92aa222b1b3f65a4","url":"Java/advance/loginchoices/index.html"},{"revision":"d2316d2caecbddf453972cdb70b0b75b","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"b848ab4be00227522fc2bf2efca0ba24","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"9cfb750d185b2af53896c39c308678e4","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"2690160ec1c9c3c5c42746ec89ce1e39","url":"Java/advance/slime-world/index.html"},{"revision":"0c094db4af587a25cec831d61150c15b","url":"Java/advance/YAML/extention/index.html"},{"revision":"b2528e5b4bece317983abd15b996560a","url":"Java/advance/YAML/foundation/index.html"},{"revision":"b856798555832dba28a2894b6dcf9fd8","url":"Java/anticheat/index.html"},{"revision":"7690d0e0ef18404ac1bc8d7e09b7bace","url":"Java/AntiGrief/index.html"},{"revision":"411992c3fcb9e43dddf322b40b5e88b4","url":"Java/basic/index.html"},{"revision":"d55628922dbecfb2e36582dc4cc9d687","url":"Java/build/index.html"},{"revision":"934876bc75f71ed136f10bdf145ba705","url":"Java/bungeecord/index.html"},{"revision":"f95c5f36cc8e7e278c6ebe1c82c349dd","url":"Java/category/placeholderapi/index.html"},{"revision":"c3a5127ceac984d39c0fe49d28e3433a","url":"Java/chat/index.html"},{"revision":"79bd3f8030d25f5bb9112bf234d95c75","url":"Java/command/index.html"},{"revision":"dfa416e78242655d462a77c790b7cc29","url":"Java/cross-server/index.html"},{"revision":"51749744005c1ef4b60a869f3ecda417","url":"Java/cross-server/plugin/index.html"},{"revision":"f9ff8c32c2352a31bdb7291ff4b95717","url":"Java/Essentials/index.html"},{"revision":"64e91624e67fac812e8a7ff540761e4d","url":"Java/Front-Plugin/index.html"},{"revision":"19e74c1c9db27bf6c3b7db6dd2174e13","url":"Java/game/index.html"},{"revision":"dafc350c20230764d15d7e022cfe18dc","url":"Java/Geyser/index.html"},{"revision":"bfa895e8e88f5d16d48133fe954c0866","url":"Java/geyser/introduction/index.html"},{"revision":"6703b53b29a92b8b50be687407013472","url":"Java/geyser/upgrade/index.html"},{"revision":"13e70c4890a0983703bcfe14937f282f","url":"Java/Geyser/Upgrade/index.html"},{"revision":"f5581e1c29cbd3f5fe014b423ed76a89","url":"Java/intro/index.html"},{"revision":"b16bd76c6a80b938b34d975bd79042b7","url":"Java/items/index.html"},{"revision":"c9f156059d72b133a1fe09b4ff2d4462","url":"Java/maintenance/Java/index.html"},{"revision":"6f3dabf98d47d7d8cfb5f88b1c38f364","url":"Java/ManageTool/index.html"},{"revision":"a0807c73be2eb1548369b571c9d173d6","url":"Java/more/index.html"},{"revision":"d0926e0da2f7c95f65a7b7ca6a351ef1","url":"Java/optimize/index.html"},{"revision":"f195ad16e4c11cf295751ca5bec95057","url":"Java/optimize/jvm/common/index.html"},{"revision":"e85d772cfcbcf116b77fe1c2584abca2","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"6358fc72f465d088dc5f1b7f04a783d0","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"52116eec035e375db5ad7f676463b6a9","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"b9f64fb626c45af756dd98b04c035b5f","url":"Java/optimize/jvm/index.html"},{"revision":"abb4bcb84cad9b66ffff7cdb1be2a1cd","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"83fcf8586de52dda62ec3e9ecb1d3485","url":"Java/optimize/jvm/zing/index.html"},{"revision":"3b0e5a98635475c323b5f882f530e2d0","url":"Java/OtherPlugin/index.html"},{"revision":"9227c809f4c33f7cbac9a2829d68360f","url":"Java/permission/index.html"},{"revision":"bdd71cc9ee9b004d17fe62695df4e57b","url":"Java/plugin/index.html"},{"revision":"4ced12d489b2f732609ce016f026fe56","url":"Java/PluginMagagement/index.html"},{"revision":"e371998d567df60f583c4da0777a3439","url":"Java/plugins/other/Skript/index.html"},{"revision":"9661902f379707d96bd0a0677990f905","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"ddf31ca0b5aba1a9cf0e35a5303a2ce7","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"d7460e83c82ebf159140db706335dd1e","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"e6f29a151ec49d9ae96642ce2c980a29","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"1fd1a5ffa96993eeec969a5502f1a365","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"e0038c6789a6ffa8684240ee0861df1c","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"bd9e4b798ad0908fcffc5a4fd2328d03","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"54ee7251d9b35440478da3f860fa9b82","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"883635e659e4910ee02f042ad6181ddb","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"469f8cf94caca9381a5e376e085a89d8","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"6ad02c5309bafd14720bad630f486280","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"e46ecc5c6aa124041463cb4accc31845","url":"Java/preparation/index.html"},{"revision":"7e9450a3a9e50459be1a7a18b2fd7d4f","url":"Java/preparation/text-editor/index.html"},{"revision":"1e25a374736e3644129b6abc5e0fbd57","url":"Java/preparation/websites/index.html"},{"revision":"bb49e9abd0c45dca0e8ba28bedf662c8","url":"Java/process/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"82d3ef0979ecdd3e6741f1ab0c988dde","url":"Java/process/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"97d60cc6dd399b9a5b3233c9467cd208","url":"Java/process/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"15a148bc60426c531b4c095031a2e9a8","url":"Java/process/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"1b76394fc6b812043529f8ea736e44c4","url":"Java/process/cross-server/hide-the-real-IP/index.html"},{"revision":"6e7297ff3f53a0022bed928c51ad95f6","url":"Java/process/cross-server/join-server/index.html"},{"revision":"e6f862dc9f548ebd3d127a233a1f3abd","url":"Java/process/cross-server/plugin/BC&WF/index.html"},{"revision":"b9a59846acd8db14332fa6a1c8c53cde","url":"Java/process/cross-server/plugin/velocity/index.html"},{"revision":"39673141e23975eca6a3ffb259b8ac54","url":"Java/process/cross-server/precautions/index.html"},{"revision":"4a4e1fb1df541aa491f2b0aff059b4e7","url":"Java/process/cross-server/server-core-choose/index.html"},{"revision":"093e50911813b060617cf0910c212cd5","url":"Java/process/index.html"},{"revision":"b23244fb754d5928787b613f35f93758","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"6b1ae23c26c320fd52606d4fe7317bbc","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"69aa43edfa14ac26fed5bbfae7fe3670","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"afd22ce4ca97d7cb7b0573f473e5ba82","url":"Java/process/maintenance/backup/index.html"},{"revision":"19e71d3f8c304ed015a2e2ed59d01e7c","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"e484eaeddb5dfafbd9a949cd43f35367","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"690e230eb7f7e2e54ae685ace8beaa66","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"2fe70ff9c541c136ff7f2094ad1d08bc","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"845bce623bfa061bc7bd1a3654289951","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"0c0d2df1ee89fa8e2ccacfaa041f8b41","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"8f5b926fd5e1ac626a72238df647218b","url":"Java/process/maintenance/update/index.html"},{"revision":"403324e30684cfe80a05fd761779d836","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"996f7342c15787d956f62b5e0d9cb13d","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"d8503e6e42b30350daa846b76dfd61d9","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"f56987908ec2def136d3c909db0b031f","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"796e6358ad9b36b9628324d92ceade93","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"4c63c3a27833abe3057b40e30ea1e2c9","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"d1b251753f90e1c16781cb47f3e356ab","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"8b168436a8ce92c632138d62eb7303f0","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"db75455962684ad55c5d38445fcb88a1","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"72b057cb5c4d2bcde1f7d388f6bb0347","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"83d06488a376ead9a557512dc7325d4f","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"6c24509be3b2f82656380edfc55c80fc","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"8ca94a10217868a676a8a76462556751","url":"Java/process/mobile-player/index.html"},{"revision":"d9fae85d588e471c8d07e5dcaf0d08a1","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"0ad47a9e7ec476361e52e3ab65cd1395","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"620f91557fe892d0ffd083a53eb208b0","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"eeb0079c3dfff05607b1c8894ccd1869","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"82566f17dad59b22f6888b61fcfe38f6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"d9c09b4a0788ea45612a264c57b1956d","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"1dca1cccf57cd5eec82a676ce78984cd","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"57b884b0b694664ec88c2edcb5fd6145","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"3aa696051cc4c849f872551cb4a118e1","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"3c771ff8bce320ace9278050843d0545","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"87a99db7de1833c1d026e094c667c97c","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"c25c0d9811701e5f262f653e8802d6e6","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"be0dc17c69b77fcf374d7d19966cfa33","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"f3c3c54377a40f23a26e484858956d0e","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"7ee4215f810cb73b341fc6eb47f10bea","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"5fc228657784f90508d66062c12008f6","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"63b96f9034d9cffd158a2094ab6fe891","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"db89e88599a01a9945aeb54aa3e8a9b1","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"618c4894999ac88c2f75c6db28208157","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"f136ccc463b233f5f064772aa93a9bb7","url":"Java/process/plugin/game/title/DeluxeTags/index.html"},{"revision":"2e3130cce337b3e1ab9a5fafd0b1b8c5","url":"Java/process/plugin/game/title/MiniPlayerTitle/index.html"},{"revision":"bbcd3b84bdae85014f779f7cceb21a5c","url":"Java/process/plugin/game/title/MythicPrefixes/index.html"},{"revision":"fcff4e1c5bf61350e14695aa584dff4c","url":"Java/process/plugin/game/title/PlayerTitle/index.html"},{"revision":"7f132870759dea9929300ee2adae1d46","url":"Java/process/plugin/game/title/UserPrefix/index.html"},{"revision":"3ca96d5b83941987355bdfcbfd233f34","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"b2cc73db669f70db8f94d7b0a5f7d41d","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"71db40329084162a4854c651b59a27b4","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"7e714a71e397a5947dfe661a5233a3f8","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"cc8cf6f77ae985591b0fd272819c1257","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"1b10354e767b65d10cf7fc0e6352d6fe","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"0f4c146004339aeed907806bf579a71a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"af45975f3eebc1f0a10bccaadc979eb3","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"e7776bd4899a539f0a329b5ab50f9bc4","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"f23db2be2e2df4a0f9b8870c687f980b","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"7a28cb3f399e1c0b2d299fd656f85eba","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"69000b704758e32d01aa970f0d5a9fc1","url":"Java/process/plugin/ManageTool/BasicPlugins/SunLight/index.html"},{"revision":"7bf024caab91f2137555aeac8bf03ee5","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"73044d1fa970869c37ef6babb17af1df","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"61a7ab04102ae6abbf18d5cc5da1b497","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"e25f6fe27f24a784f67b7a75dda42496","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"3b94c2e0c383b4b55813cfcb61bd1939","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"a53132e07a969fa92a0c20e017ca71b4","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"4ab4b8090f0f31c4d8b467a2b6921e87","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"c6e46e61dfc4db73f44e3d9a6d2ccdfb","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"6e23cb52c637e624ff5591bed8155576","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"c349a9f97c5837143995ac52bc57cbac","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"39c5793c414ef4f4deed02fa75e5bdde","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"d12b081366fd5bbaf3a74d3350ee7f48","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"8d608cd1e92cff10a7ed8a7b1a5459d1","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"3e4d00d18c60b9b7600ab1abc8eedd83","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"98cbc37b1923f76a5c700080fdcab752","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"64caba68b703de7a14d245ef89a6f455","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"d81f83d57628f493332e5986fafa0cad","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"a0594edea6253c73443555f6149cb402","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"8e71aa2709b336e2080164018463d48f","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"33de9f15591dcae7eb11ba87f8b7a34d","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"80b5d8ae18e81ebe068d4455222f7072","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"63f863caacf94a4b90f66579b9957847","url":"Java/process/plugin/ManageTool/task/BeautyQuests/index.html"},{"revision":"33cb18bee58398113ab8cc050b95a373","url":"Java/process/plugin/ManageTool/task/BetonQuest/index.html"},{"revision":"9197f5164e299b6bd49f030b70ae97b2","url":"Java/process/plugin/ManageTool/task/Chemdah/index.html"},{"revision":"ae9c0def7545eea248aa31316049c1f8","url":"Java/process/plugin/ManageTool/task/MangoQuest/index.html"},{"revision":"3862471c0d72c01251b2ec643ed3714f","url":"Java/process/plugin/ManageTool/task/PlayerTask/index.html"},{"revision":"c9f4607843a48b57073ae511af8f3252","url":"Java/process/plugin/ManageTool/task/QuestCreator/index.html"},{"revision":"df2ab12b376b1c1181831d1058a30bc6","url":"Java/process/plugin/ManageTool/task/Quests/index.html"},{"revision":"39337f4e87aa40702a97466601c50386","url":"Java/process/plugin/more/color-message/index.html"},{"revision":"e1a30732a33948882234c81ceacc9aee","url":"Java/process/plugin/more/faq/index.html"},{"revision":"b867f745034608ca4985d01c491e4ba0","url":"Java/process/plugin/more/plugin-abbreviation/index.html"},{"revision":"4e8db9e943642a186882da8c1bc33af2","url":"Java/process/plugin/more/plugin-backdoor/index.html"},{"revision":"e0e00a139ef84db29714eda45b64b009","url":"Java/process/plugin/more/plugin-build/index.html"},{"revision":"0b1069c994ee99ffbd62e23b2428602b","url":"Java/process/plugin/more/plugin-config/index.html"},{"revision":"1d532482cccfcc8c3669d9a35976807b","url":"Java/process/plugin/more/plugin-download/index.html"},{"revision":"5209ac75fba0108465907bcbb3cbf30a","url":"Java/process/plugin/more/plugin-signature-file/index.html"},{"revision":"f172928524ef598007f8627d17f1110d","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"6df83f0e8bda0d4421f4b7ee39ba0a66","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"c59b126eddd077a78aad2b8fa430683f","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"162e0d1cfaef6322c68c8c3c89b2fb6b","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"4e6c43ab63557652b1a3fcfa5ed6e74c","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"080acb4ed3a110b9d569d3ee82f51295","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"696e75bad415e47fd0638b313089acb6","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"95f1443d8004936c8ff798587062ff4e","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"3d6dc3ee0027ffcc16eb9375b2bd9f39","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"48180478084de5cc30625259bf2b9325","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"4f470de823c5205733042499c1355075","url":"Java/process/plugin/other/money/index.html"},{"revision":"cd741b66f5f0f70210f81ff6770e2c58","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"7f124856672b0233dc858f03e9f67a4b","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"a33300cff2cdf362dc59f07ac5adcd01","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"628650d4c65b85eafb46d8aab176adbf","url":"Java/process/plugin/other/npc/Citizens/index.html"},{"revision":"2bdb9da99231d35f74e5d6b81e396921","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"197b4e0bb72120d7eaaf2eef30f3f63b","url":"Java/process/plugin/other/QuickShop/index.html"},{"revision":"09008999e08427957c4ccd6367bb936f","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"76c1804de93c9a30b0f252c9ffa002dd","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"9a7aece7e8222450f0b6fc8d08baa9af","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"2f9575f91a9a6661634a75ce1badee91","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"fb776ea25e8a4cac7ac06db98fd70e40","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"28eb68311fe33f16edac601546aee55e","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"b8add2cebf379cd777ab25c19508a0b6","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"fbd272dd6cb4ddc5aece09fae570a8b3","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"9e2d9b5ef19fa4c31bf4279d3cf9ac79","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"b2ff2cab41f6332d27d61e749229dc02","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"9d4c1e4c7163a0e42d3c026cf5598281","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"ebebc3c89c0f20a35fecc6e5310cab71","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"f44fdc7e2e837369b58db631b641f8c4","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"b9119dae2df1596fbd201569baccabcf","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"435cfe6bd70805efd4700bfa36ffddbb","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHub/index.html"},{"revision":"8036c3e822add97d3f1b087bacab5851","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHubReloaded/index.html"},{"revision":"15cddc087d841bffeab4ea55afd756b2","url":"Java/process/plugin/WorldManagement/lobby/index.html"},{"revision":"ab96d5bdf61274cb5eda385a908525e4","url":"Java/process/plugin/WorldManagement/lobby/SuperLobbyDeluxe/index.html"},{"revision":"c83380d895925486e39ef315e8d59f1c","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"9b7906d806ed3ba0495e60518d85a79e","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"e3f0d324f16cf957c1b1bd3f0d622eaf","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"a99c9eed5914a827e527280d6f7423be","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"cad88e0c3277f9f0231d50ad2f6dfff4","url":"Java/ResourcePackManagement/index.html"},{"revision":"0c0f61ab8b500b305b7a530f15ffacac","url":"Java/server-core-choose/index.html"},{"revision":"d98d013c00482970875f0f3483f2d8b8","url":"Java/services/index.html"},{"revision":"0bd20e784cff76c77ffffa98fbd12491","url":"Java/Slimefun/index.html"},{"revision":"250c48e8bbc06fff4317b22fe88d40a5","url":"Java/start/ask-for-help/index.html"},{"revision":"88689b7972b314ef835741889a1bdf3f","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"6dc48a53d9a77852a78f9b449e61fb89","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"a108980a1cf970e349ed39e016ac0a48","url":"Java/start/basic/server-management-command/index.html"},{"revision":"ce692c914d641b7fb9f2e85e2e2bf16c","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"9b6978b6b8d001ba9b3b3eab5fc4721f","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"858ae8eee5dab08528449dbd3b60ac10","url":"Java/start/basic/what-is-log/index.html"},{"revision":"d093efe5d60e91024bc310505e5d44c5","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"48671531005379d78836bcd2df409a6c","url":"Java/start/basic/what-is-namespace/index.html"},{"revision":"e10b4b3e1867c0ce23d6957ef6a1b77a","url":"Java/start/basic/what-is-nbt/index.html"},{"revision":"589a53b9a93208c5cc924d0cf050058a","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"b32688dda4241da9c5e793464fc9c926","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"27307f1f9151ff39540ff272faa66c6e","url":"Java/start/basic/what-is-server/index.html"},{"revision":"e3f8e1bc474f39012e8f17ab250dabc2","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"f60e8d35d6ec25d13ad91de07354a1db","url":"Java/start/basic/what-is-world/index.html"},{"revision":"808633c678113853f786c22958c45ccf","url":"Java/start/config-server/index.html"},{"revision":"5f61b9c8234ae2d18c12dc4f392b9718","url":"Java/start/connect-to-server/index.html"},{"revision":"56fab59bde8ad192ce07c7f881c8a900","url":"Java/start/deploy/index.html"},{"revision":"4d739e16bc3053bd28ae434c8d1564d5","url":"Java/start/index.html"},{"revision":"7c4aa2247a9968b1ce4058f1cc1c07ff","url":"Java/start/install-server/index.html"},{"revision":"f48acf2678756e878372d9d1c83a43cd","url":"Java/start/launch-server/index.html"},{"revision":"13517c8cd6ff1332f2a188245677132b","url":"Java/start/server-core-choose/folia/another/index.html"},{"revision":"f199951220dfa61f713facbb17b92a46","url":"Java/start/server-core-choose/folia/folia/index.html"},{"revision":"ae4124096b902f7d47627b32edf11ea7","url":"Java/start/server-core-choose/folia/luminol/index.html"},{"revision":"aa27deab1277d786677ea5bb90ea17d9","url":"Java/start/server-core-choose/folia/multipaper/index.html"},{"revision":"8fa479785cf8a6e8a5ca347dbe257f76","url":"Java/start/server-core-choose/hybrid/index.html"},{"revision":"08c4b8a147bbabea2868d9318aa2f28b","url":"Java/start/server-core-choose/mod/index.html"},{"revision":"f07040e98cf475c8390a14ab51fa9e30","url":"Java/start/server-core-choose/plugin/index.html"},{"revision":"f03faf15381874a17fdab5259f1d0f2c","url":"Java/Sundry/YAML/index.html"},{"revision":"3ec92683572a73e5b888cb347e14d352","url":"Java/task/index.html"},{"revision":"67489112b93b85871aeb348ac7c2c44e","url":"Java/title/index.html"},{"revision":"107fa83aef55c3940d04bdeb01cfa52d","url":"Java/velocity/index.html"},{"revision":"ef9ffbef05b184301646074f24c9794f","url":"love/index.html"},{"revision":"eaf91007234e15ec4b1c701af643f900","url":"maintenance/index.html"},{"revision":"d1df9f38c990474087f32a044ff80ee3","url":"manifest.json"},{"revision":"ee4b44f1035e8569bef66501a8030a19","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"928b7a3fa89af488388ed66ea918d08b","url":"preparation/dumb-script-using/index.html"},{"revision":"12ae5459a6c30e08ded4dff3c8d4d66b","url":"preparation/index.html"},{"revision":"0ce44c0b5282c64c6ae0335556922935","url":"preparation/text-editor/index.html"},{"revision":"5adcce0261bdce6b0116a5d22578ffd8","url":"process/create-art-assets/index.html"},{"revision":"67f8dd25ee74e514c46414664cc9567c","url":"process/dashboard/index.html"},{"revision":"9d47e7649b29c939fa8e03d546c1a1a0","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"40b3faed6165a0a547f59135b992dac9","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"c3049fd3101edbda8c7c9a00ca80b19a","url":"process/deploy/intranet-penetration/index.html"},{"revision":"7bd6f5e457ff7c8c7d264bf5aa4543d0","url":"process/deploy/optional-mode/index.html"},{"revision":"9579106c55892434df72ac112f6d5e0b","url":"process/deploy/purchase-server/index.html"},{"revision":"c4ad78fc5b90fba823f1ca091b2e1c04","url":"process/index.html"},{"revision":"568298cdc1c70ab6461eb4192463e0a5","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"9af975e92a2593fb4e8ab63963fbf587","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"1ef37ef42b1aa4f4cc6c93a7640642e5","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"281668d26f4e8f57cfcd5e886237e7f5","url":"reading-guide/index.html"},{"revision":"f12f49fa6ff04cead8928c40e0aba3b6","url":"search/index.html"},{"revision":"4c9b2567b21c47a22c065b495ca5976d","url":"services/index.html"},{"revision":"6646ab52b1f4915f5707cb40724affb7","url":"start/ask-for-help/index.html"},{"revision":"df06bf26885099dbbd7e7a06dfcc811c","url":"start/basic/what-is-caton/index.html"},{"revision":"7fd38e30c667f55435bdcebbc10db760","url":"start/basic/what-is-log/index.html"},{"revision":"db33afdbd8ee60bc257d1d39e1a413e6","url":"start/basic/what-is-messy-code/index.html"},{"revision":"32bee5f39b494d7ae11e6905b4c2b579","url":"start/basic/what-is-permission/index.html"},{"revision":"f6f039a6b59c4b1bc47c5ab27fbb2d58","url":"start/basic/what-is-plugin/index.html"},{"revision":"947cce645f380332feab0a47ce9fb882","url":"start/basic/what-is-server/index.html"},{"revision":"8ac4deaf34b28edc5fb7da4a1941b3b8","url":"start/basic/what-is-startup-script/index.html"},{"revision":"2ff48b4a2b67f40c1c2c9d7d8d444136","url":"start/index.html"},{"revision":"c0ff1e54f582bd67010a14a065352ca9","url":"Sundry/Advance/Linux/index.html"},{"revision":"7fcd3002ce115085473e265e25e5a05f","url":"Sundry/Advance/management/index.html"},{"revision":"8d79b7033a98038ef7c0b25426abc873","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"2bdad056fc053fe2fc42dcf8dc99cf67","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"6aa5d02479397d88a36b2ba0c8a90ba3","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"f925aa8c0a945148b71ea894cb189abe","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"0808c11e0db557689a1446ea6e386dc5","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"8b75539d1bb249004c399ebeace5660a","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"308f08db496fed68d0e05f4889f01a2c","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"85b06c6af998cadfa4aa270202e67d8f","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"96b74bde823d0a40732d3c7275170cdc","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"dc10a3ddac5a6e14303150149198b542","url":"assets/images/1-63c4a3ec20199e11ca19b2f9fd2a682f.png"},{"revision":"96c124e98ac524d49aec28a72d1e6889","url":"assets/images/1-731f45984c8b96902c85270b8c81ec35.png"},{"revision":"08b33fc26327da6e979ba164ea217fef","url":"assets/images/1-82f0010c14c72c5d94a32dc8fb2c504c.png"},{"revision":"2038d739d5d2942ef060c4c9b75ec9a2","url":"assets/images/1-a9f8da27e5049d58f6f741d0f12ea551.png"},{"revision":"8c7b32c86f8207eb4938e9d5649fd7ec","url":"assets/images/1-aad5ad5f1398c48d29a32a072bdad4ef.png"},{"revision":"ccca570d7ac66120837adc97c57a4c1a","url":"assets/images/1-c3bd87874195895c6be5c2ea870244d0.png"},{"revision":"24260dd5c1f60452b4ac63ebc7a6a285","url":"assets/images/1-cd6859b2cc9c315d0060fc66db710558.png"},{"revision":"1a00b0f8db51b658cbdc2535e87d85de","url":"assets/images/1-d4a8cc278e6f1ce35508601644b6f2be.png"},{"revision":"371ad4a478896137848d6f808c675ec0","url":"assets/images/1-e68001070d89747eb2792353d7674803.png"},{"revision":"3bb5ccb0daad2aece6687133150dca96","url":"assets/images/10-58d0447450e0033aff233f70b56969e0.png"},{"revision":"e0a1562132100f5a89ac07f5b9958852","url":"assets/images/11-2a5f3cc6447c99cb7ae9b02b466bc418.png"},{"revision":"6baa6d0058a927a1352928b8655d29aa","url":"assets/images/114514-1e62aac2f66b45ceb53cc2fac060a541.png"},{"revision":"843c8deefe2ee62b05cddda23645fa75","url":"assets/images/12-ebcb424357a387dee3e7a6246b368966.png"},{"revision":"18e11b38b411d39f9897e78c2751706d","url":"assets/images/13-58ef837abfe450269fe5e47f439a1daf.png"},{"revision":"60e9076514713df5fc325cace9be0972","url":"assets/images/14-f50c97314dbdd481a7afa7108f9a01c3.png"},{"revision":"8afad3e30298f6ee2c44ea6b077771a6","url":"assets/images/15-9168d62fdaa0897e3b20355bd3ac5484.png"},{"revision":"c8906eb098d678e9c238ef60830e3961","url":"assets/images/16-9fd1a097e27350717ebc802e3cbb7d6b.png"},{"revision":"3859a843d71317bacfab4ef00c5005da","url":"assets/images/17-adc869f92e3d754411b20c3bb418786c.png"},{"revision":"3db99355f4beb05a03375d41217ff9cf","url":"assets/images/18-22737ea9026c7132cb433cc7b8dafc96.png"},{"revision":"7fbde148ad63ad1094a97afc11cae232","url":"assets/images/19-03b6b776a93e85562d8de889b7711c0d.png"},{"revision":"5ee1dc9ffdd7515a18d593d308ff6edb","url":"assets/images/2-1acef7da34adea86f13cbec0472b3562.png"},{"revision":"4f547d6af1cafa71d4ecf482b46a00ca","url":"assets/images/2-51664a177bbbf2a515d9704289dcea9e.png"},{"revision":"8a3ae42717debcd6bac0c88134777186","url":"assets/images/2-556589bc73279f249458dbbbf7a052f2.png"},{"revision":"f7b7d96b7c074dc8fd7f356b21edb28d","url":"assets/images/2-55c73126d5d73e5fc0c897e359acd749.png"},{"revision":"7d1c2028f06b3edca532324db880ffa4","url":"assets/images/2-9c0f6f91dd65af014d51552ece697322.png"},{"revision":"bcd0f6c5de54a1befcc0042f05db4ee0","url":"assets/images/2-ce811015b8ce998492f1c4ed5cbcd428.png"},{"revision":"b5d75c6d706455fc2c9d8d69e237f07e","url":"assets/images/2-d12962d444e490509e3c8ccdde97ffe9.png"},{"revision":"5e2e7505b6ddea2bbfbf19964b38824d","url":"assets/images/2-df20a5e9aa3b65320c6f70000b32b260.png"},{"revision":"44d8c03c57fb92bd4ae07849b6d95907","url":"assets/images/2-e95fca36b87966d5033150aa4b7f0028.png"},{"revision":"3434ac8ae15e9cfce03418b5d790ed44","url":"assets/images/20-563f0bf4bfa9279537b59cfd43d1fee6.png"},{"revision":"3dc2005cc9fc27ba3f49774d0231e485","url":"assets/images/21-d088637eb2dac73e6e85ef7c4520cc83.png"},{"revision":"53cb6fad2c56bc7e380f4dacb6da0b1c","url":"assets/images/22-42f6cc05337327eaa1f1191503122d82.png"},{"revision":"706da148b7157b1cad2c49465d4a81cc","url":"assets/images/23-0e2a01d94460d264c762b6ca6042203f.png"},{"revision":"f8d5c66e5e6f0353dd613ee8a33dcc22","url":"assets/images/24-ce129e614f6267791eef423d18d9b6b9.png"},{"revision":"a550a5c8cbe32d257d4308f407e81614","url":"assets/images/25-9b5c9bbd61082314a6c537fc480c0b6b.png"},{"revision":"a094343d7b92fbc891764fc40e4f4210","url":"assets/images/26-642f7846d0f720ebe452d6100b96c62f.png"},{"revision":"0558f957777dfa9fc6c7dc4cf02fddb1","url":"assets/images/28-4dab12401b4028e9f9b3824ec33210b9.png"},{"revision":"e6f93fb3e4bc19f24eede3fd1107ea5b","url":"assets/images/3-1db9a2316cba4718eab2a52911330ee5.png"},{"revision":"8ef6661f35d0c523ca3a7a6021d175aa","url":"assets/images/3-66f9827f9173f1489b47dce22df687ce.png"},{"revision":"da82fc2e94d198cc9f6bf36a59d54da5","url":"assets/images/3-71ded5525c6fa68a07c8c2d37daef753.png"},{"revision":"a822a2d6db62a21e7a19521023052c6e","url":"assets/images/3-8bf0c51795432e5912a61e6eb3680cb2.png"},{"revision":"ec46cac3a3aff08215cf620bddce94ce","url":"assets/images/3-9995127cdc5a82918c881f970b13c562.png"},{"revision":"59fe242c5f9d8b1217d7bee8a948e548","url":"assets/images/3-9b1937619f453c539263557fee89efbd.png"},{"revision":"f6c62d2d3f3a8a78aa8651797807e127","url":"assets/images/3-fb220c0d99514810193107059939a377.png"},{"revision":"2a54646c4d2a6473f78bc887534c1f0d","url":"assets/images/31-932349ed508962ccd6c31ee82354f564.png"},{"revision":"ca96dcd5b0ab7e868f58de84355f194a","url":"assets/images/32-084b2ddc6f2f990004556e5b12d99817.png"},{"revision":"fe45b36e3b0f52ada1ec79074e747aab","url":"assets/images/33-d23918939eb19e7974ae9cdbce1027b5.png"},{"revision":"1fec9f8134e5a9d396d06e16e4d3c1c1","url":"assets/images/34-a3c3c3c133da75b280f24f85abc4f320.png"},{"revision":"2a68dd3ffd08062f7729f73f971b1500","url":"assets/images/35-071df367286bc1e809ba78739976f6cf.png"},{"revision":"d4482b4c3b67bee34a541ab0e23c1a10","url":"assets/images/36-6ff139a8048e566c1ab57d0fc38d32c6.png"},{"revision":"dc778be7c5e1891db629896d3693645c","url":"assets/images/38-b29821ddd2e43ca8299f1dd8c710210d.png"},{"revision":"626bd563c935c7efc272cbce3d37f5be","url":"assets/images/39-baa030bc82af91717759ca2719bf90d9.png"},{"revision":"d85a3d62627b3af1c3c03dfea3ef64ba","url":"assets/images/4-0c6b147ef7733713ebc97beaddc1c626.png"},{"revision":"d2c1eb0eaef1183a44d165b4d42e32dc","url":"assets/images/4-8a72b836d22ba18aa9389c39ba6c51c7.png"},{"revision":"b656502de4ec7f7129911a43d0169441","url":"assets/images/4-f1fd7c802a1070f8cd7574dfcb79a862.png"},{"revision":"f8743601775edd0d671a9452a328e481","url":"assets/images/4-fba804575ca6d381be9f38ea98c30139.png"},{"revision":"a9cf568e306ace85e270669d441de239","url":"assets/images/40-3b37a921c960631df874b2ce1a953662.png"},{"revision":"7bb46016779347ac29c53873f0051869","url":"assets/images/41-fdecbfa4493a777357fbb7fbb8c01ccf.png"},{"revision":"1c887d7e9a183958c868ccbb5e582640","url":"assets/images/5-41222974cba37e06e8da7989b0a14e6d.png"},{"revision":"eb277c07e539ea66f67614761d1b2970","url":"assets/images/5-d3864713009211306577087551909079.png"},{"revision":"a5b492159aadb547b17a7ff179016ab3","url":"assets/images/6-6ec3b7c0355b16ca02d14946d2a9e443.png"},{"revision":"89e87fe0a7412f27456018bdd95c2ff8","url":"assets/images/6-97c7203d853ded602085b4525f267c62.png"},{"revision":"096b74231b81bc8d18a94a076d096e8c","url":"assets/images/6-ba443fb5d2514b6cf36161896ed90df6.png"},{"revision":"1fc0f32d51d17de697e95474c3f453fc","url":"assets/images/7-2f74b6a8e030205a10793ae8fe230f6f.png"},{"revision":"9a61f30d7090f33c731e7c1e064093d4","url":"assets/images/7-583d0fa0eb03d348efb01ad6483b0540.png"},{"revision":"9ca6c5d717ca6758d28097ada0bdf687","url":"assets/images/7-fdf7daf8e71fe0dabd29883e80d5920f.png"},{"revision":"22dcaaa0e33e13c42c994fb15b2f475f","url":"assets/images/8-506a0e50715a2f984bd4bbcccc2ed496.png"},{"revision":"05525700de6f31dad6a505c0bc44e3e0","url":"assets/images/8-7362f0389744b19cb7afedf06dba78c2.png"},{"revision":"f770b26c6d92169ddd0425422e106213","url":"assets/images/8-cd31db3cd6d8eb8677727b6051f1d179.png"},{"revision":"935fd7a3e5789147f5499609608fa0cc","url":"assets/images/9-b01aa2c198ce4f9f9c5f78ea398c0088.png"},{"revision":"a0fdbe75658531611e5321a5667f2f24","url":"assets/images/add-fa823580ac441faa72470b75bac5ad3f.png"},{"revision":"7e530e321e40a157435b93858f178853","url":"assets/images/add-new-5c80d779a7b257c4e4520dead7f6c5cb.png"},{"revision":"1e571ba2dc373ae862236bdc73470ddb","url":"assets/images/add-web-db168ad7f05902ffac1260beba0c09ad.png"},{"revision":"6d958735ee195bc9e135fcec0715248f","url":"assets/images/Adyeshach-1-94a06e5e0a5a17584b564c85d25351b8.png"},{"revision":"cda571fe1e0e13743c8ad0f62a6e08c3","url":"assets/images/antixray-mode1-1-c745b72e2ef17a6b92748483fc3d86b8.png"},{"revision":"3e646e8705a0e98d69c207b97c7f17ca","url":"assets/images/antixray-nerher-mode1-d606eadfb2b2b441fac8c0225e6a244f.png"},{"revision":"d1cfe9adf5bc3efedff51d3b753884ca","url":"assets/images/api-8c0008a3d21fcf1c11d808210b463dee.png"},{"revision":"fe3ed43e00bda741573c70583ae2f440","url":"assets/images/baotadianj-966228553cc144002a83102397088650.png"},{"revision":"e751e6255e7050ecb3c6e36fa4b65366","url":"assets/images/bedrock-core-running-83afbbe75cda6866b57aefe4fb6b3957.png"},{"revision":"7ebaf9936f9023d02c27896c74a38c53","url":"assets/images/checkitem-ef98b299d527696f72526786248802a7.png"},{"revision":"d1e98d86cb8a790994abc83e73cadd43","url":"assets/images/choose-second-4d954d983d121381b12f2231865f33bb.png"},{"revision":"f0a5aa8b4b14dc0dabec24961b5c79d0","url":"assets/images/CIMM1-1a61f996e629c877ed443d26c9518569.jpg"},{"revision":"a169a3585eef7aba18724bb08bdb1afe","url":"assets/images/CIMM3-9a331b250ad1dc7305e5633020e235fb.jpg"},{"revision":"e25669c599db681391ec7f646906a836","url":"assets/images/CIMM4-2c564f2c7b5e7f399eae610730b16c73.jpg"},{"revision":"9b02f6dbc0d64696b0f2384d650f1c63","url":"assets/images/close-yellow-cloud-62884a47bbee6215fc22fcc81eac93d4.png"},{"revision":"cc0b8b6c262a6131527086a63b2a1099","url":"assets/images/cname-313f4eea05b344d3890d5f764b1fbdde.png"},{"revision":"3a083f9794197b40a2e39606e1e926a1","url":"assets/images/command-4-9e783c88970d5d2f7366091b6151fdf2.png"},{"revision":"bd308796e5496b1bf47e5775a3feefa3","url":"assets/images/command-40654439c664c458d052cca6df33df7c.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"43acd28f6f72cadfc41a0bdba63d21d0","url":"assets/images/DecentHolograms_1-ff5d6633df691781fad5a8ec3cfeff7d.png"},{"revision":"d79baf505fa092f9aaa92e485f833569","url":"assets/images/DecentHolograms_2-5a6d611b4af1493571a55349f577a13b.png"},{"revision":"e9232d9b4c15f59134e0a788d0cbb970","url":"assets/images/DecentHolograms_3-3f42239088ce622240238ba5556617df.png"},{"revision":"d356d624d9533047564b4bff136dcfd3","url":"assets/images/DecentHolograms_4-e818015ee3ab0af58af718ab2ca0a14d.png"},{"revision":"9d8e4a77fdc8b20b087d118883d5ff5c","url":"assets/images/DecentHolograms_5-0caad81e8f0a7e09db7e2c34b8e8dc0d.png"},{"revision":"25d74389ccab08aa56134a1128a8211b","url":"assets/images/DecentHolograms_6-90760721f5c802e1898d96e738b3cada.png"},{"revision":"a3b2b58b529185baa3f8b367be02fa54","url":"assets/images/dian-new-3d1d1049b492a40e5824de164d9d84d5.png"},{"revision":"8258db8df4c6d34fbe22f47bc0924247","url":"assets/images/dianji-1a0305571907c2a31a6448848035f561.png"},{"revision":"3078d1ef8f949b23f981a85f6d681f4b","url":"assets/images/dom-0fc5b2c981f39e6140f33b6a1a5a8019.png"},{"revision":"c58709027cc8c54fc8e770d19b57bbd3","url":"assets/images/Dominion-08-aa2dfb5527f036472c2a4a8b0f44f743.png"},{"revision":"0bd6dd570e38c6e658ad739037b0c61c","url":"assets/images/editor-6396d8de461a51c8fca947a207749fa1.png"},{"revision":"6aa676852ab2205d1a37a965967c25df","url":"assets/images/getinfo_1-e7c2e9072e0ab5ab73991d7d0810f74f.png"},{"revision":"92d78187bca92dbde0a99d4bb1cb4fa2","url":"assets/images/getinfo_2-7b3436f4c81485c65868c2567bc64355.png"},{"revision":"26f745f1d1d78de42362a1cd4d3f0677","url":"assets/images/Geyser4-65af38ba06e3c8b2197460e45b073778.png"},{"revision":"77184522ffe184210ee5e1cf08677f66","url":"assets/images/Geyser5-5767782dfa709a3b6bbf7207bb92c245.png"},{"revision":"8428506ecb384598104aad818d5e13da","url":"assets/images/HbuilderX展示-4c0eb9762c8df510dd1fdead73592485.png"},{"revision":"9fa252a83f65035d89ecff73cebbf83e","url":"assets/images/hd已经归档-32249dee366a00899b649d8adbb565a3.png"},{"revision":"fbaaa116cfda74345ec14fd6929b3906","url":"assets/images/holo-dc42590f8c9261569753dd97e1bb502f.png"},{"revision":"e610a92efce164a9dfd7ea65c346c72b","url":"assets/images/if_2-90c7db4f40a59b98effa79e8e636dd7c.png"},{"revision":"bca5ccf5384e8a7c3c7aebb9ae5af86f","url":"assets/images/if_3-205c9cef9690cd3f9426820f1122c6b1.png"},{"revision":"b15662c786e3440388e26c80ee0024d7","url":"assets/images/index-9d9386098791038e0bc3bcb7a4d60e5a.png"},{"revision":"e19478245ccad11ce332d2d756364f10","url":"assets/images/install-961b5ff3d59f606626482ae1aaeca596.png"},{"revision":"c97f4ea4fba6ffdd4d8345eb70341761","url":"assets/images/jieyazip-aabb717cbd34ebf3ed650fd66803a5d3.png"},{"revision":"1f74953845fb5ab78bf13c1e1a570b62","url":"assets/images/kit_1-c42f5469a7f8ac450f961fe5c7e4afb4.png"},{"revision":"786cea26ffe399387c8fac7240496870","url":"assets/images/kit_3-6091a3a5dc48ac4cf5589c748467e21e.png"},{"revision":"f5025dfbbe5fe1c00444f43de95ca59c","url":"assets/images/kit_4-64320f25f1a7ea01c78a42e78a7eae7b.png"},{"revision":"3e3e255dddf6fe9eb1b85a499b41f99c","url":"assets/images/levilamina-is-coming-b99afb6c12b22333b2a4d8220c10ac2e.png"},{"revision":"8ffe072b21d7eb9d859b4b5a86312673","url":"assets/images/levilamina-will-archived-b38aceb46a17e226c0d0298373a580e6.png"},{"revision":"0861a904462463c6b852a55bc501c522","url":"assets/images/macOS_terminal-3e17a4826476c7e694c98e88703bea66.png"},{"revision":"d423771f8bba28959ab8c2c385a259fb","url":"assets/images/mcsm-f20b3e7b3fbf022070433dcccc319d1f.png"},{"revision":"dcaf899574d7ac03db6e616e9098e4e5","url":"assets/images/memory_1-ec2a05c0e91321febb25e4549a41189f.png"},{"revision":"a2e2226081589f682be3666837f037dd","url":"assets/images/memory_3-5611ba35e80158eee2b7c86753fe39f9.png"},{"revision":"e399ac82230ef424f1567cb535457105","url":"assets/images/memory_5-8cb5f197ece911104373f98f118a9775.png"},{"revision":"53f963020496218631b6bff8b120b29b","url":"assets/images/memory_6-053f3aee6576c77c248c4f04fb048325.png"},{"revision":"7212760a7b3a57214fff89f43adada0e","url":"assets/images/memory_7-5e6c73d227dfd1b813ca04e6c8c7f7e1.png"},{"revision":"a3c5b0424afab5ed68fd42e3e596dfe5","url":"assets/images/memory_8-78c8f2969c7ebffe36c247b26c88f86e.png"},{"revision":"5135c604a94e84dc848740b4dcb25877","url":"assets/images/Minecraft_Formatting-04a724dcfe681ac715cf9c1bb542be74.gif"},{"revision":"3a0c4398d1f4cb711b8d3a5afde7e60b","url":"assets/images/mm-1ecc89ffb3cc2398697d18068c88d969.png"},{"revision":"c939dd55ffc73fd55c101fb51a555079","url":"assets/images/motd-3d72069f027158b8f6de113d70dbe479.png"},{"revision":"4bd57a588c33e2419452c7088097d017","url":"assets/images/mysql-021568c5ef1d502632950f56dbf470b9.png"},{"revision":"8f7bf62fbdfd604d76bab4fcb83c4e36","url":"assets/images/nogui-92030a95bbe6f727b682636fbe492382.jpg"},{"revision":"9dc395225c71ecd76be2e6ca6c03c28b","url":"assets/images/Npp展示-49f716bb51e81c8492ea6ffd12f1a11b.png"},{"revision":"1b98d8a7ee5aca0eb851943c5aa4100e","url":"assets/images/nukkit-core-running-29a0538bd9c9c191aee3cf4118b655c5.png"},{"revision":"1091d963a8808832206df20e2fc415ac","url":"assets/images/N减减展示-e586599c5b6e1716133361d3a34a0175.png"},{"revision":"5b5b9f619bce00550788f37eb868d631","url":"assets/images/on-63e1d541c4c9de5b41d182aeea140286.png"},{"revision":"ced9a665c3e0b3d73a0e4100a0cc9cc3","url":"assets/images/Oracle-1-bc8d29f08208e6a87a6ae710bd3d9cb3.png"},{"revision":"3d18a844e9d9022ed13b6fee5d493b8a","url":"assets/images/Oracle-2-5410980e2bdfae97bebd6000077381b7.png"},{"revision":"bf571e1a8b03d3126d62d3693fe8c8b8","url":"assets/images/Oracle-3-f1e96335c6ae9fb30025417c33d8b0a8.png"},{"revision":"53b56f7d4dbf60062c5e2e0a49512243","url":"assets/images/Oracle-4-5650da48acfb6dae1f21ff89be5e388f.png"},{"revision":"3c2c4bf1bfc9b0d424bd8665fd52ac1e","url":"assets/images/Oracle-5-d0cb65f39baf7ec8c57916a81e991914.png"},{"revision":"5f001420bc4efe43af9f92fad87bc7e9","url":"assets/images/origin-c649add2e80f8e0e56f7a69f3f6332cd.png"},{"revision":"9a6382b17d4809c96848568150796926","url":"assets/images/paste-1-f9b464488c8ef04c2b5eee57683af4e8.png"},{"revision":"cc4fdb236969a75971bc91c4b8d07c35","url":"assets/images/paste-2-be07f8b06a2413081516a54f9a990a27.png"},{"revision":"d4b224372c1304021abaeb42228dba01","url":"assets/images/plugin.yml-c6d0b15344a0ebed3694780fbb5fb9a3.png"},{"revision":"9a57aea4f9fa2cc6e0f9192f3f3466ef","url":"assets/images/pocketminemp-core-running-68610d3b3173e3b52f5f1c57736ca67e.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"d99f3b7d509d7a7ad45ef97021572cf7","url":"assets/images/powernukkitx-core-rip-a6b695ebc905f7e2b4dd1bcc7269e0e3.png"},{"revision":"6fdbc877454241afa33f415a493d9912","url":"assets/images/powernukkitx-core-running-80f78172791a434359bea8ef8d148e5b.png"},{"revision":"32f2acd77df82462590f3ef0c284290f","url":"assets/images/QuerySubclasses-b136586da8818495c77f8ead3519151d.png"},{"revision":"0d229206feb416b2b32207aa3c9ec1f6","url":"assets/images/QuickShop-6300573a93839a6234a877ca1d17e33d.jpg"},{"revision":"230ab0fee144c68671b7d30a16f6afc2","url":"assets/images/remove-item-f43d2a3789816695cbd14761938fa1ed.png"},{"revision":"421bae2e500193abce8912ef1aca1019","url":"assets/images/removeindex-2dd066ef2708c0c7a83a6c993a6cb055.png"},{"revision":"9a506953d2611cf637f8bd5518c7f1af","url":"assets/images/SearchEvent-b9e85e59fff1a78e8cb9c008aaa6c075.png"},{"revision":"b252c66b692c74b114745a58a6f46a3a","url":"assets/images/SearchMethods-3c622ec35083b3ee2105577b481535c5.png"},{"revision":"ee6c0c2157508bda29654186d2526754","url":"assets/images/shangcwenjian-a2457bedcba5664d959eb277f2a7bf6c.png"},{"revision":"7061feebc0b9f4d043c927add59d9e89","url":"assets/images/SkriptBasic1-33f7a98b82d4e1ddedbad4d651f8f136.png"},{"revision":"a9a6602efd196abce1109d66c7049309","url":"assets/images/spark_start-cbc26a47c13a46094ffc66952d3dc35d.png"},{"revision":"2af106dcbb74b265e062d63aa0065e0c","url":"assets/images/spark_stop-d1af50615b6a3e1251f179e0e8460b96.png"},{"revision":"805f0e3c4a3b3c82e80cdbb9a9e0296c","url":"assets/images/spigotmc-1a4ba445397c755bc2a08085aca98220.png"},{"revision":"3379209f06637e8fa7e802b43d521e6f","url":"assets/images/Spigot搜索-ee30023f81de65d4766f39e5fc473dd6.png"},{"revision":"4d0e0feebc2ad073bbfb2fbdac91afb4","url":"assets/images/sublime展示-c4487487f3f1d91698a5875dff5c9b0e.png"},{"revision":"5aeaf6a6722a7187a01e94c6f1a1bb4f","url":"assets/images/TAB-2-50d4189ba4a6c6cec40c1ef2ab8e4f2f.png"},{"revision":"948c73d004e7b82a372cf94c86ab3463","url":"assets/images/TAB-8-f115860381c6c6457ea6ecd06f23b60e.png"},{"revision":"96493548fcb631349a4497af353ed42a","url":"assets/images/talentsaclogo-f9d205117a31b982927bfaed34eac254.png"},{"revision":"47a1786ebe3673b03b7c4a4d33092858","url":"assets/images/termux_screenshot-1b57d43e16118967fba29ef11dffe059.jpg"},{"revision":"bb071cdd3ab62251fdb23f2bbb6a61d3","url":"assets/images/tianjiahuiy-f135045e78f3cae3ae085ca5727755b9.png"},{"revision":"7dd0f3f62a413ad01ad62d2743ef5882","url":"assets/images/tianjiazdy-642888e7f5414fdd1c20eb842a9005be.png"},{"revision":"c3e79a270fd58fd4521ee579c043f744","url":"assets/images/tianxym-f1c52737f3ba0d8fc3b0312fd6953db8.png"},{"revision":"05eb3d62470b79587ed78e939e711d24","url":"assets/images/title-360fb2dd00ad49fcebe31e6bdc489227.png"},{"revision":"da20e2a00e57ce713d1d685b5b52d9f8","url":"assets/images/trm一定要看wiki呐-08a6ca6bee2d5759a58ad7b7cb1ef43c.jpg"},{"revision":"fb9faf0fc14a74f9f3fd0e1db8628dee","url":"assets/images/troll-icon-54aae7973142365e3ebcc713a48dd2f8.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"59881838c96621c6aabff692bcfaac4f","url":"assets/images/trollstone_v-462d0ff8ed3722ec018353c67263d5d1.png"},{"revision":"f699d597ab7ad63285a23f96af51c9b3","url":"assets/images/unzip-af18aaa262463a8aa70c76f1d08d3273.png"},{"revision":"1c831746df6d6598a9a4cb90f1283775","url":"assets/images/upload-cae0c44f9dd8c5f6f2eec340c1539dfa.png"},{"revision":"6bd39cbb0c5c57443da39464e5803af2","url":"assets/images/var_3-59084dd1519d2535566639f7a7c97e04.png"},{"revision":"8f52a672afc12ebf645a88f6930b61a3","url":"assets/images/var_4-4d7a9aa93051f16e249f3a7724eae826.png"},{"revision":"e0dda297392f0b75587a9aadee0c179e","url":"assets/images/var_5-5dce266891dbee0fabb3adbda90cbb94.png"},{"revision":"7fbc187406bb234d149904c69ef7e2a9","url":"assets/images/var_6-d657d44f33fc354cc9911008de45c144.png"},{"revision":"d578846335e1540b0f4731fd03b83b11","url":"assets/images/var_7-537984bea8960acf0f2086f342c3b171.png"},{"revision":"c7163e6699d42cda33a96801f2059cfd","url":"assets/images/vercel-login-85f1377f96ab97f9f40a41b33da14872.png"},{"revision":"690b1e63f85a7fbad307401620cf62ee","url":"assets/images/VersionChoose-dabef0ba09adf92bc4c22692c26f3442.png"},{"revision":"679144f6b4402cb950e29af3b57d387c","url":"assets/images/vscode保存和自动保存-2bb449e003c2188ff00f9cb58396a2b8.png"},{"revision":"ebcfc2b0ac5603c346d3369d7fc9539e","url":"assets/images/vul-tell_color-0ea3b9e53425611de4c3b1543569ecd2.png"},{"revision":"2d1854682907074e6d1e76978a463664","url":"assets/images/vul-tell_name-af9d73a85028294ad9b3753ae6fcbe63.png"},{"revision":"8582486dc950d7b7209785d4ff13d017","url":"assets/images/vul-tell_papiNoInline-683b384943538f641267b459596c19f1.png"},{"revision":"5bf8bbbe95169333754147acaf14ae6d","url":"assets/images/vul-tell_papiWithInline-06b6263c9716a6675c655c3bb08bf0d1.png"},{"revision":"6cdcdc828321ceb7809e94e69b594af2","url":"assets/images/vul-tell_papiWithJoin-c27a3fb4f724bc42eeef7674078bcf5e.png"},{"revision":"6808c7ce294ab84882c77d5dbaad5693","url":"assets/images/vul-tell-5e89808de28630eae313c2858a6b2501.png"},{"revision":"e1deeff288c41e3473a75a000dc0eace","url":"assets/images/web-tell-97c6594cea9e90c76ea83472b06b706b.png"},{"revision":"8515e3918a2e5c46ae5bd55349039169","url":"assets/images/wenjianguanli-5cca234ebb94201386cb3cdbd1d18c92.png"},{"revision":"a02e55982393c7d44eaa802d776e5b42","url":"assets/images/WindTerm-2d39383dcd57785be954d86553986fbb.png"},{"revision":"8ddc5f27f73b3f2bcb7c22d96459bbbc","url":"assets/images/xingjianxiangm-14384bfd84edc289d8a4d63547401a4e.png"},{"revision":"b2fb67b22de319177fddef17b41ab91d","url":"assets/images/xn-login-a42488ea20b998e81cf17beac80bc0de.png"},{"revision":"ec0ad9ea450b34f0c80f9c0bc3c7a3a2","url":"assets/images/ymguanli-0505ecd4f5e9b46d2b516a5cd3dac1f6.png"},{"revision":"6e209f960b1875e76b7f163befa6d399","url":"assets/images/zidingy-d1015457c1312127574351f364ec79e9.png"},{"revision":"9b0ab0f2c3d111ee1b9e19c6b577b8fa","url":"assets/images/不要截图这个啊-998c66db45ea2f2bb5347337e55ec991.png"},{"revision":"9f3258dfa65308545c9c0da842132106","url":"assets/images/以薄面表现vs以体素表现-082a76351a058f000b0d2e0af232c728.jpg"},{"revision":"f131483616b32bdfab1d4d02b5f3869f","url":"assets/images/保持一致的比例vs拉伸变形的比例-e746565d821ca63ab8ede58a6bd3b426.jpg"},{"revision":"a873e91e65264c8d24c1517e28819b67","url":"assets/images/历史版本-bukkit-1-6b37c964ef09fbfc276ef6a1bd849201.png"},{"revision":"dc655833f3e4bbc0e4ac4e1a85402904","url":"assets/images/历史版本-bukkit-2-0a7066acfca9d9027d4704017ef62a39.png"},{"revision":"70843a24bb2361527d338040329975de","url":"assets/images/历史版本-bukkit-3-814d80c25493d70ac8fca5f3fff8b845.png"},{"revision":"583f7ae7aa0e37089902329d3f5d258c","url":"assets/images/历史版本-GitHub-1-132461e09b0e5e9454559ed0ef3cb28a.png"},{"revision":"07b9ecafaa97ff0f02acbcb3e0d01931","url":"assets/images/历史版本-GitHub-2-76dd19217be2c436ee5e5d3fd3e9b6d4.png"},{"revision":"4c8cd9f8d9a609f90d4f2e371747d5de","url":"assets/images/历史版本-GitHub-3-d85fba30028ff65c944acf177527726a.png"},{"revision":"ba7f0c841cf7660f451848ce9295a513","url":"assets/images/历史版本-modrinth-bf53ac057b0047d6429a5301f65cbf09.png"},{"revision":"991aae6596b7358fbe22c73d60c2f0d8","url":"assets/images/历史版本-spigotmc-950e29526cf78beeabbcd7b383d7f455.png"},{"revision":"53d666d4289859a1fce7cb65c25fb56e","url":"assets/images/变量下载失败-b31f486f756a27b74456d12d65a2ea64.png"},{"revision":"46a93c27858e2ad7b5796e43b5293220","url":"assets/images/同类插件评分选择-64b93731775cf6281f4c69b2fbeae7e9.png"},{"revision":"1111abc039ba4001583cedd23ae1a698","url":"assets/images/啥是TAB-10e102aa01b98106dd66dfde46e3b672.png"},{"revision":"4047317a154e932ffc558c17a3657221","url":"assets/images/啥是计分板-17c9ff778263196d2ddf5b934ed97180.png"},{"revision":"4a65ef07a93556381ffd5a715a5a911b","url":"assets/images/均衡的细节分布vs失衡的细节分布-2d93e1768c4bc2382ac45145e12d0ee1.jpg"},{"revision":"501f59c58a99ec86bf894dbe2671e02d","url":"assets/images/如何使用Mclogs-1-ed2513937c90fd4ad25a6ee07ab499dc.png"},{"revision":"29a10fb4055038b1ccd2d28bb60fb5c3","url":"assets/images/如何使用Mclogs-2-4cb7cdde4a3c82444a9d8ad2ace340c4.png"},{"revision":"e3a15d4607bc3c64b173eac0601786b8","url":"assets/images/妙妙比喻-fe69cb2383277d89317aefcee98cd09e.png"},{"revision":"141ecf8a41ad0f29f3f54ef75a4e9054","url":"assets/images/子图标写动作-1eb8459e47c81eff3c50b48fa7ee826d.png"},{"revision":"81259c96410e2ce3da744fd94aa291e2","url":"assets/images/实体纹理-0b4d37466c3feca486a63a2da526e937.jpg"},{"revision":"09455ba6e8aae800a961e27a86f023d8","url":"assets/images/常见的HSV调节面板-11bd4ddb5767fe9972dc42b4ae1c2258.jpg"},{"revision":"2dab819137ad090d14bc2203b0f650d2","url":"assets/images/括号-9a9007d0231a0e26ee8baf6dec9b249c.png"},{"revision":"568d366e3beafc02072747ae5aec6b03","url":"assets/images/插件列表-a37819243f4b7a3d3ceb4b7022730e91.png"},{"revision":"5450e3f70932445cf80fde71da400caf","url":"assets/images/文件资源管理器-391e28e4b715ca877ad9428717dc18aa.jpg"},{"revision":"dcdecfda0639163f4cf584b995925aa1","url":"assets/images/方块纹理-76c866f9d6c94bc769fb6b8b57955d38.jpg"},{"revision":"097eff14c2a9a8d8433b36e0555b6681","url":"assets/images/旋转元素vs用阶梯状表现-3cc69f75bb38ebe80922da980b628c25.jpg"},{"revision":"bc4e3d7d095a38fa95ccb0f9b1a7e6de","url":"assets/images/查看语言-crowdin-50dd19aced266accb615cb74fdcc4d9f.png"},{"revision":"63c86dcee856e86d916685f802eb70c9","url":"assets/images/查看语言-spigotmc-60ee8e42daf342c4c8b726dd4651eae9.png"},{"revision":"ee41319bbc30117471b08b6c2d005ef0","url":"assets/images/查看语言-拆开jar-afda92973ce8deecc9f1ba7c5ee3a2ab.png"},{"revision":"5e1386736b2151cbbada7f116c832752","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-0b5219e82d3fe11eb4edd18202270bf2.jpg"},{"revision":"93ee2fc3e8eca947fcf60b2702c87bb4","url":"assets/images/没事不要免费帮人-bb3ff87710753c907857781c8c4c3bf4.jpg"},{"revision":"567cd1c561f2b816fa865c2b23f2c540","url":"assets/images/灵魂画师教开群组服-7ca5cdd4358a53b85459c4a47876a709.png"},{"revision":"33a62cf42b304e8be182c89ac073868c","url":"assets/images/物品纹理-d2991664f3a44e8938fd9a1776c1215c.jpg"},{"revision":"001d4735c99c69b8a305cbb3c385ad61","url":"assets/images/白点-f8b960ac4fa48c3762046b2a69c8a4bf.png"},{"revision":"635e8d85ac7ed74acd6263d0a49e01d3","url":"assets/images/直线与曲线中的锯齿表现-71f3af753d62a6d3d6a5d2d24e8e3241.jpg"},{"revision":"9e33dac3dd42fa62940d388ece11b910","url":"assets/images/箱形UV贴图-379abc8032f2d53391efc96e69182e21.jpg"},{"revision":"1f8f19475fda34e5fd76cceae7adc2be","url":"assets/images/经典老图-1-7215e8e54895c8cd3b605df02a4af7a8.jpg"},{"revision":"13f935518a4ceaac26100ad0a6fa1bc8","url":"assets/images/经典老图-2-ed83429f604efa2593c139aff0ae9469.jpg"},{"revision":"a9ccd65573590b34b793b241461aa7a1","url":"assets/images/经典老图-3-3f4709fd96c694912dba0cd6a885406b.jpg"},{"revision":"117eeed9d3c373097eb7388b24878eae","url":"assets/images/翼龙面板-9edc8c62b2290b77da427b51777c49f4.png"},{"revision":"e0461a8aceda782eb947f91fb65ce177","url":"assets/images/自动UV-0b9e8ee30aa327663e3e79c54d9585f0.jpg"},{"revision":"bb3158215934b0d25a25bdffc253fa74","url":"assets/images/识别纹理-35ce7e2a3d491825f5c83c225f6becca.jpg"},{"revision":"0c75f94da34931c093e2255fb8fa570a","url":"img/back-top.svg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/crafting-table.svg"},{"revision":"f01a98e8ab78bb5158f33bcaf91869d0","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/furnace.svg"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/grass.svg"},{"revision":"82b7be3e7322c076f8ee5fb938edf4c6","url":"img/logo.svg"},{"revision":"db5e56bb21e1ee27ddac572199724e08","url":"img/nitwikit-banner.png"}];
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
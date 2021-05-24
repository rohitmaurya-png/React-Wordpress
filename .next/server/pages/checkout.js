module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/checkout/CheckoutForm */ "./src/components/checkout/CheckoutForm.js");
/* harmony import */ var _src_queries_get_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/queries/get-countries */ "./src/queries/get-countries.js");
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ApolloClient */ "./src/components/ApolloClient.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\pages\\checkout.js";





const Checkout = ({
  data
}) => {
  var _data$wooCountries;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "checkout container mx-auto my-32 px-4 xl:px-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "mb-5 text-2xl uppercase",
        children: "Checkout Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 4
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        countriesData: (_data$wooCountries = data === null || data === void 0 ? void 0 : data.wooCountries) !== null && _data$wooCountries !== void 0 ? _data$wooCountries : {}
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 2
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);
async function getStaticProps() {
  const {
    data
  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__["default"].query({
    query: _src_queries_get_countries__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
  return {
    props: {
      data: data || {}
    },
    revalidate: 1
  };
}

/***/ }),

/***/ "./src/components/ApolloClient.js":
/*!****************************************!*\
  !*** ./src/components/ApolloClient.js ***!
  \****************************************/
/*! exports provided: middleware, afterware, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return middleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterware", function() { return afterware; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */

const middleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */
  const session = false ? undefined : null;

  if (session) {
    operation.setContext(({
      headers = {}
    }) => ({
      headers: {
        "woocommerce-session": `Session ${session}`
      }
    }));
  }

  return forward(operation);
});
/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */

const afterware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]((operation, forward) => {
  return forward(operation).map(response => {
    if (true) {
      return response;
    }
    /**
     * Check for session header and update session in local storage accordingly.
     */


    const context = operation.getContext();
    const {
      response: {
        headers
      }
    } = context;
    const session = headers.get("woocommerce-session");

    if (session) {
      // Remove session data if session destroyed.
      if ("false" === session) {
        localStorage.removeItem("woo-session"); // Update session new data if changed.
      } else if (localStorage.getItem("woo-session") !== session) {
        localStorage.setItem("woo-session", headers.get("woocommerce-session"));
      }
    }

    return response;
  });
}); // Apollo GraphQL client.

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: middleware.concat(afterware.concat(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
    uri: `${"http://reactwordpress.nestymakergroup.com"}/graphql`,
    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_0___default.a
  }))),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/components/icons/index.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\Footer.js";


const Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "footer bg-gray-800 p-6 text-white",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-text flex-none md:flex items-center justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\xA9 Rohit Maurya 2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray",
        children: "This uses Wordpress as backend and react as front end "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "text-gray",
        children: "Product data/Category/Cart  is fetched from Wordpress site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "social-links mt-8 flex align-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.facebook.com/codeytek",
          className: "fa fa-facebook",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 96
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "ml-2 mt-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_1__["Twitter"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 59
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 31
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "ml-2 mt-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "fa fa-youtube",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_1__["Youtube"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 85
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 31
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "ml-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "fa fa-instagram",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 82
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 26
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\Header.js";


const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AppContext */ "./src/components/context/AppContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _ApolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApolloClient */ "./src/components/ApolloClient.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\Layout.js";








next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeStart", () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeError", () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());

const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
      client: _ApolloClient__WEBPACK_IMPORTED_MODULE_5__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Woocommerce React Theme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_CartIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/CartIcon */ "./src/components/cart/CartIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\Nav.js";




const Nav = () => {
  const {
    0: isMenuVisible,
    1: setMenuVisibility
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "bg-white p-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex items-center justify-between flex-wrap container mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center flex-shrink-0 text-black mr-20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "fill-current h-8 w-8 mr-2",
          width: "54",
          height: "54",
          viewBox: "0 0 54 54",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 127
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "font-semibold text-xl tracking-tight",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "",
              children: "React wordpress"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 6
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 6
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "block lg:hidden",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => setMenuVisibility(!isMenuVisible),
          className: "flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "fill-current h-3 w-3",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 99
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 118
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 6
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${isMenuVisible ? 'max-h-full h-full' : 'h-0'} w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-sm font-medium uppercase lg:flex-grow",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/categories",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
              children: "Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 6
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
              children: "Women"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 6
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
              children: "Kids"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 6
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
              children: "Home & Living"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 6
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
              children: "Offers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 7
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 6
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-sm font-medium",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#responsive-header",
            className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "hidden lg:block m-auto",
              fill: "none",
              viewBox: "0 0 24 24",
              width: "18",
              height: "auto",
              stroke: "currentColor",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 161
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 7
            }, undefined), "Profile"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#responsive-header",
            className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "hidden lg:block m-auto",
              fill: "none",
              viewBox: "0 0 24 24",
              width: "18",
              height: "auto",
              stroke: "currentColor",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 161
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 7
            }, undefined), "Wishlist"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cart_CartIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/cart/CartIcon.js":
/*!*****************************************!*\
  !*** ./src/components/cart/CartIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ "./src/components/context/AppContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\cart\\CartIcon.js";




const CartIcon = () => {
  const {
    0: cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);
  const productsCount = null !== cart && Object.keys(cart).length ? cart.totalProductsCount : '';
  const totalPrice = null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : '';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "hidden lg:block m-auto",
        fill: "none",
        viewBox: "0 0 24 24",
        width: "18",
        height: "auto",
        stroke: "currentColor",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 159
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), "Bag", productsCount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ml-1",
        children: ["(", productsCount, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 23
      }, undefined) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CartIcon);

/***/ }),

/***/ "./src/components/checkout/Address.js":
/*!********************************************!*\
  !*** ./src/components/checkout/Address.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CountrySelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountrySelection */ "./src/components/checkout/CountrySelection.js");
/* harmony import */ var _StatesSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatesSelection */ "./src/components/checkout/StatesSelection.js");
/* harmony import */ var _form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-elements/InputField */ "./src/components/checkout/form-elements/InputField.js");


var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\Address.js";





const Address = ({
  input,
  countries,
  states,
  handleOnChange,
  isFetchingStates,
  isShipping
}) => {
  const {
    errors
  } = input || {};
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap overflow-hidden sm:-mx-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "firstName",
        inputValue: input === null || input === void 0 ? void 0 : input.firstName,
        required: true,
        handleOnChange: handleOnChange,
        label: "First name",
        errors: errors,
        isShipping: isShipping,
        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "lastName",
        inputValue: input === null || input === void 0 ? void 0 : input.lastName,
        required: true,
        handleOnChange: handleOnChange,
        label: "Last name",
        errors: errors,
        isShipping: isShipping,
        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "company",
      inputValue: input === null || input === void 0 ? void 0 : input.company,
      handleOnChange: handleOnChange,
      label: "Company Name (Optional)",
      errors: errors,
      isShipping: isShipping,
      containerClassNames: "mb-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CountrySelection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      input: input,
      handleOnChange: handleOnChange,
      countries: countries,
      isShipping: isShipping
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "address1",
      inputValue: input === null || input === void 0 ? void 0 : input.address1,
      required: true,
      handleOnChange: handleOnChange,
      label: "Street address",
      placeholder: "House number and street name",
      errors: errors,
      isShipping: isShipping,
      containerClassNames: "mb-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "address2",
      inputValue: input === null || input === void 0 ? void 0 : input.address2,
      handleOnChange: handleOnChange,
      label: "Street address line two",
      placeholder: "Apartment floor unit building floor etc(optional)",
      errors: errors,
      isShipping: isShipping,
      containerClassNames: "mb-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "city",
      required: true,
      inputValue: input === null || input === void 0 ? void 0 : input.city,
      handleOnChange: handleOnChange,
      label: "Town/City",
      errors: errors,
      isShipping: isShipping,
      containerClassNames: "mb-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StatesSelection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      input: input,
      handleOnChange: handleOnChange,
      states: states,
      isShipping: isShipping,
      isFetchingStates: isFetchingStates
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap overflow-hidden sm:-mx-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "postcode",
        inputValue: input === null || input === void 0 ? void 0 : input.postcode,
        required: true,
        handleOnChange: handleOnChange,
        label: "Post code",
        errors: errors,
        isShipping: isShipping,
        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "phone",
        inputValue: input === null || input === void 0 ? void 0 : input.phone,
        required: true,
        handleOnChange: handleOnChange,
        label: "Phone",
        errors: errors,
        isShipping: isShipping,
        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "email",
      type: "email",
      inputValue: input === null || input === void 0 ? void 0 : input.email,
      required: true,
      handleOnChange: handleOnChange,
      label: "Email",
      errors: errors,
      isShipping: isShipping,
      containerClassNames: "mb-4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

Address.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  countries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  handleOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isFetchingStates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isShipping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Address.defaultProps = {
  input: {},
  countries: [],
  handleOnChange: () => null,
  isFetchingStates: false,
  isShipping: false
};
/* harmony default export */ __webpack_exports__["default"] = (Address);

/***/ }),

/***/ "./src/components/checkout/CheckoutCartItem.js":
/*!*****************************************************!*\
  !*** ./src/components/checkout/CheckoutCartItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\CheckoutCartItem.js";

const CheckoutCartItem = ({
  item
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    className: "woo-next-cart-item",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        width: "64",
        src: item.image.sourceUrl,
        srcSet: item.image.srcSet,
        alt: item.image.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: item.totalPrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined)]
  }, item.productId, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutCartItem);

/***/ }),

/***/ "./src/components/checkout/CheckoutForm.js":
/*!*************************************************!*\
  !*** ./src/components/checkout/CheckoutForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _YourOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YourOrder */ "./src/components/checkout/YourOrder.js");
/* harmony import */ var _PaymentModes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaymentModes */ "./src/components/checkout/PaymentModes.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AppContext */ "./src/components/context/AppContext.js");
/* harmony import */ var _validator_checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validator/checkout */ "./src/validator/checkout.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");
/* harmony import */ var _OrderSuccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OrderSuccess */ "./src/components/checkout/OrderSuccess.js");
/* harmony import */ var _queries_get_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../queries/get-cart */ "./src/queries/get-cart.js");
/* harmony import */ var _mutations_checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mutations/checkout */ "./src/mutations/checkout.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Address */ "./src/components/checkout/Address.js");
/* harmony import */ var _utils_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/checkout */ "./src/utils/checkout.js");
/* harmony import */ var _form_elements_CheckboxField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-elements/CheckboxField */ "./src/components/checkout/form-elements/CheckboxField.js");


var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\CheckoutForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // Use this for testing purposes, so you dont have to fill the checkout form over an over again.
// const defaultCustomerInfo = {
// 	firstName: 'Imran',
// 	lastName: 'Sayed',
// 	address1: '123 Abc farm',
// 	address2: 'Hill Road',
// 	city: 'Mumbai',
// 	country: 'IN',
// 	state: 'Maharastra',
// 	postcode: '221029',
// 	email: 'codeytek.academy@gmail.com',
// 	phone: '9883778278',
// 	company: 'The Company',
// 	errors: null
// }

const defaultCustomerInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  country: '',
  state: '',
  postcode: '',
  email: '',
  phone: '',
  company: '',
  errors: null
};

const CheckoutForm = ({
  countriesData
}) => {
  const {
    billingCountries,
    shippingCountries
  } = countriesData || {};
  const initialState = {
    billing: _objectSpread({}, defaultCustomerInfo),
    shipping: _objectSpread({}, defaultCustomerInfo),
    createAccount: false,
    orderNotes: '',
    billingDifferentThanShipping: false,
    paymentMethod: 'cod'
  };
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: orderData,
    1: setOrderData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: requestError,
    1: setRequestError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: theShippingStates,
    1: setTheShippingStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isFetchingShippingStates,
    1: setIsFetchingShippingStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: theBillingStates,
    1: setTheBillingStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isFetchingBillingStates,
    1: setIsFetchingBillingStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // Get Cart Data.

  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_get_cart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["getFormattedCart"])(data);
      localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart)); // Update cart data in React Context.

      setCart(updatedCart);
    }
  }); // Create New order: Checkout Mutation.

  const [checkout, {
    data: checkoutResponse,
    loading: checkoutLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_mutations_checkout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variables: {
      input: orderData
    },
    onError: error => {
      if (error) {
        var _error$graphQLErrors$, _error$graphQLErrors, _error$graphQLErrors$2;

        setRequestError((_error$graphQLErrors$ = error === null || error === void 0 ? void 0 : (_error$graphQLErrors = error.graphQLErrors) === null || _error$graphQLErrors === void 0 ? void 0 : (_error$graphQLErrors$2 = _error$graphQLErrors[0]) === null || _error$graphQLErrors$2 === void 0 ? void 0 : _error$graphQLErrors$2.message) !== null && _error$graphQLErrors$ !== void 0 ? _error$graphQLErrors$ : '');
      }
    }
  });
  /*
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return {void}
   */

  const handleFormSubmit = event => {
    event.preventDefault();
    /**
     * Validate Billing and Shipping Details
     *
     * Note:
     * 1. If billing is different than shipping address, only then validate billing.
     * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
     * the respective states should only be mandatory, if a country has states.
     */

    const billingValidationResult = input !== null && input !== void 0 && input.billingDifferentThanShipping ? Object(_validator_checkout__WEBPACK_IMPORTED_MODULE_6__["default"])(input === null || input === void 0 ? void 0 : input.billing, theBillingStates === null || theBillingStates === void 0 ? void 0 : theBillingStates.length) : {
      errors: null,
      isValid: true
    };
    const shippingValidationResult = Object(_validator_checkout__WEBPACK_IMPORTED_MODULE_6__["default"])(input === null || input === void 0 ? void 0 : input.shipping, theShippingStates === null || theShippingStates === void 0 ? void 0 : theShippingStates.length);

    if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
      setInput(_objectSpread(_objectSpread({}, input), {}, {
        billing: _objectSpread(_objectSpread({}, input.billing), {}, {
          errors: billingValidationResult.errors
        }),
        shipping: _objectSpread(_objectSpread({}, input.shipping), {}, {
          errors: shippingValidationResult.errors
        })
      }));
      return;
    }

    const checkOutData = Object(_functions__WEBPACK_IMPORTED_MODULE_7__["createCheckoutData"])(input);
    setRequestError(null);
    /**
     *  When order data is set, checkout mutation will automatically be called,
     *  because 'orderData' is added in useEffect as a dependency.
     */

    setOrderData(checkOutData);
  };
  /*
   * Handle onchange input.
   *
   * @param {Object} event Event Object.
   * @param {bool} isShipping If this is false it means it is billing.
   * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
   *
   * @return {void}
   */


  const handleOnChange = async (event, isShipping = false, isBillingOrShipping = false) => {
    const {
      target
    } = event || {};

    if ('createAccount' === target.name) {
      Object(_utils_checkout__WEBPACK_IMPORTED_MODULE_12__["handleCreateAccount"])(input, setInput, target);
    } else if ('billingDifferentThanShipping' === target.name) {
      Object(_utils_checkout__WEBPACK_IMPORTED_MODULE_12__["handleBillingDifferentThanShipping"])(input, setInput, target);
    } else if (isBillingOrShipping) {
      if (isShipping) {
        await handleShippingChange(target);
      } else {
        await handleBillingChange(target);
      }
    } else {
      const newState = _objectSpread(_objectSpread({}, input), {}, {
        [target.name]: target.value
      });

      setInput(newState);
    }
  };

  const handleShippingChange = async target => {
    const newState = _objectSpread(_objectSpread({}, input), {}, {
      shipping: _objectSpread(_objectSpread({}, input === null || input === void 0 ? void 0 : input.shipping), {}, {
        [target.name]: target.value
      })
    });

    setInput(newState);
    await Object(_utils_checkout__WEBPACK_IMPORTED_MODULE_12__["setStatesForCountry"])(target, setTheShippingStates, setIsFetchingShippingStates);
  };

  const handleBillingChange = async target => {
    const newState = _objectSpread(_objectSpread({}, input), {}, {
      billing: _objectSpread(_objectSpread({}, input === null || input === void 0 ? void 0 : input.billing), {}, {
        [target.name]: target.value
      })
    });

    setInput(newState);
    await Object(_utils_checkout__WEBPACK_IMPORTED_MODULE_12__["setStatesForCountry"])(target, setTheBillingStates, setIsFetchingBillingStates);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    if (null !== orderData) {
      // Call the checkout mutation when the value for orderData changes/updates.
      await checkout();
    }
  }, [orderData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [cart ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleFormSubmit,
      className: "woo-next-checkout-form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "billing-details",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-xl font-medium mb-4",
              children: "Shipping Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Address__WEBPACK_IMPORTED_MODULE_11__["default"], {
              states: theShippingStates,
              countries: shippingCountries,
              input: input === null || input === void 0 ? void 0 : input.shipping,
              handleOnChange: event => handleOnChange(event, true, true),
              isFetchingStates: isFetchingShippingStates,
              isShipping: true,
              isBillingOrShipping: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_CheckboxField__WEBPACK_IMPORTED_MODULE_13__["default"], {
              name: "billingDifferentThanShipping",
              type: "checkbox",
              checked: input === null || input === void 0 ? void 0 : input.billingDifferentThanShipping,
              handleOnChange: handleOnChange,
              label: "Billing different than shipping",
              containerClassNames: "mb-4 pt-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 29
          }, undefined), input !== null && input !== void 0 && input.billingDifferentThanShipping ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "billing-details",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "text-xl font-medium mb-4",
              children: "Billing Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Address__WEBPACK_IMPORTED_MODULE_11__["default"], {
              states: theBillingStates,
              countries: billingCountries,
              input: input === null || input === void 0 ? void 0 : input.billing,
              handleOnChange: event => handleOnChange(event, false, true),
              isFetchingStates: isFetchingBillingStates,
              isShipping: false,
              isBillingOrShipping: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 33
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "your-orders",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-xl font-medium mb-4",
            children: "Your Order"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_YourOrder__WEBPACK_IMPORTED_MODULE_3__["default"], {
            cart: cart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PaymentModes__WEBPACK_IMPORTED_MODULE_4__["default"], {
            input: input,
            handleOnChange: handleOnChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "woo-next-place-order-btn-wrap mt-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full",
              type: "submit",
              children: "Place Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 29
          }, undefined), checkoutLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Processing Order..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 49
          }, undefined), requestError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Error : ", requestError, " :( Please try again"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 46
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }, undefined) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_OrderSuccess__WEBPACK_IMPORTED_MODULE_8__["default"], {
      response: checkoutResponse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

/***/ }),

/***/ "./src/components/checkout/CountrySelection.js":
/*!*****************************************************!*\
  !*** ./src/components/checkout/CountrySelection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/components/checkout/Error.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_elements_Abbr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements/Abbr */ "./src/components/checkout/form-elements/Abbr.js");
/* harmony import */ var _icons_ArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/ArrowDown */ "./src/components/icons/ArrowDown.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\CountrySelection.js";





const CountrySelection = ({
  input,
  handleOnChange,
  countries,
  isShipping
}) => {
  const {
    country,
    errors
  } = input || {};
  const inputId = `country-${isShipping ? 'shipping' : 'billing'}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mb-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "leading-7 text-sm text-gray-700",
      htmlFor: inputId,
      children: ["Country", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_Abbr__WEBPACK_IMPORTED_MODULE_3__["default"], {
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative w-full border-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        onChange: handleOnChange,
        value: country,
        name: "country",
        className: "bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",
        id: inputId,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          children: "Select a country..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(countries) && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(countries, country => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          "data-countrycode": country === null || country === void 0 ? void 0 : country.countryCode,
          value: country === null || country === void 0 ? void 0 : country.countryCode,
          children: country === null || country === void 0 ? void 0 : country.countryName
        }, country === null || country === void 0 ? void 0 : country.countryCode, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "absolute right-0 mr-1 text-gray-500",
        style: {
          top: '25%'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_ArrowDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: 24,
          height: 24,
          className: "fill-current"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
      errors: errors,
      fieldName: 'country'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySelection);

/***/ }),

/***/ "./src/components/checkout/Error.js":
/*!******************************************!*\
  !*** ./src/components/checkout/Error.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\Error.js";

const Error = ({
  errors,
  fieldName
}) => {
  return errors && errors.hasOwnProperty(fieldName) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "invalid-feedback d-block text-red-500",
    children: errors[fieldName]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 4
  }, undefined) : '';
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/components/checkout/OrderSuccess.js":
/*!*************************************************!*\
  !*** ./src/components/checkout/OrderSuccess.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\OrderSuccess.js";

const OrderSuccess = props => {
  const {
    response
  } = props;

  if (!response) {
    return null;
  }

  const responseData = response.checkout;
  window.location.href = responseData.redirect;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: 'success' === responseData.result ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["Order no: ", responseData.order.orderNumber, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Status : ", responseData.order.status]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined) : ''
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OrderSuccess);

/***/ }),

/***/ "./src/components/checkout/PaymentModes.js":
/*!*************************************************!*\
  !*** ./src/components/checkout/PaymentModes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/components/checkout/Error.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\PaymentModes.js";


const PaymentModes = ({
  input,
  handleOnChange
}) => {
  const {
    errors,
    paymentMethod
  } = input || {};
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
      errors: errors,
      fieldName: 'paymentMethod'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "bacs",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'bacs' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "Direct Bank Transfer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "paypal",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'paypal' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "Pay with Paypal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "cheque",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'cheque' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "Check Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "cod",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'cod' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "Cash on Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "jccpaymentgatewayredirect",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'jccpaymentgatewayredirect' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "JCC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-check woo-next-payment-input-container mt-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "form-check-label",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: handleOnChange,
          value: "ccavenue",
          className: "form-check-input mr-3",
          name: "paymentMethod",
          type: "radio",
          checked: 'ccavenue' === paymentMethod
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-payment-content",
          children: "CC Avenue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "woo-next-checkout-payment-instructions mt-2",
      children: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentModes);

/***/ }),

/***/ "./src/components/checkout/StatesSelection.js":
/*!****************************************************!*\
  !*** ./src/components/checkout/StatesSelection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_elements_Abbr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-elements/Abbr */ "./src/components/checkout/form-elements/Abbr.js");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Error */ "./src/components/checkout/Error.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\StatesSelection.js";






const StateSelection = ({
  handleOnChange,
  input,
  states,
  isFetchingStates,
  isShipping
}) => {
  const {
    state,
    errors
  } = input || {};
  const inputId = `state-${isShipping ? 'shipping' : 'billing'}`;

  if (isFetchingStates) {
    // Show loading component.
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "leading-7 text-sm text-gray-700",
        children: ["State/County", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_Abbr__WEBPACK_IMPORTED_MODULE_4__["default"], {
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative w-full border-none",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          disabled: true,
          value: "",
          name: "state",
          className: "opacity-50 bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "",
            children: "Loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined);
  }

  if (!states.length) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mb-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "leading-7 text-sm text-gray-600",
      htmlFor: inputId,
      children: ["State/County", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_form_elements_Abbr__WEBPACK_IMPORTED_MODULE_4__["default"], {
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative w-full border-none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        disabled: isFetchingStates,
        onChange: handleOnChange,
        value: state,
        name: "state",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('bg-gray-100 bg-opacity-50 border border-gray-400 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full', {
          'opacity-50': isFetchingStates
        }),
        id: inputId,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          children: "Select a state..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), states.map((state, index) => {
          var _state$stateCode, _state$stateName;

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: (_state$stateName = state === null || state === void 0 ? void 0 : state.stateName) !== null && _state$stateName !== void 0 ? _state$stateName : '',
            children: state === null || state === void 0 ? void 0 : state.stateName
          }, (_state$stateCode = state === null || state === void 0 ? void 0 : state.stateCode) !== null && _state$stateCode !== void 0 ? _state$stateCode : index, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {
      errors: errors,
      fieldName: 'state'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

StateSelection.propTypes = {
  handleOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  states: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  isFetchingStates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isShipping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
StateSelection.defaultProps = {
  handleOnChange: () => null,
  input: {},
  states: [],
  isFetchingStates: false,
  isShipping: true
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(StateSelection));

/***/ }),

/***/ "./src/components/checkout/YourOrder.js":
/*!**********************************************!*\
  !*** ./src/components/checkout/YourOrder.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckoutCartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutCartItem */ "./src/components/checkout/CheckoutCartItem.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\YourOrder.js";



const YourOrder = ({
  cart
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: cart ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "checkout-cart table table-hover w-full mb-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "woo-next-cart-head-container text-left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "woo-next-cart-heading-el",
              scope: "col"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "woo-next-cart-heading-el",
              scope: "col",
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "woo-next-cart-heading-el",
              scope: "col",
              children: "Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [cart.products.length && cart.products.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CheckoutCartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: item
          }, item.productId, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "bg-gray-200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "woo-next-checkout-total font-normal text-xl",
              children: "Subtotal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              className: "woo-next-checkout-total font-bold text-xl",
              children: cart.totalProductsPrice
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined) : ''
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (YourOrder);

/***/ }),

/***/ "./src/components/checkout/form-elements/Abbr.js":
/*!*******************************************************!*\
  !*** ./src/components/checkout/form-elements/Abbr.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\form-elements\\Abbr.js";


const Abbr = ({
  required
}) => {
  if (!required) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
    className: "text-red-500",
    style: {
      textDecoration: 'none'
    },
    title: "required",
    children: "*"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

Abbr.propTypes = {
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Abbr.defaultProps = {
  required: false
};
/* harmony default export */ __webpack_exports__["default"] = (Abbr);

/***/ }),

/***/ "./src/components/checkout/form-elements/CheckboxField.js":
/*!****************************************************************!*\
  !*** ./src/components/checkout/form-elements/CheckboxField.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\form-elements\\CheckboxField.js";


const CheckboxField = ({
  handleOnChange,
  checked,
  name,
  label,
  placeholder,
  containerClassNames
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: containerClassNames,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "leading-7 text-md text-gray-700 flex items-center cursor-pointer",
      htmlFor: name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onChange: handleOnChange,
        placeholder: placeholder,
        type: "checkbox",
        checked: checked,
        name: name,
        id: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "ml-2",
        children: label || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

CheckboxField.propTypes = {
  handleOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  containerClassNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
CheckboxField.defaultProps = {
  handleOnChange: () => null,
  checked: false,
  name: '',
  label: '',
  placeholder: '',
  errors: {},
  containerClassNames: ''
};
/* harmony default export */ __webpack_exports__["default"] = (CheckboxField);

/***/ }),

/***/ "./src/components/checkout/form-elements/InputField.js":
/*!*************************************************************!*\
  !*** ./src/components/checkout/form-elements/InputField.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error */ "./src/components/checkout/Error.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Abbr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Abbr */ "./src/components/checkout/form-elements/Abbr.js");

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\checkout\\form-elements\\InputField.js";




const InputField = ({
  handleOnChange,
  inputValue,
  name,
  type,
  label,
  errors,
  placeholder,
  required,
  containerClassNames,
  isShipping
}) => {
  const inputId = `${name}-${isShipping ? 'shipping' : ''}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: containerClassNames,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "leading-7 text-sm text-gray-700",
      htmlFor: inputId,
      children: [label || '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Abbr__WEBPACK_IMPORTED_MODULE_3__["default"], {
        required: required
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: handleOnChange,
      value: inputValue,
      placeholder: placeholder,
      type: type,
      name: name,
      className: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      id: inputId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
      errors: errors,
      fieldName: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

InputField.propTypes = {
  handleOnChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  containerClassNames: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
InputField.defaultProps = {
  handleOnChange: () => null,
  inputValue: '',
  name: '',
  type: 'text',
  label: '',
  placeholder: '',
  errors: {},
  required: false,
  containerClassNames: ''
};
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/components/context/AppContext.js":
/*!**********************************************!*\
  !*** ./src/components/context/AppContext.js ***!
  \**********************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\context\\AppContext.js";

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext([{}, () => {}]);
const AppProvider = props => {
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // @TODO Will add option to show the cart with localStorage later.
    if (false) {}
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: [cart, setCart],
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/components/icons/ArrowDown.js":
/*!*******************************************!*\
  !*** ./src/components/icons/ArrowDown.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\ArrowDown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgArrowDown(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    height: "1em",
    viewBox: "0 0 24 24",
    width: "1em",
    className: "arrow-down_svg__fill-current arrow-down_svg__text-3xl"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M24 24H0V0h24v24z",
      fill: "none",
      opacity: 0.87
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowDown);

/***/ }),

/***/ "./src/components/icons/Cross.js":
/*!***************************************!*\
  !*** ./src/components/icons/Cross.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\Cross.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgCross(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16pt",
    height: "16pt",
    viewBox: "0 0 16 16"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#7e7e7e",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M8 0C3.578 0 0 3.578 0 8c0 4.422 3.578 8 8 8 4.422 0 8-3.578 8-8 0-4.422-3.578-8-8-8zm0 14.75c-3.73 0-6.75-3.02-6.75-6.75S4.27 1.25 8 1.25 14.75 4.27 14.75 8 11.73 14.75 8 14.75zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M10.738 9.852L8.883 8l1.855-1.852a.632.632 0 000-.886.632.632 0 00-.886 0L8 7.117 6.148 5.262a.632.632 0 00-.886 0 .632.632 0 000 .886L7.117 8 5.262 9.852a.632.632 0 000 .886c.246.242.64.242.886 0L8 8.883l1.852 1.855c.246.242.64.242.886 0a.632.632 0 000-.886zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCross);

/***/ }),

/***/ "./src/components/icons/Facebook.js":
/*!******************************************!*\
  !*** ./src/components/icons/Facebook.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\Facebook.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgFacebook(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 18 18"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2.637 18h5.87v-6.398H6.399v-2.11h2.11V6.855a2.64 2.64 0 012.637-2.636h2.636v2.11h-2.11c-.581 0-1.054.472-1.054 1.054v2.11h3.07l-.351 2.109h-2.719V18h4.746A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582h-3.691v-4.289h2.555l.703-4.219h-3.258V7.383h3.164V3.164h-3.691a3.696 3.696 0 00-3.692 3.691v1.582h-2.11v4.22h2.11v4.288H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgFacebook);

/***/ }),

/***/ "./src/components/icons/Instagram.js":
/*!*******************************************!*\
  !*** ./src/components/icons/Instagram.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\Instagram.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgInstagram(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 18 18"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#fff",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M2.637 18h12.726A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M9 13.746A4.751 4.751 0 0013.746 9 4.751 4.751 0 009 4.254 4.751 4.751 0 004.254 9 4.751 4.751 0 009 13.746zM9 5.31A3.696 3.696 0 0112.691 9 3.696 3.696 0 019 12.691 3.696 3.696 0 015.309 9 3.696 3.696 0 019 5.309zm0 0M14.273 5.309c.872 0 1.582-.711 1.582-1.582 0-.872-.71-1.582-1.582-1.582-.87 0-1.582.71-1.582 1.582 0 .87.711 1.582 1.582 1.582zm0-2.11a.53.53 0 01.528.528.53.53 0 01-.528.527.53.53 0 01-.527-.527.53.53 0 01.527-.528zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),

/***/ "./src/components/icons/Twitter.js":
/*!*****************************************!*\
  !*** ./src/components/icons/Twitter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\Twitter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgTwitter(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 18 18"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18 1.969c-1.133.05-1.11.047-1.234.058L17.434.11s-2.09.774-2.622.91C13.418-.233 11.348-.288 9.864.622 8.653 1.367 8 2.648 8.22 4.145 5.859 3.816 3.87 2.695 2.3.813L1.805.215l-.371.68a4.142 4.142 0 00-.442 2.773c.078.379.207.742.387 1.082l-.426-.164-.05.71c-.051.724.19 1.567.644 2.259.129.195.293.406.5.617l-.219-.031.27.816a3.957 3.957 0 002.039 2.36c-.953.402-1.719.66-2.98 1.074L0 12.773l1.066.582c.407.223 1.844.965 3.262 1.188 3.156.496 6.711.09 9.102-2.063 2.015-1.816 2.675-4.394 2.539-7.082-.02-.406.09-.793.312-1.093.45-.594 1.715-2.332 1.719-2.336zm-2.559 1.707a2.712 2.712 0 00-.523 1.777c.137 2.707-.602 4.809-2.191 6.246-1.864 1.672-4.864 2.332-8.235 1.801-.61-.094-1.242-.309-1.762-.523 1.06-.364 1.875-.688 3.196-1.313l1.84-.871-2.036-.129c-.972-.062-1.785-.535-2.28-1.305.265-.011.519-.054.773-.129l1.941-.539-1.957-.48a2.915 2.915 0 01-2.164-2.086c.195.05.422.09.793.125l1.809.18L3.21 5.313c-1.035-.81-1.45-2.02-1.145-3.184 3.227 3.348 7.012 3.094 7.395 3.183-.086-.816-.086-.816-.11-.894-.488-1.727.583-2.602 1.067-2.898 1.008-.622 2.605-.715 3.715.308a.95.95 0 00.867.23c.27-.066.496-.14.71-.218l-.452 1.3h.582c-.11.15-.242.325-.399.536zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./src/components/icons/Youtube.js":
/*!*****************************************!*\
  !*** ./src/components/icons/Youtube.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ruturaj\\Downloads\\wordpress react\\src\\components\\icons\\Youtube.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgYoutube(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 18 18"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#fff",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M2.637 13.71h12.726A2.64 2.64 0 0018 11.075V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v8.437a2.64 2.64 0 002.637 2.637zM1.055 2.638c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v8.437c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M6.363 3.324v7.168l6.348-3.644zm1.055 1.79l3.144 1.75-3.144 1.804zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgYoutube);

/***/ }),

/***/ "./src/components/icons/index.js":
/*!***************************************!*\
  !*** ./src/components/icons/index.js ***!
  \***************************************/
/*! exports provided: ArrowDown, Cross, Facebook, Instagram, Twitter, Youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArrowDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowDown */ "./src/components/icons/ArrowDown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return _ArrowDown__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cross */ "./src/components/icons/Cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return _Cross__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Facebook */ "./src/components/icons/Facebook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return _Facebook__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instagram */ "./src/components/icons/Instagram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return _Instagram__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Twitter */ "./src/components/icons/Twitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return _Twitter__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Youtube */ "./src/components/icons/Youtube.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return _Youtube__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getFloatVal, addFirstProduct, createNewProduct, updateCart, getUpdatedProducts, removeItemFromCart, getFormattedCart, createCheckoutData, getUpdatedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatVal", function() { return getFloatVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFirstProduct", function() { return addFirstProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewProduct", function() { return createNewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCart", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedProducts", function() { return getUpdatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCart", function() { return removeItemFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedCart", function() { return getFormattedCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutData", function() { return createCheckoutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedItems", function() { return getUpdatedItems; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */

const getFloatVal = string => {
  let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
  return null !== floatValue ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};
/**
 * Add first product.
 *
 * @param {Object} product Product
 * @return {{totalProductsCount: number, totalProductsPrice: any, products: Array}}
 */

const addFirstProduct = product => {
  let productPrice = getFloatVal(product.price);
  let newCart = {
    products: [],
    totalProductsCount: 1,
    totalProductsPrice: productPrice
  };
  const newProduct = createNewProduct(product, productPrice, 1);
  newCart.products.push(newProduct);
  localStorage.setItem('woo-next-cart', JSON.stringify(newCart));
  return newCart;
};
/**
 * Create a new product object.
 *
 * @param {Object} product Product
 * @param {Integer} productPrice Product Price
 * @param {Integer} qty Quantity
 * @return {{image: *, productId: *, totalPrice: number, price: *, qty: *, name: *}}
 */

const createNewProduct = (product, productPrice, qty) => {
  return {
    productId: product.productId,
    image: product.image,
    name: product.name,
    price: productPrice,
    qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2))
  };
};
/**
 * Updates the existing cart with new item.
 *
 * @param {Object} existingCart Existing Cart.
 * @param {Object} product Product.
 * @param {Integer} qtyToBeAdded Quantity.
 * @param {Integer} newQty New Qty to be updated.
 * @return {{totalProductsCount: *, totalProductsPrice: *, products: *}}
 */

const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {
  const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);

  const addPrice = (total, item) => {
    total.totalPrice += item.totalPrice;
    total.qty += item.qty;
    return total;
  }; // Loop through the updated product array and add the totalPrice of each item to get the totalPrice


  let total = updatedProducts.reduce(addPrice, {
    totalPrice: 0,
    qty: 0
  });
  const updatedCart = {
    products: updatedProducts,
    totalProductsCount: parseInt(total.qty),
    totalProductsPrice: parseFloat(total.totalPrice)
  };
  localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
  return updatedCart;
};
/**
 * Get updated products array
 * Update the product if it exists else,
 * add the new product to existing cart,
 *
 * @param {Object} existingProductsInCart Existing product in cart
 * @param {Object} product Product
 * @param {Integer} qtyToBeAdded Quantity
 * @param {Integer} newQty New qty of the product (optional)
 * @return {*[]}
 */

const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
  // Check if the product already exits in the cart.
  const productExitsIndex = isProductInCart(existingProductsInCart, product.productId); // If product exits ( index of that product found in the array ), update the product quantity and totalPrice

  if (-1 < productExitsIndex) {
    let updatedProducts = existingProductsInCart;
    let updatedProduct = updatedProducts[productExitsIndex]; // If have new qty of the product available, set that else add the qtyToBeAdded

    updatedProduct.qty = newQty ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
    updatedProduct.totalPrice = parseFloat((updatedProduct.price * updatedProduct.qty).toFixed(2));
    return updatedProducts;
  } else {
    // If product not found push the new product to the existing product array.
    let productPrice = getFloatVal(product.price);
    const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
    existingProductsInCart.push(newProduct);
    return existingProductsInCart;
  }
};
/**
 * Returns index of the product if it exists.
 *
 * @param {Object} existingProductsInCart Existing Products.
 * @param {Integer} productId Product id.
 * @return {number | *} Index Returns -1 if product does not exist in the array, index number otherwise
 */

const isProductInCart = (existingProductsInCart, productId) => {
  const returnItemThatExits = (item, index) => {
    if (productId === item.productId) {
      return item;
    }
  }; // This new array will only contain the product which is matched.


  const newArray = existingProductsInCart.filter(returnItemThatExits);
  return existingProductsInCart.indexOf(newArray[0]);
};
/**
 * Remove Item from the cart.
 *
 * @param {Integer} productId Product Id.
 * @return {any | string} Updated cart
 */


const removeItemFromCart = productId => {
  let existingCart = localStorage.getItem('woo-next-cart');
  existingCart = JSON.parse(existingCart); // If there is only one item in the cart, delete the cart.

  if (1 === existingCart.products.length) {
    localStorage.removeItem('woo-next-cart');
    return null;
  } // Check if the product already exits in the cart.


  const productExitsIndex = isProductInCart(existingCart.products, productId); // If product to be removed exits

  if (-1 < productExitsIndex) {
    const productTobeRemoved = existingCart.products[productExitsIndex];
    const qtyToBeRemovedFromTotal = productTobeRemoved.qty;
    const priceToBeDeductedFromTotal = productTobeRemoved.totalPrice; // Remove that product from the array and update the total price and total quantity of the cart

    let updatedCart = existingCart;
    updatedCart.products.splice(productExitsIndex, 1);
    updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
    updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;
    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
    return updatedCart;
  } else {
    return existingCart;
  }
};
/**
 * Returns cart data in the required format.
 * @param {String} data Cart data
 */

const getFormattedCart = data => {
  var _data$cart$total, _data$cart;

  let formattedCart = null;

  if (undefined === data || !data.cart.contents.nodes.length) {
    return formattedCart;
  }

  const givenProducts = data.cart.contents.nodes; // Create an empty object.

  formattedCart = {};
  formattedCart.products = [];
  let totalProductsCount = 0;

  for (let i = 0; i < givenProducts.length; i++) {
    var _givenProducts$i, _givenProducts$i$prod, _givenProduct$product, _givenProducts$i$key, _givenProducts$i2, _givenProduct$name, _givenProducts$i3, _givenProducts$i$tota, _givenProducts$i4, _givenProduct$image$s, _givenProduct$image, _givenProduct$image$s2, _givenProduct$image2, _givenProduct$image$t, _givenProduct$image3, _givenProduct$image$a, _givenProduct$image4, _givenProducts$i5;

    const givenProduct = givenProducts === null || givenProducts === void 0 ? void 0 : (_givenProducts$i = givenProducts[i]) === null || _givenProducts$i === void 0 ? void 0 : (_givenProducts$i$prod = _givenProducts$i.product) === null || _givenProducts$i$prod === void 0 ? void 0 : _givenProducts$i$prod.node;
    const product = {};
    const total = getFloatVal(givenProducts[i].total);
    product.productId = (_givenProduct$product = givenProduct === null || givenProduct === void 0 ? void 0 : givenProduct.productId) !== null && _givenProduct$product !== void 0 ? _givenProduct$product : '';
    product.cartKey = (_givenProducts$i$key = givenProducts === null || givenProducts === void 0 ? void 0 : (_givenProducts$i2 = givenProducts[i]) === null || _givenProducts$i2 === void 0 ? void 0 : _givenProducts$i2.key) !== null && _givenProducts$i$key !== void 0 ? _givenProducts$i$key : '';
    product.name = (_givenProduct$name = givenProduct === null || givenProduct === void 0 ? void 0 : givenProduct.name) !== null && _givenProduct$name !== void 0 ? _givenProduct$name : '';
    product.qty = givenProducts === null || givenProducts === void 0 ? void 0 : (_givenProducts$i3 = givenProducts[i]) === null || _givenProducts$i3 === void 0 ? void 0 : _givenProducts$i3.quantity;
    product.price = total / (product === null || product === void 0 ? void 0 : product.qty);
    product.totalPrice = (_givenProducts$i$tota = givenProducts === null || givenProducts === void 0 ? void 0 : (_givenProducts$i4 = givenProducts[i]) === null || _givenProducts$i4 === void 0 ? void 0 : _givenProducts$i4.total) !== null && _givenProducts$i$tota !== void 0 ? _givenProducts$i$tota : '';
    product.image = {
      sourceUrl: (_givenProduct$image$s = givenProduct === null || givenProduct === void 0 ? void 0 : (_givenProduct$image = givenProduct.image) === null || _givenProduct$image === void 0 ? void 0 : _givenProduct$image.sourceUrl) !== null && _givenProduct$image$s !== void 0 ? _givenProduct$image$s : '',
      srcSet: (_givenProduct$image$s2 = givenProduct === null || givenProduct === void 0 ? void 0 : (_givenProduct$image2 = givenProduct.image) === null || _givenProduct$image2 === void 0 ? void 0 : _givenProduct$image2.srcSet) !== null && _givenProduct$image$s2 !== void 0 ? _givenProduct$image$s2 : '',
      title: (_givenProduct$image$t = givenProduct === null || givenProduct === void 0 ? void 0 : (_givenProduct$image3 = givenProduct.image) === null || _givenProduct$image3 === void 0 ? void 0 : _givenProduct$image3.title) !== null && _givenProduct$image$t !== void 0 ? _givenProduct$image$t : '',
      altText: (_givenProduct$image$a = givenProduct === null || givenProduct === void 0 ? void 0 : (_givenProduct$image4 = givenProduct.image) === null || _givenProduct$image4 === void 0 ? void 0 : _givenProduct$image4.altText) !== null && _givenProduct$image$a !== void 0 ? _givenProduct$image$a : ''
    };
    totalProductsCount += givenProducts === null || givenProducts === void 0 ? void 0 : (_givenProducts$i5 = givenProducts[i]) === null || _givenProducts$i5 === void 0 ? void 0 : _givenProducts$i5.quantity; // Push each item into the products array.

    formattedCart.products.push(product);
  }

  formattedCart.totalProductsCount = totalProductsCount;
  formattedCart.totalProductsPrice = (_data$cart$total = data === null || data === void 0 ? void 0 : (_data$cart = data.cart) === null || _data$cart === void 0 ? void 0 : _data$cart.total) !== null && _data$cart$total !== void 0 ? _data$cart$total : '';
  return formattedCart;
};
const createCheckoutData = order => {
  var _order$shipping, _order$shipping2, _order$shipping3, _order$shipping4, _order$shipping5, _order$shipping6, _order$shipping7, _order$shipping8, _order$shipping9, _order$shipping10, _order$shipping11;

  // Set the billing Data to shipping, if applicable.
  const billingData = order.billingDifferentThanShipping ? order.billing : order.shipping;
  const checkoutData = {
    clientMutationId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    shipping: {
      firstName: order === null || order === void 0 ? void 0 : (_order$shipping = order.shipping) === null || _order$shipping === void 0 ? void 0 : _order$shipping.firstName,
      lastName: order === null || order === void 0 ? void 0 : (_order$shipping2 = order.shipping) === null || _order$shipping2 === void 0 ? void 0 : _order$shipping2.lastName,
      address1: order === null || order === void 0 ? void 0 : (_order$shipping3 = order.shipping) === null || _order$shipping3 === void 0 ? void 0 : _order$shipping3.address1,
      address2: order === null || order === void 0 ? void 0 : (_order$shipping4 = order.shipping) === null || _order$shipping4 === void 0 ? void 0 : _order$shipping4.address2,
      city: order === null || order === void 0 ? void 0 : (_order$shipping5 = order.shipping) === null || _order$shipping5 === void 0 ? void 0 : _order$shipping5.city,
      country: order === null || order === void 0 ? void 0 : (_order$shipping6 = order.shipping) === null || _order$shipping6 === void 0 ? void 0 : _order$shipping6.country,
      state: order === null || order === void 0 ? void 0 : (_order$shipping7 = order.shipping) === null || _order$shipping7 === void 0 ? void 0 : _order$shipping7.state,
      postcode: order === null || order === void 0 ? void 0 : (_order$shipping8 = order.shipping) === null || _order$shipping8 === void 0 ? void 0 : _order$shipping8.postcode,
      email: order === null || order === void 0 ? void 0 : (_order$shipping9 = order.shipping) === null || _order$shipping9 === void 0 ? void 0 : _order$shipping9.email,
      phone: order === null || order === void 0 ? void 0 : (_order$shipping10 = order.shipping) === null || _order$shipping10 === void 0 ? void 0 : _order$shipping10.phone,
      company: order === null || order === void 0 ? void 0 : (_order$shipping11 = order.shipping) === null || _order$shipping11 === void 0 ? void 0 : _order$shipping11.company
    },
    billing: {
      firstName: billingData === null || billingData === void 0 ? void 0 : billingData.firstName,
      lastName: billingData === null || billingData === void 0 ? void 0 : billingData.lastName,
      address1: billingData === null || billingData === void 0 ? void 0 : billingData.address1,
      address2: billingData === null || billingData === void 0 ? void 0 : billingData.address2,
      city: billingData === null || billingData === void 0 ? void 0 : billingData.city,
      country: billingData === null || billingData === void 0 ? void 0 : billingData.country,
      state: billingData === null || billingData === void 0 ? void 0 : billingData.state,
      postcode: billingData === null || billingData === void 0 ? void 0 : billingData.postcode,
      email: billingData === null || billingData === void 0 ? void 0 : billingData.email,
      phone: billingData === null || billingData === void 0 ? void 0 : billingData.phone,
      company: billingData === null || billingData === void 0 ? void 0 : billingData.company
    },
    shipToDifferentAddress: order.billingDifferentThanShipping,
    paymentMethod: order.paymentMethod,
    isPaid: false
  };

  if (order.createAccount) {
    checkoutData.account = {
      username: order.username,
      password: order.password
    };
  }

  return checkoutData;
};
/**
 * Get the updated items in the below format required for mutation input.
 *
 * [
 * { "key": "33e75ff09dd601bbe6dd51039152189", "quantity": 1 },
 * { "key": "02e74f10e0327ad868d38f2b4fdd6f0", "quantity": 1 },
 * ]
 *
 * Creates an array in above format with the newQty (updated Qty ).
 *
 */

const getUpdatedItems = (products, newQty, cartKey) => {
  // Create an empty array.
  const updatedItems = []; // Loop through the product array.

  products.map(cartItem => {
    // If you find the cart key of the product user is trying to update, push the key and new qty.
    if (cartItem.cartKey === cartKey) {
      updatedItems.push({
        key: cartItem.cartKey,
        quantity: parseInt(newQty)
      }); // Otherwise just push the existing qty without updating.
    } else {
      updatedItems.push({
        key: cartItem.cartKey,
        quantity: cartItem.qty
      });
    }
  }); // Return the updatedItems array with new Qtys.

  return updatedItems;
};

/***/ }),

/***/ "./src/mutations/checkout.js":
/*!***********************************!*\
  !*** ./src/mutations/checkout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CHECKOUT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
mutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    order {
      id
      orderKey
      orderNumber
      status
      refunds {
        nodes {
          amount
        }
      }
    }
    result
    redirect
  }
}
`;
/* harmony default export */ __webpack_exports__["default"] = (CHECKOUT_MUTATION);

/***/ }),

/***/ "./src/queries/get-cart.js":
/*!*********************************!*\
  !*** ./src/queries/get-cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query GET_CART {
  cart {
    contents {
      nodes {
        key
        product {
          node {
            id
            productId: databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
        }
        variation {
          node {
            id
            variationId: databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
          }
          attributes {
            id
            name
            value
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
}
`;
/* harmony default export */ __webpack_exports__["default"] = (GET_CART);

/***/ }),

/***/ "./src/queries/get-countries.js":
/*!**************************************!*\
  !*** ./src/queries/get-countries.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL countries query.
 */

const GET_COUNTRIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`query GET_COUNTRIES{
  wooCountries {
    billingCountries {
      countryCode
      countryName
    }
    shippingCountries {
      countryCode
      countryName
    }
  }
}`;
/* harmony default export */ __webpack_exports__["default"] = (GET_COUNTRIES);

/***/ }),

/***/ "./src/queries/get-states.js":
/*!***********************************!*\
  !*** ./src/queries/get-states.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL countries query.
 */

const GET_STATES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`query GET_STATES($countryCode: String!) {
  wooStates(countryCode: $countryCode) {
    states {
      stateCode
      stateName
    }
  }
}`;
/* harmony default export */ __webpack_exports__["default"] = (GET_STATES);

/***/ }),

/***/ "./src/utils/checkout.js":
/*!*******************************!*\
  !*** ./src/utils/checkout.js ***!
  \*******************************/
/*! exports provided: getStates, setStatesForCountry, handleBillingDifferentThanShipping, handleCreateAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return getStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatesForCountry", function() { return setStatesForCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBillingDifferentThanShipping", function() { return handleBillingDifferentThanShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCreateAccount", function() { return handleCreateAccount; });
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ApolloClient */ "./src/components/ApolloClient.js");
/* harmony import */ var _queries_get_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queries/get-states */ "./src/queries/get-states.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Get states
 *
 * @param {String} countryCode Country code
 *
 * @returns {Promise<void>}
 */

const getStates = async countryCode => {
  var _data$wooStates$state, _data$wooStates;

  const {
    data
  } = await _components_ApolloClient__WEBPACK_IMPORTED_MODULE_0__["default"].query({
    query: _queries_get_states__WEBPACK_IMPORTED_MODULE_1__["default"],
    variables: {
      countryCode: countryCode || ''
    }
  });
  return (_data$wooStates$state = data === null || data === void 0 ? void 0 : (_data$wooStates = data.wooStates) === null || _data$wooStates === void 0 ? void 0 : _data$wooStates.states) !== null && _data$wooStates$state !== void 0 ? _data$wooStates$state : [];
};
/**
 * Set states for the country.
 *
 * @param {Object} target Target.
 * @param {Function} setTheStates React useState function to set the value of the states basis country selection.
 * @param {Function} setIsFetchingStates React useState function, to manage loading state when request is in process.
 *
 * @return {Promise<void>}
 */

const setStatesForCountry = async (target, setTheStates, setIsFetchingStates) => {
  if ('country' === target.name) {
    setIsFetchingStates(true);
    const countryCode = target[target.selectedIndex].getAttribute('data-countrycode');
    const states = await getStates(countryCode);
    setTheStates(states || []);
    setIsFetchingStates(false);
  }
};
const handleBillingDifferentThanShipping = (input, setInput, target) => {
  const newState = _objectSpread(_objectSpread({}, input), {}, {
    [target.name]: !input.billingDifferentThanShipping
  });

  setInput(newState);
};
const handleCreateAccount = (input, setInput, target) => {
  const newState = _objectSpread(_objectSpread({}, input), {}, {
    [target.name]: !input.createAccount
  });

  setInput(newState);
};

/***/ }),

/***/ "./src/validator/checkout.js":
/*!***********************************!*\
  !*** ./src/validator/checkout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmpty */ "./src/validator/isEmpty.js");



const validateAndSanitizeCheckoutForm = (data, hasStates = true) => {
  let errors = {};
  let sanitizedData = {};
  /**
   * Set the firstName value equal to an empty string if user has not entered the firstName, otherwise the Validator.isEmpty() wont work down below.
   * Note that the isEmpty() here is our custom function defined in is-empty.js and
   * Validator.isEmpty() down below comes from validator library.
   * Similarly we do it for for the rest of the fields
   */

  data.firstName = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.firstName) ? data.firstName : '';
  data.lastName = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.lastName) ? data.lastName : '';
  data.company = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.company) ? data.company : '';
  data.country = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.country) ? data.country : '';
  data.address1 = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.address1) ? data.address1 : '';
  data.address2 = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.address2) ? data.address2 : '';
  data.city = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.city) ? data.city : '';
  data.state = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.state) ? data.state : '';
  data.postcode = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.postcode) ? data.postcode : '';
  data.phone = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.phone) ? data.phone : '';
  data.email = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.email) ? data.email : '';
  data.createAccount = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.createAccount) ? data.createAccount : '';
  data.orderNotes = !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(data.orderNotes) ? data.orderNotes : ''; // data.paymentMethod = ( ! isEmpty( data.paymentMethod ) ) ? data.paymentMethod : '';

  /**
   * Checks for error if required is true
   * and adds Error and Sanitized data to the errors and sanitizedData object
   *
   * @param {String} fieldName Field name e.g. First name, last name
   * @param {String} errorContent Error Content to be used in showing error e.g. First Name, Last Name
   * @param {Integer} min Minimum characters required
   * @param {Integer} max Maximum characters required
   * @param {String} type Type e.g. email, phone etc.
   * @param {boolean} required Required if required is passed as false, it will not validate error and just do sanitization.
   */

  const addErrorAndSanitizedData = (fieldName, errorContent, min, max, type = '', required) => {
    /**
     * Please note that this isEmpty() belongs to validator and not our custom function defined above.
     *
     * Check for error and if there is no error then sanitize data.
     */
    if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(data[fieldName], {
      min,
      max
    })) {
      errors[fieldName] = `${errorContent} must be ${min} to ${max} characters`;
    }

    if ('email' === type && !validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(data[fieldName])) {
      errors[fieldName] = `${errorContent} is not valid`;
    }

    if ('phone' === type && !validator__WEBPACK_IMPORTED_MODULE_0___default.a.isMobilePhone(data[fieldName])) {
      errors[fieldName] = `${errorContent} is not valid`;
    }

    if (required && validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data[fieldName])) {
      errors[fieldName] = `${errorContent} is required`;
    } // If no errors


    if (!errors[fieldName]) {
      sanitizedData[fieldName] = validator__WEBPACK_IMPORTED_MODULE_0___default.a.trim(data[fieldName]);
      sanitizedData[fieldName] = 'email' === type ? validator__WEBPACK_IMPORTED_MODULE_0___default.a.normalizeEmail(sanitizedData[fieldName]) : sanitizedData[fieldName];
      sanitizedData[fieldName] = validator__WEBPACK_IMPORTED_MODULE_0___default.a.escape(sanitizedData[fieldName]);
    }
  };

  addErrorAndSanitizedData('firstName', 'First name', 2, 35, 'string', true);
  addErrorAndSanitizedData('lastName', 'Last name', 2, 35, 'string', true);
  addErrorAndSanitizedData('company', 'Company Name', 0, 35, 'string', false);
  addErrorAndSanitizedData('country', 'Country name', 2, 55, 'string', true);
  addErrorAndSanitizedData('address1', 'Street address line 1', 12, 100, 'string', true);
  addErrorAndSanitizedData('address2', '', 0, 254, 'string', false);
  addErrorAndSanitizedData('city', 'City field', 3, 25, 'string', true);
  addErrorAndSanitizedData('state', 'State/County', 0, 254, 'string', hasStates);
  addErrorAndSanitizedData('postcode', 'Post code', 2, 10, 'postcode', true);
  addErrorAndSanitizedData('phone', 'Phone number', 10, 15, 'phone', true);
  addErrorAndSanitizedData('email', 'Email', 11, 254, 'email', true); // The data.createAccount is a boolean value.

  sanitizedData.createAccount = data.createAccount;
  addErrorAndSanitizedData('orderNotes', '', 0, 254, 'string', false); // @TODO Payment mode error to be handled later.
  // addErrorAndSanitizedData( 'paymentMethod', 'Payment mode field', 2, 50, 'string', false );

  return {
    sanitizedData,
    errors,
    isValid: Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(errors)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (validateAndSanitizeCheckoutForm);

/***/ }),

/***/ "./src/validator/isEmpty.js":
/*!**********************************!*\
  !*** ./src/validator/isEmpty.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */
const isEmpty = value => value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L0NhcnRJY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNrb3V0L0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tvdXQvQ2hlY2tvdXRDYXJ0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tvdXQvQ291bnRyeVNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9FcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9PcmRlclN1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tvdXQvUGF5bWVudE1vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNrb3V0L1N0YXRlc1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9Zb3VyT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlY2tvdXQvZm9ybS1lbGVtZW50cy9BYmJyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoZWNrb3V0L2Zvcm0tZWxlbWVudHMvQ2hlY2tib3hGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9mb3JtLWVsZW1lbnRzL0lucHV0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9BcHBDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL0Fycm93RG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9GYWNlYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9JbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvVHdpdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9Zb3V0dWJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL211dGF0aW9ucy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcmllcy9nZXQtY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcmllcy9nZXQtY291bnRyaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyaWVzL2dldC1zdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3IvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci9pc0VtcHR5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRvclwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJDaGVja291dCIsIndvb0NvdW50cmllcyIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiR0VUX0NPVU5UUklFUyIsInJldmFsaWRhdGUiLCJtaWRkbGV3YXJlIiwiQXBvbGxvTGluayIsIm9wZXJhdGlvbiIsImZvcndhcmQiLCJzZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJhZnRlcndhcmUiLCJyZXNwb25zZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiQXBvbGxvQ2xpZW50IiwiY29uY2F0IiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJGb290ZXIiLCJIZWFkZXIiLCJOUHJvZ3Jlc3MiLCJkb25lIiwiTGF5b3V0IiwiTmF2IiwiaXNNZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmlsaXR5IiwidXNlU3RhdGUiLCJDYXJ0SWNvbiIsImNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInByb2R1Y3RzQ291bnQiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxQcm9kdWN0c0NvdW50IiwidG90YWxQcmljZSIsInRvdGFsUHJvZHVjdHNQcmljZSIsIkFkZHJlc3MiLCJjb3VudHJpZXMiLCJzdGF0ZXMiLCJoYW5kbGVPbkNoYW5nZSIsImlzRmV0Y2hpbmdTdGF0ZXMiLCJpc1NoaXBwaW5nIiwiZXJyb3JzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb21wYW55IiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0Y29kZSIsInBob25lIiwiZW1haWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJhcnJheSIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiQ2hlY2tvdXRDYXJ0SXRlbSIsImltYWdlIiwic291cmNlVXJsIiwic3JjU2V0IiwidGl0bGUiLCJwcm9kdWN0SWQiLCJkZWZhdWx0Q3VzdG9tZXJJbmZvIiwiY291bnRyeSIsIkNoZWNrb3V0Rm9ybSIsImNvdW50cmllc0RhdGEiLCJiaWxsaW5nQ291bnRyaWVzIiwic2hpcHBpbmdDb3VudHJpZXMiLCJpbml0aWFsU3RhdGUiLCJiaWxsaW5nIiwic2hpcHBpbmciLCJjcmVhdGVBY2NvdW50Iiwib3JkZXJOb3RlcyIsImJpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmciLCJwYXltZW50TWV0aG9kIiwic2V0Q2FydCIsInNldElucHV0Iiwib3JkZXJEYXRhIiwic2V0T3JkZXJEYXRhIiwicmVxdWVzdEVycm9yIiwic2V0UmVxdWVzdEVycm9yIiwidGhlU2hpcHBpbmdTdGF0ZXMiLCJzZXRUaGVTaGlwcGluZ1N0YXRlcyIsImlzRmV0Y2hpbmdTaGlwcGluZ1N0YXRlcyIsInNldElzRmV0Y2hpbmdTaGlwcGluZ1N0YXRlcyIsInRoZUJpbGxpbmdTdGF0ZXMiLCJzZXRUaGVCaWxsaW5nU3RhdGVzIiwiaXNGZXRjaGluZ0JpbGxpbmdTdGF0ZXMiLCJzZXRJc0ZldGNoaW5nQmlsbGluZ1N0YXRlcyIsInVzZVF1ZXJ5IiwiR0VUX0NBUlQiLCJub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJvbkNvbXBsZXRlZCIsInVwZGF0ZWRDYXJ0IiwiZ2V0Rm9ybWF0dGVkQ2FydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGVja291dCIsImNoZWNrb3V0UmVzcG9uc2UiLCJsb2FkaW5nIiwiY2hlY2tvdXRMb2FkaW5nIiwidXNlTXV0YXRpb24iLCJDSEVDS09VVF9NVVRBVElPTiIsInZhcmlhYmxlcyIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYmlsbGluZ1ZhbGlkYXRpb25SZXN1bHQiLCJ2YWxpZGF0ZUFuZFNhbml0aXplQ2hlY2tvdXRGb3JtIiwiaXNWYWxpZCIsInNoaXBwaW5nVmFsaWRhdGlvblJlc3VsdCIsImNoZWNrT3V0RGF0YSIsImNyZWF0ZUNoZWNrb3V0RGF0YSIsImlzQmlsbGluZ09yU2hpcHBpbmciLCJoYW5kbGVDcmVhdGVBY2NvdW50IiwiaGFuZGxlQmlsbGluZ0RpZmZlcmVudFRoYW5TaGlwcGluZyIsImhhbmRsZVNoaXBwaW5nQ2hhbmdlIiwiaGFuZGxlQmlsbGluZ0NoYW5nZSIsIm5ld1N0YXRlIiwic2V0U3RhdGVzRm9yQ291bnRyeSIsInVzZUVmZmVjdCIsIkNvdW50cnlTZWxlY3Rpb24iLCJpbnB1dElkIiwiaXNFbXB0eSIsImNvdW50cnlDb2RlIiwiY291bnRyeU5hbWUiLCJ0b3AiLCJFcnJvciIsImZpZWxkTmFtZSIsImhhc093blByb3BlcnR5IiwiT3JkZXJTdWNjZXNzIiwicmVzcG9uc2VEYXRhIiwibG9jYXRpb24iLCJyZWRpcmVjdCIsIm9yZGVyIiwib3JkZXJOdW1iZXIiLCJzdGF0dXMiLCJQYXltZW50TW9kZXMiLCJTdGF0ZVNlbGVjdGlvbiIsImN4IiwiaW5kZXgiLCJzdGF0ZU5hbWUiLCJzdGF0ZUNvZGUiLCJtZW1vIiwiWW91ck9yZGVyIiwicHJvZHVjdHMiLCJBYmJyIiwicmVxdWlyZWQiLCJ0ZXh0RGVjb3JhdGlvbiIsIkNoZWNrYm94RmllbGQiLCJjaGVja2VkIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNvbnRhaW5lckNsYXNzTmFtZXMiLCJzdHJpbmciLCJ0eXBlIiwiSW5wdXRGaWVsZCIsImlucHV0VmFsdWUiLCJjcmVhdGVDb250ZXh0IiwiQXBwUHJvdmlkZXIiLCJTdmdBcnJvd0Rvd24iLCJTdmdDcm9zcyIsIlN2Z0ZhY2Vib29rIiwiU3ZnSW5zdGFncmFtIiwiU3ZnVHdpdHRlciIsIlN2Z1lvdXR1YmUiLCJnZXRGbG9hdFZhbCIsImZsb2F0VmFsdWUiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiYWRkRmlyc3RQcm9kdWN0IiwicHJvZHVjdCIsInByb2R1Y3RQcmljZSIsInByaWNlIiwibmV3Q2FydCIsIm5ld1Byb2R1Y3QiLCJjcmVhdGVOZXdQcm9kdWN0IiwicXR5IiwidXBkYXRlQ2FydCIsImV4aXN0aW5nQ2FydCIsInF0eVRvQmVBZGRlZCIsIm5ld1F0eSIsInVwZGF0ZWRQcm9kdWN0cyIsImdldFVwZGF0ZWRQcm9kdWN0cyIsImFkZFByaWNlIiwidG90YWwiLCJyZWR1Y2UiLCJleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0IiwicHJvZHVjdEV4aXRzSW5kZXgiLCJpc1Byb2R1Y3RJbkNhcnQiLCJ1cGRhdGVkUHJvZHVjdCIsInJldHVybkl0ZW1UaGF0RXhpdHMiLCJuZXdBcnJheSIsImZpbHRlciIsImluZGV4T2YiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJwYXJzZSIsInByb2R1Y3RUb2JlUmVtb3ZlZCIsInF0eVRvQmVSZW1vdmVkRnJvbVRvdGFsIiwicHJpY2VUb0JlRGVkdWN0ZWRGcm9tVG90YWwiLCJzcGxpY2UiLCJmb3JtYXR0ZWRDYXJ0IiwidW5kZWZpbmVkIiwiY29udGVudHMiLCJub2RlcyIsImdpdmVuUHJvZHVjdHMiLCJnaXZlblByb2R1Y3QiLCJub2RlIiwiY2FydEtleSIsInF1YW50aXR5IiwiYWx0VGV4dCIsImJpbGxpbmdEYXRhIiwiY2hlY2tvdXREYXRhIiwiY2xpZW50TXV0YXRpb25JZCIsInY0Iiwic2hpcFRvRGlmZmVyZW50QWRkcmVzcyIsImlzUGFpZCIsImFjY291bnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZ2V0VXBkYXRlZEl0ZW1zIiwidXBkYXRlZEl0ZW1zIiwiY2FydEl0ZW0iLCJncWwiLCJHRVRfU1RBVEVTIiwiZ2V0U3RhdGVzIiwid29vU3RhdGVzIiwic2V0VGhlU3RhdGVzIiwic2V0SXNGZXRjaGluZ1N0YXRlcyIsInNlbGVjdGVkSW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJoYXNTdGF0ZXMiLCJzYW5pdGl6ZWREYXRhIiwiYWRkRXJyb3JBbmRTYW5pdGl6ZWREYXRhIiwiZXJyb3JDb250ZW50IiwibWluIiwibWF4IiwidmFsaWRhdG9yIiwiaXNMZW5ndGgiLCJpc0VtYWlsIiwiaXNNb2JpbGVQaG9uZSIsInRyaW0iLCJub3JtYWxpemVFbWFpbCIsImVzY2FwZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoZWNrb3V0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm1cIjtcbmltcG9ydCBHRVRfQ09VTlRSSUVTIGZyb20gXCIuLi9zcmMvcXVlcmllcy9nZXQtY291bnRyaWVzXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcG9sbG9DbGllbnRcIjtcblxuY29uc3QgQ2hlY2tvdXQgPSAoe2RhdGF9KSA9PiAoXG5cdDxMYXlvdXQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjaGVja291dCBjb250YWluZXIgbXgtYXV0byBteS0zMiBweC00IHhsOnB4LTBcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtMnhsIHVwcGVyY2FzZVwiPkNoZWNrb3V0IFBhZ2U8L2gxPlxuXHRcdFx0PENoZWNrb3V0Rm9ybSBjb3VudHJpZXNEYXRhPXtkYXRhPy53b29Db3VudHJpZXMgPz8ge319Lz5cblx0XHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG5cdFx0cXVlcnk6IEdFVF9DT1VOVFJJRVNcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0ZGF0YTogZGF0YSB8fCB7fVxuXHRcdH0sXG5cdFx0cmV2YWxpZGF0ZTogMVxuXHR9O1xuXG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvTGluaywgSW5NZW1vcnlDYWNoZSwgY3JlYXRlSHR0cExpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuLyoqXG4gKiBNaWRkbGV3YXJlIG9wZXJhdGlvblxuICogSWYgd2UgaGF2ZSBhIHNlc3Npb24gdG9rZW4gaW4gbG9jYWxTdG9yYWdlLCBhZGQgaXQgdG8gdGhlIEdyYXBoUUwgcmVxdWVzdCBhcyBhIFNlc3Npb24gaGVhZGVyLlxuICovXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IG5ldyBBcG9sbG9MaW5rKCAoIG9wZXJhdGlvbiwgZm9yd2FyZCApID0+IHtcblx0LyoqXG5cdCAqIElmIHNlc3Npb24gZGF0YSBleGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBzZXQgdmFsdWUgYXMgc2Vzc2lvbiBoZWFkZXIuXG5cdCAqL1xuXHRjb25zdCBzZXNzaW9uID0gKCBwcm9jZXNzLmJyb3dzZXIgKSA/ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggXCJ3b28tc2Vzc2lvblwiICkgOiBudWxsO1xuXG5cdGlmICggc2Vzc2lvbiApIHtcblx0XHRvcGVyYXRpb24uc2V0Q29udGV4dCggKCB7IGhlYWRlcnMgPSB7fSB9ICkgPT4gKCB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwid29vY29tbWVyY2Utc2Vzc2lvblwiOiBgU2Vzc2lvbiAkeyBzZXNzaW9uIH1gXG5cdFx0XHR9XG5cdFx0fSApICk7XG5cdH1cblxuXHRyZXR1cm4gZm9yd2FyZCggb3BlcmF0aW9uICk7XG5cbn0gKTtcblxuLyoqXG4gKiBBZnRlcndhcmUgb3BlcmF0aW9uLlxuICpcbiAqIFRoaXMgY2F0Y2hlcyB0aGUgaW5jb21pbmcgc2Vzc2lvbiB0b2tlbiBhbmQgc3RvcmVzIGl0IGluIGxvY2FsU3RvcmFnZSwgZm9yIGZ1dHVyZSBHcmFwaFFMIHJlcXVlc3RzLlxuICovXG5leHBvcnQgY29uc3QgYWZ0ZXJ3YXJlID0gbmV3IEFwb2xsb0xpbmsoICggb3BlcmF0aW9uLCBmb3J3YXJkICkgPT4ge1xuXG5cdHJldHVybiBmb3J3YXJkKCBvcGVyYXRpb24gKS5tYXAoIHJlc3BvbnNlID0+IHtcblxuXHRcdGlmICggIXByb2Nlc3MuYnJvd3NlciApIHtcblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGVjayBmb3Igc2Vzc2lvbiBoZWFkZXIgYW5kIHVwZGF0ZSBzZXNzaW9uIGluIGxvY2FsIHN0b3JhZ2UgYWNjb3JkaW5nbHkuXG5cdFx0ICovXG5cdFx0Y29uc3QgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG5cdFx0Y29uc3QgeyByZXNwb25zZTogeyBoZWFkZXJzIH0gfSAgPSBjb250ZXh0O1xuXHRcdGNvbnN0IHNlc3Npb24gPSBoZWFkZXJzLmdldCggXCJ3b29jb21tZXJjZS1zZXNzaW9uXCIgKTtcblxuXHRcdGlmICggc2Vzc2lvbiApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIHNlc3Npb24gZGF0YSBpZiBzZXNzaW9uIGRlc3Ryb3llZC5cblx0XHRcdGlmICggXCJmYWxzZVwiID09PSBzZXNzaW9uICkge1xuXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBcIndvby1zZXNzaW9uXCIgKTtcblxuXHRcdFx0XHQvLyBVcGRhdGUgc2Vzc2lvbiBuZXcgZGF0YSBpZiBjaGFuZ2VkLlxuXHRcdFx0fSBlbHNlIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFwid29vLXNlc3Npb25cIiApICE9PSBzZXNzaW9uICkge1xuXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBcIndvby1zZXNzaW9uXCIsIGhlYWRlcnMuZ2V0KCBcIndvb2NvbW1lcmNlLXNlc3Npb25cIiApICk7XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cblx0fSApO1xufSApO1xuXG4vLyBBcG9sbG8gR3JhcGhRTCBjbGllbnQuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0bGluazogbWlkZGxld2FyZS5jb25jYXQoIGFmdGVyd2FyZS5jb25jYXQoIGNyZWF0ZUh0dHBMaW5rKHtcblx0XHR1cmk6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPUkRQUkVTU19VUkx9L2dyYXBocWxgLFxuXHRcdGZldGNoOiBmZXRjaFxuXHR9KSApICksXG5cdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiIsImltcG9ydCB7RmFjZWJvb2ssIEluc3RhZ3JhbSwgVHdpdHRlciwgWW91dHViZX0gZnJvbSBcIi4vaWNvbnNcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciBiZy1ncmF5LTgwMCBwLTYgdGV4dC13aGl0ZVwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRleHQgZmxleC1ub25lIG1kOmZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHQ8cD7CqSBSb2hpdCBNYXVyeWEgMjAyMDwvcD5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5XCI+VGhpcyB1c2VzIFdvcmRwcmVzcyBhcyBiYWNrZW5kIGFuZCByZWFjdCBhcyBmcm9udCBlbmQgPC9wPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIj5Qcm9kdWN0IGRhdGEvQ2F0ZWdvcnkvQ2FydCAgaXMgZmV0Y2hlZCBmcm9tIFdvcmRwcmVzcyBzaXRlPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzIG10LTggZmxleCBhbGlnbi1jZW50ZXJcIj5cblx0XHRcdFx0PGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY29kZXl0ZWtcIiBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiIHRhcmdldD1cIl9ibGFua1wiPjxGYWNlYm9vay8+PC9hPjwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtbC0yIG10LTFcIj48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPjxUd2l0dGVyLz48L2E+PC9saT5cblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1sLTIgbXQtMVwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZVwiIHRhcmdldD1cIl9ibGFua1wiPjxZb3V0dWJlLz48L2E+PC9saT5cblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1sLTJcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbVwiIHRhcmdldD1cIl9ibGFua1wiPjxJbnN0YWdyYW0vPjwvYT48L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdDxOYXYvPlxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuL0Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwcFByb3ZpZGVyPlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Xb29jb21tZXJjZSBSZWFjdCBUaGVtZTwvdGl0bGU+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9BcHBQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ2FydEljb24gZnJvbSBcIi4vY2FydC9DYXJ0SWNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcblxuXHRjb25zdCBbIGlzTWVudVZpc2libGUsIHNldE1lbnVWaXNpYmlsaXR5IF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGNvbnRhaW5lciBteC1hdXRvXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHRleHQtYmxhY2sgbXItMjBcIj5cblx0XHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTggdy04IG1yLTJcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiNTRcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTMuNSAyMi4xYzEuOC03LjIgNi4zLTEwLjggMTMuNS0xMC44IDEwLjggMCAxMi4xNSA4LjEgMTcuNTUgOS40NSAzLjYuOSA2Ljc1LS40NSA5LjQ1LTQuMDUtMS44IDcuMi02LjMgMTAuOC0xMy41IDEwLjgtMTAuOCAwLTEyLjE1LTguMS0xNy41NS05LjQ1LTMuNi0uOS02Ljc1LjQ1LTkuNDUgNC4wNXpNMCAzOC4zYzEuOC03LjIgNi4zLTEwLjggMTMuNS0xMC44IDEwLjggMCAxMi4xNSA4LjEgMTcuNTUgOS40NSAzLjYuOSA2Ljc1LS40NSA5LjQ1LTQuMDUtMS44IDcuMi02LjMgMTAuOC0xMy41IDEwLjgtMTAuOCAwLTEyLjE1LTguMS0xNy41NS05LjQ1LTMuNi0uOS02Ljc1LjQ1LTkuNDUgNC4wNXpcIi8+PC9zdmc+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRyYWNraW5nLXRpZ2h0XCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJcIj5SZWFjdCB3b3JkcHJlc3M8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qTWVudSBidXR0b24qL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1lbnVWaXNpYmlsaXR5KCEgaXNNZW51VmlzaWJsZSl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LWJsYWNrIGJvcmRlci1ibGFjayBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci1ibGFja1wiPlxuXHRcdFx0XHRcdDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qTU1lbnUgaW4gbW9iaWxlKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHsgaXNNZW51VmlzaWJsZSA/ICdtYXgtaC1mdWxsIGgtZnVsbCcgOiAnaC0wJyB9IHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gbGc6aC1mdWxsIGZsZXgtZ3JvdyBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzp3LWF1dG9gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdXBwZXJjYXNlIGxnOmZsZXgtZ3Jvd1wiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllc1wiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgbXItMTBcIj5cblx0XHRcdFx0XHRcdFx0Q2F0ZWdvcmllc1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgbXItMTBcIj5cblx0XHRcdFx0XHRcdFx0V29tZW5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWJsYWNrIG1yLTEwXCI+XG5cdFx0XHRcdFx0XHRcdEtpZHNcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWJsYWNrIG1yLTEwXCI+XG5cdFx0XHRcdFx0XHRcdEhvbWUgJiBMaXZpbmdcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWJsYWNrIG1yLTEwXCI+XG5cdFx0XHRcdFx0XHRcdE9mZmVyc1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWJsYWNrIG1yLTEwXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbS1hdXRvXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cImF1dG9cIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNiA3YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpNMTIgMTRhNyA3IDAgMDAtNyA3aDE0YTcgNyAwIDAwLTctN3pcIiAvPjwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRQcm9maWxlXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgbXItMTBcIj5cblx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBtLWF1dG9cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiYXV0b1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0tMyA3aDNtLTMgNGgzbS02LTRoLjAxTTkgMTZoLjAxXCIgLz48L3N2Zz5cblx0XHRcdFx0XHRcdFx0V2lzaGxpc3Rcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxDYXJ0SWNvbi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDYXJ0SWNvbiA9ICgpID0+IHtcblxuXHRjb25zdCBbIGNhcnQgXSA9IHVzZUNvbnRleHQoIEFwcENvbnRleHQgKTtcblx0Y29uc3QgcHJvZHVjdHNDb3VudCA9ICggbnVsbCAhPT0gY2FydCAmJiBPYmplY3Qua2V5cyggY2FydCApLmxlbmd0aCApID8gY2FydC50b3RhbFByb2R1Y3RzQ291bnQgOiAnJztcblx0Y29uc3QgdG90YWxQcmljZSA9ICggbnVsbCAhPT0gY2FydCAmJiBPYmplY3Qua2V5cyggY2FydCApLmxlbmd0aCApID8gY2FydC50b3RhbFByb2R1Y3RzUHJpY2UgOiAnJztcblxuXHRyZXR1cm4gKFxuXHRcdDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuXHRcdFx0PGEgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgbXItMTBcIj5cblx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIG0tYXV0b1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCJhdXRvXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTYgMTFWN2E0IDQgMCAwMC04IDB2NE01IDloMTRsMSAxMkg0TDUgOXpcIiAvPjwvc3ZnPlxuXHRcdFx0XHRCYWdcblx0XHRcdFx0eyBwcm9kdWN0c0NvdW50ID8gPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPih7IHByb2R1Y3RzQ291bnQgfSk8L3NwYW4+IDogJycgfVxuXHRcdFx0XHR7Lyp7IHRvdGFsUHJpY2UgPyA8c3Bhbj57IHRvdGFsUHJpY2UgfTwvc3Bhbj4gOiAnJyB9Ki99XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJY29uO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3VudHJ5U2VsZWN0aW9uIGZyb20gXCIuL0NvdW50cnlTZWxlY3Rpb25cIjtcbmltcG9ydCBTdGF0ZVNlbGVjdGlvbiBmcm9tIFwiLi9TdGF0ZXNTZWxlY3Rpb25cIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuL2Zvcm0tZWxlbWVudHMvSW5wdXRGaWVsZFwiO1xuXG5jb25zdCBBZGRyZXNzID0gKHtpbnB1dCwgY291bnRyaWVzLCBzdGF0ZXMsIGhhbmRsZU9uQ2hhbmdlLCBpc0ZldGNoaW5nU3RhdGVzLCBpc1NoaXBwaW5nfSkgPT4ge1xuXG4gICAgY29uc3Qge2Vycm9yc30gPSBpbnB1dCB8fCB7fTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG92ZXJmbG93LWhpZGRlbiBzbTotbXgtM1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dD8uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICBpc1NoaXBwaW5nPXtpc1NoaXBwaW5nfVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzPVwidy1mdWxsIG92ZXJmbG93LWhpZGRlbiBzbTpteS0yIHNtOnB4LTIgbWQ6dy0xLzJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXQ/Lmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZXM9XCJ3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHNtOm15LTIgc206cHgtMiBtZDp3LTEvMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXQ/LmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcGFueSBOYW1lIChPcHRpb25hbClcIlxuICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lcz1cIm1iLTRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBDb3VudHJ5IFNlbGVjdGlvbiovfVxuICAgICAgICAgICAgPENvdW50cnlTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNvdW50cmllcz17Y291bnRyaWVzfVxuICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzczFcIlxuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0Py5hZGRyZXNzMX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmVldCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdXNlIG51bWJlciBhbmQgc3RyZWV0IG5hbWVcIlxuICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lcz1cIm1iLTRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dD8uYWRkcmVzczJ9XG4gICAgICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyZWV0IGFkZHJlc3MgbGluZSB0d29cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXBhcnRtZW50IGZsb29yIHVuaXQgYnVpbGRpbmcgZmxvb3IgZXRjKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgaXNTaGlwcGluZz17aXNTaGlwcGluZ31cbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzPVwibWItNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dD8uY2l0eX1cbiAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3duL0NpdHlcIlxuICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lcz1cIm1iLTRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBTdGF0ZSAqL31cbiAgICAgICAgICAgIDxTdGF0ZVNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc3RhdGVzPXtzdGF0ZXN9XG4gICAgICAgICAgICAgICAgaXNTaGlwcGluZz17aXNTaGlwcGluZ31cbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nU3RhdGVzPXtpc0ZldGNoaW5nU3RhdGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgb3ZlcmZsb3ctaGlkZGVuIHNtOi1teC0zXCI+XG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvc3Rjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXQ/LnBvc3Rjb2RlfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zdCBjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIGlzU2hpcHBpbmc9e2lzU2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZXM9XCJ3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHNtOm15LTIgc206cHgtMiBtZDp3LTEvMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dD8ucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICBpc1NoaXBwaW5nPXtpc1NoaXBwaW5nfVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzPVwidy1mdWxsIG92ZXJmbG93LWhpZGRlbiBzbTpteS0yIHNtOnB4LTIgbWQ6dy0xLzJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0Py5lbWFpbH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgICAgICBpc1NoaXBwaW5nPXtpc1NoaXBwaW5nfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZXM9XCJtYi00XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LypcdEBUT0RPIENyZWF0ZSBhbiBBY2NvdW50ICovfVxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+Ki99XG4gICAgICAgICAgICB7LypcdDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPiovfVxuICAgICAgICAgICAgey8qXHRcdDxpbnB1dCBvbkNoYW5nZT17IGhhbmRsZU9uQ2hhbmdlIH0gY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIG5hbWU9XCJjcmVhdGVBY2NvdW50XCIgdHlwZT1cImNoZWNrYm94XCIvPiovfVxuICAgICAgICAgICAgey8qXHRcdFx0Q3JlYXRlIGFuIGFjY291bnQ/Ki99XG4gICAgICAgICAgICB7LypcdDwvbGFiZWw+Ki99XG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKjxoMiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5BZGRpdGlvbmFsIEluZm9ybWF0aW9uPC9oMj4qL31cbiAgICAgICAgICAgIHsvKiBAVE9ETyBPcmRlciBOb3RlcyAqL31cbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+Ki99XG4gICAgICAgICAgICB7LypcdDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgaHRtbEZvcj1cIm9yZGVyLW5vdGVzXCI+T3JkZXIgTm90ZXM8L2xhYmVsPiovfVxuICAgICAgICAgICAgey8qXHQ8dGV4dGFyZWEgb25DaGFuZ2U9eyBoYW5kbGVPbkNoYW5nZSB9IGRlZmF1bHRWYWx1ZT17IGlucHV0Lm9yZGVyTm90ZXMgfSBuYW1lPVwib3JkZXJOb3Rlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB3b28tbmV4dC1jaGVja291dC10ZXh0YXJlYVwiIGlkPVwib3JkZXItbm90ZXNcIiByb3dzPVwiNFwiLz4qL31cbiAgICAgICAgICAgIHsvKlx0PEVycm9yIGVycm9ycz17IGlucHV0LmVycm9ycyB9IGZpZWxkTmFtZT17ICdvcmRlck5vdGVzJyB9Lz4qL31cbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuQWRkcmVzcy5wcm9wVHlwZXMgPSB7XG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY291bnRyaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaGFuZGxlT25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzRmV0Y2hpbmdTdGF0ZXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hpcHBpbmc6IFByb3BUeXBlcy5ib29sXG59XG5cbkFkZHJlc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGlucHV0OiB7fSxcbiAgICBjb3VudHJpZXM6IFtdLFxuICAgIGhhbmRsZU9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIGlzRmV0Y2hpbmdTdGF0ZXM6IGZhbHNlLFxuICAgIGlzU2hpcHBpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3M7XG4iLCJjb25zdCBDaGVja291dENhcnRJdGVtID0gKCB7IGl0ZW0gfSApID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDx0ciBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWl0ZW1cIiBrZXk9eyBpdGVtLnByb2R1Y3RJZCB9PlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudFwiPlxuXHRcdFx0XHQ8aW1nIHdpZHRoPVwiNjRcIiBzcmM9eyBpdGVtLmltYWdlLnNvdXJjZVVybCB9IHNyY1NldD17IGl0ZW0uaW1hZ2Uuc3JjU2V0IH0gYWx0PXtpdGVtLmltYWdlLnRpdGxlfS8+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudFwiPnsgaXRlbS5uYW1lIH08L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudFwiPnsgaXRlbS50b3RhbFByaWNlIH08L3RkPlxuXHRcdDwvdHI+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Q2FydEl0ZW07XG4iLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlTXV0YXRpb24sIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmltcG9ydCBZb3VyT3JkZXIgZnJvbSBcIi4vWW91ck9yZGVyXCI7XG5pbXBvcnQgUGF5bWVudE1vZGVzIGZyb20gXCIuL1BheW1lbnRNb2Rlc1wiO1xuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgdmFsaWRhdGVBbmRTYW5pdGl6ZUNoZWNrb3V0Rm9ybSBmcm9tICcuLi8uLi92YWxpZGF0b3IvY2hlY2tvdXQnO1xuaW1wb3J0IHtnZXRGb3JtYXR0ZWRDYXJ0LCBjcmVhdGVDaGVja291dERhdGF9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBPcmRlclN1Y2Nlc3MgZnJvbSBcIi4vT3JkZXJTdWNjZXNzXCI7XG5pbXBvcnQgR0VUX0NBUlQgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvZ2V0LWNhcnRcIjtcbmltcG9ydCBDSEVDS09VVF9NVVRBVElPTiBmcm9tIFwiLi4vLi4vbXV0YXRpb25zL2NoZWNrb3V0XCI7XG5pbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi9BZGRyZXNzXCI7XG5pbXBvcnQge1xuICAgIGhhbmRsZUJpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmcsXG4gICAgaGFuZGxlQ3JlYXRlQWNjb3VudCxcbiAgICBzZXRTdGF0ZXNGb3JDb3VudHJ5XG59IGZyb20gXCIuLi8uLi91dGlscy9jaGVja291dFwiO1xuaW1wb3J0IENoZWNrYm94RmllbGQgZnJvbSBcIi4vZm9ybS1lbGVtZW50cy9DaGVja2JveEZpZWxkXCI7XG5cbi8vIFVzZSB0aGlzIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCBzbyB5b3UgZG9udCBoYXZlIHRvIGZpbGwgdGhlIGNoZWNrb3V0IGZvcm0gb3ZlciBhbiBvdmVyIGFnYWluLlxuLy8gY29uc3QgZGVmYXVsdEN1c3RvbWVySW5mbyA9IHtcbi8vIFx0Zmlyc3ROYW1lOiAnSW1yYW4nLFxuLy8gXHRsYXN0TmFtZTogJ1NheWVkJyxcbi8vIFx0YWRkcmVzczE6ICcxMjMgQWJjIGZhcm0nLFxuLy8gXHRhZGRyZXNzMjogJ0hpbGwgUm9hZCcsXG4vLyBcdGNpdHk6ICdNdW1iYWknLFxuLy8gXHRjb3VudHJ5OiAnSU4nLFxuLy8gXHRzdGF0ZTogJ01haGFyYXN0cmEnLFxuLy8gXHRwb3N0Y29kZTogJzIyMTAyOScsXG4vLyBcdGVtYWlsOiAnY29kZXl0ZWsuYWNhZGVteUBnbWFpbC5jb20nLFxuLy8gXHRwaG9uZTogJzk4ODM3NzgyNzgnLFxuLy8gXHRjb21wYW55OiAnVGhlIENvbXBhbnknLFxuLy8gXHRlcnJvcnM6IG51bGxcbi8vIH1cblxuY29uc3QgZGVmYXVsdEN1c3RvbWVySW5mbyA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBhZGRyZXNzMTogJycsXG4gICAgYWRkcmVzczI6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIGNvdW50cnk6ICcnLFxuICAgIHN0YXRlOiAnJyxcbiAgICBwb3N0Y29kZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBjb21wYW55OiAnJyxcbiAgICBlcnJvcnM6IG51bGxcbn1cblxuY29uc3QgQ2hlY2tvdXRGb3JtID0gKHtjb3VudHJpZXNEYXRhfSkgPT4ge1xuXG4gICAgY29uc3Qge2JpbGxpbmdDb3VudHJpZXMsIHNoaXBwaW5nQ291bnRyaWVzfSA9IGNvdW50cmllc0RhdGEgfHwge31cblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgYmlsbGluZzoge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEN1c3RvbWVySW5mbyxcbiAgICAgICAgfSxcbiAgICAgICAgc2hpcHBpbmc6IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRDdXN0b21lckluZm9cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlQWNjb3VudDogZmFsc2UsXG4gICAgICAgIG9yZGVyTm90ZXM6ICcnLFxuICAgICAgICBiaWxsaW5nRGlmZmVyZW50VGhhblNoaXBwaW5nOiBmYWxzZSxcbiAgICAgICAgcGF5bWVudE1ldGhvZDogJ2NvZCcsXG4gICAgfTtcblxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IFtvcmRlckRhdGEsIHNldE9yZGVyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RoZVNoaXBwaW5nU3RhdGVzLCBzZXRUaGVTaGlwcGluZ1N0YXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzRmV0Y2hpbmdTaGlwcGluZ1N0YXRlcywgc2V0SXNGZXRjaGluZ1NoaXBwaW5nU3RhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdGhlQmlsbGluZ1N0YXRlcywgc2V0VGhlQmlsbGluZ1N0YXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzRmV0Y2hpbmdCaWxsaW5nU3RhdGVzLCBzZXRJc0ZldGNoaW5nQmlsbGluZ1N0YXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBHZXQgQ2FydCBEYXRhLlxuICAgIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9DQVJULCB7XG4gICAgICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcbiAgICAgICAgb25Db21wbGV0ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGluIHRoZSBsb2NhbFN0b3JhZ2UuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FydCA9IGdldEZvcm1hdHRlZENhcnQoZGF0YSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd29vLW5leHQtY2FydCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYXJ0KSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGRhdGEgaW4gUmVhY3QgQ29udGV4dC5cbiAgICAgICAgICAgIHNldENhcnQodXBkYXRlZENhcnQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgTmV3IG9yZGVyOiBDaGVja291dCBNdXRhdGlvbi5cbiAgICBjb25zdCBbY2hlY2tvdXQsIHtcbiAgICAgICAgZGF0YTogY2hlY2tvdXRSZXNwb25zZSxcbiAgICAgICAgbG9hZGluZzogY2hlY2tvdXRMb2FkaW5nLFxuICAgIH1dID0gdXNlTXV0YXRpb24oQ0hFQ0tPVVRfTVVUQVRJT04sIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpbnB1dDogb3JkZXJEYXRhXG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdEVycm9yKGVycm9yPy5ncmFwaFFMRXJyb3JzPy5bMF0/Lm1lc3NhZ2UgPz8gJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBmb3JtIHN1Ym1pdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBPYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdGUgQmlsbGluZyBhbmQgU2hpcHBpbmcgRGV0YWlsc1xuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOlxuICAgICAgICAgKiAxLiBJZiBiaWxsaW5nIGlzIGRpZmZlcmVudCB0aGFuIHNoaXBwaW5nIGFkZHJlc3MsIG9ubHkgdGhlbiB2YWxpZGF0ZSBiaWxsaW5nLlxuICAgICAgICAgKiAyLiBXZSBhcmUgcGFzc2luZyB0aGVCaWxsaW5nU3RhdGVzPy5sZW5ndGggYW5kIHRoZVNoaXBwaW5nU3RhdGVzPy5sZW5ndGgsIHNvIHRoYXRcbiAgICAgICAgICogdGhlIHJlc3BlY3RpdmUgc3RhdGVzIHNob3VsZCBvbmx5IGJlIG1hbmRhdG9yeSwgaWYgYSBjb3VudHJ5IGhhcyBzdGF0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBiaWxsaW5nVmFsaWRhdGlvblJlc3VsdCA9IGlucHV0Py5iaWxsaW5nRGlmZmVyZW50VGhhblNoaXBwaW5nID8gdmFsaWRhdGVBbmRTYW5pdGl6ZUNoZWNrb3V0Rm9ybShpbnB1dD8uYmlsbGluZywgdGhlQmlsbGluZ1N0YXRlcz8ubGVuZ3RoKSA6IHtlcnJvcnM6IG51bGwsIGlzVmFsaWQ6IHRydWV9O1xuICAgICAgICBjb25zdCBzaGlwcGluZ1ZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZUFuZFNhbml0aXplQ2hlY2tvdXRGb3JtKGlucHV0Py5zaGlwcGluZywgdGhlU2hpcHBpbmdTdGF0ZXM/Lmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFzaGlwcGluZ1ZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZCB8fCAhYmlsbGluZ1ZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZCkge1xuICAgICAgICAgICAgc2V0SW5wdXQoe1xuICAgICAgICAgICAgICAgIC4uLmlucHV0LFxuICAgICAgICAgICAgICAgIGJpbGxpbmc6IHsuLi5pbnB1dC5iaWxsaW5nLCBlcnJvcnM6IGJpbGxpbmdWYWxpZGF0aW9uUmVzdWx0LmVycm9yc30sXG4gICAgICAgICAgICAgICAgc2hpcHBpbmc6IHsuLi5pbnB1dC5zaGlwcGluZywgZXJyb3JzOiBzaGlwcGluZ1ZhbGlkYXRpb25SZXN1bHQuZXJyb3JzfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrT3V0RGF0YSA9IGNyZWF0ZUNoZWNrb3V0RGF0YShpbnB1dCk7XG4gICAgICAgIHNldFJlcXVlc3RFcnJvcihudWxsKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBXaGVuIG9yZGVyIGRhdGEgaXMgc2V0LCBjaGVja291dCBtdXRhdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2FsbGVkLFxuICAgICAgICAgKiAgYmVjYXVzZSAnb3JkZXJEYXRhJyBpcyBhZGRlZCBpbiB1c2VFZmZlY3QgYXMgYSBkZXBlbmRlbmN5LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0T3JkZXJEYXRhKGNoZWNrT3V0RGF0YSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIG9uY2hhbmdlIGlucHV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IE9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzU2hpcHBpbmcgSWYgdGhpcyBpcyBmYWxzZSBpdCBtZWFucyBpdCBpcyBiaWxsaW5nLlxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNCaWxsaW5nT3JTaGlwcGluZyBJZiB0aGlzIGlzIGZhbHNlIG1lYW5zIGl0cyBzdGFuZGFyZCBpbnB1dCBhbmQgbm90IGJpbGxpbmcgb3Igc2hpcHBpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gYXN5bmMgKGV2ZW50LCBpc1NoaXBwaW5nID0gZmFsc2UsIGlzQmlsbGluZ09yU2hpcHBpbmcgPSBmYWxzZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQgfHwge307XG5cbiAgICAgICAgaWYgKCdjcmVhdGVBY2NvdW50JyA9PT0gdGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUNyZWF0ZUFjY291bnQoaW5wdXQsIHNldElucHV0LCB0YXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAoJ2JpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmcnID09PSB0YXJnZXQubmFtZSkge1xuICAgICAgICAgICAgaGFuZGxlQmlsbGluZ0RpZmZlcmVudFRoYW5TaGlwcGluZyhpbnB1dCwgc2V0SW5wdXQsIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNCaWxsaW5nT3JTaGlwcGluZykge1xuICAgICAgICAgICAgaWYgKGlzU2hpcHBpbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVTaGlwcGluZ0NoYW5nZSh0YXJnZXQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZUJpbGxpbmdDaGFuZ2UodGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7Li4uaW5wdXQsIFt0YXJnZXQubmFtZV06IHRhcmdldC52YWx1ZX07XG4gICAgICAgICAgICBzZXRJbnB1dChuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2hpcHBpbmdDaGFuZ2UgPSBhc3luYyAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLmlucHV0LCBzaGlwcGluZzogey4uLmlucHV0Py5zaGlwcGluZywgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlfX07XG4gICAgICAgIHNldElucHV0KG5ld1N0YXRlKTtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVzRm9yQ291bnRyeSh0YXJnZXQsIHNldFRoZVNoaXBwaW5nU3RhdGVzLCBzZXRJc0ZldGNoaW5nU2hpcHBpbmdTdGF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJpbGxpbmdDaGFuZ2UgPSBhc3luYyAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLmlucHV0LCBiaWxsaW5nOiB7Li4uaW5wdXQ/LmJpbGxpbmcsIFt0YXJnZXQubmFtZV06IHRhcmdldC52YWx1ZX19O1xuICAgICAgICBzZXRJbnB1dChuZXdTdGF0ZSk7XG4gICAgICAgIGF3YWl0IHNldFN0YXRlc0ZvckNvdW50cnkodGFyZ2V0LCBzZXRUaGVCaWxsaW5nU3RhdGVzLCBzZXRJc0ZldGNoaW5nQmlsbGluZ1N0YXRlcyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcblxuICAgICAgICBpZiAobnVsbCAhPT0gb3JkZXJEYXRhKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBjaGVja291dCBtdXRhdGlvbiB3aGVuIHRoZSB2YWx1ZSBmb3Igb3JkZXJEYXRhIGNoYW5nZXMvdXBkYXRlcy5cbiAgICAgICAgICAgIGF3YWl0IGNoZWNrb3V0KCk7XG4gICAgICAgIH1cblxuICAgIH0sIFtvcmRlckRhdGFdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FydCA/IChcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0gY2xhc3NOYW1lPVwid29vLW5leHQtY2hlY2tvdXQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlNoaXBwaW5nIERldGFpbHMqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxpbmctZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBtYi00XCI+U2hpcHBpbmcgRGV0YWlsczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXM9e3RoZVNoaXBwaW5nU3RhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyaWVzPXtzaGlwcGluZ0NvdW50cmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXtpbnB1dD8uc2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVPbkNoYW5nZShldmVudCwgdHJ1ZSwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nU3RhdGVzPXtpc0ZldGNoaW5nU2hpcHBpbmdTdGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NoaXBwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpbGxpbmdPclNoaXBwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nRGlmZmVyZW50VGhhblNoaXBwaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpbnB1dD8uYmlsbGluZ0RpZmZlcmVudFRoYW5TaGlwcGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmlsbGluZyBkaWZmZXJlbnQgdGhhbiBzaGlwcGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzPVwibWItNCBwdC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypCaWxsaW5nIERldGFpbHMqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXQ/LmJpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBtYi00XCI+QmlsbGluZyBEZXRhaWxzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVzPXt0aGVCaWxsaW5nU3RhdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cmllcz17YmlsbGluZ0NvdW50cmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17aW5wdXQ/LmJpbGxpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlT25DaGFuZ2UoZXZlbnQsIGZhbHNlLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nU3RhdGVzPXtpc0ZldGNoaW5nQmlsbGluZ1N0YXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NoaXBwaW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpbGxpbmdPclNoaXBwaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogT3JkZXIgJiBQYXltZW50cyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3VyLW9yZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlx0T3JkZXIqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBtYi00XCI+WW91ciBPcmRlcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFlvdXJPcmRlciBjYXJ0PXtjYXJ0fS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypQYXltZW50Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRNb2RlcyBpbnB1dD17aW5wdXR9IGhhbmRsZU9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29vLW5leHQtcGxhY2Utb3JkZXItYnRuLXdyYXAgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweC01IHB5LTMgcm91bmRlZC1zbSB3LWF1dG8geGw6dy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFjZSBPcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDaGVja291dCBMb2FkaW5nKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrb3V0TG9hZGluZyAmJiA8cD5Qcm9jZXNzaW5nIE9yZGVyLi4uPC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdEVycm9yICYmIDxwPkVycm9yIDoge3JlcXVlc3RFcnJvcn0gOiggUGxlYXNlIHRyeSBhZ2FpbjwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKSA6ICcnfVxuXG4gICAgICAgICAgICB7LypcdFNob3cgbWVzc2FnZSBpZiBPcmRlciBTdWNjZXNzKi99XG4gICAgICAgICAgICA8T3JkZXJTdWNjZXNzIHJlc3BvbnNlPXtjaGVja291dFJlc3BvbnNlfS8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iLCJpbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvcic7XG5pbXBvcnQge2lzRW1wdHksIG1hcH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEFiYnIgZnJvbSBcIi4vZm9ybS1lbGVtZW50cy9BYmJyXCI7XG5pbXBvcnQgQXJyb3dEb3duIGZyb20gXCIuLi9pY29ucy9BcnJvd0Rvd25cIjtcblxuY29uc3QgQ291bnRyeVNlbGVjdGlvbiA9ICh7aW5wdXQsIGhhbmRsZU9uQ2hhbmdlLCBjb3VudHJpZXMsIGlzU2hpcHBpbmd9KSA9PiB7XG5cbiAgICBjb25zdCB7Y291bnRyeSwgZXJyb3JzfSA9IGlucHV0IHx8IHt9O1xuXG4gICAgY29uc3QgaW5wdXRJZCA9IGBjb3VudHJ5LSR7aXNTaGlwcGluZyA/ICdzaGlwcGluZycgOiAnYmlsbGluZyd9YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIiBodG1sRm9yPXtpbnB1dElkfT5cbiAgICAgICAgICAgICAgICBDb3VudHJ5XG4gICAgICAgICAgICAgICAgPEFiYnIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGJvcmRlci1ub25lXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGJnLW9wYWNpdHktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWdyYXktNTAwIGFwcGVhcmFuY2Utbm9uZSBpbmxpbmUtYmxvY2sgcHktMyBwbC0zIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpbnB1dElkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIGNvdW50cnkuLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgeyFpc0VtcHR5KGNvdW50cmllcykgJiZcbiAgICAgICAgICAgICAgICAgICAgbWFwKGNvdW50cmllcywgKGNvdW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjb3VudHJ5Py5jb3VudHJ5Q29kZX0gZGF0YS1jb3VudHJ5Y29kZT17Y291bnRyeT8uY291bnRyeUNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5Py5jb3VudHJ5Q29kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnk/LmNvdW50cnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXItMSB0ZXh0LWdyYXktNTAwXCIgc3R5bGU9e3t0b3A6ICcyNSUnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd24gd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnRcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXJyb3IgZXJyb3JzPXtlcnJvcnN9IGZpZWxkTmFtZT17J2NvdW50cnknfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWxlY3Rpb247XG4iLCJjb25zdCBFcnJvciA9ICggeyBlcnJvcnMsIGZpZWxkTmFtZSB9ICkgPT4ge1xuXG5cdHJldHVybihcblx0XHRlcnJvcnMgJiYgKCBlcnJvcnMuaGFzT3duUHJvcGVydHkoIGZpZWxkTmFtZSApICkgPyAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9jayB0ZXh0LXJlZC01MDBcIj57IGVycm9yc1tmaWVsZE5hbWVdIH08L2Rpdj5cblx0XHQpIDogJydcblx0KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iLCJjb25zdCBPcmRlclN1Y2Nlc3MgPSAoIHByb3BzICkgPT4ge1xuXG5cdGNvbnN0IHsgcmVzcG9uc2UgfSA9IHByb3BzO1xuXG5cdGlmICggISByZXNwb25zZSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmNoZWNrb3V0O1xuXG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2VEYXRhLnJlZGlyZWN0O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdHsgJ3N1Y2Nlc3MnID09PSByZXNwb25zZURhdGEucmVzdWx0ID8gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMj5PcmRlciBubzogeyByZXNwb25zZURhdGEub3JkZXIub3JkZXJOdW1iZXIgfSA8L2gyPlxuXHRcdFx0XHRcdDxwPlN0YXR1cyA6IHsgcmVzcG9uc2VEYXRhLm9yZGVyLnN0YXR1cyB9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk6ICcnfVxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1Y2Nlc3M7XG4iLCJpbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcblxuY29uc3QgUGF5bWVudE1vZGVzID0gKCB7IGlucHV0LCBoYW5kbGVPbkNoYW5nZSB9ICkgPT4ge1xuXG5cdGNvbnN0IHsgZXJyb3JzLCBwYXltZW50TWV0aG9kIH0gPSBpbnB1dCB8fCB7fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG5cdFx0XHQ8RXJyb3IgZXJyb3JzPXsgZXJyb3JzIH0gZmllbGROYW1lPXsgJ3BheW1lbnRNZXRob2QnIH0vPlxuXHRcdFx0ey8qRGlyZWN0IGJhbmsgdHJhbnNmZXJzKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgd29vLW5leHQtcGF5bWVudC1pbnB1dC1jb250YWluZXIgbXQtMlwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17IGhhbmRsZU9uQ2hhbmdlIH0gdmFsdWU9XCJiYWNzXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dCBtci0zXCIgbmFtZT1cInBheW1lbnRNZXRob2RcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXsnYmFjcycgPT09IHBheW1lbnRNZXRob2R9Lz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1wYXltZW50LWNvbnRlbnRcIj5EaXJlY3QgQmFuayBUcmFuc2Zlcjwvc3Bhbj5cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0ey8qUGF5IHdpdGggUGF5cGFsKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgd29vLW5leHQtcGF5bWVudC1pbnB1dC1jb250YWluZXIgbXQtMlwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17IGhhbmRsZU9uQ2hhbmdlIH0gdmFsdWU9XCJwYXlwYWxcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0IG1yLTNcIiBuYW1lPVwicGF5bWVudE1ldGhvZFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9eydwYXlwYWwnID09PSBwYXltZW50TWV0aG9kfS8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid29vLW5leHQtcGF5bWVudC1jb250ZW50XCI+UGF5IHdpdGggUGF5cGFsPC9zcGFuPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LypDaGVjayBQYXltZW50cyovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIHdvby1uZXh0LXBheW1lbnQtaW5wdXQtY29udGFpbmVyIG10LTJcIj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cblx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9eyBoYW5kbGVPbkNoYW5nZSB9IHZhbHVlPVwiY2hlcXVlXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dCBtci0zXCIgbmFtZT1cInBheW1lbnRNZXRob2RcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXsnY2hlcXVlJyA9PT0gcGF5bWVudE1ldGhvZH0vPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndvby1uZXh0LXBheW1lbnQtY29udGVudFwiPkNoZWNrIFBheW1lbnRzPC9zcGFuPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LypQYXkgd2l0aCBTdHJpcGUqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayB3b28tbmV4dC1wYXltZW50LWlucHV0LWNvbnRhaW5lciBtdC0yXCI+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXsgaGFuZGxlT25DaGFuZ2UgfSB2YWx1ZT1cImNvZFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXQgbXItM1wiIG5hbWU9XCJwYXltZW50TWV0aG9kXCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17J2NvZCcgPT09IHBheW1lbnRNZXRob2R9Lz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1wYXltZW50LWNvbnRlbnRcIj5DYXNoIG9uIERlbGl2ZXJ5PC9zcGFuPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgd29vLW5leHQtcGF5bWVudC1pbnB1dC1jb250YWluZXIgbXQtMlwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17IGhhbmRsZU9uQ2hhbmdlIH0gdmFsdWU9XCJqY2NwYXltZW50Z2F0ZXdheXJlZGlyZWN0XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dCBtci0zXCIgbmFtZT1cInBheW1lbnRNZXRob2RcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXsnamNjcGF5bWVudGdhdGV3YXlyZWRpcmVjdCcgPT09IHBheW1lbnRNZXRob2R9Lz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1wYXltZW50LWNvbnRlbnRcIj5KQ0M8L3NwYW4+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayB3b28tbmV4dC1wYXltZW50LWlucHV0LWNvbnRhaW5lciBtdC0yXCI+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXsgaGFuZGxlT25DaGFuZ2UgfSB2YWx1ZT1cImNjYXZlbnVlXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dCBtci0zXCIgbmFtZT1cInBheW1lbnRNZXRob2RcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXsnY2NhdmVudWUnID09PSBwYXltZW50TWV0aG9kfS8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid29vLW5leHQtcGF5bWVudC1jb250ZW50XCI+Q0MgQXZlbnVlPC9zcGFuPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LypcdFBheW1lbnQgSW5zdHJ1Y3Rpb25zKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvby1uZXh0LWNoZWNrb3V0LXBheW1lbnQtaW5zdHJ1Y3Rpb25zIG10LTJcIj5cblx0XHRcdFx0UGxlYXNlIHNlbmQgYSBjaGVjayB0byBTdG9yZSBOYW1lLCBTdG9yZSBTdHJlZXQsIFN0b3JlIFRvd24sIFN0b3JlIFN0YXRlIC8gQ291bnR5LCBTdG9yZSBQb3N0Y29kZS5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudE1vZGVzO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7bWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgQWJiciBmcm9tIFwiLi9mb3JtLWVsZW1lbnRzL0FiYnJcIjtcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yJztcblxuY29uc3QgU3RhdGVTZWxlY3Rpb24gPSAoe2hhbmRsZU9uQ2hhbmdlLCBpbnB1dCwgc3RhdGVzLCBpc0ZldGNoaW5nU3RhdGVzLCBpc1NoaXBwaW5nfSkgPT4ge1xuXG4gICAgY29uc3Qge3N0YXRlLCBlcnJvcnN9ID0gaW5wdXQgfHwge307XG5cbiAgICBjb25zdCBpbnB1dElkID0gYHN0YXRlLSR7aXNTaGlwcGluZyA/ICdzaGlwcGluZycgOiAnYmlsbGluZyd9YDtcblxuICAgIGlmIChpc0ZldGNoaW5nU3RhdGVzKSB7XG4gICAgICAgIC8vIFNob3cgbG9hZGluZyBjb21wb25lbnQuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICBTdGF0ZS9Db3VudHlcbiAgICAgICAgICAgICAgICAgICAgPEFiYnIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGJnLWdyYXktMTAwIGJnLW9wYWNpdHktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWdyYXktNTAwIGFwcGVhcmFuY2Utbm9uZSBpbmxpbmUtYmxvY2sgcHktMyBwbC0zIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Mb2FkaW5nLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiIGh0bWxGb3I9e2lucHV0SWR9PlxuICAgICAgICAgICAgICAgIFN0YXRlL0NvdW50eVxuICAgICAgICAgICAgICAgIDxBYmJyIHJlcXVpcmVkLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmdTdGF0ZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JnLWdyYXktMTAwIGJnLW9wYWNpdHktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCB0ZXh0LWdyYXktNTAwIGFwcGVhcmFuY2Utbm9uZSBpbmxpbmUtYmxvY2sgcHktMyBwbC0zIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IHctZnVsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7J29wYWNpdHktNTAnOiBpc0ZldGNoaW5nU3RhdGVzfVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBpZD17aW5wdXRJZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBzdGF0ZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGVzLm1hcCgoc3RhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c3RhdGU/LnN0YXRlQ29kZSA/PyBpbmRleH0gdmFsdWU9e3N0YXRlPy5zdGF0ZU5hbWUgPz8gJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZT8uc3RhdGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXJyb3IgZXJyb3JzPXtlcnJvcnN9IGZpZWxkTmFtZT17J3N0YXRlJ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblN0YXRlU2VsZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVPbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RhdGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaXNGZXRjaGluZ1N0YXRlczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaGlwcGluZzogUHJvcFR5cGVzLmJvb2xcbn1cblxuU3RhdGVTZWxlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZU9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIGlucHV0OiB7fSxcbiAgICBzdGF0ZXM6IFtdLFxuICAgIGlzRmV0Y2hpbmdTdGF0ZXM6IGZhbHNlLFxuICAgIGlzU2hpcHBpbmc6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTdGF0ZVNlbGVjdGlvbik7XG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGVja291dENhcnRJdGVtIGZyb20gXCIuL0NoZWNrb3V0Q2FydEl0ZW1cIjtcblxuY29uc3QgWW91ck9yZGVyID0gKCB7IGNhcnQgfSApID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdHsgY2FydCA/IChcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdHsvKlByb2R1Y3QgTGlzdGluZyovfVxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjaGVja291dC1jYXJ0IHRhYmxlIHRhYmxlLWhvdmVyIHctZnVsbCBtYi0xMFwiPlxuXHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZC1jb250YWluZXIgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWhlYWRpbmctZWxcIiBzY29wZT1cImNvbFwiLz5cblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZGluZy1lbFwiIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWhlYWRpbmctZWxcIiBzY29wZT1cImNvbFwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0eyBjYXJ0LnByb2R1Y3RzLmxlbmd0aCAmJiAoXG5cdFx0XHRcdFx0XHRcdGNhcnQucHJvZHVjdHMubWFwKCBpdGVtID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tvdXRDYXJ0SXRlbSBrZXk9eyBpdGVtLnByb2R1Y3RJZCB9IGl0ZW09eyBpdGVtIH0gLz5cblx0XHRcdFx0XHRcdFx0KSApXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHsvKlRvdGFsKi99XG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNoZWNrb3V0LXRvdGFsIGZvbnQtbm9ybWFsIHRleHQteGxcIj5TdWJ0b3RhbDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jaGVja291dC10b3RhbCBmb250LWJvbGQgdGV4dC14bFwiPnsgY2FydC50b3RhbFByb2R1Y3RzUHJpY2UgfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0ey8qIDx0ciBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIlwiLz5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNoZWNrb3V0LXRvdGFsXCI+VG90YWw8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwid29vLW5leHQtY2hlY2tvdXQtdG90YWxcIj57IGNhcnQudG90YWxQcm9kdWN0c1ByaWNlIH08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj4gKi99XG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHQpIDogJycgfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlvdXJPcmRlcjtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEFiYnIgPSAoe3JlcXVpcmVkfSkgPT4ge1xuICAgIGlmICggIXJlcXVpcmVkICkge1xuICAgIFx0cmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxhYmJyIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiIHN0eWxlPXt7dGV4dERlY29yYXRpb246ICdub25lJ319IHRpdGxlPVwicmVxdWlyZWRcIj4qPC9hYmJyPlxufVxuXG5BYmJyLnByb3BUeXBlcyA9IHtcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuQWJici5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFiYnJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENoZWNrYm94RmllbGQgPSAoeyBoYW5kbGVPbkNoYW5nZSwgY2hlY2tlZCwgbmFtZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCBjb250YWluZXJDbGFzc05hbWVzIH0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWVzfT5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWFkaW5nLTcgdGV4dC1tZCB0ZXh0LWdyYXktNzAwIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCIgaHRtbEZvcj17bmFtZX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlT25DaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnsgbGFiZWwgfHwgJycgfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuQ2hlY2tib3hGaWVsZC5wcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlT25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250YWluZXJDbGFzc05hbWVzOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbkNoZWNrYm94RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZU9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG5hbWU6ICcnLFxuICAgIGxhYmVsOiAnJyxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgZXJyb3JzOiB7fSxcbiAgICBjb250YWluZXJDbGFzc05hbWVzOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEZpZWxkO1xuIiwiaW1wb3J0IEVycm9yIGZyb20gXCIuLi9FcnJvclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBYmJyIGZyb20gXCIuL0FiYnJcIjtcblxuY29uc3QgSW5wdXRGaWVsZCA9ICh7IGhhbmRsZU9uQ2hhbmdlLCBpbnB1dFZhbHVlLCBuYW1lLCB0eXBlLCBsYWJlbCwgZXJyb3JzLCBwbGFjZWhvbGRlciwgcmVxdWlyZWQsIGNvbnRhaW5lckNsYXNzTmFtZXMsIGlzU2hpcHBpbmcgfSkgPT4ge1xuXG4gICAgY29uc3QgaW5wdXRJZCA9IGAke25hbWV9LSR7aXNTaGlwcGluZyA/ICdzaGlwcGluZycgOiAnJ31gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZXN9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIiBodG1sRm9yPXtpbnB1dElkfT5cbiAgICAgICAgICAgICAgICB7IGxhYmVsIHx8ICcnIH1cbiAgICAgICAgICAgICAgICA8QWJiciByZXF1aXJlZD17cmVxdWlyZWR9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZU9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIGJnLW9wYWNpdHktNTAgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOmJnLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktODAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICBpZD17aW5wdXRJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXJyb3IgZXJyb3JzPXsgZXJyb3JzIH0gZmllbGROYW1lPXsgbmFtZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5JbnB1dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVPbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXJyb3JzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb250YWluZXJDbGFzc05hbWVzOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbklucHV0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZU9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBsYWJlbDogJycsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGVycm9yczoge30sXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGNvbnRhaW5lckNsYXNzTmFtZXM6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChbXG5cdHt9LFxuXHQoKSA9PiB7fVxuXSk7XG5cbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciA9ICggcHJvcHMgKSA9PiB7XG5cblx0Y29uc3QgWyBjYXJ0LCBzZXRDYXJ0IF0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXG5cdFx0Ly8gQFRPRE8gV2lsbCBhZGQgb3B0aW9uIHRvIHNob3cgdGhlIGNhcnQgd2l0aCBsb2NhbFN0b3JhZ2UgbGF0ZXIuXG5cdFx0aWYgKCBwcm9jZXNzLmJyb3dzZXIgKSB7XG5cblx0XHRcdGxldCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCAnd29vLW5leHQtY2FydCcgKTtcblx0XHRcdGNhcnREYXRhID0gbnVsbCAhPT0gY2FydERhdGEgPyBKU09OLnBhcnNlKCBjYXJ0RGF0YSApIDogJyc7XG5cdFx0XHRzZXRDYXJ0KCBjYXJ0RGF0YSApO1xuXG5cdFx0fVxuXG5cdH0sIFtdICk7XG5cblx0cmV0dXJuIChcblx0XHQ8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IFsgY2FydCwgc2V0Q2FydCBdIH0+XG5cdFx0XHR7IHByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L0FwcENvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Fycm93RG93bihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGNsYXNzTmFtZT1cImFycm93LWRvd25fc3ZnX19maWxsLWN1cnJlbnQgYXJyb3ctZG93bl9zdmdfX3RleHQtM3hsXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTI0IDI0SDBWMGgyNHYyNHpcIiBmaWxsPVwibm9uZVwiIG9wYWNpdHk9ezAuODd9IC8+XG4gICAgICA8cGF0aCBkPVwiTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNi0xLjQxLTEuNDF6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3dEb3duO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0Nyb3NzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE2cHRcIlxuICAgICAgaGVpZ2h0PVwiMTZwdFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBmaWxsPVwiIzdlN2U3ZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTggMEMzLjU3OCAwIDAgMy41NzggMCA4YzAgNC40MjIgMy41NzggOCA4IDggNC40MjIgMCA4LTMuNTc4IDgtOCAwLTQuNDIyLTMuNTc4LTgtOC04em0wIDE0Ljc1Yy0zLjczIDAtNi43NS0zLjAyLTYuNzUtNi43NVM0LjI3IDEuMjUgOCAxLjI1IDE0Ljc1IDQuMjcgMTQuNzUgOCAxMS43MyAxNC43NSA4IDE0Ljc1em0wIDBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwLjczOCA5Ljg1Mkw4Ljg4MyA4bDEuODU1LTEuODUyYS42MzIuNjMyIDAgMDAwLS44ODYuNjMyLjYzMiAwIDAwLS44ODYgMEw4IDcuMTE3IDYuMTQ4IDUuMjYyYS42MzIuNjMyIDAgMDAtLjg4NiAwIC42MzIuNjMyIDAgMDAwIC44ODZMNy4xMTcgOCA1LjI2MiA5Ljg1MmEuNjMyLjYzMiAwIDAwMCAuODg2Yy4yNDYuMjQyLjY0LjI0Mi44ODYgMEw4IDguODgzbDEuODUyIDEuODU1Yy4yNDYuMjQyLjY0LjI0Mi44ODYgMGEuNjMyLjYzMiAwIDAwMC0uODg2em0wIDBcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDcm9zcztcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTdmdGYWNlYm9vayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMi42MzcgMThoNS44N3YtNi4zOThINi4zOTl2LTIuMTFoMi4xMVY2Ljg1NWEyLjY0IDIuNjQgMCAwMTIuNjM3LTIuNjM2aDIuNjM2djIuMTFoLTIuMTFjLS41ODEgMC0xLjA1NC40NzItMS4wNTQgMS4wNTR2Mi4xMWgzLjA3bC0uMzUxIDIuMTA5aC0yLjcxOVYxOGg0Ljc0NkEyLjY0IDIuNjQgMCAwMDE4IDE1LjM2M1YyLjYzN0EyLjY0IDIuNjQgMCAwMDE1LjM2MyAwSDIuNjM3QTIuNjQgMi42NCAwIDAwMCAyLjYzN3YxMi43MjZBMi42NCAyLjY0IDAgMDAyLjYzNyAxOHpNMS4wNTUgMi42MzdjMC0uODcxLjcxLTEuNTgyIDEuNTgyLTEuNTgyaDEyLjcyNmMuODcxIDAgMS41ODIuNzEgMS41ODIgMS41ODJ2MTIuNzI2YzAgLjg3MS0uNzEgMS41ODItMS41ODIgMS41ODJoLTMuNjkxdi00LjI4OWgyLjU1NWwuNzAzLTQuMjE5aC0zLjI1OFY3LjM4M2gzLjE2NFYzLjE2NGgtMy42OTFhMy42OTYgMy42OTYgMCAwMC0zLjY5MiAzLjY5MXYxLjU4MmgtMi4xMXY0LjIyaDIuMTF2NC4yODhIMi42MzdjLS44NzEgMC0xLjU4Mi0uNzEtMS41ODItMS41ODJ6bTAgMFwiXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ZhY2Vib29rO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0luc3RhZ3JhbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGZpbGw9XCIjZmZmXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMi42MzcgMThoMTIuNzI2QTIuNjQgMi42NCAwIDAwMTggMTUuMzYzVjIuNjM3QTIuNjQgMi42NCAwIDAwMTUuMzYzIDBIMi42MzdBMi42NCAyLjY0IDAgMDAwIDIuNjM3djEyLjcyNkEyLjY0IDIuNjQgMCAwMDIuNjM3IDE4ek0xLjA1NSAyLjYzN2MwLS44NzEuNzEtMS41ODIgMS41ODItMS41ODJoMTIuNzI2Yy44NzEgMCAxLjU4Mi43MSAxLjU4MiAxLjU4MnYxMi43MjZjMCAuODcxLS43MSAxLjU4Mi0xLjU4MiAxLjU4MkgyLjYzN2MtLjg3MSAwLTEuNTgyLS43MS0xLjU4Mi0xLjU4MnptMCAwXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk05IDEzLjc0NkE0Ljc1MSA0Ljc1MSAwIDAwMTMuNzQ2IDkgNC43NTEgNC43NTEgMCAwMDkgNC4yNTQgNC43NTEgNC43NTEgMCAwMDQuMjU0IDkgNC43NTEgNC43NTEgMCAwMDkgMTMuNzQ2ek05IDUuMzFBMy42OTYgMy42OTYgMCAwMTEyLjY5MSA5IDMuNjk2IDMuNjk2IDAgMDE5IDEyLjY5MSAzLjY5NiAzLjY5NiAwIDAxNS4zMDkgOSAzLjY5NiAzLjY5NiAwIDAxOSA1LjMwOXptMCAwTTE0LjI3MyA1LjMwOWMuODcyIDAgMS41ODItLjcxMSAxLjU4Mi0xLjU4MiAwLS44NzItLjcxLTEuNTgyLTEuNTgyLTEuNTgyLS44NyAwLTEuNTgyLjcxLTEuNTgyIDEuNTgyIDAgLjg3LjcxMSAxLjU4MiAxLjU4MiAxLjU4MnptMC0yLjExYS41My41MyAwIDAxLjUyOC41MjguNTMuNTMgMCAwMS0uNTI4LjUyNy41My41MyAwIDAxLS41MjctLjUyNy41My41MyAwIDAxLjUyNy0uNTI4em0wIDBcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdJbnN0YWdyYW07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTggMS45NjljLTEuMTMzLjA1LTEuMTEuMDQ3LTEuMjM0LjA1OEwxNy40MzQuMTFzLTIuMDkuNzc0LTIuNjIyLjkxQzEzLjQxOC0uMjMzIDExLjM0OC0uMjg4IDkuODY0LjYyMiA4LjY1MyAxLjM2NyA4IDIuNjQ4IDguMjIgNC4xNDUgNS44NTkgMy44MTYgMy44NyAyLjY5NSAyLjMuODEzTDEuODA1LjIxNWwtLjM3MS42OGE0LjE0MiA0LjE0MiAwIDAwLS40NDIgMi43NzNjLjA3OC4zNzkuMjA3Ljc0Mi4zODcgMS4wODJsLS40MjYtLjE2NC0uMDUuNzFjLS4wNTEuNzI0LjE5IDEuNTY3LjY0NCAyLjI1OS4xMjkuMTk1LjI5My40MDYuNS42MTdsLS4yMTktLjAzMS4yNy44MTZhMy45NTcgMy45NTcgMCAwMDIuMDM5IDIuMzZjLS45NTMuNDAyLTEuNzE5LjY2LTIuOTggMS4wNzRMMCAxMi43NzNsMS4wNjYuNTgyYy40MDcuMjIzIDEuODQ0Ljk2NSAzLjI2MiAxLjE4OCAzLjE1Ni40OTYgNi43MTEuMDkgOS4xMDItMi4wNjMgMi4wMTUtMS44MTYgMi42NzUtNC4zOTQgMi41MzktNy4wODItLjAyLS40MDYuMDktLjc5My4zMTItMS4wOTMuNDUtLjU5NCAxLjcxNS0yLjMzMiAxLjcxOS0yLjMzNnptLTIuNTU5IDEuNzA3YTIuNzEyIDIuNzEyIDAgMDAtLjUyMyAxLjc3N2MuMTM3IDIuNzA3LS42MDIgNC44MDktMi4xOTEgNi4yNDYtMS44NjQgMS42NzItNC44NjQgMi4zMzItOC4yMzUgMS44MDEtLjYxLS4wOTQtMS4yNDItLjMwOS0xLjc2Mi0uNTIzIDEuMDYtLjM2NCAxLjg3NS0uNjg4IDMuMTk2LTEuMzEzbDEuODQtLjg3MS0yLjAzNi0uMTI5Yy0uOTcyLS4wNjItMS43ODUtLjUzNS0yLjI4LTEuMzA1LjI2NS0uMDExLjUxOS0uMDU0Ljc3My0uMTI5bDEuOTQxLS41MzktMS45NTctLjQ4YTIuOTE1IDIuOTE1IDAgMDEtMi4xNjQtMi4wODZjLjE5NS4wNS40MjIuMDkuNzkzLjEyNWwxLjgwOS4xOEwzLjIxIDUuMzEzYy0xLjAzNS0uODEtMS40NS0yLjAyLTEuMTQ1LTMuMTg0IDMuMjI3IDMuMzQ4IDcuMDEyIDMuMDk0IDcuMzk1IDMuMTgzLS4wODYtLjgxNi0uMDg2LS44MTYtLjExLS44OTQtLjQ4OC0xLjcyNy41ODMtMi42MDIgMS4wNjctMi44OTggMS4wMDgtLjYyMiAyLjYwNS0uNzE1IDMuNzE1LjMwOGEuOTUuOTUgMCAwMC44NjcuMjNjLjI3LS4wNjYuNDk2LS4xNC43MS0uMjE4bC0uNDUyIDEuM2guNTgyYy0uMTEuMTUtLjI0Mi4zMjUtLjM5OS41MzZ6bTAgMFwiXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnWW91dHViZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIGZpbGw9XCIjZmZmXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMi42MzcgMTMuNzFoMTIuNzI2QTIuNjQgMi42NCAwIDAwMTggMTEuMDc1VjIuNjM3QTIuNjQgMi42NCAwIDAwMTUuMzYzIDBIMi42MzdBMi42NCAyLjY0IDAgMDAwIDIuNjM3djguNDM3YTIuNjQgMi42NCAwIDAwMi42MzcgMi42Mzd6TTEuMDU1IDIuNjM4YzAtLjg3MS43MS0xLjU4MiAxLjU4Mi0xLjU4MmgxMi43MjZjLjg3MSAwIDEuNTgyLjcxIDEuNTgyIDEuNTgydjguNDM3YzAgLjg3MS0uNzEgMS41ODItMS41ODIgMS41ODJIMi42MzdjLS44NzEgMC0xLjU4Mi0uNzEtMS41ODItMS41ODJ6bTAgMFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNi4zNjMgMy4zMjR2Ny4xNjhsNi4zNDgtMy42NDR6bTEuMDU1IDEuNzlsMy4xNDQgMS43NS0zLjE0NCAxLjgwNHptMCAwXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnWW91dHViZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dEb3duIH0gZnJvbSAnLi9BcnJvd0Rvd24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIENyb3NzIH0gZnJvbSAnLi9Dcm9zcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2sgfSBmcm9tICcuL0ZhY2Vib29rJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnN0YWdyYW0gfSBmcm9tICcuL0luc3RhZ3JhbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWW91dHViZSB9IGZyb20gJy4vWW91dHViZSciLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuXG4vKipcbiAqIEV4dHJhY3RzIGFuZCByZXR1cm5zIGZsb2F0IHZhbHVlIGZyb20gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTdHJpbmdcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZsb2F0VmFsID0gKCBzdHJpbmcgKSA9PiB7XG5cblx0bGV0IGZsb2F0VmFsdWUgPSBzdHJpbmcubWF0Y2goIC9bKy1dP1xcZCsoXFwuXFxkKyk/L2cgKVswXTtcblx0cmV0dXJuICggbnVsbCAhPT0gZmxvYXRWYWx1ZSApID8gcGFyc2VGbG9hdCggcGFyc2VGbG9hdCggZmxvYXRWYWx1ZSApLnRvRml4ZWQoIDIgKSApIDogJyc7XG5cbn07XG5cbi8qKlxuICogQWRkIGZpcnN0IHByb2R1Y3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgUHJvZHVjdFxuICogQHJldHVybiB7e3RvdGFsUHJvZHVjdHNDb3VudDogbnVtYmVyLCB0b3RhbFByb2R1Y3RzUHJpY2U6IGFueSwgcHJvZHVjdHM6IEFycmF5fX1cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpcnN0UHJvZHVjdCA9ICggcHJvZHVjdCApID0+IHtcblxuXHRsZXQgcHJvZHVjdFByaWNlID0gZ2V0RmxvYXRWYWwoIHByb2R1Y3QucHJpY2UgKTtcblxuXHRsZXQgbmV3Q2FydCA9IHtcblx0XHRwcm9kdWN0czogW10sXG5cdFx0dG90YWxQcm9kdWN0c0NvdW50OiAxLFxuXHRcdHRvdGFsUHJvZHVjdHNQcmljZTogcHJvZHVjdFByaWNlXG5cdH07XG5cblx0Y29uc3QgbmV3UHJvZHVjdCA9IGNyZWF0ZU5ld1Byb2R1Y3QoIHByb2R1Y3QsIHByb2R1Y3RQcmljZSwgMSApO1xuXHRuZXdDYXJ0LnByb2R1Y3RzLnB1c2goIG5ld1Byb2R1Y3QgKTtcblxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ3dvby1uZXh0LWNhcnQnLCBKU09OLnN0cmluZ2lmeSggbmV3Q2FydCApICk7XG5cblx0cmV0dXJuIG5ld0NhcnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBwcm9kdWN0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBQcm9kdWN0XG4gKiBAcGFyYW0ge0ludGVnZXJ9IHByb2R1Y3RQcmljZSBQcm9kdWN0IFByaWNlXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHF0eSBRdWFudGl0eVxuICogQHJldHVybiB7e2ltYWdlOiAqLCBwcm9kdWN0SWQ6ICosIHRvdGFsUHJpY2U6IG51bWJlciwgcHJpY2U6ICosIHF0eTogKiwgbmFtZTogKn19XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdQcm9kdWN0ID0gKCBwcm9kdWN0LCBwcm9kdWN0UHJpY2UsIHF0eSApID0+IHtcblxuXHRyZXR1cm4gIHtcblx0XHRwcm9kdWN0SWQ6IHByb2R1Y3QucHJvZHVjdElkLFxuXHRcdGltYWdlOiBwcm9kdWN0LmltYWdlLFxuXHRcdG5hbWU6IHByb2R1Y3QubmFtZSxcblx0XHRwcmljZTogcHJvZHVjdFByaWNlLFxuXHRcdHF0eSxcblx0XHR0b3RhbFByaWNlOiBwYXJzZUZsb2F0KCAoIHByb2R1Y3RQcmljZSAqIHF0eSApLnRvRml4ZWQoIDIgKSApXG5cdH07XG5cbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZXhpc3RpbmcgY2FydCB3aXRoIG5ldyBpdGVtLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleGlzdGluZ0NhcnQgRXhpc3RpbmcgQ2FydC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFByb2R1Y3QuXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHF0eVRvQmVBZGRlZCBRdWFudGl0eS5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gbmV3UXR5IE5ldyBRdHkgdG8gYmUgdXBkYXRlZC5cbiAqIEByZXR1cm4ge3t0b3RhbFByb2R1Y3RzQ291bnQ6ICosIHRvdGFsUHJvZHVjdHNQcmljZTogKiwgcHJvZHVjdHM6ICp9fVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydCA9ICggZXhpc3RpbmdDYXJ0LCBwcm9kdWN0LCBxdHlUb0JlQWRkZWQsIG5ld1F0eSA9IGZhbHNlICApID0+IHtcblxuXHRjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBnZXRVcGRhdGVkUHJvZHVjdHMoIGV4aXN0aW5nQ2FydC5wcm9kdWN0cyAsIHByb2R1Y3QsIHF0eVRvQmVBZGRlZCwgbmV3UXR5ICk7XG5cblx0Y29uc3QgYWRkUHJpY2UgPSAodG90YWwsIGl0ZW0pID0+IHtcblx0XHR0b3RhbC50b3RhbFByaWNlICs9IGl0ZW0udG90YWxQcmljZTtcblx0XHR0b3RhbC5xdHkgKz0gaXRlbS5xdHk7XG5cblx0XHRyZXR1cm4gdG90YWw7XG5cdH07XG5cblx0Ly8gTG9vcCB0aHJvdWdoIHRoZSB1cGRhdGVkIHByb2R1Y3QgYXJyYXkgYW5kIGFkZCB0aGUgdG90YWxQcmljZSBvZiBlYWNoIGl0ZW0gdG8gZ2V0IHRoZSB0b3RhbFByaWNlXG5cdGxldCB0b3RhbCA9IHVwZGF0ZWRQcm9kdWN0cy5yZWR1Y2UoIGFkZFByaWNlLCB7IHRvdGFsUHJpY2U6IDAsIHF0eTogMCB9ICk7XG5cblx0Y29uc3QgdXBkYXRlZENhcnQgPSB7XG5cdFx0cHJvZHVjdHM6IHVwZGF0ZWRQcm9kdWN0cyxcblx0XHR0b3RhbFByb2R1Y3RzQ291bnQ6IHBhcnNlSW50KCB0b3RhbC5xdHkgKSxcblx0XHR0b3RhbFByb2R1Y3RzUHJpY2U6IHBhcnNlRmxvYXQoIHRvdGFsLnRvdGFsUHJpY2UgKVxuXHR9O1xuXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnd29vLW5leHQtY2FydCcsIEpTT04uc3RyaW5naWZ5KCB1cGRhdGVkQ2FydCApICk7XG5cblx0cmV0dXJuIHVwZGF0ZWRDYXJ0O1xufTtcblxuLyoqXG4gKiBHZXQgdXBkYXRlZCBwcm9kdWN0cyBhcnJheVxuICogVXBkYXRlIHRoZSBwcm9kdWN0IGlmIGl0IGV4aXN0cyBlbHNlLFxuICogYWRkIHRoZSBuZXcgcHJvZHVjdCB0byBleGlzdGluZyBjYXJ0LFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0IEV4aXN0aW5nIHByb2R1Y3QgaW4gY2FydFxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgUHJvZHVjdFxuICogQHBhcmFtIHtJbnRlZ2VyfSBxdHlUb0JlQWRkZWQgUXVhbnRpdHlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gbmV3UXR5IE5ldyBxdHkgb2YgdGhlIHByb2R1Y3QgKG9wdGlvbmFsKVxuICogQHJldHVybiB7KltdfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VXBkYXRlZFByb2R1Y3RzID0gKCBleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0LCBxdHlUb0JlQWRkZWQsIG5ld1F0eSA9IGZhbHNlICkgPT4ge1xuXG5cdC8vIENoZWNrIGlmIHRoZSBwcm9kdWN0IGFscmVhZHkgZXhpdHMgaW4gdGhlIGNhcnQuXG5cdGNvbnN0IHByb2R1Y3RFeGl0c0luZGV4ID0gaXNQcm9kdWN0SW5DYXJ0KCBleGlzdGluZ1Byb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0LnByb2R1Y3RJZCApO1xuXG5cdC8vIElmIHByb2R1Y3QgZXhpdHMgKCBpbmRleCBvZiB0aGF0IHByb2R1Y3QgZm91bmQgaW4gdGhlIGFycmF5ICksIHVwZGF0ZSB0aGUgcHJvZHVjdCBxdWFudGl0eSBhbmQgdG90YWxQcmljZVxuXHRpZiAoIC0xIDwgcHJvZHVjdEV4aXRzSW5kZXggKSB7XG5cdFx0bGV0IHVwZGF0ZWRQcm9kdWN0cyA9IGV4aXN0aW5nUHJvZHVjdHNJbkNhcnQ7XG5cdFx0bGV0IHVwZGF0ZWRQcm9kdWN0ID0gdXBkYXRlZFByb2R1Y3RzWyBwcm9kdWN0RXhpdHNJbmRleCBdO1xuXG5cdFx0Ly8gSWYgaGF2ZSBuZXcgcXR5IG9mIHRoZSBwcm9kdWN0IGF2YWlsYWJsZSwgc2V0IHRoYXQgZWxzZSBhZGQgdGhlIHF0eVRvQmVBZGRlZFxuXHRcdHVwZGF0ZWRQcm9kdWN0LnF0eSA9ICggbmV3UXR5ICkgPyBwYXJzZUludCggbmV3UXR5ICkgOiBwYXJzZUludCggdXBkYXRlZFByb2R1Y3QucXR5ICsgcXR5VG9CZUFkZGVkICk7XG5cdFx0dXBkYXRlZFByb2R1Y3QudG90YWxQcmljZSA9IHBhcnNlRmxvYXQoICggdXBkYXRlZFByb2R1Y3QucHJpY2UgKiB1cGRhdGVkUHJvZHVjdC5xdHkgKS50b0ZpeGVkKCAyICkgKTtcblxuXHRcdHJldHVybiAgdXBkYXRlZFByb2R1Y3RzO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgcHJvZHVjdCBub3QgZm91bmQgcHVzaCB0aGUgbmV3IHByb2R1Y3QgdG8gdGhlIGV4aXN0aW5nIHByb2R1Y3QgYXJyYXkuXG5cdFx0bGV0IHByb2R1Y3RQcmljZSA9IGdldEZsb2F0VmFsKCBwcm9kdWN0LnByaWNlICk7XG5cdFx0Y29uc3QgbmV3UHJvZHVjdCA9IGNyZWF0ZU5ld1Byb2R1Y3QoIHByb2R1Y3QsIHByb2R1Y3RQcmljZSwgcXR5VG9CZUFkZGVkICk7XG5cdFx0ZXhpc3RpbmdQcm9kdWN0c0luQ2FydC5wdXNoKCBuZXdQcm9kdWN0ICk7XG5cblx0XHRyZXR1cm4gZXhpc3RpbmdQcm9kdWN0c0luQ2FydDtcblx0fVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGluZGV4IG9mIHRoZSBwcm9kdWN0IGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhpc3RpbmdQcm9kdWN0c0luQ2FydCBFeGlzdGluZyBQcm9kdWN0cy5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gcHJvZHVjdElkIFByb2R1Y3QgaWQuXG4gKiBAcmV0dXJuIHtudW1iZXIgfCAqfSBJbmRleCBSZXR1cm5zIC0xIGlmIHByb2R1Y3QgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGFycmF5LCBpbmRleCBudW1iZXIgb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IGlzUHJvZHVjdEluQ2FydCA9ICggZXhpc3RpbmdQcm9kdWN0c0luQ2FydCwgcHJvZHVjdElkICkgPT4ge1xuXG5cdGNvbnN0IHJldHVybkl0ZW1UaGF0RXhpdHMgPSAoIGl0ZW0sIGluZGV4ICkgPT4ge1xuXHRcdGlmICggcHJvZHVjdElkID09PSBpdGVtLnByb2R1Y3RJZCApIHtcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH1cblx0fTtcblxuXHQvLyBUaGlzIG5ldyBhcnJheSB3aWxsIG9ubHkgY29udGFpbiB0aGUgcHJvZHVjdCB3aGljaCBpcyBtYXRjaGVkLlxuXHRjb25zdCBuZXdBcnJheSA9IGV4aXN0aW5nUHJvZHVjdHNJbkNhcnQuZmlsdGVyKCByZXR1cm5JdGVtVGhhdEV4aXRzICk7XG5cblx0cmV0dXJuIGV4aXN0aW5nUHJvZHVjdHNJbkNhcnQuaW5kZXhPZiggbmV3QXJyYXlbMF0gKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIEl0ZW0gZnJvbSB0aGUgY2FydC5cbiAqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHByb2R1Y3RJZCBQcm9kdWN0IElkLlxuICogQHJldHVybiB7YW55IHwgc3RyaW5nfSBVcGRhdGVkIGNhcnRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQ2FydCA9ICggcHJvZHVjdElkICkgPT4ge1xuXG5cdGxldCBleGlzdGluZ0NhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3dvby1uZXh0LWNhcnQnICk7XG5cdGV4aXN0aW5nQ2FydCA9IEpTT04ucGFyc2UoIGV4aXN0aW5nQ2FydCApO1xuXG5cdC8vIElmIHRoZXJlIGlzIG9ubHkgb25lIGl0ZW0gaW4gdGhlIGNhcnQsIGRlbGV0ZSB0aGUgY2FydC5cblx0aWYgKCAxID09PSBleGlzdGluZ0NhcnQucHJvZHVjdHMubGVuZ3RoICkge1xuXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oICd3b28tbmV4dC1jYXJ0JyApO1xuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHQvLyBDaGVjayBpZiB0aGUgcHJvZHVjdCBhbHJlYWR5IGV4aXRzIGluIHRoZSBjYXJ0LlxuXHRjb25zdCBwcm9kdWN0RXhpdHNJbmRleCA9IGlzUHJvZHVjdEluQ2FydCggZXhpc3RpbmdDYXJ0LnByb2R1Y3RzLCBwcm9kdWN0SWQgKTtcblxuXHQvLyBJZiBwcm9kdWN0IHRvIGJlIHJlbW92ZWQgZXhpdHNcblx0aWYgKCAtMSA8IHByb2R1Y3RFeGl0c0luZGV4ICkge1xuXG5cdFx0Y29uc3QgcHJvZHVjdFRvYmVSZW1vdmVkID0gZXhpc3RpbmdDYXJ0LnByb2R1Y3RzWyBwcm9kdWN0RXhpdHNJbmRleCBdO1xuXHRcdGNvbnN0IHF0eVRvQmVSZW1vdmVkRnJvbVRvdGFsID0gcHJvZHVjdFRvYmVSZW1vdmVkLnF0eTtcblx0XHRjb25zdCBwcmljZVRvQmVEZWR1Y3RlZEZyb21Ub3RhbCA9IHByb2R1Y3RUb2JlUmVtb3ZlZC50b3RhbFByaWNlO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoYXQgcHJvZHVjdCBmcm9tIHRoZSBhcnJheSBhbmQgdXBkYXRlIHRoZSB0b3RhbCBwcmljZSBhbmQgdG90YWwgcXVhbnRpdHkgb2YgdGhlIGNhcnRcblx0XHRsZXQgdXBkYXRlZENhcnQgPSBleGlzdGluZ0NhcnQ7XG5cdFx0dXBkYXRlZENhcnQucHJvZHVjdHMuc3BsaWNlKCBwcm9kdWN0RXhpdHNJbmRleCwgMSApO1xuXHRcdHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCA9IHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCAtIHF0eVRvQmVSZW1vdmVkRnJvbVRvdGFsO1xuXHRcdHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSA9IHVwZGF0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSAtIHByaWNlVG9CZURlZHVjdGVkRnJvbVRvdGFsO1xuXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oICd3b28tbmV4dC1jYXJ0JywgSlNPTi5zdHJpbmdpZnkoIHVwZGF0ZWRDYXJ0ICkgKTtcblx0XHRyZXR1cm4gdXBkYXRlZENhcnQ7XG5cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZXhpc3RpbmdDYXJ0O1xuXHR9XG59O1xuXG4vKipcbiAqIFJldHVybnMgY2FydCBkYXRhIGluIHRoZSByZXF1aXJlZCBmb3JtYXQuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSBDYXJ0IGRhdGFcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZvcm1hdHRlZENhcnQgPSAoIGRhdGEgKSA9PiB7XG5cblx0bGV0IGZvcm1hdHRlZENhcnQgPSBudWxsO1xuXG5cdGlmICggdW5kZWZpbmVkID09PSBkYXRhIHx8ICEgZGF0YS5jYXJ0LmNvbnRlbnRzLm5vZGVzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gZm9ybWF0dGVkQ2FydDtcblx0fVxuXG5cdGNvbnN0IGdpdmVuUHJvZHVjdHMgPSBkYXRhLmNhcnQuY29udGVudHMubm9kZXM7XG5cblx0Ly8gQ3JlYXRlIGFuIGVtcHR5IG9iamVjdC5cblx0Zm9ybWF0dGVkQ2FydCA9IHt9O1xuXHRmb3JtYXR0ZWRDYXJ0LnByb2R1Y3RzID0gW107XG5cdGxldCB0b3RhbFByb2R1Y3RzQ291bnQgPSAwO1xuXG5cdGZvciggbGV0IGkgPSAwOyBpIDwgZ2l2ZW5Qcm9kdWN0cy5sZW5ndGg7IGkrKyAgKSB7XG5cdFx0Y29uc3QgZ2l2ZW5Qcm9kdWN0ID0gZ2l2ZW5Qcm9kdWN0cz8uWyBpIF0/LnByb2R1Y3Q/Lm5vZGU7XG5cdFx0Y29uc3QgcHJvZHVjdCA9IHt9O1xuXHRcdGNvbnN0IHRvdGFsID0gZ2V0RmxvYXRWYWwoIGdpdmVuUHJvZHVjdHNbIGkgXS50b3RhbCApO1xuXG5cdFx0cHJvZHVjdC5wcm9kdWN0SWQgPSBnaXZlblByb2R1Y3Q/LnByb2R1Y3RJZCA/PyAnJztcblx0XHRwcm9kdWN0LmNhcnRLZXkgPSBnaXZlblByb2R1Y3RzPy5bIGkgXT8ua2V5ID8/ICcnO1xuXHRcdHByb2R1Y3QubmFtZSA9IGdpdmVuUHJvZHVjdD8ubmFtZSA/PyAnJztcblx0XHRwcm9kdWN0LnF0eSA9IGdpdmVuUHJvZHVjdHM/LlsgaSBdPy5xdWFudGl0eTtcblx0XHRwcm9kdWN0LnByaWNlID0gdG90YWwgLyBwcm9kdWN0Py5xdHk7XG5cdFx0cHJvZHVjdC50b3RhbFByaWNlID0gZ2l2ZW5Qcm9kdWN0cz8uWyBpIF0/LnRvdGFsID8/ICcnO1xuXHRcdHByb2R1Y3QuaW1hZ2UgPSB7XG5cdFx0XHRzb3VyY2VVcmw6IGdpdmVuUHJvZHVjdD8uaW1hZ2U/LnNvdXJjZVVybCA/PyAnJyxcblx0XHRcdHNyY1NldDogZ2l2ZW5Qcm9kdWN0Py5pbWFnZT8uc3JjU2V0ID8/ICcnLFxuXHRcdFx0dGl0bGU6IGdpdmVuUHJvZHVjdD8uaW1hZ2U/LnRpdGxlID8/ICcnLFxuXHRcdFx0YWx0VGV4dDogZ2l2ZW5Qcm9kdWN0Py5pbWFnZT8uYWx0VGV4dCA/PyAnJ1xuXHRcdH07XG5cblx0XHR0b3RhbFByb2R1Y3RzQ291bnQgKz0gZ2l2ZW5Qcm9kdWN0cz8uWyBpIF0/LnF1YW50aXR5O1xuXG5cdFx0Ly8gUHVzaCBlYWNoIGl0ZW0gaW50byB0aGUgcHJvZHVjdHMgYXJyYXkuXG5cdFx0Zm9ybWF0dGVkQ2FydC5wcm9kdWN0cy5wdXNoKCBwcm9kdWN0ICk7XG5cdH1cblxuXHRmb3JtYXR0ZWRDYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCA9IHRvdGFsUHJvZHVjdHNDb3VudDtcblx0Zm9ybWF0dGVkQ2FydC50b3RhbFByb2R1Y3RzUHJpY2UgPSBkYXRhPy5jYXJ0Py50b3RhbCA/PyAnJztcblxuXHRyZXR1cm4gZm9ybWF0dGVkQ2FydDtcblxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoZWNrb3V0RGF0YSA9ICggb3JkZXIgKSA9PiB7XG5cblx0Ly8gU2V0IHRoZSBiaWxsaW5nIERhdGEgdG8gc2hpcHBpbmcsIGlmIGFwcGxpY2FibGUuXG5cdGNvbnN0IGJpbGxpbmdEYXRhID0gb3JkZXIuYmlsbGluZ0RpZmZlcmVudFRoYW5TaGlwcGluZyA/IG9yZGVyLmJpbGxpbmcgOiBvcmRlci5zaGlwcGluZztcblxuXHRjb25zdCBjaGVja291dERhdGEgPSB7XG5cdFx0Y2xpZW50TXV0YXRpb25JZDogdjQoKSxcblx0XHRzaGlwcGluZzoge1xuXHRcdFx0Zmlyc3ROYW1lOiBvcmRlcj8uc2hpcHBpbmc/LmZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBvcmRlcj8uc2hpcHBpbmc/Lmxhc3ROYW1lLFxuXHRcdFx0YWRkcmVzczE6IG9yZGVyPy5zaGlwcGluZz8uYWRkcmVzczEsXG5cdFx0XHRhZGRyZXNzMjogb3JkZXI/LnNoaXBwaW5nPy5hZGRyZXNzMixcblx0XHRcdGNpdHk6IG9yZGVyPy5zaGlwcGluZz8uY2l0eSxcblx0XHRcdGNvdW50cnk6IG9yZGVyPy5zaGlwcGluZz8uY291bnRyeSxcblx0XHRcdHN0YXRlOiBvcmRlcj8uc2hpcHBpbmc/LnN0YXRlLFxuXHRcdFx0cG9zdGNvZGU6IG9yZGVyPy5zaGlwcGluZz8ucG9zdGNvZGUsXG5cdFx0XHRlbWFpbDogb3JkZXI/LnNoaXBwaW5nPy5lbWFpbCxcblx0XHRcdHBob25lOiBvcmRlcj8uc2hpcHBpbmc/LnBob25lLFxuXHRcdFx0Y29tcGFueTogb3JkZXI/LnNoaXBwaW5nPy5jb21wYW55LFxuXHRcdH0sXG5cdFx0YmlsbGluZzoge1xuXHRcdFx0Zmlyc3ROYW1lOiBiaWxsaW5nRGF0YT8uZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGJpbGxpbmdEYXRhPy5sYXN0TmFtZSxcblx0XHRcdGFkZHJlc3MxOiBiaWxsaW5nRGF0YT8uYWRkcmVzczEsXG5cdFx0XHRhZGRyZXNzMjogYmlsbGluZ0RhdGE/LmFkZHJlc3MyLFxuXHRcdFx0Y2l0eTogYmlsbGluZ0RhdGE/LmNpdHksXG5cdFx0XHRjb3VudHJ5OiBiaWxsaW5nRGF0YT8uY291bnRyeSxcblx0XHRcdHN0YXRlOiBiaWxsaW5nRGF0YT8uc3RhdGUsXG5cdFx0XHRwb3N0Y29kZTogYmlsbGluZ0RhdGE/LnBvc3Rjb2RlLFxuXHRcdFx0ZW1haWw6IGJpbGxpbmdEYXRhPy5lbWFpbCxcblx0XHRcdHBob25lOiBiaWxsaW5nRGF0YT8ucGhvbmUsXG5cdFx0XHRjb21wYW55OiBiaWxsaW5nRGF0YT8uY29tcGFueSxcblx0XHR9LFxuXHRcdHNoaXBUb0RpZmZlcmVudEFkZHJlc3M6IG9yZGVyLmJpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmcsXG5cdFx0cGF5bWVudE1ldGhvZDogb3JkZXIucGF5bWVudE1ldGhvZCxcblx0XHRpc1BhaWQ6IGZhbHNlLFxuXHR9O1xuXG5cdGlmIChvcmRlci5jcmVhdGVBY2NvdW50KSB7XG5cdFx0Y2hlY2tvdXREYXRhLmFjY291bnQgPSB7XG5cdFx0XHR1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZDogb3JkZXIucGFzc3dvcmQsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBjaGVja291dERhdGE7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXBkYXRlZCBpdGVtcyBpbiB0aGUgYmVsb3cgZm9ybWF0IHJlcXVpcmVkIGZvciBtdXRhdGlvbiBpbnB1dC5cbiAqXG4gKiBbXG4gKiB7IFwia2V5XCI6IFwiMzNlNzVmZjA5ZGQ2MDFiYmU2ZGQ1MTAzOTE1MjE4OVwiLCBcInF1YW50aXR5XCI6IDEgfSxcbiAqIHsgXCJrZXlcIjogXCIwMmU3NGYxMGUwMzI3YWQ4NjhkMzhmMmI0ZmRkNmYwXCIsIFwicXVhbnRpdHlcIjogMSB9LFxuICogXVxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgaW4gYWJvdmUgZm9ybWF0IHdpdGggdGhlIG5ld1F0eSAodXBkYXRlZCBRdHkgKS5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVcGRhdGVkSXRlbXMgPSAoIHByb2R1Y3RzLCBuZXdRdHksIGNhcnRLZXkgKSA9PiB7XG5cblx0Ly8gQ3JlYXRlIGFuIGVtcHR5IGFycmF5LlxuXHRjb25zdCB1cGRhdGVkSXRlbXMgPSBbXTtcblxuXHQvLyBMb29wIHRocm91Z2ggdGhlIHByb2R1Y3QgYXJyYXkuXG5cdHByb2R1Y3RzLm1hcCggKCBjYXJ0SXRlbSApID0+IHtcblxuXHRcdC8vIElmIHlvdSBmaW5kIHRoZSBjYXJ0IGtleSBvZiB0aGUgcHJvZHVjdCB1c2VyIGlzIHRyeWluZyB0byB1cGRhdGUsIHB1c2ggdGhlIGtleSBhbmQgbmV3IHF0eS5cblx0XHRpZiAoIGNhcnRJdGVtLmNhcnRLZXkgPT09IGNhcnRLZXkgKSB7XG5cblx0XHRcdHVwZGF0ZWRJdGVtcy5wdXNoKCB7XG5cdFx0XHRcdGtleTogY2FydEl0ZW0uY2FydEtleSxcblx0XHRcdFx0cXVhbnRpdHk6IHBhcnNlSW50KCBuZXdRdHkgKVxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBwdXNoIHRoZSBleGlzdGluZyBxdHkgd2l0aG91dCB1cGRhdGluZy5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXBkYXRlZEl0ZW1zLnB1c2goIHtcblx0XHRcdFx0a2V5OiBjYXJ0SXRlbS5jYXJ0S2V5LFxuXHRcdFx0XHRxdWFudGl0eTogY2FydEl0ZW0ucXR5XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gUmV0dXJuIHRoZSB1cGRhdGVkSXRlbXMgYXJyYXkgd2l0aCBuZXcgUXR5cy5cblx0cmV0dXJuIHVwZGF0ZWRJdGVtcztcblxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBDSEVDS09VVF9NVVRBVElPTiA9IGdxbGBcbm11dGF0aW9uIENIRUNLT1VUX01VVEFUSU9OKCAkaW5wdXQ6IENoZWNrb3V0SW5wdXQhICkge1xuICBjaGVja291dChpbnB1dDogJGlucHV0KSB7XG4gICAgY2xpZW50TXV0YXRpb25JZFxuICAgIG9yZGVyIHtcbiAgICAgIGlkXG4gICAgICBvcmRlcktleVxuICAgICAgb3JkZXJOdW1iZXJcbiAgICAgIHN0YXR1c1xuICAgICAgcmVmdW5kcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRcbiAgICByZWRpcmVjdFxuICB9XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDSEVDS09VVF9NVVRBVElPTjtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBHRVRfQ0FSVCA9IGdxbGBcbnF1ZXJ5IEdFVF9DQVJUIHtcbiAgY2FydCB7XG4gICAgY29udGVudHMge1xuICAgICAgbm9kZXMge1xuICAgICAgICBrZXlcbiAgICAgICAgcHJvZHVjdCB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgcHJvZHVjdElkOiBkYXRhYmFzZUlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgb25TYWxlXG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICBhdmVyYWdlUmF0aW5nXG4gICAgICAgICAgICByZXZpZXdDb3VudFxuICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgc3JjU2V0XG4gICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbGxlcnlJbWFnZXMge1xuICAgICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgICBzcmNTZXRcbiAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYXRpb24ge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHZhcmlhdGlvbklkOiBkYXRhYmFzZUlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgb25TYWxlXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgcmVndWxhclByaWNlXG4gICAgICAgICAgICBzYWxlUHJpY2VcbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgICAgIHNyY1NldFxuICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1YW50aXR5XG4gICAgICAgIHRvdGFsXG4gICAgICAgIHN1YnRvdGFsXG4gICAgICAgIHN1YnRvdGFsVGF4XG4gICAgICB9XG4gICAgfVxuICAgIGFwcGxpZWRDb3Vwb25zIHtcbiAgICAgIGNvZGVcbiAgICAgIGRpc2NvdW50QW1vdW50XG4gICAgICBkaXNjb3VudFRheFxuICAgIH1cbiAgICBzdWJ0b3RhbFxuICAgIHN1YnRvdGFsVGF4XG4gICAgc2hpcHBpbmdUYXhcbiAgICBzaGlwcGluZ1RvdGFsXG4gICAgdG90YWxcbiAgICB0b3RhbFRheFxuICAgIGZlZVRheFxuICAgIGZlZVRvdGFsXG4gICAgZGlzY291bnRUYXhcbiAgICBkaXNjb3VudFRvdGFsXG4gIH1cbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdFVF9DQVJUO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbi8qKlxuICogR3JhcGhRTCBjb3VudHJpZXMgcXVlcnkuXG4gKi9cbmNvbnN0IEdFVF9DT1VOVFJJRVMgPSBncWxgcXVlcnkgR0VUX0NPVU5UUklFU3tcbiAgd29vQ291bnRyaWVzIHtcbiAgICBiaWxsaW5nQ291bnRyaWVzIHtcbiAgICAgIGNvdW50cnlDb2RlXG4gICAgICBjb3VudHJ5TmFtZVxuICAgIH1cbiAgICBzaGlwcGluZ0NvdW50cmllcyB7XG4gICAgICBjb3VudHJ5Q29kZVxuICAgICAgY291bnRyeU5hbWVcbiAgICB9XG4gIH1cbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBHRVRfQ09VTlRSSUVTO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbi8qKlxuICogR3JhcGhRTCBjb3VudHJpZXMgcXVlcnkuXG4gKi9cbmNvbnN0IEdFVF9TVEFURVMgPSBncWxgcXVlcnkgR0VUX1NUQVRFUygkY291bnRyeUNvZGU6IFN0cmluZyEpIHtcbiAgd29vU3RhdGVzKGNvdW50cnlDb2RlOiAkY291bnRyeUNvZGUpIHtcbiAgICBzdGF0ZXMge1xuICAgICAgc3RhdGVDb2RlXG4gICAgICBzdGF0ZU5hbWVcbiAgICB9XG4gIH1cbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBHRVRfU1RBVEVTO1xuIiwiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcG9sbG9DbGllbnRcIjtcbmltcG9ydCBHRVRfU1RBVEVTIGZyb20gXCIuLi9xdWVyaWVzL2dldC1zdGF0ZXNcIjtcblxuLyoqXG4gKiBHZXQgc3RhdGVzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlDb2RlIENvdW50cnkgY29kZVxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVzID0gYXN5bmMgKCBjb3VudHJ5Q29kZSApID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSgge1xuICAgICAgICBxdWVyeTogR0VUX1NUQVRFUyxcbiAgICAgICAgdmFyaWFibGVzOiB7IGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSB8fCAnJyB9XG4gICAgfSApXG5cbiAgICByZXR1cm4gZGF0YT8ud29vU3RhdGVzPy5zdGF0ZXMgPz8gW107XG59XG5cbi8qKlxuICogU2V0IHN0YXRlcyBmb3IgdGhlIGNvdW50cnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXRUaGVTdGF0ZXMgUmVhY3QgdXNlU3RhdGUgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGVzIGJhc2lzIGNvdW50cnkgc2VsZWN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0SXNGZXRjaGluZ1N0YXRlcyBSZWFjdCB1c2VTdGF0ZSBmdW5jdGlvbiwgdG8gbWFuYWdlIGxvYWRpbmcgc3RhdGUgd2hlbiByZXF1ZXN0IGlzIGluIHByb2Nlc3MuXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldFN0YXRlc0ZvckNvdW50cnkgPSBhc3luYyAoIHRhcmdldCwgc2V0VGhlU3RhdGVzLCBzZXRJc0ZldGNoaW5nU3RhdGVzICkgPT4ge1xuICAgIGlmICggJ2NvdW50cnknID09PSB0YXJnZXQubmFtZSApIHtcbiAgICAgICAgc2V0SXNGZXRjaGluZ1N0YXRlcyh0cnVlKTtcbiAgICAgICAgY29uc3QgY291bnRyeUNvZGUgPSB0YXJnZXRbdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudHJ5Y29kZScpXG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IGF3YWl0IGdldFN0YXRlcyggY291bnRyeUNvZGUgKTtcbiAgICAgICAgc2V0VGhlU3RhdGVzKCBzdGF0ZXMgfHwgW10gKTtcbiAgICAgICAgc2V0SXNGZXRjaGluZ1N0YXRlcyhmYWxzZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQmlsbGluZ0RpZmZlcmVudFRoYW5TaGlwcGluZyA9ICggaW5wdXQsIHNldElucHV0LCB0YXJnZXQgKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLmlucHV0LCBbdGFyZ2V0Lm5hbWVdOiAhIGlucHV0LmJpbGxpbmdEaWZmZXJlbnRUaGFuU2hpcHBpbmcgfTtcbiAgICBzZXRJbnB1dCggbmV3U3RhdGUgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNyZWF0ZUFjY291bnQgPSAoIGlucHV0LCBzZXRJbnB1dCwgdGFyZ2V0ICkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5pbnB1dCwgW3RhcmdldC5uYW1lXTogISBpbnB1dC5jcmVhdGVBY2NvdW50IH07XG4gICAgc2V0SW5wdXQoIG5ld1N0YXRlICk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuL2lzRW1wdHknO1xuXG5cbmNvbnN0IHZhbGlkYXRlQW5kU2FuaXRpemVDaGVja291dEZvcm0gPSAoIGRhdGEsIGhhc1N0YXRlcyA9IHRydWUgKSA9PiB7XG5cblx0bGV0IGVycm9ycyA9IHt9O1xuXHRsZXQgc2FuaXRpemVkRGF0YSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZpcnN0TmFtZSB2YWx1ZSBlcXVhbCB0byBhbiBlbXB0eSBzdHJpbmcgaWYgdXNlciBoYXMgbm90IGVudGVyZWQgdGhlIGZpcnN0TmFtZSwgb3RoZXJ3aXNlIHRoZSBWYWxpZGF0b3IuaXNFbXB0eSgpIHdvbnQgd29yayBkb3duIGJlbG93LlxuXHQgKiBOb3RlIHRoYXQgdGhlIGlzRW1wdHkoKSBoZXJlIGlzIG91ciBjdXN0b20gZnVuY3Rpb24gZGVmaW5lZCBpbiBpcy1lbXB0eS5qcyBhbmRcblx0ICogVmFsaWRhdG9yLmlzRW1wdHkoKSBkb3duIGJlbG93IGNvbWVzIGZyb20gdmFsaWRhdG9yIGxpYnJhcnkuXG5cdCAqIFNpbWlsYXJseSB3ZSBkbyBpdCBmb3IgZm9yIHRoZSByZXN0IG9mIHRoZSBmaWVsZHNcblx0ICovXG5cdGRhdGEuZmlyc3ROYW1lID0gKCAhIGlzRW1wdHkoIGRhdGEuZmlyc3ROYW1lICkgKSA/IGRhdGEuZmlyc3ROYW1lIDogJyc7XG5cdGRhdGEubGFzdE5hbWUgPSAoICEgaXNFbXB0eSggZGF0YS5sYXN0TmFtZSApICkgPyBkYXRhLmxhc3ROYW1lIDogJyc7XG5cdGRhdGEuY29tcGFueSA9ICggISBpc0VtcHR5KCBkYXRhLmNvbXBhbnkgKSApID8gZGF0YS5jb21wYW55IDogJyc7XG5cdGRhdGEuY291bnRyeSA9ICggISBpc0VtcHR5KCBkYXRhLmNvdW50cnkgKSApID8gZGF0YS5jb3VudHJ5IDogJyc7XG5cdGRhdGEuYWRkcmVzczEgPSAoICEgaXNFbXB0eSggZGF0YS5hZGRyZXNzMSApICkgPyBkYXRhLmFkZHJlc3MxIDogJyc7XG5cdGRhdGEuYWRkcmVzczIgPSAoICEgaXNFbXB0eSggZGF0YS5hZGRyZXNzMiApICkgPyBkYXRhLmFkZHJlc3MyIDogJyc7XG5cdGRhdGEuY2l0eSA9ICggISBpc0VtcHR5KCBkYXRhLmNpdHkgKSApID8gZGF0YS5jaXR5IDogJyc7XG5cdGRhdGEuc3RhdGUgPSAoICEgaXNFbXB0eSggZGF0YS5zdGF0ZSApICkgPyBkYXRhLnN0YXRlIDogJyc7XG5cdGRhdGEucG9zdGNvZGUgPSAoICEgaXNFbXB0eSggZGF0YS5wb3N0Y29kZSApICkgPyBkYXRhLnBvc3Rjb2RlIDogJyc7XG5cdGRhdGEucGhvbmUgPSAoICEgaXNFbXB0eSggZGF0YS5waG9uZSApICkgPyBkYXRhLnBob25lIDogJyc7XG5cdGRhdGEuZW1haWwgPSAoICEgaXNFbXB0eSggZGF0YS5lbWFpbCApICkgPyBkYXRhLmVtYWlsIDogJyc7XG5cdGRhdGEuY3JlYXRlQWNjb3VudCA9ICggISBpc0VtcHR5KCBkYXRhLmNyZWF0ZUFjY291bnQgKSApID8gZGF0YS5jcmVhdGVBY2NvdW50IDogJyc7XG5cdGRhdGEub3JkZXJOb3RlcyA9ICggISBpc0VtcHR5KCBkYXRhLm9yZGVyTm90ZXMgKSApID8gZGF0YS5vcmRlck5vdGVzIDogJyc7XG5cdC8vIGRhdGEucGF5bWVudE1ldGhvZCA9ICggISBpc0VtcHR5KCBkYXRhLnBheW1lbnRNZXRob2QgKSApID8gZGF0YS5wYXltZW50TWV0aG9kIDogJyc7XG5cblx0LyoqXG5cdCAqIENoZWNrcyBmb3IgZXJyb3IgaWYgcmVxdWlyZWQgaXMgdHJ1ZVxuXHQgKiBhbmQgYWRkcyBFcnJvciBhbmQgU2FuaXRpemVkIGRhdGEgdG8gdGhlIGVycm9ycyBhbmQgc2FuaXRpemVkRGF0YSBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSBGaWVsZCBuYW1lIGUuZy4gRmlyc3QgbmFtZSwgbGFzdCBuYW1lXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvckNvbnRlbnQgRXJyb3IgQ29udGVudCB0byBiZSB1c2VkIGluIHNob3dpbmcgZXJyb3IgZS5nLiBGaXJzdCBOYW1lLCBMYXN0IE5hbWVcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBtaW4gTWluaW11bSBjaGFyYWN0ZXJzIHJlcXVpcmVkXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gbWF4IE1heGltdW0gY2hhcmFjdGVycyByZXF1aXJlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUeXBlIGUuZy4gZW1haWwsIHBob25lIGV0Yy5cblx0ICogQHBhcmFtIHtib29sZWFufSByZXF1aXJlZCBSZXF1aXJlZCBpZiByZXF1aXJlZCBpcyBwYXNzZWQgYXMgZmFsc2UsIGl0IHdpbGwgbm90IHZhbGlkYXRlIGVycm9yIGFuZCBqdXN0IGRvIHNhbml0aXphdGlvbi5cblx0ICovXG5cdGNvbnN0IGFkZEVycm9yQW5kU2FuaXRpemVkRGF0YSA9ICggZmllbGROYW1lLCBlcnJvckNvbnRlbnQsIG1pbiwgbWF4LCB0eXBlID0gJycsIHJlcXVpcmVkICkgPT4ge1xuXG5cdFx0LyoqXG5cdFx0ICogUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGlzRW1wdHkoKSBiZWxvbmdzIHRvIHZhbGlkYXRvciBhbmQgbm90IG91ciBjdXN0b20gZnVuY3Rpb24gZGVmaW5lZCBhYm92ZS5cblx0XHQgKlxuXHRcdCAqIENoZWNrIGZvciBlcnJvciBhbmQgaWYgdGhlcmUgaXMgbm8gZXJyb3IgdGhlbiBzYW5pdGl6ZSBkYXRhLlxuXHRcdCAqL1xuXHRcdGlmICggISB2YWxpZGF0b3IuaXNMZW5ndGgoIGRhdGFbIGZpZWxkTmFtZSBdLCB7IG1pbiwgbWF4IH0gKSApe1xuXHRcdFx0ZXJyb3JzWyBmaWVsZE5hbWUgXSA9IGAke2Vycm9yQ29udGVudH0gbXVzdCBiZSAke21pbn0gdG8gJHttYXh9IGNoYXJhY3RlcnNgO1xuXHRcdH1cblxuXHRcdGlmICggJ2VtYWlsJyA9PT0gdHlwZSAmJiAhIHZhbGlkYXRvci5pc0VtYWlsKCBkYXRhWyBmaWVsZE5hbWUgXSApICl7XG5cdFx0XHRlcnJvcnNbIGZpZWxkTmFtZSBdID0gYCR7ZXJyb3JDb250ZW50fSBpcyBub3QgdmFsaWRgO1xuXHRcdH1cblxuXHRcdGlmICggJ3Bob25lJyA9PT0gdHlwZSAmJiAhIHZhbGlkYXRvci5pc01vYmlsZVBob25lKCBkYXRhWyBmaWVsZE5hbWUgXSApICkge1xuXHRcdFx0ZXJyb3JzWyBmaWVsZE5hbWUgXSA9IGAke2Vycm9yQ29udGVudH0gaXMgbm90IHZhbGlkYDtcblx0XHR9XG5cblx0XHRpZiAoIHJlcXVpcmVkICYmIHZhbGlkYXRvci5pc0VtcHR5KCBkYXRhWyBmaWVsZE5hbWUgXSApICkge1xuXHRcdFx0ZXJyb3JzWyBmaWVsZE5hbWUgXSA9IGAke2Vycm9yQ29udGVudH0gaXMgcmVxdWlyZWRgO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGVycm9yc1xuXHRcdGlmICggISBlcnJvcnNbIGZpZWxkTmFtZSBdICkge1xuXHRcdFx0c2FuaXRpemVkRGF0YVsgZmllbGROYW1lIF0gPSB2YWxpZGF0b3IudHJpbSggZGF0YVsgZmllbGROYW1lIF0gKTtcblx0XHRcdHNhbml0aXplZERhdGFbIGZpZWxkTmFtZSBdID0gKCAnZW1haWwnID09PSB0eXBlICkgPyB2YWxpZGF0b3Iubm9ybWFsaXplRW1haWwoIHNhbml0aXplZERhdGFbIGZpZWxkTmFtZSBdICkgOiBzYW5pdGl6ZWREYXRhWyBmaWVsZE5hbWUgXTtcblx0XHRcdHNhbml0aXplZERhdGFbIGZpZWxkTmFtZSBdID0gdmFsaWRhdG9yLmVzY2FwZSggc2FuaXRpemVkRGF0YVsgZmllbGROYW1lIF0gKTtcblx0XHR9XG5cblx0fTtcblxuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdmaXJzdE5hbWUnLCAnRmlyc3QgbmFtZScsIDIsIDM1LCAnc3RyaW5nJywgdHJ1ZSApO1xuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdsYXN0TmFtZScsICdMYXN0IG5hbWUnLCAyLCAzNSwgJ3N0cmluZycsIHRydWUgKTtcblx0YWRkRXJyb3JBbmRTYW5pdGl6ZWREYXRhKCAnY29tcGFueScsICdDb21wYW55IE5hbWUnLCAwLCAzNSwgJ3N0cmluZycsIGZhbHNlICk7XG5cdGFkZEVycm9yQW5kU2FuaXRpemVkRGF0YSggJ2NvdW50cnknLCAnQ291bnRyeSBuYW1lJywgMiwgNTUsICdzdHJpbmcnLCB0cnVlICk7XG5cdGFkZEVycm9yQW5kU2FuaXRpemVkRGF0YSggJ2FkZHJlc3MxJywgJ1N0cmVldCBhZGRyZXNzIGxpbmUgMScsIDEyLCAxMDAsJ3N0cmluZycsdHJ1ZSApO1xuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdhZGRyZXNzMicsICcnLCAwLCAyNTQsICdzdHJpbmcnLCBmYWxzZSApO1xuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdjaXR5JywgJ0NpdHkgZmllbGQnLCAzLCAyNSwgJ3N0cmluZycsIHRydWUgKTtcblx0YWRkRXJyb3JBbmRTYW5pdGl6ZWREYXRhKCAnc3RhdGUnLCAnU3RhdGUvQ291bnR5JywgMCwgMjU0LCAnc3RyaW5nJywgaGFzU3RhdGVzICk7XG5cdGFkZEVycm9yQW5kU2FuaXRpemVkRGF0YSggJ3Bvc3Rjb2RlJywgJ1Bvc3QgY29kZScsIDIsIDEwLCAncG9zdGNvZGUnLCB0cnVlICk7XG5cdGFkZEVycm9yQW5kU2FuaXRpemVkRGF0YSggJ3Bob25lJywgJ1Bob25lIG51bWJlcicsIDEwLCAxNSwgJ3Bob25lJywgdHJ1ZSApO1xuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdlbWFpbCcsICdFbWFpbCcsIDExLCAyNTQsICdlbWFpbCcsIHRydWUgKTtcblxuXHQvLyBUaGUgZGF0YS5jcmVhdGVBY2NvdW50IGlzIGEgYm9vbGVhbiB2YWx1ZS5cblx0c2FuaXRpemVkRGF0YS5jcmVhdGVBY2NvdW50ID0gZGF0YS5jcmVhdGVBY2NvdW50O1xuXHRhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdvcmRlck5vdGVzJywgJycsIDAsIDI1NCwgJ3N0cmluZycsIGZhbHNlICk7XG5cdC8vIEBUT0RPIFBheW1lbnQgbW9kZSBlcnJvciB0byBiZSBoYW5kbGVkIGxhdGVyLlxuXHQvLyBhZGRFcnJvckFuZFNhbml0aXplZERhdGEoICdwYXltZW50TWV0aG9kJywgJ1BheW1lbnQgbW9kZSBmaWVsZCcsIDIsIDUwLCAnc3RyaW5nJywgZmFsc2UgKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNhbml0aXplZERhdGEsXG5cdFx0ZXJyb3JzLFxuXHRcdGlzVmFsaWQ6IGlzRW1wdHkoIGVycm9ycyApXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlQW5kU2FuaXRpemVDaGVja291dEZvcm07XG5cbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQvbnVsbC9lbXB0eSBvYmplY3QvZW1wdHkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNFbXB0eSA9ICggdmFsdWUgKSA9PlxuXHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdHZhbHVlID09PSBudWxsIHx8XG5cdCggdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyggdmFsdWUgKS5sZW5ndGggPT09IDAgKSB8fFxuXHQoIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCApO1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
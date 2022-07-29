// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/font_FuturaNew/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./FuturaNewMedium-Obl.eot":[["FuturaNewMedium-Obl.faf41449.eot","fonts/font_FuturaNew/FuturaNewMedium-Obl.eot"],"fonts/font_FuturaNew/FuturaNewMedium-Obl.eot"],"./FuturaNewMedium-Obl.woff2":[["FuturaNewMedium-Obl.019781c5.woff2","fonts/font_FuturaNew/FuturaNewMedium-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewMedium-Obl.woff2"],"./FuturaNewMedium-Obl.woff":[["FuturaNewMedium-Obl.ef24fc18.woff","fonts/font_FuturaNew/FuturaNewMedium-Obl.woff"],"fonts/font_FuturaNew/FuturaNewMedium-Obl.woff"],"./FuturaNewMedium-Obl.ttf":[["FuturaNewMedium-Obl.b1002134.ttf","fonts/font_FuturaNew/FuturaNewMedium-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewMedium-Obl.ttf"],"./FuturaNewDemi-Obl.eot":[["FuturaNewDemi-Obl.c75cdcba.eot","fonts/font_FuturaNew/FuturaNewDemi-Obl.eot"],"fonts/font_FuturaNew/FuturaNewDemi-Obl.eot"],"./FuturaNewDemi-Obl.woff2":[["FuturaNewDemi-Obl.c253a3e1.woff2","fonts/font_FuturaNew/FuturaNewDemi-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewDemi-Obl.woff2"],"./FuturaNewDemi-Obl.woff":[["FuturaNewDemi-Obl.61f865a0.woff","fonts/font_FuturaNew/FuturaNewDemi-Obl.woff"],"fonts/font_FuturaNew/FuturaNewDemi-Obl.woff"],"./FuturaNewDemi-Obl.ttf":[["FuturaNewDemi-Obl.13744309.ttf","fonts/font_FuturaNew/FuturaNewDemi-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewDemi-Obl.ttf"],"./FuturaNewMedium-Reg.eot":[["FuturaNewMedium-Reg.2ce31d11.eot","fonts/font_FuturaNew/FuturaNewMedium-Reg.eot"],"fonts/font_FuturaNew/FuturaNewMedium-Reg.eot"],"./FuturaNewMedium-Reg.woff2":[["FuturaNewMedium-Reg.d5fa552c.woff2","fonts/font_FuturaNew/FuturaNewMedium-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewMedium-Reg.woff2"],"./FuturaNewMedium-Reg.woff":[["FuturaNewMedium-Reg.88fbcdfa.woff","fonts/font_FuturaNew/FuturaNewMedium-Reg.woff"],"fonts/font_FuturaNew/FuturaNewMedium-Reg.woff"],"./FuturaNewMedium-Reg.ttf":[["FuturaNewMedium-Reg.18615b1f.ttf","fonts/font_FuturaNew/FuturaNewMedium-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewMedium-Reg.ttf"],"./FuturaNewHeavy-Reg.eot":[["FuturaNewHeavy-Reg.b8722ea2.eot","fonts/font_FuturaNew/FuturaNewHeavy-Reg.eot"],"fonts/font_FuturaNew/FuturaNewHeavy-Reg.eot"],"./FuturaNewHeavy-Reg.woff2":[["FuturaNewHeavy-Reg.99afdf6b.woff2","fonts/font_FuturaNew/FuturaNewHeavy-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewHeavy-Reg.woff2"],"./FuturaNewHeavy-Reg.woff":[["FuturaNewHeavy-Reg.e9cbaa5d.woff","fonts/font_FuturaNew/FuturaNewHeavy-Reg.woff"],"fonts/font_FuturaNew/FuturaNewHeavy-Reg.woff"],"./FuturaNewHeavy-Reg.ttf":[["FuturaNewHeavy-Reg.556469d6.ttf","fonts/font_FuturaNew/FuturaNewHeavy-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewHeavy-Reg.ttf"],"./FuturaNewLight-Obl.eot":[["FuturaNewLight-Obl.62180cda.eot","fonts/font_FuturaNew/FuturaNewLight-Obl.eot"],"fonts/font_FuturaNew/FuturaNewLight-Obl.eot"],"./FuturaNewLight-Obl.woff2":[["FuturaNewLight-Obl.037542a5.woff2","fonts/font_FuturaNew/FuturaNewLight-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewLight-Obl.woff2"],"./FuturaNewLight-Obl.woff":[["FuturaNewLight-Obl.2d1bf8a2.woff","fonts/font_FuturaNew/FuturaNewLight-Obl.woff"],"fonts/font_FuturaNew/FuturaNewLight-Obl.woff"],"./FuturaNewLight-Obl.ttf":[["FuturaNewLight-Obl.05b8e1aa.ttf","fonts/font_FuturaNew/FuturaNewLight-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewLight-Obl.ttf"],"./FuturaNewBook-Obl.eot":[["FuturaNewBook-Obl.3bb45da1.eot","fonts/font_FuturaNew/FuturaNewBook-Obl.eot"],"fonts/font_FuturaNew/FuturaNewBook-Obl.eot"],"./FuturaNewBook-Obl.woff2":[["FuturaNewBook-Obl.9db961c1.woff2","fonts/font_FuturaNew/FuturaNewBook-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewBook-Obl.woff2"],"./FuturaNewBook-Obl.woff":[["FuturaNewBook-Obl.e2b7bc55.woff","fonts/font_FuturaNew/FuturaNewBook-Obl.woff"],"fonts/font_FuturaNew/FuturaNewBook-Obl.woff"],"./FuturaNewBook-Obl.ttf":[["FuturaNewBook-Obl.41b09f58.ttf","fonts/font_FuturaNew/FuturaNewBook-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewBook-Obl.ttf"],"./FuturaNewExtraBold-Obl.eot":[["FuturaNewExtraBold-Obl.b5406fb2.eot","fonts/font_FuturaNew/FuturaNewExtraBold-Obl.eot"],"fonts/font_FuturaNew/FuturaNewExtraBold-Obl.eot"],"./FuturaNewExtraBold-Obl.woff2":[["FuturaNewExtraBold-Obl.4e96ab60.woff2","fonts/font_FuturaNew/FuturaNewExtraBold-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewExtraBold-Obl.woff2"],"./FuturaNewExtraBold-Obl.woff":[["FuturaNewExtraBold-Obl.e3a418c4.woff","fonts/font_FuturaNew/FuturaNewExtraBold-Obl.woff"],"fonts/font_FuturaNew/FuturaNewExtraBold-Obl.woff"],"./FuturaNewExtraBold-Obl.ttf":[["FuturaNewExtraBold-Obl.d5dbe37e.ttf","fonts/font_FuturaNew/FuturaNewExtraBold-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewExtraBold-Obl.ttf"],"./FuturaNewBook-Reg.eot":[["FuturaNewBook-Reg.2dd1dc70.eot","fonts/font_FuturaNew/FuturaNewBook-Reg.eot"],"fonts/font_FuturaNew/FuturaNewBook-Reg.eot"],"./FuturaNewBook-Reg.woff2":[["FuturaNewBook-Reg.57a40e4e.woff2","fonts/font_FuturaNew/FuturaNewBook-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewBook-Reg.woff2"],"./FuturaNewBook-Reg.woff":[["FuturaNewBook-Reg.dfbacb05.woff","fonts/font_FuturaNew/FuturaNewBook-Reg.woff"],"fonts/font_FuturaNew/FuturaNewBook-Reg.woff"],"./FuturaNewBook-Reg.ttf":[["FuturaNewBook-Reg.16719c1b.ttf","fonts/font_FuturaNew/FuturaNewBook-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewBook-Reg.ttf"],"./FuturaNewBold-Obl.eot":[["FuturaNewBold-Obl.d7cb7cd4.eot","fonts/font_FuturaNew/FuturaNewBold-Obl.eot"],"fonts/font_FuturaNew/FuturaNewBold-Obl.eot"],"./FuturaNewBold-Obl.woff2":[["FuturaNewBold-Obl.fa3932b8.woff2","fonts/font_FuturaNew/FuturaNewBold-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewBold-Obl.woff2"],"./FuturaNewBold-Obl.woff":[["FuturaNewBold-Obl.a1027814.woff","fonts/font_FuturaNew/FuturaNewBold-Obl.woff"],"fonts/font_FuturaNew/FuturaNewBold-Obl.woff"],"./FuturaNewBold-Obl.ttf":[["FuturaNewBold-Obl.103c466b.ttf","fonts/font_FuturaNew/FuturaNewBold-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewBold-Obl.ttf"],"./FuturaNewExtraBold-Reg.eot":[["FuturaNewExtraBold-Reg.22326ab6.eot","fonts/font_FuturaNew/FuturaNewExtraBold-Reg.eot"],"fonts/font_FuturaNew/FuturaNewExtraBold-Reg.eot"],"./FuturaNewExtraBold-Reg.woff2":[["FuturaNewExtraBold-Reg.72fca667.woff2","fonts/font_FuturaNew/FuturaNewExtraBold-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewExtraBold-Reg.woff2"],"./FuturaNewExtraBold-Reg.woff":[["FuturaNewExtraBold-Reg.a64c0479.woff","fonts/font_FuturaNew/FuturaNewExtraBold-Reg.woff"],"fonts/font_FuturaNew/FuturaNewExtraBold-Reg.woff"],"./FuturaNewExtraBold-Reg.ttf":[["FuturaNewExtraBold-Reg.0143e78d.ttf","fonts/font_FuturaNew/FuturaNewExtraBold-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewExtraBold-Reg.ttf"],"./FuturaNewLight-Reg.eot":[["FuturaNewLight-Reg.665f311b.eot","fonts/font_FuturaNew/FuturaNewLight-Reg.eot"],"fonts/font_FuturaNew/FuturaNewLight-Reg.eot"],"./FuturaNewLight-Reg.woff2":[["FuturaNewLight-Reg.5a9336c0.woff2","fonts/font_FuturaNew/FuturaNewLight-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewLight-Reg.woff2"],"./FuturaNewLight-Reg.woff":[["FuturaNewLight-Reg.01791b38.woff","fonts/font_FuturaNew/FuturaNewLight-Reg.woff"],"fonts/font_FuturaNew/FuturaNewLight-Reg.woff"],"./FuturaNewLight-Reg.ttf":[["FuturaNewLight-Reg.7b8cfc90.ttf","fonts/font_FuturaNew/FuturaNewLight-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewLight-Reg.ttf"],"./FuturaNewDemi-Reg.eot":[["FuturaNewDemi-Reg.c017e7df.eot","fonts/font_FuturaNew/FuturaNewDemi-Reg.eot"],"fonts/font_FuturaNew/FuturaNewDemi-Reg.eot"],"./FuturaNewDemi-Reg.woff2":[["FuturaNewDemi-Reg.8bc0198e.woff2","fonts/font_FuturaNew/FuturaNewDemi-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewDemi-Reg.woff2"],"./FuturaNewDemi-Reg.woff":[["FuturaNewDemi-Reg.9580629a.woff","fonts/font_FuturaNew/FuturaNewDemi-Reg.woff"],"fonts/font_FuturaNew/FuturaNewDemi-Reg.woff"],"./FuturaNewDemi-Reg.ttf":[["FuturaNewDemi-Reg.a761f283.ttf","fonts/font_FuturaNew/FuturaNewDemi-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewDemi-Reg.ttf"],"./FuturaNewBold-Reg.eot":[["FuturaNewBold-Reg.4019d610.eot","fonts/font_FuturaNew/FuturaNewBold-Reg.eot"],"fonts/font_FuturaNew/FuturaNewBold-Reg.eot"],"./FuturaNewBold-Reg.woff2":[["FuturaNewBold-Reg.d177be4b.woff2","fonts/font_FuturaNew/FuturaNewBold-Reg.woff2"],"fonts/font_FuturaNew/FuturaNewBold-Reg.woff2"],"./FuturaNewBold-Reg.woff":[["FuturaNewBold-Reg.ca4e26c3.woff","fonts/font_FuturaNew/FuturaNewBold-Reg.woff"],"fonts/font_FuturaNew/FuturaNewBold-Reg.woff"],"./FuturaNewBold-Reg.ttf":[["FuturaNewBold-Reg.e296ebb0.ttf","fonts/font_FuturaNew/FuturaNewBold-Reg.ttf"],"fonts/font_FuturaNew/FuturaNewBold-Reg.ttf"],"./FuturaNewHeavy-Obl.eot":[["FuturaNewHeavy-Obl.5dbe8516.eot","fonts/font_FuturaNew/FuturaNewHeavy-Obl.eot"],"fonts/font_FuturaNew/FuturaNewHeavy-Obl.eot"],"./FuturaNewHeavy-Obl.woff2":[["FuturaNewHeavy-Obl.158ea0c7.woff2","fonts/font_FuturaNew/FuturaNewHeavy-Obl.woff2"],"fonts/font_FuturaNew/FuturaNewHeavy-Obl.woff2"],"./FuturaNewHeavy-Obl.woff":[["FuturaNewHeavy-Obl.bbbe06f9.woff","fonts/font_FuturaNew/FuturaNewHeavy-Obl.woff"],"fonts/font_FuturaNew/FuturaNewHeavy-Obl.woff"],"./FuturaNewHeavy-Obl.ttf":[["FuturaNewHeavy-Obl.7d26105e.ttf","fonts/font_FuturaNew/FuturaNewHeavy-Obl.ttf"],"fonts/font_FuturaNew/FuturaNewHeavy-Obl.ttf"],"_css_loader":"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51875" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/stylesheet.5a75f2f2.js.map
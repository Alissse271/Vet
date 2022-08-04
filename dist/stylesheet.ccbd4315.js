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
},{"./bundle-url":"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./FuturaNewMedium-Obl.eot":[["FuturaNewMedium-Obl.11383e9f.eot","fonts/FuturaNewMedium-Obl.eot"],"fonts/FuturaNewMedium-Obl.eot"],"./FuturaNewMedium-Obl.woff2":[["FuturaNewMedium-Obl.142d2762.woff2","fonts/FuturaNewMedium-Obl.woff2"],"fonts/FuturaNewMedium-Obl.woff2"],"./FuturaNewMedium-Obl.woff":[["FuturaNewMedium-Obl.e90975c8.woff","fonts/FuturaNewMedium-Obl.woff"],"fonts/FuturaNewMedium-Obl.woff"],"./FuturaNewMedium-Obl.ttf":[["FuturaNewMedium-Obl.5d26bf40.ttf","fonts/FuturaNewMedium-Obl.ttf"],"fonts/FuturaNewMedium-Obl.ttf"],"./FuturaNewDemi-Obl.eot":[["FuturaNewDemi-Obl.6bb96665.eot","fonts/FuturaNewDemi-Obl.eot"],"fonts/FuturaNewDemi-Obl.eot"],"./FuturaNewDemi-Obl.woff2":[["FuturaNewDemi-Obl.90a2142b.woff2","fonts/FuturaNewDemi-Obl.woff2"],"fonts/FuturaNewDemi-Obl.woff2"],"./FuturaNewDemi-Obl.woff":[["FuturaNewDemi-Obl.e98bb601.woff","fonts/FuturaNewDemi-Obl.woff"],"fonts/FuturaNewDemi-Obl.woff"],"./FuturaNewDemi-Obl.ttf":[["FuturaNewDemi-Obl.a491186f.ttf","fonts/FuturaNewDemi-Obl.ttf"],"fonts/FuturaNewDemi-Obl.ttf"],"./FuturaNewMedium-Reg.eot":[["FuturaNewMedium-Reg.ee480eb1.eot","fonts/FuturaNewMedium-Reg.eot"],"fonts/FuturaNewMedium-Reg.eot"],"./FuturaNewMedium-Reg.woff2":[["FuturaNewMedium-Reg.856d10b5.woff2","fonts/FuturaNewMedium-Reg.woff2"],"fonts/FuturaNewMedium-Reg.woff2"],"./FuturaNewMedium-Reg.woff":[["FuturaNewMedium-Reg.c5030e69.woff","fonts/FuturaNewMedium-Reg.woff"],"fonts/FuturaNewMedium-Reg.woff"],"./FuturaNewMedium-Reg.ttf":[["FuturaNewMedium-Reg.76517aa7.ttf","fonts/FuturaNewMedium-Reg.ttf"],"fonts/FuturaNewMedium-Reg.ttf"],"./FuturaNewHeavy-Reg.eot":[["FuturaNewHeavy-Reg.03f6824a.eot","fonts/FuturaNewHeavy-Reg.eot"],"fonts/FuturaNewHeavy-Reg.eot"],"./FuturaNewHeavy-Reg.woff2":[["FuturaNewHeavy-Reg.010ab888.woff2","fonts/FuturaNewHeavy-Reg.woff2"],"fonts/FuturaNewHeavy-Reg.woff2"],"./FuturaNewHeavy-Reg.woff":[["FuturaNewHeavy-Reg.29e17452.woff","fonts/FuturaNewHeavy-Reg.woff"],"fonts/FuturaNewHeavy-Reg.woff"],"./FuturaNewHeavy-Reg.ttf":[["FuturaNewHeavy-Reg.b1f7d592.ttf","fonts/FuturaNewHeavy-Reg.ttf"],"fonts/FuturaNewHeavy-Reg.ttf"],"./FuturaNewLight-Obl.eot":[["FuturaNewLight-Obl.6c894c0a.eot","fonts/FuturaNewLight-Obl.eot"],"fonts/FuturaNewLight-Obl.eot"],"./FuturaNewLight-Obl.woff2":[["FuturaNewLight-Obl.ffff97e0.woff2","fonts/FuturaNewLight-Obl.woff2"],"fonts/FuturaNewLight-Obl.woff2"],"./FuturaNewLight-Obl.woff":[["FuturaNewLight-Obl.a6e029dd.woff","fonts/FuturaNewLight-Obl.woff"],"fonts/FuturaNewLight-Obl.woff"],"./FuturaNewLight-Obl.ttf":[["FuturaNewLight-Obl.b53dd6b9.ttf","fonts/FuturaNewLight-Obl.ttf"],"fonts/FuturaNewLight-Obl.ttf"],"./FuturaNewBook-Obl.eot":[["FuturaNewBook-Obl.c4b8f362.eot","fonts/FuturaNewBook-Obl.eot"],"fonts/FuturaNewBook-Obl.eot"],"./FuturaNewBook-Obl.woff2":[["FuturaNewBook-Obl.42ca6dae.woff2","fonts/FuturaNewBook-Obl.woff2"],"fonts/FuturaNewBook-Obl.woff2"],"./FuturaNewBook-Obl.woff":[["FuturaNewBook-Obl.b219385c.woff","fonts/FuturaNewBook-Obl.woff"],"fonts/FuturaNewBook-Obl.woff"],"./FuturaNewBook-Obl.ttf":[["FuturaNewBook-Obl.3a31143b.ttf","fonts/FuturaNewBook-Obl.ttf"],"fonts/FuturaNewBook-Obl.ttf"],"./FuturaNewExtraBold-Obl.eot":[["FuturaNewExtraBold-Obl.99e15f1d.eot","fonts/FuturaNewExtraBold-Obl.eot"],"fonts/FuturaNewExtraBold-Obl.eot"],"./FuturaNewExtraBold-Obl.woff2":[["FuturaNewExtraBold-Obl.11fcb825.woff2","fonts/FuturaNewExtraBold-Obl.woff2"],"fonts/FuturaNewExtraBold-Obl.woff2"],"./FuturaNewExtraBold-Obl.woff":[["FuturaNewExtraBold-Obl.af7d5d88.woff","fonts/FuturaNewExtraBold-Obl.woff"],"fonts/FuturaNewExtraBold-Obl.woff"],"./FuturaNewExtraBold-Obl.ttf":[["FuturaNewExtraBold-Obl.dc45215a.ttf","fonts/FuturaNewExtraBold-Obl.ttf"],"fonts/FuturaNewExtraBold-Obl.ttf"],"./FuturaNewBook-Reg.eot":[["FuturaNewBook-Reg.7affe677.eot","fonts/FuturaNewBook-Reg.eot"],"fonts/FuturaNewBook-Reg.eot"],"./FuturaNewBook-Reg.woff2":[["FuturaNewBook-Reg.a4125f6e.woff2","fonts/FuturaNewBook-Reg.woff2"],"fonts/FuturaNewBook-Reg.woff2"],"./FuturaNewBook-Reg.woff":[["FuturaNewBook-Reg.4497bd10.woff","fonts/FuturaNewBook-Reg.woff"],"fonts/FuturaNewBook-Reg.woff"],"./FuturaNewBook-Reg.ttf":[["FuturaNewBook-Reg.3898d2e8.ttf","fonts/FuturaNewBook-Reg.ttf"],"fonts/FuturaNewBook-Reg.ttf"],"./FuturaNewBold-Obl.eot":[["FuturaNewBold-Obl.306d2d2f.eot","fonts/FuturaNewBold-Obl.eot"],"fonts/FuturaNewBold-Obl.eot"],"./FuturaNewBold-Obl.woff2":[["FuturaNewBold-Obl.32bb6f80.woff2","fonts/FuturaNewBold-Obl.woff2"],"fonts/FuturaNewBold-Obl.woff2"],"./FuturaNewBold-Obl.woff":[["FuturaNewBold-Obl.32c9e5e3.woff","fonts/FuturaNewBold-Obl.woff"],"fonts/FuturaNewBold-Obl.woff"],"./FuturaNewBold-Obl.ttf":[["FuturaNewBold-Obl.e17b723e.ttf","fonts/FuturaNewBold-Obl.ttf"],"fonts/FuturaNewBold-Obl.ttf"],"./FuturaNewExtraBold-Reg.eot":[["FuturaNewExtraBold-Reg.c3abe0ec.eot","fonts/FuturaNewExtraBold-Reg.eot"],"fonts/FuturaNewExtraBold-Reg.eot"],"./FuturaNewExtraBold-Reg.woff2":[["FuturaNewExtraBold-Reg.fa53a16d.woff2","fonts/FuturaNewExtraBold-Reg.woff2"],"fonts/FuturaNewExtraBold-Reg.woff2"],"./FuturaNewExtraBold-Reg.woff":[["FuturaNewExtraBold-Reg.97f35593.woff","fonts/FuturaNewExtraBold-Reg.woff"],"fonts/FuturaNewExtraBold-Reg.woff"],"./FuturaNewExtraBold-Reg.ttf":[["FuturaNewExtraBold-Reg.b08dad47.ttf","fonts/FuturaNewExtraBold-Reg.ttf"],"fonts/FuturaNewExtraBold-Reg.ttf"],"./FuturaNewLight-Reg.eot":[["FuturaNewLight-Reg.6105a7f2.eot","fonts/FuturaNewLight-Reg.eot"],"fonts/FuturaNewLight-Reg.eot"],"./FuturaNewLight-Reg.woff2":[["FuturaNewLight-Reg.c4300b61.woff2","fonts/FuturaNewLight-Reg.woff2"],"fonts/FuturaNewLight-Reg.woff2"],"./FuturaNewLight-Reg.woff":[["FuturaNewLight-Reg.f7552acb.woff","fonts/FuturaNewLight-Reg.woff"],"fonts/FuturaNewLight-Reg.woff"],"./FuturaNewLight-Reg.ttf":[["FuturaNewLight-Reg.d118a52d.ttf","fonts/FuturaNewLight-Reg.ttf"],"fonts/FuturaNewLight-Reg.ttf"],"./FuturaNewDemi-Reg.eot":[["FuturaNewDemi-Reg.fc63f918.eot","fonts/FuturaNewDemi-Reg.eot"],"fonts/FuturaNewDemi-Reg.eot"],"./FuturaNewDemi-Reg.woff2":[["FuturaNewDemi-Reg.cea411b2.woff2","fonts/FuturaNewDemi-Reg.woff2"],"fonts/FuturaNewDemi-Reg.woff2"],"./FuturaNewDemi-Reg.woff":[["FuturaNewDemi-Reg.b8640fa7.woff","fonts/FuturaNewDemi-Reg.woff"],"fonts/FuturaNewDemi-Reg.woff"],"./FuturaNewDemi-Reg.ttf":[["FuturaNewDemi-Reg.4f9e1a16.ttf","fonts/FuturaNewDemi-Reg.ttf"],"fonts/FuturaNewDemi-Reg.ttf"],"./FuturaNewBold-Reg.eot":[["FuturaNewBold-Reg.453dc80d.eot","fonts/FuturaNewBold-Reg.eot"],"fonts/FuturaNewBold-Reg.eot"],"./FuturaNewBold-Reg.woff2":[["FuturaNewBold-Reg.69e0b9ef.woff2","fonts/FuturaNewBold-Reg.woff2"],"fonts/FuturaNewBold-Reg.woff2"],"./FuturaNewBold-Reg.woff":[["FuturaNewBold-Reg.b7fb3817.woff","fonts/FuturaNewBold-Reg.woff"],"fonts/FuturaNewBold-Reg.woff"],"./FuturaNewBold-Reg.ttf":[["FuturaNewBold-Reg.0a054c80.ttf","fonts/FuturaNewBold-Reg.ttf"],"fonts/FuturaNewBold-Reg.ttf"],"./FuturaNewHeavy-Obl.eot":[["FuturaNewHeavy-Obl.ff0be09e.eot","fonts/FuturaNewHeavy-Obl.eot"],"fonts/FuturaNewHeavy-Obl.eot"],"./FuturaNewHeavy-Obl.woff2":[["FuturaNewHeavy-Obl.e736abba.woff2","fonts/FuturaNewHeavy-Obl.woff2"],"fonts/FuturaNewHeavy-Obl.woff2"],"./FuturaNewHeavy-Obl.woff":[["FuturaNewHeavy-Obl.192860fc.woff","fonts/FuturaNewHeavy-Obl.woff"],"fonts/FuturaNewHeavy-Obl.woff"],"./FuturaNewHeavy-Obl.ttf":[["FuturaNewHeavy-Obl.4faa4515.ttf","fonts/FuturaNewHeavy-Obl.ttf"],"fonts/FuturaNewHeavy-Obl.ttf"],"./schoolbook-cyrillic.eot":[["schoolbook-cyrillic.339d51ef.eot","fonts/schoolbook-cyrillic.eot"],"fonts/schoolbook-cyrillic.eot"],"./schoolbook-cyrillic.otf":[["schoolbook-cyrillic.088aee2d.otf","fonts/schoolbook-cyrillic.otf"],"fonts/schoolbook-cyrillic.otf"],"./schoolbook-cyrillic.svg":[["schoolbook-cyrillic.9f9c64c4.svg","fonts/schoolbook-cyrillic.svg"],"fonts/schoolbook-cyrillic.svg"],"./schoolbook-cyrillic.ttf":[["schoolbook-cyrillic.498ed5cc.ttf","fonts/schoolbook-cyrillic.ttf"],"fonts/schoolbook-cyrillic.ttf"],"./schoolbook-cyrillic.woff":[["schoolbook-cyrillic.2350e9ed.woff","fonts/schoolbook-cyrillic.woff"],"fonts/schoolbook-cyrillic.woff"],"./schoolbook-cyrillic.woff2":[["schoolbook-cyrillic.fd11458f.woff2","fonts/schoolbook-cyrillic.woff2"],"fonts/schoolbook-cyrillic.woff2"],"./schoolbook-bold-cyrillic.eot":[["schoolbook-bold-cyrillic.35766375.eot","fonts/schoolbook-bold-cyrillic.eot"],"fonts/schoolbook-bold-cyrillic.eot"],"./schoolbook-bold-cyrillic.otf":[["schoolbook-bold-cyrillic.60866e79.otf","fonts/schoolbook-bold-cyrillic.otf"],"fonts/schoolbook-bold-cyrillic.otf"],"./schoolbook-bold-cyrillic.svg":[["schoolbook-bold-cyrillic.7c930080.svg","fonts/schoolbook-bold-cyrillic.svg"],"fonts/schoolbook-bold-cyrillic.svg"],"./schoolbook-bold-cyrillic.ttf":[["schoolbook-bold-cyrillic.1889da39.ttf","fonts/schoolbook-bold-cyrillic.ttf"],"fonts/schoolbook-bold-cyrillic.ttf"],"./schoolbook-bold-cyrillic.woff":[["schoolbook-bold-cyrillic.8191c41a.woff","fonts/schoolbook-bold-cyrillic.woff"],"fonts/schoolbook-bold-cyrillic.woff"],"./schoolbook-bold-cyrillic.woff2":[["schoolbook-bold-cyrillic.ae0762cf.woff2","fonts/schoolbook-bold-cyrillic.woff2"],"fonts/schoolbook-bold-cyrillic.woff2"],"_css_loader":"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60626" + '/');

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
//# sourceMappingURL=/stylesheet.ccbd4315.js.map
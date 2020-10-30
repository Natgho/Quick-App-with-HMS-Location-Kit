/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux":
/*!*******************************************************************************************************************!*\
  !*** c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./location.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux!./location.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithlocationkit\\src\\Location\\location.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithlocationkit\\src\\Location\\location.ux!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./location.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux")

$app_define$('@app-component/location', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/location',{ packagerName:'fa-toolkit', packagerVersion: '2.6.2-Stable.302'})

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithlocationkit\\src\\Location\\location.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:\\Users\\s00500551\\.quickapp-ide\\workspace\\com.sezerbozkir.quickappwithlocationkit\\src\\Location\\location.ux!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".mybutton": {
    "fontSize": "30px",
    "borderRadius": "5px",
    "color": "#ffffff",
    "backgroundColor": "#00bfff",
    "width": "80%",
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px"
  },
  ".title": {
    "fontSize": "100px",
    "fontWeight": "bold",
    "color": "#000000"
  },
  ".data_message_shower": {
    "marginTop": "20px",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "Location Finder"
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "To find your place in the application, firstly press the \"Obtain the geographical location\" button. Then click the \"show my location\" button.\n      \n      After your location is determined, \"Get information\" will be automatically called for information about the location. "
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "Obtain the geographical location."
      },
      "classList": [
        "mybutton"
      ],
      "events": {
        "click": "getGeolocation"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "Show my location"
      },
      "classList": [
        "mybutton"
      ],
      "events": {
        "click": "openLocation"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "Get Information"
      },
      "classList": [
        "mybutton"
      ],
      "events": {
        "click": "getInfo"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return (this.received_data)}
      },
      "classList": [
        "data_message_shower"
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=c:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!c:/Users/s00500551/.quickapp-ide/workspace/com.sezerbozkir.quickappwithlocationkit/src/Location/location.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.geolocation"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    information: {},
    received_data: "",
    lat: 41.029032,
    lon: 29.117621
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Location Kit Example',
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5,
      menu: true
    });
  },
  getGeolocation: function getGeolocation() {
    var that = this;

    _system["default"].getLocation({
      coordType: "wgs84",
      timeout: 3000,
      success: function success(ret) {
        that.lat = ret.latitude;
        that.lon = ret.longitude;
        that.received_data += JSON.stringify(ret) + "\n";
        console.log('geolocation success---------' + JSON.stringify(ret));
        that.getInfo();
      },
      fail: function fail(erromsg, errocode) {
        _system2["default"].showToast({
          message: 'geolocation.getLocation----------' + errocode + ': ' + erromsg
        });
      },
      complete: function complete() {
        console.log('geolocation complete----------');
      }
    });
  },
  openLocation: function openLocation() {
    var that = this;

    if (that.lat === 41.029032 && that.lon === 29.117621) {
      that.information['countryName'] = "Huawei";
      that.information['province'] = "Huawei Turkey R&D";

      _system2["default"].showToast({
        message: "The default address is shown."
      });
    }

    _system["default"].openLocation({
      latitude: that.lat,
      longitude: that.lon,
      coordType: "gcj02",
      name: that.information['countryName'],
      address: that.information['province'],
      scale: 18,
      success: function success() {
        console.log('openLocation success . ');
      },
      fail: function fail(erromsg, errocode) {
        console.log('geolocation.openLocation----------' + errocode + ': ' + erromsg);
      },
      complete: function complete() {
        console.log('openLocation complete.');
      }
    });
  },
  getInfo: function getInfo() {
    var that = this;

    _system["default"].reverseGeocodeQuery({
      latitude: that.lat,
      longitude: that.lon,
      coordType: "gcj02",
      includePoiInfo: true,
      success: function success(ret) {
        that.information = ret;
        that.received_data += JSON.stringify(ret) + "\n";
        console.info("### geolocation.reverseGeocodeQuery ###" + JSON.stringify(ret));
      },
      fail: function fail(errormsg, errorcode) {
        console.info("### geolocation.reverseGeocodeQuery ### ".concat(errorcode, ": ").concat(errormsg));
      }
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.',
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.',
            );
        }
    });
}
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXExvY2F0aW9uXFxsb2NhdGlvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvczAwNTAwNTUxLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdC9zcmMvTG9jYXRpb24vbG9jYXRpb24udXg/OTFmOCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvczAwNTAwNTUxLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdC9zcmMvTG9jYXRpb24vbG9jYXRpb24udXg/N2E4MiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvczAwNTAwNTUxLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdC9zcmMvTG9jYXRpb24vbG9jYXRpb24udXg/ZmE2NSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvczAwNTAwNTUxLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdC9zcmMvTG9jYXRpb24vbG9jYXRpb24udXgiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vVXNlcnMvczAwNTAwNTUxLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdC9zcmMvTG9jYXRpb24vbG9jYXRpb24udXhcIik7XG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcz9kZXBlbmRzPSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9sb2NhdGlvbi51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcczAwNTAwNTUxXFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5zZXplcmJvemtpci5xdWlja2FwcHdpdGhsb2NhdGlvbmtpdFxcXFxzcmNcXFxcTG9jYXRpb25cXFxcbG9jYXRpb24udXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxzMDA1MDA1NTFcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLnNlemVyYm96a2lyLnF1aWNrYXBwd2l0aGxvY2F0aW9ua2l0XFxcXHNyY1xcXFxMb2NhdGlvblxcXFxsb2NhdGlvbi51eCEuL2xvY2F0aW9uLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vbG9jYXRpb24udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9sb2NhdGlvbicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvbG9jYXRpb24nLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi42LjItU3RhYmxlLjMwMid9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5teWJ1dHRvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDBiZmZmXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjgwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi5kYXRhX21lc3NhZ2Vfc2hvd2VyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIkxvY2F0aW9uIEZpbmRlclwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogXCJUbyBmaW5kIHlvdXIgcGxhY2UgaW4gdGhlIGFwcGxpY2F0aW9uLCBmaXJzdGx5IHByZXNzIHRoZSBcXFwiT2J0YWluIHRoZSBnZW9ncmFwaGljYWwgbG9jYXRpb25cXFwiIGJ1dHRvbi4gVGhlbiBjbGljayB0aGUgXFxcInNob3cgbXkgbG9jYXRpb25cXFwiIGJ1dHRvbi5cXG4gICAgICBcXG4gICAgICBBZnRlciB5b3VyIGxvY2F0aW9uIGlzIGRldGVybWluZWQsIFxcXCJHZXQgaW5mb3JtYXRpb25cXFwiIHdpbGwgYmUgYXV0b21hdGljYWxseSBjYWxsZWQgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbi4gXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIk9idGFpbiB0aGUgZ2VvZ3JhcGhpY2FsIGxvY2F0aW9uLlwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm15YnV0dG9uXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJnZXRHZW9sb2NhdGlvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJTaG93IG15IGxvY2F0aW9uXCJcbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibXlidXR0b25cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5Mb2NhdGlvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJHZXQgSW5mb3JtYXRpb25cIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJteWJ1dHRvblwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiZ2V0SW5mb1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMucmVjZWl2ZWRfZGF0YSl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRhdGFfbWVzc2FnZV9zaG93ZXJcIlxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIjx0ZW1wbGF0ZT5cbiAgPCEtLSBPbmx5IG9uZSByb290IG5vZGUgaXMgYWxsb3dlZCBpbiB0ZW1wbGF0ZS4gLS0+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+TG9jYXRpb24gRmluZGVyPC90ZXh0PlxuICAgIDx0ZXh0PlRvIGZpbmQgeW91ciBwbGFjZSBpbiB0aGUgYXBwbGljYXRpb24sIGZpcnN0bHkgcHJlc3MgdGhlIFwiT2J0YWluIHRoZSBnZW9ncmFwaGljYWwgbG9jYXRpb25cIiBidXR0b24uIFRoZW4gY2xpY2sgdGhlIFwic2hvdyBteSBsb2NhdGlvblwiIGJ1dHRvbi5cbiAgICAgIFxuICAgICAgQWZ0ZXIgeW91ciBsb2NhdGlvbiBpcyBkZXRlcm1pbmVkLCBcIkdldCBpbmZvcm1hdGlvblwiIHdpbGwgYmUgYXV0b21hdGljYWxseSBjYWxsZWQgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbi5cbiAgICAgIFxuICAgICAgPC90ZXh0PlxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJteWJ1dHRvblwiIG9uY2xpY2s9XCJnZXRHZW9sb2NhdGlvblwiIHZhbHVlPVwiT2J0YWluIHRoZSBnZW9ncmFwaGljYWwgbG9jYXRpb24uXCIgLz5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXlidXR0b25cIiBvbmNsaWNrPVwib3BlbkxvY2F0aW9uXCIgdmFsdWU9XCJTaG93IG15IGxvY2F0aW9uXCIgLz5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXlidXR0b25cIiBvbmNsaWNrPVwiZ2V0SW5mb1wiIHZhbHVlPVwiR2V0IEluZm9ybWF0aW9uXCIgLz5cbiAgICA8dGV4dCBjbGFzcz1cImRhdGFfbWVzc2FnZV9zaG93ZXJcIj57e3JlY2VpdmVkX2RhdGF9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubXlidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmZmZjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICAuZGF0YV9tZXNzYWdlX3Nob3dlciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBnZW9sb2NhdGlvbiBmcm9tICdAc3lzdGVtLmdlb2xvY2F0aW9uJ1xuICBpbXBvcnQgcHJvbXB0IGZyb20gJ0BzeXN0ZW0ucHJvbXB0JztcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgaW5mb3JtYXRpb246IHt9LFxuICAgICAgcmVjZWl2ZWRfZGF0YTogXCJcIixcbiAgICAgIGxhdDogNDEuMDI5MDMyLFxuICAgICAgbG9uOiAyOS4xMTc2MjFcbiAgICB9LFxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICB0ZXh0OiAnTG9jYXRpb24gS2l0IEV4YW1wbGUnLFxuICAgICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwN0RGRicsXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwLjUsXG4gICAgICAgIG1lbnU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0R2VvbG9jYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIGdlb2xvY2F0aW9uLmdldExvY2F0aW9uKHtcbiAgICAgICAgY29vcmRUeXBlOiBcIndnczg0XCIsIC8vSXQgaW5kaWNhdGVzIHRoYXQgdGhlIGdlb2dyYXBoaWNhbCBsb2NhdGlvbiB3aWxsIGJlIHJldHVybmVkIGJ5IGludm9raW5nIHRoZSBzeXN0ZW0gbG9jYXRpb24gYWJpbGl0eS5cbiAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xuICAgICAgICAgIHRoYXQubGF0ID0gcmV0LmxhdGl0dWRlO1xuICAgICAgICAgIHRoYXQubG9uID0gcmV0LmxvbmdpdHVkZTtcbiAgICAgICAgICB0aGF0LnJlY2VpdmVkX2RhdGEgKz0gSlNPTi5zdHJpbmdpZnkocmV0KSArIFwiXFxuXCI7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2dlb2xvY2F0aW9uIHN1Y2Nlc3MtLS0tLS0tLS0nICsgSlNPTi5zdHJpbmdpZnkocmV0KSk7XG4gICAgICAgICAgdGhhdC5nZXRJbmZvKCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9tc2csIGVycm9jb2RlKSB7XG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnZ2VvbG9jYXRpb24uZ2V0TG9jYXRpb24tLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2dcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW9sb2NhdGlvbiBjb21wbGV0ZS0tLS0tLS0tLS0nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb3BlbkxvY2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICBpZiAodGhhdC5sYXQgPT09IDQxLjAyOTAzMiAmJiB0aGF0LmxvbiA9PT0gMjkuMTE3NjIxKSB7XG4gICAgICAgIHRoYXQuaW5mb3JtYXRpb25bJ2NvdW50cnlOYW1lJ10gPSBcIkh1YXdlaVwiO1xuICAgICAgICB0aGF0LmluZm9ybWF0aW9uWydwcm92aW5jZSddID0gXCJIdWF3ZWkgVHVya2V5IFImRFwiO1xuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBkZWZhdWx0IGFkZHJlc3MgaXMgc2hvd24uXCJcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZ2VvbG9jYXRpb24ub3BlbkxvY2F0aW9uKHtcbiAgICAgICAgbGF0aXR1ZGU6IHRoYXQubGF0LFxuICAgICAgICBsb25naXR1ZGU6IHRoYXQubG9uLFxuICAgICAgICBjb29yZFR5cGU6IFwiZ2NqMDJcIixcbiAgICAgICAgbmFtZTogdGhhdC5pbmZvcm1hdGlvblsnY291bnRyeU5hbWUnXSxcbiAgICAgICAgYWRkcmVzczogdGhhdC5pbmZvcm1hdGlvblsncHJvdmluY2UnXSxcbiAgICAgICAgc2NhbGU6IDE4LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ29wZW5Mb2NhdGlvbiBzdWNjZXNzIC4gJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnJvbXNnLCBlcnJvY29kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW9sb2NhdGlvbi5vcGVuTG9jYXRpb24tLS0tLS0tLS0tJyArIGVycm9jb2RlICsgJzogJyArIGVycm9tc2cpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ29wZW5Mb2NhdGlvbiBjb21wbGV0ZS4nKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGdldEluZm86IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIGdlb2xvY2F0aW9uLnJldmVyc2VHZW9jb2RlUXVlcnkoe1xuICAgICAgICBsYXRpdHVkZTogdGhhdC5sYXQsXG4gICAgICAgIGxvbmdpdHVkZTogdGhhdC5sb24sXG4gICAgICAgIGNvb3JkVHlwZTogXCJnY2owMlwiLFxuICAgICAgICBpbmNsdWRlUG9pSW5mbzogdHJ1ZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xuICAgICAgICAgIHRoYXQuaW5mb3JtYXRpb24gPSByZXQ7XG4gICAgICAgICAgdGhhdC5yZWNlaXZlZF9kYXRhICs9IEpTT04uc3RyaW5naWZ5KHJldCkgKyBcIlxcblwiO1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhgIyMjIGdlb2xvY2F0aW9uLnJldmVyc2VHZW9jb2RlUXVlcnkgIyMjYCArIEpTT04uc3RyaW5naWZ5KHJldCkpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnJvcm1zZywgZXJyb3Jjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGAjIyMgZ2VvbG9jYXRpb24ucmV2ZXJzZUdlb2NvZGVRdWVyeSAjIyMgJHtlcnJvcmNvZGV9OiAke2Vycm9ybXNnfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBbkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
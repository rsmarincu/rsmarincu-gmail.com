/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"56d7");


/***/ }),

/***/ "01dd":
/*!**********************************************************************!*\
  !*** ./src/controls/ImageControl.vue?vue&type=template&id=f020096e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ImageControl.vue?vue&type=template&id=f020096e& */ "5c28");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "03b9":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ListControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: [],
      options: []
    };
  },
  methods: {
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    }
  }
});

/***/ }),

/***/ "03ff":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/FileComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete-vue-render-plugin */ "f261");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].mixin],
  components: {
    Socket: rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].Socket
  },
  props: ["icon"]
});

/***/ }),

/***/ "090c":
/*!****************************************!*\
  !*** ./src/components/GetComponent.js ***!
  \****************************************/
/*! exports provided: GetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetComponent", function() { return GetComponent; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");










var GetComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GetComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(GetComponent);

  function GetComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GetComponent);

    _this = _super.call(this, "Get Request");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__["default"];
    _this.data.props = {
      icon: "mdi-web"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GetComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Input("url", "URL", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Output("response", "Response", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      return node.addInput(inp).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var address, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = inputs['url'].length ? inputs['url'][0] : node.data.url;

                if (!address) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(address));

              case 5:
                resp = _context.sent;
                outputs['response'] = JSON.stringify(resp.data, undefined, 4);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                outputs['response'] = "";

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return GetComponent;
}(rete__WEBPACK_IMPORTED_MODULE_6__["default"].Component);

/***/ }),

/***/ "09ec":
/*!****************************************!*\
  !*** ./src/controls/PredictControl.js ***!
  \****************************************/
/*! exports provided: PredictControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictControl", function() { return PredictControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _PredictControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PredictControl.vue */ "107b");






var PredictControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PredictControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(PredictControl);

  function PredictControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PredictControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _PredictControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PredictControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.vueContext.pause;
    }
  }]);

  return PredictControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "0c61":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PredictControl.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["readonly", "emitter", "ikey", "getData", "putData"],
  data: function data() {
    return {
      pause: false,
      switch1: "PAUSE"
    };
  },
  methods: {
    update: function update() {
      if (this.pause) {
        if (this.ikey) {
          this.putData(this.ikey, this.value);
        }

        this.emitter.trigger("process");
      }
    },
    mounted: function mounted() {
      this.value = this.getData(this.ikey);
    },
    swap: function swap() {
      console.log(this.pause);

      if (this.pause) {
        this.switch1 = "RUNNING";
      } else {
        this.switch1 = "PAUSE";
      }

      this.update();
    }
  }
});

/***/ }),

/***/ "0de7":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Editor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url */ "2b3d");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vue_components_ReteEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vue-components/ReteEditor */ "9a19");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    ReteEditor: _vue_components_ReteEditor__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      overlay: false,
      absolute: false,
      view: false,
      datasets: [],
      to_view: null,
      flow: null,
      to_upload: null
    };
  },
  methods: {
    update_datasets: function update_datasets() {
      this.overlay = !this.overlay;
      this.datasets = this.$store.getters.datasets;
    },
    get_dataset: function get_dataset(id) {
      this.to_view = this.$store.getters.dataset(id);
      this.view = !this.view;
    },
    save_flow: function save_flow() {
      var editor = this.$store.getters.editor;
      var data = JSON.stringify(editor);
      var blob = new Blob([data], {
        type: "text/plain"
      });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "flow.json";
      a.click();
    },
    openDatasetDialog: function openDatasetDialog() {
      this.$refs.dataset_upload.click();
    },
    openFlowDialog: function openFlowDialog() {
      this.$refs.flow_upload.click();
    },
    handleDatasetUpload: function handleDatasetUpload(e) {
      var file = e.target.files[0];
      this.datasets.push(file);
    },
    handleFlowUpload: function handleFlowUpload(e) {
      var file = e.target.files[0];
      this.$store.commit("SET_FLUX", file);
    }
  }
});

/***/ }),

/***/ "0f5b":
/*!**************************************************************************************!*\
  !*** ./src/vue-components/ReteEditor.vue?vue&type=template&id=b53f9328&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ReteEditor.vue?vue&type=template&id=b53f9328&scoped=true& */ "9eab");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "0fa5":
/*!**************************************!*\
  !*** ./src/controls/ImageControl.js ***!
  \**************************************/
/*! exports provided: ImageControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageControl", function() { return ImageControl; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url */ "2b3d");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _ImageControl_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageControl.vue */ "a3e6");










var ImageControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ImageControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ImageControl);

  function ImageControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ImageControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _ImageControl_vue__WEBPACK_IMPORTED_MODULE_9__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }, {
    key: "setImageUrl",
    value: function setImageUrl(val) {
      this.vueContext.imageUrl = URL.createObjectURL(val);
    }
  }]);

  return ImageControl;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Control);

/***/ }),

/***/ "107b":
/*!*****************************************!*\
  !*** ./src/controls/PredictControl.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PredictControl.vue?vue&type=template&id=f02307ce& */ "6b1c");
/* harmony import */ var _PredictControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PredictControl.vue?vue&type=script&lang=js& */ "3321");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "b297");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PredictControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_5__["VSwitch"]})


/***/ }),

/***/ "11e3":
/*!**********************************************!*\
  !*** ./src/vue-components/FileComponent.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileComponent.vue?vue&type=template&id=fa00c324&scoped=true& */ "f459");
/* harmony import */ var _FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileComponent.vue?vue&type=script&lang=js& */ "7b09");
/* empty/unused harmony star reexport *//* harmony import */ var _FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileComponent.vue?vue&type=style&index=0&id=fa00c324&scoped=true&lang=sass& */ "9c08");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa00c324",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/***/ }),

/***/ "1708":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/PanelComponent.vue?vue&type=style&index=0&id=4be76ef6&scoped=true&lang=sass& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "17e3":
/*!**************************************!*\
  !*** ./src/controls/TextControl.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextControl.vue?vue&type=template&id=65a5dcd7&scoped=true& */ "eb7f");
/* harmony import */ var _TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextControl.vue?vue&type=script&lang=js& */ "ef72");
/* empty/unused harmony star reexport *//* harmony import */ var _TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextControl.vue?vue&type=style&index=0&id=65a5dcd7&scoped=true&lang=sass& */ "e5ad");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "65a5dcd7",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1997":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/FileControl.vue?vue&type=template&id=03082edb& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[(_vm.completed == false && _vm.inProgress == false)?_c('v-container',[_c('v-row',{attrs:{"justify":"center"}},[_c('v-file-input',{ref:"to_upload",attrs:{"id":"to_upload","outlined":"","dense":"","chips":"","label":"Upload your dataset"},on:{"change":_vm.get_file},model:{value:(_vm.file),callback:function ($$v) {_vm.file=$$v},expression:"file"}})],1),_c('v-row',{attrs:{"justify":"space-between"}},[_c('v-btn',{attrs:{"text":""},on:{"click":function($event){return _vm.handleFileUpload()}}},[_vm._v("Upload")])],1)],1):_vm._e(),(_vm.inProgress == true && _vm.completed == false)?_c('v-container',[_c('div',{staticClass:"text-center"},[_c('v-progress-circular',{attrs:{"size":70,"width":7,"color":"accent","indeterminate":""}})],1)]):_vm._e(),(_vm.completed == true && _vm.inProgress == false)?_c('v-container',[_c('div',{staticClass:"text-center"},[_c('h1',[_vm._v("Done!")])])]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "1bf4":
/*!*********************************************!*\
  !*** ./src/components/MultiplyComponent.js ***!
  \*********************************************/
/*! exports provided: MultiplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplyComponent", function() { return MultiplyComponent; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var MultiplyComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiplyComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiplyComponent);

  function MultiplyComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MultiplyComponent);

    _this = _super.call(this, "Multiply");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    _this.data.props = {
      icon: "mdi-multiplication"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MultiplyComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('multInp1', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var inp2 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('multInp2', "Number2", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('multOut', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"]);
      return node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var n1, n2, sum, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                n1 = inputs['multInp1'].flat();
                n2 = inputs['multInp2'].flat();
                sum = null;
                _context.prev = 3;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('http://fluxusml.com/math/multiply/', {
                  as: n1,
                  bs: n2
                });

              case 6:
                resp = _context.sent;
                sum = resp.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                outputs['multOut'] = null;

              case 13:
                outputs['multOut'] = sum;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return MultiplyComponent;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Component);

/***/ }),

/***/ "1e28":
/*!***************************************************************!*\
  !*** ./src/controls/ListControl.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ListControl.vue?vue&type=script&lang=js& */ "03b9");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "21a1":
/*!************************!*\
  !*** ./src/sockets.js ***!
  \************************/
/*! exports provided: numSocket, textSocket, packageSocket, datasetSocket, listSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numSocket", function() { return numSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSocket", function() { return textSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageSocket", function() { return packageSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasetSocket", function() { return datasetSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSocket", function() { return listSocket; });
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete */ "f5d5");

var numSocket = new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"]("Number Value");
var textSocket = new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"]("Text");
var packageSocket = new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"]("Package");
var datasetSocket = new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"]("Dataset");
var listSocket = new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"]("List");
listSocket.combineWith(textSocket, numSocket, datasetSocket);
textSocket.combineWith(listSocket);
textSocket.combineWith(datasetSocket);
textSocket.combineWith(numSocket);
datasetSocket.combineWith(numSocket);
datasetSocket.combineWith(textSocket);
numSocket.combineWith(datasetSocket);
numSocket.combineWith(listSocket);
numSocket.combineWith(textSocket);


/***/ }),

/***/ "23be":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "ef3c");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2943":
/*!***************************************!*\
  !*** ./src/vue-components/Navbar.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=205ddc81& */ "e990");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "e518");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "0e42");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "afdd");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "2a7f");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_4__["VAppBar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["VToolbarTitle"]})


/***/ }),

/***/ "3021":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=template&id=67502d24& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about"},[_c('v-container',[_c('v-row',{attrs:{"wrap":"","align":"center"}},[_c('v-col',{staticClass:"pt-16 xs-4 md-6"},[_c('h1',{staticClass:"font-weight-black"},[_vm._v("Towards democartizing data science.")]),_c('p',{staticClass:"font-weight-medium"},[_vm._v("Data science is one of the most in-demand fields at the moment. As data made headlines in recent years, people and companies are becoming more aware of the data they produce and how important it is. This paper builds on previous work on low code systems, data visualisation and automated machine learning and proposes a novel way of manipulating and processing data. The scope of this research project is to democratize data science by designing and developing an interactive web application that utilises visual scripting to produce workflows rather than programming. This takes form as a web application named Fluxus, aiming to democratize data science by introducing a low code system which produces workflows. ")])]),_c('v-col',{staticClass:"pt-5 xs-4 md-6"},[_c('img',{attrs:{"src":__webpack_require__(/*! @/assets/undraw_data_reports_706v.svg */ "8025"),"height":"350px","align":"center","justify":"center"}})])],1)],1),_c('v-container',[_c('v-row',{attrs:{"wrap":"","align":"center"}},[_c('v-col',{staticClass:"xs-4 md-6"},[_c('img',{attrs:{"src":__webpack_require__(/*! @/assets/undraw_questions_75e0.svg */ "779d"),"height":"350px"}})]),_c('v-col',{staticClass:"xs-4 md-6"},[_c('h2',[_vm._v("The problem")]),_c('p',[_vm._v("It is argued that knowledge extraction from information is a key competitive advantage (Big data: The next frontier for innovation, competition, and productivity — McKinsey, 2011). Moreover, data technology adoption is a necessity for survival. Forrester states that between 60% and 70% of data within a company is unused (Gualtieri, 2020). One of the reasons for this is that companies need specialised data science teams that have the required knowledge of how to make it valuable. In order to gain significant results and insights from data, advanced knowledge of statistics combined with domain expertise is essential (Shang et al., 2019a). To make data science accessible for anyone, we need to design new frameworks that fundamentally change the way we interact with data (Kraska, 2018a). This problem requires innovative, valuedriven solutions where the technical side is joined by the business (Cavanillas, Curry, and Wahlster, 2016). Now that everybody is becoming more aware of the power data can unleash, questions such as ”Can my data help me achieve something I could not before?” (Cao, 2017). To answer this question, a strong set of foundations adapted from several fields including statistics, mathematics, social science and computer science is needed. A typical workflow that involves data looks like this: Data acquisition → Data processing → Modelling → Deployment → Monitoring A data scientist would have the aforementioned skills and apply them using tools such as Python, R, Tableau, SQL etc. Unfortunately, there is a big gap in the demand for data scientists and the available talent. Even though the world is adopting data as fast as possible, it is being slowed down by the limited talent. It seems that this gap is caused by both the necessary skills in order to interact with data and by the way the interactions occurs. This poses the initial investigative question:")])])],1)],1),_c('v-container',[_c('v-row',{attrs:{"align":"center","justify":"center"}},[_c('h3',{staticClass:"font-italic font-weight-bold"},[_vm._v("How can we gain knowledge from data when traditional data science skills are missing? ")])])],1),_c('v-container',[_c('v-row',{attrs:{"wrap":"","align":"center"}},[_c('v-col',{staticClass:"xs-4 md-6"},[_c('h2',[_vm._v("The solution")]),_c('p',[_vm._v("Breaking down the problem into its two main parts, we first look at how we can change the way we currently work with data, which is through computers. However, computers do not understand human language or numbers, they rely on binary code to read, write and process information. Writing binary code is very difficult, which is why we created assembly languages, which further got abstracted into low-level languages and next into high-level languages. Today, data scientists use these languages in order to manipulate and process data. This paper argues that a further level of abstraction, namely from high-level languages to low code platforms, will allow a new group of users to interact with data. Some of the key aspects that need to be considered while designing such a system are: ")]),_c('ol',[_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Interactivity.")]),_vm._v(" Any action performed needs to have a response time that is lower than 1 second. Anything more than that will result in the user becoming impatient ")]),_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Immersion.")]),_vm._v(" While using the system, the user needs to stay focused on his task and not be distracted by other factors such as the user interface. ")]),_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Intuitive tools.")]),_vm._v(" Each tool and element in the system should have an easily identifiable graphic icon accompanied by a suggestive name. ")])]),_c('p',[_vm._v("The above mentioned will manifest under the form of a canvas where the user can perform drag and drop actions on various tools and elements. By connecting them using virtual wires, the user can create workflows for specific tasks. For example, a small business owner could use his sale records and predict what item may sell in the upcoming months in order to prepare and stock that item. In bigger companies, data scientists can collaborate with business analysts to create compelling stories and visuals in order to persuade a client. Addressing the second part of the problem requires research into how automated machine learning can help with filling the missing skills of users. In an optimal scenario, users should be able to predict the desired label from their dataset. Some of the existing solutions come from open source projects: Auto-Sklearn (Auto-Sklearn, 2020), Auto-WEKA (Auto-Weka, 2020), MLbox (MLBox , 2020), Auto-Keras (AutoKeras, 2020); and some come from big corporations: Google Cloud AutoML (Google Cloud AutoML, 2020), Microsoft Azure AutoML (Microsoft Azure AutoML, 2020), Amazon SageMaker Autopilot (Amazon Sagemaker Autopilot, 2020). For this project, Auto-Sklearn and will be compared with a new proposed workflow, which will be detailed in section 3. Taking into consideration the aforementioned, the question this paper answers becomes:")])]),_c('v-col',{staticClass:"xs-4 md-6",attrs:{"align":"center","justify":"center"}},[_c('img',{attrs:{"src":__webpack_require__(/*! @/assets/undraw_problem_solving_ft81.svg */ "a014"),"height":"350px"}})])],1)],1),_c('v-container',[_c('v-row',{attrs:{"align":"center","justify":"center"}},[_c('h3',{staticClass:"font-italic font-weight-bold"},[_vm._v(" ”Can a low code data science platform allow a user to achieve similar results to a typical data science workflow? Moreover, can he do it with little knowledge of data science?” ")])])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "32e5":
/*!********************************************!*\
  !*** ./src/components/PredictComponent.js ***!
  \********************************************/
/*! exports provided: PredictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictComponent", function() { return PredictComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _controls_PredictControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../controls/PredictControl */ "09ec");















function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function checkForEmpty(obj) {
  for (var key in obj) {
    if (obj[key] === "" || obj[key] == null) {
      return false;
    }
  }

  return true;
}

var PredictComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PredictComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PredictComponent);

  function PredictComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PredictComponent);

    _this = _super.call(this, "Predict");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_11__["default"];
    _this.data.props = {
      icon: "mdi-file-table"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PredictComponent, [{
    key: "builder",
    value: function builder(node) {
      var dataset_id = new rete__WEBPACK_IMPORTED_MODULE_9__["default"].Input("did", "Dataset ID", _sockets__WEBPACK_IMPORTED_MODULE_10__["numSocket"]);
      var task_type = new rete__WEBPACK_IMPORTED_MODULE_9__["default"].Input("ttid", "Task type", _sockets__WEBPACK_IMPORTED_MODULE_10__["numSocket"]);
      var target = new rete__WEBPACK_IMPORTED_MODULE_9__["default"].Input('target', "Target", _sockets__WEBPACK_IMPORTED_MODULE_10__["textSocket"]);
      var predict = new rete__WEBPACK_IMPORTED_MODULE_9__["default"].Input('predict', "Row to predict", _sockets__WEBPACK_IMPORTED_MODULE_10__["datasetSocket"]);
      var result = new rete__WEBPACK_IMPORTED_MODULE_9__["default"].Output('result', 'Result', _sockets__WEBPACK_IMPORTED_MODULE_10__["datasetSocket"]);
      var control = new _controls_PredictControl__WEBPACK_IMPORTED_MODULE_13__["PredictControl"](this.editor, 'pause', true);
      return node.addInput(dataset_id).addInput(task_type).addInput(target).addInput(predict).addOutput(result).addControl(control);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var did, task, target, predict, session_id, ttid, to_check, pause, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                did = inputs['did'][0];
                task = inputs['ttid'][0];
                target = inputs['target'].flat()[0];
                predict = inputs['predict'][0];
                predict = JSON.parse(predict);
                session_id = getRandomInt(1, 100000);
                ttid = null;

                if (task == 'Predict') {
                  ttid = 1;
                } else {
                  ttid = 2;
                }

                to_check = {
                  'did': did,
                  'ttid': ttid,
                  'target': target,
                  'predict': predict,
                  'session_id': session_id
                };
                console.log(to_check);
                pause = this.editor.nodes.find(function (n) {
                  return n.id == node.id;
                }).controls.get('pause').isPaused();
                console.log(pause);

                if (!(checkForEmpty(to_check) && pause)) {
                  _context.next = 27;
                  break;
                }

                console.log("Posting");
                _context.prev = 14;
                _context.next = 17;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post('http://fluxusml.com/compute/load/', to_check);

              case 17:
                resp = _context.sent;
                outputs['result'] = JSON.stringify(resp.data);
                console.log(resp.data);
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](14);
                outputs['result'] = JSON.stringify(to_check);

              case 25:
                _context.next = 29;
                break;

              case 27:
                console.log("Not complete or paused");
                outputs['result'] = JSON.stringify(to_check);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 22]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return PredictComponent;
}(rete__WEBPACK_IMPORTED_MODULE_9__["default"].Component);

/***/ }),

/***/ "3321":
/*!******************************************************************!*\
  !*** ./src/controls/PredictControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PredictControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PredictControl.vue?vue&type=script&lang=js& */ "0c61");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PredictControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "332b":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/NumberControl.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: 0
    };
  },
  methods: {
    change: function change(e) {
      this.value = +e.target.value;
      this.update();
    },
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    }
  },
  mounted: function mounted() {
    this.value = this.getData(this.ikey);
  }
});

/***/ }),

/***/ "360e":
/*!**************************************!*\
  !*** ./src/controls/FileControl.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileControl.vue?vue&type=template&id=03082edb& */ "a15a");
/* harmony import */ var _FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileControl.vue?vue&type=script&lang=js& */ "cd29");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "afdd");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "e9b4");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "22da");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_6__["VFileInput"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_7__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/***/ }),

/***/ "38af":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TextControl.vue?vue&type=style&index=0&id=65a5dcd7&scoped=true&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3cb9":
/*!*************************************!*\
  !*** ./src/controls/TextControl.js ***!
  \*************************************/
/*! exports provided: TextControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextControl", function() { return TextControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _TextControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextControl.vue */ "17e3");






var TextControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TextControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(TextControl);

  function TextControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _TextControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }]);

  return TextControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "3dfd":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c107d780& */ "c8f2");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "23be");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "26a2");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "e00e");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_5__["VMain"]})


/***/ }),

/***/ "3ff7":
/*!**********************************************************************************!*\
  !*** ./src/vue-components/Custom.vue?vue&type=template&id=304b751e&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=template&id=304b751e&scoped=true& */ "7ef9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "402c":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "a026");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "bb71");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]({
  iconfont: 'md',
  theme: {
    dark: false,
    themes: {
      light: {
        accent: "#42A2FB"
      }
    }
  }
}));

/***/ }),

/***/ "41cb":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "a026");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "8c4f");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ "bb51");
/* harmony import */ var _views_Editor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Editor.vue */ "49d7");
/* harmony import */ var _views_About_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/About.vue */ "f820");





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/editor',
    name: 'editor',
    component: _views_Editor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: '/about',
    name: 'about',
    component: _views_About_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }]
}));

/***/ }),

/***/ "4360":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "caad");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "2532");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url.to-json */ "bf19");
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "a026");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "2f62");






vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_5__["default"].Store({
  state: {
    datasets: [],
    flux_file: null,
    editor: null,
    loading: false
  },
  getters: {
    datasets: function datasets(state) {
      return state.datasets;
    },
    dataset: function dataset(state) {
      return function (id) {
        return state.datasets.find(function (dataset) {
          return dataset.id == id;
        });
      };
    },
    flux_file: function flux_file(state) {
      return state.flux_file;
    },
    editor: function editor(state) {
      return state.editor.toJSON();
    }
  },
  mutations: {
    ADD_FILE: function ADD_FILE(state, dataset) {
      if (!state.datasets.includes(dataset)) {
        state.datasets.push(dataset);
      }
    },
    LOAD_FLUX_FILE: function LOAD_FLUX_FILE(state, file) {
      state.flux_file = file;
    },
    SAVE_EDITOR: function SAVE_EDITOR(state, editor) {
      state.editor = editor;
    },
    SET_FLUX: function SET_FLUX(state, file) {
      state.flux_file = file;
    }
  },
  actions: {}
}));

/***/ }),

/***/ "44dc":
/*!****************************************************************!*\
  !*** ./src/vue-components/Custom.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=script&lang=js& */ "f4da");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "4710":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/FileComponent.vue?vue&type=template&id=fa00c324&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"node",class:_vm._f("kebab")([_vm.selected(), _vm.node.name])},[_c('div',{staticClass:"title"},[_c('v-row',{attrs:{"justify":"center"}},[_c('v-icon',{staticClass:"px-3",attrs:{"large":"","color":"accent"}},[_vm._v(_vm._s(_vm.icon))]),_vm._v(" "+_vm._s(_vm.node.name)+" ")],1)],1),_c('div',{staticClass:"col_"},_vm._l((_vm.outputs()),function(output){return _c('div',{key:output.key,staticClass:"output"},[_c('div',{staticClass:"output-title"},[_vm._v(_vm._s(output.name))]),_c('Socket',{directives:[{name:"socket",rawName:"v-socket:output",value:(output),expression:"output",arg:"output"}],attrs:{"type":"output","socket":output.socket,"used":function () { return output.connections.length; }}})],1)}),0),_vm._l((_vm.controls()),function(control){return _c('div',{directives:[{name:"control",rawName:"v-control",value:(control),expression:"control"}],key:control.key,staticClass:"control"})}),_c('div',{staticClass:"col_"},_vm._l((_vm.inputs()),function(input){return _c('div',{key:input.key,staticClass:"input",staticStyle:{"text-align":"left"}},[_c('Socket',{directives:[{name:"socket",rawName:"v-socket:input",value:(input),expression:"input",arg:"input"}],attrs:{"type":"input","socket":input.socket,"used":function () { return input.connections.length; }}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!input.showControl()),expression:"!input.showControl()"}],staticClass:"input-title"},[_vm._v(_vm._s(input.name))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(input.showControl()),expression:"input.showControl()"},{name:"control",rawName:"v-control",value:(input.control),expression:"input.control"}],staticClass:"input-control"})],1)}),0)],2)}
var staticRenderFns = []



/***/ }),

/***/ "491d":
/*!************************************!*\
  !*** ./src/controls/NumControl.js ***!
  \************************************/
/*! exports provided: NumControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumControl", function() { return NumControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _NumberControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberControl.vue */ "b7be");






var NumControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NumControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(NumControl);

  function NumControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _NumberControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }]);

  return NumControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "49d7":
/*!******************************!*\
  !*** ./src/views/Editor.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=4e85080a& */ "8bb0");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "d470");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "afdd");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "99d9");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "a980");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "b810");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "5d23");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "844a");
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "1abc");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemTitle"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__["VNavigationDrawer"],VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_12__["VOverlay"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/***/ }),

/***/ "4e48":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TasksControl.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: [],
      options: ['Predict', 'Classify']
    };
  },
  methods: {
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    }
  }
});

/***/ }),

/***/ "4f4e":
/*!********************************************************************!*\
  !*** ./src/vue-components/ReteEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ReteEditor.vue?vue&type=script&lang=js& */ "ecb8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "53ec":
/*!*********************************************!*\
  !*** ./src/components/SubtractComponent.js ***!
  \*********************************************/
/*! exports provided: SubtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractComponent", function() { return SubtractComponent; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var SubtractComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SubtractComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(SubtractComponent);

  function SubtractComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SubtractComponent);

    _this = _super.call(this, "Subtract");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    _this.data.props = {
      icon: "mdi-minus"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(SubtractComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('subInp1', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var inp2 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('subInp2', "Number2", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('subOut', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"]);
      return node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var n1, n2, sum, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                n1 = inputs['subInp1'].flat();
                n2 = inputs['subInp2'].flat();
                sum = null;
                _context.prev = 3;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('http://fluxusml.com/math/subtract/', {
                  as: n1,
                  bs: n2
                });

              case 6:
                resp = _context.sent;
                sum = resp.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                outputs['subOut'] = null;

              case 13:
                outputs['subOut'] = sum;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return SubtractComponent;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Component);

/***/ }),

/***/ "56d7":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "a026");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/App.vue */ "3dfd");
/* harmony import */ var _assets_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/style.sass */ "756d");
/* harmony import */ var _assets_style_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_style_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router */ "41cb");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/plugins/vuetify */ "402c");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "4360");










vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_7__["default"],
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_8__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_9__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  },
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}).$mount("#app");

/***/ }),

/***/ "57a0":
/*!***************************************!*\
  !*** ./src/vue-components/Custom.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Custom.vue?vue&type=template&id=304b751e&scoped=true& */ "3ff7");
/* harmony import */ var _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Custom.vue?vue&type=script&lang=js& */ "44dc");
/* empty/unused harmony star reexport *//* harmony import */ var _Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Custom.vue?vue&type=style&index=0&id=304b751e&scoped=true&lang=sass& */ "bd6f");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Custom_vue_vue_type_template_id_304b751e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "304b751e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/***/ }),

/***/ "5a54":
/*!********************************************!*\
  !*** ./src/components/ColumnsComponent.js ***!
  \********************************************/
/*! exports provided: ColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function() { return ColumnsComponent; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var ColumnsComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ColumnsComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ColumnsComponent);

  function ColumnsComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ColumnsComponent);

    _this = _super.call(this, "Columns");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    _this.data.props = {
      icon: "mdi-view-column-outline"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ColumnsComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('fileIn', "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_9__["datasetSocket"]);
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('labels', "Labels", _sockets__WEBPACK_IMPORTED_MODULE_9__["listSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('result', "Columns", _sockets__WEBPACK_IMPORTED_MODULE_9__["datasetSocket"]);
      return node.addInput(inp).addInput(inp1).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var file, labels, formData, resp, output_file;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = inputs['fileIn'].length ? inputs['fileIn'][0] : node.data.fileIn;
                labels = inputs['labels'].flat();

                if (!file) {
                  _context.next = 17;
                  break;
                }

                formData = new FormData();
                formData.append('file', file);
                formData.append('labels', labels);
                _context.prev = 6;
                _context.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('http://fluxusml.com/pandas/columns/', formData, {
                  responseType: 'blob'
                });

              case 9:
                resp = _context.sent;
                output_file = new File([resp.data], "export.csv");
                outputs['result'] = output_file;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                outputs['result'] = "";

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 14]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return ColumnsComponent;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Component);

/***/ }),

/***/ "5c28":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ImageControl.vue?vue&type=template&id=f020096e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"uploading-image",attrs:{"src":_vm.imageUrl}})])}
var staticRenderFns = []



/***/ }),

/***/ "608c":
/*!**********************************************************************!*\
  !*** ./src/vue-components/Footer.vue?vue&type=template&id=44a16fa5& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=44a16fa5& */ "7907");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "6154":
/*!****************************************!*\
  !*** ./src/components/AddComponent.js ***!
  \****************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var AddComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(AddComponent);

  function AddComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AddComponent);

    _this = _super.call(this, "Add");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    _this.data.props = {
      icon: "mdi-plus-thick"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AddComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('addInp1', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var inp2 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('addInp2', "Number2", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('addOut', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"]);
      console.log(this.data.props);
      return node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var n1, n2, sum, formData, resp, _resp;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                n1 = inputs['addInp1'].flat();
                n2 = inputs['addInp2'].flat();
                sum = null;

                if (!(n1[0].constructor === File)) {
                  _context.next = 20;
                  break;
                }

                console.log("not array");
                _context.prev = 5;
                formData = new FormData();
                formData.append('file', n1[0]);
                formData.append('bs', n2);
                _context.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/math/add/', formData, {
                  responseType: 'blob'
                });

              case 11:
                resp = _context.sent;
                sum = new File([resp.data], "export.csv");
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                outputs['addOut'] = null;

              case 18:
                _context.next = 30;
                break;

              case 20:
                _context.prev = 20;
                _context.next = 23;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/math/add/', {
                  as: n1,
                  bs: n2
                });

              case 23:
                _resp = _context.sent;
                sum = _resp.data;
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t1 = _context["catch"](20);
                outputs['addOut'] = null;

              case 30:
                outputs['addOut'] = sum;

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 15], [20, 27]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return AddComponent;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Component);

/***/ }),

/***/ "6618":
/*!**************************************!*\
  !*** ./src/controls/ListControl.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListControl.vue?vue&type=template&id=4024245a& */ "ee63");
/* harmony import */ var _ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListControl.vue?vue&type=script&lang=js& */ "1e28");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "b56d");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__["VSelect"]})


/***/ }),

/***/ "6898":
/*!*******************************************!*\
  !*** ./src/components/DivideComponent.js ***!
  \*******************************************/
/*! exports provided: DivideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideComponent", function() { return DivideComponent; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var DivideComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DivideComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(DivideComponent);

  function DivideComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DivideComponent);

    _this = _super.call(this, "Divide");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    _this.data.props = {
      icon: "mdi-division"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DivideComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('divInp1', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var inp2 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('divInp2', "Number2", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('divOut', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"]);
      return node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var n1, n2, sum, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                n1 = inputs['divInp1'].flat();
                n2 = inputs['divInp2'].flat();
                sum = null;
                _context.prev = 3;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('http://fluxusml.com/math/divide/', {
                  as: n1,
                  bs: n2
                });

              case 6:
                resp = _context.sent;
                sum = resp.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                outputs['divOut'] = null;

              case 13:
                outputs['divOut'] = sum;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return DivideComponent;
}(rete__WEBPACK_IMPORTED_MODULE_8__["default"].Component);

/***/ }),

/***/ "6933":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Custom.vue?vue&type=style&index=0&id=304b751e&scoped=true&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6b1c":
/*!************************************************************************!*\
  !*** ./src/controls/PredictControl.vue?vue&type=template&id=f02307ce& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PredictControl.vue?vue&type=template&id=f02307ce& */ "d0c4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PredictControl_vue_vue_type_template_id_f02307ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "6fc6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=6006c8bb&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"home-fluxus pa-0 ma-0",attrs:{"fluid":"","fill-height":""}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-row',{staticClass:"x-row",attrs:{"align":_vm.align_start}},[_c('v-col',{attrs:{"cols":"12","md":"8","xs":"4"}},[_c('v-row',{attrs:{"justify":"start"}},[_c('h1',[_vm._v("Unlock the power of your data.")])]),_c('v-row',{attrs:{"align":"center","justify":"center"}},[_c('h2',[_vm._v("Make informed decisions.")]),_c('v-btn',{staticClass:"ma-10",attrs:{"rounded":"","large":"","color":"accent"},on:{"click":function($event){_vm.overlay = !_vm.overlay}}},[_vm._v(" Demo "),_c('v-icon',[_vm._v("mdi-video")])],1)],1)],1)],1)],1),_c('v-overlay',{attrs:{"value":_vm.overlay}},[_c('v-row',{attrs:{"justify":"center"}},[_c('v-btn',{staticClass:"ma-10",attrs:{"icon":""},on:{"click":function($event){_vm.overlay = false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_c('v-row',[_c('iframe',{attrs:{"width":"1120","height":"630","src":"https://www.youtube.com/embed/LYlu7uS0UQY?controls=0&autoplay=1","frameborder":"0","allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}})])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "701e":
/*!****************************************************************!*\
  !*** ./src/controls/PanelControl.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelControl.vue?vue&type=script&lang=js& */ "a042");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "7130":
/*!***********************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=6006c8bb&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=6006c8bb&scoped=true& */ "6fc6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "71ec":
/*!*****************************************!*\
  !*** ./src/components/FileComponent.js ***!
  \*****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _controls_FileControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls/FileControl */ "e3b4");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_FileComponent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vue-components/FileComponent.vue */ "11e3");









var FileComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FileComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(FileComponent);

  function FileComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileComponent);

    _this = _super.call(this, "Dataset");
    _this.data.component = _vue_components_FileComponent_vue__WEBPACK_IMPORTED_MODULE_8__["default"];
    _this.data.props = {
      icon: "mdi-file-table"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FileComponent, [{
    key: "builder",
    value: function builder(node) {
      var out = new rete__WEBPACK_IMPORTED_MODULE_5__["default"].Output('fileOut', "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_7__["datasetSocket"]);
      var did = new rete__WEBPACK_IMPORTED_MODULE_5__["default"].Output('did', "Dataset ID", _sockets__WEBPACK_IMPORTED_MODULE_7__["numSocket"]);
      return node.addControl(new _controls_FileControl__WEBPACK_IMPORTED_MODULE_6__["FileControl"](this.editor, 'fileOut', true)).addOutput(out).addOutput(did);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      outputs['fileOut'] = node.data.fileOut;
      var did = this.editor.nodes.find(function (n) {
        return n.id == node.id;
      }).controls.get('fileOut').getDid();
      console.log(did);
      outputs['did'] = did;
    }
  }]);

  return FileComponent;
}(rete__WEBPACK_IMPORTED_MODULE_5__["default"].Component);

/***/ }),

/***/ "721e":
/*!**************************************!*\
  !*** ./src/controls/TasksControl.js ***!
  \**************************************/
/*! exports provided: TasksControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksControl", function() { return TasksControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _TasksControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TasksControl.vue */ "795e");






var TasksControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TasksControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(TasksControl);

  function TasksControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TasksControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _TasksControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TasksControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.vueContext.value;
    }
  }]);

  return TasksControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "756d":
/*!*******************************!*\
  !*** ./src/assets/style.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "779d":
/*!**********************************************!*\
  !*** ./src/assets/undraw_questions_75e0.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/undraw_questions_75e0.051f7467.svg";

/***/ }),

/***/ "7832":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Navbar.vue?vue&type=template&id=205ddc81& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('v-app-bar',{attrs:{"flat":"","app":"","color":"white"}},[_c('v-toolbar-title',{staticClass:"text-uppercase grey--text"},[_c('span',{staticClass:"font-weight-light"},[_vm._v("Fluxus")]),_c('span',[_vm._v("ML")])]),_c('v-spacer'),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("Home")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/documentation"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("Documentation")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/about"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("About")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/editor"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","text":"","color":"accent"}},[_c('span',[_vm._v("Editor")]),_c('v-icon',{attrs:{"right":""}},[_vm._v("mdi-exit-to-app")])],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "7886":
/*!***********************************************!*\
  !*** ./src/vue-components/PanelComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& */ "d8f0");
/* harmony import */ var _PanelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelComponent.vue?vue&type=script&lang=js& */ "b576");
/* empty/unused harmony star reexport *//* harmony import */ var _PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelComponent.vue?vue&type=style&index=0&id=4be76ef6&scoped=true&lang=sass& */ "b71f");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PanelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4be76ef6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7907":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Footer.vue?vue&type=template&id=44a16fa5& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (['home', 'about', 'documentation'].includes(_vm.$route.name))?_c('v-footer',{attrs:{"padless":"","fixed":"","inset":"true"}},[_c('v-card',{staticClass:"flex",attrs:{"flat":"","tile":""}},[_c('v-card-title',{staticClass:"white"},[_c('strong',{staticClass:"subheading grey--text"},[_vm._v("Get connected with us on social networks!")]),_c('v-spacer'),_vm._l((_vm.icons),function(icon){return _c('v-btn',{key:icon,staticClass:"mx-4",attrs:{"icon":""}},[_c('v-icon',{attrs:{"size":"24px"}},[_vm._v(_vm._s(icon))])],1)})],2),_c('v-card-text',{staticClass:"py-2 grey--text text-center"},[_vm._v(" "+_vm._s(new Date().getFullYear())+" — "),_c('strong',[_vm._v("FluxusML")])])],1)],1):_vm._e()}
var staticRenderFns = []



/***/ }),

/***/ "795e":
/*!***************************************!*\
  !*** ./src/controls/TasksControl.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksControl.vue?vue&type=template&id=58a8eea2& */ "e9a7");
/* harmony import */ var _TasksControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksControl.vue?vue&type=script&lang=js& */ "f1a9");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "b56d");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasksControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_5__["VSelect"]})


/***/ }),

/***/ "7a9a":
/*!****************************************!*\
  !*** ./src/components/NumComponent.js ***!
  \****************************************/
/*! exports provided: NumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumComponent", function() { return NumComponent; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _controls_NumControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/NumControl */ "491d");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");








var NumComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NumComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(NumComponent);

  function NumComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumComponent);

    _this = _super.call(this, "Number");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    _this.data.props = {
      icon: "mdi-numeric"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumComponent, [{
    key: "builder",
    value: function builder(node) {
      var out1 = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].Output('num', "Number", _sockets__WEBPACK_IMPORTED_MODULE_6__["numSocket"]);
      return node.addControl(new _controls_NumControl__WEBPACK_IMPORTED_MODULE_5__["NumControl"](this.editor, 'num')).addOutput(out1);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      outputs['num'] = node.data.num;
    }
  }]);

  return NumComponent;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Component);

/***/ }),

/***/ "7abe":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/FileComponent.vue?vue&type=style&index=0&id=fa00c324&scoped=true&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7ad4":
/*!*****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "ddbe");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "7b09":
/*!***********************************************************************!*\
  !*** ./src/vue-components/FileComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileComponent.vue?vue&type=script&lang=js& */ "03ff");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "7ef9":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Custom.vue?vue&type=template&id=304b751e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"node",class:_vm._f("kebab")([_vm.selected(), _vm.node.name])},[_c('div',{staticClass:"title"},[_c('v-row',{attrs:{"justify":"center"}},[_c('v-icon',{staticClass:"px-3",attrs:{"large":"","left":"","color":"accent"}},[_vm._v(_vm._s(_vm.icon))]),_vm._v(" "+_vm._s(_vm.node.name)+" ")],1)],1),_c('div',{staticClass:"col_"},_vm._l((_vm.outputs()),function(output){return _c('div',{key:output.key,staticClass:"output"},[_c('div',{staticClass:"output-title"},[_vm._v(_vm._s(output.name))]),_c('Socket',{directives:[{name:"socket",rawName:"v-socket:output",value:(output),expression:"output",arg:"output"}],attrs:{"type":"output","socket":output.socket,"used":function () { return output.connections.length; }}})],1)}),0),_vm._l((_vm.controls()),function(control){return _c('div',{directives:[{name:"control",rawName:"v-control",value:(control),expression:"control"}],key:control.key,staticClass:"control"})}),_c('div',{staticClass:"col_"},_vm._l((_vm.inputs()),function(input){return _c('div',{key:input.key,staticClass:"input",staticStyle:{"text-align":"left"}},[_c('Socket',{directives:[{name:"socket",rawName:"v-socket:input",value:(input),expression:"input",arg:"input"}],attrs:{"type":"input","socket":input.socket,"used":function () { return input.connections.length; }}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!input.showControl()),expression:"!input.showControl()"}],staticClass:"input-title"},[_vm._v(_vm._s(input.name))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(input.showControl()),expression:"input.showControl()"},{name:"control",rawName:"v-control",value:(input.control),expression:"input.control"}],staticClass:"input-control"})],1)}),0)],2)}
var staticRenderFns = []



/***/ }),

/***/ "8025":
/*!*************************************************!*\
  !*** ./src/assets/undraw_data_reports_706v.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/undraw_data_reports_706v.915d24cc.svg";

/***/ }),

/***/ "8421":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=style&index=0&id=6006c8bb&lang=sass&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "84214":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/PanelComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete-vue-render-plugin */ "f261");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].mixin],
  components: {
    Socket: rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].Socket
  }
});

/***/ }),

/***/ "866b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ImageControl.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: null,
      imageUrl: null,
      image: null
    };
  }
});

/***/ }),

/***/ "8681":
/*!****************************************************************!*\
  !*** ./src/vue-components/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "bc5b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "895f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/NumberControl.vue?vue&type=template&id=6a29f7ff& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"number","readonly":_vm.readonly},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.change($event)},"dblclick":function($event){$event.stopPropagation();},"pointerdown":function($event){$event.stopPropagation();},"pointermove":function($event){$event.stopPropagation();}}})}
var staticRenderFns = []



/***/ }),

/***/ "8bb0":
/*!*************************************************************!*\
  !*** ./src/views/Editor.vue?vue&type=template&id=4e85080a& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=4e85080a& */ "d3eb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_4e85080a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8edd":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TasksControl.vue?vue&type=template&id=58a8eea2& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-col',{attrs:{"cols":"12","sm":"12"}},[_c('v-select',{attrs:{"items":_vm.options,"label":"Select","chips":"","outlined":"","dense":""},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "8ef1":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: createFlowEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFlowEditor", function() { return createFlowEditor; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url.to-json */ "bf19");
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete-vue-render-plugin */ "f261");
/* harmony import */ var rete_connection_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete-connection-plugin */ "1be2");
/* harmony import */ var rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rete-context-menu-plugin */ "1b64");
/* harmony import */ var rete_area_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete-area-plugin */ "def2");
/* harmony import */ var rete_comment_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rete-comment-plugin */ "9add");
/* harmony import */ var rete_history_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rete-history-plugin */ "0ef5");
/* harmony import */ var rete_connection_mastery_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rete-connection-mastery-plugin */ "4051");
/* harmony import */ var rete_keyboard_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rete-keyboard-plugin */ "559a");
/* harmony import */ var rete_keyboard_plugin__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rete_keyboard_plugin__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_NumComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/NumComponent */ "7a9a");
/* harmony import */ var _components_AddComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/AddComponent */ "6154");
/* harmony import */ var _components_DivideComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/DivideComponent */ "6898");
/* harmony import */ var _components_TextComponents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/TextComponents */ "b740");
/* harmony import */ var _components_GetComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/GetComponent */ "090c");
/* harmony import */ var _components_PanelComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/PanelComponent */ "aea8");
/* harmony import */ var _components_FileComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/FileComponent */ "71ec");
/* harmony import */ var _components_LabelsComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/LabelsComponent */ "cba0");
/* harmony import */ var _components_ListComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ListComponent */ "c628");
/* harmony import */ var _components_HistogramComponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/HistogramComponent */ "9730");
/* harmony import */ var _components_MultiplyComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/MultiplyComponent */ "1bf4");
/* harmony import */ var _components_SubtractComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/SubtractComponent */ "53ec");
/* harmony import */ var _components_ColumnsComponent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ColumnsComponent */ "5a54");
/* harmony import */ var _components_TasksComponent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/TasksComponent */ "ba01");
/* harmony import */ var _components_PredictComponent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/PredictComponent */ "32e5");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! vuetify/lib */ "bb71");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/store */ "4360");






























function createFlowEditor() {
  return _createFlowEditor.apply(this, arguments);
}

function _createFlowEditor() {
  _createFlowEditor = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var container, components, reader, editor, engine, dataset;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            container = document.querySelector('#rete');
            components = [new _components_NumComponent__WEBPACK_IMPORTED_MODULE_13__["NumComponent"](), new _components_AddComponent__WEBPACK_IMPORTED_MODULE_14__["AddComponent"](), new _components_DivideComponent__WEBPACK_IMPORTED_MODULE_15__["DivideComponent"](), new _components_MultiplyComponent__WEBPACK_IMPORTED_MODULE_23__["MultiplyComponent"](), new _components_SubtractComponent__WEBPACK_IMPORTED_MODULE_24__["SubtractComponent"](), new _components_TextComponents__WEBPACK_IMPORTED_MODULE_16__["TextComponent"](), new _components_GetComponent__WEBPACK_IMPORTED_MODULE_17__["GetComponent"](), new _components_PanelComponent__WEBPACK_IMPORTED_MODULE_18__["PanelComponent"](), new _components_FileComponent__WEBPACK_IMPORTED_MODULE_19__["FileComponent"](), new _components_LabelsComponent__WEBPACK_IMPORTED_MODULE_20__["LabelsComponent"](), new _components_ListComponent__WEBPACK_IMPORTED_MODULE_21__["ListComponent"](), new _components_HistogramComponent__WEBPACK_IMPORTED_MODULE_22__["HistogramComponent"](), new _components_ColumnsComponent__WEBPACK_IMPORTED_MODULE_25__["ColumnsComponent"](), new _components_TasksComponent__WEBPACK_IMPORTED_MODULE_26__["TasksComponent"](), new _components_PredictComponent__WEBPACK_IMPORTED_MODULE_27__["PredictComponent"]()];
            reader = new FileReader();
            editor = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].NodeEditor('demo@0.1.0', container);
            editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]);
            editor.use(rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_5__["default"], {
              options: {
                vuetify: new vuetify_lib__WEBPACK_IMPORTED_MODULE_28__["default"](),
                store: _store__WEBPACK_IMPORTED_MODULE_29__["default"]
              }
            });
            editor.use(rete_area_plugin__WEBPACK_IMPORTED_MODULE_8__["default"]);
            editor.use(rete_comment_plugin__WEBPACK_IMPORTED_MODULE_9__["default"]);
            editor.use(rete_history_plugin__WEBPACK_IMPORTED_MODULE_10__["default"]);
            editor.use(rete_connection_mastery_plugin__WEBPACK_IMPORTED_MODULE_11__["default"]);
            editor.use(rete_keyboard_plugin__WEBPACK_IMPORTED_MODULE_12___default.a);
            editor.use(rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]);
            engine = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].Engine('demo@0.1.0');
            components.map(function (c) {
              editor.register(c);
              engine.register(c);
            });
            _context2.next = 16;
            return new _components_FileComponent__WEBPACK_IMPORTED_MODULE_19__["FileComponent"]().createNode();

          case 16:
            dataset = _context2.sent;
            dataset.position = [0, 0];
            editor.addNode(dataset);
            editor.on('process nodecreated noderemoved connectioncreated connectionremoved', /*#__PURE__*/Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('process');
                      _context.next = 3;
                      return engine.abort();

                    case 3:
                      _context.next = 5;
                      return engine.process(editor.toJSON());

                    case 5:
                      _store__WEBPACK_IMPORTED_MODULE_29__["default"].commit("SAVE_EDITOR", editor);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
            editor.view.resize();
            rete_area_plugin__WEBPACK_IMPORTED_MODULE_8__["default"].zoomAt(editor);
            _store__WEBPACK_IMPORTED_MODULE_29__["default"].subscribe(function (mutation, state) {
              if (mutation.type === "SET_FLUX") {
                var file = state.flux_file;
                reader.readAsText(file, "UTF-8");

                reader.onloadend = function () {
                  editor.fromJSON(JSON.parse(reader.result));
                  editor.trigger('process');
                };
              }
            });
            editor.trigger('process');

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createFlowEditor.apply(this, arguments);
}

/***/ }),

/***/ "9426":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PanelControl.vue?vue&type=style&index=0&id=79f52a26&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9730":
/*!**********************************************!*\
  !*** ./src/components/HistogramComponent.js ***!
  \**********************************************/
/*! exports provided: HistogramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramComponent", function() { return HistogramComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "2b3d");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var _controls_ImageControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../controls/ImageControl */ "0fa5");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
















var HistogramComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(HistogramComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__["default"])(HistogramComponent);

  function HistogramComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, HistogramComponent);

    _this = _super.call(this, "Histogram");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_13__["default"];
    _this.data.props = {
      icon: "mdi-chart-histogram"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(HistogramComponent, [{
    key: "builder",
    value: function builder(node) {
      var dataset = new rete__WEBPACK_IMPORTED_MODULE_11__["default"].Input("dataset", "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_12__["datasetSocket"]);
      var x_axis = new rete__WEBPACK_IMPORTED_MODULE_11__["default"].Input("x_axis", "X Axis", _sockets__WEBPACK_IMPORTED_MODULE_12__["listSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_11__["default"].Output("selected", "Selected", _sockets__WEBPACK_IMPORTED_MODULE_12__["listSocket"]);
      return node.addInput(dataset).addInput(x_axis).addControl(new _controls_ImageControl__WEBPACK_IMPORTED_MODULE_14__["ImageControl"](this.editor, 'preview', true)).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var file, x_axis, formData, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = inputs['dataset'][0];
                x_axis = inputs['x_axis'][0];
                formData = new FormData();
                formData.append('file', file);
                formData.append('x-axis', x_axis);
                _context.prev = 5;
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('http://fluxusml.com/visualisation/histogram/', formData, {
                  responseType: 'blob'
                });

              case 8:
                resp = _context.sent;
                this.editor.nodes.find(function (n) {
                  return n.id == node.id;
                }).controls.get('preview').setImageUrl(resp.data);
                outputs['result'] = URL.createObjectURL(resp.data);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](5);
                outputs['result'] = null;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 13]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return HistogramComponent;
}(rete__WEBPACK_IMPORTED_MODULE_11__["default"].Component);

/***/ }),

/***/ "9a19":
/*!*******************************************!*\
  !*** ./src/vue-components/ReteEditor.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=template&id=b53f9328&scoped=true& */ "0f5b");
/* harmony import */ var _ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=script&lang=js& */ "4f4e");
/* empty/unused harmony star reexport *//* harmony import */ var _ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=style&index=0&id=b53f9328&lang=sass&scoped=true& */ "fc59");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReteEditor_vue_vue_type_template_id_b53f9328_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b53f9328",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9c08":
/*!********************************************************************************************************!*\
  !*** ./src/vue-components/FileComponent.vue?vue&type=style&index=0&id=fa00c324&scoped=true&lang=sass& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileComponent.vue?vue&type=style&index=0&id=fa00c324&scoped=true&lang=sass& */ "7abe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_fa00c324_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9eab":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/ReteEditor.vue?vue&type=template&id=b53f9328&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{ref:"rete",staticClass:"node-editor",attrs:{"id":"rete"}})])}
var staticRenderFns = []



/***/ }),

/***/ "9f08":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TextControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: ''
    };
  },
  methods: {
    change: function change(e) {
      this.value = e.target.value;
      this.update();
    },
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    }
  },
  mounted: function mounted() {
    this.value = this.getData(this.ikey);
  }
});

/***/ }),

/***/ "a014":
/*!****************************************************!*\
  !*** ./src/assets/undraw_problem_solving_ft81.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/undraw_problem_solving_ft81.b6322055.svg";

/***/ }),

/***/ "a042":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PanelControl.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data: function data() {
    return {
      value: ''
    };
  },
  methods: {
    change: function change(e) {
      this.value = e.target.value;
      this.update();
    },
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    }
  },
  mounted: function mounted() {
    this.value = this.getData(this.ikey);
  }
});

/***/ }),

/***/ "a05e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ListControl.vue?vue&type=template&id=4024245a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-col',{attrs:{"cols":"12","sm":"12"}},[_c('v-select',{attrs:{"items":_vm.options,"label":"Select","multiple":"","chips":"","outlined":"","dense":""},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "a15a":
/*!*********************************************************************!*\
  !*** ./src/controls/FileControl.vue?vue&type=template&id=03082edb& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileControl.vue?vue&type=template&id=03082edb& */ "1997");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_03082edb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "a272":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=c107d780& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{staticClass:"grey lighten-4"},[_c('Navbar'),_c('v-main',{staticClass:"mx-4 mb-4"},[_c('router-view')],1),_c('Footer')],1)}
var staticRenderFns = []



/***/ }),

/***/ "a3e6":
/*!***************************************!*\
  !*** ./src/controls/ImageControl.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageControl.vue?vue&type=template&id=f020096e& */ "01dd");
/* harmony import */ var _ImageControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageControl.vue?vue&type=script&lang=js& */ "acb0");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a9d9":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"node",class:_vm._f("kebab")([_vm.selected(), _vm.node.name])},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.node.name))]),_c('div',{staticClass:"col_"},_vm._l((_vm.outputs()),function(output){return _c('div',{key:output.key,staticClass:"output"},[_c('div',{staticClass:"output-title"},[_vm._v(_vm._s(output.name))]),_c('Socket',{directives:[{name:"socket",rawName:"v-socket:output",value:(output),expression:"output",arg:"output"}],attrs:{"type":"output","socket":output.socket,"used":function () { return output.connections.length; }}})],1)}),0),_vm._l((_vm.controls()),function(control){return _c('div',{directives:[{name:"control",rawName:"v-control",value:(control),expression:"control"}],key:control.key,staticClass:"control"})}),_vm._l((_vm.inputs()),function(input){return _c('div',{key:input.key,staticClass:"input",staticStyle:{"text-align":"left"}},[_c('Socket',{directives:[{name:"socket",rawName:"v-socket:input",value:(input),expression:"input",arg:"input"}],attrs:{"type":"input","socket":input.socket,"used":function () { return input.connections.length; }}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!input.showControl()),expression:"!input.showControl()"}],staticClass:"input-title"},[_vm._v(_vm._s(input.name))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(input.showControl()),expression:"input.showControl()"},{name:"control",rawName:"v-control",value:(input.control),expression:"input.control"}],staticClass:"input-control"})],1)})],2)}
var staticRenderFns = []



/***/ }),

/***/ "acb0":
/*!****************************************************************!*\
  !*** ./src/controls/ImageControl.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ImageControl.vue?vue&type=script&lang=js& */ "866b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "adff":
/*!************************************************************!*\
  !*** ./src/views/About.vue?vue&type=template&id=67502d24& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=67502d24& */ "3021");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "aea8":
/*!******************************************!*\
  !*** ./src/components/PanelComponent.js ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _vue_components_PanelComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vue-components/PanelComponent.vue */ "7886");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _controls_PanelControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls/PanelControl */ "cee6");









var PanelComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PanelComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(PanelComponent);

  function PanelComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PanelComponent);

    _this = _super.call(this, "Panel");
    _this.data.component = _vue_components_PanelComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"];
    _this.data.props = {
      icon: "mdi-tooltip-text-outline"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PanelComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_5__["default"].Input('panelInput', "Text", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_5__["default"].Output('panelOut', "Text", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      return node.addInput(inp).addControl(new _controls_PanelControl__WEBPACK_IMPORTED_MODULE_8__["PanelControl"](this.editor, 'preview', true)).addOutput(out);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      var text = inputs['panelInput'].length ? inputs['panelInput'][0] : node.data.panelInput;
      this.editor.nodes.find(function (n) {
        return n.id == node.id;
      }).controls.get('preview').setValue(text);
      outputs['panelOut'] = text;
    }
  }]);

  return PanelComponent;
}(rete__WEBPACK_IMPORTED_MODULE_5__["default"].Component);

/***/ }),

/***/ "afc6":
/*!***************************************!*\
  !*** ./src/vue-components/Footer.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=44a16fa5& */ "608c");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "8681");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "afdd");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "99d9");
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "c42d");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_44a16fa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_6__["VFooter"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"]})


/***/ }),

/***/ "b576":
/*!************************************************************************!*\
  !*** ./src/vue-components/PanelComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelComponent.vue?vue&type=script&lang=js& */ "84214");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b71f":
/*!*********************************************************************************************************!*\
  !*** ./src/vue-components/PanelComponent.vue?vue&type=style&index=0&id=4be76ef6&scoped=true&lang=sass& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelComponent.vue?vue&type=style&index=0&id=4be76ef6&scoped=true&lang=sass& */ "1708");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_style_index_0_id_4be76ef6_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b740":
/*!******************************************!*\
  !*** ./src/components/TextComponents.js ***!
  \******************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _controls_TextControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls/TextControl */ "3cb9");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");








var TextComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TextComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(TextComponent);

  function TextComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextComponent);

    _this = _super.call(this, "Text");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextComponent, [{
    key: "builder",
    value: function builder(node) {
      var out = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].Output('str', 'Text', _sockets__WEBPACK_IMPORTED_MODULE_5__["textSocket"]);
      return node.addControl(new _controls_TextControl__WEBPACK_IMPORTED_MODULE_6__["TextControl"](this.editor, 'str')).addOutput(out);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      outputs['str'] = node.data.str;
    }
  }]);

  return TextComponent;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Component);

/***/ }),

/***/ "b7be":
/*!****************************************!*\
  !*** ./src/controls/NumberControl.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberControl.vue?vue&type=template&id=6a29f7ff& */ "ee81");
/* harmony import */ var _NumberControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberControl.vue?vue&type=script&lang=js& */ "bc27");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NumberControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ba01":
/*!******************************************!*\
  !*** ./src/components/TasksComponent.js ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var _controls_TasksControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls/TasksControl */ "721e");









var TasksComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TasksComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(TasksComponent);

  function TasksComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TasksComponent);

    _this = _super.call(this, "Select task");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    _this.data.props = {
      icon: "mdi-format-list-bulleted"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TasksComponent, [{
    key: "builder",
    value: function builder(node) {
      var out = new rete__WEBPACK_IMPORTED_MODULE_5__["default"].Output("task", "Task", _sockets__WEBPACK_IMPORTED_MODULE_6__["numSocket"]);
      return node.addControl(new _controls_TasksControl__WEBPACK_IMPORTED_MODULE_8__["TasksControl"](this.editor, 'preview', true)).addOutput(out);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      outputs['task'] = this.editor.nodes.find(function (n) {
        return n.id == node.id;
      }).controls.get('preview').getValue();
    }
  }]);

  return TasksComponent;
}(rete__WEBPACK_IMPORTED_MODULE_5__["default"].Component);

/***/ }),

/***/ "bb51":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6006c8bb&scoped=true& */ "7130");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "7ad4");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=6006c8bb&lang=sass&scoped=true& */ "e29a");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "afdd");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "1abc");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_6006c8bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6006c8bb",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_8__["VOverlay"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/***/ }),

/***/ "bc27":
/*!*****************************************************************!*\
  !*** ./src/controls/NumberControl.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./NumberControl.vue?vue&type=script&lang=js& */ "332b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "bc5b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    };
  }
});

/***/ }),

/***/ "bd6f":
/*!*************************************************************************************************!*\
  !*** ./src/vue-components/Custom.vue?vue&type=style&index=0&id=304b751e&scoped=true&lang=sass& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=style&index=0&id=304b751e&scoped=true&lang=sass& */ "6933");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_304b751e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c13e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TextControl.vue?vue&type=template&id=65a5dcd7&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{attrs:{"readonly":_vm.readonly},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.change($event)}}})}
var staticRenderFns = []



/***/ }),

/***/ "c533":
/*!*************************************!*\
  !*** ./src/controls/ListControl.js ***!
  \*************************************/
/*! exports provided: ListControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControl", function() { return ListControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _ListControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListControl.vue */ "6618");






var ListControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ListControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(ListControl);

  function ListControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _ListControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }, {
    key: "setOptions",
    value: function setOptions(val) {
      this.vueContext.options = val;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.vueContext.value;
    }
  }]);

  return ListControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "c628":
/*!*****************************************!*\
  !*** ./src/components/ListComponent.js ***!
  \*****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var _controls_ListControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../controls/ListControl */ "c533");











var ListComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ListComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(ListComponent);

  function ListComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListComponent);

    _this = _super.call(this, "Select items");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__["default"];
    _this.data.props = {
      icon: "mdi-format-list-bulleted"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_7__["default"].Input("items", "Items", _sockets__WEBPACK_IMPORTED_MODULE_8__["listSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_7__["default"].Output("selected", "Selected", _sockets__WEBPACK_IMPORTED_MODULE_8__["listSocket"]);
      return node.addInput(inp).addControl(new _controls_ListControl__WEBPACK_IMPORTED_MODULE_10__["ListControl"](this.editor, 'preview', true)).addOutput(out);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      var items = inputs['items'];
      this.editor.nodes.find(function (n) {
        return n.id == node.id;
      }).controls.get('preview').setOptions(items.flat());
      outputs['selected'] = this.editor.nodes.find(function (n) {
        return n.id == node.id;
      }).controls.get('preview').getValue();
    }
  }]);

  return ListComponent;
}(rete__WEBPACK_IMPORTED_MODULE_7__["default"].Component);

/***/ }),

/***/ "c8f2":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=c107d780& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c107d780& */ "a272");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "caf4":
/*!**********************************************************************************!*\
  !*** ./src/controls/PanelControl.vue?vue&type=template&id=79f52a26&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelControl.vue?vue&type=template&id=79f52a26&scoped=true& */ "dbda");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "cba0":
/*!*******************************************!*\
  !*** ./src/components/LabelsComponent.js ***!
  \*******************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);











var LabelsComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LabelsComponent, _Rete$Component);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(LabelsComponent);

  function LabelsComponent() {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LabelsComponent);

    _this = _super.call(this, "Labels");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_8__["default"];
    _this.data.props = {
      icon: "mdi-label"
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LabelsComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Input('fileIn', "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_7__["datasetSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Output('result', "Labels", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      return node.addInput(inp).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
        var file, formData, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = inputs['fileIn'].length ? inputs['fileIn'][0] : node.data.fileIn;

                if (!file) {
                  _context.next = 14;
                  break;
                }

                formData = new FormData();
                formData.append('file', file);
                _context.prev = 4;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('http://fluxusml.com/pandas/labels/', formData);

              case 7:
                resp = _context.sent;
                outputs['result'] = resp.data;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                outputs['result'] = "";

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }));

      function worker(_x, _x2, _x3) {
        return _worker.apply(this, arguments);
      }

      return worker;
    }()
  }]);

  return LabelsComponent;
}(rete__WEBPACK_IMPORTED_MODULE_6__["default"].Component);

/***/ }),

/***/ "cd29":
/*!***************************************************************!*\
  !*** ./src/controls/FileControl.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileControl.vue?vue&type=script&lang=js& */ "f8c3");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "cd6e":
/*!************************************************************************************************!*\
  !*** ./src/controls/PanelControl.vue?vue&type=style&index=0&id=79f52a26&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelControl.vue?vue&type=style&index=0&id=79f52a26&scoped=true&lang=css& */ "9426");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cee6":
/*!**************************************!*\
  !*** ./src/controls/PanelControl.js ***!
  \**************************************/
/*! exports provided: PanelControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelControl", function() { return PanelControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _PanelControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PanelControl.vue */ "d33b");






var PanelControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PanelControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(PanelControl);

  function PanelControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PanelControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _PanelControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PanelControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }]);

  return PanelControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "d0c4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PredictControl.vue?vue&type=template&id=f02307ce& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',{attrs:{"justify":"center"}},[_c('v-switch',{attrs:{"label":("" + _vm.switch1)},on:{"change":_vm.swap},model:{value:(_vm.pause),callback:function ($$v) {_vm.pause=$$v},expression:"pause"}})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "d33b":
/*!***************************************!*\
  !*** ./src/controls/PanelControl.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=template&id=79f52a26&scoped=true& */ "caf4");
/* harmony import */ var _PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=script&lang=js& */ "701e");
/* empty/unused harmony star reexport *//* harmony import */ var _PanelControl_vue_vue_type_style_index_0_id_79f52a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=style&index=0&id=79f52a26&scoped=true&lang=css& */ "cd6e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "1233");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelControl_vue_vue_type_template_id_79f52a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79f52a26",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_5__["VTextarea"]})


/***/ }),

/***/ "d3eb":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Editor.vue?vue&type=template&id=4e85080a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-menu"},[_c('ReteEditor'),_c('v-navigation-drawer',{attrs:{"permanent":"","fixed":"","expand-on-hover":"","app":"","clipped":"","left":"","floating":""}},[_c('v-list',[_c('v-list-item',{staticClass:"px-2",attrs:{"justify":"center"}},[_c('v-list-item-avatar',{attrs:{"size":"48","color":"accent"}},[_c('span',{staticClass:"white--text headline"},[_vm._v("RM")])])],1),_c('v-list-item',{attrs:{"link":""}},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"title"},[_vm._v("Robert Marincu")]),_c('v-list-item-subtitle',[_vm._v("rsmarincu@gmail.com")])],1)],1)],1),_c('v-divider'),_c('v-list',{attrs:{"nav":"","dense":""}},[_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.update_datasets()}}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-file-table-box-multiple-outline")])],1),_c('v-list-item-title',[_vm._v("Live datasets")])],1),_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.openDatasetDialog()}}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-cloud-upload-outline")])],1),_c('v-list-item-title',[_vm._v("Load dataset")]),_c('input',{ref:"dataset_upload",staticStyle:{"display":"none"},attrs:{"type":"file"},on:{"change":_vm.handleDatasetUpload}})],1),_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.save_flow()}}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-content-save-outline")])],1),_c('v-list-item-title',[_vm._v("Save flow")])],1),_c('v-list-item',{attrs:{"link":""},on:{"click":function($event){return _vm.openFlowDialog()}}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-folder-open-outline")])],1),_c('v-list-item-title',[_vm._v("Load flow")]),_c('input',{ref:"flow_upload",staticStyle:{"display":"none"},attrs:{"type":"file"},on:{"change":_vm.handleFlowUpload}})],1)],1)],1),_c('v-overlay',{staticClass:"d-flex align-start",attrs:{"absolute":_vm.absolute,"value":_vm.overlay}},[_c('v-container',[_c('v-row',{attrs:{"justify":"center"}},[_c('v-btn',{staticClass:"m-10",attrs:{"icon":""},on:{"click":function($event){_vm.overlay=false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_c('v-row',_vm._l((_vm.datasets),function(dataset){return _c('v-card',{key:dataset,staticClass:"ma-10",attrs:{"color":"white","justify":"center"}},[_c('v-card-text',[_c('p',{staticClass:"display-1 text--primary"},[_vm._v(_vm._s(dataset.id))])]),_c('v-card-actions',{attrs:{"justify":"center"}},[_c('v-btn',{attrs:{"text":"","color":"grey"},on:{"click":function($event){return _vm.get_dataset(dataset.id)}}},[_vm._v(" View "),_c('v-icon',[_vm._v("mdi-file-find")])],1)],1)],1)}),1)],1),_c('v-overlay',{staticClass:"d-flex align-start",attrs:{"absolute":_vm.absolute,"value":_vm.view}},[_c('v-container',[_c('v-row',{attrs:{"justify":"center"}},[_c('v-btn',{staticClass:"m-10",attrs:{"icon":""},on:{"click":function($event){_vm.view=false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_c('v-row',[(_vm.to_view != null)?_c('v-data-table',{attrs:{"headers":_vm.to_view.headers,"items":_vm.to_view.items,"items-per-page":20}}):_vm._e()],1)],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "d470":
/*!*******************************************************!*\
  !*** ./src/views/Editor.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "0de7");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "d8f0":
/*!******************************************************************************************!*\
  !*** ./src/vue-components/PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& */ "a9d9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "dbda":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PanelControl.vue?vue&type=template&id=79f52a26&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-textarea',{attrs:{"auto-grow":"","rows":"22","label":"Text","value":_vm.value},on:{"input":function($event){return _vm.change($event)}}})}
var staticRenderFns = []



/***/ }),

/***/ "ddbe":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      align_end: "end",
      align_start: "start",
      overlay: false
    };
  }
});

/***/ }),

/***/ "e29a":
/*!**************************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=style&index=0&id=6006c8bb&lang=sass&scoped=true& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=6006c8bb&lang=sass&scoped=true& */ "8421");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6006c8bb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e3b4":
/*!*************************************!*\
  !*** ./src/controls/FileControl.js ***!
  \*************************************/
/*! exports provided: FileControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileControl", function() { return FileControl; });
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _FileControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileControl.vue */ "360e");






var FileControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FileControl, _Rete$Control);

  var _super = Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(FileControl);

  function FileControl(emitter, key, readonly) {
    var _this;

    Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileControl);

    _this = _super.call(this, key);
    _this.render = 'vue';
    _this.component = _FileControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.props = {
      emitter: emitter,
      ikey: key,
      readonly: readonly
    };
    return _this;
  }

  Object(_mnt_d_Projects_fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }, {
    key: "getDid",
    value: function getDid() {
      return this.vueContext.did;
    }
  }]);

  return FileControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "e518":
/*!****************************************************************!*\
  !*** ./src/vue-components/Navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "f37e");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "e5ad":
/*!************************************************************************************************!*\
  !*** ./src/controls/TextControl.vue?vue&type=style&index=0&id=65a5dcd7&scoped=true&lang=sass& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextControl.vue?vue&type=style&index=0&id=65a5dcd7&scoped=true&lang=sass& */ "38af");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_65a5dcd7_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e8f7":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/ReteEditor.vue?vue&type=style&index=0&id=b53f9328&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e990":
/*!**********************************************************************!*\
  !*** ./src/vue-components/Navbar.vue?vue&type=template&id=205ddc81& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=205ddc81& */ "7832");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_205ddc81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e9a7":
/*!**********************************************************************!*\
  !*** ./src/controls/TasksControl.vue?vue&type=template&id=58a8eea2& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TasksControl.vue?vue&type=template&id=58a8eea2& */ "8edd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksControl_vue_vue_type_template_id_58a8eea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "eb7f":
/*!*********************************************************************************!*\
  !*** ./src/controls/TextControl.vue?vue&type=template&id=65a5dcd7&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextControl.vue?vue&type=template&id=65a5dcd7&scoped=true& */ "c13e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_65a5dcd7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ecb8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/ReteEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.js */ "8ef1");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(_editor_js__WEBPACK_IMPORTED_MODULE_0__["createFlowEditor"])();
  }
});

/***/ }),

/***/ "ee63":
/*!*********************************************************************!*\
  !*** ./src/controls/ListControl.vue?vue&type=template&id=4024245a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ListControl.vue?vue&type=template&id=4024245a& */ "a05e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_4024245a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ee81":
/*!***********************************************************************!*\
  !*** ./src/controls/NumberControl.vue?vue&type=template&id=6a29f7ff& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./NumberControl.vue?vue&type=template&id=6a29f7ff& */ "895f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ef3c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/vue-components/Navbar */ "2943");
/* harmony import */ var _vue_components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/vue-components/Footer */ "afc6");
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Navbar: _vue_components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _vue_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {//
    };
  }
});

/***/ }),

/***/ "ef72":
/*!***************************************************************!*\
  !*** ./src/controls/TextControl.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextControl.vue?vue&type=script&lang=js& */ "9f08");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "f1a9":
/*!****************************************************************!*\
  !*** ./src/controls/TasksControl.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TasksControl.vue?vue&type=script&lang=js& */ "4e48");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "f37e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Navbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "f459":
/*!*****************************************************************************************!*\
  !*** ./src/vue-components/FileComponent.vue?vue&type=template&id=fa00c324&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91fd2a4a-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileComponent.vue?vue&type=template&id=fa00c324&scoped=true& */ "4710");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91fd2a4a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_fa00c324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "f4da":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Custom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete-vue-render-plugin */ "f261");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].mixin],
  components: {
    Socket: rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].Socket
  },
  props: ["icon"]
});

/***/ }),

/***/ "f820":
/*!*****************************!*\
  !*** ./src/views/About.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=67502d24& */ "adff");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VRow"]})


/***/ }),

/***/ "f8c3":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/FileControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "b64b");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "369b");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["readonly", "emitter", "ikey", "getData", "putData"],
  data: function data() {
    return {
      value: null,
      file: null,
      overlay: false,
      did: null,
      completed: false,
      inProgress: false
    };
  },
  methods: {
    update: function update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }

      this.emitter.trigger("process");
    },
    get_file: function get_file() {
      this.value = this.file;
      this.update();
    },
    populateData: function populateData(data, file) {
      var headers = [];
      var columns = Object.keys(data[0]);

      for (var i in columns) {
        var header = {
          text: columns[i],
          value: columns[i]
        };
        headers.push(header);
      }

      var items = data;
      var id = file.name;
      var dataset = {
        id: id,
        file: file,
        headers: headers,
        items: items
      };
      this.$store.commit("ADD_FILE", dataset);
    },
    parseDataset: function parseDataset(file, callback) {
      this.view = !this.view;
      papaparse__WEBPACK_IMPORTED_MODULE_2___default.a.parse(file, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function complete(results) {
          callback(results.data, file);
        }
      });
    },
    handleFileUpload: function handleFileUpload() {
      var _this = this;

      this.value = this.file;

      if (this.value != null) {
        var formData = new FormData();
        formData.append('file', this.value);
        this.parseDataset(this.value, this.populateData);
        this.inProgress = true;
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://fluxusml.com/pandas/upload/', formData).then(function (resp) {
          var data = resp.data;
          console.log(data);
          _this.did = data.add_dataset.dataset.did;
          _this.inProgress = false;
          _this.completed = true;

          _this.update();
        });
      }
    }
  },
  mounted: function mounted() {
    this.value = this.getData(this.ikey);
  }
});

/***/ }),

/***/ "fc59":
/*!*****************************************************************************************************!*\
  !*** ./src/vue-components/ReteEditor.vue?vue&type=style&index=0&id=b53f9328&lang=sass&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ReteEditor.vue?vue&type=style&index=0&id=b53f9328&lang=sass&scoped=true& */ "e8f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_b53f9328_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
//# sourceMappingURL=app.dcf42627.js.map
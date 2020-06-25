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

/***/ "0062":
/*!**********************************************************************!*\
  !*** ./src/vue-components/Footer.vue?vue&type=template&id=fdc65964& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=fdc65964& */ "b944");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "01dd":
/*!**********************************************************************!*\
  !*** ./src/controls/ImageControl.vue?vue&type=template&id=f020096e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ImageControl.vue?vue&type=template&id=f020096e& */ "628e0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageControl_vue_vue_type_template_id_f020096e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "03b9":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ListControl.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "8e5f");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
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

/***/ "06b9":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=template&id=67502d24& ***!
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");










var GetComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GetComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(GetComponent);

  function GetComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GetComponent);

    _this = _super.call(this, "Get Request");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GetComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Input("url", "URL", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Output("response", "Response", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      return node.addInput(inp).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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

/***/ "0c9f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Custom.vue?vue&type=template&id=d3d63258&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"node",class:_vm._f("kebab")([_vm.selected(), _vm.node.name])},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.node.name))]),_c('div',{staticClass:"col_"},_vm._l((_vm.outputs()),function(output){return _c('div',{key:output.key,staticClass:"output"},[_c('div',{staticClass:"output-title"},[_vm._v(_vm._s(output.name))]),_c('Socket',{directives:[{name:"socket",rawName:"v-socket:output",value:(output),expression:"output",arg:"output"}],attrs:{"type":"output","socket":output.socket,"used":function () { return output.connections.length; }}})],1)}),0),_vm._l((_vm.controls()),function(control){return _c('div',{directives:[{name:"control",rawName:"v-control",value:(control),expression:"control"}],key:control.key,staticClass:"control"})}),_c('div',{staticClass:"col_"},_vm._l((_vm.inputs()),function(input){return _c('div',{key:input.key,staticClass:"input",staticStyle:{"text-align":"left"}},[_c('Socket',{directives:[{name:"socket",rawName:"v-socket:input",value:(input),expression:"input",arg:"input"}],attrs:{"type":"input","socket":input.socket,"used":function () { return input.connections.length; }}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!input.showControl()),expression:"!input.showControl()"}],staticClass:"input-title"},[_vm._v(_vm._s(input.name))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(input.showControl()),expression:"input.showControl()"},{name:"control",rawName:"v-control",value:(input.control),expression:"input.control"}],staticClass:"input-control"})],1)}),0)],2)}
var staticRenderFns = []



/***/ }),

/***/ "0de7":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Editor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_components_ReteEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/vue-components/ReteEditor */ "9a19");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ReteEditor: _vue_components_ReteEditor__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {//
    };
  }
});

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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _ImageControl_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageControl.vue */ "a3e6");










var ImageControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ImageControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ImageControl);

  function ImageControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ImageControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageControl, [{
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

/***/ "0ff4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ListControl.vue?vue&type=template&id=980658b8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('multiselect',{attrs:{"options":_vm.options,"multiple":true,"hide-selected":true,"closeOnSelect":false},on:{"select":_vm.update,"remove":_vm.update},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length && !isOpen)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values.length)+" options selected")]):_vm._e()]}}]),model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)}
var staticRenderFns = []



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
/* harmony import */ var _TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextControl.vue?vue&type=template&id=4f310355&scoped=true& */ "9a47");
/* harmony import */ var _TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextControl.vue?vue&type=script&lang=js& */ "ef72");
/* empty/unused harmony star reexport *//* harmony import */ var _TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextControl.vue?vue&type=style&index=0&id=4f310355&scoped=true&lang=sass& */ "a3a3");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f310355",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var MultiplyComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiplyComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MultiplyComponent);

  function MultiplyComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MultiplyComponent);

    _this = _super.call(this, "Multiply");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MultiplyComponent, [{
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
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/math/multiply/', {
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
textSocket.combineWith(listSocket, numSocket, datasetSocket);
textSocket.combineWith(datasetSocket);
datasetSocket.combineWith(numSocket);
datasetSocket.combineWith(textSocket);
numSocket.combineWith(datasetSocket, listSocket);


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
/* harmony import */ var _Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=607df116& */ "d3a3");
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
  _Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_4__["VAppBar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["VToolbarTitle"]})


/***/ }),

/***/ "2a97":
/*!**********************************************************************************!*\
  !*** ./src/controls/PanelControl.vue?vue&type=template&id=41dddd34&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelControl.vue?vue&type=template&id=41dddd34&scoped=true& */ "9eee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileControl.vue?vue&type=template&id=15b3fd36& */ "8231");
/* harmony import */ var _FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileControl.vue?vue&type=script&lang=js& */ "cd29");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "39b9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=22749bc6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('v-container',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{staticClass:"pt-16 xs-4 md-6"},[_c('h1',{staticClass:"font-weight-black"},[_vm._v("Unlock the power of your data.")]),_c('span',{staticClass:"font-weight-medium"},[_vm._v("Make informed decisions.")])]),_c('v-flex',{staticClass:"pt-5 xs-4 md-6"},[_c('v-spacer'),_c('img',{attrs:{"src":__webpack_require__(/*! @/assets/undraw_data_processing_yrrv.svg */ "e12c"),"alt":""}})],1)],1)],1)],1)}
var staticRenderFns = []



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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _TextControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextControl.vue */ "17e3");






var TextControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TextControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(TextControl);

  function TextControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }]);

  return TextControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "3df4":
/*!***********************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=22749bc6& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=22749bc6& */ "39b9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    dark: false
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
  base: "/",
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

/***/ "4420":
/*!**********************************************************************************!*\
  !*** ./src/vue-components/Custom.vue?vue&type=template&id=d3d63258&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=template&id=d3d63258&scoped=true& */ "0c9f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "491d":
/*!************************************!*\
  !*** ./src/controls/NumControl.js ***!
  \************************************/
/*! exports provided: NumControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumControl", function() { return NumControl; });
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _NumberControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberControl.vue */ "b7be");






var NumControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NumControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(NumControl);

  function NumControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumControl, [{
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
/* harmony import */ var _Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=23b2f408& */ "5380");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "d470");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "b810");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "9d26");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "5d23");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "844a");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_4__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__["VNavigationDrawer"]})


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

/***/ "51d9":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Editor.vue?vue&type=template&id=23b2f408& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-menu"},[_c('ReteEditor'),_c('v-navigation-drawer',{attrs:{"permanent":"","fixed":"","expand-on-hover":"","app":"","clipped":"","left":"","floating":""}},[_c('v-list',[_c('v-list-item',{staticClass:"px-2"},[_c('v-list-item-avatar',{attrs:{"tile":"","size":"62"}},[_c('span',{staticClass:"white--text headline"},[_vm._v("RM")])])],1),_c('v-list-item',{attrs:{"link":""}},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"title"},[_vm._v("Robert Marincu")]),_c('v-list-item-subtitle',[_vm._v("rsmarincu@gmail.com")])],1)],1)],1),_c('v-divider'),_c('v-list',{attrs:{"nav":"","dense":""}},[_c('v-list-item',{attrs:{"link":""}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-folder")])],1),_c('v-list-item-title',[_vm._v("My Files")])],1),_c('v-list-item',{attrs:{"link":""}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-account-multiple")])],1),_c('v-list-item-title',[_vm._v("Shared with me")])],1),_c('v-list-item',{attrs:{"link":""}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v("mdi-star")])],1),_c('v-list-item-title',[_vm._v("Starred")])],1)],1)],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "5380":
/*!*************************************************************!*\
  !*** ./src/views/Editor.vue?vue&type=template&id=23b2f408& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=23b2f408& */ "51d9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_23b2f408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var SubtractComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SubtractComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(SubtractComponent);

  function SubtractComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SubtractComponent);

    _this = _super.call(this, "Subtract");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(SubtractComponent, [{
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
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/math/subtract/', {
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "a026");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "3dfd");
/* harmony import */ var _assets_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/style.sass */ "756d");
/* harmony import */ var _assets_style_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_style_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "41cb");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/vuetify */ "402c");









vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_7__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  },
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_8__["default"],
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}).$mount('#app');

/***/ }),

/***/ "57a0":
/*!***************************************!*\
  !*** ./src/vue-components/Custom.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Custom.vue?vue&type=template&id=d3d63258&scoped=true& */ "4420");
/* harmony import */ var _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Custom.vue?vue&type=script&lang=js& */ "44dc");
/* empty/unused harmony star reexport *//* harmony import */ var _Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Custom.vue?vue&type=style&index=0&id=d3d63258&scoped=true&lang=sass& */ "f5d3");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Custom_vue_vue_type_template_id_d3d63258_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d3d63258",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5d13":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PanelControl.vue?vue&type=style&index=0&id=41dddd34&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var AddComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(AddComponent);

  function AddComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AddComponent);

    _this = _super.call(this, "Add");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AddComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp1 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('addInp1', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var inp2 = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Input('addInp2', "Number2", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"], true);
      var out = new rete__WEBPACK_IMPORTED_MODULE_8__["default"].Output('addOut', "Number", _sockets__WEBPACK_IMPORTED_MODULE_9__["numSocket"]);
      return node.addInput(inp1).addInput(inp2).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/math/add/', formData, {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/math/add/', {
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
                console.log(sum);
                outputs['addOut'] = sum;

              case 32:
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

/***/ "628e0":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/ImageControl.vue?vue&type=template&id=f020096e& ***!
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

/***/ "6618":
/*!**************************************!*\
  !*** ./src/controls/ListControl.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListControl.vue?vue&type=template&id=980658b8& */ "7e76");
/* harmony import */ var _ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListControl.vue?vue&type=script&lang=js& */ "1e28");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "60bc");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "66f2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/ReteEditor.vue?vue&type=style&index=0&id=bd82a720&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var DivideComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DivideComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(DivideComponent);

  function DivideComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DivideComponent);

    _this = _super.call(this, "Divide");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DivideComponent, [{
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
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/math/divide/', {
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

/***/ "7080":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TextControl.vue?vue&type=template&id=4f310355&scoped=true& ***!
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

/***/ "71ec":
/*!*****************************************!*\
  !*** ./src/components/FileComponent.js ***!
  \*****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _controls_FileControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/FileControl */ "e3b4");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");








var FileComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FileComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(FileComponent);

  function FileComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileComponent);

    _this = _super.call(this, "Dataset");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileComponent, [{
    key: "builder",
    value: function builder(node) {
      var out = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].Output('fileOut', "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_6__["datasetSocket"]);
      return node.addControl(new _controls_FileControl__WEBPACK_IMPORTED_MODULE_5__["FileControl"](this.editor, 'fileOut')).addOutput(out);
    }
  }, {
    key: "worker",
    value: function worker(node, inputs, outputs) {
      outputs['fileOut'] = node.data.fileOut;
    }
  }]);

  return FileComponent;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Component);

/***/ }),

/***/ "74de":
/*!**************************************************************************************!*\
  !*** ./src/vue-components/ReteEditor.vue?vue&type=template&id=bd82a720&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ReteEditor.vue?vue&type=template&id=bd82a720&scoped=true& */ "f72e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "78be":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=c107d780& ***!
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

/***/ "7a9a":
/*!****************************************!*\
  !*** ./src/components/NumComponent.js ***!
  \****************************************/
/*! exports provided: NumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumComponent", function() { return NumComponent; });
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _controls_NumControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/NumControl */ "491d");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");








var NumComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NumComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(NumComponent);

  function NumComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumComponent);

    _this = _super.call(this, "Number");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumComponent, [{
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

/***/ "7e76":
/*!*********************************************************************!*\
  !*** ./src/controls/ListControl.vue?vue&type=template&id=980658b8& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ListControl.vue?vue&type=template&id=980658b8& */ "0ff4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListControl_vue_vue_type_template_id_980658b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8025":
/*!*************************************************!*\
  !*** ./src/assets/undraw_data_reports_706v.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/undraw_data_reports_706v.915d24cc.svg";

/***/ }),

/***/ "8231":
/*!*********************************************************************!*\
  !*** ./src/controls/FileControl.vue?vue&type=template&id=15b3fd36& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FileControl.vue?vue&type=template&id=15b3fd36& */ "95dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileControl_vue_vue_type_template_id_15b3fd36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8421":
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
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
/* harmony import */ var _components_ColumnsComponents__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ColumnsComponents */ "c013");


























function createFlowEditor() {
  return _createFlowEditor.apply(this, arguments);
}

function _createFlowEditor() {
  _createFlowEditor = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var container, components, editor, engine, n1, n2, add, dataset;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            container = document.querySelector('#rete');
            components = [new _components_NumComponent__WEBPACK_IMPORTED_MODULE_13__["NumComponent"](), new _components_AddComponent__WEBPACK_IMPORTED_MODULE_14__["AddComponent"](), new _components_DivideComponent__WEBPACK_IMPORTED_MODULE_15__["DivideComponent"](), new _components_MultiplyComponent__WEBPACK_IMPORTED_MODULE_23__["MultiplyComponent"](), new _components_SubtractComponent__WEBPACK_IMPORTED_MODULE_24__["SubtractComponent"](), new _components_TextComponents__WEBPACK_IMPORTED_MODULE_16__["TextComponent"](), new _components_GetComponent__WEBPACK_IMPORTED_MODULE_17__["GetComponent"](), new _components_PanelComponent__WEBPACK_IMPORTED_MODULE_18__["PanelComponent"](), new _components_FileComponent__WEBPACK_IMPORTED_MODULE_19__["FileComponent"](), new _components_LabelsComponent__WEBPACK_IMPORTED_MODULE_20__["LabelsComponent"](), new _components_ListComponent__WEBPACK_IMPORTED_MODULE_21__["ListComponent"](), new _components_HistogramComponent__WEBPACK_IMPORTED_MODULE_22__["HistogramComponent"](), new _components_ColumnsComponents__WEBPACK_IMPORTED_MODULE_25__["ColumnsComponent"]()];
            editor = new rete__WEBPACK_IMPORTED_MODULE_4__["default"].NodeEditor('demo@0.1.0', container);
            editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]);
            editor.use(rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
            _context2.next = 15;
            return components[0].createNode({
              num: 2
            });

          case 15:
            n1 = _context2.sent;
            _context2.next = 18;
            return components[0].createNode({
              num: 0
            });

          case 18:
            n2 = _context2.sent;
            _context2.next = 21;
            return components[1].createNode();

          case 21:
            add = _context2.sent;
            _context2.next = 24;
            return new _components_FileComponent__WEBPACK_IMPORTED_MODULE_19__["FileComponent"]().createNode();

          case 24:
            dataset = _context2.sent;
            n1.position = [80, 200];
            n2.position = [80, 400];
            add.position = [500, 240];
            dataset.position = [0, 0];
            editor.addNode(n1);
            editor.addNode(n2);
            editor.addNode(add);
            editor.addNode(dataset);
            editor.connect(n1.outputs.get('num'), add.inputs.get('addInp1'));
            editor.connect(n2.outputs.get('num'), add.inputs.get('addInp2'));
            editor.on('process nodecreated noderemoved connectioncreated connectionremoved', /*#__PURE__*/Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
            editor.view.resize();
            rete_area_plugin__WEBPACK_IMPORTED_MODULE_8__["default"].zoomAt(editor);
            editor.trigger('process');

          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createFlowEditor.apply(this, arguments);
}

/***/ }),

/***/ "921a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/NumberControl.vue?vue&type=template&id=6a29f7ff& ***!
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

/***/ "95dc":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/FileControl.vue?vue&type=template&id=15b3fd36& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"method":"post","enctype":"multipart/form-data"}},[_c('div',[_c('label',{attrs:{"for":"file"}},[_vm._v("Choose file to upload")]),_c('input',{ref:"file",attrs:{"type":"file","id":"file"},on:{"change":function($event){return _vm.handleFileUpload()}}})])])}
var staticRenderFns = []



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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var _controls_ImageControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../controls/ImageControl */ "0fa5");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
















var HistogramComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(HistogramComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__["default"])(HistogramComponent);

  function HistogramComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, HistogramComponent);

    _this = _super.call(this, "Histogram");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_13__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(HistogramComponent, [{
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
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('https://fluxusml.azurewebsites.net/visualisation/histogram/', formData, {
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
/* harmony import */ var _ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=template&id=bd82a720&scoped=true& */ "74de");
/* harmony import */ var _ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=script&lang=js& */ "4f4e");
/* empty/unused harmony star reexport *//* harmony import */ var _ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReteEditor.vue?vue&type=style&index=0&id=bd82a720&lang=sass&scoped=true& */ "e2e8");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReteEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReteEditor_vue_vue_type_template_id_bd82a720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bd82a720",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9a47":
/*!*********************************************************************************!*\
  !*** ./src/controls/TextControl.vue?vue&type=template&id=4f310355&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextControl.vue?vue&type=template&id=4f310355&scoped=true& */ "7080");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_template_id_4f310355_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "9eee":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/PanelControl.vue?vue&type=template&id=41dddd34&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{attrs:{"readonly":_vm.readonly},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.change($event)}}})}
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

/***/ "a323":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/controls/TextControl.vue?vue&type=style&index=0&id=4f310355&scoped=true&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a3a3":
/*!************************************************************************************************!*\
  !*** ./src/controls/TextControl.vue?vue&type=style&index=0&id=4f310355&scoped=true&lang=sass& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./TextControl.vue?vue&type=style&index=0&id=4f310355&scoped=true&lang=sass& */ "a323");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextControl_vue_vue_type_style_index_0_id_4f310355_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "aa14":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Custom.vue?vue&type=style&index=0&id=d3d63258&scoped=true&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac90":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& ***!
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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=67502d24& */ "06b9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_67502d24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ae4a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Navbar.vue?vue&type=template&id=607df116& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('v-app-bar',{attrs:{"flat":"","app":"","color":"white"}},[_c('v-toolbar-title',{staticClass:"text-uppercase grey--text"},[_c('span',{staticClass:"font-weight-light"},[_vm._v("Fluxus")]),_c('span',[_vm._v("ML")])]),_c('v-spacer'),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("Home")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/documentation"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("Documentation")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/about"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"text":""}},[_c('span',[_vm._v("About")])])],1),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/editor"}},[_c('v-btn',{staticClass:"ma-1",attrs:{"outlined":"","text":"","color":"grey"}},[_c('span',[_vm._v("Editor")]),_c('v-icon',{attrs:{"right":""}},[_vm._v("mdi-exit-to-app")])],1)],1)],1)],1)}
var staticRenderFns = []



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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _vue_components_PanelComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vue-components/PanelComponent.vue */ "7886");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _controls_PanelControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls/PanelControl */ "cee6");









var PanelComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PanelComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(PanelComponent);

  function PanelComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PanelComponent);

    _this = _super.call(this, "Panel");
    _this.data.component = _vue_components_PanelComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PanelComponent, [{
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
/* harmony import */ var _Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=fdc65964& */ "0062");
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
  _Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_fdc65964___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelComponent.vue?vue&type=script&lang=js& */ "8421");
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _controls_TextControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls/TextControl */ "3cb9");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");








var TextComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TextComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(TextComponent);

  function TextComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextComponent);

    _this = _super.call(this, "Text");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_7__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextComponent, [{
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

/***/ "b944":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/Footer.vue?vue&type=template&id=fdc65964& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-footer',{attrs:{"padless":""}},[_c('v-card',{staticClass:"flex",attrs:{"flat":"","tile":""}},[_c('v-card-title',{staticClass:"white"},[_c('strong',{staticClass:"subheading grey--text"},[_vm._v("Get connected with us on social networks!")]),_c('v-spacer'),_vm._l((_vm.icons),function(icon){return _c('v-btn',{key:icon,staticClass:"mx-4",attrs:{"icon":""}},[_c('v-icon',{attrs:{"size":"24px"}},[_vm._v(_vm._s(icon))])],1)})],2),_c('v-card-text',{staticClass:"py-2 grey--text text-center"},[_vm._v(" "+_vm._s(new Date().getFullYear())+" — "),_c('strong',[_vm._v("FluxusML")])])],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "bb51":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=22749bc6& */ "3df4");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "6544");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "9910");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_22749bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VLayout"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__["VSpacer"]})


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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    };
  }
});

/***/ }),

/***/ "c013":
/*!*********************************************!*\
  !*** ./src/components/ColumnsComponents.js ***!
  \*********************************************/
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












var ColumnsComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ColumnsComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ColumnsComponent);

  function ColumnsComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ColumnsComponent);

    _this = _super.call(this, "Columns");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ColumnsComponent, [{
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
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('https://fluxusml.azurewebsites.net/pandas/columns/', formData, {
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

/***/ "c533":
/*!*************************************!*\
  !*** ./src/controls/ListControl.js ***!
  \*************************************/
/*! exports provided: ListControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControl", function() { return ListControl; });
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _ListControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListControl.vue */ "6618");






var ListControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ListControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(ListControl);

  function ListControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListControl, [{
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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var _controls_ListControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../controls/ListControl */ "c533");











var ListComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ListComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(ListComponent);

  function ListComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListComponent);

    _this = _super.call(this, "Select items");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_9__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListComponent, [{
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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c107d780& */ "78be");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c107d780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sockets */ "21a1");
/* harmony import */ var _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vue-components/Custom.vue */ "57a0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);











var LabelsComponent = /*#__PURE__*/function (_Rete$Component) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LabelsComponent, _Rete$Component);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(LabelsComponent);

  function LabelsComponent() {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LabelsComponent);

    _this = _super.call(this, "Labels");
    _this.data.component = _vue_components_Custom_vue__WEBPACK_IMPORTED_MODULE_8__["default"];
    return _this;
  }

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LabelsComponent, [{
    key: "builder",
    value: function builder(node) {
      var inp = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Input('fileIn', "Dataset", _sockets__WEBPACK_IMPORTED_MODULE_7__["datasetSocket"]);
      var out = new rete__WEBPACK_IMPORTED_MODULE_6__["default"].Output('result', "Labels", _sockets__WEBPACK_IMPORTED_MODULE_7__["textSocket"]);
      return node.addInput(inp).addOutput(out);
    }
  }, {
    key: "worker",
    value: function () {
      var _worker = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, inputs, outputs) {
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
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('https://fluxusml.azurewebsites.net/pandas/labels/', formData);

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

/***/ "cee6":
/*!**************************************!*\
  !*** ./src/controls/PanelControl.js ***!
  \**************************************/
/*! exports provided: PanelControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelControl", function() { return PanelControl; });
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _PanelControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PanelControl.vue */ "d33b");






var PanelControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PanelControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(PanelControl);

  function PanelControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PanelControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PanelControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
    }
  }]);

  return PanelControl;
}(rete__WEBPACK_IMPORTED_MODULE_4__["default"].Control);

/***/ }),

/***/ "d33b":
/*!***************************************!*\
  !*** ./src/controls/PanelControl.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=template&id=41dddd34&scoped=true& */ "2a97");
/* harmony import */ var _PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=script&lang=js& */ "701e");
/* empty/unused harmony star reexport *//* harmony import */ var _PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelControl.vue?vue&type=style&index=0&id=41dddd34&scoped=true&lang=css& */ "db5d");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PanelControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelControl_vue_vue_type_template_id_41dddd34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41dddd34",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d3a3":
/*!**********************************************************************!*\
  !*** ./src/vue-components/Navbar.vue?vue&type=template&id=607df116& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=607df116& */ "ae4a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_607df116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelComponent.vue?vue&type=template&id=4be76ef6&scoped=true& */ "ac90");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelComponent_vue_vue_type_template_id_4be76ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "db5d":
/*!************************************************************************************************!*\
  !*** ./src/controls/PanelControl.vue?vue&type=style&index=0&id=41dddd34&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./PanelControl.vue?vue&type=style&index=0&id=41dddd34&scoped=true&lang=css& */ "5d13");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelControl_vue_vue_type_style_index_0_id_41dddd34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e12c":
/*!****************************************************!*\
  !*** ./src/assets/undraw_data_processing_yrrv.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/undraw_data_processing_yrrv.9796bbfc.svg";

/***/ }),

/***/ "e2e8":
/*!*****************************************************************************************************!*\
  !*** ./src/vue-components/ReteEditor.vue?vue&type=style&index=0&id=bd82a720&lang=sass&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ReteEditor.vue?vue&type=style&index=0&id=bd82a720&lang=sass&scoped=true& */ "66f2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReteEditor_vue_vue_type_style_index_0_id_bd82a720_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var _d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rete */ "f5d5");
/* harmony import */ var _FileControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileControl.vue */ "360e");






var FileControl = /*#__PURE__*/function (_Rete$Control) {
  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FileControl, _Rete$Control);

  var _super = Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(FileControl);

  function FileControl(emitter, key, readonly) {
    var _this;

    Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileControl);

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

  Object(_d_Documents_Bath_Fluxus_Fluxus_App_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileControl, [{
    key: "setValue",
    value: function setValue(val) {
      this.vueContext.value = val;
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

/***/ "ee81":
/*!***********************************************************************!*\
  !*** ./src/controls/NumberControl.vue?vue&type=template&id=6a29f7ff& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./NumberControl.vue?vue&type=template&id=6a29f7ff& */ "921a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1ab08ed7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberControl_vue_vue_type_template_id_6a29f7ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].mixin],
  components: {
    Socket: rete_vue_render_plugin__WEBPACK_IMPORTED_MODULE_0__["default"].Socket
  }
});

/***/ }),

/***/ "f5d3":
/*!*************************************************************************************************!*\
  !*** ./src/vue-components/Custom.vue?vue&type=style&index=0&id=d3d63258&scoped=true&lang=sass& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Custom.vue?vue&type=style&index=0&id=d3d63258&scoped=true&lang=sass& */ "aa14");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custom_vue_vue_type_style_index_0_id_d3d63258_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f72e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ab08ed7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-components/ReteEditor.vue?vue&type=template&id=bd82a720&scoped=true& ***!
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
      value: null,
      file: null
    };
  },
  methods: {
    update: function update() {
      if (this.ikey) this.putData(this.ikey, this.value);
      this.emitter.trigger('process');
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.value = this.file;
      this.update();
    }
  },
  mounted: function mounted() {
    this.value = this.getData(this.ikey);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=app.2ffbf46a.js.map
(window["companyQuiz_jsonp"] = window["companyQuiz_jsonp"] || []).push([[11],{

/***/ "6f2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mixinValidationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixinUpdateCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mixinUpdateRadio; });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);






var mixinValidationStatus = {
  methods: {
    changeValidationStatus() {
      if (this.$v.$invalid) {
        this.validationStatusFalse();
      } else {
        this.validationStatusTrue();
      }
    }

  }
};
var mixinUpdateCheckbox = {
  methods: {
    $_mixinUpdateCheckbox_update(evt) {
      var isChecked = evt.target.checked;

      if (this.modelValue instanceof Array) {
        var newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }

      isChecked ? this.focusClass = "active" : this.focusClass = "";
    }

  },
  computed: {
    $_mixinUpdateCheckbox_shouldBeChecked() {
      return this.modelValue instanceof Array ? this.modelValue.includes(this.value) : this.modelValue === this.trueValue;
    }

  }
};
var mixinUpdateRadio = {
  methods: {
    $_mixinUpdateRadio_update() {
      this.$emit("change", this.value);
    }

  },
  computed: {
    $_mixinUpdateRadio_shouldBeChecked() {
      if (this.modelValue === this.value) {
        this.focusClass = "active";
        return true;
      } else {
        this.focusClass = "";
        return false;
      }
    }

  }
};

/***/ }),

/***/ "bf0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b161953-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/screens/CardsScreen.vue?vue&type=template&id=6526805d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quiz-subgrid-body"},[(_vm.$v.getUserData.$invalid)?_c('div',{class:['quiz__validation--error', 'quiz__text-smallest']},[_vm._v(" Вы должны выбрать не менее "+_vm._s(_vm.$v.getUserData.$params.minLength.min)+" вариантов ")]):_vm._e(),_c('div',{staticClass:"quiz-subgrid-body__cards"},_vm._l((_vm.getNowItems),function(item){return _c('div',{key:item.id,class:_vm.cardsLayout},[_c(_vm.currentScreen,{tag:"component",attrs:{"value":item.name,"image":item.image,"name":item.name},model:{value:(_vm.newCheckedAction),callback:function ($$v) {_vm.newCheckedAction=$$v},expression:"newCheckedAction"}})],1)}),0),_c('free-answer')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/screens/CardsScreen.vue?vue&type=template&id=6526805d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./src/assets/mixins.js
var mixins = __webpack_require__("6f2e");

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("b5ae");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/screens/CardsScreen.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var _createNamespacedHelp = Object(vuex_esm["a" /* createNamespacedHelpers */])("moduleCompanyQuiz"),
    mapGetters = _createNamespacedHelp.mapGetters,
    mapActions = _createNamespacedHelp.mapActions;

/* harmony default export */ var CardsScreenvue_type_script_lang_js_ = ({
  components: {
    "card-checkbox": () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "dfd1")),
    "card-radio": () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "34d3")),
    "free-answer": () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "3cbe"))
  },
  mixins: [mixins["c" /* mixinValidationStatus */]],

  data() {
    return {
      cardsLayout: "quiz-subgrid-body__item"
    };
  },

  computed: Object(objectSpread2["a" /* default */])({}, mapGetters(["getNowItems", "getNowItemsType", "getUserData", "getValidationStatus"]), {
    currentScreen() {
      switch (this.getNowItemsType) {
        case "cards-checkbox":
          return "card-checkbox";

        case "cards-radio":
          return "card-radio";

        default:
          return "card-checkbox";
      }
    },

    newCheckedAction: {
      get() {
        return this.getUserData;
      },

      set(value) {
        this.updateChecked(value);
      }

    }
  }),
  validations: {
    getUserData: {
      required: validators["required"],
      minLength: Object(validators["minLength"])(1)
    }
  },

  beforeUpdate() {
    this.changeValidationStatus();
  },

  methods: Object(objectSpread2["a" /* default */])({}, mapActions(["updateChecked", "validationStatusTrue", "validationStatusFalse"]))
});
// CONCATENATED MODULE: ./src/screens/CardsScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var screens_CardsScreenvue_type_script_lang_js_ = (CardsScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/screens/CardsScreen.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  screens_CardsScreenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CardsScreen = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=company-quiz.11.js.map
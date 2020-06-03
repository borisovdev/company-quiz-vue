(window["companyQuiz_jsonp"] = window["companyQuiz_jsonp"] || []).push([[10],{

/***/ "4063":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b161953-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/RadioInput.vue?vue&type=template&id=2d24e85d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:[_vm.labelClasses]},[_c('input',{attrs:{"type":"radio"},domProps:{"checked":_vm.shouldBeChecked,"value":_vm.value},on:{"change":_vm.updateRadio}}),_c('div',{class:['quiz__radio-name']},[_c('span',[_vm._v(_vm._s(_vm.name))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/parts/RadioInput.vue?vue&type=template&id=2d24e85d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/RadioInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RadioInputvue_type_script_lang_js_ = ({
  data() {
    return {
      focusClass: "",
      labelClasses: "quiz__radio-classic quiz__text-small quiz__text--medium"
    };
  },

  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    name: String,
    value: String,
    modelValue: {
      default: ""
    }
  },
  methods: {
    updateRadio() {
      this.$emit("change", this.value);
    }

  },
  computed: {
    shouldBeChecked() {
      return this.modelValue == this.value;
    }

  }
});
// CONCATENATED MODULE: ./src/parts/RadioInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var parts_RadioInputvue_type_script_lang_js_ = (RadioInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/parts/RadioInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  parts_RadioInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var RadioInput = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=company-quiz.10.js.map
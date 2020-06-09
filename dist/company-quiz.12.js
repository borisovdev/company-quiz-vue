(window["companyQuiz_jsonp"] = window["companyQuiz_jsonp"] || []).push([[12],{

/***/ "3507":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e36b822a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/ListItemCheckbox.vue?vue&type=template&id=4da44f16&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['quiz__listItem-classic-' + _vm.getTheme, _vm.labelClasses, _vm.focusClass]},[_c('div',{class:[
      'quiz__listItem-classic-' + _vm.getTheme + '--customCheckbox' + '',
      _vm.focusClass
    ]}),_c('label',[_c('input',{staticClass:"radiohidden",attrs:{"type":"checkbox"},domProps:{"checked":_vm.$_mixinUpdateCheckbox_shouldBeChecked,"value":_vm.value},on:{"change":_vm.$_mixinUpdateCheckbox_update}}),_c('span',{class:['quiz__listItem-classic-' + _vm.getTheme + '--name']},[_vm._v(_vm._s(_vm.name))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/parts/ListItemCheckbox.vue?vue&type=template&id=4da44f16&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/assets/mixins.js
var mixins = __webpack_require__("6f2e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/ListItemCheckbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const {
  mapGetters
} = Object(vuex_esm["a" /* createNamespacedHelpers */])("moduleCompanyQuiz");

/* harmony default export */ var ListItemCheckboxvue_type_script_lang_js_ = ({
  mixins: [mixins["b" /* mixinUpdateCheckbox */]],
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

  data() {
    return {
      focusClass: "",
      labelClasses: "quiz__text-small quiz__text--medium"
    };
  },

  computed: { ...mapGetters(["getTheme"])
  }
});
// CONCATENATED MODULE: ./src/parts/ListItemCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var parts_ListItemCheckboxvue_type_script_lang_js_ = (ListItemCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/parts/ListItemCheckbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  parts_ListItemCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var ListItemCheckbox = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=company-quiz.12.js.map
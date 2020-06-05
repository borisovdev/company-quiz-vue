(window["companyQuiz_jsonp"] = window["companyQuiz_jsonp"] || []).push([[11],{

/***/ "dfd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b161953-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/CardCheckbox.vue?vue&type=template&id=bcfaa534&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cardContainer",staticClass:"quiz__card-container"},[_c('label',{ref:"cardItem",class:['quiz__card', 'quiz-card-' + _vm.getTheme + '-theme'],on:{"mousemove":_vm.rotateIt,"mouseout":_vm.disableRotate}},[_c('img',{attrs:{"src":_vm.image,"alt":_vm.name}}),_c('div',{class:['quiz__card-title', 'quiz__text-smallest', _vm.focusClass]},[_c('span',{staticClass:"card__name"},[_vm._v(_vm._s(_vm.name))])]),_c('input',{staticClass:"radiohidden",attrs:{"type":"checkbox"},domProps:{"checked":_vm.$_mixinUpdateCheckbox_shouldBeChecked,"value":_vm.value},on:{"change":_vm.$_mixinUpdateCheckbox_update}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/parts/CardCheckbox.vue?vue&type=template&id=bcfaa534&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/assets/mixins.js
var mixins = __webpack_require__("6f2e");

// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__("cffa");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/parts/CardCheckbox.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mapGetters = _createNamespacedHelp.mapGetters;

/* harmony default export */ var CardCheckboxvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* mixinUpdateCheckbox */]],
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    image: String,
    name: String,
    value: String,
    modelValue: {
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },

  data() {
    return {
      focusClass: ""
    };
  },

  computed: Object(objectSpread2["a" /* default */])({}, mapGetters(["getTheme", "getUserData"])),
  methods: {
    parallaxIt(evt) {
      var container = this.$refs.cardContainer;
      var relX = evt.pageX - container.getBoundingClientRect().left;
      var relY = evt.pageY - container.getBoundingClientRect().top;
      gsap["a" /* gsap */].to(container, {
        x: (relX - container.offsetWidth / 2) / container.offsetWidth * -10,
        y: (relY - container.offsetWidth / 2) / container.offsetWidth * -10,
        scale: 1.05,
        duration: 0.35
      });
    },

    rotateIt(evt) {
      var container = this.$refs.cardContainer;
      var el = this.$refs.cardItem;
      var height = container.clientHeight;
      var width = container.clientWidth;
      var xVal = evt.offsetX === undefined ? evt.layerX : evt.offsetX;
      var yVal = evt.offsetY === undefined ? evt.layerY : evt.offsetY;
      var yRotation = 20 * ((xVal - width / 2) / width);
      var xRotation = -20 * ((yVal - height / 2) / height);
      gsap["a" /* gsap */].to(el, {
        rotationX: xRotation + "deg",
        rotationY: yRotation + "deg",
        scale: 1.06,
        duration: 0.15
      });
    },

    disableParallax() {
      gsap["a" /* gsap */].to(this.$refs.cardIten, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.35
      });
    },

    disableRotate() {
      gsap["a" /* gsap */].to(this.$refs.cardItem, {
        transform: "none",
        scale: 1,
        duration: 0.35
      });
    }

  }
});
// CONCATENATED MODULE: ./src/parts/CardCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var parts_CardCheckboxvue_type_script_lang_js_ = (CardCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/parts/CardCheckbox.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  parts_CardCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bcfaa534",
  null
  ,true
)

/* harmony default export */ var CardCheckbox = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=company-quiz.11.js.map
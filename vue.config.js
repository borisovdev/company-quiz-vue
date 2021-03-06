module.exports = {
  devServer: {
    proxy: {
      "^/web-components/company-quiz-vue/api/": {
        target: "http://test.workplace",
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_vars.scss";
          @import "@/assets/scss/_mixins/_mixins.scss";
          @import "@/assets/scss/_placeholders/_typography.scss";
        `
      }
    }
  }
}
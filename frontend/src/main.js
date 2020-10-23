import Vue from 'vue'
import App from './App.vue'

require("rss-parser/dist/rss-parser.js")

Vue.config.productionTip = true

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
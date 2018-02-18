import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // h is the argument.
  // this function will automatically will run a template that is
  // inside the app element of index.html file.
  render: h => h(App)
})

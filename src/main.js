import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home)
new Vue({
  el: '#app',
  // h is the argument.
  // this function will automatically will run a template that is
  // inside the app element of index.html file.
  render: h => h(App)
})

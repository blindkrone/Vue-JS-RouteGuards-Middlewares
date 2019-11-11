import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/firestore'
import jQuery from 'jquery'

window.jQuery = jQuery;
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAZ6RxNbJXv6hQ3KdJnXU8T3kSqrXcVt0U',
  authDomain: 'kredomerchandise@appspot.gserviceaccount.com',
  projectId: 'kredomerchandise',
  databaseURL: "https://kredomerchandise.firebaseio.com",
});
Vue.prototype.$db = firebase.firestore()


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

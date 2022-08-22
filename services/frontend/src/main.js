import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Add
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

// Add
import store from './store';


Vue.config.productionTip = false

// Add
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';  // the FastAPI backend


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

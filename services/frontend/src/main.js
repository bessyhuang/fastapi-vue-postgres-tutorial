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

// NEW
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch('logOut');
      return router.push('/login')
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

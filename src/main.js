// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/style.scss';
import './style/iconfont.css'
// import Api from './api/index.js';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI);

// Vue.prototype.$api = Api;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

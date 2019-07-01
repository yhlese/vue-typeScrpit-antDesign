import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';
Vue.use(Router);

const ROUTER = new Router({
  mode: 'history',
  routes,
});

export default ROUTER;

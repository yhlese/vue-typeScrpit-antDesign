import Vue from 'vue';
import Router from 'vue-router';
import routeAppend from './route-append';
const baseModule = require('./base.ts');
Vue.use(Router);

const ROUTER = new Router({
  mode: 'history',
  routes: [...baseModule, ...routeAppend],
});

export default ROUTER;

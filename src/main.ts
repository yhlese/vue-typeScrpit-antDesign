import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store/index';
import vueI18n from 'vue-i18n';
import './plugins/ant-design';
import mixin from '@/mixins/index.mixin';
import Component from 'vue-class-component';
Vue.config.productionTip = false;
Vue.use(vueI18n);
Vue.mixin(mixin);
import ElInputValidate from 'el-input-validate';
ElInputValidate(Vue);

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

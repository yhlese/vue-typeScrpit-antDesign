import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import vueI18n from 'vue-i18n';
import './plugins/ant-design';
import mixin from '@/mixins/index.mixin';
Vue.config.productionTip = false;
Vue.use(vueI18n);
Vue.mixin(mixin);
import ElInputValidate from 'el-input-validate';
ElInputValidate(Vue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

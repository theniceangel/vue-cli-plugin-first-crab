import App from './App.vue';
import { router } from './plugins/router'
import { store } from './plugins/vuex'
import { installPlugins } from './plugins'

const Vue = window.Vue
installPlugins(Vue)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');

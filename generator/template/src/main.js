import App from './App.vue';

const Vue = window.Vue

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

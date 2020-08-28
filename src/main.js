import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.config.productionTip = false
const opts = {};

const vuetify = new Vuetify(opts);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')

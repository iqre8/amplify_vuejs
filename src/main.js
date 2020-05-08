import Vue from 'vue'
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import App from './App.vue'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

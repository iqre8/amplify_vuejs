import Vue from 'vue'
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import App from './App.vue'

Amplify.configure({
  Auth: {
    aws_project_region: '<region>',
    region: '<region>',
    userPoolId: '<pool_id>',
    userPoolWebClientId: '<pool_web_id>',
  }
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

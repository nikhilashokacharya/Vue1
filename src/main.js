import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vselect-component'

Vue.use(vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

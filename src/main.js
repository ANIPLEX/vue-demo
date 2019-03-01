import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './plugins/element.js'
Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  render: h => h(App),
}).$mount('#app')

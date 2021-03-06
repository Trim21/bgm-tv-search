import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({ baseURL: 'https://www.trim21.cn/' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

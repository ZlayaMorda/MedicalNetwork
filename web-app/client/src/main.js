/* eslint-disable */
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { h, createApp } from 'vue'

export default {
  render() {
    return h(App)
  }
}
// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')

import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

// //引入store
import store from './store'

//引入TDesign组件
import TDesign from 'tdesign-vue'
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css'

//应用插件
Vue.use(VueRouter)
Vue.use(TDesign)

//关闭生产提醒
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

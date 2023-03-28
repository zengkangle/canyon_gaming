import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

// //引入store
import store from './store'

//引入包装好的request
import request from './utils/request'

//引入TDesign组件
// import TDesign from 'tdesign-vue'
// 引入组件库全局样式资源
// import 'tdesign-vue/es/style/index.css'
//按需引入ElementUI组件
import { Carousel, CarouselItem, Image, Message, MessageBox, Avatar } from 'element-ui'

//应用插件
Vue.use(VueRouter)
// Vue.use(TDesign)

//全局组件
Vue.component('el-carousel', Carousel);
Vue.component('el-carousel-item', CarouselItem);
Vue.component('el-image', Image);
Vue.component('el-avatar', Avatar);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.request = request;


//关闭生产提醒
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

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

//按需引入ElementUI主题
import './theme/index.css'

//按需引入ElementUI组件
import {
    Carousel,
    CarouselItem,
    Image,
    Message,
    MessageBox,
    Avatar,
    Pagination,
    Input,
    Button,
    Backtop,
    FormItem,
    Form,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Table,
    TableColumn,
    Dialog,
    Upload,
    Option,
    Select,
    Link,
    Notification,
} from 'element-ui'

//应用插件
Vue.use(VueRouter)


//引入图标组件
import "./assets/js/fish-icon.js";
//全局注册组件
import SvgIcon from "@/components/Iconfont.vue";

Vue.component("svg-icon", SvgIcon);

//全局组件
Vue.component('el-carousel', Carousel);
Vue.component('el-carousel-item', CarouselItem);
Vue.component('el-image', Image);
Vue.component('el-avatar', Avatar);
Vue.component('el-pagination', Pagination);
Vue.component('el-input', Input);
Vue.component('el-button', Button);
Vue.component('el-backtop', Backtop);
Vue.component('el-form-item', FormItem);
Vue.component('el-form', Form);
Vue.component('el-dropdown', Dropdown);
Vue.component('el-dropdown-menu', DropdownMenu);
Vue.component('el-dropdown-item', DropdownItem);
Vue.component('el-table', Table);
Vue.component('el-table-column', TableColumn);
Vue.component('el-dialog', Dialog);
Vue.component('el-upload', Upload)
Vue.component('el-option', Option)
Vue.component('el-select', Select)
Vue.component('el-link', Link)



Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.request = request;
Vue.prototype.$notify = Notification;


//关闭生产提醒
Vue.config.productionTip = false

new Vue({
    render: h => h(App), router, store,
}).$mount('#app')

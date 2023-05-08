//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import Base from "../pages/Base"
import Starter from '../pages/Starter'
import Home from '../pages/Home'
import Live from '../pages/Live'
//用户注册登录路由
import login from "../components/login"
import enroll from "../components/enroll"

//鱼吧路由
import Fish from "../pages/Fish"
// import { join } from "core-js/core/array";

//开播申请
import Living from "../pages/Living";

//用户中心
import user_self from "../components/User_Self"
//用户中心下的子模块
import user_myInfo from "../components/user_myInfo"
import user_wallet from "../components/user_wallet"
import user_concern from "../components/user_concern"



//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/base/home',
        },
        {
            path: '/base',
            component: Base,
            children: [
                {
                    path: 'home',
                    component: Home,
                    meta: { title: 'Canyon游戏直播' },
                },
                {
                    path: 'live',
                    component: Live,
                    meta: { title: '直播页面' },
                },
                {
                    path: 'fish',
                    component: Fish,
                    meta: { title: 'Canyon游戏直播' },
                },
                {
                    path:'living',
                    component:Living,
                    meta:{title:'申请开播'},
                },
                {
                    path:'user_self',
                    component:user_self,
                    meta:{title:'用户中心'}, 
                    children:[
                        {
                            path:'user_myInfo',
                            component:user_myInfo,
                            meta:{title:'用户个人资料'}
                        },
                        {
                            path:'user_wallet',
                            component:user_wallet,
                            meta:{title:'用户钱包中心'}
                        },
                        {
                            path:'user_concern',
                            component:user_concern,
                            meta:{title:'用户关注中心'}
                        },
                    ]
                }
            ]
        },

        // {
        //     path:'/fish',
        //     component:fish,

        // },


        {
            path: '/Canyon_Gaming_Starter',
            component: Starter,
            meta: { title: 'Canyon_Gaming_Starter' },
            children: [
                //登录界面路由
                {
                    path: '/',
                    component: login,
                },
                //注册路由
                {
                    path: 'enroll',
                    component: enroll
                }


            ]
        },


    ]
})

// 添加如下代码可以防止重复点击一个路径是浏览器报路径重复的错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//暴露路由器
export default router;

//全局后置路由守卫——初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title
})
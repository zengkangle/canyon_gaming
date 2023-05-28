//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import Base from "../pages/Base"
import Starter from '../pages/Starter'
import Home from '../pages/Home'
import Live from '../pages/Live'
import Admin from '../pages/Admin'
import AdminManageMessage from '../pages/AdminManageMessage'
import AdminManageScheduling from '../pages/AdminManageScheduling'
import AdminManageStreamer from '../pages/AdminManageStreamer'
import AdminManageTheme from '../pages/AdminManageTheme'
import AdminManageUser from '../pages/AdminManageUser'
import AdminStatisticalAnalysis from '../pages/AdminStatisticalAnalysis'
import ApplyStreamer from "../pages/ApplyStreamer";
import OpenLive from "../pages/OpenLive";
import HomeAll from "../pages/HomeAll";
import HomeMobileGame from "../pages/HomeMobileGame";
import HomeUnique from "../pages/HomeUnique";
import HomeProfession from "../pages/HomeProfession";
import HomeYunDing from "../pages/HomeYunDing";
//用户注册登录路由
import login from "../components/login"
import enroll from "../components/enroll"

//鱼吧路由
import Fish from "../pages/Fish"
import Notice from "../components/Notice"

//用户中心
import user_self from "../components/User_Self"
//用户中心下的子模块
import user_myInfo from "../components/user_myInfo"
import user_wallet from "../components/user_wallet"
import user_concern from "../components/user_concern"
//主播特有的子模块
import living_data from "../components/living_data"
import anchor_table from "../components/anchor_table"



//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/base/home/homeAll',
        },
        {
            path: '/base',
            component: Base,
            children: [
                {
                    path: 'home',
                    component: Home,
                    meta: {title: 'Canyon游戏直播'},
                    children:[
                        {
                            path: 'homeAll',
                            component: HomeAll,
                            meta: {title: 'Canyon游戏直播_全部'}
                        },                        {
                            path: 'homeMobileGame',
                            component: HomeMobileGame,
                            meta: {title: 'Canyon游戏直播_LOL手游'}
                        },                        {
                            path: 'homeUnique',
                            component: HomeUnique,
                            meta: {title: 'Canyon游戏直播_绝活'}
                        },                        {
                            path: 'homeProfession',
                            component: HomeProfession,
                            meta: {title: 'Canyon游戏直播_职业'}
                        },                        {
                            path: 'homeYunDing',
                            component: HomeYunDing,
                            meta: {title: 'Canyon游戏直播_云顶之弈'}
                        },
                    ]
                },
                //公告
                {
                    path:'Notice',
                    component:Notice,
                    meta:{title:'排版公告'}
                },
                {
                    path: 'live',
                    component: Live,
                    meta: {title: '直播页面'},
                },
                {
                    path: 'fish',
                    component: Fish,
                    meta: {title: 'Canyon游戏直播'},
                },

                

                {
                    path: 'apply_streamer',
                    component: ApplyStreamer,
                    meta: {title: '申请主播'},
                },
                {
                    path: 'open_live',
                    component: OpenLive,
                    meta: {title: '我要开播'},
                },
                {
                    path: 'user_self',
                    component: user_self,
                    meta: {title: '用户中心'},
                    children: [
                        {
                            path: 'user_myInfo',
                            component: user_myInfo,
                            meta: {title: '用户个人资料'}
                        },
                        {
                            path: 'user_wallet',
                            component: user_wallet,
                            meta: {title: '用户钱包中心'}
                        },
                        {
                            path: 'user_concern',
                            component: user_concern,
                            meta: {title: '用户关注中心'}
                        },
                        {
                            path:"living_data",
                            component:living_data,
                            meta:{title:'直播数据显示'}
                        },
                        {
                            path:"time_data",
                            component:anchor_table,
                            meta:{title:'排班展示'}
                        }
                    ]
                },
                {
                    path: 'admin',
                    component: Admin,
                    meta: {title: '管理中心'},
                    children: [
                        {
                            path: 'manageMessage',
                            component: AdminManageMessage,
                            meta: {title: '消息管理'}
                        },
                        {
                            path: 'manageScheduling',
                            component: AdminManageScheduling,
                            meta: {title: '排班管理'}
                        },
                        {
                            path: 'manageStreamer',
                            component: AdminManageStreamer,
                            meta: {title: '播主管理'}
                        },
                        {
                            path: 'manageTheme',
                            component: AdminManageTheme,
                            meta: {title: '主题管理'}
                        },
                        {
                            path: 'manageUser',
                            component: AdminManageUser,
                            meta: {title: '用户管理'}
                        },
                        {
                            path: 'statisticalAnalysis',
                            component: AdminStatisticalAnalysis,
                            meta: {title: '统计分析'}
                        },
                    ]
                },
            ]
        },
        {
            path: '/Canyon_Gaming_Starter',
            component: Starter,
            meta: {title: 'Canyon_Gaming_Starter'},
            children: [
                //登录界面路由
                {
                    path: 'login',
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
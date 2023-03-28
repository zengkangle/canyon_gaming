//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//应用Vuex插件(创建Store实例之前必须先use(Vuex))
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {

}

//准备 mutations——用于操作数据（state）
const mutations = {

}

//准备state——用于存储数据
const state = {

}

//准备getters——用于将state中的数据进行加工
const getters = {}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
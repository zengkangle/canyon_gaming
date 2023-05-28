<template>
    <div class="headerwarp">
        <div class="header">
            <div><img src="../assets/logo.png" alt="" height="60px"/></div>
            <div class="menu">
                <router-link to="/base/home/homeAll" active-class="menu_active"
                >首页
                </router-link
                >
                <router-link to="/base/Notice" active-class="menu_active">公告</router-link>
                
                <router-link to="/base/fish" active-class="menu_active"
                >鱼吧
                </router-link
                >
            </div>
            <div class="right">
                <div class="search">
                    <el-input
                            v-model="input"
                            placeholder="请输入内容"
                            size="medium "
                            class="einput"
                    ></el-input>
                    <el-button
                            type="primary"
                            icon="el-icon-search"
                            class="esearch"
                            size="mini"
                    ></el-button>
                </div>
                <router-link class="right_item" to="/base/user_self/user_concern" active-class="right-menu-active">
                    <i class="iconfont">&#xe755;</i>
                    <div>关注</div>
                </router-link>
                <router-link class="right_item" to="/base/open_live" active-class="right-menu-active" v-if="user.level===2">
                    <i class="iconfont">&#xe754;</i>
                    <div>开播</div>
                </router-link>
                <router-link class="right_item" to="/base/apply_streamer" active-class="right-menu-active" v-if="user.level!==2">
                    <i class="iconfont">&#xe754;</i>
                    <div>申请主播</div>
                </router-link>
                <div class="avatar">
                    <el-avatar
                            :src="user.avatarUrl"
                            :size="45"
                    ></el-avatar>
                </div>
                <div class="login">
                    <template v-if="!user.username">
                        <div class="welcome">
                            亲爱的召唤师，欢迎
                            <router-link to="/Canyon_Gaming_Starter/login">登录</router-link>
                        </div>
                    </template>
                    <template v-if="user.username">
                        <el-dropdown class="have_login">
                        <span class="el-dropdown-link">{{ user.username }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="toPerson" icon="el-icon-user"
                                >个人信息
                                </el-dropdown-item
                                >
                                <el-dropdown-item @click.native="toControl" icon="el-icon-setting"
                                                  v-if="user.level===0 "
                                >管理系统
                                </el-dropdown-item
                                >
                                <el-dropdown-item
                                        @click.native="logout"
                                        icon="el-icon-switch-button"
                                >退出
                                </el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "Header",
    data() {
        return {
            input: "",
        };
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        toPerson() {
            this.$router.push("/base/user_self");
        },
        toControl() {
            this.$router.push("/base/admin/manageUser");
        },
        logout() {
            sessionStorage.removeItem("user");
            this.$store.dispatch("getUserFromSession");
            this.$notify({
                message: '退出成功',
                type: 'success',
                offset: 50,
                duration:1200,
            });
            this.$router.push("/");
        },
    },
    mounted() {
        this.$store.dispatch("getUserFromSession");
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: "iconfont"; /* Project id 3979529 */
    src: url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.woff2?t=1680059860745") format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.woff?t=1680059860745") format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.ttf?t=1680059860745") format("truetype");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.headerwarp {
    width: 100vw;
    position: fixed;
    background-color: #080411;
    z-index: 10;
}

.header {
    height: 60px;
    width: 1600px;
    margin: 0 auto;
    display: flex;
}

.menu {
    margin-left: 80px;
    flex-grow: 7;
    display: flex;
    line-height: 30px;
    text-align: center;
    align-content: flex-end;
}

.menu > a {
    width: 63px;
    height: 30px;
    margin: auto 0;
    margin-left: 8px;
    font-size: 17px;
    color: white;
}

.menu > a:hover {
    background-color: #c3a340;
    color: aliceblue;
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
    cursor: pointer;
}

.menu_active {
    background-color: #c3a340;
    color: aliceblue;
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
}

.right-menu-active{
    color: #c3a340 !important;
}

.right {
    margin-right: 0;
    flex-grow: 3;
    display: flex;
    justify-content: flex-end;
}

.right > a,
.avatar {
    margin-left: 25px;
}

.right_item {
    text-align: center;
    position: relative;
    top: 10px;
    color: white;
}

.right_item:hover {
    color: #c3a340;
}

.avatar {
    position: relative;
    top: 6px;
}

.login {
    line-height: 60px;
    margin-left: 10px;
    color: white;
}

.welcome > a {
    color: blanchedalmond;
}

.search {
    position: relative;
    top: 12px;
    right: 60px;
    height: 36px;
    display: flex;
    align-content: center;
}

.einput {
    position: relative;
    left: 3px;
}

.esearch {
    border-radius: 0 4px 4px 0;
    z-index: 9;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
</style>
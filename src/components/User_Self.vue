<template>
  <div class="outside">
    <div class="live_wrap">
      <div class="user_head">
        <h1 class="f1">个人中心</h1>
      </div>
      <div class="user_main">
        <div class="u_nav">
          <ul class="u_nav_ul">
            <li>
              <i class="iconfont">&#xe8a0;</i>
              <router-link to="/base/user_self/user_myInfo"
                >我的资料</router-link
              >
            </li>
            <li>
              <i class="iconfont">&#xeb1a;</i>
              <router-link to="/base/user_self/user_wallet"
                >钱包中心</router-link
              >
            </li>
            <li >
              <i class="iconfont">&#xe600;</i>
              <router-link to="/base/user_self/user_concern"
                >我的关注</router-link
              >
            </li>
            <li v-if="this.level">
              <i class="iconfont">&#xeb66;</i>
              <router-link to="/base/user_self/living_data"
                >直播数据</router-link
              >
            </li>
            <li v-if="this.level">
              <i class="iconfont">&#xeb66;</i>
              <router-link to="/base/user_self/time_data">直播排班</router-link>
            </li>
          </ul>
        </div>
        <div class="u_mainbody">
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User_Self",
  data() {
    return {
      level:false,
    };
  },
  methods: {
    init() {
      console.log(this.$store.state.user.level)
      if(this.$store.state.user.level == 2){
        //主播
        this.level = true
      }
      else{
        this.level = false
      }
    },
  },
  mounted(){
    this.init()
  },
};
</script>

<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_voe5j3d06sr.woff2?t=1684336977276")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_voe5j3d06sr.woff?t=1684336977276")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_voe5j3d06sr.ttf?t=1684336977276")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-size: 27px;
  text-decoration: none;
  color: #333;
  outline: none;
}

.live_warp {
  width: 1000px;
  margin: 0px auto 60px;
  padding-top: 30px;
  height: 900px;
}
.outside {
  margin-left: 200px;
  width: 1020px;
  margin: 0 auto;
  padding-top: 80px;
  height: 1000px;
}

.f1 {
  width: 167px;
  height: 50px;
  font-size: 40px;
  color: yellow;
  border-bottom: 2px #ff8f2b solid;
  text-align: center;
}

.user_head {
  margin-bottom: 20px;
  /* border-bottom: 2px #ebebeb solid; */
}

.user_main {
  display: flex;
  background-color: #ebebeb;
}
.u_nav {
  width: 169px;
}

.u_nav_ul {
  width: 168px;
}

.u_nav_ul li {
  margin-top: 7px;
  margin-bottom: 7px;
  /* background: #ff8f2b; */
}

.u_nav_ul li a {
  font-size: 22px;
}

.u_nav_ul li i {
  font-size: 25px;
  padding-left: 10px;
  align: center;
}

.u_nav_ul li span {
  margin-left: 3px;
  font-size: 27px;
}

.u_mainbody {
  /* width: 100%; */

  height: 742px;
  width: 645px;
  padding-left: 10px;
  padding-top: 5px;
}
</style>


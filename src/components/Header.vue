<template>
  <div class="headerwarp">
    <div class="header">
      <div><img src="../assets/logo.png" alt="" height="60px" /></div>
      <div class="menu">
        <router-link to="/" active-class="menu_active">首页</router-link>
        <router-link to="/11" active-class="menu_active">视频</router-link>
        <router-link to="/22" active-class="menu_active">赛事</router-link>
        <router-link to="/base/fish" active-class="menu_active">鱼吧</router-link>
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
        <router-link class="right_item" to="/11">
          <i class="iconfont">&#xe755;</i>
          <div>关注</div>
        </router-link>
        <router-link class="right_item" to="/11">
          <i class="iconfont">&#xe754;</i>
          <div>开播</div>
        </router-link>
        <div class="avatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="45"
          ></el-avatar>
        </div>
        <div class="login">
          亲爱的召唤师，欢迎
          <router-link to="/Canyon_Gaming_Starter">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.woff2?t=1680059860745")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.woff?t=1680059860745")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_dn5pk2x6smg.ttf?t=1680059860745")
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

.headerwarp {
  width: 100vw;
  position: fixed;
  /* background-color: #2d2e36; */
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
.right {
  margin-right: 0;
  flex-grow: 3;
  display: flex;
  justify-content: end;
}
.right > a,
.avatar {
  margin-left: 25px;
}
.right_item {
  text-align: center;
  position: relative;
  top: 7px;
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
.login > a {
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
</style>
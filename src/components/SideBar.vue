<template>
  <div class="menu">

    <div class="menugroup">
      <router-link
        to="/base/admin/manageUser"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/manageUser"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xff1b;</i>用户管理</router-link
      >
    </div>
    <div class="divide"></div>
    <div class="menugroup">
      <router-link
        to="/base/admin/manageStreamer"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/manageStreamer"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xff1f;</i>播主管理</router-link
      >
    </div>
    <div class="divide"></div>
    <div class="menugroup">
      <router-link
        to="/base/admin/manageTheme"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/manageTheme"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xff1c;</i>主题管理</router-link
      >
    </div>
    <div class="divide"></div>
    <div class="menugroup">
      <router-link
        to="/base/admin/manageScheduling"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/manageScheduling"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xe75e;</i>排班管理</router-link
      >
    </div>
    <div class="divide"></div>
    <div class="menugroup">
      <router-link
        to="/base/admin/manageMessage"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/manageMessage"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xff1e;</i>消息管理</router-link
      >
    </div>
    <div class="divide"></div>
    <div class="menugroup">
      <router-link
        to="/base/admin/statisticalAnalysis"
        active-class="highlight"
        class="right"
      ></router-link>
      <router-link
        to="/base/admin/statisticalAnalysis"
        class="menu-item"
        active-class="m-item-active"
        ><i class="iconfont">&#xff1d;</i>统计分析</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_53rcb9l64dc.woff2?t=1683647408534")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_53rcb9l64dc.woff?t=1683647408534")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_53rcb9l64dc.ttf?t=1683647408534")
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
.menu {
  height: 80vh;
}
.menu-item {
  display: block;
  color: #1f2328;
  /* height: 50px; */
  width: 300px;
  padding: 0 10px;
  line-height: 30px;
  margin: 5px 2px 5px 7px;
}
.menu-item:hover{
  background-color: #f4f5f7;
  border-radius: 5px;
  cursor: pointer;
}
.m-item-active {
  background-color: #f4f5f7;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
i {
  color: #656d76;
  margin-right: 5px;
}
.divide {
  width: 100%;
  height: 1px;
  background-color: #d8dee4;
}
.right {
  display: block;
  height: 25px;
  width: 5px;
  background-color: #c3a340;
  border-radius: 2px;
  visibility: hidden;
  position: relative;
  top: 8px;
  left: 3px;
}
.highlight {
  visibility: visible;
}
.menugroup {
  display: flex;
}
</style>

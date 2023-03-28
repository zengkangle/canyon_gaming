<template>
  <div class="headerwarp">
    <div class="header">
      <div><img src="../assets/logo.png" alt="" height="60px" /></div>
      <div class="menu">
        <div>首页<router-link>aaa</router-link></div>
        <div>视频 <router-link></router-link></div>
        <div>赛事</div>
        <div>鱼吧</div>
      </div>
      <div class="right">aa</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerwarp {
  width: 100vw;
  /* border-bottom: 1px solid #E2E2E2; */
  position: fixed;
  background-color: #2d2e36;
  z-index: 10;
  /* background-image: url(../assets/bg2.jpg); */
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
.menu > div {
  width: 63px;
  height: 30px;
  /* border:1px solid; */
  margin: auto 0;
  margin-left: 8px;
  font-size: 17px;
  color: white;
}
.menu > div:hover {
  background-color: #fb8569;
  color: aliceblue;
  border-radius: 8%;
}
/* .menu>div{
    background-color: coral;
    color: aliceblue;
    border-radius: 8%;
} */
.right {
  margin-right: 0;
  flex-grow: 3;
}
</style>
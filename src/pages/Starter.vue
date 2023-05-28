<template>
  <div class="login_background">
    <div><img height="70px" src="../assets/logo.png" @click="goHome" /></div>

    <div class="all_outside">
      <div class="title-header">
        <h1>登录到</h1>
        <h1>Canyon Living</h1>
        <div class="sub-title">
          <p class="tip1">{{ tip1 }}</p>
          <router-link
            v-bind:to="'/Canyon_Gaming_Starter/' + type"
            @click.native="go"
            >{{ tip2 }}</router-link
          >
          <p class="tip2" click="gotoenroll"></p>
        </div>
      </div>
      <router-view></router-view>
    </div>

    <div class="bottom">Copyright @ 2021-2022 Tencent. All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: "Starter",
  data() {
    return {
      account: "",
      password: "",
      tip1: "没有账号吗",
      tip2: "注册新账号",
      type: "enroll",
      a: true,
    };
  },

  methods: {
    go() {
      if (this.a) {
        (this.type = "login"), 
        (this.tip1 = "已有账号"), 
        (this.tip2 = "去登录")
        this.a = false;
      } else {
        (this.type = "enroll"),
        (this.tip1 = "没有账号？"),
        (this.tip2 = "去注册");
        this.a = true;
      }
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_background {
  position: absolute;
  width: 100%;
  height: 100%;

  background-repeat: repeat-y;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url(../assets/login.jpg);
}

.all_outside {
  margin-top: 300px;
  width: 338px;
  margin-left: 40px;
  /* background-color: red; */
  background-color: rgba(246, 241, 235, 0.7);
}

.title-header {
  /* background-color: aquamarine; */
  width: 303px;
  /* margin-left: 40px; */
  /* position: absolute; */
  /* top: 150px; */
  padding-left: 35px;
  /* background-color: rgba(246, 241, 235, 0.7); */
}

h1 {
  margin: 0;
  padding: 0;
}

.sub-title {
  padding-top: 10px;
}

.tip1 {
  display: inline-block;
  margin-right: 8px;
  font-size: 14px;
  color: #9b9b9b;
}

.tip2 {
  display: inline-block;
  margin-right: 8px;
  font-size: 14px;
  color: black;
}

.bottom {
  position: absolute;
  bottom: 80px;
  color: #c3a340;
  left: 40px;
}
</style>
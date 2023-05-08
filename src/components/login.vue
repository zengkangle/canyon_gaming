<template>
  <div class="login_outside">
    <div class="login_form">
      <h2>账号：</h2>
      <el-input
        prefix-icon="el-icon-user-solid"
        class="Name_input"
        v-model="account"
        clearable
        placeholder="请输入内容"
      ></el-input>
      <h2>密码：</h2>
      <el-input
      prefix-icon="el-icon-lock"
        class="Name_input"
        v-model="password"
        show-password
        placeholder="请输入内容"
      ></el-input>
    </div>
    <div class="login_buttons">
      <el-button class="login_register" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        account:'',
        password:''
    };
  },
  methods:{
    login(){
      if(this.account=="" || this.password==""){
        this.$message({
          showClose: true,
          message: '请输入账号或密码',
          type: 'error'
        });
      }
      // 将验证账号密码 推送到服务器


      
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0px;
  padding-top: 5px;
  margin-left: 0px;
}
p{
    margin: 0;
    padding: 0;
}

h2 {
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 5px;
}

.login_background {
  position: absolute;
  width: 100%;
  height: 100%;

  background-repeat: repeat-y;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url(../assets/login.jpg);
}




.login_buttons {
  margin-top: 10px;
  margin-left: 20px;
}

.login_register {
  margin-right: 30px;
  width: 212px;
}

.login_outside {
  height: 309px;
  width: 325px;
  padding-left: 13px;
}

.login_head {
  margin-left: 20px;
}

.login_form {
  margin-left: 20px;
}

.Name_input {
  width: 70%;
}
</style>
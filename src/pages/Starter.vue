<template>
  <div class="login_background">
    <div class="login_outside">
      <div class="login_head">
        <h1>Canyon</h1>
        <h1>&nbsp;&nbsp;&nbsp; Game</h1>
      </div>
      <div class="login_form">
        <h2>账号：</h2>
        <el-input class="Name_input" v-model="account" placeholder="请输入内容"></el-input>
        <h2>密码：</h2>
        <el-input class="Name_input" v-model="password" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <el-button>登录</el-button>
        <el-button>注册</el-button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Starter",
  data() {
    return {
      account:'',
      password:''
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1{
  margin: 0px;
  padding-top: 5px;
  margin-left: 0px;
}

h2{
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 5px;
}


.login_background{
  position : absolute;
  width : 100%;
  height : 100%;
  background-repeat: repeat-y;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url(../assets/login.jpg);
  
}



.login_outside{
  height: 409px;
  width: 350px;
  margin-left: 40px;
  margin-top: 335px;
  background-color: rgba(246,241,235,0.7)     
}

.login_head{
  margin-left: 20px;
}

.login_form{
  margin-top: 10px;
  margin-left: 20px;
}

.Name_input{
  width: 70%;
}



</style>
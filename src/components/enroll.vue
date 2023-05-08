<template>
  <div class="login_outside">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account" for="account">
        <el-input id="account" v-model="ruleForm.account" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" for="accountPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  

  </div>



</template>

<script>
export default {
  name: "enroll",
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        account: "",
      },
      rules: {
        accountPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
        ],
        Pass: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
      },
    };
  },
  methods: {
    submitForm(){
      if(this.ruleForm.account==""||this.ruleForm.checkPass==""||this.ruleForm.pass==""){
        this.$message({
          showClose: true,
          message: '请输入账号或密码',
          type: 'error'
        });
      }

      //提交到后台验证账号密码

    },
    resetForm(){
      this.ruleForm.account = ""
      this.ruleForm.checkPass =""
      this.ruleForm.pass = ""
    }
  },
};
</script>

<style scoped>
.login_outside {
  height: 309px;
  width: 303px;
}

.demo-ruleForm {
  /* margin-left: 30px; */
}
</style>>


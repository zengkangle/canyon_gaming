<template>
    <div class="enroll_outside">
        <el-form
                :model="registerUser"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
        >
            <el-form-item label="账号" prop="username" for="username">
                <el-input id="username" v-model="registerUser.username" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone" for="phone">
                <el-input id="phone" v-model="registerUser.phone" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                        type="password"
                        v-model="registerUser.password"
                        autocomplete="off"
                        clearable
                ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" for="checkPass">
                <el-input
                        type="password"
                        v-model="registerUser.checkPass"
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
            registerUser: {
                password: "",
                checkPass: "",
                username: "",
                phone: "",
            },
            rules: {
                checkPass: [
                    {required: true, message: "请再次输入密码", trigger: "blur"},
                ],
                username: [
                    {required: true, message: "请输入账号", trigger: "blur"}
                ],
                password: [
                    {required: true, message: "请输入密码", trigger: "blur"}
                ],
                phone: [
                    {required: true, message: "请输入手机号", trigger: "blur"}
                ],
            },
        };
    },
    methods: {
        submitForm() {
            if (this.registerUser.username === "" || this.registerUser.checkPass === "" || this.registerUser.password === "" || this.registerUser.phone === "") {
                this.$message({
                    showClose: true,
                    message: '您还有选项未输入，请检查！',
                    type: 'error'
                });
            } else {
                this.request.post(
                    "/user/register",
                    this.registerUser
                ).then(res => {
                    if (res.code === '200') {
                        this.$message.success("注册成功")
                        this.$router.push("/Canyon_Gaming_Starter")
                    } else
                        this.$message.error(res.msg)
                }).catch();
            }

            //提交到后台验证账号密码

        },
        resetForm() {
            this.registerUser.username = ""
            this.registerUser.checkPass = ""
            this.registerUser.password = ""
            this.registerUser.phone = ""
        }
    },
};
</script>

<style scoped>
.enroll_outside {
    height: 309px;
    width: 303px;
}

.demo-ruleForm {
    /* margin-left: 30px; */
}
</style>>


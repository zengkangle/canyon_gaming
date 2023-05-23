<template>
    <div class="login_outside">
        <div class="login_form">
            <h2>账号：</h2>
            <el-input
                    prefix-icon="el-icon-user-solid"
                    class="Name_input"
                    v-model="user.username"
                    clearable
                    placeholder="请输入内容"
            ></el-input>
            <h2>密码：</h2>
            <el-input
                    prefix-icon="el-icon-lock"
                    class="Name_input"
                    v-model="user.password"
                    show-password
                    placeholder="请输入内容"
            ></el-input>
            <div class="radio">
                <el-radio v-model="user.radio" label="1">用户</el-radio>
                <el-radio v-model="user.radio" label="2">主播</el-radio>
            </div>
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
            user: {
                username: '',
                password: '',
                radio:'1',
            }
        };
    },
    methods: {
        login() {
            if (this.user.username ==="" || this.user.password ==="") {
                this.$message({
                    showClose: true,
                    message: '请输入账号或密码',
                    type: 'error'
                });
            } else {
                if (this.user.radio==='1'){
                    this.request.post(
                        "/user/login",
                        this.user
                    ).then(res => {
                        if (res.code === '200') {
                            this.$notify({
                                message: '登录成功',
                                type: 'success'
                            });
                            sessionStorage.setItem("user", JSON.stringify(res.data))//存储用户信息到浏览器
                            this.$store.dispatch("getUserFromSession")
                            this.$router.push("/")
                        } else
                            this.$message.error(res.msg)
                    }).catch();
                }else {
                    this.request.post(
                        "/anchor/login",
                        this.user
                    ).then(res => {
                        if (res.code === '200') {
                            this.$notify({
                                message: '登录成功',
                                type: 'success'
                            });
                            sessionStorage.setItem("user", JSON.stringify(res.data))//存储用户信息到浏览器
                            this.$store.dispatch("getUserFromSession")
                            this.$router.push("/")
                        } else
                            this.$message.error(res.msg)
                    }).catch();
                }
            }
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

p {
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
.radio{
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
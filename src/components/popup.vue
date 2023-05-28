<template>
  <div class="popup_outside" v-show="showpo">
    <div class="mask"></div>
    <div class="main_popup">
      <div class="close">
        <div class="empty"></div>
        <div><i class="iconfont" @click="close()">&#xe661;</i></div>
      </div>
      <div class="modify_phone" v-if="show_phone">
        <div class="title_phone"><h3>修改手机</h3></div>
        <div class="now_phone">
          <span class="now_phone_span">当前手机号：{{ user.phone }}</span>
        </div>
        <div class="input_phone">
          <el-input
            type="text"
            placeholder="请输入内容"
            v-model="new_phone"
            maxlength="11"
            show-word-limit
          />
        </div>
        <div class="phone_success">
          <el-button type="success" plain class="pho_btn" @click="push_phone"
            >提交</el-button
          >
        </div>
      </div>

      <div class="modify_email" v-if="show_email">
        <div class="title_email"><h3>修改邮箱</h3></div>
        <div class="now_email">
          <span class="now_email_span">当前邮箱：{{ user.email }}</span>
        </div>
        <div class="input_email">
          <el-input type="text" placeholder="请输入内容" v-model="new_email" />
        </div>
        <div class="email_success">
          <el-button type="success" plain class="email_btn" @click="push_email"
            >提交</el-button
          >
        </div>
      </div>

      <div class="modify_password" v-if="show_password">
        <div class="title_password"><h3>修改密码</h3></div>
        <div class="old_password">
          <el-input
            v-model="old_password"
            placeholder="请输入当前密码"
            type="password"
          ></el-input>
        </div>
        <div class="new_password">
          <el-input
            v-model="new_password"
            placeholder="请输入新密码"
            type="password"
          ></el-input>
        </div>
        <div class="password_success">
          <el-button
            type="success"
            plain
            class="password_btn"
            @click="push_password"
            >提交</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: ["showpo", "user"],
  data() {
    return {
      now_show: "p",
      show_phone: false,
      show_email: false,
      show_password: false,
      new_phone: "",
      new_email: "",
      old_email: "",
      new_password: "",
      old_password: "",
      anchor: {},
    };
  },
  methods: {
    get_show(type, booln) {
      if (type == "p") {
        //显示修改手机
        (this.show_phone = true), (this.now_show = "p");
      } else if (type == "e") {
        //显示修改邮件
        (this.show_email = true), (this.now_show = "e");
      } else if (type == "w") {
        //显示修改密码
        (this.show_password = true), (this.now_show = "w");
      }
    },
    close() {
      this.$emit("close");
      if (this.now_show == "p") {
        this.show_phone = false;
      } else if (this.now_show == "e") {
        this.show_email = false;
      } else {
        this.show_password = false;
      }
    },

    push_phone() {
      this.user.phone = this.new_phone;
      this.request
        .post("/anchor/modifyAnchor", this.user)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: res.data,
              type: "success",
              offset: 50,
              duration: 1200,
            });
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    push_email() {
      this.old_email = this.user.email;
      this.user.email = this.new_email;
      this.request
        .post("/anchor/modifyAnchor", this.user)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: res.data,
              type: "success",
              offset: 50,
              duration: 1200,
            });
            this.user.email = this.new_email;
          } else {
            this.user.email = this.old_email;
            this.$message.error(res.msg);
          }
        })
        .catch();
    },
    push_password() {
      if (this.old_password == this.user.password) {
        this.user.password = this.new_password;
        this.request
          .post("/anchor/modifyAnchor", this.user)
          .then((res) => {
            if (res.code === "200") {
              this.$notify({
                message: res.data,
                type: "success",
                offset: 50,
                duration: 1200,
              });
              this.old_password = "";
              this.new_password = "";
            } else {
              this.user.password = this.old_password;
              this.old_password = "";
              this.new_password = "";
              this.$message.error(res.msg);
            }
          })
          .catch();
      } else {
        this.$notify({
          message: "旧密码错误",
          type: "warning",
          offset: 50,
          duration: 1200,
        });
        this.old_password = "";
        this.new_password = "";
      }
    },

  },

  created() {},
};
</script>

<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_l0wmpkfsx6.woff2?t=1683955896353")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_l0wmpkfsx6.woff?t=1683955896353")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_l0wmpkfsx6.ttf?t=1683955896353")
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

.mask {
  position: fixed;
  top: 0;
  left: 5px;
  height: 100%;
  width: 100%;
  background-color: rgba(167, 165, 165, 0.486);
  opacity: 0.5;
  z-index: 7;
}

.model-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  width: 600px;
  height: 195px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 10;
}

.main_popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  height: 195px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 10;
}

.close {
  padding-top: 3px;
  display: flex;
}
.empty {
  width: 96%;
}

.modify_phone {
  width: 400px;
  margin: auto;
}

.modify_email {
  width: 400px;
  margin: auto;
}

.modify_password {
  width: 400px;
  margin: auto;
}

.title_phone h3 {
  text-align: center;
}

.title_email h3 {
  text-align: center;
}

.title_password h3 {
  text-align: center;
}

.now_phone {
  margin-top: 2px;
  margin-bottom: 2px;
  text-align: center;
  font-size: 16px;
}

.now_email {
  margin-top: 2px;
  margin-bottom: 2px;
  text-align: center;
  font-size: 16px;
}

.now_email_span {
  color: orange;
}

.now_phone_span {
  color: orange;
}

.input_phone {
}

.pho_btn {
  margin-top: 3px;
  margin-left: 150px;
}

.email_btn {
  margin-top: 3px;
  margin-left: 150px;
}

.old_password {
  width: 300px;
  margin: auto;
  margin-top: 3px;
}

.new_password {
  width: 300px;
  margin: auto;
  margin-top: 3px;
}

.password_success {
}

.password_btn {
  margin-top: 3px;
  margin-left: 150px;
}
</style>
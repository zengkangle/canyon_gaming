<template>
  <div class="user_myInfo_outside">
    <div class="togglebtn_clearfix">
      <h2>我的资料</h2>
    </div>
    <div class="myprofile_maing">
      <div class="userinfo_clearfix">
        <div class="user_img">
          <img
            src="https://apic.douyucdn.cn/upload/avatar_v3/201902/e0d05413f49f4319910a51c6e17f099a_big.jpg?rltime"
          />
        </div>
      </div>
      <div class="fl_udetail_info">
        <div class="user_name"><span>KAone</span></div>
        <div class="user_phone">
          <span>手机号：123123123</span>
        </div>
        <div class="user_email"><span>邮箱：1323123@qq.com</span></div>
        <div class="user_wealthy"><span>精粹：12312312</span></div>
      </div>
    </div>
    <div class="account_setting">
      <div class="account_title"><h2>账号设置</h2></div>
      <div class="ul_outside">
        <ul class="user_check_total">
          <li class="user_check_phone">
            <div class="iconfont_phone">
              <i class="iconfont">&#xe692;</i>
            </div>

            <div class="user_check_message_phone">
              <span>手机号：123123123</span>
            </div>

            <div class="button_union">
              <el-button round>修改手机</el-button>
            </div>
          </li>

          <li class="user_check_password">
            <div class="iconfont_password">
              <i class="iconfont">&#xff1a;</i>
            </div>
            <div class="user_check_message_password">
              <span>密码强度：低</span>
            </div>
            <div class="button_union">
              <el-button round>修改密码</el-button>
            </div>
          </li>

          <li class="user_check_email">
            <div class="iconfont_email">
              <i class="iconfont">&#xe908;</i>
            </div>

            <div class="user_check_message_email">
              <span>邮箱：1232323232@qq.com</span>
            </div>
            <div class="button_union">
              <el-button round>修改邮箱</el-button>
            </div>
          </li>

          <li class="user_check_identity">
            <div class="iconfont_identity">
              <i class="iconfont">&#xec4d;</i>
            </div>

            <div class="user_check_message_identity">
              <span>尚未实名认证</span>
            </div>
            <div class="button_union">
              <el-button round>修改邮箱</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="up_img">
      <h2>更换头像</h2>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "user_myInfo",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_ivxmj5n98db.woff2?t=1683640292898")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_ivxmj5n98db.woff?t=1683640292898")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_ivxmj5n98db.ttf?t=1683640292898")
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

.user_myInfo_outside {
  /* margin-left: 20px; */
  width: 100%;
  height: 100%;
}

.togglebtn_clearfix {
  margin-bottom: 34px;
  width: 100%;
  background: #ebebeb;
}

span {
  font-size: 17px;
}

.myprofile_maing span {
  font-size: 24px;
}

.myprofile_maing {
  margin-left: 20px;
  display: flex;
}

.userinfo_clearfix {
  padding-left: 3px;
}

.fl_udetail_info {
  padding-left: 10px;
}

.user_img img {
  width: 150px;
  height: 150px;
}

.account_setting {
  margin-top: 5px;
  width: 830px;
  overflow: auto;
  background-color: #ebebeb;
}

.account_title {
  margin-bottom: 10px;
}

.user_check_total {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.user_check_total li i {
  font-size: 33px;
}

.user_check_total li {
  width: 48%;
  list-style: none;
  margin-bottom: 10px;
  display: flex;
}

.iconfont_identity {
  width: 43.8px;
  height: 40px;
}

.iconfont_phone {
  display: inline-block;
  width: 11%;
}

.user_check_message_phone {
  font-size: 24px;
  display: inline-block;
  width: 60%;
}

.iconfont_password {
  display: inline-block;
  width: 11%;
}

.user_check_message_password {
  font-size: 24px;
  display: inline-block;
  width: 57%;
}

.iconfont_email {
  display: inline-block;
  width: 11%;
}

.user_check_message_email {
  font-size: 14px;
  display: inline-block;
  width: 60%;
}

.user_check_message_identity {
  font-size: 14px;
  display: inline-block;
  width: 57%;
}

.button_union {
  float: right;
}

.up_img {
  width: 400px;
  height: 300px;
  background-color: #ebebeb;
}
</style>
<template>
  <div class="user_myInfo_outside">
    <div class="togglebtn_clearfix">
      <h2>我的资料</h2>
    </div>
    <div class="myprofile_maing">
      <div class="userinfo_clearfix">
        <div class="user_img">
          <img src="https://apic.douyucdn.cn/upload/avatar_v3/201902/e0d05413f49f4319910a51c6e17f099a_big.jpg?rltime">
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
          <li></li>
        </ul>
      </div>
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
.user_myInfo_outside {
  /* margin-left: 20px; */
  width: 100%;
  height: 100%;
}

.togglebtn_clearfix {
  margin-bottom: 34px;
  width: 100%;
  background: #f5f5f5;
}

span{
  font-size: 23px;
}



.myprofile_maing{
  margin-left: 20px;
  display: flex;
}

.userinfo_clearfix{
  padding-left: 3px;
  
}

.fl_udetail_info{

  padding-left: 10px;

}


.user_img img{
  width: 150px;
  height: 150px;
}



.account_setting{
    margin-top:5px;
    width: 755px;
    height: 100px;
    background-color:aquamarine;
}
</style>
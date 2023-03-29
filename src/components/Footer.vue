<template>
  <div class="bottom">
    <div class="footer">
      <img src="../assets/logo.png" alt="" height="100px" class="logo" />
      <div class="left">
        <div class="text1">关注我们</div>
        <img src="../assets/wechact.jpg" alt="" height="100px" />
        <div class="text2">扫码关注229工作室</div>
      </div>
      <div class="right">
        <div>
          峡谷互动娱乐|服务条款|隐私保护指引|儿童隐私保护指引|峡谷直播招聘|峡谷直播客服|直播列表|广告服务及商务合作
        </div>
        <div>峡谷直播公司版权所有 网络游戏行业防沉迷自律公约</div>
        <div>COPYRIGHT © 1998 - 2023 TENCENT. ALL RIGHTS RESERVED.</div>
        <div>COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</div>
        <div>
          本游戏直播适合16+岁的用户观看；为了您的健康，请合理控制观看时间。
        </div>
        <div>
          <img
            src="https://game.gtimg.cn/images/js/2018foot/logo/gswj.png"
            alt=""
          />
          工商网监电子标识 |粤网文[2020]3396-195号|（署）网出证（粤）字第054号
        </div>
        <div>
          批准文号批准文号：新出审字[2011]310号 |文网进字[2011] 004号 |
          出版物号：ISBN 978-7-89989-145-2|全国文化市场统一举报电话：12318
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: white;
}
.bottom {
  padding: 45px 0;
  background-color: #3f3f3f;
}
.footer {
  height: 175px;
  width: 1400px;
  margin: 0 auto;
  display: flex;
}
.logo {
  margin-top: 15px;
  margin-right: 21px;
}
.text1 {
  margin-bottom: 20px;
}
.text2 {
  position: relative;
  right: 20px;
}
.right {
  margin-left: 250px;
  font-size: 12px;
}
.right > div {
  margin-bottom: 8px;
  color: #abb2b2;
}
</style>

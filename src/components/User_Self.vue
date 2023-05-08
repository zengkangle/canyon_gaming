<template>
  <div class="outside">
    <div class="live_wrap">
      <div class="user_head">
        <h1 class="f1">个人中心</h1>
      </div>
      <div class="user_main">
        <div class="u_nav">
            <ul class="u_nav_ul">
                <li>
                  <i class="iconfont">&#xe8a0;</i>
                  <!-- <span>我的资料</span> -->
                  <router-link to="/base/user_self/user_myInfo">我的资料</router-link>
                  </li>
                <li>
                  <i class="iconfont">&#xeb1a;</i>
                  <!-- <span>钱包中心</span> -->
                  <router-link to="/base/user_self/user_wallet">钱包中心</router-link>
                </li>
                <li>
                  <i class="iconfont">&#xe600;</i>
                  <!-- <span>我的关注</span> -->
                  <router-link to="/base/user_self/user_concern">我的关注</router-link>
                  </li>
            </ul>
        </div>
        <div class="u_mainbody">
          <router-view>
            
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User_Self",
  data() {
    return {};
  },
  mounted: {},
  created() {},
};
</script>

<style scoped>


@font-face {
  font-family: 'iconfont';  /* Project id 3979529 */
  src: url('//at.alicdn.com/t/c/font_3979529_mwrophqr3eq.woff2?t=1683466107167') format('woff2'),
       url('//at.alicdn.com/t/c/font_3979529_mwrophqr3eq.woff?t=1683466107167') format('woff'),
       url('//at.alicdn.com/t/c/font_3979529_mwrophqr3eq.ttf?t=1683466107167') format('truetype');
}


.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }



a{
  font-size: 27px;
  text-decoration: none;
  color: #333;
  outline: none;
}

.live_warp {
  width: 1000px;
  margin: 0px auto 60px;
  padding-top: 30px;
  height: 900px;
}
.outside {
  margin-left: 200px;
  width: 1020px;
  margin: 0 auto;
  padding-top: 80px;
  height: 1000px;
}

.f1 {
  width: 167px;
  height: 50px;
  font-size: 40px;
  color: yellow;
  border-bottom: 2px #ff8f2b solid;
  text-align: center;
}

.user_head {
  margin-bottom: 20px;
  border-bottom: 2px #ebebeb solid;
}


.user_main{
    display: flex;
    background-color: #ebebeb;
}
.u_nav{
    
    width: 169px;
}


.u_nav_ul{
  width: 168px;
}

.u_nav_ul li{
  margin-top:7px;
  margin-bottom: 7px;
  background: #ff8f2b;
}

.u_nav_ul li i{
  
  font-size: 25px;
  padding-left: 10px;
  align: center;
  
}

.u_nav_ul li span{
  margin-left: 3px;
  font-size: 27px;
}

.u_mainbody{
  width: 100%;
  padding-left: 10px;
  padding-top: 5px;
}
</style>


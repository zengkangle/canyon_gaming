<template>
  <div class="fish-all">
    <div class="home-homeMain">
      <div class="main-content">
        <div class="main-content-editorWrap">
          <el-input
            resize="none"
            class="common-editorText"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 2 }"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>

          <div class="main-content-editorWrap-commit">
            <div class="incon-font-set">
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-tupiantianchong-copy"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">图片</span>
              </div>
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-biaoqing-copy"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">表情</span>
              </div>
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-a-huati2-copy"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">话题</span>
              </div>
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-jiahao"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">加号</span>
              </div>
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-shipintianchong-copy"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">视频</span>
              </div>
              <div class="common-editorWidgetWrapper">
                <svg-icon
                  iconname="icon-gengduo-copy"
                  class="icon-unification"
                ></svg-icon>
                <span class="iconname-font">更多</span>
              </div>
            </div>
            <div class="commit-editor">
              <el-button type="success">成功按钮</el-button>
            </div>
          </div>
        </div>

        <div class="wb_card-wbCardWrap">
          <div class="wb_card-wbCardDetail">
            <div class="wb_card-wbFace">
              <img
                class="img-head"
                src="https://apic.douyucdn.cn/upload/avatar_v3/201903/3dcec943761543ada419b5c845ebe04a_middle.jpg"
              />
            </div>
            <div class="wb_card-wbDetail_content">
              <div class="wb_card-wbInfo"><span>阿涛皎月Carry</span></div>
              <div class="wb_card-wbFrom_time">
                <span>2023-04-13 16:16 1.4万阅读</span>
              </div>
              <div class="wb_card-wbFrom_content">
                <p>asd</p>
                <p>兄弟们寄了</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wb_footer">
          <ul>
            <li>
              <i class="iconfont">&#xe603;</i>
            </li>
            <li>
              <i class="iconfont">&#xe63d;</i>
            </li>
            <li>
              <i class="iconfont">&#xeca7;</i>
            </li>
            <li>
              <i class="iconfont">&#xec7f;</i>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-right">
        <div class="user_card-cardMask-MA1Fm">我是用户</div>
        <div class="index-baradmin-qTCGA">热门主播推荐</div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Fish",

  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style scoped>
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3979529 */
  src: url("//at.alicdn.com/t/c/font_3979529_fklwcq53i14.woff2?t=1682171706670")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3979529_fklwcq53i14.woff?t=1682171706670")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3979529_fklwcq53i14.ttf?t=1682171706670")
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

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.fish-all {
  margin-left: 200px;
  width: 1400px;
  margin: 0 auto;
  padding-top: 80px;
}

.fish-head {
  position: absolute;
  top: 0px;
}

.home-homeMain {
  background-color: aquamarine;
  /* margin-top: 115px; */
  /* width: 1000px; */
  margin-right: auto;
  margin-left: auto;
  display: flex;
}

.main-content {
  background-color: red;

  width: 730px;
  height: 800px;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.main-right {
}

.main-content-editorWrap {
  background-color: burlywood;
  padding-top: 5px;
  padding: 5px;
}

.common-editorText {
  resize: none;

  border-radius: 8px;
  font-size: 20px;
}

.common-editorText {
}

.common-editorWidgetWrapper {
  display: inline-block;
  padding: 5px;
}

.iconname-font {
  padding-left: 1px;
  font-size: 20px;
  color: #535353;
}

.incon-font-set {
  padding: 5px;
  display: inline-block;
}

.commit-editor {
  display: inline-block;
  margin-left: 50px;
}

.wb_card-wbCardWrap {
  background-color: blueviolet;
  padding: 20px;

  /* height: 270px; */
  overflow: hidden;
  margin: auto;
  margin-top: 30px;
}

.wb_card-wbCardDetail {
}

.img-head {
  width: 50px;
  border-radius: 4px;
}

.wb_card-wbFace {
  float: left;
}

.wb_card-wbDetail_content {
  float: left;
  background-color: burlywood;
  /* width: 400px;
  height: 400px; */
  margin-left: 10px;
}

.wb_card-wbInfo {
  padding: 0px;
  padding-top: 4px;
  margin-bottom: 10px;
}

.wb_card-wbFrom_time {
  margin-bottom: 9px;
}

.wb_footer {
  width: 730px;
  height: 44px;
  background-color: cyan;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
}

li {
  flex-grow: 1;
  margin-right: 10px;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

li:last-child {
  flex-grow: 1;
  margin-right: 0;
}

.main-right {
  width: 100%;
}

.user_card-cardMask-MA1Fm {
  width: 100%;
  height: 78px;
  background-color: yellow;
}

.index-baradmin-qTCGA {
  width: 100%;
  height: 335px;
  background-color: thistle;
}
</style>
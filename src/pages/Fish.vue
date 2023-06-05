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
              <el-button type="success" @click="release">发表</el-button>
            </div>
          </div>
        </div>

        <div class="big_wb_card-wbCardWrap" v-for="(item, index) in Msg">
          <div class="wb_card-wbCardWrap">
            <div class="wb_card-wbCardDetail">
              <div class="wb_card-wbFace">
                <img
                  class="img-head"
                  src="https://apic.douyucdn.cn/upload/avatar_v3/201903/3dcec943761543ada419b5c845ebe04a_middle.jpg"
                />
              </div>
              <div class="wb_card-wbDetail_content">
                <div class="wb_card-wbInfo">
                  <span class="user-name">{{ item.username }}</span>
                </div>
                <div class="wb_card-wbFrom_time">
                  <span class="push-info">{{ item.time }}</span>
                </div>
                <div class="wb_card-wbFrom_content">
                  <p>{{ item.comment }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="wb_footer">
            <ul>
              <li>
                <i class="iconfont" @click="show_comment(item, index)"
                  >&#xe603;</i
                >
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

        <el-dialog
          title="评论"
          :visible.sync="dialogVisible"
          width="28%"
          class="dialog_main_body"
        >
          <div class="common-editorTextWrapper">
            <div class="user_head_img">
              <img class="head_img" :src="user.avatarUrl" />
            </div>
            <div class="text_areas">
              <el-input
                class="mytextarea"
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea_comment"
                resize="none"
              >
              </el-input>
            </div>
          </div>
          <div class="dialog_empty">
            <div class="dialog_button">
              <el-button type="success" @click="release_comment"
                >发表</el-button
              >
            </div>
          </div>
          <div class="rap"></div>

          <div class="root_comment" v-for="(item, index) in childrenMsgList">
            <div class="root_img">
              <img :src="item.avatarUrl" />
            </div>
            <div class="main-right">
              <div class="user_name">
                <span>{{ item.username }}</span>
              </div>
              <div class="user_content">{{ item.comment }}</div>
            </div>
          </div>
        </el-dialog>
      </div>
      <div class="main-right">
        <div class="user_card">
          <div class="user_card-userFace">
            <img
              :src="user.avatarUrl"
              class="user_card-userImg"
              style="
                border-radius: 50%;
                display: inline-block;
                width: 50px;
                height: 50px;
              "
            />
            <div class="user_card-userName">
              <span>{{ user.username }}</span>
            </div>
          </div>
          <div class="user_card-userInfoWrap">
            <ul class="user_card-userAtten">
              <li>
                <strong>15</strong>
                <span>关注</span>
              </li>
              <li>
                <strong>{{ fans }}</strong>
                <span>粉丝</span>
              </li>
              <li>
                <strong>0</strong>
                <span>动态</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="index-recommend">
          <div class="index-title">热门主播推荐</div>
          <div class="index-content">
            <div class="index-item">
              <img
                class="index-icon"
                src="https://apic.douyucdn.cn/upload/avatar_v3/202103/781508179eb44dc394fa171ebf441892_big.jpg"
              />
              <div class="index-icon-name">小白</div>
            </div>
            <div class="index-item">
              <img
                class="index-icon"
                src="https://apic.douyucdn.cn/upload/avatar_v3/202103/781508179eb44dc394fa171ebf441892_big.jpg"
              />
              <div class="index-icon-name">小白</div>
            </div>
            <div class="index-item">
              <img
                class="index-icon"
                src="https://apic.douyucdn.cn/upload/avatar_v3/202103/781508179eb44dc394fa171ebf441892_big.jpg"
              />
              <div class="index-icon-name">小白</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { time } from "echarts";
export default {
  name: "Fish",

  data() {
    return {
      textarea: "",
      dialogVisible: false,

      Msg: [],
      childrenMsgList: [],
      user: {},
      article: {
        comment: "",
        username: "",
        avatarUrl: "",
      },
      //打开dialog所需要的数据
      textarea_comment: "",
      //评论所需要的数据
      dialog_comment: {
        comment: "",

        //打开的是哪个帖子的评论
        pid: "",
        //回复的对象
        target: "",
        //评论的人
        avatarUrl: "",
        username: "",
      },
      fans: 0,
      anchorList: [],
    };
  },
  methods: {
    show_comment(item, index) {
      if (
        typeof item.childrenMsgList === "object" &&
        item.childrenMsgList !== null
      ) {
        this.childrenMsgList = item.childrenMsgList;
      } else {
        this.childrenMsgList = [];
      }
      (this.dialog_comment.pid = item.id),
        (this.dialog_comment.target = item.username);
      this.dialog_comment.username = this.user.username;
      this.dialog_comment.avatarUrl = this.user.avatarUrl;
      this.dialogVisible = true;
    },
    init() {
      this.user = this.$store.state.user;
      this.request
        .get("/msg/findAllMsg")
        .then((res) => {
          if (res.code === "200") {
            this.Msg = res.data;
          } else this.$message.error(res.msg);
        })
        .catch();

      this.request
        .get("/anchor/getsix")
        .then((res) => {
          if (res.code === "200") {
            this.anchorList = res.data;
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    release() {
      if (this.textarea == "") {
        this.$notify({
          title: "错误",
          message: "请输入内容",
          type: "warning",
        });
        return;
      }
      (this.article.comment = this.textarea),
        (this.article.username = this.user.username),
        (this.article.avatarUrl = this.user.avatarUrl);
      this.request
        .post("/msg/saveComment", this.article)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: "发布成功",
              type: "success",
              offset: 50,
              duration: 1200,
            });
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    release_comment() {
      if (this.textarea_comment == "") {
        this.$notify({
          title: "错误",
          message: "请输入内容",
          type: "warning",
        });
        return;
      }
      this.dialog_comment.comment = this.textarea_comment;
      this.request
        .post("/msg/saveComment", this.dialog_comment)
        .then((res) => {
          if (res.code === "200") {
            this.textarea_comment = "";
            this.$notify({
              message: "发布成功",
              type: "success",
              offset: 50,
              duration: 1200,
            });
            console.log(this.childrenMsgList);
            this.childrenMsgList.push(this.dialog_comment);
            this.init();
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    //如果登录的是主播 有粉丝
    init_fans() {
      this.request
        .get(
          "/anchor/getAnchorByName?username=" + this.$store.state.user.username
        )
        .then((res) => {
          if (res.code === "200") {
            this.fans = res.data.fans;
          } else this.$message.error(res.msg);
        })
        .catch();
    },
  },
  mounted() {
    this.init();
    if (this.$store.state.user.level == 2) {
      this.init_fans();
    }
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
  width: 1020px;
  /* height: 2000px; */
  margin: 0 auto;
  padding-top: 80px;
}

.fish-head {
  position: absolute;
  top: 0px;
}

.home-homeMain {
  background-color: rgba(0, 0, 0, 0.2);
  /* margin-top: 115px; */
  /* width: 1000px; */
  margin-right: auto;
  margin-left: auto;
  display: flex;
}

.main-content {
  background-color: rgba(0, 0, 0, 0.2);

  width: 800px;
  /* height: 800px; */
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.main-right {
}

.main-content-editorWrap {
  background-color: white;
  padding-top: 5px;
  padding: 5px;
  margin-top: 10px;
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
  background-color: #fff;
  padding: 20px;
  /* background-color:rgba(0,0,0,0.4); */
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
  background-color: white;
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
  border-top: 1px solid #e8e8e8;
  width: 730px;
  height: 44px;
  background-color: white;
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

.user_card {
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  background-color: white;
}

.index-recommend {
  width: 100%;
  height: 335px;
  margin-top: 30px;
  background-color: white;
}

.user_card-userFace {
  display: flex;
}

.user_card-userImg {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 3px;
}

.user_card-userName {
  padding-top: 20px;
  padding-left: 20px;
}

.user_card-userInfoWrap {
  border-top: 1px solid black;
}

.user_card-userInfoWrap span {
  font-size: 15px;
}

.user_card-userInfoWrap strong {
  font-size: 16px;
}

.user_card-userAtten {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
}

.user_card-userAtten li {
  flex-grow: 1;
}

.index-title {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 3px;
  color: black;
  font-size: 18px;
  border-bottom: 1px solid #e8e8e8;
}

.index-content {
  overflow: hidden;
  box-sizing: border-box;
  padding: 16px 6px 16px 14px;
}

.index-icon {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
}

.index-item {
  cursor: pointer;
  float: left;
  width: 72px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.index-icon-name {
  color: #333;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 72px;
  height: 28px;
  text-align: center;
}

.user-name {
  color: black;
}

.push-info {
  color: grey;
}

.root_comment {
  margin-bottom: 3px;
  margin-left: 6px;
  /* padding-bottom: 5px; */
  position: relative;
  display: flex;
  border-bottom: 1px solid #eee;
}

.root_comment img {
  border-radius: 50%;
  display: inline-block;
  width: 60px;
  height: 60px;
}

.root_img {
  display: inline-block;
}

.dialog_main_body {
  padding: 20px 10px;
}

.main-right {
  margin-left: 20px;
  margin-top: 3px;
  font-size: 23px;
}

.user_name {
  display: inline-block;
  font-size: 17px;
}

.user_head_img {
  display: inline-block;
  margin-left: 4px;
  margin-right: 4px;
}

.common-editorTextWrapper {
  display: flex;
  margin-bottom: 10px;
}

.head_img {
  border-radius: 50%;
  display: inline-block;
  width: 60px;
  height: 60px;
}

.text_areas {
  width: 390px;
}

.mytextarea {
  height: 65px;
}

.dialog_empty {
  display: flex;
}

.dialog_button {
  margin-left: 390px;
}

.rap {
  height: 20px;
}
</style>
<template>
  <div class="apply_outside">
    <h2 class="title">欢迎加入我们</h2>
    <div class="apply_inside">
      <div class="apply_detail">
        <img
          src="https://shark2.douyucdn.cn/front-publish/streamingtools-master/assets/s1-9dcf38bf.jpg"
          class="attract_img"
        />
      </div>
      <div class="apply_button">
        <el-button type="primary" plain class="go_apply" @click="Apply"
          >申请成为主播</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplyStreamer",
  data() {
      return{

      }
  },
  methods: {
    Apply() {
      if (this.$store.state.user.username == "") {
        this.$notify({
          message: "请先登录",
          type: "warning",
          offset: 50,
          duration: 1200,
        });
      } else {
        this.request
          .post("/user/apply", this.$store.state.user)
          .then((res) => {
            if (res.code === "200") {
              this.$notify({
                message: "等待管理员审核",
                type: "success",
                offset: 50,
                duration: 1200,
              });
            } else {
              this.$notify({
                message: "正在申请中",
                type: "warning",
                offset: 50,
                duration: 1200,
              });
            }
          })
          .catch();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.apply_outside {
  margin-left: auto;
  width: 1020px;
  height: 700px;
  margin: 0 auto;
  padding-top: 80px;
  background: white;
}

.title {
  text-align: center;
}

.attract_img {
  margin-top: 10px;
  width: 760px;
  height: 500px;
}

.apply_inside {
  display: flex;
}

.apply_detail {
  margin-left: 10px;
}

.go_apply {
  margin-top: 250px;
  margin-left: 5px;
}
</style>

<template>
  <div class="user_concern_outside">
    <!-- <div class="user_focus_item"> -->
    <!-- <div class="anchor_img">
        <img
          src="https://apic.douyucdn.cn/upload/avatar_v3/202101/b733ce41a8354449a454ad38b228b1c7_middle.jpg"
        />
      </div>
      <div class="anchor_info">
        <div class="anchor_name"><h3>斗鱼—迅哥</h3></div>
        <div class="anchor_number"><span>直播间号码：12312</span></div>
        <div class="anchor_fans"><span>粉丝数：233002</span></div>
      </div> -->
    <!-- </div> -->

    <el-table :data="follows" border class="table">
      <el-table-column prop="avatarUrl" label="头像">
        <template slot-scope="scope">
          <el-avatar
            :src="scope.row.avatarUrl"
            :size="90"
            shape="square"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="large"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >取消关注
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :background="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next, jumper"
      :current-page="pageMsg.currentPage"
      :page-size="pageMsg.pageSize"
      :total="pageMsg.total"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "user_concern",
  data() {
    return {
      pageMsg: {
        pageSize: 4,
        currentPage: 1,
        total: 0,
        uid: this.$store.state.user.id,
      },
      deleteParams: {
        uid: this.$store.state.user.id,
        aid: 0,
      },
      follows: [],
    };
  },
  methods: {
    init() {
      this.pageMsg.uid = parseInt(this.$store.state.user.id);
      this.request
        .get("/follow/showAllFollowAnchor", { params: this.pageMsg })
        .then((res) => {
          if (res.code == "200") {
            if (!!res.data) {
              this.follows = res.data.records;
              this.pageMsg.total = res.data.total;
              this.change();
            } else {
              this.$notify({
                message: "快去关注心仪的主播吧！",
                type: "success",
                offset: 50,
                duration: 1200,
              });
            }
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    change() {
      this.request
        .get("/follow/showAllFollowAnchor", { params: this.pageMsg })
        .then((res) => {
          this.anchors = res.data.records;
          this.pageMsg.total = res.data.total;
        })
        .catch();
    },
    handleSizeChange(val) {
      this.pageMsg.currentPage = val;
      this.change();
    },
    handleCurrentChange(val) {
      this.pageMsg.currentPage = val;
      this.change();
    },
    handleDelete(index, row) {
      this.deleteParams.uid = parseInt(this.$store.state.user.id);
      this.deleteParams.aid = parseInt(row.id);
      this.request
        .get("/follow/cancelFollowAnchor", { params: this.deleteParams })
        .then((res) => {
          this.$notify({
            message: "取消关注成功",
            type: "success",
            offset: 50,
            duration: 1200,
          });
          this.init();
        })
        .catch();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.user_concern_outside {
  width: 100%;
  height: 100%;
}

.user_focus_item {
  display: inline-block;
  height: 70px;
  width: 690px;
  padding: 20px;
  margin-left: 10px;
  border-bottom: 1px solid #f6f6f6;
}

.user_focus_item .anchor_img {
  position: relative;
  float: left;
  width: 70px;
}

.user_focus_item .anchor_img img {
  border-radius: 50%;
  display: inline-block;
  width: 70px;
  height: 70px;
}

.anchor_info {
  width: 80%;
  height: 90px;
  /* background-color: aqua; */
  margin-left: 90px;
  color: black;
}

.anchor_number {
  margin-top: 4px;
  margin-bottom: 3px;
}
</style>
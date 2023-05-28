<template>
  <div>
    <div class="title">播主管理</div>
    <div class="divide"></div>
    <el-table :data="anchors" border class="table">
      <el-table-column prop="avatarUrl" label="头像">
        <template slot-scope="scope">
          <el-avatar
            :src="scope.row.avatarUrl"
            :size="45"
            shape="square"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column prop="roomId" label="直播间号码" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="fans" label="粉丝数"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
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

    <h3 class="apply_user">申请成为主播的用户列表</h3>
    <el-table :data="user_applys" border>
      <el-table-column prop="id" label="用户ID" width="180"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column prop="username" label="昵称" width="180">
      </el-table-column>

      <el-table-column prop="level" label="用户级别">
        <template slot-scope="scope">
          {{ scope.row.level | showLevel }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="agree_apply(scope.$index, scope.row)"
            >同意</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="refuse_apply(scope.$index, scope.row)"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="用户名">
          <el-input v-model="row.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="row.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="row.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="update(row)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AdminManageStreamer",
  data() {
    return {
      userMsg: [],
      pageMsg: {
        pageSize: 4,
        currentPage: 1,
        total: 0,
      },
      user_applys: [],
      anchors: [],
      dialogVisible: false,
      row: {
        avatarUrl: "",
        username: "",
        phone: "",
        email: "",
        level: 0,
        password: "",
        id: 0,
        uid: "",
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(row);
      this.dialogVisible = true;
      this.row.avatarUrl = row.avatarUrl;
      this.row.username = row.username;
      this.row.phone = row.phone;
      this.row.email = row.email;
      this.row.level = row.level;
      this.row.password = row.password;
      this.row.id = row.id;
      this.row.uid = row.uid;
      this.row = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该主播, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.delete_anchor(index, row);
          this.request
            .get("/anchor/deleteAnchorByUid?uid=" + row.id)
            .then((res) => {
              if (res.code === "200") {
                this.$notify({
                  message: res.msg,
                  type: "success",
                  offset: 50,
                  duration: 1200,
                });
                this.change();
              } else this.$message.error(res.msg);
            })
            .catch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    delete_anchor(index, row) {
      this.request.get("/anchor/deleteAnchorByUid?uid=" + row.uid)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: res.msg,
              type: "success",
              offset: 50,
              duration: 1200,
            });
            this.change();
          } else this.$message.error(res.msg);
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
    agree_apply(index, row) {
      //同意用户成为主播
      this.request
        .post("/user/approve", row)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              title: "处理完成",
              message: "已同意该用户成为主播",
              type: "success",
            });
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    refuse_apply(index, row) {
      //拒绝用户成为主播
      this.request
        .post("/user/refuse", row)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              title: "处理完成",
              message: "已拒绝该用户成为主播",
              type: "success",
            });
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    init() {
      this.request
        .get("/user/show")
        .then((res) => {
          if (res.code === "200") {
            this.user_applys = res.data;
            console.log(this.user_applys);
          } else this.$message.error(res.msg);
        })
        .catch();

      this.request
        .get("/anchor/showAllAnchor", {
          params: this.pageMsg,
        })
        .then((res) => {
          if (res.code === "200") {
            this.anchors = res.data.records;
            this.pageMsg.total = res.data.total;
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    change() {
      this.request
        .get("/anchor/showAllAnchor", {
          params: this.pageMsg,
        })
        .then((res) => {
          this.anchors = res.data.records;
          this.pageMsg.total = res.data.total;
        })
        .catch();
    },

    update(row) {
      console.log(row);
      this.request
        .post("/anchor/modifyAnchor", this.row)
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: res.msg,
              type: "success",
              offset: 50,
              duration: 1200,
            });
            this.dialogVisible = false;
            this.change();
          } else this.$message.error(res.msg);
        })
        .catch();
    },
  },
  mounted() {
    this.init();
    this.change();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 24px;
}
.divide {
  width: 100%;
  height: 1px;
  background-color: #d8dee4;
  margin: 16px 0 18px 0;
}
.apply_user {
  margin-top: 10px;
  margin-bottom: 3px;
}

.page {
  padding-bottom: 15px;
  text-align: center;
}
</style>

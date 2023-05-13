<template>
  <div>
    <div class="title">用户管理</div>
    <div class="divide"></div>
    <el-table :data="userMsg" border>
      <el-table-column prop="phone" label="账号/手机号" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="昵称" width="180">
      </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="address" label="住址"> </el-table-column>
      <el-table-column prop="level" label="用户级别">
        <template slot-scope="scope">
          {{ scope.row.level | showLevel }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="row"
      >
        <el-form-item label="名称">
          <el-input v-model="row.userName"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="row.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="row.type"></el-input>
        </el-form-item>
      </el-form>
      <!-- <span>这是一段信息</span> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <Pageination class="pi" />
  </div>
</template>

<script>
import Pageination from "../components/Pageination";
export default {
  name: "AdminManageUser",
  data() {
    return {
      dialogVisible: false,
      userMsg: [
        {
          userName: "zkl",
          gender: "男",
          email: "1111@",
          address: "1111",
          level: "1",
        },
      ],
      row :'',
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.row = row;
      console.log(this);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  components: {
    Pageination,
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
.pi {
  margin-top: 10px;
  padding-bottom: 15px;
}
</style>

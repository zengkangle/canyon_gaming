<template>
  <div>
    <div class="title">播主管理</div>
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
    <h3 class="apply_user">申请成为主播的用户列表</h3>
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
  </div>
</template>

<script>
export default {
  name: "AdminManageStreamer",
  data() {
    return {
      userMsg: [
        {
          userName: "zkl",
          gender: "男",
          email: "1111@",
          address: "1111",
          level: "1",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    agree_apply(index, row){
      //同意用户成为主播
    },
    refuse_apply(index, row){
      //拒绝用户成为主播
    }

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
.apply_user{
  margin-top: 10px;
  margin-bottom: 3px;
}
</style>

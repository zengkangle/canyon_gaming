<template>
  <div class="anchor_table">
    <div class="divide">
      <el-table :data="anchor_apply" border>
        <el-table-column prop="id" label="主播ID" />
        <el-table-column prop="startTime" label="开播时间"> </el-table-column>
        <el-table-column prop="stopTime" label="结束时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="apply_cancel(scope.$index, scope.row)"
              >申请取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "anchor_table",
  data() {
    return {
      anchor_apply: [{}],
    };
  },
  methods: {
    init() {
      this.request
        .get("/worktime/showApply", this.user)
        .then((res) => {
          if (res.code === "200") {
            this.anchor_apply = res.data;
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    apply_cancel(index, row) {
      console.log(row.id);
      this.request.get("/worktime/applyReTime", row.id)
      .then((res) => {
          if (res.code === "200") {
            console.log('申请成功')
          } else this.$message.error(res.msg);
        })
      .catch();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.test {
  width: 100px;
  height: 100px;
  background-color: aqua;
}

.divide {
  width: 100%;
  /* height: 100px; */
  background-color: #d8dee4;
  margin: 16px 0 18px 0;
}
</style>
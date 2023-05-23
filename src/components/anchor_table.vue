<template>
  <div class="anchor_table">
    <div class="divide">
      <el-table :data="anchor_apply" border>
        <el-table-column prop="apply_Start_Time" label="开播时间">
        </el-table-column>
        <el-table-column prop="apply_Over_Time" label="结束时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="apply_cancel(scope.$index, scope.row)"
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
      anchor_apply: [
        {
          apply_Start_Time: "2023-05-20 20:03:17",
          apply_Over_Time: "2023-05-20 23:02:59",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.test {
  width: 100px;
  height: 100px;
  background-color: aqua;
}

.divide {
  width: 90%;
  /* height: 100px; */
  background-color: #d8dee4;
  margin: 16px 0 18px 0;
}
</style>
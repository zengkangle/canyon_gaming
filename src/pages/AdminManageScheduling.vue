<template>
  <div>
    <div class="title">排班管理</div>
    <div class="divide"></div>
      <h2>申请排班审核</h2>
      <el-table :data="anchor_apply1" border>
        <el-table-column prop="id" label="主播id" width="180">
        </el-table-column>
        <el-table-column prop="username" label="主播名称" width="180">
        </el-table-column>
        <el-table-column prop="startTime" label="原本开播时间">
        </el-table-column>
        <el-table-column prop="stopTime" label="原本结束时间">
        </el-table-column>
        <el-table-column prop="state" label="状态"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="agreeApply(scope.$index, scope.row)"
              >同意</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="refugeApply(scope.$index, scope.row)"
              >拒绝</el-button
            >
            <span class="apply_state_agree" v-if="apply_state1[scope.$index]"
              >已同意</span
            >
            <span class="apply_state_reguge" v-if="apply_state2[scope.$index]"
              >已拒绝</span
            >
          </template>
        </el-table-column>
      </el-table>
      <h2>申请取消排班审核</h2>
      <el-table :data="anchor_apply2" border>
          <el-table-column prop="id" label="主播id" width="180">
          </el-table-column>
          <el-table-column prop="username" label="主播名称" width="180">
          </el-table-column>
          <el-table-column prop="startTime" label="原本开播时间">
          </el-table-column>
          <el-table-column prop="stopTime" label="原本结束时间">
          </el-table-column>
          <el-table-column prop="state" label="状态"> </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button size="mini" @click="agreeApply(scope.$index, scope.row)"
                  >同意</el-button
                  >
                  <el-button
                          size="mini"
                          type="danger"
                          @click="refugeApply(scope.$index, scope.row)"
                  >拒绝</el-button
                  >
                  <span class="apply_state_agree" v-if="apply_state11[scope.$index]"
                  >已同意</span
                  >
                  <span class="apply_state_reguge" v-if="apply_state22[scope.$index]"
                  >已拒绝</span
                  >
              </template>
          </el-table-column>
      </el-table>

  </div>
</template>

<script>
export default {
  name: "AdminManageScheduling",
  data() {
    return {
      anchor_apply1: [],
      apply_state1: [false],
      apply_state2: [false],
        anchor_apply2:[],
        apply_state11: [false],
        apply_state22: [false],
    };
  },
  methods: {
    agreeApply(index, row) {
      this.apply_state1.splice(index, 1, true);
      this.apply_state2.splice(index, 1, false);
        this.request
            .get("/worktime/approveReApply?id="+row.id)
            .then((res) => {
                if (res.code === "200") {
                    this.$notify({
                        message: '已同意',
                        type: 'success',
                        offset: 50,
                        duration: 1200,
                    });
                    this.init()
                } else this.$message.error(res.msg);
            })
            .catch();
    },

      agreeApply1(index, row){
        //同意申请取消排班
          this.apply_state11.splice(index, 1, true);
          this.apply_state22.splice(index, 1, false);
          this.request
              .get("/worktime/approve?id="+row.id)
              .then((res) => {
                  if (res.code === "200") {
                      this.$notify({
                          message: '已同意',
                          type: 'success',
                          offset: 50,
                          duration: 1200,
                      });
                      this.init()
                  } else this.$message.error(res.msg);
              })
              .catch();
      },
      refugeApply1(index,row){
        //拒绝申请取消排班
          this.apply_state11.splice(index, 1, false);
          this.apply_state22.splice(index, 1, true);
          this.request
              .get("/worktime/refuseReApply?id="+row.id)
              .then((res) => {
                  if (res.code === "200") {
                      this.$notify({
                          message: '已拒绝',
                          type: 'success',
                          offset: 50,
                          duration: 1200,
                      });
                      this.init()
                  } else this.$message.error(res.msg);
              })
              .catch();
      },
    refugeApply(index, row) {
      //拒绝排班
      this.apply_state1.splice(index, 1, false);
      this.apply_state2.splice(index, 1, true);
      console.log(row.id)
      this.request
        .get("/worktime/refuseReApply?id="+row.id)
        .then((res) => {
          if (res.code === "200") {
              this.$notify({
                  message: '已拒绝',
                  type: 'success',
                  offset: 50,
                  duration: 1200,
              });
            this.init()
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    init() {
      this.request
        .get("/worktime/showApply")
        .then((res) => {
          if (res.code === "200") {
            this.anchor_apply1 = res.data;
          } else this.$message.error(res.msg);
        })
        .catch();
        this.request
            .get("/worktime/showReApply")
            .then((res) => {
                if (res.code === "200") {
                    this.anchor_apply2 = res.data;
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

.apply_state_agree {
  margin-left: 15px;
  color: green;
}

.apply_state_reguge {
  margin-left: 15px;
  color: red;
}
</style>

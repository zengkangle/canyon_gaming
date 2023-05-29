<template>
  <div class="notice_outside">
    <div class="notice_detail">
      <h2 class="scheduling">排班公告表</h2>
      <div class="scheduling_table">
        <el-table :data="showTime" border>
          <el-table-column prop="id" label="申请ID" width="180">
          </el-table-column>
          <el-table-column prop="startTime" label="计划开播时间">
          </el-table-column>
          <el-table-column prop="stopTime" label="计划结束时间">
          </el-table-column>
          <el-table-column prop="state" label="状态"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                :disabled="scope.row.state!=='可申请'"
                size="medium"
                @click="handleEdit(scope.$index, scope.row)"
                >申请</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      showTime: [],
        applyer: {
            tid:1,
            uid: 1,
        },
    };
  },
  methods: {
    init() {
      this.request
        .get("/worktime/showTime")
        .then((res) => {
          if (res.code === "200") {
            this.showTime = res.data;
          } else this.$message.error(res.msg);
        })
        .catch();
    },
    handleEdit(index,row){
        if (this.$store.state.user.level !=2){
            this.$notify({
                message: '您还不是主播',
                type: 'warning',
                offset: 50,
                duration: 1200,
            });
            return
        }
        this.applyer.tid = parseInt(row.id)
        this.applyer.uid=parseInt(this.$store.state.user.id)
        this.request
            .get("/worktime/apply",
                {
                    params: this.applyer
                }
            )
            .then((res) => {
                if (res.code === "200") {
                    this.$notify({
                        message: '请等待审核',
                        type: 'success',
                        offset: 50,
                        duration: 1200,
                    });
                    this.init()
                } else this.$message.error(res.msg);
            })
            .catch();
        this.init()
    }
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.notice_outside {
  margin-left: 200px;
  width: 1020px;
  height: 700px;
  margin: 0 auto;
  padding-top: 80px;
  background: white;
}

.notice_detail {
  margin-top: 5px;
}

.scheduling {
  text-align: center;
  margin-bottom: 10px;
}

.cell {
  text-align: center;
}
</style>
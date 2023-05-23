<template>
  <div>
    <div class="title">排班管理</div>
    <div class="divide">
      <el-table :data="anchor_apply" border>
        <el-table-column prop="room_Number" label="房间号" width="180">
        </el-table-column>
        <el-table-column prop="anchor_Name" label="主播名称" width="180">
        </el-table-column>
        <el-table-column prop="apply_Start_Time" label="申请开播时间">
        </el-table-column>
        <el-table-column prop="apply_Over_Time" label="申请结束时间">
        </el-table-column>
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
            <span class="apply_state_agree" v-if='apply_state[scope.row]'>已同意</span>
            <span class="apply_state_reguge" v-if='false'>已拒绝</span>
          </template>
          
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminManageScheduling",
  data() {
    return {
      anchor_apply: [
        {
          room_Number: "229",
          anchor_Name: "皎月Carry",
          apply_Start_Time: "2023-05-20 20:03:17",
          apply_Over_Time: "2023-05-20 23:02:59",
        },
        {
          room_Number: "229",
          anchor_Name: "皎月Carry",
          apply_Start_Time: "2023-05-20 20:03:17",
          apply_Over_Time: "2023-05-20 23:02:59",
        },
      ],
      apply_state:[false,false]
    };
  },
  methods: {
    agreeApply(index, row) {
      console.log(index, row);
      this.modify_state(index)
    },
    refugeApply(index, row) {
      console.log(index, row);
    },
    modify_state(index){
      
      console.log(this.apply_state[index])
      this.apply_state[index] = true
      this.$set(this.apply_state,index,this.apply_state[index])
      
      
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
  /* height: 100px; */
  background-color: #d8dee4;
  margin: 16px 0 18px 0;
}


.apply_state_agree{
  margin-left: 15px;
  color: green;
}

.apply_state_reguge{
    margin-left: 15px;
  color: red;
}
</style>

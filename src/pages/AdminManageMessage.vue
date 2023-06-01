<template>
  <div>
    <div class="title">消息管理</div>
    <div class="divide"></div>
    <div class="time_detail">
      <h2 class="send_h2">发布排班</h2>
      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="large"
        >
        </el-date-picker>
        <div class="time_send">
          <el-button type="primary" plain class="send_time" @click="send_time"
            >提交</el-button
          >
        </div>
      </div>
    </div>

    <div class="notice_detail"></div>
  </div>
</template>

<script>
import moment from "moment";
import { LocalDateTime } from "@js-joda/core";
import { DateTimeFormatter } from "date-time-format-timezone";
export default {
  name: "AdminManageMessage",
  data() {
    return {
      value1: [new Date(2023, 4, 30, 10, 10), new Date(2023, 4, 30, 10, 10)],
      LocalDateTime: LocalDateTime.now(),
    };
  },
  methods: {
    init() {},
    send_time() {
      const momentObj = moment(this.value1[0], "YYYY-MM-DD HH:mm:ss");
      const momentObj1 = moment(this.value1[1], "YYYY-MM-DD HH:mm:ss");
      console.log(momentObj);
      this.request
        .get("/worktime/add", {
          params: {
            startTime: momentObj,
            stopTime: momentObj1,
          },
        })
        .then((res) => {
          if (res.code === "200") {
            this.user = res.data;
            this.$notify({
              message: "发布成功",
              type: "success",
              offset: 50,
              duration: 1200,
            });
            console.log('发布成功')
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

.time_detail {
}

.time_send {
  margin-left: 10px;
}

.block {
  display: flex;
}

.send_h2 {
  margin-bottom: 10px;
}
</style>

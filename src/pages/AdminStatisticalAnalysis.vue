<template>
  <div>
    <div class="title">用户管理</div>
    <div class="divide"></div>
    <div ref="Chart1" class="chart1"></div>
    <div class="divide"></div>
    <div ref="Chart2" class="chart2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "AdminStatisticalAnalysis",
  data() {
    return {
      property: "value",
    };
  },
  mounted() {
    //初始化
    let myChart = echarts.init(this.$refs.Chart1);
    let myChart2 = echarts.init(this.$refs.Chart2);
    //设置数据
    let option1 = {
      title: {
        text: "主题热度",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "bottom",
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 250],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" },
          ],
        },
      ],
    };
    let option2 = {
      title: {
        text: "主播热度",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      },
      series: [
        {
          name: "人气值",
          type: "bar",
          data: [18203, 23489, 29034, 104970, 131744, 630230],
        },
        {
          name: "粉丝数",
          type: "bar",
          data: [19325, 23438, 31000, 121594, 134141, 681807],
        },
      ],
    };
    myChart.setOption(option1);
    myChart2.setOption(option2);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart1 {
  height: 600px;
  width: 98%;
}
.chart2 {
  height: 600px;
  width: 98%;
}
.title {
  font-size: 24px;
}
.divide {
  width: 100%;
  height: 1px;
  background-color: #d8dee4;
  margin: 16px 0 18px 0;
}
</style>

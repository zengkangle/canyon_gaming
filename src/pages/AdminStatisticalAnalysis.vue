<template>
    <div>
        <div class="title">统计分析</div>
        <div class="divide"></div>
        <div ref="Chart1" class="chart1"></div>
        <div class="divide"></div>
        <div ref="Chart2" class="chart2"></div>
<!--        <el-upload-->
<!--                class="upload-demo"-->
<!--                drag-->
<!--                action="http://localhost:8008/files/upload"-->
<!--                multiple>-->
<!--            <i class="el-icon-upload"></i>-->
<!--            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--        </el-upload>-->
    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "AdminStatisticalAnalysis",
    data() {
        return {
            property: "value",
            opt1:[],
        };
    },
    methods: {
        init(option1,option2,myChart,myChart2) {
            this.request.get(
                "/theme/getTheme",
            ).then(res => {
                console.log(res);
                option1.series[0].data = res.data;
                myChart.setOption(option1);
            }).catch();
            this.request.get(
                "/anchor/getsix",
            ).then(res => {
                console.log(res);
                option2.yAxis.data = res.data.name;
                option2.series[0].data = res.data.popularity;
                option2.series[1].data = res.data.fans;
                myChart2.setOption(option2);
            }).catch();
        }
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
                    data:[],
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
        this.init(option1,option2,myChart,myChart2);
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

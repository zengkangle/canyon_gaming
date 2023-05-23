<template>
    <div>
        <el-pagination
                :background="true"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="prev, pager, next, jumper"
                :current-page="pageMsg.currentPage"
                :page-size="pageMsg.pageSize"
                :total="pageMsg.total"
                class="page"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "Pageination",
    data() {
        return {
            pageMsg: {
                pageSize: 5,
                currentPage: 1,
                total: 1000,
                theme:'全部'
            },
        };
    },
    methods: {
        change() {
            this.request.get(
                "/liveroom/show",
                {
                    params: this.pageMsg
                }
            ).then(res => {
                if (res.code === '200') {
                    console.log(res);
                } else
                    this.$message.error(res.msg)
            }).catch();
        },
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            console.log(this.currentPage);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            console.log(this.currentPage);
        },
    },
    mounted() {
        this.change();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
    text-align: center;
}
</style>

<template>
  <div>
    <el-pagination
      :background="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next, jumper"
      :current-page="currentPage"
      :page-size="PageSize"
      :total="total"
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
      PageSize: 10,
      currentPage: 1,
      total: 1000,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  text-align: center;
}
</style>

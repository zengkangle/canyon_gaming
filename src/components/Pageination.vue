<template>
  <div>
    <t-pagination
      :total="90"
      showJumper
      showPageNumber
      :showPageSize="true"
      showPreviousAndNextBtn
      :totalContent="true"
    />
  </div>
</template>

<script>
export default {
  name: "Pageination",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

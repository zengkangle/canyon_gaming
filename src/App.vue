<template>
  <div id="app">
    <router-view></router-view>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>

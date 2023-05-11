<template>
  <div class="admin">
    <SideBar />
    <div class="fixed-height">aa</div>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  name: "Admin",
  components: {
    SideBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  margin-left: 200px;
  width: 1400px;
  margin: 0 auto;
  padding-top: 80px;
  background-color: #FFF;
  display: flex;
}
.fixed-height{
    height: 80vh;
}
</style>
<template>
  <div class="admin">
    <SideBar />
    <router-view class="right"></router-view>
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
  width: 1600px;
  margin: 0 auto;
  padding-top: 80px;
  background-color: #FFF;
  display: flex;
  background-image: none;
}
.right{
  flex-grow: 1;
  position: relative;
  left: -10px;
}
</style>
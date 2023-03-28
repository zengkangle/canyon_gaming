<template>
  <div class="bg">
    <Header />
    <div class="content">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";


export default {
  name: "Base",
  data() {
    return {
      asideWidth: "320px",
    };
  },
  methods: {
    changeAsideWidth() {
      this.asideWidth === "320px"
        ? (this.asideWidth = "160px")
        : (this.asideWidth = "320px");
    },
  },
  components: {
    Header,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url(../assets/bg1.jpg);
}

.header {
  /* position: fixed; */
  margin: 0 auto;
}
.view {
  margin-left: 200px;
  width: 1400px;
  margin: 0 auto;
  padding-top: 80px;
  /* z-index: -1000; */
}
</style>

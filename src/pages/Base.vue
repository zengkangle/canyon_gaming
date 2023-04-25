<template>
  <div class="bg">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Base",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url(../assets/bg1.jpg);
}
.header {
  margin: 0 auto;
}
.elb {
  z-index: 10;
}
</style>

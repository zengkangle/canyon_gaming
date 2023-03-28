<template>
  <div class="home">
    <Swiper />
    <CardList />
    <Pageination />
  </div>
</template>

<script>
import Swiper from "../components/Swiper";
import CardList from "../components/CardList";
import Pageination from "../components/Pageination";

export default {
  name: "Home",
  components: {
    Swiper,
    CardList,
    Pageination,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  /* position: absolute; */
  background-color: #e5e7eb;
}
</style>

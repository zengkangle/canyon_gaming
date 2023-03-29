<template>
  <div class="home">
    <Swiper />
    <LiveListHeader/>
    <CardList />
    <Pageination  class="pi"/>
  </div>
</template>

<script>
import Swiper from "../components/Swiper";
import LiveListHeader from '../components/LiveListHeader'
import CardList from "../components/CardList";
import Pageination from "../components/Pageination";

export default {
  name: "Home",
  components: {
    Swiper,
    CardList,
    Pageination,
    LiveListHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  /* position: absolute; */
  background-color: #e5e7eb;
}
.pi{
  padding-bottom: 15px;
}
</style>

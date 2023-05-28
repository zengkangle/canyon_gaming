<template>
    <div class="home">
        <Swiper/>
        <LiveListHeader/>
        <router-view class="show"></router-view>
    </div>
</template>

<script>
import Swiper from "../components/Swiper";
import LiveListHeader from "../components/LiveListHeader";

export default {
    name: "Home",
    components: {
        Swiper,
        LiveListHeader,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    margin-left: 200px;
    width: 1400px;
    margin: 0 auto;
    padding-top: 80px;
    background-color: #e5e7eb;
}
.show{
    height: 850px;
}
</style>

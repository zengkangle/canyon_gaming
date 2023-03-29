<template>
  <div>
    <el-carousel trigger="click" height="236px" :interval="3000" type="card">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <el-image :src="item.imgurl" alt=""></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      imgs: [
        {
          id: 0,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/php95L0oj1574673243.png",
        },
        {
          id: 1,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpw0oXj51674994551.jpg?spformat=png,webp",
        },
        {
          id: 2,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpEpJeZn1673858103.jpg?spformat=png,webp",
        },
        {
          id: 3,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpj2yPj41675149665.jpg?spformat=png,webp",
        },
        {
          id: 4,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phpHzNP6j1583330685.jpg",
        },
        {
          id: 5,
          imgurl:
            "https://huyaimg.msstatic.com/cdnimage/gamebanner/phphH7b6f1679900374.jpg?spformat=png,webp",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
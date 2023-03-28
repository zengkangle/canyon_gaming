<template>
  <div>
    <t-swiper :interval="3000" :height="236" :autoplay="true" type="card">
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/php95L0oj1574673243.png"
          fit="fill"
        />
      </t-swiper-item>
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/phpwvTwYB1679278770.jpg?spformat=png,webp"
          fit="fill"
        />
      </t-swiper-item>
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/phprtumwH1674380529.jpg?spformat=png,webp"
          fit="fill"
        />
      </t-swiper-item>
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/php2OOdHi1657091582.jpg"
          fit="fill"
        />
      </t-swiper-item>
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/phpHzNP6j1583330685.jpg"
          fit="fill"
        />
      </t-swiper-item>
      <t-swiper-item>
        <t-image
          src="https://huyaimg.msstatic.com/cdnimage/gamebanner/phphH7b6f1679900374.jpg?spformat=png,webp"
          fit="fill"
        />
      </t-swiper-item>
    </t-swiper>
    <!-- <div :style="{ width: '500px' }">
          <t-swiper :duration="300" :interval="2000"
  type="card">
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-success-color-7)' }" />
            </t-swiper-item>
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-warning-color-7)' }" />
            </t-swiper-item>
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-error-color-7)' }" />
            </t-swiper-item>
          </t-swiper>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "Swiper",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
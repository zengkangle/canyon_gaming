
<template>
  <div class="container">
    <video
      id="videoElement"
      class="vio"
      controls
      autoplay
      width="68%"
      muted
    ></video>
  </div>
</template>

<script>
import flvjs from "flv.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.createVideo();
    });
  },
  methods: {
    createVideo() {
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement");
        var flvPlayer = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          url: "http://192.168.159.130:8080/live/123.flv", //你的url地址
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    },
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
.container {
  padding-top: 80px;
  text-align: center;
  height: 80vh;
}
</style>

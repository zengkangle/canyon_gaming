<template>
  <div class="user_concern_outside">
    <div class="user_focus_item">
        <div class="anchor_img">
          <img src="https://apic.douyucdn.cn/upload/avatar_v3/202101/b733ce41a8354449a454ad38b228b1c7_middle.jpg">
        </div>
        <div class="anchor_info">
          <div class="anchor_name"><h3>斗鱼—迅哥</h3></div>
          <div class="anchor_number"><span>直播间号码：12312</span></div>
          <div class="anchor_fans"><span>粉丝数：233002</span></div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'user_concern',
    data() {
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>

.user_concern_outside{
    width: 100%;
    height: 100%;
}


.user_focus_item{
    display: inline-block;
    height: 70px;
    width: 690px;
    padding: 20px;
    margin-left: 10px;
    border-bottom: 1px solid #f6f6f6;
}


.user_focus_item .anchor_img{
    position: relative;
    float: left;
    width: 70px;

}

.user_focus_item .anchor_img img{
    border-radius: 50%;
    display: inline-block;
    width: 70px;
    height: 70px;
}


.anchor_info{
  width: 80%;
  height: 90px;
  /* background-color: aqua; */
  margin-left: 90px;
  color: black;
}




.anchor_number{
  margin-top:4px;
  margin-bottom: 3px;
}


</style>
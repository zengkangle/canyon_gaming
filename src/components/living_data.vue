<template>
  <div class="living_data_outside">
    <div class="asset_category">
      <div class="asset_category_item_left">
        <span>
          <img
            src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuwan_415f986.png"
          />
          <span class="icon_state">直播热度</span>
        </span>
        <span class="user_wallet_number">1030</span>
      </div>

      <div class="asset_empty"></div>

      <div class="asset_category_item_right">
        <span class="label_all">
          <img
            src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuchi_a487082.png"
          />
          <span class="icon_state">直播次数</span>
        </span>
        <span class="user_wallet_number">5</span>
      </div>
    </div>

    <div class="change_money">
      
    </div>


  </div>
</template>

<script>
export default {
  name: "living_data",
  data: {
    return: {},
  },
  methods: {},
};
</script>

<style>


.living_data_outside{
    width: 100%;
    height: 100%;
}

.test {
  width: 100px;
  height: 100px;
  background-color: brown;
}






.asset_category{
    display: flex;
    margin-top: 13px;
}


.asset_category_item_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-align: center;
    /* width: calc(50% - 2px); */
    width:391px;
    height: 82px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
    margin-left: 2px;
    margin-right: 10px;
}



.asset_category_item_right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-align: center;
    /* width: calc(50% - 2px); */
    width:391px;
    height: 82px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
}



.icon_state{
    font-size: 18px;
    margin-left: 2px;
}


.user_wallet_number{
    font-size: 20px;
    color: #ff5d23;
    margin-top: 16px;
    font-weight: 700;
}


</style>
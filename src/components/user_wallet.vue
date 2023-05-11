<template>
  <div class="user_wallet_outside">
    <div class="nav_title">
        <img src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/wallet_88a1bf4.png">
        我的钱包
    </div>
    <h3>钱包首页</h3>
    <div class="wallet_center_page">
        <div class="asset_box">
            <div class="title_l1sabh">资产余额(元)</div>
        </div>
        <div class="asset_category">
            <div class="asset_category_item_left">
                <span>
                    <img src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuwan_415f986.png">
                    <span class="icon_state">精粹</span>
                </span>
                <span class="user_wallet_number">1030</span>
            </div>

            <div class="asset_empty"></div>


            <div class="asset_category_item_right">
                <span class="label_all">
                    <img src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuchi_a487082.png">
                    <span class="icon_state">鱼翅</span>
                    <span class="add_btn">充值+</span>
                </span>
                <span class="user_wallet_number">0</span>
            </div>
        </div>
    </div>

    <div class="for_height"></div>

    <!-- <div class="wall_set">
        <h3>收款方式设置</h3>
        <div class="accounts">
            <div class="accounts_item"></div>
        </div>
    </div> -->

  </div>
</template>

<script>
export default {
    name:'user_wallet',
    data() {
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>


.user_wallet_outside{
    width: 100%;
    height: 100%;
}


.icon_state{
    font-size: 18px;
    margin-left: 2px;
}


.nav_title{
    padding: 10px 20px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    color: #555;
}

.wallet_center_page{
    height: auto;
}

.asset_box{
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 20px;
}


.asset_category{
    display: flex;
    /* justify-content: space-between; */
    margin-top: 13px;
}

.user_wallet_number{
    font-size: 20px;
    color: #ff5d23;
    margin-top: 16px;
    font-weight: 700;
}

.add_btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background-color: #ff5d23;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
    cursor: pointer;
    margin-left: 10px;
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


.label_all{
    display: flex;
    font-size: 16px;
    color: #555;
    display: flex;
    align-items: center;
}

.asset_empty{
    width: 5%;
}


.wall_set{
    margin-top: 10px;
}

.for_height{
    height: 30px;
}

</style>
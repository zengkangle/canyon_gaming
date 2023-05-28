<template>
  <div class="user_wallet_outside">
    <div class="nav_title">
      <img
        src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/wallet_88a1bf4.png"
      />
      我的钱包
    </div>
    <div class="wallet_center_page">
      <div class="asset_box">
        <div class="title_l1sabh">资产余额(元)</div>
      </div>
      <div class="asset_category">
        <div class="asset_category_item_left">
          <span>
            <img
              src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuwan_415f986.png"
            />
            <span class="icon_state">精粹</span>
          </span>
          <span class="user_wallet_number">{{ user.virtualUrrency }}</span>
        </div>

        <div class="asset_empty"></div>

        <div class="asset_category_item_right">
          <span class="label_all">
            <img
              src="https://shark2.douyucdn.cn/front-publish/wallet-master/assets/images/yuchi_a487082.png"
            />
            <span class="icon_state">鱼翅</span>
            <span class="add_btn" @click="cash()">提现+</span>
          </span>
          <span class="user_wallet_number">{{ money }}(虚拟币*2)</span>
        </div>
      </div>
    </div>

    <div class="for_height"></div>
  </div>
</template>

<script>
export default {
  name: "user_wallet",
  data() {
    return {
      user: {},
      money: 0,
      caches: {
        Aid: 0,
        cash: 0,
      },
    };
  },
  methods: {
    init() {
      if (this.$store.state.user.level === 2) {
        this.request
          .get(
            "/anchor/getAnchorByName?username=" +
              this.$store.state.user.username
          )
          .then((res) => {
            if (res.code === "200") {
              this.user = res.data;
              this.money = parseInt(this.user.virtualUrrency) / 2;
            } else this.$message.error(res.msg);
          })
          .catch();
      } else {
        this.user = this.$store.state.user;
      }
    },
    cash() {
      this.caches.Aid = parseInt(this.user.id);
      this.caches.cash = this.money;
      this.request
        .get("/anchor/cash", { params: this.caches })
        .then((res) => {
          if (res.code === "200") {
            this.$notify({
              message: "提现成功",
              type: "success",
              offset: 50,
              duration: 1200,
            });
            this.init();
          } else this.$message.error(res.msg);
        })
        .catch();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.user_wallet_outside {
  width: 100%;
  height: 100%;
}

.icon_state {
  font-size: 18px;
  margin-left: 2px;
}

.nav_title {
  padding: 10px 20px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  color: #555;
}

.wallet_center_page {
  height: auto;
}

.asset_box {
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 20px;
}

.asset_category {
  display: flex;
  /* justify-content: space-between; */
  margin-top: 13px;
}

.user_wallet_number {
  font-size: 20px;
  color: #ff5d23;
  margin-top: 16px;
  font-weight: 700;
}

.add_btn {
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

.asset_category_item_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  /* width: calc(50% - 2px); */
  width: 391px;
  height: 82px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  margin-left: 2px;
}

.asset_category_item_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
  /* width: calc(50% - 2px); */
  width: 391px;
  height: 82px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
}

.label_all {
  display: flex;
  font-size: 16px;
  color: #555;
  display: flex;
  align-items: center;
}

.asset_empty {
  width: 5%;
}

.wall_set {
  margin-top: 10px;
}

.for_height {
  height: 30px;
}
</style>
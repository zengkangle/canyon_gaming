<template>
    <div>
        <router-link :to="{
            path:'/base/live',
            query:{
                roomId:item.roomId
            }
        }" class="card">
            <el-image :src="item.imgurl" fit="cover"></el-image>
            <div class="title">{{ item.roomname }}</div>
            <div class="footer">
                <el-avatar
                        :src="item.userUrl"
                        :size="25"
                ></el-avatar>
                <div class="nick">{{ item.username }}</div>
                <div class="im">
                    <img src="../assets/hot.png" alt="" width="14px"/>
                </div>
                <div class="hot-num">{{ item.degreeofeat }}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["item"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display: block;
    width: 331px;
    border: 1px solid white;
    border-radius: 3%;
    overflow: hidden;
    background-color: white;
    color: black;
}

.title {
    font-size: 15px;
    padding: 0 23px 0 8px;
}

.footer {
    display: flex;
    padding: 5px 0 10px 5px;
}

.nick {
    margin: 0 20px 0 5px;
    width: 170px;
    font-size: 12px;
    line-height: 25px;
}

.im {
    position: relative;
    margin-top: 2px;
}

.hot-num {
    margin-left: 5px;
    font-size: 12px;
    line-height: 25px;
}
</style>
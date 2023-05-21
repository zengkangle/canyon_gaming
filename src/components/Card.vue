<template>
    <div>
        <div class="card">
            <el-image :src="item.imgsrc" fit="cover"></el-image>
            <div class="title">{{ item.title }}</div>
            <div class="footer">
                <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        :size="25"
                ></el-avatar>
                <div class="nick">{{ item.nick }}</div>
                <div class="im">
                    <img src="../assets/hot.png" alt="" width="14px"/>
                </div>
                <div class="hot-num">{{ item.hotnum }}</div>
            </div>
        </div>
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
    width: 331px;
    border: 1px solid white;
    border-radius: 3%;
    overflow: hidden;
    background-color: white;
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
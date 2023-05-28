<template>
    <div class="header">
        <div class="title">英雄联盟</div>
        <router-link to="/base/home/homeAll" class="text" active-class="text_active">
            全部
        </router-link
        >
        <router-link to="/base/home/homeProfession" class="text" active-class="text_active">
            职业
        </router-link
        >
        <router-link to="/base/home/homeUnique" class="text" active-class="text_active">
            绝活
        </router-link
        >
        <router-link to="/base/home/homeYunDing" class="text2" active-class="text_active">
            云顶之奕
        </router-link
        >
        <router-link to="/base/home/homeMobileGame" class="text2" active-class="text_active">
            LOL手游
        </router-link
        >
    </div>
</template>

<script>
export default {
    name: "LiveListHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    height: 50px;
    margin-bottom: 15px;
    display: flex;
}

.title {
    line-height: 50px;
    font-size: 26px;
    margin-left: 8px;
    margin-right: 10px;
    cursor: pointer;
}

.title:hover {
    color: #c3a340;
}

.header > a {
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
    text-align: center;
    border: 1px solid #dcdfe6;
    background-color: white;
    margin: auto 0;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    margin-right: 5px;
    color: #606266;
}

.text {
    width: 55px;
}

.text2 {
    width: 80px;
}

.text_active {
    color: #c3a340 !important;
}
</style>

<template>
    <div>
        <el-carousel trigger="click" height="236px" :interval="3000" type="card">
            <el-carousel-item v-for="item in imgs" :key="item.id">
                <el-image :src="item.url" alt=""></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "Swiper",
    data() {
        return {
            imgs: [],
        };
    },
    methods: {
        initial(){
            this.request.get(
                "/turnurl/show",
            ).then(res => {
                console.log(res);
                this.imgs=res.data;
            }).catch();
        }
    },
    mounted() {
        this.initial();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
    <div class="cardlist">
        <Card v-for="item in Cards" :key="item.id" :item="item" class="it"/>
    </div>
</template>

<script>
import Card from "../components/Card";

export default {
    name: "CardList",
    data() {
        return {
            Cards: [
                {
                    width: "",
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1073/bb/3067534226d20fa2cabbac88ac2e00_1_1674994580.jpg?imageview/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
                {
                    id: "1",
                    title: "标题",
                    nick: "昵称",
                    hotnum: "66.4万",
                    imgsrc:
                        "https://anchorpost.msstatic.com/cdnimage/anchorpost/1019/39/cd06b1566ce498c7dcaa3f05181611_0_1675840426.jpg?spformat=png,webp&imageview/4/0/w/338/h/190/blur/1/format/webp",
                },
            ],
        };
    },
    components: {
        Card,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardlist {
    display: flex;
    flex-wrap: wrap;
    flex-flow: 1;
}

.it {
    margin: 0 15px 20px 0;
}

.it:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    border-radius: 3%;;
    cursor: pointer;
}
</style>
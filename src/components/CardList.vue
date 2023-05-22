<template>
    <div>
        <div class="cardlist">
            <Card v-for="item in Cards" :key="item.username" :item="item" class="it"/>
        </div>
        <el-pagination
                :background="true"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="prev, pager, next, jumper"
                :current-page="pageMsg.currentPage"
                :page-size="pageMsg.pageSize"
                :total="pageMsg.total"
                class="page"
        >
        </el-pagination>
    </div>
</template>

<script>
import Card from "../components/Card";

export default {
    name: "CardList",
    props:['theme'],
    data() {
        return {
            pageMsg: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
                theme: ''
            },
            Cards: [],
        };
    },
    methods: {
        change() {
            this.request.get(
                "/liveroom/show",
                {
                    params: this.pageMsg
                }
            ).then(res => {
                    console.log(res);
                    this.Cards=res.data;
                    if (res.data.length!==0) {
                        this.pageMsg.total=res.data[0].pagenum;
                    }else{
                        this.pageMsg.total=0;
                    }
            }).catch();
        },
        handleSizeChange(val) {
            this.pageMsg.currentPage=val;
            this.change();
        },
        handleCurrentChange(val) {
            this.pageMsg.currentPage=val;
            this.change();
        },
    },
    mounted() {
        this.pageMsg.theme=this.theme;
        this.change();
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

.page {
    padding-bottom: 15px;
    text-align: center;
}
</style>
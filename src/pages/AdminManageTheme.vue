<template>
    <div>
        <div class="title">主题管理</div>
        <div class="divide"></div>
        <div class="add_theme">
            <div>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
            </div>
            <div>
                <el-button type="primary" round @click="add_theme">添加主题</el-button>
            </div>
        </div>

        <div class="divide">
            <el-table :data="themes" border class="table">
                <el-table-column prop="id" label="主题id" width="180">
                </el-table-column>
                <el-table-column prop="theme" label="主题名称" width="180">
                </el-table-column>
                <el-table-column prop="touch" label="主题热度" width="180">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                        >删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminManageTheme",
    data() {
        return {
            themes: [],
            input: "",
        };
    },
    methods: {
        init() {
            this.request.get(
                "/theme/showTheme"
            ).then((res) => {
                if (res.code === "200") {
                    this.themes = res.data;
                } else this.$message.error(res.msg);
            }).catch();
        },
        handleDelete(index, row) {
            this.request
                .get("/theme/deleteTheme?id=" + row.id)
                .then((res) => {
                    if (res.code === "200") {
                        this.$notify({
                            message: "删除成功",
                            type: "success",
                            offset: 50,
                            duration: 1200,
                        });
                        this.init();
                    } else this.$message.error(res.msg);
                })
                .catch();
        },
        add_theme() {
            if (this.input == "") {
                this.$notify({
                    message: "请输入内容",
                    type: "warning",
                    offset: 50,
                    duration: 1200,
                });
                return;
            }
            this.request
                .get("/theme/addTheme?theme=" + this.input)
                .then((res) => {
                    if (res.code === "200") {
                        this.$notify({
                            message: "添加成功",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    font-size: 24px;
}

.divide {
    width: 60%;
    height: 1px;
    background-color: #d8dee4;
    margin: 16px 0 18px 0;
}

.add_theme {
    width: 300px;
    display: flex;
}
</style>

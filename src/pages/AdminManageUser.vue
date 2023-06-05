<template>
    <div>
        <div class="title">用户管理</div>
        <div class="divide"></div>
        <el-table :data="userMsg" border class="table">
            <el-table-column prop="avatarUrl" label="头像">
                <template slot-scope="scope">
                    <el-avatar
                            :src="scope.row.avatarUrl"
                            :size="45"
                            shape="square"
                    ></el-avatar>
                </template>
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="180">
            </el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="level" label="用户等级">
                <template slot-scope="scope">
                    {{ scope.row.level | showLevel }}
                </template>
            </el-table-column>
            <el-table-column prop="virtualCurrency" label="虚拟币"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                    >编辑
                    </el-button
                    >
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button
                    >
                </template>
            </el-table-column>
        </el-table>
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
        <el-dialog
                title="编辑"
                :visible.sync="dialogVisible"
                width="30%"
        >
            <el-form
                    label-position="right"
                    label-width="80px"
                    :model="row"
            >
                <el-form-item label="头像">
                    <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8008/files/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="row.avatarUrl" :src="row.avatarUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="row.username"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="row.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="row.email"></el-input>
                </el-form-item>
                <el-form-item label="用户等级" >
                    <el-select v-model="row.level" filterable placeholder="请选择" :disabled=true >
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="虚拟币">
                    <el-input-number v-model="row.virtualCurrency" :min="1" label="描述文字"></el-input-number>
                </el-form-item>
            </el-form>
            <!-- <span>这是一段信息</span> -->
            <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="update"
        >确 定</el-button
        >
      </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "AdminManageUser",
    data() {
        return {
            dialogVisible: false,
            pageMsg: {
                pageSize: 7,
                currentPage: 1,
                total: 0,
            },
            userMsg: [],
            row: {
                avatarUrl: '',
                username: '',
                phone: '',
                email: '',
                level: 0,
                virtualCurrency: 0,
                id: 0,
            },
            options: [{
                value: 0,
                label: '管理员'
            }, {
                value: 1,
                label: '用户'
            }, {
                value: 2,
                label: '主播'
            },],
        };
    },
    methods: {
        change() {
            this.request.get(
                "/user/showAllUser",
                {
                    params: this.pageMsg
                }
            ).then(res => {
                this.userMsg = res.data.records;
                this.pageMsg.total = res.data.total;
            }).catch();
        },
        handleSizeChange(val) {
            this.pageMsg.currentPage = val;
            this.change();
        },
        handleCurrentChange(val) {
            this.pageMsg.currentPage = val;
            this.change();
        },
        handleEdit(index, row) {
            this.dialogVisible = true;
            this.row.avatarUrl = row.avatarUrl;
            this.row.username = row.username;
            this.row.phone = row.phone;
            this.row.email = row.email;
            this.row.level = row.level;
            this.row.virtualCurrency = row.virtualCurrency;
            this.row.id = row.id;
            this.row.password = row.password;
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.request.get(
                        "/user/deleteUserById",
                        {
                            params: {
                                id: this.row.id
                            }
                        }
                    ).then(res => {
                        console.log(res)
                        if (res.code === '200') {
                            this.$notify({
                                message: res.msg,
                                type: 'success',
                                offset: 50,
                                duration: 1200,
                            });
                            this.dialogVisible = false;
                            this.change();
                        } else{
                            this.$message.error(res.msg)
                        }
                    }).catch();
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
        handleAvatarSuccess(res, file) {
            this.row.avatarUrl = file.response.data;
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        update() {
            this.request.post(
                "/user/modifyUser",
                this.row
            ).then(res => {
                if (res.code === '200') {
                    this.$notify({
                        message: res.msg,
                        type: 'success',
                        offset: 50,
                        duration: 1200,
                    });
                    this.dialogVisible = false;
                    this.change();
                } else
                    this.$message.error(res.msg)
            }).catch();
        }
    },
    filters: {
        showLevel(value) {
            if (value === 0) {
                return '管理员';
            } else if (value === 1) {
                return '用户';
            } else {
                return '主播';
            }
        },
    },
    mounted() {
        this.change();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    font-size: 24px;
}

.divide {
    width: 100%;
    height: 1px;
    background-color: #d8dee4;
    margin: 16px 0 18px 0;
}

.table {
    margin-bottom: 30px;
}

.page {
    padding-bottom: 15px;
    text-align: center;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

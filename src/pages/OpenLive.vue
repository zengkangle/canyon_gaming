<template>
    <div class="open_live">
        <div class="title">开播</div>
        <div class="divide"></div>
        <el-form :model="liveMsg" :rules="rules" ref="liveMsg" label-width="90px" label-position="top"
                 class="live_form">
            <el-form-item label="房间封面上传：" v-if="liveMsg.degreeofeat===0">
                <el-upload
                        class="avatar-uploader a"
                        action="http://localhost:8008/files/upload"
                        drag
                        :show-file-list="true "
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item label="当前直播间封面：" v-if="liveMsg.roomImage">
                <el-image
                        style="width: 338px; height: 190px"
                        :src="liveMsg.roomImage"
                        fit="contain">
                </el-image>
            </el-form-item>
            <el-form-item label="房间标题：" prop="title" for="title">
                <el-input id="title" v-model="liveMsg.title" maxlength="20" show-word-limit :disabled="liveMsg.degreeofeat!==0"></el-input>
            </el-form-item>
            <el-form-item label="直播主题：" for="theme">
                <el-select v-model="liveMsg.theme" placeholder="请选择" id="gender" style="width:100%" filterable :disabled="liveMsg.degreeofeat!==0">
                    <el-option v-for="item in initTheme" :key="item.id" :label="item.theme"
                               :value="item.theme" ></el-option>
                </el-select>
            </el-form-item>
            <template v-if="liveMsg.degreeofeat!==0">
                <el-form-item label="服务器地址：" class="live_code">
                    <div class="live_code">
                        <el-input
                                :placeholder="openCode.serverAddress"
                                v-model="openCode.serverAddress"
                                :disabled="true">
                        </el-input>
                        <el-link :underline="false" class="fuzhi" @click="copy(openCode.serverAddress)">复制</el-link>
                    </div>
                </el-form-item>
                <el-form-item label="推流码：" class="live_code">
                    <div class="live_code">
                        <el-input
                                :placeholder="openCode.code"
                                v-model="openCode.code"
                                :disabled="true">
                        </el-input>
                        <el-link :underline="false" class="fuzhi" @click="copy(openCode.code)">复制</el-link>
                    </div>
                </el-form-item>
            </template>
            <el-button type="primary" v-if="liveMsg.degreeofeat===0" @click="openLive">开始直播</el-button>
            <el-button type="danger" v-if="liveMsg.degreeofeat!==0" @click="closeLive">关闭直播</el-button>
        </el-form>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'OpenLive',
    data() {
        return {
            initTheme: [],
            openCode: {
                serverAddress: '',
                code: '',
            },
            liveMsg: {
                roomImage: '',
                title: '',
                theme: '',
                degreeofeat: 0,
            },
            rules: {
                title: [
                    {required: true, message: '房间标题不能为空！', trigger: 'blur'},
                ],
            },
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.liveMsg.roomImage = file.response.data;
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        copy(context) {
            navigator.clipboard.writeText(context)
                .then(() => {
                    this.$message.success('复制成功');
                });
        },
        openLive() {
            this.request.get(
                "/liveroom/open",
                {
                    params: {
                        id: this.user.id,
                        roomname: this.liveMsg.title,
                        theme: this.liveMsg.theme,
                        imgurl: this.liveMsg.roomImage,
                    }
                }
            ).then(res => {
                if (res.code === '200') {
                    console.log(res.data);
                    this.init();
                    this.$notify({
                        message: '成功开播！',
                        type: 'success'
                    });
                } else {
                    this.$message.error(res.data);
                }
            })
        },
        closeLive() {
            this.request.get(
                "/liveroom/over",
                {
                    params: {
                        id: this.user.id,
                    }
                }
            ).then(res => {
                if (res.code === '200') {
                    this.init();
                    this.$notify({
                        message: res.data,
                        type: 'success'
                    });
                } else {
                    this.$message.error("下播失败");
                }
            })
        },
        init() {
            this.request.get(
                "/liveroom/getOld",
                {
                    params: {
                        id: this.user.id
                    }
                }
            ).then(res => {
                console.log(res.data);
                this.initTheme = res.data.themes;
                this.liveMsg.theme=res.data.theme;
                this.liveMsg.roomImage = res.data.imgurl;
                this.liveMsg.title = res.data.roomname;
                this.liveMsg.degreeofeat = res.data.degreeofeat;
                this.openCode.code=res.data.code;
                this.openCode.serverAddress=res.data.serverAddress;
            })
        },
    },
    mounted() {
        this.init();
    }
}
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

.open_live {
    width: 1200px;
    margin: 0 auto;
    padding-top: 80px;
    background-color: #FFF;
    background-image: none;
}

.live_form {
    width: 400px;
    margin: 0 auto;
    padding-bottom: 150px;
}

.live_code {
    display: flex;
}

.fuzhi {
    width: 80px;
}
</style>

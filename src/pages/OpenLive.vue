<template>
    <div class="open_live">
        <div class="title">开播</div>
        <div class="divide"></div>
        <el-form :model="perUser" :rules="rules" ref="perForm" label-width="90px" label-position="top"
                 class="live_form">
            <el-form-item label="房间封面：">
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
            <el-form-item label="封面展示效果：" v-if="perUser.roomImage">
                <el-image
                        style="width: 338px; height: 190px"
                        :src="perUser.roomImage"
                        fit="contain">
                </el-image>
            </el-form-item>
            <el-form-item label="房间标题：" prop="title" for="title">
                <el-input id="title" v-model="perUser.title" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="直播主题：" for="theme">
                <el-select v-model="perUser.gender" placeholder="请选择" id="gender" style="width:100%">
                    <el-option v-for="item in initTheme" :key="item.id" :label="item.themeName"
                               :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <template v-if="perUser.code">
                <el-form-item label="服务器地址：" class="live_code">
                    <div class="live_code">
                        <el-input
                            :placeholder="serverAddress"
                            v-model="serverAddress"
                            :disabled="true">
                        </el-input>
                        <el-link :underline="false" class="fuzhi" @click="copy(serverAddress)">复制</el-link>
                    </div>
                </el-form-item>
                <el-form-item label="推流码：" class="live_code">
                    <div class="live_code">
                        <el-input
                            :placeholder="perUser.code"
                            v-model="perUser.code"
                            :disabled="true">
                        </el-input>
                        <el-link :underline="false" class="fuzhi" @click="copy(perUser.code)">复制</el-link>
                    </div>
                </el-form-item>
            </template>
            <el-button type="primary" v-if="!perUser.code" @click="openLive">开始直播</el-button>
            <el-button type="danger" v-if="perUser.code" @click="closeLive">关闭直播</el-button>
        </el-form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'OpenLive',
    data() {
        return {
            initTheme: [{id: '1', themeName: 'lol'}, {id: '2', themeName: 'aaa'}, {id: '3', themeName: 'bbb'}],
            serverAddress: 'rtmp://192.168.159.130:1935/live',
            perUser: {
                roomImage: '',
                title: '',
                userName: '',
                theme: '',
                code:'1',
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
            console.log(file)
            this.perUser.roomImage = file.response.data;
            console.log(this.perUser)
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
        openLive(){
            this.request.get(
                "/liveroom/getOld",
                {
                    params:this.user.id
                }
            ).then(res => {
                if(res.code === '200'){
                    console.log(res.data);
                }else{
                    this.$message.error("保存失败");
                }
            })
        },
        closeLive(){

        },
        init(){
            this.request.get(
                "/liveroom/getOld?"+this.user.id,
            ).then(res => {
                if(res.code === '200'){
                    console.log(res.data);
                }else{
                    this.$message.error("保存失败");
                }
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
    //height: 900px;
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

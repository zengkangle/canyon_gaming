<template>
    <div class="container">
        <div class="video_header">
            <div class="avatar">
                <el-avatar
                        shape="square"
                        :src="liveRoomMsg.imgurl"
                        :size="85"
                ></el-avatar>
            </div>
            <div class="middle">
                <div class="middle_header">
                    <div class="middle_header_title">
                        {{ liveRoomMsg.roomname | roomname(liveRoomMsg.username,liveRoomMsg.degreeofeat) }}
                    </div>
                    <div class="subtitle jubao">举报</div>
                    <div class="subtitle">网络竞技</div>
                    <i class="el-icon-caret-right subtitle"></i>
                    <div class="subtitle">英雄联盟</div>
                    <i class="el-icon-caret-right subtitle"></i>
                    <div class="subtitle">{{ liveRoomMsg.theme | theme }}</div>
                </div>
                <div class="desc">
                    <img src="../assets/live1.png" alt="" class="my-margin"/>
                    <div class="desc1 descitem my-margin">房间号：{{ liveRoomMsg.roomId }}</div>
                    <i class="iconfont descitem fire my-ico">&#xff20;</i>
                    <div class="descitem my-color my-margin">{{ liveRoomMsg.degreeofeat }}</div>
                    <div class="descitem first my-margin">峡谷第一召唤师</div>
                    <i class="iconfont descitem my-color my-ico">&#xff23;</i>
                    <div class="descitem my-color my-margin">8友邻</div>
                    <i class="iconfont descitem my-color my-ico">&#xff22;</i>
                    <div class="descitem my-color my-margin">公会：时光</div>
                    <i class="iconfont descitem my-color my-ico">&#xe877;</i>
                    <div class="descitem my-color my-margin">330成就点</div>
                </div>
                <div class="showbottom"><img src="../assets/live2.png" alt=""/></div>
            </div>
            <div class="right">
                <div class="guanzhu">
                    <template v-if="!liveRoomMsg.isgz">
                        <div class="guanzhu-num">{{ liveRoomMsg.fans }}</div>
                        <div class="guanzhu-title" @click="guanzhu">
                            <i class="iconfont aixin">&#xff24;</i>
                            <div>关注</div>
                        </div>
                    </template>
                    <template v-if="liveRoomMsg.isgz">
                        <div class="guanzhu-num2">{{ liveRoomMsg.fans }}</div>
                        <div class="guanzhu-title2">
                            <el-dropdown class="have_login">
                                <span class="el-dropdown-link">
                                    已关注
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item @click.native="quguan">取消关注</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </template>
                </div>
                <div class="right_bottom">
                    <img src="../assets/live3.png" alt="" class="huojian"/>
                    <i class="iconfont descitem my-color my-ico">&#xff27;</i>
                    <div class="descitem my-color my-margin">分享</div>
                    <i class="iconfont descitem my-color my-ico">&#xff25;</i>
                    <div class="descitem my-color my-margin">客户端</div>
                    <i class="iconfont descitem my-color my-ico">&#xff26;</i>
                    <div class="descitem my-color my-margin">福利</div>
                </div>
            </div>
        </div>
        <video
                id="videoElement"
                v-if="liveRoomMsg.degreeofeat!==0"
                controls
                autoplay
                muted
        ></video>
        <div class="noLive" v-if="liveRoomMsg.degreeofeat===0">
            <div class="noLive-title" v-if="liveRoomMsg.degreeofeat===0">主播暂未开播，可以去主页逛逛喔~</div>
        </div>
        <div class="video_footer">
        </div>
    </div>
</template>

<script>
import flvjs from "flv.js";
import {mapState} from 'vuex';

export default {
    data() {
        return {
            liveRoomMsg: {},
            flvPlayer: '',
        };
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        init() {
            if (this.user.uid){
                this.request.get(
                    "/liveroom/touch",
                    {
                        params: {
                            roomId: this.$route.query.roomId,
                            uid: this.user.uid,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    console.log(this.user)
                    this.liveRoomMsg = res.data;
                    if (this.liveRoomMsg.degreeofeat !== 0) {
                        this.$nextTick(() => {
                            this.createVideo();
                        });
                    }
                }).catch();
            }else{
                this.request.get(
                    "/liveroom/touch",
                    {
                        params: {
                            roomId: this.$route.query.roomId,
                            uid: this.user.id,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    console.log(this.user)
                    this.liveRoomMsg = res.data;
                    if (this.liveRoomMsg.degreeofeat !== 0) {
                        this.$nextTick(() => {
                            this.createVideo();
                        });
                    }
                }).catch();
            }

        },
        createVideo() {
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById("videoElement");
                this.flvPlayer = flvjs.createPlayer({
                    type: "flv",
                    isLive: true,
                    url: this.liveRoomMsg.liveRoomUrl,
                });
                this.flvPlayer.attachMediaElement(videoElement);
                this.flvPlayer.load();
                this.flvPlayer.play();
            }
        },
        guanzhu() {
            if (this.user.uid) {
                this.request.get(
                    "/follow/followAnchor",
                    {
                        params: {
                            uid: this.user.uid,
                            aid: this.liveRoomMsg.aid,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    this.init();
                }).catch();
            } else {
                this.request.get(
                    "/follow/followAnchor",
                    {
                        params: {
                            uid: this.user.id,
                            aid: this.liveRoomMsg.aid,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    this.init();
                }).catch();
            }
        },
        quguan() {
            if (this.user.uid){
                this.request.get(
                    "/follow/cancelFollowAnchor",
                    {
                        params: {
                            uid: this.user.uid,
                            aid: this.liveRoomMsg.aid,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    this.init();
                }).catch();

            }else{
                this.request.get(
                    "/follow/cancelFollowAnchor",
                    {
                        params: {
                            uid: this.user.id,
                            aid: this.liveRoomMsg.aid,
                        }
                    }
                ).then(res => {
                    console.log(res);
                    this.init();
                }).catch();
            }
        }
    },
    filters: {
        roomname(value, username, degreeofeat) {
            if (value === null || degreeofeat === 0) {
                return '主播' + username + ':正在赶来的路上！';
            } else {
                return value;
            }
        },
        theme(value) {
            if (value === "NULL") {
                return '其它'
            } else {
                return value;
            }
        },
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        if (this.flvPlayer !== null && this.flvPlayer !== '') {
            console.log(this.flvPlayer)
            this.flvPlayer.pause();
            this.flvPlayer.unload();
            this.flvPlayer.detachMediaElement;
            this.flvPlayer.destroy();
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
@font-face {
    font-family: 'iconfont';  /* Project id 3979529 */
    src: url('//at.alicdn.com/t/c/font_3979529_mh6glun0kec.woff2?t=1683876330338') format('woff2'),
    url('//at.alicdn.com/t/c/font_3979529_mh6glun0kec.woff?t=1683876330338') format('woff'),
    url('//at.alicdn.com/t/c/font_3979529_mh6glun0kec.ttf?t=1683876330338') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.container {
    padding-top: 60px;
    height: 1000px;
    width: 1400px;
    margin: 0 auto;
}

.video_header {
    height: 100px;
    width: 1400px;
    background-color: #fff;
    display: flex;
    border-radius: 8px 8px 0 0;
}

.middle_header_title {
    font-weight: bold;
    margin-right: 10px;
}

.avatar {
    flex-grow: 1;
    position: relative;
    top: 8px;
    left: 8px;
    cursor: pointer;
}

.middle {
    flex-grow: 9;
    position: relative;
    left: -30px;
    top: 10px;
}

.middle_header {
    margin-left: 5px;
    display: flex;
}

.my-margin {
    margin-right: 10px;
}

.desc {
    display: flex;
    margin-top: 8px;
}

.descitem {
    font-size: 12px;
    line-height: 21px;
    position: relative;
    top: 3px;
}

.fire {
    color: #ff5a5a;
}

.my-color {
    color: #666666;
}

.my-ico {
    margin-right: 2px;
    position: relative;
    top: 1.5px;
}

.first {
    background-color: #fff0e2;
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
    padding: 0 10px;
    color: #ff5d23;
}

.subtitle {
    font-size: 12px;
    color: #666666;
    line-height: 21px;
    position: relative;
    top: 1px;
}

.jubao {
    margin-right: 15px;
}

.showbottom {
    margin: 8px 0 0 -2px;
}

.right {
    flex-grow: 2;
    margin-top: 8px;
}

video {
    width: 1400px;
}

.video_footer {
    height: 100px;
    width: 1400px;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
}

.guanzhu {
    display: flex;
    position: relative;
    top: 5px;
    left: 190px;
}

.guanzhu-title {
    display: flex;
    background-color: #ff7123;
    padding: 5px 22px;
    color: #fff;
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
    font-size: 14px;
    z-index: 99;
    cursor: pointer;
}

.guanzhu-title2 {
    display: flex;
    background-color: #CCCCCC;
    padding: 5px 22px;
    color: #fff;
    border-radius: 2.666667rem 2.666667rem 2.666667rem 2.666667rem;
    font-size: 14px;
    z-index: 99;
    cursor: pointer;
}

.guanzhu-num {
    background-color: #fff0e2;
    border-radius: 2.666667rem 0 0 2.666667rem;
    padding: 6px 25px 0 30px;
    position: relative;
    left: 20px;
}

.guanzhu-num2 {
    background-color: #F2F2F2;
    border-radius: 2.666667rem 0 0 2.666667rem;
    padding: 6px 25px 0 30px;
    position: relative;
    left: 20px;
}

.aixin {
    position: relative;
    top: 2px;
    margin-right: 4px;
}

.right_bottom {
    margin-top: 30px;
    display: flex;
    position: relative;
    top: 8px;
    left: 80px;
}

.huojian {
    margin-top: -4px;
    margin-right: 5px;
}

.noLive {
    height: 633px;
    width: 1400px;
    background-image: radial-gradient(farthest-side, #3D3D3D, #262626);
}

.noLive-title {
    color: #fff;
    text-align: center;
    line-height: 633px;
}

.el-dropdown-link {
    color: #fff;
}
</style>

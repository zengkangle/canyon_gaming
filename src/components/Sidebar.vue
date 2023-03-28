<template>
  <div class="h">
    <t-menu
      defaultValue="item"
      :collapsed="collapsed"
      :width="['135px', 70]"
      class="menu"
    >
      <template>
        <t-button
          class="t-demo-collapse-btn"
          variant="text"
          shape="square"
          @click.native="changeCollapsed"
        >
          <icon name="view-list" />
        </t-button>
        <t-divider></t-divider>
      </template>
      <t-menu-item value="item1">
        <template #icon>
          <icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="2">
        <template #icon>
          <icon name="mail" />
        </template>
        信息区
      </t-menu-item>
      <t-menu-item value="item3">
        <template #icon>
          <icon name="play-circle" />
        </template>
        视频区
      </t-menu-item>
      <t-menu-item value="item4" :disabled="true">
        <template #icon>
          <icon name="edit-1" />
        </template>
        资源区
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script>
import { Icon } from "tdesign-icons-vue";
export default {
  name: "Sidebar",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit("change");
    },
  },
  components: {
    Icon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 20px;
}
.menu {
  border: 1px black solid;
  position: fixed;
  z-index: 8;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

.t-demo-collapse-btn {
  padding-left: 17px;
}
</style>

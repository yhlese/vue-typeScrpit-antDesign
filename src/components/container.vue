<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <Nav ref="refNav" :collapsed="collapsed"></Nav>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="lay-header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapsed"
        />
      </a-layout-header>
      <a-layout-content class="lay-content">
        <slot>
          <router-view />
        </slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import Nav from '@/components/nav.vue';
@Component({
  components: {
    Nav,
  },
})
export default class Containder extends Vue {
  public collapsed: boolean = false;
  @Ref() readonly refNav!: Nav;
  private toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .lay-header {
    background: #fff;
    padding: 0;
  }
  .lay-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
</style>

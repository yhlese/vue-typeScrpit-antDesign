<template>
  <div class="nav">
    <a-menu
      mode="inline"
      theme="dark"
      :defaultSelectedKeys="defaultSelectedKeys"
      :inlineCollapsed="collapsed"
      @click="routerTo"
    >
      <template v-for="menu in menuAside">
        <a-menu-item v-if="!menu.children" :key="menu.path">
          <a-icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="menu.path">
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="(menuChild, i) in menu.children" :key="i">{{
            menuChild.title
          }}</a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Watch } from 'vue-property-decorator';
import { menuAside } from '@/router/menu';

@Component
export default class Nav extends Vue {
  // initial data
  private menuAside: any = menuAside;
  private defaultSelectedKeys: string[] = ['/'];

  @Prop({ default: false, type: Boolean }) readonly collapsed!: boolean;

  @Watch('$route')
  routeChange(newVal: any) {
    const { fullPath } = newVal;
    this.defaultSelectedKeys[0] = fullPath;
  }

  private routerTo({ item, key, keyPath }: any) {
    let { [keyPath.length - 1]: path } = keyPath;
    this.$router.push({
      path,
    });
  }
}
</script>

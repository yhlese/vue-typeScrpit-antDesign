<template>
  <div class="nav">
    <a-menu
      mode="inline"
      theme="dark"
      :defaultSelectedKeys="defaultSelectedKeys"
      :inlineCollapsed="collapsed"
      :defaultOpenKeys="defaultOpenKeys"
      @click="routerTo"
    >
      <template v-for="menu in menuAside">
        <a-menu-item v-if="!menu.children" :key="menu.path">
          <a-icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <!-- <menu-item v-if="!menu.children"
                   :key="menu.path"
                   :menu="menu"> 
        </menu-item>-->
        <a-sub-menu v-else :key="menu.path">
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="menuChild in menu.children" :key="menuChild.path">{{
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
import menuItem from '@/components/menu/menu-item.vue';

@Component({
  components: {
    menuItem,
  },
})
export default class Nav extends Vue {
  // initial data
  private menuAside: any = menuAside;
  private defaultSelectedKeys: string[] = [];
  private defaultOpenKeys: string[] = [];

  @Prop({ default: false, type: Boolean }) readonly collapsed!: boolean;

  @Watch('$route')
  routeChange(newVal: any) {
    const { fullPath } = newVal;
    let openPath = '/' + fullPath.split('/')[1];
    this.defaultSelectedKeys.push(fullPath);
    this.defaultOpenKeys.push(openPath);
  }

  private routerTo({ item, key, keyPath }: any) {
    let { 0: path } = keyPath;
    this.$router.push({
      path,
    });
  }
}
</script>

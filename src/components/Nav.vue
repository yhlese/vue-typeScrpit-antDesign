<template>
  <div class="nav">
    <a-button type="primary"
              @click="toggleCollapsed"
              style="margin-bottom: 16px">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu mode="inline"
            theme="light"
            :defaultSelectedKeys="defaultSelectedKeys"
            :inlineCollapsed="collapsed">
      <template v-for="(item) in menuAside">
        <a-sub-menu v-if="item.children"
                    :key="item.path">
          <span slot="title">
            <a-icon :type="item.icon" />
            {{ item.title }}
          </span>
          <a-menu-item v-for="(c,i) in item.children"
                       :key="i">
            {{c.title}}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else
                     :key="item.path">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button, Menu, Icon } from 'ant-design-vue';
import { menuAside } from '@/router/menu';

@Component({
  components: {
    [Button.name]: Button,
    [Menu.name]: Menu,
    [Icon.name]: Icon,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },
})
export default class Nav extends Vue {
  // initial data
  private collapsed: boolean = false;
  private menuAside: any = menuAside;
  private defaultSelectedKeys: string[] = ['/'];

  private toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="scss" scoped></style>

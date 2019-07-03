<template>
  <a-sub-menu :key="menu.path">
    <span slot="title">
      <a-icon :type="menu.icon" />
      <span>{{ menu.title }}</span>
    </span>
    <a-menu-item v-for="menuChild in menu.children"
                 :key="menuChild.push">
      {{ menuChild.title }}</a-menu-item>
  </a-sub-menu>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  @Prop({ type: Object, default: () => {} }) menu: any;
}
</script>
<style lang = 'scss' scoped>
</style>
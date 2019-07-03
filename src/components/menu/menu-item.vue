<template>
  <a-menu-item :key="menu.path">
    <a-icon :type="menu.icon" />
    <span>{{ menu.title }}</span>
  </a-menu-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  @Prop({ type: Object, default: () => {} }) menu: any;
}
</script>
<style lang="scss" scoped></style>

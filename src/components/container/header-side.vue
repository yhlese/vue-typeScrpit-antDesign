<template>
  <a-dropdown class="header-side">
    <a class="ant-dropdown-link"
       href="#">
      <a-icon type="user" />
      用户名
      <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <router-link to="/setting/user">修改信息</router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/setting/set">语言设置</router-link>
      </a-menu-item>
      <a-menu-item>退出</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
.header-side {
  float: right;
  margin-right: 20px;
}
</style>

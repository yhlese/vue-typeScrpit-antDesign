<template>
  <div class="project">
    <a-button @click="getLoginCode">提交</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { get_login_code_api } from '@/api';
@Component
export default class App extends Vue {
  private async getLoginCode() {
    try {
      let { data } = await get_login_code_api();
    } catch (error) {
      this.log(error);
    }
  }
  created() {
    // this.getLoginCode();
  }
}
</script>
<style lang="scss" scoped></style>

<template>
  <div class="article">
    <a-input v-formatNum:0="value"
             v-model="value"></a-input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  private value: string = '';
}
</script>
<style lang="scss" scoped></style>

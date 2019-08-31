<template>
  <!-- 孙子组件 -->
  <div>
    foo: {{ foo }} bar: {{ bar }}
    <!-- 子组件 -->
    <input v-bind:value="onValue" v-on:change="$emit('change', $event.target.value)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Model } from 'vue-property-decorator';
@Component
export default class ChildInfo extends Vue {
  @Model('change', { type: String }) readonly onValue!: string;

  @Inject() readonly foo!: string;
  @Inject('bar') readonly bar!: string;
}
</script>
<style lang="scss" scoped></style>

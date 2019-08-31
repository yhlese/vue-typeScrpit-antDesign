<template>
  <!-- 孙子组件 -->
  <div>
    <p>foo: {{ foo }} bar: {{ bar }}</p>
    <p>InjectReactive：{{ msg }}</p>

    <!-- 子组件 -->
    <input v-bind:value="onValue" v-on:change="$emit('change', $event.target.value)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Model, InjectReactive } from 'vue-property-decorator';
@Component
export default class ChildInfo extends Vue {
  @Model('change', { type: String }) readonly onValue!: string;
  // 子组件
  @InjectReactive() msg!: string; // 同理，@InjectReactive 写在 @Inject() 前面
  @Inject() readonly foo!: string;
  @Inject('bar') readonly bar!: string;
}
</script>
<style lang="scss" scoped></style>

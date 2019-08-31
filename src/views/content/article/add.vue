<template>
  <div>
    <input v-model="name" />
    <span>{{ 2 | filterDateTime }}</span>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Ref } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GetInfoMixin from './mixins/getInfo.mixin';
import GetListMixin from './mixins/getList.mixin';

export default class Add extends mixins(GetInfoMixin, GetListMixin) {
  mounted() {
    console.log('name' + this.name); // name:deepexi
    this.log(111);
  }
}
</script>

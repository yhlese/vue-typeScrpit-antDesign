<template>
  <div>
    <input v-model="name" />
    <span>{{ 2 | filterDateTime }}</span>
  </div>
</template>

<script lang="ts">
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
  async exportExcel(url, name, type) {
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      name += ` ${year}-${month}-${day}`;
      try {
        let res = await this.$axios.get(url, {
          responseType: 'blob',
          params: typeof type == 'object' ? {
            ...type
          } : {
            type
          }
        });
        if (!res) {
          return;
        }
        var blob = new Blob([res]);
        var downloadElement = document.createElement('a');
        var href = window.URL.createObjectURL(blob);
        downloadElement.href = href;
        downloadElement.download = `${name}.xlsx`;
        document.body.appendChild(downloadElement);
        downloadElement.click();
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(href);
      } catch (error) {}
    }
}
</script>

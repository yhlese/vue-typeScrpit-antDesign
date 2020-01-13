<template>
  <div id="app">
    <router-view v-if="$route.meta && $route.meta.frameOut" />
    <container v-else></container>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Container from '@/components/container/index.vue';
@Component({
  components: {
    Container,
  },
})
export default class App extends Vue {
  private frameOut: boolean = false;
  private created() {
    (<any>window).version = process.env.VUE_APP_VERSION;
    console.log('version =>', process.env.VUE_APP_VERSION);
  }
}
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>

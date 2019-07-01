<template>
  <div id="app">
    <router-view v-if="$route.meta && $route.meta.frameOut" />
    <container v-else></container>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
  components: {
    Container,
  },
})
export default class App extends Vue {
  private frameOut: boolean = false;
}
</script>
<style lang="scss" scoped></style>

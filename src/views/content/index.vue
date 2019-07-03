<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped></style>

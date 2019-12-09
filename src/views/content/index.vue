<template>
  <div class="content">
    <aa></aa>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import aa from './component/aa';
@Component({
  components: { aa },
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped></style>

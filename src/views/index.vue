<template>
  <div class="index">
    1111
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Index extends Vue {
  @State(state => state.userInfo) stateUserInfo: any; // @State('userInfo') stateUserInfo: any;
}
</script>

<style lang="scss" scoped></style>

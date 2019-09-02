<template>
  <div class="index">
    <p>这是用户名：{{ stateUserInfo.name }}</p>
    <p>getter：{{ _getterName }}</p>
    <a-button @click="editInfo">修改用户信息Mutation</a-button>
    <a-button @click="getInfo">获取用户信息Action</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { storeInfoSetting } from "@/utils/userSetting";
@Component
export default class Index extends Vue {
  @State(state => state.user.userInfo) stateUserInfo: any;
  @State('userInfo', { namespace: 'user' }) _stateUserInfo: any;

  @Getter('getterName', { namespace: 'user' }) _getterName!: string;
  @Mutation('SET_USER_INFO', { namespace: 'user' }) _editInfo: any;
  @Action('GET_USER_INFO', { namespace: 'user' }) _getInfo: any;

  editInfo() {
    this._editInfo({ name: 'mutation修改了用户名' });
  }
  getInfo() {
    this._getInfo();
  }
  created(){
    console.log(storeInfoSetting)
  }
}
</script>

<style lang="scss" scoped></style>

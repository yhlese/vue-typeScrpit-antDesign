<template>
  <div class="index"
       ref="downlodaRef">
    <p>这是用户名：{{ stateUserInfo.name }}</p>
    <p>getter：{{ _getterName }}</p>
    <a-button @click="editInfo">修改用户信息Mutation</a-button>
    <a-button @click="getInfo">获取用户信息Action</a-button>
    <a-button @click="downloadRecord">点击下载图片</a-button>
    <lottie :options="defaultOptions"></lottie>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { storeInfoSetting } from '@/utils/userSetting';
import html2canvas from 'html2canvas';
import lottie from 'vue-lottie';
import earth from '@/assets/lottie/earth3.js';
@Component({ components: { lottie } })
export default class Index extends Vue {
  @State(state => state.user.userInfo) stateUserInfo: any;
  @State('userInfo', { namespace: 'user' }) _stateUserInfo: any;

  @Getter('getterName', { namespace: 'user' }) _getterName!: string;
  @Mutation('SET_USER_INFO', { namespace: 'user' }) _editInfo: any;
  @Action('GET_USER_INFO', { namespace: 'user' }) _getInfo: any;

  @Ref() readonly downlodaRef!: HTMLElement;

  defaultOptions: any = { animationData: earth, autoplay: false };

  editInfo() {
    this._editInfo({ name: 'mutation修改了用户名' });
  }
  getInfo() {
    this._getInfo();
  }

  downloadRecord() {
    this.$nextTick(() => {
      html2canvas(this.downlodaRef, {
        allowTaint: true,
        useCORS: true,
        logging: false,
      }).then((canvas: any) => {
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL('image/png');
        a.download = '图片名称';
        a.click();
      });
    });
  }

  created() {}
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <a-button @click="clickSave">保存</a-button>
    <a-button @click="clickConfirm">确认</a-button>
    <!-- 父组件 -->
    <child-info v-model="lovingVue"> </child-info>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, PropSync, Emit } from 'vue-property-decorator';
import ChildInfo from './childInfo.vue';

@Component({
  components: {
    ChildInfo,
  },
})
export default class SaveInfo extends Vue {
  @Prop(Number) readonly count: number | undefined;
  @Prop({ default: false, type: Boolean }) visible!: boolean; // 这里如果不写 !: 调用的时候typescript会提示可能为undefined
  @Prop([String, Boolean]) readonly userId!: string | boolean;
  @PropSync('name', { type: String }) _name!: string; // 实现了 this.$emit('update:name',this._name)

  lovingVue: string = '父组件的值';
  // good
  clickConfirm() {
    // api 请求成功
    setTimeout(() => {
      let msg: string = '确认按钮';
      this.confirm(msg);
    }, 3000);
  }
  @Emit('parentConfirm')
  confirm(msg: string): string {
    return msg; // 在这里的return 可以不用写也是可以，默认把参数抛出去了
  }

  // error 这里调用了事件直接抛出了，抛出的值就是默认的event，
  @Emit('parentSave')
  clickSave() {
    // api 请求成功
    setTimeout(() => {
      let msg: string = '保存按钮';
      return msg;
    }, 3000);
  }
}
</script>
<style lang='scss' scoped>
</style>
<template>
  <div class="article">
    <a-input v-formatNum:0="value"
             v-model="value"></a-input>
    <a-button @click="goAdd">添加</a-button>
    <span ref="textRef"
          @click="getRef">获取ref</span>

    <save-info @parentSave="saveMsg"
               @parentConfirm="confirmMsg"
               ref="saveInfoRef"></save-info>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Ref, Provide, ProvideReactive } from 'vue-property-decorator';
import SaveInfo from './components/saveInfo.vue';
interface UserInfo {
  name: string;
  age: number;
}
@Component({
  components: {
    SaveInfo,
  },
})
export default class App extends Vue {
  /**
   * 反应式修改：父组件更新后代组件跟着更新
   * 小坑：如果同时存在 @ProvideReactive 和  @Provide 要将@ProvideReactive 写在前面否则会报错
   */
  @ProvideReactive() msg = '父组件msg';
  
  // 父组件
  @Provide() foo = 'parentFoo';
  @Provide('bar') baz = 'parentBar';

  /**
   * 两种取值方式
   * 一、如果括号里面没有值，那么声明的变量名和绑定的ref名相同
   * 二、如果括号里面有值，那么括号里面的值是绑定的ref名，声明的变量名可以随意命名
   */
  @Ref() readonly saveInfoRef!: SaveInfo;
  @Ref('textRef') readonly _textRef!: HTMLElement;

  private value: string = '';
  private info: UserInfo = { name: '', age: 0 };

  @Watch('value')
  onValueChange(newVal: string, oldVal: string) {}

  @Watch('info', { immediate: true, deep: true })
  onInfoChange(newVal: string, oldVal: string) {}

  getRef() {
    console.log('组件ref', this.saveInfoRef);
    console.log('DOM ref', this._textRef);
  }

  goAdd() {
    this.$router.push({
      name: 'content-article-add',
    });
  }
  saveMsg(msg: string) {
    console.log(msg);
  }
  confirmMsg(msg: string) {
    this.msg = msg;
    console.log(msg);
  }
}
</script>
<style lang="scss" scoped></style>

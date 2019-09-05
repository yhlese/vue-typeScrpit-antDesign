<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <save-info></save-info>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SaveInfo from './saveInfo.vue';

@Component({
  components: {
    SaveInfo,
  },
})
export default class App extends Vue {
  @Prop() private msg!: string;
  helloMsg = 'Hello' + this.msg;

  // computed
  get computedMsg() {
    return 'computed' + this.msg;
  }

  mounted() {
    this.greet();
  }

  // method
  greet() {
    console.log('greet', +this.msg);
  }
}
</script>
<style lang="scss" scoped></style>

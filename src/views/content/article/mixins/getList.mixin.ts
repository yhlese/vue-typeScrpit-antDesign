// mixin.ts
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class GetListMixin extends Vue {
  list: string[] = ['deepexi'];
}

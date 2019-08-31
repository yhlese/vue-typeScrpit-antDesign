// mixin.ts
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GetInfoMixin extends Vue {
  name: string = 'name:deepexi';
}

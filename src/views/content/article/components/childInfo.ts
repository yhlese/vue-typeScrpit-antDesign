import { Component, Vue, ProvideReactive, InjectReactive } from 'vue-property-decorator';

// 父组件
@Component
class ParentComponent extends Vue {
  @ProvideReactive() one = 'value';
  @ProvideReactive('key') two = 'value';
}

// 子组件
@Component
class ChildComponent extends Vue {
  @InjectReactive() one!: string;
  @InjectReactive('key') two!: string;
}

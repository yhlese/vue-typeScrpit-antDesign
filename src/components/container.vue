<template>
  <div class="container">
    <Nav></Nav>
    <slot>
      <router-view />
    </slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '@/components/nav.vue';
import { Row, Col } from 'ant-design-vue';
@Component({
  components: {
    Nav,
    [Row.name]: Row,
    [Col.name]: Col,
  },
})
export default class Index extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>

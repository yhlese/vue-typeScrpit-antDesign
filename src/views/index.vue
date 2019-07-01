<template>
  <div>
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Index extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="index">
    1111
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
  components: {
    Container,
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>

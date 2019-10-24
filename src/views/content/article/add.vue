<template>
  <div>
    <input v-model="name" />
    <span>{{ 2 | filterDateTime }}</span>

    <!-- 表单 -->
    <div>
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Name"
        >
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: 'Please input your name' }] },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Ref } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import GetInfoMixin from './mixins/getInfo.mixin';
import GetListMixin from './mixins/getList.mixin';

export default class Add extends mixins(GetInfoMixin, GetListMixin) {
  form: any = this.$form.createForm(this);
  formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  mounted() {
    console.log('name' + this.name); // name:deepexi
    this.log(111);
  }
}
</script>

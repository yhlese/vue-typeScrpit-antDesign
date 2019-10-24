import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  namespace XX {
    interface IRouterConfigBaseInfo {
      name: string;
      path: string;
      title: string;
      children?: any;
    }
  }
}

/**
 * @description 有一些方法不认识，ts在编译时报错不能继续，这时候需要运用typescript的声明合并这个功能来解决。即扩展typescript的declare
 **/

// declare module 扩展模块
declare module 'vue/types/vue' {
  interface Vue {
    log: Function;
    filterDateTime: Function;
  }
}

declare let jQuery: (selector: string) => any;

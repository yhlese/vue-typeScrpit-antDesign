/**
 * @description 在引入第三方模块或本地模块中的方法时会红线报错，找不到对应的声明文件,
 *              需要自己写声明文件
 *  */
declare module '@/store' {
  export const state: any;
  export const dispatch: Function;
  export const commit: Function;
}

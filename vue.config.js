// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;

// 基础路径 注意发布之前要先修改这里
// 线上斜杠
let publicPath = process.env.VUE_APP_PUBLIC_PATH;

module.exports = {
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete("prefetch").delete("preload");
    // markdown
    config.module
      .rule("tsx")
      .test(/\.tsx$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
  }
};

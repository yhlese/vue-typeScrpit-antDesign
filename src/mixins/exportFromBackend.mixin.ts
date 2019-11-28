import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AgentDialogMixin extends Vue {
  /**
   *
   * @param url 请求地址
   * @param name 文件名
   * @param params 参数
   */
  async exportExcel(url: string, name: string, params?: any) {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    name += ` ${year}-${month}-${day}`;
    try {
      let res = await (<any>this).$axios.get(url, {
        responseType: 'blob',
        params,
      });
      if (!res) {
        return;
      }
      var blob = new Blob([res]);
      var downloadElement = document.createElement('a');
      var href = window.URL.createObjectURL(blob);
      downloadElement.href = href;
      downloadElement.download = `${name}.xlsx`;
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
      window.URL.revokeObjectURL(href);
    } catch (error) {
      console.log(error);
    }
  }
}

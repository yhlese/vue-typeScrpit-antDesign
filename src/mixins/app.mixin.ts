// import { Message, MessageBox } from "element-ui";
// import dayjs from "dayjs";
// import store from "@/store";

// export default {
//   mixins: [
//     {
//       data(){
//         return{
//           isClearRegion: false
//         }
//       },
//       methods: {
//         // 给三级联动用的
//         resetTabRegion(){
//           (<any>this).isClearRegion = true;
//         },
//         goSearchTab(){
//           (<any>this).$refs.adminTableRef ? (<any>this).$refs.adminTableRef.goSearch() :
//           (<any>this).$refs.tableRef ? (<any>this).$refs.tableRef.goSearch() : "";
//         },
//         log(msg?: string | number): void {
//           console.log(msg ? String(msg) : "");
//         },
//         showMsg(message: string, type: "success" | "warning" | "info" | "error" | undefined = "success"): object {
//           return Message({
//             message,
//             type
//           });
//         },
//         // 删除封装
//         deleteconfirm(callback: Function, title: string = "") {
//           MessageBox.confirm(`确定要删除${title}？删除后无法恢复`, "提示", {
//             confirmButtonText: "确定",
//             cancelButtonText: "取消",
//             type: "warning"
//           })
//             .then(() => {
//               if (callback) {
//                 callback();
//               }
//             })
//             .catch(() => {
//               Message({
//                 message: "放弃操作",
//                 type: "warning"
//               });
//             });
//         },
//         // 自定义弹窗内容
//         txtconfirm(callback: Function, content: string, title: string = '提示') {
//           MessageBox.confirm(`${content}`, `${title}`, {
//             confirmButtonText: "确定",
//             cancelButtonText: "取消",
//             type: "warning"
//           })
//             .then(() => {
//               if (callback) {
//                 callback();
//               }
//             })
//             .catch(() => {
//               Message({
//                 message: "放弃操作",
//                 type: "warning"
//               });
//             });
//         },
//         /**
//          * @description 权限调用方法
//          * @param keys 权限的keys（必传）-- 具体的key可以查看接口 access/getUserAc 的 permissions字段
//          * @param hasShowMsg 是否需要弹窗 --默认有弹窗
//          */
//         accessIsOpened(keys: string, hasShowMsg: boolean = false) {
//           let _allKeys = store.state.user.permissionsKeys;
//           let _hasPerms = _allKeys.includes(keys);
//           !_hasPerms && hasShowMsg && this.showMsg("访问权限不足，请联系管理员", "warning");
//           return _hasPerms;
//         }
//       },
//       filters: {
//         filterDateTime(val: number): string {
//           return (val && dayjs(val).format("YYYY-MM-DD HH:mm")) || "—";
//         },
//         filterTmpDateTime(val: number): string {
//           return (val && dayjs(val * 1000).format("YYYY-MM-DD HH:mm")) || "—";
//         },
//         formatPrice(val: number): number {
//           if (val) {
//             let result: any = Number(val) / 10000;
//             // 多留一位小数
//             result = parseFloat(result.toFixed(3)).toString();
//             // 如果位数符合长度,就切掉最后一位||位数不足那就不切
//             return result.length > 4 ? parseFloat(result.substring(result.length - 1, 0)) : result;
//           } else {
//             return 0;
//           }
//         }
//       }
//     }
//   ]
// };

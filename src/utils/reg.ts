// 验证手机号
const mobileReg = /^1[3456789]\d{9}$/;
export function telValidator(rule: any, value: any, callback: Function) {
  if (!value) {
    callback(new Error("请输入11位手机号"));
  } else if (!mobileReg.test(value)) {
    callback(new Error("请输入正确手机号"));
  } else {
    callback();
  }
}
// 验证邮箱
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
export function mailCheck(rule: any, value: any, callback: Function) {
  if (!value) {
    callback();
  } else if (!emailReg.test(value)) {
    callback(new Error("请输入正确邮箱格式"));
  } else {
    callback();
  }
}
// 验证客服电话
const serveReg = /^[-0-9]+$/;
export function serveValidator(rule: any, value: any, callback: Function) {
  if (!value) {
    callback(new Error("客服电话不能为空"));
  } else if (!serveReg.test(value)) {
    callback(new Error("请输入正确格式座机号"));
  } else {
    callback();
  }
}

const pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
export function pwdCheck(rule: any, value: any, callback: Function) {
  if (!value) {
    callback(new Error("8~16位密码,包含大小写字母数字"));
  } else if (!pwdReg.test(value)) {
    callback(new Error("请输入正确密码格式"));
  } else {
    callback();
  }
}
// 验证字母和数字
const numWordReg = /^[A-Za-z0-9]+$/;
export function numWordCheck(rule: any, value: any, callback: Function) {
  if (!value) {
    callback(new Error("账号不能为空"));
  } else if (!numWordReg.test(value)) {
    callback(new Error("账号只能为数字、字母"));
  } else {
    callback();
  }
}
// 字符长度
export function introductionValidator(rule: any, value: any, callback: any) {
  
  if (value.length > 6000) {
    callback(new Error("内容已超过最大限制，请简化内容或样式"));
  } else if(!value || value.length === 0){
    callback(new Error("请输入门店介绍"));
  } else {
    callback();
  }
}

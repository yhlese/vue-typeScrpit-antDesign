/**
 * 数字转汉字
 * @param num
 */
export const numToUppercase = (num: any) => {
  const numMap: Array<string> = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  let len = String(num).length;
  let _str: string = '';
  if (len === 1) {
    _str = numMap[num];
  } else if (len === 2) {
    if (num === 10) {
      _str = numMap[num];
    } else if (num > 10 && num < 20) {
      let _at0: number = Number(String(num).charAt(1));
      _str = '十' + numMap[_at0];
    } else {
      let _at0: number = Number(String(num).charAt(0));
      let _at1: number = Number(String(num).charAt(1));

      _str = numMap[_at0] + '十' + numMap[_at1].replace('零', '');
    }
  }
  return _str;
};

/**
 * @description 使用 Boolean 过滤数组中的所有假值
 * @param arr
 */
export const filterFalse = (arr: Array<any>) => arr.filter(Boolean);

/**
 * @description 精确到指定位数的小数
 * @param 原始值，保留位数
 */
export const decimalsNumber = (n: number, decimals: number) => {
  let _str = Number(`${n}e${decimals}`);
  return Number(`${Math.round(_str)}e-${decimals}`);
};

/**
 * @description 数字补 0 操作
 * @param 原始值，补位数
 */
export const addPadStart = (n: number, len: number = 2) => `${n}`.padStart(len, '0');

// 布尔值
let isStart: boolean = false; // 相当于 js 的 let isStart = false;
// 变量定义之后不可以随便变更它的类型
isStart = true; // 不报错
isStart = '我要变为字符串'; // 报错

// 数字
let count: number = 6; // 相当于 js 的 let count = 6;
// 字符串
let name1: string = 'bob'; // 相当于 js 的 let name1 = "bob";

// any 可以随便变更类型
let notSure: any = 4;
notSure = '我可以随便变更类型'; // 不报错
notSure = false; // 不报错

// !: 告诉 typescript，表示我这里一定会有值
var str!: string;

// 数组

// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
let list1: number[] = [1, 2, 3]; // 相当于 js 的let list1 = [1, 2, 3];

// 第二种，使用数组泛型，Array<元素类型>
let list2: Array<number> = [1, 2, 3];
let listString: Array<string> = ['1', '2', '3'];

// 第三种，用any表示数组中允许出现任何类型
let listAny: any[] = ['1', 1, { a: 1 }];

// 第四种，用接口表示数组
interface ListInterFace {
  [index: number]: string; // let arr = [0,1,2]  arr[index]
}
let listInterFace: ListInterFace = ['1', '2', '3'];

// 对象

// 第一种，使用接口（Interfaces）来定义 对象 的类型。
interface Person {
  name: string;
  age: number;
}
let tom: Person = {
  name: 'Tom',
  age: 25,
};

// 第二种：给接口配置任意属性
interface UserInfo {
  id: number | string;
  name: string;
  // 可选属性 ?:
  age?: number;
  // 任意属性：一旦定义了任意属性，那么确定属性和可选属性都必须是他类型的子集
  [propName: string]: any;
}
// error
interface UserInfoError {
  readonly id: number | string;
  name: string;
  age?: number; // 确定属性和可选属性也必须是 任意类型里面的类型
  [propName: string]: string; // 可以这样写 [propName: string]: string | number;
}

var userInfo1: UserInfo = {
  name: '1',
  age: 1,
  id: 1,
  role: 'admin1',
};

// 第三种：使用any
var userInfo2: any = {
  name: '2',
  age: 2,
  id: 2,
  role: 'admin2',
};

// 函数

// 当一个函数有返回值时 需要定义返回值类型
function getLastName(): string {
  return 'lastName';
}
// Void 当一个函数没有返回值时，通常返回值类型是 void
function getFirstName(): void {
  console.log('This is my firstName');
}
// never 抛出异常或无法执行到终止点(无限循环)
function errorMsg(msg: string): never {
  throw new Error(msg);
  // return error("Something failed")
  // while (true) {} // 存在无法达到的终点
}
/**
 * @description 函数的参数：参数也要定义类型，不知道的类型就定义为 any
 * @param url 给了一个默认参数，默认参数识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制了
 * @param id 取值可以是 number和string 其中一种
 * @param params 定义成一个可选参数，可选参数后面不允许在出现必需参数
 **/
function fetch(url: string = '/index', id: number | string, params?: any): void {
  console.log('fetch');
}
/**
 * @description 函数的剩余参数，...rest 的方式获取函数中的剩余参数，是一个数组
 * @param arr
 * @param items
 */
function fetchArr(arr: any[], ...items: any[]): void {
  console.log('fetch');
}

// 联合类型
let myId: string | number | undefined; // 只能是这三种类型，不能是其他类型

// 类型断言 用法：在需要断言的变量前加上 <Type> 即可。
function getLength(something: string | any[]): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

/**
 * @description 装饰器：扩展属性和方法
 */

// 1. 普通的装饰器
function fun1(target: any) {
  console.log(target); // 这个targe 就是装饰器调用下面的 类本身
  target.prototype.url = '动态扩展的属性';
  target.prototype.run = () => {
    console.log('我是一个run方法');
  };
}

@fun1
class Hello {
  constructor() {}
  getData() {}
}

let hello: any = new Hello();
console.log(hello.url); // 动态扩展的属性
hello.run(); // 我是一个run方法

// 2. 装饰工厂（可以传参的）
let fun2 = (msg: string) => {
  return (target: any) => {
    target.prototype.url = msg;
  };
};

@fun2('我是装饰工厂')
class Stu {
  constructor() {}
  getData() {}
}

let stu: any = new Stu();
console.log(stu.url); // 我是装饰工厂

// 3. 属性装饰器
function decProperty(params: any) {
  return function(target: any, attr: any) {
    target[attr] = params;
  };
}

class Person {
  @decProperty('http://baidu.com') public url: any;
  constructor() {}
  getUrl() {
    console.log(this.url);
  }
}

let person = new Person();
person.getUrl(); // http://baidu.com

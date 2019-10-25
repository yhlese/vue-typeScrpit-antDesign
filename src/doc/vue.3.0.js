/**
 * @description 
 * vue2.0 : defineProperty
 * vue3.0 ：proxy
 * 
 */

/**
 * @description vue2.0
 * 原理：当设置 a.b = 323 时，会触发 set 方法，set 方法中可以进行 视图更新
 * 缺点：1. 如果对象中有多个值，那么每个属性，都要去写绑定 defineProperty 进行监听，如果有 100 个属性，就要写 100 次
 *      2. 在 set 方法中只能拿到新的值
 */

var a = {
  b: 123,
};
Object.defineProperty (a, 'b', {
  set: function (newVal) {
    console.log ('i am be set');
  },
});

/**
 * @description vue3.0
 * 
 * 原理：proxy 是在源数据进行一层拦截 new 了一个新的对象，对新对象进行设置时， 才会去触发 set 方法，
 * 优点：1. 避免了对源数据的污染。（修改源数据是不会触发 set 方法）
 *      2. 而且是对整个对象的监听，避免了无数次属性的绑定监听
 *      3. 在 set 方法中只能拿到 （ 源对象，改变的属性key，改变的新值 ）
 *  
 */
var a1 = {
  b: 234,
};
var newA = new Proxy (a, {
  set: function (target, key, newVal) {
    console.log ('i am be set');
  },
});

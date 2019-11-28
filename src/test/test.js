function vue() {
  this.$data = {
    a: 1,
  };
  this.el = document.getElementById('app'); // dom
  this.ast = ''; // 虚拟dom
  this.observe(this.$data);
  this.render();
}
vue.prototype.observe = function() {
  var self = this;
  this.$data = new Proxy(this.$data, {
    // 如果使用了 new Proxy 新的值 就不能直接取值和复制了，需要通过 set 和 get 更新数据
    set: function(target, key, newVal) {
      // 触发更新
      target[key] = newVal;
      // 视图渲染
      self.render();
    },
    get: function(target, key) {
      // 进行数据收集 - vue3.0 对虚拟 dom 进行分层，动态数据 等进行数据收集
      return target[key];
    },
  });
};

vue.prototype.render = function() {
  // diff 算法对比，更新 virtual dom
  this.ast = 'i am ' + this.$data.a;
  // 视图渲染
  this.el.innerHTML = this.ast;
};

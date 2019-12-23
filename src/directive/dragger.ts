import Vue from "vue";

function inserted(el: any, binding: any, vNode: any) {
  el.setAttribute("style", "position: fixed; z-index: 9999");
}

function bind(el: any, bindding: any, vNode: any) {
  el.setAttribute("draggable", true);
  let left: number, top: number, width: number, height: number;
  el._dragstart = function(event: any) {
    event.stopPropagation();
    left = event.clientX - el.offsetLeft;
    top = event.clientY - el.offsetTop;
    width = el.offsetWidth;
    height = el.offsetHeight;
  };
  el._checkPosition = function() {
    // 防止被拖出边界
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    let left = Math.min(el.offsetLeft, document.body.clientWidth - width);
    left = Math.max(0, left);
    let top = Math.min(el.offsetTop, document.body.clientHeight - height);
    top = Math.max(0, top);
    el.style.left = left + "px";
    el.style.top = top + "px";
    el.style.width = width + "px";
    el.style.height = height + "px";
  };
  el._dragEnd = function(event: any) {
    event.stopPropagation();
    left = event.clientX - left;
    top = event.clientY - top;
    el.style.left = left + "px";
    el.style.top = top + "px";
    el.style.width = width + "px";
    el.style.height = height + "px";
    el._checkPosition();
  };
  el._documentAllowDraop = function(event: any) {
    event.preventDefault();
  };
  document.body.addEventListener("dragover", el._documentAllowDraop);
  el.addEventListener("dragstart", el._dragstart);
  el.addEventListener("dragend", el._dragEnd);
  window.addEventListener("resize", el._checkPosition);
}

function unbind(el: any, bindding: any, vNode: any) {
  document.body.removeEventListener("dragover", el._documentAllowDraop);
  el.removeEventListener("dragstart", el._dragstart);
  el.removeEventListener("dragend", el._dragEnd);
  window.removeEventListener("resize", el._checkPosition);
  delete el._documentAllowDraop;
  delete el._dragstart;
  delete el._dragEnd;
  delete el._checkPosition;
}
Vue.directive("dragger", {
  bind,
  unbind,
  inserted
});

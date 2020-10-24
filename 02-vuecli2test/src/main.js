// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (h) {
  //  1.普通用法：createElement('标签', {标签的属性},[''])
  //   return createElement('h2',
  //     {class: 'box'},
  //     ['hello world', createElement('button', ['按钮'])])

  //2.传入组件对象
    return h(App)

    //  那么.vue文件中的template是有谁处理的？
    //   是由vue-template-compiler
    //  render -> vdom -> UI

  }
})

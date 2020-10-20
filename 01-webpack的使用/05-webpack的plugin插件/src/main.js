//1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20,30));
console.log(mul(20,30));

//2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css');
document.writeln('你好，李银河');

//4.依赖less文件
require('./css/special.less')

//5.vue配置
//npm install --save vue@2.5.21 安装vue
//导入vue
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components:{
    App
  }
})

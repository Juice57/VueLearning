# ES6知识补充

## 一、let/var

- 事实上var的设计是JavaScript语言设计的错误，但这个错误多半不能被修复和移除
  - 十年前js作者准备修复这个问题，于是添加了新的关键字：let
  - 可以将let看成更完美的var
- 块级作用域
  - ES5之前因为if和for都没有块级作用域的概念，所以在很多时候，我们都必须借助于function的作用域来解决应用外面变量的问题。
  - ES6中，加入了let，let它是有if和for的块级作用域。

## 二、const

- const关键字

  - 在很多语言中已经存在，比如C/C++中，主要的作用将某个变量修饰为常量
  - 在JS中也是如此，使用const修饰的标识符为常量，不可以再次赋值

- 在什么时候使用const

  - 在修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性

- ==建议：==在ES6开发中，优先使用const，只有需要改变某一个标识符的时候才使用let

- const注意：

  - 注意一：一旦给const修饰的标识符被赋值后，不能修改。

  ```
  const a = 20;
  a = 30; //错误：不可以修改。
  ```
  - 注意二：在使用const定义标识符，必须进行赋值。

  ```
  const name; //错误：const修饰的标识符必须赋值。
  ```

  - 注意三：常量的含义是指向的对象不能修改，但是可以改变对象内部的属性。

  ```
  const obj = {
  	name: 'why',
  	age: 18,
  	height: 1.88
  }
  
  obj.name = 'kobe';
  obj,age = 40;
  obj.height = 1.87; //正确的 修改的是属性不是对象
  ```

## 三、对象增强写法

- ES6中，对对象字面量进行了很多增强

- 属性初始化简写和方法的简写

  - 属性的简写

    ```
    //ES5写法
        // const obj ={
        //     name: name,
        //     age: age,
        //     height: height
        // }
        //ES6写法
        // const obj ={
        //     name,
        //     age,
        //     height
        // }
        // console.log(obj);
    ```

  - 方法的简写

    ```
    //ES5写法
        // const obj = {
        //     run: function () {
        //
        //     },
        //     eat: function () {
        //
        //     }
        // }
        //ES6写法
        const obj ={
            run() {
    
            },
            eat() {
    
            }
        }
    ```

    
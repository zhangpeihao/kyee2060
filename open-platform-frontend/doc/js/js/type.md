类型&值
===
## 类型
js的变量类型分2类，任何一个变量都可以用关键字typeof查看其类型。
* 基础类型：数（number），布尔值（boolean），字符串（string）。
* 对象类型：集合（普通对象），数组，函数等。

## null和undefined
null和undefined用相等运算符“==”计算是相等的，用更严格的“===”可以区分。那么它们有什么区别呢？
* null是js里的关键字，是一种特殊的object类型，
* undefined是一个预定义的只读的全局变量。

## 遗漏声明变量
在非严格模式下，虽然一个变量不用var关键词声明，直接赋值也可以使用，
但是实际上在局部作用域下，这并不是声明了一个局部变量，而是一个全局变量。

## 作用域链
js作用域是通过先在当前函数内寻找变量定义，再不断的往上层函数寻找变量定义的机制，称为作用域链。

## 局部变量作用域
js没有块作用域的概念，只有函数作用域的概念(严格模式下有let)，即使是在函数尾部声明的变量，也可以在函数顶部访问到，但是实际赋值是在函数尾部。
```js
var scope = 'global';
(function(){
  console.log(scope);
  var scope = 'local';
  console.log(scope);
})();
```
结果为
```js
undefined
local
```

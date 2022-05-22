/*
iterable
遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。
为了统一集合类型，ES6标准引入了新的iterable类型，
Array、Map 和 Set 都属于 iterable 类型

具有 iterable 类型的集合可以通过新的 for ... of 循环来遍历。
for ... of 循环是 ES6 引入的新语法，请测试浏览器是否支持：
*/
'use strict';
var a = [1, 2, 3];
for (var x of a) {
}
console.log('你的浏览器支持for ... of');


/*
用for ... of 循环遍历集合，用法如下：
*/
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
/*
输出结果如下：
A
B
C
*/
for (var x of s) { // 遍历Set
    console.log(x);
}
/*
输出结果如下：
A
B
C
*/
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
/*
输出结果如下：
1=x
2=y
3=z
*/
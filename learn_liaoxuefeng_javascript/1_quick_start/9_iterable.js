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


/*
for ... of 与 for ... in 循环的区别：
    for ... in:
    由于历史遗留问题，它遍历的实际上是对象的属性名称。
    一个Array数组实际上也是一个对象，它的每个元素的
    索引被视为一个属性。
    当我们手动给Array对象添加了额外的属性后，
    for  ... in循环将带来意想不到的意外效果：
*/
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
/*
for ... in 循环将把 name 包括在内，但Array的length属性却
不包括在内。

for ... of 循环完全修复了这些问题，它只循环集合本身的元素：
*/
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}
/* 
这就是为什么要引入新的for ... of循环。
*/


/*
然而，更好的方式是直接使用iterable内置的forEach方法，
它接受一个函数，每次迭代就自动回调该函数。以Array为例：
*/
'use strict';
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
/*
输出如下：
A, index = 0
B, index = 1
C, index = 2
*/

/*
注意，forEach()方法是ES5.1标准引入的，你需要测试浏览器是否支持。

Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
*/
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element); // “console.log(sameElement);”与此输出相同。
});
/*
输出如下：
A
B
C
*/

/*
Map 的回调函数参数依次为value key 和 map 本身：
*/
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
/*
输出如下：
x
y
z
*/

/*
如果对某些参数不感兴趣，由于JavaScript的函数不要求参数必须
一致，因此可以忽略它们。例如，只需要获得Array的element：
*/
var a =['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});
/*
输出如下：
A
B
C
*/
// JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
// length属性是Array的长度。
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6

// 直接給Array的length赋一个新值会导致Array大小的变化：
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6; // 6
arr; // (6) [1, 2, 3, empty × 3]
arr.length = 2;
arr; // (2) [1, 2]
arr.length = 3;
arr; // (3) [1, 2, empty]

// Array 可以通过索引把对应的元素修改为新的值，因此对Array的索引进行赋值会改变这个Array：
var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr; // (3) ['A', 99, 'C']
// 通过索引赋值时，索引超过了范围同样会改变这个Array：
arr[5] = 'x';
arr; // (6) ['A', 99, 'C', empty × 2, 'x']
// 在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

// Array 通过 indexOf() 来搜索一个指定的元素的位置：
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 0
arr.indexOf(20); // 1
arr.indexOf('30'); // 2
arr.indexOf('xyz'); // 3
arr.indexOf(NaN); // 试了以下居然是-1
arr.indexOf(0); // -1 没找到的返回-1

// slice() 对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // (3) ['A', 'B', 'C'] 从索引0开始，到索引3结束，但不包括索引3
arr.slice(3); // (4) ['D', 'E', 'F', 'G'] 从索引3开始，到结束

// 如果不给slice() 传递任何参数，它会从头到尾截取所有元素：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // (7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
arr; // (7) ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false

// push()与pop()
// push() 向Array数组的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：

var arr = [1, 2];
// undefined
arr.push('A', 'B');
// 4
arr;
// (4) [1, 2, 'A', 'B']0: 11: 22: "A"3: "B"length: 4[[Prototype]]: Array(0)
arr.pop();
// 'B'
arr;
// (3) [1, 2, 'A']
arr.pop();
// pop()返回 'A'
arr.pop(); arr.pop();
// pop()返回 1
arr;
// 返回空数组[]
arr.pop();
// undefined 空数组继续pop不会报错，而是返回undefined
arr;
// []

// unshift()与shift()
// unshift()可以向Array的头部添加若干元素，shift()则把Array的第一个元素删掉：

var arr = [1, 2];
// undefined
arr.unshift('A', 'B'); // 返回Array新的长度：4
// 4
arr;
// (4) ['A', 'B', 1, 2]
arr.shift();
// 'A'
arr;
// (3) ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); 
// 2
arr;
// []
arr.shift();
// undefined
arr;
// []

var arr = ['B', 'C', 'A'];
// undefined
arr.sort();
(3) ['A', 'B', 'C']
// 按默认顺序排序

var arr = ['one', 'two', 'three'];
undefined
arr.reverse();
(3) ['three', 'two', 'one']
// 反转

// splice
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];

arr.splice(2, 3, 'Google', 'Facebook'); // 从索引2开始删除3个元素，然后再添加两个元素
// (3) ['Yahoo', 'AOL', 'Excite']
// 返回删除的元素

arr; // (5) ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// 只删除，不添加
arr.splice(2, 2); // (2) ['Google', 'Facebook']
arr; // (3) ['Microsoft', 'Apple', 'Oracle']

// 只添加，不删除
arr.splice(2, 0, 'Google', 'Facebook'); // []
arr; // (5) ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array。
var arr = ['A', 'B', 'C']; // undefined
var added = arr.concat([1, 2, 3]); // undefined
added; // (6) ['A', 'B', 'C', 1, 2, 3]
arr; // (3) ['A', 'B', 'C']

// concat()方法可以接受任意个元素和Array，并且自动把Array拆开，然后全部添加到一个新返回的Array里
var arr = ['A', 'B', 'C']; // undefined
arr.concat(1, 2, [3, 4]); // (7) ['A', 'B', 'C', 1, 2, 3, 4]

// join() 方法是一个非常实用的方法，它把目前Array的每个元素都用指定的字符串连接起来，
// 然后返回连接后的字符串:
// 如果Array的元素不是字符串，将自动转换为字符串后再连接
var arr = ['A', 'B', 'C', 1, 2, 3]; // undefined
arr; // (6) ['A', 'B', 'C', 1, 2, 3]
arr.join('-'); // 'A-B-C-1-2-3'

// 多维数组
// 如果数组的某个元素又是一个Array()，则可以形成多维数组：
var arr= [[1, 2, 3], [400, 500, 600], '=']; // undefined
arr;
// (3) [Array(3), Array(3), '=']
    // 0: (3) [1, 2, 3]
    // 1: (3) [400, 500, 600]
    // 2: "="
    // length: 3
    // [[Prototype]]: Array(0)

// 练习：如何通过索引取到500这个值：
'use strict';
var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x = arr[1][1]; // 数组的元素可以通过索引来访问。请注意，索引的起始值为0：
console.log(x); // x应该为500

// 小结
// Array提供了一种顺序存储一组元素的功能，并可以按索引来读写。
// 练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：

'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];
arr.sort(); // 默认排序
var name0 = arr[0];
var name1 = arr[1];
var name2 = arr[2];
var name3 = arr[3];
var message = `欢迎${name0}，${name1}，${name2}和${name3}同学！`;
console.log(message);
// 欢迎大军，小明，小红和阿黄同学！
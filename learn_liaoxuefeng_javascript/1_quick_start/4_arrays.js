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



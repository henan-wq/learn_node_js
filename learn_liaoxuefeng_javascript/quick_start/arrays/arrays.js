// JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
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
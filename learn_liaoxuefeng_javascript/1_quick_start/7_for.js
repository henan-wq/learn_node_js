// 循环
// 计算1+2+3，我们可以写表达式：
// 重复运算的话，可以：
var x = 0;
var i;
for (i=1; i<=10000; i++) {
    x = x + i;
}
x; // 50005000

// i=1是初始条件，将变量i置为1；
// i<=10000这是判断条件，满足时就继续循环，不满足时就推出循环；
// i++这是每次循环后的递增条件，由于每次循环后变量i都会加1，因此它终将在若干次循环后不满足判断条件i<=10000而退出循环。

/* 练习
利用for循环计算1 * 2 * 3 * ... * 10 的结果：*/
'use strict';
var x = 1;
var i;
for (i=2; i<11; i++) {
    x = x * i;
}

if (x === 3628800) {
    console.log('1 x 2 x 3 x ... x 10 = ' + x);
}
else {
    console.log('计算错误');
}

// for循环最常用的地方是利用索引来遍历数组：
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}
/*
输出如下：
Apple
Google
Microsoft
*/

//for循环的3个条件都是可以省略的，如果没有推出循环的判断条件，就必须用break语句推出循环，否则就是死循环：
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
x; // 101


/* for ... in
for 循环的一个变体是for ... in 循环，它可以把一个对象的所有属性依次循环出来：
*/
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) { // 还不清楚这个key为什么有这个作用，先跳过
    console.log(key);
}
/* 输出如下：
name
age
city
*/

// 过略掉对象继承的属性，用hasOwnPoperty()来实现：
var o = {
    name: 'Jack',
    age:20,
    ciy: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}

/* 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，
for ... in循环可以直接循环出Array的索引：
*/
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
// 注意：for ... in 对 Array 的循环得到的是String而不是Number

// while
// for 循环在已知循环的初始和结束条件时非常有用，上述忽略了条件的for循环容易让人
// 看不清循环的逻辑，此时用while循环更佳。

/*while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。
比如计算100以内所有奇数之和，可以用while：*/
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500


/*do while
最后一种循环是do { ... } while()循环，它和while循环唯一的区别是，不是在每次
循环开始的时候判断条件，而是在每次循环完成的时候判断条件：*/
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100

/*练习
请利用循环遍历数组中的每个名字，并显示Hello, xxx!
*/
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

// 省略for循环的条件，用if判断来退出循环：
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
var i, x;
i = 0;
for (;;) {
    if (i>=arr.length) {
        break;
    }
    x = arr[i];
    console.log(x);
    i ++;
}

//for ... in的写法：
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
for (var i in arr) {
    console.log(arr[i]);
}

// while写法：
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i = i + 1;
}

// do ... while解法：
'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
var n = 0;
do {
    console.log(arr[n]);
    n = n + 1;
} while (n < arr.length);
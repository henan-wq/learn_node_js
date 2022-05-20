// JavaScript使用if () { ... } else { ... }来进行条件判断。例如根据年龄显示不同内容，可以用if：
var age = 20;
if (age >= 18) { // 如果age >= 18为true，则执行if语句块
    alert('adult');
} else { // 否则执行else语句块
    alert('teenager');
}

// else是可选的，如果语句块只包含一条语句，那么可以省略{}：
var age = 20;
if (age >= 18)
    alert('adult');
else
    alert('teenager');

// 省略{}的危险：如果后来想要添加一些语句，却忘了{}，就改变了if...else...的语义：
var age = 20;
if (age >= 18)
    alert('adult');
else
    console.log('age < 18'); // 添加一行日志
    alert('teenager'); // <- 这行语句已经不在else的控制范围

// 有{}就不会出错：
var age = 20;
if (age >= 18) {
    alert('adult');
} else {
    console.log('age < 18');
    alert('teenager');
}

// 多行条件判断
// 如果还要更细致地判断条件，可以使用多个if...else...的组合：
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}

// 上述多个if...else...的组合实际上相当于两层if...else...：
var age = 3;
if (age >= 18) {
    alert('alert');
} else {
    if (age >= 6) {
        alert('teenager');
    } else {
        alert('kid');
    }
}

// 但是我们通常把else if连写在一起，来增加可读性。

// if...else...的语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了。

// 试解释为什么下面的代码显示的是teenager：
'use strict';
var age = 20;
if (age >= 6) {
    console.log('teenager');
} else if (age >= 18) {
    console.log('adult');
} else {
    console.log('kid');
}
// 因为第一个if条件(age >= 6)成立，后续就不再判断

// 请修复上述语句后让其显示adult：
'use strict';
var age = 20;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}

// 如果if的条件判断语句结果不是true或false怎么办？例如：
var s = '123';
if (s.length) { // 条件计算结果为3
    //
}

// JavaScript把null undefined 0 NaN 和空字符串'' 视为false，其他值一概视为true，因此上述代码条件判断的结果是true。

/* 练习
小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：
低于18.5：过轻
18.5-25：正常
25-28：过重
28-32：肥胖
高于32：严重肥胖 
用if...else...判断并显示结果：*/
'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log('过轻');
} else if (bmi < 25) {
    console.log('正常');
} else if (bmi < 28) {
    console.log('过重');
} else if (bmi < 32) {
    console.log('肥胖');
} else {
    console.log('严重肥胖');
}
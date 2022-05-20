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
// JavaScript的对象是一种无序的集合数据类型。
// 若干键值对组成JavaScript的对象。
var xiaoming = { // 用{...}表示一个对象。
    name: '小明', // 键值对以xxx: xxx形式申明，用“,”隔开。
    birth: 1990, // 申明了birth属性，值是1990
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null // 最后一个键值对不需要在末尾加“,”，防止在低版本的IE浏览器会报错。
};

// 通过变量xiaoming来获取小明的属性：
xiaoming.name; // '小明'
xiaoming.birth; // 1990


// 访问属性是通过.操作符完成的，这要求属性名必须是一个有效的变量名。
// 如果属性名包括特殊字符，就必须使用''括起来：
// 属性名尽量使用标准的变量名，这样就可以用object.prop的形式访问一个属性。
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School' // middle-shcool不是一个有效的变量名，含有特殊符号。所以我们用''括起来。
};

xiaohong.name; // '小红' （这是简洁的方法）
xiaohong['name']; // '小红' （用方括号和单引号也能访问 不包括特殊字符的属性）
xiaohong['middle-school']; // 'No.1 Middle School' （对于属性名包括特殊字符的前提，这是唯一的方法）

// JavaScript对象所有的属性都是字符串，不过属性对应的值可以是任意数据类型。

// 访问一个不存在的属性不会报错，而是返回undefined：
'user strict';

var xiaoming = {
    name: '小明'
};
console.log(xiaoming.name); // 小明
console.log (xiaoming.age); // undefined

// JavaScript是动态语言，可以自由地给一个对象添加或删除属性：
var xiaoming = {
    name: '小明'
};
xiaoming.age; // 
xiaoming.age = 18; // 18
xiaoming.age; // 18
delete xiaoming.age; // true
xiaoming.age; // undefined
delete xiaoming['name']; // true
xiaoming.name; // undefined
delete xiaoming.school; // true
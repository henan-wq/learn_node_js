// 函数定义和调用

// --------------------------------------------------

// 函数定义的方式：
function abs(x) { // function指出这是一个函数定义，abs是函数的名称；
                  // (x)是函数的参数，多个参数以,分隔；
                  // { ... } 之间的代码是函数体，可以包含若干语句，甚
                  // 至可以没有任何语句。
    if (x >= 0) {
        return x; // 函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，
                  // 并将结果返回。
    } else {
        return -x;
    }
}

/*
由于JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，
而函数名abs可以视为指向该函数的变量。

因此第二种定义函数的方式如下：
*/
var abs = function (x) { // 在这种方式下，“function (x) { ... }”是一个匿名函数，
                         // 它没有函数名。但是这个匿名函数赋值给了变量“abs”，
                         // 所以通过变量“abs”就可以调用该函数。
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}; // 第二种方式按照完整语法需要在函数体末尾加一个“;”，表示赋值语句结束。

// 上述两种定义完全等价。

// --------------------------------------------------

/*
函数调用

调用函数时候，按顺序传入参数即可：
*/
abs(10); // 返回10
abs(-9); // 返回9

/*
JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，
虽然函数内部并不需要这些参数：
*/
abs(10, 'hello'); // 返回10
abs(-9, 'thank', 'bye'); // 返回9

/* 传入的参数比定义的少也没有问题：*/
abs(); // 返回NaN
/* 此时“abs(x)”函数的参数“x”将收到“undefined”，计算结果为NaN。

要避免收到“undefined”，可以对参数进行检查： */
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// --------------------------------------------------

/* arguments
JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，
并且永远指向当前函数的调用者传入的所有参数。
arguments类似Array，但是它不是一个Array。
*/
'use strict'
function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i +' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
/*
x = 10
arg 0 = 10
arg 1 = 20
arg 2 = 30
*/

/*
利用arguments，可以获得调用者传入的所有参数。
即使函数不定义任何参数，还是可以拿到参数的值：
*/
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9


/* 实际上，arguments最常用于判断传入参数的个数。
你可能看到这样的写法： */
// foo(a[, b], c)
// 接受2~3个参数，b是可选参数，如果只传2个参数，b默认为null；
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // 把b变为默认值
    }
    // ...
}
/* 
要把中间的参数b变为“可选”参数，就只能直通arguments判断，然后重新
调整参数并赋值
*/

// --------------------------------------------------

/*
rest参数
由于JavaScript函数允许接受任意个参数，于是我们就不得不用arguments来获取所有参数：
*/
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ')
}
"use strict";
//函数的定义
//   函数声明
function run() {
    return "123";
}
// 匿名函数
var fun2 = function () {
    return 123;
};
fun2(); //调用方法
// alert(fun2())
//定义方法传参
/*function getInfo(name: string, age: number): string {
    return `${name}----${age}`
}*/
//匿名函数
var getInfo = function (name, age) {
    return name + "----" + age;
};
console.log(getInfo("zhangsan", 29));
//没有返回值
function run1() {
    console.log(123);
}
//可选参数
/**
 * var getInfo = function(name:string,age?:number):string{  此时age可传可不传
    return `${name}----${age}`
}
getInfo("123")
getInfo("123",12)


注意 :可选参数必须配置到参数最后边
 */
//剩余参数
/*
function total(a:number,b:number,c:number):number{
    return a+b+c
}
*/
function total() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(total(1, 2, 3, 4, 5));
function getInfos(name, age) {
    if (age) {
        return "\u540D\u5B57" + name + ",\u5E74\u9F84" + age;
    }
    else {
        return "\u540D\u5B57" + name;
    }
}
console.log(getInfos("张三"));
console.log(getInfos("张三", 20));
// console.log(getInfos(20)) 错误写法

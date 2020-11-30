/**
 * 接口的作用:在面向对象编程中,接口是一种规范定义.它定义了行为和动作规范.在程序设计里面 接口起到一种限制和规范的作用.
 * 接口定义了某一批类所需要的遵守的规范,接口不关心这些类内部的状态数据,也不关心这些类里方法的实现细节,他只规定这些类必须提供某些方法,提供这些方法的类满足某些需要
 */
// interface定义接口
// interface Names {
//     name1: string,
//     name2: string
// }
// function getName(name: Names) {//规定了name的参数必须包含name1和name2
//     console.log(name.name1 + name.name2)
// }
// function getInfo(name: Names) {//规定了name的参数必须包含name1和name2
//     console.log(name.name1 + name.name2 )
//     // console.log(name.name1 + name.name2 +name.age)//此时调用age属性会报错 在上下文中找不到age属性
// }
// // getName({
// //     name1:"张",
// //     name2:'三',
// //     age:20   //直接传入对象会报错 这样只能传入所规定的属性
// // })
// let obj = {
//     name1: "张",
//     name2: '三',
//     age: 20
// }
// getName(obj) //此时不会报错



//接口可选属性
interface Info{
    name:string,
    age?:number,//和函数可选属性一样 加?
}
function getInfo(info:Info):void{
    console.log(info.name+"年龄"+info.age)
}
let obj = {
    name:"张三",
    age:20
}
getInfo(obj)
let obj1={
    name:"张三"
}
getInfo(obj1)
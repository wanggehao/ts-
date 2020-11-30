//函数的定义
//   函数声明
function run(): string { //函数需要声明返回值类型 切返回类型必须一致
    return "123"
}
// 匿名函数
var fun2 = function (): number {
    return 123
}
fun2()//调用方法
// alert(fun2())


//定义方法传参

/*function getInfo(name: string, age: number): string {
    return `${name}----${age}`
}*/
//匿名函数
var getInfo = function (name: string, age: number): string {
    return `${name}----${age}`
}

console.log(getInfo("zhangsan", 29))
//没有返回值
function run1(): void {
    console.log(123)
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
 function total(...result:number[]):number{
     let sum = 0
     for(var i = 0;i < result.length;i++){
         sum += result[i]
     }
     return sum
 }

 console.log(total(1,2,3,4,5))

 //函数重载
    /* 参数不一样
    function getInfos(name:string):string
    function getInfos(age:number):string
    function getInfos(str:any):any{
        if(typeof str === "string"){
            return `我叫${str}`
        }else{
            return `我年龄是${str}`
        }
    }
    console.log(getInfos("zhangsan"))
    console.log(getInfos(20))
    //  console.log(getInfos("zhangsan",20)) 错误写法
    //  console.log(getInfos(false)) 错误写法
    */
   


    // 参数一样
    function getInfos(name:string):string
    function getInfos(name:string,age:number):string
    function getInfos(name:string,age?:number):string{
        if(age){
            return `名字${name},年龄${age}`
        }else{
            return `名字${name}`
        }
    }
    console.log(getInfos("张三"))
    console.log(getInfos("张三",20))
    // console.log(getInfos(20)) 错误写法

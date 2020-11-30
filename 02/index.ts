// 类
// 类的创建
/*
class Porson{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    getInfo():void{
        alert(`我叫${this.name},我的年龄${this.age}`)
    }
}*/

// 2.类的继承 类的继承需要用到extends super两个关键字
// class Porson{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     getInfo():void{
//         alert(`我叫${this.name},我的年龄${this.age}`)
//     }
// }

// class Child extends Porson{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
//     sing():void{ //继承的子类可以有自己的方法
//         alert(`我叫${this.name},我在唱歌`)
//     }
// }
// let c = new Child("张三",20)
// c.sing()
// c.getInfo()

//3.修饰符
/**
 * public公有 表示类和子类和类的外部都可以访问到的属性 不写修饰符默认为public
 * protected 保护类型 可以在类和子类中访问 类的外部无法访问
 * pirvate 私有类型 只能在类中访问  子类和外部类无法访问
 */
/***
 * public公有 表示类和子类和类的外部都可以访问到的属性 不写修饰符默认为public
 */

// class Porson{
//     public name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     getInfo():void{
//         alert(`我叫${this.name},我的年龄${this.age}`) //内部访问
//     }
// }
// class Child extends Porson{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
// }

// let c = new Child("张三",20)
// console.log(c.name) //可以打印 子类访问

// let p = new Porson("李四",25)
// console.log(p.name)//可以打印 外部访问
/**
 * protected 保护类型 可以在类和子类中访问 类的外部无法访问
 */
// class Porson{
//     public name:string
//     protected age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     getInfo():void{
//         alert(`我叫${this.name},我的年龄${this.age}`) //内部访问
//     }
// }
// class Child extends Porson{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
//     getAge():string{
//         return `我的年龄是${this.age}`//子类访问
//     }
// }
// let p = new Porson("李四",22)
// // console.log(p.age) //外部访问编译报错 但是可以转换成es代码
// let c = new Child("张三",26)
// alert(c.getAge());

//private 私有 只能在类的内部访问 子类和外部类不可访问
/* class Porson {
     private name: string
     protected age: number
     constructor(name: string, age: number) {
         this.name = name
         this.age = age
     }
     getInfo(): void {
         alert(`我叫${this.name},我的年龄${this.age}`) //内部访问
     }
 }
 class Child extends Porson{
     constructor(name:string,age:number){
         super(name,age)
     }
     // getInfo():void{
     //     console.log(this.name) //编译报错
     // }
 }
 let p = new Porson('张三',23)
 // console.log(p.name) //编译报错
 */

// 静态属性和静态方法
//   class Porson {
//       name:string;
//       static age:number = 20; //通过static定义静态属性和方法
//       constructor(name:string,){
//           this.name = name
//       }
//       run():void{
//           alert(`${this.name}在跑步`)
//       }
//       static getAge(){
//           alert(`我的年龄是${Porson.age}`)//静态属性的使用
//       }
//   }
//   let p = new Porson("张三")
// //   p.getAge() //报错
//   Porson.getAge()//静态方法直接调用

// 多态 :父类定义一个方法不实现 让继承这个父类的子类去实现 每一个子类都有不同的表现
    /**
     * class Animal{
        name:String;
        constructor(name:string){
            this.name = name;
        }
        eat(){
            console.log('吃的方法')
        }
    }
    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }
        eat(){
            alert(`${this.name}吃狗粮`)
        }
    }
    let dog = new Dog("大黄")
    dog.eat()
    class Cat extends Animal{
        constructor(name:string){
            super(name)
        }
        eat(){
            alert(`${this.name}吃鱼`)
        }
    }
    let cat = new Cat('小猫')
    cat.eat()
    */
//抽象类 :为他的继承类提供一个基类 不可被实例化
//abstract关键字定义抽象类 和抽象方法 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象方法只能放在抽象类里边
// 定义标准:在抽象类 Animal中定义标准eat方法必须要有
abstract class Animal {
    name:string
    constructor(name:string) {
        this.name = name
    }
    abstract eat():any;
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        alert(`${this.name}在吃狗粮`)
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        alert(`${this.name}在吃鱼`)
    }
}



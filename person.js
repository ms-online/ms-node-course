// 创建自定义的模块
// const person = {
//     name: 'Summer',
//     age: 25
// }

// module.exports = person;

// 创建person类

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;

// module wrapper function 模块包装函数
// (function(exprots, require, module, __filename, __dirname){

// })

console.log(__filename,__dirname);
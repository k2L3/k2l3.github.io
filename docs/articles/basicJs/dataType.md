# 语法与数据类型

## 声明

### var

**声明一个变量，可选初始化一个值。**

```javascript
var name = '张三'; 
name = "李四";
```

由var声明的变量都会提升到当前[作用域]()的最前端，var声明变量的过程分为两步，一步是执行左边语法声明了一个变量名，在调用到这个变量时在赋值，例：

```javascript
console.log(name); // ReferenceError: name is not defined
```

```javascript
console.log(name); // undefined
var name = "张三"
console.log(name); // 张三
```

```javascript
function test() {
    var a = 1;
    console.log(a) // 1
}
test()
console.log(a) // ReferenceError: a is not defined
```

### let

**声明一个块作用域的局部变量，可选初始化一个值。**

```javascript
let name = '张三'; 
name = "李四";
```

### const

**声明一个块作用域的只读常量。**

**用const声明的基础类型常量不可修改，复杂类型常量，可修改其属性。**

```javascript
const name = "张三";
name = "李四" // TypeError: Assignment to constant variable.
const person = { name: '张三', age: 18, sex: '男' }; 
person.age = 19; console.log(person); // { name: '张三', age: 19, sex: '男' }
```

# 数据类型

**描述：在js种一共有8种数据类型，其中有7种基础类型，一种复杂类型；**

## 基础类型

### Number

### String

### Boolean

### Null

### Undefined

### Bigint

### Symbol

## 复杂类型

### Object

# 语法与数据类型

## 声明

### var

**声明一个变量，可选初始化一个值。**

```javascript
var name = '张三'; 
name = "李四";
```

由var声明的变量都会提升到当前作用域的最前端，var声明变量的过程分为两步，一步是执行左边语法声明了一个变量名，在调用到这个变量时在赋值，例：

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

**let和const 与var相比不具有声明提前的功能，但是有创建块级作用域的作用**

```javascript
console.log(age) // undefiend
var age = 18

console.log(name) // ReferenceError: Cannot access 'name' before initialization
let name = "张三"
```

```javascript
// 微任务先执行，宏任务后执行；就是每一次i++执行完后，再执行setTimeout中的函数，然后因为var是声明到全局的，所以会被修改；
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i) // 5 5 5 5 5
    })
}
console.log(i) // 5

// let 创建了一块块级作用域，就是在作用域外是访问不到其内部的，这里理解为只有在当前循环是能访问到j的，下一个循环的j并不是上一次的j；
for (let j= 0; j < 5; j++) {
    setTimeout(() => {
        console.log(j) 0 1 2 3 4
    })
}
console.log(j) // ReferenceError: Cannot access 'j' before initialization
```

# 数据类型

**描述：在js种一共有8种数据类型，其中有7种基础类型，一种复杂类型；**

## 基础类型

### Number

数字，整数与浮点数，例1与1.0。

### String

字符串，字符串是一串表示文本值的字符序列，例如："Howdy" 。

#### 常用方法

以下只列举常用方法，详情请看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)

*   **slice**

    提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

    两个参数，开始索引从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 `strLength + beginIndex` 看待，这里的`strLength` 是字符串的长度（例如，如果 `beginIndex` 是 -3 则看作是：`strLength - 3`）

    结尾索引 ，可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，`slice()` 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度 (例如，如果 endIndex 是 -3，则是，strLength - 3)，当索引大于字符串长度时会默认取到末尾。

    ```javascript
    let str1 = "123abc";
    let str2 = str.slice(1); // 23abc
    let str3 = str.slice(1, 3); // 23
    let str4 = str.slice(1, -1); // 23ab
    let str5 = str.slice(-1); // c
    let str2 = str.slice(-2, -1); // b
    str.slice(0, 10) // 123abc
    ```

<!---->

*   **substring**

    返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集，不改变原字符串。

    两个参数，第一个为开始索引必传，第二个为结束索引非必传，不传时默认为截取到末尾。

    ```javascript
    let str1 = "123abc";
    let str2 = str.substring(1, 2); // 2
    let str3 = str.substring(1); // 23abc
    ```

<!---->

*   **replace**

    替换字符串中符合规则的子字符串，返回替换后的新字符串，不改变原字符串。

    有两个参数，第一个为替换目标 可以是正则表达式或字符串；第二个参数为替换结果， 可以字符串或函数。

    ```javascript
    let str1 = "123abc";
    let str2 = str.replace(/[a-zA-Z]/g, ''); // 123
    let str3 = str.replace(/[a-zA-Z]/g, (match, p1, string) => {
        return match.toUpperCase();
    }) // 123ABC
    ```

<!---->

*   **split**

    返回一个由在出现子字符串 `sep` 时拆分调用的字符串然后填充的字符串数组，不改变源字符串。

    ```javascript
    let str = "这是一段字符串";
    str.split('') // [ '1', '2', '3', '4', '5', '6' ]
    str.split('3') // [ '12', '456' ]
    str.split('7') // [ '123456' ]
    ```

<!---->

*   **includes**

    字符串中是否包含某个字符，返回布尔值。

    ```javascript
    let str = "这是一段字符串";
    str.includes('一') // true
    ```

### Boolean

布尔值，有 2 个值分别是：`true` 和 `false`。。

### null

一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 `null` 与 `Null`、`NULL`或变体完全不同。

### undefined

和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。

### Bigint

任意精度的整数，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。

```javascript
// 两种定义方式
let n1 = 10n;
let n2 = BigInt(10);
```

### Symbol

ECMAScript 6 中新添加的类型, 一种实例是唯一且不可改变的数据类型。

```javascript
const id1 = Symbol(1);
const id2 = Symbol(1);
console.log(id1 === id2) // false

let gender = Symbol();
let person = {
    name: '张三',
    age: 12,
    [gender]: 'male'
}

for (let key in person) {
    console.log(key)   // name age
 }
Object.keys(person) // [ 'name', 'age' ]
Object.getOwnPropertyNames(person) // [ 'name', 'age' ]
// 使用Object的API
Object.getOwnPropertySymbols(person) // [ Symbol() ]
// 使用新增的反射API
Reflect.ownKeys(person) // [ 'name', 'age', Symbol() ]
```

### 类型转换

以下并不是所有方法，只是常用方法。

#### 字符串转为Number类型

```javascript
let str = ''
let n1 = Number(str);
let n2 = str / 1;
let n3 = +str;
```

#### 转成字符串

```javascript
let n = 1
let str1 = n + '';
let str2 = String(n);
// toFixed是Number保留小数点的方法，但是会被转成字符串
let str3 = n.toFixed(2) // "1.00"
```

## 复杂类型

### Object

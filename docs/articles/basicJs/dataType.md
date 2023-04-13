# 前言

**经过思考过于基础的内容没有再详细写，写博文主要原因是想巩固基础和学习更多知识，也就是进阶，所以算是我的学习路径，写了一点之后发现过于基础的内容没太大必要写出来，还是读官方文档比较好，基础后续就记录常用的或者容易遗忘的内容，以及一些小技巧吧。**

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

*   **substring**

    返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集，不改变原字符串。

    两个参数，第一个为开始索引必传，第二个为结束索引非必传，不传时默认为截取到末尾。

    ```javascript
    let str1 = "123abc";
    let str2 = str.substring(1, 2); // 2
    let str3 = str.substring(1); // 23abc
    ```

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

*   **split**

    返回一个由在出现子字符串 `sep` 时拆分调用的字符串然后填充的字符串数组，不改变源字符串。

    ```javascript
    let str = "这是一段字符串";
    str.split('') // [ '1', '2', '3', '4', '5', '6' ]
    str.split('3') // [ '12', '456' ]
    str.split('7') // [ '123456' ]
    ```

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

tips：因为精度问题，小数计算时容易丢失精度。

常用解决方法转成整数，计算后再转成小数

```javascript
let n1 = 1
let n2 = 0.8
console.log(n1 - n2) // 0.19999999999999996
let n3 = ( n1 * 10 - n2 * 10) / 10 // 0.2
```

当数据过大，或者小数点后面位数太多时，不是很适用，所以我们可以先转成字符串再截取小数点来进行计算。亦或者适用tofixed等来进行保留小数位数。

```javascript
function floatAdd(n1, n2) {
    try {
        let _n1 = typeof n1 === 'number' ? n1.toString() : n1;
        let _n2 = typeof n2 === 'number' ? n2.toString() : n2;
        let r1 = _n1.split(".")[1]?.length || 0;
        let r2 = _n2.split(".")[1]?.length || 0;
        let n = Math.pow(10, Math.max(r1, r2)); // Math.pow(x, y)求x的y次方
        return (n1 * n + n2 * n) / n;
    } catch (error) {
        console.log(error)
    }
}
```

## 复杂类型

复杂类型与简单类型相比，复杂类型值存在堆中，将指向堆的地址存在栈中，声明时只是引用了栈中的数据也就是堆的地址。简单类型存在栈中。

### Object

对象类型，在 JavaScript 中，对象使用频繁，很多场景都能运用到对象，例如值的定义

```javascript
// 完全等价
let num = new Number(1);
let num = 1
```

#### 对象的创建

```javascript
let obj = new Object();
let obj1 = new Object({ a: '属性a' });
let boy = { 
	name: '张三',
	age: 8
}
```

#### 获取属性

```javascript
let boy = { 
	name: '张三',
	age: 8
}
console.log(boy.age) // 8

let key = 'age'
console.log(boy[key]) // 8

for (const key in boy) {
    let value = boy[key]
    console.log(key, value) // name '张三' age 8
}
Object.entries(boy); // [['name','张三'], ['age',8]] 将对象转成二维数组
Object.values(boy); // ['张三', 8] 将对象的值转成数组
Object.keys(boy); // ["name", "age"] 将对象的key转成数组
Object.fromEntries(arr) //将二维数组转成对象
```

#### 修改属性

```javascript
boy.age = 9;
// 当对象中不存在某个属性时，调用这个属性结果为undefined
console.log(boy.a) // undefined
// 给对象不存在的属性赋值时，不用事先声明，可直接赋值
boy.grade = '小学'
console.log(boy) // { name: '张三', age: 9, grade: '小学' }
```

其他

```javascript
// toString常用来判断类型
Object.prototype.toString({}) // [object Object]
// Object.defineProperty() vue2中响应式核心，接收三个参数 对象、对象中的属性、要定义或修改的属性描述符；
let person = {
    name: "张三",
    age: 1
}
let age = 1;
Object.defineProperty(person, "age", {
    // value: age,
    // configurable: false, // 是否可以通过 delete 操作符删除该属性
    // enumerable: false, // 循环的时候, 是否可以被枚举出来
    // writable: false, // 是否可以使用 ++, -- 等操作符
    get() {
        console.log("触发了get")
        return age
    },
    set(newValue) {
        if(age !== newValue) age = newValue;
    }
})

person.age = 2;
console.log(person.age)
console.log(age)
// 触发了get
// 2
// 2
```

### Array

数组

#### 定义

```javascript
let arr = [];
let arr = new Array();
```

#### 常用方法

数组的方法都算比较常用的，写一下在什么时候使用什么api吧

```javascript
let arr = [1, 2, 3, 4];

// 删除首位元素并返回被删除的元素，会改变原数组
arr.shift();

// 在首位插入元素，会改变原数组
arr.unshfit();

// 删除末尾元素并返回被删除的元素，会改变原数组
arr.pop();

// 在末尾插入元素
arr.push(item);

// 获取指定位置元素
arr.at(index) // at要注意浏览器兼容问题，index可以为负数，-1就是最后一位，依次类推

// 获取开始下标到结尾下标这一范围的数据，end不是必填，不填时默认取到最后一个元素
// begin 和 end 都可以为负数，如果end大于数组长度也只能取到最后一个元素
arr.slice(begin, end) 
arr.slice(0) // [1, 2, 3, 4] 
arr.slice(-1) // [4]
arr.slice(0, -1) // [1, 2, 3]
arr.slice(-2, -1) // [3]
arr.slice(0, 10) // [1, 2, 3, 4]

// 指定位置插入、删除指定元素，并以数组形式返回被修改的内容。此方法会改变原数组
arr.splice(start, deleteCount, item1, item2, itemN)
// start 开始下标必填，deleteCount 删除个数，不填删除到最后， item1... 插入的元素
arr.splice(0, 1) // [1], arr = [2, 3, 4]
arr.splice(0, 0, 1)// [], arr = [1, 2, 3, 4] 因为没有删除东西，所以返回的一个空数组

// 数组翻转，改变原数组
arr.reverse()

// 数组排序，改变原数组
arr.sort()

// 根据规则查找元素，也可用来判断元素是否存在数组中
arr.find()

// 元素是否存在数组中，一般用于由基本类型构成的数组
arr.includes()

// 筛选符合条件的数据组成新数组返回
arr.filter()

// 根据原数组返回指定数据的新数组
arr.map()

// 遍历
arr.forEach()
for, while, for in, for of

// 是否都符合某条件
arr.every()

// 是否存在符合条件的
arr.some()

// 元素相加
arr.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
// previousValue 上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
// currentValue 数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
// initialValue 初始值。

// 数组的元素连接成一个字符串
arr.join()

// 两个数组合并，不改变原数组
arr.concat();
// 利用 “...”扩展运算符;
// 例：
let arr1 = [1]
let arr2 = [2]
let arr3 = arr1.concat(arr2) // [1, 2]
arr3 = [...arr1, ...arr2] // [1, 2]
```

### Function

函数，函数时js世界的一等公民，其实我不太懂这句话的意思，可能以前上课走神了吧，我自己的感受就是，函数时开发js语言必不可少的一个类型。

#### 函数声明

function关键字， 函数名，参数（可选），大括号

```javascript
function fn(arguments) {}
```

#### 函数表达式

函数表达式可以是匿名函数（就是没有函数名的函数）

```javascript
const fn1 = function f() {};
const fn2 = function () {};
```

#### 箭头函数

箭头函数时es6的语法，省略了function关键字和函数名 新增了箭头，还有最重要的一点箭头没有this指向问题，后面模块细说

```javascript
const fn = () => {}
```

### Date

日期对象

Date 对象有大量的设置、获取和操作日期的方法。它并不含有任何属性。

JavaScript 处理日期数据类似于 Java。这两种语言有许多一样的处理日期的方法，也都是以 1970 年 1 月 1 日 00:00:00 以来的毫秒数来储存数据类型的。

Date 对象的范围是相对距离 UTC 1970 年 1 月 1 日 的前后 100,000,000 天。

*tip：我发现原生的时间对象在工作中我确实用得不多，基本都是用的[moment.js](http://momentjs.cn/)这个库。*

```javascript
let today = new Date();
```

#### Date对象的方法

Date 具体有年（从 1900 开始的年数）、月（0 (一月) 到11 (十二月)）、日、星期（0 (周日) 至 6 (周六)）、时（0 至 23）、分（0 至 59）、秒（0 至 59）这些值

[更多详细方法请看MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#javascript_date_%E5%AE%9E%E4%BE%8B)

*   get 获取 Date 对象的日期和时间的值

```javascript
// 获取年
today.getFullYear()
// 获取月
today.getMonth()
// 获取周
today.getDay()
// 获取日
today.getDate()
// 获取时
today.getHours()
// 获取分
today.getMinutes()
// 获取秒
today.getSeconds()
// 获取毫秒
today.getTime()
```

*   set 设置 Date 对象的日期和时间的值&#x20;

```javascript
let today = new Date() // 2023-04-13T07:03:08.297Z
today.setFullYear(2012)
console.log(today); // 2012-04-13T07:02:19.667Z
```

*   to 返回 Date 对象的字符串格式的值

```javascript
let date = new Date();

// 根据本地时间格式，把 Date 对象转换为字符串。
date.toLocaleString(); // 2023/4/13 15:19:33

// 把 Date 对象转换为字符串。
date.toString(); // Thu Apr 13 2023 15:17:45 GMT+0800 (中国标准时间)
```

*   parse 和 UTC 方法，用于解析 Date 字符串

```javascript
// 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
Date.parse("2023-01-02") // 1672617600000

// getUTCDate() 方法可根据世界时返回一个月 (UTC) 中的某一天。
let date = new Date("2023-04-13");
let n = date.getUTCDate(); // 13
```

### RegExp

正则表达式，用于匹配符合规则的字符串

#### 定义

有两种方式一种是用RegExp对象的构造函数，一种是双斜杠的方式

```javascript
let re = new RegExp("\\w+");
let re = /\w+/;
```

[正则规则MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E6%A8%A1%E5%BC%8F)

常用

```javascript
let str = "abcd1234";
// string的replace方法是我经常用到正则的一个地方
str.replace(/[a-z]*/, "") // 1234 替换所有字母

// 还有个就是利用 test() 判断字符串是不是邮箱之类，符合规则返回true，不符合返回false
const str = "123456@163.com";
const reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/);
const isEmail = reg.test(str); // true
```

### Math

## 其他

### Map

### Set

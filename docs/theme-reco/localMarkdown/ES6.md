## ES6进阶语法

#### let和const解决

1. var的变量穿透的问题
2. 常量修改的问题

在实际开发和生产中，如果是小程序，uniapp或者 一些脚手架中，可以大胆的使用let和const

如果在web开发，建议大家还是使用后var，因为在一些低版本的浏览器还是不支持let和const。

#### 模板字符串

动静态字符串拼接问题：

以前：

let address = **"我是"** + person.name**"，正在"**+person.address+**"讲课，讲课的内容会上传到官网:"**+person.link+**"平台"**

现在：

let address = **我是** ${person.name]**，正在**${person.address}**讲课，讲课的内容会上传到官网:**${person.link}**平台**

#### 函数默认参数

方法参数可以带值

```html
function sum(a=100,b=100) {
return a + b;
}
var result = sum(100)
clg("result = ", result)
```

#### 箭头函数——重点

1. 去掉function
2. 在括号后面加箭头
3. 如果逻辑代码仅有return可以直接省去
4. 如果参数只有一个，可以把括号省去（如果有多个参数就不能省去）

#### 对象简写

ES6简写

因为对象是key：value存在

1. 如果key和变量的名字一致，可以指定一次即可
2. 如果value是一个函数，可以把`:function`去掉，只剩下（）即可。

````js
var title = "扬子江";
var link = "www.yangzijiang.com";
let info = {
    title,
    link,
    go() {
        console.log("132131")
    }
}
info2.go
````

#### 对象解构

````js
var title = "扬子江";
var link = "www.yangzijiang.com";
let info = {
    title,
    link,
    go() {
        console.log("132131")
    }
}
````

- 通过.方式

console.log(info.title)

console.log(info.link)

info.go()

- 通过[]的方式

console.log(info["title"])

console.log(info["link"])

info["go"] ()

- es6对象解构——其实就快速获取属性和方法的一种形式

var {title，link} = info2；

var title = info2.title

vat link = info2.link

console.log(title,link);

go();

````js
var person = {
    name:"zhangsan",
    address:"广东",
    link:"www.baidu.com",
    phone:132423421312,
    go() {
        console.log("开始上班")
    }
}


var {name,address,...person2} = person;
console.log(name)
console.log(address)
//name、address赋给person
console.log(person2)
//剩下的属性都赋给person2
//在解构的过程中就创建了person2这个对象
````

### 三个点（...）扩展运算符

1. 字符串可以展开，用逗号分开的集合

   ````js
   let str = 'abc'
   console.log(...str)
   //相当于
   console.log('a','b','c')
   ````

2. 数组

   ````js
   let arr = [1,2,3]
   console.log(1,2,3)
   console.log(...arr)
   ````

   - 所有能够迭代的东西，都可以用展开运算符...进行展开
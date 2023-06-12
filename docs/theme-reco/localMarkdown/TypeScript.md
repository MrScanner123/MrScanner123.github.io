## TypeScript 

1. TypeScript(简称：TS)是JavaScript的**超集**（JS有的TS都有）

   TypeScript  = **Type** + JavaScript（在JS基础上，为JS添加了类型支持

   TypeScirpt是微软开发的开源编程语言，可以在任何运行JavaScript的地方运行。

2. TypeScript为什么要为JS添加类型支持？

   背景：JS的类型存在“先天缺陷”，JS代码绝大部分错误都是**类型**错误（Uncaught**Type**Error）

   问题：增加了找Bug、改Bug的时间，严重影响开发效率。

   配合VsCode等开发工具，TS可以**提前到编写代码的同时**，就发现代码中的错误，**减少找BUG、改BUG时间**

3. TypeScript相比JavaScript的优势

   1. 更早（写代码的同时）发现错误，**减少找Bug、改Bug时间**，提升开发效率。
   2. 程序中任何位置的代码都有**代码提示**，随时随地的安全感，增强了开发体验。
   3. 强大的**类型系统**提升了代码的可维护性，使得**重构代码更加容易**。
   4. 支持**最新的ES语法**
   5. TS**类型推断**机制，**不需要**在代码中的**每个地方都显示标注类型**。让你在享受优势的同时，尽量降低了成本。

4. TypeScript是JS的超集，TS 提供了JS 的所有功能，并且额外的增加了：类型系统。

   - 所有的JS代码都是TS代码
   - JS有类型（比如：number/string等）但是**JS不会检查变量是否发生变化**。而**TS会检查**。TypeScript类型系统的主要优势：可以**显示标记出代码的意外行为**，从而降低了发生错误的可能性。
     1. 类型注解
     2. 常用基础类型

5. 可以将TS中的常用类型细分为两类：1、JS已有类型2、TS新增类型。

   1. JS已有类型
      - 原始类型:number/string/boolean/null/undefined/symbol
      - 对象类型：object(数组、对象、函数等对象)
   2. TS新增类型
      - 联合类型：自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any等 

6. TypeScript常用类型

   数组中既有number类型，又有string类型。

   ````javascript
   let arr:(numner|string)[] =[1,2,5,'a','b']
   ````

7. 类型别名

   ````javascript
   type CustomArray = (number|string)[]
   ````

   解释：

   1. 使用**type**关键字来创建类型别名
   2. 类型别名（比如：此处的CustomArray）,可以任意合法的变量名称。
   3. 创建类型别名后，直接**使用该类型别名作为变量的类型注解**即可。
   
8. 函数类型

   函数的类型实际上指的是：函数参数和返回值的类型

   为函数指定类型的两种方式：1、单独指定参数、返回值的类型2、同时指定参数、返回值的类型。

   1、单独指定参数、返回值的类型：

   ````javascript
   function add(num1:number,num2:number):number {
       return num1 + num2
   }
   add(1,2) //传入参数符合函数类型
   ````

   2、同时指定参数、返回值的类型：

   ````javascript
   const add:(num1:number,num2:number) => number = (num1,num2) => {
       return num1 + num2
   }
   ````

   **只适用于函数表达式**

   3、如果函数没有返回值，那么返回值应该用void

   ````javas
   function greet(name:string):void {
   console.log('Hello',name)
   }
   ````

   4、使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到**可选参数**了。

   ````javascript
   function mySlice(start?:number,end?:number):void {
       console.log)('起始索引:',start,'结束索引:',end)
   }
   ````

   可选参数：在可传可不传的参数名称后面添加？（问号）

   注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数。

9. 对象类型

   JS中的对象是由属性和方法构成的，而TS中对象的类型就是在描述对象的结构（有什么类型的属性和方法）。

   对象类型的写法：

   ````javascript
   let person: {name:string;age:number;sayHI():void} = {
       name:'jack',
       age:19,
       sayHI(){}
   }
   ````

   解释：

   1、直接使用{}来描述对象结构。属性采用**属性名:类型**的形式；方法采用**方法名（）：返回值类型**的形式。

   2、如果方法有参数，就在方法名后面的小括号中指定参数类型（比如：greet（name:string）:void）

   3、在一行代码中指定对象的多个属性类型时，使用；（分号）来分隔。

   - 如果一行代码只指定一个属性类型（通过换行来分隔多个属性类型），可以去掉；
   - 方法的类型也可以使用箭头函数形式（比如：{sayHi:() =>void}）

10. 接口

    如果对象类型被多次使用时，一般会使用接口（interface）来描述对象的类型，达到复用的目的。

    解释：

    1、使用**interface**关键字来声明接口

    2、接口名称（比如：此处的IPerson），可以是任意合法的变量名称、

    3、声明接口后，**直接使用接口名称作为变量的类型**。

    4、因为每一行只有一个属性类型，因此，属性类型后没有；（分号）

    ````javascript
    interface IPerson {
        name:string
        age:number
        sayHi():void
    }
    let person:IPerson = {
        name:'jack',
        age:19,
        sayHi() {}
    }
    ````

    interface(接口)和type(类型别名)的对比：

    - 相同点：都可以给对象指定类型
    - 不同点：
      - 接口：只能为对象指定类型。
      - 类型别名：不仅可以为对象指定类型，实际上可以为任意类别指定别名

11. 元组

    元组类型是另一种类型的数组，它确切的知道包含多少个元素，以及特定索引对应的类型。

    ````javascript
    let position:[number,number] = [39.5427,116.2317]
    ````

    解释：

    1、元组类型可以确切的标记出有多少个元素，以及每个元素的类型。

    2、该示例中，元素有两个元素，每个元素的类型都是number。

    


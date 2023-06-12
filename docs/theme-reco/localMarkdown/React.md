## React

- React概述
- React的基本使用
- React的脚手架使用

### React概述

1. 什么是React？

React是一个用于**构建用户界面**的**JavaScript库**

React主要用来写HTML页面，或**构建Web应用**

2、React的特点

- 声明式
- 基于组件
- 学习一次，随处使用

1. **声明式*

   你只需要描述UI（HTML）看起来是什么样，就跟写HTML一样。

   ```javascript
   const jsx = <div className="app">
       <h1>Hello React! 动态变化数据：{count}</h1>
   </div>
   ```

2. 基于组件

   - 组件是React**最重要**的内容
   - 组件表示页面中的部分内容
   - 组合、复用多个组件，可以实现完整的页面功能

3. 学习一次，随处使用

   - 使用React可以开发Web应用
   - 使用React可以开发移动端原生应用（react-native）
   - 使用React可以开发VR应用  

### React的基本使用

1. React的安装

   - react包是核心

2. React的使用

   1. 引入react和react-dom两个js文件
   2. 创建react元素
   3. 渲染react元素到页面中

3. 方法说明

   - React.createElement()

   - ReactDOM.render()

     - 第一个参数：要渲染的react元素
     - 第二个参数：DOM对象，用于指定渲染到页面中的位置。

     ReactDOM.render(el, document.getElementById('root'))

### React脚手架

1. 脚手架是开发现代Web应用的必备
2. 充分利用Webpack、Babel、ESLint等工具辅助项目开发
3. 零配置，无需手动配置繁琐的工具既可使用
4. 关注业务，而不是工具配置。

#### react脚手架初始化项目

1. 初始化项目，命令：npx create-react-app my-app
2. 启动项目，在项目根目录执行命令：npm start

- npx命令介绍

  - npm v5.2.0引入的一条命令
  - 目的：提升包内提供的命令行工具的使用体验
  - 原来：先安装脚手架包，再使用这个包中提供的命令
  - 现在：**无需安装脚手架包**，就可以直接使用这个包提供的命令

  **补充说明**

  1、推荐使用 npx create-react-app 项目名

  2、npm init react-app 项目名

  3、yarn create react-app 项目名

### 在脚手架中使用React

````javascript
import React from 'react'
import ReactDOM from 'react-dom'
````

调用**React.createElement()**方法创建react元素

调用**ReactDOM.render()**方法渲染react元素到页面中

### React基础

1、React是构建用户界面的JavaScript库

2、使用react时，推荐使用脚手架方式

3、初始化项目命令：npx create-react-app 项目名

4、启动项目命令：yarn start（或npm start）

5、React.createElement()方法用于创建react元素

6、ReactDOM.render()方法负责渲染react元素到页面中。

## JSX的基本使用

1、create Element()的问题

- 繁琐不简洁
- 不直观
- 不优雅，用户体验不爽

### JSX简介

JSX是JavaScript XML的简写，表示在JavaScript代码中写XML（HTML）格式的代码。

优势：申明式语法更加直观、与HTML结构相同，降低了学习成本、提高了效率。

- 使用步骤：使用JSX语法，创建react 元素

const title = <h1>hello jsx</h1>

- ReactDOM.render(title,root)

渲染创建好的React元素

## 小结：

1、推荐使用JSX语法创建React元素

2、写JSX就跟写HTML一样，更加直观、友好

3、JSX语法更能体现React的声明式特点（描述UI长什么样子）

4、使用步骤：

````javascript
//1、使用jsx创建react元素
const title = <h1>hello jsx</h1>
//2、渲染react元素
ReactDOM.render(title,root)
````

## JSX的注意点

1. React元素的属性名使用驼峰命名法
2. 特殊属性名：class——>className、for——>htmlFor、tabindex——>tabIndex
3. 没有子节点的React元素可以用/>结束
4. 推荐：使用小括号包裹JSX，从而避免JS中的自动插入分号陷阱。

### JSX的条件渲染

 ````javascript
//1、导入react
import React from "react";
import ReactDOM from "react-dom";
//2、创建react元素
const title = React.createElement('h1', null, 'hello react 1!!')
//3、渲染react元素
ReactDOM.render(title, document.getElementById('root'))

/****************************************************************** */
const name = 'Jack'

const title = <h1>hello jsx {name}<span>1111</span></h1>
ReactDOM.render(title,document.getElementById('root')) 
/****************************************************************** */
/**********条件渲染**********/
const isLoading = false
const loadData = () => {
    if (isLoading) {
        return <><div>loading...</div><div /></>
    }
    return <><div>数据加载完成，此处显示加载后的数据</div></>
}
/***三元运算符 */
const isLoading = true
const loadData = () => {
    return isLoading ? (<><div>loading...</div><div /></>) : (<><div>数据加载完成，此处显示加载后的数据</div></>)
}
/*****逻辑与运算 */
const isLoading = true
const loadData = () => {
    return isLoading && (<><div>loading...</div><div /></>)
}
const title = (
    <><h1>
        条件渲染：
        {loadData()}
    </h1></>
)

ReactDOM.render(title, document.getElementById('root'))
 ````

## 列表渲染

- 如果要渲染一组数据，应该使用数据的map()方法。
- 注意：渲染列表时应该添加key属性，**key属性的值要保证唯一**
- 原则：map()遍历谁，就给谁添加key属性
- 注意：**尽量避免使用索引号作为key**

## JSX总结

- JSX是React的核心内容
- JSX表示在JS代码中写HTML结构，是React声明式的体现
- 使用JSX配合嵌入的JS表达式、条件渲染、列表渲染，可以描述任意UI结构。
- 推荐使用className的方式给JSX添加样式
- React完全利用JS语言自身的能力来编写UI，而不是造轮子增强HTML功能。

## React的组件基础

- React组件介绍
- React组件的两种创建方式
- React事件处理
- 有状态和无状态组件
- 组件中的state和setState（）
- 事件绑定this指向
- 表单处理

## React组件介绍

- 组件是React的**一等公民**，使用React就是在用组件
- 组件表示页面中的部分功能
- 组合多个组件实现完整的页面功能
- 特点：可复用、独立、可组合

### 使用函数创建组件

- 函数组件：使用JS的函数（或者箭头函数）创建的函数
- 约定1：函数名称必须以**大写字母开头**
- 约定2：函数组件**必须有返回值**，表示该组件的结构
- 如果返回值为null
- 渲染函数组件：**用函数名作为组件标签名**
- 组件标签可以是单标签也可以是双标签

````javascript
function Hello() {
    return (
    <div>这是我的第一个函数组件！</div>
  )
}
//渲染组件
ReactDOM.render(<Hello/>, document.getElementById('root'))
````

## 使用类创建的组件

- 类组件：使用ES6的class创建的组件
- 约定1：类名称也必须以**大写字母开头**
- 约定2：类组件应该继承React.Component父类，从而可以使用父类提供的方法或属性
- 约定3：类组件必须提供**render()**方法
- 约定4：render()方法**必须有返回值**，表示该组件的结构。

````javascript
/******类组件 */
//创建类组件
class Hello extends React.Component {
    render() {
        return (
            <><div>这是我的第一个函数组2件！</div></>
        )
    }
}
//渲染组件
ReactDOM.render(<Hello/>, document.getElementById('root'))
````

### 抽离为独立JS文件

1. 创建hello.js
2. 在Hello.js中导入React
3. 创建组件（函数或者类）
4. 在Hello.js中导出该组件
5. 在index.js中导入Hello组件
6. 渲染组件

### React事件处理

1. 事件绑定
   - React事件绑定语法与DOM事件语法相似
   - 语法：on+事件名称={事件处理程序}，比如：onClick={（）=>{}}
2. 事件对象


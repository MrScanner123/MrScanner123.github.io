## Vue新特性

选项API和组合API

 data、methods、computed(选项API)

##  setup函数

- setup是一个新的组件选项，作为组件中使用组合API的起点
- 从组件生命周期来看，它的执行在组件实例创建之前执行。 

###  Vite介绍

1. 基于vite创建SPA项目
2. 基于vue-cli创建SPA项目

![image-20230103133724281](/vue_newImg/new01.png)

 

#### 单文件组件的template

vue 规定：每个组件对应的模板结构，需要定义到`<template>`节点中，在vue3.x的版本中,`<template>`节点内的DOM结构支持多个根节点。

注意：`<template>`是vue 提供的容器标签，只起到包裹性质的作用，它不会被渲染为真正的DOM元素。

### 组合api-Compositon API

1. 在vue3.0项目中将会使用组合API写法
2. 代码风格:一个功能逻辑的代码组织在一起（包含数据、函数、计算属性、侦听器。。。。）
3. 优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护。
4. 缺点：需要有良好的代码组织能力和拆分逻辑能力

补充：为了能让大家较好的过渡到Vue3.0的版本来，也支持vue2.x选项API写法。

### Set up

1. set up()函数是vue3中专门为组件提供的新属性。它为我们使用vue3的新特性提供了统一的入口
2. setup函数在生命周期函数beforeCreate（组件实例创建之前）之前触发，所有无法获取一切的this，意味着setup函数中是无法使用data和methods中的数据和方法的。
3. 在setup函数中定义的属性和方法最后都是需要return出去的，这样我们就可以在模板中直接访问该对象的属性和方法。

- 定义数据

- 一定要在setup中返回

- 在模板中使用

  ![image-20230103143130214](/vue_newImg/new02.png)

- 注：这种方式定义的数据，在后期进行操作之后，模板不会自动的刷新——非响应式数据。

### 组合API——ref函数、

1. ref函数，常用于简单数据类型定义卫响应式数据、
2. 细节：在修改值，获取值的时候，需要.value

#### setup函数的参数

对于setup函数来说，它接收两个参数，分别为：

props：通过prop传递过来的所有数据（父传子），我们都可以在这里进行接收。并且获取到的数据将保持响应性。

- context：context是一个JavaScript对象，这个对象暴露了三个组件的属性，我们可以通过”解构“的方式，来分别获取这三个属性
  - attrs：它是绑定到组件中的非props数据，并且是非响应式的。
  - slots：是组件的插槽，同样也不是响应式的。
  - emit：是一个方法，相当于vue2的this.$emit方法，可用于实现**子传父**。

#### 组合API——钩子函数

1.  引入钩子函数
2. 直接调用

#### Vue-router4

vue3的项目中，只能安装并使用vue-router4.x

- 导入 createRouter、createWebHashHistory
- main.js里use插件
## VUE基础

1. JavaScript框架
2. 简化Dom操作
3. 响应式数据驱动

## 第一个vue程序

- 导入**开发版本**的vue.js
- 创建Vue实例对象，设置**el**属性和**data**属性
- 使用简洁的**模板语法**把数据渲染到页面上

## el：挂载点

```vue
<div id="app">
{{ message }}
</div>

var app = new Vue({
el:"#app",
data:{
	message:"HELLO world！"
}
})
```

Vue实例的作用范围是什么？

-  Vue会管理el选项**命中的元素**及其内部的**后代元素**

是否可以使用其他的选择器？

- 可以，标签选择器、类选择器、id选择器（**推荐使用**）

是否可以设置其他的dom元素？

- 可以使用其他的双标签，不能使用HTML和BODY

## data:数据对象

- Vue中用到的数据定义在**data**中

- data中可以写**复杂类型**的数据
- 渲染复杂类型的数据时，遵循js的**语法**即可

### watch：
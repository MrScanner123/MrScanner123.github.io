## CSS-Flex布局

- flex布局体验
- flex布局原理
- flex布局父项常见属性
- flex布局子项常见属性

#### 传统布局

1. 兼容性好
2. 布局繁琐
3. 局限性，不能在移动端很好的布局

#### flex弹性布局

1. 操作方便，布局极为简单，移动端应用很广泛
2. PC端浏览器支持情况较差

#### 布局原理

- 当我们为父盒子设为flex布局以后，子元素的float、clear和vertical-align属性将失效。
- 伸缩布局=弹性布局=flex布局

采用Flex布局的元素，称为Flex容器，简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目，简称“项目”。

- 体验中div就是flex父容器
- span就是子容器
- 子容器可以横向排列也可以纵向排列

总结flex布局原理：

就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。

#### 常见父项属性

以下由6个属性是对父元素设置的：

- flex-direction：设置主轴的方向
- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）
- align-item：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap

#### justify-content（使用之前确定主轴是哪个1）

![image-20230223140956533](/flexImg/flex01.png)

#### align-content 设置侧轴上的子元素的排列方式（多行）

![image-20230223161711445](/flexImg/flex02.png)

align-content和align-items区别

- align-items适用于单行情况下，只有上对齐、下对齐、居中和拉伸
- align-content适用于**换行**（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值
- 总结就是单行找align-items多行找align-content

#### flex-flow

- flex-direction：设置主轴的方向
- justify-content：设置主轴上的子元素排列方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素的排列方式（多行）、
- align-items：设置侧轴上的子元素排列方式（单行）
- flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap
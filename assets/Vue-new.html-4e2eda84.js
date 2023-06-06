import{_ as e,o as i,c as a,f as t}from"./app-f6785d32.js";const l="/vue_newImg/new01.png",r="/vue_newImg/new02.png",p={},o=t('<h2 id="vue新特性" tabindex="-1"><a class="header-anchor" href="#vue新特性" aria-hidden="true">#</a> Vue新特性</h2><p>选项API和组合API</p><p>data、methods、computed(选项API)</p><h2 id="setup函数" tabindex="-1"><a class="header-anchor" href="#setup函数" aria-hidden="true">#</a> setup函数</h2><ul><li>setup是一个新的组件选项，作为组件中使用组合API的起点</li><li>从组件生命周期来看，它的执行在组件实例创建之前执行。</li></ul><h3 id="vite介绍" tabindex="-1"><a class="header-anchor" href="#vite介绍" aria-hidden="true">#</a> Vite介绍</h3><ol><li>基于vite创建SPA项目</li><li>基于vue-cli创建SPA项目</li></ol><p><img src="'+l+'" alt="image-20230103133724281"></p><h4 id="单文件组件的template" tabindex="-1"><a class="header-anchor" href="#单文件组件的template" aria-hidden="true">#</a> 单文件组件的template</h4><p>vue 规定：每个组件对应的模板结构，需要定义到<code>&lt;template&gt;</code>节点中，在vue3.x的版本中,<code>&lt;template&gt;</code>节点内的DOM结构支持多个根节点。</p><p>注意：<code>&lt;template&gt;</code>是vue 提供的容器标签，只起到包裹性质的作用，它不会被渲染为真正的DOM元素。</p><h3 id="组合api-compositon-api" tabindex="-1"><a class="header-anchor" href="#组合api-compositon-api" aria-hidden="true">#</a> 组合api-Compositon API</h3><ol><li>在vue3.0项目中将会使用组合API写法</li><li>代码风格:一个功能逻辑的代码组织在一起（包含数据、函数、计算属性、侦听器。。。。）</li><li>优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护。</li><li>缺点：需要有良好的代码组织能力和拆分逻辑能力</li></ol><p>补充：为了能让大家较好的过渡到Vue3.0的版本来，也支持vue2.x选项API写法。</p><h3 id="set-up" tabindex="-1"><a class="header-anchor" href="#set-up" aria-hidden="true">#</a> Set up</h3><ol><li>set up()函数是vue3中专门为组件提供的新属性。它为我们使用vue3的新特性提供了统一的入口</li><li>setup函数在生命周期函数beforeCreate（组件实例创建之前）之前触发，所有无法获取一切的this，意味着setup函数中是无法使用data和methods中的数据和方法的。</li><li>在setup函数中定义的属性和方法最后都是需要return出去的，这样我们就可以在模板中直接访问该对象的属性和方法。</li></ol><ul><li><p>定义数据</p></li><li><p>一定要在setup中返回</p></li><li><p>在模板中使用</p><p><img src="'+r+'" alt="image-20230103143130214"></p></li><li><p>注：这种方式定义的数据，在后期进行操作之后，模板不会自动的刷新——非响应式数据。</p></li></ul><h3 id="组合api——ref函数、" tabindex="-1"><a class="header-anchor" href="#组合api——ref函数、" aria-hidden="true">#</a> 组合API——ref函数、</h3><ol><li>ref函数，常用于简单数据类型定义卫响应式数据、</li><li>细节：在修改值，获取值的时候，需要.value</li></ol><h4 id="setup函数的参数" tabindex="-1"><a class="header-anchor" href="#setup函数的参数" aria-hidden="true">#</a> setup函数的参数</h4><p>对于setup函数来说，它接收两个参数，分别为：</p><p>props：通过prop传递过来的所有数据（父传子），我们都可以在这里进行接收。并且获取到的数据将保持响应性。</p><ul><li>context：context是一个JavaScript对象，这个对象暴露了三个组件的属性，我们可以通过”解构“的方式，来分别获取这三个属性 <ul><li>attrs：它是绑定到组件中的非props数据，并且是非响应式的。</li><li>slots：是组件的插槽，同样也不是响应式的。</li><li>emit：是一个方法，相当于vue2的this.$emit方法，可用于实现<strong>子传父</strong>。</li></ul></li></ul><h4 id="组合api——钩子函数" tabindex="-1"><a class="header-anchor" href="#组合api——钩子函数" aria-hidden="true">#</a> 组合API——钩子函数</h4><ol><li>引入钩子函数</li><li>直接调用</li></ol><h4 id="vue-router4" tabindex="-1"><a class="header-anchor" href="#vue-router4" aria-hidden="true">#</a> Vue-router4</h4><p>vue3的项目中，只能安装并使用vue-router4.x</p><ul><li>导入 createRouter、createWebHashHistory</li><li>main.js里use插件</li></ul>',28),s=[o];function u(h,d){return i(),a("div",null,s)}const c=e(p,[["render",u],["__file","Vue-new.html.vue"]]);export{c as default};

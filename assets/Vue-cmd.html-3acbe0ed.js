import{_ as l,o as e,c as i,b as n,t,f as s,d as a}from"./app-28f5d3d5.js";const o={},p=s(`<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h1 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令" aria-hidden="true">#</a> <strong>Vue指令</strong></h1><ul><li>通过Vue实现常见的网页效果</li><li>学习<strong>Vue指令</strong>，以案例巩固知识点</li><li>Vue指令指的是，以V-开头的一组特殊语法</li></ul><h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text" aria-hidden="true">#</a> v-text</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span>  <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message + &#39;!&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>深圳{{ message }} + &#39;!&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
var app = new Vue({
el:&quot;#app&quot;,
data:{
	message:&quot;HELLO world！&quot;
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=n("li",null,"v-text指令的作用是：设置标签的内容（textContent）",-1),u=n("li",null,"内部支持写表达式",-1),r=s(`<h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h3><p>设置成标签innerHTML</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
var app = new Vue({
el:&quot;#app&quot;,
data:{
	//content:&quot;HELLO world！&quot;
content:&quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://www.baodi.com<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>HELLO WORLD!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>&quot;
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>v-html指令的作用是：设置元素的innerHTML</li><li>内容中有html结构会被解析成标签</li><li>v-text指令无论内容是什么，只会解析为文本</li><li>解析文本使用v-text，需要解析html结构使用v-html</li></ul><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on" aria-hidden="true">#</a> v-on</h3><p>为元素绑定事件</p><ul><li><strong>v-on</strong>指令的作用是：为元素绑定<strong>事件</strong></li><li>事件名不需要写<strong>on</strong></li><li>指令可以简写为**@**</li><li>绑定的方法定义在<strong>methods</strong>属性中</li><li>方法内部通过<strong>this</strong>关键字可以访问定义在<strong>data</strong>中数据</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h3>`,8),d=n("li",null,[a("创建Vue实例时："),n("strong",null,"el"),a("（挂载点），"),n("strong",null,"data"),a("（数据），"),n("strong",null,"methods"),a("（方法）")],-1),h=n("li",null,"v-on指令的作用是绑定事件，简写为@",-1),v=n("li",null,"方法中通过this，关键字获取data中的数据",-1),g=n("li",null,"v-html指令的作用是：设置元素的innerHTML",-1),m=s('<h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h3><ul><li>v-show指令的作用是：根据真假切换元素的显示状态</li><li>原理是修改元素的display，实现显示隐藏</li><li>指令后面的内容，最终都会解析为布尔值</li><li>值为true元素显示，值为false元素隐藏</li><li>数据改变之后，对应元素的显示状态会同步更新</li></ul><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> v-if</h3><ul><li>v-if指令的作用是：根据真假切换元素的显示状态</li><li>本质是通过操纵<strong>dom</strong>元素来切换显示状态</li><li>表达式的值为true，元素存在于<strong>dom</strong>树中，为false，从dom树中移除</li><li>频繁的切换v-show，反之使用v-if，前者切换消耗小。</li></ul><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h3><p>设置元素的属性（比如：src、title、class）</p><ul><li><strong>v-bind</strong>指令的作用是：为元素绑定属性</li><li>完整写法是<strong>v-bind：属性名</strong></li><li>简写的话可以直接省略<strong>v-bind</strong>，只保留：<strong>属性名</strong></li></ul><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h3><p>根据数据生成列表结构</p><ul><li>v-for指令的作用：根据数据生成列表结构</li><li>数组经常和v-for结合使用</li><li>语法是（item，index）in 数据</li><li>item和index可以结合其他指令一起使用</li><li>数组长度的更新会同步到页面上，是响应式的</li></ul><h3 id="v-on的补充" tabindex="-1"><a class="header-anchor" href="#v-on的补充" aria-hidden="true">#</a> v-on的补充</h3><p>传递自定义参数，事件修饰符</p><ul><li>事件绑定的方法写出<strong>函数调用</strong>的形式，可以传入自定义参数</li><li>定义方法时需要定义<strong>形参</strong>来接收传入的实参</li><li>事件的后面跟上**.修饰符**可以对事件进行限制</li><li><strong>.enter</strong>可以限制触发的按键为回车</li><li>事件修饰符有多种</li></ul><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><p>获取和设置表单元素的值（<strong>双向数据绑定</strong>）</p><ul><li><strong>v-model</strong>指令的作用是边界的设置和获取表单元素的值</li><li>绑定的数据会和表单元素<strong>值</strong>相关联</li><li>绑定的数据&lt;——&gt;表单元素的值</li></ul>',16);function k(b,f){return e(),i("div",null,[p,n("ul",null,[c,n("li",null,"默认写法会替换全部内容，使用差值表达式"+t()+"可以替换指定内容",1),u]),r,n("ul",null,[d,h,v,n("li",null,"v-text指令的作用是：设置元素的文本值，简写为"+t(),1),g]),m])}const x=l(o,[["render",k],["__file","Vue-cmd.html.vue"]]);export{x as default};

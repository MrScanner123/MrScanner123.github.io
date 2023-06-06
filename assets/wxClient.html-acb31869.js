import{_ as l,o,c as i,b as n,d as t,t as e,f as a}from"./app-f6785d32.js";const r="/wxImg/wx01.png",p="/wxImg/wx02.png",c="/wxImg/wx03.png",u="/wxImg/wx04.png",d="/wxImg/wx05.png",g="/wxImg/wx06.png",h="/wxImg/wx07.png",k={},m=a('<h2 id="微信小程序笔记" tabindex="-1"><a class="header-anchor" href="#微信小程序笔记" aria-hidden="true">#</a> 微信小程序笔记</h2><p><strong>主界面的五个组成部分</strong></p><p>菜单栏：</p><ul><li><strong>帮助</strong>：开发者文档</li><li><strong>设置</strong>：相关设置</li></ul><p>控制栏：</p><ul><li><strong>模拟器、编译器</strong></li><li><strong>编译、预览</strong></li><li><strong>详情</strong></li></ul><h2 id="小程序代码构成" tabindex="-1"><a class="header-anchor" href="#小程序代码构成" aria-hidden="true">#</a> 小程序代码构成</h2><ul><li><strong>pages</strong>：用来存放所有小程序的页面</li><li><strong>utils</strong>：用来存放工具性质的模块（例如：格式化时间的自定义模块）</li><li><strong>app.js</strong>：小程序项目的入口文件</li><li><strong>app.json</strong>：小程序项目的全局配置文件</li><li><strong>app.wxss</strong>:小程序项目的全局样式文件</li><li><strong>project.config.json</strong>：项目的配置文件</li><li><strong>sitemap.json</strong>：用来配置小程序以及页面手否运行被微信索引</li></ul><h2 id="小程序页面组成部分" tabindex="-1"><a class="header-anchor" href="#小程序页面组成部分" aria-hidden="true">#</a> 小程序页面组成部分</h2><p>小程序官方建议把所有小程序的页面，都存放在<strong>pages目录</strong>中，以单独的文件夹存在，如图所示：</p><p>每个页面由<strong>4个基本</strong>文件组成，他们分别是：</p><ul><li><strong>.js文件</strong>：页面的脚本文件，存放页面的数据、事件处理函数等</li><li><strong>.json文件</strong>：当前页面的配置文件，配置窗口的外观、表现等</li><li><strong>.wxml文件</strong>：页面的模板结构文件</li><li><strong>.wxss文件</strong>：当前页面的样式表文件</li></ul><h3 id="json配置文件" tabindex="-1"><a class="header-anchor" href="#json配置文件" aria-hidden="true">#</a> JSON配置文件</h3><ol><li>JSON配置文件的作用</li></ol><blockquote><p><strong>JSON是一种数据格式</strong>，在实际开发中，JSON总是以<strong>配置文件</strong>的形式出现。小程序项目中也不例外：通过不同的.json配置文件，可以对小程序项目进行不同级别的配置。</p></blockquote><p>小程序项目中有4种json配置文件，分别是：</p><blockquote><ol><li><strong>app.json</strong>配置文件</li><li><strong>project.config.json</strong>配置文件</li><li><strong>sitemap.json</strong>配置文件</li><li>每个页面文件中的**.json**配置文件</li></ol></blockquote><h4 id="app-json" tabindex="-1"><a class="header-anchor" href="#app-json" aria-hidden="true">#</a> app.json</h4><blockquote><ul><li>当前小程序的全局配置，包括了小程序的<strong>所有页面路径、窗口外观、界面表现、底部tab</strong>等</li><li><strong>pages</strong>：用来记录当前小程序所有页面的路径</li><li><strong>window</strong>：全局定义小程序所有页面的背景色、文字颜色等</li><li><strong>style</strong>：全局定义小程序组件所使用的样式版本</li><li><strong>sitmapLocation</strong>：用来指明sitemap.json的位置</li></ul></blockquote><h4 id="project-config-json" tabindex="-1"><a class="header-anchor" href="#project-config-json" aria-hidden="true">#</a> project.config.json</h4><blockquote><ul><li>项目配置文件，用来记录我们对小程序开发工具所做的个性化配置，例如：</li><li><strong>setting</strong>：保存了<strong>编译相关的配置</strong></li><li><strong>projectname</strong>：保存的是<strong>项目名称</strong></li><li><strong>appid</strong>：保存的是<strong>小程序的账号ID</strong></li></ul></blockquote><h4 id="sitemap-json" tabindex="-1"><a class="header-anchor" href="#sitemap-json" aria-hidden="true">#</a> sitemap.json</h4><blockquote><p>微信现已开放<strong>小程序内搜索</strong>，效果类似于PC网页的SEO。sitemap.json文件用来<strong>配置小程序页面是否允许微信索引。</strong></p></blockquote><h4 id="页面-json" tabindex="-1"><a class="header-anchor" href="#页面-json" aria-hidden="true">#</a> 页面.json</h4><blockquote><p>小程序的每一个页面，可以使用.json文件来<strong>对本页面的窗口外观进行配置，页面中的配置项会覆盖app.json的window中相同的配置项</strong>。</p></blockquote><h4 id="新建小程序页面" tabindex="-1"><a class="header-anchor" href="#新建小程序页面" aria-hidden="true">#</a> 新建小程序页面</h4><blockquote><p>只需要在app.json-&gt;pages中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件。</p></blockquote><h4 id="修改项目首页" tabindex="-1"><a class="header-anchor" href="#修改项目首页" aria-hidden="true">#</a> 修改项目首页</h4><blockquote><p>只需要调整app.json-&gt;<strong>pages</strong>数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，当做项目首页进行渲染</p></blockquote><h4 id="_1、wxml模板" tabindex="-1"><a class="header-anchor" href="#_1、wxml模板" aria-hidden="true">#</a> 1、WXML模板</h4><p>wxml是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于页面开发中的HTML。</p><h4 id="_2、wxml和html的区别" tabindex="-1"><a class="header-anchor" href="#_2、wxml和html的区别" aria-hidden="true">#</a> 2、WXML和HTML的区别</h4><p><strong>标签名称不同</strong></p><ul><li>HTML(div、span、img、a)</li><li>WXML（view、text、image、navigator）</li></ul><p><strong>属性节点不同</strong></p><ul><li><code>&lt;a href=&quot;#&quot;&gt;超链接&lt;/a&gt;</code></li><li><code>&lt;navigator url=&quot;/pages/home/home&quot;&gt;超链接&lt;/navigator&gt;</code></li></ul><p><strong>提供了类似于Vue中的模板语法</strong></p><ul><li>数据绑定</li><li>列表渲染</li><li>条件渲染</li></ul><h3 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> WXSS</h3><p>WXSS是一条<strong>样式语言</strong>，用于描述WXML的组件样式，类似于网页开发中的CSS。</p><h3 id="wxss和css的区别" tabindex="-1"><a class="header-anchor" href="#wxss和css的区别" aria-hidden="true">#</a> <strong>WXSS和CSS的区别</strong></h3><p><strong>新增了rpx尺寸单位</strong></p><ul><li>CSS中需要手动进行像素单位换算，例如rem</li><li>WXSS在底层支持新的尺寸单位rpx，在不同大小的屏幕上小程序会自动进行换算。</li></ul><p><strong>提供了全局样式和局部样式</strong></p><ul><li>项目根目录中的app.wxss会作用于所有小程序页面</li><li>局部页面的.wxss样式仅对当前页面生效</li></ul><p><strong>WXSS仅支持部分CSS选择器</strong></p><ul><li>.class和#id</li><li>element</li><li>并集选择器、后代选择器</li><li>::after和::before等伪类选择器</li></ul><h3 id="js逻辑交互" tabindex="-1"><a class="header-anchor" href="#js逻辑交互" aria-hidden="true">#</a> JS逻辑交互</h3><p>1、小程序中的.js文件</p><p>一个项目仅仅提供界面展示是不够的，在小程序中，我们通过.js文件来处理用户的操作。例如：响应用户的点击、获取用户的位置等等。</p><p>2、小程序中.js文件的分类</p><p>小程序中的JS文件分为三大类：</p><p><strong>app.js</strong></p><ul><li>是<strong>整个小程序项目的入口文件</strong>，通过调用**APP（）**函数来启动整个小程序</li></ul><p><strong>页面.js文件</strong></p><ul><li>是<strong>页面的入口文件</strong>，通过调用**page（）**函数来创建并运行页面</li></ul><p>普通的.js文件</p><ul><li>是<strong>普通的功能模块文件</strong>，用来封装<strong>公共的函数或属性供页面</strong>使用</li></ul><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p><strong>小程序中的组件也是由宿主环境提供的</strong>，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为了9大类，分别是：</p><ol><li><strong>视图容器</strong></li><li><strong>基础内容</strong></li><li><strong>表单组件</strong></li><li><strong>导航组件</strong></li><li>媒体组件</li><li>map地图组件</li><li>canvas画布组件</li><li>开放能力</li><li>无障碍访问</li></ol><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><p><img src="'+r+`" alt="image-20220905152407985"></p><p><strong>只有text组件支持长按复制</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rich-text</span> <span class="token attr-name">nodes=&quot;&lt;h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&#39;</span></span></span><span class="token punctuation">&gt;</span><span class="token attr-name">标题&lt;</span>/<span class="token attr-name">h1</span><span class="token punctuation">&gt;</span><span class="token attr-name">&quot;</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rich-text</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20220905153248145"></p><h3 id="小程序api的三大分类" tabindex="-1"><a class="header-anchor" href="#小程序api的三大分类" aria-hidden="true">#</a> 小程序API的三大分类：</h3><p><strong>事件监听API：</strong></p><ul><li>特点：以<strong>on</strong>开头，用来<strong>监听某些事件的触发。</strong></li><li>举例：wx.<strong>onWindowResize</strong>(function callback)监听窗口尺寸变化的事件</li></ul><p><strong>同步API：</strong></p><ul><li>以<strong>Sync</strong>结尾的API都是同步API</li><li>同步API的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常</li><li>举例：wx.<strong>setSorageSync</strong>(&#39;key&#39;, &#39;value&#39;)向本地存储写入内容</li></ul><p><strong>异步API</strong></p><ul><li>特点：类似于jQuery中的**$.ajax(options)**函数，需要通过success、fail、complete接收调用的结果</li><li>举例：wx.<strong>request</strong>()发起网络数据请求，通过success回调函数接收数据。</li></ul><h2 id="模板与配置" tabindex="-1"><a class="header-anchor" href="#模板与配置" aria-hidden="true">#</a> 模板与配置</h2><h4 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标：</h4><ul><li>能够使用WXML模板语法渲染页面结构</li><li>能够使用WXSS样式美化页面结构</li><li>能够使用app.json对小程序进行全局性配置</li><li>能够使用page.json对小程序页面进行个性化配置</li><li>能够知道如何发起网络数据请求</li></ul><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3><p>1、数据绑定的基本原则</p><ul><li>在data中定义数据：<strong>在页面对应的.js文件中，把数据定义到data对象中即可。</strong></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Page({
    data:{
    info:&#39;init data&#39;,
    msgList:[{msg:&#39;hello&#39;},{msg:&#39;world&#39;}]
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在WXML中使用数据</li></ul><p><strong>Mustache语法</strong>——差值表达式 （可使用算数表达式、三元运算符）</p><h3 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h3><p>事件时<strong>渲染层到逻辑层的通讯方式</strong>。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的出来</p><p><img src="`+c+`" alt="image-20220905163309007"></p><h4 id="target和currenttarget的区别" tabindex="-1"><a class="header-anchor" href="#target和currenttarget的区别" aria-hidden="true">#</a> target和currentTarget的区别</h4><p><strong>target</strong>是<strong>触发该事件的源头组件</strong>，而<strong>currentTarget</strong>则是<strong>当前事件所绑定的组件。</strong></p><h4 id="bindtap的语法格式" tabindex="-1"><a class="header-anchor" href="#bindtap的语法格式" aria-hidden="true">#</a> bindtap的语法格式</h4><p>在小程序中，不存在HTML中的onclick鼠标点击事件，而是通过<strong>tap事件</strong>来响应用户的触摸行为。</p><h3 id="事件传参" tabindex="-1"><a class="header-anchor" href="#事件传参" aria-hidden="true">#</a> 事件传参</h3><p>小程序中的事件传参比较特殊，<strong>不能在绑定事件的同时为事件处理函数传递参数。</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnHandler(123)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>事件传参<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>以上代码会将btnHandler(123)作为事件来处理。</strong></p><p>可以为组件提供data-*自定义属性传参，其中 *代表参数名。</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnHandler<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>事件参数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>info</strong> 会被解析成<strong>参数的名字</strong></li><li>数值<strong>2</strong>会被解析为<strong>参数的值</strong></li></ul><h3 id="wx-if" tabindex="-1"><a class="header-anchor" href="#wx-if" aria-hidden="true">#</a> wx:if</h3>`,99),b=a(`<h3 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> block</h3><p>如果要<strong>一次性控制多个组件的展示与隐藏</strong>，可以使用一个<code>**&lt;block&gt;&lt;/block&gt;**</code>标签将多个组件包装起来，并在<code>&lt;block&gt;</code>标签上使用wx:if控制元素属性：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{true}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>view1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>view2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;block&gt;</code><strong>并不是一个组件</strong>，它只是一个包裹性质的容器，<strong>不会在页面做任何渲染</strong>。</p><h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h3>`,5),x=a(`<h3 id="wx-if和hidden的对比" tabindex="-1"><a class="header-anchor" href="#wx-if和hidden的对比" aria-hidden="true">#</a> wx:if和hidden的对比</h3><p>1、运行方式不同</p><ul><li>wx:if以<strong>动态创建和移除元素</strong>的方式，控制元素的展示与隐藏。</li><li>hidden以<strong>切换样式</strong>的方式（display:none/block；），控制元素的显示和隐藏。</li></ul><p>2、使用建议</p><ul><li><strong>频繁切换</strong>时，建议使用<strong>hidden</strong></li><li><strong>控制条件复杂</strong>时，建议使用<strong>wx:if</strong>搭配wx:elif、wx:else进行展示与隐藏的切换</li></ul><h3 id="wx-for" tabindex="-1"><a class="header-anchor" href="#wx-for" aria-hidden="true">#</a> wx:for</h3><p>通过wx:for可以根据指定的数组，循环渲染重复的组件结构，语法实例如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
索引是: {{index}} 当前项是: {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，当前循环项的<strong>索引</strong>用<strong>index</strong>表示；<strong>当前循环项</strong>用<strong>item</strong>表示。</p><h3 id="手动指定索引和当前项的变量名" tabindex="-1"><a class="header-anchor" href="#手动指定索引和当前项的变量名" aria-hidden="true">#</a> 手动指定索引和当前项的变量名*</h3><ul><li>使用<strong>wx:for-index</strong>可以指定<strong>当前循环项的索引</strong>的变量名</li><li>使用<strong>wx:for-item</strong>可以指定<strong>当前项</strong>的变量名</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idx<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itemName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
索引是： {{idx}} 当前项是：{{itemName}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局样式和局部样式" tabindex="-1"><a class="header-anchor" href="#全局样式和局部样式" aria-hidden="true">#</a> 全局样式和局部样式</h3><p>1、定义在app.wxss中的样式为<strong>全局样式</strong>，作用于每一个页面。</p><p>2、局部样式在<strong>页面.wxss</strong>文件中定义的样式为<strong>局部样式</strong>，只作用于当前页面。</p><ol><li>当全局样式和局部样式发生冲突时，根据就近原则，局部样式会<strong>覆盖</strong>全局样式。</li><li>当局部样式的<strong>权重大于或等于</strong>全局样式的权重时，才会覆盖全局的样式。</li></ol><h3 id="全局配置文件及常用的配置项" tabindex="-1"><a class="header-anchor" href="#全局配置文件及常用的配置项" aria-hidden="true">#</a> 全局配置文件及常用的配置项</h3><ol><li>pages <ul><li>记录当前小程序所有页面的存放路径</li></ul></li><li>window <ul><li>全局设置小程序窗口的外观</li></ul></li><li>tabBar <ul><li>设置小程序底部的tabBar效果</li></ul></li><li>style <ul><li>是否启用新版的组件功能。</li></ul></li></ol><h3 id="window常用的配置项" tabindex="-1"><a class="header-anchor" href="#window常用的配置项" aria-hidden="true">#</a> Window常用的配置项</h3><p><img src="`+u+'" alt="image-20220909143301714"></p><h3 id="tabbar-的6个组成部分" tabindex="-1"><a class="header-anchor" href="#tabbar-的6个组成部分" aria-hidden="true">#</a> tabbar 的6个组成部分</h3><ol><li><strong>backgroupColor</strong>：tabBar的背景色</li><li><strong>selectedIconPath</strong>：选中时的图片路径</li><li><strong>borderStyle</strong>：tabBar上边框的颜色</li><li><strong>iconPath</strong>：未选中时的图片路径</li><li><strong>selectedColor</strong>：tab上的文字选中时的颜色</li><li><strong>color</strong>：tab上文字的默认（未选中）颜色</li></ol><h2 id="视图与逻辑" tabindex="-1"><a class="header-anchor" href="#视图与逻辑" aria-hidden="true">#</a> 视图与逻辑</h2><h3 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h3><p>1、什么是页面导航？</p><p>页面导航指的是<strong>页面之间的互相跳转</strong>。浏览器中实现页面导航的方式有如下两种：</p><ul><li><code>&lt;a&gt;</code>链接</li><li>location.href</li></ul><p>2、小程序中实现页面导航的两种方式</p><ol><li>声明式导航 <ul><li>在页面上声明一个<code>&lt;navigator&gt;</code>导航</li><li>通过点击<code>&lt;navigator&gt;</code>组件实现页面跳转</li></ul></li><li>编程式导航 <ul><li>调用小程序的导航API，实现页面的跳转</li></ul></li></ol><h2 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h2><ol><li><p>导航到tabBar页面</p><p><img src="'+d+'" alt="image-20230321094627736"></p></li><li><p>导航到非tabBar页面</p><p><img src="'+g+'" alt="image-20230321094831762"></p></li></ol><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p><strong>生命周期</strong>是指一个对象从创建——&gt;运行-&gt;销毁的整个阶段，强调的是一个<strong>时间段</strong></p><ol><li><strong>生命周期的分类</strong><ol><li><strong>应用生命周期</strong><ul><li>特指小程序从启动—&gt;运行—&gt;销毁的过程</li></ul></li><li><strong>页面生命周期</strong><ul><li>特指小程序中，每个页面的加载—&gt;渲染—&gt;销毁的过程</li></ul></li></ol></li></ol><p>其中，<strong>页面</strong>的生命周期<strong>范围较小</strong>、<strong>应用程序</strong>的生命周期的<strong>范围较大</strong></p><p><img src="'+h+`" alt="image-20230321105920949"></p><p>生命周期函数的作用：允许程序员<strong>在特定的时间点，执行某些特定的操作</strong>。</p><h3 id="生命周期函数的分类" tabindex="-1"><a class="header-anchor" href="#生命周期函数的分类" aria-hidden="true">#</a> 生命周期函数的分类</h3><p>小程序中的生命周期函数分为两类，分别是：</p><ol><li><ul><li><strong>应用生命周期</strong><ul><li>特指小程序从启动—&gt;运行—&gt;销毁依次调用的那些函数</li></ul></li><li><strong>页面生命周期</strong><ul><li>特指小程序中，每个页面的加载—&gt;渲染—&gt;销毁依次调用的那些函数</li></ul></li></ul></li></ol><h3 id="wxs脚本" tabindex="-1"><a class="header-anchor" href="#wxs脚本" aria-hidden="true">#</a> WXS脚本</h3><ol><li>wxs有自己的数据类型 <ul><li>number数值类型、string字符串类型、boolean布尔类型、object对象类型、</li><li>function函数类型、array数组类型、data日期类型、regexp正则</li></ul></li><li>wxs不支持类似于ES6及以上的语法形式 <ul><li><strong>不支持</strong>:let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc......</li><li><strong>支持</strong>：var定义变量、普通fuction函数等类似于ES5的语法</li></ul></li><li>wxs遵循CommonJS规范 <ul><li>module对象</li><li>require()函数</li><li>module.exports对象</li></ul></li></ol><h3 id="数据监听器" tabindex="-1"><a class="header-anchor" href="#数据监听器" aria-hidden="true">#</a> 数据监听器</h3><p>监听对象中所有属性的变化。</p><p>如果某个对象中需要被监听的属性太多，为了方便，可以使用通配符**来监听对象中所有属性的变化，代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用通配符**监听对象上所有属性的变化</span>
    <span class="token string-property property">&#39;rgb.**&#39;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">fullColor</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>b\`<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件的生命周期" tabindex="-1"><a class="header-anchor" href="#组件的生命周期" aria-hidden="true">#</a> 组件的生命周期</h3><p>在小程序组件中， 最重要的生命周期函数有三个，分别是created、attached、detached。它们各自的特点如下：</p><ol><li>组件实例刚被创建好的时候，created生命周期函数会被触发 <ul><li>此时还不能调用setData</li><li>通常在这个生命周期函数中，只应该用于给组件的this添加一些自定义的属性字段。</li></ul></li><li>在组件<strong>完全初始化完毕，进入页面节点树后</strong>，attached生命周期函数会被触发 <ul><li>此时，this.data已被初始化完毕</li><li>这个生命周期很有用，绝大多数初始化的工作可以在这个时机进行（例如发请求获取初始数据）</li></ul></li><li>在组件离开页面节点树后，detached生命周期函数会被触发 <ul><li>退出一个页面时，会触发页面内每个自定义组件的detached生命周期函数</li><li>此时适合做一些清理性质的工作</li></ul></li></ol><h3 id="分包基础概念" tabindex="-1"><a class="header-anchor" href="#分包基础概念" aria-hidden="true">#</a> 分包基础概念</h3><h5 id="什么是分包" tabindex="-1"><a class="header-anchor" href="#什么是分包" aria-hidden="true">#</a> 什么是分包？</h5><p>分包指的是把一个<strong>完整的小程序项目</strong>，按照需求<strong>划分成不同的子包</strong>，在构建时打包成不同的分包，用户在使用时<strong>按需进行加载</strong></p><h5 id="分包的好处" tabindex="-1"><a class="header-anchor" href="#分包的好处" aria-hidden="true">#</a> 分包的好处</h5><p>对小程序进行分包的好处主要有以下两点：</p><ul><li>可以<strong>优化小程序首次启动的下载时间</strong></li><li>在<strong>多团队共同开发</strong>时可以更好<strong>解耦协作</strong></li></ul><h4 id="引用原则" tabindex="-1"><a class="header-anchor" href="#引用原则" aria-hidden="true">#</a> 引用原则</h4><p>独立分包和普通分包以及主包之间，是<strong>相互隔绝的</strong>，<strong>不能相互引用彼此的资源</strong>！例如：</p><ol><li>主包<strong>无法引用</strong>独立分包的私有资源</li><li>独立分包之间，<strong>不能相互引用</strong>私有资源</li><li>独立分包和普通分包之间，<strong>不能相互引用</strong>私有资源</li><li><strong>特别注意</strong>：独立分包中不能引用主包内的公共资源。</li></ol><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ol><li>能够知道如何安装和配置vant-weapp组件库 <ul><li>参考vant的官方文档</li></ul></li><li>能够知道如何使用MobX实现全局数据共享 <ul><li>安装包、<strong>创建Store、参考官方文档进行使用</strong></li></ul></li><li>能够哦知道如何对小程序的API进行Promise化 <ul><li>安装包、在app.js中进行配置</li></ul></li><li>能够知道如何实现自定义tabBar的效果 <ul><li><strong>Vant组件库 + 自定义组件 + 全局数据共享</strong></li></ul></li></ol>`,60);function v(s,f){return o(),i("div",null,[m,n("p",null,[t("在小程序中，使用"),n("strong",null,"wx:if=“"+e(s.condition)+"”",1),t(" 来判断是否需要渲染该代码块。")]),b,n("p",null,"在小程序，直接使用**hidde=“"+e(s.conditon)+"”**也能控制元素的显示与隐藏",1),x])}const j=l(k,[["render",v],["__file","wxClient.html.vue"]]);export{j as default};

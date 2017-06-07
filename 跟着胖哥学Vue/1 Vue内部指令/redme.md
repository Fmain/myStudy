# n级标题
+ n-1级标题
- n-2级标题
* 标题的副标题
: 前一块内容的地址链接
/- 代码块
! 注意块或者tips

## 基础入门
# 第1节：走起我的Vue2.0
    + Vue下载
        : https://cn.vuejs.org/v2/guide/installation.html#独立版本
        -
    + 项目结构搭建
        - assets 目录不编译
        - example  存放代码
        - index.html  主页,字典
    + live-server
        * 用作打开localhost服务
        - 用npm进行全局安装
            /- npm install live-server -g
        - 在项目目录中打开
            /- live-server
    + 编写helloworld.html代码
# 第2节：条件渲染(v-if v-else v-else-if v-show)指令
    + v-if&v-else&v-else-if
        * 判断是否加载,可以减轻服务器的压力,在条件成立的时候加载
        - v-else 指令来表示 v-if 的“else 块”
        - v-else 元素必须紧跟在 v-if 或者 v-else-if 元素的后面——否则它将不会被识别。
    + v-show
        * 带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 是简单地切换元素的 CSS 属性 display
        ! 注意:v-show 不支持 <template> 语法，也不支持 v-else
# 第3节：列表渲染(v-for)指令：解决模板循环问题
    + 一个参数:v-for="v in numArr"
        - 排序问题
            /-
            //数字排序
            function sortNumber (a,b) {
                return a-b;
            }
    + 两个参数:v-for="(v,i) in items"
        - 排序问题
            /-
            //数组对象方法排序
            function sortByKey (array,key) {
                return array.sort(function  (a,b) {
                    var x=a[key];
                    var y=b[key];
                    return ((x<y)?-1:((x>y)?1:0))
                })
            }
    + 三个参数:v-for="(v,k,i) in json"
# 第4节：插值( {{}} & v-text & v-html )
    + {{}}
        - 在网速很慢或者javascript出错时，会暴露{{xxx}}
        - 如果需要在vue界面输出{{}},需要在当前节点中加入v-pre指令
    + v-text
    + v-html
        - 移除1.0中{{{}}}语法,现在用v-html
        ! 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。
    + v-once
        - 禁止刷新模板以前用的是{{*}},现在用v-once,
# 第5节：事件处理器
    + 绑定事件监听器(v-on:)
        : v-on 指令,它用于监听 DOM 事件来触发一些 JavaScript 代码,简写为@
    + 方法事件处理器
        : 许多事件处理的逻辑都很复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 可以接收一个定义的方法来调用。
    + 内联处理器方法
        - 除了直接绑定到一个方法，也可以用内联 JavaScript 语句
        - 有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法
    + 事件修饰符
        - Vue.js 为 v-on 提供了 事件修饰符。通过由点(.)表示的指令后缀来调用修饰符。
            -- .stop  阻止单击事件冒泡
            -- .prevent  阻止默认事件
            -- .capture  添加事件侦听器时使用事件捕获模式
            -- .self  只当事件在该元素本身（而不是子元素）触发时触发回调
            -- .once  点击事件将只会触发一次
    + 按键修饰符
        - @keydown.enter=""
        - @keyup.13=""
# 第6节：表单控件绑定
    + 表单控件绑定(v-model="")
        : 在表单控件元素上创建双向数据绑定。它负责监听用户的输入事件以更新数据，根据控件类型自动选取正确的方法来更新元素
    + 文本
    + 文本域
    + 复选框
        - 单个勾选框
        - 多个勾选框
    + 单选按钮
    + 选择列表
    + 修饰符
        - .lazy
        - .number
        - .trim
# 第7节：属性绑定
    + 标签属性绑定(v-bind:)
        : v-bind:指令被用来响应地更新 HTML 属性,简写为:
    + 绑定一个属性
        - :index="i"
    + class绑定
        - :class="{red:isRed,blue:isBlue}"
        - :class="a"
        - :class="[a, b]"
        - :class="[a,{classB:isB,classC:isC}]
    + style绑定
        - :style="[styleObjectA,styleObjectB]"
        - :style="styleObject"
    + 绑定一个有属性的对象
        - v-bind="{id:someProp,'other-attr':otherProp}"
# 第8节：其他内部指令(v-pre & v-cloak & v-once)
    + v-pre
        : 在模板中跳过vue的编译，直接输出原始值
    + v-cloak
        : 在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用
    + v-once
        : 在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程

## 全局API
# 第9节：Vue.directive 自定义指令
    + 注册全局自定义指令
    + 注册局部自定义指令
    + 自定义指令的生命周期(钩子函数)
        - bind
        - inserted
        - update
        - componentUpdated
        - unbind
    + 钩子函数的参数
        - el
        - binding
            - name
            - value
            - oldValue
            - expression
            - arg
            - modifiers
        - vnode
        - oldVnode
# 第10节：Vue.extend构造器的延伸
    : 对比组件
    -
# 第11节：Vue.set全局操作
    : 设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。
    -
# 第12节：Vue的生命周期（钩子函数）
    + beforeCreate
    + created
    + beforeMount
    + mounted
    + beforeUpdate
    + updated
    + activated
    + deactivated
    + beforeDestroy
    + destroyed
# 第13节：Template 制作模版

# 第14节：Component 初识组件

# 第15节：Component 组件props 属性设置

# 第16节：Component 父子组件关系

# 第17节：Component 标签
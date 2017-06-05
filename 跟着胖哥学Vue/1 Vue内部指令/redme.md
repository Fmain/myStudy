# n级标题
+ n-1级标题
- n-2级标题
* 标题的副标题
: 前一块内容的地址链接
/- 代码块
! 注意块或者tips

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
# 第4节：v-text & v-html

# 第5节：v-on：绑定事件监听器

# 第6节：v-model指令

# 第7节：v-bind 指令

# 第8节：其他内部指令(v-pre & v-cloak & v-once)
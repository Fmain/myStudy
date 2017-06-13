标题

Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。
类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题），例如：

This is an H1
=============

This is an H2
-------------
任何数量的 = 和 - 都可以有效果。

类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如：
# 这是 H1
## 这是 H2
###### 这是 H6
你可以选择性地「闭合」类 atx 样式的标题，这纯粹只是美观用的，若是觉得这样看起来比较舒适，你就可以在行尾加上 #，而行尾的 # 数量也不用和开头一样（行首的井字符数量决定标题的阶数）：
# 这是 H1 #
## 这是 H2 ##
### 这是 H3 ######

Markdown 也允许你偷懒只在整个段落的第一行最前面加上 > ：
区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 > ：
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");

列表
Markdown 支持有序列表和无序列表。
无序列表使用星号、加号或是减号作为列表标记：
*   Red
*   Green
*   Blue
等同于：
+   Red
+   Green
+   Blue
也等同于：
-   Red
-   Green
-   Blue
有序列表则使用数字接着一个英文句点：
1.  Bird
2.  McHale
3.  Parish
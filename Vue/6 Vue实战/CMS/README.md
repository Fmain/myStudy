# CMS内容管理系统
```
    1 整个项目采取的是一个单页应用,
    2 整个项目中的每个页面均采取vue中的vue组件页面结构来实现
    3 利用vue-router来实现路由的控制和页面的跳转
    4 利用vue-resource来通过ajax请求api获取后台提提供的数据
        数据全部是json结构:
            status:0:正常/1:失败
            message:代表服务器响应回来的数据
                数据类型:
                    1.可能是字符串(这个通常是错误异常)
                    2.可能是一个js对象
                    3.可能是一个数组
```
## webpack的入口: main.js
## Header
## Footer
## content
    通过vue-router根据不同的url加载不同的vue组件
    ### 首页 Home.vue
    ### 新闻区域:
        + 新闻列表: newList.vue
        + 新闻详情: newInfo.vue
    ### 图片分享区域:
        + 图片列表: imageList.vue
        + 图片详情: imageInfo.vue
    ### 商品区域:
        + 商品列表: goodsList.vue
        + 商品详情: goodsInfo.vue
        + 图文介绍: goodsDesc.vue
    ### 购物车: shopcar.vue
    ### 评论组件: comment.vue
    ## mint-ui 的一些组件
<template>
  <div class="tmpl">
    <!--使用subimgsilder.vue组件实现轮播-->
      <subimgsilder :imgList="list"></subimgsilder>
    <!--利用mui组件实现九宫格,用iconfont.cn中icon替换原有icon-->
  <div class="six_grid">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/newsList">
          <span class="mui-icon iconfont icon-gonggaozixun"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photoList">
        <span class="mui-icon iconfont icon-zixun_on2"></span>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodsList">
        <span class="mui-icon iconfont icon-yuanxinggouwuche"></span>
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon iconfont icon-wode-fankui"></span>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon iconfont icon-video"></span>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon iconfont icon-lianxiwomen"></span>
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>

  </div>
</template>
<script>
  /*导入相关组件*/
  //1.0 导入axios组件.哪个组件需要异步请求,只需要在这个组件中引用axios就可以了
  import axios from 'axios'
  //2.0 导入subimgsilder.vue
  import subimgsilder from '../subcomp/subimgsilder.vue'

export default{
  data(){
    return{
      /*list: [{
        url: 'http://www.itcast.cn/subject/phoneweb/index.html',
        img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
      },{
        url: 'http://www.itcast.cn/subject/phoneweb/index.html',
        img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
      }]*/
      list: []
    }
  },
  created(){
    var url = 'http://webhm.top:8899/api/getlunbo';
    //1.0 使用vue-resource组件进行异步请求
    /*this.$http.get(url).then(res=>{
      this.list = res.data.message;
      console.log(res.data.message)
    },err=>{
      console.log(err)
    })*/
    //2.0 使用axios组件进行异步请求
    axios.get(url).then(response=>{
      //console.log(response);
      this.list = response.data.message;
    }).catch(error=>{
      console.log("404: "+error);
    })
  },
  components: {
    subimgsilder
  }

}

</script>

<style scoped>
  .icon-gonggaozixun {color: #0ac099}
  .icon-zixun_on2 {color: #ff504d}
  .icon-yuanxinggouwuche {color: #3680ff}
  .icon-wode-fankui {color: #1ab5f8}
  .icon-video {color: #ff4d00}
  .icon-lianxiwomen {color: #fc812b}
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {font-size: 12px;}
</style>
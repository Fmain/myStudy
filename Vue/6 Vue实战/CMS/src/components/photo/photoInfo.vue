<template>
  <div class="tmpl">
    <!-- 标题 -->
    <div class="title">
      <h3 v-text="imgInfo.title"></h3>
      <span class="time">
        {{imgInfo.add_time | fmtdate('YYYY-MM-DD')}}
      </span>
      <span class="liulan">
        {{imgInfo.click}}次浏览
      </span>
      <span class="fenlei">
        分类:经济民生
      </span>
    </div>
    <!-- 相关图片 -->
    <div class="images">
        <!--<img v-for="item in imgSrc" :src="item.src">-->
        <!-- 存在bug: 当图片放大后,点击浏览器的后退按钮,地址发生改变,点击图片报错,建议绑定浏览器后退事件,后退后关闭图片-->
        <img class="preview-img" v-for="(item, index) in imgSrc" :src="item.src" height="100" @click="$preview.open(index, imgSrc)">

    </div>
    <!-- 图片详细描述 -->
    <div class="content" v-html="imgInfo.content"></div>
    <!-- 评论组件 -->
    <subcomment :artid="imgid"></subcomment>
  </div>
</template>
<script>
  import axios from 'axios'
  import subcomment from '../subcomp/subcomment.vue'
  export default{
    data(){
      return {
        imgInfo:[],
        imgSrc:[],
        imgid:0
      }
    },
    methods: {
      getimgInfo(){
        //通过路由传递数据
        let url = 'http://webhm.top:8899/api/getimageInfo/'+this.imgid;
        axios.get(url).then(response=>{
          //console.log(response.data.message[0]);
          //注意,response.data.message为一个数组,需要添加索引
          this.imgInfo = response.data.message[0];
        }).catch(error=>{
          console.log("404: "+error);
        });
      },
      getimgSrc(){
        //通过路由传递数据
        let url = 'http://webhm.top:8899/api/getthumimages/'+this.imgid;
        axios.get(url).then(response=>{
          response.data.message.forEach(item=>{
            //response.data.message返回一个数组,由于没有返回高和宽,而vue-preview中需要宽和高,所以需要动态添加进原数组
            item.h = 400;
            item.w = 600;
          });
          this.imgSrc = response.data.message;
        }).catch(error=>{
          console.log("404: "+error);
        });
      }
    },
    created(){
      this.imgid = this.$route.params.id;
      this.getimgInfo();
      this.getimgSrc();
    },
    components:{
      subcomment
    }
  }
</script>
<style scoped>
  .title {
    height: 100%;
    border-bottom: 2px solid rgba(92,92,92,0.3);
    padding: 5px;
    font-size: 12px;
    color: rgba(92,92,92,0.6);
  }
  .title h3{
    font-size: 16px;
    font-weight:bold;
    color: #0094ff;
  }
  .liulan, .fenlei {
    margin-left: 20px;
  }
  .images {
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
    display: block;
    width: 100%;
  }
  .images img {
    width: 30%;
    padding-top: 10px;
    margin-left: 2%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content {
    padding: 5px;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    color: #8f8f94;
  }
</style>
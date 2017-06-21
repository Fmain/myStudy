<template>
  <div class="tmpl">
    <div class="title">
      <h3 v-text="newsInfo.title"></h3>
      <span class="time">
        {{newsInfo.add_time | fmtdate('YYYY-MM-DD')}}
      </span>
      <span class="liulan">
        {{newsInfo.click}}次浏览
      </span>
      <span class="fenlei">
        分类:经济民生
      </span>
    </div>
    <div class="content"><div v-html="newsInfo.content"></div></div>
    <!--评论组件-->
    <div>
      <subcomment :artid="artid"></subcomment>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import subcomment from '../subcomp/subcomment.vue'

  export default{
    data(){
      return {
        newsInfo: [],
        artid: 0
      }
    },
    created(){
      this.artid = this.$route.params.id;
      var url = 'http://webhm.top:8899/api/getnew/'+this.artid;
      axios.get(url).then(response=>{
        //console.log(response);
        //注意,response.data.message为一个数组,需要添加索引
        this.newsInfo = response.data.message[0];
      }).catch(error=>{
         console.log("404: "+error);
      });
    },
    components: {
      subcomment
    },
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
.content {
  padding: 5px;
  overflow: hidden;
}
</style>
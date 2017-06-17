<template>
  <div class="tmpl">
    <div class="title">
      <h3 v-text="newsInfo.title"></h3>
      <div class="title_info"></div>
      {{newsInfo.add_time | fmtdate('YYYY-MM-DD')}}
      {{newsInfo.click}}次浏览
      分类:经济民生
    </div>
    <div class="content">
      <div v-html="newsInfo.content"></div>
    </div>
    <div>
      <subcomment :comid="this.$route.params.id"></subcomment>
      {{this.$route.params.id}}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import subcomment from '../subcomp/subcomment.vue'
export default{
  data(){
    return {
      newsInfo: []
    }
  },
  created(){
    var url = 'http://webhm.top:8899/api/getnew/'+this.$route.params.id;
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
.title_info {
  /*margin-top: 10px;*/
}
.content {
  padding: 5px;
}
</style>
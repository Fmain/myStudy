<template>
  <div class="tmpl">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="news in newsList">
        <router-link v-bind='{to:"/news/newsinfo/"+news.id}'>
          <img class="mui-media-object mui-pull-left" :src="news.img_url">
          <div class="mui-media-body">
            <span v-text="news.title"></span>
            <div class="mui-ellipsis">
              <p class="newsList_info">
                <span class="left">
                  发表时间：{{news.add_time | fmtdate('YYYY-MM-DD')}}
                </span>
                <span class="right">点击：{{news.click}}</span>
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  export default{
    data(){
      return {
        newsList:[]
      }
    },
    created(){
      var url = 'http://webhm.top:8899/api/getnewslist';
      axios.get(url).then(res=>{
        //console.log(res.data.message);
        this.newsList = res.data.message
      }).catch(err=>{
        console.log('404: '+err)
      })
    },
    methods: {

    },
    filters: {
      fmtdate (input,datefmtstring) {
        // 发表时间：2015-04-16T03:50:28.000Z
        return moment(input).format(datefmtstring)
      }
    }
  }

</script>
<style scoped>
  .mui-media-body {
    font-size: 12px;
    font-weight: bolder;
  }
  .mui-table-view .mui-media-object {
    max-width: 50px;
    height: 50px;
  }
  .newsList_info {
    color: #0094ff;
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
  }
  .newsList_info .left {
    display: inline-block;
    width: 70%;
  }
  .newsList_info .right {
    display: inline-block;
    width: 30%;
  }
</style>
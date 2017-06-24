<template>
  <div class="tmplsub">
    <div class="subminttitle">
      <h4>提交评论</h4>
    </div>
    <div class="submintarea">
      <textarea ref="postcontent" class="textarea" placeholder="请输入评论内容" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
    </div>

    <div class="sublisttitle">
      <h4>评论列表</h4>
      1 <span>条评论</span>
    </div>
    <div>
      <ul class="submitlist">
        <li v-for="item in comments">
          <div class="content" v-text="item.content"></div>
          <div>
            <span class="user" v-text="item.user_name"></span>
            <span class="time">{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}} </span>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="submitlist">
        <li v-for="item in comments">
          <div class="content" v-text="item.content"></div>
          <div>
            <span class="user" v-text="item.user_name"></span>
            <span class="time">{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}} </span>
          </div>
        </li>
      </ul>
    </mt-loadmore> -->
  </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs';

  import { Toast } from 'mint-ui'
  export default{
    data(){
      return {
        content: '',
        pageindex: 1,
        comments:[]
      }
    },
    methods: {
      // 1.0 提交评论
      postcomment(){
        let url = 'http://webhm.top:8899/api/postcomment/'+this.artid;
        if (this.content == ''){
          Toast('请输入内容');
        }else{
          this.$http.post(url,{content:this.content},{emulateJSON:true}).then(res=>{
            Toast('发表成功');
            this.content = '';//清空文本框中的值
            //console.log('重新加载评论');
            //存在bug: 重新加载评论失败
            this.getcomment();//重新加载评论
          },res=>{
            Toast('发表失败');
          })
          /*let content = this.content;
          console.log(this.content);
          axios.post(url,{content:content},{
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
          }).then(res=>{
            Toast('发表成功');
            console.log(res.data.message);
          }).catch(err=>{
            Toast('发表失败');
            console.log('post请求失败')
          })*/
          /*let str = this.content;
          console.log(str);
          axios.post(url,str).then((res)=>{
            Toast('发表成功');
            console.log(res.data.message);
          }).catch(err=>{
            Toast('发表失败');
            console.log('post请求失败')
          })*/
        }
        
      },
      // 2.0 获取评论
      getcomment(){
        //console.log('正在获取评论:'+this.pageindex);
        let url = 'http://webhm.top:8899/api/getcomments/'+ this.artid +'?pageindex='+ this.pageindex;
        axios.get(url).then(res=>{
          if(this.pageindex==1){
            this.comments = res.data.message;
          }else{
            this.comments = this.comments.concat(res.data.message);
          }
          // console.log(this.comments)
          if(res.data.message == ''){
            Toast('暂无更多数据');
          }
        }).catch(err=>{
          console.log("404: "+error);
        });
      },
      getmore(){
        this.pageindex++;
        this.getcomment();

      }
    },
    created(){
      this.getcomment();
    },
    props: ['artid']
  }
</script>
<style scoped>
  .tmplsub {
  }
  .subminttitle, .sublisttitle {
    width: 100%;
    line-height: 30px;
    padding: 5px;
    margin-top: 20px;
    border-bottom: 1px solid rgba(92,92,92,0.4);
  }
  .subminttitle, .sublisttitle h4 {
    display: inline-block;
    width: 70%;
    font-size: 20px;
    font-weight: bold;
  }
  .sublisttitle span {
    font-size: 14px;
    color: rgba(92,92,92,0.8);
  }
  .submintarea {
    padding: 10px 10px 30px 10px;
    border-bottom: 1px solid rgba(92,92,92,0.4);
  }
  .textarea {
    margin-top: 5px;
    font-size: 14px;
    margin-bottom: 5px;
    height: 100px;
  }
  .submitlist {
    list-style: none;
    padding: 5px;
    margin: 0 5px;
  }
  .submitlist li {
    border-bottom: 1px solid rgba(92,92,92,0.4);
    padding: 5px;
  }
  .content {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .user {
    display: inline-block;
    color: #26a2ff;
    font-size: 14px;
    font-weight:600;
    width: 45%;
  }
  .time {
    display: inline;
    font-size: 14px;
    width: 40%;
  }
  #pullrefresh{
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: inherit;*/
  }
</style>
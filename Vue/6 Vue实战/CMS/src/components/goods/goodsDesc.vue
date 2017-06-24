<template>
	<div class="tmpl">
		<!-- 商品详情区域 -->
		<h3>{{info.title}}</h3>
		<div class="content">
			<div v-html="info.content"></div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
  export default{
    data(){
      return {
        goodsid:0,
				info:[]
      }
    },
    created(){
      this.goodsid = this.$route.params.id;
      this.getInfo();
    },
    methods: {
      getInfo(){
        var url = 'http://webhm.top:8899/api/goods/getdesc/'+this.goodsid;
        axios.get(url).then(response=>{
          //console.log(response);
          this.info = response.data.message[0];
        }).catch(error=>{
          console.log("404: "+error);
        })
			}
		}
  }
</script>
<style scoped>
	.tmpl {
		padding: 5px;
	}
	.tmpl h3{
		color: #0094ff;
		padding: 10px;
		border-bottom: 1px solid rgba(92,92,92,0.3);
	}
	.tmpl .content {
		margin-top: 10px;
	}
</style>
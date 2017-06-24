<template>
	<div class="tmpl">
		<!-- 商品图片轮播 -->
		<div class="imgsilder">
			<subImgSilder :imgList="list"></subImgSilder>
		</div>
		<!-- 商品购买区域 -->
		<div class="info">
			<div class="title" v-text="info.title"></div>
			<div class="price">
				<div class="market_price">
					市场价：<span>￥{{info.market_price}}</span>
				</div>
				<div class="sell_price">
					销售价：<span>￥{{info.sell_price}}</span>
				</div>
				<div class="count">
					<span>购买数量：</span>
					<subNumber class="subnumber" v-on:count="getcount"></subNumber>
				</div>
				<div class="btn">
					<div class="buy">
						<mt-button type="primary">立即购买</mt-button>
					</div>
					<div class="add">
						<mt-button type="danger">加入购物车</mt-button>
					</div>
				</div>
			</div>
		</div>
		<!-- 商品参数区域 -->
		<div class="desc">
			<div class="title">商品参数</div>
			<div class="info">
				<div class="goods_no">商品货号： <span>{{info.goods_no}}</span></div>
				<div class="stock_quantity">库存情况： <span>{{info.stock_quantity}}</span>件</div>
				<div class="add_time">上架时间： <span></span>{{info.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</div>
			</div>
		</div>
		<!-- 商品图文信息 -->
		<div class="footer">
			<mt-button @click="desc" class="twdesc" type="primary" size="large" plain>图文介绍</mt-button>
			<mt-button @click="comment" type="danger" size="large" plain>商品评论</mt-button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import subImgSilder from '../subcomp/subimgsilder.vue'
	import subNumber from '../subcomp/subnumber.vue'

	export default {
		data(){
			return{
				list:[],
				info:[],
	      artid: 0
			}
		},
		components:{
      subImgSilder,
      subNumber
		},
		created(){
	    this.artid = this.$route.params.id;
			this.getlunbo();
			this.getinfo();
			this.getcount();
		},
		methods:{
			getlunbo(){
				var url = 'http://webhm.top:8899/api/getthumimages/'+this.artid;
		    axios.get(url).then(response=>{
		      //console.log(response);
		      this.list = response.data.message;
		    }).catch(error=>{
		      console.log("404: "+error);
		    })
			},
      getinfo(){
        var url = 'http://webhm.top:8899/api/goods/getinfo/'+this.artid;
        axios.get(url).then(response=>{
          //console.log(response);
          this.info = response.data.message[0];
        }).catch(error=>{
          console.log("404: "+error);
        })
      },
			//用来接收子组件传入的值
			getcount(count){
				//console.log('count:'+count);
			},
			//进入商品详情界面
			desc(){
        let id = this.artid;
        this.$router.push({name:'goodsDesc',params:{id:id}})
			},
			//进入评论组件
			comment(){
			  let id = this.artid;
			  //console.log(this.$router);
			  this.$router.push({name:'goodsComment',params:{id:id}})
			}
		}
	}
</script>

<style scoped>
	.tmpl {
		font-size: 14px;
	}
	.imgsilder,.info,.desc{
		margin: 5px;
		border: 1px solid #ccc;
		border-radius: 6px;
		overflow: hidden;
		background: #fff;
		color: #333333;
	}
	.imgsilder {
		margin-top: 50px;
	}
	.info,.desc,.footer {
		padding: 10px;
	}
	.info .title{
		font-size: 16px;
		color: #1ab5f8;
		font-weight: 600;
		line-height: 28px;
		border-bottom: 1px solid #ccc;
	}
	.info .price {
		padding: 14px;
	}
	.info .price .market_price,.info .price .sell_price {
		display: inline-block;
	}
	.info .price .market_price span {
		text-decoration: line-through;
	}
	.info .price .sell_price {
		margin-left: 24px;
	}
	.info .price .sell_price span {
		font-size: 18px;
		color: red;
	}
	.info .price .count{
		margin: 20px 0;
	}
	.info .price .count span{
		display: inline-block;
		width: 30%;
		margin: 20px 0;
	}
	.info .price .count .subnumber{
		margin-left: 20px;
	}
	.info .price .btn .buy,.info .price .btn .add{
		display: inline-block;
		width: 45%;
	}
	.desc .title{
		font-size: 14px;
		line-height: 34px;
		border-bottom: 1px solid #ccc;
	}
	.desc .info {
		padding: 10px 30px;
		border: none;
		line-height: 26px;
	}
	.footer .twdesc {
		margin: 20px 0;
	}
</style>
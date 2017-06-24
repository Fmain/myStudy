<template>
	<div class="tmpl">
	<div>
		<div class="goodsList">
			<ul>
				<li v-for="item in goodsList">
					<router-link v-bind='{to:"/goods/goodsInfo/"+item.id}'>
		        <img :src="item.img_url">
		        <div class="title" v-text="item.title"></div>
		        <div class="price">
							<span class="sell_price">￥{{item.sell_price}}</span>
							<span class="market_price">￥{{item.market_price}}</span>
		        </div>
		        <div class="info">
		        	<span class="remai">热卖中</span>
		        	<span class="shengyu">剩{{item.stock_quantity}}件</span>
		        </div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
        pageindex: 1,
        goodsList: []

			}
		},
		methods: {
      getgoods(){
        let url = 'http://webhm.top:8899/api/getgoods?pageindex=' + this.pageindex;
        axios.get(url).then(res=>{
          this.goodsList = res.data.message;
      		// console.log(this.goodsList);
        }).catch(err=>{
          console.log("404: "+error);
        });
      }
    },
    created(){
      this.getgoods();
    },
    props: ['artid']
	}
</script>

<style scoped>
	ul,li{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.goodsList img {
		width: 100%;
	}
	.goodsList {
		padding: 15px 5px;
	}
	.goodsList li{
		width: 46%;
		margin: 2%;
		display: inline-block;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}
	.goodsList .title {
		background: #fff;
		height: 43px;
		margin-top: -5px;
		font-size: 14px;
		color: #000;
		overflow: hidden;
	}
	.goodsList .price {
		margin: 10px 1px;
	}
	.goodsList .sell_price {
		color: red;
		font-size: 16px;
		font-weight: 500;
	}
	.goodsList .market_price {
		color: #4b4b4b;
		font-size: 14px;
		margin-left: 5px;
		text-decoration: line-through;	
	}
	.goodsList .info {
		margin: 5px;
		color: #a9a9a9;
		font-size: 14px;
	}
	.goodsList .info .remai,.goodsList .info .shengyu {
		display: inline-block;
		margin-left: 5px;
	}
	.goodsList .info .remai {
		width: 50%;
	}
</style>
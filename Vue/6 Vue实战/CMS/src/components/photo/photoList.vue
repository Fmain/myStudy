<template>
	<div class="tmpl">
		<ul class="imgcategory">
			<li v-for="item in imgcategory">{{item.title}}|</li>
		</ul>
		<!-- 分类 -->
		<div class="cate">

		</div>
		<!-- 图片列表 -->
		<!-- <div class="imgList">
			<ul>
			  <li v-for="item in imgcategory">
			    <img v-lazy="">
			  </li>
			</ul>
		</div> -->

	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				imgcategory:[]
			}
		},
		created(){
			let url = 'http://webhm.top:8899/api/getimgcategory';
			axios.get(url).then(res=>{
				this.imgcategory = res.data.message;
				// console.log(this.imgcategory)
			}).catch(err=>{
				console.log('404: ' + err)
			});
		}
	}
</script>

<style scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.imgcategory li {
	list-style: none;
	font-size: 12px;
	float: left;
}

</style>
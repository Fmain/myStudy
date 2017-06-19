<template>
	<div class="tmpl">
		<!-- 分类 -->
		<div class="cate">
			<ul>
				<a href="#">全部</a>
				<li v-for="item in imgcategory">
					<a :id="item.id">{{item.title}}{{item.id}}</a>
				</li>
			</ul>
		</div>
		<!-- 图片列表 -->
		 <div class="imgList">
			<ul>
			  <li v-for="item in images">
			    <img v-lazy="item.img_url">
			  </li>
			</ul>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				imgcategory:[],
        images:[],
        cateid:0
			}
		},
		methods: {
      getimgcategory(){
        let url = 'http://webhm.top:8899/api/getimgcategory';
        axios.get(url).then(res=>{
          this.imgcategory = res.data.message;
          // console.log(this.imgcategory)
        }).catch(err=>{
          console.log('404: ' + err)
        });
			},
      getimages(){
        let url = 'http://webhm.top:8899/api/getimages/' + this.cateid;
        axios.get(url).then(res=>{
          this.images = res.data.message;
          // console.log(this.images)
        }).catch(err=>{
          console.log('404: ' + err)
        });
      },
			change(){
        alert(this.id);
        this.cateid = this.imgcategory.id;
      }
		},
		created(){
			this.getimgcategory();
			this.getimages();

		}
	}
</script>

<style scoped>
.tmpl {
	overflow: hidden;
}
ul {
	margin: 0px;
	padding: 5px;
	list-style: none;
}
li {
	display: inline-block;
}
li a {
	color: #0094ff;
	padding: 10px 5px;
}
img {
	width: 100%;
}
.imgList li {
	width: 100%;
}
image[lazy=loading] {
	width: 100%;
	height: 100%;
	margin: auto;
}
.cate {
	min-width: 400px;
	overflow-x: auto;
	overflow-y: hidden;
}
.cate ul {
	width: 900px;
	font-size: 12px;
}

</style>
<template>
	<div class="tmpl">
		<!-- 分类 -->
		<div class="cate">
			<ul>
				<li>
					<a href="javascript:;" @click="change(0)">全部</a>
				</li>
				<li v-for="item in imgcategory">
					<a href="javascript:;" @click="change(item.id)">{{item.title}}</a>
				</li>
			</ul>
		</div>
		<!-- 图片列表 -->
		 <div class="imgList">
			<ul>
			  <li v-for="item in images">
					<router-link v-bind='{to:"/photo/photoInfo/"+item.id}'>
						<img v-lazy="item.img_url">
						<div>
							<p class="title" v-text="item.title"></p>
							<p v-text="item.zhaiyao"></p>
						</div>
					</router-link>
			  </li>
			</ul>
		</div>
		<!-- 加载动画 -->
		<!--<mt-spinner class="onloadImg" type="fading-circle" color="#3680FF" v-show="isShow"></mt-spinner>-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				imgcategory:[],
        images:[],
        cateid:0,
				imgid: 0,
				isShow: false
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
        this.isShow = true;
        let url = 'http://webhm.top:8899/api/getimages/' + this.cateid;
        axios.get(url).then(res=>{
          this.images = res.data.message;
          // console.log(this.images)
        }).catch(err=>{
          console.log('404: ' + err)
        });
        this.isShow = false;
      },
			change(i){
        //alert(i);
        this.cateid = i;
        this.getimages();
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

.cate {
	/*overflow-x: auto;*/
	overflow-y: hidden;
}
.cate ul {
	width: 700px;
	font-size: 12px;
}

img {
	width: 100%;
}
.imgList li {
	width: 100%;
	position: relative;
	margin-bottom: 5px;
}
.imgList li div{
	/*height: 40%;*/
	position: absolute;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.4);
	overflow: hidden;
}

.imgList li div p {
	font-size: 12px;
	color: #fff;
	margin-bottom: 4px;
	line-height: 18px;
}
.imgList li div .title {
	font-weight:600;
	font-size: 13px;
}
image[lazy=loading] {
	width: 100%;
	height: 100%;
	margin: auto;
}
.onloadImg {
	position: absolute;
	left: 50%;
	margin-left: -14px;
	top: 40%;
}
</style>
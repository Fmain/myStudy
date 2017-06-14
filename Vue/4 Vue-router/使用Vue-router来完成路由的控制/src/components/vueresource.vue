<template>
	<div class="temp">
		你好
		{{list}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:'',
				postresbody:'',
				jsonpbody:''
			}
		},
		created(){
			this.jsonpdemo();
		},
		methods:{
			getdemo(){
				var url = 'http://webhm.top:8899/api/getnewslist';
				// this.$http.get(url).then(function(res){},function(res){});
				this.$http.get(url).then(res=>{
					//成功获取服务器响应回来的数据
					this.list = res.body;
				},res=>{
					//发生了异常
					console.log(404)
				});
			},
			postdemo(){
				var url = 'http://webhm.top:8899/api/post';
				this.$http.post(url,{name:'Ryan'},{emulateJSON:true}).then(res=>{
					this.list = res.body;
				},res=>{
					console.log(404)
				})
			},
			jsonpdemo(){
				var url = 'http://webhm.top:8899/api/jsonp';
				this.$http.jsonp(url).then(res=>{
					this.list = res.body;
				},res=>{
					console.log(404)
				})

			}

		}
	}
</script>

<style></style>
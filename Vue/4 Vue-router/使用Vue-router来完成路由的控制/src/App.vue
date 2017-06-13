<template>
	<div class="temp">
		<!-- <a href="#/Account/Login">登录</a>
		<a href="#/Account/Register">注册</a> -->

		<router-link to="/Account/Login/13/Ryan">登录</router-link>
		<router-link to="/Account/Register">注册</router-link>


		<!-- 路由出口 -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style>
	
</style>
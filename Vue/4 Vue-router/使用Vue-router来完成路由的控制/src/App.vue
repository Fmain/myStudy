<template>
	<div class="temp">
		<!-- <a href="#/Account/Login">登录</a>
		<a href="#/Account/Register">注册</a> -->

		<router-link to="/Account/Login/13/Ryan">登录</router-link>
		<router-link to="/Account/Register">注册</router-link>
		<router-link to="/Account/VueResource">VueResource</router-link>

		<!-- 路由出口 -->
		<router-view></router-view>

		<p>
			<hr>
			1.0 mint-ui的组件使用 <br>
			<mt-button type="danger" size="normal" icon="more" plain>danger</mt-button>
		</p>
		<p>
			<hr>
			2.0 mui的组件使用 <br>
			<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">Email</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div></a></li>
    </ul>
		</p>
	</div>
</template>

<script>
	// import {Button} from 'mint-ui'
	// import Vue from 'vue'
	// Vue.component(Button.name,Button);

	//1.1 在script标签中使用mint-ui组件,需要重新导入,否则报错未定义
	import {Toast} from 'mint-ui'
	Toast('hello')
	export default{
		created(){
			// Toast('created')
		},
		data(){
			return{

			}
		}/*,
		components:{
			'mt-button':Button
		}*/
	}
</script>

<style>
	
</style>
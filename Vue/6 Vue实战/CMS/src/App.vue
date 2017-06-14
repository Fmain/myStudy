<template>
<div class="app">
  <!-- header-->
  <mt-header fixed title="CMS内容管理系统"></mt-header>
  <!-- end header-->
  <!-- content-->
  <!--路由占位-->
  <router-view></router-view>
  <!-- end content-->
  <!-- footer-->
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/Home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/member">
      <span class="mui-icon mui-icon-email"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item" to="/shopcar">
      <span class="mui-icon mui-icon-contact">
        <span class="mui-badge">4</span>
      </span>
      <span class="mui-tab-label">购物</span>
    </router-link>
    <router-link class="mui-tab-item" to="/search">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
  <!-- end footer-->
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
<template>
	<div class="tmpl">
    <!-- header-->
        <mt-header fixed title="CMS内容管理系统"></mt-header>
    <!-- end header-->
    <!-- content-->
        <!--路由占位-->
        <router-view></router-view>
    <!-- end content-->
    <!-- footer-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact">                                    <span class="mui-badge">3</span>
                </span>
                <span class="mui-tab-label">购物</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
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
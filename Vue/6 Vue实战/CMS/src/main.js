// 1.0 导入相关包
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import mintUI from 'mint-ui'
// 1.1 导入mint-ui的css
import 'mint-ui/lib/style.min.css'
// 1.2.1 导入mui的css和字体图标样式
import '../statics/mui/css/mui.css'
import '../statics/mui/css/icons-extra.css'
// 1.2.2 导入mui相关的js
import '../statics/mui/js/mui.min.js'
// 1.3 导入自定义的全局样式,可以用来覆盖mint-ui和mui中的样式
import  '../statics/css/site.css'

// 2.0 在Vue中加载相关组件
Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(mintUI);

// 3.0 导入相关.vue组件
import App from './App.vue'
import Home from './components/Home/Home.vue'
import member from './components/member/member.vue'
import shopcar from './components/shopcar/shopcar.vue'
import search from './components/search/search.vue'
// 3.1 定义路由规则对象
let router = new vueRouter({
  linkActiveClass:'mui-active',
	routes:[
		{name:'root',path:'/',redirect:'/Home'},//重定向,此次不可用component,否则选项图标不自动高亮
		{name:'Home',path:'/Home',component:Home},
		{name:'member',path:'/member',component:member},
		{name:'shopcar',path:'/shopcar',component:shopcar},
		{name:'search',path:'/search',component:search},

	]
});

// 4.0 使用router
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
// 1.0 导入相关包
import Vue from 'vue';
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import mintUI from 'mint-ui'
// 1.1 导入相关.vue组件
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import VueResource from './components/vueresource.vue'


//导入mint-ui的css
import 'mint-ui/lib/style.min.css'

//导入mui的css和字体图标样式
import '../statics/mui/css/mui.css'
import '../statics/mui/css/icons-extra.css'
//导入mui相关的js
import '../statics/mui/js/mui.min.js'

// 2.0 在Vue中加载vueRouter
Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(mintUI);

// 3.0 定义路由规则对象
let router = new vueRouter({
	routes:[
		{name:'Login',path:'/Account/Login/:id/:name',component:Login},
		{name:'Register',path:'/Account/Register',component:Register},
		{name:'VueResource',path:'/Account/VueResource',component:VueResource}
	]
});

// 4.0 使用router
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
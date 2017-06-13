// 1.0 导入相关包
import Vue from 'vue';
import vueRouter from 'vue-router'
// 1.1 导入相关.vue组件
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'


// 2.0 在Vue中价值vueRouter
Vue.use(vueRouter);

// 3.0 定义路由规则对象
let router = new vueRouter({
	routes:[
		{name:'Login',path:'/Account/Login/:id/:name',component:Login},
		{name:'Register',path:'/Account/Register',component:Register}
	]
});

// 4.0 使用router
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
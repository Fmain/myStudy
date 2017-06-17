import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../components/Home/Home.vue'
import member from '../components/member/member.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import search from '../components/search/search.vue'
import newsList from '../components/news/newsList.vue'
import newsInfo from '../components/news/newsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{name:'root',path:'/',redirect:'/Home'},//重定向,此次不可用component,否则选项图标不自动高亮
		{name:'Home',path:'/Home',component:Home},
		{name:'member',path:'/member',component:member},
		{name:'shopcar',path:'/shopcar',component:shopcar},
		{name:'search',path:'/search',component:search},
		{name:'newsList',path:'/news/newsList',component:newsList},
		{name:'newsInfo',path:'/news/newsInfo/:id',component:newsInfo}
  ]
})

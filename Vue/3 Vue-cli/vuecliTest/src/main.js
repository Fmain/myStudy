
// 1. 导入vue的包
import Vue from 'vue' //'vue' 会自动去node_modules文件夹中查找vue\dist\vue.js
// 2. 导入当前目录的App.vue模块
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 3. 实例化一个Vue的对象实例
new Vue({
	el: '#app',
	/*render: function (create) {
		create(App);
	}*/
	// render:create => create(App)
	render:c => c(App)
})

/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

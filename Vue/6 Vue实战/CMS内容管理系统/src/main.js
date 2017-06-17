
import Vue from 'vue'
import App from './App'
import router from './router'

//导入mint-ui组件
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(mintUI)

//导入mui相关组件
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'
import '../static/mui/js/mui.min.js'

//导入自定义css全局样式,覆盖mint-ui和mui中的样式
import  '../static/css/site.css'

import moment from 'moment'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

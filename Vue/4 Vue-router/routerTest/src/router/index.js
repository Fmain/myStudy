import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        defaule: Hello,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/fmain',
      name: 'Hello',
      components: {
        defaule: Hello,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {path: '/', name: 'Hello/hi', component: Hi},
        {path: 'hi1', name: 'hi1', component: Hi1},
        {path: 'hi2', name: 'hi2', component: Hi2}
      ]
    }
  ]
})

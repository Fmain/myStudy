<template>
  <div class="tmpl">
    <!--利用mint-ui组件实现轮播图-->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in list">
        <img class="img" :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

export default{
  data(){
    return{
      list: [{
        url: 'http://www.itcast.cn/subject/phoneweb/index.html',
        img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
      },{
        url: 'http://www.itcast.cn/subject/phoneweb/index.html',
        img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
      }]

    }
  }
}

</script>

<style scoped>
  .mint-swipe {
    height: 250px;
  }
  .img {
    width: 100%;
    height: 100%;
  }
</style>
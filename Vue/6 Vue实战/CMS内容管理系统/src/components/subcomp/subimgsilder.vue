<template>
  <div>
    <!--利用mint-ui组件实现轮播图-->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in imgList">
        <img class="img" :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props: ['imgList']
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
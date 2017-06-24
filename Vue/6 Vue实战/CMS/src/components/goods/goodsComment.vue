<template>
  <div class="tmpl">
    <!-- 商品评论区域 -->
    <subComment :artid="goodsid"></subComment>
  </div>
</template>
<script>
  import subComment from '../subcomp/subcomment.vue'
  export default{
    data(){
      return {
        goodsid:0
      }
    },
    created(){
      this.goodsid = this.$route.params.id;
    },
    methods: {},
    components:{
      subComment
    }
  }
</script>
<style scoped>

</style>
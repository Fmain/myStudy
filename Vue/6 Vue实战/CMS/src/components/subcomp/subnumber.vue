<template>
  <div class="subtmpl">
    <div class="minus" @click="minus">-</div>
    <div class="num">{{count}}</div>
    <div class="add" @click="add">+</div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        count:1
      }
    },
    methods: {
      minus(){
        if(this.count<=0){
          this.count = 0;
          return;
        };
        this.count--;
        this.notiflycount();
      },
      add(){
        this.count++;
        this.notiflycount();
      },
      notiflycount(){
        let key = 'count';
        this.$emit(key,this.count)
      }
    },
  }
</script>
<style scoped>
  div {
    display: inline-block;
    padding: 5px;
  }
  .subtmpl div {
    width: 50px;
    text-align: center;
    border: 1px solid rgba(92,92,92,0.3);
  }
  .subtmpl .minus,.subtmpl .add{
    width: 30px;
    cursor: pointer;
  }
</style>
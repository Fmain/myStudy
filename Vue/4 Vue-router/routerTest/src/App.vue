<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div id="nav">
      <router-link to='/'>首页</router-link> |
      <router-link to='/hi'>Hi页面</router-link> |
      <router-link :to="{name:'hi1',params:{username: 'fmain',id:'888'}}">Hi页面1</router-link> |
      <router-link to='hi2'>Hi页面2</router-link>
    </div>

    <router-view></router-view>
    <router-view name="left" style="float:left;width:40%;height:300px;background:#ccc;marginTop:10px;"></router-view>
    <router-view name="right" style="float:right;width:60%;height:300px;background:#c0c;marginTop:10px;"></router-view>
    <p> {{ $route.name }} </p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  font-size: 20px;
  margin: 20px;
}
a {
  text-decoration: none;
  color: #ccc;
}
a:hover {
  background: #555;
}
</style>

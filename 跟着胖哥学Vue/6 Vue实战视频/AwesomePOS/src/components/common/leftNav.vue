<template>
  <div class="left-nav">
    <ul>
      <li>
      <i class="icon iconfont icon-goumai"></i><div>收银</div>
      </li>
      <li>
      <i class="icon iconfont icon-dianpu"></i><div>店铺</div>
      </li>
      <li>
      <i class="icon iconfont icon-hanbao"></i><div>商品</div>
      </li>
      <li>
      <i class="icon iconfont icon-huiyuanqia"></i><div>会员</div>
      </li>
      <li>
      <i class="icon iconfont icon-shouji"></i><div>统计</div>
      </li>
      <li>
      <i class="icon iconfont icon-gongnengjianyi"></i><div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background: #1D8CE0;
  width: 6%;
  float: left;
}
.iconfont {
  font-size: 22px;
}
.left-nav ul {
  height: 100%;
  padding: 0;
  margin: 0;
}
.left-nav li {
  list-style: none;
  text-align: center;
  background: #20a0ff;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>

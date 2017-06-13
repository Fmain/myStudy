<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              数量:<small>0</small> 金额:<small>0元</small>
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="hot-goods">
          <div class="title">热销商品</div>
          <div class="hot-goods-list">
            <ul>
              <li v-for="v in hotGoods" style="cursor:pointer;" @click="addOrderList(v)">
                  <span>{{v.goodsName}}</span>
                  <span class="o-price">￥{{v.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="item in type0Goods">
                    <a href="javascript:;">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">{{item.price}}元</span>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="item in type1Goods">
                    <a href="javascript:;">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">{{item.price}}元</span>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="item in type2Goods">
                    <a href="javascript:;">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">{{item.price}}元</span>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="item in type3Goods">
                    <a href="javascript:;">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">{{item.price}}元</span>
                    </a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data () {
    return {
      tableData: [],
      hotGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    }
  },
  created () {
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response => {
      // console.log(this.hotGoods)
      this.hotGoods = response.data
    })
    .catch(error => {
      alert('网络错误,不能访问')
    });
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      // console.log(response);
      //this.oftenGoods=response.data;
      this.type0Goods=response.data[0];
      this.type1Goods=response.data[1];
      this.type2Goods=response.data[2];
      this.type3Goods=response.data[3];
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
  },
  mounted () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
  },
  methods: {
    addOrderList(goods){
      goods.totalCount = 0;
      goods.totalMoney = 0;
      let isHave = false;

      // console.log(goods.goodsId);
      for (var i = 0; i < this.tableData.length; i++) {
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave = true
        }
      }
      if (isHave) {
        let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        }
        this.tableData.push(newGoods)
      }
      this.tableData.forEach((element) => {
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.price*element.count);   
      });
    }
  }
}
</script>

<style scoped>
  .pos-order {
    background: #F9FAFC;
    border-right: 1px solid #c0ccda;
  }
  .div-btn{
    margin-top: 10px;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .hot-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background: #fff;
  }
  .o-price{
    color: #58b7ff;
  }
  .goods-type{
    clear: both;
  }
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
  }
  .cookList li span{
    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 15px;
    padding-left: 10px;
    color:brown;
  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
  .totalDiv{
    background: #fff;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
  }
</style>

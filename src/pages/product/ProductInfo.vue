<template>
  <div id='ProductInfo'>
    <product-header></product-header>
    <div class='img'><img :src="ProductInfo.src || productionInfo.src"></div>
    <div class='p-content'>
      <div class='row'>{{ProductInfo.title || productionInfo.title}}</div> 
      <div class='row'>
        <span>价格：{{ProductInfo.unit || productionInfo.unit}}</span>
        <span> {{ProductInfo.price || productionInfo.price}}</span>
      </div>
      <div class='row'><span>遥控距离：</span>{{ProductInfo.RemoteDistance || productionInfo.RemoteDistance}}</div>
      <div class='row'><span>用于：</span>{{ProductInfo.use || productionInfo.use}}</div>
      <div class='row'><span>优势：</span>{{ProductInfo.comments || productionInfo.comments}}</div>
    </div>
    
  </div>
</template>

<script>
import ProductHeader from './components/ProductHeader'
export default {
  name: 'ProductInfo',
  components: {
    ProductHeader
  },
  data () {
  	return {
      productionInfo:{}
    }
  },
  mounted(){
    this.productionInfo = JSON.parse(window.sessionStorage.getItem('CHANGEINFO'))
    console.log(this.productionInfo)
  },
  computed:{
    ProductInfo: function() {
      return this.$store.state.obj1;
    }
  } 
}
</script>

<style lang='scss' scoped>
  #ProductInfo{
    .img{
      height: 330px;
      img{
        height:100%;
      }
    }
    .p-content{
      margin: 0 auto;
      width: 350px;
      text-align: left;
      font-size: 14px;
      padding: 10px;
      .row{
        padding: 5px;
        border: 1px dotted #c2ced8;
      }
    }
  }
</style>

<template>
  <div id='aside'>
    <ul @click='handleClick' class='list'>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe602;</span>
        首页
      </li>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe620;</span>
        产品列表
      </li>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe605;</span>
        客户
        <span 
          v-show='!see'
          class="iconfont el-input__icon s-left" slot="suffix">&#xe606;</span>
        <span 
          v-show='see'
          class="iconfont el-input__icon s-left" slot="suffix">
          &#xe611;
        </span>
        <div v-show='see'>
          <li>客户列表</li>
          <li>分布地区</li>
        </div>
      </li>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe600;</span>
        销量
      </li>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe601;</span>
        内部联系
      </li>
      <li>
        <span class="iconfont el-input__icon" slot="prefix">&#xe60b;</span>
        建议
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeAside',
  data () {
  	return {
      see:false
    }
  },
  methods: {
    handleClick() {
      let self=this;
      self.see=!self.see
    }
  }  
}
</script>

<style lang="scss" scoped>
  #aside{
    .list{
      padding-left: 0;
      margin-top:0;
      li{
        list-style-type: none;
        line-height: 70px;
        font-size: 20px;
        text-align: left;
        padding-left:20px;
        .s-left{
          padding-left: 70px;
        }
        &:hover{
          background-color:#162338;
        }
        span{
          padding-right: 10px;
        }
      }
    }
  }
</style>


<template>
  <div>
    <el-container>
      <el-header height='10vh'>
        <home-header></home-header>
      </el-header>
      <el-container style='height:90vh'>
        <!-- 动态绑定class属性，控制移动 -->
        <el-aside :width="asideWidth" refs="aside" :class="{'one':isOne, 'two':isTwo}">
          <home-aside></home-aside>
        </el-aside>
        <el-main>
          <home-main></home-main>
          <router-view/> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeAside from './components/HomeAside'
import HomeMain from './components/HomeMain'
export default {
  name: 'Home',
  data () {
  	return {
      asideWidth: '200px',
      isOne: false,
      isTwo: false
    }
  },
  components:{
    HomeHeader,
    HomeAside,
    HomeMain
  },
  computed:{
    isCollapse: function() {
      return this.$store.state.isCollapse;
    }
  },
  watch:{
    isCollapse:{
      handler:function(val, old){
        console.log(val)
        let self = this;
        if(val){
          self.asideWidth = '50px'
          self.isOne = true
          self.isTwo = false
        }else{
          self.asideWidth = '200px'
          self.isOne = false
          self.isTwo = true
        }
      },
      deep:true
    }
  },
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color:#162338;
    color: #FFF;
    text-align: center;
    // padding-top:10px;
    height: 10vh;
    line-height: 10vh;
  } 
  .el-aside {
    background-color:#0f1a2b;
    color: #FFF;
    text-align: center;
    // height: 90vh;
    // position: fixed;
    // top: 100px;
    // left: 0;
    // bottom: 0;
  }
  .el-main {
    // position:relative;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding:0;
    // height: 90vh;
    // height: 100vh;
    // overflow:scroll;
    // margin-left: 200px;
    // margin-top: 100px;
    // overflow: scroll;
  }
  .one{
    animation:mymove 1s 1;
  }
  @keyframes mymove{
    from{
      width: 200px;
    }
    to{
      width: 50px;
    }
  }
  .two{
    animation:myleave 1s 1;
  }
  @keyframes myleave{
    from{
      width: 50px;
    }
    to{
      width: 200px;
    }
  }
</style>


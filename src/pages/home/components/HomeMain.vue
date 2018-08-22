<template>
  <div id='main' style='height:30px;background:#d9e4ec' >
    <template  v-model="isCollapse">
      <span class="iconfont" style='padding: 0 10px;' @click="handleControl">&#xe607;</span>
      <!-- <span class="iconfont" style='padding-right:10px;' @click="handleOpen">&#xe661;</span> -->
    </template>   
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- 比如点击了销量  存储的是['首页','销量']  但是一刷新  store里面的值读取到的就是空值了， 所以就拿不到数据了  然后在页面判断这个是不是空的（长度是不是0）  如果是空的  就循环tab  如果不是空的还继续循环这个tabList -->
      <template v-if='tabList.length !=0'>
        <template v-for="item in tabList">
          <el-breadcrumb-item>{{item}}</el-breadcrumb-item>
        </template>
      </template>
      <template v-else>
         <template v-for='item in tab'>
            <el-breadcrumb-item>{{item}}</el-breadcrumb-item>
         </template>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  data () {
    return{
      isCollapse: false,
      tab:[]
    }
  },
  mounted(){
    let self=this;
    self.tab=JSON.parse(window.sessionStorage.getItem('HOME_MAIN_LSIT'))
  },
  computed:{
    tabList: function() {
      return this.$store.state.list;
    }
  },
  methods:{
    handleControl(){
      let self=this;
      self.isCollapse=!self.isCollapse;
      self.$store.dispatch('controlShow',self.isCollapse)
    }
    // handleOpen(){
    //   let self=this;
    //   self.isCollapse=!self.isCollapse;
    //   self.$store.dispatch('controlShow',self.isCollapse)
    // }
  }
}
</script>

<style lang="scss" scoped>
  #main{
    display: flex;
    align-items: center;
    height: 25px;
  }
</style>

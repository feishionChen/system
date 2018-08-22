<template>
  <div id='aside'>
    <!-- <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
       @select='handleSelect'>
      <el-menu-item  index="1" class='li'>
        <span class="iconfont">&#xe602;</span>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item  index="2" class='li'>
        <span class="iconfont">&#xe620;</span>
        <span slot="title">产品列表</span>
      </el-menu-item>
      <el-submenu  index="3">
        <template class='li'slot="title">
          <span class="iconfont">&#xe605;</span>
          <span>客户</span>
        </template>
        <el-menu-item-group class="el-menu-vertical-demo">
          <el-menu-item  index="3-1" class='li' >客户列表</el-menu-item>
          <el-menu-item  index="3-2" class='li' >分布地区</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item  index="4" class='li'>
        <span class="iconfont">&#xe600;</span>
        <span slot="title">销量</span>
      </el-menu-item>
      <el-menu-item  index="5" class='li'>
        <span class="iconfont">&#xe601;</span>
        <span slot="title">内部联系</span>
      </el-menu-item>
      <el-menu-item  index="6" class='li'>
        <span class="iconfont">&#xe60b;</span>
        <span slot="title">建议</span>
      </el-menu-item>
    </el-menu> -->
    <el-menu
      :default-active="defaultActiveIndex"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      @select='handleSelect'
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <template v-for="item in asideList">
        <template v-if="item.hasOwnProperty('children')">
          <el-submenu :index="item.key">
            <template class='li' slot="title">
              <!-- i是element封装的,此处缩放功能用span起不到效果 -->
              <i class="iconfont" v-html="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group class="el-menu-vertical-demo">
              <template v-for="child in item.children">
                <el-menu-item :index="child.key" class='li'>{{child.title}}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.key" class='li'>
            <i class="iconfont" v-html="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HomeAside',
  data () {
  	return {
      defaultActiveIndex:'1',
      asideList: [
        {
          title: '首页',
          key: '1',
          icon: '&#xe602;',
          path: '/home'
        },
        {
          title: '产品列表',
          key: '2',
          icon: '&#xe620;',
          path: '/product'
        },
        {
          title: '客户',
          key: '3',
          icon: '&#xe605;',
          children: [
            {
              title: '客户列表',
              key: '3-1',
              path: '/customerList'
            },
            {
              title: '分布地区',
              key: '3-2',
              path: '/customerArea'
            }
          ]
        },
        {
          title: '销量',
          key: '4',
          icon: '&#xe600;',
          path: '/sales'
        },
        {
          title: '内部联系',
          key: '5',
          icon: '&#xe601;',
          path: '/contact'
        },
        {
          title: '建议',
          key: '6',
          icon: '&#xe60b;',
          path: '/suggest'
        },
      ],
    }
  },
    mounted () {
    let self =this;
    self.defaultActiveIndex = window.sessionStorage.getItem('HOME_ASIDE_INDEX')
    // self.INDEX=window.sessionStorage.getItem('HOME_ASIDE_INDEX')
  },
  computed:{
    isCollapse: function() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("open")
    },
    handleClose(key, keyPath) {
      console.log("close")
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath){
      let self = this;
      let item = self.asideList[indexPath[0] - 1];//获取当前第一列对象
      let str = []//保存最终数组
      if (item.key != '1') {
        str.push("首页")
      }
      if (item.hasOwnProperty('children')) {//判断当前第一对象中是否有children这个属性
        // 这里是当前第一对象 有children
        str.push(item.title)//先把当前第一对象的title加入到str数组中
        for(let it of item.children){//循环当前第一对象中的children
          if(it.key === indexPath[1]){//判断children循环中的对象的key值是不是等于indexPath数组下标为1的值
            str.push(it.title)//把children循环中的对象的title也加入str数组中
            self.$router.push(it.path)
            // 最终会获得两个值得数组
          }
        }
      }else{
        // console.log("item",item)
        // 这里是当前第一对象 没有有children
        str.push(item.title)//没有children的时候，把当前的title加入到str数组中
        
        self.$router.push(item.path)
      }
      window.sessionStorage.setItem('HOME_ASIDE_INDEX',index)
      window.sessionStorage.setItem('HOME_MAIN_LSIT',JSON.stringify(str))
      self.$store.dispatch("changeList", str)
    }
    // handleSelect(index,indexPath){
    //   // console.log(index);
    //   // console.log(indexPath);
    //   let self=this;
    //   let item=self.asideList[indexPath[0]-1];
    //   // console.log(item)
    //   let str=[];
    //   if (item.key !=1){
    //     str.push('首页')
    //   }
    //   if(item.hasOwnProperty('children')){
    //     str.push(item.title);
    //     for (let it of item.children){
    //       if(it.key==indexPath[1]){
    //          str.push(it.title)
    //        }
    //     }
    //   }else{
    //     str.push(item.title);
    //   }
    //   console.log(str)
    // }
  }  
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo{
    background: #0f1a2b;
    text-align: left;
    // width: 200px;
    border: 0;
    // height: 90vh;
    .li{
      color:#fff;
      &:hover{
        background-color:#162338;
      }
    }
  }
</style>


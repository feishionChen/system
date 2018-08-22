<template>
  <div id='header'>
    <!-- <div class="left">
      <div class="title">
        <img src="@/assets/img/logo.png">
      </div>
      <div class='l-left'>
        <p>后台管理系统</p>
      </div>
    </div>
    <div class="right">
      <div class="return">
        <router-link to='/' class="iconfont" slot="prefix">&#xe69f;</router-link>
      </div>
      <div class="r-right">
        <span class="iconfont el-input__icon" slot="prefix">&#xe693;</span>
        <p class='r-title'>万之声</p>
      </div>
    </div> -->
    <el-row :gutter="20">
      <el-col :span="20">
        <div class="g-left-box">
          <img src="@/assets/img/logo.png">
          <span>后台管理系统</span>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="g-right-box">
          <span class="iconfont people" slot="prefix">&#xe693;</span>
          <router-link to='/' tag='span' class="iconfont exit1" slot="prefix">&#xe69f;</router-link>
          <router-link to='/' tag='span'class="iconfont exit2">退出</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
  	return {

    }
  },
  methods: {

  }  
}
</script>

<style lang="scss" scoped>
// #header{
//   overflow:hidden;
//   .left{
//     float: left;
//     .title{
//       float: left;
//     }
//     .l-left{
//       float: left;
//       p{
//         margin:0;
//         color: #f7f2f2;
//         font-size: 28px;
//         font-weight: bold;
//         height: 61px;
//         line-height: 61px;
//       }
//     }
//   }
//   .right{
//     float:right;
//     .r-right{
//       float:right;
//       margin-right: 30px;
//       color: #FFF;
//       .r-title{
//         margin:0;
//       }
//       span{
//         font-size: 50px;
//       }
//     }
//     .return{
//       float:right;
//       height: 63px;
//       .span{
//         font-size: 30px;
//         color: #004fa3;
//         text-decoration: none;
//       }
//     }
//   }
// }
#header{
  // height: 10vh;
  // line-height:10vh;
  .g-left-box{
    height: 10vh;
    display:flex;
    align-items: center;
    img{
      display:block;
      width: 18%;
    }
    span{
      font-size:20px;
    }

  }
  .g-right-box{
    .people{
      font-size: 30px;
      margin-right: 20px;
    }
    .exit1{
      font-size: 20px;
    } 
    .exit2{
      font-size: 14px;
    }   
  }
}

</style>


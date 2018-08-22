<template>
  <div id='suggest'>
    <div class='s-ipt'>
      <h3>建议栏</h3>
      <el-input v-model="ipt1" placeholder="请输入用户名" clearable></el-input>
      <el-input
        type="textarea"
        :rows="6"
        placeholder="有您的建议，我们才能发展的更好"
        v-model="ipt2">
      </el-input>
      <el-button type="success" @click="submitText">提交</el-button>
    </div>
    <hr>
    <div class='s-comment'>
      <div>
        <el-button class='btn' type="primary">评论</el-button>
      </div>
      <br><br>
      <div class='comment' v-for="item in arr">
        <span class='s-name'> {{item.name}} ：</span>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		ipt1:'',
      ipt2:'',
      arr:[
        {
          name:'浪潮-王经理',
          text:'多做跌落实验，有时候后壳电池盖容易掉，可能是模具问题'
        },{
          name:'万之声-副总',
          text:'客户反馈蓝牙遥控器穿墙距离有限制，相关部门注意更换电子物料重新做样品'
        },{
          name:'Dante',
          text:'some remote controls cannot be matched successed'
        },
      ]
    }
  },
  mounted(){
  	
  },
  methods:{
    submitText () {
      let self = this;
      let obj = {
        name: self.ipt1,
        text: self.ipt2
      }
      self.arr.push(obj)
      console.log(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
  #suggest{
    .s-comment{
      overflow:hidden;
      .btn{
        float: left;
        margin-left: 20px;
      }
      .comment{
        text-align: left;
        text-indent: 5px;
        padding: 10px;
        border-bottom: 1px dotted #409eff;
        font-size: 14px;
        background-color: white;
        .s-name{
          font-weight: bold;
          background: #ffd04b;
          border-radius: 10px;
          display: inline-block;
          width: 100px;
        }
      }    
    }

  }
</style>


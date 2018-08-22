<template>
  <div style="position:relative;">
    <h2>万之声内部成员联系电话</h2>
    <div class='search'>
    	<label>搜索</label>
      <el-input
        class='ipt'
			  placeholder="姓名查询电话"
        v-model='keywords'
			  clearable
      >
			  <span class="iconfont el-input__icon" slot="prefix">&#xe608;</span>
			</el-input>
    </div>
    <!--  v-show='keywords'来控制这个div是否显示 -->
    <div class="search-content" v-show='keywords'>
      <ul>
        <li v-for='item of list' style="overflow:hidden;" @click="selectName(item)">
          <span style="float:left;margin-left:10px;">{{item.name}}</span>
          <span style="float:right;margin-right:10px;">{{item.num}}</span>
        </li>
        <!-- 没有匹配项的时候 -->
        <li v-show='hasNoData'>抱歉！没有找到匹配项</li>
      </ul>
    </div>
    <!-- <el-select
      v-model="keywords"
      placeholder="请选择"
      clearable
      filterable>
      <el-option
        v-for="(item,index) in contact"
        :key="index"
        :label="item.name"
        :value="item.num">
      </el-option> -->
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'ContactHeader',
  props:{
    contact:Object
  },
  data () {
  	return {
      keywords:'',
      timer:null,
      list:[],
      selectValue: ''
    }
  },
  mounted(){
    // console.log("sssss",this.contact)
    console.log("------------------------")
  },
  computed:{
    hasNoData(){
      return !this.list.length
    }
  },
  methods:{
    selectName(item){
      let self = this;
      self.keywords = item.name
      console.log(item)
    }
  },
  watch:{
    keywords(){
      if(this.timer){
        clearTimeout(this.timer) 
      }
      if(!this.keywords){
        this.list=[]
        return
      }//如果keywords不存在，则list为空
      this.timer=setTimeout(()=>{
        const result=[]
        for (let i in this.contact){
          this.contact[i].forEach((value)=>{
            if(value.spell.indexOf(this.keywords)>-1 ||value.name.indexOf(this.keywords)>-1){
              result.push(value)
            }
          })
        }
        this.list=result;
        console.log("aaaa",result)
      })
    }

    // 'keywords':{
    //   handle:function(val,old){
    //     const result=[]
    //     for (let i in this.contact){
    //       this.contact[i].forEach((value)=>{
    //         if(value.spell.indexOf(this.keywords)>-1 ||value.name.indexOf(this.keywords)>-1){
    //           result.push(value)
    //         }
    //       })
    //     }
    //     this.list=result;
    //   }
    // }
  }  
}
</script>

<style lang="scss" scoped>
  h2{
	  margin: 0;
	  background-color: #c2ced8;
	  padding: 20px;
	  color: #162338;
  }
  .search{
  	padding: 10px;
    text-align: right;
    padding-right: 55px;
    label{
      color: #3e2967;
    }
    .ipt{
    	width: 25%;
      span{
        color:#ffd04b;
      }
    }
  }
  .search-content{
    ul{
      margin: 0;
      list-style-type: none;
      text-align: left;
      background: #d9e4ec;
      width: 25%;
      position: absolute;
      top: 125px;
      right: 0;
      padding: 0;
      margin-right: 50px;
      border-radius: 5px;
      font-size: 12px;
      color: #162338;
      padding-left: 10px;
      li{
        padding: 10px 0;
        border-bottom: 1px dotted #7b6b6b;
      }
    }
  }
</style>


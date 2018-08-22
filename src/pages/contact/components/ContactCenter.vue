<template>
  <div>
    <div class='area' v-for="(item,key ) of contact" :key='key'>
      <h3 :ref='key'>{{key}}</h3>
      <div class='item-list'>
        <div
          class='c-list'
          v-for='(innerItem,index) of item'
          :key='innerItem.id'
        >
          {{innerItem.name}}
          <span>{{innerItem.num}}</span>
          <!-- <div id='a' style='display:none'>jfsdhl</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCenter',
  props:{
    contact:Object,
    letter:String
  },
  data () {
  	return {

    }
  },
  watch:{
    'letter': {
      handler: function (val, old) {
        let self = this;
        let el=self.$refs[val];//获取字母的h3
        // document.body.clientHeight是整个浏览器内容的高度，也就是100vh
        let topHeight = document.body.clientHeight * 0.1;//这个就是header的高度
        // document.getElementsByClassName('el-main')[0].scrollTop  指的是第三个块的scrollTop
        // el[0].offsetTop 就是当前字母h3这个块距离内容顶端的高度
        // el[0].offsetTop - topHeight就是自己想要的结果
        document.getElementsByClassName('el-main')[0].scrollTop = (el[0].offsetTop - topHeight)
      },
      deep: true
    }
  }
//   methods:{
//     handleClick(){
//       var a=document.getElementById('a');
//       console.log(a)
//       a.style.display=block
//     }
//   }  
}
</script>

<style lang="scss" scoped>
  h3{
    text-align: left;
    padding-left: 20px;
  }
  .item-list{
    padding-left: 20px;
    width: 80%;
    .c-list{
      font-size: 14px;
      padding: 10px 0px;
      margin-left: 25px;
      border-bottom: 1px dotted #c2ced8;
      text-align:left;
      &:hover{
        background:#d9e4ec;
      }
      span{
        float: right;
        padding-right: 400px    
      }
    }
  }  
</style>


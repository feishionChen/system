<template>
  <div class='center'>
    <div class="wrapper" v-for='item of imgSrc' @click='handleClick(item)'>
      <div class="img1">
        <img :src='item.src'>
      </div>
      <div class="img2"></div>
      <p>{{item.title}}</p>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCenter',
  data () {
  	return {
      imgSrc:[{
        src:'http://www.szwws.net/upload/image/20151021150741764176.jpg',
        title:'型号：WS-1618',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151021153226522652.jpg',
        title:'型号：WS-1588',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517161694039403.jpg',
        title:'型号：WS-1868',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/2016051716150643643.jpg',
        title:'型号：WS-1918',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517161314071407.jpg',
        title:'型号：WS-1928',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517161421402140.jpg',
        title:'型号：WS-688',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517161154985498.jpg',
        title:'型号：WS-1938',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517153890039003.jpg',
        title:'型号：WS-1888',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20160517153050165016.jpg',
        title:'型号：WS-1898',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/2015102215020653653.jpg',
        title:'型号：WS-1258',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022145266866686.jpg',
        title:'型号：WS-1288',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022145124782478.jpg',
        title:'型号：WS-678',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/2015102214500664664.jpg',
        title:'型号：WS-878',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/201510221448004444.jpg',
        title:'型号：WS-1678',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022144722732273.jpg',
        title:'型号：WS-1688',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022144581018101.jpg',
        title:'型号：WS-178',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022144151725172.jpg',
        title:'型号：WS-758',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022144014171417.jpg',
        title:'型号：WS-1218',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143851745174.jpg',
        title:'型号：WS-1778',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143544294429.jpg',
        title:'型号：WS-118',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143457465746.jpg',
        title:'型号：WS-1188',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143336623662.jpg',
        title:'型号：WS-598',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143192819281.jpg',
        title:'型号：WS-1358',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022143015171517.jpg',
        title:'型号：WS-1628',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142616711671.jpg',
        title:'型号：WS-988',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142411941194.jpg',
        title:'型号：WS-1378',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142343814381.jpg',
        title:'型号：WS-1238',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142156325632.jpg',
        title:'型号：WS-988',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142616711671.jpg',
        title:'型号：WS-1228',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022142076617661.jpg',
        title:'型号：WS-698',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022141828312831.jpg',
        title:'型号：WS-1578',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022141676227622.jpg',
        title:'型号：WS-1768',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022141439643964.jpg',
        title:'型号：WS-1658',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022141251925192.jpg',
        title:'型号：WS-1598',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022141024372437.jpg',
        title:'型号：WS-1338',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022140997109710.jpg',
        title:'型号：WS-1638',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022140557335733.jpg',
        title:'型号：WS-1758',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022140173357335.jpg',
        title:'型号：WS-1818',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022135727222722.jpg',
        title:'型号：WS-1608',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      },{
        src:'http://www.szwws.net/upload/image/20151022135561916191.jpg',
        title:'型号：WS-1298',
        price:'10',
        unit:'$',
        RemoteDistance:'>10m',
        use:'LED/LCD TV、HD-Set Top Box, etc.',
        comments:'销量最高，最受客户欢迎，产品质量有保障！'
      }
      ]
    }
  },
  methods:{
  	handleClick(item){
      let self=this;
      console.log(item)
      window.sessionStorage.setItem('CHANGEINFO',JSON.stringify(item))
      self.$store.dispatch("changeInfo", item)
      self.$router.push('/productInfo')
    }
  } 
}
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 16%;
    padding-bottom: 16%;
    height: 0;
    position: relative;
    background: #FFF;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #c2ced8;
    margin: 10px;
    display:inline-block;
    .img1{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 20px;
      padding: 15px;
      img{
        display:block;
        width:100%
      }
    }
    .img2{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 18px;
      display:none;
      background: #d9e4ec2e;
    }
    p{
      margin: 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 12px;
      color: #162338;
      padding: 2px;
    }
  }
  .wrapper:hover .img2{
    display:block;
  }
</style>

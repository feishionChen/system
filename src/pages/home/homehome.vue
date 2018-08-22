<template>
  <div>
    <div id="introduce">
      <h3>简介</h3>
      <p>
        深圳市万之声创新科技有限公司 是深圳市最早从事 VCD/DVD
        面板、遥控器及散热风扇生产的厂家之一， 集设计，开发，生产开摸销售于一体。
        公司始终坚持“以质为先，以人为本”的原则，严格遵照 ISO9001 ： 2000 国际质量认证标准进行管理、组织生产、着力提高全体员工的质量意识做到精工细琢，慕求用精湛的工艺，充分满足产品的需要。同时， 孜孜不倦的追求创新，成功开发出空鼠、2.4G无线遥控器（新产品）、电视、机顶盒、DVD、汽车音响遥控器、蓝牙等产品。种类齐全，产品远销南亚，南非亚及中东地区，获得了国内外众多的 VCD/DVD 经销商及消费者的晴眯。
      </p> <p>
        我们 将以精良的品质，完善的服务体系和严谨、细致、诚恳的经营态度去开拓市场，欢迎广大客商莅临、洽谈，共创美好明天。
      </p>
    </div>
    <div id='swiper'>
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.src">
            
          </el-carousel-item>
        </el-carousel>
      </template>      
    </div>
    <div id="footer">
      <p>版权所有© 2010 深圳市万之声创新科技有限公司</p>
      <p>电话：0755-23492455 传真：0755-23492475</p>
      <p class='email'>邮箱：SZ_WZS@126.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
      imgList:[{
        src:'http://www.szwws.net/upload/image/20151023150288308830.jpg',
        id:'0001'
      },{
        src:'http://www.szwws.net/upload/image/20151027174195679567.jpg',
        id:'0002'
      },{
        src:'http://www.szwws.net/upload/image/20151022183693029302.jpg',
        id:'0003'
      },{
        src:'http://www.szwws.net/upload/image/20150810163060186018.jpg',
        id:'0004'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  #introduce{
    background: #d9e4ec;
    h3{
      text-align: left;
      padding-left: 50px;
    }
    p{
      font-size: 14px;
      padding: 10px;
      text-indent: 28px;
      width: 90%;
      margin: auto;
      text-align: left;
    }
  }
  #footer{
    background: #0f1a2b;
    color: #fff;
    font-size: 12px;
    padding: 10px;
    text-align: left;
    padding-left: 50px;
    margin-top: 15px;
    .email{
      margin-bottom:0;
    }
  }
</style>

<template>
  <div>
    接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>接口演示<br/>
  </div>
</template>

<script>
export default {
  data () {
  	return {
      showapi_appid:"68470",
      showapi_sign:"f73d20910c094dd1a5631fd6d3c5e2a5",
    }
  },
  mounted(){
    let self = this;
    self.ajaxRequest()
  },
  methods: {
    ajaxRequest () {//这是get请求
      let self = this;
      let url = "http://route.showapi.com/119-42?date=1027&showapi_appid="+self.showapi_appid+"&showapi_sign="+self.showapi_sign
      self.axios.get(url)
      .then(function (res) {
        console.log(res)
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>

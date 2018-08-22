<template>
  <div>
    <v-charts :id="id" :option="option"></v-charts>
    <v-charts :id="id1" :option="option1"></v-charts>
    <v-charts :id="id2" :option="option2"></v-charts>
  </div>
</template>

<script>
// 导入chart组件
import VCharts from '@/components/Vcharts.vue'
// 导入chart组件模拟数据
import option from '@/chart-options/option'
export default {
  name: 'Sales',
  components: {
    VCharts
  },
  data () {
  	return {
      id: 'test',
      id1: 'test1',
			id2: 'test2',
      option: option.aaa,
      option1: option.bbb,
      option2: option.ccc,
    }
  }  
}
</script>

<style>
#test, {
  width: 800px;
  height: 400px;
  margin: 40px auto;
}
#test1,#test2{
  float: left;
  width: 500px;
  height: 400px;
  margin: 40px auto;
  margin-left: 50px;
}
</style>

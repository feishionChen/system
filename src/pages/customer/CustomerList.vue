<template>
  <div>
  <el-tabs type="border-card">
	  <el-tab-pane label="用户管理">
			<el-table
		    :data="tableData1"
		    stripe
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="num"
		      label="客户编号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="company"
		      label="公司名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="header"
		      label="公司名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="tel"
		      label="联系电话">
		    </el-table-column>
		  </el-table>
	  </el-tab-pane>
	  <el-tab-pane label="配置管理">
			<el-table
		    :data="tableData2"
		    stripe
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="num"
		      label="Num"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="company"
		      label="Company"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="header"
		      label="Header"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="tel"
		      label="Email">
		    </el-table-column>
		  </el-table>
	  </el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data () {
  	return {
  		tableData1: [{
        num: 'Q688',
        company: '清华同方',
        header: '刘经理',
        tel:'13528789696'
      },{
        num: 'G060',
        company: '高创',
        header: '王小姐',
        tel:'13528789696'
      },{
        num: 'K358',
        company: '康冠',
        header: '黄经理',
        tel:'13528789696'
      },{
        num: 'L960',
        company: '浪潮',
        header: '王经理',
        tel:'13528789696'
      },{
        num: 'G584',
        company: '高斯贝尔',
        header: '陈经理',
        tel:'13528789696'
      },{
        num: 'C578',
        company: '长虹',
        header: '于小姐',
        tel:'13528789696'
      }],
      tableData2: [{
        num: 'D568',
        company: '清华同方',
        header: 'Dante',
        tel:'13528789696'
      },{
        num: 'A584',
        company: '高创',
        header: 'Alexandre',
        tel:'13528789696'
      },{
        num: 'Y528',
        company: '康冠',
        header: 'enya',
        tel:'13528789696'
      },{
        num: 'W336',
        company: '浪潮',
        header: 'Wendy',
        tel:'13528789696'
      },{
        num: 'T584',
        company: '高斯贝尔',
        header: 'tina',
        tel:'13528789696'
      },{
        num: 'M433',
        company: '长虹',
        header: 'Alide',
        tel:'13528789696'
      }]
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>


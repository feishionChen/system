<template>
  <div>
    <el-pagination
	    :page-size="paginationObj.pageSize"
	    :current-page="paginationObj.currentPage"
	    layout="prev, pager, next, jumper"
	    @current-change="changeCur"
	    :total="paginationObj.totalCount">
		</el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
  	return {
  		paginationObj:{
  			pageSize: 2,
		    currentPage: 1,
		    totalCount: 50
  		},
  		content:''
    }
  },
  methods:{
  	changeCur(val){
  		console.log(val)
  		let self=this;
  		let url= '/joke/content/text.php?key=cbe43344e1b4f236a0e61f788567c1f4&page='+val+'&pagesize='+self.paginationObj.pageSize
  		self.axios.get(url)
  		.then(function(response){
  			console.log(response)

  		})
  		.catch(function(error){

  		})
  	}
  } 
}
</script>

<style lang="scss" scoped>

</style>


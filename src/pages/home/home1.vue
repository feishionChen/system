<template>
	<div>
		<el-tabs  :tab-position="tabPosition" v-model="getType" type="card" @tab-click="handleClick">
<!-- 			<el-tab-pane label="短篇" name="dp">短篇</el-tab-pane>
	    <el-tab-pane label="长篇" name="cp">长篇</el-tab-pane>
	    <el-tab-pane label="校园" name="xy">校园</el-tab-pane>
	    <el-tab-pane label="医院" name="yy">医院</el-tab-pane> -->
			<template v-for="item of tabList">
		    <el-tab-pane :label="item.name" :name="item.type">
		    	<template v-for="list of dataList">
						<div class="s-border-box">{{list.desc}}</div>
					</template>
		    </el-tab-pane>
			</template>
	  </el-tabs>
<!-- 	  <template v-for="list of dataList">
			<div class="s-border-box">{{list.desc}}</div>
		</template> -->
		<el-pagination
	    layout="prev, pager, next"
	    :total="allP"
	    @current-change="currentChange">
  	</el-pagination>
	</div>
</template>
<script>
export default {
	data () {
		return {
			appid: '68470',
			appkey: 'f73d20910c094dd1a5631fd6d3c5e2a5',
			getType: 'cp',
			pageSize: 1,
			allP: 10,
			dataList: [],
			tabPosition:'left',
			tabList: [
				{
					type: 'dp',
					name: '短篇'
				},{
					type: 'cp',
					name: '长篇'
				},{
					type: 'xy',
					name: '校园'
				},{
					type: 'yy',
					name: '医院'
				}
			]
		}
	},
	mounted () {
		let self = this;
		self.queryYaoPin()
	},
	methods: {
		queryYaoPin () {
			let self = this;
			// let url = 'http://route.showapi.com/955-1?showapi_appid='+self.appid+'&showapi_sign='+self.appkey+'&type='+self.getType+'&page='+self.pageSize;
			let url =`http://route.showapi.com/955-1?showapi_appid=${self.appid}&showapi_sign=${self.appkey}&type=${self.getType}&page=${self.pageSize}`

			self.axios.get(url)
			.then((res) => {
				let data = res.data.showapi_res_body.pagebean
				self.allP = parseInt(data.allPages) * parseInt(data.maxResult) //获取总页数
				self.dataList = data.contentlist //获取当前数据
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
		},
		currentChange (value) {
			let self = this;
			self.pageSize = value
			self.queryYaoPin()
			console.log("当前页数为"+value)
		},
		handleClick (tab, event) {
			let self = this;
			self.queryYaoPin()
			console.log(this.getType)
		}
	}
}
</script>
<style scoped>
.s-border-box{
	padding-bottom: 20px;
	box-sizing: border-box;
	border-bottom: 1px solid red;
	text-align: left;
}
</style>
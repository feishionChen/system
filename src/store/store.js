import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  list:[],
  isCollapse: false,
  obj1:{
  	src:'',
  	title:'',
  	unit:'',
  	price:'',
  	RemoteDistance:'',
  	use:'',
  	comments:''
  }
}

const actions = {
	changeList (ctx, str) {
	  ctx.commit('changeList',str)
	},
	controlShow(ctx,boo){
		ctx.commit('controlShow',boo)
	},
	changeInfo(ctx,obj){
	ctx.commit('changeInfo',obj)
	},
	// open(ctx,false){
	// ctx.commit('open',false)
	// }
}

const mutations={
  changeList(state, str){
  	// console.log(str)
    state.list = str;
  },
  controlShow(ctx, boo){
		state.isCollapse = boo
	},
	changeInfo(ctx, obj){
		state.obj1 = obj;
	},
	// open(ctx,false){
	// 	state.isCollapse=false
	// }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
});
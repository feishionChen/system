<template>
  <div>
  	<product-header></product-header>
  	<product-center></product-center>
  	<product-footer></product-footer>
  </div>
</template>

<script>
import ProductHeader from './components/ProductHeader'
import ProductCenter from './components/ProductCenter'
import ProductFooter from './components/ProductFooter'
export default {
  name: 'Product',
  components:{
  	ProductHeader,
  	ProductCenter,
  	ProductFooter
  },
  data () {
  	return {

    }
  },
  methods:{
  	
  } 
}
</script>

<style lang="scss" scoped>

</style>

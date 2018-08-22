<template>
  <div id="one">
    <contact-header :contact='contact'></contact-header>
    <contact-center :contact='contact' :letter='letter'></contact-center>
    <contact-right 
      :contact='contact'
      @change='handleChange'
    ></contact-right>
  </div>
</template>

<script>
import ContactHeader from './components/ContactHeader'
import ContactCenter from './components/ContactCenter'
import ContactRight from './components/ContactRight'
export default {
  name: 'Contact',
  components:{
  	ContactHeader,
  	ContactCenter,
    ContactRight
  },
  data () {
  	return {
      contact:{},
      contactSelect:[],
      letter:" "
    }
  },
  created(){
  	let self=this;
  	self.ajaxRequest()
  },  
  methods:{
    ajaxRequest(){
      let self=this;
      self.axios.get('/api/contact.json')
      .then(function(response){
        let data=response.data.data.list
        // let arr = []
        self.contact=data
        // console.log(self.contact)
        // for(let key in data){
        //   data[key].forEach((item, index)=>{
        //     self.$set(item, 'label', key)
        //     arr.push(item)
        //   })
        // }
        // self.contactSelect=arr
        // console.log(arr)
      })
      .catch(function(error){
        console.log('error',error)
      })
    },
    handleChange(letter){
      this.letter=letter;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>


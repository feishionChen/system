<template>
  <div class='alpha'>
    <ul>
      <li 
        v-for='(item,key) of contact' 
        :key='key'
        @click='handleLetterClick'
      >
        {{key}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactRight',
  props:{
    contact:Object
  },
  data () {
  	return {
    }
  },
  methods:{
    handleLetterClick(e){
      let self=this;
      self.$emit('change',e.target.innerText)
    }    
  }

}
</script>

<style lang="scss" scoped>
  .alpha{
    position: fixed;
    right: 30px;
    top: 10vh;
    ul{
      height: 90vh;
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      cursor: pointer;
      li{
        padding: 2px;
        color: #4a6590;
        &:hover{
          color:#efb71b;
          font-size:14px;
        }
      }
    }
  }
</style>


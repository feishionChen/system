<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
  $height:100%;
  html,body,#app{
  	height:$height;
  }
  body{
    margin:0;
    padding:0;
  }
</style>

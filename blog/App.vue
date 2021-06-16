<template>
<div>
<add-blog></add-blog>
</div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'app',
  data () {
    return {
  
    }
  },
  components:{
    'add-blog':addBlog,
  }
}
</script>

<style>
h1{
  color : red;
}
body{
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

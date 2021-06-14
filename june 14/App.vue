<template>
<div class="container">
  <Header title="Task Tracker" />
  <Tasks :tasks="tasks"/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data(){
    return{
      tasks:[]
    }
  },
  created(){
    this.tasks=[
      {
        id:1,
        text:'Meeting in Googlemeet',
        day:'June 15th',
        reminder: true,
      },
      {
        id:3,
        text:'Hospital visit',
        day:'June 16th',
        reminder: true,
      },
      {
        id:3,
        text:'Grociers',
        day:'June 18th',
        reminder: false,
      }
    ]
  }
}
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Poppins',sans-serif;
}

.container{
  max-width: 500px;
  margin: 30px;
  overflow: auto;
  min-height: 300px;
  border:1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn{
  display: inline-block;
  background:#000;
  color:#fff;
  border:none;
  padding: 10px 20px;
  margin:5px;
  border-radius:5px;
  cursor:pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>

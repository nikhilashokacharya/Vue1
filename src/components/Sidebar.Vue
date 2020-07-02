<template>
  <AppVue class="app"/>
</template>

<script>
import AppVue from "../App.vue";

// import AppVue from "../App.vue";


export default {
name:"Sidebar",
data(){
    return{
        
    },

},
components :{
    AppVue
}
}
</script>

<style>
.app{
height: 80%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  padding-top: 5px;
  /* padding-bottom: 5px; */
  border: 2px solid grey;
}
</style>
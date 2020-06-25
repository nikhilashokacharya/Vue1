<template>
  <div id="app">
   <TreeBrowser 
   :node="root"
   @onClick="nodeWasClicked"
   />
   
  <!-- <Prop 
  :node="root"
   @onClick="nodeWasClicked"
   /> -->
  </div>
</template>

<script>
import TreeBrowser from './components/TreeBrowser.vue'
// import Prop from './components/Prop.vue'
export default {
  name: 'App',
  data(){
    return{
      root:{
        name: 'VBA Project',
        children:[
          {
            name:'Forms',
            children:[
              {
                name:'UserForm1',
              },{
                name:'UserForm2',
              }
            ]
          }
        ]
      }
    }
  }, methods:{
   nodeWasClicked(node){
     alert(node.name);
    
     }
   }  
  ,
  components: {
    TreeBrowser,
    // Prop
 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

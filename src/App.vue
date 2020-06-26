<template>
  <div id="app">
   <TreeBrowser 
   :node="root"
   @onClick="nodeWasClicked"
   />
   
  <Prop 
  :userForm="selectedUserForm"
  v-if="selected"
   />
  </div>
</template>

<script>
import TreeBrowser from './components/TreeBrowser.vue'
import Prop from './components/Prop.vue'
export default {
  name: 'App',
  data(){
    return{
      selected:false,
      selectedUserForm:{},
      root:{
        name: 'VBA Project',
        children:[
          {
            name:'Forms',
            children:[
              {
                name:'UserForm1',
                id: "1",
                controls:{
                  label1:{
                    id: 1,
                    type: "label",
                    name: "label1",
                    properties: {
                name: "Property1",
                value: "inclined",
                top: 12,
                left: 34,
                width: 100,
                height: 150,
                color: "red"
                  }
                },
            
            label2:{
            
              id: 2,
              type: "label",
              name: "label2",
              properties: {
                name: "Property2",
                value: "vertical",
                top: 12,
                left: 34,
                width: 100,
                height: 150,
                color: "red"
              }
            }
            }
        }
              ,{
                name:'UserForm2',
                id:"2"
              }
            ]
          }
        ]
      }
    }
  }, methods:{
   nodeWasClicked(node){
    //  alert(node.id);
    this.selected=true,
     this.selectedUserForm=node;
    console.log(this.selectedUserForm);
     }

   }  
  ,
  components: {
    TreeBrowser,
    Prop
 
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
//  controls: [
            // {
            //   id: 1,
            //   type: "label",
            //   name: "label1",
            //   properties: {
            //     name: "",
            //     value: "",
            //     top: 12,
            //     left: 34,
            //     width: 100,
            //     height: 150,
            //     color: "red"
            //   }
            // },
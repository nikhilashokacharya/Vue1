<template>
  <div class="form-group">
    <label for="userForm">Select</label>
    <select class="form-control" name="userForm" id="userForm" v-model="userForm">
       <!-- <option v-for:="userForm1 in props" v-bind:value="props">{{userForm1.name}}</option> -->
              <option v-bind:value="userForm" >{{userForm.name}}</option>
              <option  v-bind:value="userForm.controls.label1" >{{userForm.controls.label1.name}}</option>
              <option  v-bind:value="userForm" >{{userForm.controls.label2.name}}</option>
    </select> 
    {{userForm}}
    <hr>
    {{userForm.controls.label1}}
    <!-- <vselect v-model="selected" :option="options" :placement="placement"></vselect> -->
    <table style="width:30%" class="table">
  <caption>Properties</caption>
  <tr>
    <th >Caption</th>
    <td >{{userForm.name}}</td>
  </tr>
  <tr>
    <th>Id</th>
    <td>{{userForm.id}}</td>
  </tr>
 </table>
  </div>
</template>
<script>
// import vSelect from 'vselect-component'
// Vue.use(vSelect);
export default {
  
  name: "Prop",
  props: ["userForm"],
  components: {

  },
  methods: {
    
  },
  created(){
    // console.log(userForm);
  },  data(){
    return{
      selected:false,
      selectedUserForm:{},
      // selectedLabel1:[userForm.controls.label1],
      display:["userForm"],
      root:{
        name: 'VBA Project',
        children:[
          {
            name:'Forms',
            children:[
              {
                name:'UserForm1',
                id: "1",
             controls: [
            {
              id: 1,
              type: "label",
              name: "label1",
              properties: {
                name: "",
                value: "",
                top: 12,
                left: 34,
                width: 100,
                height: 150,
                color: "red"
              }
            },
            {
              id: 2,
              type: "label",
              name: "label2",
              properties: {
                name: "",
                value: "",
                top: 12,
                left: 34,
                width: 100,
                height: 150,
                color: "red"
              }
            }
          ]
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
  // }, 
  // methods:{
  //  nodeWasClicked(node){
  //   //  alert(node.id);
  //   this.selected=true,
  //    this.selectedUserForm=node;
  //   console.log(this.selectedUserForm);
  //    }

   }
   };

</script>

<style scoped>
.node {
  text-align: left;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  
  text-align: left;
}
select {
  
  text-align: left;
}
</style>
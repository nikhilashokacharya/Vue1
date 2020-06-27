<template>
  <div class="form-group">
    <label for="userForm">Select</label>
    <br />
    <select class="form-control" name="userForm" id="userForm" v-model="selectedUserForm">
      <!-- <option v-for:="userForm1 in props" v-bind:value="props">{{userForm1.name}}</option> -->
      <option v-bind:value="userForm">{{userForm.name}}</option>
      <option
        v-bind:value="userForm.controls[0]"
        v-if="userForm.controls[0]"
      >{{userForm.controls[0].name}}</option>
      <option
        v-bind:value="userForm.controls[1]"
        v-if="userForm.controls[1]"
      >{{userForm.controls[1].name}}</option>
      <!-- <option  v-bind:value="userForm.controls.label2" v-if="userForm.controls" >{{userForm.controls.label2.name}}</option> -->
    </select>
    <br />
    <br />
    <table class="table">
      <caption>Properties</caption>
      <template v-if="selectedUserForm.name=='UserForm'">
        <tr v-for="(item,left) in selectedUserForm" v-bind:key="item.name">
          <template v-if="left=='innerStyle'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:value="item1.value">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else-if="left=='attributes'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>

          <template v-else-if="left=='controls'" hidden>
            <!-- <template v-for="(item1,left1) in item" hidden>
      <tr v-bind:key="item1.name" hidden>
    <th v-bind:key="item1.name">{{left1}}</th>
    <td v-bind:key="item1.name">{{item1}}</td>
    </tr>
            </template>-->
          </template>
          <template v-else-if="left=='style'" hidden></template>

          <template v-else>
            <tr>
              <th>{{left}}</th>
              <td>
                <input type="text" v-model="selectedUserForm[left]" />
              </td>
            </tr>
          </template>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item,left) in selectedUserForm" v-bind:key="item.name">
          <template v-if="left=='style'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else-if="left=='attributes'">
            <template v-for="(item1,left1) in item">
              <tr v-bind:key="item1.name">
                <th v-bind:key="item1.name">{{left1}}</th>
                <td v-bind:key="item1.name">
                  <input type="text" v-model="item[left1]" />
                </td>
              </tr>
            </template>
          </template>
          <template v-else>
            <tr>
              <th>{{left}}</th>
              <td>
                <input type="text" v-model="selectedUserForm[left]" />
              </td>
            </tr>
          </template>
        </tr>
      </template>
      <!-- </div> -->
    </table>
  </div>
</template>
<script>
// import vSelect from 'vselect-component'
// Vue.use(vSelect);
export default {
  name: "Prop",
  props: ["userForm"],
  components: {},
  methods: {},
  created() {
    // console.log(userForm);
  },
  data() {
    return {
      selected: false,
      selectedUserForm: {},
      // selectedLabel1:[userForm.controls.label1],
      display: ["userForm"]
    };
  }
};
</script>

<style scoped>
.node {
  text-align: left;
}
table,
th,
td {
  width: 50%;
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
}
tr {
  width: 50%;
}
select,
label {
  float: left;
}
</style>
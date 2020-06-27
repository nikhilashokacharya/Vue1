<template>
  <div class="form-group">
    <label for="userForm"></label>
    <select class="form-control" name="userForm" id="userForm" v-model="selectedUserForm">
      <!-- <option v-for:="userForm1 in props" v-bind:value="props">{{userForm1.name}}</option> -->
      <option v-bind:value="userForm">{{userForm.name}}</option>
      <option
        v-for="(control,key) in userForm.controls"
        v-bind:value="control"
        :key="key"
      >{{control.name}}</option>
    </select>
    <br />
    <br />
    <hr />
    <table class="table">
      <caption style="float:left">Properties</caption>
      <template v-if="selectedUserForm.id">
        <tr v-for="(item,left) in selectedUserForm" v-bind:key="item.name">
          <template v-if="left=='inner'">
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

          <template v-else-if="left=='controls'" hidden></template>
          <template v-else-if="left=='headerText'" hidden></template>
          <template v-else-if="left=='innerHeaderText'" hidden></template>
          <template v-else-if="left=='closeButton'" hidden></template>
          <template v-else-if="left=='closeInnerButton'" hidden></template>
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
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 50%;
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
}
th {
  width: 120%;
  padding-top: 1px;
  padding-right: 2px;
  padding-bottom: 1px;
  padding-left: 2px;
}
/* tr {
  width: 50%;
} */
select {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
  border: 6px solid grey;
}
label {
  float: left;
}
</style>
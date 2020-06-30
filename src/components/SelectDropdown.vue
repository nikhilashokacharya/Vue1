<template>
<div class="form-group">
  <select-dropdown :userForm="userForms" v-if="selected" />
    <label for="userForm"></label>
    <select class="form-control" name="userForm" id="userForm" v-model="selectedUserForm">
      <option v-bind:value="userForm">{{userForm.name}}</option>
      <!-- <option ></option> -->
    </select>
    <UserFormTable />
</div>
</template>

<script>
import userFormTable from "./userFormTable.vue"
export default {
  name: "SelectDropdown",
  props: ["userForm"],
  components: {
     userFormTable
  },
  data() {
    return {
      selected : true,
      selectedUserForm: {},
      display:["userForm"]
    }
  }
};

</script>

<style scoped>
</style>
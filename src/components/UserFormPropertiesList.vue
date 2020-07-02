<template>
  <div class="form-group">
    <!-- <select-dropdown :userForm="userForms" v-if="selected" /> -->
    <label for="userForm"></label>
    <select class="form-control" name="userForm" id="userForm">
      <option>
        <b>UserForm1</b> UserForm
      </option>
      <option>
        <b>Label1</b> Label
      </option>
      <option>
        <b>CommandButton1</b> CommandButton
      </option>
    </select>
    <UserFormTable />
  </div>
</template>

<script>
import UserFormTable from "./UserFormTable.vue";
export default {
  name: "SelectDropdown",
  props: ["userForm"],
  components: {
    UserFormTable
  },
  data() {
    return {
      selected: true,
      selectedUserForm: {},
      display: ["userForm"]
    };
  }
};
</script>

<style scoped>
</style>